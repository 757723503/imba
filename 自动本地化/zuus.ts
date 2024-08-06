import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_zuus_heavenly_jump",
            ability_specials: [
                {
                    ability_special: "damage",
                    text: "伤害："
                },
                {
                    ability_special: "hop_distance",
                    text: "距离："
                },
                {
                    ability_special: "range",
                    text: "距离："
                },
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "move_slow",
                    text: "%移动速度减缓："
                },
                {
                    ability_special: "aspd_slow",
                    text: "攻击速度降低："
                },
                {
                    ability_special: "targets",
                    text: "目标数："
                }
            ],
            name: "神圣一跳",
            description: "宙斯作出神圣一跳，向前跳跃并震击最近的可见敌人（以英雄优先），造成伤害，并减缓其移动速度、攻击速度。宙斯获得附近900范围的顺畅视野，持续3秒。",
            notes: []
        },
        {
            ability_classname: "imba_zuus_arc_lightning",
            ability_specials: [
                {
                    ability_special: "arc_damage",
                    text: "基础伤害："
                },
                {
                    ability_special: "jump_count",
                    text: "跳跃次数："
                }
            ],
            name: "弧形闪电",
            description: "释放一道会跳跃穿越附近敌人的闪电，造成基础伤害和当前生命值的一定百分比。",
            lore: "弧形闪电是宙斯在对付渺小的凡人时最喜欢用的法术。",
            notes: []
        },
        {
            ability_classname: "imba_zuus_lightning_bolt",
            ability_specials: [
                {
                    ability_special: "sight_radius_day",
                    text: "视野范围："
                },
                {
                    ability_special: "sight_duration",
                    text: "视野持续时间："
                },
                {
                    ability_special: "ministun_duration",
                    text: "眩晕时间："
                }
            ],
            name: "雷击",
            description: "召唤一道闪电打击一个敌方单位，造成伤害及短暂眩晕。施放后，雷击在目标周围{sight_radius_night}范围内提供空中视野和真实视域。本技能可以对地施放，将会自动作用于{spread_aoe}范围内最近的敌方英雄上。",
            lore: "对那些反叛的异教徒最震慑的天罚。",
            notes: [
                "该技能可以打断持续施法类技能和物品。"
            ]
        },
        {
            ability_classname: "imba_zuus_cloud",
            ability_specials: [
                {
                    ability_special: "cloud_duration",
                    text: "持续时间："
                },
                {
                    ability_special: "cloud_bolt_interval",
                    text: "雷击基础冷却时间："
                },
                {
                    ability_special: "cloud_radius",
                    text: "作用范围："
                },
                {
                    ability_special: "hits_to_kill_tooltip",
                    text: "摧毁所需次数："
                },
                {
                    ability_special: "creep_hits_to_kill_tooltip",
                    text: "摧毁所需次数（非英雄）："
                }
            ],
            name: "雷云",
            description: "在地图任意地点创造一朵雷云，雷云将自动对附近敌人施放雷击。",
            lore: "雷神的怒气滋长之地，雷云也会很快聚集。",
            notes: [
                "敌方英雄将其摧毁后可以获得{cloud_bounty_tooltip}金。",
                "以宙斯当前等级的雷击作用于最近的敌方单位。",
                "防御塔和非英雄单位对雷云造成半额伤害。"
            ]
        },
        {
            ability_classname: "imba_zuus_static_field",
            ability_specials: [
                {
                    ability_special: "damage_health_pct",
                    text: "%当前生命值伤害："
                },
                {
                    ability_special: "damage_health_pct_max_close",
                    text: "%最高伤害："
                },
                {
                    ability_special: "damage_health_pct_min_close",
                    text: "%最低伤害："
                },
                {
                    ability_special: "distance_threshold_min",
                    text: "最高伤害距离："
                },
                {
                    ability_special: "distance_threshold_max",
                    text: "最低伤害距离："
                }
            ],
            name: "静电场",
            description: "宙斯攻击或通过技能击中敌人都会电击他们，造成他们当前生命值一定百分比的伤害。",
            lore: "当天神行于世间，空气中满是静电爆裂。",
            notes: []
        },
        {
            ability_classname: "imba_zuus_thundergods_wrath",
            ability_specials: [
                {
                    ability_special: "sight_radius_day",
                    text: "真实视域范围："
                },
                {
                    ability_special: "sight_duration",
                    text: "持续时间："
                },
                {
                    ability_special: "damage",
                    text: "伤害："
                },
                {
                    ability_special: "growing_delay",
                    text: "雷击间延迟："
                },
                {
                    ability_special: "grow_kill_amp",
                    text: "%每次击杀提升伤害："
                }
            ],
            name: "雷神之怒",
            description: "用闪电打击所有敌方英雄，对他们造成伤害，无论他们身在何处。<br><br>雷神之怒还会提供每个受攻击的英雄周围的真实视域。隐身的英雄不会受到伤害，但依然会获得他所在之处的真实视域。",
            lore: "神王毁灭一切胆敢反抗他的敌人，他们无所遁形。",
            notes: []
        },
        {
            ability_classname: "imba_zuus_lightning_hands",
            ability_specials: [
                {
                    ability_special: "attack_speed_bonus",
                    text: "攻击速度加成："
                },
                {
                    ability_special: "arc_lightning_damage_pct",
                    text: "%弧形闪电伤害："
                }
            ],
            name: "霹雳之手",
            description: "宙斯获得攻击速度加成，并且他的攻击会产生弧形闪电，造成一定百分比的伤害。可以关闭，使攻击不附带该效果。",
            notes: []
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_zeus",
                    name: "+{s:bonus_targets} 神圣一跳目标"
                },
                {
                    talent_classname: "special_bonus_unique_imba_zeus_2",
                    name: "+{s:bonus_arc_damage} 弧形闪电伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_zeus_3",
                    name: "+{s:bonus_ministun_duration}秒 雷击眩晕"
                },
                {
                    talent_classname: "special_bonus_unique_imba_zeus_4",
                    name: "+{s:bonus_damage} 雷神之怒伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_zeus_5",
                    name: "{s:value} 范围型雷击"
                },
                {
                    talent_classname: "special_bonus_unique_imba_zeus_jump_cooldown",
                    name: "-{s:bonus_AbilityCooldown}秒 神圣一跳冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_zeus_jump_postjump_movespeed",
                    name: "神圣一跳后+{s:bonus_postjump_movespeed} 移速"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "zuus_facets_imba_1",
            name: "欢声雷动 | 神圣之怒",
            description: "静电场对附近的敌人造成更多伤害。 如果雷神之怒击杀了一个敌人，那么对其他敌人造成的伤害会增加。",
            related_abilities: [
                {
                    ability_classname: "imba_zuus_static_field",
                    description: "静电场对附近的敌人造成更多伤害。"
                },
                {
                    ability_classname: "imba_zuus_thundergods_wrath",
                    description: "从最低生命值的英雄开始，逐一对敌人造成伤害，最后是生命值最高的敌人。如果有敌人被这个技能击杀，那么接下来所有敌人受到的伤害都会增加。"
                }
            ],
            related_talents: []
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_zuus_static_field",
            name: "静电场",
            description: "只要宙斯攻击或利用技能击中敌人，他们就会被震击，受到当前生命值一定百分比的伤害。"
        },
        {
            modifier_classname: "modifier_imba_zuus_static_field_slow",
            name: "神圣一跳",
            description: "移动速度被减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%%%。"
        },
        {
            modifier_classname: "modifier_imba_zuus_heavenly_jump_boost",
            name: "神圣一跳增强效果",
            description: "移动速度提升{MODIFIER_PROPERTY_MOVESPEED_BONUS_CONSTANT}。"
        }
    ]
};