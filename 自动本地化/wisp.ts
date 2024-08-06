import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_wisp_tether",
            ability_specials: [
                {
                    ability_special: "radius",
                    text: "最远连接距离："
                },
                {
                    ability_special: "movespeed",
                    text: "%移动速度提升："
                },
                {
                    ability_special: "tether_heal_amp",
                    text: "%生命/魔法恢复传递："
                },
                {
                    ability_special: "slow",
                    text: "%对敌移动/攻击速度降低："
                },
                {
                    ability_special: "damage",
                    text: "每秒伤害："
                }
            ],
            name: "羁绊",
            description: "将艾欧和一个友方单位连接在一起，提高双方的移动速度。当艾欧回复生命或魔法时，连在一起的友军将获得一部分回复效果。距离过远时连接将会断开，也可以主动断开连接。羁绊会对触碰到的敌人造成减速和伤害。",
            lore: "艾欧善意的接触从不同位面之间带来力量。",
            shard_description: "羁绊会对触碰到的敌人造成1.75秒眩晕和150点伤害。同一个单位7秒内不会受到两次作用。移动速度加成提升8%%。",
            notes: [
                "如果羁绊的目标距离艾欧700码以外，他将链接目标并将自己向目标牵引（牵引后相距300码）。",
                "被羁绊连接的单位回复速度相比更快，艾欧满血时也能回复。",
                "艾欧的移动速度与羁绊目标一致。"
            ]
        },
        {
            ability_classname: "imba_wisp_spirits",
            ability_specials: [
                {
                    ability_special: "creep_damage",
                    text: "对非英雄伤害："
                },
                {
                    ability_special: "hero_damage",
                    text: "对英雄伤害："
                },
                {
                    ability_special: "max_range",
                    text: "最大范围："
                },
                {
                    ability_special: "explode_radius",
                    text: "爆炸范围："
                },
                {
                    ability_special: "spirit_duration",
                    text: "持续时间："
                },
                {
                    ability_special: "scepter_slow_pct",
                    text: "%移动速度减缓："
                },
                {
                    ability_special: "scepter_slow_duration",
                    text: "减速持续时间："
                }
            ],
            name: "幽魂",
            description: "召唤五个围绕艾欧起舞的幽魂，对所有碰触到的单位造成伤害。如果碰到的是敌方英雄，幽魂会爆炸，对其附近的所有敌人造成伤害。普通单位碰到幽魂会受到轻微伤害，但是不会使其爆炸。持续时间结束后，幽魂将自动爆炸。",
            lore: "艾欧用它不可思议的力量扭曲了宇宙中的粒子。",
            scepter_description: "每秒被动产生幽魂围绕艾欧，直至数量上限。幽魂撞到英雄会将其短暂减速。可以主动施放来引爆幽魂。",
            notes: [
                "召唤后艾欧可以拉近或拉远幽魂。"
            ]
        },
        {
            ability_classname: "imba_wisp_overcharge",
            ability_specials: [
                {
                    ability_special: "bonus_attack_speed",
                    text: "攻击速度："
                },
                {
                    ability_special: "bonus_spell_amp",
                    text: "%技能增强："
                },
                {
                    ability_special: "bonus_armor",
                    text: "护甲："
                },
                {
                    ability_special: "bonus_mres",
                    text: "%魔法抗性："
                },
                {
                    ability_special: "hp_regen",
                    text: "%最大生命值恢复："
                },
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "shard_bonus_slow_resistance",
                    text: "%减速抗性："
                },
                {
                    ability_special: "shard_bonus_spell_lifesteal",
                    text: "%技能吸血："
                }
            ],
            name: "过载",
            description: "艾欧获得基于最大生命值的生命恢复。如果艾欧和一个友军连接，该单位也会获得过载提供的所有增益效果。",
            lore: "从所有位面的世界吸取一切物质的能量，艾欧开始展示时间的真相。",
            shard_description: "过载提供减速抗性。艾欧还将获得技能吸血，并将技能吸血共享给羁绊的目标。",
            notes: []
        },
        {
            ability_classname: "imba_wisp_relocate",
            ability_specials: [
                {
                    ability_special: "cast_delay",
                    text: "施法时间："
                },
                {
                    ability_special: "return_time",
                    text: "返回时间："
                }
            ],
            name: "降临",
            description: "将艾欧和与其连接的友军传送到地图上任何位置。持续时间结束后艾欧和相连的友军会被传送回原位。双击将传送回己方的泉水。",
            lore: "艾欧本身就是宇宙奥秘的体现。",
            notes: [
                "敌人在施法延迟期间会在大地图和小地图上目标区域都收到视觉特效提示。",
                "如果艾欧在施法延迟期间被控制，降临将会取消。",
                "如果羁绊连接了友方英雄，该英雄将和你一起被传送。你可以随时断开连接，防止英雄和你一同传送。",
                "只有英雄、类英雄单位和幻象可以降临。"
            ]
        },
        {
            ability_classname: "imba_wisp_tether_break",
            ability_specials: [],
            name: "断开连接",
            description: "断开连接。",
            notes: []
        },
        {
            ability_classname: "imba_wisp_spirits_in",
            ability_specials: [],
            name: "拉近幽魂",
            description: "让幽魂靠近你。可以切换开关状态。",
            notes: []
        },
        {
            ability_classname: "imba_wisp_spirits_out",
            ability_specials: [],
            name: "拉远幽魂",
            description: "让幽魂远离你。可以切换开关状态。",
            notes: []
        },
        {
            ability_classname: "imba_wisp_sight_seer",
            ability_specials: [],
            name: "视野先知",
            description: "艾欧一方启动观战者的时间减少{bonus_channel_speed}秒，而且观察者相应地拥有{bonus_vision}额外视野。",
            notes: []
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_wisp",
                    name: "+{s:bonus_hero_damage} 幽魂对英雄伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_wisp_3",
                    name: "+{s:bonus_movespeed}% 羁绊移动速度"
                },
                {
                    talent_classname: "special_bonus_unique_imba_wisp_4",
                    name: "攻击羁绊友军的目标（{s:bonus_tether_attack_damage_pct}%伤害）",
                    description: "羁绊连接至友方英雄时，每次该英雄攻击也会使艾欧自动攻击同一目标。"
                },
                {
                    talent_classname: "special_bonus_unique_imba_wisp_6",
                    name: "-{s:value}秒 降临冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_wisp_8",
                    name: "+{s:value} 羁绊单位攻击力"
                },
                {
                    talent_classname: "special_bonus_unique_imba_wisp_9",
                    name: "+{s:value} 羁绊单位生命"
                },
                {
                    talent_classname: "special_bonus_unique_imba_wisp_10",
                    name: "+{s:bonus_hp_regen}% 过载最大生命值恢复"
                },
                {
                    talent_classname: "special_bonus_unique_imba_wisp_11",
                    name: "+{s:bonus_slow}% 羁绊对敌降低移速/攻速"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "wisp_facets_imba_1",
            name: "闪电战 | 医疗枪",
            description: "过载会使艾欧和羁绊友军获得攻击速度和技能增强。 过载会使艾欧和羁绊友军获得护甲和魔法抗性。",
            related_abilities: [
                {
                    ability_classname: "imba_wisp_overcharge",
                    description: "过载会使艾欧和羁绊友军获得攻击速度和技能增强。"
                }
            ],
            related_talents: []
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_wisp_tether",
            name: "羁绊",
            description: "移动速度与连接的目标一致，并提供恢复效果。"
        },
        {
            modifier_classname: "modifier_imba_wisp_tether_haste",
            name: "羁绊",
            description: "移动速度提升{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%并根据艾欧拥有的回复效果获得相应的回复效果。"
        },
        {
            modifier_classname: "modifier_imba_wisp_tether_slow",
            name: "羁绊",
            description: "受到伤害。移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%，攻击速度降低{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}。"
        },
        {
            modifier_classname: "modifier_imba_wisp_spirits_slow",
            name: "幽魂减速效果",
            description: "移动速度被减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。"
        },
        {
            modifier_classname: "modifier_imba_wisp_overcharge",
            name: "过载",
            description: "攻击速度提升{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}，技能增强提升{MODIFIER_PROPERTY_SPELL_AMPLIFY_PERCENTAGE}%，并且获得{MODIFIER_PROPERTY_HEALTH_REGEN_CONSTANT}点/秒生命恢复。"
        },
        {
            modifier_classname: "modifier_imba_wisp_overcharge_facet_wisp_medigun",
            name: "获得{MODIFIER_PROPERTY_HEALTH_REGEN_CONSTANT}点/秒生命恢复，{MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS}点护甲，{MODIFIER_PROPERTY_MAGICAL_RESISTANCE_BONUS}%魔法抗性。"
        },
        {
            modifier_classname: "modifier_imba_wisp_spirits",
            name: "幽魂",
            description: "被友好的幽魂包围。"
        },
        {
            modifier_classname: "modifier_imba_wisp_relocate_return",
            name: "返回",
            description: "即将返回原来位置。"
        },
        {
            modifier_classname: "modifier_imba_wisp_tether_scepter",
            name: "羁绊神杖加成",
            description: "在羁绊连接时获得阿哈利姆神杖加成效果。"
        }
    ]
};