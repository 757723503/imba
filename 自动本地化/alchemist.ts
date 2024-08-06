import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_alchemist_berserk_potion",
            ability_specials: [
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "attack_speed",
                    text: "攻击速度："
                },
                {
                    ability_special: "hp_regen",
                    text: "生命恢复："
                },
                {
                    ability_special: "move_speed",
                    text: "移动速度："
                }
            ],
            name: "狂暴药剂",
            description: "炼金术士向友军目标扔出一瓶药剂，施加弱驱散效果，并提供攻击速度、移动速度和生命恢复。<br><br>驱散类型：弱驱散",
            notes: []
        },
        {
            ability_classname: "imba_alchemist_acid_spray",
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
                    text: "每秒伤害："
                },
                {
                    ability_special: "armor_reduction",
                    text: "护甲削弱："
                }
            ],
            name: "酸性喷雾",
            description: "向目标区域喷洒高压酸雾。穿过受污染地带的敌人每秒会受到物理伤害，同时护甲被削弱。",
            lore: "用黑酿家族的祖传化学知识，拉泽尔配出一种能溶解最坚硬金属的强酸。",
            notes: []
        },
        {
            ability_classname: "imba_alchemist_unstable_concoction",
            ability_specials: [
                {
                    ability_special: "max_stun",
                    text: "最长眩晕时间："
                },
                {
                    ability_special: "max_damage",
                    text: "最大伤害："
                },
                {
                    ability_special: "radius",
                    text: "爆炸作用范围："
                },
                {
                    ability_special: "move_speed",
                    text: "%移动速度加成："
                }
            ],
            name: "不稳定化合物",
            description: "炼金术士调制一瓶不稳定的化合物，投向敌方英雄，对爆炸点周边范围的单位造成伤害并眩晕。调制的时间越久，伤害越大，眩晕时间也越长。炼金术士在调制期间获得移动速度加成。调制{brew_time}秒后达到最大伤害量和最长眩晕时间。然而，若{brew_explosion}秒后未扔出药剂，则会在炼金术士自己手中爆炸。",
            lore: "将整座山转变成黄金的实验失败后带来的副产品，这种易挥发的药剂有着破坏的潜力。",
            notes: [
                "摇制开始后，本技能替换为投掷不稳定化合物。炼金术士在摇制期间可以像平常一样移动和攻击。",
                "炼金术士的头顶会有倒计时，提示剩余的摇制时间。倒计时对敌人可见。",
                "可以用此技能将自己反补。",
                "不稳定化合物无法被躲避，并且不稳定化合物被掷出后会停止调制。",
                "不稳定化合物的爆炸会对英雄和非英雄单位造成伤害。"
            ]
        },
        {
            ability_classname: "imba_alchemist_unstable_concoction_throw",
            ability_specials: [],
            name: "投掷不稳定化合物",
            description: "在爆炸前扔出去！",
            notes: []
        },
        {
            ability_classname: "imba_alchemist_goblins_greed",
            ability_specials: [
                {
                    ability_special: "duration",
                    text: "连杀限时："
                },
                {
                    ability_special: "bonus_gold",
                    text: "基础金钱奖励："
                },
                {
                    ability_special: "bonus_bonus_gold",
                    text: "额外金钱奖励："
                },
                {
                    ability_special: "bounty_multiplier",
                    text: "赏金神符奖励倍数："
                },
                {
                    ability_special: "bonus_gold_cap",
                    text: "最高额外金钱："
                }
            ],
            name: "贪魔的贪婪",
            description: "炼金术士将敌人的尸体和赏金神符转化成额外的金币。炼金术士每杀死一个单位，就能获得基础额外金钱和附加额外金钱。如果炼金术士在接下来{duration}秒内又杀死了一个单位，获得了黄金，那么他所获得的附加额外金钱将有一定幅度的增加。另外，赏金神符将提供成倍金钱。",
            lore: "尽管对付不了一座山，但拉泽尔还是掌握着技术，能转化一些较小的化合物来填满他的荷包。",
            notes: []
        },
        {
            ability_classname: "imba_alchemist_chemical_rage",
            ability_specials: [
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "base_attack_time",
                    text: "基础攻击间隔："
                },
                {
                    ability_special: "bonus_health_regen",
                    text: "生命回复提升："
                },
                {
                    ability_special: "bonus_movespeed",
                    text: "移动速度提升："
                },
                {
                    ability_special: "scepter_bonus_damage",
                    text: "每把神杖攻击力加成："
                },
                {
                    ability_special: "scepter_spell_amp",
                    text: "%每把神杖技能增强："
                }
            ],
            name: "化学狂暴",
            description: "炼金术士诱发他的食人魔同伴进入化学狂暴，降低攻击间隔，提高移动速度和生命恢复。\\n\\n驱散类型：弱驱散",
            lore: "拉泽尔在越狱时给食人魔喝的酿造物成了激战中的有效药剂。",
            scepter_description: "炼金术士熔铸阿哈利姆神杖并让一位友方英雄获得所有神杖升级效果。炼金术士每送出一把神杖都将获得攻击力和技能增强加成。",
            notes: [
                "拥有{transformation_time}秒的变身时间，可以用来躲避攻击和技能弹道以及眩晕技能。"
            ]
        },
        {
            ability_classname: "imba_alchemist_corrosive_weaponry",
            ability_specials: [
                {
                    ability_special: "max_stacks",
                    text: "最大叠加数："
                },
                {
                    ability_special: "debuff_duration",
                    text: "负面状态持续时间："
                },
                {
                    ability_special: "slow_per_stack",
                    text: "%每次叠加减速："
                },
                {
                    ability_special: "attack_damage_per_stack",
                    text: "%每次叠加降低基础攻击力："
                }
            ],
            name: "腐蚀兵械",
            description: "炼金术士使他的武器浸满强酸，对击中的敌人施加可叠加的减速和基础攻击力降低效果。",
            notes: []
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_alchemist",
                    name: "+{s:bonus_radius} 不稳定化合物范围"
                },
                {
                    talent_classname: "special_bonus_unique_imba_alchemist_2",
                    name: "+{s:bonus_max_damage} 不稳定化合物最高伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_alchemist_3",
                    name: "酸性喷雾向友军提供护甲"
                },
                {
                    talent_classname: "special_bonus_unique_imba_alchemist_4",
                    name: "+{s:bonus_bonus_health_regen} 化学狂暴恢复"
                },
                {
                    talent_classname: "special_bonus_unique_imba_alchemist_5",
                    name: "+{s:bonus_armor_reduction} 酸性喷雾护甲降低"
                },
                {
                    talent_classname: "special_bonus_unique_imba_alchemist_6",
                    name: "+{s:bonus_bonus_movespeed} 化学狂暴移动速度"
                },
                {
                    talent_classname: "special_bonus_unique_imba_alchemist_7",
                    name: "每层贪魔的贪婪+{s:bonus_damage} 攻击力"
                },
                {
                    talent_classname: "special_bonus_unique_imba_alchemist_8",
                    name: "-{s:bonus_base_attack_time}秒 化学狂暴基础攻击间隔"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "alchemist_facets_imba_1",
            name: "调酒师 | 本钱",
            description: "处于化学狂暴时不稳定化合物和狂暴药剂的冷却时间更快。 炼金术士的初始金钱增加{s:bonus_starting_gold_bonus}。",
            related_abilities: [
                {
                    ability_classname: "imba_alchemist_berserk_potion",
                    description: "炼金术士处于化学狂暴作用时，冷却时间减少{chemical_rage_cooldown_reduction_pct}%。"
                },
                {
                    ability_classname: "imba_alchemist_unstable_concoction",
                    description: "炼金术士处于化学狂暴作用时，冷却时间减少{chemical_rage_cooldown_reduction_pct}%。"
                }
            ],
            related_talents: []
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_alchemist_corrosive_weaponry_debuff",
            name: "腐蚀兵械",
            description: "移动速度降低{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。基础攻击力降低{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%"
        },
        {
            modifier_classname: "modifier_imba_alchemist_unstable_concoction",
            name: "不稳定化合物",
            description: "正在调制化合物！移动速度提升{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。"
        },
        {
            modifier_classname: "modifier_imba_alchemist_acid_spray",
            name: "酸性喷雾",
            description: "持续受到伤害，护甲被削弱{MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS}点。"
        },
        {
            modifier_classname: "modifier_imba_alchemist_goblins_greed",
            name: "贪魔的贪婪",
            description: "杀死一个单位时将获得额外的金钱。"
        },
        {
            modifier_classname: "modifier_imba_alchemist_chemical_rage",
            name: "化学狂暴",
            description: "攻击间隔降低至{MODIFIER_PROPERTY_BASE_ATTACK_TIME_CONSTANT}，每秒生命回复提高{MODIFIER_PROPERTY_HEALTH_REGEN_CONSTANT}点，移动速度提升{MODIFIER_PROPERTY_MOVESPEED_BONUS_CONSTANT}。"
        },
        {
            modifier_classname: "modifier_imba_alchemist_scepter_bonus_damage",
            name: "阿哈利姆神杖送出数量",
            description: "因向队友送出阿哈利姆神杖，获得{MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE}点攻击力加成和{MODIFIER_PROPERTY_SPELL_AMPLIFY_PERCENTAGE}%技能增强加成。"
        },
        {
            modifier_classname: "modifier_imba_alchemist_berserk_potion",
            name: "狂暴药剂",
            description: "提供攻击速度和生命恢复加成。"
        }
    ]
};