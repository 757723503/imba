import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_riki_poison_dart",
            ability_specials: [
                {
                    ability_special: "duration",
                    text: "昏迷时间："
                },
                {
                    ability_special: "damage",
                    text: "苏醒伤害："
                },
                {
                    ability_special: "movement_slow",
                    text: "%苏醒移动速度减缓："
                },
                {
                    ability_special: "debuff_duration",
                    text: "苏醒减速时间："
                },
                {
                    ability_special: "projectile_speed",
                    text: ""
                },
                {
                    ability_special: "wake_damage_limit",
                    text: "唤醒伤害临界值："
                }
            ],
            name: "昏睡飞镖",
            description: "向敌方目标发出一支毒镖，使其入睡。持续时间结束或目标受到的伤害超过一定数值后会苏醒。苏醒后受到伤害，移动速度被减缓。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_riki_smoke_screen",
            ability_specials: [
                {
                    ability_special: "AbilityDuration",
                    text: "持续时间："
                },
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "miss_rate",
                    text: "%落空概率："
                },
                {
                    ability_special: "block_targeting",
                    text: ""
                },
                {
                    ability_special: "armor_reduction",
                    text: ""
                }
            ],
            name: "烟幕",
            description: "丢下一个烟雾弹，沉默其中的敌人。烟雾中的敌人发动攻击，或者敌人攻击烟雾中的友军时都有几率攻击落空。",
            lore: "自从力丸在背叛之夜逃脱后，他就很看重利用朴素的烟幕来迷惑对手。",
            shard_description: "烟幕中的敌人护甲降低{armor_reduction}点，而且无法成为他们友军的目标。",
            notes: [
                "可以在绝杀秘技期间施放。",
                "不能阻止使用物品。"
            ]
        },
        {
            ability_classname: "imba_riki_blink_strike",
            ability_specials: [
                {
                    ability_special: "bonus_damage",
                    text: "额外伤害："
                },
                {
                    ability_special: "AbilityChargeRestoreTime",
                    text: ""
                },
                {
                    ability_special: "slow",
                    text: "减速持续时间："
                }
            ],
            name: "闪烁突袭",
            description: "传送到一个目标背后，如果是敌人对其造成短暂减速和额外伤害。",
            lore: "隐形刺客迅捷的动作让他的目标几乎不可能逃脱。",
            notes: [
                "力丸对敌人使用闪烁突袭后首次攻击将触发背刺。",
                "闪烁突袭的伤害在下次攻击前生效。",
                "可以对友方单位使用闪烁突袭，但是不会造成伤害。"
            ]
        },
        {
            ability_classname: "imba_riki_backstab",
            ability_specials: [
                {
                    ability_special: "fade_delay",
                    text: "渐隐时间："
                }
            ],
            name: "刀光谍影",
            description: "力丸遁入阴影，保持隐身状态。主动攻击敌人，力丸将会显形。",
            lore: "力丸来找你了。",
            notes: [
                "力丸的幻象也会有背刺的动作，但是不会造成额外伤害。"
            ]
        },
        {
            ability_classname: "imba_riki_innate_backstab",
            ability_specials: [
                {
                    ability_special: "damage_multiplier",
                    text: "敏捷伤害系数："
                },
                {
                    ability_special: "backstab_angle",
                    text: ""
                },
                {
                    ability_special: "bonus_xp_kill",
                    text: "击杀经验奖励："
                },
                {
                    ability_special: "bonus_xp_assist",
                    text: "助攻经验奖励："
                }
            ],
            name: "背刺",
            description: "力丸每次从背后攻击敌人时都会根据自身敏捷造成额外伤害。",
            lore: "",
            notes: [
                "反补友方单位时不会生效。"
            ]
        },
        {
            ability_classname: "imba_riki_permanent_invisibility",
            ability_specials: [
                {
                    ability_special: "fade_delay",
                    text: "渐隐时间："
                },
                {
                    ability_special: "movement_speed",
                    text: "移动速度："
                }
            ],
            name: "永久隐身",
            description: "力丸遁入阴影，保持隐身状态。主动攻击敌人，力丸将会显形。获得额外移动速度。",
            lore: "力丸来找你了。",
            notes: [
                "力丸在隐身时不会自动攻击敌人。",
                "力丸的幻象也会有背刺的动作，但是不会造成额外伤害。",
                "背刺的额外伤害无法闪避。"
            ]
        },
        {
            ability_classname: "imba_riki_tricks_of_the_trade",
            ability_specials: [
                {
                    ability_special: "AbilityCooldown",
                    text: ""
                },
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "attack_count",
                    text: "攻击次数："
                },
                {
                    ability_special: "damage_pct",
                    text: "%攻击伤害："
                },
                {
                    ability_special: "agility_pct",
                    text: "敏捷加成："
                },
                {
                    ability_special: "scepter_duration",
                    text: ""
                },
                {
                    ability_special: "scepter_attacks",
                    text: "攻击次数："
                },
                {
                    ability_special: "scepter_cast_range",
                    text: "施法距离："
                },
                {
                    ability_special: "dispel",
                    text: ""
                },
                {
                    ability_special: "creep_agility_multiplier",
                    text: ""
                }
            ],
            name: "绝杀秘技",
            description: "持续施法 - 力丸转移出现实位面，从背后随机攻击附近的随机敌方单位。期间他的攻击力降低，但是他的敏捷值大幅提升。",
            lore: "隐形刺客从不忌讳使用肮脏的战斗手法，尤其擅长从对手的背后发动攻击。",
            scepter_description: "提升施法距离、攻击次数并且可以对友方英雄施放，持续时间内藏在他们体内。每次额外攻击一个目标。",
            notes: [
                "施放后移动将中止技能效果。"
            ]
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_riki_1",
                    name: "+{s:bonus_damage_multiplier} 背刺敏捷系数"
                },
                {
                    talent_classname: "special_bonus_unique_imba_riki_2",
                    name: "+{s:bonus_agility_pct} 绝杀秘技敏捷提升"
                },
                {
                    talent_classname: "special_bonus_unique_imba_riki_3",
                    name: "-{s:value}秒 烟幕冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_riki_5",
                    name: "绝杀秘技施加弱驱散",
                    description: "被缠绕或束缚时可以施放"
                },
                {
                    talent_classname: "special_bonus_unique_imba_riki_6",
                    name: "-{s:bonus_AbilityCooldown}秒 绝杀秘技冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_riki_7",
                    name: "+{s:bonus_radius} 烟幕范围"
                },
                {
                    talent_classname: "special_bonus_unique_imba_riki_8",
                    name: "+{s:value}% 刀光谍影移动速度"
                },
                {
                    talent_classname: "special_bonus_unique_imba_riki_9",
                    name: "-{s:bonus_AbilityChargeRestoreTime}秒 闪烁突袭充能"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "riki_facets_imba_1",
            name: "",
            description: ""
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_riki_smoke_screen",
            name: "烟幕",
            description: "被沉默，{MODIFIER_PROPERTY_MISS_PERCENTAGE}%的攻击不能命中。"
        },
        {
            modifier_classname: "modifier_imba_riki_blink_strike_charge_counter",
            name: "闪烁突袭能量点数",
            description: "只要有能量点数就能随时施放闪烁突袭。"
        },
        {
            modifier_classname: "modifier_imba_riki_blinkstrike_slow",
            name: "闪烁突袭",
            description: "移动速度被减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%%。"
        },
        {
            modifier_classname: "modifier_imba_riki_dart",
            name: "昏睡飞镖",
            description: "被力丸的毒镖击昏。"
        },
        {
            modifier_classname: "modifier_imba_riki_poison_dart_debuff",
            name: "昏睡飞镖",
            description: "因头脑昏沉，移动速度被减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%%。"
        }
    ]
};