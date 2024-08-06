import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_grimstroke_dark_artistry",
            ability_specials: [
                {
                    ability_special: "damage",
                    text: "基础伤害："
                },
                {
                    ability_special: "bonus_damage_per_target",
                    text: "每个目标提高伤害："
                },
                {
                    ability_special: "movement_slow_pct",
                    text: "%移动速度减缓："
                },
                {
                    ability_special: "slow_duration",
                    text: "减速持续时间："
                }
            ],
            name: "命运之笔",
            description: "天涯墨客画出一道墨迹，对敌人造成伤害和减速。墨迹每碰到一个敌人，造成的伤害都会增加。击中时施加墨迹。",
            lore: "天涯墨客的墨迹带有腐化的力量，吸取自他死去的族人，将吞噬抓住的任何敌人。",
            notes: []
        },
        {
            ability_classname: "imba_grimstroke_ink_creature",
            ability_specials: [
                {
                    ability_special: "latch_duration",
                    text: "纠缠持续时间："
                },
                {
                    ability_special: "destroy_attacks",
                    text: "摧毁所需攻击次数："
                },
                {
                    ability_special: "damage_per_second",
                    text: "幻影每秒伤害："
                },
                {
                    ability_special: "pop_damage",
                    text: "撕裂伤害："
                }
            ],
            name: "幻影之拥",
            description: "召唤一个快速向目标移动的幻影，到达时将其缠住。缠住后对其造成伤害和沉默。若她在纠缠期间存活，将会撕裂目标，造成大量伤害，并刷新幻影之拥的冷却时间。\\n\\n英雄对幻影的单次攻击记为3次。",
            lore: "天涯墨客并不为族人的毁灭感到悲伤。只有对瑶薇，他最亲近的女子，他才稍稍感觉到思念。",
            notes: [
                "幻影在目标隐身或进入减益免疫状态后掉下。",
                "目标在纠缠期间阵亡后幻影将会回归。"
            ]
        },
        {
            ability_classname: "imba_grimstroke_dark_portrait",
            ability_specials: [
                {
                    ability_special: "illusion_duration",
                    text: "幻象持续时间："
                },
                {
                    ability_special: "images_do_damage_percent_tooltip",
                    text: "%幻象继承攻击力："
                },
                {
                    ability_special: "images_take_damage_percent_tooltip",
                    text: "%幻象承受伤害："
                },
                {
                    ability_special: "images_movespeed_bonus",
                    text: "%幻象移动速度加成："
                }
            ],
            name: "暗绘",
            description: "制造目标敌方英雄的墨色幻象。幻象为减益免疫状态，拥有95%%魔法抗性，移动速度和继承攻击力超过本体。",
            lore: "没有暗黑的创造能逃得过大师之手的技艺。",
            notes: []
        },
        {
            ability_classname: "imba_grimstroke_ink_over",
            ability_specials: [
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "total_damage",
                    text: "总伤害："
                },
                {
                    ability_special: "attack_speed",
                    text: "攻击速度降低："
                },
                {
                    ability_special: "move_speed",
                    text: "%移动速度减缓："
                }
            ],
            name: "浓墨重彩",
            description: "使敌方目标包裹在墨汁中，持续{duration}秒，攻击速度降低{attack_speed}，移动速度减缓{move_speed}%，并在持续时间内总共造成{total_damage}点伤害。",
            notes: []
        },
        {
            ability_classname: "imba_grimstroke_spirit_walk",
            ability_specials: [
                {
                    ability_special: "buff_duration",
                    text: "效果持续时间："
                },
                {
                    ability_special: "movespeed_bonus_pct",
                    text: "%移动速度加成："
                },
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "max_damage",
                    text: "最高伤害："
                },
                {
                    ability_special: "max_stun",
                    text: "最大眩晕时间："
                },
                {
                    ability_special: "tick_dps_tooltip",
                    text: "墨须每秒伤害："
                },
                {
                    ability_special: "max_threshold_duration",
                    text: "最大效果持续时间："
                }
            ],
            name: "墨涌",
            description: "天涯墨客将一个友方单位笼罩在一片墨汁中，目标的移动速度得到提升。友方单位附近的敌人会持续被墨须伤害。{buff_duration}秒后将根据墨须对英雄造成伤害的时间对区域内单位造成伤害和眩晕。",
            lore: "既然高涨的墨潮不再对天涯墨客构成威胁，那么力量的墨须就不难为他所用。",
            shard_description: "墨涌造成的伤害增加{shard_bonus_damage_pct}%，并且治疗目标，治疗量为墨涌造成伤害的{shard_bonus_damage_pct}%。结束时目标会受到一次强驱散效果。<br><br>驱散类型：强驱散",
            notes: []
        },
        {
            ability_classname: "imba_grimstroke_return",
            ability_specials: [],
            name: "爆墨",
            description: "触发现有的墨涌。",
            notes: []
        },
        {
            ability_classname: "imba_grimstroke_soul_chain",
            ability_specials: [
                {
                    ability_special: "chain_duration",
                    text: "持续时间："
                },
                {
                    ability_special: "chain_latch_radius",
                    text: "束缚作用范围："
                }
            ],
            name: "缚魂",
            description: "将一名敌方英雄与束缚作用范围内最接近的队友相连，阻止他们远离彼此。任何指向性技能击中任一英雄时，这两名敌方英雄都会受到作用。若连接在效果截止前断裂，初始目标将再次与其距离内最接近的队友相连。",
            lore: "飞升之人皆为烬州城的选召之子，通过自己的灵魂和他们应守护的族人之间创造的束缚获得了巨大的力量。在同胞毁灭的多年之后，天涯墨客发现束缚仪式更为凶险的用途……",
            notes: [
                "如果与另一个单位一起被束缚，作用下单位均被束缚，而且无法使用闪烁类技能。",
                "被束缚的单位都将提供视野。"
            ]
        },
        {
            ability_classname: "imba_grimstroke_ink_trail",
            ability_specials: [],
            name: "墨痕",
            description: "天涯墨客的攻击增加了一个效果，会使敌方英雄在身后留下一道墨痕，持续{debuff_duration}秒。",
            notes: [
                "获得作用下英雄的视野。"
            ]
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_grimstroke_1",
                    name: "+{s:bonus_radius} 墨涌范围"
                },
                {
                    talent_classname: "special_bonus_unique_imba_grimstroke_2",
                    name: "+{s:bonus_damage}% 命运之笔伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_grimstroke_3",
                    name: "+{s:bonus_AbilityCastRange}% 命运之笔速度和距离"
                },
                {
                    talent_classname: "special_bonus_unique_imba_grimstroke_4",
                    name: "+{s:bonus_destroy_attacks} 幻影可攻击次数"
                },
                {
                    talent_classname: "special_bonus_unique_imba_grimstroke_6",
                    name: "+{s:bonus_movespeed_bonus_pct}% 墨涌移动速度"
                },
                {
                    talent_classname: "special_bonus_unique_imba_grimstroke_7",
                    name: "-{s:value}秒 墨涌冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_grimstroke_8",
                    name: "+{s:bonus_damage_per_second} 幻影之拥每秒伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_grimstroke_soul_chain_reflect_damage",
                    name: "缚魂下技能伤害+{s:bonus_bonus_reflected_spell_damage}%"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "grimstroke_facets_imba_1",
            name: "绝美艺术 | 望尘墨及",
            description: "命运之笔能以矢量为目标，从而操控墨迹的行进路线。 墨涌可以手动提前引爆。",
            related_abilities: [
                {
                    ability_classname: "imba_grimstroke_dark_artistry",
                    description: "命运之笔能以矢量为目标，从而操控墨迹的行进路线。"
                },
                {
                    ability_classname: "imba_grimstroke_spirit_walk",
                    description: "墨涌可以手动提前引爆。"
                }
            ],
            related_talents: []
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_grimstroke_dark_artistry_slow",
            name: "命运之笔",
            description: "这个单位的移动速度被减缓。"
        },
        {
            modifier_classname: "modifier_imba_grimstroke_ink_creature_debuff",
            name: "幻影之拥",
            description: "幻影正沉默并伤害这个单位。"
        },
        {
            modifier_classname: "modifier_imba_grimstroke_spirit_walk_buff",
            name: "墨涌",
            description: "这个单位的移动速度得到提升，并且对周围目标造成伤害。"
        },
        {
            modifier_classname: "modifier_imba_grimstroke_spirit_walk_debuff",
            name: "墨涌",
            description: "这个单位被眩晕。"
        },
        {
            modifier_classname: "modifier_imba_grimstroke_shard_buff",
            name: "浓墨重彩",
            description: "每{MODIFIER_PROPERTY_TOOLTIP}秒受到{MODIFIER_PROPERTY_TOOLTIP}点伤害。移动速度被减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%，攻击速度降低{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}。"
        },
        {
            modifier_classname: "modifier_imba_grimstroke_ink_trail_debuff",
            name: "墨痕",
            description: "留下一道墨痕。"
        },
        {
            modifier_classname: "modifier_imba_grimstroke_soul_chain",
            name: "缚魂",
            description: "束缚至附近英雄。被束缚，并且无法使用闪烁类技能。"
        },
        {
            modifier_classname: "modifier_imba_grimstroke_scepter_buff",
            name: "暗绘",
            description: "造成额外伤害，并且移动速度提升{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。"
        }
    ]
};