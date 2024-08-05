import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_muerta_dead_shot",
            ability_specials: [
                {
                    ability_special: "AbilityCastRange",
                    text: ""
                },
                {
                    ability_special: "damage",
                    text: ""
                },
                {
                    ability_special: "speed",
                    text: ""
                },
                {
                    ability_special: "radius",
                    text: ""
                },
                {
                    ability_special: "ricochet_radius_start",
                    text: ""
                },
                {
                    ability_special: "ricochet_radius_end",
                    text: ""
                },
                {
                    ability_special: "ricochet_distance_multiplier",
                    text: ""
                },
                {
                    ability_special: "ricochet_fear_duration",
                    text: ""
                },
                {
                    ability_special: "impact_slow_percent",
                    text: ""
                },
                {
                    ability_special: "impact_slow_duration",
                    text: ""
                }
            ],
            name: "",
            description: "",
            lore: "",
            notes: [
                "被恐惧的敌人为相位状态，无法被减速。",
                "跳弹的行进距离为弹无虚发施法距离的{ricochet_distance_multiplier}倍。",
                "可以弹离减益免疫目标。"
            ]
        },
        {
            ability_classname: "imba_muerta_the_calling",
            ability_specials: [
                {
                    ability_special: "damage",
                    text: ""
                },
                {
                    ability_special: "duration",
                    text: ""
                },
                {
                    ability_special: "hit_radius",
                    text: ""
                },
                {
                    ability_special: "dead_zone_distance",
                    text: ""
                },
                {
                    ability_special: "num_revenants",
                    text: ""
                },
                {
                    ability_special: "speed_initial",
                    text: ""
                },
                {
                    ability_special: "speed_max",
                    text: ""
                },
                {
                    ability_special: "acceleration",
                    text: ""
                },
                {
                    ability_special: "rotation_initial",
                    text: ""
                },
                {
                    ability_special: "debug_draw",
                    text: ""
                },
                {
                    ability_special: "aura_movespeed_slow",
                    text: ""
                },
                {
                    ability_special: "aura_attackspeed_slow",
                    text: ""
                },
                {
                    ability_special: "silence_duration",
                    text: ""
                },
                {
                    ability_special: "rotation_direction",
                    text: ""
                },
                {
                    ability_special: "kill_check_radius",
                    text: ""
                },
                {
                    ability_special: "kill_radius_expansion",
                    text: ""
                },
                {
                    ability_special: "kill_radius_expansion_speed",
                    text: ""
                },
                {
                    ability_special: "hp_regen_pct",
                    text: ""
                }
            ],
            name: "",
            description: "",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_muerta_gunslinger",
            ability_specials: [
                {
                    ability_special: "double_shot_chance",
                    text: ""
                },
                {
                    ability_special: "target_search_bonus_range",
                    text: ""
                },
                {
                    ability_special: "bonus_damage",
                    text: ""
                }
            ],
            name: "",
            description: "",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_muerta_pierce_the_veil",
            ability_specials: [
                {
                    ability_special: "duration",
                    text: ""
                },
                {
                    ability_special: "transform_duration",
                    text: ""
                },
                {
                    ability_special: "base_damage_pct",
                    text: ""
                },
                {
                    ability_special: "modelscale",
                    text: ""
                },
                {
                    ability_special: "bonus_damage",
                    text: ""
                },
                {
                    ability_special: "spell_lifesteal",
                    text: ""
                },
                {
                    ability_special: "spell_amp_steal",
                    text: ""
                },
                {
                    ability_special: "spell_amp_steal_range",
                    text: ""
                }
            ],
            name: "",
            description: "",
            lore: "",
            shard_description: "琼英碧灵在越界的持续时间内获得{spell_lifesteal}{技能吸血。<br>越界生效时每次击杀敌方英雄或有敌方英雄在附近阵亡时琼英碧灵都会永久获得{spell_amp_steal}}技能增强。永久加成具有追溯效果。",
            notes: [
                "琼英碧灵在变身期间可以躲避弹道。",
                "琼英碧灵在变身后无法攻击建筑。",
                "其他虚无效果也不会阻止琼英碧灵发动攻击。"
            ]
        },
        {
            ability_classname: "imba_muerta_ofrenda",
            ability_specials: [
                {
                    ability_special: "pierce_the_veil_duration_pct",
                    text: ""
                },
                {
                    ability_special: "attackspeed_bonus",
                    text: "攻击速度加成："
                },
                {
                    ability_special: "effect_radius",
                    text: "效果作用范围："
                }
            ],
            name: "祭台",
            description: "琼英碧灵在目标地点放下一座神圣的祭台，靠近时可以提升她的攻击速度。<br><br>复活时琼英碧灵会获得{pierce_the_veil_duration_pct}%持续时间的越界加成效果，并且在祭台处复活。<br><br>琼英碧灵可以选择祭台，强行将其摧毁。同一时间只能存在一个祭台。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_muerta_supernatural",
            ability_specials: [],
            name: "",
            description: "",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_muerta_ofrenda_destroy",
            ability_specials: [],
            name: "摧毁祭台",
            description: "摧毁这个祭台，确保琼英碧灵会在泉水复活。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_muerta_grave_tracker",
            ability_specials: [],
            name: "",
            description: "",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_muerta_grave_visitation",
            ability_specials: [
                {
                    ability_special: "tooltip_channel_time",
                    text: ""
                }
            ],
            name: "",
            description: "",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_muerta_parting_shot",
            ability_specials: [
                {
                    ability_special: "projectile_speed",
                    text: ""
                },
                {
                    ability_special: "knockback_duration",
                    text: ""
                },
                {
                    ability_special: "knockback_distance",
                    text: "击退距离："
                },
                {
                    ability_special: "debuff_duration",
                    text: "持续时间："
                },
                {
                    ability_special: "ethereal_damage_bonus",
                    text: ""
                },
                {
                    ability_special: "movement_slow",
                    text: ""
                },
                {
                    ability_special: "soul_return_time",
                    text: ""
                },
                {
                    ability_special: "soul_return_min_speed",
                    text: ""
                },
                {
                    ability_special: "damage_reduction_percent",
                    text: "%身体伤害减少："
                }
            ],
            name: "临别一枪",
            description: "琼英碧灵精准地射中一名英雄的灵魂，将其从身体中分离，并击退{knockback_distance}距离。<br>灵魂无法作为目标，被锁闭、缴械，并且是无敌状态，持续{debuff_duration}秒。<br>身体在持续时间内为眩晕状态，具有{damage_reduction_percent}%伤害减免效果。<br><br>效果结束后灵魂强制回到身体，并施加强驱散。即使英雄阵亡，灵魂也会存活到效果结束。",
            lore: "",
            notes: [
                "减益免疫单位会受到枪击的伤害，但是不会从身体中分离。",
                "临别一枪击中友方英雄不会造成伤害。"
            ]
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_muerta_dead_shot_charges",
                    name: ""
                },
                {
                    talent_classname: "special_bonus_unique_imba_muerta_dead_shot_damage",
                    name: "+{s:bonus_damage} 弹无虚发伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_muerta_dead_shot_range",
                    name: "+{s:bonus_AbilityCastRange} 弹无虚发施法距离"
                },
                {
                    talent_classname: "special_bonus_unique_imba_muerta_calling_hp_regen",
                    name: "唤魂内+{s:bonus_hp_regen_pct}% 最大生命值恢复",
                    description: "只对琼英碧灵生效。"
                },
                {
                    talent_classname: "special_bonus_unique_imba_muerta_gunslinger_bonus_damage",
                    name: ""
                },
                {
                    talent_classname: "special_bonus_unique_imba_muerta_the_calling_num_revenants",
                    name: "唤魂额外召唤{s:bonus_num_revenants}个亡魂"
                },
                {
                    talent_classname: "special_bonus_unique_imba_muerta_gunslinger_double_shot_chance",
                    name: ""
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "muerta_facets_imba_1",
            name: "",
            description: ""
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_muerta_dead_shot_fear",
            name: "弹无虚发恐惧"
        },
        {
            modifier_classname: "modifier_imba_muerta_dead_shot_slow",
            name: "弹无虚发减速"
        },
        {
            modifier_classname: "modifier_imba_muerta_the_calling_silence",
            name: "沉默"
        },
        {
            modifier_classname: "modifier_imba_muerta_the_calling_aura_slow",
            name: "唤魂",
            description: "移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%，攻击速度降低{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}。"
        },
        {
            modifier_classname: "modifier_imba_muerta_pierce_the_veil_buff",
            name: "越界",
            description: "虚无状态。攻击造成魔法伤害，而不是物理伤害。可以攻击虚无状态下的目标。"
        },
        {
            modifier_classname: "modifier_imba_muerta_pierce_the_veil_spell_amp_boost",
            name: "越界技能增强",
            description: "越界期间收获的击杀获得的技能增强。"
        },
        {
            modifier_classname: "modifier_imba_muerta_pierce_the_veil_spell_amp_boost_PostGame",
            name: "越界期间通过击杀获得的技能增强百分比。"
        },
        {
            modifier_classname: "modifier_imba_muerta_parting_shot_soul_debuff",
            name: "临别一枪灵魂",
            description: "无法成为目标，被锁闭，被缴械并且是无敌状态。"
        },
        {
            modifier_classname: "modifier_imba_muerta_parting_shot_physical_body_debuff",
            name: "临别一枪",
            description: "眩晕，直到英雄的灵魂回归。受到的伤害减少{MODIFIER_PROPERTY_INCOMING_DAMAGE_PERCENTAGE}%。"
        },
        {
            modifier_classname: "modifier_imba_muerta_ofrenda_damage_amp",
            name: "祭台",
            description: "附近的祭台提升{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}攻击速度。"
        },
        {
            modifier_classname: "modifier_imba_muerta_ofrenda_intrinsic",
            name: "祭台",
            description: "放置了一个神圣的祭坛。"
        }
    ]
};