import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_gyrocopter_rocket_barrage",
            ability_specials: [
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "rockets_per_second",
                    text: "每秒发射导弹数："
                },
                {
                    ability_special: "rocket_interval",
                    text: ""
                },
                {
                    ability_special: "barrage_duration",
                    text: ""
                },
                {
                    ability_special: "rocket_damage",
                    text: "火箭伤害："
                },
                {
                    ability_special: "bonus_movespeed_duration",
                    text: "移速加成持续时间："
                },
                {
                    ability_special: "bonus_movement_speed_per_hit",
                    text: "每次击中提升移动速度："
                }
            ],
            name: "火箭弹幕",
            description: "向矮人直升机附近一定范围内的敌方单位齐射导弹。持续{barrage_duration}秒。",
            lore: "奥雷尔的新飞行器有更大的火箭载弹量，增强了速射能力。",
            notes: [
                "火箭弹幕不能伤害矮人直升机视野之外的单位。",
                "追踪导弹发射的火箭弹幕不会触发加力燃烧器。"
            ]
        },
        {
            ability_classname: "imba_gyrocopter_homing_missile",
            ability_specials: [
                {
                    ability_special: "hits_to_kill_tooltip",
                    text: "摧毁所需次数："
                },
                {
                    ability_special: "tower_hits_to_kill_tooltip",
                    text: "摧毁所需防御塔攻击次数："
                },
                {
                    ability_special: "stun_duration",
                    text: "眩晕时间："
                },
                {
                    ability_special: "attack_speed_bonus_pct",
                    text: ""
                },
                {
                    ability_special: "hit_damage",
                    text: "伤害："
                },
                {
                    ability_special: "max_distance",
                    text: ""
                },
                {
                    ability_special: "pre_flight_time",
                    text: ""
                },
                {
                    ability_special: "hero_damage",
                    text: ""
                },
                {
                    ability_special: "speed",
                    text: ""
                },
                {
                    ability_special: "acceleration",
                    text: ""
                },
                {
                    ability_special: "enemy_vision_time",
                    text: ""
                },
                {
                    ability_special: "shard_delay",
                    text: ""
                },
                {
                    ability_special: "shard_radius",
                    text: ""
                }
            ],
            name: "追踪导弹",
            description: "发射一枚会自动定位目标单位的追踪导弹。导弹发射后持续增加飞行速度，击中目标时造成伤害及眩晕。敌方单位可在导弹接近前将其击落。",
            lore: "奥雷尔的飞行器上所能装载的最大的导弹，为了实现最佳效果，他对空气动力学和爆炸物进行精心计算才得到了炸蛋™。",
            shard_description: "追踪导弹现在从施放{shard_delay}秒后开始不断发射{shard_radius}作用范围的火箭弹幕。火箭弹幕优先以追踪导弹的目标为目标。",
            notes: [
                "防御塔对导弹造成半额伤害。",
                "准星效果仅对队友可见。",
                "导弹会跟随并击中隐身单位。"
            ]
        },
        {
            ability_classname: "imba_gyrocopter_flak_cannon",
            ability_specials: [
                {
                    ability_special: "AbilityCooldown",
                    text: ""
                },
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "max_attacks",
                    text: "最多攻击次数："
                },
                {
                    ability_special: "projectile_speed",
                    text: ""
                },
                {
                    ability_special: "bonus_damage",
                    text: ""
                },
                {
                    ability_special: "bonus_night_vision",
                    text: ""
                },
                {
                    ability_special: "sidegunner_fire_rate",
                    text: "侧翼机枪攻击间隔："
                },
                {
                    ability_special: "sidegunner_radius",
                    text: "侧翼机枪攻击范围："
                },
                {
                    ability_special: "double_target",
                    text: ""
                }
            ],
            name: "高射火炮",
            description: "矮人直升机的攻击会击中目标周围一定范围内的所有敌人，持续一定次数的攻击。只有主要目标会受到致命一击等攻击特效。持续{abilityduration}秒或攻击次数耗尽。",
            lore: "这架新近改造的旋翼机装备了足够的弹药，可以攻击360度全范围内的敌人。",
            scepter_description: "增加侧翼机枪，对矮人直升机附近的随机敌方单位发动攻击。开启高射火炮时，侧面机枪会攻击2个单位。优先攻击最远的单位。",
            notes: [
                "对主目标的攻击距离没有改变。",
                "破坏会使侧翼机枪失效。"
            ]
        },
        {
            ability_classname: "imba_gyrocopter_call_down",
            ability_specials: [
                {
                    ability_special: "AbilityCastRange",
                    text: ""
                },
                {
                    ability_special: "AbilityCooldown",
                    text: "冷却时间："
                },
                {
                    ability_special: "slow_duration",
                    text: "减速持续时间："
                },
                {
                    ability_special: "slow",
                    text: "%导弹减速："
                },
                {
                    ability_special: "damage",
                    text: "导弹伤害："
                },
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "missile_delay_tooltip",
                    text: ""
                },
                {
                    ability_special: "strike_delay",
                    text: "打击间隔："
                },
                {
                    ability_special: "total_strikes",
                    text: ""
                },
                {
                    ability_special: "strike_separation",
                    text: ""
                },
                {
                    ability_special: "tracking_strike_radius",
                    text: ""
                },
                {
                    ability_special: "tracking_strike_delay",
                    text: ""
                },
                {
                    ability_special: "tracking_missile_damage",
                    text: ""
                }
            ],
            name: "召唤飞弹",
            description: "召唤{total_strikes}波防空导弹，对目标区域内的敌方单位造成减速和伤害。每次打击与上一次间隔{strike_separation}距离。",
            lore: "“开始轰炸！”",
            notes: [
                "视觉指示范围仅对队友可见。"
            ]
        },
        {
            ability_classname: "imba_gyrocopter_lock_on",
            ability_specials: [],
            name: "",
            description: "",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_gyrocopter_chop_shop",
            ability_specials: [],
            name: "拆东补西",
            description: "矮人直升机可以拆分大多数物品。",
            lore: "",
            notes: [
                "无法拆分圣剑或迈达斯之手。",
                "矮人直升机总是能以原价出售配方图纸。"
            ]
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_gyrocopter_1",
                    name: "-{s:bonus_AbilityCooldown}秒 高射火炮冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_gyrocopter_2",
                    name: "+{s:bonus_max_attacks} 高射火炮攻击次数"
                },
                {
                    talent_classname: "special_bonus_unique_imba_gyrocopter_3",
                    name: "+{s:bonus_rocket_damage} 火箭弹幕伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_gyrocopter_5",
                    name: "-{s:bonus_AbilityCooldown}秒 召唤飞弹冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_gyrocopter_6",
                    name: "+{s:bonus_stun_duration}秒 追踪导弹眩晕"
                },
                {
                    talent_classname: "special_bonus_unique_imba_gyrocopter_flak_cannon_bonus_damage",
                    name: "+{s:bonus_bonus_damage} 高射火炮攻击力"
                },
                {
                    talent_classname: "special_bonus_unique_imba_gyrocopter_homing_missile_damage",
                    name: "+{s:bonus_hit_damage}% 追踪导弹伤害"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "gyrocopter_facets_imba_1",
            name: "",
            description: ""
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_gyrocopter_rocket_barrage",
            name: "火箭弹幕",
            description: "正在齐射火箭。"
        },
        {
            modifier_classname: "modifier_imba_gyrocopter_homing_missile_charge_counter",
            name: "追踪导弹能量点数"
        },
        {
            modifier_classname: "modifier_imba_gyrocopter_flak_cannon",
            name: "高射火炮",
            description: "正在攻击目标附近的所有敌人。"
        },
        {
            modifier_classname: "modifier_imba_gyrocopter_call_down_slow",
            name: "召唤飞弹",
            description: "被矮人直升机的导弹减速{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。"
        },
        {
            modifier_classname: "modifier_imba_gyrocopter_homing_rocket_barrage",
            name: "追踪导弹",
            description: "正在齐射火箭。"
        },
        {
            modifier_classname: "modifier_imba_gyrocopter_rocket_barrage_movespeed",
            name: "加力燃烧器",
            description: "获得{MODIFIER_PROPERTY_MOVESPEED_BONUS_CONSTANT}移动速度。"
        }
    ]
};