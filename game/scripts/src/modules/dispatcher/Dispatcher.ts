@reloadable
export class CDispatcher {
    private static id: number = 0; // 实例变量，用于生成唯一的回调函数ID
    private static id_callBack: Map<dispatcher_id, (params: any) => void> = new Map(); // 实例变量，存储回调函数
    private static tag_entIdxs_ids: Map<string, Map<EntityIndex, Set<dispatcher_id>>> = new Map(); // 实例变量，存储事件与实体索引和回调函数ID的映射
    private static dispatcherThinker: CDOTA_BaseNPC; // 实例变量，用于保存dispatcher thinker对象
    constructor() {
        CDispatcher.Init(); // 在构造函数中初始化
    }

    // 初始化方法，创建dispatcher thinker对象并赋值给dispatcherThinker
    private static Init() {
        CDispatcher.dispatcherThinker = CreateModifierThinker(
            null,
            null,
            'modifier_dispatcher_thinker',
            {},
            Vector(0, 0, 0),
            DotaTeam.NEUTRALS,
            false
        );
    }

    // 注册事件的方法
    // eventName: 事件名称
    // entityIndex: 实体索引
    // callBack: 事件触发时调用的回调函数
    static Register(eventName: ModifierFunctions, entityIndex: EntityIndex, callBack: (params: any) => void): dispatcher_id {
        CDispatcher.id++; // 生成唯一的回调函数ID
        const id = CDispatcher.id as dispatcher_id;
        CDispatcher.id_callBack.set(id, callBack); // 将回调函数存储在id_callBack字典中

        // 检查并初始化嵌套的Map和Set
        if (!CDispatcher.tag_entIdxs_ids.has(eventName)) {
            CDispatcher.tag_entIdxs_ids.set(eventName, new Map());
        }
        const entityMap = CDispatcher.tag_entIdxs_ids.get(eventName)!;

        if (!entityMap.has(entityIndex)) {
            entityMap.set(entityIndex, new Set());
        }
        const idSet = entityMap.get(entityIndex)!;

        idSet.add(id); // 将回调函数ID记录在tag_entIdxs_ids中
        return id; // 返回回调函数ID
    }

    // 注销事件的方法
    // id: 要注销的回调函数ID
    static UnRegister(id: dispatcher_id) {
        CDispatcher.id_callBack.delete(id); // 删除回调函数
        for (const [eventName, entityMap] of CDispatcher.tag_entIdxs_ids) {
            for (const [entityIndex, idSet] of entityMap) {
                if (idSet.has(id)) {
                    idSet.delete(id); // 删除回调函数ID
                    if (idSet.size === 0) {
                        entityMap.delete(entityIndex);
                    }
                }
            }
            if (entityMap.size === 0) {
                CDispatcher.tag_entIdxs_ids.delete(eventName);
            }
        }
    }

    // 发送事件的方法
    // eventName: 事件名称
    // entityIndex: 实体索引，或null表示所有实体
    // params: 事件参数
    static Send(eventName: ModifierFunctions, entityIndex: EntityIndex | null, params: any) {
        if (CDispatcher.tag_entIdxs_ids.has(eventName)) {
            const entityMap = CDispatcher.tag_entIdxs_ids.get(eventName)!;
            for (const [entIdx, idSet] of entityMap.entries()) {
                if (entityIndex === null || entityIndex === entIdx) {
                    for (const id of idSet) {
                        const callback = CDispatcher.id_callBack.get(id);
                        if (callback) {
                            try {
                                callback(params);
                            } catch (e) {
                                xpcall(
                                    () => {
                                        callback(params);
                                    },
                                    debug.traceback,
                                    params
                                );
                            }
                        } else {
                            idSet.delete(id);
                        }
                    }
                }
            }
        }
    }

    // 触发单个回调的方法
    // id: 回调函数ID
    // params: 事件参数
    static Trigger(id: dispatcher_id, params: any) {
        const callback = CDispatcher.id_callBack.get(id);
        if (callback) {
            callback(params);
        }
    }
}
declare module '../../utils/dota_ts_adapter' {
    interface BaseModifier {
        /**
         * 原始伤害结算事件 , 事件名 DamageEvent_OriginDamage
         * - 触发者: 攻击方, 受击方
         * @param dmgTable 伤害表
         */
        DamageEvent_OriginDamage?(dmgTable: ApplyDamageOptions): void;
        /**
         * 攻击弹射和溅射, 和 **分裂** 不一样, 事件名 DAMAGE_ATTACKER_BOUNCE_EVENT
         * - 触发者: 攻击方
         * @param victim 受害者
         * @param damage 物理攻击伤害的值
         */
        DamageEvent_AttackBounce?(victim: CDOTA_BaseNPC, damage: number): void;
        /**
         * 剑刃风暴的攻击伤害无效化, 事件名 DAMAGE_FIXED_ATTACKER_BLADE_STORM_ATK
         * - 触发者: 攻击方
         * @param victim 受害者
         * @returns 返回true时本次攻击伤害无效
         */
        DamageFixed_BladeStormAttack?(victim: CDOTA_BaseNPC): boolean;
        // 封装到攻击特效基类buff下了
        // /**
        //  * 攻击特效伤害的添加 - 常量, 事件名 DAMAGE_FIXED_ATTACKER_ATK_DAMAGE
        //  * - 触发者: 攻击方
        //  * @param attackEffectData 攻击特效数据, 直接修改内容即可, 只有从物理转变为魔法时才需要添加 sourceAbility, 其他情况不需要
        //  */
        //  DamageFixed_AttackEffectDamage?(attackEffectData: DamageFixedAttackEffectData): void;
        /**
         * 攻击分裂的广播, 和 **溅射** 不一样, 事件名 DAMAGE_ATTACKER_ATK_CLEAVE_EVENT
         * - 触发者: 攻击方
         * @param victim 受害者
         * @param damage 物理攻击伤害的值
         */
        DamageEvent_AttackCleave?(victim: CDOTA_BaseNPC, damage: number): void;
        /**
         * 魔法护盾的伤害格挡 - 百分比, 事件名 DAMAGE_FIXED_MAGIC_SHIELD_BLOCK_PCT
         * - 触发者: 受击方
         * @param dmgTable 伤害表, 自行查阅数值, 计算并返回
         * @returns 返回本次应该格挡伤害的百分比
         */
        DamageFixed_MagicShieldBlock?(dmgTable: ApplyDamageOptions): number;
        /**
         * 物理伤害无效化, 事件名 DAMAGE_FIXED_VICITIM_IGNORE_PHYSICAL_DAMAGE
         * - 触发者: 受击方
         * @param originPhysicalDamage 初始物理伤害
         * @returns 是否无效化
         */
        DamageFixed_VictimIgnorePhysicalDamage?(originPhysicalDamage: number): boolean;
        /**
         * 魔法伤害无效化, 事件名 DAMAGE_FIXED_VICITIM_IGNORE_MAGIC_DAMAGE
         * - 触发者: 受击方
         * @param originMagicalDamage 初始魔法伤害
         * @returns 是否无效化
         */
        DamageFixed_VictimIgnoreMagicalDamage?(originMagicalDamage: number): boolean;
        /**
         * 纯粹伤害无效化, 事件名 DAMAGE_FIXED_VICITIM_IGNORE_PURE_DAMAGE
         * - 触发者: 受击方
         * @param originPureDamage 初始纯粹伤害
         * @returns 是否无效化
         */
        DamageFixed_VictimIgnorePureDamage?(originPureDamage: number): boolean;
        /**
         * 全类型伤害伤害无效化, 事件名 DAMAGE_FIXED_VICITIM_IGNORE_ALL_DAMAGE
         * - 触发者: 受击方
         * @param originAllDamage 初始全类型伤害
         * @param attacker 攻击方
         * @returns 是否无效化
         */
        DamageFixed_VictimIgnoreAllDamage?(originAllDamage: number, attacker: CDOTA_BaseNPC): boolean;
        /**
         * 特殊物理伤害调整 - 百分比, 事件名 DAMAGE_FIXED_SPEC_PHYSICAL_DAMAGE
         * - 触发者: 受击方
         * @param dmgTable 原伤害table
         * @returns 加法叠加, 返回 正数为受到伤害增加, 负数则为伤害减少
         */
        DamageFixed_VictimSpecialPhysicalDamagePercent?(dmgTable: ApplyDamageOptions): number;
        /**
         * 核心攻击伤害调整 - 百分比, 事件名 DAMAGE_FIXED_CORE_ATTACK_DAMAGE
         * - 触发者: 双方触发
         * @param dmgTable 原伤害table
         * @returns 加法叠加, 返回 正数为受到伤害增加, 负数则为伤害减少
         */
        DamageFixed_CoreAttackDamagePercent?(attacker: CDOTA_BaseNPC, victim: CDOTA_BaseNPC): number;
        /**
         * 核心技能伤害调整 - 百分比, 事件名 DAMAGE_FIXED_CORE_ABILITY_DAMAGE
         * - 触发者: 受击方
         * @param dmgTable 原伤害table
         * @returns 加法叠加, 返回 正数为受到伤害增加, 负数则为伤害减少
         */
        DamageFixed_VictimCoreAbilityDamagePercent?(): number;
        /**
         * 核心伤害调整 - 百分比, 事件名 DAMAGE_FIXED_CORE_ALL_DAMAGE
         * - 触发者: 受击方
         * @param dmgTable 原伤害table
         * @returns 加法叠加, 返回 正数为受到伤害增加, 负数则为伤害减少
         */
        DamageFixed_VictimCoreAllDamagePercent?(attacker: CDOTA_BaseNPC, victim: CDOTA_BaseNPC): number;
        /**
         * 核心伤害调整 - 百分比, 事件名 DAMAGE_FIXED_CORE_ALL_DAMAGE
         * - 触发者: 攻击方
         * @param dmgTable 原伤害table
         * @returns 加法叠加, 返回 正数为造成伤害增加, 负数则为造成伤害减少
         */
        DamageFixed_AttackerCoreAllDamagePercent?(attacker: CDOTA_BaseNPC, victim: CDOTA_BaseNPC): number;
        /**
         * 共享 / 反射 伤害时
         * - 触发者: 受击方
         * @param attacker 攻击者
         * @param DamageTypes 伤害类型
         * @param damage 伤害值
         */
        DamageEvent_ReflectSharedDamage?(attacker: CDOTA_BaseNPC, DamageTypes: DamageTypes, damage: number): void;
        /**
         * 尖刺外壳(小强壳)的伤害无效化和记录
         * - 触发者: 受击方
         * @param damage 当次受到的伤害值
         * @returns 是否进行无效化, 无效化时伤害会变为0
         */
        DamageFixed_SpikedCarapaceIgnoreDamage?(damage: number, attacker: CDOTA_BaseNPC): boolean;
        /**
         * 虚妄之诺(神谕大招)的伤害无效化和记录
         * - 触发者: 受击方
         * @param damage 当次受到的伤害值
         * @returns 是否进行无效化, 无效化时伤害会变为0
         */
        DamageFixed_FalsePromiseIgnoreDamage?(
            attacker: CDOTA_BaseNPC,
            damage_type: DamageTypes,
            damage_flag: DamageFlag,
            damage: number,
            ability?: CDOTABaseAbility
        ): boolean;

        /**
         * /**
         * 回光返照的友方伤害事件记录
         * - 触发者: 受击者
         * @param attacker
         * @param victim
         * @param damage
         * @param damage_property
         * @param damage_type
         * @param damage_flag
         */
        DamageEvent_BorrowedTimeRecord?(
            attacker: CDOTA_BaseNPC,
            victim: CDOTA_BaseNPC,
            damage: number,

            damage_type: DamageTypes,
            damage_flag: DamageFlag
        ): void;

        /**
         * 末端伤害格挡 - 百分比, 事件名 DAMAGE_FIXED_VICITIM_END_BLOCK
         * - 触发者: 受击方
         * @param damage 伤害值
         * @returns 返回格挡百分比, 同时触发时，仅数值最高者生效。
         */
        DamageFixed_EndBlockPercent?(damage: number): number;
        /**
         * 末端伤害结算事件, 事件名 DAMAGE_END_DAMAGE_EVENT
         * - 双方触发
         * @param attacker 攻击者
         * @param damage_type 伤害类型
         * @param damage_flag 特殊伤害标识
         * @param damage 伤害值
         * @param ability 伤害来源技能
         */
        DamageEvent_EndDamage?(
            attacker: CDOTA_BaseNPC,
            target: CDOTA_BaseNPC,

            damage_type: DamageTypes,
            damage_flag: DamageFlag,
            damage: number,
            ability?: CDOTABaseAbility
        ): void;

        /**
         * 飞溅的伤害传递(物理攻击伤害), 事件名 DAMAGE_PSI_BLADE_EVENT
         * - 触发者: 攻击方
         * @param victim 受害者
         * @param damage 伤害值
         */
        DamageEvent_PsiBlade?(victim: CDOTA_BaseNPC, damage: number): void;

        /**
         * 幻象结算之后伤害结算事件 - 过完幻象的伤害增幅后触发 - 攻击者+受击者 事件名 DAMAGE_AFTER_ILLUSION_DAMAGE_EVENT
         * - 触发者: 攻击方 和 受击方
         * @param attacker
         * @param victim
         * @param damage
         * @param damage_flag
         * @param inflictor
         */
        DamageEvent_AfterIllusionDamage?(
            attacker: CDOTA_BaseNPC,
            victim: CDOTA_BaseNPC,
            damage: number,
            damage_flag: DamageFlag,
            inflictor?: CDOTABaseAbility
        );

        /**
         * 特殊溅射攻击广播 - 攻击者触发 事件名 DAMAGE_SPECIAL_BOUNCE_ATTACK_EVENT
         * - 触发者: 攻击者
         * @param victim 受击者
         * @param damage 伤害
         */
        DamageEvent_SpecialBounceAttack?(victim: CDOTA_BaseNPC, damage: number);

        /**
         * 击杀任意单位 事件名 UNIT_KILL_UNIT
         * - 触发者：击杀者
         * @param event
         */
        // OnKill?(event: ModifierInstanceEvent): void;

        /**
         * 单位死亡 事件名 UNIT_DEATH
         * - 触发者：任意死亡单位
         */
        OnUnitDeath?(event: ModifierInstanceEvent): void;

        /**
         * 英雄死亡 事件名 UNIT_HERO_DEATH
         * - 触发者：任意死亡单位
         */
        OnHeroDeath?(event: ModifierInstanceEvent): void;

        /**
         * 建筑死亡 事件名 UNIT_BUILDING_DEATH
         * - 触发者：任意死亡建筑
         */
        OnBuildingDeath?(event: ModifierInstanceEvent): void;

        /**
         * 单位复活事件 事件名 UNIT_RESPAWN
         * - 触发者：只有buff拥有者复活时触发
         */
        OnRespawn?(event: ModifierUnitEvent): void;
        /**
         * 单位开始自动警戒攻击 事件名 UNIT_ATTENTION_TO_ATTACK_TARGET
         * - 触发者：攻击者
         */
        // OnAttentionToAttackTarget?(attacker: CDOTA_BaseNPC, victim: CDOTA_BaseNPC): void;
        /**
         * 目标在单位获取范围内(类似警戒范围) 事件名 UNIT_ATTENTION_TARGET_IN_RANGE
         * - 触发者：攻击者
         */
        OnAttentionTargetInRange?(attacker: CDOTA_BaseNPC, victim: CDOTA_BaseNPC): void;
        /**
         * 被攻击前摇之前 事件名 UNIT_ATTACKED_START
         * - 触发者：受击者
         */
        OnAttackedStart?(attacker: CDOTA_BaseNPC, victim: CDOTA_BaseNPC): void;
        /**攻击前摇  触发者 攻击者 */
        OnAttackTargetStart?(attacker: CDOTA_BaseNPC, victim: CDOTA_BaseNPC): void;
        /** 攻击发射事件 */
        OnAttackLaunch?(event: ApplyDamageOptions): void;
        /**
         * 任意单位攻击命中 事件名 UNIT_ATTACK_LANDED
         */
        // OnAttackLanded?(event: ApplyDamageOptions): void;
        /** 攻击命中时，事件名 。`攻击者触发` */
        OnAttackLanded_Attacker?(event: ApplyDamageOptions): void;
        /** 受到攻击命中时，事件名 。`受害者触发` */
        OnAttackLanded_Target?(event: ApplyDamageOptions): void;

        /** 任意单位施法前摇开始 */
        OnAbilityStart?(event: ModifierAbilityEvent): void;

        /** 技能成功结束前摇，开始执行 (结束前摇，准备进入持续施法或施法) */
        OnAbilityExecuted?(event: ModifierAbilityEvent): void;

        /** 任意单位施法完成 */
        OnAbilityFullyCast?(event: ModifierAbilityEvent): void;
        /**
         * 任意单位魔法减少 事件名 UNIT_FIXED_REDUCE_MANA
         * - 触发者：魔法减少单位
         */
        //  OnReduceMana?(event: UnitEventManaData): void;
        /**
         * 任意单位消耗魔法 事件名 UNIT_FIXED_SPEND_MANA
         * - 触发者：消耗单位
         */
        //  OnSpendMana?(event: UnitEventManaData): void;

        /**
         * 任意单位触发林肯法球
         */
        //  OnSpellBlock?(event: UnitEventDataAbility): void;

        /**
         * 单位拾取神符时 事件名 UNIT_FIXED_GET_RUNE
         * - 触发者：拾取单位
         */
        //  OnGetRune?(event: UnitEventItemData & { continue: boolean }): void;

        /**
         * 任意单位发出指令 事件名 DOTA_UNIT_EXECUTE_ORDER
         */
        OnOrder?(event: ModifierUnitEvent): void;

        /**
         * 单位回血修正 事件名 UNIT_FIXED_GAIN_HEALTH
         */
        // OnHealthGained?(event: ModifierHealEvent & { gain_health: number }): void;
    }
}
