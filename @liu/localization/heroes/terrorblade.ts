import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: 'imba_terrorblade_reflection',
            ability_specials: [
                {
                    ability_special: 'illusion_duration',
                    text: '倒影持续时间：',
                },
                {
                    ability_special: 'illusion_outgoing_tooltip',
                    text: '%倒影继承攻击力：',
                },
                {
                    ability_special: 'move_slow',
                    text: '%移动速度减缓：',
                },
                {
                    ability_special: 'attack_slow',
                    text: '攻击速度减少：',
                },
                {
                    ability_special: 'range',
                    text: '作用范围：',
                },
            ],
            name: '倒影',
            description:
                '恐怖利刃映出目标区域内所有敌方英雄的黑暗倒影对其进行反制，目标在短时间内将被自身倒影攻击，移动速度和攻击速度都会降低。倒影为无敌状态。',
            lore: '荒邪之狱的分形之墙中，恐怖利刃洞悉了古老的寓言：你就是自己最可怕的敌人。现在他也要让别人明白这个道理。',
            notes: ['无法以倒影的幻象为目标，并且幻象为无敌，减速效果被移除后幻象将被摧毁。', '倒影只会攻击该技能指定的目标。'],
        },
        {
            ability_classname: 'imba_terrorblade_conjure_image',
            ability_specials: [
                {
                    ability_special: 'illusion_duration',
                    text: '幻象持续时间：',
                },
                {
                    ability_special: 'illusion_outgoing_tooltip',
                    text: '%幻象攻击力：',
                },
                {
                    ability_special: 'illusion_incoming_damage_total_tooltip',
                    text: '%幻象承受伤害：',
                },
                {
                    ability_special: 'hp_cost_perc',
                    text: '%当前生命值消耗：',
                },
            ],
            name: '惑幻',
            description: '创造一个恐怖利刃的幻象，可以攻击敌人造成伤害。',
            lore: '比面对恐怖利刃更可怕的只有这么种情况：面对成倍的恐怖利刃！',
            notes: ['惑幻产生的幻象在外观上与普通幻象不同。'],
        },
        {
            ability_classname: 'imba_terrorblade_metamorphosis',
            ability_specials: [
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'transformation_time',
                    text: '魔化所需时间：',
                },
                {
                    ability_special: 'base_attack_time',
                    text: '基础攻击间隔：',
                },
                {
                    ability_special: 'tooltip_attack_range',
                    text: '攻击距离：',
                },
                {
                    ability_special: 'bonus_damage',
                    text: '攻击力加成：',
                },
                {
                    ability_special: 'metamorph_aura_tooltip',
                    text: '魔化光环作用范围：',
                },
            ],
            name: '魔化',
            description: '恐怖利刃变换形态，化身成可怕的恶魔并具备远程攻击能力。任何恐怖利刃的幻象在{metamorph_aura_tooltip}范围内也将魔化。',
            lore: '暴躁生气，渐起怒意，激变形体。见识一下恐怖利刃最为恐怖的一面吧。',
            notes: ['近战或远程物品的冷却时间不同时将根据恐怖利刃在使用物品时处于远程或近战形态而定。'],
        },
        {
            ability_classname: 'imba_terrorblade_terror_wave',
            ability_specials: [
                {
                    ability_special: 'fear_duration',
                    text: '恐惧持续时间：',
                },
                {
                    ability_special: 'scepter_radius',
                    text: '作用范围：',
                },
                {
                    ability_special: 'damage',
                    text: '伤害：',
                },
                {
                    ability_special: 'scepter_meta_duration',
                    text: '魔化持续时间：',
                },
            ],
            name: '恐怖心潮',
            description: '放出一道能量波，朝所有方向向外行进，击中敌方英雄将使其恐惧并造成伤害，同时恐怖利刃短时间内获得魔化状态。',
            notes: [],
        },
        {
            ability_classname: 'imba_terrorblade_demon_zeal',
            ability_specials: [
                {
                    ability_special: 'berserk_bonus_attack_speed',
                    text: '攻击速度加成：',
                },
                {
                    ability_special: 'berserk_bonus_movement_speed',
                    text: '移动速度加成：',
                },
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'hp_regen',
                    text: '生命恢复加成：',
                },
                {
                    ability_special: 'health_cost_pct',
                    text: '%当前生命值消耗：',
                },
            ],
            name: '恶魔狂热',
            description:
                '消耗恐怖利刃当前生命值的一部分，为恐怖利刃和他附近的幻象提供生命恢复、移动和攻击速度加成。倒影的幻象获得{reflection_pct}%加成效果。魔化状态下无法施放，而且施放魔化会移除恶魔狂热效果。',
            notes: [],
        },
        {
            ability_classname: 'imba_terrorblade_sunder',
            ability_specials: [
                {
                    ability_special: 'hit_point_minimum_pct',
                    text: '%隔断后最低生命值：',
                },
            ],
            name: '魂断',
            description: '隔断恐怖利刃以及目标英雄的灵魂并将双方的当前血量进行互换。交换后双方英雄的生命值必定在一定百分比以上。',
            lore: '你是不是不想要这条命？恶魔掠夺者偷走的正是你最为珍视的。',
            notes: ['减益免疫的敌人不会被影响生命值。'],
        },
        {
            ability_classname: 'imba_terrorblade_dark_unity',
            ability_specials: [
                {
                    ability_special: 'radius',
                    text: '作用范围：',
                },
                {
                    ability_special: 'inside_radius_bonus_damage_pct',
                    text: '%伤害加成：',
                },
                {
                    ability_special: 'outside_radius_bonus_damage_pct',
                    text: '%伤害惩罚：',
                },
            ],
            name: '暗黑团结',
            description: '恐怖利刃控制的幻象在一定范围内会获得攻击力加成。在一定范围外的幻象会获得攻击力惩罚。',
            notes: [],
        },
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: 'special_bonus_unique_imba_terrorblade',
                    name: '-{s:value}秒 魂断冷却',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_terrorblade_2',
                    name: '-{s:bonus_AbilityCooldown}秒 倒影冷却',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_terrorblade_3',
                    name: '+{s:bonus_duration}秒 魔化持续时间',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_terrorblade_4',
                    name: '+{s:bonus_illusion_outgoing_damage}% 惑幻攻击力',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_terrorblade_5',
                    name: '+{s:bonus_illusion_duration}秒 惑幻持续时间',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_terrorblade_6',
                    name: '+{s:bonus_move_slow}% 倒影减速/攻击力',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_terrorblade_metamorphosis_cooldown',
                    name: '-{s:bonus_AbilityCooldown}秒 魔化冷却',
                },
            ],
        },
    ],
    FacetArray_B: [
        {
            facet_classname: 'terrorblade_facets_imba_1',
            name: '灵魂碎片 | 万劫不复',
            description: '惑幻的幻象总是满血，但拥有额外的生命消耗。 魂断对敌人施放时没有最低生命值限制。',
            related_abilities: [
                {
                    ability_classname: 'imba_terrorblade_conjure_image',
                    description: '惑幻的幻象总是满血，但拥有额外的生命消耗。',
                },
                {
                    ability_classname: 'imba_terrorblade_sunder',
                    description: '魂断对敌人施放时没有最低生命值限制。',
                },
            ],
            related_talents: [],
        },
    ],
    ModifierArray: [
        {
            modifier_classname: 'modifier_imba_terrorblade_dark_unity',
            name: '暗黑团结',
            description: '靠近恐怖利刃会获得加成。未靠近则获得惩罚。',
        },
        {
            modifier_classname: 'modifier_imba_terrorblade_reflection_slow',
            name: '倒影',
            description: '移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%，并正遭受恐怖利刃倒影的攻击。',
        },
        {
            modifier_classname: 'modifier_imba_terrorblade_metamorphosis',
            name: '魔化',
            description: '可怕的恶魔形态，具备远程攻击能力。',
        },
        {
            modifier_classname: 'modifier_imba_terrorblade_metamorphosis_transform_aura',
            name: '魔化',
            description: '可怕的恶魔形态，具备远程攻击能力。',
        },
        {
            modifier_classname: 'modifier_imba_terrorblade_metamorphosis_transform_aura_applier',
            name: '魔化光环',
            description: '恐怖利刃周围的幻象将变成当前形态。',
        },
        {
            modifier_classname: 'modifier_imba_terrorblade_fear',
            name: '恐惧',
            description: '因恐怖利刃的魔化而恐惧。',
        },
        {
            modifier_classname: 'modifier_imba_terrorblade_demon_zeal',
            name: '恶魔狂热',
            description: '获得移动速度和攻击速度加成。',
        },
        {
            modifier_classname: 'modifier_imba_terrorblade_demon_zeal_aura',
            name: '恶魔狂热',
            description: '为恐怖利刃和他附近的幻象提供移动速度和攻击速度加成。',
        },
    ],
};
