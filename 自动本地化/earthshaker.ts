import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_earthshaker_fissure",
            ability_specials: [
                {
                    ability_special: "fissure_duration",
                    text: "沟壑持续时间："
                },
                {
                    ability_special: "stun_duration",
                    text: "眩晕时间："
                },
                {
                    ability_special: "fissure_damage",
                    text: "伤害："
                },
                {
                    ability_special: "AbilityCooldown",
                    text: "冷却时间："
                },
                {
                    ability_special: "shard_aftershock_stun_duration_pct",
                    text: "%沟壑余震眩晕："
                },
                {
                    ability_special: "free_pathing_linger_duration",
                    text: "沟壑行走粘滞时间："
                },
                {
                    ability_special: "fissure_movement_speed",
                    text: "沟壑移动速度："
                }
            ],
            name: "沟壑",
            description: "用威武的图腾猛击地面，沿直线裂开地面，制造一条无法通过的岩脊。同时眩晕和伤害敌方单位。",
            lore: "尼西埃图腾能以惊世之力使大地裂开。",
            shard_description: "降低沟壑的冷却时间，并且撼地者可以在沟壑上行走。每次施放技能时都会沿着沟壑释放余震，造成眩晕的时间有所降低。",
            notes: [
                "小兵将会等待沟壑消失，不会去尝试绕开它。",
                "沟壑不会被林肯法球抵挡。"
            ]
        },
        {
            ability_classname: "imba_earthshaker_enchant_totem",
            ability_specials: [
                {
                    ability_special: "totem_damage_percentage",
                    text: "%基础攻击力加成："
                },
                {
                    ability_special: "distance_scepter",
                    text: "跳跃距离："
                },
                {
                    ability_special: "scepter_cleave_pct",
                    text: "%分裂伤害："
                },
                {
                    ability_special: "scepter_cleave_distance",
                    text: "分裂距离："
                },
                {
                    ability_special: "projectile_body_speed",
                    text: "击杀击飞速度："
                },
                {
                    ability_special: "projectile_body_distance",
                    text: "击杀击飞距离："
                },
                {
                    ability_special: "projectile_body_damage_creep",
                    text: "击杀击飞伤害（非英雄）："
                },
                {
                    ability_special: "projectile_body_damage_hero",
                    text: "击杀击飞伤害（英雄）："
                },
                {
                    ability_special: "projectile_body_damage_additional_percent_health",
                    text: "%击杀击飞最大生命值伤害："
                }
            ],
            name: "强化图腾",
            description: "强化撼地者的图腾，使下次攻击拥有额外攻击力和{bonus_attack_range}攻击距离加成。",
            lore: "瑞格勇猛的的蛮力能摧毁山脉。",
            scepter_description: "强化图腾可以对地施放，施放后会跳至半空中再降落至目标地点，在目标地点施放强化图腾。双击技能会按原技能施放，不会跳跃。强化图腾拥有分裂效果。",
            notes: [
                "攻击力加成是基于基础攻击力和主属性数值。"
            ]
        },
        {
            ability_classname: "imba_earthshaker_aftershock",
            ability_specials: [
                {
                    ability_special: "aftershock_range",
                    text: "作用范围："
                },
                {
                    ability_special: "aftershock_damage",
                    text: "伤害："
                }
            ],
            name: "余震",
            description: "撼地者施放技能时会引起脚下的大地震动，眩晕附近的敌方单位并造成额外伤害。",
            lore: "大地在瑞格强有力的步伐下颤抖。",
            notes: [
                "使用物品不会触发余震。"
            ]
        },
        {
            ability_classname: "imba_earthshaker_echo_slam",
            ability_specials: [
                {
                    ability_special: "echo_slam_damage_range",
                    text: "作用范围："
                },
                {
                    ability_special: "echo_slam_echo_damage",
                    text: "回音伤害："
                },
                {
                    ability_special: "echo_slam_initial_damage",
                    text: "初始伤害："
                }
            ],
            name: "回音击",
            description: "穿过地面的冲击波，伤害敌方单位。每个受到攻击的敌人都会引起伤害附近单位的反射波。英雄本体将引起两次反射。",
            lore: "地壳开裂，山岳折叠，敌人遭回音击尽数碾压。",
            notes: []
        },
        {
            ability_classname: "imba_earthshaker_spirit_cairn",
            ability_specials: [],
            name: "灵魂石冢",
            description: "撼地者死亡时会在他阵亡的地点产生一道{fissure_radius}范围的沟壑。这道沟壑会阻碍移动，并且使撼地者持续获得周围的经验。沟壑会一直持续到撼地者复活。",
            notes: []
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_earthshaker",
                    name: "-{s:bonus_AbilityCooldown}秒 强化图腾冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_earthshaker_2",
                    name: "+{s:bonus_echo_slam_echo_damage} 回音击回音伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_earthshaker_3",
                    name: "+{s:bonus_AbilityCastRange} 沟壑距离"
                },
                {
                    talent_classname: "special_bonus_unique_imba_earthshaker_4",
                    name: "+{s:bonus_fissure_damage} 沟壑伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_earthshaker_6",
                    name: "+{s:bonus_aftershock_damage} 余震伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_earthshaker_totem_damage",
                    name: "+{s:bonus_totem_damage_percentage}% 强化图腾攻击力"
                },
                {
                    talent_classname: "special_bonus_unique_imba_earthshaker_echo_cd",
                    name: "-{s:bonus_AbilityCooldown}% 回音击冷却"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "earthshaker_facets_imba_1",
            name: "地壳积累 | 强击图腾",
            description: "利用强化图腾的攻击或撼地者的其他技能击杀敌人后都会把尸体击飞，对击中的敌人造成伤害。 英雄每升{s:bonus_aftershock_range_level_interval}级，余震的作用范围提升{s:bonus_aftershock_range_increase_per_level_interval}。",
            related_abilities: [
                {
                    ability_classname: "imba_earthshaker_enchant_totem",
                    description: "利用强化图腾的攻击或撼地者的其他技能击杀敌人后都会把尸体击飞，对击中的敌人造成伤害。"
                },
                {
                    ability_classname: "imba_earthshaker_aftershock",
                    description: "英雄每升{aftershock_range_level_interval}级，余震的作用范围提升{aftershock_range_increase_per_level_interval}。"
                }
            ],
            related_talents: []
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_earthshaker_enchant_totem",
            name: "强化图腾",
            description: "下一击将会造成{MODIFIER_PROPERTY_BASEDAMAGEOUTGOING_PERCENTAGE}%额外伤害"
        },
        {
            modifier_classname: "modifier_imba_earthshaker_fissure_stun",
            name: "沟壑",
            description: "被撼地者的沟壑击晕。"
        }
    ]
};