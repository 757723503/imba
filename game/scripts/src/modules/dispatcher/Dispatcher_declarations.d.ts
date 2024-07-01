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
     * - 触发者：任意死亡单位
     */
    OnUnitDeath = 'OnUnitDeath',

    /**
     * 英雄死亡 事件名 UNIT_HERO_DEATH
     * - 触发者：任意死亡英雄
     */
    OnHeroDeath = 'OnHeroDeath',

    /**
     * 建筑死亡 事件名 UNIT_BUILDING_DEATH
     * - 触发者：任意死亡建筑
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

    /** 攻击前摇前  触发者是攻击者 */
    OnAttackTargetStart = 'OnAttackTargetStart',
    /** 任意单位攻击投射物发射 */
    // OnAttackLaunch = 'OnAttackLaunch',

    /** 任意单位攻击命中，事件名 。`任意单位攻击命中都会触发回调。子类需要判断攻击者和受击者` */
    OnAttackLanded = 'OnAttackLanded',
    /** 攻击命中时，事件名 。`攻击者触发` */
    OnAttackLanded_Attacker = 'OnAttackLanded_Attacker',
    /** 受到攻击命中时，事件名 。`受害者触发` */
    OnAttackLanded_Target = 'OnAttackLanded_Target',
}