import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_enigma_malefice",
            ability_specials: [
                {
                    ability_special: "stun_duration",
                    text: "眩晕时间："
                },
                {
                    ability_special: "damage",
                    text: "每次伤害："
                },
                {
                    ability_special: "stun_instances",
                    text: "眩晕次数："
                }
            ],
            name: "憎恶",
            description: "将谜团的力量集中于一个目标，使它受到多次伤害并反复被眩晕。每{tick_rate}秒眩晕一次。",
            lore: "奇特的重力将敌人的重心进行拖拽，让他们动弹不得。",
            shard_description: "憎恶的眩晕时间增加0.35秒，并且每次眩晕都会在目标身旁产生一个虚灵体。这些虚灵体不会再次分裂。",
            notes: []
        },
        {
            ability_classname: "imba_enigma_demonic_conversion",
            ability_specials: [
                {
                    ability_special: "spawn_count",
                    text: "转化数量："
                },
                {
                    ability_special: "split_attack_count",
                    text: "分裂所需攻击次数："
                },
                {
                    ability_special: "eidelon_max_health",
                    text: "虚灵生命值："
                },
                {
                    ability_special: "eidelon_base_damage",
                    text: "虚灵攻击力："
                },
                {
                    ability_special: "eidolon_magic_resist",
                    text: "%虚灵魔法抗性："
                },
                {
                    ability_special: "eidolon_attack_range",
                    text: "虚灵攻击距离："
                }
            ],
            name: "恶魔召唤",
            description: "以生命为代价召唤三个谜团自身的碎片。虚灵的生命值会有所增加，数值为谜团当前生命值的{current_health_pct}%。这些虚灵都由谜团控制，在反复经过几次成功的攻击后，虚灵会再次分裂，并完全回复生命值。",
            lore: "谜团具备将自身的形体吸入另一个维度的能力——随之产生的就是三个追猎肉体位面的暗黑虚灵。",
            notes: []
        },
        {
            ability_classname: "imba_enigma_midnight_pulse",
            ability_specials: [
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "damage_percent",
                    text: "%当前生命值伤害："
                },
                {
                    ability_special: "duration",
                    text: "持续时间："
                }
            ],
            name: "午夜凋零",
            description: "使一块区域浸入暗共振中，对敌方单位造成他们{base_damage} + 基于敌人当前生命值的伤害。",
            lore: "世界的一部分缓缓跌入虚空。",
            notes: [
                "此技能将摧毁范围内的树木。",
                "多个午夜凋零的效果不会叠加。"
            ]
        },
        {
            ability_classname: "imba_enigma_black_hole",
            ability_specials: [
                {
                    ability_special: "damage",
                    text: "每秒伤害："
                },
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "duration",
                    text: "持续时间："
                }
            ],
            name: "黑洞",
            description: "持续施法 - 召唤一个强引力漩涡吸住敌方单位。被黑洞影响的单位不能移动、攻击或施法。",
            lore: "谜团将毁灭的终极漩涡，具有毁天灭地力量的奇点进行引导，大地因此颤抖。",
            scepter_description: "黑洞额外造成等同于单位{scepter_pct_damage}%最大生命值的每秒伤害，并且产生一个{scepter_radius}范围，没有打断效果的牵引效果。牵引速度为{scepter_drag_speed}。",
            notes: []
        },
        {
            ability_classname: "imba_enigma_gravity_well",
            ability_specials: [],
            name: "重力井",
            description: "谜团附近{max_dist}距离内的友军拥有最多{damage_reduction}%承受伤害降低。最远距离的效果为0，距离为{min_dist}时达到最大效果。不会影响谜团自身。",
            notes: []
        },
        {
            ability_classname: "imba_enigma_splitting_image",
            ability_specials: [],
            name: "分割图像",
            description: "谜团受到伤害时会产生虚灵体。",
            notes: [
                "每当谜团受到任意来源的伤害超过{damage_threshold}点，他的身旁都会产生一个虚灵体。这种方式产生的虚灵体提供的击杀经验和金钱减少{non_splitting_bounty_reduction}%。"
            ]
        },
        {
            ability_classname: "imba_enigma_event_horizon",
            ability_specials: [],
            name: "事件视界",
            description: "{radius}范围内的单位远离谜团时会受到{speed_bonus}%的移速惩罚。",
            notes: []
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_enigma",
                    name: "+{s:bonus_spawn_count} 恶魔召唤虚灵数量"
                },
                {
                    talent_classname: "special_bonus_unique_imba_enigma_2",
                    name: "+{s:bonus_stun_instances} 憎恶触发次数"
                },
                {
                    talent_classname: "special_bonus_unique_imba_enigma_3",
                    name: "+{s:bonus_eidolon_bonus_damage} 虚灵攻击力"
                },
                {
                    talent_classname: "special_bonus_unique_imba_enigma_4",
                    name: "+{s:bonus_eidolon_bonus_attack_speed} 虚灵攻击速度"
                },
                {
                    talent_classname: "special_bonus_unique_imba_enigma_5",
                    name: "+{s:bonus_damage} 憎恶触发伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_enigma_6",
                    name: "+{s:bonus_damage} 黑洞每秒伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_enigma_9",
                    name: "+{s:bonus_radius} 午夜凋零范围"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "enigma_facets_imba_1",
            name: "",
            description: ""
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_enigma_gravity_well",
            name: "重力井",
            description: "受到的伤害减少。"
        },
        {
            modifier_classname: "modifier_imba_enigma_midnight_pulse_damage",
            name: "午夜凋零",
            description: "每秒受到{MODIFIER_PROPERTY_TOOLTIP}点伤害。"
        },
        {
            modifier_classname: "modifier_imba_enigma_malefice",
            name: "憎恶",
            description: "受到{MODIFIER_PROPERTY_TOOLTIP}伤害并被眩晕{MODIFIER_PROPERTY_TOOLTIP}秒，每隔{MODIFIER_PROPERTY_TOOLTIP}秒。"
        },
        {
            modifier_classname: "modifier_imba_enigma_black_hole_pull",
            name: "黑洞",
            description: "每秒受到伤害，被眩晕，并被拉向黑洞中心。"
        },
        {
            modifier_classname: "modifier_imba_enigma_black_hole_pull_scepter",
            name: "黑洞",
            description: "被牵引至视界中。"
        },
        {
            modifier_classname: "modifier_imba_enigma_event_horizon_aura_effect",
            name: "事件视界",
            description: "移动速度减少{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。"
        }
    ]
};