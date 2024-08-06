import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_hoodwink_hunters_boomerang",
            ability_specials: [
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "damage",
                    text: "伤害："
                },
                {
                    ability_special: "mark_duration",
                    text: "印记持续时间："
                },
                {
                    ability_special: "slow_pct",
                    text: "%移动速度减缓："
                },
                {
                    ability_special: "spell_amp",
                    text: "%技能伤害增加："
                },
                {
                    ability_special: "status_resistance",
                    text: "%状态抗性降低："
                }
            ],
            name: "猎手旋镖",
            description: "掷出一把沿弧线飞行的回旋镖。击中后会飞回至森海飞霞。回旋镖对沿途击中的敌人都会造成伤害，并且施加一个猎手印记，使受到作用的敌人被减速，承受的技能伤害增加。",
            shard_description: "猎手印记还会降低状态抗性。",
            notes: []
        },
        {
            ability_classname: "imba_hoodwink_decoy",
            ability_specials: [
                {
                    ability_special: "duration",
                    text: "幻象持续时间："
                },
                {
                    ability_special: "decoy_detonate_radius",
                    text: "野地奇袭作用范围："
                },
                {
                    ability_special: "decoy_stun_duration",
                    text: "野地奇袭持续时间："
                },
                {
                    ability_special: "movement_speed",
                    text: "%移动速度："
                },
                {
                    ability_special: "sharpshooter_damage_pct",
                    text: "%一箭穿心伤害："
                }
            ],
            name: "诱敌奇术",
            description: "森海飞霞进入隐身，提升移动速度，并且产生一个引诱敌人的幻象，幻象会瞄准最近的敌方英雄开始蓄力准备发射伤害较低的一箭穿心。如果幻象被攻击或被指向性技能击中，幻象将被摧毁并且攻击者将受到较弱的野地奇袭效果。",
            notes: []
        },
        {
            ability_classname: "imba_hoodwink_acorn_shot",
            ability_specials: [
                {
                    ability_special: "bonus_range",
                    text: "额外攻击距离："
                },
                {
                    ability_special: "acorn_shot_damage",
                    text: "额外伤害："
                },
                {
                    ability_special: "base_damage_pct",
                    text: "%基础攻击力："
                },
                {
                    ability_special: "bounce_count",
                    text: "弹射次数："
                },
                {
                    ability_special: "debuff_duration",
                    text: "减速持续时间："
                },
                {
                    ability_special: "slow",
                    text: "%移动速度减缓："
                }
            ],
            name: "爆栗出击",
            description: "森海飞霞向目标单位发射一颗橡栗，可以弹射至附近敌人，减缓他们的移动速度，并造成攻击伤害的一定百分比和额外伤害。\\n可以对地面施放，在目标地点种出一棵树，而橡栗会弹射至附近目标。设为多样施法后会强制沿用该行为。",
            lore: "虽然她几乎什么都能凑合着用，不过橡树和铁树之木的栗子是最有效的炮弹——也是森海飞霞大部分的存货来源。",
            notes: [
                "同一个目标可以被击中超过一次。",
                "弹射会搜寻525范围内战争迷雾中的单位，但无视隐身单位。",
                "种下的树持续20秒。",
                "爆栗出击可以享受攻击距离加成效果。"
            ]
        },
        {
            ability_classname: "imba_hoodwink_bushwhack",
            ability_specials: [
                {
                    ability_special: "trap_radius",
                    text: "作用范围："
                },
                {
                    ability_special: "debuff_duration",
                    text: "眩晕时间："
                },
                {
                    ability_special: "total_damage",
                    text: "总伤害："
                }
            ],
            name: "野地奇袭",
            description: "扔出一张网，对区域内靠近树木的敌人造成眩晕。敌人会持续受到伤害并被拖拽到目标区域内最近的树上，并且眩晕期间视野降低至0。",
            lore: "森海飞霞喜欢利用铁树之木的树丛来伏击，但机警的人在永雾林渊的所有地方都会小心行走。",
            notes: [
                "若树木被摧毁，被影响的单位将解除眩晕。",
                "野地奇袭不会击中隐身单位。"
            ]
        },
        {
            ability_classname: "imba_hoodwink_scurry",
            ability_specials: [
                {
                    ability_special: "movement_speed_pct",
                    text: "%移动速度加成："
                },
                {
                    ability_special: "duration",
                    text: "加成持续时间："
                },
                {
                    ability_special: "cast_range",
                    text: "开启后施法距离加成："
                },
                {
                    ability_special: "attack_range",
                    text: "开启后攻击距离加成："
                },
                {
                    ability_special: "radius_increase",
                    text: "作用范围加成："
                }
            ],
            name: "密林奔走",
            description: "森海飞霞暂时获得移动速度加成，相位移动状态和穿行树木效果。",
            lore: "托莫干森林里没有一处角落或者裂缝是森海飞霞的爪子够不着的。",
            notes: []
        },
        {
            ability_classname: "imba_hoodwink_sharpshooter",
            ability_specials: [
                {
                    ability_special: "arrow_speed",
                    text: "弩箭速度："
                },
                {
                    ability_special: "max_charge_time",
                    text: "最大蓄力时间："
                },
                {
                    ability_special: "max_damage",
                    text: "最高伤害："
                },
                {
                    ability_special: "max_slow_debuff_duration",
                    text: "最大负面效果持续时间："
                },
                {
                    ability_special: "slow_move_pct",
                    text: "%移动速度减缓："
                }
            ],
            name: "一箭穿心",
            description: "森海飞霞装载她的弩机，射出致命的一箭，对一名敌方英雄造成高额伤害，并施加破坏和减速效果。伤害和负面状态持续时间随着装载时间增加，{max_charge_time}秒后达到最大效果，弩箭在{misfire_time}秒后自动发射。\\n由于弩箭的威力，森海飞霞后退{recoil_distance}距离。弩箭穿过的非英雄单位会受到半额伤害。",
            lore: "虽然森海飞霞的第一把弩机是碰巧发现的，但现在她非常精心地雕刻她自己的劲弩，并且做好防护工作 - 当然，某些必要的部件是顺手牵羊得来的，不然就是通过机智的手段获得。",
            scepter_description: "降低装载时间并提升弩箭速度。",
            notes: []
        },
        {
            ability_classname: "imba_hoodwink_sharpshooter_release",
            ability_specials: [],
            name: "中止一箭穿心",
            description: "释放蓄力的弩箭，重新开始移动和攻击。",
            lore: "发射！",
            notes: []
        },
        {
            ability_classname: "imba_hoodwink_mistwoods_wayfarer",
            ability_specials: [
                {
                    ability_special: "radius",
                    text: "树木搜寻范围："
                },
                {
                    ability_special: "redirect_chance",
                    text: "%转向几率："
                }
            ],
            name: "林渊旅人",
            description: "森海飞霞有几率使敌人的攻击转向至附近的树木。",
            notes: [
                "受到转向攻击的树木会被摧毁。"
            ]
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_hoodwink_acorn_shot_charges",
                    name: "{s:value} 爆栗出击能量点数"
                },
                {
                    talent_classname: "special_bonus_unique_imba_hoodwink_sharpshooter_pure_damage",
                    name: "一箭穿心无视减益免疫"
                },
                {
                    talent_classname: "special_bonus_unique_imba_hoodwink_sharpshooter_damage",
                    name: "+{s:bonus_max_damage} 一箭穿心最大伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_hoodwink_bushwhack_cooldown",
                    name: "-{s:value}秒 野地奇袭冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_hoodwink_bushwhack_damage",
                    name: "+{s:bonus_total_damage} 野地奇袭伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_hoodwink_scurry_duration",
                    name: "+{s:bonus_duration}秒 密林奔走持续时间"
                },
                {
                    talent_classname: "special_bonus_unique_imba_hoodwink_acorn_shot_bounces",
                    name: "+{s:bonus_bounce_count} 爆栗出击弹射"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "hoodwink_facets_imba_1",
            name: "大显身手 | 弹木特技",
            description: "密林奔走还会提供攻击和施法距离加成。 爆栗出击可以弹射一次到树上。",
            related_abilities: [
                {
                    ability_classname: "imba_hoodwink_acorn_shot",
                    description: "如果附近没有可弹射的目标，爆栗出击会弹射至附近的树木，剩余弹射次数将设为{bounces_after_tree_bounce}次。"
                },
                {
                    ability_classname: "imba_hoodwink_scurry",
                    description: "密林奔走还会提供攻击和施法距离加成。"
                }
            ],
            related_talents: []
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_hoodwink_acorn_shot_slow",
            name: "爆栗出击",
            description: "移动速度被减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。"
        },
        {
            modifier_classname: "modifier_imba_hoodwink_bushwhack_trap",
            name: "野地奇袭！",
            description: "被森海飞霞的野地奇袭眩晕。摧毁挂着陷阱的树可以解救出来。"
        },
        {
            modifier_classname: "modifier_imba_hoodwink_scurry_active",
            name: "密林奔走",
            description: "获得{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%移动速度加成，{MODIFIER_PROPERTY_ATTACK_RANGE_BONUS}攻击和施法距离加成，还可以穿越单位和树木。"
        },
        {
            modifier_classname: "modifier_imba_hoodwink_mistwoods_wayfarer_passive",
            name: "林渊旅人",
            description: "拥有{MODIFIER_PROPERTY_TOOLTIP}%几率使敌人的攻击转向至附近树木。"
        },
        {
            modifier_classname: "modifier_imba_hoodwink_sharpshooter_windup",
            name: "一箭穿心",
            description: "一箭穿心蓄力中，将造成额外伤害，负面效果持续时间更久；被缠绕和缴械。"
        },
        {
            modifier_classname: "modifier_imba_hoodwink_sharpshooter_debuff",
            name: "一箭穿心",
            description: "被动技能被禁用，移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。"
        },
        {
            modifier_classname: "modifier_imba_hoodwink_camouflage",
            name: "密林奔走伪装迷彩",
            description: "靠近树木时不移动、攻击或施放技能就会变为隐身状态。"
        },
        {
            modifier_classname: "modifier_imba_hoodwink_decoy_invisibility",
            name: "诱敌奇术",
            description: "隐身。移动速度提升{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。"
        },
        {
            modifier_classname: "modifier_imba_hoodwink_hunters_mark",
            name: "猎手印记",
            description: "被减速，并且受到的技能伤害增加。"
        }
    ]
};