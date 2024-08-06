import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_nevermore_shadowraze1",
            ability_specials: [
                {
                    ability_special: "shadowraze_damage",
                    text: "基础伤害："
                },
                {
                    ability_special: "shadowraze_range",
                    text: "距离："
                },
                {
                    ability_special: "stack_bonus_damage",
                    text: "连中额外伤害："
                },
                {
                    ability_special: "duration",
                    text: "叠加持续时间："
                },
                {
                    ability_special: "AbilityCooldown",
                    text: "冷却时间："
                }
            ],
            name: "毁灭阴影",
            description: "影魔对其正前方区域释放毁灭能量，对该区域中的敌人造成伤害。在目标身上施加一个连中效果，持续时间内再被毁灭阴影击中将受到额外伤害。",
            lore: "奈文摩尔标志性的灵魂收割手段。",
            shard_description: "每击中一名敌方英雄后冷却时间减少{cooldown_reduction_on_hero_hit}秒。",
            notes: [
                "连中效果的持续时间在每次连中时刷新。"
            ]
        },
        {
            ability_classname: "imba_nevermore_shadowraze2",
            ability_specials: [
                {
                    ability_special: "shadowraze_damage",
                    text: "基础伤害："
                },
                {
                    ability_special: "shadowraze_range",
                    text: "距离："
                },
                {
                    ability_special: "stack_bonus_damage",
                    text: "连中额外伤害："
                },
                {
                    ability_special: "duration",
                    text: "叠加持续时间："
                },
                {
                    ability_special: "AbilityCooldown",
                    text: "冷却时间："
                }
            ],
            name: "毁灭阴影",
            description: "影魔对其正前方稍远处释放毁灭能量，对该区域中的敌人造成伤害。在目标身上施加一个连中效果，持续时间内再被毁灭阴影击中将受到额外伤害。",
            lore: "奈文摩尔标志性的灵魂收割手段。",
            shard_description: "每击中一名敌方英雄后冷却时间减少{cooldown_reduction_on_hero_hit}秒。",
            notes: [
                "连中效果的持续时间在每次连中时刷新。"
            ]
        },
        {
            ability_classname: "imba_nevermore_shadowraze3",
            ability_specials: [
                {
                    ability_special: "shadowraze_damage",
                    text: "基础伤害："
                },
                {
                    ability_special: "shadowraze_range",
                    text: "距离："
                },
                {
                    ability_special: "stack_bonus_damage",
                    text: "连中额外伤害："
                },
                {
                    ability_special: "duration",
                    text: "叠加持续时间："
                },
                {
                    ability_special: "AbilityCooldown",
                    text: "冷却时间："
                }
            ],
            name: "毁灭阴影",
            description: "影魔对其正前方较远处释放毁灭能量，对该区域中的敌人造成伤害。在目标身上施加一个连中效果，持续时间内再被毁灭阴影击中将受到额外伤害。",
            lore: "奈文摩尔标志性的灵魂收割手段。",
            shard_description: "每击中一名敌方英雄后冷却时间减少{cooldown_reduction_on_hero_hit}秒。",
            notes: [
                "连中效果的持续时间在每次连中时刷新。"
            ]
        },
        {
            ability_classname: "imba_nevermore_necromastery",
            ability_specials: [
                {
                    ability_special: "necromastery_damage_per_soul",
                    text: "攻击力加成/灵魂："
                },
                {
                    ability_special: "necromastery_max_souls",
                    text: "灵魂上限："
                },
                {
                    ability_special: "shard_souls_per_kill",
                    text: "每次击杀收获灵魂："
                },
                {
                    ability_special: "shard_crit_pct",
                    text: "%致命一击伤害："
                },
                {
                    ability_special: "shard_fear_duration",
                    text: "恐惧持续时间："
                }
            ],
            name: "支配死灵",
            description: "影魔每杀死一个单位都会窃取其灵魂，获得额外攻击力。影魔死亡时{soul_release_tooltip}%的灵魂将逃离他的束缚。",
            lore: "被收割的亡魂在魂渊内外盘旋，增加了影魔的力量，也方便他扩大自己的灵魂收藏。",
            shard_description: "影魔每次击杀都会额外获得1个灵魂。影魔每次攻击可以消耗1个灵魂，造成致命一击伤害，并使目标恐惧。",
            scepter_description: "提高灵魂数量上限。",
            notes: [
                "反补、杀死中立生物也能收集到灵魂。",
                "破坏会使技能无法获得新的叠加效果。",
                "破坏不会使现有叠加效果提供的加成失效。"
            ]
        },
        {
            ability_classname: "imba_nevermore_dark_lord",
            ability_specials: [
                {
                    ability_special: "presence_armor_reduction",
                    text: "护甲削弱："
                },
                {
                    ability_special: "presence_radius",
                    text: "作用范围："
                },
                {
                    ability_special: "bonus_armor_per_stack",
                    text: "英雄阵亡降低护甲："
                },
                {
                    ability_special: "kill_buff_duration",
                    text: "英雄阵亡降低护甲持续时间："
                }
            ],
            name: "魔王降临",
            description: "影魔的出现使得周围的敌人护甲降低。",
            lore: "即使只是在影魔周围游荡，灵魂也会被侵蚀。",
            shard_description: "降低附近敌人14%%魔法抗性。",
            notes: [
                "与其他降低护甲的技能和光环完全叠加。"
            ]
        },
        {
            ability_classname: "imba_nevermore_frenzy",
            ability_specials: [
                {
                    ability_special: "bonus_attack_speed",
                    text: "攻击速度加成："
                },
                {
                    ability_special: "cast_speed_pct_tooltip",
                    text: "%施法速度："
                },
                {
                    ability_special: "soul_cost",
                    text: "灵魂损失："
                }
            ],
            name: "灵魂盛宴",
            description: "影魔获得攻击速度加成，持续{duration}秒。在效果结束后，影魔失去若干个灵魂。",
            notes: [
                "无法施放，除非影魔有足够的灵魂作为代价。"
            ]
        },
        {
            ability_classname: "imba_nevermore_requiem",
            ability_specials: [
                {
                    ability_special: "AbilityCooldown",
                    text: "冷却时间："
                },
                {
                    ability_special: "requiem_reduction_ms",
                    text: "%移动速度减少："
                },
                {
                    ability_special: "requiem_reduction_mres",
                    text: "%魔法抗性降低："
                },
                {
                    ability_special: "requiem_slow_duration",
                    text: "每道魔能恐惧时间："
                },
                {
                    ability_special: "requiem_slow_duration_max",
                    text: "最长恐惧时间："
                },
                {
                    ability_special: "requiem_heal_pct_scepter",
                    text: "%回归治疗："
                },
                {
                    ability_special: "requiem_damage_pct_scepter",
                    text: "%回归伤害："
                }
            ],
            name: "魂之挽歌",
            description: "影魔聚集捕获的灵魂，以多道魔能的形式释放。若距离影魔过近将受到数道魔能的伤害。敌方单位受到魂之挽歌伤害的同时，每道魔能还将造成恐惧和减速效果，并且降低魔法抗性，持续{requiem_slow_duration}秒，最高可达{requiem_slow_duration_max}秒。每个通过支配死灵收集的灵魂会为魂之挽歌创造一道魔能。<br><br>死亡时会自动释放魂之挽歌，不占用主动大招的冷却时间。",
            lore: "那些死者的灵魂被捕获后尽数释放，毁灭他们生前的盟友。",
            scepter_description: "降低冷却时间，并且魂之挽歌可以回归影魔。回归的伤害波造成较低的伤害，但是影魔会回复与伤害值相等的生命。",
            notes: [
                "影魔收集的灵魂中，每{requiem_soul_conversion}个会产生一道伤害波。",
                "死亡时释放的魂之挽歌不会施加恐惧和减速效果。"
            ]
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_nevermore_1",
                    name: "+{s:bonus_necromastery_damage_per_soul} 攻击力/灵魂"
                },
                {
                    talent_classname: "special_bonus_unique_imba_nevermore_2",
                    name: "+{s:bonus_shadowraze_damage} 毁灭阴影伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_nevermore_3",
                    name: "魔王降临影响建筑"
                },
                {
                    talent_classname: "special_bonus_unique_imba_nevermore_4",
                    name: "+{s:bonus_bonus_attack_speed} 灵魂盛宴攻击速度"
                },
                {
                    talent_classname: "special_bonus_unique_imba_nevermore_6",
                    name: "+{s:bonus_requiem_slow_duration}秒 魂之挽歌每道恐惧",
                    description: "最长恐惧持续时间提升+{s:bonus_requiem_slow_duration_max}秒"
                },
                {
                    talent_classname: "special_bonus_unique_imba_nevermore_7",
                    name: "+{s:bonus_stack_bonus_damage} 毁灭阴影连中伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_nevermore_raze_procsattacks",
                    name: "毁灭阴影施加攻击伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_nevermore_shadowraze_cooldown",
                    name: "-{s:bonus_AbilityCooldown}秒 毁灭阴影冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_nevermore_frenzy_castspeed",
                    name: "灵魂盛宴+{s:bonus_cast_speed_pct}% 施法速度"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "nevermore_facets_imba_1",
            name: "阴影泥沼 | 经久不衰",
            description: "在附近敌方英雄阵亡后魔王降临的降低护甲效果将会暂时提升。每次击杀英雄会使支配死灵的灵魂上限增加{s:bonus_max_soul_increase_on_hero_kill}个，直到影魔阵亡。 毁灭阴影会减缓敌人的移动速度。",
            related_abilities: [
                {
                    ability_classname: "imba_nevermore_shadowraze1",
                    description: "对击中的敌人施加可叠加的{movement_speed_debuff}%移动速度和{attack_speed_debuff}攻击速度降低的负面效果。"
                },
                {
                    ability_classname: "imba_nevermore_shadowraze2",
                    description: "对击中的敌人施加可叠加的{movement_speed_debuff}%移动速度和{attack_speed_debuff}攻击速度降低的负面效果。"
                },
                {
                    ability_classname: "imba_nevermore_shadowraze3",
                    description: "对击中的敌人施加可叠加的{movement_speed_debuff}%移动速度和{attack_speed_debuff}攻击速度降低的负面效果。"
                },
                {
                    ability_classname: "imba_nevermore_necromastery",
                    description: "每次击杀英雄会使灵魂上限增加{max_soul_increase_on_hero_kill}个，直到影魔阵亡。"
                },
                {
                    ability_classname: "imba_nevermore_dark_lord",
                    description: "在附近敌方英雄阵亡后魔王降临的降低护甲效果将会暂时提升。"
                },
                {
                    ability_classname: "imba_nevermore_frenzy",
                    description: "灵魂盛宴还能提升施法速度。"
                }
            ],
            related_talents: []
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_nevermore_necromastery",
            name: "支配死灵",
            description: "储存的灵魂增加{MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE}点额外攻击力。"
        },
        {
            modifier_classname: "modifier_imba_nevermore_presence",
            name: "魔王降临",
            description: "影魔的出现使护甲降低{MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS}点。"
        },
        {
            modifier_classname: "modifier_imba_nevermore_presence_aura",
            name: "经久不衰",
            description: "进一步降低护甲。"
        },
        {
            modifier_classname: "modifier_imba_nevermore_requiem",
            name: "魂之挽歌",
            description: "移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%， 攻击力降低{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。"
        },
        {
            modifier_classname: "modifier_imba_nevermore_shadowraze_debuff",
            name: "毁灭阴影",
            description: "每次受到毁灭阴影作用时额外承受{MODIFIER_PROPERTY_TOOLTIP}点伤害。移动速度被减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。"
        },
        {
            modifier_classname: "modifier_imba_nevermore_requiem_fear",
            name: "魂之挽歌",
            description: "被恐惧。"
        },
        {
            modifier_classname: "modifier_imba_nevermore_requiem_slow",
            name: "魂之挽歌",
            description: "移动速度被减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。"
        },
        {
            modifier_classname: "modifier_imba_nevermore_necromastery_fear",
            name: "支配死灵",
            description: "被恐惧。"
        },
        {
            modifier_classname: "modifier_imba_nevermore_frenzy",
            name: "灵魂盛宴",
            description: "攻击速度提升{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}。"
        },
        {
            modifier_classname: "modifier_imba_nevermore_frenzy_facet_nevermore_fast_food",
            name: "攻击速度提升{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}。施法速度提升{MODIFIER_PROPERTY_CASTTIME_PERCENTAGE}%."
        }
    ]
};