// import { BaseModifier } from '../utils/dota_ts_adapter';
import { CDispatcher } from './dispatcher/Dispatcher';
// export interface CustomBaseModifier extends BaseModifier {}
export class CustomBaseModifier extends BaseModifier {
    caster: CDOTA_BaseNPC | undefined = this.GetCaster();
    ability: CDOTABaseAbility | undefined = this.GetAbility();
    parent: CDOTA_BaseNPC = this.GetParent();
    CustomDeclareFunctions(): ModifierFunctions[] {
        return [];
    }

    // dispatcherIDList: Map<EntityIndex, dispatcher_id[]>;

    // frameBasedTimers: {
    //     key: string;
    //     value: Partial<ModifierFunctions[]>;
    // };

    // funs: Partial<ModifierFunctions[]> = [];

    // OnCreated(params: object): void {
    //     print('新创建');
    //     if (!IsServer() || !this.GetParent()) return;
    //     const parent_index = this.GetParent().entindex();
    //     const functions = this.CustomDeclareFunctions();
    //     if (functions.length > 0) {
    //         this.dispatcherIDList = new Map();
    //         if (!this.dispatcherIDList.has(parent_index)) {
    //             this.dispatcherIDList.set(parent_index, []);
    //         }
    //         functions.forEach(element => {
    //             const func = _modifier_methods[element].registerFunc;
    //             CSafelyCall(() => {
    //                 func(this, parent_index);
    //             }, `Error in registering function for ${element}`);

    //             // if (_modifier_methods[element].Use_Frametime) {
    //             //     this.funs.push(element);
    //             // }
    //         });
    //     }
    // if (this.funs.length > 0) {
    //     const timers = Timers.CreateTimer(0.0333, () => {
    //         this.funs.forEach(element => {
    //             const func = _modifier_methods[element].registerFunc;
    //             CSafelyCall(() => {
    //                 func(this, parent_index);
    //             }, `Error in registering function for ${element}`);
    //         });
    //         return 0.0333;
    //     });
    //     this.frameBasedTimers = { key: timers, value: this.funs };
    // }
}

// OnDestroy(): void {
//     if (!IsServer() || !this.GetParent()) return;
//     const functions = this.CustomDeclareFunctions();
//     if (functions.length > 0) {
//         const parent_index = this.GetParent().entindex();
//         functions.forEach(element => {
//             const func = _modifier_methods[element].removeFunc;
//             CSafelyCall(() => {
//                 func(this, parent_index);
//             }, `Error in removing function for ${element}`);
//         });

//         this.dispatcherIDList.delete(parent_index);
//     }
//     // if (this.frameBasedTimers) {
//     //     Timers.RemoveTimer(this.frameBasedTimers.key);
//     // }
// }

// // declare module './utils/dota_ts_adapter' {
// //     interface BaseModifier {
// /**
//  * 原始伤害结算事件 , 事件名 DamageEvent_OriginDamage
//  * - 触发者: 攻击方, 受击方
//  * @param dmgTable 伤害表
//  */
// DamageEvent_OriginDamage?(dmgTable: DamageTable): void;
// /**
//  * 攻击弹射和溅射, 和 **分裂** 不一样, 事件名 DAMAGE_ATTACKER_BOUNCE_EVENT
//  * - 触发者: 攻击方
//  * @param victim 受害者
//  * @param damage 物理攻击伤害的值
//  */
// DamageEvent_AttackBounce?(dmgTable: DamageTable): void;
// /**
//  * 剑刃风暴的攻击伤害无效化, 事件名 DAMAGE_FIXED_ATTACKER_BLADE_STORM_ATK
//  * - 触发者: 攻击方
//  * @param victim 受害者
//  * @returns 返回true时本次攻击伤害无效
//  */
// DamageFixed_BladeStormAttack?(victim: CDOTA_BaseNPC): boolean;
// // 封装到攻击特效基类buff下了
// // /**
// //  * 攻击特效伤害的添加 - 常量, 事件名 DAMAGE_FIXED_ATTACKER_ATK_DAMAGE
// //  * - 触发者: 攻击方
// //  * @param attackEffectData 攻击特效数据, 直接修改内容即可, 只有从物理转变为魔法时才需要添加 sourceAbility, 其他情况不需要
// //  */
// DamageFixed_AttackEffectDamage?(dmgTable: FixedDamageTable): void;
// /**
//  * 攻击分裂的广播, 和 **溅射** 不一样, 事件名 DAMAGE_ATTACKER_ATK_CLEAVE_EVENT
//  * - 触发者: 攻击方
//  * @param victim 受害者
//  * @param damage 物理攻击伤害的值
//  */
// DamageEvent_AttackCleave?(dmgTable: FixedDamageTable): void;
// /**
//  * 魔法护盾的伤害格挡 - 百分比, 事件名 DAMAGE_FIXED_MAGIC_SHIELD_BLOCK_PCT
//  * - 触发者: 受击方
//  * @param dmgTable 伤害表, 自行查阅数值, 计算并返回
//  * @returns 返回本次应该格挡伤害的百分比
//  */
// DamageFixed_MagicShieldBlock?(dmgTable: FixedDamageTable): number;
// /**
//  * 物理伤害无效化, 事件名 DAMAGE_FIXED_VICITIM_IGNORE_PHYSICAL_DAMAGE
//  * - 触发者: 受击方
//  * @param originPhysicalDamage 初始物理伤害
//  * @returns 是否无效化
//  */
// DamageFixed_VictimIgnorePhysicalDamage?(origin_physical: number): boolean;
// /**
//  * 魔法伤害无效化, 事件名 DAMAGE_FIXED_VICITIM_IGNORE_MAGIC_DAMAGE
//  * - 触发者: 受击方
//  * @param originMagicalDamage 初始魔法伤害
//  * @returns 是否无效化
//  */
// DamageFixed_VictimIgnoreMagicalDamage?(origin_magic: number): boolean;
// /**
//  * 纯粹伤害无效化, 事件名 DAMAGE_FIXED_VICITIM_IGNORE_PURE_DAMAGE
//  * - 触发者: 受击方
//  * @param originPureDamage 初始纯粹伤害
//  * @returns 是否无效化
//  */
// DamageFixed_VictimIgnorePureDamage?(origin_pure: number): boolean;
// /**
//  * 全类型伤害伤害无效化, 事件名 DAMAGE_FIXED_VICITIM_IGNORE_ALL_DAMAGE
//  * - 触发者: 受击方
//  * @param originAllDamage 初始全类型伤害
//  * @param attacker 攻击方
//  * @returns 是否无效化
//  */
// DamageFixed_VictimIgnoreAllDamage?(origin_all: number, attacker: CDOTA_BaseNPC): boolean;
// /**
//  * 特殊物理伤害调整 - 百分比, 事件名 DAMAGE_FIXED_SPEC_PHYSICAL_DAMAGE
//  * - 触发者: 受击方
//  * @param dmgTable 原伤害table
//  * @returns 加法叠加, 返回 正数为受到伤害增加, 负数则为伤害减少
//  */
// DamageFixed_VictimSpecialPhysicalDamagePercent?(dmgTable: FixedDamageTable): number;
// /**
//  * 核心攻击伤害调整 - 百分比, 事件名 DAMAGE_FIXED_CORE_ATTACK_DAMAGE
//  * - 触发者: 双方触发
//  * @param dmgTable 原伤害table
//  * @returns 加法叠加, 返回 正数为受到伤害增加, 负数则为伤害减少
//  */
// DamageFixed_CoreAttackDamagePercent?(attacker: CDOTA_BaseNPC, victim: CDOTA_BaseNPC): number;
// /**
//  * 核心技能伤害调整 - 百分比, 事件名 DAMAGE_FIXED_CORE_ABILITY_DAMAGE
//  * - 触发者: 受击方
//  * @param dmgTable 原伤害table
//  * @returns 加法叠加, 返回 正数为受到伤害增加, 负数则为伤害减少
//  */
// DamageFixed_VictimCoreAbilityDamagePercent?(): number;
// /**
//  * 核心伤害调整 - 百分比, 事件名 DAMAGE_FIXED_CORE_ALL_DAMAGE
//  * - 触发者: 双方触发
//  * @param dmgTable 原伤害table
//  * @returns 加法叠加, 返回 正数为受到伤害增加, 负数则为伤害减少
//  */
// DamageFixed_CoreAllDamagePercent?(attacker: CDOTA_BaseNPC, victim: CDOTA_BaseNPC): number;
// /**
//  * 共享 / 反射 伤害时
//  * 事件:DAMAGE_VICITIM_REFLECT_SHARED_DAMAGE_EVENT
//  * - 触发者: 受击方
//  * @param attacker 攻击者
//  * @param DamageTypes 伤害类型
//  * @param damage 伤害值
//  */
// DamageEvent_ReflectSharedDamage?(attacker: CDOTA_BaseNPC, damage_type: DamageType, damage: number): void;
// /**
//  * 虚妄之诺 的伤害无效化和记录
//  * - 触发者: 受击方
//  * @param damage 当次受到的伤害值
//  * @returns 是否进行无效化, 无效化时伤害会变为0
//  */
// DamageFixed_FalsePromiseIgnoreDamage?(attacker: CDOTA_BaseNPC, damage_type: DamageType, damage_flag: DamageFlags, damage: number): boolean;

// /**
//  * DAMAGE_BORROWED_TIME_EVENT
//  * 回光返照的友方伤害事件记录
//  *
//  * - 触发者: 受击者
//  * @param attacker
//  * @param victim
//  * @param damage
//  * @param damage_property
//  * @param damage_type
//  * @param damage_flag
//  */
// DamageEvent_BorrowedTimeRecord?(
//     attacker: CDOTA_BaseNPC,
//     victim: CDOTA_BaseNPC_Hero,
//     damage: number,
//     damage_property: DamageProperty,
//     damage_type: DamageType,
//     damage_flag: DamageFlags
// ): void;

// /**
//  * 末端伤害格挡 - 百分比, 事件名 DAMAGE_FIXED_VICITIM_END_BLOCK
//  * - 触发者: 受击方
//  * @param damage 伤害值
//  * @returns 返回格挡百分比, 同时触发时，仅数值最高者生效。
//  */
// DamageFixed_EndBlockPercent?(damage: number): number;
// /**
//  * 末端伤害结算事件, 事件名 DAMAGE_END_DAMAGE_EVENT
//  * - 双方触发
//  * @param attacker 攻击者
//  * @param victim 受击者
//  * @param damage_property 伤害类型
//  * @param damage_type 伤害类型
//  * @param damage_flag 特殊伤害标识
//  * @param damage 伤害值
//  * @param ability 伤害来源技能
//  */
// DamageEvent_EndDamage?(
//     attacker: CDOTA_BaseNPC,
//     victim: CDOTA_BaseNPC,
//     damage_property: DamageProperty,
//     damage_type: DamageType,
//     damage_flag: DamageFlags,
//     damage: number
// ): void;

// /**
//  * 飞溅的伤害传递(dmgTable: DamageTable), 事件名 DAMAGE_PSI_BLADE_EVENT
//  * - 触发者: 攻击方
//  * @param victim 受害者
//  * @param damage 伤害值
//  */
// DamageEvent_PsiBlade?(victim: CDOTA_BaseNPC, damage: number): void;

// /**
//  * 幻象结算之后伤害结算事件 - 过完幻象的伤害增幅后触发 - 攻击者+受击者 事件名 DAMAGE_AFTER_ILLUSION_DAMAGE_EVENT
//  * - 触发者: 攻击方 和 受击方
//  * @param attacker
//  * @param victim
//  * @param damage
//  * @param damage_flag
//  * @param inflictor
//  */
// DamageEvent_AfterIllusionDamage?(dmgTable: DamageTable);

// /**
//  * 特殊溅射攻击广播 - 攻击者触发 事件名 DAMAGE_SPECIAL_BOUNCE_ATTACK_EVENT
//  * - 触发者: 攻击者
//  * @param victim 受击者
//  * @param damage 伤害
//  */
// DamageEvent_SpecialBounceAttack?(dmgTable: DamageTable);

// /**
//  * 击杀任意单位 事件名 UNIT_KILL_UNIT
//  * - 触发者：击杀者
//  * @param event
//  */
// // OnKill?(dmgTable: DamageTable): void;

// /**
//  * 单位死亡 事件名 UNIT_DEATH
//  * - 触发者：任意死亡单位
//  */
// OnUnitDeath?(dmgTable: DamageTable): void;

// /**
//  * 英雄死亡 事件名 UNIT_HERO_DEATH
//  * - 触发者：任意死亡单位
//  */
// OnHeroDeath?(dmgTable: DamageTable): void;

// /**
//  * 建筑死亡 事件名 UNIT_BUILDING_DEATH
//  * - 触发者：任意死亡建筑
//  */
// OnBuildingDeath?(dmgTable: DamageTable): void;

// /**
//  * 单位复活事件 事件名 UNIT_RESPAWN
//  * - 触发者：只有buff拥有者复活时触发
//  */
// // OnRespawn?(dmgTable: DamageTable): void;

// OnAttackStart_Target?(AttackData: UnitEventAttackDamageData): void;
// /**攻击前摇  触发者 攻击者 */
// OnAttackStart_Attacker?(AttackData: UnitEventAttackDamageData): void;
// /**攻击记录前  触发者 攻击者 */
// OnAttackRecord_Attack?(AttackData: UnitEventAttackDamageData): void;

// /** 攻击命中时，事件名 。`攻击者触发` */
// OnAttackLanded_Attacker?(AttackData: UnitEventAttackDamageData): void;
// /** 受到攻击命中时，事件名 。`受害者触发` */
// OnAttackLanded_Target?(AttackData: UnitEventAttackDamageData): void;
// /**攻击失败时 双方触发 */
// OnAttackFail_Both?(AttackData: UnitEventAttackDamageData): void;
// /**增加暴击 数据 */
// AddParentAttackCritData?(): CritData;

// /**增加闪避 数据 */
// AddParentEvasionData?(): EvasionData;
// /**增加致盲 数据 */
// AddParentBlindData?(): BlindData;
// /**增加必中 数据 */
// AddParentAccuracyData?(): AccuracyData;
// /**
//  * 单位回血修正 事件名 UNIT_FIXED_GAIN_HEALTH
//  */
// // OnHealthGained?(dmgTable: DamageTable): void;
// // }
// // }
// }
