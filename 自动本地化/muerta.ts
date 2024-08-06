import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_muerta_dead_shot",
            ability_specials: [
                {
                    ability_special: "damage",
                    text: "伤害："
                },
                {
                    ability_special: "ricochet_fear_duration",
                    text: "跳弹恐惧持续时间："
                },
                {
                    ability_special: "impact_slow_percent",
                    text: "%击中时减速："
                },
                {
                    ability_special: "impact_slow_duration",
                    text: "击中减速时间："
                }
            ],
            name: "弹无虚发",
            description: "琼英碧灵向一个敌方单位或一棵树发射一颗幽灵子弹。子弹击中时会对敌人造成伤害和短暂减速，然后沿矢量目标的方向弹去。<br><br>跳弹将会对穿过的所有单位造成伤害，击中英雄后停下。被跳弹击中的英雄会被恐惧。",
            lore: "握枪的手能纹丝不动，再加上永世的练习，产生了让凡人的头脑难以经受的花式射击。",
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
                    text: "伤害："
                },
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "aura_movespeed_slow",
                    text: "%移动速度减缓："
                },
                {
                    ability_special: "aura_attackspeed_slow",
                    text: "攻击速度降低："
                },
                {
                    ability_special: "silence_duration",
                    text: "沉默持续时间："
                }
            ],
            name: "唤魂",
            description: "召唤{num_revenants}个亡魂，缓慢地环绕目标地点。在区域内的敌人会被减速，攻击速度也会降低。亡魂会在敌人穿过时造成伤害和沉默。",
            lore: "琼英碧灵的家人永远都在生界之外，但是她与死神的交易让她可以在需要的时候看望他们片刻。",
            notes: []
        },
        {
            ability_classname: "imba_muerta_gunslinger",
            ability_specials: [
                {
                    ability_special: "double_shot_chance",
                    text: "%触发几率："
                }
            ],
            name: "神枪在手",
            description: "可以开关。开启后，琼英碧灵攻击时有几率对另一个目标再射一枪。",
            lore: "琼英碧灵会给予她所有目标仁慈。部分交上了好运还会获得恩泽。",
            notes: [
                "如果距离内没有其他单位，她会向原目标发射两枪。",
                "第二枪可以击中琼英碧灵攻击距离加上{target_search_bonus_range}范围内的单位。",
                "第二枪可以触发攻击特效。"
            ]
        },
        {
            ability_classname: "imba_muerta_pierce_the_veil",
            ability_specials: [
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "transform_duration",
                    text: "变身所需时间："
                },
                {
                    ability_special: "bonus_damage",
                    text: "攻击力加成："
                }
            ],
            name: "越界",
            description: "琼英碧灵变身，对物理伤害免疫。所有攻击伤害均为魔法伤害。琼英碧灵获得攻击力加成和相位移动状态。<br><br>驱散类型：弱驱散",
            lore: "琼英碧灵脱去她的实体形态，穿过生死之界，利用恶灵的愤怒打击她的敌人。",
            shard_description: "琼英碧灵在越界的持续时间内获得{spell_lifesteal}%技能吸血。<br>越界生效时每次击杀敌方英雄或有敌方英雄在附近阵亡时琼英碧灵都会永久获得{spell_lifesteal}%技能增强。永久加成具有追溯效果。",
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
            notes: []
        },
        {
            ability_classname: "imba_muerta_supernatural",
            ability_specials: [],
            name: "超自然",
            description: "琼英碧灵在虚无状态下也能攻击。琼英碧灵总是可以攻击虚无状态下的目标。攻击虚无状态的目标时，她的所有攻击伤害均为魔法伤害。",
            notes: []
        },
        {
            ability_classname: "imba_muerta_ofrenda_destroy",
            ability_specials: [],
            name: "摧毁祭台",
            description: "摧毁这个祭台，确保琼英碧灵会在泉水复活。",
            notes: []
        },
        {
            ability_classname: "imba_muerta_grave_tracker",
            ability_specials: [],
            notes: []
        },
        {
            ability_classname: "imba_muerta_grave_visitation",
            ability_specials: [],
            notes: []
        },
        {
            ability_classname: "imba_muerta_parting_shot",
            ability_specials: [
                {
                    ability_special: "knockback_distance",
                    text: "击退距离："
                },
                {
                    ability_special: "debuff_duration",
                    text: "持续时间："
                },
                {
                    ability_special: "damage_reduction_percent",
                    text: "%身体伤害减少："
                }
            ],
            name: "临别一枪",
            description: "琼英碧灵精准地射中一名英雄的灵魂，将其从身体中分离，并击退{knockback_distance}距离。<br>灵魂无法作为目标，被锁闭、缴械，并且是无敌状态，持续{debuff_duration}秒。<br>身体在持续时间内为眩晕状态，具有{damage_reduction_percent}%伤害减免效果。<br><br>效果结束后灵魂强制回到身体，并施加强驱散。即使英雄阵亡，灵魂也会存活到效果结束。",
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
                    name: "{s:value} 弹无虚发能量点数"
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
                    name: "+{s:bonus_bonus_damage} 神枪在手伤害",
                    description: "对两枪均有效。"
                },
                {
                    talent_classname: "special_bonus_unique_imba_muerta_the_calling_num_revenants",
                    name: "唤魂额外召唤{s:bonus_num_revenants}个亡魂"
                },
                {
                    talent_classname: "special_bonus_unique_imba_muerta_gunslinger_double_shot_chance",
                    name: "+{s:bonus_double_shot_chance}% 神枪在手几率"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "muerta_facets_imba_1",
            name: "亡灵之舞 | 祭台",
            description: "唤魂内有敌人阵亡后会变得更强大。 琼英碧灵可以在地图上放置提供加成效果的祭台，可以直接在祭台复活而不是泉水。",
            related_abilities: [
                {
                    ability_classname: "imba_muerta_the_calling",
                    description: "唤魂内有敌方英雄阵亡会刷新持续时间，再产生一个亡魂，并且唤魂的作用范围扩大{kill_radius_expansion}。"
                }
            ],
            related_talents: []
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
            modifier_classname: "modifier_imba_muerta_pierce_the_veil_spell_amp_boost_postgame",
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