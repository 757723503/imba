import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: 'imba_disruptor_thunder_strike',
            ability_specials: [
                {
                    ability_special: 'radius',
                    text: '作用范围：',
                },
                {
                    ability_special: 'strikes',
                    text: '打击次数：',
                },
                {
                    ability_special: 'strike_interval',
                    text: '打击间隔：',
                },
                {
                    ability_special: 'strike_damage',
                    text: '打击伤害：',
                },
            ],
            name: '风雷之击',
            description:
                '用闪电反复打击目标单位。每次打击会伤害附近小范围内的敌方单位，并施加{slow_duration}秒的{slow_amount}%攻击速度和移动速度降低效果。提供目标的视野。',
            lore: '干扰者的充能线圈有时会超负荷，然后他的敌人就只剩一块烤焦的盔甲碎片或者一簇毛皮了。',
            shard_description:
                '提升风雷之击的施法距离和打击次数。还可以对地施放，使风雷之击先潜伏最多{shard_ground_delay}秒，并附着到第一个进入作用范围的敌人身上。',
            notes: [],
        },
        {
            ability_classname: 'imba_disruptor_glimpse',
            ability_specials: [
                {
                    ability_special: 'min_damage',
                    text: '最小伤害：',
                },
                {
                    ability_special: 'max_damage',
                    text: '最大伤害：',
                },
                {
                    ability_special: 'damage_to_distance_pct',
                    text: '%瞥视距离转为伤害：',
                },
            ],
            name: '恶念瞥视',
            description: '将目标英雄传送回他{backtrack_time}秒前所在位置。瞬间消灭幻象单位。根据瞥视距离的一定百分比造成伤害，不能超过最大伤害。',
            lore: '对电流的把玩能产生出人意料的结果。',
            notes: ['飞行时间由目标的飞行距离决定。'],
        },
        {
            ability_classname: 'imba_disruptor_kinetic_field',
            ability_specials: [
                {
                    ability_special: 'radius',
                    text: '作用范围：',
                },
                {
                    ability_special: 'formation_time',
                    text: '成形延迟：',
                },
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
            ],
            name: '动能力场',
            description: '在短暂的构造时间后，创造一个敌人无法通过的环形动能屏障。',
            lore: '干扰者的坐骑不会受到那摧残敌人的狂风的影响。',
            notes: ['力场不能困住减益免疫单位。'],
        },
        {
            ability_classname: 'imba_disruptor_kinetic_fence',
            ability_specials: [
                {
                    ability_special: 'radius',
                    text: '长度：',
                },
                {
                    ability_special: 'formation_time',
                    text: '成形延迟：',
                },
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
            ],
            name: '动能栅栏',
            description: '在短暂的构造时间后，创造一面敌人无法通过的动能墙壁。',
            notes: [],
        },
        {
            ability_classname: 'imba_disruptor_static_storm',
            ability_specials: [
                {
                    ability_special: 'radius',
                    text: '作用范围：',
                },
                {
                    ability_special: 'pulses',
                    text: '伤害波数：',
                },
                {
                    ability_special: 'damage_max',
                    text: '最大每秒伤害：',
                },
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
            ],
            name: '静态风暴',
            description: '创造一场静态风暴，在持续时间内伤害并沉默区域内的所有敌方单位。伤害刚开始时很低，但会在持续时间内逐渐增加。',
            lore: '只有高地人能从杜鲁德的夏日风暴中幸存。',
            scepter_description: '锁闭物品。',
            notes: [],
        },
        {
            ability_classname: 'imba_disruptor_electromagnetic_repulsion',
            ability_specials: [],
            name: '电磁排斥',
            description: '每当干扰者受到{effect_radius}范围内来自任意来源的{damage_threshold}点伤害，附近所有敌人都会被推开最多{effect_radius}距离。',
            notes: ['{damage_reset_interval}秒后伤害计数会重置。'],
        },
        {
            ability_classname: 'imba_disruptor_innate_kinetic_circle',
            ability_specials: [],
            notes: [],
        },
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: 'special_bonus_unique_imba_disruptor',
                    name: '+{s:bonus_slow_duration}秒 风雷之击减速',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_disruptor_2',
                    name: '-{s:value}秒 动能力场冷却',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_disruptor_4',
                    name: '-{s:bonus_AbilityCooldown}秒 恶念瞥视冷却',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_disruptor_5',
                    name: '+{s:bonus_duration}秒 动能力场持续时间',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_disruptor_7',
                    name: '+{s:bonus_duration}秒 静态风暴持续时间',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_disruptor_8',
                    name: '+{s:bonus_radius} 静态风暴范围',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_disruptor_9',
                    name: '+{s:bonus_damage_to_distance_pct}%/{s:bonus_max_damage} 瞥视距离转为伤害/最高伤害',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_disruptor_consecutive_strike_damage',
                    name: '每次打击+{s:bonus_strike_damage_bonus} 风雷之击伤害',
                    description: '每次打击都会增加后续打击的伤害，直到负面状态结束',
                },
            ],
        },
    ],
    FacetArray_B: [
        {
            facet_classname: 'disruptor_facets_imba_1',
            name: '雷暴 | 动能栅栏',
            description: '风雷之击还会额外打击动能力场内所有敌人。 动能力场替换为另一个技能，可以制造无法通行的墙壁。',
            related_abilities: [
                {
                    ability_classname: 'imba_disruptor_thunder_strike',
                    description: '风雷之击还会额外打击动能力场内所有敌人。',
                },
            ],
            related_talents: [
                {
                    talent_key: 'special_bonus_unique_disruptor_2_facet_disruptor_line_walls',
                    description: '-{s:bonus_AbilityChargeRestoreTime}秒 动能栅栏充能',
                },
                {
                    talent_key: 'special_bonus_unique_disruptor_5_facet_disruptor_line_walls',
                    description: '+{s:bonus_duration}秒 动能栅栏持续时间',
                },
            ],
        },
    ],
    ModifierArray: [
        {
            modifier_classname: 'modifier_imba_disruptor_thunder_strike',
            name: '风雷之击',
            description: '受到周期性伤害',
        },
        {
            modifier_classname: 'modifier_imba_disruptor_static_storm',
            name: '静态风暴',
            description: '沉默',
        },
        {
            modifier_classname: 'modifier_imba_disruptor_thunderstrike_speed',
            name: '风雷之击',
            description: '移动速度提升{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。攻击速度提升{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}。',
        },
    ],
};
