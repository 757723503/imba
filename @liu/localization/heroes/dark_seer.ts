import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_dark_seer_normal_punch",
            ability_specials: [
                {
                    ability_special: "max_stun",
                    text: "最大眩晕时间："
                },
                {
                    ability_special: "recent_duration",
                    text: ""
                },
                {
                    ability_special: "max_distance",
                    text: ""
                },
                {
                    ability_special: "knockback_distance",
                    text: "最远击退距离："
                },
                {
                    ability_special: "illusion_duration",
                    text: "幻象持续时间："
                },
                {
                    ability_special: "max_damage",
                    text: "最高伤害："
                },
                {
                    ability_special: "normal_punch_illusion_delay",
                    text: ""
                }
            ],
            name: "普通一拳",
            description: "被动技能。使黑暗贤者下次对英雄的攻击具有克敌机先效果，可以打出目标的复制体，并且根据过去{recent_duration}秒内黑暗贤者的移动距离造成伤害和眩晕。移动{max_distance}距离以上将造成最大威力。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_dark_seer_vacuum",
            ability_specials: [
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "duration",
                    text: ""
                },
                {
                    ability_special: "damage",
                    text: "伤害："
                },
                {
                    ability_special: "radius_tree",
                    text: ""
                }
            ],
            name: "真空",
            description: "黑暗贤者在目标区域制造一个真空环境，将周围的敌方单位吸入，具有打断效果并造成伤害。",
            lore: "依什卡菲尔能随心所欲的改变某一地区的引力。",
            notes: [
                "此技能可以打断持续施法。",
                "牵引过程为{duration}秒，伤害在牵引后产生。",
                "真空中央附近的树木将会被摧毁。"
            ]
        },
        {
            ability_classname: "imba_dark_seer_ion_shell",
            ability_specials: [
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "damage_per_second",
                    text: "每秒伤害："
                },
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "tick_interval",
                    text: ""
                },
                {
                    ability_special: "AbilityCharges",
                    text: ""
                },
                {
                    ability_special: "bonus_health",
                    text: ""
                }
            ],
            name: "离子外壳",
            description: "将目标用一个尖刺之盾包裹起来，对周围的敌人造成伤害。",
            lore: "黑暗贤者打通“幻墙之末”，让其中的光棱力量渗透出来。",
            shard_description: "对敌人施放离子外壳时，他们将被减速{enemy_target_slow}{，作用范围提升}enemy_target_bonus_radius{并且离子外壳的冷却时间减少}enemy_target_cooldown_reduction{秒。敌人还会被其他离子外壳作用下的单位以}pull_strength%的速度牵引。",
            notes: [
                "每{tick_interval}秒造成一次若干伤害。",
                "离子外壳对其作用单位没有伤害。",
                "如果对已经套上离子外壳的单位再次施放，新的离子外壳会取代旧的。"
            ]
        },
        {
            ability_classname: "imba_dark_seer_surge",
            ability_specials: [
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "speed_boost",
                    text: ""
                },
                {
                    ability_special: "trail_radius",
                    text: ""
                },
                {
                    ability_special: "trail_duration",
                    text: ""
                },
                {
                    ability_special: "trail_move_slow",
                    text: ""
                },
                {
                    ability_special: "trail_damage",
                    text: ""
                },
                {
                    ability_special: "trail_damage_interval",
                    text: ""
                }
            ],
            name: "奔腾",
            description: "为一个友方目标注入能量，使其在短时间内移动速度爆发，并且获得相位移动状态。允许单位达到移动速度上限，并且无法被减速。",
            lore: "依什卡菲尔曾经用他迅捷的神智走出幻墙之间的迷宫。",
            notes: [
                "奔腾的单位不受减速影响，除非奔腾效果消失。"
            ]
        },
        {
            ability_classname: "imba_dark_seer_wall_of_replica",
            ability_specials: [
                {
                    ability_special: "duration",
                    text: "光墙持续时间："
                },
                {
                    ability_special: "replica_damage_outgoing",
                    text: ""
                },
                {
                    ability_special: "tooltip_outgoing",
                    text: "%幻象继承攻击力："
                },
                {
                    ability_special: "replica_damage_incoming",
                    text: ""
                },
                {
                    ability_special: "tooltip_replica_total_damage_incoming",
                    text: "%幻象承受伤害："
                },
                {
                    ability_special: "width",
                    text: ""
                },
                {
                    ability_special: "replica_scale",
                    text: ""
                },
                {
                    ability_special: "movement_slow",
                    text: "%移动速度减缓："
                },
                {
                    ability_special: "slow_duration",
                    text: "减速持续时间："
                },
                {
                    ability_special: "scepter_length_multiplier",
                    text: ""
                },
                {
                    ability_special: "wall_damage",
                    text: "伤害："
                }
            ],
            name: "复制之墙",
            description: "制造一堵扭曲的光墙，对穿过的敌方英雄造成伤害和减速，并复制一个其自身的幻象，幻象由黑暗贤者控制，持续到光墙消失，或者被敌人消灭。",
            lore: "尽管黑暗贤者无法重返原来的国度，但他仍然能运用强大的心智力量召唤出幻墙的一部分，在敌阵中散播混乱。",
            notes: [
                "幻象不会产生幻象。",
                "每堵光墙同一时间产生的为一名英雄产生的幻象只有一个。",
                "复制之墙不会对减益免疫单位造成减速。"
            ]
        },
        {
            ability_classname: "imba_dark_seer_quick_wit",
            ability_specials: [
                {
                    ability_special: "int_to_atkspd",
                    text: ""
                }
            ],
            name: "才思敏捷",
            description: "黑暗贤者还能从智力中获得攻击速度。",
            lore: "",
            notes: [
                "黑暗贤者从每点智力获得{int_to_atkspd}攻击速度。"
            ]
        },
        {
            ability_classname: "imba_dark_seer_heart_of_battle",
            ability_specials: [
                {
                    ability_special: "radius",
                    text: ""
                },
                {
                    ability_special: "movement_speed_pct",
                    text: ""
                }
            ],
            name: "战斗之心",
            description: "黑暗贤者靠近其他英雄时移动速度更快。",
            lore: "",
            notes: [
                "黑暗贤者获得{radius}范围内所有英雄的{movement_speed_pct}%移动速度。基础移动速度减少。"
            ]
        },
        {
            ability_classname: "imba_dark_seer_mental_fortitude",
            ability_specials: [
                {
                    ability_special: "str_agi_average_tooltip",
                    text: ""
                }
            ],
            name: "神智刚毅",
            description: "黑暗贤者的智力不会低于他的力量和敏捷的平均值。",
            lore: "",
            notes: [
                "如果他的力量和敏捷的平均值更高，那么他会获得额外智力与之匹配。"
            ]
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_dark_seer",
                    name: ""
                },
                {
                    talent_classname: "special_bonus_unique_imba_dark_seer_2",
                    name: ""
                },
                {
                    talent_classname: "special_bonus_unique_imba_dark_seer_3",
                    name: ""
                },
                {
                    talent_classname: "special_bonus_unique_imba_dark_seer_5",
                    name: ""
                },
                {
                    talent_classname: "special_bonus_unique_imba_dark_seer_6",
                    name: ""
                },
                {
                    talent_classname: "special_bonus_unique_imba_dark_seer_7",
                    name: ""
                },
                {
                    talent_classname: "special_bonus_unique_imba_dark_seer_13",
                    name: ""
                },
                {
                    talent_classname: "special_bonus_unique_imba_dark_seer_14",
                    name: ""
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "dark_seer_facets_imba_1",
            name: "",
            description: ""
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_dark_seer_vacuum",
            name: "真空",
            description: "正在被吸入真空"
        },
        {
            modifier_classname: "modifier_imba_dark_seer_ion_shell",
            name: "离子外壳",
            description: "正在对附近敌人造成伤害"
        },
        {
            modifier_classname: "modifier_imba_dark_seer_surge",
            name: "奔腾",
            description: "移动速度提升至{MODIFIER_PROPERTY_MOVESPEED_ABSOLUTE_MIN}。"
        },
        {
            modifier_classname: "modifier_imba_dark_seer_wall_of_replica",
            name: "复制之墙",
            description: "复制之墙幻象。"
        },
        {
            modifier_classname: "modifier_imba_dark_seer_wall_slow",
            name: "复制之墙减速"
        },
        {
            modifier_classname: "modifier_imba_dark_seer_surge_trail",
            name: "奔腾尾迹",
            description: "移动速度被减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%，并受到持续伤害。"
        },
        {
            modifier_classname: "modifier_imba_dark_seer_mental_fortitude",
            name: "神智刚毅",
            description: "获得{MODIFIER_PROPERTY_STATS_INTELLECT_BONUS}点智力。"
        },
        {
            modifier_classname: "modifier_imba_dark_seer_heart_of_battle",
            name: "战斗之心",
            description: "获得{MODIFIER_PROPERTY_MOVESPEED_BONUS_CONSTANT}移动速度。"
        },
        {
            modifier_classname: "modifier_imba_dark_seer_quick_wit",
            name: "才思敏捷",
            description: "获得{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}攻击速度。"
        }
    ]
};