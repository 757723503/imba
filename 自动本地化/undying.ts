import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_undying_decay",
            ability_specials: [
                {
                    ability_special: "decay_damage",
                    text: "基础伤害："
                },
                {
                    ability_special: "str_steal",
                    text: "力量窃取："
                },
                {
                    ability_special: "decay_duration",
                    text: "偷取效果持续时间："
                },
                {
                    ability_special: "radius",
                    text: "作用范围："
                }
            ],
            name: "腐朽",
            description: "不朽尸王偷取区域内所有敌方英雄的力量，造成基础伤害并将敌人的力量据为己有。对非英雄单位造成{creep_damage_multiplier}倍伤害。",
            lore: "生者的力量只不过是借用自死者。",
            scepter_description: "提升力量窃取。",
            notes: [
                "窃据的力量可以叠加，但是敌方英雄的力量至少为1点。",
                "力量的窃取先于技能造成的伤害。",
                "可以作用隐形单位。"
            ]
        },
        {
            ability_classname: "imba_undying_soul_rip",
            ability_specials: [
                {
                    ability_special: "damage_per_unit",
                    text: "每个单位提供伤害/治疗量："
                },
                {
                    ability_special: "max_units",
                    text: "有效单位数上限："
                },
                {
                    ability_special: "radius",
                    text: "噬魂作用范围："
                },
                {
                    ability_special: "tombstone_heal",
                    text: "墓碑治疗量："
                },
                {
                    ability_special: "strength_share_percent",
                    text: "%力量获得："
                },
                {
                    ability_special: "strength_share_duration",
                    text: "持续时间："
                }
            ],
            name: "噬魂",
            description: "不朽尸王从附近的所有单位身上扯出生命力，并使用它治疗队友或伤害敌人。可以使用噬魂治疗墓碑。",
            lore: "即使是友军也能从不朽尸王的存在中感受到绝望。",
            notes: [
                "可以治疗墓碑，但是不能治疗或伤害其他建筑。",
                "不会扯出隐身单位、无敌单位、战争迷雾内单位或减益免疫敌人的生命力。",
                "可以扯出减益免疫友军，包括僵尸的生命力。"
            ]
        },
        {
            ability_classname: "imba_undying_tombstone",
            ability_specials: [
                {
                    ability_special: "hits_to_destroy_tooltip",
                    text: "摧毁所需攻击次数："
                },
                {
                    ability_special: "duration",
                    text: "墓碑持续时间："
                },
                {
                    ability_special: "radius",
                    text: "僵尸产生范围："
                },
                {
                    ability_special: "health_threshold_pct_tooltip",
                    text: "%死亡渴望触发百分比："
                },
                {
                    ability_special: "zombie_interval",
                    text: "僵尸产生间隔："
                },
                {
                    ability_special: "zombie_damage_tooltip",
                    text: "僵尸攻击力："
                }
            ],
            name: "墓碑",
            description: "在目标位置召唤一座墓碑。墓碑会不断在其附近的每个敌方单位身边产生僵尸攻击他们。僵尸拥有死亡渴望技能，使他们的攻击带有减速效果，并且若目标的生命值低于一定数值或一定百分比，僵尸的攻击和移动速度会提升。",
            lore: "挽歌召唤他倒下的战友为死亡之神作战。",
            shard_description: "墓碑可以对友方英雄施放，让他们躲进墓碑。进入墓碑的英雄{tombstone_bunker_cd}秒内无法离开，离开后同样的时间内无法再次进入。如果英雄在内时墓碑被摧毁，该英雄会被眩晕{tombstone_stun_penalty}秒。",
            notes: [
                "墓碑免疫技能，但是可以被噬魂治疗。",
                "僵尸和墓碑均免疫技能。",
                "如果初始目标死亡或丢失视野，僵尸将会死亡。"
            ]
        },
        {
            ability_classname: "imba_undying_tombstone_zombie_aura",
            ability_specials: [],
            notes: []
        },
        {
            ability_classname: "imba_undying_tombstone_zombie_deathstrike",
            ability_specials: [
                {
                    ability_special: "slow",
                    text: "%移动速度减缓："
                },
                {
                    ability_special: "health_threshold_pct",
                    text: "%临界生命值百分比："
                },
                {
                    ability_special: "duration",
                    text: "减速持续时间："
                },
                {
                    ability_special: "bonus_move_speed",
                    text: "%移动速度加成："
                },
                {
                    ability_special: "bonus_attack_speed",
                    text: "攻击速度加成："
                }
            ],
            name: "死亡渴望",
            description: "攻击时对敌方单位造成减速。如果目标单位的生命值低于临界值，僵尸会获得移动和攻击速度加成。",
            notes: []
        },
        {
            ability_classname: "imba_undying_flesh_golem",
            ability_specials: [
                {
                    ability_special: "slow",
                    text: "%移动速度减缓："
                },
                {
                    ability_special: "damage_amp",
                    text: "%伤害加深："
                },
                {
                    ability_special: "slow_duration",
                    text: "减速持续时间："
                },
                {
                    ability_special: "str_percentage",
                    text: "%力量加成系数："
                },
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "movement_bonus",
                    text: "移动速度加成："
                },
                {
                    ability_special: "zombie_duration",
                    text: "僵尸持续时间："
                }
            ],
            name: "血肉傀儡",
            description: "不朽尸王变身为一具令人毛骨悚然的血肉傀儡。获得一定百分比的力量加成，攻击附带减速和伤害加深效果。",
            lore: "新近死者的血肉增强了挽歌瘟疫的力量。",
            notes: []
        },
        {
            ability_classname: "imba_undying_tombstone_grab",
            ability_specials: [
                {
                    ability_special: "grab_radius",
                    text: "最大装载距离："
                }
            ],
            name: "抓住友军",
            description: "将一名友军装进可用的最近墓碑。",
            notes: []
        },
        {
            ability_classname: "imba_undying_tombstone_unit_grab",
            ability_specials: [],
            name: "抓住友军",
            description: "将一名友军装进这座墓碑。",
            notes: []
        },
        {
            ability_classname: "imba_undying_zombie_master",
            ability_specials: [],
            notes: []
        },
        {
            ability_classname: "imba_undying_ceaseless_dirge",
            ability_specials: [],
            name: "挽歌犹唱",
            description: "不朽尸王阵亡时会立刻在泉水复活。比赛开始时处于冷却状态。无法被刷新。",
            notes: []
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_undying",
                    name: "+{s:bonus_zombie_damage_tooltip} 僵尸攻击力"
                },
                {
                    talent_classname: "special_bonus_unique_imba_undying_2",
                    name: "-{s:value}秒 腐朽冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_undying_3",
                    name: "死亡时召唤墓碑"
                },
                {
                    talent_classname: "special_bonus_unique_imba_undying_4",
                    name: "+{s:bonus_str_percentage}% 血肉傀儡额外力量"
                },
                {
                    talent_classname: "special_bonus_unique_imba_undying_5",
                    name: "+{s:bonus_hits_to_destroy_tooltip} 墓碑可攻击次数"
                },
                {
                    talent_classname: "special_bonus_unique_imba_undying_6",
                    name: "+{s:bonus_damage_per_unit} 噬魂伤害/治疗"
                },
                {
                    talent_classname: "special_bonus_unique_imba_undying_7",
                    name: "-{s:bonus_AbilityCooldown}秒 墓碑冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_undying_8",
                    name: "+{s:bonus_decay_damage} 腐朽伤害"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "undying_facets_imba_1",
            name: "共噬 | 腐朽之拳",
            description: "对友军施放噬魂会使他们的力量提升，数值为不朽尸王力量的一定百分比。 变身为血肉傀儡后，每次攻击会产生一个僵尸。",
            related_abilities: [
                {
                    ability_classname: "imba_undying_soul_rip",
                    description: "对友军施放噬魂会使他们的力量提升，数值为不朽尸王力量的一定百分比。"
                },
                {
                    ability_classname: "imba_undying_flesh_golem",
                    description: "变身为血肉傀儡后，每次攻击会产生一个僵尸。"
                }
            ],
            related_talents: []
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_undying_ceaseless_dirge_buff",
            name: "不懈归来",
            description: "马上在泉水复活……"
        },
        {
            modifier_classname: "modifier_imba_undying_decay_buff",
            name: "腐朽",
            description: "偷取{MODIFIER_PROPERTY_EXTRA_STRENGTH_BONUS}点力量。"
        },
        {
            modifier_classname: "modifier_imba_undying_decay_buff_counter",
            name: "腐朽",
            description: "窃取{MODIFIER_PROPERTY_TOOLTIP}点力量为己用。"
        },
        {
            modifier_classname: "modifier_imba_undying_decay_debuff",
            name: "腐朽",
            description: "失去4点力量。"
        },
        {
            modifier_classname: "modifier_imba_undying_decay_debuff_counter",
            name: "腐朽",
            description: "失去{MODIFIER_PROPERTY_TOOLTIP}点力量。"
        },
        {
            modifier_classname: "modifier_imba_undying_decay_shard",
            name: "强化腐朽",
            description: "提升腐朽的力量偷取。"
        },
        {
            modifier_classname: "modifier_imba_undying_flesh_golem",
            name: "血肉傀儡",
            description: "力量提升{MODIFIER_PROPERTY_STATS_STRENGTH_BONUS_PERCENTAGE}%。攻击使敌人减速，并持续造成额外伤害。"
        },
        {
            modifier_classname: "modifier_imba_undying_flesh_golem_plague_aura",
            name: "血肉傀儡的瘟疫光环",
            description: "移动速度被减缓，每秒损失当前生命值的一定百分比。"
        },
        {
            modifier_classname: "modifier_imba_undying_flesh_golem_slow",
            name: "血肉傀儡瘟疫",
            description: "移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%，并且增加了承受所有来源的伤害。"
        },
        {
            modifier_classname: "modifier_imba_undying_tombstone_zombie_modifier",
            name: "死亡渴望减速效果",
            description: "不朽尸王的僵尸攻击目标时将减缓其移动速度。"
        },
        {
            modifier_classname: "modifier_imba_undying_tombstone_zombie_deathstrike_slow_counter",
            name: "死亡渴望减速效果",
            description: "被不朽尸王的僵尸减速{MODIFIER_PROPERTY_TOOLTIP}%。"
        },
        {
            modifier_classname: "modifier_imba_undying_tombstone_zombie_deathlust",
            name: "死亡渴望狂暴",
            description: "移动和攻击速度增加{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。"
        },
        {
            modifier_classname: "modifier_imba_undying_tombstone_bunker_cooldown",
            name: "墓碑躲藏",
            description: "无法离开或进入一座墓碑。"
        },
        {
            modifier_classname: "modifier_imba_undying_tombstone_bunker_friendly",
            name: "墓碑躲藏",
            description: "进入一座墓碑。无敌，但无法行动。"
        },
        {
            modifier_classname: "modifier_imba_undying_soul_rip_share_strength",
            name: "共噬",
            description: "不朽尸王的噬魂提供了{MODIFIER_PROPERTY_STATS_STRENGTH_BONUS}点力量。"
        }
    ]
};