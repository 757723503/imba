import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: 'imba_huskar_inner_vitality',
            ability_specials: [
                {
                    ability_special: 'heal',
                    text: '生命恢复：',
                },
                {
                    ability_special: 'tooltip_attrib_bonus',
                    text: '%属性治疗加成：',
                },
                {
                    ability_special: 'tooltip_hurt_attrib_bonus',
                    text: '%低血量治疗加成：',
                },
            ],
            name: '活血术',
            description: '激发友方单位的恢复力，基于其基础属性治疗目标。如果目标血量低于35%{，则恢复速度提高。持续}abilityduration%秒。',
            lore: '虽然哈斯卡很少用魔法，不过从戴泽还有德尊牧师那里学来的这个强化术，在他严重受伤时经常被使用。',
            notes: ['每秒都会检测生命的百分比，并对回复效果进行相应调整。', '可以对减益免疫单位施放。'],
        },
        {
            ability_classname: 'imba_huskar_inner_fire',
            ability_specials: [
                {
                    ability_special: 'health_cost',
                    text: '生命消耗：',
                },
                {
                    ability_special: 'damage',
                    text: '伤害：',
                },
                {
                    ability_special: 'radius',
                    text: '作用范围：',
                },
                {
                    ability_special: 'disarm_duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'knockback_distance',
                    text: '击退至固定距离：',
                },
                {
                    ability_special: 'movement_slow_pct',
                    text: '%移动速度减缓：',
                },
                {
                    ability_special: 'hero_damage_heal_pct',
                    text: '%对英雄伤害产生治疗：',
                },
                {
                    ability_special: 'creep_damage_heal_pct',
                    text: '%对非英雄伤害产生治疗：',
                },
            ],
            name: '心炎',
            description: '在炽烈的狂暴下将附近所有敌人击退至固定距离外，造成伤害和沉默。',
            lore: '就连哈斯卡自己的肉体都容纳不了他不断膨胀的生命力。',
            shard_description: '降低心炎的冷却时间，并且施加减速效果，对敌人造成伤害的一定百分比可以治疗哈斯卡。',
            notes: [],
        },
        {
            ability_classname: 'imba_huskar_burning_spear',
            ability_specials: [
                {
                    ability_special: 'health_cost',
                    text: '%当前生命值消耗：',
                },
                {
                    ability_special: 'max_health_cost',
                    text: '%最大生命值消耗：',
                },
                {
                    ability_special: 'burn_damage',
                    text: '烧灼伤害：',
                },
                {
                    ability_special: 'burn_damage_max_pct',
                    text: '%最大生命值烧灼：',
                },
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'duration_for_nothl_conflagration',
                    text: '持续时间：',
                },
            ],
            name: '沸血之矛',
            description: '哈斯卡将其长矛点燃，在普通攻击的同时对敌方单位造成持续伤害。多次攻击会造成持续伤害叠加。每次攻击都将牺牲哈斯卡部分生命值。',
            lore: '神灵武士的武器经过自身鲜血的沾染，燃起了烈火——敌人将领受远超己痛的苦楚。',
            notes: ['沸血之矛在多次施放到目标身上效果可以叠加。没有叠加上限。', '哈斯卡不能使用此技能自杀。'],
        },
        {
            ability_classname: 'imba_huskar_berserkers_blood',
            ability_specials: [
                {
                    ability_special: 'maximum_attack_speed',
                    text: '最大攻击速度：',
                },
                {
                    ability_special: 'maximum_health_regen',
                    text: '%最大力量恢复：',
                },
                {
                    ability_special: 'maximum_magic_resist',
                    text: '%最大魔法抗性：',
                },
                {
                    ability_special: 'hp_threshold_max',
                    text: '%最大加成时生命值：',
                },
            ],
            name: '狂战士之血',
            description: '哈斯卡的伤痛赐予他力量，根据他损失的生命值将获得攻击速度、魔法抗性和生命恢复加成。生命恢复为力量的一定百分比。',
            lore: '从虚无之境逃出后，哈斯卡的力量会随着血液的损失而增强，使他能够造成致命的物理性破坏。',
            notes: ['加成效果为线性增加，满血时没有加成，{hp_threshold_max}%生命时达到最大加成。'],
        },
        {
            ability_classname: 'imba_huskar_blood_magic',
            ability_specials: [],
            name: '血魔法',
            description: '哈斯卡没有魔法值。物品的魔法消耗会转换为生命消耗。',
            notes: ['哈斯卡的生命消耗为魔法伤害，可以被魔法抗性减少。'],
        },
        {
            ability_classname: 'imba_huskar_life_break',
            ability_specials: [
                {
                    ability_special: 'tooltip_health_damage',
                    text: '%伤害：',
                },
                {
                    ability_special: 'tooltip_health_cost_percent',
                    text: '%生命损耗：',
                },
                {
                    ability_special: 'movespeed',
                    text: '%移动速度减缓：',
                },
                {
                    ability_special: 'attack_speed',
                    text: '攻击速度降低：',
                },
                {
                    ability_special: 'slow_duration_tooltip',
                    text: '减速持续时间：',
                },
                {
                    ability_special: 'taunt_duration',
                    text: '嘲讽持续时间：',
                },
                {
                    ability_special: 'cast_range_bonus',
                    text: '施法距离加成：',
                },
                {
                    ability_special: 'splash_radius',
                    text: '溅血范围：',
                },
                {
                    ability_special: 'life_break_heal_radius',
                    text: '治疗作用范围：',
                },
            ],
            name: '牺牲',
            description:
                '哈斯卡牺牲自己的生命来摧毁敌人的生命，他跃向一个目标，造成目标当前生命值一定百分比的伤害，并且降低目标的移动和攻击速度。哈斯卡在跳跃过程中为减益免疫，并且魔法抗性提升60%%。\\n\\n驱散类型：弱驱散',
            lore: '哈斯卡不顾危险，冲入只有他能幸存的激烈近身战。',
            scepter_description: '强迫敌方目标攻击哈斯卡，并提升施法距离。',
            notes: ['如果哈斯卡在跳跃时受到控制技能，或目标在0.015秒内移动1400码以上，跳跃就会停止。', '减速效果无视减益免疫。', '牺牲无法被躲避。'],
        },
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: 'special_bonus_unique_imba_huskar',
                    name: '+{s:bonus_tooltip_health_damage}% 牺牲伤害',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_huskar_2',
                    name: '+{s:bonus_burn_damage} 沸血之矛烧灼伤害',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_huskar_3',
                    name: '+{s:bonus_disarm_duration}秒 心炎持续时间',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_huskar_4',
                    name: '+{s:bonus_slow_duration_tooltip}秒 牺牲减速',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_huskar_5',
                    name: '+{s:bonus_duration}秒 沸血之矛持续时间',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_huskar_6',
                    name: '+{s:bonus_maximum_health_regen}% 狂战士之血恢复',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_huskar_7',
                    name: '-{s:value}秒 牺牲冷却',
                },
            ],
        },
    ],
    FacetArray_B: [
        {
            facet_classname: 'huskar_facets_imba_1',
            name: '血洗 | 虚无输血 | 炙矛可热',
            description:
                '牺牲还会使目标附近的敌人减速。 牺牲还会治疗目标附近的友方单位。 沸血之矛还会燃烧敌人一定百分比的最大生命值。会消耗最大生命值，而不是当前生命值。烧灼时间减少。',
            related_abilities: [
                {
                    ability_classname: 'imba_huskar_burning_spear',
                    description: '沸血之矛还会燃烧敌人一定百分比的最大生命值。会消耗最大生命值，而不是当前生命值。烧灼时间减少。',
                },
                {
                    ability_classname: 'imba_huskar_life_break',
                    description: '牺牲还会使目标附近的敌人减速。',
                },
            ],
            related_talents: [
                {
                    talent_key: 'special_bonus_unique_huskar_5_facet_huskar_nothl_conflagration',
                    description: '+{s:bonus_duration_for_nothl_conflagration}秒 沸血之矛持续时间',
                },
            ],
        },
    ],
    ModifierArray: [
        {
            modifier_classname: 'modifier_imba_huskar_inner_vitality',
            name: '活血术',
            description: '每秒恢复{MODIFIER_PROPERTY_HEALTH_REGEN_CONSTANT}点生命值。',
        },
        {
            modifier_classname: 'modifier_imba_huskar_burning_spear_debuff',
            name: '沸血之矛',
            description: '你着火了！受到持续伤害。',
        },
        {
            modifier_classname: 'modifier_imba_huskar_berserkers_blood',
            name: '狂战士之血',
            description:
                '攻击速度提升{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}，魔法抗性提升{MODIFIER_PROPERTY_MAGICAL_RESISTANCE_BONUS}%，并且生命恢复提升{MODIFIER_PROPERTY_HEALTH_REGEN_CONSTANT}。',
        },
        {
            modifier_classname: 'modifier_imba_huskar_life_break_slow',
            name: '牺牲',
            description: '移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。攻击速度降低{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}。',
        },
        {
            modifier_classname: 'modifier_imba_huskar_inner_fire_disarm',
            name: '心炎',
            description: '被哈斯卡的心炎沉默',
        },
        {
            modifier_classname: 'modifier_imba_huskar_inner_fire_knockback',
            name: '击退',
        },
        {
            modifier_classname: 'modifier_imba_huskar_life_break_taunt',
            name: '牺牲',
            description: '被嘲讽',
        },
        {
            modifier_classname: 'modifier_imba_huskar_life_break_charge',
            name: '牺牲',
            description: '减益免疫。',
        },
        {
            modifier_classname: 'modifier_imba_huskar_berserkers_blood_transfusion',
            name: '狂战士之血输血',
            description:
                '攻击速度提升{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}，魔法抗性提升{MODIFIER_PROPERTY_MAGICAL_RESISTANCE_BONUS}%，并且生命恢复提升{MODIFIER_PROPERTY_HEALTH_REGEN_CONSTANT}。',
        },
        {
            modifier_classname: 'modifier_imba_huskar_berserkers_blood_transfusion_debuff',
            name: '狂战士之血输血',
            description: '由于输血，失去了攻击速度、魔法抗性和生命恢复。',
        },
    ],
};
