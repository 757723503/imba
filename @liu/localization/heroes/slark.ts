import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_slark_fish_bait",
            ability_specials: [
                {
                    ability_special: "slow_duration",
                    text: ""
                },
                {
                    ability_special: "movement_speed",
                    text: ""
                },
                {
                    ability_special: "attack_speed",
                    text: ""
                }
            ],
            name: "鱼饵",
            description: "减缓敌人{movement_speed}{移动速度，并且获得目标的真实视域，持续}slow_duration{秒。若斯拉克在此期间突袭该敌人，将在束缚的持续时间内获得}attack_speed%攻击速度加成。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_slark_depth_shroud",
            ability_specials: [
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "radius",
                    text: "作用范围："
                }
            ],
            name: "深海护罩",
            description: "在目标地点创造一团云雾。作用范围内所有友军为隐藏状态，受到暗影之舞的作用。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_slark_dark_pact",
            ability_specials: [
                {
                    ability_special: "delay",
                    text: "施法延迟："
                },
                {
                    ability_special: "pulse_duration",
                    text: ""
                },
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "total_damage",
                    text: "伤害："
                },
                {
                    ability_special: "total_pulses",
                    text: ""
                },
                {
                    ability_special: "pulse_interval",
                    text: ""
                },
                {
                    ability_special: "self_damage_pct",
                    text: ""
                }
            ],
            name: "黑暗契约",
            description: "短暂延迟后，斯拉克牺牲部分生命力，清除大部分负面状态并对自己和周围敌方单位造成伤害。斯拉克自身只受到造成伤害的{self_damage_pct}%。\\n\\n驱散类型：强驱散",
            lore: "鱼人具有使鳍快速重新生长的能力，这样在重伤下也能救回自己的命。",
            notes: [
                "经过{delay}秒施法延迟后，每隔{pulse_interval}秒释放1道伤害波造成伤害，总共{total_pulses}道。",
                "每道伤害波还会移除斯拉克身上的负面效果。",
                "不能使用此技能自杀。",
                "如果斯拉克死亡，伤害波将停止释放。"
            ]
        },
        {
            ability_classname: "imba_slark_pounce",
            ability_specials: [
                {
                    ability_special: "pounce_damage",
                    text: ""
                },
                {
                    ability_special: "pounce_distance",
                    text: "突袭距离："
                },
                {
                    ability_special: "pounce_speed",
                    text: ""
                },
                {
                    ability_special: "pounce_acceleration",
                    text: ""
                },
                {
                    ability_special: "pounce_radius",
                    text: ""
                },
                {
                    ability_special: "leash_duration",
                    text: "束缚持续时间："
                },
                {
                    ability_special: "leash_radius",
                    text: "束缚作用范围："
                },
                {
                    ability_special: "max_charges",
                    text: "能量点数："
                },
                {
                    ability_special: "charge_restore_time",
                    text: "基础充能时间："
                },
                {
                    ability_special: "pounce_distance_scepter",
                    text: "距离："
                },
                {
                    ability_special: "essence_stacks",
                    text: "ESSENCE SHIFT STACKS:"
                }
            ],
            name: "突袭",
            description: "斯拉克向前跳跃，束缚第一个碰到的英雄。该单位只能在斯拉克着地点附近的有限范围内移动。",
            lore: "在暗黑之礁的服刑期间，斯拉克成长为危险的刺客；举止凶残，无所畏惧。",
            scepter_description: "变为充能型技能，并且提升距离。",
            notes: [
                "施放后斯拉克以{pounce_speed}的速度向前跳跃，抓住敌方英雄或跳跃{pounce_distance}距离后停下。",
                "不能束缚减益免疫单位。",
                "斯拉克落地点附近的树木将会被摧毁。"
            ]
        },
        {
            ability_classname: "imba_slark_essence_shift",
            ability_specials: [
                {
                    ability_special: "agi_gain",
                    text: "敏捷获取："
                },
                {
                    ability_special: "stat_loss",
                    text: "全属性丢失："
                },
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "steal_radius",
                    text: "窃取范围："
                },
                {
                    ability_special: "max_stacks_per_hero",
                    text: ""
                }
            ],
            name: "能量转移",
            description: "斯拉克的攻击会偷走敌方英雄的生命能量，每次吸取他们的一点全属性并转化成自身额外的敏捷值。只要敌方英雄带着该效果在斯拉克300范围内阵亡，他将永久窃取{stat_loss}点敏捷。",
            lore: "每攻击一次敌人，斯拉克对他们的弱点就多了解一分。",
            notes: [
                "属性值最少为1点。",
                "斯拉克或受到作用的单位死亡后，阵亡单位因能量转移变化的属性值将回归正常。但是两方的属性值相互独立，并无关联。",
                "斯拉克无需完成击杀就能永久窃取敏捷，只要敌方英雄身上拥有能量转移状态时在斯拉克的窃取范围内阵亡即可。",
                "破坏会使技能无法获得临时的叠加效果。依然可以获得永久的叠加效果。",
                "破坏不会使现有叠加效果提供的加成失效。"
            ]
        },
        {
            ability_classname: "imba_slark_barracuda",
            ability_specials: [
                {
                    ability_special: "bonus_movement_speed",
                    text: "%移动速度加成："
                },
                {
                    ability_special: "bonus_regen",
                    text: "每秒获得生命："
                },
                {
                    ability_special: "linger_search_radius",
                    text: "粘滞搜寻范围："
                },
                {
                    ability_special: "linger_duration",
                    text: "粘滞持续时间："
                },
                {
                    ability_special: "activation_delay",
                    text: ""
                },
                {
                    ability_special: "neutral_disable",
                    text: ""
                }
            ],
            name: "梭子鱼",
            description: "当斯拉克不处于敌方视野内时，他会获得移动速度加成和生命恢复。",
            lore: "",
            notes: [
                "如果斯拉克受到中立生物的攻击，{neutral_disable}秒内将失去被动的移速加成和生命恢复效果。"
            ]
        },
        {
            ability_classname: "imba_slark_shadow_dance",
            ability_specials: [
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "fade_time",
                    text: ""
                }
            ],
            name: "暗影之舞",
            description: "斯拉克将自己藏进暗影之云，变成隐身状态，不会被反隐手段发现。攻击、施法、使用物品都不会使斯拉克显形。",
            lore: "秘而不宣的第十三个逃犯是个浑身滑溜的敌人。",
            notes: []
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_slark",
                    name: "+{s:bonus_leash_duration}秒 突袭束缚"
                },
                {
                    talent_classname: "special_bonus_unique_imba_slark_2",
                    name: "+{s:bonus_total_damage} 黑暗契约伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_slark_3",
                    name: "+{s:bonus_duration}秒 暗影之舞持续时间"
                },
                {
                    talent_classname: "special_bonus_unique_imba_slark_4",
                    name: "+{s:bonus_duration}秒 能量转移持续时间"
                },
                {
                    talent_classname: "special_bonus_unique_imba_slark_5",
                    name: "+{s:bonus_agi_gain} 能量转移敏捷获取/失去"
                },
                {
                    talent_classname: "special_bonus_unique_imba_slark_6",
                    name: "-{s:value}秒 黑暗契约冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_slark_7",
                    name: "+{s:value} 暗影之舞攻击速度"
                },
                {
                    talent_classname: "special_bonus_unique_imba_slark_8",
                    name: "+{s:bonus_bonus_regen} 梭子鱼生命恢复"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "slark_facets_imba_1",
            name: "",
            description: ""
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_slark_pounce_leash",
            name: "被束缚",
            description: "被斯拉克束缚了，只能在有限距离内移动。"
        },
        {
            modifier_classname: "modifier_imba_slark_essence_shift",
            name: "能量转移",
            description: "偷取{MODIFIER_PROPERTY_STATS_AGILITY_BONUS}点敏捷。"
        },
        {
            modifier_classname: "modifier_imba_slark_essence_shift_debuff_counter",
            name: "能量转移",
            description: "每种属性丢失{MODIFIER_PROPERTY_TOOLTIP}点。"
        },
        {
            modifier_classname: "modifier_imba_slark_shadow_dance_passive_regen",
            name: "梭子鱼恢复",
            description: "获得{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%移动速度加成，并且每秒恢复{MODIFIER_PROPERTY_HEALTH_REGEN_CONSTANT}点生命。"
        },
        {
            modifier_classname: "modifier_imba_slark_shadow_dance",
            name: "暗影之舞",
            description: "在暗影之云中为隐身状态。"
        },
        {
            modifier_classname: "modifier_imba_slark_essence_shift_permanent_buff",
            name: "永久敏捷",
            description: "已获得{MODIFIER_PROPERTY_STATS_AGILITY_BONUS}点敏捷。"
        },
        {
            modifier_classname: "modifier_imba_slark_essence_shift_permanent_buff_PostGame",
            name: "永久获得敏捷。"
        },
        {
            modifier_classname: "modifier_imba_slark_essence_shift_permanent_debuff",
            name: "敏捷丢失",
            description: "永久失去{MODIFIER_PROPERTY_STATS_AGILITY_BONUS}点敏捷。"
        },
        {
            modifier_classname: "modifier_imba_slark_fish_bait_post",
            name: "鱼饵加成",
            description: "获得50攻击速度加成"
        },
        {
            modifier_classname: "modifier_imba_slark_depth_shroud",
            name: "深海护罩",
            description: "隐藏在斯拉克的深海护罩中。"
        }
    ]
};