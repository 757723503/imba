import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_night_stalker_void",
            ability_specials: [
                {
                    ability_special: "damage",
                    text: "伤害："
                },
                {
                    ability_special: "duration_day",
                    text: "白天持续时间："
                },
                {
                    ability_special: "duration_night",
                    text: "夜晚持续时间："
                },
                {
                    ability_special: "movespeed_slow",
                    text: "%移动速度减缓："
                },
                {
                    ability_special: "attackspeed_slow",
                    text: "攻击速度降低："
                },
                {
                    ability_special: "vision_penalty",
                    text: "视野减少："
                },
                {
                    ability_special: "invisible_damage_pers",
                    text: "不可见时每秒伤害："
                },
                {
                    ability_special: "invisible_damage_tickrate",
                    text: ""
                },
                {
                    ability_special: "disable_vision",
                    text: ""
                }
            ],
            name: "虚空",
            description: "制造一个伤害性的虚空，对一个敌方单位造成减速及伤害，同时降低其视野。夜晚时虚空可以造成短暂眩晕，打断持续施法，并且持续时间更长。",
            lore: "巴拉那制造一个无限之夜的漩涡，将敌人猛烈地撕扯进永恒的黑暗。",
            notes: [
                "虚空在白天不会对敌人造成眩晕。"
            ]
        },
        {
            ability_classname: "imba_night_stalker_crippling_fear",
            ability_specials: [
                {
                    ability_special: "AbilityCooldown",
                    text: ""
                },
                {
                    ability_special: "duration_day",
                    text: "白天持续时间："
                },
                {
                    ability_special: "duration_night",
                    text: "夜晚持续时间："
                },
                {
                    ability_special: "mana_pct_cost",
                    text: "%魔法消耗："
                },
                {
                    ability_special: "mana_interval",
                    text: ""
                },
                {
                    ability_special: "toggled",
                    text: ""
                },
                {
                    ability_special: "radius",
                    text: "光环作用范围："
                },
                {
                    ability_special: "dps",
                    text: "每秒伤害："
                },
                {
                    ability_special: "tick_rate",
                    text: ""
                },
                {
                    ability_special: "death_refresh",
                    text: ""
                }
            ],
            name: "伤残恐惧",
            description: "暗夜魔王恐吓附近所有敌人，使他们在他身边时被沉默，并受到伤害。效果在夜晚持续更久。",
            lore: "对于那些不幸挡住他前路的可怜虫，巴拉那扭曲的喉咙在他们的脑海里挥之不去。",
            notes: []
        },
        {
            ability_classname: "imba_night_stalker_hunter_in_the_night",
            ability_specials: [
                {
                    ability_special: "bonus_movement_speed_pct_night",
                    text: "%移动速度提升："
                },
                {
                    ability_special: "bonus_attack_speed_night",
                    text: "攻击速度提升："
                },
                {
                    ability_special: "bonus_status_resist_night",
                    text: ""
                },
                {
                    ability_special: "shard_hp_restore_pct",
                    text: "%最大生命值恢复："
                },
                {
                    ability_special: "shard_mana_restore_pct",
                    text: "%最大魔法值恢复："
                },
                {
                    ability_special: "AbilityManaCost",
                    text: ""
                },
                {
                    ability_special: "shard_cooldown",
                    text: "冷却时间："
                },
                {
                    ability_special: "shard_cast_range",
                    text: "施法距离："
                }
            ],
            name: "暗夜猎影",
            description: "暗夜魔王在夜晚如鱼得水，攻击和移动都变得迅速。",
            lore: "巴拉那的狩猎技术随着夜晚降临大幅精进。",
            shard_description: "可以主动对一个普通单位施放暗夜猎影，将其秒杀并恢复暗夜魔王最大生命和魔法的一定百分比。在白天无法对远古生物施放。",
            notes: []
        },
        {
            ability_classname: "imba_night_stalker_darkness",
            ability_specials: [
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "bonus_damage",
                    text: "攻击力加成："
                }
            ],
            name: "黑暗飞升",
            description: "暗夜魔王遮住太阳，让夜晚立刻降临，使他的力量可以得到最大程度的发挥。在此期间暗夜魔王获得飞行能力和攻击力加成。拥有顺畅视野。",
            lore: "最强大的战士都变得害怕黑暗，真是个令人感到羞耻的场景。",
            notes: []
        },
        {
            ability_classname: "imba_night_stalker_heart_of_darkness",
            ability_specials: [
                {
                    ability_special: "hp_regen_during_night_pct",
                    text: ""
                },
                {
                    ability_special: "hp_regen_during_day_pct",
                    text: ""
                }
            ],
            name: "黑暗之心",
            description: "在夜晚期间，暗夜魔王的生命恢复提升{hp_regen_during_night_pct}{，而在白天会减少{hp_regen_during_day_pct}}。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_night_stalker_night_reign",
            ability_specials: [
                {
                    ability_special: "daytime_start",
                    text: ""
                },
                {
                    ability_special: "daytime_change",
                    text: ""
                },
                {
                    ability_special: "tooltip_nighttime_change",
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
                    talent_classname: "special_bonus_unique_imba_night_stalker",
                    name: "-{s:value}秒 黑暗飞升冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_night_stalker_2",
                    name: "+{s:bonus_bonus_attack_speed_night} 暗夜猎影攻击速度"
                },
                {
                    talent_classname: "special_bonus_unique_imba_night_stalker_3",
                    name: "+{s:bonus_bonus_damage} 黑暗飞升攻击力"
                },
                {
                    talent_classname: "special_bonus_unique_imba_night_stalker_4",
                    name: "+{s:bonus_damage} 虚空伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_night_stalker_7",
                    name: "+{s:bonus_duration}秒 黑暗飞升持续时间"
                },
                {
                    talent_classname: "special_bonus_unique_imba_night_stalker_hunter_status_resist",
                    name: "暗夜猎影+{s:bonus_bonus_status_resist_night}% 状态抗性"
                },
                {
                    talent_classname: "special_bonus_unique_imba_night_stalker_crippling_fear_damage",
                    name: "+{s:bonus_dps} 伤残恐惧每秒伤害"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "night_stalker_facets_imba_1",
            name: "",
            description: ""
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_night_stalker_void",
            name: "永夜虚无",
            description: "移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%，攻击速度降低{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}。视野降低{MODIFIER_PROPERTY_BONUS_NIGHT_VISION}。"
        },
        {
            modifier_classname: "modifier_imba_night_stalker_crippling_fear",
            name: "被沉默",
            description: "被沉默并持续受到伤害。"
        },
        {
            modifier_classname: "modifier_imba_night_stalker_crippling_fear_aura",
            name: "伤残恐惧",
            description: "对附近敌人造成沉默和伤害。"
        },
        {
            modifier_classname: "modifier_imba_night_stalker_darkness",
            name: "黑暗飞升",
            description: "暂时将白天变为黑夜。获得飞行能力，攻击力加成和顺畅视野。"
        },
        {
            modifier_classname: "modifier_imba_night_stalker_hunter_in_the_night_flight",
            name: "飞行",
            description: "无障碍飞行中。"
        },
        {
            modifier_classname: "modifier_imba_night_stalker_void_zone",
            name: "虚空地带",
            description: "所有技能都被强化为夜晚版本。"
        }
    ]
};