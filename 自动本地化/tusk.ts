import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_tusk_ice_shards",
            ability_specials: [
                {
                    ability_special: "shard_width",
                    text: "作用范围："
                },
                {
                    ability_special: "shard_damage",
                    text: "碎片伤害："
                },
                {
                    ability_special: "shard_duration",
                    text: "碎片持续时间："
                },
                {
                    ability_special: "aghs_shard_move_slow",
                    text: "%移动速度减缓："
                },
                {
                    ability_special: "aghs_shard_damage",
                    text: "每秒伤害："
                },
                {
                    ability_special: "aghs_shard_depth",
                    text: "魔晶升级长度："
                }
            ],
            name: "寒冰碎片",
            description: "巨牙海民将数块寒冰碎片压缩成蕴含冰冻能量的冰球，对所有接触到冰球的敌人造成伤害。冰球到达目标地点时会产生一个障碍物，持续{shard_duration}秒。",
            lore: "在冰盾附近的冻原上，秋天最后一个日落后，结冰的速度非常惊人。",
            shard_description: "提升寒冰碎片的长度，被困在寒冰碎片内的敌人受到减速和每秒伤害。",
            notes: [
                "将创造不可通行的障碍。"
            ]
        },
        {
            ability_classname: "imba_tusk_ice_shards_stop",
            ability_specials: [],
            name: "打碎寒冰碎片",
            description: "停滞。",
            notes: []
        },
        {
            ability_classname: "imba_tusk_snowball",
            ability_specials: [
                {
                    ability_special: "snowball_damage",
                    text: "基础伤害："
                },
                {
                    ability_special: "snowball_speed",
                    text: "雪球速度："
                },
                {
                    ability_special: "snowball_damage_bonus",
                    text: "每个英雄提升伤害："
                },
                {
                    ability_special: "stun_duration",
                    text: "眩晕持续时间："
                },
                {
                    ability_special: "snowball_windup",
                    text: "发动时间："
                },
                {
                    ability_special: "snowball_grab_radius",
                    text: "卷入范围："
                }
            ],
            name: "雪球",
            description: "巨牙海民开始卷成雪球。右键点击{snowball_grab_radius}范围内的友方英雄能使其加入雪球。发动雪球后，雪球经过的单位将会被眩晕并受到伤害。雪球每卷入一个英雄，它的伤害都会得到提升。",
            lore: "至今还有故事在讲述白色荒原上终结那场空前格斗的狂野之举。",
            notes: [
                "雪球在发动后经过最大3秒将会解体。",
                "使用发动雪球技能就能提前发动雪球。",
                "幻象不会进入雪球，但是米波的克隆体以及巨牙海民控制的其他单位将一同进入雪球。",
                "米波的分身也能卷入雪球，并提升雪球的伤害。",
                "队友可以点击雪球，使自己进入雪球。"
            ]
        },
        {
            ability_classname: "imba_tusk_launch_snowball",
            ability_specials: [],
            name: "雪球滚滚",
            description: "向目标发动雪球。",
            lore: "向着白色荒原进发！",
            notes: [
                "雪球将摧毁行进路径上的树木。",
                "幻象不会进入雪球，但是米波的克隆体以及巨牙海民控制的其他单位将一同进入雪球。",
                "米波的分身也能卷入雪球，并提升雪球的伤害。"
            ]
        },
        {
            ability_classname: "imba_tusk_frozen_sigil",
            ability_specials: [
                {
                    ability_special: "sigil_radius",
                    text: "光环作用范围："
                },
                {
                    ability_special: "sigil_duration",
                    text: "持续时间："
                },
                {
                    ability_special: "move_slow",
                    text: "%移动速度减缓："
                },
                {
                    ability_special: "attack_slow",
                    text: "攻击速度降低："
                }
            ],
            name: "冰封魔印",
            description: "召唤一个飞行的魔印，减缓650范围内敌人40%移动速度。持续25秒。冷却时间：30",
            lore: "故乡的寒意！",
            notes: [
                "如果没有下达其他指令，魔印将跟随巨牙海民。",
                "魔印的移动不受地形限制，移动速度为310，需要3/3/4/4次英雄攻击或12/12/16/16次非英雄攻击才会被摧毁吗，白昼/夜间视野为400/400，击杀赏金为90/100/110/120。",
                "英雄单位每次攻击对魔印造成1点伤害，非英雄单位每次造成0.25点伤害。"
            ]
        },
        {
            ability_classname: "imba_tusk_tag_team",
            ability_specials: [
                {
                    ability_special: "bonus_damage",
                    text: "额外伤害："
                },
                {
                    ability_special: "movement_slow",
                    text: "%移动速度减缓："
                },
                {
                    ability_special: "slow_duration",
                    text: "减速持续时间："
                },
                {
                    ability_special: "debuff_duration",
                    text: "负面效果持续时间："
                },
                {
                    ability_special: "radius",
                    text: "作用范围："
                }
            ],
            name: "摔角行家",
            description: "主动使用后暂时施加一个负面效果的光环，使作用范围内的敌人被攻击时承受额外物理伤害，并且移动速度被减缓。持续{debuff_duration}秒。",
            lore: "就算远离钴蓝冰原，巨牙海民骨子里还是有着“寒战屏障”。",
            notes: [
                "影响来自友方英雄、巨牙海民和他控制的所有单位的普通攻击。"
            ]
        },
        {
            ability_classname: "imba_tusk_drinking_buddies",
            ability_specials: [
                {
                    ability_special: "buff_duration",
                    text: "效果持续时间："
                },
                {
                    ability_special: "movespeed_bonus",
                    text: "%移动速度加成："
                },
                {
                    ability_special: "attackdamage_bonus",
                    text: "攻击力加成："
                }
            ],
            name: "酒友",
            description: "巨牙海民伸出手来触碰友方单位，拉近彼此。触碰后巨牙海民和他的友军获得移动速度和攻击力加成。可以设为多样施法，只把巨牙海民拉向他的友军。",
            notes: [
                "如果巨牙海民和目标友军相距在{min_distance}距离以内，就不会拉动他们。",
                "在雪球期间无法使用。"
            ]
        },
        {
            ability_classname: "imba_tusk_bitter_chill",
            ability_specials: [
                {
                    ability_special: "attack_speed_slow",
                    text: "攻击速度降低："
                }
            ],
            name: "严寒",
            description: "被动降低{radius}范围内所有敌人的攻击速度。",
            notes: []
        },
        {
            ability_classname: "imba_tusk_walrus_punch",
            ability_specials: [
                {
                    ability_special: "bonus_damage",
                    text: "额外伤害："
                },
                {
                    ability_special: "crit_multiplier",
                    text: "%致命一击伤害："
                },
                {
                    ability_special: "air_time",
                    text: "滞空时间："
                }
            ],
            name: "海象神拳！",
            description: "巨牙海民为他强力的海象神拳做好准备，下一次攻击将会造成额外伤害并暴击，同时将目标打到半空中。",
            lore: "谁打出第一拳往往不重要，看的可是最后一拳。",
            notes: [
                "海象神拳！拥有克敌机先效果。"
            ]
        },
        {
            ability_classname: "imba_tusk_walrus_kick",
            ability_specials: [
                {
                    ability_special: "push_length",
                    text: "飞踢距离："
                },
                {
                    ability_special: "move_slow",
                    text: "%移动速度减缓："
                },
                {
                    ability_special: "slow_duration",
                    text: "减速持续时间："
                },
                {
                    ability_special: "damage",
                    text: "伤害："
                }
            ],
            name: "海象飞踢",
            description: "将最近的敌方单位向目标方向踢上一脚，对其造成眩晕，伤害和减速。另外对落地区域{search_radius}范围内所有英雄造成伤害。飞踢非英雄单位会使冷却时间减少{creep_cooldown_reduction_pct}%。",
            lore: "巨牙海民的拳头大名鼎鼎，但聪明的敌人会提防所有肢体动作。",
            notes: []
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_tusk",
                    name: "+{s:bonus_crit_multiplier}% 海象神拳！暴击"
                },
                {
                    talent_classname: "special_bonus_unique_imba_tusk_2",
                    name: "+{s:bonus_snowball_damage} 雪球伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_tusk_3",
                    name: "+{s:bonus_bonus_damage} 摔角行家伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_tusk_4",
                    name: "普攻有{s:value}%几率触发海象神拳！",
                    description: "普通攻击有几率触发海象神拳，与技能的魔法消耗或冷却时间相互独立。"
                },
                {
                    talent_classname: "special_bonus_unique_imba_tusk_5",
                    name: "-{s:value}秒 寒冰碎片冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_tusk_6",
                    name: "-{s:value}秒 雪球冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_tusk_7",
                    name: "+{s:bonus_air_time}秒 海象神拳！眩晕"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "tusk_facets_imba_1",
            name: "摔角行家 | 酒友",
            description: "巨牙海民可以施放<b color='white'>摔角行家</b>，使附近敌人受到攻击时承受额外伤害。 巨牙海民可以施放<b color='white'>酒友</b>，把他和一名队友拉近，双方都会获得移动速度和攻击力加成。",
            related_abilities: [],
            related_talents: [
                {
                    talent_key: "special_bonus_unique_tusk_3_facet_tusk_facet_fist_bump",
                    description: "+{s:bonus_attackdamage_bonus} 酒友攻击力"
                }
            ]
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_tusk_drinking_buddies_pull",
            name: "酒友",
            description: "被酒友拉近。"
        },
        {
            modifier_classname: "modifier_imba_tusk_drinking_buddies_buff",
            name: "酒友",
            description: "获得{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%移动速度加成和{MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE}点攻击力加成。"
        },
        {
            modifier_classname: "modifier_imba_tusk_snowball_movement_friendly",
            name: "雪球",
            description: "已进入巨牙海民的雪球。"
        },
        {
            modifier_classname: "modifier_imba_tusk_frozen_sigil",
            name: "寒冰碎片",
            description: "移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。"
        },
        {
            modifier_classname: "modifier_imba_tusk_frozen_sigil_aura",
            name: "寒冰碎片",
            description: "降低附近敌方单位的攻击和移动速度。"
        },
        {
            modifier_classname: "modifier_imba_tusk_tag_team_attack_slow",
            name: "严寒",
            description: "攻击速度降低{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}。"
        },
        {
            modifier_classname: "modifier_imba_tusk_walrus_punch",
            name: "海象神拳！",
            description: "下一次攻击将把目标胖揍一顿！"
        },
        {
            modifier_classname: "modifier_imba_tusk_walrus_punch_slow",
            name: "被海象神拳击中",
            description: "移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。"
        },
        {
            modifier_classname: "modifier_imba_tusk_walrus_punch_air_time",
            name: "啪！"
        },
        {
            modifier_classname: "modifier_imba_tusk_walrus_kick_slow",
            name: "海象飞踢效果",
            description: "移动速度被减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。"
        },
        {
            modifier_classname: "modifier_imba_tusk_walrus_kick_air_time",
            name: "砰！"
        },
        {
            modifier_classname: "modifier_imba_tusk_tag_team",
            name: "摔角行家",
            description: "承受额外物理伤害。"
        },
        {
            modifier_classname: "modifier_imba_tusk_tag_team_slow",
            name: "摔角行家减速",
            description: "移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%"
        },
        {
            modifier_classname: "modifier_imba_tusk_tag_team_aura",
            name: "摔角行家",
            description: "减缓敌人移动速度，并且受到物理攻击时承受更多伤害。"
        }
    ]
};