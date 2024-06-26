//@ts-nocheck

declare const enum ModifierFunction {
    /**
     * Method Name: "GetModifierPreAttack_BonusDamage"
     * 额外攻击伤害
     */
    PREATTACK_BONUS_DAMAGE = 0,
    /**
     * Method Name: "GetModifierPreAttack_BonusDamage_Target"
     * 针对目标的额外攻击伤害
     */
    PREATTACK_BONUS_DAMAGE_TARGET = 1,
    /**
     * Method Name: "GetModifierPreAttack_BonusDamage_Proc"
     * 触发预攻击额外伤害
     */
    PREATTACK_BONUS_DAMAGE_PROC = 2,
    /**
     * Method Name: "GetModifierPreAttack_BonusDamagePostCrit"
     * 暴击后的预攻击额外伤害
     */
    PREATTACK_BONUS_DAMAGE_POST_CRIT = 3,
    /**
     * Method Name: "GetModifierBaseAttack_BonusDamage"
     * 基础攻击额外伤害
     */
    BASEATTACK_BONUSDAMAGE = 4,
    /**
     * Method Name: "GetModifierProcAttack_BonusDamage_Physical"
     * 物理攻击触发额外伤害
     */
    PROCATTACK_BONUS_DAMAGE_PHYSICAL = 5,
    /**
     * Method Name: "GetModifierProcAttack_ConvertPhysicalToMagical"
     * 物理攻击转换为魔法攻击
     */
    PROCATTACK_CONVERT_PHYSICAL_TO_MAGICAL = 6,
    /**
     * Method Name: "GetModifierProcAttack_BonusDamage_Magical"
     * 魔法攻击触发额外伤害
     */
    PROCATTACK_BONUS_DAMAGE_MAGICAL = 7,
    /**
     * Method Name: "GetModifierProcAttack_BonusDamage_Pure"
     * 纯粹攻击触发额外伤害
     */
    PROCATTACK_BONUS_DAMAGE_PURE = 8,
    /**
     * Method Name: "GetModifierProcAttack_BonusDamage_Magical_Target"
     * 针对目标的魔法攻击触发额外伤害
     */
    PROCATTACK_BONUS_DAMAGE_MAGICAL_TARGET = 9,
    /**
     * Method Name: "GetModifierProcAttack_Feedback"
     */
    PROCATTACK_FEEDBACK = 10,
    /**
     * Method Name: "GetModifierOverrideAttackDamage"
     * 覆盖攻击伤害
     */
    OVERRIDE_ATTACK_DAMAGE = 11,
    /**
     * Method Name: "GetModifierPreAttack"
     * 攻击前修饰
     */
    PRE_ATTACK = 12,
    /**
     * Method Name: "GetModifierInvisibilityLevel"
     * 隐形等级
     */
    INVISIBILITY_LEVEL = 13,
    /**
     * Method Name: "GetModifierInvisibilityAttackBehaviorException"
     * 隐形攻击行为例外
     */
    INVISIBILITY_ATTACK_BEHAVIOR_EXCEPTION = 14,
    /**
     * Method Name: "GetModifierPersistentInvisibility"
     * 持续隐形
     */
    PERSISTENT_INVISIBILITY = 15,
    /**
     * Method Name: "GetModifierMoveSpeedBonus_Constant"
     * 固定移动速度加成
     */
    MOVESPEED_BONUS_CONSTANT = 16,
    /**
     * Method Name: "GetModifierMoveSpeedOverride"
     * 基础移动速度覆盖
     */
    MOVESPEED_BASE_OVERRIDE = 17,
    /**
     * Method Name: "GetModifierMoveSpeedBonus_Percentage"
     * 移动速度百分比加成
     */
    MOVESPEED_BONUS_PERCENTAGE = 18,
    /**
     * Method Name: "GetModifierMoveSpeedBonus_Percentage_Unique"
     * 独特移动速度百分比加成
     */
    MOVESPEED_BONUS_PERCENTAGE_UNIQUE = 19,
    /**
     * Method Name: "GetModifierMoveSpeedBonus_Special_Boots"
     * 独特移动速度加成
     */
    MOVESPEED_BONUS_UNIQUE = 20,
    /**
     * Method Name: "GetModifierMoveSpeedBonus_Special_Boots_2"
     * 独特移动速度加成 2
     */
    MOVESPEED_BONUS_UNIQUE_2 = 21,
    /**
     * Method Name: "GetModifierMoveSpeedBonus_Constant_Unique"
     * 独特固定移动速度加成
     */
    MOVESPEED_BONUS_CONSTANT_UNIQUE = 22,
    /**
     * Method Name: "GetModifierMoveSpeedBonus_Constant_Unique_2"
     * 独特固定移动速度加成 2
     */
    MOVESPEED_BONUS_CONSTANT_UNIQUE_2 = 23,
    /**
     * Method Name: "GetModifierMoveSpeed_Absolute"
     * 绝对移动速度
     */
    MOVESPEED_ABSOLUTE = 24,
    /**
     * Method Name: "GetModifierMoveSpeed_AbsoluteMin"
     * 最小绝对移动速度
     */
    MOVESPEED_ABSOLUTE_MIN = 25,
    /**
     * Method Name: "GetModifierMoveSpeed_AbsoluteMax"
     * 最大绝对移动速度
     */
    MOVESPEED_ABSOLUTE_MAX = 26,
    /**
     * Method Name: "GetModifierIgnoreMovespeedLimit"
     * 忽略移动速度限制
     */
    IGNORE_MOVESPEED_LIMIT = 27,
    /**
     * Method Name: "GetModifierMoveSpeed_Limit"
     * 移动速度限制
     */
    MOVESPEED_LIMIT = 28,
    /**
     * Method Name: "GetModifierAttackSpeedBaseOverride"
     * 攻击速度基础覆盖
     */
    ATTACKSPEED_BASE_OVERRIDE = 29,
    /**
     * Method Name: "GetModifierFixedAttackRate"
     * 固定攻击速率
     */
    FIXED_ATTACK_RATE = 30,
    /**
     * Method Name: "GetModifierAttackSpeedBonus_Constant"
     * 固定攻击速度加成
     */
    ATTACKSPEED_BONUS_CONSTANT = 31,
    /**
     * Method Name: "GetModifierAttackSpeed_Limit"
     * 忽略攻击速度限制
     */
    IGNORE_ATTACKSPEED_LIMIT = 32,
    /**
     * Method Name: "GetModifierCooldownReduction_Constant"
     * 固定冷却时间减少
     */
    COOLDOWN_REDUCTION_CONSTANT = 33,
    /**
     * Method Name: "GetModifierManacostReduction_Constant"
     * 固定魔法消耗减少
     */
    MANACOST_REDUCTION_CONSTANT = 34,
    /**
     * Method Name: "GetModifierHealthcostReduction_Constant"
     * 固定生命消耗减少
     */
    HEALTHCOST_REDUCTION_CONSTANT = 35,
    /**
     * Method Name: "GetModifierBaseAttackTimeConstant"
     * 基础攻击时间固定
     */
    BASE_ATTACK_TIME_CONSTANT = 36,
    /**
     * Method Name: "GetModifierBaseAttackTimeConstant_Adjust"
     * 调整基础攻击时间固定
     */
    BASE_ATTACK_TIME_CONSTANT_ADJUST = 37,
    /**
     * Method Name: "GetModifierBaseAttackTimePercentage"
     * 基础攻击时间百分比
     */
    BASE_ATTACK_TIME_PERCENTAGE = 38,
    /**
     * Method Name: "GetModifierAttackPointConstant"
     * 攻击前摇固定
     */
    ATTACK_POINT_CONSTANT = 39,
    /**
     * Method Name: "GetModifierBonusDamageOutgoing_Percentage"
     * 额外百分比攻击力伤害
     */
    BONUSDAMAGEOUTGOING_PERCENTAGE = 40,
    /**
     * Method Name: "GetModifierDamageOutgoing_Percentage"
     * 基础攻击伤害输出百分比
     */
    DAMAGEOUTGOING_PERCENTAGE = 41,
    /**
     * Method Name: "GetModifierDamageOutgoing_Percentage_Illusion"
     * 幻象的基础攻击伤害输出百分比
     */
    DAMAGEOUTGOING_PERCENTAGE_ILLUSION = 42,
    /**
     * Method Name: "GetModifierDamageOutgoing_Percentage_Illusion_Amplify"
     * 幻象增幅的基础攻击伤害输出百分比
     */
    DAMAGEOUTGOING_PERCENTAGE_ILLUSION_AMPLIFY = 43,
    /**
     * Method Name: "GetModifierTotalDamageOutgoing_Percentage"
     * 总造成伤害的百分比增加
     */
    TOTALDAMAGEOUTGOING_PERCENTAGE = 44,
    /**
     * Method Name: "GetModifierSpellAmplify_PercentageCreep"
     * 对小兵的法术放大百分比
     */
    SPELL_AMPLIFY_PERCENTAGE_CREEP = 45,
    /**
     * Method Name: "GetModifierSpellAmplify_Percentage"
     * 法术放大百分比
     */
    SPELL_AMPLIFY_PERCENTAGE = 46,
    /**
     * Method Name: "GetModifierSpellAmplify_PercentageUnique"
     * 独特的法术放大百分比
     */
    SPELL_AMPLIFY_PERCENTAGE_UNIQUE = 47,
    /**
     * Method Name: "GetModifierHealAmplify_PercentageSource"
     * 治疗放大百分比（来源）
     */
    HEAL_AMPLIFY_PERCENTAGE_SOURCE = 48,
    /**
     * Method Name: "GetModifierHealAmplify_PercentageTarget"
     * 治疗放大百分比（目标）
     */
    HEAL_AMPLIFY_PERCENTAGE_TARGET = 49,
    /**
     * Method Name: "GetModifierHPRegen_CanBeNegative"
     * 生命回复可以为负
     */
    HP_REGEN_CAN_BE_NEGATIVE = 50,
    /**
     * Method Name: "GetModifierHPRegenAmplify_Percentage"
     * 生命回复放大百分比
     */
    HP_REGEN_AMPLIFY_PERCENTAGE = 51,
    /**
     * Method Name: "GetModifierLifestealRegenAmplify_Percentage"
     * 吸血放大百分比
     */
    LIFESTEAL_AMPLIFY_PERCENTAGE = 52,
    /**
     * Method Name: "GetModifierSpellLifestealRegenAmplify_Percentage"
     * 法术吸血放大百分比
     */
    SPELL_LIFESTEAL_AMPLIFY_PERCENTAGE = 53,
    /**
     * Method Name: "GetModifierMPRegenAmplify_Percentage"
     * 魔法回复放大百分比
     */
    MP_REGEN_AMPLIFY_PERCENTAGE = 54,
    /**
     * Method Name: "GetModifierManaDrainAmplify_Percentage"
     * 魔法吸取放大百分比
     */
    MANA_DRAIN_AMPLIFY_PERCENTAGE = 55,
    /**
     * Total amplify value is clamped to 0.
     *
     *
     *
     * Method Name: "GetModifierMPRestoreAmplify_Percentage".
     * 魔法恢复放大百分比
     */
    MP_RESTORE_AMPLIFY_PERCENTAGE = 56,
    /**
     * Method Name: "GetModifierBaseDamageOutgoing_Percentage"
     * 基础百分比攻击力伤害
     */
    BASEDAMAGEOUTGOING_PERCENTAGE = 57,
    /**
     * Method Name: "GetModifierBaseDamageOutgoing_PercentageUnique"
     * 独特的基础百分比攻击力伤害
     */
    BASEDAMAGEOUTGOING_PERCENTAGE_UNIQUE = 58,
    /**
     * Method Name: "GetModifierIncomingDamage_Percentage"
     * 承受的伤害百分比
     */
    INCOMING_DAMAGE_PERCENTAGE = 59,
    /**
     * Method Name: "GetModifierIncomingPhysicalDamage_Percentage"
     * 承受的物理伤害百分比
     */
    INCOMING_PHYSICAL_DAMAGE_PERCENTAGE = 60,
    /**
     * This property controls 'physical' shield, if defined both on client and server.
     * Return value on client should be current shield health, as a positive integer,
     * on server - amount of damage blocked.
     *
     *
     *
     * Method Name: "GetModifierIncomingPhysicalDamageConstant".
     * 承受的常数物理伤害
     */
    INCOMING_PHYSICAL_DAMAGE_CONSTANT = 61,
    /**
     * This property controls 'spell' shield, if defined both on client and server.
     * Return value on client should be current shield health, as a positive integer,
     * on server - amount of damage blocked.
     *
     *
     *
     * Method Name: "GetModifierIncomingSpellDamageConstant".
     * 承受的常数法术伤害
     */
    INCOMING_SPELL_DAMAGE_CONSTANT = 62,
    /**
     * Method Name: "GetModifierEvasion_Constant"
     * 常数闪避
     */
    EVASION_CONSTANT = 63,
    /**
     * Method Name: "GetModifierNegativeEvasion_Constant"
     * 常数负面闪避
     */
    NEGATIVE_EVASION_CONSTANT = 64,
    /**
     * Method Name: "GetModifierStatusResistance"
     * 状态抗性
     */
    STATUS_RESISTANCE = 65,
    /**
     * Method Name: "GetModifierStatusResistanceStacking"
     * 叠加状态抗性
     */
    STATUS_RESISTANCE_STACKING = 66,
    /**
     * Method Name: "GetModifierStatusResistanceCaster"
     * 施法者的状态抗性
     */
    STATUS_RESISTANCE_CASTER = 67,
    /**
     * Method Name: "GetModifierAvoidDamage"
     * 避免伤害
     */
    AVOID_DAMAGE = 68,
    /**
     * Method Name: "GetModifierAvoidSpell"
     * 避免法术
     */
    AVOID_SPELL = 69,
    /**
     * Method Name: "GetModifierMiss_Percentage"
     * 闪避百分比
     */
    MISS_PERCENTAGE = 70,
    /**
     * Values above 100% are ignored.
     *
     *
     *
     * Method Name: "GetModifierPhysicalArmorBase_Percentage".
     * 基础物理护甲百分比
     */
    PHYSICAL_ARMOR_BASE_PERCENTAGE = 71,
    /**
     * Method Name: "GetModifierPhysicalArmorTotal_Percentage"
     * 总体物理护甲百分比
     */
    PHYSICAL_ARMOR_TOTAL_PERCENTAGE = 72,
    /**
     * Method Name: "GetModifierPhysicalArmorBonus"
     * 额外物理护甲加成
     */
    PHYSICAL_ARMOR_BONUS = 73,
    /**
     * Method Name: "GetModifierPhysicalArmorBonusUnique"
     * 独特的额外物理护甲加成
     */
    PHYSICAL_ARMOR_BONUS_UNIQUE = 74,
    /**
     * Method Name: "GetModifierPhysicalArmorBonusUniqueActive"
     * 主动触发的独特额外物理护甲加成
     */
    PHYSICAL_ARMOR_BONUS_UNIQUE_ACTIVE = 75,
    /**
     * Method Name: "GetModifierPhysicalArmorBonusPost"
     * 后期额外物理护甲加成
     */
    PHYSICAL_ARMOR_BONUS_POST = 76,
    /**
     * Method Name: "GetModifierIgnorePhysicalArmor"
     * 忽略物理护甲
     */
    IGNORE_PHYSICAL_ARMOR = 77,
    /**
     * Method Name: "GetModifierMagicalResistanceBaseReduction"
     * 基础魔法抗性减少
     */
    MAGICAL_RESISTANCE_BASE_REDUCTION = 78,
    /**
     * Method Name: "GetModifierMagicalResistanceDirectModification"
     * 直接修改魔法抗性
     */
    MAGICAL_RESISTANCE_DIRECT_MODIFICATION = 79,
    /**
     * Method Name: "GetModifierMagicalResistanceBonus"
     * 魔法抗性加成
     */
    MAGICAL_RESISTANCE_BONUS = 80,
    /**
     * Method Name: "GetModifierMagicalResistanceBonusIllusions"
     * 幻象的魔法抗性加成
     */
    MAGICAL_RESISTANCE_BONUS_ILLUSIONS = 81,
    /**
     * Method Name: "GetModifierMagicalResistanceBonusUnique"
     * 独特的魔法抗性加成
     */
    MAGICAL_RESISTANCE_BONUS_UNIQUE = 82,
    /**
     * Method Name: "GetModifierMagicalResistanceDecrepifyUnique"
     * 独特的减少魔法抗性
     */
    MAGICAL_RESISTANCE_DECREPIFY_UNIQUE = 83,
    /**
     * Method Name: "GetModifierBaseRegen"
     * 基础魔法回复
     */
    BASE_MANA_REGEN = 84,
    /**
     * Method Name: "GetModifierConstantManaRegen"
     * 固定魔法回复
     */
    MANA_REGEN_CONSTANT = 85,
    /**
     * Method Name: "GetModifierConstantManaRegenUnique"
     * 独特的固定魔法回复
     */
    MANA_REGEN_CONSTANT_UNIQUE = 86,
    /**
     * Method Name: "GetModifierTotalPercentageManaRegen"
     * 魔法回复总百分比
     */
    MANA_REGEN_TOTAL_PERCENTAGE = 87,
    /**
     * Method Name: "GetModifierConstantHealthRegen"
     * 固定生命回复
     */
    HEALTH_REGEN_CONSTANT = 88,
    /**
     * Method Name: "GetModifierHealthRegenPercentage"
     * 生命回复百分比
     */
    HEALTH_REGEN_PERCENTAGE = 89,
    /**
     * Method Name: "GetModifierHealthRegenPercentageUnique"
     * 独特的生命回复百分比
     */
    HEALTH_REGEN_PERCENTAGE_UNIQUE = 90,
    /**
     * Method Name: "GetModifierHealthBonus"
     * 生命加成
     */
    HEALTH_BONUS = 91,
    /**
     * Method Name: "GetModifierManaBonus"
     * 魔法加成
     */
    MANA_BONUS = 92,
    /**
     * Method Name: "GetModifierExtraStrengthBonus"
     * 额外力量加成
     */
    EXTRA_STRENGTH_BONUS = 93,
    /**
     * Method Name: "GetModifierExtraHealthBonus"
     * 额外生命加成
     */
    EXTRA_HEALTH_BONUS = 94,
    /**
     * Method Name: "GetModifierExtraManaBonus"
     * 额外魔法加成
     */
    EXTRA_MANA_BONUS = 95,
    /**
     * Method Name: "GetModifierExtraManaBonusPercentage"
     * 额外魔法百分比加成
     */
    EXTRA_MANA_BONUS_PERCENTAGE = 96,
    /**
     * Method Name: "GetModifierExtraHealthPercentage"
     * 额外生命百分比加成
     */
    EXTRA_HEALTH_PERCENTAGE = 97,
    /**
     * Method Name: "GetModifierExtraManaPercentage"
     * 额外魔法百分比加成
     */
    EXTRA_MANA_PERCENTAGE = 98,
    /**
     * Method Name: "GetModifierBonusStats_Strength"
     * 力量统计加成
     */
    STATS_STRENGTH_BONUS = 99,
    /**
     * Method Name: "GetModifierBonusStats_Agility"
     * 敏捷统计加成
     */
    STATS_AGILITY_BONUS = 100,
    /**
     * Method Name: "GetModifierBonusStats_Intellect"
     * 智力统计加成
     */
    STATS_INTELLECT_BONUS = 101,
    /**
     * Method Name: "GetModifierBonusStats_Strength_Percentage"
     * 力量统计百分比加成
     */
    STATS_STRENGTH_BONUS_PERCENTAGE = 102,
    /**
     * Method Name: "GetModifierBonusStats_Agility_Percentage"
     * 敏捷统计百分比加成
     */
    STATS_AGILITY_BONUS_PERCENTAGE = 103,
    /**
     * Method Name: "GetModifierBonusStats_Intellect_Percentage"
     * 智力统计百分比加成
     */
    STATS_INTELLECT_BONUS_PERCENTAGE = 104,
    /**
     * Method Name: "GetModifierCastRangeBonus"
     * 施法距离加成
     */
    CAST_RANGE_BONUS = 105,
    /**
     * Method Name: "GetModifierCastRangeBonusPercentage"
     * 施法距离百分比加成
     */
    CAST_RANGE_BONUS_PERCENTAGE = 106,
    /**
     * Method Name: "GetModifierCastRangeBonusTarget"
     * 目标施法距离加成
     */
    CAST_RANGE_BONUS_TARGET = 107,
    /**
     * Method Name: "GetModifierCastRangeBonusStacking"
     * 叠加施法距离加成
     */
    CAST_RANGE_BONUS_STACKING = 108,
    /**
     * Method Name: "GetModifierAttackRangeOverride"
     * 基础攻击范围覆盖
     */
    ATTACK_RANGE_BASE_OVERRIDE = 109,
    /**
     * Method Name: "GetModifierAttackRangeBonus"
     * 攻击范围加成
     */
    ATTACK_RANGE_BONUS = 110,
    /**
     * Method Name: "GetModifierAttackRangeBonusUnique"
     * 独特的攻击范围加成
     */
    ATTACK_RANGE_BONUS_UNIQUE = 111,
    /**
     * Method Name: "GetModifierAttackRangeBonusPercentage"
     * 攻击范围百分比加成
     */
    ATTACK_RANGE_BONUS_PERCENTAGE = 112,
    /**
     * Method Name: "GetModifierMaxAttackRange"
     * 最大攻击范围
     */
    MAX_ATTACK_RANGE = 113,
    /**
     * Method Name: "GetModifierProjectileSpeedBonus"
     * 弹道速度加成
     */
    PROJECTILE_SPEED_BONUS = 114,
    /**
     * Method Name: "GetModifierProjectileSpeedBonusPercentage"
     * 弹道速度百分比加成
     */
    PROJECTILE_SPEED_BONUS_PERCENTAGE = 115,
    /**
     * Method Name: "GetModifierProjectileName"
     * 弹道特效名称
     */
    PROJECTILE_NAME = 116,
    /**
     * Method Name: "ReincarnateTime"
     * 重生? 复活时间减少?
     */
    REINCARNATION = 117,
    /**
     * Method Name: "GetModifierConstantRespawnTime"
     * 重生时间?复活时间减少?
     */
    RESPAWNTIME = 118,
    /**
     * Method Name: "GetModifierPercentageRespawnTime"
     * 复活时间百分比
     */
    RESPAWNTIME_PERCENTAGE = 119,
    /**
     * Method Name: "GetModifierStackingRespawnTime"
     * 叠加复活时间
     */
    RESPAWNTIME_STACKING = 120,
    /**
     * Method Name: "GetModifierPercentageCooldown"
     * 冷却时间百分比
     */
    COOLDOWN_PERCENTAGE = 121,
    /**
     * Method Name: "GetModifierPercentageCooldownOngoing"
     * 进行中的冷却时间百分比
     */
    COOLDOWN_PERCENTAGE_ONGOING = 122,
    /**
     * Method Name: "GetModifierPercentageCasttime"
     * 施法时间百分比
     */
    CASTTIME_PERCENTAGE = 123,
    /**
     * Method Name: "GetModifierPercentageAttackAnimTime"
     * 攻击动画时间百分比
     */
    ATTACK_ANIM_TIME_PERCENTAGE = 124,
    /**
     * Method Name: "GetModifierPercentageManacost"
     * 魔法消耗百分比
     */
    MANACOST_PERCENTAGE = 125,
    /**
     * Method Name: "GetModifierPercentageManacostStacking"
     * 叠加魔法消耗百分比
     */
    MANACOST_PERCENTAGE_STACKING = 126,
    /**
     * Method Name: "GetModifierPercentageHealthcost"
     * 生命消耗百分比
     */
    HEALTHCOST_PERCENTAGE = 127,
    /**
     * Method Name: "GetModifierPercentageHealthcostStacking"
     * 叠加生命消耗百分比
     */
    HEALTHCOST_PERCENTAGE_STACKING = 128,
    /**
     * Method Name: "GetModifierConstantDeathGoldCost"
     * 死亡金钱损失
     */
    DEATHGOLDCOST = 129,
    /**
     * Method Name: "GetModifierPercentageExpRateBoost"
     * 经验获取加速
     */
    EXP_RATE_BOOST = 130,
    /**
     * Method Name: "GetModifierPercentageGoldRateBoost"
     * 金钱获取加速
     */
    GOLD_RATE_BOOST = 131,
    /**
     * Method Name: "GetModifierPreAttack_CriticalStrike"
     * 预攻击暴击
     */
    PREATTACK_CRITICALSTRIKE = 132,
    /**
     * Method Name: "GetModifierPreAttack_Target_CriticalStrike"
     * 针对目标的预攻击暴击
     */
    PREATTACK_TARGET_CRITICALSTRIKE = 133,
    /**
     * Method Name: "GetModifierMagical_ConstantBlock"
     * 固定魔法伤害格挡
     */
    MAGICAL_CONSTANT_BLOCK = 134,
    /**
     * Method Name: "GetModifierPhysical_ConstantBlock"
     * 固定物理伤害格挡
     */
    PHYSICAL_CONSTANT_BLOCK = 135,
    /**
     * Method Name: "GetModifierPhysical_ConstantBlockSpecial"
     * 特殊固定物理伤害格挡
     */
    PHYSICAL_CONSTANT_BLOCK_SPECIAL = 136,
    /**
     * Method Name: "GetModifierPhysical_ConstantBlockUnavoidablePreArmor"
     * 无法避免的固定伤害格挡（护甲前）
     */
    TOTAL_CONSTANT_BLOCK_UNAVOIDABLE_PRE_ARMOR = 137,
    /**
     * Method Name: "GetModifierTotal_ConstantBlock"
     * 总固定伤害格挡
     */
    TOTAL_CONSTANT_BLOCK = 138,
    /**
     * Method Name: "GetOverrideAnimation"
     * 覆盖动画
     */
    OVERRIDE_ANIMATION = 139,
    /**
     * Method Name: "GetOverrideAnimationWeight"
     * 覆盖动画权重
     */
    OVERRIDE_ANIMATION_WEIGHT = 140,
    /**
     * Method Name: "GetOverrideAnimationRate"
     * 覆盖动画速率
     */
    OVERRIDE_ANIMATION_RATE = 141,
    /**
     * Method Name: "GetAbsorbSpell"
     * 吸收法术
     */
    ABSORB_SPELL = 142,
    /**
     * Method Name: "GetReflectSpell"
     * 反射法术
     */
    REFLECT_SPELL = 143,
    /**
     * Method Name: "GetDisableAutoAttack"
     * 禁用自动攻击
     */
    DISABLE_AUTOATTACK = 144,
    /**
     * Method Name: "GetBonusDayVision"
     * 额外白天视野
     */
    BONUS_DAY_VISION = 145,
    /**
     * Method Name: "GetBonusNightVision"
     * 额外夜间视野
     */
    BONUS_NIGHT_VISION = 146,
    /**
     * Method Name: "GetBonusNightVisionUnique"
     * 独特的夜间视野加成
     */
    BONUS_NIGHT_VISION_UNIQUE = 147,
    /**
     * Method Name: "GetBonusVisionPercentage"
     * 视野百分比加成
     */
    BONUS_VISION_PERCENTAGE = 148,
    /**
     * Method Name: "GetFixedDayVision"
     * 固定白天视野
     */
    FIXED_DAY_VISION = 149,
    /**
     * Method Name: "GetFixedNightVision"
     * 固定夜间视野
     */
    FIXED_NIGHT_VISION = 150,
    /**
     * Method Name: "GetMinHealth"
     * 最小生命值
     */
    MIN_HEALTH = 151,
    /**
     * Method Name: "GetAbsoluteNoDamagePhysical"
     * 绝对无物理伤害
     */
    ABSOLUTE_NO_DAMAGE_PHYSICAL = 152,
    /**
     * Method Name: "GetAbsoluteNoDamageMagical"
     * 绝对无魔法伤害
     */
    ABSOLUTE_NO_DAMAGE_MAGICAL = 153,
    /**
     * Method Name: "GetAbsoluteNoDamagePure"
     * 绝对无纯粹伤害
     */
    ABSOLUTE_NO_DAMAGE_PURE = 154,
    /**
     * Method Name: "GetIsIllusion"
     * 是否幻象
     */
    IS_ILLUSION = 155,
    /**
     * Method Name: "GetModifierIllusionLabel"
     * 幻象标签
     */
    ILLUSION_LABEL = 156,
    /**
     * Method Name: "GetModifierStrongIllusion"
     * 强幻象
     */
    STRONG_ILLUSION = 157,
    /**
     * Method Name: "GetModifierSuperIllusion"
     * 超级幻象
     */
    SUPER_ILLUSION = 158,
    /**
     * Method Name: "GetModifierSuperIllusionWithUltimate"
     * 带终极技能的超级幻象
     */
    SUPER_ILLUSION_WITH_ULTIMATE = 159,
    /**
     * Method Name: "GetModifierXPDuringDeath"
     * 死亡期间经验值
     */
    XP_DURING_DEATH = 160,
    /**
     * Method Name: "GetModifierTurnRate_Percentage"
     * 转身速率百分比
     */
    TURN_RATE_PERCENTAGE = 161,
    /**
     * Method Name: "GetModifierTurnRate_Override"
     * 转身速率覆盖
     */
    TURN_RATE_OVERRIDE = 162,
    /**
     * Method Name: "GetDisableHealing"
     * 禁用治疗
     */
    DISABLE_HEALING = 163,
    /**
     * Method Name: "GetAlwaysAllowAttack"
     * 始终允许攻击
     */
    ALWAYS_ALLOW_ATTACK = 164,
    /**
     * Method Name: "GetAllowEtherealAttack"
     * 始终处于虚无状态攻击
     */
    ALWAYS_ETHEREAL_ATTACK = 165,
    /**
     * Method Name: "GetOverrideAttackMagical"
     * 覆盖攻击为魔法
     */
    OVERRIDE_ATTACK_MAGICAL = 166,
    /**
     * Method Name: "GetModifierUnitStatsNeedsRefresh"
     * 单位统计需要刷新
     */
    UNIT_STATS_NEEDS_REFRESH = 167,
    BOUNTY_CREEP_MULTIPLIER = 168,
    BOUNTY_OTHER_MULTIPLIER = 169,
    /**
     * Method Name: "GetModifierUnitDisllowUpgrading"
     * 单位禁止升级
     */
    UNIT_DISALLOW_UPGRADING = 170,
    /**
     * Method Name: "GetModifierDodgeProjectile"
     * 躲避弹道
     */
    DODGE_PROJECTILE = 171,
    /**
     * Method Name: "GetTriggerCosmeticAndEndAttack"
     * 触发视觉特效并结束攻击?
     */
    TRIGGER_COSMETIC_AND_END_ATTACK = 172,
    /**
     * Method Name: "GetModifierMaxDebuffDuration"
     * 最大减益效果持续时间
     */
    MAX_DEBUFF_DURATION = 173,
    /**
     * Method Name: "GetPrimaryStatDamageMultiplier"
     * 主属性伤害乘数
     */
    PRIMARY_STAT_DAMAGE_MULTIPLIER = 174,
    /**
     * Method Name: "GetModifierPreAttack_DeadlyBlow"
     * 预攻击致命一击
     */
    PREATTACK_DEADLY_BLOW = 175,
    /**
     * Method Name: "GetAlwaysAutoAttackWhileHoldPosition"
     * 保持位置时始终自动攻击
     */
    ALWAYS_AUTOATTACK_WHILE_HOLD_POSITION = 176,
    /**
     * Method Name: "OnSpellTargetReady"
     */
    ON_SPELL_TARGET_READY = 177,
    /**
     * Method Name: "OnAttackRecord"
     */
    ON_ATTACK_RECORD = 178,
    /**
     * Method Name: "OnAttackStart"
     */
    ON_ATTACK_START = 179,
    /**
     * Method Name: "OnAttack"
     */
    ON_ATTACK = 180,
    /**
     * Method Name: "OnAttackLanded"
     */
    ON_ATTACK_LANDED = 181,
    /**
     * Method Name: "OnAttackFail"
     */
    ON_ATTACK_FAIL = 182,
    /**
     * Happens even if attack can't be issued.
     *
     *
     *
     * Method Name: "OnAttackAllied".
     */
    ON_ATTACK_ALLIED = 183,
    /**
     * Method Name: "OnProjectileDodge"
     */
    ON_PROJECTILE_DODGE = 184,
    /**
     * Method Name: "OnOrder"
     */
    ON_ORDER = 185,
    /**
     * Method Name: "OnUnitMoved"
     */
    ON_UNIT_MOVED = 186,
    /**
     * Method Name: "OnAbilityStart"
     */
    ON_ABILITY_START = 187,
    /**
     * Method Name: "OnAbilityExecuted"
     */
    ON_ABILITY_EXECUTED = 188,
    /**
     * Method Name: "OnAbilityFullyCast"
     */
    ON_ABILITY_FULLY_CAST = 189,
    /**
     * Method Name: "OnBreakInvisibility"
     */
    ON_BREAK_INVISIBILITY = 190,
    /**
     * Method Name: "OnAbilityEndChannel"
     */
    ON_ABILITY_END_CHANNEL = 191,
    ON_PROCESS_UPGRADE = 192,
    ON_REFRESH = 193,
    /**
     * Method Name: "OnTakeDamage"
     */
    ON_TAKEDAMAGE = 194,
    /**
     * Method Name: "OnDamagePrevented"
     */
    ON_DEATH_PREVENTED = 195,
    /**
     * Method Name: "OnStateChanged"
     */
    ON_STATE_CHANGED = 196,
    ON_ORB_EFFECT = 197,
    /**
     * Method Name: "OnProcessCleave"
     */
    ON_PROCESS_CLEAVE = 198,
    /**
     * Method Name: "OnDamageCalculated"
     */
    ON_DAMAGE_CALCULATED = 199,
    /**
     * Method Name: "OnMagicDamageCalculated"
     */
    ON_MAGIC_DAMAGE_CALCULATED = 200,
    /**
     * Method Name: "OnAttacked"
     */
    ON_ATTACKED = 201,
    /**
     * Method Name: "OnDeath"
     */
    ON_DEATH = 202,
    /**
     * Method Name: "OnDeathCompleted"
     */
    ON_DEATH_COMPLETED = 203,
    /**
     * Method Name: "OnRespawn"
     */
    ON_RESPAWN = 204,
    /**
     * Method Name: "OnSpentMana"
     */
    ON_SPENT_MANA = 205,
    /**
     * Method Name: "OnSpentHealth"
     */
    ON_SPENT_HEALTH = 206,
    /**
     * Method Name: "OnTeleporting"
     */
    ON_TELEPORTING = 207,
    /**
     * Method Name: "OnTeleported"
     */
    ON_TELEPORTED = 208,
    /**
     * Method Name: "OnSetLocation"
     */
    ON_SET_LOCATION = 209,
    /**
     * Method Name: "OnHealthGained"
     */
    ON_HEALTH_GAINED = 210,
    /**
     * Method Name: "OnManaGained"
     */
    ON_MANA_GAINED = 211,
    /**
     * Method Name: "OnTakeDamageKillCredit"
     */
    ON_TAKEDAMAGE_KILLCREDIT = 212,
    /**
     * Method Name: "OnHeroKilled"
     */
    ON_HERO_KILLED = 213,
    /**
     * Method Name: "OnHealReceived"
     */
    ON_HEAL_RECEIVED = 214,
    /**
     * Method Name: "OnBuildingKilled"
     */
    ON_BUILDING_KILLED = 215,
    /**
     * Method Name: "OnModelChanged"
     */
    ON_MODEL_CHANGED = 216,
    /**
     * Method Name: "OnModifierAdded"
     */
    ON_MODIFIER_ADDED = 217,
    /**
     * Method Name: "OnTooltip"
     * buff描述
     */
    TOOLTIP = 218,
    /**
     * Method Name: "GetModifierModelChange"
     * 模型更改
     */
    MODEL_CHANGE = 219,
    /**
     * Method Name: "GetModifierModelScale"
     * 模型缩放
     */
    MODEL_SCALE = 220,
    /**
     * Method Name: "GetModifierModelScaleAnimateTime"
     * 模型缩放动画时间
     */
    MODEL_SCALE_ANIMATE_TIME = 221,
    /**
     * Always applies scepter when this property is active
     *
     *
     *
     * Method Name: "GetModifierScepter".
     * 是否持有神杖
     */
    IS_SCEPTER = 222,
    /**
     * Method Name: "GetModifierShard"
     * 是否持有碎片
     */
    IS_SHARD = 223,
    /**
     * Method Name: "GetModifierRadarCooldownReduction"
     * 雷达冷却时间减少
     */
    RADAR_COOLDOWN_REDUCTION = 224,
    /**
     * Method Name: "GetActivityTranslationModifiers"
     * 翻译活动修饰符
     */
    TRANSLATE_ACTIVITY_MODIFIERS = 225,
    /**
     * Method Name: "GetAttackSound"
     * 翻译攻击声音
     */
    TRANSLATE_ATTACK_SOUND = 226,
    /**
     * Method Name: "GetUnitLifetimeFraction"
     * 临时单位血条旁 圆  生命周期比例
     */
    LIFETIME_FRACTION = 227,
    /**
     * Method Name: "GetModifierProvidesFOWVision"
     * 提供战争迷雾位置
     */
    PROVIDES_FOW_POSITION = 228,
    /**
     * Method Name: "GetModifierSpellsRequireHP"
     * 法术需要生命值
     */
    SPELLS_REQUIRE_HP = 229,
    /**
     * Method Name: "GetForceDrawOnMinimap"
     * 强制在小地图上绘制
     */
    FORCE_DRAW_MINIMAP = 230,
    /**
     * Method Name: "GetModifierDisableTurning"
     * 禁止转身
     */
    DISABLE_TURNING = 231,
    /**
     * Method Name: "GetModifierIgnoreCastAngle"
     * 忽略施法角度
     */
    IGNORE_CAST_ANGLE = 232,
    /**
     * Method Name: "GetModifierChangeAbilityValue"
     * 改变技能值
     */
    CHANGE_ABILITY_VALUE = 233,
    /**
     * Method Name: "GetModifierOverrideAbilitySpecial"
     * 覆盖技能特效
     */
    OVERRIDE_ABILITY_SPECIAL = 234,
    /**
     * Method Name: "GetModifierOverrideAbilitySpecialValue"
     * 覆盖技能特效值
     */
    OVERRIDE_ABILITY_SPECIAL_VALUE = 235,
    /**
     * Method Name: "GetModifierAbilityLayout"
     * 技能布局
     */
    ABILITY_LAYOUT = 236,
    /**
     * Method Name: "OnDominated"
     */
    ON_DOMINATED = 237,
    /**
     * Method Name: "OnKill"
     */
    ON_KILL = 238,
    /**
     * Method Name: "OnAssist"
     */
    ON_ASSIST = 239,
    /**
     * Method Name: "GetModifierTempestDouble"
     * 风暴双生
     */
    TEMPEST_DOUBLE = 240,
    /**
     * Method Name: "PreserveParticlesOnModelChanged"
     * 模型更改时保留粒子效果
     */
    PRESERVE_PARTICLES_ON_MODEL_CHANGE = 241,
    /**
     * Method Name: "OnAttackFinished"
     */
    ON_ATTACK_FINISHED = 242,
    /**
     * Method Name: "GetModifierIgnoreCooldown"
     * 忽略冷却时间
     */
    IGNORE_COOLDOWN = 243,
    /**
     * Method Name: "GetModifierCanAttackTrees"
     * 能够攻击树木
     */
    CAN_ATTACK_TREES = 244,
    /**
     * Method Name: "GetVisualZDelta"
     * 视觉Z轴偏移
     */
    VISUAL_Z_DELTA = 245,
    /**
     * Method Name: "GetVisualZSpeedBaseOverride"
     * 视觉Z轴速度基础覆盖
     */
    VISUAL_Z_SPEED_BASE_OVERRIDE = 246,
    INCOMING_DAMAGE_ILLUSION = 247,
    /**
     * Method Name: "GetModifierNoVisionOfAttacker"
     * 攻击者不提供视野
     */
    DONT_GIVE_VISION_OF_ATTACKER = 248,
    /**
     * Method Name: "OnTooltip2"
     * buff描述2
     */
    TOOLTIP2 = 249,
    /**
     * Method Name: "OnAttackRecordDestroy"
     */
    ON_ATTACK_RECORD_DESTROY = 250,
    /**
     * Method Name: "OnProjectileObstructionHit"
     */
    ON_PROJECTILE_OBSTRUCTION_HIT = 251,
    /**
     * Method Name: "GetSuppressTeleport"
     * 抑制传送
     */
    SUPPRESS_TELEPORT = 252,
    /**
     * Method Name: "OnAttackCancelled"
     */
    ON_ATTACK_CANCELLED = 253,
    /**
     * Method Name: "GetSuppressCleave"
     * 抑制分裂攻击
     */
    SUPPRESS_CLEAVE = 254,
    /**
     * Method Name: "BotAttackScoreBonus"
     * 机器人攻击评分加成
     */
    BOT_ATTACK_SCORE_BONUS = 255,
    /**
     * Method Name: "GetModifierAttackSpeedReductionPercentage"
     * 攻击速度减少百分比
     */
    ATTACKSPEED_REDUCTION_PERCENTAGE = 256,
    /**
     * Method Name: "GetModifierMoveSpeedReductionPercentage"
     * 移动速度减少百分比
     */
    MOVESPEED_REDUCTION_PERCENTAGE = 257,
    ATTACK_WHILE_MOVING_TARGET = 258,
    /**
     * Method Name: "GetModifierAttackSpeedPercentage"
     * 攻击速度百分比
     */
    ATTACKSPEED_PERCENTAGE = 259,
    /**
     * Method Name: "OnAttemptProjectileDodge"
     */
    ON_ATTEMPT_PROJECTILE_DODGE = 260,
    /**
     * Method Name: "OnPreDebuffApplied"
     */
    ON_PREDEBUFF_APPLIED = 261,
    /**
     * Method Name: "GetModifierPercentageCooldownStacking"
     * 冷却时间百分比叠加
     */
    COOLDOWN_PERCENTAGE_STACKING = 262,
    /**
     * Method Name: "GetModifierSpellRedirectTarget"
     * 法术重定向目标
     */
    SPELL_REDIRECT_TARGET = 263,
    /**
     * Method Name: "GetModifierTurnRateConstant"
     * 固定转身速率
     */
    TURN_RATE_CONSTANT = 264,
    /**
     * Method Name: "GetModifierIsRatPack"
     * 偷塔?保护?
     */
    RAT_PACK = 265,
    /**
     * Method Name: "GetModifierPhysicalDamageOutgoing_Percentage"
     * 物理伤害输出百分比
     */
    PHYSICALDAMAGEOUTGOING_PERCENTAGE = 266,
    /**
     * Method Name: "GetModifierKnockbackAmplification_Percentage"
     * 击退放大百分比
     */
    KNOCKBACK_AMPLIFICATION_PERCENTAGE = 267,
    /**
     * Return value is a count of pips.
     *
     *
     *
     * Method Name: "GetModifierHealthBarPips".
     * 生命条固定格子标记
     */
    HEALTHBAR_PIPS = 268,
    /**
     * This property controls 'universal' shield, if defined both on client and
     * server. Return value on client should be current shield health, as a positive
     * integer, on server - amount of damage blocked.
     *
     *
     *
     * Method Name: "GetModifierIncomingDamageConstant".
     * 固定受到的伤害
     */
    INCOMING_DAMAGE_CONSTANT = 269,
    /**
     * Method Name: "OnSpellAppliedSuccessfully"
     */
    SPELL_APPLIED_SUCCESSFULLY = 270,
    /**
     * Method Name: "GetModifierAvoidDamageAfterReductions"
     * 减伤后避免伤害
     */
    AVOID_DAMAGE_AFTER_REDUCTIONS = 271,
    INVALID = 65535,
}
