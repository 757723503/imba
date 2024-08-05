import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_bane_enfeeble",
            ability_specials: [
                {
                    ability_special: "damage_reduction",
                    text: "%攻击力降低："
                },
                {
                    ability_special: "heal_reduction",
                    text: ""
                },
                {
                    ability_special: "cast_reduction",
                    text: "%施法距离降低："
                },
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "enfeeble_tick_damage",
                    text: "伤害："
                },
                {
                    ability_special: "enfeeble_heal_pct",
                    text: ""
                },
                {
                    ability_special: "damage_tick_rate",
                    text: ""
                }
            ],
            name: "虚弱",
            description: "每秒造成伤害，并且降低敌人的总攻击力和施法距离。",
            lore: "阿特洛波斯编织的每一丝恐惧都使他的受难者承受更多的奥术和未知技艺伤害。",
            notes: []
        },
        {
            ability_classname: "imba_bane_brain_sap",
            ability_specials: [
                {
                    ability_special: "brain_sap_damage",
                    text: "治疗/伤害："
                },
                {
                    ability_special: "AbilityCooldown",
                    text: ""
                },
                {
                    ability_special: "shard_radius",
                    text: ""
                },
                {
                    ability_special: "shard_secondary_target_heal_pct",
                    text: ""
                }
            ],
            name: "蚀脑",
            description: "暴食一个敌方单位的生命能量，造成伤害并回复自身生命值。",
            lore: "阿特洛波斯认为收割被他亲自制造的恐惧弄崩溃的生命是至高的享受。",
            shard_description: "减少{bonus_AbilityCooldown}秒冷却时间。蚀脑变成{shard_radius}作用范围的技能。次级目标只有{shard_secondary_target_heal_pct}%治疗效果。",
            notes: []
        },
        {
            ability_classname: "imba_bane_fiends_grip",
            ability_specials: [
                {
                    ability_special: "fiend_grip_tick_interval",
                    text: ""
                },
                {
                    ability_special: "fiend_grip_mana_drain",
                    text: "%每秒魔法吸取："
                },
                {
                    ability_special: "AbilityChannelTime",
                    text: ""
                },
                {
                    ability_special: "fiend_grip_damage",
                    text: "伤害："
                },
                {
                    ability_special: "AbilityCooldown",
                    text: ""
                },
                {
                    ability_special: "illusion_count",
                    text: ""
                },
                {
                    ability_special: "scepter_incoming_illusion_damage",
                    text: ""
                }
            ],
            name: "魔爪",
            description: "持续施法 - 抓住一个敌方单位，使其失去行动能力并持续受到大量伤害，同时每{fiend_grip_tick_interval}秒按目标最大魔法值一定比例吸取魔法。",
            lore: "阿特洛波斯的受害者经常因为噩梦中逼真的幻象痛不欲生。",
            scepter_description: "魔爪的冷却时间减少{bonus_AbilityCooldown}秒。魔爪将产生两个不可控制的幻象，幻象也将对目标持续施放魔爪。幻象承受{scepter_incoming_illusion_damage}%伤害，并且被打断后立刻消失。伤害不会叠加。",
            notes: []
        },
        {
            ability_classname: "imba_bane_nightmare",
            ability_specials: [
                {
                    ability_special: "nightmare_invuln_time",
                    text: ""
                },
                {
                    ability_special: "animation_rate",
                    text: ""
                },
                {
                    ability_special: "AbilityCooldown",
                    text: ""
                },
                {
                    ability_special: "bonus_attack_speed",
                    text: "攻击速度加成："
                },
                {
                    ability_special: "is_vector_targeted",
                    text: ""
                },
                {
                    ability_special: "vector_render_distance",
                    text: ""
                },
                {
                    ability_special: "vector_render_radius",
                    text: ""
                },
                {
                    ability_special: "walk_speed",
                    text: "梦游速度："
                },
                {
                    ability_special: "turn_rate",
                    text: ""
                }
            ],
            name: "噩梦",
            description: "让目标敌方或友方英雄进入沉睡。睡着的单位受到攻击便会醒来，但噩梦将转移到攻击者身上。祸乱之源可以随意攻击噩梦中的目标并造成伤害。",
            lore: "从夜之女神妮塔莎那里偷来的能力，让猎物一觉不醒。",
            notes: [
                "在噩梦的第一秒，作用单位是无敌状态。",
                "祸乱之源可以把自己从噩梦中唤醒。",
                "施放后将替换为结束噩梦：结束所有受作用单位身上的噩梦。"
            ]
        },
        {
            ability_classname: "imba_bane_nightmare_end",
            ability_specials: [],
            name: "噩梦终止",
            description: "将所有人从噩梦中唤醒。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_bane_ichor_of_nyctasha",
            ability_specials: [],
            name: "妮塔莎脓血",
            description: "祸乱之源的属性值总是平均分配（如+3 力量的物品现在提供+1 力量/敏捷/智力）。",
            lore: "",
            notes: []
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_bane_2",
                    name: "+{s:bonus_brain_sap_damage} 蚀脑伤害/治疗"
                },
                {
                    talent_classname: "special_bonus_unique_imba_bane_3",
                    name: "+{s:bonus_AbilityChannelTime}秒 魔爪持续时间"
                },
                {
                    talent_classname: "special_bonus_unique_imba_bane_5",
                    name: "-{s:bonus_AbilityCooldown}秒 噩梦冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_bane_8",
                    name: "-{s:bonus_AbilityCooldown}秒 蚀脑冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_bane_9",
                    name: "+{s:bonus_fiend_grip_mana_drain}% 魔爪吸取最大魔法值"
                },
                {
                    talent_classname: "special_bonus_unique_imba_bane_10",
                    name: "+{s:bonus_enfeeble_tick_damage} 虚弱每秒伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_bane_11",
                    name: "+{s:bonus_cast_reduction}% 虚弱降低施法距离"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "bane_facets_imba_1",
            name: "",
            description: ""
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_bane_nightmare_attackspeed_bonus",
            name: "梦中潜行者",
            description: "正在攻击噩梦中目标。攻击速度提升{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}。"
        },
        {
            modifier_classname: "modifier_imba_bane_enfeeble_effect",
            name: "虚弱",
            description: "攻击力降低{MODIFIER_PROPERTY_DAMAGEOUTGOING_PERCENTAGE}%，施法距离减少{MODIFIER_PROPERTY_CAST_RANGE_BONUS_PERCENTAGE}%，并且持续受到纯粹伤害。"
        },
        {
            modifier_classname: "modifier_imba_bane_nightmare",
            name: "噩梦",
            description: "睡眠中"
        },
        {
            modifier_classname: "modifier_imba_bane_nightmare_Facet_bane_sleepwalk",
            name: "梦游中"
        },
        {
            modifier_classname: "modifier_imba_bane_nightmare_invulnerable",
            name: "噩梦",
            description: "无敌"
        },
        {
            modifier_classname: "modifier_imba_bane_fiends_grip",
            name: "魔爪",
            description: "被控制，并受到伤害。损失最大魔法值的{MODIFIER_PROPERTY_TOOLTIP}%，每经过{MODIFIER_PROPERTY_TOOLTIP}秒。"
        },
        {
            modifier_classname: "modifier_imba_bane_fiends_grip_cast_illusion",
            name: "魔爪",
            description: "被控制。"
        }
    ]
};
