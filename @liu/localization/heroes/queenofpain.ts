import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_queenofpain_shadow_strike",
            ability_specials: [
                {
                    ability_special: "strike_damage",
                    text: "初始伤害："
                },
                {
                    ability_special: "duration_damage",
                    text: "每次伤害："
                },
                {
                    ability_special: "movement_slow",
                    text: "%移动速度减缓："
                },
                {
                    ability_special: "projectile_speed",
                    text: ""
                },
                {
                    ability_special: "attack_speed",
                    text: ""
                },
                {
                    ability_special: "damage_interval",
                    text: ""
                },
                {
                    ability_special: "duration_heal",
                    text: ""
                },
                {
                    ability_special: "generate_scream",
                    text: ""
                },
                {
                    ability_special: "aoe_radius",
                    text: ""
                },
                {
                    ability_special: "duration",
                    text: "持续时间："
                }
            ],
            name: "暗影突袭",
            description: "投出一把淬毒匕首，造成大量初始伤害，并持续造成后续伤害。中毒的单位移动速度被减缓，持续{duration}秒。每{damage_interval}秒会再造成一次伤害。",
            lore: "阿卡莎的淬毒匕首让她从受害者的痛苦中得到愉悦。",
            notes: [
                "受到作用的单位在持续时间内将逐秒缓慢地恢复至初始移动速度。",
                "受到暗影突袭作用的单位在生命值低于最大值25%时可以被队友反补。"
            ]
        },
        {
            ability_classname: "imba_queenofpain_blink",
            ability_specials: [
                {
                    ability_special: "min_blink_range",
                    text: ""
                },
                {
                    ability_special: "shard_damage",
                    text: ""
                },
                {
                    ability_special: "shard_duration",
                    text: ""
                },
                {
                    ability_special: "shard_aoe",
                    text: ""
                }
            ],
            name: "闪烁",
            description: "短距离传送，能让痛苦女王自由出入战场。",
            lore: "秘密中的女王名副其实，你无法从她的痛苦逃脱。",
            shard_description: "在痛苦女王的闪烁起点和落地点各释放一次音爆。在{shard_aoe}范围内造成{shard_damage}点伤害，并沉默{shard_duration}秒。",
            notes: [
                "闪烁可以躲避多种飞行过程中的攻击和技能弹道。"
            ]
        },
        {
            ability_classname: "imba_queenofpain_scream_of_pain",
            ability_specials: [
                {
                    ability_special: "area_of_effect",
                    text: "作用范围："
                },
                {
                    ability_special: "projectile_speed",
                    text: ""
                },
                {
                    ability_special: "damage",
                    text: "伤害："
                }
            ],
            name: "痛苦尖叫",
            description: "痛苦女王发出刺耳的尖叫，对周围敌人造成伤害。",
            lore: "阿卡莎那魅惑的声音吸引着敌人的同时也在偷取他们的灵魂。",
            notes: [
                "痛苦尖叫能作用隐身单位。",
                "痛苦尖叫无法被躲避。"
            ]
        },
        {
            ability_classname: "imba_queenofpain_sonic_wave",
            ability_specials: [
                {
                    ability_special: "starting_aoe",
                    text: ""
                },
                {
                    ability_special: "distance",
                    text: ""
                },
                {
                    ability_special: "final_aoe",
                    text: "声波最大范围："
                },
                {
                    ability_special: "speed",
                    text: ""
                },
                {
                    ability_special: "damage",
                    text: "伤害："
                },
                {
                    ability_special: "tick_rate",
                    text: ""
                },
                {
                    ability_special: "knockback_distance",
                    text: "击退距离："
                },
                {
                    ability_special: "knockback_duration",
                    text: ""
                },
                {
                    ability_special: "AbilityCooldown",
                    text: ""
                }
            ],
            name: "超声冲击波",
            description: "痛苦女王在她面前制造出强大的声波，对其轨迹上的所有敌人造成大量伤害，并将他们击退。",
            lore: "阿卡莎最为精致的折磨，她的音波让可怜的敌人从痛苦中得到解脱。",
            notes: [
                "超声冲击波最远能伤害1150距离外的单位。"
            ]
        },
        {
            ability_classname: "imba_queenofpain_masochist",
            ability_specials: [
                {
                    ability_special: "spell_amplification",
                    text: "%技能增强："
                },
                {
                    ability_special: "spell_amplification_per_level",
                    text: ""
                },
                {
                    ability_special: "damage_reflected_to_self",
                    text: "%技能伤害反弹回自身："
                }
            ],
            name: "受虐成狂",
            description: "痛苦女王拥有技能增强加成，但是她技能伤害的一定百分比会反弹回她自己身上。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_queenofpain_succubus",
            ability_specials: [
                {
                    ability_special: "spell_lifesteal",
                    text: ""
                },
                {
                    ability_special: "close_radius",
                    text: ""
                },
                {
                    ability_special: "max_radius",
                    text: ""
                },
                {
                    ability_special: "spell_lifesteal_close",
                    text: ""
                }
            ],
            name: "魅魔",
            description: "痛苦女王获得技能吸血，与敌人的距离越近效果越强。",
            lore: "",
            notes: [
                "距离为{max_radius}时效果最低，为{spell_lifesteal}{，距离在}close_radius{时提升至{spell_lifesteal_close}}。"
            ]
        },
        {
            ability_classname: "imba_queenofpain_bondage",
            ability_specials: [
                {
                    ability_special: "spell_reflect_pct",
                    text: ""
                },
                {
                    ability_special: "radius",
                    text: ""
                }
            ],
            name: "束手束脚",
            description: "每当{radius}范围内的敌人对痛苦女王造成技能伤害时，她就会反弹造成伤害的{spell_reflect_pct}%。",
            lore: "",
            notes: []
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_queen_of_pain_1",
                    name: "攻击暗影突袭下单位+{s:bonus_attack_speed} 攻速"
                },
                {
                    talent_classname: "special_bonus_unique_imba_queen_of_pain_2",
                    name: "+{s:bonus_damage} 痛苦尖叫伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_queen_of_pain_3",
                    name: "-{s:bonus_AbilityCooldown}秒 超声冲击波冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_queen_of_pain_4",
                    name: "-{s:bonus_damage_interval}秒 暗影突袭伤害间隔"
                },
                {
                    talent_classname: "special_bonus_unique_imba_queen_of_pain_6",
                    name: "-{s:value}秒 闪烁冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_queen_of_pain_7",
                    name: "+{s:bonus_damage} 超声冲击波伤害"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "queenofpain_facets_imba_1",
            name: "",
            description: ""
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_queenofpain_shadow_strike",
            name: "暗影突袭",
            description: "受到持续伤害并且移动速度被减缓 {MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%"
        },
        {
            modifier_classname: "modifier_imba_queenofpain_scream_of_pain_fear",
            name: "恐惧"
        },
        {
            modifier_classname: "modifier_imba_queenofpain_scream_of_pain_fear_description",
            name: "因痛苦尖叫恐惧"
        },
        {
            modifier_classname: "modifier_imba_queenofpain_sonic_wave_damage",
            name: "超声冲击波",
            description: "被超声冲击波折磨。"
        }
    ]
};