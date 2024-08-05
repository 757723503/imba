import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_naga_siren_mirror_image",
            ability_specials: [
                {
                    ability_special: "illusion_duration",
                    text: "镜像持续时间："
                },
                {
                    ability_special: "outgoing_damage",
                    text: ""
                },
                {
                    ability_special: "outgoing_damage_tooltip",
                    text: "%镜像攻击力："
                },
                {
                    ability_special: "incoming_damage",
                    text: ""
                },
                {
                    ability_special: "tooltip_incoming_damage_total_pct",
                    text: "%镜像承受伤害："
                },
                {
                    ability_special: "images_count",
                    text: "镜像数量："
                },
                {
                    ability_special: "invuln_duration",
                    text: ""
                }
            ],
            name: "镜像",
            description: "制造多个受娜迦海妖控制的镜像。\\n\\n驱散类型：弱驱散",
            lore: "司里希丝天生就很强大，并且众人皆知其难以追踪。",
            notes: [
                "娜迦海妖在施法时有{invuln_duration}秒的无敌时间，可以用来躲避眩晕和伤害。",
                "施放后，将会移除娜迦海妖身上大部分效果。",
                "施放时现有的镜像幻象将被摧毁。"
            ]
        },
        {
            ability_classname: "imba_naga_siren_ensnare",
            ability_specials: [
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "net_speed",
                    text: ""
                },
                {
                    ability_special: "fake_ensnare_distance",
                    text: ""
                },
                {
                    ability_special: "AbilityCooldown",
                    text: ""
                },
                {
                    ability_special: "AbilityCastRange",
                    text: ""
                },
                {
                    ability_special: "can_target_magic_immune",
                    text: ""
                },
                {
                    ability_special: "can_target_invulnerable",
                    text: ""
                },
                {
                    ability_special: "does_break",
                    text: ""
                }
            ],
            name: "诱捕",
            description: "打断目标的动作并将其困在原地，使其无法移动或闪烁。可以对无敌和睡眠中单位施放。",
            lore: "想要逃脱鱼人的追杀，唯一的办法就是一开始就不要与之作对。",
            scepter_description: "提升施法距离和弹道速度。诱捕可以对减益免疫单位施放并且生效。",
            notes: []
        },
        {
            ability_classname: "imba_naga_siren_rip_tide",
            ability_specials: [
                {
                    ability_special: "hits",
                    text: ""
                },
                {
                    ability_special: "armor_reduction",
                    text: "护甲降低："
                },
                {
                    ability_special: "damage",
                    text: "伤害："
                },
                {
                    ability_special: "radius",
                    text: ""
                },
                {
                    ability_special: "duration",
                    text: "持续时间："
                }
            ],
            name: "激流",
            description: "娜迦海妖和她的幻象每经过{hits}次攻击后就会对敌人造成额外伤害，并降低他们的护甲，持续{duration}秒。",
            lore: "海妖的敌人被深海涌出的洪流冲刷，防御遭到粉碎。",
            notes: [
                "使用激流不会打断持续施法。"
            ]
        },
        {
            ability_classname: "imba_naga_siren_deluge",
            ability_specials: [
                {
                    ability_special: "damage",
                    text: "伤害："
                },
                {
                    ability_special: "radius",
                    text: ""
                },
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "status_resistance",
                    text: "%状态抗性降低："
                },
                {
                    ability_special: "max_movement_speed",
                    text: "移动速度上限："
                }
            ],
            name: "洪水",
            description: "娜迦海妖和她所有的幻象操控一道水波攻击附近单位，造成伤害并降低敌人的状态抗性，同时限制他们的移速上限。",
            lore: "",
            notes: [
                "使用洪水不会打断持续施法。"
            ]
        },
        {
            ability_classname: "imba_naga_siren_eelskin",
            ability_specials: [
                {
                    ability_special: "evasion_per_naga",
                    text: ""
                },
                {
                    ability_special: "radius",
                    text: ""
                }
            ],
            name: "鳗鱼皮",
            description: "娜迦海妖在{radius}范围内多存在一个娜迦海妖就会获得{evasion_per_naga}%闪避。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_naga_siren_crit",
            ability_specials: [
                {
                    ability_special: "chance",
                    text: "%致命一击概率："
                },
                {
                    ability_special: "crit",
                    text: "%致命一击伤害："
                }
            ],
            name: "致命一击",
            description: "攻击造成致命一击。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_naga_siren_song_of_the_siren",
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
                    ability_special: "animation_rate",
                    text: ""
                },
                {
                    ability_special: "heal_pct",
                    text: "%每秒最大生命值恢复："
                },
                {
                    ability_special: "mana_pct",
                    text: "%每秒最大魔法值恢复："
                },
                {
                    ability_special: "AbilityCooldown",
                    text: ""
                }
            ],
            name: "海妖之歌",
            description: "娜迦海妖周围的所有敌人受到魔法影响陷入停滞状态，既无法行动也不会受到攻击。范围内友军每秒恢复一定百分比的生命值。再次使用海妖之歌可以提前停止效果。",
            lore: "司里希丝具有魔力的声音使敌人不自觉地沉醉其中，同时在需要的时候召唤她的族人前来助战。",
            shard_description: "提升海妖之歌的生命恢复，并且为友军增加魔法恢复。",
            notes: [
                "海妖之歌作用下的单位处于无敌状态，不会受到任何伤害。",
                "对减益免疫单位无效。",
                "海妖之歌的作用范围以娜迦海妖为中心，如果她远离了作用单位，他们将会醒来。"
            ]
        },
        {
            ability_classname: "imba_naga_siren_song_of_the_siren_cancel",
            ability_specials: [],
            name: "终止海妖之歌",
            description: "将敌方单位从你的歌声中释放出来，使他们可以受到攻击。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_naga_siren_reel_in",
            ability_specials: [
                {
                    ability_special: "radius",
                    text: ""
                },
                {
                    ability_special: "pull_strength",
                    text: ""
                },
                {
                    ability_special: "min_pull_distance",
                    text: ""
                },
                {
                    ability_special: "can_target_magic_immune",
                    text: ""
                },
                {
                    ability_special: "can_target_invulnerable",
                    text: ""
                }
            ],
            name: "捕捞",
            description: "持续施法 - 娜迦海妖最多持续施法{AbilityChannelTime}秒，以{pull_strength}的速度将{radius}范围内所有处于娜迦海妖诱捕作用下的单位朝她拉去。诱捕单位相距{min_pull_distance}时持续施法结束。",
            lore: "就连最年轻的鱼人也能非常熟练地仅靠他们的机智和密网对猎物实施拖网作业。",
            scepter_description: "捕捞可以作用于技能免疫单位。",
            notes: []
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_naga_siren",
                    name: "+{s:bonus_images_count} 镜像幻象"
                },
                {
                    talent_classname: "special_bonus_unique_imba_naga_siren_2",
                    name: "+{s:bonus_damage}% 激流伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_naga_siren_3",
                    name: "-{s:bonus_incoming_damage}% 镜像承受伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_naga_siren_4",
                    name: "+{s:bonus_outgoing_damage_tooltip}% 镜像攻击力"
                },
                {
                    talent_classname: "special_bonus_unique_imba_naga_siren_5",
                    name: "-{s:value}秒 海妖之歌冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_naga_siren_6",
                    name: "-{s:value}秒 镜像冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_naga_siren_net_cooldown",
                    name: "-{s:bonus_AbilityCooldown}秒 诱捕冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_naga_siren_net_breaks",
                    name: "诱捕施加破坏"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "naga_siren_facets_imba_1",
            name: "",
            description: ""
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_naga_siren_eelskin",
            name: "鳗鱼皮",
            description: "获得{MODIFIER_PROPERTY_EVASION_CONSTANT}%闪避。"
        },
        {
            modifier_classname: "modifier_imba_naga_siren_ensnare",
            name: "诱捕",
            description: "被困在原地，不能移动或闪烁。"
        },
        {
            modifier_classname: "modifier_imba_naga_siren_rip_tide",
            name: "激流",
            description: "护甲降低{MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS}。"
        },
        {
            modifier_classname: "modifier_imba_naga_siren_rip_tide_slow",
            name: "激流减速",
            description: "移动速度被减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。"
        },
        {
            modifier_classname: "modifier_imba_naga_siren_deluge_status_resistance",
            name: "洪水",
            description: "状态抗性降低{MODIFIER_PROPERTY_STATUS_RESISTANCE_STACKING}%。移动速度上限为{MODIFIER_PROPERTY_MOVESPEED_ABSOLUTE_MAX}。"
        },
        {
            modifier_classname: "modifier_imba_naga_siren_song_of_the_siren",
            name: "海妖之歌",
            description: "睡眠中，无敌。"
        },
        {
            modifier_classname: "modifier_imba_naga_siren_song_of_the_siren_healing",
            name: "海妖之歌",
            description: "被娜迦海妖舒缓的歌声治愈中。"
        },
        {
            modifier_classname: "modifier_imba_naga_siren_song_of_the_siren_aura",
            name: "海妖之歌",
            description: "使敌人全部进入停滞状态"
        },
        {
            modifier_classname: "modifier_imba_naga_siren_reel_in",
            name: "被捕捞",
            description: "被娜迦海妖捕捞"
        }
    ]
};