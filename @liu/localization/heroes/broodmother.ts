import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_broodmother_spawn_spiderlings",
            ability_specials: [
                {
                    ability_special: "buff_duration",
                    text: ""
                },
                {
                    ability_special: "spiderling_duration",
                    text: "小蜘蛛持续时间："
                },
                {
                    ability_special: "damage",
                    text: "伤害："
                },
                {
                    ability_special: "damage_bonus",
                    text: ""
                },
                {
                    ability_special: "hp_bonus",
                    text: ""
                },
                {
                    ability_special: "count",
                    text: "数量："
                },
                {
                    ability_special: "projectile_speed",
                    text: ""
                },
                {
                    ability_special: "tooltip_spiderling_hp",
                    text: "小蜘蛛生命值："
                },
                {
                    ability_special: "slow_duration",
                    text: ""
                },
                {
                    ability_special: "movement_speed",
                    text: "%减速："
                }
            ],
            name: "孵化蜘蛛",
            description: "育母蜘蛛将她的卵注入敌人体内，造成伤害和减速，持续{slow_duration}秒。如果目标在感染期间被击杀，卵会孵化成小蜘蛛。",
            lore: "布蕾克·艾拉齐娜不断抚育她的后代，即使是在战场上。新孵化的小蜘蛛很快就学会如何支援她们的母亲。",
            notes: [
                "如果目标在受到此技能后{buff_duration}秒内被杀死，小蜘蛛就会孵化。",
                "被小蜘蛛杀死的单位会生出额外的小蜘蛛。"
            ]
        },
        {
            ability_classname: "imba_broodmother_poison_sting",
            ability_specials: [
                {
                    ability_special: "movement_speed",
                    text: "%移动速度减缓："
                },
                {
                    ability_special: "duration_hero",
                    text: "持续时间（英雄）："
                },
                {
                    ability_special: "duration",
                    text: "持续时间（对普通单位）："
                }
            ],
            name: "毒刺",
            description: "每次攻击都会减缓敌人的移动速度。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_broodmother_spawn_spiderite",
            ability_specials: [
                {
                    ability_special: "spiderite_duration",
                    text: "生存时间："
                },
                {
                    ability_special: "buff_duration",
                    text: "感染时间："
                }
            ],
            name: "孵化蜘蛛",
            description: "攻击会感染敌人。如果目标在感染期内死亡，一只小蜘蛛会从尸体中产出。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_broodmother_spin_web",
            ability_specials: [
                {
                    ability_special: "radius",
                    text: ""
                },
                {
                    ability_special: "count",
                    text: "蛛网数量上限："
                },
                {
                    ability_special: "health_regen",
                    text: ""
                },
                {
                    ability_special: "bonus_movespeed",
                    text: "%移动速度加成："
                },
                {
                    ability_special: "AbilityChargeRestoreTime",
                    text: ""
                },
                {
                    ability_special: "bonus_turn_rate",
                    text: "额外转身速率："
                },
                {
                    ability_special: "degen",
                    text: "%敌人生命恢复降低："
                }
            ],
            name: "织网",
            description: "编织出一张蜘蛛网，育母蜘蛛在蛛网里被动提升移动速度和转身速率，并且获得无视地形移动的能力。<br><br>织网拥有最多{AbilityCharges}点能量点数，充能时间为每{abilitychargerestoretime}秒。<br><br>织网现在可向其他蛛网触及的区域全地图施放。蛛网永久存在，不过可以手动摧毁。当其数量超过上限，最早的蛛网将会消失。",
            lore: "编制出一张蛛丝之床，艾拉齐娜的网保护她和她的后代，同时给予前进的敌人警告。",
            scepter_description: "提升蛛网内移动速度，并且提升蛛网最大数量",
            notes: [
                "也会作用于小蜘蛛。",
                "100{生命时获得全额移动速度加成，1点生命时获得0}移动速度加成"
            ]
        },
        {
            ability_classname: "imba_broodmother_spiders_milk",
            ability_specials: [
                {
                    ability_special: "kill_heal_heroes",
                    text: "%英雄生命值治疗："
                },
                {
                    ability_special: "kill_creeps_penalty",
                    text: ""
                },
                {
                    ability_special: "kill_heal_aoe",
                    text: "作用范围："
                },
                {
                    ability_special: "kill_heal_duration",
                    text: "加成持续时间："
                },
                {
                    ability_special: "tick_rate",
                    text: ""
                }
            ],
            name: "蜘蛛奶",
            description: "育母蜘蛛击杀一个单位后，她和{kill_heal_aoe}范围内她控制的所有单位都会获得一个状态效果，每{tick_rate}秒治疗一定生命，治疗量为遇害者生命值的一定百分比。非英雄单位提供的治疗量减少{kill_creeps_penalty}%。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_broodmother_silken_bola",
            ability_specials: [
                {
                    ability_special: "movement_speed",
                    text: "%移动速度减缓："
                },
                {
                    ability_special: "aoe",
                    text: ""
                },
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "roots",
                    text: ""
                },
                {
                    ability_special: "projectile_speed",
                    text: ""
                },
                {
                    ability_special: "impact_damage",
                    text: "即时伤害："
                },
                {
                    ability_special: "attack_damage",
                    text: "额外攻击伤害："
                },
                {
                    ability_special: "miss_chance",
                    text: "%落空概率："
                }
            ],
            name: "丝质重器",
            description: "造成即时伤害，然后减缓敌方目标的移动速度，使他们攻击落空。攻击该目标的单位还会造成额外魔法伤害。",
            lore: "",
            shard_description: "丝质重器变成范围型技能并且攻击落空几率提升。",
            notes: []
        },
        {
            ability_classname: "imba_broodmother_incapacitating_bite",
            ability_specials: [
                {
                    ability_special: "miss_chance",
                    text: "%落空概率："
                },
                {
                    ability_special: "bonus_movespeed",
                    text: "%移动速度减缓："
                },
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "attack_damage",
                    text: "额外攻击伤害："
                }
            ],
            name: "麻痹之咬",
            description: "育母蜘蛛用毒液削弱敌方单位，使她的攻击带有减速效果，中毒单位的攻击有一定概率落空，并且被攻击时承受额外伤害。",
            lore: "布蕾克·艾拉齐娜的尖牙中布满麻痹毒素，对侵入蛛网的敌人造成缓慢而痛苦的死亡。",
            notes: [
                "攻击落空几率与闪避和上下坡丢失叠加。"
            ]
        },
        {
            ability_classname: "imba_broodmother_insatiable_hunger",
            ability_specials: [
                {
                    ability_special: "bonus_damage",
                    text: "%基础攻击力加成："
                },
                {
                    ability_special: "lifesteal_pct",
                    text: "%吸血："
                },
                {
                    ability_special: "creep_lifesteal_reduction_pct",
                    text: ""
                },
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "bat_bonus",
                    text: ""
                },
                {
                    ability_special: "shard_damage_per_tick",
                    text: ""
                },
                {
                    ability_special: "shard_damage_tick_interval",
                    text: ""
                },
                {
                    ability_special: "aura_radius",
                    text: "小蜘蛛作用范围："
                }
            ],
            name: "极度饥渴",
            description: "对活物体液的强烈饥渴提高了育母蜘蛛的攻击力，并使她的攻击附带吸血效果。对非英雄单位的吸血效果减少{creep_lifesteal_reduction_pct}%。",
            lore: "虽然大多数猎物都被她用丝茧包裹，作为饲料留给后代，但育母蜘蛛对那些迷路的英雄情有独钟。",
            notes: [
                "与其他吸血效果完全叠加。"
            ]
        },
        {
            ability_classname: "imba_broodmother_sticky_snare",
            ability_specials: [
                {
                    ability_special: "formation_delay",
                    text: "成形延迟："
                },
                {
                    ability_special: "root_duration",
                    text: "缠绕持续时间："
                },
                {
                    ability_special: "damage_per_second",
                    text: "每秒伤害："
                },
                {
                    ability_special: "count",
                    text: ""
                },
                {
                    ability_special: "width",
                    text: "网线宽度："
                }
            ],
            name: "蛛纱陷阱",
            description: "",
            lore: "蛛网上细微的颤动就是艾拉齐娜找到猎物所需要的一切。",
            notes: []
        },
        {
            ability_classname: "imba_broodmother_spin_web_destroy",
            ability_specials: [],
            name: "摧毁蛛网",
            description: "摧毁选中的蛛网。",
            lore: "",
            notes: []
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_broodmother_1",
                    name: "极度饥渴期间-{s:bonus_bat_bonus}秒基础攻击间隔"
                },
                {
                    talent_classname: "special_bonus_unique_imba_broodmother_2",
                    name: "+{s:bonus_attack_damage} 麻痹之咬额外攻击伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_broodmother_3",
                    name: "+{s:bonus_damage} 孵化蜘蛛伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_broodmother_4",
                    name: "+{s:bonus_miss_chance}% 麻痹之咬减速/落空"
                },
                {
                    talent_classname: "special_bonus_unique_imba_broodmother_5",
                    name: "-{s:bonus_AbilityChargeRestoreTime}秒 织网充能"
                },
                {
                    talent_classname: "special_bonus_unique_imba_broodmother_6",
                    name: "+{s:bonus_count} 织网最多蛛网"
                },
                {
                    talent_classname: "special_bonus_unique_imba_broodmother_7",
                    name: "+{s:bonus_hp_bonus} 小蜘蛛生命"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "broodmother_facets_imba_1",
            name: "",
            description: ""
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_broodmother_spiders_milk_heal",
            name: "蜘蛛奶",
            description: "持续治疗。"
        },
        {
            modifier_classname: "modifier_imba_broodmother_spawn_spiderlings",
            name: "孵化蜘蛛",
            description: "被杀死的话，会生出一定数量的小蜘蛛。"
        },
        {
            modifier_classname: "modifier_imba_broodmother_spawn_spiderlings_slow",
            name: "孵化蜘蛛",
            description: "移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。"
        },
        {
            modifier_classname: "modifier_imba_broodmother_spin_web",
            name: "织网",
            description: "生命恢复提升{MODIFIER_PROPERTY_HEALTH_REGEN_CONSTANT}点/秒，移动速度提升{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。"
        },
        {
            modifier_classname: "modifier_imba_broodmother_spin_web_charge_counter",
            name: "织网能量点数",
            description: "只要有能量点数就能随时施放织网。"
        },
        {
            modifier_classname: "modifier_imba_broodmother_spin_web_degen",
            name: "坏死之网",
            description: "蛛网中生命恢复减少{MODIFIER_PROPERTY_HP_REGEN_AMPLIFY_PERCENTAGE}%。"
        },
        {
            modifier_classname: "modifier_imba_broodmother_incapacitating_bite_orb",
            name: "麻痹之咬",
            description: "落空率提升{MODIFIER_PROPERTY_MISS_PERCENTAGE}%，移动速度降低{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。"
        },
        {
            modifier_classname: "modifier_imba_broodmother_insatiable_hunger",
            name: "极度饥渴",
            description: "基础攻击力提升{MODIFIER_PROPERTY_BASEDAMAGEOUTGOING_PERCENTAGE}%，而且拥有{MODIFIER_PROPERTY_TOOLTIP}%吸血效果。"
        },
        {
            modifier_classname: "modifier_imba_broodmother_insatiable_hunger_aura",
            name: "极度饥渴光环"
        },
        {
            modifier_classname: "modifier_imba_broodmother_spawn_spiderite_debuff",
            name: "孵化蜘蛛",
            description: "被杀死的话，会生出一只小蜘蛛。"
        },
        {
            modifier_classname: "modifier_imba_broodmother_poison_sting_debuff",
            name: "毒刺",
            description: "每秒受到{MODIFIER_PROPERTY_TOOLTIP}点伤害，移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。"
        },
        {
            modifier_classname: "modifier_imba_broodmother_sticky_snare_root",
            name: "蛛纱陷阱",
            description: "被缠在蛛网中。"
        },
        {
            modifier_classname: "modifier_imba_broodmother_silken_bola",
            name: "丝质重器",
            description: "移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%，受到敌人攻击时额外承受魔法伤害，并且攻击落空{MODIFIER_PROPERTY_MISS_PERCENTAGE}%。"
        }
    ]
};