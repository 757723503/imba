import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_bounty_hunter_shuriken_toss",
            ability_specials: [
                {
                    ability_special: "bonus_damage",
                    text: "伤害："
                },
                {
                    ability_special: "speed",
                    text: ""
                },
                {
                    ability_special: "bounce_aoe",
                    text: ""
                },
                {
                    ability_special: "slow_duration",
                    text: ""
                },
                {
                    ability_special: "scepter_cast_range",
                    text: "施法距离："
                },
                {
                    ability_special: "scepter_cooldown",
                    text: ""
                },
                {
                    ability_special: "passthrough_damage",
                    text: ""
                },
                {
                    ability_special: "passthrough_width",
                    text: ""
                },
                {
                    ability_special: "cast_range",
                    text: "施法距离："
                },
                {
                    ability_special: "slow",
                    text: ""
                }
            ],
            name: "投掷飞镖",
            description: "向一个敌方单位掷出一枚致命的飞镖，对目标造成伤害，并且减缓目标{slow}{移动速度，持续}slow_duration{秒。只要目标周围}bounce_aoe%范围内存在被追踪术标记的单位，飞镖就能向其弹射。",
            lore: "尽管飞镖很小，但刚铎精确的瞄准可以带来致命伤害。",
            scepter_description: "提升施法距离并且击中时施加忍术。",
            notes: []
        },
        {
            ability_classname: "imba_bounty_hunter_jinada",
            ability_specials: [
                {
                    ability_special: "bonus_damage",
                    text: "攻击力加成："
                },
                {
                    ability_special: "gold_steal",
                    text: "窃取金钱："
                },
                {
                    ability_special: "AbilityCooldown",
                    text: ""
                }
            ],
            name: "忍术",
            description: "赏金猎人准备好他的下次攻击，造成额外伤害并窃取若干不可靠金钱。",
            lore: "刚铎庞杂的经验能确保他在交易后不会空手而归。",
            notes: []
        },
        {
            ability_classname: "imba_bounty_hunter_wind_walk",
            ability_specials: [
                {
                    ability_special: "duration",
                    text: "隐身持续时间："
                },
                {
                    ability_special: "fade_time",
                    text: "进入隐身时间："
                },
                {
                    ability_special: "stun_duration",
                    text: "眩晕时间："
                },
                {
                    ability_special: "AbilityCooldown",
                    text: ""
                },
                {
                    ability_special: "AbilityChargeRestoreTime",
                    text: ""
                },
                {
                    ability_special: "ally_fade_time",
                    text: ""
                },
                {
                    ability_special: "damage_reduction_pct",
                    text: ""
                }
            ],
            name: "暗影步",
            description: "赏金猎人进入隐身，并能够穿越其它单位，直到他攻击或使用技能。破隐一击会眩晕目标。",
            lore: "当回忆起暴君伽夫被刺杀时的那个宫廷小丑，人们脑海中只能想起那舞动的暗影。",
            notes: [
                "开启后不会打断大多数持续施法技能。"
            ]
        },
        {
            ability_classname: "imba_bounty_hunter_wind_walk_ally",
            ability_specials: [
                {
                    ability_special: "fade_time",
                    text: ""
                }
            ],
            name: "暗影情谊",
            description: "对友军目标施加暗影步及其所有加成效果。友方单位的渐隐时间是{fade_time}秒。施放时不会使赏金猎人脱离隐身状态。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_bounty_hunter_track",
            ability_specials: [
                {
                    ability_special: "target_damage_amp",
                    text: "%伤害加深："
                },
                {
                    ability_special: "bonus_gold_radius",
                    text: ""
                },
                {
                    ability_special: "bonus_gold_self",
                    text: "自身金钱奖励："
                },
                {
                    ability_special: "bonus_gold",
                    text: "友军金钱奖励："
                },
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "gold_steal",
                    text: ""
                },
                {
                    ability_special: "bonus_move_speed_pct",
                    text: "%自身移动速度提升："
                }
            ],
            name: "追踪术",
            description: "追踪一个敌方英雄，获得目标的真实视域，使目标受到的伤害增加，同时掌握目标当前携带的金钱数额。赏金猎人在被追踪者周围可以获得移动速度提升。如果目标在被追踪期间死亡，赏金猎人和附近友方英雄都将获得若干金钱奖励。施放追踪术不会脱离隐身。",
            lore: "利用他高度敏锐的视觉和嗅觉，刚铎的袭击成功率很高。",
            shard_description: "追踪术可以对地面施放，产生一个捕兽陷阱。3秒后陷阱启动，变为隐形状态。走过陷阱的单位会被施加追踪术。陷阱拥有400视野。最大陷阱数：8。对地施放追踪术时拥有1200施法距离加成。",
            notes: [
                "只要目标在追踪术期间以任何方式死亡，赏金猎人都能获得金钱奖励。",
                "追踪术效果仅对友方单位可见。",
                "鼠标移至目标技能栏上方的负面效果图标可以看到目标携带的金钱数额。",
                "金钱奖励为不可靠金钱。",
                "重新施加追踪术不会触发妙手空空的窃取金钱。"
            ]
        },
        {
            ability_classname: "imba_bounty_hunter_lookout",
            ability_specials: [
                {
                    ability_special: "max_lookouts",
                    text: ""
                },
                {
                    ability_special: "lookout_fade_time",
                    text: ""
                },
                {
                    ability_special: "radius",
                    text: ""
                }
            ],
            name: "",
            description: "",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_bounty_hunter_cutpurse",
            ability_specials: [
                {
                    ability_special: "gold_steal",
                    text: "金钱偷取："
                }
            ],
            name: "妙手空空",
            description: "赏金猎人以敌方英雄为目标施放技能和物品时会偷取金钱。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_bounty_hunter_big_game_hunter",
            ability_specials: [
                {
                    ability_special: "bonus_killstreak_bounty",
                    text: ""
                }
            ],
            name: "职业猎人",
            description: "终结拥有连杀纪录的敌人或者获得其助攻时，赏金猎人会获得{bonus_killstreak_bounty}%额外金钱。",
            lore: "",
            notes: []
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_bounty_hunter",
                    name: "+{s:bonus_gold_steal} 忍术窃取金钱"
                },
                {
                    talent_classname: "special_bonus_unique_imba_bounty_hunter_2",
                    name: "+{s:bonus_bonus_damage} 投掷飞镖伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_bounty_hunter_3",
                    name: "+{s:bonus_bonus_gold} 追踪术金钱"
                },
                {
                    talent_classname: "special_bonus_unique_imba_bounty_hunter_4",
                    name: "+{s:bonus_bonus_damage} 忍术攻击力"
                },
                {
                    talent_classname: "special_bonus_unique_imba_bounty_hunter_5",
                    name: "+{s:bonus_slow_duration}秒 投掷飞镖减速"
                },
                {
                    talent_classname: "special_bonus_unique_imba_bounty_hunter_8",
                    name: "追踪术提供共享视野"
                },
                {
                    talent_classname: "special_bonus_unique_imba_bounty_hunter_9",
                    name: "-{s:bonus_damage_reduction_pct}% 暗影步期间承受伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_bounty_hunter_jinada_no_cooldown",
                    name: "忍术无冷却"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "bounty_hunter_facets_imba_1",
            name: "",
            description: ""
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_bounty_hunter_jinada_slow",
            name: "忍术",
            description: "移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%，攻击速度降低{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}。"
        },
        {
            modifier_classname: "modifier_imba_bounty_hunter_wind_walk",
            name: "暗影步",
            description: "在暗影中移动。"
        },
        {
            modifier_classname: "modifier_imba_bounty_hunter_track",
            name: "追踪术",
            description: "携带{MODIFIER_PROPERTY_TOOLTIP}金。受到的伤害增加{MODIFIER_PROPERTY_INCOMING_DAMAGE_PERCENTAGE}%。"
        },
        {
            modifier_classname: "modifier_imba_bounty_hunter_track_effect",
            name: "追踪术",
            description: "移动速度提升{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。"
        },
        {
            modifier_classname: "modifier_imba_bounty_hunter_wind_walk_slow",
            name: "投掷飞镖",
            description: "移动速度被减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。"
        },
        {
            modifier_classname: "modifier_imba_bounty_hunter_jinada_permanent_buff",
            name: "忍术"
        },
        {
            modifier_classname: "modifier_imba_bounty_hunter_jinada_permanent_buff_PostGame",
            name: "窃取金钱总计"
        }
    ]
};
