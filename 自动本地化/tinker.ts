import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_tinker_defense_matrix",
            ability_specials: [
                {
                    ability_special: "damage_absorb",
                    text: "伤害护盾："
                },
                {
                    ability_special: "status_resistance",
                    text: "%状态抗性："
                },
                {
                    ability_special: "barrier_duration",
                    text: "持续时间："
                },
                {
                    ability_special: "flicker_range",
                    text: "闪烁距离："
                }
            ],
            name: "防御矩阵",
            description: "以友方单位为目标，施加一个全伤害的护盾，并提供状态抗性。",
            notes: []
        },
        {
            ability_classname: "imba_tinker_keen_teleport",
            ability_specials: [
                {
                    ability_special: "channel_time_tooltip",
                    text: "持续施法时间："
                }
            ],
            name: "基恩载具",
            description: "持续施法 - 传送至友方建筑目标。2级可以传送至友方单位，3级可以传送至友方英雄。",
            lore: "就像鲍什经常挂在嘴边的，“只要时间足够，奥术能实现的东西，求知的心也能重现。当然，一定的资助也少不了。”",
            notes: []
        },
        {
            ability_classname: "imba_tinker_eureka",
            ability_specials: [
                {
                    ability_special: "item_cooldown_tooltip",
                    text: "%物品冷却时间减少："
                }
            ],
            name: "尤里卡！",
            description: "修补匠的每{int_per_one_cdr}点智力提供{one_percent_tooltip}%物品冷却时间减少，最多为{one_percent_tooltip}%。",
            notes: []
        },
        {
            ability_classname: "imba_tinker_innate_keen_teleport_gold_on_death",
            ability_specials: [],
            notes: []
        },
        {
            ability_classname: "imba_tinker_innate_keen_teleport_xp_on_death",
            ability_specials: [],
            notes: []
        },
        {
            ability_classname: "imba_tinker_laser",
            ability_specials: [
                {
                    ability_special: "miss_rate",
                    text: "%致盲后丢失概率："
                },
                {
                    ability_special: "duration",
                    text: "致盲持续时间："
                },
                {
                    ability_special: "laser_damage",
                    text: "激光伤害："
                },
                {
                    ability_special: "radius_explosion",
                    text: "作用范围："
                }
            ],
            name: "激光",
            description: "发射强烈的能量光束，对目标造成伤害和致盲。被致盲的单位，所有物理攻击都会落空。",
            lore: "鲍什在他的地下实验室完善了这把激光岩石切割器，但并未考虑到它的作战效用。",
            scepter_description: "修补匠的激光升级成缩小射线，使其模型大小、当前生命值和最大生命值减少{scepter_reduction_pct}%（可以叠加）。光线可以弹射一次到离主目标最远的目标身上，最远为{scepter_bounce_radius}距离，以英雄优先。",
            notes: []
        },
        {
            ability_classname: "imba_tinker_shrink_ray",
            ability_specials: [
                {
                    ability_special: "scale_reduction",
                    text: "%模型大小减少："
                },
                {
                    ability_special: "health_reduction",
                    text: "%最大生命值减少："
                },
                {
                    ability_special: "slow",
                    text: "%移动速度减缓："
                }
            ],
            name: "缩小光线",
            description: "敌方目标的模型大小和最大生命值降低20%{，持续}duration%秒。",
            notes: []
        },
        {
            ability_classname: "imba_tinker_heat_seeking_missile",
            ability_specials: [
                {
                    ability_special: "damage",
                    text: "伤害："
                },
                {
                    ability_special: "targets",
                    text: "目标数："
                },
                {
                    ability_special: "speed",
                    text: "飞弹速度："
                }
            ],
            name: "热导飞弹",
            description: "发射火箭，攻击{radius}范围内可见的最近敌方英雄。",
            lore: "鲍什最后救下来的玩意儿，是一个改造过的制导式火箭筒。",
            notes: []
        },
        {
            ability_classname: "imba_tinker_march_of_the_machines",
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
                    text: "伤害："
                },
                {
                    ability_special: "heal_per_second",
                    text: "每秒治疗："
                },
                {
                    ability_special: "heal_duration",
                    text: "治疗持续时间："
                }
            ],
            name: "机械行军",
            description: "征募一支机器人军队，摧毁修补匠周围的敌方单位。",
            lore: "就算实验室最后被封锁了，呼叫机械无人机的无线电还是畅通的。",
            notes: [
                "机器人的产生速率是每秒{machines_per_sec}个。"
            ]
        },
        {
            ability_classname: "imba_tinker_rearm",
            ability_specials: [
                {
                    ability_special: "magic_resistance",
                    text: "%魔法抗性加成："
                }
            ],
            name: "再装填",
            description: "持续施法 - 重置修补匠技能的冷却时间。",
            lore: "这儿换块新电池，那儿塞几枚火箭弹，鲍什不断改进现有的技术。",
            notes: []
        },
        {
            ability_classname: "imba_tinker_warp_grenade",
            ability_specials: [
                {
                    ability_special: "damage",
                    text: "伤害："
                },
                {
                    ability_special: "range_reduction",
                    text: "%施法/攻击距离降低："
                }
            ],
            name: "折跃耀光",
            description: "向一个敌人扔出一枚光弹，造成伤害，将其向远离修补匠的方向传送并且缠绕，同时降低施法和攻击距离，持续{debuff_duration}秒。<br><br>传送地点和修补匠扔出光弹时的地点之间相距的距离总是技能的当前施法距离 + {bonus_distance}。",
            notes: [
                "如果相距超过{max_distance}则不会使敌人传送。"
            ]
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_tinker",
                    name: "+{s:bonus_laser_damage} 激光伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_tinker_4",
                    name: "{s:bonus_radius_explosion} 范围型激光"
                },
                {
                    talent_classname: "special_bonus_unique_imba_tinker_5",
                    name: "-{s:bonus_AbilityChannelTime}秒 基恩载具持续施法"
                },
                {
                    talent_classname: "special_bonus_unique_imba_tinker_7",
                    name: "+{s:bonus_damage_absorb} 防御矩阵伤害吸收"
                },
                {
                    talent_classname: "special_bonus_unique_imba_tinker_rearm_magic_resistance",
                    name: "再装填提供{s:bonus_magic_resistance}% 魔抗加成",
                    description: "持续 {s:bonus_armor_duration}秒。"
                },
                {
                    talent_classname: "special_bonus_unique_imba_tinker_march_duration",
                    name: "+{s:bonus_duration}秒 机械行军持续时间"
                },
                {
                    talent_classname: "special_bonus_unique_imba_tinker_defense_matrix_status_resistance",
                    name: "+{s:bonus_status_resistance}% 防御矩阵状态抗性"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "tinker_facets_imba_1",
            name: "维修机器人 | 易位器",
            description: "机械行军在穿过友方英雄时会施加不可叠加的持续治疗效果。 在对自身施放的防御矩阵护盾被完全吸收后，修补匠会向前方的随机方向闪烁。<br><br>驱散类型：弱驱散",
            related_abilities: [
                {
                    ability_classname: "imba_tinker_defense_matrix",
                    description: "在对自身施放的防御矩阵护盾被完全吸收后，修补匠会向前方的随机方向闪烁。<br><br>驱散类型：弱驱散"
                },
                {
                    ability_classname: "imba_tinker_march_of_the_machines",
                    description: "机械行军在穿过友方英雄时会施加不可叠加的持续治疗效果。"
                }
            ],
            related_talents: []
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_tinker_laser_blind",
            name: "致盲激光",
            description: "{MODIFIER_PROPERTY_MISS_PERCENTAGE}%的攻击落空。"
        },
        {
            modifier_classname: "modifier_imba_tinker_rearm",
            name: "再装填",
            description: "重置技能冷却时间中。"
        },
        {
            modifier_classname: "modifier_imba_tinker_rearmor",
            name: "再装填护体",
            description: "魔法抗性增加{MODIFIER_PROPERTY_MAGICAL_RESISTANCE_BONUS}%。"
        },
        {
            modifier_classname: "modifier_imba_tinker_defense_matrix",
            name: "防御矩阵",
            description: "吸收伤害并提供{MODIFIER_PROPERTY_STATUS_RESISTANCE_STACKING}%状态抗性。"
        },
        {
            modifier_classname: "modifier_imba_tinker_warp_grenade",
            name: "折跃耀光",
            description: "被缠绕。因折跃迷乱，施法距离减少{MODIFIER_PROPERTY_CAST_RANGE_BONUS_PERCENTAGE}%，攻击距离减少{MODIFIER_PROPERTY_CAST_RANGE_BONUS_PERCENTAGE}%。"
        },
        {
            modifier_classname: "modifier_imba_tinker_heat_seeking_missile_vision",
            name: "热导飞弹",
            description: "你被发现了！"
        },
        {
            modifier_classname: "modifier_imba_tinker_repair_bots",
            name: "维修机器人",
            description: "正被维修机器人治疗。"
        }
    ]
};