import { BaseModifier, registerModifier } from '../../utils/dota_ts_adapter';
@reloadable
export class CAttackDataManager {
    attack_data: Map<number, UnitEventAttackDamageData> = new Map<number, UnitEventAttackDamageData>();
    trigger_attack_data: Map<number, UnitEventAttackDamageData> = new Map<number, UnitEventAttackDamageData>();
    trigger_attack_record: number = -1;
    attack_thinker: CDOTA_BaseNPC;
    constructor() {
        this.attack_thinker = CreateModifierThinker(null, null, 'modifier_attackdata_thinker', {}, Vector(0, 0, 0), DotaTeam.NEUTRALS, false);
    }

    // public OnAttackStart(event: ModifierAttackEvent): void {
    //     const attackDataValue = {
    //         attacker: event.attacker,
    //         damage: event.damage,
    //         damage_category: event.damage_category,
    //         inflictor: event.inflictor,
    //         original_damage: event.original_damage,
    //         ranged_attack: event.ranged_attack,
    //         target: event.target,
    //         record: event.record,
    //         fail_type: event.fail_type,
    //     };
    //     this.attack_data.set(event.record, attackDataValue);
    //     CDispatcher.Send(ModifierFunctions.OnAttackTargetStart, event.target.entindex(), attackDataValue);
    //     print('CAttack OnAttackStart');
    // }

    public OnAttackRecord(event: ModifierAttackEvent): void {
        print('CAttack OnAttackRecord', event.record);
    }

    public OnAttack(event: ModifierAttackEvent): void {
        print('CAttack OnAttack', event.record);
        CAttackData.PerformAttack(event.attacker, event.target, {
            use_projectile: event.attacker.IsRangedAttacker(),
            use_effect: true,
            is_trigger: false,
            record: event.record,
        });
    }

    public OnAttackLanded(event: ModifierAttackEvent): void {
        print('CAttack OnAttackLanded', event.record);
        const attackDataValue = this.attack_data.get(event.record);
        if (!attackDataValue) {
            print('attackDataValue is null');
            return;
        }
        // AddDamage(attackDataValue);
        CDispatcher.Send(ModifierFunctions.OnAttackLanded_Target, event.target.entindex(), attackDataValue);
        CDispatcher.Send(ModifierFunctions.OnAttackLanded_Attacker, event.attacker.entindex(), attackDataValue);
        AddDamage(attackDataValue.damageTable);
    }

    public OnAttackRecordDestroy(event: ModifierAttackEvent): void {
        print('CAttack OnAttackRecordDestroy', event.record);
    }

    public OnAttackFinished(event: ModifierAttackEvent): void {
        // print('CAttack OnAttackFinished');
        //删除记录数据
        this.attack_data.delete(event.record);
        // this.GetParent().FadeGesture(GameActivity.DOTA_ATTACK_EVENT);
    }

    public OnAttackFail(event: ModifierAttackEvent): void {
        // print('CAttack OnAttackFail');
        const attackDataValue = {
            attacker: event.attacker,
            damage: event.damage,
            damage_category: event.damage_category,
            inflictor: event.inflictor,
            original_damage: event.original_damage,
            ranged_attack: event.ranged_attack,
            target: event.target,
            record: event.record,
            fail_type: event.fail_type,
        };
        // const attackDataValue = this.attack_data.get(event.record);
        CDispatcher.Send(ModifierFunctions.OnAttackFail_Both, event.target.entindex(), attackDataValue);
        CDispatcher.Send(ModifierFunctions.OnAttackFail_Both, event.attacker.entindex(), attackDataValue);
    }

    public OnAttackCancelled(event: ModifierAttackEvent): void {
        // print('CAttack OnAttackCancelled');
        //删除记录数据
        this.attack_data.delete(event.record);
        // this.GetParent().FadeGesture(GameActivity.DOTA_ATTACK_EVENT);
    }

    /** 攻击出手时判断暴击。返回触发了的暴击对象 */
    _CheckCritOnAttack(attacker: CDOTA_BaseNPC, attacking_target: CDOTA_BaseNPC): CritData | undefined {
        attacker._last_attack_trigger_crit = undefined;
        // 目标允许
        if (attacking_target.IsWard() || attacking_target.IsBuilding() || !attacker.IsEnemy(attacking_target)) {
            return;
        }
        let trigger_crit: CritData;
        if (!attacker._crits_data_calls) {
            attacker._crits_data_calls = [];
            return;
        }
        for (const crit of attacker._crits_data_calls) {
            const { crit_chance, crit_rate } = crit;
            if (RollPercentage(crit_chance)) {
                trigger_crit = trigger_crit ?? crit;
                // 触发多个暴击，取倍率最高的那个
                trigger_crit = crit_rate > trigger_crit.crit_rate ? crit : trigger_crit;
            }
        }
        attacker._last_attack_trigger_crit = trigger_crit;
        return trigger_crit;
    }

    /** 攻击命中判断躲避。触发躲避事件 */
    // _CheckMissOnAttackLanded(attacker: CDOTA_BaseNPC, target: CDOTA_BaseNPC): void {
    //     // 判断丢失
    //     let lose_chance;
    //     if (attacker.IsUnableToMiss() || target.IsEvadeDisabled()) {
    //         lose_chance = undefined;
    //     } else {
    //         lose_chance = target.GetEvasion() + attacker.GetMissChance();
    //         for (const evasion of attacker._evasion_data_calls) {
    //             on_evasion;
    //         }
    //         if (is_ranged_attacker) {
    //             const attacker_high = GetGroundHeight(attacker.GetAbsOrigin(), attacker);
    //             const target_high = GetGroundHeight(target.GetAbsOrigin(), target);
    //             if (attacker_high < target_high) {
    //                 lose_chance += 0.25;
    //             }
    //         }
    //     }
    // }

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
            is_trigger: boolean;
            record?: number;
            /** 自定义数据 */
            extra_data?: DamageTableExtraData;
        }
    ) {
        const { never_miss, use_effect, use_projectile } = extra_pamams ?? {};
        extra_pamams.extra_data = extra_pamams.extra_data ?? {};
        // 攻击发射时，计算暴击、伤害、丢失
        const is_ranged_attacker = attacker.IsRangedAttacker();

        // 获取伤害
        const attack_damage = attacker.GetAttackDamage();
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
        // 判断暴击 如果不是正常攻击，那么需要重新计算暴击，否则使用在攻击抬手时计算的暴击
        const crit_obj = attacker._last_attack_trigger_crit ?? this._CheckCritOnAttack(attacker, target);

        // 攻击开始就算伤害了
        const dmgTable: DamageTable = {
            attacker: attacker,
            victim: target,
            damage: attack_damage,
            damageProperty: DamageProperty.Attack,
            damageType: DamageType.Physical,
            damageFlags: crit_obj ? DamageFlags.AttackCrit : undefined,
            crit_obj: crit_obj,
            extra_data: extra_pamams.extra_data,
        };
        // 初始化攻击数据
        const attack_data: UnitEventAttackDamageData = {
            damageTable: dmgTable,
            // lose_chance: lose_chance,
            projectile: attacker.GetRangedProjectileName(),
            projectile_speed: attacker.GetProjectileSpeed(),
            is_trigger: extra_pamams.is_trigger,
            never_miss: never_miss,
            record: extra_pamams.record,
        };

        if (crit_obj) {
            const { crit_chance, crit_rate } = crit_obj;
            dmgTable.damage = dmgTable.damage * (crit_rate / 100);
            // if (illusion_cirt_show) {
            //     // 根据缩放值，还原等同于本体的伤害，不会被中途的事件所影响
            //     // 否则一旦在中途事件修改了攻击力，且事件能同时作用于幻想和本体，那么幻象的暴击就一定和本体暴击不相等
            //     illusion_cirt_show *= scaled_rate;
            //     extra_pamams.extra_data.illusion_crit_show_damage = illusion_cirt_show * (crit_rate / 100);
            // }
        }
        if (!extra_pamams.is_trigger && extra_pamams.record) {
            this.attack_data.set(extra_pamams.record, attack_data);
            CDispatcher.Send(ModifierFunctions.OnAttackStart_Target, target.entindex(), attack_data);
            CDispatcher.Send(ModifierFunctions.OnAttackStart_Attacker, attacker.entindex(), attack_data);
        }
        // else {
        //     const record = this.trigger_attack_record++;
        //     this.trigger_attack_data.set(record, attack_data);
        // }

        // 如果是近战攻击，那么发射后立刻命中。远程攻击则在投射物的命中中回调
        if (!use_projectile) {
        } else {
            GameRules.CProjectileManager.CreateTrackingProjectile({
                target: target,
                moveSpeed: attack_data.projectile_speed,
                source: attacker,
                effectName: attacker.GetRangedProjectileName(),
                OnHitUnit: () => {
                    print('CAttack OnAttackLanded', extra_pamams.record);
                    CDispatcher.Send(ModifierFunctions.OnAttackLanded_Target, target.entindex(), attack_data);
                    CDispatcher.Send(ModifierFunctions.OnAttackLanded_Attacker, attacker.entindex(), attack_data);
                    AddDamage(attack_data.damageTable);
                },
            });
        }
    }
}

declare global {
    var CAttackData: CAttackDataManager;
}
@registerModifier()
export class modifier_attackdata_thinker extends BaseModifier {
    IsHidden(): boolean {
        return false;
    }

    IsDebuff(): boolean {
        return true;
    }

    DeclareFunctions(): ModifierFunction[] {
        return [
            // ModifierFunction.ON_ATTACK_START,
            // ModifierFunction.ON_ATTACKED,
            ModifierFunction.ON_ATTACK_LANDED,
            // ModifierFunction.ON_ATTACK_ALLIED,
            ModifierFunction.ON_ATTACK_FAIL,
            // ModifierFunction.ON_ATTACK_FINISHED,
            ModifierFunction.ON_ATTACK_RECORD,
            // ModifierFunction.ON_ATTACK_RECORD_DESTROY,
            ModifierFunction.ON_ATTACK_CANCELLED,
            ModifierFunction.ON_ATTACK,
            ModifierFunction.ON_MODIFIER_ADDED,

            ModifierFunction.ON_TAKEDAMAGE,
        ];
    }

    OnTakeDamage(event: ModifierInstanceEvent): void {
        //检查 event.DamageFlag  是否含有枚举
        print(
            ' OnTakeDamage',
            event.damage_category,
            event.damage_flags,
            event.damage_type,
            event.damage,
            event.original_damage,
            event.ranged_attack,
            event.unit.GetName(),
            event.record
        );
    }
    // OnAttackStart(event: ModifierAttackEvent): void {
    //     CAttackData.OnAttackStart(event);
    // this.GetParent().StartGestureWithFadeAndPlaybackRate(
    //     GameActivity.DOTA_ATTACK_EVENT,
    //     0.0,
    //     0.0,
    //     this.GetParent().GetDisplayAttackSpeed() / 100
    // );
    // }

    OnAttackRecord(event: ModifierAttackEvent): void {
        event.fail_type = AttackRecord.FAIL_TERRAIN_MISS;
        CAttackData.OnAttackRecord(event);
    }

    OnAttack(event: ModifierAttackEvent): void {
        CAttackData.OnAttack(event);
    }

    OnAttackLanded(event: ModifierAttackEvent): void {
        CAttackData.OnAttackLanded(event);
        // CAttackData.OnAttackRecordDestroy(event);
    }

    // OnAttacked(event: ModifierAttackEvent): void {
    //     print('modifier_imba_stunned OnAttacked');
    // }

    // OnAttackRecordDestroy(event: ModifierAttackEvent): void {
    //     CAttackData.OnAttackRecordDestroy(event);
    // }

    // OnAttackFinished(event: ModifierAttackEvent): void {
    // CAttackData.OnAttackFinished(event);
    // this.GetParent().FadeGesture(GameActivity.DOTA_ATTACK_EVENT);
    // }

    // OnAttackAllied(event: ModifierAttackEvent): void {

    //     print('modifier_imba_stunned OnAttackAllied');
    // }

    OnAttackFail(event: ModifierAttackEvent): void {
        CAttackData.OnAttackFail(event);
    }

    OnAttackCancelled(event: ModifierAttackEvent): void {
        CAttackData.OnAttackCancelled(event);
        // this.GetParent().FadeGesture(GameActivity.DOTA_ATTACK_EVENT);
    }

    OnModifierAdded(event: ModifierAddedEvent): void {
        const modifier_parent = event.unit;
        if (!modifier_parent._miss_chance) modifier_parent._miss_chance = 0;
        const modifier = event.added_buff;
        if (modifier.HasFunction(ModifierFunction.MISS_PERCENTAGE)) {
            this.calculateMissChance(modifier_parent);
            const delay = modifier.GetDuration() > 0 ? modifier.GetDuration() : 1;
            Timers.CreateTimer(delay, () => {
                this.calculateMissChance(modifier_parent);
                return null;
            });
        }
    }

    calculateMissChance(unit: CDOTA_BaseNPC) {
        const all_modifiers = unit.FindAllModifiers();
        let all_miss = 0;
        for (const modifier of all_modifiers) {
            if (!modifier.HasFunction(ModifierFunction.MISS_PERCENTAGE) || !(modifier as any).GetModifierMiss_Percentage) continue;
            const miss = (modifier as any).GetModifierMiss_Percentage();
            all_miss += miss;
            // print(modifier.GetName(), (modifier as any).GetModifierMiss_Percentage());
        }
        unit._miss_chance = all_miss / 100;
    }
}
@registerModifier()
export class modifier_attackdata_miss extends BaseModifier {
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
