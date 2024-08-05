import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_jakiro_dual_breath",
            ability_specials: [
                {
                    ability_special: "start_radius",
                    text: "前端范围："
                },
                {
                    ability_special: "end_radius",
                    text: "末端范围："
                },
                {
                    ability_special: "AbilityCastRange",
                    text: ""
                },
                {
                    ability_special: "speed",
                    text: ""
                },
                {
                    ability_special: "fire_delay",
                    text: ""
                },
                {
                    ability_special: "burn_damage",
                    text: "燃烧伤害："
                },
                {
                    ability_special: "slow_movement_speed_pct",
                    text: "%移动速度减缓："
                },
                {
                    ability_special: "slow_attack_speed_pct",
                    text: "攻击速度降低："
                },
                {
                    ability_special: "speed_fire",
                    text: ""
                }
            ],
            name: "冰火交加",
            description: "杰奇洛对面前的敌人先后喷出寒冰和火焰。寒冰吐息减速敌人，火焰吐息对敌人造成持续伤害。",
            lore: "灼霜龙族的各个物种分支都拥有极端危险的气息；这些气息相结合后场面难以想象。",
            notes: [
                "最远能伤害1025距离外的单位。",
                "两次吐息有{fire_delay}秒的间隔。",
                "不会触发法术抵抗或法术反弹。"
            ]
        },
        {
            ability_classname: "imba_jakiro_ice_path",
            ability_specials: [
                {
                    ability_special: "path_delay",
                    text: "冻结延迟："
                },
                {
                    ability_special: "stun_duration",
                    text: "最大眩晕时间："
                },
                {
                    ability_special: "path_duration",
                    text: "路径持续时间："
                },
                {
                    ability_special: "path_radius",
                    text: "作用范围："
                },
                {
                    ability_special: "damage",
                    text: "伤害："
                },
                {
                    ability_special: "AbilityCooldown",
                    text: ""
                }
            ],
            name: "冰封路径",
            description: "在杰奇洛前方制造一条冰封路径，对触及到的敌人造成伤害并眩晕。",
            lore: "杰奇洛狡猾的右首使出它的冰封天赋，用骇人的酷寒冻结大地。",
            notes: [
                "路径完全成形需要{path_delay}秒。",
                "冰封路径消失后眩晕效果也会消失。"
            ]
        },
        {
            ability_classname: "imba_jakiro_liquid_fire",
            ability_specials: [
                {
                    ability_special: "slow_attack_speed_pct",
                    text: "攻击速度降低："
                },
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "damage",
                    text: "每秒燃烧伤害："
                },
                {
                    ability_special: "pct_health_damage",
                    text: ""
                },
                {
                    ability_special: "tick_rate",
                    text: ""
                },
                {
                    ability_special: "building_dmg_pct",
                    text: "%对建筑伤害："
                },
                {
                    ability_special: "double_head",
                    text: ""
                }
            ],
            name: "液态火",
            description: "杰奇洛的火焰燃烧效果范围内的敌人，并降低他们的攻击速度。",
            lore: "杰奇洛的左喉大开，使前方生灵涂炭。",
            notes: [
                "对单位和建筑都有效。"
            ]
        },
        {
            ability_classname: "imba_jakiro_liquid_ice",
            ability_specials: [
                {
                    ability_special: "movement_slow",
                    text: "%移动速度减缓："
                },
                {
                    ability_special: "damage",
                    text: "即时伤害："
                },
                {
                    ability_special: "bonus_instance_damage_from_other_abilities",
                    text: "额外伤害："
                },
                {
                    ability_special: "pct_health_damage",
                    text: ""
                },
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "tick_rate",
                    text: ""
                },
                {
                    ability_special: "double_head",
                    text: ""
                }
            ],
            name: "液态冰",
            description: "杰奇洛的攻击使他的敌人受寒，减缓其移动速度，持续{duration}秒，并且被杰奇洛的攻击和其他技能击中后承受额外伤害。这个效果对建筑无效。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_jakiro_macropyre",
            ability_specials: [
                {
                    ability_special: "damage",
                    text: "每秒伤害："
                },
                {
                    ability_special: "path_width",
                    text: "火焰宽度："
                },
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "AbilityCastRange",
                    text: ""
                },
                {
                    ability_special: "burn_interval",
                    text: ""
                },
                {
                    ability_special: "linger_duration",
                    text: ""
                },
                {
                    ability_special: "pure_damage_type",
                    text: ""
                },
                {
                    ability_special: "pierces_magic_immunity",
                    text: ""
                },
                {
                    ability_special: "ice_edge_path_radius",
                    text: ""
                },
                {
                    ability_special: "ice_edge_linger_duration",
                    text: ""
                },
                {
                    ability_special: "ice_edge_movement_slow",
                    text: ""
                }
            ],
            name: "烈焰焚身",
            description: "杰奇洛释放出烈焰风暴，烈焰风暴作用范围很宽，并持续数秒。烈焰风暴每秒都会对作用范围内的敌人造成伤害。",
            lore: "冰与火融合而来的极端温度将使战场百孔千疮。",
            scepter_description: "提升烈焰焚身的持续时间、宽度，并且变为纯粹伤害。杰奇洛会在烈焰焚身边缘放出两道冰墙，对试图穿过的所有敌人减速{ice_edge_movement_slow}%。",
            notes: [
                "被烈焰焚身击中后离开区域还将额外受到{linger_duration}秒伤害效果。"
            ]
        },
        {
            ability_classname: "imba_jakiro_double_trouble",
            ability_specials: [
                {
                    ability_special: "second_attack_delay",
                    text: ""
                },
                {
                    ability_special: "attack_damage_reduction",
                    text: ""
                }
            ],
            name: "天生一对",
            description: "杰奇洛攻击时两个头都会发动攻击，不过每个头造成的伤害减少{attack_damage_reduction}%。",
            lore: "",
            notes: []
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_jakiro",
                    name: "+{s:bonus_stun_duration}秒 冰封路径持续时间",
                    description: "同时提升眩晕和路径持续时间。"
                },
                {
                    talent_classname: "special_bonus_unique_imba_jakiro_2",
                    name: "+{s:bonus_AbilityCastRange}% 冰火交加伤害和距离"
                },
                {
                    talent_classname: "special_bonus_unique_imba_jakiro_3",
                    name: "获得液态冰"
                },
                {
                    talent_classname: "special_bonus_unique_imba_jakiro_4",
                    name: "+{s:bonus_slow_attack_speed_pct} 液态火降低攻击速度"
                },
                {
                    talent_classname: "special_bonus_unique_imba_jakiro_6",
                    name: "-{s:bonus_AbilityCooldown}秒 冰封路径冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_jakiro_7",
                    name: "+{s:bonus_damage} 烈焰焚身伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_jakiro_dualbreath_slow",
                    name: "-{s:bonus_slow_movement_speed_pct}%/{s:bonus_slow_attack_speed_pct} 冰火交加降低移速/攻速"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "jakiro_facets_imba_1",
            name: "",
            description: ""
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_jakiro_ice_path_stun",
            name: "冰封路径",
            description: "被杰奇洛的冰封路径冻住了"
        },
        {
            modifier_classname: "modifier_imba_jakiro_liquid_fire_burn",
            name: "液态火",
            description: "正受到杰奇洛的液态火伤害，并被减速"
        },
        {
            modifier_classname: "modifier_imba_jakiro_liquid_ice_debuff",
            name: "液态冰",
            description: "移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%，并且受到杰奇洛攻击和其他技能伤害时承受{MODIFIER_PROPERTY_TOOLTIP}额外伤害。"
        },
        {
            modifier_classname: "modifier_imba_jakiro_dual_breath_slow",
            name: "冰火交加",
            description: "正被杰奇洛的冰火交加减速。移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%，攻击速度降低{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}。"
        },
        {
            modifier_classname: "modifier_imba_jakiro_dual_breath_burn",
            name: "冰火交加",
            description: "正受到杰奇洛的冰火交加伤害"
        },
        {
            modifier_classname: "modifier_imba_jakiro_macropyre_burn",
            name: "烈焰焚身",
            description: "受到杰奇洛的烈焰焚身作用，每秒受到伤害。"
        },
        {
            modifier_classname: "modifier_imba_jakiro_macropyre_ice_edge_slow",
            name: "烈焰焚身",
            description: "移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。"
        }
    ]
};