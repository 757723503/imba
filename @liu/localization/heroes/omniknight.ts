import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_omniknight_hammer_of_purity",
            ability_specials: [
                {
                    ability_special: "AbilityCooldown",
                    text: ""
                },
                {
                    ability_special: "base_damage",
                    text: "%基础攻击力额外伤害："
                },
                {
                    ability_special: "bonus_damage",
                    text: "伤害："
                },
                {
                    ability_special: "heal_pct",
                    text: ""
                },
                {
                    ability_special: "attack_cooldown",
                    text: ""
                }
            ],
            name: "纯洁之锤",
            description: "全能骑士将神圣之力注入他的战锤，使他的攻击会根据基础攻击力的一定百分比造成纯粹伤害。",
            lore: "",
            shard_description: "全能骑士会受到{bonus_heal_pct}{纯洁之锤造成伤害的治疗效果。纯洁之锤获得}AbilityCharges%点能量点数。",
            notes: []
        },
        {
            ability_classname: "imba_omniknight_purification",
            ability_specials: [
                {
                    ability_special: "heal",
                    text: "治疗/伤害："
                },
                {
                    ability_special: "AbilityCooldown",
                    text: ""
                },
                {
                    ability_special: "radius",
                    text: "伤害作用范围："
                },
                {
                    ability_special: "recast_delay",
                    text: ""
                },
                {
                    ability_special: "recast_effectiveness_pct",
                    text: ""
                }
            ],
            name: "洗礼",
            description: "立即治疗一个友方单位，并对周围的敌军造成伤害。",
            lore: "全知的牧师们善于清除己方战士们身心中的污杂。",
            notes: []
        },
        {
            ability_classname: "imba_omniknight_repel",
            ability_specials: [
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "status_resistance",
                    text: "%状态抗性："
                },
                {
                    ability_special: "bonus_str",
                    text: "力量加成："
                },
                {
                    ability_special: "hp_regen",
                    text: "生命恢复："
                }
            ],
            name: "驱逐",
            description: "创造出一个神圣屏障环绕友军，提升目标的状态抗性，力量和生命恢复。\\n\\n驱散类型：强驱散",
            lore: "当面对着牺牲之渊时，普利斯特对魔法的适应力得到了测试和证实。",
            notes: []
        },
        {
            ability_classname: "imba_omniknight_pacify",
            ability_specials: [
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "spell_resistance_reduction",
                    text: "%技能伤害降低："
                },
                {
                    ability_special: "duration",
                    text: "持续时间："
                }
            ],
            name: "神圣制裁",
            description: "使受作用的敌人在一段时间内技能伤害降低。",
            lore: "当面对着牺牲之渊时，普利斯特对魔法的适应力得到了测试和证实。",
            notes: []
        },
        {
            ability_classname: "imba_omniknight_degen_aura",
            ability_specials: [
                {
                    ability_special: "speed_bonus",
                    text: "%移动速度减缓："
                },
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "bonus_damage_per_stack",
                    text: ""
                },
                {
                    ability_special: "stack_interval",
                    text: ""
                },
                {
                    ability_special: "max_stacks",
                    text: "%最高额外伤害："
                },
                {
                    ability_special: "linger_duration",
                    text: ""
                }
            ],
            name: "退化光环",
            description: "减缓附近敌人的移动速度。",
            lore: "作为神圣的化身，普利斯特·雷霆之怒足以削弱那些不忠之徒。",
            notes: [
                "对减益免疫单位无效。"
            ]
        },
        {
            ability_classname: "imba_omniknight_healing_hammer",
            ability_specials: [
                {
                    ability_special: "healing_pct_of_damage",
                    text: "%伤害量治疗："
                },
                {
                    ability_special: "duration",
                    text: "持续时间："
                }
            ],
            name: "疗伤之锤",
            description: "全能骑士对敌人造成的技能伤害会持续治疗全能骑士。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_omniknight_martyr",
            ability_specials: [
                {
                    ability_special: "base_strength",
                    text: "基础力量："
                },
                {
                    ability_special: "base_hpregen",
                    text: "基础生命恢复："
                },
                {
                    ability_special: "strength_bonus",
                    text: "每个负面状态的额外力量/生命恢复加成："
                },
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "magic_resist",
                    text: ""
                }
            ],
            name: "驱逐",
            description: "使目标获得减益免疫效果和{magic_resist}%魔法抗性，并根据目标身上的负面效果数量获得力量和生命恢复加成。",
            lore: "全知之主对那些被普利斯特称为“朋友”的人降下保护结界。",
            notes: []
        },
        {
            ability_classname: "imba_omniknight_guardian_angel",
            ability_specials: [
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "AbilityCastRange",
                    text: ""
                },
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "AbilityCooldown",
                    text: ""
                },
                {
                    ability_special: "affects_buildings",
                    text: ""
                },
                {
                    ability_special: "heal_and_regen_amp",
                    text: "%生命恢复/治疗增强："
                }
            ],
            name: "守护天使",
            description: "全能骑士召唤出守护天使，使区域内的所有单位对物理伤害免疫。",
            lore: "全知之主对那些被普利斯特称为“朋友”的人降下保护结界。",
            scepter_description: "守护天使拥有全地图的施法距离，作用范围提升，并且可以作用于建筑。持续时间内生命恢复和治疗效果增强。",
            notes: []
        },
        {
            ability_classname: "imba_omniknight_angelic_flight",
            ability_specials: [
                {
                    ability_special: "duration",
                    text: ""
                },
                {
                    ability_special: "movement_speed",
                    text: ""
                },
                {
                    ability_special: "hp_regen",
                    text: ""
                }
            ],
            name: "天使翱翔",
            description: ".",
            lore: "",
            notes: []
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_omniknight_1",
                    name: "+{s:bonus_heal} 洗礼伤害/治疗"
                },
                {
                    talent_classname: "special_bonus_unique_imba_omniknight_2",
                    name: "+{s:bonus_strength_bonus} 驱逐额外力量/生命恢复"
                },
                {
                    talent_classname: "special_bonus_unique_imba_omniknight_3",
                    name: "-{s:bonus_AbilityCooldown}秒 纯洁之锤冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_omniknight_4",
                    name: "+{s:bonus_base_damage}% 纯洁之锤额外基础攻击力"
                },
                {
                    talent_classname: "special_bonus_unique_imba_omniknight_5",
                    name: "+{s:bonus_duration}秒 驱逐持续时间"
                },
                {
                    talent_classname: "special_bonus_unique_imba_omniknight_6",
                    name: "-{s:bonus_AbilityCooldown}秒 洗礼冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_omniknight_7",
                    name: "-{s:bonus_AbilityCooldown}秒 守护天使冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_omniknight_guardian_angel_duration",
                    name: "+{s:bonus_duration}秒 守护天使持续时间"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "omniknight_facets_imba_1",
            name: "",
            description: ""
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_omniknight_repel",
            name: "驱逐",
            description: "状态抗性提升{MODIFIER_PROPERTY_STATUS_RESISTANCE_STACKING}%，力量提升{MODIFIER_PROPERTY_STATS_STRENGTH_BONUS}点，生命恢复提升{MODIFIER_PROPERTY_HEALTH_REGEN_CONSTANT}点/秒。"
        },
        {
            modifier_classname: "modifier_imba_omniknight_degen_aura_effect",
            name: "退化光环",
            description: "移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%并且受到来自全能骑士的伤害增加。"
        },
        {
            modifier_classname: "modifier_imba_omniknight_hammer_of_purity_bomb",
            name: "纯洁之锤",
            description: "移动速度被减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。"
        },
        {
            modifier_classname: "modifier_imba_omniknight_hammer_of_purity",
            name: "纯洁之锤",
            description: "全能骑士的下次攻击会朝目标放出一个纯洁之锤。"
        },
        {
            modifier_classname: "modifier_imba_omniknight_martyr",
            name: "驱逐",
            description: "获得{MODIFIER_PROPERTY_HEALTH_REGEN_CONSTANT}点/秒生命恢复以及{MODIFIER_PROPERTY_STATS_STRENGTH_BONUS}点力量加成。"
        },
        {
            modifier_classname: "modifier_imba_omniknight_purification_recast",
            name: "洗礼",
            description: "洗礼即将到来！"
        }
    ]
};