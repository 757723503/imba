import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_rubick_telekinesis",
            ability_specials: [
                {
                    ability_special: "lift_duration",
                    text: "滞空时间："
                },
                {
                    ability_special: "stun_duration",
                    text: "眩晕持续时间："
                },
                {
                    ability_special: "radius",
                    text: "作用半径："
                },
                {
                    ability_special: "max_land_distance",
                    text: "最大投掷距离："
                },
                {
                    ability_special: "fall_duration",
                    text: ""
                },
                {
                    ability_special: "shard_max_land_distance_bonus_pct",
                    text: ""
                },
                {
                    ability_special: "shard_cooldown_reduction_pct",
                    text: ""
                },
                {
                    ability_special: "shard_teammate_throw_delay",
                    text: ""
                },
                {
                    ability_special: "AbilityCooldown",
                    text: ""
                }
            ],
            name: "隔空取物",
            description: "拉比克利用他的隔空取物能力，将敌人短暂抬到空中，然后猛投向地面。被投下的单位会砸晕落地点附近的敌人。",
            lore: "即使是最伟大的魔导师也会将他的力量用来娱乐。",
            shard_description: "可以对自身或友军施放隔空取物。以队友为目标时投掷距离增加{shard_max_land_distance_bonus_pct}{，投掷延迟降低至}shard_teammate_throw_delay%秒。",
            notes: [
                "目标滞空时，拉比克可以使用次级技能将目标扔往目标方向。",
                "单位落地后，自身不会受到范围眩晕效果。"
            ]
        },
        {
            ability_classname: "imba_rubick_telekinesis_land",
            ability_specials: [
                {
                    ability_special: "radius",
                    text: ""
                }
            ],
            name: "隔空取物着陆",
            description: "选择隔空取物结束时目标的落地点。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_rubick_telekinesis_land_self",
            ability_specials: [
                {
                    ability_special: "radius",
                    text: ""
                }
            ],
            name: "隔空取物着陆",
            description: "选择隔空取物结束时拉比克的落地点。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_rubick_fade_bolt",
            ability_specials: [
                {
                    ability_special: "damage",
                    text: "伤害："
                },
                {
                    ability_special: "jump_damage_reduction_pct",
                    text: "%每次跳跃伤害降低："
                },
                {
                    ability_special: "attack_damage_reduction",
                    text: "%攻击力降低："
                },
                {
                    ability_special: "duration",
                    text: "削弱持续时间："
                },
                {
                    ability_special: "radius",
                    text: ""
                },
                {
                    ability_special: "jump_delay",
                    text: ""
                }
            ],
            name: "弱化能流",
            description: "拉比克制造一道强大的奥术能量流，在多个敌方单位之间流动，造成伤害并降低他们的攻击力。每次弹跳造成的伤害递减。",
            lore: "在处决刺杀他的人时，拉比克最爱用的法术其实是一个相当简单的咒语。",
            notes: []
        },
        {
            ability_classname: "imba_rubick_null_field",
            ability_specials: [
                {
                    ability_special: "magic_damage_reduction_pct",
                    text: "%魔法抗性加成："
                },
                {
                    ability_special: "radius",
                    text: "作用范围："
                }
            ],
            name: "失效力场",
            description: "拉比克对奥术的精通能够影响周围敌人的感知，降低他们的魔法抗性。可以在防御和进攻之间切换，选择降低敌人的魔法抗性或提升队友的魔法抗性。",
            lore: "不是每一个魔导师都能成为大魔导师……",
            notes: [
                "与其他提高魔法抗性的物品和技能叠加。"
            ]
        },
        {
            ability_classname: "imba_rubick_arcane_supremacy",
            ability_specials: [
                {
                    ability_special: "cast_range",
                    text: "施法距离："
                },
                {
                    ability_special: "spell_amp",
                    text: "%技能增强："
                },
                {
                    ability_special: "aoe_bonus",
                    text: "作用范围加成："
                },
                {
                    ability_special: "aoe_bonus_duration",
                    text: "作用范围加成持续时间："
                }
            ],
            name: "奥术至尊",
            description: "拉比克对奥术的熟稔使他拥有更远的施法距离，法术的威力也更强。",
            lore: "不是每一个魔导师都能成为大魔导师……",
            notes: [
                "破坏会使技能无法获得新的奥术积累叠加效果。",
                "破坏不会使现有的奥术积累叠加效果提供的加成失效。"
            ]
        },
        {
            ability_classname: "imba_rubick_might_and_magus",
            ability_specials: [
                {
                    ability_special: "one_tooltip",
                    text: ""
                },
                {
                    ability_special: "bonus_damage_pct",
                    text: ""
                },
                {
                    ability_special: "bonus_damage_pct_tooltip",
                    text: ""
                },
                {
                    ability_special: "magic_resist_pct",
                    text: ""
                },
                {
                    ability_special: "magic_resist_pct_tooltip",
                    text: ""
                }
            ],
            name: "力量与魔法",
            description: "每{one_tooltip}{技能增强也会使拉比克的攻击力提升{bonus_damage_pct_tooltip}}，魔法抗性提升{magic_resist_pct_tooltip}%。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_rubick_spell_steal",
            ability_specials: [
                {
                    ability_special: "projectile_speed",
                    text: ""
                },
                {
                    ability_special: "stolen_debuff_amp",
                    text: "%窃取技能负面效果增强："
                },
                {
                    ability_special: "cast_range_scepter",
                    text: "施法距离："
                },
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "stolen_mana_reduction",
                    text: "%窃取技能魔耗降低："
                }
            ],
            name: "技能窃取",
            description: "拉比克钻研一个敌方英雄的魔法精华之痕，学习这个英雄最后释放的技能的秘密。拉比克将可以使用这个技能，维持几分钟或直到他死亡，对敌人施放被窃取的技能时该技能的负面效果持续时间得到加长。",
            lore: "……不过即使是他们那些低级魔法也能变得非常实用。",
            scepter_description: "可窃取的技能提升至2个。提升施法距离，并且施放的技能会升级成神杖版本。",
            notes: [
                "无法窃取物品类技能。",
                "拉比克若拥有阿哈利姆魔晶，则窃取的技能会是魔晶升级版本。",
                "不会触发法术反弹。"
            ]
        },
        {
            ability_classname: "imba_rubick_empty1",
            ability_specials: [],
            name: "窃取的魔法",
            description: "本技能栏在使用魔法窃取获得魔法后可以使用。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_rubick_empty2",
            ability_specials: [],
            name: "窃取的魔法",
            description: "本技能栏在使用魔法窃取获得魔法后可以使用。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_rubick_hidden1",
            ability_specials: [],
            name: "",
            description: "",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_rubick_hidden2",
            ability_specials: [],
            name: "",
            description: "",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_rubick_hidden3",
            ability_specials: [],
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
                    talent_classname: "special_bonus_unique_imba_rubick",
                    name: "+{s:bonus_max_land_distance} 隔空取物着陆距离"
                },
                {
                    talent_classname: "special_bonus_unique_imba_rubick_2",
                    name: "+{s:bonus_attack_damage_reduction}% 弱化能流攻击力降低"
                },
                {
                    talent_classname: "special_bonus_unique_imba_rubick_3",
                    name: "-{s:value}秒 弱化能流冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_rubick_4",
                    name: "-{s:bonus_AbilityCooldown}秒 隔空取物冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_rubick_5",
                    name: "窃取的技能获得+{s:value}% 技能增强"
                },
                {
                    talent_classname: "special_bonus_unique_imba_rubick_6",
                    name: "窃取的技能-{s:value}% 冷却时间"
                },
                {
                    talent_classname: "special_bonus_unique_imba_rubick_7",
                    name: "+{s:bonus_lift_duration}秒 隔空取物滞空/眩晕"
                },
                {
                    talent_classname: "special_bonus_unique_imba_rubick_8",
                    name: "+{s:value} 隔空取物着陆伤害"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "rubick_facets_imba_1",
            name: "",
            description: ""
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_rubick_arcane_supremacy",
            name: "奥术积累",
            description: "技能的作用范围提升{MODIFIER_PROPERTY_AOE_BONUS_CONSTANT_STACKING}。"
        },
        {
            modifier_classname: "modifier_imba_rubick_telekinesis",
            name: "隔空取物",
            description: "在空中动弹不得。"
        },
        {
            modifier_classname: "modifier_imba_rubick_telekinesis_stun",
            name: "隔空取物",
            description: "眩晕。"
        },
        {
            modifier_classname: "modifier_imba_rubick_fade_bolt_debuff",
            name: "弱化能流",
            description: "攻击力降低{MODIFIER_PROPERTY_BASEDAMAGEOUTGOING_PERCENTAGE}%。"
        },
        {
            modifier_classname: "modifier_imba_rubick_fade_bolt_buff_counter",
            name: "弱化能流",
            description: "攻击力提升{MODIFIER_PROPERTY_TOOLTIP}点。"
        },
        {
            modifier_classname: "modifier_imba_rubick_null_field_effect",
            name: "失效力场",
            description: "拉比克的队友受到作用时，魔法抗性提升{MODIFIER_PROPERTY_MAGICAL_RESISTANCE_BONUS}%。拉比克的敌人受到作用时，魔法抗性降低{MODIFIER_PROPERTY_MAGICAL_RESISTANCE_BONUS}%。"
        },
        {
            modifier_classname: "modifier_imba_rubick_null_field_effect_ally",
            name: "失效力场",
            description: "魔法抗性提升{MODIFIER_PROPERTY_MAGICAL_RESISTANCE_BONUS}%。"
        },
        {
            modifier_classname: "modifier_imba_rubick_spell_steal",
            name: "技能窃取",
            description: "已经偷取了一个技能。"
        }
    ]
};