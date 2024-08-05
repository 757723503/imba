import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_warlock_fatal_bonds",
            ability_specials: [
                {
                    ability_special: "count",
                    text: "连接敌人数："
                },
                {
                    ability_special: "damage_share_percentage",
                    text: "%伤害共享："
                },
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "search_aoe",
                    text: ""
                }
            ],
            name: "致命连接",
            description: "将数个敌方单位连接在一起，其中一人所受伤害的一定百分比会被其他所有人感受到。",
            lore: "一个远古咒语，能将多个生命体的生命能量连接成一个集合体。",
            notes: [
                "共享伤害的类型与原伤害相同。"
            ]
        },
        {
            ability_classname: "imba_warlock_shadow_word",
            ability_specials: [
                {
                    ability_special: "damage",
                    text: "治疗/伤害："
                },
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "tick_interval",
                    text: ""
                },
                {
                    ability_special: "spell_aoe",
                    text: "作用范围："
                },
                {
                    ability_special: "shard_movement_speed_pct",
                    text: ""
                },
                {
                    ability_special: "AbilityCooldown",
                    text: ""
                }
            ],
            name: "暗言术",
            description: "术士低声说出一个咒语，对一个单位施展法术，使周围的敌方单位受到伤害，周围的友方单位被治疗。目标单位也会被治疗或受到伤害，取决于他是友军还是敌人。",
            lore: "戴蒙的奥术有无穷的用途，可以用来强化友军也可以用作诅咒伤害敌人。",
            shard_description: "暗言术变为{shard_aoe}范围的技能。",
            notes: []
        },
        {
            ability_classname: "imba_warlock_upheaval",
            ability_specials: [
                {
                    ability_special: "aoe",
                    text: "作用范围："
                },
                {
                    ability_special: "slow_per_second",
                    text: "%每秒减速："
                },
                {
                    ability_special: "duration",
                    text: ""
                },
                {
                    ability_special: "max_slow",
                    text: "%最大减速："
                },
                {
                    ability_special: "aspd_per_second",
                    text: ""
                },
                {
                    ability_special: "base_damage",
                    text: ""
                },
                {
                    ability_special: "damage_per_second",
                    text: "每秒伤害："
                },
                {
                    ability_special: "max_damage",
                    text: "最高伤害："
                },
                {
                    ability_special: "damage_tick_interval",
                    text: ""
                },
                {
                    ability_special: "AbilityCooldown",
                    text: ""
                },
                {
                    ability_special: "imps_interval",
                    text: ""
                },
                {
                    ability_special: "minor_imp_duration",
                    text: ""
                }
            ],
            name: "剧变",
            description: "持续施法 - 随施法时间增强的减速气流，还会造成伤害。持续最多{abilitychanneltime}秒。在魔法结束或目标离开生效区域后，敌人仍会被减速{duration}秒。",
            lore: "戴蒙操纵时空，削弱所有敌军。",
            shard_description: "持续施法时每{imps_interval}秒术士会召唤一个魔童，持续{minor_imp_duration}秒，魔童死亡时会爆炸，对周围所有敌人造成伤害。",
            notes: [
                "减速效果的增加是根据持续施法的时长，而不是敌人在区内停留的持续时间。"
            ]
        },
        {
            ability_classname: "imba_warlock_rain_of_chaos",
            ability_specials: [
                {
                    ability_special: "golem_duration",
                    text: ""
                },
                {
                    ability_special: "stun_duration",
                    text: ""
                },
                {
                    ability_special: "aoe",
                    text: "召唤冲击作用范围："
                },
                {
                    ability_special: "golem_hp",
                    text: "地狱火生命值："
                },
                {
                    ability_special: "golem_dmg",
                    text: "地狱火攻击力："
                },
                {
                    ability_special: "golem_armor",
                    text: ""
                },
                {
                    ability_special: "golem_movement_speed",
                    text: "地狱火移动速度："
                },
                {
                    ability_special: "golem_health_regen",
                    text: "地狱火生命恢复："
                },
                {
                    ability_special: "golem_gold_bounty",
                    text: ""
                },
                {
                    ability_special: "stun_delay",
                    text: ""
                },
                {
                    ability_special: "number_of_golems_scepter",
                    text: ""
                },
                {
                    ability_special: "golem_hp_scepter",
                    text: "地狱火生命值："
                },
                {
                    ability_special: "golem_dmg_scepter",
                    text: "地狱火攻击力："
                },
                {
                    ability_special: "golem_gold_bounty_scepter",
                    text: "地狱火击杀金钱："
                },
                {
                    ability_special: "bonus_magic_resistance",
                    text: ""
                },
                {
                    ability_special: "bonus_armor",
                    text: ""
                },
                {
                    ability_special: "tooltip_golem_armor",
                    text: "地狱火护甲："
                },
                {
                    ability_special: "bonus_slow_resistance",
                    text: "%地狱火减速抗性："
                },
                {
                    ability_special: "tooltip_manahealthboost",
                    text: "%生命/魔法恢复转为献祭伤害："
                }
            ],
            name: "混乱之祭",
            description: "从深渊召唤一个地狱火，眩晕敌人{stun_duration}秒。地狱火持续{golem_duration}秒，能够减免部分技能的伤害，具有较高的减速抗性，拥有永久献祭和烈焰之拳技能。",
            lore: "戴蒙释放被他关在恐惧之木法杖中的异界灵魂，在敌阵中引发毁灭。",
            scepter_description: "召唤{number_of_golems_scepter}个地狱火。",
            notes: [
                "该技能将摧毁作用范围内的树木。"
            ]
        },
        {
            ability_classname: "imba_warlock_golem_flaming_fists",
            ability_specials: [
                {
                    ability_special: "damage",
                    text: "额外伤害："
                },
                {
                    ability_special: "radius",
                    text: ""
                }
            ],
            name: "烈焰之拳",
            description: "在攻击时对附近敌方单位造成额外伤害。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_warlock_golem_permanent_immolation",
            ability_specials: [
                {
                    ability_special: "aura_radius",
                    text: "献祭作用范围："
                },
                {
                    ability_special: "aura_damage",
                    text: "伤害："
                },
                {
                    ability_special: "health_bonus_pct",
                    text: ""
                },
                {
                    ability_special: "share_damage",
                    text: ""
                },
                {
                    ability_special: "tick_interval",
                    text: ""
                },
                {
                    ability_special: "manahealthboost",
                    text: ""
                },
                {
                    ability_special: "manaboost_scale_mult",
                    text: ""
                }
            ],
            name: "永久献祭",
            description: "地狱火燃烧它周围的敌方单位，每秒造成伤害。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_warlock_imp_explode",
            ability_specials: [
                {
                    ability_special: "explosion_delay",
                    text: ""
                },
                {
                    ability_special: "explosion_radius",
                    text: ""
                },
                {
                    ability_special: "explosion_dmg",
                    text: ""
                },
                {
                    ability_special: "explosion_nonhero_reduce",
                    text: ""
                },
                {
                    ability_special: "bonus_hp",
                    text: ""
                },
                {
                    ability_special: "bonus_dmg",
                    text: ""
                },
                {
                    ability_special: "bonus_movespeed",
                    text: ""
                }
            ],
            name: "",
            description: "",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_warlock_imp_explode_major",
            ability_specials: [
                {
                    ability_special: "explosion_delay",
                    text: ""
                },
                {
                    ability_special: "explosion_radius",
                    text: ""
                },
                {
                    ability_special: "explosion_dmg",
                    text: ""
                },
                {
                    ability_special: "explosion_nonhero_reduce",
                    text: ""
                },
                {
                    ability_special: "bonus_hp",
                    text: ""
                },
                {
                    ability_special: "bonus_dmg",
                    text: ""
                },
                {
                    ability_special: "bonus_movespeed",
                    text: ""
                }
            ],
            name: "",
            description: "",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_warlock_eldritch_summoning",
            ability_specials: [
                {
                    ability_special: "minor_imp_duration",
                    text: ""
                },
                {
                    ability_special: "imp_level",
                    text: ""
                },
                {
                    ability_special: "golem_can_summon",
                    text: ""
                },
                {
                    ability_special: "tooltip_imp_health",
                    text: ""
                },
                {
                    ability_special: "tooltip_imp_explode",
                    text: ""
                },
                {
                    ability_special: "tooltip_imp_explode_radius",
                    text: ""
                }
            ],
            name: "邪术召唤",
            description: "只要敌方单位在受到一个或多个术士的技能作用下阵亡，就会召唤出一个魔童，持续{minor_imp_duration}秒，死亡时会爆炸。魔童会自动搜寻附近单位，优先选择致命连接下的英雄，到达猎物时就会爆炸。",
            lore: "",
            notes: [
                "魔童拥有{tooltip_imp_health}点生命值，爆炸会在{tooltip_imp_explode_radius}范围内造成{tooltip_imp_explode}点伤害。"
            ]
        },
        {
            ability_classname: "imba_warlock_black_grimoire",
            ability_specials: [
                {
                    ability_special: "tooltip_xp",
                    text: ""
                },
                {
                    ability_special: "tooltip_seconds",
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
                    talent_classname: "special_bonus_unique_imba_warlock_1",
                    name: ""
                },
                {
                    talent_classname: "special_bonus_unique_imba_warlock_2",
                    name: ""
                },
                {
                    talent_classname: "special_bonus_unique_imba_warlock_3",
                    name: ""
                },
                {
                    talent_classname: "special_bonus_unique_imba_warlock_4",
                    name: ""
                },
                {
                    talent_classname: "special_bonus_unique_imba_warlock_5",
                    name: ""
                },
                {
                    talent_classname: "special_bonus_unique_imba_warlock_7",
                    name: ""
                },
                {
                    talent_classname: "special_bonus_unique_imba_warlock_10",
                    name: "",
                    description: "最高+70 攻击速度"
                },
                {
                    talent_classname: "special_bonus_unique_imba_warlock_upheaval_aoe",
                    name: "+{s:bonus_aoe} 剧变作用范围"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "warlock_facets_imba_1",
            name: "",
            description: ""
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_warlock_fatal_bonds",
            name: "致命连接",
            description: "受到的所有伤害的{MODIFIER_PROPERTY_TOOLTIP}%会被分给连接在一起的所有单位。"
        },
        {
            modifier_classname: "modifier_imba_warlock_shadow_word",
            name: "暗言术",
            description: "作为敌人将受到持续伤害，作为友军则受到持续治疗。"
        },
        {
            modifier_classname: "modifier_imba_warlock_upheaval",
            name: "剧变",
            description: "移动速度被降低。"
        },
        {
            modifier_classname: "modifier_imba_warlock_upheaval_ally",
            name: "剧变",
            description: "攻击速度提升{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}。"
        },
        {
            modifier_classname: "modifier_imba_warlock_golem_permanent_immolation_debuff",
            name: "献祭",
            description: "在地狱火附近时受到持续伤害"
        },
        {
            modifier_classname: "modifier_imba_warlock_golem_permanent_immolation",
            name: "格罗斯勇士",
            description: "永久献祭伤害提升{MODIFIER_PROPERTY_TOOLTIP}点。"
        }
    ]
};