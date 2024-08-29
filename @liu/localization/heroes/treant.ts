import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: 'imba_treant_natures_guise',
            ability_specials: [
                {
                    ability_special: 'shard_root_time',
                    text: '缠绕时间：',
                },
                {
                    ability_special: 'shard_by_tree_root_time',
                    text: '靠近树木时缠绕时间：',
                },
                {
                    ability_special: 'movement_bonus',
                    text: '%移动速度提升：',
                },
                {
                    ability_special: 'shard_cooldown',
                    text: '缠绕冷却时间：',
                },
            ],
            name: '自然蔽护',
            description: '树精卫士只要靠近一棵树木或自然卷握的藤蔓，{cooldown_time}秒内不受到伤害就会获得树木穿行。生效时树精卫士获得移动速度加成。',
            lore: '树精卫士不常出现在人们的视线中；他们舒适地隐蔽于枝繁叶茂的同胞当中并保持自然的形态。',
            shard_description:
                '树精卫士在自然蔽护效果下隐身，攻击将缠绕敌人。如果攻击时靠近树木会造成持续伤害，并且缠绕时间更长。总伤害为{shard_damage} + {attack_damage_pct}%树精卫士基础攻击力。',
            notes: ['自然蔽护效果下树精卫士可以直接穿过树木。'],
        },
        {
            ability_classname: 'imba_treant_innate_attack_damage',
            ability_specials: [],
            notes: [],
        },
        {
            ability_classname: 'imba_treant_natures_grasp',
            ability_specials: [
                {
                    ability_special: 'damage_per_second',
                    text: '每秒伤害：',
                },
                {
                    ability_special: 'movement_slow',
                    text: '%移动速度减缓：',
                },
                {
                    ability_special: 'vines_duration',
                    text: '藤蔓持续时间：',
                },
            ],
            name: '自然卷握',
            description: '朝目标地点制造藤蔓。藤蔓对穿过的敌人造成减速和伤害。藤蔓若碰到树木将多造成50%伤害。对非英雄单位造成半额伤害。',
            lore: '树精卫士不常出现在人们的视线中；他们舒适地隐蔽于枝繁叶茂的同胞当中并保持自然的形态。',
            notes: [],
        },
        {
            ability_classname: 'imba_treant_leech_seed',
            ability_specials: [
                {
                    ability_special: 'leech_damage',
                    text: '每秒伤害/治疗：',
                },
                {
                    ability_special: 'movement_slow',
                    text: '%移动速度减缓：',
                },
                {
                    ability_special: 'radius',
                    text: '范围：',
                },
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
            ],
            name: '寄生种子',
            description: '树精卫士在一个敌方单位体内种下一颗吸血的种子，吸收其生命值，同时使其减速。种子对其周围的友方单位进行治疗。',
            lore: '鲁夫特伦悉心培育的这些生命完全靠闯入他圣地的入侵者的生命力维持。',
            notes: [],
        },
        {
            ability_classname: 'imba_treant_living_armor',
            ability_specials: [
                {
                    ability_special: 'heal_per_second',
                    text: '每秒治疗量：',
                },
                {
                    ability_special: 'bonus_armor',
                    text: '护甲加成：',
                },
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
            ],
            name: '活体护甲',
            description: '将目标英雄或建筑笼罩在保护性外壳中，治疗目标并提供护甲加成。',
            lore: '树精卫士的根须广泛蔓延，促进自然万物的生长和恢复。',
            notes: [],
        },
        {
            ability_classname: 'imba_treant_overgrowth',
            ability_specials: [
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'radius',
                    text: '作用范围：',
                },
                {
                    ability_special: 'damage',
                    text: '每秒伤害：',
                },
            ],
            name: '疯狂生长',
            description: '在树精卫士周围召唤出疯狂生长的伤害性藤条和枝干，造成伤害并且阻止被缠绕的敌人移动、闪烁、进入隐身或攻击。',
            lore: '鲁夫特伦召唤自然的先祖之魂，将其力量施予他的同胞。',
            notes: ['效果无视减益免疫，但是在期间获得减益免疫状态将挣脱控制。'],
        },
        {
            ability_classname: 'imba_treant_eyes_in_the_forest',
            ability_specials: [
                {
                    ability_special: 'vision_aoe',
                    text: '树木视野范围：',
                },
                {
                    ability_special: 'overgrowth_aoe',
                    text: '树木疯狂生长作用范围：',
                },
            ],
            name: '丛林之眼',
            description:
                '树精卫士对目标树木灌注魔力。注魔后树木将拥有周围的顺畅视野。如果树精卫士施放了疯狂生长，这些树木附近的单位也将会被困住，并受到伤害。被动使所有树木重生地更快。',
            lore: '对于需要守卫的，谁也不能打包票究竟是什么人，或什么东西。',
            notes: ['丛林之眼的树木产生的疯狂生长效果也可以造成伤害。', '如果敌人拥有真实视域，他们将会发现被灌注魔力的树木。'],
        },
        {
            ability_classname: 'imba_treant_lifebomb_explode',
            ability_specials: [],
            notes: [],
        },
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: 'special_bonus_unique_imba_treant_2',
                    name: '+{s:bonus_leech_damage} 寄生种子伤害/治疗',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_treant_3',
                    name: '+{s:bonus_movement_slow}% 寄生种子减速',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_treant_7',
                    name: '{s:value} 范围型活体护甲',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_treant_8',
                    name: '+{s:bonus_heal_per_second} 活体护甲每秒治疗',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_treant_9',
                    name: '+{s:bonus_damage_per_second} 自然卷握伤害',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_treant_12',
                    name: '-{s:value}秒 自然卷握冷却',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_treant_13',
                    name: '+{s:bonus_bonus_armor} 活体护甲额外护甲',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_treant_14',
                    name: '-{s:bonus_AbilityCooldown}秒 疯狂生长冷却',
                },
            ],
        },
    ],
    FacetArray_B: [
        {
            facet_classname: 'treant_facets_imba_1',
            name: '原生力量 | 树苗',
            description: '树精卫士每级获得+{s:bonus_attack_damage_per_level} 基础攻击力。 寄生种子可以对地施放，种下一棵树。',
            related_abilities: [
                {
                    ability_classname: 'imba_treant_leech_seed',
                    description:
                        '寄生种子可以对地施放，种下一棵树，在技能的持续时间内治疗作用范围内的友军并对敌人造成伤害。对非英雄单位的伤害和治疗均减少{creep_damage_reduction_pct}%。树被砍掉会立刻长回来。',
                },
            ],
            related_talents: [],
        },
    ],
    ModifierArray: [
        {
            modifier_classname: 'modifier_imba_treant_bonus',
            name: '树人加成',
        },
        {
            modifier_classname: 'modifier_imba_treant_large_bonus',
            name: '树人加成',
        },
        {
            modifier_classname: 'modifier_imba_treant_natures_guise_near_tree_display',
            name: '自然蔽护',
        },
        {
            modifier_classname: 'modifier_imba_treant_natures_guise',
            name: '自然蔽护',
            description: '在树木附近时隐身。\\n获得{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%移动速度加成。',
        },
        {
            modifier_classname: 'modifier_imba_treant_natures_guise_grace_time',
            name: '自然的伪装淡出时间',
            description: '自然的伪装在离开树时将会移除隐身效果。',
        },
        {
            modifier_classname: 'modifier_imba_treant_leech_seed_slow',
            name: '寄生种子减速',
            description: '受到持续伤害。\\n移动速度被减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。',
        },
        {
            modifier_classname: 'modifier_imba_treant_leech_seed',
            name: '寄生种子',
            description: '对附近随机一个敌方单位造成减速并吸取其生命。',
        },
        {
            modifier_classname: 'modifier_imba_treant_living_armor',
            name: '活体护甲',
            description: '治疗中，获得{MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS}点护甲加成。',
        },
        {
            modifier_classname: 'modifier_imba_treant_overgrowth',
            name: '疯狂生长',
            description: '不能移动，攻击，或闪烁。',
        },
        {
            modifier_classname: 'modifier_imba_treant_natures_guise_root',
            name: '自然蔽护',
            description: '被缠绕时无法移动。',
        },
        {
            modifier_classname: 'modifier_imba_treant_natures_grasp_damage',
            name: '自然卷握',
            description: '移速被减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%，并受到伤害。',
        },
        {
            modifier_classname: 'modifier_imba_treant_natures_grasp_damage_bonus',
            name: '自然卷握',
            description: '移速被减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%，并受到伤害。',
        },
    ],
};
