import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: 'imba_furion_sprout',
            ability_specials: [
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'sprout_damage',
                    text: '伤害：',
                },
                {
                    ability_special: 'sprout_heal_per_second',
                    text: '发芽每秒治疗：',
                },
            ],
            name: '发芽',
            description: '使一圈树木在一个单位的周围发芽，将其困在其中并造成伤害，提供{vision_range}范围内的视野。',
            lore: '疯长的绿苗是那些攻击自然先知的人报告的常见病症。',
            notes: [
                '发芽的施放目标可以是任何单位或者地面。',
                '发芽产生的树木跟英雄技能的相互作用与平常树木相同。',
                '对发芽产生的树木使用树之祭祀后可以享受标准的治疗效果。',
            ],
        },
        {
            ability_classname: 'imba_furion_greater_sprout',
            ability_specials: [
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
            ],
            name: '高级发芽',
            description: '在300范围内产生更大的一圈树木，持续{duration}秒。诱捕其中的敌人，持续2秒，每秒造成150点伤害。',
            notes: [],
        },
        {
            ability_classname: 'imba_furion_teleportation',
            ability_specials: [
                {
                    ability_special: 'barrier',
                    text: '护盾：',
                },
                {
                    ability_special: 'buff_duration',
                    text: '持续时间：',
                },
            ],
            name: '传送',
            description: '传送到地图上任何位置。到达地点后获得一个护盾。',
            lore: '先知保护着整片森林，当森林需要他的时候立刻出现。',
            notes: [
                '魔耗和冷却时间都是在技能施放结束后结算。自然先知在施放技能时被打断将不会耗费魔法或使技能进入冷却。',
                '施法开始后，目标地点将产生视觉特效，对队友和敌人均可见。',
            ],
        },
        {
            ability_classname: 'imba_furion_force_of_nature',
            ability_specials: [
                {
                    ability_special: 'max_treants',
                    text: '树人召唤数量：',
                },
                {
                    ability_special: 'treant_duration',
                    text: '树人持续时间：',
                },
                {
                    ability_special: 'treant_health',
                    text: '树人生命值：',
                },
                {
                    ability_special: 'treant_damage_max',
                    text: '树人最高攻击力：',
                },
                {
                    ability_special: 'treant_movespeed',
                    text: '树人移动速度：',
                },
                {
                    ability_special: 'treant_vision_day',
                    text: '树人视野（白天）：',
                },
                {
                    ability_special: 'treant_vision_night',
                    text: '树人视野（夜晚）：',
                },
            ],
            name: '自然的呼唤',
            description: '将一片树木转化成由自然先知操控的树人。',
            lore: '维萝迪希娅赐予先知召唤树人守卫的能力，这是大自然的神话军队。',
            notes: ['自然的呼唤产生的树人不会超过目标区域内树木的数量。'],
        },
        {
            ability_classname: 'imba_furion_wrath_of_nature',
            ability_specials: [
                {
                    ability_special: 'damage',
                    text: '伤害：',
                },
                {
                    ability_special: 'damage_percent_add',
                    text: '%每次弹跳增加伤害：',
                },
            ],
            name: '自然之怒',
            description:
                '伤害性的能量在全地图跳跃，打击视野中距目标点最近的多个敌人。每击中一个敌人伤害都会增加，击中{max_targets}个目标后达到最高伤害。',
            lore: '自然先知召唤维萝迪希娅的狂怒，消灭那些想要毁坏自然的敌人。',
            scepter_description:
                '冷却时间降低{bonus_AbilityCooldown}秒。缠绕所有击中的敌人。持续时间根据弹跳次序从{scepter_min_entangle_duration}秒开始增加，弹跳数达到上限时为{scepter_max_entangle_duration}秒。',
            notes: ['自然的愤怒只能伤害视野内的单位。', '可以通过点击小地图施放；初始目标将选择施放地点最近的有效单位。'],
        },
        {
            ability_classname: 'imba_furion_curse_of_the_forest',
            ability_specials: [
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'damage_per_tree',
                    text: '每棵树木每秒伤害：',
                },
                {
                    ability_special: 'slow_per_tree',
                    text: '%每棵树木移速减缓：',
                },
            ],
            name: '青森诅咒',
            description:
                '对{range}范围内所有敌方英雄施加一个诅咒，使他们在迷雾中显形，根据{radius}范围内树木的数量对他们造成减速和持续伤害。在此情况下树人也被视为树木。',
            lore: '自然先知虽然天赋异禀，但是并非无所不见，他必须严重依赖忠实的朋友组成的天网为他提供侦查和援助。',
            notes: [],
        },
        {
            ability_classname: 'imba_furion_hedgerow',
            ability_specials: [
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'hedge_length',
                    text: '篱墙长度：',
                },
                {
                    ability_special: 'max_hits',
                    text: '最多抵挡弹道次数：',
                },
                {
                    ability_special: 'movement_slow_pct',
                    text: '移动速度减缓：:',
                },
                {
                    ability_special: 'damage_per_tick',
                    text: '每次伤害：',
                },
                {
                    ability_special: 'damage_tick_interval',
                    text: '伤害间隔：',
                },
            ],
            name: '植物篱墙',
            description: '在自然先知前方创造一列篱墙，可以抵挡飞行过程中的敌方攻击弹道。对离篱墙太近的敌人造成减速和伤害。',
            notes: [],
        },
        {
            ability_classname: 'imba_furion_arboreal_might',
            ability_specials: [
                {
                    ability_special: 'area_of_effect',
                    text: '作用范围：',
                },
                {
                    ability_special: 'max_trees',
                    text: '最多树木击中：',
                },
                {
                    ability_special: 'duration',
                    text: '加成效果持续时间：',
                },
                {
                    ability_special: 'damage_per_stack',
                    text: '每层叠加提升攻击力：',
                },
                {
                    ability_special: 'armor_per_stack',
                    text: '每层叠加护甲：',
                },
            ],
            name: '树林之力',
            description:
                '自然先知附近每{trees_per_stack}棵树都能让他获得一个攻击力加成的叠加效果。每次攻击都会减少攻击力的叠加效果，但是提升自然先知的护甲。',
            notes: [],
        },
        {
            ability_classname: 'imba_furion_spirit_of_the_forest',
            ability_specials: [
                {
                    ability_special: 'multiplier',
                    text: '树人加成倍数：',
                },
            ],
            name: '丛林之魂',
            description:
                '附近{radius}范围内每棵树都会让自然先知获得{damage_per_tree_pct}%攻击力加成，{radius_treant}范围内每个树人也会让自然先知获得若干倍数的加成。',
            notes: [],
        },
        {
            ability_classname: 'imba_furion_fecundity',
            ability_specials: [],
            notes: [],
        },
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: 'special_bonus_unique_imba_furion',
                    name: '{s:bonus_treant_health}倍 树人生命/攻击力',
                    description: '也会影响丛林之魂',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_furion_2',
                    name: '+{s:bonus_treant_movespeed} 自然的呼唤树人移速',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_furion_3',
                    name: '传送无冷却',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_furion_4',
                    name: '+{s:bonus_sprout_damage} 发芽伤害',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_furion_5',
                    name: '+{s:bonus_damage} 自然之怒基础伤害',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_furion_6',
                    name: '-{s:bonus_AbilityCooldown}秒 自然的呼唤冷却',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_furion_7',
                    name: '发芽具有束缚效果',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_furion_teleportation_barrier',
                    name: '+{s:bonus_barrier} 传送护盾',
                },
            ],
        },
    ],
    FacetArray_B: [
        {
            facet_classname: 'furion_facets_imba_1',
            name: '铁树树人 | 坚锐单位对其他坚锐单位和建筑造成额外伤害，并且受到其他单位的伤害变低。 | 舒缓之苗',
            description:
                '自然的呼唤只会产生{s:bonus_max_treants}个树人，但是生命值和攻击力增加，视野增加，移动速度增加，而且拥有坚锐技能。 发芽内和外围附近的友军会持续获得治疗效果。',
            related_abilities: [
                {
                    ability_classname: 'imba_furion_sprout',
                    description: '发芽内和外围附近的友军会持续获得治疗效果。对友方建筑的治疗速率为{building_healing_pct}%。',
                },
                {
                    ability_classname: 'imba_furion_force_of_nature',
                    description: '召唤的树人数量减少，但是威力变大，而且拥有坚锐技能。',
                },
                {
                    ability_classname: 'imba_furion_spirit_of_the_forest',
                    description: '树人的倍数增加。',
                },
            ],
            related_talents: [],
        },
    ],
    ModifierArray: [
        {
            modifier_classname: 'modifier_imba_furion_spirit_of_the_forest',
            name: '丛林之魂',
            description: '附近树木使基础攻击力提升{MODIFIER_PROPERTY_BASEDAMAGEOUTGOING_PERCENTAGE}%。',
        },
        {
            modifier_classname: 'modifier_imba_furion_wrathofnature_spawn',
            name: '自然之怒',
            description: '阵亡后将产生树人。',
        },
        {
            modifier_classname: 'modifier_imba_furion_wrathofnature_buff_counter',
            name: '自然之怒',
            description: '获得{MODIFIER_PROPERTY_TOOLTIP}点额外攻击力。',
        },
        {
            modifier_classname: 'modifier_imba_furion_sprout_entangle',
            name: '自然之怒',
            description: '被缠绕。',
        },
        {
            modifier_classname: 'modifier_imba_furion_sprout_healing',
            name: '舒缓之苗',
            description: '持续治疗。',
        },
        {
            modifier_classname: 'modifier_imba_furion_sprout_blind',
            name: '发芽致盲',
            description: '{MODIFIER_PROPERTY_MISS_PERCENTAGE}%的攻击落空。',
        },
        {
            modifier_classname: 'modifier_imba_furion_sprout_tether',
            name: '发芽束缚',
            description: '被束缚在发芽地点。',
        },
        {
            modifier_classname: 'modifier_imba_furion_sprout_damage',
            name: '发芽',
            description: '持续受到伤害。',
        },
        {
            modifier_classname: 'modifier_imba_furion_teleport_shield',
            name: '传送',
            description: '可以吸收{MODIFIER_PROPERTY_INCOMING_DAMAGE_CONSTANT}点伤害。',
        },
        {
            modifier_classname: 'modifier_imba_furion_curse_of_the_forest',
            name: '青森诅咒',
            description: '单位在迷雾中显形，被减速并受到持续伤害',
        },
        {
            modifier_classname: 'modifier_imba_furion_arboreal_might_armor',
            name: '传送',
            description: '护甲提升{MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS}点。',
        },
        {
            modifier_classname: 'modifier_imba_furion_arboreal_might_attack_damage',
            name: '传送',
            description: '攻击力提升{MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE}点。',
        },
    ],
};
