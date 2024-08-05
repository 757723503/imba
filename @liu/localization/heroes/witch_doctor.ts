import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_witch_doctor_paralyzing_cask",
            ability_specials: [
                {
                    ability_special: "hero_duration",
                    text: "眩晕时间："
                },
                {
                    ability_special: "creep_duration",
                    text: ""
                },
                {
                    ability_special: "base_damage",
                    text: "基础伤害："
                },
                {
                    ability_special: "bounce_range",
                    text: ""
                },
                {
                    ability_special: "bounces",
                    text: "弹跳次数："
                },
                {
                    ability_special: "speed",
                    text: ""
                },
                {
                    ability_special: "bounce_delay",
                    text: ""
                },
                {
                    ability_special: "bounce_bonus_damage",
                    text: "每次弹跳增加伤害："
                },
                {
                    ability_special: "creep_damage_pct",
                    text: ""
                }
            ],
            name: "麻痹药剂",
            description: "抛出一个装满麻痹粉末的药剂，在敌方单位之间弹跳，眩晕击中的敌人并造成伤害。对非英雄单位造成{creep_damage_pct}%伤害。",
            lore: "巫医回收倒下的友军和敌人的尸骨，磨成粉末用作他的符咒和炼丹术的材料。",
            notes: [
                "目标可以受到多次作用，只要附近有其他单位可以进行弹跳。"
            ]
        },
        {
            ability_classname: "imba_witch_doctor_voodoo_restoration",
            ability_specials: [
                {
                    ability_special: "mana_per_second",
                    text: "每秒消耗魔法："
                },
                {
                    ability_special: "tooltip_mana_per_second",
                    text: ""
                },
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "heal",
                    text: "治疗："
                },
                {
                    ability_special: "heal_interval",
                    text: ""
                },
                {
                    ability_special: "does_heal_all_allies",
                    text: ""
                },
                {
                    ability_special: "does_damage",
                    text: ""
                },
                {
                    ability_special: "self_only_heal_percentage",
                    text: "%自身治疗："
                }
            ],
            name: "巫毒疗法",
            description: "巫医集中魔力治疗附近的友军单位，开启巫毒疗法后会持续消耗巫医的魔法。",
            lore: "扎瓦克的药酒不仅可以用来戏弄对手，用来治疗小伤也不错。",
            notes: [
                "治疗间隔为{heal_interval}秒。",
                "对减益免疫单位有效。",
                "巫毒咒法的伤害量等于治疗量。"
            ]
        },
        {
            ability_classname: "imba_witch_doctor_maledict",
            ability_specials: [
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "bonus_damage",
                    text: "%爆发伤害："
                },
                {
                    ability_special: "bonus_damage_threshold",
                    text: ""
                },
                {
                    ability_special: "ticks",
                    text: ""
                }
            ],
            name: "巫蛊咒术",
            description: "对一个较小区域内所有敌方英雄施放诅咒，他们将每秒受到固定伤害，并且从诅咒开始每4秒根据失去的血量再受到爆发伤害。",
            lore: "用对了巫毒法术会让敌人后悔招惹巫医。",
            notes: [
                "受到作用的英雄如果在结算时当前血量高于原血量，则额外伤害为0。"
            ]
        },
        {
            ability_classname: "imba_witch_doctor_death_ward",
            ability_specials: [
                {
                    ability_special: "damage",
                    text: "攻击力："
                },
                {
                    ability_special: "attack_range_tooltip",
                    text: "攻击距离："
                },
                {
                    ability_special: "bonus_attack_range",
                    text: ""
                },
                {
                    ability_special: "bounce_radius",
                    text: "弹射范围："
                },
                {
                    ability_special: "scepter_lifesteal",
                    text: ""
                },
                {
                    ability_special: "bonus_accuracy",
                    text: ""
                },
                {
                    ability_special: "initial_target_count",
                    text: ""
                }
            ],
            name: "死亡守卫",
            description: "持续施法 - 召唤一个死亡守卫，会优先攻击其攻击距离内的敌方英雄。最多持续{abilitychanneltime}秒。死亡守卫拥有{bonus_accuracy}%额外必中率。",
            lore: "巫医跳起他的传统巫毒舞蹈，在生者的梦中作祟。",
            scepter_description: "死亡守卫的攻击会向附近英雄弹射。",
            notes: [
                "死亡守卫是无敌的，只有在巫医被打断或持续时间结束后才会被摧毁。",
                "死亡守卫可以受到控制，选择攻击特定目标。",
                "死亡守卫每0.22秒攻击一次。"
            ]
        },
        {
            ability_classname: "imba_witch_doctor_voodoo_switcheroo",
            ability_specials: [
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "attack_speed_reduction",
                    text: "攻击速度降低："
                }
            ],
            name: "巫毒变身术",
            description: "巫医暂时变成死亡守卫，死亡守卫的攻击速度有所降低。这段时间内自己为隐藏状态。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_witch_doctor_innate_maledict_heal_reduction",
            ability_specials: [
                {
                    ability_special: "health_restoration_reduction",
                    text: ""
                }
            ],
            name: "",
            description: "",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_witch_doctor_gris_gris",
            ability_specials: [
                {
                    ability_special: "death_gold_lost_reduction_pct_tooltip",
                    text: ""
                },
                {
                    ability_special: "gold_tick_interval_tooltip",
                    text: ""
                }
            ],
            name: "驱邪护符",
            description: "巫医获得了驱邪护符，这件物品无法丢弃或放在背包里。拥有者阵亡时，死亡损失金钱的{death_gold_lost_reduction_pct_tooltip}{会加入到该物品中，物品被消耗后将退回这些金钱。驱邪护符的价值每}gold_tick_interval_tooltip%秒会增加1金。<br><br>右键点击可以消耗这件物品，并将其永久移除。",
            lore: "",
            notes: []
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_witch_doctor_1",
                    name: ""
                },
                {
                    talent_classname: "special_bonus_unique_imba_witch_doctor_2",
                    name: ""
                },
                {
                    talent_classname: "special_bonus_unique_imba_witch_doctor_3",
                    name: ""
                },
                {
                    talent_classname: "special_bonus_unique_imba_witch_doctor_4",
                    name: ""
                },
                {
                    talent_classname: "special_bonus_unique_imba_witch_doctor_5",
                    name: ""
                },
                {
                    talent_classname: "special_bonus_unique_imba_witch_doctor_6",
                    name: ""
                },
                {
                    talent_classname: "special_bonus_unique_imba_witch_doctor_7",
                    name: ""
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "witch_doctor_facets_imba_1",
            name: "",
            description: ""
        }
    ]
};