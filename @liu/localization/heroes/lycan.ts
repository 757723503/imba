import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: 'imba_lycan_summon_wolves',
            ability_specials: [
                {
                    ability_special: 'wolf_duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'wolf_bat',
                    text: '基础攻击间隔：',
                },
                {
                    ability_special: 'wolf_damage',
                    text: '攻击力：',
                },
                {
                    ability_special: 'wolf_hp',
                    text: '生命值：',
                },
                {
                    ability_special: 'bonus_armor',
                    text: '护甲：',
                },
                {
                    ability_special: 'wolf_count',
                    text: '精灵狼数量：',
                },
                {
                    ability_special: 'health_per_wolf',
                    text: '每头狼额外生命值：',
                },
                {
                    ability_special: 'damage_per_wolf',
                    text: '每匹狼提升基础攻击力：',
                },
            ],
            name: '召狼',
            description:
                '召唤{wolf_count}头精灵狼为狼人战斗。3级精灵狼获得永久隐身，4级精灵狼获得致残技能，20%几率使目标残废，造成每秒8点伤害，并失去60攻击速度，持续4秒。',
            lore: '扭曲他生命本质的魔法还能召唤出他的犬科伙伴。',
            shard_description: '每波兵中其中一条兵线上会混有一头不可控制的精灵狼。另外兵线产生的精灵狼的致残对防御塔有效。',
            notes: [],
        },
        {
            ability_classname: 'imba_lycan_wolf_bite',
            ability_specials: [],
            name: '饿狼撕咬',
            description:
                '狼人撕咬队友，使其获得变身效果。自身和目标都获得{lifesteal_percent}%吸血效果，并且双方距离只要不超过{lifesteal_range}就能共用吸血效果。',
            lore: '咬的这一口像是被传染了吗？',
            notes: ['饿狼撕咬的冷却时间与变身的当前等级相同。'],
        },
        {
            ability_classname: 'imba_lycan_howl',
            ability_specials: [
                {
                    ability_special: 'howl_duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'attack_damage_reduction',
                    text: '%攻击力降低：',
                },
                {
                    ability_special: 'armor',
                    text: '护甲降低：',
                },
                {
                    ability_special: 'fear_duration',
                    text: '恐惧持续时间：',
                },
            ],
            name: '嗥叫',
            description: '使敌人感到害怕，狼人和精灵狼周围{radius}范围内所有敌人的护甲和攻击力降低。夜晚期间嗥叫的护甲和攻击力降低效果为全地图生效。',
            lore: '毛骨悚然的狼嚎让敌人明白贝恩霍勒就在他们之中。',
            notes: [],
        },
        {
            ability_classname: 'imba_lycan_feral_impulse',
            ability_specials: [
                {
                    ability_special: 'bonus_damage',
                    text: '%攻击力提升：',
                },
                {
                    ability_special: 'bonus_hp_regen',
                    text: '额外生命恢复：',
                },
            ],
            name: '野性驱使',
            description: '提升狼人和所有他控制的单位的生命恢复和攻击力。',
            lore: '贝恩霍勒与犬类野兽的共生强化了他的反应和狩猎能力。',
            notes: [],
        },
        {
            ability_classname: 'imba_lycan_shapeshift',
            ability_specials: [
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'speed',
                    text: '变形后移动速度：',
                },
                {
                    ability_special: 'bonus_night_vision',
                    text: '额外夜间视野：',
                },
                {
                    ability_special: 'transformation_time',
                    text: '变身所需时间：',
                },
                {
                    ability_special: 'crit_chance',
                    text: '%致命一击概率：',
                },
                {
                    ability_special: 'crit_multiplier',
                    text: '%致命一击伤害：',
                },
                {
                    ability_special: 'health_bonus',
                    text: '额外生命值：',
                },
            ],
            name: '变身',
            description: '狼人展现出他的凶狼形态，获得致命一击的能力，并且提升夜间视野。在变身持续时间中，狼人达到超高移动速度，并且不能被减速。',
            lore: '贝恩霍勒接受了永恒的狼人诅咒，拥抱了他的野性，也永远成为了他狼性的奴仆。',
            notes: ['狼人的移动速度不会受到妖术的影响。', '变狼后狼人的碰撞体积减小。'],
        },
        {
            ability_classname: 'imba_lycan_summon_wolves_critical_strike',
            ability_specials: [
                {
                    ability_special: 'maim_chance',
                    text: '%致残几率：',
                },
                {
                    ability_special: 'maim_duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'maim_movement_speed',
                    text: '%移动速度减缓：',
                },
                {
                    ability_special: 'maim_attack_speed',
                    text: '攻击速度降低：',
                },
                {
                    ability_special: 'maim_damage',
                    text: '每秒伤害：',
                },
            ],
            name: '致残',
            description:
                '拥有{maim_chance}%几率致残目标，使其受到每秒{maim_damage}点伤害，并失去{maim_attack_speed}攻击速度，持续{maim_duration}秒。',
            notes: [],
        },
        {
            ability_classname: 'imba_lycan_summon_wolves_invisibility',
            ability_specials: [],
            name: '隐身',
            description: '不进行攻击时永久隐身。',
            notes: [],
        },
        {
            ability_classname: 'imba_lycan_summon_wolves_bash',
            ability_specials: [
                {
                    ability_special: 'bash_damage',
                    text: '额外伤害：',
                },
                {
                    ability_special: 'bash_duration',
                    text: '眩晕时间：',
                },
            ],
            name: '残忍之咬',
            description: '攻击有{bash_chance}%几率造成额外伤害并且短暂眩晕目标。会对建筑造成额外伤害，但不会眩晕。',
            notes: [],
        },
        {
            ability_classname: 'imba_lycan_summon_wolves_hamstring',
            ability_specials: [
                {
                    ability_special: 'root_duration',
                    text: '缠绕持续时间：',
                },
                {
                    ability_special: 'damage_boost',
                    text: '额外伤害：',
                },
            ],
            name: '断筋',
            description: '精灵狼咬住敌人的腿筋，短时间内缠绕他们。咬伤之后，狼人控制的单位接下来的{damage_boost_stacks}次攻击会对他们造成额外伤害。',
            notes: [],
        },
        {
            ability_classname: 'imba_lycan_summon_wolves_hightail',
            ability_specials: [
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'evasion',
                    text: '%闪避：',
                },
                {
                    ability_special: 'bonus_attack_speed',
                    text: '攻击速度加成：',
                },
            ],
            name: '健步如飞',
            description: '精灵狼获得短暂的爆发能量，获得相位移动状态、闪避、移动速度和攻击速度加成。',
            notes: [],
        },
        {
            ability_classname: 'imba_lycan_apex_predator',
            ability_specials: [
                {
                    ability_special: 'extra_damage_tooltip',
                    text: '%额外伤害：',
                },
            ],
            name: '顶级掠食者',
            description: '每级英雄等级会对中立生物造成{damage_amp_per_level}%额外伤害。',
            notes: [],
        },
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: 'special_bonus_unique_imba_lycan_1',
                    name: '+{s:bonus_duration}秒 变身持续时间',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_lycan_2',
                    name: '+{s:bonus_wolf_count} 召狼数量',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_lycan_3',
                    name: '+{s:bonus_bonus_damage} 精灵狼攻击力',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_lycan_4',
                    name: '+{s:bonus_bonus_damage}% 野性驱使攻击力',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_lycan_5',
                    name: '嗥叫降低总攻击力',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_lycan_7',
                    name: '+{s:bonus_bonus_health} 召狼生命',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_lycan_8',
                    name: '-{s:value}秒 变身冷却',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_lycan_howl_armor',
                    name: '+{s:bonus_armor} 嗥叫护甲降低',
                },
            ],
        },
    ],
    FacetArray_B: [
        {
            facet_classname: 'lycan_facets_imba_1',
            name: '狼群头领 | 幽灵狼 | 领头狼',
            description:
                '狼人或他的单位击杀敌方英雄都能延长变身的持续时间。 召狼会产生无敌且不会攻击的狼群，可以提升狼人的生命值和攻击力。 提升召狼的最高等级，但降低嗥叫和野性驱使的最高等级。',
            related_abilities: [
                {
                    ability_classname: 'imba_lycan_summon_wolves',
                    description: '召唤的狼为不可控的无敌幽灵，不会攻击，但会为狼人提供生命和攻击力加成。',
                },
                {
                    ability_classname: 'imba_lycan_howl',
                    description: '最高等级减少至{max_level}级。',
                },
                {
                    ability_classname: 'imba_lycan_feral_impulse',
                    description: '最高等级减少至{max_level}级。',
                },
                {
                    ability_classname: 'imba_lycan_shapeshift',
                    description:
                        '移动速度和致命一击加成效果也会施加给狼人控制下的所有单位。狼人或他的单位击杀敌方英雄后会使变身的持续时间延长{kill_duration_extension}秒。',
                },
            ],
            related_talents: [
                {
                    talent_key: 'special_bonus_unique_lycan_3_facet_lycan_spirit_wolves',
                    description: '+{s:bonus_damage_per_wolf} 召狼每匹狼攻击力',
                },
                {
                    talent_key: 'special_bonus_unique_lycan_7_facet_lycan_spirit_wolves',
                    description: '+{s:bonus_health_per_wolf} 召狼每匹狼生命值',
                },
            ],
        },
    ],
    ModifierArray: [
        {
            modifier_classname: 'modifier_imba_lycan_summonwolves_hamstring_damageamp',
            name: '断筋',
            description: '被狼人的单位攻击时承受额外伤害。',
        },
        {
            modifier_classname: 'modifier_imba_lycan_summon_wolves_hightail',
            name: '健步如飞',
            description:
                '提供极速和相位移动状态，{MODIFIER_PROPERTY_EVASION_CONSTANT}%闪避和{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}攻击速度。',
        },
        {
            modifier_classname: 'modifier_imba_lycan_howl_aura',
            name: '嗥叫光环',
            description: '玩家控制的单位获得嗥叫效果。',
        },
        {
            modifier_classname: 'modifier_imba_lycan_howl',
            name: '嗥叫',
            description: '攻击力降低{MODIFIER_PROPERTY_BASEDAMAGEOUTGOING_PERCENTAGE}%，护甲降低{MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS}点。',
        },
        {
            modifier_classname: 'modifier_imba_lycan_feral_impulse',
            name: '野性驱使',
            description:
                '获得{MODIFIER_PROPERTY_HEALTH_REGEN_CONSTANT}点/秒生命恢复以及{MODIFIER_PROPERTY_BASEDAMAGEOUTGOING_PERCENTAGE}%攻击力加成。',
        },
        {
            modifier_classname: 'modifier_imba_lycan_summon_wolves_invisibility',
            name: '隐身',
        },
        {
            modifier_classname: 'modifier_imba_lycan_summon_wolves_crit_maim',
            name: '致残',
            description: '攻击速度降低{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}，并且受到{MODIFIER_PROPERTY_TOOLTIP}点伤害。',
        },
        {
            modifier_classname: 'modifier_imba_lycan_shapeshift',
            name: '变身',
            description: '获得极速和致命一击。',
        },
        {
            modifier_classname: 'modifier_imba_lycan_shapeshift_speed',
            name: '变身',
            description: '获得极速。',
        },
        {
            modifier_classname: 'modifier_imba_lycan_wolf_bite_lifesteal',
            name: '撕咬',
            description: '当狼人和被咬的英雄相距不远时就能获得共有吸血。',
        },
        {
            modifier_classname: 'modifier_imba_lycan_wolf_bite_attack_range',
            name: '撕咬',
            description: '最大攻击距离限定为{MODIFIER_PROPERTY_MAX_ATTACK_RANGE}。',
        },
        {
            modifier_classname: 'modifier_imba_lycan_howl_untargettable',
            name: '骇人',
            description: '过于可怕导致敌人无法攻击狼人',
        },
        {
            modifier_classname: 'modifier_imba_lycan_fear',
            name: '狂奔中',
        },
    ],
};
