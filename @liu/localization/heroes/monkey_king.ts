import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: 'imba_monkey_king_boundless_strike',
            ability_specials: [
                {
                    ability_special: 'stun_duration',
                    text: '眩晕持续时间：',
                },
                {
                    ability_special: 'strike_crit_mult',
                    text: '%致命一击伤害：',
                },
                {
                    ability_special: 'strike_flat_damage',
                    text: '额外伤害：',
                },
                {
                    ability_special: 'strike_cast_range',
                    text: '距离：',
                },
            ],
            name: '棒击大地',
            description:
                '齐天大圣让金箍棒变大，并将其挥起猛击地面，眩晕一条直线上的敌人并造成额外伤害和基于他普通攻击的致命一击伤害。具有克敌机先效果。',
            lore: '传说中的金箍棒根据主人的意愿变大变长，确保敌人都逃不出齐天大圣的手心。',
            shard_description:
                '棒击大地对沿途和末端的敌人施加乾坤之跃，威力为最长持续施法时间的{spring_channel_pct}%。棒击大地设为多样施法后，齐天大圣还会跳跃至金箍棒的另一端。',
            notes: ['不会作用于减益免疫单位。'],
        },
        {
            ability_classname: 'imba_monkey_king_mischief',
            ability_specials: [
                {
                    ability_special: 'movespeed',
                    text: '%额外移动速度：',
                },
            ],
            name: '七十二变',
            description:
                '齐天大圣以周遭事物为启发进行伪装，改变自己的外形，从而欺骗对手。受到伤害，发动攻击或使用任意物品都会失去伪装效果。变化后{invul_duration}秒内免疫伤害。',
            lore: '要小心那棵树。',
            shard_description: '七十二变的冷却时间更短，无敌时间更长，并且可以躲避弹道。',
            notes: [],
        },
        {
            ability_classname: 'imba_monkey_king_untransform',
            ability_specials: [],
            name: '变回原状',
            description: '使齐天大圣恢复原状。',
            notes: [],
        },
        {
            ability_classname: 'imba_monkey_king_tree_dance',
            ability_specials: [
                {
                    ability_special: 'perched_jump_distance',
                    text: '距离：',
                },
                {
                    ability_special: 'jump_damage_cooldown',
                    text: '受到伤害时冷却时间：',
                },
            ],
            name: '丛林之舞',
            description:
                '齐天大圣跳上一棵树并停在上面。停留时获得乾坤之跃技能——需要持续施法的跳跃式攻击。如果树木被摧毁，他将从树上掉下，并眩晕4秒。在地面受到伤害时丛林之舞将在一定时间内无法使用，处于冷却状态。',
            lore: '孙悟空在树顶上灵活地跳跃，总是一跃而至。',
            notes: ['丛林之舞在落地时进入冷却。', '右键点击地面后齐天大圣会从树上跳下。'],
        },
        {
            ability_classname: 'imba_monkey_king_primal_spring',
            ability_specials: [
                {
                    ability_special: 'impact_damage',
                    text: '伤害：',
                },
                {
                    ability_special: 'impact_movement_slow',
                    text: '%移动速度减缓：',
                },
                {
                    ability_special: 'impact_slow_duration',
                    text: '最大减速持续时间：',
                },
            ],
            name: '乾坤之跃',
            description: '持续施法 - 齐天大圣从树顶跃下，对着陆区域内敌人造成减速和伤害。持续施法的时间越长，伤害和减速效果越高。',
            lore: '从浓密的树丛中跃向敌军中央，孙悟空的攻击毫不留情。',
            notes: [],
        },
        {
            ability_classname: 'imba_monkey_king_primal_spring_early',
            ability_specials: [],
            name: '马上跃出',
            notes: [],
        },
        {
            ability_classname: 'imba_monkey_king_wukongs_command',
            ability_specials: [
                {
                    ability_special: 'bonus_armor',
                    text: '护甲加成：',
                },
                {
                    ability_special: 'attack_speed',
                    text: '单个猴子猴孙攻击间隔：',
                },
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'scepter_spawn_interval',
                    text: '单个猴子猴孙产生间隔：',
                },
                {
                    ability_special: 'scepter_spawn_duration',
                    text: '单个猴子猴孙持续时间：',
                },
            ],
            name: '猴子猴孙',
            description:
                '齐天大圣变出圆形的猴子猴孙阵列，猴子猴孙从他的位置散开。若齐天大圣离开范围，猴子猴孙将会消失。猴子猴孙继承齐天大圣的攻击力并且只会以英雄为目标。在技能持续时间内齐天大圣获得护甲加成。',
            lore: '齐天大圣将一簇猴毛吹向敌人，每根毛都变成了自己的复制体。',
            scepter_description:
                '每隔一段时间在齐天大圣附近产生一个猴子猴孙。隐身或上树时不会产生。只有齐天大圣在附近时猴子猴孙才会攻击建筑。猴子猴孙现在独立获得如意棒法的效果。',
            notes: ['猴子猴孙不会获得如意棒法的加成效果。', '猴子猴孙不会继承碎颅锤和深渊之刃的效果。'],
        },
        {
            ability_classname: 'imba_monkey_king_jingu_mastery',
            ability_specials: [
                {
                    ability_special: 'required_hits',
                    text: '所需次数：',
                },
                {
                    ability_special: 'counter_duration',
                    text: '计数持续时间：',
                },
                {
                    ability_special: 'bonus_damage',
                    text: '攻击力加成：',
                },
                {
                    ability_special: 'lifesteal',
                    text: '%额外吸血：',
                },
            ],
            name: '如意棒法',
            description: '齐天大圣的攻击唤醒了金箍棒的力量。连续攻击四次同个英雄后齐天大圣的下{charges}次攻击得到加强，获得了攻击力加成和吸血效果。',
            lore: '金箍棒能敏锐感知主人的情绪，在孙悟空展现战意时散发力量。',
            notes: [
                '棒击大地击中敌人时也会计入攻击次数。',
                '再次攻击敌人将刷新如意棒法的计数持续时间。',
                '敌人身上的计数效果无法被驱散。',
                '自身的如意棒法效果可以被驱散。',
                '破坏会使技能无法获得新的叠加效果。',
                '破坏不会使现有叠加效果提供的加成失效。',
            ],
        },
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: 'special_bonus_unique_imba_monkey_king_2',
                    name: '+{s:bonus_bonus_damage} 如意棒法攻击力',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_monkey_king_3',
                    name: '+{s:bonus_impact_damage} 乾坤之跃最高伤害',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_monkey_king_6',
                    name: '猴子猴孙额外圆阵',
                    description: '额外产生一个半径为{s:value}距离的{s:value2}人圆阵。',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_monkey_king_7',
                    name: '+{s:bonus_ground_jump_distance} 丛林之舞施法距离',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_monkey_king_8',
                    name: '乾坤之跃无冷却',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_monkey_king_9',
                    name: '+{s:bonus_stun_duration}秒 棒击大地眩晕',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_monkey_king_10',
                    name: '+{s:bonus_strike_crit_mult}% 棒击大地暴击伤害',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_monkey_king_11',
                    name: '-{s:bonus_required_hits} 如意棒法需攻击次数',
                },
            ],
        },
    ],
    FacetArray_B: [
        {
            facet_classname: 'monkey_king_facets_imba_1',
            name: '猿猴步法 | 大圣坚阵',
            description:
                '齐天大圣的生命值高于{s:bonus_no_cooldown_hp_threshold}%时丛林之舞无冷却。 齐天大圣的猴子猴孙持续时间更长，而且离开圆阵后不会马上消散，除非他在圆阵外停留的时间超过{s:bonus_leadership_time_buffer}秒。',
            related_abilities: [
                {
                    ability_classname: 'imba_monkey_king_tree_dance',
                    description: '齐天大圣的生命值高于{no_cooldown_hp_threshold}%时丛林之舞无冷却。',
                },
                {
                    ability_classname: 'imba_monkey_king_wukongs_command',
                    description:
                        '齐天大圣的猴子猴孙持续时间更长，而且离开圆阵后不会马上消散，除非他在圆阵外停留的时间超过{leadership_time_buffer}秒。',
                },
            ],
            related_talents: [],
        },
    ],
    ModifierArray: [
        {
            modifier_classname: 'modifier_imba_monkey_king_boundless_strike_stun',
            name: '棒击大地',
            description: '被齐天大圣的棒击大地眩晕',
        },
        {
            modifier_classname: 'modifier_imba_monkey_king_boundless_strike_crit',
            name: '棒击大地致命一击',
        },
        {
            modifier_classname: 'modifier_imba_monkey_king_unperched_stunned',
            name: '从树上落下；眩晕中',
        },
        {
            modifier_classname: 'modifier_imba_monkey_king_spring_slow',
            name: '乾坤之跃',
            description: '减速{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。',
        },
        {
            modifier_classname: 'modifier_imba_monkey_king_quadruple_tap_counter',
            name: '如意棒法',
            description: '齐天大圣的攻击',
        },
        {
            modifier_classname: 'modifier_imba_monkey_king_quadruple_tap_bonuses',
            name: '如意棒法',
            description: '攻击力和吸血效果加成',
        },
        {
            modifier_classname: 'modifier_imba_monkey_king_fur_army_bonus_damage',
            name: '猴子猴孙',
            description: '额外护甲',
        },
        {
            modifier_classname: 'modifier_imba_monkey_king_transform',
            name: '七十二变',
            description: '这个单位是伪装的。',
        },
    ],
};
