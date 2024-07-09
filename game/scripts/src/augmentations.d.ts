declare interface LocalEventDeclarations {
    /** 原始伤害结算事件 */
    DAMAGE_ORIGIN_DAMAGE_EVENT: DamageTable;
    /**
     * - 攻击溅射和攻击弹射的伤害传递 只有攻击者,攻击伤害能接收, 攻击者是英雄时触发
     * - 本事件只传递物理攻击伤害, 所以只需要数值
     */
    DAMAGE_ATTACKER_BOUNCE_EVENT: DamageTable;
    /**
     * - 剑刃风暴的攻击伤害无效化 只有攻击者,攻击伤害能接收
     * 设置result为true时, 本次伤害直接=0
     */
    DAMAGE_FIXED_ATTACKER_BLADE_STORM_ATK: { victim: CDOTA_BaseNPC; result: Boolean };
    /**
     * - 攻击特效伤害 只有攻击者,攻击伤害能接收 物理 + 魔法, 并回传
     * - PS: DamageTable;
     * - 可修改:
     */
    DAMAGE_FIXED_ATTACKER_ATK_DAMAGE: FixedDamageTable;
    /** 攻击分裂的伤害传递 只有攻击者,攻击伤害能接收, 只传递受害者和物理攻击伤害  */
    DAMAGE_ATTACKER_ATK_CLEAVE_EVENT: FixedDamageTable;
    /**
     * - 伤害共享和伤害反弹的伤害传递 反射伤害时不触发 只传递给受击者 带着攻击者一起
     */
    DAMAGE_VICITIM_REFLECT_SHARED_DAMAGE_EVENT: {
        damage: number;
        attacker: CDOTA_BaseNPC;
        type: DamageType;
    };
    /**
     * - 魔法护盾的伤害格挡百分比 只有受击者能接受, 返回一个伤害吸收百分比, 缩放原伤害数值(0- 100)
     */
    DAMAGE_FIXED_MAGIC_SHIELD_BLOCK_PCT: {
        block_pct: number;
        origin_table: FixedDamageTable;
    };
    /** 物理伤害无效化 只有受击者 */
    DAMAGE_FIXED_VICITIM_IGNORE_PHYSICAL_DAMAGE: { origin_physical: number; ignore: boolean };
    /** 魔法伤害无效化 只有受击者 */
    DAMAGE_FIXED_VICITIM_IGNORE_MAGIC_DAMAGE: {
        origin_magic: number;
        ignore: boolean;
    };
    /** 纯粹伤害无效化 只有受击者 */
    DAMAGE_FIXED_VICITIM_IGNORE_PURE_DAMAGE: {
        origin_pure: number;
        ignore: boolean;
    };
    /** 全域伤害无效化 只有受击者, 所有伤害能接受  */
    DAMAGE_FIXED_VICITIM_IGNORE_ALL_DAMAGE: {
        origin_all: number;
        ignore: boolean;
        attacker: CDOTA_BaseNPC;
    };
    // /**
    //  * - 需要专门的处理类
    //  * - 伤害护盾(6.83) 只有受击者, 所有伤害能接受
    //  * - 1. 物理攻击伤害护盾, 只吸收物理攻击伤害，不吸收物理技能伤害。
    //  * - 2. 魔法伤害护盾, 只吸收魔法伤害
    //  * - 3. 全类型伤害护盾, 吸收所有类型的伤害，不包括具有生命移除标识的伤害。
    //  * - 4. 物理伤害护盾 只吸收物理伤害，包括物理技能伤害。
    //  */
    // DAMAGE_FIXED_VICITIM_SHIELD: DamageTable;
    /** 特殊物理伤害调整, 只有受击者触发, 加法叠加, add_pct为受到伤害增加 如果传入负数则为伤害减少 */
    DAMAGE_FIXED_SPEC_PHYSICAL_DAMAGE: {
        add_pct: number;
        dmgTable: FixedDamageTable;
    };
    /** 核心攻击伤害调整  双方触发 */
    DAMAGE_FIXED_CORE_ATTACK_DAMAGE: {
        scale_pct: number;
        attacker: CDOTA_BaseNPC;
        victim: CDOTA_BaseNPC;
    };
    /** 核心技能伤害调整 受击者触发 */
    DAMAGE_FIXED_CORE_ABILITY_DAMAGE: { scale_pct: number };
    /** 核心伤害调整 攻击者和受击者都触发 */
    DAMAGE_FIXED_CORE_ALL_DAMAGE: {
        scale_pct: number;
        attacker: CDOTA_BaseNPC;
        victim: CDOTA_BaseNPC;
    };
    /** 虚妄之诺的伤害无效化 只有受击者, 传入原总伤害, 回传true false, 如果true则把伤害归零 */
    DAMAGE_FIXED_VICITIM_FALSE_PROMISE: {
        attacker: CDOTA_BaseNPC;
        damage_type: DamageType;
        damage_flag: DamageFlags;
        false_promise_result: boolean;
        total_dmg: number;
    };

    /** 回光返照的友方伤害记录 受害者是英雄时 受击者触发 */
    DAMAGE_BORROWED_TIME_EVENT: {
        attacker: CDOTA_BaseNPC;
        victim: CDOTA_BaseNPC_Hero;
        damage: number;
        damage_property: DamageProperty;
        damage_type: DamageType;
        damage_flag: DamageFlags;
    };

    /** 末端伤害格挡 只有受击者, 同时触发时，仅数值最高者生效。 */
    DAMAGE_FIXED_VICITIM_END_BLOCK: {
        total_dmg: number;
        block_pct: number;
    };
    /** 末端伤害结算事件 双方都能触发 */
    DAMAGE_END_DAMAGE_EVENT: {
        attacker: CDOTA_BaseNPC;
        victim: CDOTA_BaseNPC_Hero;
        damage_property: DamageProperty;
        damage_type: DamageType;
        damage_flag: DamageFlags;
        damage: number;
    };

    /** 飞溅的伤害传递, 攻击者触发, 只会传结算到此处的物理攻击伤害的值 */
    DAMAGE_PSI_BLADE_EVENT: { victim: CDOTA_BaseNPC; damage: number };
    /** 攻击吸血的基础值传递 攻击者触发 */
    DAMAGE_ATTACK_LEECH_EVENT: DamageTable;
    /** 技能吸血的基础值传递 攻击者触发 */
    DAMAGE_ABILITY_LEECH_EVENT: DamageTable;
    // /** 末端伤害传递 攻击者, 所有伤害接收 */
    // DAMAGE_ATTACKER_END_DAMAGE_BOUNCE_EVENT: DamageTable;
    /** 幻象结算之后伤害结算事件 - 过完幻象的伤害增幅后触发 - 攻击者+受击者 */
    DAMAGE_AFTER_ILLUSION_DAMAGE_EVENT: DamageTable;

    /** 特殊溅射攻击广播 - 攻击者 */
    DAMAGE_SPECIAL_BOUNCE_ATTACK_EVENT: DamageTable;
    /** 攻击命中时，事件名 。`攻击者触发` */
    ON_ATTACK_LANDED_ATTACKER: UnitEventAttackDamageData;
    /** 受到攻击命中时，事件名 。`受害者触发` */
    ON_ATTACK_LANDED_TARGET: UnitEventAttackDamageData;

    /** 攻击前摇前  触发者是受害者 */
    ON_ATTACK_START_TARGET: UnitEventAttackDamageData;
    /** 攻击前摇前  触发者是 攻击者 */
    ON_ATTACK_START_ATTACKER: UnitEventAttackDamageData;

    UNIT_DEATH: DamageTable;
    UNIT_HERO_DEATH: DamageTable;
    UNIT_BUILDING_DEATH: DamageTable;

    ON_ATTACK_FAIL_BOTH: UnitEventAttackDamageData;
}

// const enum ModifierFunction {
//     /**
//      * Method Name: DamageTable;
//      * 额外攻击伤害
//      */
//     PREATTACK_BONUS_DAMAGE = 0,
//     /**
//      * Method Name: DamageTable;
//      * 针对目标的额外攻击伤害
//      */
//     PREATTACK_BONUS_DAMAGE_TARGET = 1,
//     /**
//      * Method Name: DamageTable;
//      * 触发预攻击额外伤害
//      */
//     PREATTACK_BONUS_DAMAGE_PROC = 2,
//     /**
//      * Method Name: DamageTable;
//      * 暴击后的预攻击额外伤害
//      */
//     PREATTACK_BONUS_DAMAGE_POST_CRIT = 3,
//     /**
//      * Method Name: DamageTable;
//      * 基础攻击额外伤害
//      */
//     BASEATTACK_BONUSDAMAGE = 4,
//     /**
//      * Method Name: DamageTable;
//      * 物理攻击触发额外伤害
//      */
//     PROCATTACK_BONUS_DAMAGE_PHYSICAL = 5,
//     /**
//      * Method Name: DamageTable;
//      * 物理攻击转换为魔法攻击
//      */
//     PROCATTACK_CONVERT_PHYSICAL_TO_MAGICAL = 6,
//     /**
//      * Method Name: DamageTable;
//      * 魔法攻击触发额外伤害
//      */
//     PROCATTACK_BONUS_DAMAGE_MAGICAL = 7,
//     /**
//      * Method Name: DamageTable;
//      * 纯粹攻击触发额外伤害
//      */
//     PROCATTACK_BONUS_DAMAGE_PURE = 8,
//     /**
//      * Method Name: DamageTable;
//      * 针对目标的魔法攻击触发额外伤害
//      */
//     PROCATTACK_BONUS_DAMAGE_MAGICAL_TARGET = 9,
//     /**
//      * Method Name: DamageTable;
//      */
//     PROCATTACK_FEEDBACK = 10,
//     /**
//      * Method Name: DamageTable;
//      * 覆盖攻击伤害
//      */
//     OVERRIDE_ATTACK_DAMAGE = 11,
//     /**
//      * Method Name: DamageTable;
//      * 攻击前修饰
//      */
//     PRE_ATTACK = 12,
//     /**
//      * Method Name: DamageTable;
//      * 隐形等级
//      */
//     INVISIBILITY_LEVEL = 13,
//     /**
//      * Method Name: DamageTable;
//      * 隐形攻击行为例外
//      */
//     INVISIBILITY_ATTACK_BEHAVIOR_EXCEPTION = 14,
//     /**
//      * Method Name: DamageTable;
//      * 持续隐形
//      */
//     PERSISTENT_INVISIBILITY = 15,
//     /**
//      * Method Name: DamageTable;
//      * 固定移动速度加成
//      */
//     MOVESPEED_BONUS_CONSTANT = 16,
//     /**
//      * Method Name: DamageTable;
//      * 基础移动速度覆盖
//      */
//     MOVESPEED_BASE_OVERRIDE = 17,
//     /**
//      * Method Name: DamageTable;
//      * 移动速度百分比加成
//      */
//     MOVESPEED_BONUS_PERCENTAGE = 18,
//     /**
//      * Method Name: DamageTable;
//      * 独特移动速度百分比加成
//      */
//     MOVESPEED_BONUS_PERCENTAGE_UNIQUE = 19,
//     /**
//      * Method Name: DamageTable;
//      * 独特移动速度加成
//      */
//     MOVESPEED_BONUS_UNIQUE = 20,
//     /**
//      * Method Name: DamageTable;
//      * 独特移动速度加成 2
//      */
//     MOVESPEED_BONUS_UNIQUE_2 = 21,
//     /**
//      * Method Name: DamageTable;
//      * 独特固定移动速度加成
//      */
//     MOVESPEED_BONUS_CONSTANT_UNIQUE = 22,
//     /**
//      * Method Name: DamageTable;
//      * 独特固定移动速度加成 2
//      */
//     MOVESPEED_BONUS_CONSTANT_UNIQUE_2 = 23,
//     /**
//      * Method Name: DamageTable;
//      * 绝对移动速度
//      */
//     MOVESPEED_ABSOLUTE = 24,
//     /**
//      * Method Name: DamageTable;
//      * 最小绝对移动速度
//      */
//     MOVESPEED_ABSOLUTE_MIN = 25,
//     /**
//      * Method Name: DamageTable;
//      * 最大绝对移动速度
//      */
//     MOVESPEED_ABSOLUTE_MAX = 26,
//     /**
//      * Method Name: DamageTable;
//      * 忽略移动速度限制
//      */
//     IGNORE_MOVESPEED_LIMIT = 27,
//     /**
//      * Method Name: DamageTable;
//      * 移动速度限制
//      */
//     MOVESPEED_LIMIT = 28,
//     /**
//      * Method Name: DamageTable;
//      * 攻击速度基础覆盖
//      */
//     ATTACKSPEED_BASE_OVERRIDE = 29,
//     /**
//      * Method Name: DamageTable;
//      * 固定攻击速率
//      */
//     FIXED_ATTACK_RATE = 30,
//     /**
//      * Method Name: DamageTable;
//      * 固定攻击速度加成
//      */
//     ATTACKSPEED_BONUS_CONSTANT = 31,
//     /**
//      * Method Name: DamageTable;
//      * 忽略攻击速度限制
//      */
//     IGNORE_ATTACKSPEED_LIMIT = 32,
//     /**
//      * Method Name: DamageTable;
//      * 固定冷却时间减少
//      */
//     COOLDOWN_REDUCTION_CONSTANT = 33,
//     /**
//      * Method Name: DamageTable;
//      * 固定魔法消耗减少
//      */
//     MANACOST_REDUCTION_CONSTANT = 34,
//     /**
//      * Method Name: DamageTable;
//      * 固定生命消耗减少
//      */
//     HEALTHCOST_REDUCTION_CONSTANT = 35,
//     /**
//      * Method Name: DamageTable;
//      * 基础攻击时间固定
//      */
//     BASE_ATTACK_TIME_CONSTANT = 36,
//     /**
//      * Method Name: DamageTable;
//      * 调整基础攻击时间固定
//      */
//     BASE_ATTACK_TIME_CONSTANT_ADJUST = 37,
//     /**
//      * Method Name: DamageTable;
//      * 基础攻击时间百分比
//      */
//     BASE_ATTACK_TIME_PERCENTAGE = 38,
//     /**
//      * Method Name: DamageTable;
//      * 攻击前摇固定
//      */
//     ATTACK_POINT_CONSTANT = 39,
//     /**
//      * Method Name: DamageTable;
//      * 额外百分比攻击力伤害
//      */
//     BONUSDAMAGEOUTGOING_PERCENTAGE = 40,
//     /**
//      * Method Name: DamageTable;
//      * 基础攻击伤害输出百分比
//      */
//     DAMAGEOUTGOING_PERCENTAGE = 41,
//     /**
//      * Method Name: DamageTable;
//      * 幻象的基础攻击伤害输出百分比
//      */
//     DAMAGEOUTGOING_PERCENTAGE_ILLUSION = 42,
//     /**
//      * Method Name: DamageTable;
//      * 幻象增幅的基础攻击伤害输出百分比
//      */
//     DAMAGEOUTGOING_PERCENTAGE_ILLUSION_AMPLIFY = 43,
//     /**
//      * Method Name: DamageTable;
//      * 总造成伤害的百分比增加
//      */
//     TOTALDAMAGEOUTGOING_PERCENTAGE = 44,
//     /**
//      * Method Name: DamageTable;
//      * 对小兵的法术放大百分比
//      */
//     SPELL_AMPLIFY_PERCENTAGE_CREEP = 45,
//     /**
//      * Method Name: DamageTable;
//      * 法术放大百分比
//      */
//     SPELL_AMPLIFY_PERCENTAGE = 46,
//     /**
//      * Method Name: DamageTable;
//      * 独特的法术放大百分比
//      */
//     SPELL_AMPLIFY_PERCENTAGE_UNIQUE = 47,
//     /**
//      * Method Name: DamageTable;
//      * 治疗放大百分比（来源）
//      */
//     HEAL_AMPLIFY_PERCENTAGE_SOURCE = 48,
//     /**
//      * Method Name: DamageTable;
//      * 治疗放大百分比（目标）
//      */
//     HEAL_AMPLIFY_PERCENTAGE_TARGET = 49,
//     /**
//      * Method Name: DamageTable;
//      * 生命回复可以为负
//      */
//     HP_REGEN_CAN_BE_NEGATIVE = 50,
//     /**
//      * Method Name: DamageTable;
//      * 生命回复放大百分比
//      */
//     HP_REGEN_AMPLIFY_PERCENTAGE = 51,
//     /**
//      * Method Name: DamageTable;
//      * 吸血放大百分比
//      */
//     LIFESTEAL_AMPLIFY_PERCENTAGE = 52,
//     /**
//      * Method Name: DamageTable;
//      * 法术吸血放大百分比
//      */
//     SPELL_LIFESTEAL_AMPLIFY_PERCENTAGE = 53,
//     /**
//      * Method Name: DamageTable;
//      * 魔法回复放大百分比
//      */
//     MP_REGEN_AMPLIFY_PERCENTAGE = 54,
//     /**
//      * Method Name: DamageTable;
//      * 魔法吸取放大百分比
//      */
//     MANA_DRAIN_AMPLIFY_PERCENTAGE = 55,
//     /**
//      * Total amplify value is clamped to 0.
//      *
//      *
//      *
//      * Method Name: DamageTable;
//      * 魔法恢复放大百分比
//      */
//     MP_RESTORE_AMPLIFY_PERCENTAGE = 56,
//     /**
//      * Method Name: DamageTable;
//      * 基础百分比攻击力伤害
//      */
//     BASEDAMAGEOUTGOING_PERCENTAGE = 57,
//     /**
//      * Method Name: DamageTable;
//      * 独特的基础百分比攻击力伤害
//      */
//     BASEDAMAGEOUTGOING_PERCENTAGE_UNIQUE = 58,
//     /**
//      * Method Name: DamageTable;
//      * 承受的伤害百分比
//      */
//     INCOMING_DAMAGE_PERCENTAGE = 59,
//     /**
//      * Method Name: DamageTable;
//      * 承受的物理伤害百分比
//      */
//     INCOMING_PHYSICAL_DAMAGE_PERCENTAGE = 60,
//     /**
//      * This property controls 'physical' shield, if defined both on client and server.
//      * Return value on client should be current shield health, as a positive integer,
//      * on server - amount of damage blocked.
//      *
//      *
//      *
//      * Method Name: DamageTable;
//      * 承受的常数物理伤害
//      */
//     INCOMING_PHYSICAL_DAMAGE_CONSTANT = 61,
//     /**
//      * This property controls 'spell' shield, if defined both on client and server.
//      * Return value on client should be current shield health, as a positive integer,
//      * on server - amount of damage blocked.
//      *
//      *
//      *
//      * Method Name: DamageTable;
//      * 承受的常数法术伤害
//      */
//     INCOMING_SPELL_DAMAGE_CONSTANT = 62,
//     /**
//      * Method Name: DamageTable;
//      * 常数闪避
//      */
//     EVASION_CONSTANT = 63,
//     /**
//      * Method Name: DamageTable;
//      * 常数负面闪避
//      */
//     NEGATIVE_EVASION_CONSTANT = 64,
//     /**
//      * Method Name: DamageTable;
//      * 状态抗性
//      */
//     STATUS_RESISTANCE = 65,
//     /**
//      * Method Name: DamageTable;
//      * 叠加状态抗性
//      */
//     STATUS_RESISTANCE_STACKING = 66,
//     /**
//      * Method Name: DamageTable;
//      * 施法者的状态抗性
//      */
//     STATUS_RESISTANCE_CASTER = 67,
//     /**
//      * Method Name: DamageTable;
//      * 避免伤害
//      */
//     AVOID_DAMAGE = 68,
//     /**
//      * Method Name: DamageTable;
//      * 避免法术
//      */
//     AVOID_SPELL = 69,
//     /**
//      * Method Name: DamageTable;
//      * 闪避百分比
//      */
//     MISS_PERCENTAGE = 70,
//     /**
//      * Values above 100% are ignored.
//      *
//      *
//      *
//      * Method Name: DamageTable;
//      * 基础物理护甲百分比
//      */
//     PHYSICAL_ARMOR_BASE_PERCENTAGE = 71,
//     /**
//      * Method Name: DamageTable;
//      * 总体物理护甲百分比
//      */
//     PHYSICAL_ARMOR_TOTAL_PERCENTAGE = 72,
//     /**
//      * Method Name: DamageTable;
//      * 额外物理护甲加成
//      */
//     PHYSICAL_ARMOR_BONUS = 73,
//     /**
//      * Method Name: DamageTable;
//      * 独特的额外物理护甲加成
//      */
//     PHYSICAL_ARMOR_BONUS_UNIQUE = 74,
//     /**
//      * Method Name: DamageTable;
//      * 主动触发的独特额外物理护甲加成
//      */
//     PHYSICAL_ARMOR_BONUS_UNIQUE_ACTIVE = 75,
//     /**
//      * Method Name: DamageTable;
//      * 后期额外物理护甲加成
//      */
//     PHYSICAL_ARMOR_BONUS_POST = 76,
//     /**
//      * Method Name: DamageTable;
//      * 忽略物理护甲
//      */
//     IGNORE_PHYSICAL_ARMOR = 77,
//     /**
//      * Method Name: DamageTable;
//      * 基础魔法抗性减少
//      */
//     MAGICAL_RESISTANCE_BASE_REDUCTION = 78,
//     /**
//      * Method Name: DamageTable;
//      * 直接修改魔法抗性
//      */
//     MAGICAL_RESISTANCE_DIRECT_MODIFICATION = 79,
//     /**
//      * Method Name: DamageTable;
//      * 魔法抗性加成
//      */
//     MAGICAL_RESISTANCE_BONUS = 80,
//     /**
//      * Method Name: DamageTable;
//      * 幻象的魔法抗性加成
//      */
//     MAGICAL_RESISTANCE_BONUS_ILLUSIONS = 81,
//     /**
//      * Method Name: DamageTable;
//      * 独特的魔法抗性加成
//      */
//     MAGICAL_RESISTANCE_BONUS_UNIQUE = 82,
//     /**
//      * Method Name: DamageTable;
//      * 独特的减少魔法抗性
//      */
//     MAGICAL_RESISTANCE_DECREPIFY_UNIQUE = 83,
//     /**
//      * Method Name: DamageTable;
//      * 基础魔法回复
//      */
//     BASE_MANA_REGEN = 84,
//     /**
//      * Method Name: DamageTable;
//      * 固定魔法回复
//      */
//     MANA_REGEN_CONSTANT = 85,
//     /**
//      * Method Name: DamageTable;
//      * 独特的固定魔法回复
//      */
//     MANA_REGEN_CONSTANT_UNIQUE = 86,
//     /**
//      * Method Name: DamageTable;
//      * 魔法回复总百分比
//      */
//     MANA_REGEN_TOTAL_PERCENTAGE = 87,
//     /**
//      * Method Name: DamageTable;
//      * 固定生命回复
//      */
//     HEALTH_REGEN_CONSTANT = 88,
//     /**
//      * Method Name: DamageTable;
//      * 生命回复百分比
//      */
//     HEALTH_REGEN_PERCENTAGE = 89,
//     /**
//      * Method Name: DamageTable;
//      * 独特的生命回复百分比
//      */
//     HEALTH_REGEN_PERCENTAGE_UNIQUE = 90,
//     /**
//      * Method Name: DamageTable;
//      * 生命加成
//      */
//     HEALTH_BONUS = 91,
//     /**
//      * Method Name: DamageTable;
//      * 魔法加成
//      */
//     MANA_BONUS = 92,
//     /**
//      * Method Name: DamageTable;
//      * 额外力量加成
//      */
//     EXTRA_STRENGTH_BONUS = 93,
//     /**
//      * Method Name: DamageTable;
//      * 额外生命加成
//      */
//     EXTRA_HEALTH_BONUS = 94,
//     /**
//      * Method Name: DamageTable;
//      * 额外魔法加成
//      */
//     EXTRA_MANA_BONUS = 95,
//     /**
//      * Method Name: DamageTable;
//      * 额外魔法百分比加成
//      */
//     EXTRA_MANA_BONUS_PERCENTAGE = 96,
//     /**
//      * Method Name: DamageTable;
//      * 额外生命百分比加成
//      */
//     EXTRA_HEALTH_PERCENTAGE = 97,
//     /**
//      * Method Name: DamageTable;
//      * 额外魔法百分比加成
//      */
//     EXTRA_MANA_PERCENTAGE = 98,
//     /**
//      * Method Name: DamageTable;
//      * 力量统计加成
//      */
//     STATS_STRENGTH_BONUS = 99,
//     /**
//      * Method Name: DamageTable;
//      * 敏捷统计加成
//      */
//     STATS_AGILITY_BONUS = 100,
//     /**
//      * Method Name: DamageTable;
//      * 智力统计加成
//      */
//     STATS_INTELLECT_BONUS = 101,
//     /**
//      * Method Name: DamageTable;
//      * 力量统计百分比加成
//      */
//     STATS_STRENGTH_BONUS_PERCENTAGE = 102,
//     /**
//      * Method Name: DamageTable;
//      * 敏捷统计百分比加成
//      */
//     STATS_AGILITY_BONUS_PERCENTAGE = 103,
//     /**
//      * Method Name: DamageTable;
//      * 智力统计百分比加成
//      */
//     STATS_INTELLECT_BONUS_PERCENTAGE = 104,
//     /**
//      * Method Name: DamageTable;
//      * 施法距离加成
//      */
//     CAST_RANGE_BONUS = 105,
//     /**
//      * Method Name: DamageTable;
//      * 施法距离百分比加成
//      */
//     CAST_RANGE_BONUS_PERCENTAGE = 106,
//     /**
//      * Method Name: DamageTable;
//      * 目标施法距离加成
//      */
//     CAST_RANGE_BONUS_TARGET = 107,
//     /**
//      * Method Name: DamageTable;
//      * 叠加施法距离加成
//      */
//     CAST_RANGE_BONUS_STACKING = 108,
//     /**
//      * Method Name: DamageTable;
//      * 基础攻击范围覆盖
//      */
//     ATTACK_RANGE_BASE_OVERRIDE = 109,
//     /**
//      * Method Name: DamageTable;
//      * 攻击范围加成
//      */
//     ATTACK_RANGE_BONUS = 110,
//     /**
//      * Method Name: DamageTable;
//      * 独特的攻击范围加成
//      */
//     ATTACK_RANGE_BONUS_UNIQUE = 111,
//     /**
//      * Method Name: DamageTable;
//      * 攻击范围百分比加成
//      */
//     ATTACK_RANGE_BONUS_PERCENTAGE = 112,
//     /**
//      * Method Name: DamageTable;
//      * 最大攻击范围
//      */
//     MAX_ATTACK_RANGE = 113,
//     /**
//      * Method Name: DamageTable;
//      * 弹道速度加成
//      */
//     PROJECTILE_SPEED_BONUS = 114,
//     /**
//      * Method Name: DamageTable;
//      * 弹道速度百分比加成
//      */
//     PROJECTILE_SPEED_BONUS_PERCENTAGE = 115,
//     /**
//      * Method Name: DamageTable;
//      * 弹道特效名称
//      */
//     PROJECTILE_NAME = 116,
//     /**
//      * Method Name: DamageTable;
//      * 重生? 复活时间减少?
//      */
//     REINCARNATION = 117,
//     /**
//      * Method Name: DamageTable;
//      * 重生时间?复活时间减少?
//      */
//     RESPAWNTIME = 118,
//     /**
//      * Method Name: DamageTable;
//      * 复活时间百分比
//      */
//     RESPAWNTIME_PERCENTAGE = 119,
//     /**
//      * Method Name: DamageTable;
//      * 叠加复活时间
//      */
//     RESPAWNTIME_STACKING = 120,
//     /**
//      * Method Name: DamageTable;
//      * 冷却时间百分比
//      */
//     COOLDOWN_PERCENTAGE = 121,
//     /**
//      * Method Name: DamageTable;
//      * 进行中的冷却时间百分比
//      */
//     COOLDOWN_PERCENTAGE_ONGOING = 122,
//     /**
//      * Method Name: DamageTable;
//      * 施法时间百分比
//      */
//     CASTTIME_PERCENTAGE = 123,
//     /**
//      * Method Name: DamageTable;
//      * 攻击动画时间百分比
//      */
//     ATTACK_ANIM_TIME_PERCENTAGE = 124,
//     /**
//      * Method Name: DamageTable;
//      * 魔法消耗百分比
//      */
//     MANACOST_PERCENTAGE = 125,
//     /**
//      * Method Name: DamageTable;
//      * 叠加魔法消耗百分比
//      */
//     MANACOST_PERCENTAGE_STACKING = 126,
//     /**
//      * Method Name: DamageTable;
//      * 生命消耗百分比
//      */
//     HEALTHCOST_PERCENTAGE = 127,
//     /**
//      * Method Name: DamageTable;
//      * 叠加生命消耗百分比
//      */
//     HEALTHCOST_PERCENTAGE_STACKING = 128,
//     /**
//      * Method Name: DamageTable;
//      * 死亡金钱损失
//      */
//     DEATHGOLDCOST = 129,
//     /**
//      * Method Name: DamageTable;
//      * 经验获取加速
//      */
//     EXP_RATE_BOOST = 130,
//     /**
//      * Method Name: DamageTable;
//      * 金钱获取加速
//      */
//     GOLD_RATE_BOOST = 131,
//     /**
//      * Method Name: DamageTable;
//      * 预攻击暴击
//      */
//     PREATTACK_CRITICALSTRIKE = 132,
//     /**
//      * Method Name: DamageTable;
//      * 针对目标的预攻击暴击
//      */
//     PREATTACK_TARGET_CRITICALSTRIKE = 133,
//     /**
//      * Method Name: DamageTable;
//      * 固定魔法伤害格挡
//      */
//     MAGICAL_CONSTANT_BLOCK = 134,
//     /**
//      * Method Name: DamageTable;
//      * 固定物理伤害格挡
//      */
//     PHYSICAL_CONSTANT_BLOCK = 135,
//     /**
//      * Method Name: DamageTable;
//      * 特殊固定物理伤害格挡
//      */
//     PHYSICAL_CONSTANT_BLOCK_SPECIAL = 136,
//     /**
//      * Method Name: DamageTable;
//      * 无法避免的固定伤害格挡（护甲前）
//      */
//     TOTAL_CONSTANT_BLOCK_UNAVOIDABLE_PRE_ARMOR = 137,
//     /**
//      * Method Name: DamageTable;
//      * 总固定伤害格挡
//      */
//     TOTAL_CONSTANT_BLOCK = 138,
//     /**
//      * Method Name: DamageTable;
//      * 覆盖动画
//      */
//     OVERRIDE_ANIMATION = 139,
//     /**
//      * Method Name: DamageTable;
//      * 覆盖动画权重
//      */
//     OVERRIDE_ANIMATION_WEIGHT = 140,
//     /**
//      * Method Name: DamageTable;
//      * 覆盖动画速率
//      */
//     OVERRIDE_ANIMATION_RATE = 141,
//     /**
//      * Method Name: DamageTable;
//      * 吸收法术
//      */
//     ABSORB_SPELL = 142,
//     /**
//      * Method Name: DamageTable;
//      * 反射法术
//      */
//     REFLECT_SPELL = 143,
//     /**
//      * Method Name: DamageTable;
//      * 禁用自动攻击
//      */
//     DISABLE_AUTOATTACK = 144,
//     /**
//      * Method Name: DamageTable;
//      * 额外白天视野
//      */
//     BONUS_DAY_VISION = 145,
//     /**
//      * Method Name: DamageTable;
//      * 额外夜间视野
//      */
//     BONUS_NIGHT_VISION = 146,
//     /**
//      * Method Name: DamageTable;
//      * 独特的夜间视野加成
//      */
//     BONUS_NIGHT_VISION_UNIQUE = 147,
//     /**
//      * Method Name: DamageTable;
//      * 视野百分比加成
//      */
//     BONUS_VISION_PERCENTAGE = 148,
//     /**
//      * Method Name: DamageTable;
//      * 固定白天视野
//      */
//     FIXED_DAY_VISION = 149,
//     /**
//      * Method Name: DamageTable;
//      * 固定夜间视野
//      */
//     FIXED_NIGHT_VISION = 150,
//     /**
//      * Method Name: DamageTable;
//      * 最小生命值
//      */
//     MIN_HEALTH = 151,
//     /**
//      * Method Name: DamageTable;
//      * 绝对无物理伤害
//      */
//     ABSOLUTE_NO_DAMAGE_PHYSICAL = 152,
//     /**
//      * Method Name: DamageTable;
//      * 绝对无魔法伤害
//      */
//     ABSOLUTE_NO_DAMAGE_MAGICAL = 153,
//     /**
//      * Method Name: DamageTable;
//      * 绝对无纯粹伤害
//      */
//     ABSOLUTE_NO_DAMAGE_PURE = 154,
//     /**
//      * Method Name: DamageTable;
//      * 是否幻象
//      */
//     IS_ILLUSION = 155,
//     /**
//      * Method Name: DamageTable;
//      * 幻象标签
//      */
//     ILLUSION_LABEL = 156,
//     /**
//      * Method Name: DamageTable;
//      * 强幻象
//      */
//     STRONG_ILLUSION = 157,
//     /**
//      * Method Name: DamageTable;
//      * 超级幻象
//      */
//     SUPER_ILLUSION = 158,
//     /**
//      * Method Name: DamageTable;
//      * 带终极技能的超级幻象
//      */
//     SUPER_ILLUSION_WITH_ULTIMATE = 159,
//     /**
//      * Method Name: DamageTable;
//      * 死亡期间经验值
//      */
//     XP_DURING_DEATH = 160,
//     /**
//      * Method Name: DamageTable;
//      * 转身速率百分比
//      */
//     TURN_RATE_PERCENTAGE = 161,
//     /**
//      * Method Name: DamageTable;
//      * 转身速率覆盖
//      */
//     TURN_RATE_OVERRIDE = 162,
//     /**
//      * Method Name: DamageTable;
//      * 禁用治疗
//      */
//     DISABLE_HEALING = 163,
//     /**
//      * Method Name: DamageTable;
//      * 始终允许攻击
//      */
//     ALWAYS_ALLOW_ATTACK = 164,
//     /**
//      * Method Name: DamageTable;
//      * 始终处于虚无状态攻击
//      */
//     ALWAYS_ETHEREAL_ATTACK = 165,
//     /**
//      * Method Name: DamageTable;
//      * 覆盖攻击为魔法
//      */
//     OVERRIDE_ATTACK_MAGICAL = 166,
//     /**
//      * Method Name: DamageTable;
//      * 单位统计需要刷新
//      */
//     UNIT_STATS_NEEDS_REFRESH = 167,
//     BOUNTY_CREEP_MULTIPLIER = 168,
//     BOUNTY_OTHER_MULTIPLIER = 169,
//     /**
//      * Method Name: DamageTable;
//      * 单位禁止升级
//      */
//     UNIT_DISALLOW_UPGRADING = 170,
//     /**
//      * Method Name: DamageTable;
//      * 躲避弹道
//      */
//     DODGE_PROJECTILE = 171,
//     /**
//      * Method Name: DamageTable;
//      * 触发视觉特效并结束攻击?
//      */
//     TRIGGER_COSMETIC_AND_END_ATTACK = 172,
//     /**
//      * Method Name: DamageTable;
//      * 最大减益效果持续时间
//      */
//     MAX_DEBUFF_DURATION = 173,
//     /**
//      * Method Name: DamageTable;
//      * 主属性伤害乘数
//      */
//     PRIMARY_STAT_DAMAGE_MULTIPLIER = 174,
//     /**
//      * Method Name: DamageTable;
//      * 预攻击致命一击
//      */
//     PREATTACK_DEADLY_BLOW = 175,
//     /**
//      * Method Name: DamageTable;
//      * 保持位置时始终自动攻击
//      */
//     ALWAYS_AUTOATTACK_WHILE_HOLD_POSITION = 176,
//     /**
//      * Method Name: DamageTable;
//      */
//     ON_SPELL_TARGET_READY = 177,
//     /**
//      * Method Name: DamageTable;
//      */
//     ON_ATTACK_RECORD = 178,
//     /**
//      * Method Name: DamageTable;
//      */
//     ON_ATTACK_START = 179,
//     /**
//      * Method Name: DamageTable;
//      */
//     ON_ATTACK = 180,
//     /**
//      * Method Name: DamageTable;
//      */
//     ON_ATTACK_LANDED = 181,
//     /**
//      * Method Name: DamageTable;
//      */
//     ON_ATTACK_FAIL = 182,
//     /**
//      * Happens even if attack can't be issued.
//      *
//      *
//      *
//      * Method Name: DamageTable;
//      */
//     ON_ATTACK_ALLIED = 183,
//     /**
//      * Method Name: DamageTable;
//      */
//     ON_PROJECTILE_DODGE = 184,
//     /**
//      * Method Name: DamageTable;
//      */
//     ON_ORDER = 185,
//     /**
//      * Method Name: DamageTable;
//      */
//     ON_UNIT_MOVED = 186,
//     /**
//      * Method Name: DamageTable;
//      */
//     ON_ABILITY_START = 187,
//     /**
//      * Method Name: DamageTable;
//      */
//     ON_ABILITY_EXECUTED = 188,
//     /**
//      * Method Name: DamageTable;
//      */
//     ON_ABILITY_FULLY_CAST = 189,
//     /**
//      * Method Name: DamageTable;
//      */
//     ON_BREAK_INVISIBILITY = 190,
//     /**
//      * Method Name: DamageTable;
//      */
//     ON_ABILITY_END_CHANNEL = 191,
//     ON_PROCESS_UPGRADE = 192,
//     ON_REFRESH = 193,
//     /**
//      * Method Name: DamageTable;
//      */
//     ON_TAKEDAMAGE = 194,
//     /**
//      * Method Name: DamageTable;
//      */
//     ON_DEATH_PREVENTED = 195,
//     /**
//      * Method Name: DamageTable;
//      */
//     ON_STATE_CHANGED = 196,
//     ON_ORB_EFFECT = 197,
//     /**
//      * Method Name: DamageTable;
//      */
//     ON_PROCESS_CLEAVE = 198,
//     /**
//      * Method Name: DamageTable;
//      */
//     ON_DAMAGE_CALCULATED = 199,
//     /**
//      * Method Name: DamageTable;
//      */
//     ON_MAGIC_DAMAGE_CALCULATED = 200,
//     /**
//      * Method Name: DamageTable;
//      */
//     ON_ATTACKED = 201,
//     /**
//      * Method Name: DamageTable;
//      */
//     ON_DEATH = 202,
//     /**
//      * Method Name: DamageTable;
//      */
//     ON_DEATH_COMPLETED = 203,
//     /**
//      * Method Name: DamageTable;
//      */
//     ON_RESPAWN = 204,
//     /**
//      * Method Name: DamageTable;
//      */
//     ON_SPENT_MANA = 205,
//     /**
//      * Method Name: DamageTable;
//      */
//     ON_SPENT_HEALTH = 206,
//     /**
//      * Method Name: DamageTable;
//      */
//     ON_TELEPORTING = 207,
//     /**
//      * Method Name: DamageTable;
//      */
//     ON_TELEPORTED = 208,
//     /**
//      * Method Name: DamageTable;
//      */
//     ON_SET_LOCATION = 209,
//     /**
//      * Method Name: DamageTable;
//      */
//     ON_HEALTH_GAINED = 210,
//     /**
//      * Method Name: DamageTable;
//      */
//     ON_MANA_GAINED = 211,
//     /**
//      * Method Name: DamageTable;
//      */
//     ON_TAKEDAMAGE_KILLCREDIT = 212,
//     /**
//      * Method Name: DamageTable;
//      */
//     ON_HERO_KILLED = 213,
//     /**
//      * Method Name: DamageTable;
//      */
//     ON_HEAL_RECEIVED = 214,
//     /**
//      * Method Name: DamageTable;
//      */
//     ON_BUILDING_KILLED = 215,
//     /**
//      * Method Name: DamageTable;
//      */
//     ON_MODEL_CHANGED = 216,
//     /**
//      * Method Name: DamageTable;
//      */
//     ON_MODIFIER_ADDED = 217,
//     /**
//      * Method Name: DamageTable;
//      * buff描述
//      */
//     TOOLTIP = 218,
//     /**
//      * Method Name: DamageTable;
//      * 模型更改
//      */
//     MODEL_CHANGE = 219,
//     /**
//      * Method Name: DamageTable;
//      * 模型缩放
//      */
//     MODEL_SCALE = 220,
//     /**
//      * Method Name: DamageTable;
//      * 模型缩放动画时间
//      */
//     MODEL_SCALE_ANIMATE_TIME = 221,
//     /**
//      * Always applies scepter when this property is active
//      *
//      *
//      *
//      * Method Name: DamageTable;
//      * 是否持有神杖
//      */
//     IS_SCEPTER = 222,
//     /**
//      * Method Name: DamageTable;
//      * 是否持有碎片
//      */
//     IS_SHARD = 223,
//     /**
//      * Method Name: DamageTable;
//      * 雷达冷却时间减少
//      */
//     RADAR_COOLDOWN_REDUCTION = 224,
//     /**
//      * Method Name: DamageTable;
//      * 翻译活动修饰符
//      */
//     TRANSLATE_ACTIVITY_MODIFIERS = 225,
//     /**
//      * Method Name: DamageTable;
//      * 翻译攻击声音
//      */
//     TRANSLATE_ATTACK_SOUND = 226,
//     /**
//      * Method Name: DamageTable;
//      * 临时单位血条旁 圆  生命周期比例
//      */
//     LIFETIME_FRACTION = 227,
//     /**
//      * Method Name: DamageTable;
//      * 提供战争迷雾位置
//      */
//     PROVIDES_FOW_POSITION = 228,
//     /**
//      * Method Name: DamageTable;
//      * 法术需要生命值
//      */
//     SPELLS_REQUIRE_HP = 229,
//     /**
//      * Method Name: DamageTable;
//      * 强制在小地图上绘制
//      */
//     FORCE_DRAW_MINIMAP = 230,
//     /**
//      * Method Name: DamageTable;
//      * 禁止转身
//      */
//     DISABLE_TURNING = 231,
//     /**
//      * Method Name: DamageTable;
//      * 忽略施法角度
//      */
//     IGNORE_CAST_ANGLE = 232,
//     /**
//      * Method Name: DamageTable;
//      * 改变技能值
//      */
//     CHANGE_ABILITY_VALUE = 233,
//     /**
//      * Method Name: DamageTable;
//      * 覆盖技能特效
//      */
//     OVERRIDE_ABILITY_SPECIAL = 234,
//     /**
//      * Method Name: DamageTable;
//      * 覆盖技能特效值
//      */
//     OVERRIDE_ABILITY_SPECIAL_VALUE = 235,
//     /**
//      * Method Name: DamageTable;
//      * 技能布局
//      */
//     ABILITY_LAYOUT = 236,
//     /**
//      * Method Name: DamageTable;
//      */
//     ON_DOMINATED = 237,
//     /**
//      * Method Name: DamageTable;
//      */
//     ON_KILL = 238,
//     /**
//      * Method Name: DamageTable;
//      */
//     ON_ASSIST = 239,
//     /**
//      * Method Name: DamageTable;
//      * 风暴双生
//      */
//     TEMPEST_DOUBLE = 240,
//     /**
//      * Method Name: DamageTable;
//      * 模型更改时保留粒子效果
//      */
//     PRESERVE_PARTICLES_ON_MODEL_CHANGE = 241,
//     /**
//      * Method Name: DamageTable;
//      */
//     ON_ATTACK_FINISHED = 242,
//     /**
//      * Method Name: DamageTable;
//      * 忽略冷却时间
//      */
//     IGNORE_COOLDOWN = 243,
//     /**
//      * Method Name: DamageTable;
//      * 能够攻击树木
//      */
//     CAN_ATTACK_TREES = 244,
//     /**
//      * Method Name: DamageTable;
//      * 视觉Z轴偏移
//      */
//     VISUAL_Z_DELTA = 245,
//     /**
//      * Method Name: DamageTable;
//      * 视觉Z轴速度基础覆盖
//      */
//     VISUAL_Z_SPEED_BASE_OVERRIDE = 246,
//     INCOMING_DAMAGE_ILLUSION = 247,
//     /**
//      * Method Name: DamageTable;
//      * 攻击者不提供视野
//      */
//     DONT_GIVE_VISION_OF_ATTACKER = 248,
//     /**
//      * Method Name: DamageTable;
//      * buff描述2
//      */
//     TOOLTIP2 = 249,
//     /**
//      * Method Name: DamageTable;
//      */
//     ON_ATTACK_RECORD_DESTROY = 250,
//     /**
//      * Method Name: DamageTable;
//      */
//     ON_PROJECTILE_OBSTRUCTION_HIT = 251,
//     /**
//      * Method Name: DamageTable;
//      * 抑制传送
//      */
//     SUPPRESS_TELEPORT = 252,
//     /**
//      * Method Name: DamageTable;
//      */
//     ON_ATTACK_CANCELLED = 253,
//     /**
//      * Method Name: DamageTable;
//      * 抑制分裂攻击
//      */
//     SUPPRESS_CLEAVE = 254,
//     /**
//      * Method Name: DamageTable;
//      * 机器人攻击评分加成
//      */
//     BOT_ATTACK_SCORE_BONUS = 255,
//     /**
//      * Method Name: DamageTable;
//      * 攻击速度减少百分比
//      */
//     ATTACKSPEED_REDUCTION_PERCENTAGE = 256,
//     /**
//      * Method Name: DamageTable;
//      * 移动速度减少百分比
//      */
//     MOVESPEED_REDUCTION_PERCENTAGE = 257,
//     ATTACK_WHILE_MOVING_TARGET = 258,
//     /**
//      * Method Name: DamageTable;
//      * 攻击速度百分比
//      */
//     ATTACKSPEED_PERCENTAGE = 259,
//     /**
//      * Method Name: DamageTable;
//      */
//     ON_ATTEMPT_PROJECTILE_DODGE = 260,
//     /**
//      * Method Name: DamageTable;
//      */
//     ON_PREDEBUFF_APPLIED = 261,
//     /**
//      * Method Name: DamageTable;
//      * 冷却时间百分比叠加
//      */
//     COOLDOWN_PERCENTAGE_STACKING = 262,
//     /**
//      * Method Name: DamageTable;
//      * 法术重定向目标
//      */
//     SPELL_REDIRECT_TARGET = 263,
//     /**
//      * Method Name: DamageTable;
//      * 固定转身速率
//      */
//     TURN_RATE_CONSTANT = 264,
//     /**
//      * Method Name: DamageTable;
//      * 偷塔?保护?
//      */
//     RAT_PACK = 265,
//     /**
//      * Method Name: DamageTable;
//      * 物理伤害输出百分比
//      */
//     PHYSICALDAMAGEOUTGOING_PERCENTAGE = 266,
//     /**
//      * Method Name: DamageTable;
//      * 击退放大百分比
//      */
//     KNOCKBACK_AMPLIFICATION_PERCENTAGE = 267,
//     /**
//      * Return value is a count of pips.
//      *
//      *
//      *
//      * Method Name: DamageTable;
//      * 生命条固定格子标记
//      */
//     HEALTHBAR_PIPS = 268,
//     /**
//      * This property controls 'universal' shield, if defined both on client and
//      * server. Return value on client should be current shield health, as a positive
//      * integer, on server - amount of damage blocked.
//      *
//      *
//      *
//      * Method Name: DamageTable;
//      * 固定受到的伤害
//      */
//     INCOMING_DAMAGE_CONSTANT = 269,
//     /**
//      * Method Name: DamageTable;
//      */
//     SPELL_APPLIED_SUCCESSFULLY = 270,
//     /**
//      * Method Name: DamageTable;
//      * 减伤后避免伤害
//      */
//     AVOID_DAMAGE_AFTER_REDUCTIONS = 271,
//     INVALID = 65535,
// }
// export {};
