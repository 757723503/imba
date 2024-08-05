import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_death_prophet_carrion_swarm",
            ability_specials: [
                {
                    ability_special: "damage",
                    text: "伤害："
                },
                {
                    ability_special: "AbilityCooldown",
                    text: ""
                },
                {
                    ability_special: "start_radius",
                    text: ""
                },
                {
                    ability_special: "end_radius",
                    text: ""
                },
                {
                    ability_special: "range",
                    text: "施法距离："
                },
                {
                    ability_special: "speed",
                    text: ""
                },
                {
                    ability_special: "slow_percent",
                    text: ""
                },
                {
                    ability_special: "slow_duration",
                    text: ""
                }
            ],
            name: "地穴虫群",
            description: "召唤一群食腐虫在死亡先知面前的敌人中肆虐。",
            lore: "克萝贝露丝在鬼门关的来来回回聚集了一大群被诅咒的生物。",
            notes: [
                "最远能伤害1110距离外的单位。",
                "不会触发法术抵抗或法术反弹。"
            ]
        },
        {
            ability_classname: "imba_death_prophet_silence",
            ability_specials: [
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "projectile_speed",
                    text: ""
                },
                {
                    ability_special: "movement_slow",
                    text: "%移动速度减缓："
                },
                {
                    ability_special: "damage_per_second",
                    text: ""
                },
                {
                    ability_special: "tick_interval",
                    text: ""
                }
            ],
            name: "沉默魔法",
            description: "放出一个弹道，阻止目标区域内的敌人施放魔法。",
            lore: "透过她敌人的命运之纱，克萝贝露丝看到的是沉默的未来。",
            notes: [
                "不能阻止使用物品。"
            ]
        },
        {
            ability_classname: "imba_death_prophet_witchcraft",
            ability_specials: [
                {
                    ability_special: "movement_speed_pct_per_level",
                    text: ""
                },
                {
                    ability_special: "cooldown_reduction_pct_per_level",
                    text: ""
                },
                {
                    ability_special: "movement_speed_tooltip",
                    text: ""
                },
                {
                    ability_special: "cooldown_reduction_tooltip",
                    text: ""
                }
            ],
            name: "",
            description: "",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_death_prophet_spirit_siphon",
            ability_specials: [
                {
                    ability_special: "damage",
                    text: "伤害："
                },
                {
                    ability_special: "damage_pct",
                    text: ""
                },
                {
                    ability_special: "haunt_duration",
                    text: "持续时间："
                },
                {
                    ability_special: "siphon_buffer",
                    text: ""
                },
                {
                    ability_special: "AbilityChargeRestoreTime",
                    text: ""
                },
                {
                    ability_special: "shard_bonus_charges",
                    text: ""
                },
                {
                    ability_special: "shard_fear_duration",
                    text: ""
                },
                {
                    ability_special: "shard_consecutive_siphon_duration",
                    text: ""
                }
            ],
            name: "吸魂巫术",
            description: "创造一个灵魂连接，将死亡先知与一个敌方单位相连。每秒吸取生命值。",
            lore: "",
            shard_description: "吸魂巫术的能量点数提升{shard_bonus_charges}点，敌人连续{shard_consecutive_siphon_duration}秒受到吸魂巫术作用后会被恐惧{shard_fear_duration}秒。",
            notes: [
                "多个连接不能同时作用于一个目标。"
            ]
        },
        {
            ability_classname: "imba_death_prophet_exorcism",
            ability_specials: [
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "spirits",
                    text: "恶灵数量："
                },
                {
                    ability_special: "spirit_speed",
                    text: ""
                },
                {
                    ability_special: "max_distance",
                    text: ""
                },
                {
                    ability_special: "give_up_distance",
                    text: ""
                },
                {
                    ability_special: "min_damage",
                    text: ""
                },
                {
                    ability_special: "max_damage",
                    text: ""
                },
                {
                    ability_special: "hero_spirit_min_damage",
                    text: "英雄灵魂最低伤害："
                },
                {
                    ability_special: "hero_spirit_max_damage",
                    text: "英雄灵魂最高伤害："
                },
                {
                    ability_special: "heal_percent",
                    text: "%生命回复："
                },
                {
                    ability_special: "average_damage",
                    text: "恶灵攻击力："
                },
                {
                    ability_special: "ghost_spawn_rate",
                    text: ""
                },
                {
                    ability_special: "scepter_movespeed_slow",
                    text: "%移动速度减缓："
                },
                {
                    ability_special: "scepter_movespeed_debuff_duration",
                    text: "减速持续时间："
                },
                {
                    ability_special: "scepter_spirit_life_duration",
                    text: ""
                },
                {
                    ability_special: "scepter_spirit_bonus_damage",
                    text: "%恶灵额外伤害："
                },
                {
                    ability_special: "movement_bonus",
                    text: "%开启后移动速度加成："
                }
            ],
            name: "驱使恶灵",
            description: "释放恶灵偷走敌方单位和建筑的生命。恶灵需要回到她身上才能再次攻击。持续时间结束后，死亡先知根据造成的伤害量，获得一定比例的治疗。对建筑造成50%{伤害。持续}abilityduration%秒。<br/>开启后会提升死亡先知的移动速度。",
            lore: "伴随着无数次的死亡，她前世死亡幻化出的女妖们总是萦绕于现世。",
            scepter_description: "敌人受到死亡先知的技能作用，或被死亡先知攻击时，会有一只恶灵飞出攻击敌人，造成减速和高出平常的伤害，再返回使自身回复生命。",
            notes: [
                "作用范围代表死亡先知周围的恶灵寻找目标的范围。",
                "伤害格挡类技能不能减少恶灵伤害。"
            ]
        },
        {
            ability_classname: "imba_death_prophet_spirit_collector",
            ability_specials: [],
            name: "灵魂收集",
            description: "英雄的死亡会使下次驱使恶灵的威力增加。",
            lore: "",
            notes: [
                "每当英雄阵亡，死亡先知都会俘获他们的灵魂以备后用。她施放驱使恶灵后，每个被俘获的英雄灵魂都会取代标准的恶灵。英雄灵魂造成的伤害比标准恶灵更高。<br><br>驱使恶灵开启时有英雄阵亡的话，也会在可能的情况下让英雄灵魂取代标准恶灵。",
                "包括死亡先知自己的死亡。"
            ]
        },
        {
            ability_classname: "imba_death_prophet_innate_healing_mastery",
            ability_specials: [
                {
                    ability_special: "heal_amplify",
                    text: ""
                }
            ],
            name: "",
            description: "",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_death_prophet_mourning_ritual",
            ability_specials: [
                {
                    ability_special: "delay_pct",
                    text: ""
                },
                {
                    ability_special: "delay_time",
                    text: ""
                },
                {
                    ability_special: "damage_interval",
                    text: "伤害间隔："
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
                    talent_classname: "special_bonus_unique_imba_death_prophet",
                    name: "+{s:bonus_spirits} 驱使恶灵数量"
                },
                {
                    talent_classname: "special_bonus_unique_imba_death_prophet_2",
                    name: "-{s:bonus_AbilityCooldown}秒 地穴虫群冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_death_prophet_3",
                    name: "+{s:bonus_damage} 吸魂巫术伤害/治疗"
                },
                {
                    talent_classname: "special_bonus_unique_imba_death_prophet_5",
                    name: "-{s:value}秒 吸魂巫术充能"
                },
                {
                    talent_classname: "special_bonus_unique_imba_death_prophet_crypt_swarm_damage",
                    name: "+{s:bonus_damage} 地穴虫群伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_death_prophet_silence_aoe",
                    name: "+{s:bonus_radius} 沉默魔法范围"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "death_prophet_facets_imba_1",
            name: "",
            description: ""
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_death_prophet_spirit_siphon_charge_counter",
            name: "吸魂巫术能量点数",
            description: "只要有能量点数就能随时施放吸魂巫术。"
        },
        {
            modifier_classname: "modifier_imba_death_prophet_exorcism",
            name: "驱使恶灵"
        },
        {
            modifier_classname: "modifier_imba_death_prophet_exorcism_description",
            name: "施放恶灵来侵扰附近敌人。"
        },
        {
            modifier_classname: "modifier_imba_death_prophet_spirit_siphon_slow",
            name: "吸魂巫术",
            description: "灵魂与死亡先知相连接。"
        },
        {
            modifier_classname: "modifier_imba_death_prophet_silence",
            name: "被沉默"
        },
        {
            modifier_classname: "modifier_imba_death_prophet_silence_Descritipn",
            name: "被沉默，移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%"
        },
        {
            modifier_classname: "modifier_imba_death_prophet_spirit_siphon",
            name: "吸魂巫术",
            description: "通过灵魂链接吸取附近敌人的生命力。"
        },
        {
            modifier_classname: "modifier_imba_death_prophet_spirit_siphon_buff",
            name: "护甲吸取",
            description: "吸取敌人灵魂而提升的护甲。"
        },
        {
            modifier_classname: "modifier_imba_death_prophet_spirit_siphon_debuff",
            name: "护甲吸取",
            description: "吸魂巫术降低的护甲。"
        },
        {
            modifier_classname: "modifier_imba_death_prophet_spirit_siphon_fear",
            name: "吸魂巫术恐惧效果"
        },
        {
            modifier_classname: "modifier_imba_death_prophet_crypt_swarm_slow",
            name: "地穴虫群减速"
        },
        {
            modifier_classname: "modifier_imba_death_prophet_spirit_collector",
            name: "灵魂收集",
            description: "已俘获英雄灵魂，准备在施放驱使恶灵时释放。"
        },
        {
            modifier_classname: "modifier_imba_death_prophet_mourning_ritual",
            name: "哀悼仪式",
            description: "承受延后的伤害。"
        }
    ]
};