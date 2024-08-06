import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_enchantress_untouchable",
            ability_specials: [
                {
                    ability_special: "slow_attack_speed",
                    text: "攻击速度降低："
                }
            ],
            name: "不可侵犯",
            description: "魅惑魔女让她的敌人神魂颠倒，受到他们攻击时会降低其攻击速度。",
            lore: "在攻击爱由莎之后，大多数敌人都会由于攻击了这样一个天然的美人而不知所措。",
            notes: [
                "所有直接攻击魅惑魔女的敌方单位都会被减速。",
                "减速效果在攻击单位产生攻击动作时出现，而不是伤害生效时。"
            ]
        },
        {
            ability_classname: "imba_enchantress_bunny_hop",
            ability_specials: [
                {
                    ability_special: "hop_distance",
                    text: "跳跃距离："
                },
                {
                    ability_special: "attack_targets",
                    text: "目标数："
                },
                {
                    ability_special: "bonus_attack_range",
                    text: "攻击距离加成："
                }
            ],
            name: "跃动",
            description: "向后跳跃，躲避多种飞行过程中的攻击和技能弹道，并向魅惑魔女的攻击距离+{bonus_attack_range}范围内最远的{attack_targets}个敌方单位发动一次附有推进的攻击。",
            lore: "跃动就是活跃灵动。",
            notes: []
        },
        {
            ability_classname: "imba_enchantress_little_friends",
            ability_specials: [
                {
                    ability_special: "bonus_attack_speed",
                    text: "攻击速度加成："
                },
                {
                    ability_special: "bonus_move_speed",
                    text: "%移动速度加成："
                },
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "root_base_duration",
                    text: "最短缠绕持续时间："
                },
                {
                    ability_special: "root_per_target",
                    text: "每个单位增加缠绕时间："
                }
            ],
            name: "密友",
            description: "魅惑魔女缠绕一个敌方单位。目标附近所有敌方、友方和中立非英雄单位会攻击魅惑魔女选定的目标，并且具有攻击速度和移动速度加成，持续{duration}秒。",
            notes: []
        },
        {
            ability_classname: "imba_enchantress_enchant",
            ability_specials: [
                {
                    ability_special: "AbilityCastRange",
                    text: "施法距离："
                },
                {
                    ability_special: "slow_movement_speed",
                    text: "%<b>对英雄：</b><br>移动速度减缓："
                },
                {
                    ability_special: "attack_range_bonus",
                    text: "攻击距离加成："
                },
                {
                    ability_special: "enchant_health",
                    text: "<br>对非英雄单位：<br>最大生命值加成："
                },
                {
                    ability_special: "enchant_damage",
                    text: "攻击力加成："
                },
                {
                    ability_special: "level_req",
                    text: "目标等级上限："
                }
            ],
            name: "魅惑",
            description: "魅惑魔女诱惑一个敌人。如果目标是英雄，将被驱散，其移动速度也会被减缓，持续{slow_duration}秒。\\n\\n如果目标是非英雄单位，魅惑魔女会将其控制，并获得{xp_gain_pct}%相应的击杀经验。魅惑魔女同一时间可以控制{max_creeps}个非英雄单位，最多持续{dominate_duration}秒。\\n\\n驱散类型：弱驱散",
            lore: "作为森林真正的管家，无论是卑贱的巨魔还是强大的半人马，爱由莎都会和他们成为朋友。",
            scepter_description: "魅惑魔女可以同时控制多个非英雄单位。",
            notes: [
                "可以转化幻象。"
            ]
        },
        {
            ability_classname: "imba_enchantress_natures_attendants",
            ability_specials: [
                {
                    ability_special: "heal_duration",
                    text: "持续时间："
                },
                {
                    ability_special: "heal",
                    text: "每秒治疗量："
                },
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "wisp_count",
                    text: "小精灵数量："
                }
            ],
            name: "自然之助",
            description: "召唤一群小精灵治疗魅惑魔女以及身边的友方单位。",
            lore: "古怪的森林小精灵拥有的疗伤之力虽然微弱，但可以用数量弥补。",
            notes: [
                "不会选择满血单位进行治疗。",
                "破坏会使过度保护的小精灵失效。"
            ]
        },
        {
            ability_classname: "imba_enchantress_impetus",
            ability_specials: [
                {
                    ability_special: "distance_damage_pct",
                    text: "%距离伤害加成："
                }
            ],
            name: "推进",
            description: "激活后每次攻击都有附魔效果，根据与目标的距离造成额外伤害。目标越远，伤害越高。对非英雄单位和幻象造成双倍伤害。",
            lore: "虽然爱由莎更喜欢和平的处事方式，但她还是会用远距离的魔法突击来解决一些问题，她扔出的长矛会从掠过的空气中获得能量。",
            notes: [
                "造成伤害上限的距离是{distance_cap}。",
                "计算与目标之间的距离在攻击弹道击中目标时。"
            ]
        },
        {
            ability_classname: "imba_enchantress_rabblerouser",
            ability_specials: [
                {
                    ability_special: "damage_increase_tooltip",
                    text: "%伤害增加："
                }
            ],
            name: "煽动野怪",
            description: "所有中立生物对敌方英雄造成更多的伤害。增加的伤害为{base_damage_amp}% + {base_damage_amp}% * 魅惑魔女的英雄等级。",
            notes: [
                "不会影响劝化的中立生物、痛苦魔方和肉山。"
            ]
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_enchantress_2",
                    name: "+{s:bonus_wisp_count} 自然之助小精灵"
                },
                {
                    talent_classname: "special_bonus_unique_imba_enchantress_3",
                    name: "+{s:bonus_slow_attack_speed} 不可侵犯减速"
                },
                {
                    talent_classname: "special_bonus_unique_imba_enchantress_4",
                    name: "+{s:bonus_distance_damage_pct}% 推进伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_enchantress_5",
                    name: "+{s:bonus_heal} 自然之助治疗"
                },
                {
                    talent_classname: "special_bonus_unique_imba_enchantress_6",
                    name: "自然之助期间+{s:bonus_movespeed}移动速度"
                },
                {
                    talent_classname: "special_bonus_unique_imba_enchantress_enchant_health_damage",
                    name: "魅惑单位+{s:bonus_enchant_health} 生命/+{s:bonus_enchant_damage} 攻击力"
                },
                {
                    talent_classname: "special_bonus_unique_imba_enchantress_enchant_armor",
                    name: "+{s:bonus_enchant_armor} 魅惑单位护甲"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "enchantress_facets_imba_1",
            name: "着迷 | 过度保护的小精灵",
            description: "魅惑拥有额外施法距离，对魅惑目标的攻击也拥有额外攻击距离。 受到伤害就会召唤疗伤的小精灵。",
            related_abilities: [
                {
                    ability_classname: "imba_enchantress_enchant",
                    description: "魅惑的施法距离增加。如果目标是英雄，魅惑魔女对目标的攻击距离增加。"
                },
                {
                    ability_classname: "imba_enchantress_natures_attendants",
                    description: "只要魅惑魔女受到敌方英雄的伤害超过{overprotective_damage_threshold}点，{overprotective_wisp_count}个小精灵就会出现，{overprotective_wisp_duration}秒内进行治疗。同一时间最多只能存在{overprotective_max_wisps}个过度保护的小精灵。"
                }
            ],
            related_talents: []
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_enchantress_little_friends",
            name: "密友",
            description: "移动速度和攻击速度提升，并且以魅惑魔女的敌人为目标"
        },
        {
            modifier_classname: "modifier_imba_enchantress_little_friends_aura",
            name: "密友目标",
            description: "成为作用范围内所有非英雄单位的目标"
        },
        {
            modifier_classname: "modifier_imba_enchantress_untouchable_slow",
            name: "不可侵犯",
            description: "攻击速度降低{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}。"
        },
        {
            modifier_classname: "modifier_imba_enchantress_enchant",
            name: "魅惑",
            description: "受到魅惑魔女控制"
        },
        {
            modifier_classname: "modifier_imba_enchantress_enchant_slow",
            name: "魅惑减速",
            description: "减速{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。"
        },
        {
            modifier_classname: "modifier_imba_enchantress_natures_attendants",
            name: "自然之助",
            description: "正在治疗附近单位"
        },
        {
            modifier_classname: "modifier_imba_enchantress_natures_attendants_shard",
            name: "自然之助",
            description: "正在治疗附近单位"
        },
        {
            modifier_classname: "modifier_imba_enchantress_rabblerouser",
            name: "煽动野怪",
            description: "对魅惑魔女的敌人造成更多伤害。"
        }
    ]
};