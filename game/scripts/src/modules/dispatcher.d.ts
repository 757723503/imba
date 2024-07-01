declare const enum ModifierFunctions {
    /**
     * 原始伤害结算事件 , 事件名 DamageEvent_OriginDamage
     */
    DamageEvent_OriginDamage = 'DamageEvent_OriginDamage',
    /**
     * 攻击弹射和溅射, 和 **分裂** 不一样, 事件名 DAMAGE_ATTACKER_BOUNCE_EVENT
     */
    DamageEvent_AttackBounce = 'DamageEvent_AttackBounce',
    /**
     * 剑刃风暴的攻击伤害无效化, 事件名 DAMAGE_FIXED_ATTACKER_BLADE_STORM_ATK
     */
    DamageFixed_BladeStormAttack = 'DamageFixed_BladeStormAttack',
    // /**
    //  * 攻击特效伤害的添加 - 常量, 事件名 DAMAGE_FIXED_ATTACKER_ATK_DAMAGE
    //  */
    // DamageFixed_AttackEffectDamage = "DamageFixed_AttackEffectDamage",
    /**
     * 攻击分裂的广播, 和 **溅射** 不一样, 事件名 DAMAGE_ATTACKER_ATK_CLEAVE_EVENT
     */
    DamageEvent_AttackCleave = 'DamageEvent_AttackCleave',
    /**
     * 魔法护盾的伤害格挡 - 百分比, 事件名 DAMAGE_FIXED_MAGIC_SHIELD_BLOCK_PCT
     */
    DamageFixed_MagicShieldBlock = 'DamageFixed_MagicShieldBlock',
    /**
     * 物理伤害无效化, 事件名 DAMAGE_FIXED_VICITIM_IGNORE_PHYSICAL_DAMAGE
     */
    DamageFixed_VictimIgnorePhysicalDamage = 'DamageFixed_VictimIgnorePhysicalDamage',
    /**
     * 魔法伤害无效化, 事件名 DAMAGE_FIXED_VICITIM_IGNORE_MAGIC_DAMAGE
     */
    DamageFixed_VictimIgnoreMagicalDamage = 'DamageFixed_VictimIgnoreMagicalDamage',
    /**
     * 纯粹伤害无效化, 事件名 DAMAGE_FIXED_VICITIM_IGNORE_PURE_DAMAGE
     */
    DamageFixed_VictimIgnorePureDamage = 'DamageFixed_VictimIgnorePureDamage',
    /**
     * 全类型伤害伤害无效化, 事件名 DAMAGE_FIXED_VICITIM_IGNORE_ALL_DAMAGE
     */
    DamageFixed_VictimIgnoreAllDamage = 'DamageFixed_VictimIgnoreAllDamage',
    /**
     * 特殊物理伤害调整 - 百分比, 事件名 DAMAGE_FIXED_SPEC_PHYSICAL_DAMAGE
     */
    DamageFixed_VictimSpecialPhysicalDamagePercent = 'DamageFixed_VictimSpecialPhysicalDamagePercent',
    /**
     * 核心攻击伤害调整 - 百分比, 事件名 DAMAGE_FIXED_CORE_ATTACK_DAMAGE
     */
    DamageFixed_CoreAttackDamagePercent = 'DamageFixed_CoreAttackDamagePercent',
    /**
     * 核心技能伤害调整 - 百分比, 事件名 DAMAGE_FIXED_CORE_ABILITY_DAMAGE
     */
    DamageFixed_VictimCoreAbilityDamagePercent = 'DamageFixed_VictimCoreAbilityDamagePercent',
    /**
     * 核心伤害调整 - 百分比, 事件名 DAMAGE_FIXED_CORE_ALL_DAMAGE <br />
     * - 受击者伤害调整`DamageFixed_VictimCoreAllDamagePercent`
     * - 攻击者伤害调整`DamageFixed_AttackerCoreAllDamagePercent`
     */
    DamageFixed_CoreAllDamagePercent = 'DamageFixed_CoreAllDamagePercent',
    /**
     * 受害者触发 共享 / 反射 伤害时
     */
    DamageEvent_ReflectSharedDamage = 'DamageEvent_ReflectSharedDamage',
    /**
     * 尖刺外壳(小强壳)的伤害无效化和记录
     */
    DamageFixed_SpikedCarapaceIgnoreDamage = 'DamageFixed_SpikedCarapaceIgnoreDamage',
    /**
     * 虚妄之诺(神谕大招)的伤害无效化和记录
     */
    DamageFixed_FalsePromiseIgnoreDamage = 'DamageFixed_FalsePromiseIgnoreDamage',
    /**
     * 回光返照的友方伤害事件记录
     */
    DamageEvent_BorrowedTimeRecord = 'DamageEvent_BorrowedTimeRecord',
    /**
     * 末端伤害格挡 - 百分比, 事件名 DAMAGE_FIXED_VICITIM_END_BLOCK
     */
    DamageFixed_EndBlockPercent = 'DamageFixed_EndBlockPercent',
    /**
     * 末端伤害结算事件, 事件名 DAMAGE_END_DAMAGE_EVENT
     */
    DamageEvent_EndDamage = 'DamageEvent_EndDamage',
    /**
     * 飞溅的伤害传递(物理攻击伤害), 事件名 DAMAGE_PSI_BLADE_EVENT
     */
    DamageEvent_PsiBlade = 'DamageEvent_PsiBlade',
    /**
     * 幻象结算之后伤害结算事件 - 过完幻象的伤害增幅后触发 - 攻击者+受击者 事件名 DAMAGE_AFTER_ILLUSION_DAMAGE_EVENT
     */
    DamageEvent_AfterIllusionDamage = 'DamageEvent_AfterIllusionDamage',
    /**
     * 特殊溅射攻击广播 - 攻击者触发 事件名 DAMAGE_SPECIAL_BOUNCE_ATTACK_EVENT
     */
    DamageEvent_SpecialBounceAttack = 'DamageEvent_SpecialBounceAttack',

    /**
     * 击杀任意单位，事件名 UNIT_KILL_UNIT 。
     * 击杀者触发
     */
    OnKill = 'OnKill',

    /**
     * 死亡的单位触发 事件名 UNIT_DEATH
     * - 触发者：任意死亡英雄
     */
    OnUnitDeath = 'OnUnitDeath',

    /**
     * 英雄死亡 事件名 UNIT_HERO_DEATH
     * - 触发者：任意死亡英雄
     */
    OnHeroDeath = 'OnHeroDeath',

    /**
     * 英雄死亡 事件名 UNIT_BUILDING_DEATH
     * - 触发者：任意死亡英雄
     */
    OnBuildingDeath = 'OnBuildingDeath',

    /**
     * 单位复活事件
     */
    OnRespawn = 'OnRespawn',

    /**
     * 被攻击前摇之前 事件名
     * `UNIT_ATTACKED_START`
     * `受击者触发`
     */
    OnAttackedStart = 'OnAttackedStart',

    /**
     * 单位开始自动警戒攻击 事件名
     * `UNIT_ATTENTION_TO_ATTACK_TARGET`
     * `触发者是攻击者`
     */
    OnAttentionToAttackTarget = 'OnAttentionToAttackTarget',
    /**
     * 目标在单位获取范围内(类似警戒范围) 事件名
     * `UNIT_ATTENTION_TARGET_IN_RANGE`
     * `触发者是攻击者`
     */
    OnAttentionTargetInRange = 'OnAttentionTargetInRange',
    /** 攻击前摇前  触发者是攻击者 */
    OnAttackTargetStart = 'OnAttackTargetStart',
    /** 任意单位攻击投射物发射 */
    OnAttackLaunch = 'OnAttackLaunch',

    /** 任意单位攻击命中，事件名 。`任意单位攻击命中都会触发回调。子类需要判断攻击者和受击者` */
    OnAttackLanded = 'OnAttackLanded',

    /** 任意单位技能前摇开始 技能前摇后 事件名 `UNIT_ABILITY_FORWARD_START` */
    OnAbilityForwardStart = 'OnAbilityForwardStart',

    /** OnAbilityExecuted 技能成功结束前摇，开始执行 (结束前摇，准备进入持续施法或施法) 事件名 `UNIT_ABILITY_EXECUTED` */
    OnAbilityExecuted = 'OnAbilityExecuted',

    /** OnAbilityFullyCast 技能完全完毕 事件名 `UNIT_ABILITY_FULLY_CAST` */
    OnAbilityFullyCast = 'OnAbilityFullyCast',

    /** 技能触发林肯时 事件名 `UNIT_ABILITY_ON_SPELL_BLOCK` */
    OnSpellBlock = 'OnSpellBlock',

    // Modifier相关
    /** 任意单位获得Modifier 事件名 `UNIT_ADD_Modifier` */
    OnModifierAdded = 'OnModifierAdded',

    /** 任意单位魔法减少 事件名 `UNIT_FIXED_REDUCE_MANA` */
    OnReduceMana = 'OnReduceMana',

    /** 任意单位消耗魔法 事件名 `UNIT_FIXED_SPEND_MANA` */
    OnSpendMana = 'OnSpendMana',

    /** 单位拾取神符时 事件名 `UNIT_FIXED_GET_RUNE` */
    OnGetRune = 'OnGetRune',

    /** 单位死亡时计算重生 事件名 `UNIT_FIXED_BEFORE_DEATH` */
    OnCheckReincarnate = 'OnCheckReincarnate',

    /** 任意单位发布指令 事件名 `DOTA_UNIT_EXECUTE_ORDER` */
    OnOrder = 'OnOrder',

    /** 单位回血修正 事件名 `DOTA_UNIT_EXECUTE_ORDER` */
    OnGainHealth = 'OnGainHealth',
}
