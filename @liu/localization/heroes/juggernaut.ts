import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_juggernaut_blade_dance",
            ability_specials: [
                {
                    ability_special: "blade_dance_crit_chance",
                    text: "%致命一击概率："
                },
                {
                    ability_special: "blade_dance_crit_mult",
                    text: "%致命一击伤害："
                },
                {
                    ability_special: "blade_dance_lifesteal",
                    text: ""
                }
            ],
            name: "剑舞",
            description: "主宰有一定概率在攻击时触发致命一击。",
            lore: "作为他对剑技传承的最后承诺，尤涅若立誓将使此剑技为世人所铭记。",
            notes: []
        },
        {
            ability_classname: "imba_juggernaut_blade_fury",
            ability_specials: [
                {
                    ability_special: "blade_fury_aspd_multiplier",
                    text: ""
                },
                {
                    ability_special: "blade_fury_radius",
                    text: "作用范围："
                },
                {
                    ability_special: "blade_fury_damage_per_tick",
                    text: "每次伤害："
                },
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "AbilityCooldown",
                    text: ""
                },
                {
                    ability_special: "bonus_movespeed",
                    text: ""
                },
                {
                    ability_special: "movement_slow",
                    text: ""
                },
                {
                    ability_special: "can_crit",
                    text: ""
                }
            ],
            name: "剑刃风暴",
            description: "舞起具有破坏性力量的剑刃风暴，使主宰获得减益免疫状态，魔法抗性提升80%{，并且对主宰周围的敌方单位造成伤害。主宰造成伤害的间隔为自身攻击速度的}blade_fury_aspd_multiplier%倍。旋转结束时施加强驱散效果。",
            lore: "无论是战士还是法师，都害怕尤涅若的武士刀剑技。",
            shard_description: "提升剑刃风暴作用范围，并且减缓敌人{bonus_movement_slow}%移动速度。",
            notes: [
                "剑刃风暴期间可以使用物品。",
                "主宰在施放剑刃风暴的过程中依然可以进行物理攻击。但是只有不受剑刃风暴伤害的单位，如守卫和建筑才会受到这些物理伤害。"
            ]
        },
        {
            ability_classname: "imba_juggernaut_healing_ward",
            ability_specials: [
                {
                    ability_special: "healing_ward_heal_amount",
                    text: "%每秒最大生命值回复："
                },
                {
                    ability_special: "AbilityCooldown",
                    text: ""
                },
                {
                    ability_special: "healing_ward_aura_radius",
                    text: "作用范围："
                },
                {
                    ability_special: "healing_ward_movespeed_tooltip",
                    text: ""
                },
                {
                    ability_special: "healing_ward_bonus_health",
                    text: ""
                },
                {
                    ability_special: "healing_ward_hits_to_kill_tooltip",
                    text: "摧毁所需次数："
                }
            ],
            name: "治疗守卫",
            description: "召唤一个治疗守卫，按周围友军单位最大生命值的一定比例治疗他们。治疗守卫可以移动，移动速度为{healing_ward_movespeed_tooltip}。持续{abilityduration}秒。",
            lore: "在遮面之岛习得的仪式之一，治疗伤口时加上一点巫毒法术往往会很有效。",
            notes: [
                "可以控制治疗守卫。",
                "多个治疗守卫的效果不会叠加。"
            ]
        },
        {
            ability_classname: "imba_juggernaut_omni_slash",
            ability_specials: [
                {
                    ability_special: "attack_rate_multiplier",
                    text: "斩击频率倍数："
                },
                {
                    ability_special: "bonus_damage",
                    text: "攻击力加成："
                },
                {
                    ability_special: "bonus_attack_speed",
                    text: "攻击速度加成："
                },
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "omni_slash_radius",
                    text: "斩击跳跃范围："
                },
                {
                    ability_special: "AbilityCastRange",
                    text: ""
                },
                {
                    ability_special: "dispel",
                    text: ""
                }
            ],
            name: "无敌斩",
            description: "主宰挥剑跃向敌方目标单位，随后再以更短的攻击频率斩击该单位和附近的其它敌方单位。主宰在无敌斩期间无敌。\\n\\n驱散类型：弱驱散",
            lore: "“自律已有成果；勤练带来力量。”",
            notes: [
                "无敌斩期间可以使用物品。"
            ]
        },
        {
            ability_classname: "imba_juggernaut_swift_slash",
            ability_specials: [
                {
                    ability_special: "duration",
                    text: "持续时间："
                }
            ],
            name: "迅风斩",
            description: "发动一次短时间的无敌斩，持续{duration}秒。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_juggernaut_duelist",
            ability_specials: [
                {
                    ability_special: "front_angle",
                    text: ""
                },
                {
                    ability_special: "front_damage_increase",
                    text: ""
                }
            ],
            name: "决斗达人",
            description: "主宰对面朝他的目标造成的伤害增加{front_damage_increase}%。额外伤害在无敌斩期间始终有效。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_juggernaut_bladeform",
            ability_specials: [
                {
                    ability_special: "max_stacks",
                    text: ""
                },
                {
                    ability_special: "stack_gain_time",
                    text: ""
                },
                {
                    ability_special: "agi_bonus_pct_per_stack",
                    text: ""
                },
                {
                    ability_special: "movement_speed_pct_per_stack",
                    text: ""
                },
                {
                    ability_special: "linger_duration",
                    text: ""
                }
            ],
            name: "剑心犹在",
            description: "只要主宰没有受到伤害，他就会获得敏捷和移动速度。",
            lore: "",
            notes: [
                "主宰未受到伤害时每{stack_gain_time}秒获得一层剑心的叠加层数。每层叠加效果提供{agi_bonus_pct_per_stack}{基础敏捷加成和{movement_speed_pct_per_stack}}移动速度。最高为{max_stacks}层叠加。叠加效果在受到任何伤害时会粘滞{linge_duration}秒后再消失。",
                "破坏会使技能无法获得新的叠加效果。",
                "破坏不会使现有叠加效果提供的加成失效。"
            ]
        },
        {
            ability_classname: "imba_juggernaut_innate_mask_spin_crit",
            ability_specials: [
                {
                    ability_special: "mana_reduction_on_hit_tooltip",
                    text: ""
                }
            ],
            name: "",
            description: "",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_juggernaut_innate_mask_crit_lifesteal",
            ability_specials: [
                {
                    ability_special: "lifesteal_flat_tooltip",
                    text: ""
                },
                {
                    ability_special: "blade_dance_lifesteal_consumed_tooltip",
                    text: ""
                }
            ],
            name: "",
            description: "",
            lore: "",
            notes: []
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_juggernaut_2",
                    name: "+{s:bonus_healing_ward_bonus_health} 治疗守卫可攻击次数"
                },
                {
                    talent_classname: "special_bonus_unique_imba_juggernaut_3",
                    name: "+{s:bonus_front_damage_increase}% 决斗达人伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_juggernaut_4",
                    name: "+{s:bonus_blade_dance_crit_mult}% 剑舞致命一击伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_juggernaut_5",
                    name: "-{s:bonus_AbilityCooldown}秒 治疗守卫冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_juggernaut_blade_dance_lifesteal",
                    name: "+{s:bonus_blade_dance_lifesteal}% 剑舞吸血"
                },
                {
                    talent_classname: "special_bonus_unique_imba_juggernaut_omnislash_duration",
                    name: "+{s:bonus_duration}秒 无敌斩持续时间"
                },
                {
                    talent_classname: "special_bonus_unique_imba_juggernaut_blade_fury_cooldown",
                    name: "-{s:bonus_AbilityCooldown}秒 剑刃风暴冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_juggernaut_blade_fury_movespeed",
                    name: "剑刃风暴期间+{s:bonus_bonus_movespeed} 移动速度"
                },
                {
                    talent_classname: "special_bonus_unique_imba_juggernaut_healing_ward_heal",
                    name: "+{s:bonus_healing_ward_heal_amount}% 治疗守卫治疗"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "juggernaut_facets_imba_1",
            name: "",
            description: ""
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_juggernaut_bladeform",
            name: "剑心犹在",
            description: "获得{MODIFIER_PROPERTY_STATS_AGILITY_BONUS}点敏捷加成以及{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%移动速度加成。"
        },
        {
            modifier_classname: "modifier_imba_juggernaut_bladeform_linger",
            name: "剑心犹在",
            description: "获得{MODIFIER_PROPERTY_STATS_AGILITY_BONUS}点敏捷加成以及{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%移动速度加成。"
        },
        {
            modifier_classname: "modifier_imba_juggernaut_blade_fury",
            name: "剑刃风暴",
            description: "提供减益免疫并且每秒造成伤害"
        },
        {
            modifier_classname: "modifier_imba_juggernaut_blade_dance",
            name: "剑舞",
            description: "{MODIFIER_PROPERTY_PREATTACK_CRITICALSTRIKE}%几率触发致命一击"
        },
        {
            modifier_classname: "modifier_imba_juggernaut_healing_ward_aura",
            name: "治疗守卫"
        },
        {
            modifier_classname: "modifier_imba_juggernaut_healing_ward_heal",
            name: "治疗守卫光环",
            description: "每秒恢复{MODIFIER_PROPERTY_HEALTH_REGEN_PERCENTAGE}%的生命值"
        },
        {
            modifier_classname: "modifier_imba_juggernaut_omnislash",
            name: "无敌斩",
            description: "无敌。攻击区域内的敌方单位。"
        }
    ]
};