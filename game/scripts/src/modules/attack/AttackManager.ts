// import { BaseModifier, registerModifier } from '../../utils/dota_ts_adapter';
import { reloadable } from '../../utils/tstl-utils';

@reloadable
export class CAttackDataManager {
    attack_data: Map<number, UnitEventAttackDamageData> = new Map<number, UnitEventAttackDamageData>();
    trigger_attack_data: Map<number, UnitEventAttackDamageData> = new Map<number, UnitEventAttackDamageData>();
    trigger_attack_record: number = -1;
    attack_thinker: CDOTA_BaseNPC;
    constructor() {
        this.attack_thinker = CreateModifierThinker(null, null, 'modifier_attack_data_thinker', {}, Vector(0, 0, 0), DotaTeam.NEUTRALS, false);
    }

    //实际是使用OnAttackRecord 充当OnAttackStart
    public OnAttackStart(event: ModifierAttackEvent): void {
        // print('CAttack OnAttackRecord', event.record);
        const target = event.target;
        const attacker = event.attacker;
        // DebugPrint('CAttack OnAttackRecord', attacker.GetAverageTrueAttackDamage(null));
        // DebugPrint('CAttack GetAttackDamage', attacker.GetAttackDamage());
        const crit_obj = this._CheckCritOnAttack(attacker, target);
        // 攻击开始就算伤害了
        const dmgTable: DamageTable = {
            attacker: attacker,
            victim: target,
            damage: attacker.GetAverageTrueAttackDamage(null),
            damageProperty: DamageProperty.Attack,
            damageType: DamageType.Physical,
            damageFlags: crit_obj ? DamageFlags.AttackCrit : undefined,
            crit_obj: crit_obj,
        };
        // 初始化攻击数据
        const attack_data: UnitEventAttackDamageData = {
            damageTable: dmgTable,
            projectile: attacker.GetRangedProjectileName(),
            projectile_speed: attacker.GetProjectileSpeed(),
            record: event.record,
        };

        Dispatcher.Send('ON_ATTACK_START_TARGET', target.entindex(), attack_data);
        Dispatcher.Send('ON_ATTACK_START_ATTACKER', attacker.entindex(), attack_data);
        this.attack_data.set(event.record, attack_data);

        // crit_obj && attacker.StartGestureWithFadeAndPlaybackRate(GameActivity.DOTA_ATTACK_EVENT, 0.0, 0.0, attacker.GetDisplayAttackSpeed() / 100);
    }

    public OnAttack(event: ModifierAttackEvent): void {
        // print('CAttack OnAttack1', event.record);
        const attack_data = this.attack_data.get(event.record);
        CAttackData.PerformAttack(event.attacker, event.target, {
            use_projectile: event.attacker.IsRangedAttacker(),
            use_effect: true,
            is_trigger: false,
            record: [event.record, attack_data],
        });
    }

    public OnAttackFinished(event: ModifierAttackEvent): void {
        // print('CAttack OnAttackFinished', event.record);
        //删除记录数据
        this.attack_data.delete(event.record);
        // event.attacker.FadeGesture(GameActivity.DOTA_ATTACK_EVENT);
    }

    //实际所有原版攻击都会落空 初定触发的是OnAttackFail
    // public OnAttackFail(event: ModifierAttackEvent): void {
    //     print('CAttack OnAttackFail', event.record);
    // }

    public OnAttackCancelled(event: ModifierAttackEvent): void {
        // print('CAttack OnAttackCancelled', event.record);
        //删除记录数据
        this.attack_data.delete(event.record);
        // event.attacker.FadeGesture(GameActivity.DOTA_ATTACK_EVENT);
    }

    /** 攻击出手时判断暴击。返回触发了的暴击对象 */
    _CheckCritOnAttack(attacker: CDOTA_BaseNPC, attacking_target: CDOTA_BaseNPC): CritData | undefined {
        print(attacker._crits_data_calls.length);

        if (attacker._crits_data_calls.length == 0) return;
        // 目标允许
        if (attacking_target.IsWard() || attacking_target.IsBuilding() || !attacker.IsEnemy(attacking_target)) {
            return;
        }
        let trigger_crit: CritData;

        for (const crit of attacker._crits_data_calls) {
            const { crit_chance, crit_rate } = crit;
            if (Random.RollPercentage(crit_chance, attacker, 'crit')) {
                trigger_crit = trigger_crit ?? crit;
                // 触发多个暴击，取倍率最高的那个
                trigger_crit = crit_rate > trigger_crit.crit_rate ? crit : trigger_crit;
            }
        }
        // attacker._last_attack_trigger_crit = trigger_crit;
        return trigger_crit;
    }

    /** 攻击命中判断躲避。触发躲避事件 */
    _CheckMissOnAttackLanded(attacker: CDOTA_BaseNPC, target: CDOTA_BaseNPC, never_miss: boolean): boolean {
        // 判断丢失
        let lose_chance = 0;

        // 如果攻击者不能丢失或目标不能躲避
        if (attacker.IsUnableToMiss() || target.IsEvadeDisabled() || never_miss) {
            lose_chance = 0;
        } else {
            const evasion = target.GetEvasionChance() || 0; // 确保为数值类型
            const blind = attacker.GetBlindChance() || 0; // 确保为数值类型
            const accuracy = attacker.GetAccuracyChance() || 0; // 确保为数值类型
            // 计算总回避率
            const totalEvasion = 1 - (1 - evasion / 100) * (1 - blind / 100);
            // 计算总命中率
            const totalAccuracy = 1 - (1 - accuracy / 100);
            // 计算有效回避率
            const effectiveEvadeChance = totalEvasion;
            // 计算最终击中率
            const finalHitChance = 1 - effectiveEvadeChance * (1 - totalAccuracy);
            lose_chance = (1 - finalHitChance) * 100;

            // 判断远程攻击者是否在高地上
            if (attacker.IsRangedAttacker()) {
                const attacker_high = GetGroundHeight(attacker.GetAbsOrigin(), attacker);
                const target_high = GetGroundHeight(target.GetAbsOrigin(), target);
                if (attacker_high < target_high) {
                    lose_chance += 25;
                }
            }
        }
        return Random.RollPercentage(lose_chance, target, 'miss');
    }

    public PerformAttack(
        attacker: CDOTA_BaseNPC,
        target: CDOTA_BaseNPC,
        extra_pamams?: {
            /** 不会丢失 */
            never_miss?: boolean;

            /** 使用攻击特效 */
            use_effect?: boolean;
            /** 使用弹道模型（true则是一次远程攻击，为空则是近战攻击） */
            use_projectile?: boolean;
            /** 是否是一次触发的攻击(非正常流程的) */
            is_trigger?: boolean;
            /**如果有记录，那么会使用提前计算好的数据 */
            record?: [id: number, attack_data: UnitEventAttackDamageData];
            /** 是否禁用分裂 */
            disable_celled?: boolean;
            /** 自定义数据 */
            extra_data?: DamageTableExtraData;
        }
    ) {
        const { never_miss, use_effect, use_projectile } = extra_pamams ?? {};
        extra_pamams.extra_data = extra_pamams.extra_data ?? {};
        // 攻击发射时，计算暴击、伤害、丢失

        // 获取伤害
        const attack_damage = attacker.GetAverageTrueAttackDamage(null);
        const damage_before: number = attack_damage;
        let illusion_cirt_show: number;
        // 幻象攻击修正
        // if (attacker.IsHero() && attacker.IsIllusion()) {
        //     illusion_cirt_show = attack_damage;
        //     // 幻象不享受绿字攻击
        //     const illusion_attack_fixed = attacker.getdamage() * (attacker.GetIllusionDamageOutputPercent() / 100);
        //     attack_damage = illusion_attack_fixed;
        //     damage_before = attack_damage;
        // }
        // 如果没有预先数据 那么就原地创建
        const [record, attackdata] = extra_pamams.record ?? [undefined, undefined];
        let attack_data = attackdata;
        let dmgTable = attackdata?.damageTable;
        if (!record || !attack_data || !dmgTable) {
            const crit_obj = this._CheckCritOnAttack(attacker, target);
            dmgTable = {
                attacker: attacker,
                victim: target,
                damage: attack_damage,
                damageProperty: DamageProperty.Attack,
                damageType: DamageType.Physical,
                damageFlags: (crit_obj ? DamageFlags.AttackCrit : 0) + (extra_pamams.disable_celled ? DamageFlags.DisableCelled : 0),
                crit_obj: crit_obj,
                extra_data: extra_pamams.extra_data,
            };

            attack_data = {
                damageTable: dmgTable,
                projectile: attacker.GetRangedProjectileName(),
                projectile_speed: attacker.GetProjectileSpeed(),
                record: record,
            };
        }

        if (dmgTable.crit_obj) {
            const { crit_chance, crit_rate } = dmgTable.crit_obj;
            dmgTable.damage = dmgTable.damage * (crit_rate / 100);
            // if (illusion_cirt_show) {
            //     // 根据缩放值，还原等同于本体的伤害，不会被中途的事件所影响
            //     // 否则一旦在中途事件修改了攻击力，且事件能同时作用于幻想和本体，那么幻象的暴击就一定和本体暴击不相等
            //     illusion_cirt_show *= scaled_rate;
            //     extra_pamams.extra_data.illusion_crit_show_damage = illusion_cirt_show * (crit_rate / 100);
            // }
        }
        // else {
        //     const record = this.trigger_attack_record++;
        //     this.trigger_attack_data.set(record, attack_data);
        // }

        const _fun_attack_effect = (attacker: CDOTA_BaseNPC, target: CDOTA_BaseNPC, use_effect?: boolean): void => {
            if (!this._CheckMissOnAttackLanded(attacker, target, never_miss || attack_data.never_miss)) {
                // print('CAttack OnAttackLanded', extra_pamams.record[0]);
                if (use_effect) {
                    Dispatcher.Send('ON_ATTACK_LANDED_TARGET', target.entindex(), attack_data);
                    Dispatcher.Send('ON_ATTACK_LANDED_ATTACKER', attacker.entindex(), attack_data);
                }
                if (attack_data.damageTable.crit_obj?.on_crit) {
                    attack_data.damageTable.crit_obj.on_crit(attack_data.damageTable);
                }
                AddDamage(attack_data.damageTable);
                // const damage_pfx = 'particles/generic_gameplay/damage_flash.vpcf';
                // const pfx = ParticleManager.CreateParticle(damage_pfx, ParticleAttachment.CUSTOMORIGIN, target);
                // ParticleManager.SetParticleControlEnt(pfx, 0, target, ParticleAttachment.POINT_FOLLOW, 'attach_hitloc', target.GetAbsOrigin(), true);
                // ParticleManager.ReleaseParticleIndex(pfx);

                // const hit_pfx = 'particles/generic_gameplay/damage_flash.vpcf';
                // const pfx2 = ParticleManager.CreateParticle(hit_pfx, ParticleAttachment.CUSTOMORIGIN, target);
                // ParticleManager.SetParticleControlEnt(pfx2, 0, target, ParticleAttachment.POINT_FOLLOW, 'attach_hitloc', target.GetAbsOrigin(), true);
                // ParticleManager.ReleaseParticleIndex(pfx2);
            } else {
                PopupMiss(target, attacker.GetPlayerOwner());
                PopupEvasion(target, target.GetPlayerOwner());
                Dispatcher.Send('ON_ATTACK_FAIL_BOTH', target.entindex(), attack_data);
                Dispatcher.Send('ON_ATTACK_FAIL_BOTH', attacker.entindex(), attack_data);
            }
        };

        // 如果是近战攻击，那么发射后立刻命中。远程攻击则在投射物的命中中回调
        if (!use_projectile) {
            _fun_attack_effect(attacker, target, use_effect);
        } else {
            CProjectileManager.CreateTrackingProjectile({
                target: target,
                moveSpeed: attack_data.projectile_speed ?? attacker.GetProjectileSpeed(),
                source: attacker,
                effectName: attack_data.projectile ?? attacker.GetRangedProjectileName(),
                _is_attack: true,
                OnHitUnit: () => {
                    _fun_attack_effect(attacker, target, use_effect);
                },
            });
        }
    }
}

declare global {
    var CAttackData: CAttackDataManager;
}
@registerModifier()
export class modifier_attack_data_thinker extends BaseModifier {
    IsHidden(): boolean {
        return false;
    }

    IsDebuff(): boolean {
        return true;
    }

    DeclareFunctions(): ModifierFunction[] {
        return [
            ModifierFunction.ON_ATTACK_RECORD,
            ModifierFunction.ON_ATTACK_CANCELLED,
            ModifierFunction.ON_ATTACK,
            ModifierFunction.ON_ATTACK_FINISHED,
        ];
    }

    OnAttackRecord(event: ModifierAttackEvent): void {
        if (!IsServer()) return;
        CAttackData.OnAttackStart(event);
    }

    OnAttack(event: ModifierAttackEvent): void {
        if (!IsServer()) return;
        CAttackData.OnAttack(event);
    }

    OnAttackCancelled(event: ModifierAttackEvent): void {
        if (!IsServer()) return;
        CAttackData.OnAttackCancelled(event);
    }

    OnAttackFinished(event: ModifierAttackEvent): void {
        if (!IsServer()) return;
        CAttackData.OnAttackFinished(event);
    }
}
@registerModifier()
export class modifier_attack_data_miss extends BaseModifier {
    IsHidden(): boolean {
        return true;
    }

    IsDebuff(): boolean {
        return true;
    }

    IsPurgable(): boolean {
        return false;
    }

    IsPurgeException(): boolean {
        return false;
    }

    RemoveOnDeath(): boolean {
        return false;
    }

    DeclareFunctions(): modifierfunction[] {
        return [ModifierFunction.MISS_PERCENTAGE];
    }

    GetModifierMiss_Percentage(): number {
        return 1000;
    }
}
