import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_viper_poison_attack",
            ability_specials: [
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "damage",
                    text: "每秒伤害："
                },
                {
                    ability_special: "movement_speed",
                    text: "%移动速度减缓："
                },
                {
                    ability_special: "magic_resistance",
                    text: "%魔法抗性降低："
                },
                {
                    ability_special: "max_stacks",
                    text: "最大叠加次数："
                },
                {
                    ability_special: "bonus_range",
                    text: ""
                },
                {
                    ability_special: "shard_armor_reduction",
                    text: "护甲降低："
                },
                {
                    ability_special: "shard_building_dmg_pct",
                    text: "%对建筑伤害："
                },
                {
                    ability_special: "shard_bonus_max_stacks",
                    text: "额外最大叠加次数："
                },
                {
                    ability_special: "expiration_damage_radius",
                    text: "作用范围："
                },
                {
                    ability_special: "accumulated_damage_explosion_pct",
                    text: ""
                }
            ],
            name: "毒性攻击",
            description: "蝮蛇的毒液得到强化，使他的普通攻击附带效果，可以降低目标的移动速度和魔法抗性，并持续造成伤害。效果可以叠加，最多叠加{max_stacks}次。",
            lore: "冥界亚龙天生带有剧毒的吐息能迅速抽干敌人的生命力。",
            shard_description: "提升最大叠加次数，毒性攻击可以降低护甲，并且可以作用于建筑，造成的伤害有所降低。",
            notes: []
        },
        {
            ability_classname: "imba_viper_nethertoxin",
            ability_specials: [
                {
                    ability_special: "min_damage",
                    text: "最低每秒伤害："
                },
                {
                    ability_special: "max_damage",
                    text: "最高每秒伤害："
                },
                {
                    ability_special: "max_duration",
                    text: "最高每秒伤害所需时间："
                },
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "attack_slow",
                    text: "攻击速度减少："
                },
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "projectile_speed",
                    text: ""
                }
            ],
            name: "幽冥剧毒",
            description: "蝮蛇向目标区域释放幽冥剧毒。范围内的单位持续受到伤害，在区域内停留的时间越长，受到的伤害也越高。同时他们的攻击速度会被降低。",
            lore: "三途川的剧毒让小伤也能致死，而疲乏可以送命。",
            notes: []
        },
        {
            ability_classname: "imba_viper_corrosive_skin",
            ability_specials: [
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "bonus_attack_speed",
                    text: "攻击速度降低："
                },
                {
                    ability_special: "bonus_magic_resistance",
                    text: "%魔法抗性提升："
                },
                {
                    ability_special: "damage",
                    text: "每秒伤害："
                },
                {
                    ability_special: "max_range",
                    text: "最大作用范围："
                },
                {
                    ability_special: "effect_multiplier_distance",
                    text: ""
                },
                {
                    ability_special: "effect_multiplier",
                    text: ""
                },
                {
                    ability_special: "nethertoxin_bonus_pct",
                    text: "%最大加成："
                },
                {
                    ability_special: "nethertoxin_bonus_pct_max_duration_tooltip",
                    text: "%最大加成所需时间："
                }
            ],
            name: "腐蚀皮肤",
            description: "蝮蛇分泌出感染性的毒素，{max_range}范围内任何伤害它的敌人都将受到伤害，同时攻击速度也被降低。这种酸性分泌物还能提高蝮蛇的魔法抗性。",
            lore: "对冥界亚龙出击后，手中的刀剑和盾牌会遭到腐蚀并不稀奇。",
            notes: [
                "与其他提升魔法抗性的物品和技能叠加。",
                "破坏会使腐蚀皮肤不再施加效果。极恶俯冲还是会施加腐蚀皮肤。"
            ]
        },
        {
            ability_classname: "imba_viper_predator",
            ability_specials: [
                {
                    ability_special: "damage_base",
                    text: ""
                },
                {
                    ability_special: "damage_per_level",
                    text: ""
                },
                {
                    ability_special: "total_damage_per_missing_health",
                    text: ""
                }
            ],
            name: "",
            description: "",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_viper_viper_strike",
            ability_specials: [
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "damage",
                    text: "每秒伤害："
                },
                {
                    ability_special: "bonus_movement_speed",
                    text: "%移动速度减缓："
                },
                {
                    ability_special: "bonus_attack_speed",
                    text: "攻击速度降低："
                },
                {
                    ability_special: "AbilityCooldown",
                    text: ""
                },
                {
                    ability_special: "AbilityManaCost",
                    text: ""
                },
                {
                    ability_special: "projectile_speed",
                    text: ""
                },
                {
                    ability_special: "max_charges",
                    text: ""
                },
                {
                    ability_special: "charge_restore_time",
                    text: ""
                },
                {
                    ability_special: "does_break",
                    text: ""
                }
            ],
            name: "蝮蛇突袭",
            description: "蝮蛇降低敌方目标单位的移动和攻击速度，同时禁用其被动技能并造成持续毒素伤害。移动和攻击速度会在毒素的持续时间内逐渐恢复。",
            lore: "冥界亚龙身上最具威力的毒素，曾用于屠戮它残酷的主人。不论是谁，只要愚蠢到与蝮蛇作对就会被毒杀。",
            scepter_description: "减少魔法消耗和冷却时间，提升施法距离。",
            notes: []
        },
        {
            ability_classname: "imba_viper_nose_dive",
            ability_specials: [
                {
                    ability_special: "corrosive_radius",
                    text: ""
                },
                {
                    ability_special: "duration",
                    text: ""
                },
                {
                    ability_special: "effect_duration",
                    text: ""
                },
                {
                    ability_special: "dive_speed",
                    text: ""
                },
                {
                    ability_special: "start_height",
                    text: ""
                },
                {
                    ability_special: "movespeed_slow",
                    text: ""
                }
            ],
            name: "极恶俯冲",
            description: "冥界亚龙冲向地面，{corrosive_radius}范围内所有敌人均被溅上持续{effect_duration}秒的腐蚀皮肤酸液。",
            lore: "世人认为冥界亚龙的翅膀只有在死亡时才会碰到地面，不过也有揣测是有人见证了更为刻意的着陆，只是没能活着说出他的故事。",
            notes: [
                "被束缚或缠绕时无法施放。"
            ]
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_viper_1",
                    name: "+{s:bonus_damage} 腐蚀皮肤每秒伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_viper_2",
                    name: "+{s:bonus_damage} 蝮蛇突袭每秒伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_viper_3",
                    name: "+{s:bonus_max_damage} 幽冥剧毒最低/最高伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_viper_4",
                    name: "+{s:bonus_magic_resistance}% 毒性攻击降低魔抗"
                },
                {
                    talent_classname: "special_bonus_unique_imba_viper_5",
                    name: "变为全才"
                },
                {
                    talent_classname: "special_bonus_unique_imba_viper_6",
                    name: "+{s:bonus_bonus_attack_speed} 腐蚀皮肤降低攻击速度"
                },
                {
                    talent_classname: "special_bonus_unique_imba_viper_7",
                    name: "+{s:bonus_damage}% 毒性攻击减速/伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_viper_8",
                    name: "-{s:bonus_AbilityCooldown}% 蝮蛇突袭魔耗/冷却"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "viper_facets_imba_1",
            name: "",
            description: ""
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_viper_poison_attack_slow",
            name: "毒性攻击减速",
            description: "移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%，魔法抗性降低{MODIFIER_PROPERTY_MAGICAL_RESISTANCE_BONUS}%。持续受到伤害。"
        },
        {
            modifier_classname: "modifier_imba_viper_corrosive_skin_slow",
            name: "腐蚀皮肤减速",
            description: "攻击速度降低{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}%并持续受到伤害。"
        },
        {
            modifier_classname: "modifier_imba_viper_viper_strike_slow",
            name: "蝮蛇突袭减速",
            description: "被动技能被禁用。移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%，攻击速度降低{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}。"
        },
        {
            modifier_classname: "modifier_imba_viper_nethertoxin",
            name: "幽冥剧毒",
            description: "持续受到伤害。攻击速度降低{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}。"
        }
    ]
};