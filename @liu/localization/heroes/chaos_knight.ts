import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: 'imba_chaos_knight_chaos_bolt',
            ability_specials: [
                {
                    ability_special: 'stun_min',
                    text: '最短眩晕：',
                },
                {
                    ability_special: 'stun_max',
                    text: '最长眩晕：',
                },
                {
                    ability_special: 'damage_min',
                    text: '最低伤害：',
                },
                {
                    ability_special: 'damage_max',
                    text: '最高伤害：',
                },
                {
                    ability_special: 'illusion_duration',
                    text: '幻象持续时间：',
                },
                {
                    ability_special: 'illusion_damage_reduction_pct',
                    text: '%幻象伤害降低：',
                },
            ],
            name: '混乱之箭',
            description: '对目标单位投掷一支神秘的能量箭。造成随机时间的眩晕和随机的伤害。',
            lore: '甚至混沌骑士自己都无法预测这不洁之力会有何种效果。',
            shard_description: '混乱之箭会制造一个混沌之军的幻象来攻击目标。这个幻象造成的伤害减少{illusion_damage_reduction_pct}%。',
            notes: ['眩晕持续时间和伤害值为负相关。', '附近的幻象也会模仿施法动作。'],
        },
        {
            ability_classname: 'imba_chaos_knight_reality_rift',
            ability_specials: [
                {
                    ability_special: 'pull_distance',
                    text: '牵引距离：',
                },
                {
                    ability_special: 'armor_reduction',
                    text: '护甲降低：',
                },
            ],
            name: '实相裂隙',
            description: '将混沌骑士及混沌骑士的幻象和目标单位传送到混沌骑士与目标连线上的一点。降低敌方单位的护甲，持续{duration}秒。',
            lore: '天劫的铁蹄跨过不同位面的世界，让混沌骑士的敌人无处可藏。',
            shard_description: '实相裂隙可以对自身或幻象1200范围内的任意敌方英雄施放。自身英雄和所有幻象会集合，并传送至敌方目标处。',
            notes: ['目标单位将会强制面向混沌骑士，而且混沌骑士和幻象默认对目标发动攻击。'],
        },
        {
            ability_classname: 'imba_chaos_knight_chaos_strike',
            ability_specials: [
                {
                    ability_special: 'chance',
                    text: '%触发几率：',
                },
                {
                    ability_special: 'crit_min',
                    text: '%最低致命一击：',
                },
                {
                    ability_special: 'crit_max',
                    text: '%最高致命一击：',
                },
                {
                    ability_special: 'lifesteal',
                    text: '%致命一击吸血：',
                },
            ],
            name: '混沌一击',
            description:
                '混沌骑士和他的幻象在攻击时有几率造成威力不一的致命一击，并且触发时具有吸血效果。对非英雄单位造成{creep_multiplier}倍伤害，但是吸血效果减少{creep_lifesteal_reduction_pct}%。',
            lore: '混沌骑士用巨大的蛮力砸向面前的敌人，击碎最厚的盔甲。',
            notes: [],
        },
        {
            ability_classname: 'imba_chaos_knight_phantasm',
            ability_specials: [
                {
                    ability_special: 'images_count',
                    text: '幻象数量：',
                },
                {
                    ability_special: 'illusion_duration',
                    text: '幻象持续时间：',
                },
                {
                    ability_special: 'outgoing_damage_tooltip',
                    text: '%幻象继承攻击力：',
                },
                {
                    ability_special: 'incoming_damage_tooltip',
                    text: '%幻象承受伤害：',
                },
            ],
            name: '混沌之军',
            description:
                '从其他维度召唤若干个混沌骑士的幻象。幻象继承{outgoing_damage_tooltip}%攻击力，但是承受{outgoing_damage_tooltip}%伤害。\\n驱散类型：弱驱散',
            lore: '凭借混沌骑士在各个世界丰富的战斗经验，他的幻象足以压制所有敢于反抗他的人。',
            scepter_description: '产生全地图上所有友方英雄的一个幻象。额外产生一个混沌骑士的幻象。',
            notes: ['能够移除混沌骑士的大部分负面状态。', '混沌骑士在施放时有{invuln_duration}秒的无敌时间，可以躲避眩晕和伤害技能。'],
        },
        {
            ability_classname: 'imba_chaos_knight_phantasmagoria',
            ability_specials: [],
            name: '千变幻景',
            description: '所有混沌骑士的幻象都是强幻象，并且在他附近时承受的伤害降低。',
            notes: [
                '混沌骑士自身制造，或源自混沌骑士的所有幻象都是强幻象。{aura_radius}范围内的混沌骑士幻象拥有{damage_reduction_pct}%承伤降低。',
                '对阿哈利姆神杖升级混沌之军幻象同样有效。',
                '强幻象不会被技能秒杀。',
                '破坏会使被动的承受伤害降低光环失效。',
            ],
        },
        {
            ability_classname: 'imba_chaos_knight_reins_of_chaos',
            ability_specials: [],
            name: '混沌称霸',
            description: '混沌骑士产生幻象时都会有{bonus_illusion_chance}%几率额外产生{bonus_illusion_count}个幻象。',
            notes: [],
        },
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: 'special_bonus_unique_imba_chaos_knight',
                    name: '实相裂隙无视减益免疫',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_chaos_knight_2',
                    name: '+{s:bonus_pull_distance} 实相裂隙牵引距离',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_chaos_knight_3',
                    name: '+{s:bonus_stun_max}秒 混乱之箭最短/最长眩晕',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_chaos_knight_4',
                    name: '+{s:bonus_illusion_duration}秒 混沌之军持续时间',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_chaos_knight_5',
                    name: '+{s:bonus_chance}% 混沌一击几率',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_chaos_knight_6',
                    name: '+{s:bonus_lifesteal}% 混沌一击吸血',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_chaos_knight_8',
                    name: '-{s:bonus_AbilityCooldown}秒 混乱之箭冷却',
                },
            ],
        },
    ],
    FacetArray_B: [
        {
            facet_classname: 'chaos_knight_facets_imba_1',
            name: '无理',
            description:
                '实相裂隙除了平常效果外，还有均等几率施加破坏、缴械或沉默，持续时间为基础负面效果时间的{s:bonus_additional_debuff_duration_percent}%。',
            related_abilities: [
                {
                    ability_classname: 'imba_chaos_knight_reality_rift',
                    description:
                        '实相裂隙除了平常效果外，还有均等几率施加破坏、缴械或沉默，持续时间为基础负面效果时间的{additional_debuff_duration_percent}%。',
                },
            ],
            related_talents: [],
        },
    ],
    ModifierArray: [
        {
            modifier_classname: 'modifier_imba_chaos_knight_illusions_damage_reduction',
            name: '千变幻景',
            description: '受到的伤害降低{MODIFIER_PROPERTY_INCOMING_DAMAGE_PERCENTAGE}%.',
        },
        {
            modifier_classname: 'modifier_imba_chaos_knight_chaos_strike_debuff',
            name: '混沌一击',
            description: '移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。',
        },
        {
            modifier_classname: 'modifier_imba_chaos_knight_reality_rift_debuff',
            name: '残废',
            description: '护甲被降低{MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS}点。',
        },
    ],
};
