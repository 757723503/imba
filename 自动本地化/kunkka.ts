import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_kunkka_tidal_wave",
            ability_specials: [
                {
                    ability_special: "speed",
                    text: "速度："
                },
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "damage",
                    text: "伤害："
                },
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "knockback_distance",
                    text: "击退距离："
                }
            ],
            name: "潮汐波",
            description: "释放一道在昆卡身后出现的潮汐波。造成250点伤害，并在持续时间内将敌人沿着波浪拖拽。敌人被拖拽时无法攻击。",
            notes: []
        },
        {
            ability_classname: "imba_kunkka_torrent",
            ability_specials: [
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "movespeed_bonus",
                    text: "%移速减缓："
                },
                {
                    ability_special: "slow_duration",
                    text: "减速持续时间："
                },
                {
                    ability_special: "stun_duration",
                    text: "眩晕时间："
                },
                {
                    ability_special: "delay",
                    text: "延迟："
                },
                {
                    ability_special: "torrent_damage",
                    text: "伤害："
                }
            ],
            name: "洪流",
            description: "召唤喷涌的洪流，短暂延迟后，将敌人冲上天，造成伤害、眩晕和减速。",
            lore: "世界中心喷涌出的上古之洪流，应舰队统帅的召唤而来。",
            notes: [
                "初始泡泡效果仅对队友可见，并且提供战争迷雾中的视野。",
                "飞到半空的单位将会被眩晕并且可以被攻击。"
            ]
        },
        {
            ability_classname: "imba_kunkka_torrent_storm",
            ability_specials: [],
            name: "洪流浪潮",
            description: "在目标地点的{torrent_max_distance}范围内每{torrent_interval}秒在一个随机区域释放一个可见的洪流，持续{torrent_duration}秒。",
            lore: "一百个陆地的联盟也牵制不了这些滔天海浪。",
            notes: []
        },
        {
            ability_classname: "imba_kunkka_tidebringer",
            ability_specials: [
                {
                    ability_special: "cleave_distance",
                    text: "分裂距离："
                },
                {
                    ability_special: "damage_bonus",
                    text: "攻击力加成："
                },
                {
                    ability_special: "cleave_damage",
                    text: "%分裂伤害："
                },
                {
                    ability_special: "cooldown_reduction_per_hero_hit",
                    text: "击中英雄减少冷却时间："
                }
            ],
            name: "潮汐使者",
            description: "昆卡的传奇之剑使他的下一次攻击附加额外的攻击力并在前方造成大范围的分裂攻击伤害。",
            lore: "迷失的铁帆海军灵魂依附在昆卡信赖的宝剑——潮汐使者之中，助它消灭洪流恶魔。",
            scepter_description: "潮汐使者消耗掉统帅朗姆酒延后伤害的一定百分比，并且攻击力提升相同数值。",
            notes: []
        },
        {
            ability_classname: "imba_kunkka_x_marks_the_spot",
            ability_specials: [
                {
                    ability_special: "duration",
                    text: "敌方持续时间："
                },
                {
                    ability_special: "allied_duration",
                    text: "友方持续时间："
                },
                {
                    ability_special: "rum_allies_radius",
                    text: "朗姆酒飞溅范围："
                },
                {
                    ability_special: "buff_duration",
                    text: "朗姆酒持续时间："
                }
            ],
            name: "X标记",
            description: "对友方或敌方英雄使用，用 X 标记他们当前位置，数秒后将他们送回 X 标记处。在技能持续时间内，昆卡可以手动触发送回。对友方英雄使用后持续时间加倍。",
            lore: "舰队统帅诸多神秘能力中的一种，能用于战斗或娱乐。",
            notes: []
        },
        {
            ability_classname: "imba_kunkka_return",
            ability_specials: [],
            name: "送回",
            description: "将标记的英雄送回X位置。",
            notes: []
        },
        {
            ability_classname: "imba_kunkka_ghostship",
            ability_specials: [
                {
                    ability_special: "tooltip_delay",
                    text: "撞击延迟："
                },
                {
                    ability_special: "ghostship_distance",
                    text: "施法距离："
                },
                {
                    ability_special: "ghostship_width",
                    text: "作用宽度："
                },
                {
                    ability_special: "movespeed_bonus",
                    text: "%朗姆酒移速提升："
                },
                {
                    ability_special: "buff_duration",
                    text: "朗姆酒持续时间："
                },
                {
                    ability_special: "stun_duration",
                    text: "眩晕时间："
                },
                {
                    ability_special: "ghostship_absorb",
                    text: "%延后结算伤害："
                }
            ],
            name: "幽灵船",
            description: "召唤一艘幽灵船驶过战场，直到撞成粉碎，残骸周围的敌人将会因撞击受到伤害并眩晕。友军被泡在统帅朗姆酒中，移动速度提升并对受到的伤害反应麻木，一定百分比的伤害将会延后到持续时间结束时结算。",
            lore: "铁帆舰队最后的战舰虽然只是个幻影，但它给昆卡的敌人带来的死亡却是完全真实的。",
            scepter_description: "幽灵船在目标地点以{fleet_interval}秒的间隔产生{fleet_count}艘船组成的舰队。每艘船现在还会从左舷和右舷发射{num_cannon_volleys}波炮弹，穿过敌人时造成{cannon_ball_damage_pct}%幽灵船伤害。",
            notes: [
                "在朗姆酒效果消失后造成的伤害不能致死，而且不能杀死英雄。",
                "幽灵船实际的碰撞范围比船本身大。",
                "幽灵船的移动速度为{ghostship_speed}。"
            ]
        },
        {
            ability_classname: "imba_kunkka_admirals_rum",
            ability_specials: [
                {
                    ability_special: "damage_threshold",
                    text: "%生命临界值："
                },
                {
                    ability_special: "ghostship_absorb",
                    text: "%延后结算伤害："
                },
                {
                    ability_special: "buff_duration",
                    text: "朗姆酒持续时间："
                },
                {
                    ability_special: "movespeed_bonus",
                    text: "%朗姆酒移速提升："
                }
            ],
            name: "统帅朗姆酒",
            description: "如果昆卡受到来自敌方英雄、建筑或肉山的伤害会使他的生命低于临界值，那么他会沉浸在统帅朗姆酒中，获得移动速度加成，并且延后承受即将受到的伤害。",
            notes: [
                "与其他来源的统帅朗姆酒完全叠加。"
            ]
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_kunkka_2",
                    name: "+{s:bonus_damage_bonus} 潮汐使者攻击力"
                },
                {
                    talent_classname: "special_bonus_unique_imba_kunkka_3",
                    name: "幽灵船舰队",
                    description: "产生3艘幽灵船，间隔{s:value}秒，陆续向目标地点驶去。"
                },
                {
                    talent_classname: "special_bonus_unique_imba_kunkka_4",
                    name: "+{s:bonus_cleave_damage}% 潮汐使者分裂伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_kunkka_6",
                    name: "+{s:bonus_ally_ms}% X标记移动速度",
                    description: "对友军为加速，对敌人为减速"
                },
                {
                    talent_classname: "special_bonus_unique_imba_kunkka_7",
                    name: "+{s:bonus_stun_duration}% 洪流伤害/升空时间"
                },
                {
                    talent_classname: "special_bonus_unique_imba_kunkka_tidebringer_slow",
                    name: "潮汐使者施加{s:bonus_movespeed_slow_duration}秒{s:bonus_movespeed_slow}%减速"
                },
                {
                    talent_classname: "special_bonus_unique_imba_kunkka_torrent_cooldown",
                    name: "-{s:bonus_AbilityCooldown}秒 洪流冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_kunkka_rum",
                    name: "+{s:bonus_ghostship_absorb}% 朗姆酒伤害延后"
                },
                {
                    talent_classname: "special_bonus_unique_imba_kunkka_admirals_rum_delay",
                    name: "+{s:bonus_delay_time}秒 统帅朗姆酒伤害延后时间"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "kunkka_facets_imba_1",
            name: "喷洒烈酒 | 高潮涨起",
            description: "X标记送回目标后，附近友军都会获得幽灵船的统帅朗姆酒效果。 潮汐使者每击中一名英雄，冷却时间都会减少。",
            related_abilities: [
                {
                    ability_classname: "imba_kunkka_tidebringer",
                    description: "潮汐使者每击中一名英雄，冷却时间都会减少。"
                },
                {
                    ability_classname: "imba_kunkka_x_marks_the_spot",
                    description: "X标记送回目标后，附近友军都会获得幽灵船的伤害延迟效果。"
                }
            ],
            related_talents: []
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_kunkka_admirals_rum",
            name: "统帅朗姆酒",
            description: "承受延后的伤害。"
        },
        {
            modifier_classname: "modifier_imba_kunkka_tidebringer",
            name: "潮汐使者",
            description: "物理攻击力提升{MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE}点，并且下一击带有分裂效果。"
        },
        {
            modifier_classname: "modifier_imba_kunkka_tidebringer_slow",
            name: "潮汐使者",
            description: "移动速度被减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。"
        },
        {
            modifier_classname: "modifier_imba_kunkka_torrent",
            name: "洪流",
            description: "被爆发的激流眩晕。"
        },
        {
            modifier_classname: "modifier_imba_kunkka_torrent_slow",
            name: "洪流减速",
            description: "移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%"
        },
        {
            modifier_classname: "modifier_imba_kunkka_torrent_storm",
            name: "洪流浪潮",
            description: "正在释放洪流的风暴！"
        },
        {
            modifier_classname: "modifier_imba_kunkka_ghost_ship_damage_absorb",
            name: "统帅朗姆酒",
            description: "你喝醉了！移动速度提升{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%，暂时只会受到一定百分比的伤害。"
        },
        {
            modifier_classname: "modifier_imba_kunkka_ghost_ship_damage_absorb_lesser",
            name: "统帅朗姆酒",
            description: "你喝醉了！移动速度提升{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%，暂时只会受到一定百分比的伤害。"
        },
        {
            modifier_classname: "modifier_imba_kunkka_ghost_ship_damage_delay",
            name: "朗姆酒麻木时间",
            description: "逐渐清醒。逐渐感觉到统帅朗姆酒效果下所受的剩余伤害。"
        },
        {
            modifier_classname: "modifier_imba_kunkka_ghost_ship_loaded",
            name: "上船任务",
            description: "你上了昆卡的幽灵船！"
        },
        {
            modifier_classname: "modifier_imba_kunkka_x_marks_the_spot",
            name: "X标记",
            description: "你将会被送回标记X处"
        }
    ]
};