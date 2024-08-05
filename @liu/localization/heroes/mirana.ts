import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_mirana_arrow",
            ability_specials: [
                {
                    ability_special: "AbilityCooldown",
                    text: ""
                },
                {
                    ability_special: "arrow_speed",
                    text: ""
                },
                {
                    ability_special: "arrow_width",
                    text: ""
                },
                {
                    ability_special: "arrow_range",
                    text: "距离："
                },
                {
                    ability_special: "arrow_max_stunrange",
                    text: ""
                },
                {
                    ability_special: "arrow_min_stun",
                    text: "最短眩晕时间："
                },
                {
                    ability_special: "arrow_max_stun",
                    text: "最长眩晕时间："
                },
                {
                    ability_special: "arrow_bonus_damage",
                    text: "最大额外伤害："
                },
                {
                    ability_special: "arrow_vision",
                    text: ""
                },
                {
                    ability_special: "scepter_radius",
                    text: "搜寻范围："
                },
                {
                    ability_special: "scepter_starstorm_target_pct",
                    text: "%主箭击中群星风暴伤害："
                },
                {
                    ability_special: "extra_arrows",
                    text: ""
                },
                {
                    ability_special: "extra_arrows_angle",
                    text: ""
                }
            ],
            name: "月神之箭",
            description: "射出一支绝对精准的箭矢，对第一个击中的敌人造成伤害并眩晕目标。目标距离越远，眩晕时间越长，最短{arrow_min_stun}秒，最长可达{arrow_max_stun}秒。根据箭矢飞行的距离还将对目标额外造成最多{arrow_bonus_damage}点伤害。若击中的是非远古的普通单位，将直接秒杀。",
            lore: "明月的能量让月之公主的箭矢变得愈发致命。",
            scepter_description: "月神之箭在主神箭行进途中对敌人释放群星风暴。对击中的单位施放第二个群星风暴，造成的伤害有所降低。",
            notes: [
                "神箭每飞行150码，中箭后眩晕的持续时间将提高0.5秒，额外伤害增加14点。",
                "月神之箭可以射中隐身单位。"
            ]
        },
        {
            ability_classname: "imba_mirana_invis",
            ability_specials: [
                {
                    ability_special: "AbilityCooldown",
                    text: ""
                },
                {
                    ability_special: "fade_delay",
                    text: "渐隐延迟："
                },
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "bonus_movement_speed",
                    text: "%移动速度加成："
                },
                {
                    ability_special: "evasion",
                    text: ""
                }
            ],
            name: "月之暗面",
            description: "让米拉娜和所有己方英雄进入隐身状态。只要还在月光阴影的持续时间内，即使隐身被打破也会在短时间内重新淡入隐身。",
            lore: "作为赛莉蒙妮的代言人，米拉娜能将月蚀之暗投向大地，将她和她的友军隐藏在阴影中。",
            notes: [
                "受到作用的单位会自动停止攻击敌人。"
            ]
        },
        {
            ability_classname: "imba_mirana_solar_flare",
            ability_specials: [
                {
                    ability_special: "AbilityCooldown",
                    text: ""
                },
                {
                    ability_special: "smoothness",
                    text: ""
                },
                {
                    ability_special: "increase_rate",
                    text: "攻击速度和攻击力提升速率："
                },
                {
                    ability_special: "day_vision_multiplier",
                    text: ""
                },
                {
                    ability_special: "ally_pct",
                    text: "%友军加成："
                },
                {
                    ability_special: "duration",
                    text: "总持续时间："
                },
                {
                    ability_special: "max_damage_time",
                    text: ""
                },
                {
                    ability_special: "evasion",
                    text: ""
                }
            ],
            name: "太阳金辉",
            description: "逐渐提升米拉娜和所有友方英雄的白天视野范围、攻击速度和攻击力，{max_damage_time}秒后达到最大威力。白天视野范围的提升速度比攻击速度和攻击力快{day_vision_multiplier}倍。<br><br>友军获得{ally_pct}%加成效果。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_mirana_leap",
            ability_specials: [
                {
                    ability_special: "leap_distance",
                    text: "距离："
                },
                {
                    ability_special: "min_jump_distance",
                    text: ""
                },
                {
                    ability_special: "leap_speed",
                    text: ""
                },
                {
                    ability_special: "leap_acceleration",
                    text: ""
                },
                {
                    ability_special: "leap_speedbonus",
                    text: "%移动速度加成："
                },
                {
                    ability_special: "leap_speedbonus_as",
                    text: "攻击速度加成："
                },
                {
                    ability_special: "leap_bonus_duration",
                    text: ""
                },
                {
                    ability_special: "shard_radius",
                    text: "起始锥形范围："
                },
                {
                    ability_special: "shard_radius_end",
                    text: "最终锥形范围："
                },
                {
                    ability_special: "shard_damage",
                    text: "伤害："
                },
                {
                    ability_special: "shard_slow_pct",
                    text: "%移动速度减缓："
                },
                {
                    ability_special: "shard_slow_duration",
                    text: "减速持续时间："
                },
                {
                    ability_special: "shard_bonus_charges",
                    text: ""
                },
                {
                    ability_special: "shard_projectile_distance",
                    text: ""
                },
                {
                    ability_special: "shard_projectile_speed",
                    text: ""
                }
            ],
            name: "跳跃",
            description: "米拉娜的坐骑向前跳跃加入战斗，发出一声凶狠的咆哮鼓舞它的主人，提升攻击和移动速度。速度加成持续{leap_bonus_duration}秒。",
            lore: "在战斗最激烈的时候，没人会注意不到米拉娜标志性的白色野兽。",
            shard_description: "落地时沿着塞根的跳跃方向放出一个弹道，对敌人造成伤害和减速，施放群星风暴会让他们必定被次级群星风暴击中。跳跃不会脱离月之暗面的隐身效果。<br><br>可以设为多样施法来选择跳跃的距离和面朝方向。<br><br>获得{shard_bonus_charges}点额外能量点数。",
            notes: []
        },
        {
            ability_classname: "imba_mirana_starfall",
            ability_specials: [
                {
                    ability_special: "starfall_radius",
                    text: "作用范围："
                },
                {
                    ability_special: "starfall_secondary_radius",
                    text: ""
                },
                {
                    ability_special: "secondary_starfall_damage_percent",
                    text: ""
                },
                {
                    ability_special: "damage",
                    text: "伤害："
                }
            ],
            name: "群星风暴",
            description: "召唤一波流星砸向附近的敌方单位。{starfall_secondary_radius}范围内最近的敌方单位将会再受到一次{secondary_starfall_damage_percent}%伤害的冲击。",
            lore: "月之女神打破月亮的一部分地表，让她的公主在需要之时获得力量。",
            notes: [
                "群星风暴不会被林肯法球抵挡。",
                "群星风暴不能伤害隐身单位。",
                "如果原本要打击的目标死亡，群星风暴的第二次星落会重新选择一个目标。"
            ]
        },
        {
            ability_classname: "imba_mirana_selemenes_faithful",
            ability_specials: [
                {
                    ability_special: "bonus_lotus",
                    text: ""
                }
            ],
            name: "赛莉蒙妮的信徒",
            description: "疗伤莲花对米拉娜和她友军的效果提升{bonus_lotus}%。",
            lore: "",
            notes: []
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_mirana_1",
                    name: "+{s:bonus_leap_speedbonus_as} 跳跃攻击速度"
                },
                {
                    talent_classname: "special_bonus_unique_imba_mirana_2",
                    name: "+{s:bonus_extra_arrows} 月神之箭齐发",
                    description: "额外的神箭将以锥形射出，分别为施法方向向左和向右偏移{s:bonus_extra_arrows_angle}度，无法重复击中同个目标。"
                },
                {
                    talent_classname: "special_bonus_unique_imba_mirana_3",
                    name: "-{s:bonus_AbilityCooldown}秒 月神之箭冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_mirana_4",
                    name: "-{s:bonus_AbilityCooldown}秒 月之暗面冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_mirana_5",
                    name: "月之暗面提供+{s:bonus_evasion}% 闪避",
                    description: "闪避在状态效果内始终有效"
                },
                {
                    talent_classname: "special_bonus_unique_imba_mirana_6",
                    name: "+{s:bonus_leap_distance} 跳跃距离"
                },
                {
                    talent_classname: "special_bonus_unique_imba_mirana_7",
                    name: "+{s:bonus_damage} 群星风暴伤害"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "mirana_facets_imba_1",
            name: "",
            description: ""
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_mirana_leap_charge_counter",
            name: "跳跃能量点数",
            description: "跳跃的当前可用次数。"
        },
        {
            modifier_classname: "modifier_imba_mirana_leap_buff",
            name: "跳跃",
            description: "移动速度提升{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%，攻击速度提高{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}"
        },
        {
            modifier_classname: "modifier_imba_mirana_starfall_scepter_thinker",
            name: "群星风暴能量",
            description: "群星风暴具有能量时就会自动施放。"
        },
        {
            modifier_classname: "modifier_imba_mirana_moonlight_shadow",
            name: "月之暗面",
            description: "隐身。攻击会暂时取消隐身效果。"
        },
        {
            modifier_classname: "modifier_imba_mirana_leap_slow",
            name: "跳跃",
            description: "移动速度被减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%%。"
        },
        {
            modifier_classname: "modifier_imba_mirana_solar_flare",
            name: "太阳金辉",
            description: "攻击力提升{MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE}点。攻击速度提升{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}。白天视野提升{MODIFIER_PROPERTY_BONUS_DAY_VISION}。"
        }
    ]
};