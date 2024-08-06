import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_tidehunter_gush",
            ability_specials: [
                {
                    ability_special: "gush_damage",
                    text: "伤害："
                },
                {
                    ability_special: "movement_speed",
                    text: "%移动速度减缓："
                },
                {
                    ability_special: "negative_armor",
                    text: "护甲降低："
                },
                {
                    ability_special: "aoe_scepter",
                    text: "作用范围："
                },
                {
                    ability_special: "cooldown_scepter",
                    text: "冷却时间："
                },
                {
                    ability_special: "cast_range_scepter",
                    text: "距离："
                }
            ],
            name: "巨浪",
            description: "召唤一股巨浪攻击一个敌方单位，减速并削弱护甲。",
            lore: "在沉没之岛的竞赛中，利维坦赢得了对公海的统治。",
            scepter_description: "巨浪变成点地施放的波形技能，可以作用于直线上的单位。降低冷却时间。",
            notes: []
        },
        {
            ability_classname: "imba_tidehunter_kraken_shell",
            ability_specials: [
                {
                    ability_special: "damage_reduction",
                    text: "伤害格挡："
                },
                {
                    ability_special: "bonus_reduction_per_kill",
                    text: "每次击杀提升伤害格挡："
                }
            ],
            name: "海妖外壳",
            description: "加厚潮汐猎人的外皮，可以被动格挡物理伤害。\\n\\n不与带有伤害格挡的物品叠加。",
            lore: "铁帆海军里有一个传言，说是有只强大的海兽，明明被矛刺中被剑砍伤依然能践踏舰队。",
            notes: [
                "破坏会使技能无法获得新的海妖坚壳叠加效果。",
                "破坏不会使现有的海妖坚壳叠加效果提供的加成失效。"
            ]
        },
        {
            ability_classname: "imba_tidehunter_anchor_smash",
            ability_specials: [
                {
                    ability_special: "attack_damage",
                    text: "攻击力加成："
                },
                {
                    ability_special: "damage_reduction",
                    text: "%攻击力降低："
                },
                {
                    ability_special: "reduction_duration",
                    text: "持续时间："
                },
                {
                    ability_special: "radius",
                    text: "作用范围："
                }
            ],
            name: "锚击",
            description: "潮汐猎人挥动他巨大的锚攻击附近的敌人，攻击时获得攻击力加成，同时降低敌人的攻击力。",
            lore: "从舰队统帅昆卡的一艘旗舰上偷来的重锚，被利维坦用作有效的近战武器。",
            shard_description: "锚击可以作用于建筑，攻击力提升并且冷却时间降低。",
            notes: [
                "锚击对远古生物同样有效，不过对肉山无效。"
            ]
        },
        {
            ability_classname: "imba_tidehunter_ravage",
            ability_specials: [
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "duration",
                    text: "持续时间："
                }
            ],
            name: "毁灭",
            description: "猛击地面，触手向各个方向穿出，伤害并眩晕附近所有敌方单位。",
            lore: "呼唤深海之神麦尔朗恩的举动导致了整支武装舰队在海上失踪。",
            notes: [
                "毁灭能伤害隐身单位。",
                "毁灭以{speed}的速度向外扩散。"
            ]
        },
        {
            ability_classname: "imba_tidehunter_arm_of_the_deep",
            ability_specials: [],
            name: "深海触须",
            description: "潮汐猎人释放出大量触手，对触及的敌人造成伤害和眩晕。触须造成{damage_pct}%毁灭的伤害和眩晕，距离为{damage_pct}%毁灭的作用范围。",
            notes: []
        },
        {
            ability_classname: "imba_tidehunter_dead_in_the_water",
            ability_specials: [
                {
                    ability_special: "attacks_to_destroy",
                    text: "摧毁所需攻击次数："
                },
                {
                    ability_special: "max_movement_speed",
                    text: "巨锚拖拽速度："
                },
                {
                    ability_special: "chain_length",
                    text: "铁链长度："
                },
                {
                    ability_special: "duration",
                    text: "巨锚持续时间："
                }
            ],
            name: "重如铁锚",
            description: "潮汐猎人将一只重锚栓到一名敌方英雄身上。被栓到锚上的英雄处于被束缚状态。尝试移动到距离巨锚{chain_length}距离外会导致英雄的移动速度降低至{max_movement_speed}，而且会一直拽着长锚。巨锚承受{attacks_to_destroy}次英雄攻击后会被摧毁。",
            notes: []
        },
        {
            ability_classname: "imba_tidehunter_krill_eater",
            ability_specials: [
                {
                    ability_special: "attack_range_per_level",
                    text: "每级攻击距离："
                },
                {
                    ability_special: "anchor_smash_radius_per_level",
                    text: "每级锚击范围："
                },
                {
                    ability_special: "base_strength_tooltip",
                    text: "基础力量："
                },
                {
                    ability_special: "strength_gain_tooltip",
                    text: "力量成长："
                },
                {
                    ability_special: "attack_range_tooltip",
                    text: "攻击距离："
                },
                {
                    ability_special: "anchor_smash_range_tooltip",
                    text: "锚击距离："
                }
            ],
            name: "食虾猎人",
            description: "潮汐猎人在比赛开始时体形会小很多，并且攻击距离-{attack_range_base}，锚击作用范围-{anchor_smash_radius_base}。随着经验的增加，潮汐猎人会变大，每升一级都会获得攻击距离和锚击范围。基础力量减少，力量成长提升。",
            notes: []
        },
        {
            ability_classname: "imba_tidehunter_blubber",
            ability_specials: [],
            name: "鲸脂",
            description: "潮汐猎人的外皮在他受到的伤害超过{damage_cleanse}点后还将移除负面的状态效果。会移除大部分负面效果，即使通常无法净化。\\n\\n驱散类型：强驱散",
            notes: [
                "只有玩家控制单位造成的伤害才会计算在移除负面状态的累计伤害中。",
                "如果{damage_reset_interval}秒内没有受到来自玩家的伤害，伤害累计值将重置。"
            ]
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_tidehunter",
                    name: "-{s:bonus_negative_armor} 巨浪降低护甲"
                },
                {
                    talent_classname: "special_bonus_unique_imba_tidehunter_2",
                    name: "+{s:bonus_gush_damage} 巨浪伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_tidehunter_3",
                    name: "+{s:bonus_damage_reduction}% 锚击降低攻击力"
                },
                {
                    talent_classname: "special_bonus_unique_imba_tidehunter_5",
                    name: "+{s:bonus_movement_speed}% 巨浪减速"
                },
                {
                    talent_classname: "special_bonus_unique_imba_tidehunter_7",
                    name: "+{s:bonus_duration}秒 毁灭眩晕"
                },
                {
                    talent_classname: "special_bonus_unique_imba_tidehunter_8",
                    name: "攻击有50%几率触发锚击"
                },
                {
                    talent_classname: "special_bonus_unique_imba_tidehunter_9",
                    name: "+{s:bonus_attack_damage} 锚击攻击力"
                },
                {
                    talent_classname: "special_bonus_unique_imba_tidehunter_10",
                    name: "锚击可作用建筑"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "tidehunter_facets_imba_1",
            name: "海妖坚壳 | 食虾猎人 | 小鱼虫猎人 | 海藻猎人 | 磷虾猎人 | 凤尾鱼猎人 | 海参猎人 | 海葡萄猎人 | 海马猎人 | 鹦鹉螺猎人 | 鳗鱼猎人 | 水母猎人 | 鲻鱼猎人 | 鲭鱼猎人 | 巨型海虱猎人 | 多毛虫猎人 | 海豚猎人 | 海牛猎人 | 皇带鱼猎人 | 海象猎人 | 魔鬼鱼猎人 | 鲨鱼猎人 | 鲸鲨猎人 | 蓝鲸猎人 | 巨型乌贼猎人 | 蛇颈龙猎人 | 利兹鱼猎人 | 巨齿鲨猎人 | 利维坦鲸猎人 | 狮鬃水母猎人 | 泰坦尼克猎人 | 饱腹猎人",
            description: "锚击效果下的敌方英雄阵亡会使海妖外壳获得永久伤害格挡。 潮汐猎人每升一级都会变大，并且获得额外加成效果。",
            related_abilities: [
                {
                    ability_classname: "imba_tidehunter_kraken_shell",
                    description: "锚击效果下的敌方英雄阵亡会使海妖外壳获得永久伤害格挡。"
                }
            ],
            related_talents: []
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_tidehunter_kraken_shell",
            name: "海妖外壳",
            description: "物理伤害格挡额外增加{MODIFIER_PROPERTY_TOOLTIP}点。"
        },
        {
            modifier_classname: "modifier_imba_tidehunter_anchor_clamp",
            name: "重如铁锚",
            description: "被束缚。拽着巨锚时被大幅减速。"
        },
        {
            modifier_classname: "modifier_imba_tidehunter_gush",
            name: "巨浪",
            description: "速度降低{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%，护甲降低{MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS}。"
        },
        {
            modifier_classname: "modifier_imba_tidehunter_ravage",
            name: "毁灭",
            description: "被毁灭技能眩晕。"
        },
        {
            modifier_classname: "modifier_imba_tidehunter_anchor_smash",
            name: "锚击",
            description: "攻击力降低{MODIFIER_PROPERTY_BASEDAMAGEOUTGOING_PERCENTAGE}%"
        }
    ]
};