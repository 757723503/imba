import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_crystal_maiden_let_it_go",
            ability_specials: [
                {
                    ability_special: "speed",
                    text: "%移动速度提升："
                },
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "slow",
                    text: "%移动速度减缓："
                }
            ],
            name: "随它吧",
            description: "朝目标方向创造一道冰封之径，使自己能移动地更快，并且自由穿行。穿过这条路径的敌人将会移动地更慢。",
            notes: []
        },
        {
            ability_classname: "imba_crystal_maiden_crystal_nova",
            ability_specials: [
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "movespeed_slow",
                    text: "%移动速度减缓："
                },
                {
                    ability_special: "attackspeed_slow",
                    text: "攻击速度降低："
                },
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "nova_damage",
                    text: "伤害："
                }
            ],
            name: "冰霜新星",
            description: "召唤具有破坏性的冰爆，降低目标区域内的敌人的移动速度。",
            lore: "莉莱周围的温度急剧下降，让附近的一切被急速冻结。",
            notes: [
                "冰霜新星在持续时间内提供目标区域的视野。"
            ]
        },
        {
            ability_classname: "imba_crystal_maiden_frostbite",
            ability_specials: [
                {
                    ability_special: "damage_per_second",
                    text: "每秒伤害："
                },
                {
                    ability_special: "duration",
                    text: "持续时间："
                }
            ],
            name: "冰封禁制",
            description: "操控冰霜包围一个敌方单位，禁止移动和攻击，并持续造成伤害。对非远古的普通单位施放将造成{creep_multiplier}倍伤害。",
            lore: "莉莱引来蓝心冰川的寒风，将动手的敌人封锁在冰块里。",
            notes: [
                "冰封禁制为缠绕效果。"
            ]
        },
        {
            ability_classname: "imba_crystal_maiden_brilliance_aura",
            ability_specials: [
                {
                    ability_special: "base_mana_regen",
                    text: "魔法恢复："
                },
                {
                    ability_special: "proximity_mana_regen_tooltip",
                    text: "近距离魔法恢复："
                },
                {
                    ability_special: "proximity_bonus_radius",
                    text: "作用范围："
                },
                {
                    ability_special: "mana_battery_mana_pct",
                    text: "%获得已消耗魔法："
                }
            ],
            name: "奥术光环",
            description: "地图上所有友方单位获得额外魔法恢复。水晶室女附近{proximity_bonus_radius}范围内友军获得{proximity_bonus_factor}倍魔法恢复。",
            lore: "低温提升了魔法精华，莉莱的出现能够让盟友更频繁的使用魔法而不必担心消耗。",
            notes: []
        },
        {
            ability_classname: "imba_crystal_maiden_freezing_field",
            ability_specials: [
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "explosion_radius",
                    text: "冰爆范围："
                },
                {
                    ability_special: "movespeed_slow",
                    text: "%移动速度减缓："
                },
                {
                    ability_special: "attack_slow",
                    text: "攻击速度降低："
                },
                {
                    ability_special: "damage",
                    text: "伤害："
                },
                {
                    ability_special: "self_cast_range_bonus",
                    text: "施法距离加成："
                },
                {
                    ability_special: "aoe_bonus",
                    text: "%作用范围加成："
                }
            ],
            name: "极寒领域",
            description: "持续施法 - 以水晶室女为中心召唤100次随机冰爆轰炸敌人，将其减速并造成大量伤害。持续{abilitychanneltime}秒。",
            lore: "冰川残骸，莉莱曾经的流放之地，早已变成她修炼寒冰魔法的场所。",
            shard_description: "使自身在极寒领域期间可以移动、施法和攻击。仍然可以被敌人打断。在此期间移动速度降低{shard_self_movement_speed_slow_pct}%。<br><br>冰爆总数提升{shard_self_movement_speed_slow_pct}%。",
            scepter_description: "使自身在极寒领域期间可以移动、施法和攻击。仍然可以被敌人打断。在此期间移动速度降低{shard_self_movement_speed_slow_pct}%。冰爆总数提升{shard_self_movement_speed_slow_pct}%。对极寒领域内停留超过{frostbite_delay}秒的所有单位都会施加冰封禁制。",
            notes: [
                "减速效果对作用范围内所有敌人有效，即使他们没有受到冰爆的伤害（效果持续{slow_duration}秒）。",
                "每{explosion_interval}秒产生一次爆炸。",
                "破坏会使冰雪无垠的被动效果失效。"
            ]
        },
        {
            ability_classname: "imba_crystal_maiden_freezing_field_stop",
            ability_specials: [],
            name: "停止极寒领域",
            description: "立刻停止极寒领域",
            notes: []
        },
        {
            ability_classname: "imba_crystal_maiden_crystal_clone",
            ability_specials: [
                {
                    ability_special: "hop_distance",
                    text: "距离："
                },
                {
                    ability_special: "clone_duration",
                    text: "克隆持续时间："
                },
                {
                    ability_special: "clone_health",
                    text: "克隆生命值："
                }
            ],
            name: "冰晶克隆",
            description: "向一个方向滑行，在原地制造一个自身的冰晶克隆，并且躲避多种飞行过程中的攻击和技能弹道。如果克隆受到了足量伤害，或者超过一定时间都会碎裂，对附近{frostbite_radius}范围内敌人施加冰封禁制。克隆体也可以被水晶室女自身的技能摧毁。",
            notes: []
        },
        {
            ability_classname: "imba_crystal_maiden_blueheart_floe",
            ability_specials: [],
            name: "蓝心浮冰",
            description: "水晶室女拥有{mana_regen_multiplier}%魔法恢复增强。",
            notes: []
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_crystal_maiden_1",
                    name: "+{s:bonus_duration}秒 冰封禁制持续时间"
                },
                {
                    talent_classname: "special_bonus_unique_imba_crystal_maiden_2",
                    name: "+{s:bonus_nova_damage} 冰霜新星伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_crystal_maiden_3",
                    name: "+{s:bonus_damage} 极寒领域伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_crystal_maiden_5",
                    name: "-{s:bonus_AbilityCooldown}秒 冰霜新星冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_crystal_maiden_6",
                    name: "+{s:bonus_radius} 冰霜新星范围"
                },
                {
                    talent_classname: "special_bonus_unique_imba_crystal_maiden_frostbite_castrange",
                    name: "+{s:bonus_AbilityCastRange} 冰封禁制施法距离"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "crystal_maiden_facets_imba_1",
            name: "冰雪无垠 | 雪中送冰",
            description: "极寒领域也被动提升了水晶室女的施法距离和作用范围。 水晶室女在施放技能时会回复友军的魔法。提升先天的魔法恢复增强。",
            related_abilities: [
                {
                    ability_classname: "imba_crystal_maiden_brilliance_aura",
                    description: "每次水晶室女施放技能时，附近的友军都会回复魔法，数值为该技能耗魔的一定百分比。"
                },
                {
                    ability_classname: "imba_crystal_maiden_freezing_field",
                    description: "极寒领域也被动提升了水晶室女的施法距离和作用范围。"
                },
                {
                    ability_classname: "imba_crystal_maiden_blueheart_floe",
                    description: "魔法恢复增强提升至{mana_regen_multiplier}%。"
                }
            ],
            related_talents: []
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_crystal_maiden_crystal_nova",
            name: "冰晶新星",
            description: "移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%"
        },
        {
            modifier_classname: "modifier_imba_crystal_maiden_frostbite",
            name: "冰封禁制",
            description: "不能移动或攻击。每{MODIFIER_PROPERTY_TOOLTIP}秒受到{MODIFIER_PROPERTY_TOOLTIP}点伤害。"
        },
        {
            modifier_classname: "modifier_imba_crystal_maiden_brilliance_aura_effect",
            name: "奥术光环",
            description: "提高{MODIFIER_PROPERTY_MANA_REGEN_CONSTANT}点/秒魔法恢复。"
        },
        {
            modifier_classname: "modifier_imba_crystal_maiden_freezing_field_slow",
            name: "极寒领域减速",
            description: "移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%，攻击速度降低{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}。"
        },
        {
            modifier_classname: "modifier_imba_crystal_maiden_freezing_field",
            name: "极寒领域"
        }
    ]
};