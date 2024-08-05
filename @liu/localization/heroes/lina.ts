import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_lina_dragon_slave",
            ability_specials: [
                {
                    ability_special: "dragon_slave_damage",
                    text: "伤害："
                },
                {
                    ability_special: "dragon_slave_burn_damage_tooltip",
                    text: "烧灼伤害："
                },
                {
                    ability_special: "dragon_slave_burn_duration_tooltip",
                    text: "烧灼持续时间："
                },
                {
                    ability_special: "dragon_slave_speed",
                    text: ""
                },
                {
                    ability_special: "dragon_slave_width_initial",
                    text: ""
                },
                {
                    ability_special: "dragon_slave_width_end",
                    text: ""
                },
                {
                    ability_special: "dragon_slave_distance",
                    text: ""
                },
                {
                    ability_special: "AbilityCooldown",
                    text: ""
                }
            ],
            name: "龙破斩",
            description: "莉娜引导龙的吐息，放出一波火焰，烧焦所有波及的敌人。",
            lore: "在纷争之国的荒焦之地，为了娱乐，莉娜学会了操纵沙漠飞龙的火焰吐息。",
            notes: [
                "龙破斩最远能伤害1225距离外的单位。",
                "不会触发法术抵抗或法术反弹。"
            ]
        },
        {
            ability_classname: "imba_lina_light_strike_array",
            ability_specials: [
                {
                    ability_special: "light_strike_array_aoe",
                    text: "作用范围："
                },
                {
                    ability_special: "light_strike_array_delay_time",
                    text: "施法延迟："
                },
                {
                    ability_special: "light_strike_array_stun_duration",
                    text: "眩晕时间："
                },
                {
                    ability_special: "light_strike_array_damage",
                    text: "伤害："
                },
                {
                    ability_special: "light_strike_array_burn_damage_tooltip",
                    text: "烧灼伤害："
                },
                {
                    ability_special: "light_strike_array_burn_duration_tooltip",
                    text: "烧灼持续时间："
                }
            ],
            name: "光击阵",
            description: "召唤柱状火焰伤害并眩晕敌人。",
            lore: "莉娜的精华让她能够集中太阳的能量，随时让空气燃烧。",
            notes: [
                "光击阵将摧毁作用范围内的树木。"
            ]
        },
        {
            ability_classname: "imba_lina_fiery_soul",
            ability_specials: [
                {
                    ability_special: "fiery_soul_attack_speed_bonus",
                    text: "攻击速度提升："
                },
                {
                    ability_special: "fiery_soul_move_speed_bonus",
                    text: "%移动速度提升："
                },
                {
                    ability_special: "fiery_soul_magic_resist",
                    text: ""
                },
                {
                    ability_special: "fiery_soul_max_stacks",
                    text: "最大叠加数："
                },
                {
                    ability_special: "fiery_soul_stack_duration",
                    text: "持续时间："
                },
                {
                    ability_special: "bonus_spell_damage",
                    text: ""
                },
                {
                    ability_special: "target_crit_multiplier",
                    text: ""
                },
                {
                    ability_special: "target_crit_debuff_duration",
                    text: ""
                }
            ],
            name: "炽魂",
            description: "莉娜每次利用技能击中一个敌人都会使她获得攻击和移动速度加成。可以叠加。持续{fiery_soul_stack_duration}秒。",
            lore: "舞动的火焰体现了莉娜爱玩的天性，展示了她真实炙热的自我。",
            shard_description: "每点炽魂能量点数能使莉娜的技能多造成{shard_bonus_spell_damage}点伤害。",
            notes: [
                "每次技能击中敌人时都会刷新持续时间。",
                "使用物品不会触发炽魂。"
            ]
        },
        {
            ability_classname: "imba_lina_flame_cloak",
            ability_specials: [
                {
                    ability_special: "flame_cloak_duration",
                    text: "持续时间："
                },
                {
                    ability_special: "magic_resistance",
                    text: "%魔法抗性："
                },
                {
                    ability_special: "spell_amp",
                    text: "%技能增强："
                },
                {
                    ability_special: "visualzdelta",
                    text: ""
                },
                {
                    ability_special: "zchangespeed",
                    text: ""
                }
            ],
            name: "腾焰斗篷",
            description: "使莉娜获得顺畅的移动状态，并且提升技能伤害和魔法抗性。开启时获得炽魂的最高叠加层数。",
            lore: "一道天然的屏障，不论是拦住讨厌的姐妹还是可怕的野兽都能轻松做到。",
            notes: []
        },
        {
            ability_classname: "imba_lina_laguna_blade",
            ability_specials: [
                {
                    ability_special: "damage",
                    text: "伤害："
                },
                {
                    ability_special: "burn_damage_tooltip",
                    text: "烧灼伤害："
                },
                {
                    ability_special: "burn_duration_tooltip",
                    text: "烧灼持续时间："
                },
                {
                    ability_special: "damage_delay",
                    text: ""
                },
                {
                    ability_special: "AbilityCooldown",
                    text: ""
                },
                {
                    ability_special: "pierce_immunity",
                    text: ""
                },
                {
                    ability_special: "supercharge_duration",
                    text: "顶峰持续时间："
                },
                {
                    ability_special: "supercharge_stacks",
                    text: "顶峰叠加层数："
                },
                {
                    ability_special: "barrier_pct",
                    text: ""
                },
                {
                    ability_special: "barrier_duration",
                    text: ""
                }
            ],
            name: "神灭斩",
            description: "对单个敌方单位射出闪电，造成大量伤害。",
            lore: "莉娜身边的空气变得极度炙热，产生白热的闪电来灼烧过于接近的敌人。",
            notes: [
                "神灭斩在技能施放到伤害生效有{damage_delay}秒延迟，因此有若干技能可以躲避该伤害。"
            ]
        },
        {
            ability_classname: "imba_lina_slow_burn",
            ability_specials: [
                {
                    ability_special: "impact_damage_pct",
                    text: ""
                },
                {
                    ability_special: "damage_penalty_tooltip",
                    text: ""
                },
                {
                    ability_special: "burn_percent",
                    text: ""
                },
                {
                    ability_special: "burn_percent_tooltip",
                    text: ""
                },
                {
                    ability_special: "burn_percent_tooltip_damage",
                    text: ""
                },
                {
                    ability_special: "total_damage_tooltip",
                    text: ""
                },
                {
                    ability_special: "burn_duration",
                    text: ""
                }
            ],
            name: "慢热",
            description: "莉娜的技能造成{total_damage_tooltip}{总伤害。击中时造成{damage_penalty_tooltip}}，然后在{burn_duration}秒内造成{burn_percent_tooltip_damage}%烧灼伤害。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_lina_combustion",
            ability_specials: [
                {
                    ability_special: "damage_threshold",
                    text: ""
                },
                {
                    ability_special: "damage",
                    text: "过热伤害："
                },
                {
                    ability_special: "damage_illusions",
                    text: "过热伤害（幻象）："
                },
                {
                    ability_special: "damage_aoe",
                    text: "过热作用范围："
                },
                {
                    ability_special: "duration",
                    text: ""
                }
            ],
            name: "燎火",
            description: "莉娜每对一名敌方英雄造成{damage_threshold}点伤害都会使他们过热，对附近他们的友军造成伤害。单次伤害可以多次触发该效果。过热的幻象造成的伤害会减少。",
            lore: "",
            notes: []
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_lina_1",
                    name: "-{s:bonus_AbilityCooldown}秒 龙破斩冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_lina_2",
                    name: "+{s:bonus_fiery_soul_attack_speed_bonus}/{s:bonus_fiery_soul_move_speed_bonus}% 炽魂每次叠加"
                },
                {
                    talent_classname: "special_bonus_unique_imba_lina_3",
                    name: "+{s:bonus_light_strike_array_damage} 光击阵伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_lina_4",
                    name: "{s:bonus_fiery_soul_magic_resist}% 炽魂每次叠加魔抗"
                },
                {
                    talent_classname: "special_bonus_unique_imba_lina_6",
                    name: "-{s:bonus_AbilityCooldown}秒 神灭斩冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_lina_7",
                    name: "{s:bonus_barrier_pct}% 神灭斩伤害变为护盾",
                    description: "持续{s:bonus_barrier_duration}秒。"
                },
                {
                    talent_classname: "special_bonus_unique_imba_lina_dragon_slave_crits",
                    name: "对龙破斩烧灼下目标+{s:bonus_target_crit_multiplier}% 暴击",
                    description: "仅对莉娜的攻击有效"
                },
                {
                    talent_classname: "special_bonus_unique_imba_lina_crit_debuff",
                    name: "对技能作用下目标+{s:bonus_target_crit_multiplier}% 暴击",
                    description: "仅对莉娜的攻击生效，持续{s:bonus_target_crit_debuff_duration}秒。"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "lina_facets_imba_1",
            name: "",
            description: ""
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_lina_flame_cloak",
            name: "腾焰斗篷",
            description: "拥有顺畅的移动状态。魔法抗性提升{MODIFIER_PROPERTY_MAGICAL_RESISTANCE_BONUS}%。技能伤害提升{MODIFIER_PROPERTY_SPELL_AMPLIFY_PERCENTAGE}%。"
        },
        {
            modifier_classname: "modifier_imba_lina_overheat",
            name: "燎火中",
            description: "对附近友军造成伤害。"
        },
        {
            modifier_classname: "modifier_imba_lina_slow_burn",
            name: "烧灼",
            description: "持续受到烧灼伤害。"
        },
        {
            modifier_classname: "modifier_imba_lina_dragon_slave_burn",
            name: "龙破斩",
            description: "持续受到烧灼伤害。"
        },
        {
            modifier_classname: "modifier_imba_lina_crit_debuff",
            name: "致命标记",
            description: "莉娜的攻击会对这个单位造成致命一击。"
        },
        {
            modifier_classname: "modifier_imba_lina_fiery_soul",
            name: "炽魂",
            description: "攻击速度提升{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}，移动速度提升{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。"
        },
        {
            modifier_classname: "modifier_imba_lina_laguna_blade",
            name: "神灭斩",
            description: "即将被元素能量轰炸。"
        },
        {
            modifier_classname: "modifier_imba_lina_laguna_blade_barrier",
            name: "神灭斩",
            description: "可以吸收{MODIFIER_PROPERTY_INCOMING_DAMAGE_CONSTANT}点伤害。"
        },
        {
            modifier_classname: "modifier_imba_lina_super_charged",
            name: "能量达到顶峰",
            description: "满溢着炽魂的能量。"
        }
    ]
};