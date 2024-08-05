import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_doom_bringer_devour",
            ability_specials: [
                {
                    ability_special: "bonus_gold",
                    text: "金钱奖励："
                },
                {
                    ability_special: "creep_level",
                    text: "目标等级上限："
                },
                {
                    ability_special: "ability_bonus_level",
                    text: ""
                },
                {
                    ability_special: "hero_ability_steal_time",
                    text: ""
                },
                {
                    ability_special: "magic_resist",
                    text: ""
                },
                {
                    ability_special: "AbilityCharges",
                    text: ""
                },
                {
                    ability_special: "AbilityChargeRestoreTime",
                    text: "基础充能时间："
                },
                {
                    ability_special: "AbilityCooldown",
                    text: ""
                }
            ],
            name: "吞噬",
            description: "消化一个敌军或中立生物，获得其特殊技能。关闭多样施法后，末日使者不会获得其技能。持续时间与冷却时间相同。",
            lore: "路西法的食欲和贪婪永远不会得到满足。",
            shard_description: "吞噬可以对敌方英雄施放，在吞噬持续时间内降低其15%最大生命值，并且末日使者获得目标拥有的一个基础被动技能。",
            notes: [
                "末日使者将获得该生物的正常金钱，还有技能的额外金钱。",
                "如果吞噬的单位没有技能，之前获得的技能将会保留。"
            ]
        },
        {
            ability_classname: "imba_doom_bringer_lvl_pain",
            ability_specials: [
                {
                    ability_special: "bonus_damage",
                    text: ""
                }
            ],
            name: "等级？痛苦",
            description: "末日使者的攻击会对等级低于他的英雄造成{bonus_damage}%额外伤害。",
            lore: "",
            notes: [
                "末日使者达到满级后也会生效。"
            ]
        },
        {
            ability_classname: "imba_doom_bringer_scorched_earth",
            ability_specials: [
                {
                    ability_special: "damage_per_second",
                    text: "伤害："
                },
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "bonus_movement_speed_pct",
                    text: "%移动速度提升："
                },
                {
                    ability_special: "heal_pct",
                    text: ""
                },
                {
                    ability_special: "duration",
                    text: "持续时间："
                }
            ],
            name: "焦土",
            description: "用火焰覆盖周围的土地，对敌人造成伤害，同时其移动速度得到提升。",
            lore: "堕落者在他所及之处散布毁灭，支撑他的火焰不会宽恕任何人。",
            notes: [
                "焦土会跟随末日使者，以他所在位置为中心。"
            ]
        },
        {
            ability_classname: "imba_doom_bringer_infernal_blade",
            ability_specials: [
                {
                    ability_special: "burn_damage",
                    text: "基础烧灼伤害："
                },
                {
                    ability_special: "burn_damage_pct",
                    text: "%最大生命值伤害："
                },
                {
                    ability_special: "burn_duration",
                    text: "烧灼持续时间："
                },
                {
                    ability_special: "ministun_duration",
                    text: "眩晕持续时间："
                },
                {
                    ability_special: "shard_ministun_duration",
                    text: "基础眩晕时间："
                },
                {
                    ability_special: "shard_bonus_stun_duration",
                    text: "额外眩晕时间："
                },
                {
                    ability_special: "shard_bonus_damage",
                    text: "额外伤害："
                }
            ],
            name: "阎刃",
            description: "末日挥舞他的炽烈之剑，将敌人点燃。造成{ministun_duration}秒眩晕，并施加一个燃烧效果，持续{burn_duration}秒，每秒造成伤害，数值为基础伤害+目标最大生命值的一定百分比。",
            lore: "路西法很乐意与他人分享自己被放逐时身受的火焰烙印。",
            shard_description: "提升阎刃的眩晕时间。若敌人的等级为3的倍数或24级以上，他们会被额外眩晕一段时间，并受到额外伤害。",
            notes: [
                "可以打断持续施法类技能。"
            ]
        },
        {
            ability_classname: "imba_doom_bringer_doom",
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
                    ability_special: "deniable_pct",
                    text: ""
                },
                {
                    ability_special: "AbilityCooldown",
                    text: ""
                },
                {
                    ability_special: "does_break",
                    text: ""
                },
                {
                    ability_special: "does_mute",
                    text: ""
                },
                {
                    ability_special: "scepter_aura_radius",
                    text: ""
                },
                {
                    ability_special: "applies_dispel_to_self",
                    text: ""
                },
                {
                    ability_special: "upgrade_interval",
                    text: ""
                },
                {
                    ability_special: "upgrade_amount",
                    text: ""
                }
            ],
            name: "末日",
            description: "对敌人施加末日诅咒，对其进行驱散，并且使其无法施放技能或获得任何治疗效果，同时造成持续伤害。\\n\\n驱散类型：弱驱散",
            lore: "每当佤什昂都的丧钟传出一个名字，这个名字的主人就必将迎来末日。",
            scepter_description: "末日作用下目标{scepter_aura_radius}范围内友军也会受到末日的作用。可以对自身施放末日，使末日作用于自身周围的敌人。",
            notes: []
        },
        {
            ability_classname: "imba_doom_bringer_empty1",
            ability_specials: [],
            name: "技能（来自吞噬）",
            description: "本技能栏在使用吞噬获得技能后可以使用。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_doom_bringer_empty2",
            ability_specials: [],
            name: "技能（来自吞噬）",
            description: "本技能栏在使用吞噬获得技能后可以使用。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_doom_bringer_devils_bargain",
            ability_specials: [
                {
                    ability_special: "buyback_penalty",
                    text: ""
                },
                {
                    ability_special: "item_sellback_percent",
                    text: ""
                }
            ],
            name: "恶魔的交易",
            description: "末日使者能以原价的{bonus_item_sellback_percent}{出售物品，但是他的买活价格增加{bonus_buyback_penalty}}。",
            lore: "",
            notes: []
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_doom_1",
                    name: "+{s:bonus_burn_damage_pct}% 阎刃最大生命值伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_doom_2",
                    name: "吞噬可作用远古"
                },
                {
                    talent_classname: "special_bonus_unique_imba_doom_3",
                    name: "吞噬提供{s:bonus_magic_resist}% 魔法抗性"
                },
                {
                    talent_classname: "special_bonus_unique_imba_doom_4",
                    name: "+{s:bonus_damage_per_second} 焦土伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_doom_6",
                    name: "+{s:bonus_bonus_movement_speed_pct}% 焦土移动速度"
                },
                {
                    talent_classname: "special_bonus_unique_imba_doom_9",
                    name: "-{s:value}秒 焦土冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_doom_10",
                    name: "末日施加锁闭"
                },
                {
                    talent_classname: "special_bonus_unique_imba_doom_11",
                    name: "末日施加破坏"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "doom_bringer_facets_imba_1",
            name: "",
            description: ""
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_doom_bringer_devour",
            name: "吞噬",
            description: "还在消化那个美味的小怪。"
        },
        {
            modifier_classname: "modifier_imba_doom_bringer_scorched_earth_effect",
            name: "焦土",
            description: "持续造成伤害，末日使者的移动速度提升{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。"
        },
        {
            modifier_classname: "modifier_imba_doom_bringer_scorched_earth_effect_aura",
            name: "焦土",
            description: "持续造成伤害，末日使者的移动速度提升{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。"
        },
        {
            modifier_classname: "modifier_imba_doom_bringer_infernal_blade_burn",
            name: "阎刃灼烧",
            description: "每秒造成{MODIFIER_PROPERTY_TOOLTIP}点伤害"
        },
        {
            modifier_classname: "modifier_imba_doom_bringer_doom",
            name: "末日",
            description: "被沉默，无法被治疗，同时每秒受到{MODIFIER_PROPERTY_TOOLTIP}点伤害。"
        },
        {
            modifier_classname: "modifier_imba_doom_bringer_doom_aura_self",
            name: "末日",
            description: "末日使者的敌人在末日效果下被沉默、无法被治疗，并且每秒受到{MODIFIER_PROPERTY_TOOLTIP}点烧灼伤害。"
        },
        {
            modifier_classname: "modifier_imba_doom_bringer_doom_aura_enemy",
            name: "末日",
            description: "末日使者的敌人在末日效果下被沉默、无法被治疗，并且每秒受到{MODIFIER_PROPERTY_TOOLTIP}点烧灼伤害。"
        }
    ]
};