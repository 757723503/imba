import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_morphling_waveform",
            ability_specials: [
                {
                    ability_special: "speed",
                    text: ""
                },
                {
                    ability_special: "width",
                    text: ""
                },
                {
                    ability_special: "AbilityCharges",
                    text: ""
                },
                {
                    ability_special: "AbilityCastRange",
                    text: ""
                },
                {
                    ability_special: "AbilityCooldown",
                    text: ""
                },
                {
                    ability_special: "pct_damage",
                    text: "%攻击伤害："
                },
                {
                    ability_special: "process_procs",
                    text: ""
                }
            ],
            name: "波浪形态",
            description: "变体精灵化为波浪向前涌进，对路径上的敌人造成伤害。变体精灵在波浪形态中是无敌，并且对经过的所有敌人额外造成一定百分比的攻击伤害。",
            lore: "轻松卷走敌人的滔滔洪水。",
            notes: [
                "选择相应天赋前不会施加击中特效。"
            ]
        },
        {
            ability_classname: "imba_morphling_adaptive_strike_agi",
            ability_specials: [
                {
                    ability_special: "AbilityCooldown",
                    text: ""
                },
                {
                    ability_special: "damage_base",
                    text: "基础伤害："
                },
                {
                    ability_special: "damage_min",
                    text: "伤害最低敏捷系数："
                },
                {
                    ability_special: "damage_max",
                    text: "伤害最高敏捷系数："
                },
                {
                    ability_special: "projectile_speed",
                    text: ""
                },
                {
                    ability_special: "shared_cooldown",
                    text: ""
                }
            ],
            name: "变体打击（敏捷）",
            description: "用猛烈的水波打击一个敌方单位，造成的伤害为基础伤害加上变体精灵自身敏捷值乘以伤害系数的额外伤害。如果变体精灵的敏捷比力量高50%{，将造成最大伤害。\\n\\n另外变体打击（力量）进入}shared_cooldown%秒冷却。",
            lore: "变体精灵唤出自身的元素，构成波浪碾碎对手。",
            shard_description: "提升敏捷加成。",
            notes: [
                "弹道移动速度为{projectile_speed}。"
            ]
        },
        {
            ability_classname: "imba_morphling_adaptive_strike_str",
            ability_specials: [
                {
                    ability_special: "AbilityCooldown",
                    text: ""
                },
                {
                    ability_special: "stun_min",
                    text: "最小眩晕："
                },
                {
                    ability_special: "stun_max",
                    text: "最大眩晕："
                },
                {
                    ability_special: "knockback_min",
                    text: "最小击退距离："
                },
                {
                    ability_special: "knockback_max",
                    text: "最大击退距离："
                },
                {
                    ability_special: "projectile_speed",
                    text: ""
                },
                {
                    ability_special: "shared_cooldown",
                    text: ""
                }
            ],
            name: "变体打击（力量）",
            description: "用猛烈的水波打击一个敌方单位，根据变体精灵自身力量值造成眩晕。如果变体精灵的力量比敏捷高50%{，将造成最大眩晕/击退。\\n\\n另外变体打击（敏捷）进入}shared_cooldown%秒冷却。",
            lore: "变体精灵唤出自身的元素，构成波浪碾碎对手。",
            shard_description: "提升力量加成。",
            notes: [
                "弹道速度为{projectile_speed}。"
            ]
        },
        {
            ability_classname: "imba_morphling_morph",
            ability_specials: [],
            name: "",
            description: "",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_morphling_morph_agi",
            ability_specials: [
                {
                    ability_special: "points_per_tick",
                    text: ""
                },
                {
                    ability_special: "morph_cooldown",
                    text: ""
                },
                {
                    ability_special: "morph_rate_tooltip",
                    text: "变换速率："
                },
                {
                    ability_special: "mana_cost",
                    text: "每秒消耗魔法："
                },
                {
                    ability_special: "castable_while_stunned",
                    text: ""
                }
            ],
            name: "属性变换（敏捷获取）",
            description: "变体精灵改变它的形态，将一些力量转化成敏捷。该过程可逆。升级此技能将提高转化速率。",
            lore: "不断变化的流水让变体精灵的本质很难被辨别。",
            shard_description: "变体精灵在眩晕状态下可以变换属性。降低魔法消耗。",
            notes: [
                "属性变换不能转化物品提供的属性加成。",
                "升级敏捷获取时也会升级力量获取。"
            ]
        },
        {
            ability_classname: "imba_morphling_morph_str",
            ability_specials: [
                {
                    ability_special: "points_per_tick",
                    text: ""
                },
                {
                    ability_special: "morph_cooldown",
                    text: ""
                },
                {
                    ability_special: "morph_rate_tooltip",
                    text: "变换速率："
                },
                {
                    ability_special: "mana_cost",
                    text: "每秒消耗魔法："
                },
                {
                    ability_special: "castable_while_stunned",
                    text: ""
                }
            ],
            name: "属性变换（力量获取）",
            description: "变体精灵改变它的形态，将一些敏捷转化成力量。该过程可逆。升级此技能将提高转化速率。",
            lore: "不断变化的流水让变体精灵的本质很难被辨别。",
            shard_description: "变体精灵在眩晕状态下可以变换属性。降低魔法消耗。",
            notes: [
                "属性变换不能转换物品提供的属性加成。",
                "升级力量获取时也会升级敏捷获取。"
            ]
        },
        {
            ability_classname: "imba_morphling_ebb",
            ability_specials: [],
            name: "潮涨",
            description: "变体精灵的主属性现在是<font color='#9acd32'>敏捷</font>",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_morphling_flow",
            ability_specials: [
                {
                    ability_special: "agi_pct_at_max_cooldown_speed",
                    text: ""
                },
                {
                    ability_special: "agi_pct_at_min_cooldown_speed",
                    text: ""
                },
                {
                    ability_special: "min_cooldown_speed_pct",
                    text: ""
                },
                {
                    ability_special: "max_cooldown_speed_pct",
                    text: ""
                },
                {
                    ability_special: "cooldown_reduction_tooltip",
                    text: "%技能冷却时间减少："
                }
            ],
            name: "潮落",
            description: "变体精灵的主属性现在是<font color='#ff0000'>力量</font>，而且属性变换可以加速技能的冷却。",
            lore: "",
            notes: [
                "变体精灵的技能冷却速度取决于当前敏捷和力量的比值，敏捷/力量比值为{agi_pct_at_max_cooldown_speed}{时达到最高的{max_cooldown_speed_pct}}冷却速度加快。也会影响正在冷却的技能。"
            ]
        },
        {
            ability_classname: "imba_morphling_replicate",
            ability_specials: [
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "scepter_stat_steal",
                    text: ""
                },
                {
                    ability_special: "scepter_spell_amplify",
                    text: ""
                },
                {
                    ability_special: "scepter_attack_speed",
                    text: ""
                },
                {
                    ability_special: "scepter_status_resist",
                    text: ""
                },
                {
                    ability_special: "scepter_additional_stats",
                    text: ""
                },
                {
                    ability_special: "scepter_cooldown_reduction",
                    text: ""
                },
                {
                    ability_special: "scepter_illusion_outgoing",
                    text: "%幻象继承攻击力："
                },
                {
                    ability_special: "scepter_illusion_incoming",
                    text: "%幻象承受伤害："
                }
            ],
            name: "变形",
            description: "使自身向敌方目标改变，获得其基础技能。技能持续时间内可以来回切换。",
            lore: "凝视变体精灵会映出一个能够模仿本体的倒影。",
            scepter_description: "变形增加多样施法。开启后会产生目标英雄的强幻象，可以施放英雄的所有基础技能。如果变体精灵切换变形时幻象还存活，他就会摧毁该幻象，并取而代之。",
            notes: [
                "变体精灵自身及其控制的单位不能作为变形的目标。",
                "变形不会复制魔晶/神杖类技能，除非变体精灵自身也拥有相应物品。",
                "不会触发法术反弹。"
            ]
        },
        {
            ability_classname: "imba_morphling_morph_replicate",
            ability_specials: [],
            name: "替换复制体",
            description: "变体精灵的形态在自身和复制体之间可以来回切换。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_morphling_hybrid",
            ability_specials: [
                {
                    ability_special: "illusion_damage_out_pct",
                    text: ""
                },
                {
                    ability_special: "tooltip_illusion_damage_out_pct",
                    text: ""
                },
                {
                    ability_special: "illusion_incoming_dmg_pct_tooltip",
                    text: ""
                },
                {
                    ability_special: "illusion_damage_in_pct",
                    text: ""
                },
                {
                    ability_special: "illusion_damage_out_pct_scepter",
                    text: ""
                },
                {
                    ability_special: "duration",
                    text: "持续时间："
                }
            ],
            name: "混源",
            description: "变体精灵创造友方目标英雄的混源复制体，可以施放该英雄除了终极技能以外的所有技能。敌人可以分辨出哪个单位是混源体。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_morphling_accumulation",
            ability_specials: [
                {
                    ability_special: "percent_to_increment",
                    text: ""
                },
                {
                    ability_special: "bonus_all_stats_per_level_of_attributes",
                    text: ""
                },
                {
                    ability_special: "bonus_all_stats_pct_tooltip",
                    text: ""
                }
            ],
            name: "积少成多",
            description: "变体精灵每半级获得{percent_to_increment}{属性成长加成，而不是升级时获得全额加成。变体精灵从天赋树的全属性附加技能点获得+{bonus_all_stats_pct_tooltip}}属性加成。",
            lore: "",
            notes: []
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_morphling_1",
                    name: ""
                },
                {
                    talent_classname: "special_bonus_unique_imba_morphling_4",
                    name: ""
                },
                {
                    talent_classname: "special_bonus_unique_imba_morphling_8",
                    name: ""
                },
                {
                    talent_classname: "special_bonus_unique_imba_morphling_10",
                    name: ""
                },
                {
                    talent_classname: "special_bonus_unique_imba_morphling_waveform_cooldown",
                    name: "-{s:bonus_AbilityCooldown}% 波浪形态冷却"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "morphling_facets_imba_1",
            name: "",
            description: ""
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_morphling_accumulation",
            name: "积少成多",
            description: "获得额外属性。"
        },
        {
            modifier_classname: "modifier_imba_morphling_morph_str",
            name: "属性变换（力量）",
            description: "将敏捷转换为力量"
        },
        {
            modifier_classname: "modifier_imba_morphling_morph_agi",
            name: "属性变换（敏捷）",
            description: "将力量转换成敏捷"
        },
        {
            modifier_classname: "modifier_imba_morphling_morph",
            name: "属性变换",
            description: "力量：%-dMODIFIER_PROPERTY_STATS_STRENGTH_BONUS%\\n敏捷：%-dMODIFIER_PROPERTY_STATS_AGILITY_BONUS%"
        },
        {
            modifier_classname: "modifier_imba_morphling_replicate_timer",
            name: "复制体倒计时",
            description: "变体精灵技能创造的复制体剩余时间"
        },
        {
            modifier_classname: "modifier_imba_morphling_replicate_manager",
            name: "变形倒计时",
            description: "显示变体精灵变回原形态的时间。"
        },
        {
            modifier_classname: "modifier_imba_morphling_waveform_charge_counter",
            name: "波浪形态能量点数"
        },
        {
            modifier_classname: "modifier_imba_morphling_adaptive_strike",
            name: "变体打击",
            description: "被眩晕。"
        },
        {
            modifier_classname: "modifier_imba_morphling_scepter_stats_drain_strength_buff",
            name: "变形力量吸取",
            description: "获得{MODIFIER_PROPERTY_STATS_STRENGTH_BONUS}点力量、{MODIFIER_PROPERTY_STATS_AGILITY_BONUS}点敏捷、{MODIFIER_PROPERTY_STATS_INTELLECT_BONUS}点智力和{MODIFIER_PROPERTY_STATUS_RESISTANCE_STACKING}%状态抗性。"
        },
        {
            modifier_classname: "modifier_imba_morphling_scepter_stats_drain_strength_debuff",
            name: "变形力量吸取",
            description: "失去{MODIFIER_PROPERTY_STATS_STRENGTH_BONUS_PERCENTAGE}%属性和{MODIFIER_PROPERTY_STATUS_RESISTANCE_STACKING}%状态抗性。"
        },
        {
            modifier_classname: "modifier_imba_morphling_scepter_stats_drain_agility_buff",
            name: "变形敏捷吸取",
            description: "获得{MODIFIER_PROPERTY_STATS_STRENGTH_BONUS}点力量、{MODIFIER_PROPERTY_STATS_AGILITY_BONUS}点敏捷、{MODIFIER_PROPERTY_STATS_INTELLECT_BONUS}点智力和{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}攻击速度。"
        },
        {
            modifier_classname: "modifier_imba_morphling_scepter_stats_drain_agility_debuff",
            name: "变形敏捷吸取",
            description: "失去{MODIFIER_PROPERTY_STATS_AGILITY_BONUS_PERCENTAGE}%属性以及{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}攻击速度加成。"
        },
        {
            modifier_classname: "modifier_imba_morphling_scepter_stats_drain_intelligence_buff",
            name: "变形智力吸取",
            description: "获得{MODIFIER_PROPERTY_STATS_STRENGTH_BONUS}点力量、{MODIFIER_PROPERTY_STATS_AGILITY_BONUS}点敏捷、{MODIFIER_PROPERTY_STATS_INTELLECT_BONUS}点智力和{MODIFIER_PROPERTY_SPELL_AMPLIFY_PERCENTAGE}%技能增强。"
        },
        {
            modifier_classname: "modifier_imba_morphling_scepter_stats_drain_intelligence_debuff",
            name: "变形智力吸取",
            description: "失去{MODIFIER_PROPERTY_STATS_INTELLECT_BONUS_PERCENTAGE}%属性以及{MODIFIER_PROPERTY_SPELL_AMPLIFY_PERCENTAGE}%技能增强。"
        },
        {
            modifier_classname: "modifier_imba_morphling_scepter_stats_drain_all_buff",
            name: "变形全才吸取",
            description: "获得{MODIFIER_PROPERTY_STATS_STRENGTH_BONUS}点力量，{MODIFIER_PROPERTY_STATS_AGILITY_BONUS}点敏捷和{MODIFIER_PROPERTY_STATS_INTELLECT_BONUS}点智力。"
        },
        {
            modifier_classname: "modifier_imba_morphling_scepter_stats_drain_all_debuff",
            name: "变形全才吸取",
            description: "损失{MODIFIER_PROPERTY_STATS_INTELLECT_BONUS_PERCENTAGE}%点属性。"
        }
    ]
};