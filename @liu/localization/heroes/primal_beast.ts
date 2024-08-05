import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_primal_beast_onslaught",
            ability_specials: [
                {
                    ability_special: "charge_speed",
                    text: "冲跑速度："
                },
                {
                    ability_special: "chargeup_time",
                    text: ""
                },
                {
                    ability_special: "knockback_radius",
                    text: ""
                },
                {
                    ability_special: "max_distance",
                    text: "最大距离："
                },
                {
                    ability_special: "knockback_distance",
                    text: ""
                },
                {
                    ability_special: "knockback_damage",
                    text: "伤害："
                },
                {
                    ability_special: "knockback_duration",
                    text: ""
                },
                {
                    ability_special: "max_charge_time",
                    text: "最远冲跑所需时间："
                },
                {
                    ability_special: "turn_rate",
                    text: ""
                },
                {
                    ability_special: "base_power",
                    text: ""
                },
                {
                    ability_special: "movement_turn_rate",
                    text: ""
                },
                {
                    ability_special: "stun_duration",
                    text: "眩晕时间："
                }
            ],
            name: "突",
            description: "獸积蓄力量再向选定方向冲去，将敌人和队友同时击退。敌方单位被撞时受到伤害，并且被眩晕。蓄力时间越长，獸冲的距离越远。\\n\\n可以随时使用停止指令来中止。",
            lore: "獸对眼中猎物的专一让其他犹豫不决的人在他毁灭性的冲击下四散而逃。",
            notes: []
        },
        {
            ability_classname: "imba_primal_beast_onslaught_release",
            ability_specials: [],
            name: "正在突进",
            description: "开始奔向指定地点。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_primal_beast_trample",
            ability_specials: [
                {
                    ability_special: "effect_radius",
                    text: "伤害范围："
                },
                {
                    ability_special: "step_distance",
                    text: ""
                },
                {
                    ability_special: "base_damage",
                    text: "基础伤害："
                },
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "attack_damage",
                    text: "%攻击力系数："
                },
                {
                    ability_special: "bonus_magic_resistance",
                    text: ""
                },
                {
                    ability_special: "AbilityCooldown",
                    text: ""
                },
                {
                    ability_special: "unslowable",
                    text: ""
                },
                {
                    ability_special: "proc_attack_modifiers",
                    text: ""
                },
                {
                    ability_special: "bonus_movespeed_pct_self",
                    text: "%自身移动速度加成："
                },
                {
                    ability_special: "bonus_movespeed_pct_allies",
                    text: ""
                },
                {
                    ability_special: "aura_radius",
                    text: "光环作用范围："
                },
                {
                    ability_special: "bonus_movespeed_pct_extra",
                    text: "%主动开启后额外速度加成："
                }
            ],
            name: "踏",
            description: "獸践踏一切。每行进{step_distance}距离就会对獸附近范围内所有敌人造成伤害。伤害量为基础伤害加上獸攻击力的一定系数。獸在技能期间被缴械。",
            lore: "由于獸是他的种族中唯一一个来到这个世上，当地人只能通过他的亲戚来推测獸的尺寸。要不是观测的目标会吃掉看到的一切，又消灭了大部分看不到的，那这样的观测肯定会容易很多。",
            notes: []
        },
        {
            ability_classname: "imba_primal_beast_uproar",
            ability_specials: [
                {
                    ability_special: "bonus_damage",
                    text: "基础额外攻击力："
                },
                {
                    ability_special: "bonus_damage_per_stack",
                    text: "每层叠加攻击力加成："
                },
                {
                    ability_special: "stack_limit",
                    text: "最大叠加层数："
                },
                {
                    ability_special: "damage_limit",
                    text: ""
                },
                {
                    ability_special: "stack_duration",
                    text: ""
                },
                {
                    ability_special: "move_slow_per_stack",
                    text: "%每层叠加移速减缓："
                },
                {
                    ability_special: "slow_duration",
                    text: "减速持续时间："
                },
                {
                    ability_special: "damage_min",
                    text: ""
                },
                {
                    ability_special: "damage_max",
                    text: ""
                },
                {
                    ability_special: "radius",
                    text: "咆哮作用范围："
                },
                {
                    ability_special: "roared_bonus_attack_speed",
                    text: ""
                },
                {
                    ability_special: "roared_bonus_armor",
                    text: "每层叠加咆哮护甲加成："
                },
                {
                    ability_special: "roar_duration",
                    text: ""
                },
                {
                    ability_special: "should_dispell",
                    text: ""
                },
                {
                    ability_special: "projectiles_per_stack",
                    text: ""
                },
                {
                    ability_special: "projectile_distance",
                    text: ""
                },
                {
                    ability_special: "projectile_width",
                    text: ""
                },
                {
                    ability_special: "projectile_damage",
                    text: "伤害："
                },
                {
                    ability_special: "projectile_speed",
                    text: ""
                },
                {
                    ability_special: "splinter_angle",
                    text: ""
                },
                {
                    ability_special: "max_split_amount",
                    text: ""
                },
                {
                    ability_special: "split_delay",
                    text: "分裂延迟："
                },
                {
                    ability_special: "projectile_break_duration",
                    text: "破坏持续时间："
                },
                {
                    ability_special: "projectile_waves",
                    text: ""
                }
            ],
            name: "咤",
            description: "獸的脾性被动地提供额外攻击力。另外，獸每次受到的敌方英雄伤害超过{damage_limit}点后就会获得咤的叠加效果。\\n\\n主动施放后，獸释放出咆哮声，减速附近敌人，并且獸根据咤的当前叠加层数获得额外攻击力和护甲，持续{roar_duration}秒。",
            lore: "在永雾林渊现身时獸就已身披破碎的锁链，如今他不会容许任何征服的企图。",
            notes: [
                "破坏会使被动的攻击力加成失效。",
                "破坏会使技能无法获得新的叠加效果。"
            ]
        },
        {
            ability_classname: "imba_primal_beast_pulverize",
            ability_specials: [
                {
                    ability_special: "splash_radius",
                    text: "作用范围："
                },
                {
                    ability_special: "interval",
                    text: "捶击间隔："
                },
                {
                    ability_special: "ministun",
                    text: "眩晕时间："
                },
                {
                    ability_special: "cast_range",
                    text: ""
                },
                {
                    ability_special: "animation_rate",
                    text: ""
                },
                {
                    ability_special: "damage",
                    text: "捶击伤害："
                },
                {
                    ability_special: "bonus_aoe_duration",
                    text: ""
                },
                {
                    ability_special: "bonus_aoe_pct_per_hit",
                    text: ""
                },
                {
                    ability_special: "channel_time",
                    text: ""
                },
                {
                    ability_special: "pierce_immunity",
                    text: ""
                },
                {
                    ability_special: "bonus_damage_per_hit",
                    text: "每次捶击额外伤害："
                }
            ],
            name: "捶",
            description: "持续施法 - 獸释放出他的怒火，抓起敌方目标，反复将其向地面捶击，对范围内所有敌人造成伤害和短暂眩晕。每次连续击中会造成额外伤害。持续{channel_time}秒。",
            lore: "虽然没人能肯定獸的嘟哝声是否具有真正的含义，但大多数都会同意，獸强劲的握力还有将一切粉碎为肉酱的倾向充分表达了他的意图。",
            notes: []
        },
        {
            ability_classname: "imba_primal_beast_rock_throw",
            ability_specials: [
                {
                    ability_special: "base_damage",
                    text: "伤害："
                },
                {
                    ability_special: "impact_radius",
                    text: "冲击作用范围："
                },
                {
                    ability_special: "min_range",
                    text: "最近距离："
                },
                {
                    ability_special: "min_travel_time",
                    text: "最短行进时间："
                },
                {
                    ability_special: "max_travel_time",
                    text: "最长行进时间："
                },
                {
                    ability_special: "bounce_travel_time",
                    text: ""
                },
                {
                    ability_special: "stun_duration",
                    text: "眩晕时间："
                },
                {
                    ability_special: "fragment_impact_distance",
                    text: "碎石飞行距离："
                },
                {
                    ability_special: "fragment_impact_radius",
                    text: "碎石冲击作用范围："
                }
            ],
            name: "砸",
            description: "獸向目标地点扔出一块岩石，对敌人造成眩晕和伤害。岩石无法扔向獸身边的最小范围内。岩石落地后会分裂成3块碎石，落在初始目标地点的后方。<br><br>砸每击中一名英雄都会增加咤的一层叠加效果。",
            lore: "又是岩石！",
            notes: []
        },
        {
            ability_classname: "imba_primal_beast_colossal",
            ability_specials: [
                {
                    ability_special: "bonus_building_damage",
                    text: ""
                }
            ],
            name: "",
            description: "",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_primal_beast_innate_slow_resistance_per_time",
            ability_specials: [
                {
                    ability_special: "slow_resistance_per_upgrade",
                    text: ""
                },
                {
                    ability_special: "upgrade_rate",
                    text: ""
                }
            ],
            name: "",
            description: "",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_primal_beast_innate_status_resistance_per_time",
            ability_specials: [
                {
                    ability_special: "status_resistance_per_upgrade",
                    text: ""
                },
                {
                    ability_special: "upgrade_rate",
                    text: ""
                }
            ],
            name: "",
            description: "",
            lore: "",
            notes: []
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_primal_beast_roar_dispells",
                    name: ""
                },
                {
                    talent_classname: "special_bonus_unique_imba_primal_beast_onslaught_damage",
                    name: ""
                },
                {
                    talent_classname: "special_bonus_unique_imba_primal_beast_trample_attack_damage",
                    name: "+{s:bonus_attack_damage}% 踏攻击力系数"
                },
                {
                    talent_classname: "special_bonus_unique_imba_primal_beast_pulverize_duration",
                    name: "+{s:bonus_channel_time}% 捶持续时间"
                },
                {
                    talent_classname: "special_bonus_unique_imba_primal_beast_uproar_armor",
                    name: "+{s:bonus_roared_bonus_armor} 咤每层叠加护甲"
                },
                {
                    talent_classname: "special_bonus_unique_imba_primal_beast_trample_magic_resist",
                    name: ""
                },
                {
                    talent_classname: "special_bonus_unique_imba_primal_beast_trample_cooldown",
                    name: ""
                },
                {
                    talent_classname: "special_bonus_unique_imba_primal_beast_trample_unslowable",
                    name: ""
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "primal_beast_facets_imba_1",
            name: "",
            description: ""
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_primal_beast_trample",
            name: "踏",
            description: "行进时对獸附近所有敌人造成伤害。"
        },
        {
            modifier_classname: "modifier_imba_primal_beast_trample_Note0",
            name: "破坏会使被动的移速加成和移速光环失效。"
        },
        {
            modifier_classname: "modifier_imba_primal_beast_trample_haste",
            name: "袭",
            description: "获得{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%移动速度加成。"
        },
        {
            modifier_classname: "modifier_imba_primal_beast_uproar",
            name: "咤",
            description: "獸的攻击力增加，并且减速敌人。"
        },
        {
            modifier_classname: "modifier_imba_primal_beast_uproar_slow",
            name: "咤",
            description: "被獸减速"
        },
        {
            modifier_classname: "modifier_imba_primal_beast_roared_self",
            name: "已咤",
            description: "获得额外攻击力和护甲"
        },
        {
            modifier_classname: "modifier_imba_primal_beast_onslaught_windup",
            name: "突",
            description: "突在蓄力中"
        },
        {
            modifier_classname: "modifier_imba_primal_beast_onslaught_movement_adjustable",
            name: "突的移动",
            description: "向前冲刺，对獸撞到的敌人造成眩晕。"
        },
        {
            modifier_classname: "modifier_imba_primal_beast_pulverize",
            name: "被捶",
            description: "被獸抓住。"
        },
        {
            modifier_classname: "modifier_imba_primal_beast_pulverize_self",
            name: "捶",
            description: "持续释放獸的狂怒，反复捶击目标。"
        },
        {
            modifier_classname: "modifier_imba_primal_beast_pulverize_aoe_buff",
            name: "凶",
            description: "物品和技能的作用范围提升{MODIFIER_PROPERTY_AOE_BONUS_PERCENTAGE}%。"
        }
    ]
};