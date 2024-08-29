import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: 'imba_sven_storm_bolt',
            ability_specials: [
                {
                    ability_special: 'bolt_stun_duration',
                    text: '眩晕时间：',
                },
                {
                    ability_special: 'bolt_aoe',
                    text: '作用范围：',
                },
                {
                    ability_special: 'cast_range_bonus_scepter',
                    text: '施法距离加成：',
                },
            ],
            name: '风暴之拳',
            description: '斯温用他充满魔力的手套对目标周围内所有敌人造成伤害和眩晕。',
            lore: '流浪剑客从他父亲的学校里取得的精铁护手能对敌人造成致命打击。',
            scepter_description:
                '提升施法距离，并且对目标施加弱驱散效果。可以对无敌目标施放。技能设为多样施法后，额外造成{scepter_bonus_damage}点伤害并且斯温会跟随风暴之拳行进。',
            notes: [],
        },
        {
            ability_classname: 'imba_sven_great_cleave',
            ability_specials: [
                {
                    ability_special: 'great_cleave_damage',
                    text: '%分裂伤害：',
                },
            ],
            name: '巨力挥舞',
            description: '斯温以巨力攻击，并对所有附近的敌方单位造成分裂攻击伤害。',
            lore: '守夜骑士团仍然在试图从斯温那里取回被偷走的弃誓之刃，一把能在低阶战士中杀出条大路的利剑。',
            notes: [],
        },
        {
            ability_classname: 'imba_sven_warcry',
            ability_specials: [
                {
                    ability_special: 'movespeed',
                    text: '%移动速度加成：',
                },
                {
                    ability_special: 'bonus_armor',
                    text: '护甲加成：',
                },
                {
                    ability_special: 'radius',
                    text: '作用范围：',
                },
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'shard_passive_armor',
                    text: '被动护甲加成：',
                },
                {
                    ability_special: 'shard_radius',
                    text: '被动作用范围：',
                },
                {
                    ability_special: 'base_barrier_amount',
                    text: '物理护盾数值：',
                },
            ],
            name: '战吼',
            description: '斯温的战吼激励着同伴作战，提升他们的护甲和移动速度。持续{duration}秒。',
            lore: '吟诵守夜人法典的句子能够强化斯温对其流浪法则的遵从。太有诗意了！',
            shard_description: '战吼无法被驱散，并且被动向斯温周围所有友军提供{shard_passive_armor}点护甲。提升主动效果的移动速度加成。',
            notes: [],
        },
        {
            ability_classname: 'imba_sven_gods_strength',
            ability_specials: [
                {
                    ability_special: 'gods_strength_damage',
                    text: '%攻击力加成：',
                },
                {
                    ability_special: 'bonus_slow_resistance',
                    text: '%减速抗性：',
                },
            ],
            name: '神之力量',
            description: '斯温爆发出他流浪剑客的力量，获得攻击力加成和减速抗性，持续{abilityduration}秒。',
            lore: '凭借能够击碎神圣之盔的力量，流浪剑客在近身肉搏中未尝一败。',
            notes: ['额外攻击力是基于斯温的基础攻击力和主属性数值。'],
        },
        {
            ability_classname: 'imba_sven_vanquisher',
            ability_specials: [],
            name: '强势征服',
            description: '斯温的攻击对眩晕的敌人造成的伤害增加{bonus_damage_pct}%。',
            notes: [],
        },
        {
            ability_classname: 'imba_sven_wrath_of_god',
            ability_specials: [
                {
                    ability_special: 'bonus_damage_per_str',
                    text: '每点力量额外攻击力：',
                },
                {
                    ability_special: 'base_damage_reduction',
                    text: '基础攻击力降低：',
                },
            ],
            name: '神之愤怒',
            description: '斯温从力量中获得额外攻击力，但是基础攻击力降低。',
            notes: [],
        },
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: 'special_bonus_unique_imba_sven_2',
                    name: '+{s:bonus_gods_strength_damage}% 神之力量攻击力',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_sven_3',
                    name: '-{s:value}秒 神之力量冷却',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_sven_4',
                    name: '+{s:bonus_bolt_stun_duration}秒 风暴之拳眩晕',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_sven_5',
                    name: '+{s:bonus_duration}秒 战吼持续时间',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_sven_7',
                    name: '+{s:bonus_bonus_armor} 战吼护甲',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_sven_8',
                    name: '+{s:bonus_great_cleave_damage}% 巨力挥舞伤害',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_sven_gods_strength_slow_resist',
                    name: '+{s:bonus_bonus_slow_resistance}% 神之力量减速抗性',
                },
            ],
        },
    ],
    FacetArray_B: [
        {
            facet_classname: 'sven_facets_imba_1',
            name: '重甲',
            description: '战吼会提供一个物理伤害护盾。',
            related_abilities: [
                {
                    ability_classname: 'imba_sven_warcry',
                    description: '战吼会提供一个物理伤害护盾。',
                },
            ],
            related_talents: [],
        },
    ],
    ModifierArray: [
        {
            modifier_classname: 'modifier_imba_sven_warcry',
            name: '战吼',
            description: '护甲提高{MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS}点，移动速度提升{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。',
        },
        {
            modifier_classname: 'modifier_imba_sven_warcry_passive',
            name: '战吼光环',
            description: '护甲提升{MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS}点。',
        },
        {
            modifier_classname: 'modifier_imba_sven_gods_strength',
            name: '神之力量',
            description:
                '基础攻击力提升{MODIFIER_PROPERTY_BASEDAMAGEOUTGOING_PERCENTAGE}%。减速抗性提升{MODIFIER_PROPERTY_BASEDAMAGEOUTGOING_PERCENTAGE}%。',
        },
        {
            modifier_classname: 'modifier_imba_sven_gods_strength_child',
            name: '神之力量光环',
            description:
                '基础攻击力提升{MODIFIER_PROPERTY_BASEDAMAGEOUTGOING_PERCENTAGE}%。减速抗性提升{MODIFIER_PROPERTY_BASEDAMAGEOUTGOING_PERCENTAGE}%。',
        },
    ],
};
