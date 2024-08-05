import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_abyssal_underlord_firestorm",
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
                    ability_special: "wave_duration",
                    text: ""
                },
                {
                    ability_special: "wave_count",
                    text: "风暴波数："
                },
                {
                    ability_special: "wave_damage",
                    text: "每波伤害："
                },
                {
                    ability_special: "wave_interval",
                    text: "每波间隔："
                },
                {
                    ability_special: "burn_damage",
                    text: "%烧灼最大生命值："
                },
                {
                    ability_special: "burn_interval",
                    text: ""
                },
                {
                    ability_special: "burn_duration",
                    text: "烧灼持续时间："
                },
                {
                    ability_special: "can_target_units",
                    text: ""
                },
                {
                    ability_special: "shard_wave_count_bonus",
                    text: "额外波数："
                },
                {
                    ability_special: "shard_wave_interval_reduction",
                    text: "%持续时间/伤害间隔减少："
                }
            ],
            name: "火焰风暴",
            description: "召唤数波火焰风暴攻击目标区域内的所有单位，并额外持续造成烧灼伤害。",
            lore: "征战的烈焰从深渊最黑暗的深处向外迸发。",
            shard_description: "火焰风暴可以对友军施放。施放后火焰风暴会跟随该英雄。火焰风暴的波数增加，伤害触发间隔/持续时间更短。",
            notes: []
        },
        {
            ability_classname: "imba_abyssal_underlord_pit_of_malice",
            ability_specials: [
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "pit_duration",
                    text: "深渊持续时间："
                },
                {
                    ability_special: "pit_interval",
                    text: "控制间隔："
                },
                {
                    ability_special: "pit_damage",
                    text: "控制伤害："
                },
                {
                    ability_special: "ensnare_duration",
                    text: "控制持续时间："
                },
                {
                    ability_special: "speed_bonus",
                    text: "%移动速度减缓："
                }
            ],
            name: "怨念深渊",
            description: "在目标区域制造致命的深渊；踏入深渊的敌方单位将受到伤害并且被缠绕。每个敌方单位每隔{pit_interval}秒才会再次受到作用。",
            lore: "扭曲成现实本身的接缝，维洛格罗斯昭然的仇恨让蔑视他意志的人动弹不得。",
            scepter_description: "提升怨念深渊的作用范围。",
            notes: []
        },
        {
            ability_classname: "imba_abyssal_underlord_atrophy_aura",
            ability_specials: [
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "damage_reduction_pct",
                    text: "%基础攻击力降低："
                },
                {
                    ability_special: "bonus_damage_from_creep",
                    text: "额外攻击力（小兵死亡）："
                },
                {
                    ability_special: "bonus_damage_from_hero",
                    text: "额外攻击力（英雄死亡）："
                },
                {
                    ability_special: "bonus_damage_duration",
                    text: "持续时间："
                },
                {
                    ability_special: "bonus_shared_by_allies_pct",
                    text: ""
                },
                {
                    ability_special: "cleave_damage_pct",
                    text: "%分裂伤害："
                },
                {
                    ability_special: "cleave_starting_width",
                    text: ""
                },
                {
                    ability_special: "cleave_angle",
                    text: ""
                },
                {
                    ability_special: "cleave_distance_base",
                    text: "分裂距离（基础）："
                },
                {
                    ability_special: "cleave_distance_per_stack",
                    text: "分裂距离（每层叠加）："
                }
            ],
            name: "衰退光环",
            description: "周围所有敌方单位遭到了削弱，损失部分基础攻击力。如果敌方英雄在光环范围内死亡，孽主将获得临时的额外攻击力加成。",
            lore: "光是站在孽主面前就能感受到自己的战意从灵魂里被榨干。",
            notes: [
                "被动会使攻击力降低光环失效，并且孽主无法获得新的叠加效果。"
            ]
        },
        {
            ability_classname: "imba_abyssal_underlord_dark_rift",
            ability_specials: [
                {
                    ability_special: "radius",
                    text: "传送作用范围："
                },
                {
                    ability_special: "teleport_delay",
                    text: "传送延迟："
                },
                {
                    ability_special: "scepter_health_bonus",
                    text: ""
                }
            ],
            name: "黑暗之门",
            description: "以友方单位或建筑作为目标地点打开黑暗的大门。经过短暂的延迟，孽主和附近所有友方英雄都将传送至目标地点。 黑暗之门在传送生效前可以取消。如果在技能生效前取消，或者目标单位死亡，黑暗之门都会进入冷却。",
            lore: "他们的到来全无征兆，王国曾经繁荣的地方只剩下烈火和血海。",
            notes: [
                "双击将传送至己方的泉水。"
            ]
        },
        {
            ability_classname: "imba_abyssal_underlord_cancel_dark_rift",
            ability_specials: [],
            name: "取消黑暗之门",
            description: "取消传送。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_abyssal_underlord_dark_portal",
            ability_specials: [
                {
                    ability_special: "AbilityCooldown",
                    text: "冷却时间："
                },
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "minimum_distance",
                    text: ""
                },
                {
                    ability_special: "spawn_pit_on_cast",
                    text: ""
                },
                {
                    ability_special: "warp_channel_duration",
                    text: ""
                },
                {
                    ability_special: "distance_from_fountain",
                    text: ""
                },
                {
                    ability_special: "dps",
                    text: ""
                },
                {
                    ability_special: "radius",
                    text: ""
                },
                {
                    ability_special: "underling_building_damage_reduction_tooltip",
                    text: ""
                }
            ],
            name: "恶魔之扉",
            description: "打开2个传送门，一个在孽主身旁，另一个在目标地点。英雄可以对一个传送门持续施法{warp_channel_duration}秒，传送至另一端。传送门之间的距离必须超过{minimum_distance}。<br><br>双击会传送至己方基地的泉水前。",
            lore: "他们的到来全无征兆，王国曾经繁荣的地方只剩下烈火和血海。",
            scepter_description: "在传送门两端各召唤一个怨念深渊。减少冷却时间。",
            notes: []
        },
        {
            ability_classname: "imba_abyssal_underlord_portal_warp",
            ability_specials: [
                {
                    ability_special: "animation_rate",
                    text: ""
                },
                {
                    ability_special: "stop_distance",
                    text: ""
                }
            ],
            name: "",
            description: "",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_abyssal_underlord_raid_boss",
            ability_specials: [
                {
                    ability_special: "damage_reduction",
                    text: "%承受伤害降低："
                },
                {
                    ability_special: "bonus_ms",
                    text: "%移动速度加成："
                },
                {
                    ability_special: "dark_portal_multiplier",
                    text: ""
                },
                {
                    ability_special: "buff_duration",
                    text: "加成持续时间："
                }
            ],
            name: "侵略大军",
            description: "友方英雄传送后会临时获得承受伤害降低和移动速度加成。友军通过恶魔之扉传送后会获得{dark_portal_multiplier}倍加成。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_abyssal_underlord_abyssal_horde",
            ability_specials: [
                {
                    ability_special: "warrior_health",
                    text: "战士/射手生命值："
                },
                {
                    ability_special: "warrior_damage",
                    text: "战士攻击力："
                },
                {
                    ability_special: "warrior_mana_feedback",
                    text: ""
                },
                {
                    ability_special: "warrior_mana_break_tooltip",
                    text: "战士法力损毁："
                },
                {
                    ability_special: "explosion",
                    text: "战士遗愿伤害："
                },
                {
                    ability_special: "archer_health",
                    text: ""
                },
                {
                    ability_special: "archer_damage",
                    text: "射手攻击力："
                },
                {
                    ability_special: "archer_aura_radius_tooltip",
                    text: ""
                },
                {
                    ability_special: "archer_move_speed",
                    text: "%射手光环移动速度："
                },
                {
                    ability_special: "underling_spawn_interval",
                    text: ""
                },
                {
                    ability_special: "underling_search_radius",
                    text: ""
                },
                {
                    ability_special: "hull_radius",
                    text: ""
                },
                {
                    ability_special: "gold_bounty",
                    text: ""
                },
                {
                    ability_special: "xp_bounty",
                    text: ""
                }
            ],
            name: "深渊大军",
            description: "穿过恶魔之扉后，在恶魔之扉持续时间内每{underling_spawn_interval}秒孽主就会召唤一个战士或一个射手来援助他。<br><br><font color='#c04048'>战士</font>每次攻击都会燃烧魔法，并且对击杀它的单位造成魔法伤害。<font color='#c04048'>射手</font>拥有被动移速和攻速光环。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_abyssal_underling_warrior_last_will",
            ability_specials: [
                {
                    ability_special: "explosion",
                    text: "伤害："
                }
            ],
            name: "遗愿",
            description: "对杀死死灵战士的单位造成伤害。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_abyssal_underling_warrior_mana_burn",
            ability_specials: [
                {
                    ability_special: "burn_amount",
                    text: "每次攻击损毁魔法："
                },
                {
                    ability_special: "burn_damage_conversion",
                    text: "%燃烧伤害："
                }
            ],
            name: "法力损毁",
            description: "每次攻击燃烧掉目标的魔法值，并造成相当于损毁魔法值一定百分比的伤害",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_abyssal_underling_archer_aoe",
            ability_specials: [
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "ms_bonus",
                    text: "%移动速度加成："
                },
                {
                    ability_special: "as_bonus",
                    text: ""
                }
            ],
            name: "射手光环",
            description: "提升周围单位的移动速度。",
            lore: "",
            notes: []
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_underlord",
                    name: "+{s:bonus_ensnare_duration}秒 怨念深渊缠绕"
                },
                {
                    talent_classname: "special_bonus_unique_imba_underlord_3",
                    name: "+{s:bonus_damage_reduction_pct}% 衰退光环降低/获得攻击力"
                },
                {
                    talent_classname: "special_bonus_unique_imba_underlord_4",
                    name: "+{s:bonus_burn_damage}% 火焰风暴烧灼伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_underlord_5",
                    name: "-{s:bonus_AbilityCooldown}秒 火焰风暴冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_underlord_6",
                    name: "怨念深渊造成{s:bonus_speed_bonus}%减速"
                },
                {
                    talent_classname: "special_bonus_unique_imba_underlord_7",
                    name: "+{s:bonus_bonus_ms}% 侵略大军移速加成/承伤降低"
                },
                {
                    talent_classname: "special_bonus_unique_imba_underlord_8",
                    name: "+{s:bonus_radius} 火焰风暴范围"
                },
                {
                    talent_classname: "special_bonus_unique_imba_underlord_9",
                    name: "恶魔之扉对{s:bonus_radius}范围内造成每秒{s:bonus_dps}伤害"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "abyssal_underlord_facets_imba_1",
            name: "",
            description: ""
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_abyssal_underlord_firestorm_burn",
            name: "火焰风暴",
            description: "持续受到伤害。"
        },
        {
            modifier_classname: "modifier_imba_abyssal_underlord_pit_of_malice_ensare",
            name: "怨念深渊",
            description: "被怨念深渊束缚，无法移动或闪烁。"
        },
        {
            modifier_classname: "modifier_imba_abyssal_underlord_atrophy_aura",
            name: "衰退光环",
            description: "减少附近敌人的基础攻击力。"
        },
        {
            modifier_classname: "modifier_imba_abyssal_underlord_atrophy_aura_effect",
            name: "衰退光环",
            description: "攻击力降低{MODIFIER_PROPERTY_BASEDAMAGEOUTGOING_PERCENTAGE}%。"
        },
        {
            modifier_classname: "modifier_imba_abyssal_underlord_atrophy_aura_dmg_buff_counter",
            name: "衰退光环",
            description: "获得{MODIFIER_PROPERTY_TOOLTIP}点额外攻击力。"
        },
        {
            modifier_classname: "modifier_imba_abyssal_underlord_atrophy_aura_scepter",
            name: "衰退光环",
            description: "获得额外攻击力。"
        },
        {
            modifier_classname: "modifier_imba_abyssal_underlord_dark_rift",
            name: "黑暗之门",
            description: "孽主正传送至本单位。"
        },
        {
            modifier_classname: "modifier_imba_abyssal_underlord_atrophy_aura_hero_permanent_buff",
            name: "衰退光环永久攻击力",
            description: "获得{MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE}点额外攻击力。"
        },
        {
            modifier_classname: "modifier_imba_abyssal_underlord_atrophy_aura_hero_permanent_buff_PostGame",
            name: "获得额外攻击力。"
        },
        {
            modifier_classname: "modifier_imba_abyssal_underlord_pit_of_malice_slow",
            name: "怨念深渊",
            description: "移动速度被减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%%。"
        }
    ]
};
