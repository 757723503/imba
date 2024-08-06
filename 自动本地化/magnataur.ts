import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_magnataur_horn_toss",
            ability_specials: [
                {
                    ability_special: "damage",
                    text: "伤害："
                },
                {
                    ability_special: "air_duration",
                    text: "滞空时间："
                },
                {
                    ability_special: "stun_duration",
                    text: "眩晕时间："
                }
            ],
            name: "长角抛物",
            description: "马格纳斯顶起前方的敌人，将其甩在身后。敌人受到伤害，滞空{air_duration}秒并处于眩晕状态，而且落地后还会眩晕一段时间。",
            notes: []
        },
        {
            ability_classname: "imba_magnataur_shockwave",
            ability_specials: [
                {
                    ability_special: "shock_damage",
                    text: "伤害："
                },
                {
                    ability_special: "movement_slow",
                    text: "%移动速度减缓："
                },
                {
                    ability_special: "basic_slow_duration",
                    text: "减速持续时间："
                }
            ],
            name: "震荡波",
            description: "马格纳斯放出一道能量波，对一条直线上的敌方单位造成伤害，并将他们朝自身牵引，同时受到短暂减速效果。",
            lore: "杰尔拉克山体并不稳定，马格纳斯已经学会如何将山体里的回响引导出来。",
            shard_description: "提升距离，并且使震荡波到达最大长度后返回至施法者原来施法的地点，再次击中敌人，造成{return_damage_pct}%伤害。",
            notes: []
        },
        {
            ability_classname: "imba_magnataur_greater_shockwave",
            ability_specials: [],
            name: "轰鸣震荡波",
            description: ".",
            notes: []
        },
        {
            ability_classname: "imba_magnataur_empower",
            ability_specials: [
                {
                    ability_special: "empower_duration",
                    text: "持续时间："
                },
                {
                    ability_special: "bonus_damage_pct",
                    text: "%攻击力加成："
                },
                {
                    ability_special: "cleave_damage_pct",
                    text: "%分裂伤害："
                }
            ],
            name: "授予力量",
            description: "给予友方单位攻击力加成并且使其获得分裂攻击。对自身具有额外{self_multiplier}%的效果。",
            lore: "随着一声怒吼，马格纳斯展示了他真正的力量。",
            notes: [
                "攻击力加成根据基础攻击力和主属性加成计算。",
                "分裂伤害无视减益免疫。",
                "远程单位的攻击没有分裂效果。"
            ]
        },
        {
            ability_classname: "imba_magnataur_skewer",
            ability_specials: [
                {
                    ability_special: "skewer_speed",
                    text: "冲刺速度："
                },
                {
                    ability_special: "range",
                    text: "冲刺距离："
                },
                {
                    ability_special: "slow_pct",
                    text: "%移动速度减缓："
                },
                {
                    ability_special: "slow_duration",
                    text: "减速持续时间："
                },
                {
                    ability_special: "skewer_damage",
                    text: "伤害："
                },
                {
                    ability_special: "tree_hit_damage",
                    text: "树木击中伤害："
                },
                {
                    ability_special: "cliff_hit_damage",
                    text: "高台击中伤害："
                }
            ],
            name: "巨角冲撞",
            description: "马格纳斯向前冲刺，用他巨大的犀角将敌人挑起。被击中的英雄将被拽至终点，然后受到伤害并且攻击速度和移动速度都被降低。使敌人穿过树木或高台时造成额外伤害。",
            lore: "对潜在的商人来说，半人犀牛的犀角价值与犀角能够造成的破坏成正比。",
            notes: []
        },
        {
            ability_classname: "imba_magnataur_reverse_polarity",
            ability_specials: [
                {
                    ability_special: "pull_radius",
                    text: "拖拽范围："
                },
                {
                    ability_special: "push_radius",
                    text: "作用范围："
                },
                {
                    ability_special: "max_knockback_distance",
                    text: "最远击退距离："
                },
                {
                    ability_special: "polarity_damage",
                    text: "伤害："
                },
                {
                    ability_special: "hero_stun_duration",
                    text: "眩晕时间："
                }
            ],
            name: "两极反转",
            description: "马格纳斯改变物质的属性，将附近的敌人拖拽至他的前方，并且以震击对他们造成伤害和眩晕。",
            lore: "作战时愤怒的马格纳斯如同喷发的杰尔拉克山。",
            notes: []
        },
        {
            ability_classname: "imba_magnus_magnetic_horn",
            ability_specials: [],
            notes: []
        },
        {
            ability_classname: "imba_magnataur_solid_core",
            ability_specials: [],
            name: "坚固核心",
            description: "马格纳斯受到敌人技能和物品的击退效果减少{knockback_reduction}%。",
            notes: []
        },
        {
            ability_classname: "imba_magnus_strength_of_joelrak",
            ability_specials: [
                {
                    ability_special: "max_stacks",
                    text: "最大叠加次数："
                },
                {
                    ability_special: "stack_duration",
                    text: "持续时间："
                }
            ],
            name: "杰尔拉克之力",
            description: "每当一名敌方英雄受到一个技能的伤害，马格纳斯就会获得一个可以叠加的加成状态，每个叠加状态提供{strength_per_stack}点力量。",
            notes: []
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_magnus",
                    name: "+{s:bonus_shock_damage} 震荡波伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_magnus_2",
                    name: "+{s:bonus_bonus_damage_pct}% 授予力量攻击力/分裂"
                },
                {
                    talent_classname: "special_bonus_unique_imba_magnus_3",
                    name: "+{s:bonus_range} 巨角冲撞距离"
                },
                {
                    talent_classname: "special_bonus_unique_imba_magnus_4",
                    name: "+{s:bonus_empower_duration}秒 授予力量持续时间"
                },
                {
                    talent_classname: "special_bonus_unique_imba_magnus_5",
                    name: "+{s:bonus_hero_stun_duration}秒 两极反转眩晕"
                },
                {
                    talent_classname: "special_bonus_unique_imba_magnus_6",
                    name: "+{s:bonus_basic_slow_duration}秒 震荡波减速"
                },
                {
                    talent_classname: "special_bonus_unique_imba_magnus_7",
                    name: "-{s:bonus_AbilityCooldown}秒 巨角冲撞冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_magnus_reverse_polarity_stats",
                    name: "两极反转每击中一名英雄+{s:bonus_stats_per_stack} 全属性",
                    description: "属性加成持续{s:bonus_stat_buff_duration}秒"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "magnataur_facets_imba_1",
            name: "两极反转 | 略高一筹 | 两极反转再反转",
            description: "两极反转会把附近所有敌人牵引至前方。 巨角冲撞使敌人穿过树木或高台时造成额外伤害。 两极反转把附近的敌人全都推离马格纳斯。",
            related_abilities: [
                {
                    ability_classname: "imba_magnataur_skewer",
                    description: "把敌人拖拽至树木或高台会造成额外伤害。"
                },
                {
                    ability_classname: "imba_magnataur_reverse_polarity",
                    description: "两极反转会把马格纳斯附近的敌人推开，而不是把敌人牵引至他的前方。"
                }
            ],
            related_talents: []
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_magnataur_shockwave",
            name: "震荡波减速",
            description: "移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。"
        },
        {
            modifier_classname: "modifier_imba_magnataur_shockwave_eruption_slow",
            name: "震荡波爆发",
            description: "移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。护甲降低{MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS}点。"
        },
        {
            modifier_classname: "modifier_imba_magnataur_empower",
            name: "授予力量",
            description: "基础攻击力提升{MODIFIER_PROPERTY_BASEDAMAGEOUTGOING_PERCENTAGE}%，造成{MODIFIER_PROPERTY_BASEDAMAGEOUTGOING_PERCENTAGE}%分裂伤害。"
        },
        {
            modifier_classname: "modifier_imba_magnataur_empower_aura_buff",
            name: "授予力量光环",
            description: "基础攻击力提升{MODIFIER_PROPERTY_BASEDAMAGEOUTGOING_PERCENTAGE}%。近战英雄的攻击可以造成{MODIFIER_PROPERTY_BASEDAMAGEOUTGOING_PERCENTAGE}%的分裂伤害。"
        },
        {
            modifier_classname: "modifier_imba_magnataur_skewer_slow",
            name: "受到巨角冲撞作用",
            description: "被减速{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。"
        },
        {
            modifier_classname: "modifier_imba_magnataur_skewer_impact",
            name: "受到巨角冲撞作用",
            description: "被马格纳斯拖拽。"
        },
        {
            modifier_classname: "modifier_imba_magnataur_shockwave_pull",
            name: "震荡波牵引"
        },
        {
            modifier_classname: "modifier_imba_magnataur_reverse_polarity",
            name: "两极反转",
            description: "两极反转移动中。"
        },
        {
            modifier_classname: "modifier_imba_magnataur_reverse_polarity_stun",
            name: "两极反转",
            description: "被眩晕。"
        },
        {
            modifier_classname: "modifier_imba_magnataur_reverse_polarity_stats",
            name: "两极反转属性",
            description: "全属性提升{MODIFIER_PROPERTY_STATS_STRENGTH_BONUS}点。"
        },
        {
            modifier_classname: "modifier_imba_magnataur_horn_toss_slow",
            name: "长角抛物减速效果",
            description: "移动速度和攻击速度降低{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。"
        }
    ]
};