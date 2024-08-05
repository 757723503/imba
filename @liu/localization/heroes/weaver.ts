import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_weaver_the_swarm",
            ability_specials: [
                {
                    ability_special: "damage",
                    text: "甲虫攻击力："
                },
                {
                    ability_special: "attack_rate",
                    text: "攻击间隔："
                },
                {
                    ability_special: "count",
                    text: "数量："
                },
                {
                    ability_special: "armor_reduction",
                    text: "每次攻击削弱护甲："
                },
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "destroy_attacks",
                    text: "甲虫可承受攻击次数："
                },
                {
                    ability_special: "radius",
                    text: ""
                },
                {
                    ability_special: "speed",
                    text: ""
                },
                {
                    ability_special: "spawn_radius",
                    text: ""
                },
                {
                    ability_special: "shard_cooldown_reduction",
                    text: ""
                },
                {
                    ability_special: "experience_gain",
                    text: "每次攻击经验："
                }
            ],
            name: "虫群",
            description: "编织者放出{count}只编织者幼虫，每只幼虫都会紧紧缠住它遇到的敌人，攻击敌人并削弱他们的护甲，直到幼虫被杀死。",
            lore: "斯吉茨格尔打开时空之纱的缺口，让编织者幼虫穿越而出，帮助他战斗。",
            shard_description: "冷却时间降低{shard_cooldown_reduction}秒，并且虫群可以抓到隐身单位，并使其显形。",
            notes: [
                "甲虫抓住目标后将一直留在目标身上，除非甲虫被击杀或持续时间结束。",
                "甲虫免疫技能，需要一个单位的{destroy_attacks}次攻击才能被击杀。英雄造成双倍伤害。",
                "幼虫提供视野。"
            ]
        },
        {
            ability_classname: "imba_weaver_shukuchi",
            ability_specials: [
                {
                    ability_special: "damage",
                    text: "伤害："
                },
                {
                    ability_special: "speed",
                    text: ""
                },
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "fade_time",
                    text: "进入隐身时间："
                },
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "AbilityCooldown",
                    text: ""
                },
                {
                    ability_special: "geminate_attack_mark_duration",
                    text: ""
                },
                {
                    ability_special: "min_movespeed_override",
                    text: "移动速度："
                },
                {
                    ability_special: "shukuchi_attack_mark_radius",
                    text: ""
                },
                {
                    ability_special: "shukuchi_attack_delay",
                    text: ""
                },
                {
                    ability_special: "slow_duration",
                    text: "减速持续时间："
                },
                {
                    ability_special: "slow_percent",
                    text: "%移动速度减缓："
                }
            ],
            name: "缩地",
            description: "编织者进入隐身，获得最高移动速度，在穿过敌方单位时还将造成伤害。",
            lore: "编织者曾为创世之纱工作，小小的虫洞让他们可以穿越时间来更好的发挥他们的手艺。",
            notes: [
                "每次施放的技能只能对相同单位造成一次伤害。"
            ]
        },
        {
            ability_classname: "imba_weaver_geminate_attack",
            ability_specials: [
                {
                    ability_special: "delay",
                    text: ""
                },
                {
                    ability_special: "extra_attack",
                    text: ""
                },
                {
                    ability_special: "bonus_damage",
                    text: "连击额外攻击伤害："
                },
                {
                    ability_special: "shard_beetle_search_range",
                    text: ""
                }
            ],
            name: "连击",
            description: "允许编织者立刻发动两次攻击。",
            lore: "斯吉茨格尔与时间有着多变的联系，使他的动作被看到和感受到，不止一次。",
            shard_description: "连击还会击中虫群附着目标{shard_beetle_search_range}范围内的单位。",
            notes: [
                "第二次攻击将在编织者第一次攻击的{delay}秒后发出，并且没有距离限制。"
            ]
        },
        {
            ability_classname: "imba_weaver_time_lapse",
            ability_specials: [
                {
                    ability_special: "cooldown_scepter",
                    text: ""
                }
            ],
            name: "时光倒流",
            description: "编织者回到五秒前的时间点，获得当时的生命值和魔法值。不影响冷却时间、金钱和经验。\\n\\n驱散类型：强驱散",
            lore: "如果斯吉茨格尔认为世界当前的现实与他所渴望的不合，他就爬回过去的时间点来纠正错误。",
            scepter_description: "时光倒流可以对{abilitycastrange}施法距离内的友方英雄施放。",
            notes: [
                "能够移除编织者身上大部分的负面状态。",
                "时光倒流可以躲避攻击和技能弹道。"
            ]
        },
        {
            ability_classname: "imba_weaver_rewoven",
            ability_specials: [
                {
                    ability_special: "attack_range_increase_per_stack",
                    text: ""
                },
                {
                    ability_special: "duration",
                    text: ""
                }
            ],
            name: "重新编织",
            description: "编织者每次施放技能时，他会获得{attack_range_increase_per_stack}攻击距离，持续{duration}秒。这个效果独立叠加。",
            lore: "",
            notes: [
                "破坏会使技能无法获得新的叠加效果。",
                "破坏不会使现有叠加效果提供的加成失效。"
            ]
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_weaver_1",
                    name: "+{s:bonus_damage} 缩地伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_weaver_2",
                    name: "+{s:bonus_bonus_damage} 连击攻击伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_weaver_3",
                    name: "+{s:bonus_armor_reduction} 虫群削弱护甲"
                },
                {
                    talent_classname: "special_bonus_unique_imba_weaver_4",
                    name: "+{s:bonus_destroy_attacks} 虫群可被攻击次数"
                },
                {
                    talent_classname: "special_bonus_unique_imba_weaver_5",
                    name: "+{s:bonus_extra_attack} 连击"
                },
                {
                    talent_classname: "special_bonus_unique_imba_weaver_6",
                    name: "-{s:bonus_AbilityCooldown}秒 缩地冷却"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "weaver_facets_imba_1",
            name: "",
            description: ""
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_weaver_swarm_debuff",
            name: "虫群",
            description: "正在造成伤害并削弱护甲。"
        },
        {
            modifier_classname: "modifier_imba_weaver_shukuchi",
            name: "缩地",
            description: "正处于隐身并对穿过的单位造成伤害。"
        },
        {
            modifier_classname: "modifier_imba_weaver_rewoven",
            name: "重新编织",
            description: "编织者的攻击距离提升了{MODIFIER_PROPERTY_ATTACK_RANGE_BONUS}。"
        }
    ]
};