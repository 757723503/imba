import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_skywrath_mage_arcane_bolt",
            ability_specials: [
                {
                    ability_special: "bolt_damage",
                    text: "基础伤害："
                },
                {
                    ability_special: "int_multiplier",
                    text: "智力伤害系数："
                }
            ],
            name: "奥法鹰隼",
            description: "天怒法师施放出缓慢移动的奥术鹰群，对敌方单位造成基于天怒法师智力值的伤害。",
            lore: "面对苍白之巢内无穷的诡计，只有沉稳的聪明人才能幸存。",
            shard_description: "天怒法师施放奥法鹰隼时，会产生{total_bolt_count}个鹰隼，其中一个飞往原目标，而另一个飞往原目标附近{extra_bolt_search_radius}范围内一个随机敌人。以英雄为首要目标。",
            scepter_description: "天怒法师施放奥法鹰隼时，会产生{total_bolt_count}个鹰隼，其中一个飞往原目标，而其他的——飞往原目标附近{extra_bolt_search_radius}范围内随机敌人。以英雄为首要目标。",
            notes: [
                "鹰群移动得非常缓慢（500移速），提供325范围的视野。击中目标后，将给予目标区域的视野，持续3.34秒。",
                "奥法鹰隼无法被躲避。"
            ]
        },
        {
            ability_classname: "imba_skywrath_mage_concussive_shot",
            ability_specials: [
                {
                    ability_special: "launch_radius",
                    text: "光弹作用范围："
                },
                {
                    ability_special: "slow_radius",
                    text: "伤害作用范围："
                },
                {
                    ability_special: "damage",
                    text: "伤害："
                },
                {
                    ability_special: "slow_duration",
                    text: "减速持续时间："
                },
                {
                    ability_special: "movement_speed_pct",
                    text: "%移动速度减缓："
                }
            ],
            name: "震荡光弹",
            description: "天怒法师释放一个远距离的光弹，将击中超大范围内最近的英雄。击中后会对英雄附近范围内所有单位造成伤害和减速。对非英雄单位造成{creep_damage_pct}%伤害。",
            lore: "侍奉苍白之巢王庭就会对身边的暗流涌动不加关注。必须要时刻明白周围最近的危险所在。",
            scepter_description: "天怒法师施放震荡光弹时，会随机对距离内另一个敌人施放相同的技能。以英雄为首要目标。",
            notes: [
                "如果作用范围内没有英雄或英雄处于迷雾中，震荡光弹将以最近的敌方小兵或中立生物为目标。",
                "击中英雄后附近的非英雄单位也会受到伤害。",
                "光弹将给予400范围的附近视野，击中后将获得目标区域的视野，持续3.34秒。"
            ]
        },
        {
            ability_classname: "imba_skywrath_mage_ancient_seal",
            ability_specials: [
                {
                    ability_special: "resist_debuff",
                    text: "%魔法伤害加深："
                },
                {
                    ability_special: "seal_duration",
                    text: "持续时间："
                }
            ],
            name: "上古封印",
            description: "天怒法师利用上古符文将目标单位封印，目标单位将被沉默，受到魔法伤害时将承受额外伤害。",
            lore: "一个神圣的咒语，只要被亚未里亚的符印所包围就必然在无声的忏悔中受难。",
            shard_description: "上古封印的负面效果可以使其他负面效果的持续时间延长50%%。提供目标的视野。",
            scepter_description: "天怒法师施放上古封印时，会随机对附近{scepter_radius}范围内另一个敌人施放相同的技能。以英雄为首要目标。",
            notes: [
                "减少魔法抗性的效果对非英雄单位无效。"
            ]
        },
        {
            ability_classname: "imba_skywrath_mage_mystic_flare",
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
                }
            ],
            name: "神秘之耀",
            description: "天怒法师操控终极魔力，召唤精准致命的奥术力场毁灭对手。{duration}秒期间对范围内所有敌方英雄造成大量伤害，伤害由所有英雄平摊。",
            lore: "天怒一族中只有勤加修炼的法师才能将苍天塑造成这样的风暴。",
            scepter_description: "天怒法师施放神秘之耀时，附近{scepter_radius}范围内另一个敌人的位置上也会产生一个神秘之耀。以英雄为首要目标。",
            notes: [
                "神秘之耀击中英雄时，仅对范围内英雄有效，幻象或类英雄单位不会受到伤害。",
                "减益免疫状态下的敌人不会被均摊伤害。",
                "神秘之耀在没有敌方英雄时将对敌方非英雄单位造成伤害。"
            ]
        },
        {
            ability_classname: "imba_skywrath_mage_shield_of_the_scion",
            ability_specials: [
                {
                    ability_special: "barrier_duration",
                    text: "护盾持续时间："
                }
            ],
            name: "天裔之盾",
            description: "每次天怒法师用技能对敌方英雄造成魔法伤害时，他都会获得一个魔法伤害护盾，数值等于{damage_barrier_base} + 英雄等级 * {damage_barrier_per_level}。每个加成状态独立叠加。",
            notes: []
        },
        {
            ability_classname: "imba_skywrath_mage_staff_of_the_scion",
            ability_specials: [],
            name: "天裔之杖",
            description: "每次天怒法师用技能对敌方英雄造成魔法伤害时，他所有技能的冷却时间都会减少{cooldown_reduction}秒。",
            notes: []
        },
        {
            ability_classname: "imba_skywrath_mage_ruin_and_restoration",
            ability_specials: [],
            name: "拨乱返正",
            description: "天怒法师拥有{spell_lifesteal}%技能吸血。",
            notes: []
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_skywrath",
                    name: "-{s:value}秒 上古封印冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_skywrath_2",
                    name: "+{s:bonus_int_multiplier} 奥法鹰隼智力系数"
                },
                {
                    talent_classname: "special_bonus_unique_imba_skywrath_3",
                    name: "+{s:bonus_resist_debuff}% 上古封印加深魔法伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_skywrath_4",
                    name: "全屏震荡光弹"
                },
                {
                    talent_classname: "special_bonus_unique_imba_skywrath_5",
                    name: "+{s:bonus_damage} 神秘之耀伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_skywrath_6",
                    name: "奥法鹰隼无视减益免疫"
                },
                {
                    talent_classname: "special_bonus_unique_imba_skywrath_arcane_bolt_lifesteal",
                    name: "+{s:bonus_spell_lifesteal}% 拨乱返正技能吸血"
                },
                {
                    talent_classname: "special_bonus_unique_imba_skywrath_concussive_shot_slow",
                    name: "+{s:bonus_movement_speed_pct}% 震荡光弹减速"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "skywrath_mage_facets_imba_1",
            name: "天裔之盾 | 天裔之杖",
            description: "天怒法师对英雄造成魔法伤害时获得魔法伤害护盾。 天怒法师对敌方英雄造成魔法伤害时技能的冷却时间都会减少。",
            related_abilities: [],
            related_talents: []
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_skywrath_mage_arcane_bolt_lifesteal",
            name: "奥法鹰隼",
            description: "天怒法师造成的魔法伤害会治疗他。"
        },
        {
            modifier_classname: "modifier_imba_skywrath_mage_concussive_shot_slow",
            name: "震荡光弹",
            description: "移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。"
        },
        {
            modifier_classname: "modifier_imba_skywrath_mage_ancient_seal",
            name: "上古封印",
            description: "受到沉默作用，所受魔法伤害提高{MODIFIER_PROPERTY_MAGICAL_RESISTANCE_BONUS}%。"
        },
        {
            modifier_classname: "modifier_imba_skywrath_mage_shard_bonus_counter",
            name: "天裔之盾",
            description: "获得{MODIFIER_PROPERTY_TOOLTIP}点智力。"
        },
        {
            modifier_classname: "modifier_imba_skywrath_mage_shield_barrier",
            name: "天裔之盾",
            description: "可以吸收{MODIFIER_PROPERTY_INCOMING_SPELL_DAMAGE_CONSTANT}点魔法伤害。"
        }
    ]
};