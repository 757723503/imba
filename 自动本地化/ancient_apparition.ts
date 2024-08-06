import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_ancient_apparition_cold_feet",
            ability_specials: [
                {
                    ability_special: "frost_stacks",
                    text: "死亡雾霜叠加层数："
                },
                {
                    ability_special: "break_distance",
                    text: "失效距离："
                },
                {
                    ability_special: "stun_duration",
                    text: "眩晕时间："
                }
            ],
            name: "寒霜之足",
            description: "在一个敌方单位身上释放死亡雾霜叠加效果，但目标只要远离施法点足够距离即可消除。如果敌方单位没有在4秒内走出消除距离，则将被眩晕并冻在原地。",
            lore: "卡尔德的存在将他周围的敌人吸入冰封的虚空，甚至能将他们永远关进寒冰的监牢。",
            notes: [
                "每0.5秒造成一次伤害。"
            ]
        },
        {
            ability_classname: "imba_ancient_apparition_ice_vortex",
            ability_specials: [
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "spell_resist_pct",
                    text: "%魔法伤害加深："
                },
                {
                    ability_special: "frost_stacks",
                    text: "死亡雾霜叠加层数："
                },
                {
                    ability_special: "vortex_duration",
                    text: "持续时间："
                }
            ],
            name: "冰霜漩涡",
            description: "创造一个寒冰能量的漩涡，对范围内敌人施加死亡雾霜叠加层数，并增加他们受到的魔法伤害。",
            lore: "卡尔德恣意带来腐蚀性的冰风，将战场变寒冷。",
            notes: [
                "提供放置地点的小片视野。"
            ]
        },
        {
            ability_classname: "imba_ancient_apparition_chilling_touch",
            ability_specials: [
                {
                    ability_special: "damage",
                    text: "伤害："
                },
                {
                    ability_special: "frost_stacks",
                    text: "死亡雾霜叠加层数："
                },
                {
                    ability_special: "attack_range_bonus",
                    text: "攻击距离加成："
                }
            ],
            name: "极寒之触",
            description: "使远古冰魄的普通攻击具有攻击距离加成，并附带高额魔法伤害。施加死亡雾霜叠加层数，持续{duration}秒。额外施加持续{slow_duration}秒的{slow}%减速。",
            lore: "远古冰魄的永恒知识为他的出击赋予了冰冷的魔咒。",
            scepter_description: "移除冷却时间，并且魔法消耗降低{bonus_AbilityManaCost}%。",
            notes: []
        },
        {
            ability_classname: "imba_ancient_apparition_ice_blast",
            ability_specials: [
                {
                    ability_special: "path_radius",
                    text: "沿途作用范围："
                },
                {
                    ability_special: "frostbite_duration",
                    text: "寒霜诅咒持续时间："
                },
                {
                    ability_special: "frost_stacks",
                    text: "死亡雾霜叠加层数："
                },
                {
                    ability_special: "kill_pct",
                    text: "%即死生命值百分比："
                },
                {
                    ability_special: "cold_feet_aoe",
                    text: "寒霜之足范围："
                }
            ],
            name: "冰晶爆轰",
            description: "向地图的任意位置发出爆炸冰球，在冰球飞行时再次施放此技能将使其停下，使所在区域产生毁灭性的冰爆。冰球飞行的距离越长，冰爆影响的范围也将越大。冰爆范围内的所有敌方单位将马上受到大量伤害，而处于冰球飞行路径上的敌方英雄将与冰爆范围内的敌方英雄一同受到寒霜诅咒的作用，获得死亡雾霜叠加层数，同时无法回复生命。在此期间如果生命值低于一定百分比，该英雄将立刻死亡。",
            lore: "卡尔德的寒霜之体中流出远古的寒冰风暴，将这个世界的居民冻成他永恒力量的纪念碑。",
            shard_description: "冻结击中的敌人，持续时间为当前等级寒霜之足眩晕时间的{cold_feet_stun_duration_pct}%。",
            notes: [
                "施放后本技能替换为释放，将使指向球停在目标区域。",
                "作用范围的大小是{radius_min} + {radius_grow}*指向球的飞行时间，上限为{radius_max}。",
                "击杀目标的英雄由触发即死的伤害来源决定。",
                "斩杀效果对幻象无效。",
                "寒霜诅咒的负面状态无法被驱散，包括身处泉水附近，但魂断、时光倒流和超新星除外。"
            ]
        },
        {
            ability_classname: "imba_ancient_apparition_death_rime",
            ability_specials: [
                {
                    ability_special: "damage",
                    text: "每层叠加每秒伤害："
                },
                {
                    ability_special: "slow",
                    text: "%每层叠加减速："
                },
                {
                    ability_special: "cast_slow",
                    text: "%每层叠加降低施法速度："
                },
                {
                    ability_special: "strength_decrease",
                    text: "每层叠加降低力量："
                }
            ],
            name: "死亡雾霜",
            description: "远古冰魄的技能会对敌人施加死亡雾霜叠加层数。死亡雾霜会减缓敌人的移动速度，并且造成持续伤害。",
            notes: []
        },
        {
            ability_classname: "imba_ancient_apparition_ice_blast_release",
            ability_specials: [],
            name: "释放",
            description: "在它当前的位置放出冰晶爆轰。",
            notes: []
        },
        {
            ability_classname: "imba_ancient_apparition_ice_age",
            ability_specials: [],
            name: "寒冰之纪",
            description: "使{radius}范围内所有敌方英雄受到每秒{damage}点伤害和-{health_degen}%生命恢复/吸血，持续{duration}秒。",
            lore: "寒冰之纪背景。",
            notes: []
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_ancient_apparition_1",
                    name: "+{s:bonus_break_distance} 寒霜之足失效距离"
                },
                {
                    talent_classname: "special_bonus_unique_imba_ancient_apparition_2",
                    name: "+{s:bonus_damage} 极寒之触伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_ancient_apparition_3",
                    name: "-{s:bonus_AbilityCooldown}秒 冰霜漩涡冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_ancient_apparition_5",
                    name: "+{s:bonus_kill_pct}% 冰晶爆轰斩杀血量上限"
                },
                {
                    talent_classname: "special_bonus_unique_imba_ancient_apparition_6",
                    name: "+{s:bonus_damage}% 死亡雾霜减速/伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_ancient_apparition_7",
                    name: "+{s:bonus_attack_range_bonus} 极寒之触攻击距离"
                },
                {
                    talent_classname: "special_bonus_unique_imba_ancient_apparition_8",
                    name: "+{s:bonus_frost_stacks} 寒霜之足死亡雾霜叠加"
                },
                {
                    talent_classname: "special_bonus_unique_imba_ancient_apparition_ice_vortex_duration",
                    name: "+{s:bonus_frostbite_duration}秒 冰晶爆轰寒霜诅咒"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "ancient_apparition_facets_imba_1",
            name: "冰天雪地 | 刺骨严寒",
            description: "寒霜之足会在一定范围内施加，取决于冰晶爆轰的当前等级。 远古冰魄的技能会减少敌人的力量。",
            related_abilities: [
                {
                    ability_classname: "imba_ancient_apparition_cold_feet",
                    description: "寒霜之足变为范围型技能，作用范围取决于冰晶爆轰的当前等级。"
                },
                {
                    ability_classname: "imba_ancient_apparition_death_rime",
                    description: "每层死亡雾霜叠加效果还减少敌人的力量。"
                }
            ],
            related_talents: []
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_ancient_apparition_death_rime",
            name: "死亡雾霜",
            description: "移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%，并且持续受到伤害。"
        },
        {
            modifier_classname: "modifier_imba_ancient_apparition_death_rime_facet_ancient_apparition_bone_chill",
            name: "移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%，失去{MODIFIER_PROPERTY_STATS_STRENGTH_BONUS}点力量，而且持续受到伤害。"
        },
        {
            modifier_classname: "modifier_imba_ancient_apparition_cold_feet_charge_counter",
            name: "寒霜之足能量点数"
        }
    ]
};