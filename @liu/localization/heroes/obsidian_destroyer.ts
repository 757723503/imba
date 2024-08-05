import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_obsidian_destroyer_arcane_orb",
            ability_specials: [
                {
                    ability_special: "mana_pool_damage_pct",
                    text: "%伤害系数："
                },
                {
                    ability_special: "mana_cost_percentage",
                    text: "%当前魔法值消耗："
                },
                {
                    ability_special: "bounce_radius",
                    text: ""
                }
            ],
            name: "奥术天球",
            description: "殁境神蚀者的攻击附带基于剩余魔法值的额外纯粹伤害。",
            lore: "先兆者的殁境学识使他可以洞悉所有精神能量的涨落，并将其融入自身。",
            notes: [
                "根据使用此技能后的魔法值计算附加伤害。"
            ]
        },
        {
            ability_classname: "imba_obsidian_destroyer_ominous_discernment",
            ability_specials: [
                {
                    ability_special: "bonus_max_mana_per_int",
                    text: ""
                }
            ],
            name: "殁境神力",
            description: "殁境神蚀者的每点智力额外提供{bonus_max_mana_per_int}点魔法。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_obsidian_destroyer_astral_imprisonment",
            ability_specials: [
                {
                    ability_special: "AbilityCooldown",
                    text: ""
                },
                {
                    ability_special: "prison_duration",
                    text: "持续时间："
                },
                {
                    ability_special: "damage",
                    text: "伤害："
                },
                {
                    ability_special: "has_mana_steal",
                    text: ""
                },
                {
                    ability_special: "mana_capacity_steal",
                    text: "%最大魔法值窃取："
                },
                {
                    ability_special: "mana_capacity_duration",
                    text: "魔法值窃取持续时间："
                },
                {
                    ability_special: "allied_movement_speed_pct",
                    text: ""
                },
                {
                    ability_special: "damage_radius",
                    text: "伤害作用范围："
                },
                {
                    ability_special: "AbilityCastRange",
                    text: ""
                },
                {
                    ability_special: "debuff_duration",
                    text: ""
                },
                {
                    ability_special: "percentage_damage",
                    text: ""
                },
                {
                    ability_special: "percentage_heal",
                    text: "%魔法消耗造成治疗："
                }
            ],
            name: "星体禁锢",
            description: "将一个目标友方或敌方英雄禁锢在星体中。被禁锢的英雄处于无敌和无法行动状态。禁锢结束时，对目标造成伤害并窃取其最大魔法值的一定百分比。",
            lore: "被关在现世和殁境之间的空间中，受害者认识到自己如孩童般的学识和血肉之躯。",
            shard_description: "星体禁锢现在会造成范围伤害。另外友军在星体禁锢期间能以{allied_movement_speed_pct}%移动速度进行移动（他们为可见状态，但无法成为目标，也不能执行其他任何动作）。",
            notes: [
                "被禁锢的单位依然能受到神智之蚀的作用。",
                "最大魔法值窃取效果不会提升殁境神蚀者的当前魔法值，也不会直接减少目标的当前魔法值。"
            ]
        },
        {
            ability_classname: "imba_obsidian_destroyer_essence_aura",
            ability_specials: [],
            name: "精气光环",
            description: "当附近友方英雄或殁境神蚀者自己使用技能时，有一定概率回复自身魔法上限一定百分比的魔法值。同时被动增加殁境神蚀者的魔法上限。一些没有冷却时间的技能和切换型的技能不能触发精气光环。",
            lore: "殁境的水晶产生出奥术能量，先兆者将其引导至凡人的世界。",
            notes: [
                "除了奥术天球，大多数没有冷却时间的技能都不能触发精气光环。"
            ]
        },
        {
            ability_classname: "imba_obsidian_destroyer_equilibrium",
            ability_specials: [
                {
                    ability_special: "proc_chance",
                    text: "%触发几率："
                },
                {
                    ability_special: "mana_restore",
                    text: "%最大魔法值恢复："
                },
                {
                    ability_special: "mana_increase",
                    text: "%最大魔法值增加："
                },
                {
                    ability_special: "mana_increase_duration",
                    text: "魔法值增加持续时间："
                },
                {
                    ability_special: "mana_as_ms",
                    text: ""
                },
                {
                    ability_special: "scepter_barrier_threshold",
                    text: ""
                },
                {
                    ability_special: "scepter_barrier_duration",
                    text: ""
                },
                {
                    ability_special: "scepter_barrier_cooldown",
                    text: ""
                },
                {
                    ability_special: "scepter_max_mana_barrier_pct",
                    text: ""
                }
            ],
            name: "精华变迁",
            description: "被动拥有一定几率在施放技能时回复最大魔法值的一定百分比。",
            lore: "殁境充斥着奥术能量，将穿过先兆者的裂隙进行扩散。",
            shard_description: "对友军施放星体禁锢可以对其触发精气光环，向他们提供{shard_bonus_mana}最大魔法，持续{shard_mana_duration}秒。",
            scepter_description: "殁境神蚀者受到会使自身血量低于{scepter_barrier_threshold}{的伤害时触发一次强驱散。另外，效果触发时殁境神蚀者会耗尽所有魔法，产生一个伤害护盾，数值等于自身最大魔法值的{scepter_max_mana_barrier_pct}}。持续{scepter_barrier_duration}秒。这个效果每{scepter_barrier_cooldown}秒可触发一次，并且无法刷新。",
            notes: [
                "破坏会使阿哈利姆神杖效果无法触发。"
            ]
        },
        {
            ability_classname: "imba_obsidian_destroyer_sanity_eclipse",
            ability_specials: [
                {
                    ability_special: "base_damage",
                    text: "基础伤害："
                },
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "cast_range",
                    text: "施法距离："
                },
                {
                    ability_special: "damage_multiplier",
                    text: "魔法差伤害系数："
                },
                {
                    ability_special: "illusion_bonus_damage",
                    text: "%对幻象伤害："
                },
                {
                    ability_special: "debuff_duration",
                    text: ""
                },
                {
                    ability_special: "percentage_damage",
                    text: ""
                },
                {
                    ability_special: "percentage_heal",
                    text: "%魔法消耗造成治疗："
                }
            ],
            name: "神智之蚀",
            description: "释放出一道神智冲击波，伤害数值基于自身与目标的魔法值之差。神智之蚀可以作用于星体禁锢中的单位。对幻象造成双倍伤害。",
            lore: "当一块殁境的水晶破裂之时，灾难性的能量被释放出来，甚至在其他的空间也能感受到这股能量的回响。",
            notes: [
                "不会对非英雄单位或中立生物造成伤害。"
            ]
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_outworld_devourer",
                    name: "+{s:bonus_mana_pool_damage_pct}% 奥术天球伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_outworld_devourer_3",
                    name: "+{s:bonus_mana_as_ms}% 当前魔法作为移速"
                },
                {
                    talent_classname: "special_bonus_unique_imba_outworld_devourer_4",
                    name: "+{s:bonus_damage_multiplier} 神智之蚀魔法差系数"
                },
                {
                    talent_classname: "special_bonus_unique_imba_outworld_devourer_5",
                    name: "-{s:value}秒 神智之蚀冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_outworld_devourer_astral_castrange",
                    name: "+{s:bonus_AbilityCastRange} 星体禁锢施法距离"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "obsidian_destroyer_facets_imba_1",
            name: "",
            description: ""
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_obsidian_destroyer_essence_aura_effect",
            name: "精气光环",
            description: "每当你施展一个法术，你都有概率回复你当前最大魔法值一定百分比的魔法。"
        },
        {
            modifier_classname: "modifier_imba_obsidian_destroyer_equilibrium_barrier",
            name: "奥术坚壁",
            description: "魔法已被转化为伤害护盾。"
        },
        {
            modifier_classname: "modifier_imba_obsidian_destroyer_astral_imprisonment_buff_counter",
            name: "智力窃取",
            description: "窃取敌人{MODIFIER_PROPERTY_TOOLTIP}点智力。"
        },
        {
            modifier_classname: "modifier_imba_obsidian_destroyer_astral_imprisonment_debuff_counter",
            name: "智力窃取",
            description: "被殁境神蚀者窃取{MODIFIER_PROPERTY_TOOLTIP}点智力。"
        },
        {
            modifier_classname: "modifier_imba_obsidian_destroyer_astral_imprisonment_prison",
            name: "星体禁锢",
            description: "锁进一个星体监牢，无法接触他人也不会被他人接触。"
        },
        {
            modifier_classname: "modifier_imba_obsidian_destroyer_astral_imprisonment_charge_counter",
            name: "星体禁锢能量点数",
            description: "只要有能量点数就能随时施放星体禁锢。"
        },
        {
            modifier_classname: "modifier_imba_obsidian_destroyer_sanity_eclipse_charge",
            name: "神智之蚀能量计数",
            description: "最大魔法值提升{MODIFIER_PROPERTY_MANA_BONUS}点。"
        },
        {
            modifier_classname: "modifier_imba_obsidian_destroyer_mana_allergy",
            name: "魔力邪印",
            description: "施放任何技能或使用物品都会治疗殁境神蚀者。"
        },
        {
            modifier_classname: "modifier_imba_obsidian_destroyer_arcane_orb_buff_counter",
            name: "奥术天球",
            description: "窃取{MODIFIER_PROPERTY_STATS_INTELLECT_BONUS}点智力。"
        },
        {
            modifier_classname: "modifier_imba_obsidian_destroyer_arcane_orb_debuff_counter",
            name: "奥术天球",
            description: "丢失{MODIFIER_PROPERTY_STATS_INTELLECT_BONUS}点智力。"
        },
        {
            modifier_classname: "modifier_imba_obsidian_destroyer_equilibrium_active",
            name: "精华变迁",
            description: "所有伤害可以减缓敌人的移动速度。"
        },
        {
            modifier_classname: "modifier_imba_obsidian_destroyer_equilibrium_debuff",
            name: "精华变迁",
            description: "移动速度被减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。"
        },
        {
            modifier_classname: "modifier_imba_obsidian_destroyer_equilibrium_debuff_counter",
            name: "星体禁锢",
            description: "最大魔法值减少{MODIFIER_PROPERTY_TOOLTIP}点。"
        },
        {
            modifier_classname: "modifier_imba_obsidian_destroyer_equilibrium_buff_counter",
            name: "星体禁锢",
            description: "窃取{MODIFIER_PROPERTY_TOOLTIP}点魔法值。"
        },
        {
            modifier_classname: "modifier_imba_obsidian_destroyer_stackingbonusmana",
            name: "殁世神灭",
            description: "最大魔法值提升{MODIFIER_PROPERTY_EXTRA_MANA_PERCENTAGE}%。"
        }
    ]
};