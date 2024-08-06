import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_spirit_breaker_charge_of_darkness",
            ability_specials: [
                {
                    ability_special: "movement_speed",
                    text: "冲刺移速加成："
                },
                {
                    ability_special: "stun_duration",
                    text: "眩晕时间："
                },
                {
                    ability_special: "linger_time_min",
                    text: "最短粘滞时间："
                },
                {
                    ability_special: "linger_time_max",
                    text: "最长粘滞时间："
                },
                {
                    ability_special: "charge_for_max_linger",
                    text: "最长粘滞时间所需冲刺时间："
                }
            ],
            name: "暗影冲刺",
            description: "裂魂人盯紧一个敌方单位，开始无视一切物体的冲刺，起始为{min_movespeed_bonus_pct}%额外移速，{windup_time}秒后达到最大速度。<br><br>途中经过的所有敌方单位和目标单位都将受到巨力重击。如果目标单位在到达前死亡了，裂魂人将他的目标改为原路径上最近的一个敌方单位。",
            lore: "巴拉森带着一股狂蛮之力从黑暗中冲出。",
            shard_description: "暗影冲刺的移动速度加成提升{bonus_movement_speed}。",
            notes: [
                "裂魂人在冲刺过程中能穿过树木，悬崖和任何单位。",
                "冲刺指示特效仅对队友可见。",
                "裂魂人将获得并共享目标的视野。"
            ]
        },
        {
            ability_classname: "imba_spirit_breaker_bulldoze",
            ability_specials: [
                {
                    ability_special: "movement_speed",
                    text: "%移动速度提升："
                },
                {
                    ability_special: "status_resistance",
                    text: "%状态抗性："
                },
                {
                    ability_special: "duration",
                    text: "持续时间："
                }
            ],
            name: "威吓",
            description: "裂魂人获得移动速度和状态抗性加成，在敌人之间横冲直撞。可以在冲刺期间使用。",
            lore: "巴拉森扭曲了他周遭现实的结构，减轻他的肉体形态受到的影响。",
            notes: []
        },
        {
            ability_classname: "imba_spirit_breaker_empowering_haste",
            ability_specials: [
                {
                    ability_special: "bonus_movespeed_pct_self",
                    text: "%自身移动速度提升："
                },
                {
                    ability_special: "bonus_movespeed_pct_allies",
                    text: "%友军移动速度提升："
                },
                {
                    ability_special: "aura_radius",
                    text: "光环作用范围："
                },
                {
                    ability_special: "bonus_movespeed_pct_extra",
                    text: "%施放后额外速度加成："
                },
                {
                    ability_special: "duration",
                    text: "施放后额外速度加成持续时间："
                }
            ],
            name: "神行太保",
            description: "裂魂人的高速移动给他带来力量，提高附近友军单位的移动速度。技能可以施放，提升移动速度加成，持续{duration}秒。",
            lore: "英雄们只要留心观察裂魂人在战场上的支配地位，就能提高他们的速度与力量。",
            notes: []
        },
        {
            ability_classname: "imba_spirit_breaker_greater_bash",
            ability_specials: [
                {
                    ability_special: "chance_pct",
                    text: "%重击概率："
                },
                {
                    ability_special: "damage",
                    text: "%移动速度转化为伤害比例："
                },
                {
                    ability_special: "duration",
                    text: "眩晕时间："
                },
                {
                    ability_special: "knockback_duration",
                    text: "击退持续时间："
                }
            ],
            name: "巨力重击",
            description: "攻击时有一定概率眩晕并击退敌方单位。重击的伤害值为移动速度的一定百分比。",
            lore: "巴拉森幽灵般链球的标志性一击。",
            notes: [
                "不与碎颅锤叠加。",
                "破坏会使攻击触发巨力重击失效。暗影冲刺或幽冥一击还是会施加巨力重击。"
            ]
        },
        {
            ability_classname: "imba_spirit_breaker_nether_strike",
            ability_specials: [
                {
                    ability_special: "damage",
                    text: "额外伤害："
                },
                {
                    ability_special: "shard_bonus_damage",
                    text: "额外伤害："
                },
                {
                    ability_special: "shard_break_duration",
                    text: "破坏持续时间："
                },
                {
                    ability_special: "shard_spell_immune_duration",
                    text: "减益免疫持续时间："
                },
                {
                    ability_special: "knockback_amp",
                    text: "%击退增强："
                },
                {
                    ability_special: "knockback_amp_duration",
                    text: "击退增强持续时间："
                }
            ],
            name: "幽冥一击",
            description: "裂魂人遁入幽冥领域，从不幸的目标身旁再次出现，发动当前等级的巨力重击并造成额外伤害。击退距离为平常的两倍。",
            lore: "巴拉森暂时回到他原来所在的元素领域，然后带回来自两个世界的回击。",
            shard_description: "幽冥一击将使裂魂人获得减益免疫状态，造成额外伤害并施加破坏效果。",
            notes: [
                "裂魂人将在目标身后出现并发动巨力重击。"
            ]
        },
        {
            ability_classname: "imba_spirit_breaker_planar_pocket",
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
                    ability_special: "magic_resistance",
                    text: "%自身魔法抗性："
                }
            ],
            name: "位面空洞",
            description: "巴拉森使空间的结构扭曲，提升自身的魔法抗性并使范围内敌方英雄的技能改变方向朝他飞去。",
            lore: "巴拉森顽强的专注力形成了位面汇聚点的空洞，就连最强大的奥术能量也无法逃逸。",
            notes: []
        },
        {
            ability_classname: "imba_spirit_breaker_knockback_amp",
            ability_specials: [],
            notes: []
        },
        {
            ability_classname: "imba_spirit_breaker_herd_mentality",
            ability_specials: [],
            name: "从众心理",
            description: "己方队伍中等级最低的英雄会额外获得{xp_gain_rate}%经验。",
            notes: []
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_spirit_breaker_1",
                    name: "+{s:bonus_chance_pct}% 巨力重击几率"
                },
                {
                    talent_classname: "special_bonus_unique_imba_spirit_breaker_2",
                    name: "-{s:value}秒 威吓冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_spirit_breaker_3",
                    name: "+{s:bonus_damage}% 巨力重击伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_spirit_breaker_4",
                    name: "-{s:bonus_AbilityCooldown}秒 暗影冲刺冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_spirit_breaker_shield",
                    name: "威吓提供{s:bonus_damage_barrier} 全伤害护盾"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "spirit_breaker_facets_imba_1",
            name: "横冲直撞 | 跌跌撞撞",
            description: "暗影冲刺的移动速度加成会在冲刺结束后逐渐消失。 被幽冥一击击中的敌方目标受到友方的强制位移效果的移动距离更远。",
            related_abilities: [
                {
                    ability_classname: "imba_spirit_breaker_charge_of_darkness",
                    description: "暗影冲刺的移动速度加成会在冲刺结束后逐渐消失。"
                },
                {
                    ability_classname: "imba_spirit_breaker_nether_strike",
                    description: "被幽冥一击击中的敌方目标受到友方的击退效果的移动距离更远。"
                }
            ],
            related_talents: []
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_spirit_breaker_greater_bash_speed",
            name: "巨力重击移动速度加成",
            description: "获得{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%移动速度加成。"
        },
        {
            modifier_classname: "modifier_imba_spirit_breaker_greater_bash_break",
            name: "幽冥一击破坏效果",
            description: "被动技能被禁用。"
        },
        {
            modifier_classname: "modifier_imba_spirit_breaker_charge_of_darkness",
            name: "暗影冲刺",
            description: "冲刺！"
        },
        {
            modifier_classname: "modifier_imba_spirit_breaker_charge_of_darkness_target",
            name: "暗影冲刺目标",
            description: "正在冲向这名英雄！"
        },
        {
            modifier_classname: "modifier_imba_spirit_breaker_charge_of_darkness_debuff",
            name: "暗影冲刺",
            description: "冲撞来袭！"
        },
        {
            modifier_classname: "modifier_imba_spirit_breaker_empowering_haste",
            name: "神行太保",
            description: "移动速度提升{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。"
        },
        {
            modifier_classname: "modifier_imba_spirit_breaker_nether_strike",
            name: "幽冥一击",
            description: "无敌"
        },
        {
            modifier_classname: "modifier_imba_spirit_breaker_nether_knockback_amp",
            name: "跌跌撞撞",
            description: "受到敌方击退效果时移动距离更长。"
        },
        {
            modifier_classname: "modifier_imba_spirit_breaker_bull_rush",
            name: "横冲直撞",
            description: "暗影冲刺的移动速度加成会在裂魂人身上粘滞。"
        },
        {
            modifier_classname: "modifier_imba_spirit_breaker_bulldoze",
            name: "威吓",
            description: "获得{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%移动速度加成和{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%状态抗性。"
        },
        {
            modifier_classname: "modifier_imba_spirit_breaker_planar_pocket",
            name: "位面空洞",
            description: "裂魂人会使首个敌方的指向性技能改变方向，朝他飞去"
        },
        {
            modifier_classname: "modifier_imba_spirit_breaker_planar_pocket_aura",
            name: "位面空洞",
            description: "裂魂人拥有更高的魔法抗性，会使一个敌方的指向性技能改变方向，朝他飞去"
        }
    ]
};