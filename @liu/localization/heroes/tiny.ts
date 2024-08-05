import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_tiny_avalanche",
            ability_specials: [
                {
                    ability_special: "AbilityCastRange",
                    text: ""
                },
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "tick_interval",
                    text: ""
                },
                {
                    ability_special: "total_duration",
                    text: "山崩持续时间："
                },
                {
                    ability_special: "tick_count",
                    text: ""
                },
                {
                    ability_special: "stun_duration",
                    text: ""
                },
                {
                    ability_special: "projectile_speed",
                    text: ""
                },
                {
                    ability_special: "avalanche_damage",
                    text: "山崩伤害："
                },
                {
                    ability_special: "toss_damage_bonus_pct",
                    text: ""
                }
            ],
            name: "山崩",
            description: "用岩石轰炸一块区域，对敌方单位造成短间隔的伤害并眩晕。山崩对被投掷的单位造成{toss_damage_bonus_pct}%额外伤害。",
            lore: "当受到山岭巨人召唤时，毫无生气的石头也会很有杀伤力。",
            notes: []
        },
        {
            ability_classname: "imba_tiny_toss",
            ability_specials: [
                {
                    ability_special: "duration",
                    text: ""
                },
                {
                    ability_special: "grab_radius",
                    text: ""
                },
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "bonus_damage_pct",
                    text: ""
                },
                {
                    ability_special: "toss_damage",
                    text: "伤害："
                },
                {
                    ability_special: "AbilityCharges",
                    text: ""
                },
                {
                    ability_special: "land_movement_slow",
                    text: "%移动速度减缓："
                },
                {
                    ability_special: "land_attack_slow",
                    text: "攻击速度降低："
                },
                {
                    ability_special: "bonus_land_damage_pct",
                    text: "%额外落地伤害："
                },
                {
                    ability_special: "land_debuff_duration",
                    text: "减速持续时间："
                }
            ],
            name: "投掷",
            description: "抓起小小身旁{grab_radius}范围内最近的单位，不论敌友，扔向目标单位或神符，落地时将造成伤害。",
            lore: "小小那巨大的身形让他能够随意抛起最强壮的勇士。",
            notes: [
                "你可以投掷队友，但他们不会受到伤害。",
                "投掷对建筑物造成33%的伤害。",
                "可以对减益免疫单位施放，但是不能将他们扔起，或对他们造成伤害。"
            ]
        },
        {
            ability_classname: "imba_tiny_craggy_exterior",
            ability_specials: [
                {
                    ability_special: "debuff_duration",
                    text: "负面状态持续时间："
                },
                {
                    ability_special: "damage",
                    text: ""
                },
                {
                    ability_special: "max_stacks",
                    text: "最大叠加层数："
                },
                {
                    ability_special: "damage_reduction_per_stack",
                    text: "%每次叠加降低攻击力："
                }
            ],
            name: "崎岖外表",
            description: "攻击小小的敌人会获得一个可叠加的负面状态，会降低他们的攻击力。",
            lore: "",
            notes: [
                "破坏会使技能无法施加新的叠加效果。",
                "破坏不会使现有叠加效果提供的状态失效。"
            ]
        },
        {
            ability_classname: "imba_tiny_tree_grab",
            ability_specials: [
                {
                    ability_special: "attack_count",
                    text: "攻击次数："
                },
                {
                    ability_special: "bonus_damage",
                    text: "额外基础攻击力："
                },
                {
                    ability_special: "bonus_damage_buildings",
                    text: "%对建筑额外伤害："
                },
                {
                    ability_special: "attack_range",
                    text: "攻击距离："
                },
                {
                    ability_special: "splash_width",
                    text: ""
                },
                {
                    ability_special: "splash_range",
                    text: ""
                },
                {
                    ability_special: "splash_pct",
                    text: "%溅射伤害："
                },
                {
                    ability_special: "bat_increase",
                    text: ""
                },
                {
                    ability_special: "speed_reduction",
                    text: ""
                }
            ],
            name: "抓树",
            description: "抓起一棵树砸向敌人的头，可以使用一定次数。攻击距离得到提升。攻击造成更多伤害，并且路径上的单位受到溅射伤害。可以将树木扔出，对远距离的敌人造成攻击伤害。",
            lore: "",
            shard_description: "抓树没有使用次数限制。",
            notes: [
                "树木扔出后技能进入冷却。"
            ]
        },
        {
            ability_classname: "imba_tiny_toss_tree",
            ability_specials: [
                {
                    ability_special: "speed",
                    text: ""
                },
                {
                    ability_special: "range",
                    text: "施法距离："
                },
                {
                    ability_special: "bonus_damage",
                    text: ""
                },
                {
                    ability_special: "splash_radius",
                    text: "溅射范围："
                },
                {
                    ability_special: "movement_slow",
                    text: "%移动速度减缓："
                },
                {
                    ability_special: "slow_duration",
                    text: "减速持续时间："
                }
            ],
            name: "扔树",
            description: "将树木扔向目标单位，触发自身对其的攻击，并且对周围目标造成溅射伤害。",
            lore: "就算是敌人也能分享小小对树木的热情。",
            notes: []
        },
        {
            ability_classname: "imba_tiny_tree_channel",
            ability_specials: [
                {
                    ability_special: "speed",
                    text: ""
                },
                {
                    ability_special: "range",
                    text: ""
                },
                {
                    ability_special: "splash_radius",
                    text: "目标作用范围："
                },
                {
                    ability_special: "tree_grab_radius",
                    text: "树木抓取范围："
                },
                {
                    ability_special: "interval",
                    text: "连掷间隔："
                }
            ],
            name: "树木连掷",
            description: "持续施法 - 小小进行持续施法，随机将自身周围的树木扔向目标范围。每棵树对该区域内敌人造成的伤害为小小的攻击伤害。",
            lore: "从石头上扔的木棍能打断很多骨头。",
            notes: []
        },
        {
            ability_classname: "imba_tiny_grow",
            ability_specials: [
                {
                    ability_special: "bonus_armor",
                    text: "护甲加成："
                },
                {
                    ability_special: "bonus_damage",
                    text: "攻击力提升："
                },
                {
                    ability_special: "attack_speed_reduction",
                    text: "%攻击速度降低："
                },
                {
                    ability_special: "toss_bonus_damage",
                    text: "投掷额外伤害："
                },
                {
                    ability_special: "move_speed",
                    text: "移动速度加成："
                }
            ],
            name: "长大",
            description: "小小崎岖的身体不断成长，提升了攻击力、移动速度、护甲和投掷的威力，但攻击速度降低。",
            lore: "亲眼看着丘陵变成山峦是震撼的 - 特别是这座山将他的敌人毁灭的时候。",
            notes: []
        },
        {
            ability_classname: "imba_tiny_rocksteady",
            ability_specials: [
                {
                    ability_special: "max_attack_speed",
                    text: ""
                },
                {
                    ability_special: "attack_speed_to_damage",
                    text: ""
                }
            ],
            name: "稳如磐石",
            description: "小小的攻击速度无法超过或低于{max_attack_speed}，但他本应从物品或加成效果中获得的攻击速度的{attack_speed_to_damage}%将转化为攻击力。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_tiny_insurmountable",
            ability_specials: [
                {
                    ability_special: "str_to_slow_resist_pct",
                    text: "%减速抗性的力量值系数："
                },
                {
                    ability_special: "str_to_status_resist_pct",
                    text: "%状态抗性的力量值系数："
                }
            ],
            name: "不可逾越",
            description: "小小从力量中获得状态和减速抗性。",
            lore: "",
            notes: []
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_tiny",
                    name: "+{s:bonus_avalanche_damage} 山崩伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_tiny_2",
                    name: "{s:bonus_AbilityCharges} 投掷能量点数"
                },
                {
                    talent_classname: "special_bonus_unique_imba_tiny_3",
                    name: "-{s:value}秒 山崩冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_tiny_4",
                    name: "+{s:bonus_AbilityCastRange} 山崩施法距离"
                },
                {
                    talent_classname: "special_bonus_unique_imba_tiny_5",
                    name: "投掷不需要目标",
                    description: "投掷除了以敌方单位为目标，还可以对地施放。"
                },
                {
                    talent_classname: "special_bonus_unique_imba_tiny_6",
                    name: "-{s:bonus_attack_speed_reduction}% 长大攻击速度降低"
                },
                {
                    talent_classname: "special_bonus_unique_imba_tiny_7",
                    name: "+{s:bonus_bonus_damage} 抓树基础攻击力"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "tiny_facets_imba_1",
            name: "",
            description: ""
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_tiny_toss_charge_counter",
            name: "投掷能量点数",
            description: "投掷的当前可用次数。"
        },
        {
            modifier_classname: "modifier_imba_tiny_craggy_exterior_debuff",
            name: "崎岖外表",
            description: "攻击小小后武器会变钝。攻击力降低{MODIFIER_PROPERTY_DAMAGEOUTGOING_PERCENTAGE}%。"
        },
        {
            modifier_classname: "modifier_imba_tiny_avalanche_stun",
            name: "山崩",
            description: "被落石眩晕。"
        },
        {
            modifier_classname: "modifier_imba_tiny_tree_grab",
            name: "抓树",
            description: "攻击伤害增加，并且产生溅射伤害，攻击距离提升{MODIFIER_PROPERTY_ATTACK_RANGE_BONUS}"
        },
        {
            modifier_classname: "modifier_imba_tiny_tosstree_slow",
            name: "扔树",
            description: "因树木的创伤，移动速度被减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%%。"
        },
        {
            modifier_classname: "modifier_imba_tiny_toss_land_debuff",
            name: "紧急着陆",
            description: "移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。攻击速度降低{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}。"
        }
    ]
};