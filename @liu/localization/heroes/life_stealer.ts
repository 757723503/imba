import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_life_stealer_rage",
            ability_specials: [
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "magic_resist",
                    text: "%魔法抗性："
                },
                {
                    ability_special: "status_resist",
                    text: "%状态抗性："
                },
                {
                    ability_special: "debuff_immunity",
                    text: ""
                },
                {
                    ability_special: "bonus_armor",
                    text: ""
                }
            ],
            name: "狂暴",
            description: "进入狂暴状态，获得减益免疫和魔法抗性加成。\\n\\n驱散类型：弱驱散",
            lore: "奈克斯的疯狂和残暴使得他在战斗中异常凶狠无情。",
            notes: []
        },
        {
            ability_classname: "imba_life_stealer_unfettered",
            ability_specials: [
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "magic_resist",
                    text: "%魔法抗性加成："
                },
                {
                    ability_special: "status_resist",
                    text: "%状态抗性加成："
                }
            ],
            name: "肆意狂怒",
            description: "陷入狂烈的愤怒，获得状态抗性和魔法抗性加成。施加驱散，而且被控制时可以施放。\\n\\n驱散类型：强驱散",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_life_stealer_feast",
            ability_specials: [
                {
                    ability_special: "hp_leech_percent",
                    text: "%最大生命值回复："
                },
                {
                    ability_special: "hp_damage_percent",
                    text: "%最大生命值伤害："
                },
                {
                    ability_special: "bonus_hp_per_hero",
                    text: "击杀英雄获得生命上限："
                },
                {
                    ability_special: "bonus_hp_per_creep",
                    text: "击杀非英雄获得生命上限："
                },
                {
                    ability_special: "creep_deny_percent",
                    text: ""
                },
                {
                    ability_special: "bonus_hp_total",
                    text: "永久生命上限："
                }
            ],
            name: "盛宴",
            description: "噬魂鬼每次攻击时会根据目标最大生命值的一定百分比造成伤害，同时获得治疗。使噬魂鬼可以攻击{creep_deny_percent}%生命值以下的友方小兵。噬魂鬼每击杀一个非英雄单位或一名英雄都会获得永久生命上限。",
            lore: "从德瓦克的监狱中逃离后，奈克斯就靠着吞噬那些挡路的倒霉蛋的血肉维持生命。",
            notes: [
                "对友军和敌人有效。对肉山无效。",
                "回复量与造成伤害相互独立。",
                "与其他吸血类效果完全叠加。",
                "破坏会使技能无法获得新的叠加效果。",
                "破坏不会使现有叠加效果提供的加成失效。"
            ]
        },
        {
            ability_classname: "imba_life_stealer_open_wounds",
            ability_specials: [
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "slow_steps",
                    text: ""
                },
                {
                    ability_special: "heal_percent",
                    text: "%生命吸取："
                },
                {
                    ability_special: "max_health_as_damage_pct",
                    text: ""
                },
                {
                    ability_special: "spread_radius",
                    text: ""
                },
                {
                    ability_special: "slow_step_pct_of_max",
                    text: ""
                },
                {
                    ability_special: "slow_tooltip",
                    text: "%最大减速："
                }
            ],
            name: "撕裂伤口",
            description: "噬魂鬼撕裂一个敌方单位，减缓受害者的移动速度，并使所有友军在攻击该单位时根据造成的伤害回复一定比例的生命。所有伤害都有回复效果，包括技能的伤害。受害者在持续时间内逐渐恢复移动速度。",
            lore: "新鲜的伤口和鲜血的芳香通常能引来清道夫清理善后。",
            notes: [
                "撕裂伤口的减速有8个独立的阶段：50{/50}/40{/30}/20{/10}/10{/10}，每过一秒就会进入下个阶段，减速效果不断降低。",
                "与其他吸血类效果完全叠加。"
            ]
        },
        {
            ability_classname: "imba_life_stealer_ghoul_frenzy",
            ability_specials: [
                {
                    ability_special: "movement_speed_bonus",
                    text: "%移动速度加成："
                },
                {
                    ability_special: "attack_speed_bonus",
                    text: "攻击速度加成："
                }
            ],
            name: "尸鬼狂怒",
            description: "被动提升噬魂鬼的移动和攻击速度。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_life_stealer_infest",
            ability_specials: [
                {
                    ability_special: "radius",
                    text: "伤害范围："
                },
                {
                    ability_special: "damage",
                    text: "伤害："
                },
                {
                    ability_special: "bonus_movement_speed",
                    text: "%移动速度："
                },
                {
                    ability_special: "bonus_health",
                    text: "额外生命值："
                },
                {
                    ability_special: "self_regen",
                    text: "%自身最大生命值回复："
                },
                {
                    ability_special: "infest_duration_enemy",
                    text: ""
                },
                {
                    ability_special: "AbilityCastRange",
                    text: ""
                },
                {
                    ability_special: "attack_rate_enemy",
                    text: ""
                },
                {
                    ability_special: "AbilityCooldown",
                    text: ""
                },
                {
                    ability_special: "open_wounds_duration_pct",
                    text: ""
                }
            ],
            name: "感染",
            description: "噬魂鬼进入目标单位的身体，无法被察觉，而且自身在体内时每秒恢复最大生命值的一定百分比。接着可以从宿主体内现身，对周围所有敌方单位造成伤害。如果被感染单位是敌方非英雄单位或中立生物，噬魂鬼可以控制其进行移动和攻击。无法对敌方英雄生效。\\n\\n驱散类型：弱驱散",
            lore: "奈克斯通过寄生吞噬宿主的生命之血，使他的不洁之力恢复如初。",
            shard_description: "感染现身时会对伤害范围内的敌人施加{bonus_open_wounds_duration_pct}%持续时间的撕裂伤口。",
            scepter_description: "提升施法距离并且冷却时间降低至{bonus_AbilityCooldown}秒。感染可以对敌方英雄施放，持续时间较短，将他们缴械，并在他们体内发动攻击，同时提升噬魂鬼的恢复速率。",
            notes: [
                "噬魂鬼在感染一个单位期间能够从周围死亡的单位身上获得经验。",
                "被感染控制的单位会获得感染的移动速度加成。",
                "2级和3级感染可以对远古生物使用。",
                "不会触发法术反弹。"
            ]
        },
        {
            ability_classname: "imba_life_stealer_assimilate",
            ability_specials: [
                {
                    ability_special: "damage",
                    text: "爆发伤害："
                },
                {
                    ability_special: "radius",
                    text: "爆发范围："
                },
                {
                    ability_special: "order_lock_duration",
                    text: ""
                }
            ],
            name: "吸收",
            description: "噬魂鬼吞下友方目标，使其藏于自己的体内。被吸收的单位将享受噬魂鬼的回复效果。被吸收的英雄离开噬魂鬼时会突然现身，对周围敌人造成伤害。\\n\\n驱散类型：强驱散",
            lore: "噬魂鬼怎能抗拒品尝队友的机会？",
            notes: []
        },
        {
            ability_classname: "imba_life_stealer_assimilate_eject",
            ability_specials: [
                {
                    ability_special: "damage_tooltip",
                    text: "爆发伤害："
                },
                {
                    ability_special: "radius_tooltip",
                    text: "爆发范围："
                }
            ],
            name: "喷吐",
            description: "吐出吸收的英雄，对周围敌人造成伤害。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_life_stealer_consume",
            ability_specials: [],
            name: "吞灭",
            description: "噬魂鬼从宿主身体内部吃掉宿主，同时突然现身。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_life_stealer_control",
            ability_specials: [],
            name: "控制",
            description: "噬魂鬼掌控了宿主身体里的神经系统，使他可以在体内下达移动和攻击的指令。受控制的单位与噬魂鬼的移动速度相同。不可对英雄使用。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_life_stealer_corpse_eater",
            ability_specials: [
                {
                    ability_special: "bonus_hp_per_hero",
                    text: ""
                },
                {
                    ability_special: "bonus_hp_per_creep",
                    text: ""
                }
            ],
            name: "噬尸鬼",
            description: "噬魂鬼每击杀一个非英雄单位就会获得{bonus_hp_per_creep}点生命上限，每击杀一名英雄就会获得{bonus_hp_per_hero}点生命上限。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_life_stealer_empty_1",
            ability_specials: [],
            name: "",
            description: "",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_life_stealer_empty_2",
            ability_specials: [],
            name: "",
            description: "",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_life_stealer_empty_3",
            ability_specials: [],
            name: "",
            description: "",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_life_stealer_empty_4",
            ability_specials: [],
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
                    talent_classname: "special_bonus_unique_imba_lifestealer",
                    name: "+{s:bonus_duration}秒 狂暴持续时间"
                },
                {
                    talent_classname: "special_bonus_unique_imba_lifestealer_2",
                    name: "+{s:bonus_movement_speed_bonus}% 尸鬼狂怒移动速度"
                },
                {
                    talent_classname: "special_bonus_unique_imba_lifestealer_3",
                    name: "+{s:bonus_hp_damage_percent}% 盛宴吸血/伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_lifestealer_4",
                    name: "+{s:bonus_slow_tooltip}% 撕裂伤口减速"
                },
                {
                    talent_classname: "special_bonus_unique_imba_lifestealer_5",
                    name: "+{s:bonus_attack_speed_bonus} 尸鬼狂怒攻击速度"
                },
                {
                    talent_classname: "special_bonus_unique_imba_lifestealer_6",
                    name: "+{s:bonus_heal_percent}% 撕裂伤口吸取生命"
                },
                {
                    talent_classname: "special_bonus_unique_imba_lifestealer_infest_damage",
                    name: "+{s:bonus_damage} 感染伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_lifestealer_infest_target_bonus",
                    name: "+{s:bonus_bonus_movement_speed}% 感染目标移速/生命"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "life_stealer_facets_imba_1",
            name: "",
            description: ""
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_life_stealer_feast",
            name: "盛宴",
            description: "噬尸鬼。获得{MODIFIER_PROPERTY_HEALTH_BONUS}点额外生命。"
        },
        {
            modifier_classname: "modifier_imba_life_stealer_corpse_eater",
            name: "噬尸鬼",
            description: "获得了{MODIFIER_PROPERTY_HEALTH_BONUS}点额外生命。"
        },
        {
            modifier_classname: "modifier_imba_life_stealer_infest",
            name: "正在感染一个宿主"
        },
        {
            modifier_classname: "modifier_imba_life_stealer_infest_enemy_hero",
            name: "被感染",
            description: "你被一名敌方英雄感染。"
        },
        {
            modifier_classname: "modifier_imba_life_stealer_rage",
            name: "狂暴",
            description: "获得减益免疫。"
        },
        {
            modifier_classname: "modifier_imba_life_stealer_unfettered",
            name: "肆意狂怒",
            description: "获得{MODIFIER_PROPERTY_STATUS_RESISTANCE_STACKING}%状态抗性和{MODIFIER_PROPERTY_MAGICAL_RESISTANCE_BONUS}%魔法抗性。"
        },
        {
            modifier_classname: "modifier_imba_life_stealer_open_wounds",
            name: "撕裂伤口",
            description: "移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%"
        },
        {
            modifier_classname: "modifier_imba_life_stealer_ghoul_frenzy_slow",
            name: "尸鬼狂怒",
            description: "移动速度被减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。"
        },
        {
            modifier_classname: "modifier_imba_life_stealer_assimilate",
            name: "被吸收",
            description: "潜藏在噬魂鬼体内。共享噬魂鬼受到的治疗效果。\\n\\n移动，施放任何技能或点击此图标都会使英雄从噬魂鬼体内现身，并对周围敌人造成伤害。"
        }
    ]
};