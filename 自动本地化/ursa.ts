import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_ursa_earthshock",
            ability_specials: [
                {
                    ability_special: "shock_radius",
                    text: "作用范围："
                },
                {
                    ability_special: "movement_slow",
                    text: "%移动速度减缓："
                }
            ],
            name: "震撼大地",
            description: "熊战士向前跳跃{hop_distance}距离并猛击地面带来强烈的冲击，对附近范围内的所有敌方单位造成伤害并减速{abilityduration}秒。",
            lore: "雄性熊怪有力的步伐撼动着大地，展示了他们坚定的战士之心。",
            shard_description: "震撼大地施放时对熊战士施加{shard_enrage_duration}秒的激怒。",
            notes: []
        },
        {
            ability_classname: "imba_ursa_overpower",
            ability_specials: [
                {
                    ability_special: "max_attacks",
                    text: "攻击次数："
                },
                {
                    ability_special: "attack_speed_bonus_pct",
                    text: "攻击速度提升："
                },
                {
                    ability_special: "slow_resist",
                    text: "%减速抗性："
                }
            ],
            name: "超强力量",
            description: "乌尔萨在战斗中运用他的技艺，提升了接下来几次攻击的攻击速度，同时还获得了减速抗性。",
            lore: "乌尔萨有着让人难以和他巨大的体型联想到一起的敏捷。",
            notes: [
                "开启黑皇杖并不会移除超强力量。",
                "攻击丢失还是会消耗超强力量的攻击次数。"
            ]
        },
        {
            ability_classname: "imba_ursa_fury_swipes",
            ability_specials: [
                {
                    ability_special: "bonus_reset_time",
                    text: "重置时间："
                },
                {
                    ability_special: "bonus_reset_time_roshan",
                    text: "重置时间（肉山）："
                },
                {
                    ability_special: "damage_per_stack",
                    text: "每次攻击叠加伤害："
                }
            ],
            name: "怒意狂击",
            description: "熊战士的利爪深深地撕裂敌人的伤口，对同一敌人连续攻击将造成更多伤害。如果同一个目标在{bonus_reset_time}秒内不受攻击，将失去额外伤害加成。",
            lore: "在大自然中，很少有受伤的动物能在饥饿的捕食者攻击下幸存。",
            notes: [
                "破坏会使技能无法施加新的叠加效果。",
                "破坏不会使现有叠加效果提供的状态失效。"
            ]
        },
        {
            ability_classname: "imba_ursa_enrage",
            ability_specials: [
                {
                    ability_special: "damage_reduction",
                    text: "%承受伤害降低："
                },
                {
                    ability_special: "status_resistance",
                    text: "%状态抗性："
                },
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "cooldown_scepter",
                    text: "冷却时间："
                },
                {
                    ability_special: "damage_increase",
                    text: "%降低的伤害转为攻击力："
                },
                {
                    ability_special: "damage_increase_duration",
                    text: "攻击力提升粘滞时间："
                }
            ],
            name: "激怒",
            description: "乌尔萨进入狂怒状态，承受的伤害降低并获得状态抗性。施放时将移除所受的负面效果。\\n\\n驱散类型：强驱散",
            lore: "乌尔萨放纵他的远古之魂，成为战场上最凶残的生物。",
            scepter_description: "减少冷却时间，而且熊战士可以在被控制的状态下使用激怒。",
            notes: []
        },
        {
            ability_classname: "imba_ursa_maul",
            ability_specials: [
                {
                    ability_special: "health_as_damage_pct",
                    text: "%生命值伤害："
                }
            ],
            name: "暴烈之爪",
            description: "熊战士获得攻击力加成，数值为当前生命值的一定百分比。",
            notes: []
        },
        {
            ability_classname: "imba_ursa_bear_down",
            ability_specials: [
                {
                    ability_special: "debuff_amp",
                    text: "%额外持续时间："
                }
            ],
            name: "熊心勃勃",
            description: "熊战士施加的负面效果持续时间变长。",
            notes: []
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_ursa",
                    name: "+{s:bonus_damage_per_stack} 怒意狂击伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_ursa_2",
                    name: "+{s:bonus_shock_radius} 震撼大地范围"
                },
                {
                    talent_classname: "special_bonus_unique_imba_ursa_3",
                    name: "{s:bonus_AbilityCharges} 震撼大地能量点数"
                },
                {
                    talent_classname: "special_bonus_unique_imba_ursa_4",
                    name: "+{s:bonus_bonus_reset_time}秒 怒意狂击重置时间"
                },
                {
                    talent_classname: "special_bonus_unique_imba_ursa_7",
                    name: "+{s:bonus_max_attacks} 超强力量攻击次数"
                },
                {
                    talent_classname: "special_bonus_unique_imba_ursa_8",
                    name: "+{s:bonus_status_resistance}% 激怒状态抗性"
                },
                {
                    talent_classname: "special_bonus_unique_imba_ursa_earthshock_furyswipes",
                    name: "震撼大地施加{s:bonus_fury_swipe_stacks_on_hit}层怒意狂击"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "ursa_facets_imba_1",
            name: "熊心豹胆",
            description: "激怒期间受到伤害时，熊战士获得攻击力加成。",
            related_abilities: [
                {
                    ability_classname: "imba_ursa_enrage",
                    description: "激怒期间受到伤害时，熊战士获得攻击力加成。"
                }
            ],
            related_talents: []
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_ursa_earthshock",
            name: "震撼大地",
            description: "移动速度降低{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%"
        },
        {
            modifier_classname: "modifier_imba_ursa_overpower",
            name: "超强力量",
            description: "正以极高速度攻击！减速抗性提升{MODIFIER_PROPERTY_SLOW_RESISTANCE}%。"
        },
        {
            modifier_classname: "modifier_imba_ursa_fury_swipes_damage_increase",
            name: "怒意狂击",
            description: "乌尔萨的攻击正在对你造成{MODIFIER_PROPERTY_TOOLTIP}点额外伤害。"
        },
        {
            modifier_classname: "modifier_imba_ursa_enrage",
            name: "激怒",
            description: "承受的伤害减少{MODIFIER_PROPERTY_INCOMING_DAMAGE_PERCENTAGE}%。获得{MODIFIER_PROPERTY_INCOMING_DAMAGE_PERCENTAGE}%状态抗性。"
        },
        {
            modifier_classname: "modifier_imba_ursa_maul",
            name: "暴烈之爪",
            description: "攻击力提升{MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE}点。"
        },
        {
            modifier_classname: "modifier_imba_ursa_increase_damage",
            name: "熊心豹胆",
            description: "获得{MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE}点攻击力加成。"
        }
    ]
};