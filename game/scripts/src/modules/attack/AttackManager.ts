// import { BaseModifier, registerModifier } from '../../utils/dota_ts_adapter';
import { reloadable } from '../../utils/tstl-utils';
declare global {
    var CAttackData: CAttackDataManager;
    /**进行一次攻击 */
    var CPerformAttack: typeof CAttackData.PerformAttack;
}
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
        const target = event.target;
        const attacker = event.attacker;

        // DebugPrint('CAttack OnAttackRecord', attacker.GetAverageTrueAttackDamage(null));
        // DebugPrint('CAttack GetAttackDamage', attacker.GetAttackDamage());
        const crit_obj = CAttackData._CheckCritOnAttack(attacker, target);
        const diff = attacker.GetBaseDamageMax() - attacker.GetBaseDamageMin();
        // 攻击开始就算伤害了
        const dmgTable: DamageTable = {
            attacker: attacker,
            victim: target,
            damage: attacker.GetAverageTrueAttackDamage(null) + math.random(-diff, diff),
            damageProperty: DamageProperty.Attack,
            damageType: DamageType.Physical,
            damageFlags: crit_obj ? DamageFlags.AttackCrit : undefined,
            crit_obj: crit_obj,
            sourceAbility: attacker._ability_custom_base_attack,
            use_attack_effect: true,
        };
        // 初始化攻击数据
        const attack_data: UnitEventAttackDamageData = {
            damageTable: dmgTable,
            projectile: attacker.GetRangedProjectileName() as ParticleList,
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
        if (!Array.isArray(attacker._crits_data_calls)) {
            DebugWarning(attacker.GetUnitName(), 'attacker._crits_data_calls is not array');
            return;
        }
        if (attacker._crits_data_calls.length === 0) return;

        // 目标允许
        if (attacking_target.IsWard() || attacking_target.IsBuilding() || !attacker.IsEnemy(attacking_target)) {
            return;
        }

        let trigger_crit: CritData | undefined;

        // 计算额外的暴击数据修正
        const extraCritData = attacker._extra_crits_data_calls || [];
        const extraBeCritData = attacking_target._extra_be_crits_data_calls || [];

        let totalChangeCritChance = 0;
        let totalChangeCritRate = 0;

        for (const data of extraCritData) {
            totalChangeCritChance += data.change_crit_chance ?? 0;
            totalChangeCritRate += data.change_crit_rate ?? 0;
        }

        for (const data of extraBeCritData) {
            totalChangeCritChance += data.change_crit_chance ?? 0;
            totalChangeCritRate += data.change_crit_rate ?? 0;
        }
        for (const crit of attacker._crits_data_calls) {
            let { crit_chance, crit_rate } = crit;

            // 应用额外的暴击数据修正
            crit_chance = Math.max(0, crit_chance * (1 + totalChangeCritChance / 100));
            crit_rate = crit_rate * (1 + totalChangeCritRate / 100);

            if (Random.RollPercentage(crit_chance, attacker, 'crit')) {
                if (!trigger_crit || crit_rate > trigger_crit.crit_rate) {
                    trigger_crit = { crit_chance, crit_rate };
                }
            }
        }
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
        extra_params?: {
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
        // 解构参数并设置默认值
        const {
            never_miss = false,
            use_effect = false,
            use_projectile = false,
            is_trigger = true,
            record = [undefined, undefined],
            disable_celled = false,
            extra_data = {},
        } = extra_params ?? {};

        const [recordId, attackData] = record;

        let attack_data = attackData;
        let dmgTable = attackData?.damageTable;

        // 如果没有预先数据并且是一次触发的攻击，则创建新的攻击数据
        if ((!recordId || !attack_data || !dmgTable) && is_trigger) {
            const crit_obj = CAttackData._CheckCritOnAttack(attacker, target);
            dmgTable = {
                attacker: attacker,
                victim: target,
                damage: attacker.GetAverageTrueAttackDamage(null),
                damageProperty: DamageProperty.Attack,
                damageType: DamageType.Physical,
                damageFlags: (crit_obj ? DamageFlags.AttackCrit : 0) + (disable_celled ? DamageFlags.DisableCelled : 0),
                crit_obj: crit_obj,
                sourceAbility: attacker._ability_custom_base_attack,
                use_attack_effect: use_effect,
            };
            attack_data = {
                damageTable: dmgTable,
                projectile: attacker.GetRangedProjectileName() as ParticleList,
                projectile_speed: attacker.GetProjectileSpeed(),
                record: recordId,
            };
        }

        // 设置额外数据
        dmgTable.extra_data = extra_data;

        // 幻象攻击修正
        if (attacker.IsHero() && attacker.IsIllusion()) {
            const illusion_attack_fixed = attacker.GetAttackDamage() * (attacker._modifierKeys.outgoing_damage / 100);
            if (attacker.IsHero() && attacker.IsIllusion()) {
                attack_data.damageTable.extra_data.illusion_crit_show_damage = dmgTable.damage;
            }
            dmgTable.damage = illusion_attack_fixed;
        }

        // 处理暴击
        if (dmgTable.crit_obj) {
            const { crit_rate } = dmgTable.crit_obj;
            dmgTable.damage *= crit_rate / 100;
            if (attacker.IsHero() && attacker.IsIllusion()) {
                attack_data.damageTable.extra_data.illusion_crit_show_damage *= crit_rate / 100;
            }
        }

        // 处理攻击效果
        const _fun_attack_effect = (attacker: CDOTA_BaseNPC, target: CDOTA_BaseNPC, use_effect?: boolean): void => {
            if (!CAttackData._CheckMissOnAttackLanded(attacker, target, never_miss || attack_data.never_miss)) {
                if (use_effect) {
                    Dispatcher.Send('ON_ATTACK_LANDED_TARGET', target.entindex(), attack_data);
                    Dispatcher.Send('ON_ATTACK_LANDED_ATTACKER', attacker.entindex(), attack_data);
                }
                if (attack_data.damageTable.crit_obj?.on_crit) {
                    attack_data.damageTable.crit_obj.on_crit(attack_data.damageTable);
                }
                CAddDamage(attack_data.damageTable);
            } else {
                PopupMiss(target, attacker.GetPlayerOwner());
                PopupEvasion(target, target.GetPlayerOwner());
                Dispatcher.Send('ON_ATTACK_FAIL_BOTH', target.entindex(), attack_data);
                Dispatcher.Send('ON_ATTACK_FAIL_BOTH', attacker.entindex(), attack_data);
            }
        };

        // 处理近战或远程攻击
        if (!use_projectile) {
            _fun_attack_effect(attacker, target, use_effect);
        } else {
            CProjectileManager.CreateTrackingProjectile({
                target: target,
                moveSpeed: attack_data.projectile_speed ?? attacker.GetProjectileSpeed(),
                source: attacker,
                effectName: attack_data.projectile ?? (attacker.GetRangedProjectileName() as ParticleList),
                _is_attack: true,
                OnHitUnit: () => {
                    _fun_attack_effect(attacker, target, use_effect);
                },
            });
        }
    }
}

@registerModifier()
export class modifier_attack_data_thinker extends BaseModifier {
    GetModifierConfig(): ModifierConfig {
        return {
            is_hidden: true,
            is_debuff: false,
            not_purgable: true,
            not_purgable_exception: true,
        };
    }

    DeclareFunctions(): ModifierFunction[] {
        return CDeclareFunctions(
            ModifierFunction.ON_ATTACK_RECORD,
            ModifierFunction.ON_ATTACK_CANCELLED,
            ModifierFunction.ON_ATTACK,
            ModifierFunction.ON_ATTACK_FINISHED,
            ModifierFunction.ON_MODIFIER_ADDED
        );
    }

    OnAttackRecord(event: ModifierAttackEvent): void {
        if (!IsServer()) return;
        if (!event.target?.IsBaseNPC()) return;
        CAttackData.OnAttackStart(event);
    }

    OnAttack(event: ModifierAttackEvent): void {
        if (!IsServer()) return;
        if (!event.target?.IsBaseNPC()) return;
        CAttackData.OnAttack(event);
    }

    OnAttackCancelled(event: ModifierAttackEvent): void {
        if (!IsServer()) return;
        if (!event.target?.IsBaseNPC()) return;
        CAttackData.OnAttackCancelled(event);
    }

    OnAttackFinished(event: ModifierAttackEvent): void {
        if (!IsServer()) return;
        if (!event.target?.IsBaseNPC()) return;
        CAttackData.OnAttackFinished(event);
    }

    OnModifierAdded(event: ModifierAddedEvent): void {
        if (event.added_buff.HasFunction(ModifierFunction.MAGICAL_RESISTANCE_BONUS)) {
            const check_table = {};
            event.added_buff.CheckStateToTable(check_table);
            if (check_table[tostring(ModifierState.DEBUFF_IMMUNE)] && event.added_buff['GetModifierMagicalResistanceBonus']) {
                event.unit._debuff_immunity_magical_resistance.push(event.added_buff);
            }
        }
    }
}
/**通用管理modifier */

@registerModifier()
export class modifier_attack_data_miss extends BaseModifier {
    GetModifierConfig(): ModifierConfig {
        return {
            is_hidden: true,
            is_debuff: true,
            not_purgable: true,
            not_purgable_exception: true,
            not_remove_on_death: true,
        };
    }

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
        return CDeclareFunctions(
            ModifierFunction.MISS_PERCENTAGE,
            ModifierFunction.INCOMING_DAMAGE_CONSTANT,
            ModifierFunction.INCOMING_PHYSICAL_DAMAGE_CONSTANT,
            ModifierFunction.INCOMING_SPELL_DAMAGE_CONSTANT,
            ModifierFunction.SPELL_AMPLIFY_PERCENTAGE
            // ModifierFunction.ON_MODIFIER_REMOVED
        );
    }

    // // @ts-ignore
    // OnModifierRemoved(keys): void {
    //     DeepPrintTable(keys);
    // }

    OnCreated(params: ModifierParams): void {
        if (IsServer()) {
            CustomNetTables.SetTableValue('custom_shield_data', tostring(this.GetParent()?.GetEntityIndex()), {
                Physic_Attack: { max_shield: tostring(0), now_shield: tostring(0) },
                Physic: { max_shield: tostring(0), now_shield: tostring(0) },
                Magic: { max_shield: tostring(0), now_shield: tostring(0) },
                All: { max_shield: tostring(0), now_shield: tostring(0) },
            });
        }
    }

    GetModifierSpellAmplify_Percentage(event: ModifierAttackEvent): number {
        if (IsClient()) {
            const custom_amp = CustomNetTables.GetTableValue('custom_spell_amplify', tostring(this.GetParent()?.GetEntityIndex()))?.all_amp;
            if (!custom_amp) return 0;
            return tonumber(custom_amp);
        }
    }

    GetModifierIncomingDamageConstant(event: ModifierAttackEvent): number {
        if (IsClient()) {
            const custom_shield_data = CustomNetTables.GetTableValue('custom_shield_data', tostring(this.GetParent()?.GetEntityIndex()));
            if (event.report_max) {
                return tonumber(custom_shield_data.All.max_shield) ?? 0;
            } else {
                return tonumber(custom_shield_data.All.now_shield) ?? 0;
            }
        }
    }

    GetModifierIncomingPhysicalDamageConstant(event: ModifierAttackEvent): number {
        if (IsClient()) {
            const custom_shield_data = CustomNetTables.GetTableValue('custom_shield_data', tostring(this.GetParent()?.GetEntityIndex()));
            if (event.report_max) {
                return tonumber(custom_shield_data.Physic.max_shield) + tonumber(custom_shield_data.Physic_Attack.max_shield) ?? 0;
            } else {
                return tonumber(custom_shield_data.Physic.now_shield) + tonumber(custom_shield_data.Physic_Attack.now_shield) ?? 0;
            }
        }
    }

    GetModifierIncomingSpellDamageConstant(event: ModifierAttackEvent): number {
        if (IsClient()) {
            const custom_shield_data = CustomNetTables.GetTableValue('custom_shield_data', tostring(this.GetParent()?.GetEntityIndex()));
            if (event.report_max) {
                return tonumber(custom_shield_data.Magic.max_shield) ?? 0;
            } else {
                return tonumber(custom_shield_data.Magic.now_shield) ?? 0;
            }
        }
    }

    GetModifierMiss_Percentage(): number {
        return 1000;
    }

    OnDestroy(): void {
        if (IsServer()) {
            CustomNetTables.SetTableValue('custom_shield_data', tostring(this.GetParent()?.GetEntityIndex()), null);
            CustomNetTables.SetTableValue('custom_spell_amplify', tostring(this.GetParent()?.GetEntityIndex()), null);
        }
    }
}
