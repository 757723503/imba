import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_dawnbreaker_fire_wreath",
            ability_specials: [
                {
                    ability_special: "AbilityCooldown",
                    text: ""
                },
                {
                    ability_special: "duration",
                    text: "连击持续时间："
                },
                {
                    ability_special: "swipe_radius",
                    text: "挥击/撞击范围："
                },
                {
                    ability_special: "swipe_damage",
                    text: "挥击/撞击额外伤害："
                },
                {
                    ability_special: "smash_radius",
                    text: ""
                },
                {
                    ability_special: "smash_damage",
                    text: ""
                },
                {
                    ability_special: "movement_speed",
                    text: ""
                },
                {
                    ability_special: "total_attacks",
                    text: ""
                },
                {
                    ability_special: "smash_stun_duration",
                    text: "撞击眩晕时间："
                },
                {
                    ability_special: "sweep_stun_duration",
                    text: ""
                },
                {
                    ability_special: "self_stun_duration",
                    text: ""
                },
                {
                    ability_special: "swipe_slow",
                    text: ""
                },
                {
                    ability_special: "smash_distance_from_hero",
                    text: ""
                },
                {
                    ability_special: "animation_rate",
                    text: ""
                },
                {
                    ability_special: "turn_rate",
                    text: ""
                },
                {
                    ability_special: "shard_cast_point",
                    text: ""
                },
                {
                    ability_special: "shard_movement_penalty",
                    text: ""
                }
            ],
            name: "星破天惊",
            description: "破晓辰星将她的战锤旋转3次，对敌人造成攻击伤害以及额外伤害。最后一次打击时，她将战锤击向地面，对她前方的敌人造成眩晕和伤害。",
            lore: "在星辰后裔的庞大血脉中，有许多不愿追随光之子。对于胆敢挑战的星宿，光之子就会派出维罗拉和她的重锤，展示出他们的力量——让反对者粉身碎骨或幡然醒悟。",
            shard_description: "破晓辰星在星破天惊期间获得减益免疫，50%{魔法抗性加成和自由移动状态。破晓辰星会被减速{shard_movement_penalty}}，移速最低为{movement_speed}。",
            notes: [
                "破晓辰星在技能持续时间内以{movement_speed}的移动速度行进，并且最后一击后需要{self_stun_duration}秒才能复原。",
                "连击期间无法施放上界重锤或天光现世。",
                "此技能不继承分裂效果。",
                "可以对自身施放来向前移动"
            ]
        },
        {
            ability_classname: "imba_dawnbreaker_celestial_hammer",
            ability_specials: [
                {
                    ability_special: "hammer_damage",
                    text: "战锤伤害："
                },
                {
                    ability_special: "projectile_radius",
                    text: ""
                },
                {
                    ability_special: "projectile_speed",
                    text: ""
                },
                {
                    ability_special: "flare_debuff_duration",
                    text: "炽烈之径持续时间："
                },
                {
                    ability_special: "flare_radius",
                    text: "炽烈之径作用范围："
                },
                {
                    ability_special: "move_slow",
                    text: "%炽烈之径减速："
                },
                {
                    ability_special: "burn_damage",
                    text: "炽烈之径每秒烧灼："
                },
                {
                    ability_special: "burn_interval",
                    text: ""
                },
                {
                    ability_special: "pause_duration",
                    text: ""
                },
                {
                    ability_special: "hammer_aoe_radius",
                    text: ""
                },
                {
                    ability_special: "travel_speed_pct",
                    text: ""
                },
                {
                    ability_special: "return_anim_distance_threshold",
                    text: ""
                },
                {
                    ability_special: "range",
                    text: "施法距离："
                },
                {
                    ability_special: "hammer_solar_guardian_radius",
                    text: ""
                },
                {
                    ability_special: "hammer_solar_guardian_effectiveness_pct",
                    text: ""
                }
            ],
            name: "上界重锤",
            description: "破晓辰星向一个目标扔出她的武器，对沿途的敌人造成伤害。战锤会在目的地停留{pause_duration}秒，再飞回她的手中，期间留下一道炽烈之径，减缓敌人的移动速度。破晓辰星可以随时召回战锤，将自身朝战锤牵引，使二者在中点相遇。",
            lore: "光明之锤是维罗拉最长久的伙伴，也是她与创造者们的光芒之间仅存的维系。",
            notes: [
                "战锤在飞出和飞回时都会对敌人造成伤害。",
                "破晓辰星的会合移动距离不会超过技能的施法距离。",
                "星破天惊无法在战锤脱手时施放。"
            ]
        },
        {
            ability_classname: "imba_dawnbreaker_converge",
            ability_specials: [],
            name: "会合",
            description: "破晓辰星召回她的战锤，使二者在中点相遇。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_dawnbreaker_luminosity",
            ability_specials: [
                {
                    ability_special: "attack_count",
                    text: ""
                },
                {
                    ability_special: "heal_radius",
                    text: ""
                },
                {
                    ability_special: "heal_pct",
                    text: ""
                },
                {
                    ability_special: "heal_from_creeps",
                    text: ""
                },
                {
                    ability_special: "bonus_damage",
                    text: ""
                },
                {
                    ability_special: "proc_cooldown",
                    text: ""
                },
                {
                    ability_special: "allied_healing_pct",
                    text: ""
                },
                {
                    ability_special: "cooldown_reduction",
                    text: ""
                },
                {
                    ability_special: "attackspeed_bonus_max",
                    text: ""
                },
                {
                    ability_special: "movespeed_bonus_max",
                    text: ""
                }
            ],
            name: "",
            description: "",
            lore: "",
            notes: [
                "熠熠生辉的治疗效果被认定为吸血，可以通过吸血增强效果获得提升。",
                "破坏会使技能无法获得新的叠加效果。"
            ]
        },
        {
            ability_classname: "imba_dawnbreaker_solar_guardian",
            ability_specials: [
                {
                    ability_special: "AbilityCooldown",
                    text: ""
                },
                {
                    ability_special: "airtime_duration",
                    text: ""
                },
                {
                    ability_special: "radius",
                    text: "落地作用范围："
                },
                {
                    ability_special: "base_damage",
                    text: "每次脉冲伤害："
                },
                {
                    ability_special: "base_heal",
                    text: "每次脉冲治疗："
                },
                {
                    ability_special: "pulse_interval",
                    text: ""
                },
                {
                    ability_special: "land_damage",
                    text: "落地伤害："
                },
                {
                    ability_special: "land_stun_duration",
                    text: "落地眩晕时间："
                },
                {
                    ability_special: "max_offset_distance",
                    text: ""
                },
                {
                    ability_special: "scepter_channel_time",
                    text: "持续施法时间："
                },
                {
                    ability_special: "airtime_scepter_bonus",
                    text: "额外升空时间："
                },
                {
                    ability_special: "miss_rate",
                    text: "%闪避几率："
                },
                {
                    ability_special: "airtime_scepter_movement_speed",
                    text: ""
                }
            ],
            name: "天光现世",
            description: "持续施法 - 破晓辰星在地图上任意友方英雄{max_offset_distance}距离内的一个地点创造一个脉冲效果，每次脉冲都会对敌人造成伤害，并治疗友军。经过一段短暂时间后，她飞向目标地点，落地时造成额外伤害并眩晕敌人。开始持续施法后，破晓辰星无法中止此技能。",
            lore: "只有为了保护盟友，维罗拉才会愿意召唤最后一点她原先的力量来完成穿越宇宙的飞行。",
            scepter_description: "降低持续施法时间，提升天光现世的治疗效果和总持续时间。破晓辰星升空期间目标区域内友军获得闪避效果。升空后再次施放天光现世可以提前落地。升空期间，天光现世的落地点可以{airtime_scepter_movement_speed}的速度进行移动。",
            notes: [
                "脉冲间隔为{pulse_interval}秒。",
                "总持续时间为{abilitychanneltime}秒持续施法时间 + {airtime_duration}秒飞行时间。",
                "无法在没有战锤时施放."
            ]
        },
        {
            ability_classname: "imba_dawnbreaker_land",
            ability_specials: [],
            name: "天光现世落地",
            description: "可以施放，让破晓辰星随时降落在目标区域。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_dawnbreaker_break_of_dawn",
            ability_specials: [
                {
                    ability_special: "reveal_duration",
                    text: ""
                },
                {
                    ability_special: "think_interval",
                    text: ""
                },
                {
                    ability_special: "reveal_linger",
                    text: ""
                },
                {
                    ability_special: "reveal_radius",
                    text: ""
                },
                {
                    ability_special: "conceal_duration",
                    text: ""
                }
            ],
            name: "黎明破晓",
            description: "只要太阳出来，破晓辰星就会对友军显示全地图，持续5秒。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_dawnbreaker_unbreakable",
            ability_specials: [],
            name: "牢不可破",
            description: "破晓辰星复活时，天光现世的冷却时间就会重置。",
            lore: "",
            notes: []
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_dawnbreaker_solar_guardian_radius",
                    name: ""
                },
                {
                    talent_classname: "special_bonus_unique_imba_dawnbreaker_fire_wreath_cooldown",
                    name: ""
                },
                {
                    talent_classname: "special_bonus_unique_imba_dawnbreaker_celestial_hammer_cast_range",
                    name: ""
                },
                {
                    talent_classname: "special_bonus_unique_imba_dawnbreaker_luminosity_crit",
                    name: ""
                },
                {
                    talent_classname: "special_bonus_unique_imba_dawnbreaker_solar_guardian_cooldown",
                    name: ""
                },
                {
                    talent_classname: "special_bonus_unique_imba_dawnbreaker_luminosity_attack_count",
                    name: ""
                },
                {
                    talent_classname: "special_bonus_unique_imba_dawnbreaker_fire_wreath_swipe",
                    name: ""
                },
                {
                    talent_classname: "special_bonus_unique_imba_dawnbreaker_celestial_hammer_slow",
                    name: ""
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "dawnbreaker_facets_imba_1",
            name: "",
            description: ""
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_dawnbreaker_solar_guardian_disable",
            name: "天光现世",
            description: "天光现世期间无法行动"
        },
        {
            modifier_classname: "modifier_imba_dawnbreaker_solar_guardian_evasion",
            name: "天光现世",
            description: "获得{MODIFIER_PROPERTY_EVASION_CONSTANT}%闪避。"
        },
        {
            modifier_classname: "modifier_imba_dawnbreaker_fire_wreath_caster",
            name: "星破天惊",
            description: "对附近所有敌人造成伤害"
        },
        {
            modifier_classname: "modifier_imba_dawnbreaker_fire_wreath_magic_immunity_tooltip",
            name: "星破天惊",
            description: "减益免疫。"
        },
        {
            modifier_classname: "modifier_imba_dawnbreaker_fire_wreath_smash_stun",
            name: "星破天惊",
            description: "眩晕。"
        },
        {
            modifier_classname: "modifier_imba_dawnbreaker_luminosity",
            name: "熠熠生辉",
            description: "因熠熠生辉而增强了力量。"
        },
        {
            modifier_classname: "modifier_imba_dawnbreaker_luminosity_attack_buff",
            name: "熠熠生辉攻击效果",
            description: "下一次攻击会治疗破晓辰星并造成致命一击"
        },
        {
            modifier_classname: "modifier_imba_dawnbreaker_solar_guardian_air_time",
            name: "天光现世",
            description: "正飞向目的地"
        },
        {
            modifier_classname: "modifier_imba_dawnbreaker_converge",
            name: "会合",
            description: "被减速并且受到伤害"
        }
    ]
};