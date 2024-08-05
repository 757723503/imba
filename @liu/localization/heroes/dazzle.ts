import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_dazzle_rain_of_vermin",
            ability_specials: [
                {
                    ability_special: "duration",
                    text: ""
                },
                {
                    ability_special: "interval",
                    text: ""
                },
                {
                    ability_special: "radius",
                    text: ""
                },
                {
                    ability_special: "hex_chance",
                    text: ""
                },
                {
                    ability_special: "hex_duration",
                    text: ""
                },
                {
                    ability_special: "damage",
                    text: ""
                }
            ],
            name: "",
            description: "",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_dazzle_poison_touch",
            ability_specials: [
                {
                    ability_special: "start_radius",
                    text: ""
                },
                {
                    ability_special: "end_radius",
                    text: ""
                },
                {
                    ability_special: "end_distance",
                    text: ""
                },
                {
                    ability_special: "targets",
                    text: "目标数："
                },
                {
                    ability_special: "damage",
                    text: "每秒伤害："
                },
                {
                    ability_special: "slow",
                    text: "%减速："
                },
                {
                    ability_special: "projectile_speed",
                    text: ""
                },
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "bonus_damage",
                    text: ""
                },
                {
                    ability_special: "bonus_slow",
                    text: "%每次攻击增加减速："
                },
                {
                    ability_special: "hex_duration",
                    text: ""
                },
                {
                    ability_special: "attack_range_bonus",
                    text: ""
                },
                {
                    ability_special: "split_radius",
                    text: ""
                },
                {
                    ability_special: "split_damage",
                    text: "扩散伤害："
                },
                {
                    ability_special: "attacks_to_split",
                    text: ""
                }
            ],
            name: "剧毒之触",
            description: "施放一股锥形的毒素，可以打击多个敌方单位。造成持续伤害和减速。每当目标受到戴泽的攻击，负面效果的持续时间都会刷新，减速效果也会提升。",
            lore: "少数进攻性的德尊仪式之一，麻痹魔法经常显示出它的有用之处。",
            shard_description: "剧毒之触会使受作用的目标被妖术作用，持续{hex_duration}秒。",
            notes: [
                "伤害格挡类技能不能减少该技能伤害。"
            ]
        },
        {
            ability_classname: "imba_dazzle_shallow_grave",
            ability_specials: [
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "fx_halo_height",
                    text: ""
                },
                {
                    ability_special: "heal_amplify",
                    text: "{每缺失10}生命增强治疗："
                }
            ],
            name: "薄葬",
            description: "友军身受薄葬的福佑，在其保护下不论受到多大的伤害都不会阵亡。对该友军的治疗效果在持续时间内也会根据其生命值得到增强。",
            lore: "只有经验老道的暗影侍僧才能正确做出免死之仪式。",
            notes: [
                "在薄葬作用下生命值至少为1点，但是斧王的淘汰之刃还是可以斩杀目标英雄。"
            ]
        },
        {
            ability_classname: "imba_dazzle_shadow_wave",
            ability_specials: [
                {
                    ability_special: "AbilityCastRange",
                    text: ""
                },
                {
                    ability_special: "bounce_radius",
                    text: "能量弧跳跃范围："
                },
                {
                    ability_special: "damage_radius",
                    text: "伤害范围："
                },
                {
                    ability_special: "max_targets",
                    text: ""
                },
                {
                    ability_special: "tooltip_max_targets_inc_dazzle",
                    text: "最大治疗目标数："
                },
                {
                    ability_special: "damage",
                    text: "伤害："
                },
                {
                    ability_special: "scepter_heal_pct",
                    text: ""
                },
                {
                    ability_special: "scepter_cd_increase",
                    text: ""
                }
            ],
            name: "暗影波",
            description: "放出一道能量弧，可以瞬间跳跃至目标附近的队友，治疗的同时还将对附近的敌方单位造成伤害。施放暗影波时戴泽必定会享受到治疗效果。",
            lore: "虽然对暗影牧师来说，暗影波只是很简单也很日常的仪式，不过它确实是取胜的关键所在。",
            notes: [
                "优先治疗友方英雄",
                "如果敌军附近有多个我方单位，那么他将受到多重暗影波的伤害。"
            ]
        },
        {
            ability_classname: "imba_dazzle_weave",
            ability_specials: [
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "vision",
                    text: ""
                },
                {
                    ability_special: "armor_per_second",
                    text: "每秒护甲变化："
                },
                {
                    ability_special: "duration",
                    text: "持续时间："
                }
            ],
            name: "编织",
            description: "在目标区域内的所有英雄身上施加一个效果，随着时间逐渐提升友方英雄的护甲，降低敌方英雄的护甲。",
            lore: "戴泽在虚无之境的以太之旅让他能将光与暗的力量融在一起，创造出有两种力量的魔力波动。",
            notes: [
                "为目标增加一个状态，因此在法术施放后进入施法区域不会受到影响。"
            ]
        },
        {
            ability_classname: "imba_dazzle_bad_juju",
            ability_specials: [
                {
                    ability_special: "cooldown_reduction",
                    text: "技能冷却时间减少："
                },
                {
                    ability_special: "cooldown_reduction_items",
                    text: ""
                },
                {
                    ability_special: "mana_cost_increase_pct",
                    text: "%每次施法增加生命消耗："
                },
                {
                    ability_special: "mana_cost_increase_duration",
                    text: "生命消耗增加持续时间："
                },
                {
                    ability_special: "max_stacks",
                    text: ""
                }
            ],
            name: "邪能",
            description: "减少其他所有技能的剩余冷却时间。施放邪能会暂时增加生命消耗。",
            lore: "虚无之境的每一次咒术都使其能进一步渗透尘世的周遭。",
            notes: []
        },
        {
            ability_classname: "imba_dazzle_good_juju",
            ability_specials: [
                {
                    ability_special: "cooldown_reduction",
                    text: "每次施法减少冷却时间："
                },
                {
                    ability_special: "item_cooldown_reduction",
                    text: ""
                },
                {
                    ability_special: "scepter_mana_cost",
                    text: ""
                },
                {
                    ability_special: "scepter_cooldown",
                    text: ""
                }
            ],
            name: "善咒",
            description: "戴泽每次施放技能后，其他所有冷却中的技能都会减少冷却时间。",
            lore: "虚无之境的每一次咒术都使其能进一步渗透尘世的周遭。",
            notes: []
        },
        {
            ability_classname: "imba_dazzle_innate_weave",
            ability_specials: [
                {
                    ability_special: "armor_change",
                    text: "每次叠加改变护甲："
                },
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "affects_allies",
                    text: ""
                },
                {
                    ability_special: "affects_enemies",
                    text: ""
                },
                {
                    ability_special: "heal_reduction",
                    text: ""
                },
                {
                    ability_special: "ultimate_always_applies",
                    text: ""
                }
            ],
            name: "编织",
            description: "戴泽的技能会对范围内友军和敌人同时施加编织，提升友军的护甲并减少敌人的护甲。本效果可以多次叠加。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_dazzle_nothl_boon",
            ability_specials: [
                {
                    ability_special: "duration",
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
                    talent_classname: "special_bonus_unique_imba_dazzle_1",
                    name: ""
                },
                {
                    talent_classname: "special_bonus_unique_imba_dazzle_2",
                    name: ""
                },
                {
                    talent_classname: "special_bonus_unique_imba_dazzle_3",
                    name: ""
                },
                {
                    talent_classname: "special_bonus_unique_imba_dazzle_4",
                    name: ""
                },
                {
                    talent_classname: "special_bonus_unique_imba_dazzle_5",
                    name: ""
                },
                {
                    talent_classname: "special_bonus_unique_imba_dazzle_poison_touch_attack_range_bonus",
                    name: "+{s:bonus_attack_range_bonus} 剧毒之触攻击距离",
                    description: "攻击剧毒之触效果下敌人时+{s:bonus_attack_range_bonus} 攻击距离"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "dazzle_facets_imba_1",
            name: "",
            description: ""
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_dazzle_nothl_boon_shield",
            name: "虚无之恩",
            description: "可以吸收{MODIFIER_PROPERTY_INCOMING_PHYSICAL_DAMAGE_CONSTANT}点物理伤害。"
        },
        {
            modifier_classname: "modifier_imba_dazzle_poison_touch",
            name: "剧毒之触",
            description: "持续受到伤害，移动速度减缓%-dMODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE%%%。"
        },
        {
            modifier_classname: "modifier_imba_dazzle_shallow_grave",
            name: "薄葬",
            description: "被巫毒保护！在这个状态下你是不死的！"
        },
        {
            modifier_classname: "modifier_imba_dazzle_weave_armor",
            name: "编织护甲",
            description: "护甲变动%-fMODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS%点。"
        },
        {
            modifier_classname: "modifier_imba_dazzle_innate_weave_armor",
            name: "编织",
            description: "护甲降低{MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS}点"
        },
        {
            modifier_classname: "modifier_imba_dazzle_innate_weave_armor_counter",
            name: "编织",
            description: "护甲改变了{MODIFIER_PROPERTY_TOOLTIP}点。"
        },
        {
            modifier_classname: "modifier_imba_dazzle_bad_juju_manacost",
            name: "邪能",
            description: "邪能的消耗已经增加"
        }
    ]
};