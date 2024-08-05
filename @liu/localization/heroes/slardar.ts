import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_slardar_seaborn_sentinel",
            ability_specials: [
                {
                    ability_special: "river_speed",
                    text: ""
                },
                {
                    ability_special: "puddle_regen",
                    text: "生命恢复："
                },
                {
                    ability_special: "puddle_armor",
                    text: "护甲提升："
                },
                {
                    ability_special: "puddle_status_resistance",
                    text: "%状态抗性："
                },
                {
                    ability_special: "river_speed_tooltip",
                    text: "%移动速度加成："
                },
                {
                    ability_special: "river_damage",
                    text: "攻击力加成："
                }
            ],
            name: "汪洋前哨",
            description: "斯拉达在水洼或河道中将获得移动速度、生命恢复、攻击力和护甲加成。",
            lore: "",
            scepter_description: "在水洼或河道中获得额外生命恢复、护甲和状态抗性。",
            notes: []
        },
        {
            ability_classname: "imba_slardar_sprint",
            ability_specials: [
                {
                    ability_special: "AbilityCooldown",
                    text: ""
                },
                {
                    ability_special: "bonus_speed",
                    text: "%移动速度加成："
                },
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "speed_burst_percent",
                    text: "%移速爆发移动速度："
                },
                {
                    ability_special: "speed_burst_duration",
                    text: ""
                },
                {
                    ability_special: "speed_burst_max_duration",
                    text: "速度爆发持续时间："
                },
                {
                    ability_special: "slow_resistance_tooltip",
                    text: "%减速抗性："
                }
            ],
            name: "守卫冲刺",
            description: "斯拉达向前蜿行，移动速度得到显著提升，并且可以穿越单位。",
            lore: "斯拉达从深海来到陆地后，发现有必要用强有力的尾巴冲刺来代替游泳。",
            notes: [
                "开启此技能不会打断持续施法。"
            ]
        },
        {
            ability_classname: "imba_slardar_scepter",
            ability_specials: [],
            name: "",
            description: "",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_slardar_slithereen_crush",
            ability_specials: [
                {
                    ability_special: "crush_radius",
                    text: "作用范围："
                },
                {
                    ability_special: "crush_extra_slow",
                    text: "%移动速度减缓："
                },
                {
                    ability_special: "crush_attack_slow_tooltip",
                    text: "攻击速度降低："
                },
                {
                    ability_special: "crush_extra_slow_duration",
                    text: "减速持续时间："
                },
                {
                    ability_special: "stun_duration",
                    text: "眩晕时间："
                },
                {
                    ability_special: "puddle_duration",
                    text: "水洼持续时间："
                },
                {
                    ability_special: "puddle_radius",
                    text: "水洼作用范围："
                },
                {
                    ability_special: "crush_damage",
                    text: "伤害："
                },
                {
                    ability_special: "shard_amp_duration",
                    text: "雾霭持续时间："
                },
                {
                    ability_special: "shard_bonus_radius",
                    text: "额外作用范围："
                }
            ],
            name: "鱼人碎击",
            description: "猛击地面，留下一片水洼，对附近敌方单位造成伤害并眩晕。眩晕结束后还会受到减速。",
            lore: "强力的快速碎击，溅起的水浪打破最坚固的防御。",
            shard_description: "鱼人碎击会对受到作用的单位施加短时间的侵蚀雾霭。",
            scepter_description: "提升鱼人碎击水洼的作用范围和持续时间。",
            notes: []
        },
        {
            ability_classname: "imba_slardar_bash",
            ability_specials: [
                {
                    ability_special: "bonus_damage",
                    text: "额外伤害："
                },
                {
                    ability_special: "duration",
                    text: "眩晕时间："
                },
                {
                    ability_special: "attack_count",
                    text: ""
                }
            ],
            name: "深海重击",
            description: "攻击{attack_count}次后，下次攻击会击晕目标。对非英雄单位造成双倍伤害。",
            lore: "偷窃深海一族宝藏的盗贼在近身战斗中遇到了鱼人守卫的残暴之力。",
            notes: [
                "不能与碎颅锤叠加。"
            ]
        },
        {
            ability_classname: "imba_slardar_amplify_damage",
            ability_specials: [
                {
                    ability_special: "armor_reduction",
                    text: "护甲削弱："
                },
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "undispellable",
                    text: ""
                },
                {
                    ability_special: "puddle_radius",
                    text: ""
                },
                {
                    ability_special: "puddle_duration",
                    text: ""
                },
                {
                    ability_special: "has_self_buff",
                    text: ""
                },
                {
                    ability_special: "armor_pct",
                    text: ""
                }
            ],
            name: "侵蚀雾霭",
            description: "削弱敌人的护甲，加深他受到的物理伤害，同时提供目标的真实视域，显示隐身单位。敌方单位将在身后留下水迹，持续8秒。",
            lore: "即使是最坚硬的铠甲，一旦遇到海水也是不堪一击。",
            notes: []
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_slardar",
                    name: "+{s:bonus_crush_damage} 鱼人碎击伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_slardar_2",
                    name: "+{s:bonus_bonus_damage} 深海重击伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_slardar_3",
                    name: "侵蚀雾霭不可驱散"
                },
                {
                    talent_classname: "special_bonus_unique_imba_slardar_4",
                    name: "-{s:value}秒 鱼人碎击冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_slardar_5",
                    name: "-{s:bonus_armor_reduction} 侵蚀雾霭护甲"
                },
                {
                    talent_classname: "special_bonus_unique_imba_slardar_7",
                    name: "-{s:bonus_AbilityCooldown}秒 守卫冲刺冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_slardar_slithereen_crush_stun",
                    name: "+{s:bonus_stun_duration}秒 鱼人碎击眩晕"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "slardar_facets_imba_1",
            name: "",
            description: ""
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_slardar_seaborn_sentinel_river",
            name: "汪洋前哨",
            description: "获得移动速度、生命恢复、攻击力和护甲加成。斯拉达拥有阿哈利姆神杖后还将拥有状态抗性加成。"
        },
        {
            modifier_classname: "modifier_imba_slardar_sprint",
            name: "守卫冲刺",
            description: "移动速度提升{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。"
        },
        {
            modifier_classname: "modifier_imba_slardar_amplify_damage",
            name: "侵蚀雾霭",
            description: "护甲被降低{MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS}点。\\n为斯拉达提供真实视域。"
        },
        {
            modifier_classname: "modifier_imba_slardar_bash_active",
            name: "深海重击",
            description: "每4次普通攻击施加一次击晕效果。"
        },
        {
            modifier_classname: "modifier_imba_slardar_amplify_damage_self_buff",
            name: "苍洋守卫",
            description: "自身护甲提升，数值为侵蚀雾霭施加给敌人降低总护甲的{MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS}。"
        }
    ]
};