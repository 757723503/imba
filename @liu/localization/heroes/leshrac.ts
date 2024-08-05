import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_leshrac_split_earth",
            ability_specials: [
                {
                    ability_special: "delay",
                    text: "眩晕延迟："
                },
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "duration",
                    text: "眩晕时间："
                },
                {
                    ability_special: "shard_radius_increase",
                    text: ""
                },
                {
                    ability_special: "shard_max_count",
                    text: ""
                },
                {
                    ability_special: "shard_secondary_delay",
                    text: ""
                }
            ],
            name: "撕裂大地",
            description: "撕裂敌人脚下的大地。造成伤害和短暂的眩晕。",
            lore: "拉席克用他恶毒的意志扭曲大自然，撕裂大地摧毁那些挡他路的倒霉鬼。",
            shard_description: "撕裂大地在相同地点再重复{shard_max_count}次，重复间隔为{shard_secondary_delay}秒。每次作用范围增加{shard_radius_increase}。撕裂大地的重复地点对双方队伍可见。",
            notes: [
                "撕裂大地将摧毁作用范围内的树木。",
                "技能经过{delay}秒延迟后生效。"
            ]
        },
        {
            ability_classname: "imba_leshrac_diabolic_edict",
            ability_specials: [
                {
                    ability_special: "num_explosions",
                    text: "爆炸次数："
                },
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "tower_bonus",
                    text: ""
                },
                {
                    ability_special: "affects_buildings",
                    text: ""
                },
                {
                    ability_special: "damage",
                    text: "每次爆炸造成伤害："
                },
                {
                    ability_special: "targets",
                    text: "每次爆炸作用目标数："
                },
                {
                    ability_special: "AbilityDuration",
                    text: "持续时间："
                }
            ],
            name: "恶魔敕令",
            description: "使拉席克周围的区域充满魔法性爆炸，对敌方单位和建筑造成纯粹伤害。范围内的敌人越少，他们受到的伤害就越高。",
            lore: "古老的能量从一个位面向另一个位面爆发，将触碰到的一切化为灰烬。",
            notes: [
                "即使拉席克死亡，爆炸还是会在原地继续。"
            ]
        },
        {
            ability_classname: "imba_leshrac_lightning_storm",
            ability_specials: [
                {
                    ability_special: "damage",
                    text: "伤害："
                },
                {
                    ability_special: "jump_count",
                    text: "闪电跳跃次数："
                },
                {
                    ability_special: "radius",
                    text: "闪电跳跃范围："
                },
                {
                    ability_special: "jump_delay",
                    text: ""
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
                    ability_special: "slow_duration",
                    text: "减速持续时间："
                },
                {
                    ability_special: "bounce_twice",
                    text: ""
                },
                {
                    ability_special: "pulse_nova_lightning_interval",
                    text: ""
                }
            ],
            name: "闪电风暴",
            description: "召唤一片闪电风暴攻击目标敌方单位，并跳跃到附近的敌方单位。被攻击的敌人将会被降低移动速度和攻击速度。",
            lore: "受折磨的灵魂用来击倒敌人的闪电风暴展现出他对操控元素的精通。",
            notes: []
        },
        {
            ability_classname: "imba_leshrac_greater_lightning_storm",
            ability_specials: [
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "magic_amp",
                    text: "%魔法伤害加深："
                },
                {
                    ability_special: "slow",
                    text: "%移动速度减缓："
                },
                {
                    ability_special: "radius",
                    text: "作用范围："
                }
            ],
            name: "虚无主义",
            description: "使拉席克和范围内所有敌人变为虚无状态，他们无法攻击，并且承受的魔法伤害增加，移动速度被减缓。拉席克的移动速度得到提升，而不是减缓。拉席克受到的魔法伤害不会增加。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_leshrac_pulse_nova",
            ability_specials: [
                {
                    ability_special: "mana_cost_per_second",
                    text: "每秒魔法消耗："
                },
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "damage",
                    text: "伤害："
                },
                {
                    ability_special: "damage_resistance",
                    text: ""
                },
                {
                    ability_special: "bonus_movespeed",
                    text: ""
                }
            ],
            name: "脉冲新星",
            description: "拉席克在他周围创造破坏性的能量波，每秒对附近敌方单位造成伤害。每次脉冲都会消耗拉席克的魔法。",
            lore: "必要时，受折磨的灵魂能操纵时空本身，毁灭弱小的存在。",
            notes: []
        },
        {
            ability_classname: "imba_leshrac_chronoptic_nourishment",
            ability_specials: [
                {
                    ability_special: "mana_pct_per_hit",
                    text: ""
                },
                {
                    ability_special: "creep_penalty_reduction_pct",
                    text: ""
                }
            ],
            name: "时光滋养",
            description: "拉席克攻击敌人后会回复{mana_pct_per_hit}{造成伤害的魔法。只有在攻击拥有魔法的敌人时才会获得魔法。攻击非英雄单位时回复的魔法减少{creep_penalty_reduction_pct}}。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_leshrac_defilement",
            ability_specials: [
                {
                    ability_special: "aoe_per_int",
                    text: "每点智力作用范围加成："
                }
            ],
            name: "大肆污染",
            description: "",
            lore: "",
            notes: []
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_leshrac_1",
                    name: "+{s:bonus_num_explosions} 恶魔敕令爆炸次数"
                },
                {
                    talent_classname: "special_bonus_unique_imba_leshrac_3",
                    name: "+{s:bonus_damage} 脉冲新星伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_leshrac_4",
                    name: "+{s:bonus_damage_resistance}% 脉冲新星期间承伤降低"
                },
                {
                    talent_classname: "special_bonus_unique_imba_leshrac_6",
                    name: "+{s:bonus_damage} 闪电风暴伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_leshrac_7",
                    name: "脉冲新星期间+{s:bonus_bonus_movespeed}% 移速"
                },
                {
                    talent_classname: "special_bonus_unique_imba_leshrac_pulse_nova_lightning",
                    name: "脉冲新星触发闪电风暴",
                    description: "每{s:bonus_pulse_nova_lightning_interval}秒召唤单体的闪电风暴打击脉冲新星范围内一个随机敌人。以英雄优先。"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "leshrac_facets_imba_1",
            name: "",
            description: ""
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_leshrac_lightning_storm_slow",
            name: "闪电风暴减速",
            description: "移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。攻击速度降低{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}。"
        },
        {
            modifier_classname: "modifier_imba_leshrac_pulse_nova",
            name: "脉冲新星",
            description: "对周围的敌方单位造成伤害"
        },
        {
            modifier_classname: "modifier_imba_leshrac_diabolic_edict",
            name: "恶魔敕令",
            description: "对周围的敌方单位造成伤害"
        },
        {
            modifier_classname: "modifier_imba_leshrac_decrepify_aura",
            name: "虚无主义",
            description: "移动速度提升{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。"
        },
        {
            modifier_classname: "modifier_imba_leshrac_decrepify",
            name: "虚无主义",
            description: "减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%移动速度并且受到的魔法伤害增加{MODIFIER_PROPERTY_MAGICAL_RESISTANCE_DECREPIFY_UNIQUE}%。"
        }
    ]
};