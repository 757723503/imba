import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_brewmaster_thunder_clap",
            ability_specials: [
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "damage",
                    text: "伤害："
                },
                {
                    ability_special: "movement_slow",
                    text: "%移动速度减缓："
                },
                {
                    ability_special: "attack_speed_slow",
                    text: "攻击速度降低："
                },
                {
                    ability_special: "duration",
                    text: "持续时间："
                }
            ],
            name: "雷霆一击",
            description: "猛击地面，造成伤害并降低附近敌方单位的移动速度和攻击速度。",
            lore: "曼吉克斯巨大酒桶的一击标志着庆典的开始。",
            notes: []
        },
        {
            ability_classname: "imba_brewmaster_drunken_haze",
            ability_specials: [
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "movement_slow",
                    text: "%移动速度减缓："
                },
                {
                    ability_special: "miss_chance",
                    text: "%丢失概率："
                }
            ],
            name: "醉酒云雾",
            description: "用酒精浸透目标，使其移动速度降低，并且攻击有一定概率不能命中。",
            lore: "奥尤社解决所有问题的方法——再喝一轮！",
            notes: [
                "醉酒云雾可以被躲避。"
            ]
        },
        {
            ability_classname: "imba_brewmaster_cinder_brew",
            ability_specials: [
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "total_ignite_damage",
                    text: "总燃烧伤害："
                },
                {
                    ability_special: "movement_slow",
                    text: "%移动速度减缓："
                },
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "extra_duration",
                    text: ""
                },
                {
                    ability_special: "projectile_speed",
                    text: "酒桶速度："
                },
                {
                    ability_special: "projectile_width",
                    text: ""
                },
                {
                    ability_special: "barrel_width",
                    text: ""
                },
                {
                    ability_special: "barrel_impact_damage",
                    text: "酒桶撞击伤害："
                },
                {
                    ability_special: "AbilityCastRange",
                    text: ""
                },
                {
                    ability_special: "min_movement",
                    text: ""
                },
                {
                    ability_special: "max_movement",
                    text: ""
                }
            ],
            name: "余烬佳酿",
            description: "使自身和一片区域被烈酒浸透，敌方单位移动变慢，受到魔法或纯粹伤害后还将被点燃。点燃时持续时间增加{extra_duration}秒。酒仙浸满佳酿后，他的醉拳拳法威力更大。造成或受到魔法伤害都会使酒仙的浸酒持续时间延长。",
            lore: "奥尤社解决所有问题的方法——再喝一轮！",
            notes: []
        },
        {
            ability_classname: "imba_brewmaster_drunken_brawler",
            ability_specials: [
                {
                    ability_special: "dodge_chance",
                    text: ""
                },
                {
                    ability_special: "crit_chance",
                    text: ""
                },
                {
                    ability_special: "active_multiplier",
                    text: ""
                },
                {
                    ability_special: "crit_multiplier",
                    text: ""
                },
                {
                    ability_special: "attack_speed",
                    text: ""
                },
                {
                    ability_special: "magic_resist",
                    text: ""
                },
                {
                    ability_special: "armor",
                    text: ""
                },
                {
                    ability_special: "movespeed",
                    text: ""
                },
                {
                    ability_special: "slow_duration",
                    text: ""
                },
                {
                    ability_special: "bonus_move_speed",
                    text: ""
                },
                {
                    ability_special: "bonus_status_resist",
                    text: ""
                }
            ],
            name: "醉拳",
            description: "酒仙可以根据操控的元素来切换拳法，获得被动加成，加成效果在自身浸满余烬佳酿后还将提升。\\n<font color=\\",
            lore: "曼吉克斯赢得奥尤社的酒仙称号的同时，也确立了他在精通醉拳方面的地位。",
            notes: [
                "与其他闪避效果为非线性叠加。"
            ]
        },
        {
            ability_classname: "imba_brewmaster_belligerent",
            ability_specials: [
                {
                    ability_special: "damage_pct",
                    text: ""
                },
                {
                    ability_special: "damage_duration_split",
                    text: ""
                },
                {
                    ability_special: "damage_duration_respawn",
                    text: ""
                }
            ],
            name: "好战分子",
            description: "酒仙从元素分离中恢复或者复活后都会获得{damage_pct}{额外攻击力，分别持续}damage_duration_split{和}damage_duration_respawn%秒。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_brewmaster_primal_split",
            ability_specials: [
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "split_duration",
                    text: ""
                },
                {
                    ability_special: "tooltip_earth_brewling_hp",
                    text: "<font color=\\"
                },
                {
                    ability_special: "tooltip_storm_brewling_hp",
                    text: "<font color=\\"
                },
                {
                    ability_special: "tooltip_fire_brewling_hp",
                    text: "<font color=\\"
                },
                {
                    ability_special: "tooltip_void_brewling_hp",
                    text: "<font color=\\"
                },
                {
                    ability_special: "bonus_brewling_hp",
                    text: ""
                },
                {
                    ability_special: "bonus_damage",
                    text: ""
                },
                {
                    ability_special: "give_brawler_passive",
                    text: ""
                }
            ],
            name: "元素分离",
            description: "酒仙分裂成元素，产生4个各有所长的战士，生存能力极强。只要其中任何一个在召唤时间结束后存活下来，酒仙就能重生。",
            lore: "没有人清楚曼吉克斯是否注意到自己和自然之间强大的连结，因为这总是发生在他醉得不省人事之时。",
            scepter_description: "元素分离拥有2点能量点数。而且可以随时中止。充能时间与原来的冷却时间相同。",
            notes: [
                "大地战士将继承酒仙的所有光环，以及真视宝石的真视效果。",
                "烈火战士拥有相位移动的能力。",
                "技能结束后，酒仙会根据大地→狂风→烈火的顺序选择未阵亡的元素重生。"
            ]
        },
        {
            ability_classname: "imba_brewmaster_primal_split_cancel",
            ability_specials: [],
            name: "元素分离中止",
            description: "中止元素分离。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_brewmaster_primal_companion",
            ability_specials: [
                {
                    ability_special: "cooldown_on_death",
                    text: ""
                },
                {
                    ability_special: "cooldown_on_take_damage",
                    text: ""
                }
            ],
            name: "元素伙伴",
            description: "根据酒仙的当前醉拳拳法制造一个元素战士。<br><br>如果当前的元素战士受到来自敌方英雄或者英雄控制单位的伤害，{cooldown_on_take_damage}秒内无法召唤新的元素战士。如果元素战士阵亡，技能进入{cooldown_on_death}秒的冷却状态。<br><br>同一时间只能存在一个元素战士。如果酒仙使用元素分离，现有的元素战士将会消失。",
            lore: "曼吉克斯不按规矩行事，但他隐约记得一位老师傅沉思道，只要能凑出一个酒友总好过独自喝闷酒。",
            notes: []
        },
        {
            ability_classname: "imba_brewmaster_earth_hurl_boulder",
            ability_specials: [
                {
                    ability_special: "damage",
                    text: "伤害："
                },
                {
                    ability_special: "duration",
                    text: "眩晕时间："
                },
                {
                    ability_special: "speed",
                    text: ""
                }
            ],
            name: "投掷巨石",
            description: "对一个单位投掷巨石，造成伤害并使他眩晕。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_brewmaster_void_astral_pulse",
            ability_specials: [
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "slow",
                    text: "%移动速度减缓："
                }
            ],
            name: "灵体脉冲",
            description: "对周围敌人造成缴械和减速。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_brewmaster_earth_spell_immunity",
            ability_specials: [
                {
                    ability_special: "magic_resist",
                    text: ""
                }
            ],
            name: "减益免疫",
            description: "免疫负面效果。魔法抗性提升{magic_resist}%。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_brewmaster_earth_pulverize",
            ability_specials: [
                {
                    ability_special: "bonus_building_damage",
                    text: "对建筑额外伤害："
                }
            ],
            name: "粉碎击",
            description: "对建筑物造成额外伤害。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_brewmaster_storm_dispel_magic",
            ability_specials: [
                {
                    ability_special: "damage",
                    text: "对召唤单位伤害："
                },
                {
                    ability_special: "radius",
                    text: "作用范围："
                }
            ],
            name: "驱散魔法",
            description: "驱散区域内大部分增益或负面效果并对召唤单位造成伤害。\\n\\n驱散类型：弱驱散",
            lore: "",
            notes: [
                "可以对无敌单位施放。"
            ]
        },
        {
            ability_classname: "imba_brewmaster_storm_cyclone",
            ability_specials: [
                {
                    ability_special: "duration_hero",
                    text: "对英雄持续时间："
                },
                {
                    ability_special: "duration_unit",
                    text: "对非英雄持续时间："
                }
            ],
            name: "龙卷风",
            description: "用龙卷风困住一个单位，将其从战场中隔离出去。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_brewmaster_storm_wind_walk",
            ability_specials: [
                {
                    ability_special: "bonus_damage",
                    text: "额外伤害："
                },
                {
                    ability_special: "bonus_movement_speeed",
                    text: "移动速度加成："
                },
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "fade_time",
                    text: ""
                }
            ],
            name: "疾风步",
            description: "暂时进入隐身状态。隐身时有移动速度加成，破隐一击有额外伤害。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_brewmaster_fire_permanent_immolation",
            ability_specials: [
                {
                    ability_special: "damage",
                    text: "每秒伤害："
                },
                {
                    ability_special: "radius",
                    text: "作用范围："
                }
            ],
            name: "永久献祭",
            description: "烧灼附近的敌方单位。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_brewmaster_fire_phase",
            ability_specials: [
                {
                    ability_special: "status_resistance",
                    text: "%状态抗性："
                }
            ],
            name: "永久相位",
            description: "向元素战士提供相位移动状态和状态抗性加成。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_brewmaster_void_astral_pull",
            ability_specials: [
                {
                    ability_special: "AbilityCastRange",
                    text: ""
                },
                {
                    ability_special: "damage",
                    text: "伤害："
                },
                {
                    ability_special: "pull_distance",
                    text: "距离："
                },
                {
                    ability_special: "pull_duration",
                    text: "持续时间："
                }
            ],
            name: "灵体牵引",
            description: "把目标（敌我皆可）和太虚战士朝目标方向牵引。敌人到达时会受到伤害。",
            lore: "",
            notes: []
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_brewmaster",
                    name: "+{s:bonus_bonus_brewling_hp} 元素战士生命"
                },
                {
                    talent_classname: "special_bonus_unique_imba_brewmaster_2",
                    name: "+{s:bonus_bonus_damage} 元素战士攻击力"
                },
                {
                    talent_classname: "special_bonus_unique_imba_brewmaster_4",
                    name: "余烬佳酿点燃时施加恐惧",
                    description: "持续1.5秒。"
                },
                {
                    talent_classname: "special_bonus_unique_imba_brewmaster_5",
                    name: "+{s:bonus_total_ignite_damage}% 余烬佳酿伤害/持续时间"
                },
                {
                    talent_classname: "special_bonus_unique_imba_brewmaster_6",
                    name: "元素战士获得醉拳被动"
                },
                {
                    talent_classname: "special_bonus_unique_imba_brewmaster_7",
                    name: "+{s:bonus_radius} 雷霆一击范围"
                },
                {
                    talent_classname: "special_bonus_unique_imba_brewmaster_8",
                    name: "+{s:bonus_active_multiplier} 醉拳浸酒后加成倍数"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "brewmaster_facets_imba_1",
            name: "",
            description: ""
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_brewmaster_belligerent_damage",
            name: "好战分子",
            description: "元素分离或者复活后攻击力提升{MODIFIER_PROPERTY_DAMAGEOUTGOING_PERCENTAGE}%。"
        },
        {
            modifier_classname: "modifier_imba_brewmaster_thunder_clap",
            name: "雷霆一击",
            description: "移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%，攻击速度降低{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}。"
        },
        {
            modifier_classname: "modifier_imba_brewmaster_drunken_haze",
            name: "醉酒云雾",
            description: "移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%并有{MODIFIER_PROPERTY_MISS_PERCENTAGE}%概率攻击不能命中。"
        },
        {
            modifier_classname: "modifier_imba_brewmaster_drunken_brawler",
            name: "醉拳",
            description: "获得额外几率闪避攻击和致命一击；移动速度不断变化。"
        },
        {
            modifier_classname: "modifier_imba_brewmaster_earth_pulverize",
            name: "粉碎击",
            description: "对建筑物造成额外伤害。"
        },
        {
            modifier_classname: "modifier_imba_brewmaster_earth_spell_immunity",
            name: "减益免疫",
            description: "对大多数技能免疫"
        },
        {
            modifier_classname: "modifier_imba_brewmaster_storm_wind_walk",
            name: "疾风步",
            description: "隐身，移动速度提升{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。"
        },
        {
            modifier_classname: "modifier_imba_brewmaster_storm_cyclone",
            name: "龙卷风",
            description: "不会受到伤害，无法行动。"
        },
        {
            modifier_classname: "modifier_imba_brewmaster_fire_permanent_immolation",
            name: "永久献祭",
            description: "烧灼造成每秒{MODIFIER_PROPERTY_TOOLTIP}点伤害。"
        },
        {
            modifier_classname: "modifier_imba_brewmaster_primal_split_duration",
            name: "元素分离"
        },
        {
            modifier_classname: "modifier_imba_brewmaster_void_void_strike",
            name: "虚无打击"
        },
        {
            modifier_classname: "modifier_imba_brewmaster_void_void_strike_description",
            name: "受酒仙的攻击特效影响。"
        },
        {
            modifier_classname: "modifier_imba_brewmaster_void_astral_pulse",
            name: "灵体脉冲"
        },
        {
            modifier_classname: "modifier_imba_brewmaster_void_astral_pulse_description",
            name: "被缴械，移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。"
        },
        {
            modifier_classname: "modifier_imba_brewmaster_void_brawler_slow",
            name: "虚无拳法减速",
            description: "移动速度被减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。"
        },
        {
            modifier_classname: "modifier_imba_brewmaster_cinder_brew",
            name: "余烬佳酿",
            description: "移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。受到技能伤害时将被点燃。"
        },
        {
            modifier_classname: "modifier_imba_brewmaster_brew_up",
            name: "浸满佳酿",
            description: "醉拳拳法被烈酒提升。"
        },
        {
            modifier_classname: "modifier_imba_brewmaster_cinder_brew_active",
            name: "余烬佳酿点燃效果",
            description: "持续受到伤害。"
        },
        {
            modifier_classname: "modifier_imba_brewmaster_fear",
            name: "余烬佳酿恐惧效果",
            description: "被恐惧。"
        },
        {
            modifier_classname: "modifier_imba_brewmaster_void_astral_pull_movement",
            name: "灵体牵引",
            description: "被太虚战士牵引。"
        },
        {
            modifier_classname: "modifier_imba_brewmaster_drunken_brawler_passive",
            name: "醉拳"
        }
    ]
};