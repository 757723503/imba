import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_phantom_lancer_spirit_lance",
            ability_specials: [
                {
                    ability_special: "lance_damage",
                    text: "伤害："
                },
                {
                    ability_special: "duration",
                    text: "减速持续时间："
                },
                {
                    ability_special: "movement_speed_pct",
                    text: "%移动速度降低："
                },
                {
                    ability_special: "illusion_duration",
                    text: "幻象持续时间："
                },
                {
                    ability_special: "tooltip_illusion_damage",
                    text: "%幻象继承攻击力："
                },
                {
                    ability_special: "tooltip_illusion_total_damage_in_pct",
                    text: "%幻象承受伤害："
                },
                {
                    ability_special: "scepter_bounce_radius",
                    text: "弹射范围："
                },
                {
                    ability_special: "scepter_bonus_illusion_damage",
                    text: "%幻象额外继承攻击力："
                }
            ],
            name: "灵魂之矛",
            description: "对敌方目标单位投出一支有魔力的灵魂之矛，造成伤害并减速，同时召唤一个幻象攻击该单位。",
            lore: "阿兹瑞斯对于用长矛捕鱼养家的精通被证明在战场上非常有用。",
            scepter_description: "灵魂之矛可以向范围内敌人弹射两次，以英雄优先。提升灵魂之矛的幻象继承攻击力。",
            notes: [
                "附近的幻象也会模仿施法动作。"
            ]
        },
        {
            ability_classname: "imba_phantom_lancer_doppelwalk",
            ability_specials: [
                {
                    ability_special: "target_aoe",
                    text: "目标区域大小："
                },
                {
                    ability_special: "search_radius",
                    text: "幻象聚集范围："
                },
                {
                    ability_special: "delay",
                    text: "重新现身延迟时间："
                },
                {
                    ability_special: "illusion_duration",
                    text: "神行幻象持续时间："
                },
                {
                    ability_special: "illusion_extended_duration",
                    text: "幻象持续时间延长："
                }
            ],
            name: "神行百变",
            description: "幻影长矛手暂时从战场上消失。经过{delay}秒，幻影长矛手和附近的所有幻象都会出现在目标地点的随机位置，并产生两个新的幻象。施放技能后延长所有幻象的持续时间。新加的两个幻象拥有不同的特性：一个承受正常百分比的伤害，不具有攻击力，另一个额外承受{illusion_2_damage_in_pct}%伤害，继承的攻击力相比本体减少{illusion_2_damage_in_pct}%。\\n\\n驱散类型：弱驱散",
            lore: "恐怖巫师沃恩的死亡让幻影长矛手获得了将自身在所有光线之中弯折破碎的能力。",
            notes: [
                "这个技能可以躲避攻击和技能弹道，并且驱散负面效果。",
                "重新现身的单位附近的树木将会被摧毁。",
                "幻影长矛手和他的队友可以分辨出哪个幻象承受100%伤害。"
            ]
        },
        {
            ability_classname: "imba_phantom_lancer_juxtapose",
            ability_specials: [
                {
                    ability_special: "max_illusions",
                    text: "幻象数量上限："
                },
                {
                    ability_special: "proc_chance_pct",
                    text: "%本体触发几率："
                },
                {
                    ability_special: "illusion_proc_chance_pct",
                    text: "%幻象触发几率："
                },
                {
                    ability_special: "tooltip_illusion_damage",
                    text: "%幻象继承攻击力："
                },
                {
                    ability_special: "tooltip_total_illusion_damage_in_pct",
                    text: "%幻象承受伤害："
                },
                {
                    ability_special: "new_target_radius",
                    text: "搜寻范围："
                }
            ],
            name: "并列",
            description: "幻影长矛手的攻击有一定几率使自己的存在破碎，产生自身的幻象。幻象也有几率进一步破碎，再产生幻象。幻影长矛手产生的幻象持续{illusion_duration}秒，幻象产生的幻象则持续{illusion_from_illusion_duration}秒。",
            lore: "阿兹瑞斯的每次刺击感觉就像一个普通战士的两次，或三次，或四次……",
            shard_description: "并列增加主动技能。使幻影长矛手进入隐身，最多持续{invis_duration}秒，同时产生一个复制幻象来迷惑敌人。隐身期间自身移动速度提升{invis_movespeed}%。",
            notes: []
        },
        {
            ability_classname: "imba_phantom_lancer_phantom_edge",
            ability_specials: [
                {
                    ability_special: "min_distance",
                    text: "最小冲锋距离："
                },
                {
                    ability_special: "max_distance",
                    text: "最大冲锋距离："
                },
                {
                    ability_special: "bonus_agility",
                    text: "敏捷加成："
                },
                {
                    ability_special: "agility_duration",
                    text: "敏捷加成持续时间："
                }
            ],
            name: "幻影冲锋",
            description: "对目标发动攻击后，幻影长矛手将快速向其冲去，获得短暂的敏捷提升。幻影长矛手的幻象也将继承此技能。",
            lore: "阿兹瑞斯明白，瞬息万变的战场上，速度就是一切。",
            notes: [
                "如果冲锋中途取消攻击指令，那么移动速度加成就会消失。",
                "冲锋过程中移动速度为{bonus_speed}。"
            ]
        },
        {
            ability_classname: "imba_phantom_lancer_illusory_armaments",
            ability_specials: [
                {
                    ability_special: "bonus_to_base",
                    text: "%额外攻击力转为基础攻击力："
                }
            ],
            name: "灵幻兵械",
            description: "提供额外攻击力的物品会改为提供基础攻击力。",
            notes: []
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_phantom_lancer",
                    name: "+{s:bonus_max_distance} 幻影冲锋距离"
                },
                {
                    talent_classname: "special_bonus_unique_imba_phantom_lancer_2",
                    name: "+{s:bonus_agility_duration}秒 幻影冲锋敏捷加成"
                },
                {
                    talent_classname: "special_bonus_unique_imba_phantom_lancer_4",
                    name: "-{s:value}秒 神行百变冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_phantom_lancer_5",
                    name: "-{s:value}秒 灵魂之矛冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_phantom_lancer_6",
                    name: "+{s:bonus_tooltip_illusion_damage}% 并列攻击力"
                },
                {
                    talent_classname: "special_bonus_unique_imba_phantom_lancer_lance_damage",
                    name: "+{s:bonus_lance_damage} 灵魂之矛伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_phantom_lancer_phantom_rush_agility",
                    name: "+{s:bonus_bonus_agility} 幻影冲锋敏捷"
                },
                {
                    talent_classname: "special_bonus_unique_imba_phantom_lancer_illusory_armaments_dmg",
                    name: "+{s:bonus_bonus_to_base}% 灵幻兵械攻击力"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "phantom_lancer_facets_imba_1",
            name: "汇聚 | 离散",
            description: "神行百变会产生额外幻象，数量取决于幻影长矛手的当前生命值。 并列的幻象会在附近随机单位身旁产生，继承更高的攻击力，但是无法控制。",
            related_abilities: [
                {
                    ability_classname: "imba_phantom_lancer_doppelwalk",
                    description: "幻影长矛手每缺失{hp_missing_per_extra_illusion_pct}%生命都会额外产生一个幻象。"
                },
                {
                    ability_classname: "imba_phantom_lancer_juxtapose",
                    description: "并列的幻象会在附近随机单位身旁产生，继承更高的攻击力，但是无法控制。"
                }
            ],
            related_talents: []
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_phantom_lancer_spirit_lance",
            name: "灵魂之矛",
            description: "移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%"
        },
        {
            modifier_classname: "modifier_imba_phantom_lancer_juxtapose_illusion",
            name: "幻影"
        },
        {
            modifier_classname: "modifier_imba_phantom_lancer_phantom_edge_boost",
            name: "幻影冲锋",
            description: "杀向敌人！"
        },
        {
            modifier_classname: "modifier_imba_phantom_lancer_phantom_edge_agility",
            name: "敏捷提升",
            description: "从幻影冲锋中获得敏捷加成。"
        },
        {
            modifier_classname: "modifier_imba_phantom_lancer_juxtapose_invisibility",
            name: "神出鬼没",
            description: "隐身，移动速度提升。"
        }
    ]
};