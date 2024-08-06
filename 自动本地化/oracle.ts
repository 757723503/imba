import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_oracle_fortunes_end",
            ability_specials: [
                {
                    ability_special: "channel_time",
                    text: "最大持续施法时间："
                },
                {
                    ability_special: "damage",
                    text: "伤害："
                },
                {
                    ability_special: "minimum_purge_duration",
                    text: "最短缠绕持续时间："
                },
                {
                    ability_special: "maximum_purge_duration",
                    text: "最长缠绕持续时间："
                },
                {
                    ability_special: "radius",
                    text: "作用范围："
                }
            ],
            name: "气运之末",
            description: "持续施法 - 将神谕者的力量汇聚为一股蕴含荡涤之力的能量，对敌方目标释放这股能量可以对其造成伤害，使其被缠绕，并且驱散其附近区域的魔法效果。如果目标是友军，将只造成驱散效果。缠绕效果的持续时间与引导时间相同。\\n\\n驱散类型：弱驱散",
            lore: "星体天球充沛的力量让四周充斥着静电爆裂声，而生能射向八方，使敌人暂时魂魄出窍。",
            notes: [
                "可以对无敌单位施放。"
            ]
        },
        {
            ability_classname: "imba_oracle_fates_edict",
            ability_specials: [
                {
                    ability_special: "duration",
                    text: "持续时间："
                }
            ],
            name: "命运敕令",
            description: "神谕者让目标沉醉，是敌方单位的话会被缴械，是友方单位的话提高其{magic_damage_resistance_pct_tooltip}%的魔法抗性。",
            lore: "无法逾越的预言四处回响：神选之友将暂时不受魔法的折磨。但是折磨还有很多种……",
            scepter_description: "命运敕令不再缴械友军或让敌人免疫魔法伤害。",
            notes: []
        },
        {
            ability_classname: "imba_oracle_purifying_flames",
            ability_specials: [
                {
                    ability_special: "damage",
                    text: "伤害："
                },
                {
                    ability_special: "heal_per_second",
                    text: "每秒治疗量："
                },
                {
                    ability_special: "total_heal_tooltip",
                    text: "治疗生命值总量："
                },
                {
                    ability_special: "duration",
                    text: "持续时间："
                }
            ],
            name: "涤罪之焰",
            description: "将目标身上一切不洁之物净化，对其造成大量魔法伤害，并使其在接下来的一段时间内逐渐恢复生命值。恢复的生命值总量将超过受到的伤害。可对友方和敌方单位施放。",
            lore: "一支蜡烛的微光在挂满镜子的厅堂中异常耀眼，无独有偶，破碎的宇宙之壁可以将预言的微光变成炫目的火炬。",
            notes: [
                "涤罪之焰的治疗效果可以相互叠加。",
                "涤罪之焰的伤害对友军不会致死。"
            ]
        },
        {
            ability_classname: "imba_oracle_false_promise",
            ability_specials: [
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "heal_amp_pct",
                    text: "%结算治疗增强："
                }
            ],
            name: "虚妄之诺",
            description: "暂时篡改队友的命运，技能期间受到的任何治疗和伤害效果将在虚妄之诺结束后结算，其中治疗效果结算时效果更强。施放时将移除目标身上大部分的负面状态效果。\\n\\n驱散类型：强驱散",
            lore: "敌人和虚妄的先知一样常常会编造他人的命运。",
            scepter_description: "使虚妄之诺提供具有{shard_fade_time}秒渐隐延迟的隐身效果，并且友军获得{shard_spell_amp_bonus}%技能伤害加成，基础攻击间隔降低{shard_bat_bonus}秒。",
            notes: [
                "伤害和治疗效果虽然被延缓结算，但是结算时依然会考虑护甲和魔法抗性的减免。",
                "经过延缓的伤害和治疗效果在目标失去本技能效果后立刻结算。"
            ]
        },
        {
            ability_classname: "imba_oracle_rain_of_destiny",
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
                    ability_special: "damage",
                    text: "每秒伤害/治疗："
                },
                {
                    ability_special: "heal_amp",
                    text: "%治疗增强："
                }
            ],
            name: "天命之雨",
            description: "在目标范围内降下大雨。站在该区域的敌人受到每秒伤害，并且治疗增强被削弱。区域内友军被治疗，并且具有治疗增强效果。",
            lore: "通过将精神与大气相混合，奈里夫把单一的现实扭曲成矛盾的结合。",
            notes: []
        },
        {
            ability_classname: "imba_oracle_clairvoyant_curse",
            ability_specials: [],
            name: "预言家诅咒",
            description: "每级英雄等级提升{spell_amplification}%技能增强。",
            notes: []
        },
        {
            ability_classname: "imba_oracle_clairvoyant_cure",
            ability_specials: [],
            name: "预言家疗伤",
            description: "每级英雄等级提升{heal_amplification}%治疗增强。",
            notes: []
        },
        {
            ability_classname: "imba_oracle_prognosticate",
            ability_specials: [],
            name: "预言",
            description: "神谕者将预测并对友军宣布，下个强化神符出现的地点（上路或下路）。",
            notes: []
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_oracle",
                    name: "+{s:bonus_duration}秒 虚妄之诺持续时间"
                },
                {
                    talent_classname: "special_bonus_unique_imba_oracle_2",
                    name: "+{s:bonus_maximum_purge_duration}秒 气运之末持续时间"
                },
                {
                    talent_classname: "special_bonus_unique_imba_oracle_5",
                    name: "-{s:value}秒 涤罪之焰冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_oracle_6",
                    name: "-{s:bonus_AbilityCooldown}秒 虚妄之诺冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_oracle_7",
                    name: "气运之末持续驱散"
                },
                {
                    talent_classname: "special_bonus_unique_imba_oracle_8",
                    name: "+{s:value}% 涤罪之焰对敌人伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_oracle_9",
                    name: "+{s:bonus_bonus_armor} 虚妄之诺护甲"
                },
                {
                    talent_classname: "special_bonus_unique_imba_oracle_damage_per_purge",
                    name: "气运之末每驱散一个效果+{s:bonus_damage_per_buff} 对敌伤害/对友治疗"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "oracle_facets_imba_1",
            name: "",
            description: ""
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_oracle_fortunes_end_purge",
            name: "气运之末缠绕效果",
            description: "加成状态被驱散，并且被缠绕。"
        },
        {
            modifier_classname: "modifier_imba_oracle_fates_edict",
            name: "命运敕令",
            description: "被缴械、魔法抗性提高{MODIFIER_PROPERTY_MAGICAL_RESISTANCE_BONUS}%。"
        },
        {
            modifier_classname: "modifier_imba_oracle_purifying_flames",
            name: "涤罪之焰治疗效果",
            description: "处于涤罪之焰的治疗效果中。"
        },
        {
            modifier_classname: "modifier_imba_oracle_false_promise_timer",
            name: "虚妄之诺",
            description: "所受的任何伤害或治疗效果将延缓至虚妄之诺效果结束后结算。治疗效果将双倍结算。"
        },
        {
            modifier_classname: "modifier_imba_oracle_rain_of_destiny",
            name: "天命之雨",
            description: "友军的治疗增强并且敌人的治疗减少{MODIFIER_PROPERTY_HEAL_AMPLIFY_PERCENTAGE_TARGET}%。"
        },
        {
            modifier_classname: "modifier_imba_oracle_prognosticate",
            name: "预言",
            description: "神谕者可以预测下个强化神符产生的地点！按住Alt键点击可以向队友播送这条信息。"
        }
    ]
};