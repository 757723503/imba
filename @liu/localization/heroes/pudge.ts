import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: 'imba_pudge_flesh_heap',
            ability_specials: [
                {
                    ability_special: 'damage_block',
                    text: '伤害格挡：',
                },
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
            ],
            name: '肉盾',
            description: '帕吉用一层血肉包裹自己，可以格挡所有来源的所有类型伤害。',
            lore: '屠夫赋予“肉盾”这个词新的含义。',
            notes: [],
        },
        {
            ability_classname: 'imba_pudge_meat_hook',
            ability_specials: [
                {
                    ability_special: 'damage',
                    text: '伤害：',
                },
                {
                    ability_special: 'AbilityCastRange',
                    text: '施法距离：',
                },
                {
                    ability_special: 'distance_to_damage',
                    text: '%行进距离伤害：',
                },
            ],
            name: '肉钩',
            description:
                '向一个单位或方向射出血腥的肉钩。勾住第一个遭遇的单位，并将它拖到帕吉身边，如果是非远古单位会被秒杀，其他敌方单位则会造成伤害。',
            lore: '屠夫的肉钩是噩梦的象征，锋利的倒钩暗示了他嗜血的本性。',
            notes: [
                '钩中敌人后将打断持续施法类技能。',
                '肉钩能击中隐身单位。',
                '肉钩可以穿过树木、地形、建筑、远古生物和肉山。',
                '肉钩可以拖拽友方单位，不过他们不会受到伤害。',
                '肉钩可以将神符拖拽至帕吉身旁，并返还肉钩的魔法消耗。',
            ],
        },
        {
            ability_classname: 'imba_pudge_rot',
            ability_specials: [
                {
                    ability_special: 'rot_radius',
                    text: '作用范围：',
                },
                {
                    ability_special: 'rot_slow',
                    text: '%移动速度减缓：',
                },
                {
                    ability_special: 'rot_damage',
                    text: '伤害：',
                },
                {
                    ability_special: 'scepter_rot_regen_reduction_pct',
                    text: '%生命恢复降低：',
                },
            ],
            name: '腐烂',
            description: '能够造成持续伤害并减缓敌人移动速度的毒性云雾——同时对敌军和自身造成伤害。',
            lore: '有毒的气体从屠夫腐烂肿胀的肉体中放出，味道恶心得令人窒息。',
            scepter_description: '提升腐烂的作用范围和伤害，并且可以降低敌人的生命恢复。',
            notes: ['使用腐烂不会打断持续施法。', '腐烂能伤害隐身单位。', '即使帕吉在开启腐烂后被沉默，腐烂也不会关闭。', '腐烂的对己伤害不致死。'],
        },
        {
            ability_classname: 'imba_pudge_eject',
            ability_specials: [],
            name: '倾吐',
            description: '吐出体内的友方英雄。',
            lore: '盟友的现身方式发生了永久的改变。',
            notes: [],
        },
        {
            ability_classname: 'imba_pudge_dismember',
            ability_specials: [
                {
                    ability_special: 'dismember_damage',
                    text: '每秒伤害：',
                },
                {
                    ability_special: 'strength_damage',
                    text: '力量值伤害系数：',
                },
                {
                    ability_special: 'AbilityChannelTime',
                    text: '持续时间：',
                },
                {
                    ability_special: 'AbilityCooldown',
                    text: '冷却时间：',
                },
                {
                    ability_special: 'shard_regen_pct',
                    text: '%最大生命值恢复：',
                },
                {
                    ability_special: 'shard_cast_range',
                    text: '对友军施法距离加成：',
                },
                {
                    ability_special: 'gluttony_strength_bonus',
                    text: '力量提升：',
                },
                {
                    ability_special: 'glutton_strength_stack_duration',
                    text: '力量持续时间：',
                },
            ],
            name: '肢解',
            description:
                '持续施法 - 帕吉撕咬一个敌方单位，使其失去行动能力并受到持续伤害。伤害量为基础伤害加上帕吉力量值的一定百分比，帕吉将回复与伤害量相等的生命。帕吉会将该单位以每秒{pull_units_per_second}的速度向自身牵引，最多牵引{pull_distance_limit}距离。',
            lore: '“等我干掉这些蠢货以后，就可以把它们做成肉饼了！”',
            shard_description: '降低冷却时间，肢解可以对友军施放，此时施法距离提升，将其生吞，每秒治疗他们最大生命值的一定百分比。',
            notes: ['即使肢解的目标在受到作用的过程中隐身，还是不会脱离肢解的作用。'],
        },
        {
            ability_classname: 'imba_pudge_innate_graft_flesh',
            ability_specials: [],
            name: '腐肉堆积',
            description: '每次帕吉击杀敌方英雄时，他就会永久获得{flesh_heap_strength_buff_amount}点力量加成。',
            notes: ['帕吉附近{flesh_heap_range}范围内敌方英雄阵亡时他都会获得力量加成，不论击杀者是谁。'],
        },
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: 'special_bonus_unique_imba_pudge_1',
                    name: '{s:bonus_flesh_heap_strength_buff_amount}倍 腐肉堆积和肉盾加成',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_pudge_3',
                    name: '{s:bonus_dismember_damage}倍 肢解伤害/治疗',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_pudge_4',
                    name: '+{s:bonus_rot_slow}% 腐烂减速',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_pudge_5',
                    name: '-{s:bonus_AbilityCooldown}秒 肉钩冷却',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_pudge_6',
                    name: '+{s:bonus_AbilityChannelTime}秒 肢解持续时间',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_pudge_7',
                    name: '+{s:bonus_damage} 肉钩伤害',
                },
            ],
        },
    ],
    FacetArray_B: [
        {
            facet_classname: 'pudge_facets_imba_1',
            name: '剥皮长钩 | 小鲜肉',
            description: '肢解对英雄造成伤害时会提升自身力量值。 肉钩会根据牵引的距离造成额外伤害，但基础伤害减少。',
            related_abilities: [
                {
                    ability_classname: 'imba_pudge_meat_hook',
                    description: '肉钩会根据牵引的距离造成额外伤害，但基础伤害减少。',
                },
                {
                    ability_classname: 'imba_pudge_dismember',
                    description: '肢解对英雄造成伤害时会提升自身力量值。',
                },
            ],
            related_talents: [],
        },
    ],
    ModifierArray: [
        {
            modifier_classname: 'modifier_imba_pudge_innate_graft_flesh',
            name: '腐肉堆积',
            description: '帕吉获得{MODIFIER_PROPERTY_STATS_STRENGTH_BONUS}点力量。',
        },
        {
            modifier_classname: 'modifier_imba_pudge_dismember_gluttony_strength_buff_counter',
            name: '小鲜肉',
            description: '力量暂时提升{MODIFIER_PROPERTY_TOOLTIP}点。',
        },
        {
            modifier_classname: 'modifier_imba_pudge_rot',
            name: '腐烂',
            description: '每秒对范围内所有单位造成伤害。',
        },
        {
            modifier_classname: 'modifier_imba_pudge_flesh_heap',
            name: '肉盾',
            description: '帕吉获得{0fMODIFIER_PROPERTY_STATS_STRENGTH_BONUS}点力量',
        },
        {
            modifier_classname: 'modifier_imba_pudge_flesh_heap_dashboard',
            name: '每次帕吉杀死敌方英雄，或者附近有敌方英雄死亡时，帕吉将获得额外的力量。',
        },
        {
            modifier_classname: 'modifier_imba_pudge_flesh_heap_block',
            name: '腐肉堆积',
            description: '格挡{MODIFIER_PROPERTY_TOTAL_CONSTANT_BLOCK}点伤害。',
        },
        {
            modifier_classname: 'modifier_imba_pudge_dismember',
            name: '肢解',
            description: '正在被帕吉肢解。',
        },
        {
            modifier_classname: 'modifier_imba_pudge_meat_hook',
            name: '肉钩',
            description: '来这里！',
        },
        {
            modifier_classname: 'modifier_imba_pudge_swallow',
            name: '生吞',
            description: '生吞一名友方英雄，对其治疗。',
        },
        {
            modifier_classname: 'modifier_imba_pudge_swallow_hide',
            name: '被生吞',
            description: '被帕吉生吞，每秒回复{MODIFIER_PROPERTY_HEALTH_REGEN_PERCENTAGE}%生命。下达指令后可以吐出。',
        },
    ],
};
