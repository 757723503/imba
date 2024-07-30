/** 伤害类型 */
declare const enum DamageType {
    /** 物理 */
    Physical,
    /** 魔法 */
    Magical,
    /** 神圣 */
    Pure,
}

/** 伤害性质 */
declare const enum DamageProperty {
    /** 攻击伤害 */
    Attack,
    /** 技能伤害 */
    Ability,
}

/** 伤害标记 */
declare const enum DamageFlags {
    /** 无标记 */
    None = 0,
    /** 斩杀 会对目标造成一个等同于当前生命值数值的纯粹伤害，因此可以直接杀死目标。 */
    CullingDown = 1,
    /** 生命移除 可能会受到伤害调整、伤害格挡影响 */
    HPRemove = 4,
    /** 生命设定 暂无? */
    HPSetting = 8,
    /** 不反弹标记 带此标记时跳过所有传递阶段 */
    DoNotReflect = 16,
    /** 不致死 */
    NotKill = 32,
    /** 生命消耗 会对目标造成纯粹伤害 同时还具有不致死标记 */
    HPCost = 34,
    /** 没有技能增强 */
    NOSpellAmplify = 64,
    /** 暴击 标记普攻用 用于显示暴击数字 */
    AttackCrit = 128,

    /** 这次伤害跳过分裂 溅射等 */
    DisableCelled = 256,
    /** 这次伤害跳过吸血 */
    NoLifeSteal = 512,
}

interface DamageTable {
    /** 必填 伤害来源 单位 */
    attacker: CDOTA_BaseNPC;
    /** 必填 受害者 单位 */
    victim: CDOTA_BaseNPC;
    /** 必填 伤害性质 */
    damageProperty: DamageProperty;
    /** 必填 伤害类型 */
    damageType: DamageType;
    /** 必填 伤害值 */
    damage: number;
    /** 必填 来源技能 */
    sourceAbility: CDOTABaseAbility | undefined;
    /** 可选 伤害标记 */
    damageFlags?: DamageFlags;
    /** 可选 无视护甲 */
    ignoreArmor?: boolean;
    /** 可选 无视基础护甲比例 当ignoreArmor为true且自己没有值时, 默认为0, 加法 */
    ignoreBaseArmorPct?: number;
    /** 可选 无视总护甲比例 当ignoreArmor为true且自己没有值时, 默认为0, 加法 */
    ignoreArmorPct?: number;
    /** 可选 无视格挡 */
    ignoreBlock?: boolean;
    /** 是否无视减益免疫(bkb之类的) 默认false */
    ignoreMagicImmune?: boolean;
    /** 是否使用攻击特效 */
    use_attack_effect?: boolean;
    /** 暴击对象 */
    crit_obj?: CritData;

    /** 此次攻击的自定义数据 */
    extra_data?: DamageTableExtraData;
}
declare interface CritData {
    /** 暴击概率 */
    crit_chance: number;
    /** 暴击倍率（百分数 200 = 2倍暴击。不要低于100） */
    crit_rate: number;
    /** 触发暴击的回调 */
    on_crit?: (attack_data: DamageTable) => void;
}
declare interface EvasionData {
    /** 闪避概率 */
    evasion_chance: number;
    /** 触发闪避的回调 */
    // on_evasion?: (evasion_data: UnitEventAttackDamageData) => void;
}
declare interface BlindData {
    /** 致盲概率 */
    blind_chance: number;
    /** 触发致盲的回调 */
    // on_evasion?: (evasion_data: UnitEventAttackDamageData) => void;
}
declare interface AccuracyData {
    /** 必中概率 */
    accuracy_chance: number;
    /** 触发必中的回调 */
    // on_evasion?: (evasion_data: UnitEventAttackDamageData) => void;
}
/** 护盾数据*/
declare interface ShieldData {
    /** 护盾吸收伤害类型类型 */
    shield_type: ShieldType;
    /** 伤害吸收比例？默认是100。1~100 */
    absorb_rate?: number;
    /** 当前护盾值 */
    value?: number;
    /** 护盾值 */
    max_value: number;
    /** 护盾吸收伤害时的回调 */
    on_absorb?: (shield: ShieldCallBackData) => void;
    /** 护盾归零时回调 */
    on_remove?: (shiled: ShieldCallBackData) => void;
}
declare interface ShieldCallBackData {
    /** 护盾吸收伤害类型类型 */
    shield_type: ShieldType;
    /** 伤害吸收比例？默认是100。1~100 */
    absorb_rate?: number;
    /** 当前护盾值 */
    value?: number;
    /** 护盾值 */
    max_value: number;
    /** 吸收的伤害 */
    absorb_damage: number;
    /** 吸收的伤害类型 */
    absorb_damage_type: DamageType;
    /** 护盾吸收伤害时的回调 */
    on_absorb?: (shield: ShieldData) => void;
    /** 护盾归零时回调 */
    on_remove?: (shiled: ShieldData) => void;
}
declare interface LifeStealData {
    /** 攻击吸血数据 */
    attack_lifesteal?: number;
    /** 攻击吸血小兵数据 */
    attack_lifesteal_creep?: number;
    /** 技能吸血数据 */
    ability_lifesteal?: number;
    /** 技能吸血小兵数据 */
    ability_lifesteal_creep?: number;
}

declare const enum ShieldType {
    Physic_Attack = 'Physic_Attack',
    Physic = 'Physic',
    Magic = 'Magic',
    All = 'All',
}

declare interface CBlock_Physic {
    /** 多个同源格挡若同时生效，只取最高值 */
    // 暂定所有物理格挡都是同源
    // source_name: string;
    /** 格挡拥有者受击时计算格挡概率 `伤害表内的数值修改无效` */
    get_block_chance: (damageTable: FixedDamageTable) => number;
    /** 格挡拥有者受击时计算数值 `伤害表内的数值修改无效` */
    get_block_value: (damageTable: FixedDamageTable) => number;
    /** 回调。可自行自定义参数 `伤害表内的数值修改无效` */
    on_block?: (damageTable: FixedDamageTable) => void;
}

/** 魔法伤害格挡 */
declare interface CBlock_Magic {
    // /** 多个同源格挡若同时生效，只取最高值 */
    // source_name: string;
    // /** 格挡概率 */
    // chance: number;
    /** 格挡数值 */
    value: number;
    /** 触发格挡最小伤害 */
    damage_min?: number;
    on_block?: (blocl: CBlock_Magic) => void;
}
declare interface SpellAmpData {
    /** 增强数值 */
    value: number;
    /** 唯一标示 同一个标示取最高属性 */
    identification?: string;
    /** 单技能增强标示 此增强数值 只对此技能有效 */
    ability_name?: string[];
}

declare interface UnitEventAttackDamageData {
    damageTable: DamageTable;
    /** 远程攻击 - 投射物弹道 */
    projectile?: ParticleList;
    /** 远程攻击 - 投射物速度 */
    projectile_speed?: number;
    /** 不会丢失? */
    never_miss?: boolean;
    /** 是否是一次带有攻击特效的攻击 */
    use_effect?: boolean;
    /** 是否是一次触发的攻击(非正常流程的) */
    is_trigger?: boolean;
    /** 禁用此次攻击分裂/溅射/弹射 */
    disable_celled?: boolean;
    record?: number;
}
/** 伤害表的自定义数据 */
interface DamageTableExtraData {
    [key: string]: any;
    /** 幻象触发暴击用原始攻击力的数值作为暴击红字 */
    illusion_crit_show_damage?: number;
}

/** 计算用 英雄伤害流程中的伤害表 */
interface HeroDamageTable {
    /** 本次伤害类型 */
    damageType: DamageType;
    /** 本次伤害性质 */
    damageProperty: DamageProperty;
    /** 本次伤害标记 */
    damageFlags: DamageFlags;
    //=============
    //伤害部分
    //=============
    /** 攻击物理伤害 */
    atkPhysicalDamage?: number;
    /** 攻击魔法伤害 */
    atkMagicalDamage?: number;
    /** 技能 物理伤害 */
    abiPhysicalDamage?: number;
    /** 技能 魔法伤害 */
    abiMagicalDamage?: number;

    /** 本次伤害来源技能 */
    sourceAbility?: CDOTABaseAbility;

    /** 格挡数值 - 内部实现 */
    blockDamage?: number;

    /** 伤害修正百分比 默认为1 加法? */
    calcDamagePct?: number;
}

/** 中间层伤害表 */
declare interface FixedDamageTable {
    /** 攻击者 */
    attacker: CDOTA_BaseNPC;
    /** 受害者 */
    victim: CDOTA_BaseNPC;
    /** 物理攻击伤害 */
    attack_physical_damage: number;
    /** 技能物理伤害 */
    ability_physical_damage: number;
    /** 魔法攻击伤害 */
    attack_magical_damage: number;
    /** 技能魔法伤害 */
    ability_magical_damage: number;
    /** 纯粹伤害 */
    pure_damage: number;
    // /** 生命移除 */
    // hp_remove_damage: number;
    /** 实际伤害类型 */
    damageType: DamageType;
    /** 本次伤害标记 */
    damageFlags: DamageFlags;
}

/** 结束了伤害类型计算以后的damagetable 仅在伤害流程后半段使用 */
declare interface EndDamageTable {
    /** 真实伤害值 */
    true_damage: number;
    /** 实际伤害类型 */
    damageType: DamageType;
    /** 本次伤害标记 */
    damageFlags: DamageFlags;
    /** 本次伤害性质 */
    damageProperty: DamageProperty;
    /** 攻击者 */
    attacker: CDOTA_BaseNPC;
    /** 受害者 */
    victim: CDOTA_BaseNPC;
    /** 源技能? */
    sourceAbility?: CDOTABaseAbility;
}

/** 攻击特效的数据类型 */
declare interface DamageFixedAttackEffectData {
    /** 额外增加的攻击物理伤害 */
    addedAtkPhysicalDamage: number;
    /** 额外增加的攻击魔法伤害 */
    addedAtkMagicalDamage: number;
    /** 源技能 - 只有改为魔法时才添加一次源技能, 如果是技能或者道具带来的额外伤害, 则不需要加 */
    sourceAbility: CDOTABaseAbility;
    /** 攻击者 */
    attacker: CDOTA_BaseNPC;
    /** 受害者 */
    victim: CDOTA_BaseNPC;
    /** 伤害类型 */
    damageType: DamageType;
    /** 此次攻击的自定义数据 */
    extra_data?: DamageTableExtraData;
}
