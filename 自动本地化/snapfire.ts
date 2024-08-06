import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_snapfire_scatterblast",
            ability_specials: [
                {
                    ability_special: "damage",
                    text: "伤害："
                },
                {
                    ability_special: "debuff_duration",
                    text: "减速持续时间："
                },
                {
                    ability_special: "movement_slow_pct",
                    text: "%移动速度减缓："
                },
                {
                    ability_special: "attack_slow_pct",
                    text: "攻击速度降低："
                },
                {
                    ability_special: "point_blank_range",
                    text: "平射距离："
                }
            ],
            name: "电光石火",
            description: "电炎绝手开枪产生大范围的爆炸，对锥形区域内的敌人造成伤害和减速。平射距离内的伤害、移动速度减缓、攻击速度降低和减速持续时间额外提升{point_blank_dmg_bonus_pct}%。",
            lore: "碧婆婆珍藏中的最爱，她打造这把“老坏蛋”作为自己闯入世外之地的首道防线。",
            shard_description: "电光石火将造成额外伤害，并对平射范围内的敌方单位造成眩晕和击退。",
            notes: []
        },
        {
            ability_classname: "imba_snapfire_mortimer_kisses",
            ability_specials: [
                {
                    ability_special: "projectile_count",
                    text: "火团数量："
                },
                {
                    ability_special: "impact_radius",
                    text: "冲击范围："
                },
                {
                    ability_special: "damage_per_impact",
                    text: "火团伤害："
                },
                {
                    ability_special: "burn_damage",
                    text: "每秒烧灼："
                },
                {
                    ability_special: "move_slow_pct",
                    text: "%敌方移动速度减缓："
                },
                {
                    ability_special: "burn_ground_duration",
                    text: "炎洼持续时间："
                }
            ],
            name: "蜥蜴绝吻",
            description: "电炎绝手的伙伴在{duration_tooltip}秒内喷吐出密集的火团。火团造成冲击伤害，在地面上产生炽烈的炎洼，可以使敌人减速并造成持续伤害。电炎绝手在持续时间内转身速率降低，并且具有最小喷吐距离，为{min_range}。点击右键可以选择火团的目标区域。",
            lore: "碧婆婆收养小莫迪时她一无所知，龙蜥——根本都不是蜥蜴——和他们遥远的龙族表亲并非只是名字一样而已。",
            notes: [
                "可以通过停止、停在原位或使用其他技能来终止。",
                "最短飞行时间为{min_lob_travel_time}秒，最长飞行时间为{max_lob_travel_time}秒。"
            ]
        },
        {
            ability_classname: "imba_snapfire_gobble_up",
            ability_specials: [],
            name: "血盆大口",
            description: "小莫迪吞下一个小兵或一名友方英雄，再朝敌人吐出。单位停留在他肚子里最多可达{max_time_in_belly}秒。",
            notes: [
                "电炎绝手在小兵被吐出并阵亡后获得相应的金钱。"
            ]
        },
        {
            ability_classname: "imba_snapfire_spit_creep",
            ability_specials: [
                {
                    ability_special: "impact_radius",
                    text: "冲击作用范围："
                },
                {
                    ability_special: "burn_damage",
                    text: "每秒烧灼："
                },
                {
                    ability_special: "move_slow_pct",
                    text: "%敌方移动速度减缓："
                },
                {
                    ability_special: "burn_ground_duration",
                    text: "炎洼持续时间："
                },
                {
                    ability_special: "stun_duration",
                    text: "眩晕时间："
                }
            ],
            name: "喷吐",
            description: "小莫迪吐出他肚子里的单位，对大片区域造成冲击伤害和眩晕。留下的火痰还将持续造成减速和伤害。喷吐没有最小发射距离。",
            notes: []
        },
        {
            ability_classname: "imba_snapfire_firesnap_cookie",
            ability_specials: [
                {
                    ability_special: "jump_horizontal_distance",
                    text: "跳跃距离："
                },
                {
                    ability_special: "impact_radius",
                    text: "撞击范围："
                },
                {
                    ability_special: "impact_damage",
                    text: "撞击伤害："
                },
                {
                    ability_special: "impact_stun_duration",
                    text: "撞击眩晕时间："
                },
                {
                    ability_special: "target_heal",
                    text: "治疗量："
                }
            ],
            name: "龙炎饼干",
            description: "电炎绝手将一块烈性饼干喂给小莫迪或一名队友，使他们短距离跳跃。跳跃的单位将在落地时对敌人造成眩晕和伤害。",
            lore: "在神秘配方的帮助下，碧婆婆的烘焙技艺和她对黑火药的热情相得益彰，这些战斗饼干相当猛烈。",
            shard_description: "龙炎饼干变得更具威力，治疗目标，并且朝着陆地点发射一个{shard_damage_multiplier_tooltip}%冲击伤害的蜥蜴绝吻。",
            notes: [
                "饼干的弹道速度为{projectile_speed}。"
            ]
        },
        {
            ability_classname: "imba_snapfire_buckshot",
            ability_specials: [
                {
                    ability_special: "split_shot_damage_pct",
                    text: "%跳弹攻击伤害："
                }
            ],
            name: "铅弹",
            description: "电炎绝手的普通攻击造成的伤害增加{damage_amp}%，但是有{damage_amp}%几率射偏，只造成{damage_amp}%伤害。",
            notes: [
                "跳弹II的攻击不会落空。"
            ]
        },
        {
            ability_classname: "imba_snapfire_lil_shredder",
            ability_specials: [
                {
                    ability_special: "damage",
                    text: "每次射击基础伤害："
                },
                {
                    ability_special: "damage_pct",
                    text: "%攻击伤害："
                },
                {
                    ability_special: "attack_range_bonus",
                    text: "攻击距离加成："
                },
                {
                    ability_special: "armor_reduction_per_attack",
                    text: "每次护甲降低："
                },
                {
                    ability_special: "armor_duration",
                    text: "护甲降低持续时间："
                }
            ],
            name: "霹雳铁手",
            description: "电炎绝手开动蜥蜴坐骑上的加农炮，快速发动{buffed_attacks}次固定伤害加上自身攻击伤害一定百分比的攻击。每次攻击都将削弱敌人的护甲。在持续时间内提供攻击距离加成。",
            lore: "碧婆婆一直在修补她原来为秘密计划离开劫匪帮所设计的作品。",
            notes: [
                "持续时间内基础攻击间隔变为{base_attack_time}。",
                "霹雳铁手的攻击也有几率触发攻击特效。"
            ]
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_snapfire_1",
                    name: "+{s:bonus_projectile_count} 蜥蜴绝吻喷吐"
                },
                {
                    talent_classname: "special_bonus_unique_imba_snapfire_2",
                    name: "+{s:bonus_buffed_attacks} 霹雳铁手攻击次数"
                },
                {
                    talent_classname: "special_bonus_unique_imba_snapfire_3",
                    name: "-{s:bonus_AbilityCooldown}秒 龙炎饼干冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_snapfire_5",
                    name: "+{s:bonus_burn_damage} 蜥蜴绝吻每秒烧灼"
                },
                {
                    talent_classname: "special_bonus_unique_imba_snapfire_6",
                    name: "+{s:bonus_damage_pct}% 霹雳铁手攻击伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_snapfire_7",
                    name: "+{s:bonus_damage} 电光石火伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_snapfire_8",
                    name: "+{s:bonus_extra_targets} 霹雳铁手目标"
                },
                {
                    talent_classname: "special_bonus_unique_imba_snapfire_mortimer_kisses_impact_damage",
                    name: "+{s:bonus_damage_per_impact} 蜥蜴绝吻冲击伤害"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "snapfire_facets_imba_1",
            name: "跳弹II | 全口径",
            description: "电光石火更窄更长。对平射距离外的敌人造成额外伤害和减速。 电炎绝手射偏或者攻击落空时，2个跳弹会向附近敌人弹射。",
            related_abilities: [
                {
                    ability_classname: "imba_snapfire_scatterblast",
                    description: "电光石火更窄更长。对平射距离外的敌人造成额外伤害和减速。"
                },
                {
                    ability_classname: "imba_snapfire_buckshot",
                    description: "电炎绝手射偏或者攻击落空时，2个跳弹会向附近敌人弹射。"
                }
            ],
            related_talents: []
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_snapfire_scatterblast_slow",
            name: "电光石火减速效果",
            description: "移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%"
        },
        {
            modifier_classname: "modifier_imba_snapfire_scatterblast_disarm",
            name: "电光石火缴械",
            description: "无法攻击。"
        },
        {
            modifier_classname: "modifier_imba_snapfire_lil_shredder_buff",
            name: "霹雳铁手",
            description: "攻击距离提升{MODIFIER_PROPERTY_ATTACK_RANGE_BONUS}，而且攻击附带降低护甲效果。"
        },
        {
            modifier_classname: "modifier_imba_snapfire_lil_shredder_debuff",
            name: "霹雳铁手",
            description: "这个单位的护甲已被削弱。"
        },
        {
            modifier_classname: "modifier_imba_snapfire_mortimer_kisses",
            name: "蜥蜴绝吻",
            description: "每次释放一团浓缩着爱意的浓痰。"
        },
        {
            modifier_classname: "modifier_imba_snapfire_magma_burn_slow",
            name: "蜥蜴绝吻",
            description: "这个单位被减速，并持续受到伤害。"
        },
        {
            modifier_classname: "modifier_imba_snapfire_gobble_up_belly_has_unit",
            name: "血盆大口",
            description: "这名英雄已吞下一个单位。若未使用吐出，单位将在技能结束后排出。"
        },
        {
            modifier_classname: "modifier_imba_snapfire_gobble_up_creep",
            name: "血盆大口",
            description: "这个单位在小莫迪的肚子里。"
        }
    ]
};