import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_phoenix_icarus_dive",
            ability_specials: [
                {
                    ability_special: "hp_cost_perc",
                    text: "%生命值消耗："
                },
                {
                    ability_special: "dash_length",
                    text: "冲击长度："
                },
                {
                    ability_special: "dash_width",
                    text: ""
                },
                {
                    ability_special: "hit_radius",
                    text: ""
                },
                {
                    ability_special: "burn_duration",
                    text: "烧灼持续时间："
                },
                {
                    ability_special: "damage_per_second",
                    text: "每秒烧灼伤害："
                },
                {
                    ability_special: "burn_tick_interval",
                    text: ""
                },
                {
                    ability_special: "slow_movement_speed_pct",
                    text: "%移动速度减缓："
                },
                {
                    ability_special: "dive_duration",
                    text: ""
                }
            ],
            name: "凤凰冲击",
            description: "凤凰向目标方向进行圆弧状飞行，飞行距离固定，对沿途的敌人造成持续伤害并减缓其移动速度，然后返回初始位置。飞行过程中如果施放超新星将停止飞行。",
            lore: "尽管没少在宇宙虚空之间遨游，但在大气里振翅高飞还是有不同的快感。",
            notes: [
                "凤凰冲击的飞行时间为{dive_duration}秒，可以在飞行途中再次施放来终止飞行。"
            ]
        },
        {
            ability_classname: "imba_phoenix_icarus_dive_stop",
            ability_specials: [],
            name: "终止凤凰冲击",
            description: "马上停止冲击。",
            lore: "停！",
            notes: []
        },
        {
            ability_classname: "imba_phoenix_fire_spirits",
            ability_specials: [
                {
                    ability_special: "hp_cost_perc",
                    text: "%生命值消耗："
                },
                {
                    ability_special: "spirit_duration",
                    text: "烈火精灵持续时间："
                },
                {
                    ability_special: "spirit_speed",
                    text: ""
                },
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "duration",
                    text: "烧灼持续时间："
                },
                {
                    ability_special: "attackspeed_slow",
                    text: "攻击速度减少："
                },
                {
                    ability_special: "damage_per_second",
                    text: "每秒烧灼伤害："
                },
                {
                    ability_special: "spirit_count",
                    text: ""
                },
                {
                    ability_special: "tick_interval",
                    text: ""
                }
            ],
            name: "烈火精灵",
            description: "召唤4只围绕凤凰飞行的烈火精灵。每一只烈火精灵都能被单独发射到指定区域。对敌人持续造成伤害并大幅降低他们的攻击速度。",
            lore: "凤凰那不断坍塌重生的内核经常释放出具有意识的霎那光流。",
            shard_description: "烈火精灵变成被动充能技能。具有7秒充能时间。",
            notes: [
                "烈火精灵现在到达目标区域后将获得1秒的视野。"
            ]
        },
        {
            ability_classname: "imba_phoenix_sun_ray",
            ability_specials: [
                {
                    ability_special: "hp_cost_perc_per_second",
                    text: "%每秒生命值消耗："
                },
                {
                    ability_special: "base_damage",
                    text: "每秒基础伤害："
                },
                {
                    ability_special: "hp_perc_damage",
                    text: "%每秒最大生命值伤害："
                },
                {
                    ability_special: "base_heal",
                    text: "每秒基础治疗："
                },
                {
                    ability_special: "hp_perc_heal",
                    text: "%每秒最大生命值治疗："
                },
                {
                    ability_special: "radius",
                    text: ""
                },
                {
                    ability_special: "tick_interval",
                    text: ""
                },
                {
                    ability_special: "forward_move_speed",
                    text: ""
                },
                {
                    ability_special: "turn_rate_initial",
                    text: ""
                },
                {
                    ability_special: "turn_rate",
                    text: ""
                },
                {
                    ability_special: "shard_move_slow_pct",
                    text: ""
                },
                {
                    ability_special: "focal_point_max_multiplier",
                    text: ""
                },
                {
                    ability_special: "focal_point_start_length_pct",
                    text: ""
                },
                {
                    ability_special: "focal_point_full_length_tooltip_only",
                    text: ""
                }
            ],
            name: "烈日炙烤",
            description: "凤凰以损失生命能量为代价，向前射出一束炽热的光线炙烤敌人。光线对敌人造成伤害，并且能治疗友军，伤害和治疗的数值均为基础数值加上目标生命值的一定百分比。随着光线不断炙烤，百分比也会不断增加。",
            lore: "星体能量的这般释放对凤凰来说仅仅是打开了原子大小的豁口。",
            shard_description: "超新星期间可以施放烈日炙烤，并且减缓作用下敌人{shard_move_slow_pct}%移动速度。",
            notes: [
                "烈日炙烤的宽度为{radius}，长度为{abilitycastrange}。",
                "凤凰受到眩晕、沉默、飓风、妖术或睡眠等效果时烈日炙烤将会中断。",
                "凤凰可以使用物品和其他技能，不会打断烈日炙烤。"
            ]
        },
        {
            ability_classname: "imba_phoenix_sun_ray_stop",
            ability_specials: [],
            name: "终止烈日炙烤",
            description: "马上停止烈日炙烤。",
            lore: "吱吱！",
            notes: []
        },
        {
            ability_classname: "imba_phoenix_sun_ray_toggle_move",
            ability_specials: [],
            name: "切换移动状态",
            description: "在烈日炙烤时切换为缓慢前行状态。",
            lore: "啾！",
            notes: [
                "烈日炙烤允许凤凰穿越地形和树木。"
            ]
        },
        {
            ability_classname: "imba_phoenix_supernova",
            ability_specials: [
                {
                    ability_special: "aura_radius",
                    text: "作用范围："
                },
                {
                    ability_special: "damage_per_sec",
                    text: "每秒造成伤害："
                },
                {
                    ability_special: "tick_interval",
                    text: ""
                },
                {
                    ability_special: "stun_duration",
                    text: "眩晕持续时间："
                },
                {
                    ability_special: "max_hero_attacks",
                    text: "击碎所需攻击次数："
                },
                {
                    ability_special: "max_hero_attacks_scepter",
                    text: "摧毁所需攻击次数："
                },
                {
                    ability_special: "cast_range_tooltip_scepter",
                    text: "施法距离："
                }
            ],
            name: "超新星",
            description: "凤凰十分乐意终结自己现在的生命来换取重生。将自己变为一颗燃烧的恒星，灼烧附近一大片区域内的敌人。恒星受到敌方英雄一定次数的攻击后将会被摧毁。经过{abilityduration}秒后恒星将会爆炸，眩晕周围所有敌人。而凤凰的生命和魔法值都会回到满状态，并且所有技能的冷却时间都会刷新。\\n\\n驱散类型：强驱散",
            lore: "超新星的烈日试炼致命非常，而从烈焰中，永生的凤吟将再一次升起。",
            scepter_description: "摧毁超新星所需的攻击次数增加，凤凰可以对友方英雄施放超新星，使双方共同变为恒星进行重生。",
            notes: []
        },
        {
            ability_classname: "imba_phoenix_launch_fire_spirit",
            ability_specials: [
                {
                    ability_special: "hp_cost_perc",
                    text: "%生命值消耗："
                },
                {
                    ability_special: "spirit_duration",
                    text: "烈火精灵持续时间："
                },
                {
                    ability_special: "spirit_speed",
                    text: ""
                },
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "duration",
                    text: "烧灼持续时间："
                },
                {
                    ability_special: "attackspeed_slow",
                    text: "攻击速度减少："
                },
                {
                    ability_special: "damage_per_second",
                    text: "每秒烧灼伤害："
                },
                {
                    ability_special: "spirit_count",
                    text: ""
                },
                {
                    ability_special: "tick_interval",
                    text: ""
                }
            ],
            name: "发动烈火精灵",
            description: "每一只烈火精灵都能被单独发射到指定区域。对敌人持续造成伤害并大幅降低他们的攻击速度。",
            lore: "轰！嘣！",
            notes: [
                "烈火精灵现在到达目标区域后将获得1秒的视野。"
            ]
        },
        {
            ability_classname: "imba_phoenix_dying_light",
            ability_specials: [
                {
                    ability_special: "radius",
                    text: ""
                },
                {
                    ability_special: "damage_pct",
                    text: ""
                }
            ],
            name: "消逝之光",
            description: "凤凰每秒对{radius}范围内所有敌人造成{damage_pct}%自身缺失生命值的魔法伤害。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_phoenix_blinding_sun",
            ability_specials: [
                {
                    ability_special: "blind_per_second",
                    text: ""
                },
                {
                    ability_special: "blind_duration",
                    text: ""
                }
            ],
            name: "阳光猛烈",
            description: "凤凰技能的负面效果会施加一个可叠加的每秒{blind_per_second}{攻击落空几率。持续}blind_duration%秒。",
            lore: "",
            notes: []
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_phoenix_1",
                    name: "+{s:bonus_max_hero_attacks} 超新星可被攻击次数"
                },
                {
                    talent_classname: "special_bonus_unique_imba_phoenix_2",
                    name: "+{s:bonus_stun_duration}秒 超新星眩晕"
                },
                {
                    talent_classname: "special_bonus_unique_imba_phoenix_3",
                    name: "+{s:bonus_damage_per_second} 烈火精灵每秒伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_phoenix_4",
                    name: "+{s:bonus_dash_length} 凤凰冲击施法距离"
                },
                {
                    talent_classname: "special_bonus_unique_imba_phoenix_5",
                    name: "+{s:bonus_hp_perc_damage}% 烈日炙烤最大生命值伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_phoenix_6",
                    name: "+{s:bonus_slow_movement_speed_pct}% 凤凰冲击减速"
                },
                {
                    talent_classname: "special_bonus_unique_imba_phoenix_dive_damage",
                    name: "+{s:bonus_damage_per_second} 凤凰冲击每秒伤害"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "phoenix_facets_imba_1",
            name: "",
            description: ""
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_phoenix_icarus_dive_burn",
            name: "凤凰冲击烧灼",
            description: "每秒受到{MODIFIER_PROPERTY_TOOLTIP}点伤害并且移动速度被减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。"
        },
        {
            modifier_classname: "modifier_imba_phoenix_fire_spirit_burn",
            name: "烈火精灵灼烧",
            description: "每秒受到{MODIFIER_PROPERTY_TOOLTIP}点伤害并且攻击速度被减缓{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}"
        },
        {
            modifier_classname: "modifier_imba_phoenix_fire_spirit_count",
            name: "烈火精灵",
            description: "烈火精灵已经可以发动。"
        },
        {
            modifier_classname: "modifier_imba_phoenix_sun_ray",
            name: "烈日炙烤",
            description: "发出光线开始烈日炙烤。"
        },
        {
            modifier_classname: "modifier_imba_phoenix_sun_ray_slow",
            name: "烈日炙烤",
            description: "移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。"
        },
        {
            modifier_classname: "modifier_imba_phoenix_sun_ray_blind",
            name: "烈日炙烤",
            description: "攻击落空的几率增加了{MODIFIER_PROPERTY_MISS_PERCENTAGE}%。"
        },
        {
            modifier_classname: "modifier_imba_phoenix_supernova_hiding",
            name: "恒星形态",
            description: "重生前炙烤敌人。"
        },
        {
            modifier_classname: "modifier_imba_phoenix_sun",
            name: "恒星形态",
            description: "重生前炙烤敌人。"
        },
        {
            modifier_classname: "modifier_imba_phoenix_sun_debuff",
            name: "恒星灼烧",
            description: "每秒受到{MODIFIER_PROPERTY_TOOLTIP}点伤害。"
        },
        {
            modifier_classname: "modifier_imba_phoenix_dying_light_debuff",
            name: "烧灼",
            description: "英雄因距离凤凰太近而受到伤害。"
        }
    ]
};