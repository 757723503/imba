import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_marci_grapple",
            ability_specials: [
                {
                    ability_special: "landing_radius",
                    text: ""
                },
                {
                    ability_special: "air_duration",
                    text: ""
                },
                {
                    ability_special: "air_height",
                    text: ""
                },
                {
                    ability_special: "pull_offset",
                    text: ""
                },
                {
                    ability_special: "throw_distance_behind",
                    text: "摔扔距离："
                },
                {
                    ability_special: "pull_angle",
                    text: ""
                },
                {
                    ability_special: "debuff_duration",
                    text: "减速持续时间："
                },
                {
                    ability_special: "impact_damage",
                    text: "撞击伤害："
                },
                {
                    ability_special: "movement_slow_pct",
                    text: "%移动速度减缓："
                }
            ],
            name: "过肩摔",
            description: "玛西抓起一个友方或敌方目标，将其轻松地向她身后摔去，敌方目标将受到伤害并被减速。落地区域内所有敌方单位也会受到伤害并被减速。",
            lore: "玛西擅于扫除米拉娜公主在路上碰到的障碍。",
            notes: []
        },
        {
            ability_classname: "imba_marci_unleash",
            ability_specials: [
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "charges_per_flurry",
                    text: "单次连技出拳次数："
                },
                {
                    ability_special: "flurry_bonus_attack_speed",
                    text: "攻击速度加成："
                },
                {
                    ability_special: "time_between_flurries",
                    text: ""
                },
                {
                    ability_special: "pulse_radius",
                    text: "脉冲作用范围："
                },
                {
                    ability_special: "pulse_debuff_duration",
                    text: ""
                },
                {
                    ability_special: "pulse_damage",
                    text: "脉冲伤害："
                },
                {
                    ability_special: "pulse_move_slow_pct",
                    text: "%移动速度减缓："
                },
                {
                    ability_special: "pulse_attack_slow_pct",
                    text: "基础攻击速度降低："
                },
                {
                    ability_special: "max_time_window_per_hit",
                    text: ""
                },
                {
                    ability_special: "bonus_movespeed",
                    text: ""
                },
                {
                    ability_special: "recovery_fixed_attack_rate",
                    text: ""
                },
                {
                    ability_special: "shard_push_length",
                    text: ""
                },
                {
                    ability_special: "scepter_cooldown_reduction",
                    text: ""
                },
                {
                    ability_special: "dispel",
                    text: ""
                },
                {
                    ability_special: "pulse_silence_duration",
                    text: ""
                },
                {
                    ability_special: "extend_duration",
                    text: ""
                }
            ],
            name: "怒拳破",
            description: "玛西释放潜藏的力量，获得狂怒的猛攻效果，使自身可以发动快速的打击，并且降低打击目标的移动和攻击速度，持续{pulse_debuff_duration}秒。每次狂怒连技的最后一击都会创造一个脉冲效果，对目标周围的敌人造成伤害。在狂怒连技的间隔，玛西无法攻击，持续{time_between_flurries}秒。\\n\\n玛西施放怒拳破时移动速度提升{bonus_movespeed}%。",
            lore: "虽然有不少人在探究玛西神力的源头，但玛西对他们全不理睬。",
            notes: [
                "每次狂怒连技开始后，每次攻击都必须在1秒内完成，否则连技将会终止。",
                "移除攻击速度限制。"
            ]
        },
        {
            ability_classname: "imba_marci_companion_run",
            ability_specials: [
                {
                    ability_special: "AbilityCooldown",
                    text: ""
                },
                {
                    ability_special: "move_speed",
                    text: ""
                },
                {
                    ability_special: "min_jump_distance",
                    text: ""
                },
                {
                    ability_special: "max_jump_distance",
                    text: "施法 / 跳跃距离："
                },
                {
                    ability_special: "AbilityCastRange",
                    text: ""
                },
                {
                    ability_special: "landing_radius",
                    text: ""
                },
                {
                    ability_special: "impact_damage",
                    text: "撞击伤害："
                },
                {
                    ability_special: "debuff_duration",
                    text: "眩晕时间："
                },
                {
                    ability_special: "min_lob_travel_time",
                    text: ""
                },
                {
                    ability_special: "max_lob_travel_time",
                    text: ""
                },
                {
                    ability_special: "min_height_above_lowest",
                    text: ""
                },
                {
                    ability_special: "min_height_above_highest",
                    text: ""
                },
                {
                    ability_special: "min_acceleration",
                    text: ""
                },
                {
                    ability_special: "max_acceleration",
                    text: ""
                },
                {
                    ability_special: "vector_preview_radius",
                    text: ""
                },
                {
                    ability_special: "ally_buff_duration",
                    text: ""
                },
                {
                    ability_special: "ally_movespeed_pct",
                    text: ""
                },
                {
                    ability_special: "impact_position_offset",
                    text: ""
                },
                {
                    ability_special: "target_abort_distance",
                    text: ""
                },
                {
                    ability_special: "scepter_heal",
                    text: ""
                },
                {
                    ability_special: "scepter_armor",
                    text: ""
                }
            ],
            name: "回身踢",
            description: "玛西跃向友方目标单位，选好她要弹离的方向和距离。到达目标后玛西冲向最终的目的地，对区域内敌人造成伤害和眩晕。\\n\\n友军将获得{ally_movespeed_pct}{移动速度加成，持续}ally_buff_duration%秒。",
            lore: "有了他人亲切或粗暴的托垫，玛西可以直入任何焦灼的战斗中。",
            notes: [
                "最短跳跃距离为{min_jump_distance}。",
                "玛西冲刺时目标单位可以躲避该效果。",
                "不会触发法术反弹。"
            ]
        },
        {
            ability_classname: "imba_marci_guardian",
            ability_specials: [
                {
                    ability_special: "lifesteal_pct",
                    text: "%吸血："
                },
                {
                    ability_special: "bonus_damage",
                    text: "%额外基础攻击力："
                },
                {
                    ability_special: "bonus_attack_range",
                    text: ""
                },
                {
                    ability_special: "max_partner_distance",
                    text: ""
                },
                {
                    ability_special: "max_partner_penalty",
                    text: ""
                },
                {
                    ability_special: "creep_lifesteal_reduction_pct",
                    text: ""
                }
            ],
            name: "健体术",
            description: "玛西的忠诚保证了她的安全，为选定的友方英雄和她自身注入了共享吸血效果和攻击力加成。如果玛西和她的友军相距超过{max_partner_distance}后友军不会获得加成效果，而玛西只会获得{max_partner_penalty}%效果，直到他们再次靠近彼此。玛西的吸血效果还会治疗友军，而友军的吸血效果也会治疗玛西。",
            lore: "玛西小时候就已经懂得，乱世之中最好的财富是可靠的伙伴。",
            notes: [
                "玛西无法对自身施放健体术。",
                "吸血效果对非英雄单位减少{creep_lifesteal_reduction_pct}%。"
            ]
        },
        {
            ability_classname: "imba_marci_bodyguard",
            ability_specials: [
                {
                    ability_special: "bodyguard_duration",
                    text: ""
                },
                {
                    ability_special: "lifesteal_pct",
                    text: "%吸血："
                },
                {
                    ability_special: "bonus_damage",
                    text: "%额外基础攻击力："
                },
                {
                    ability_special: "creep_lifesteal_reduction_pct",
                    text: ""
                },
                {
                    ability_special: "bodyguard_attack_range_buffer",
                    text: ""
                },
                {
                    ability_special: "bonus_armor",
                    text: "额外护甲："
                },
                {
                    ability_special: "counter_cooldown",
                    text: ""
                }
            ],
            name: "护卫术",
            description: "玛西保护一个友方英雄。在{bodyguard_duration}秒内，每当该友军攻击敌人或者被攻击，只要目标在玛西的攻击距离 + {bodyguard_attack_range_buffer}范围内，玛西就会作出反击。友军在持续时间内还会获得额外护甲，以及玛西的吸血带来的治疗效果。被动使玛西获得吸血和攻击力加成。",
            lore: "",
            notes: [
                "玛西无法对自身施放护卫术。",
                "吸血效果对非英雄单位减少{creep_lifesteal_reduction_pct}%。",
                "玛西的反击具有{counter_cooldown}秒冷却时间。"
            ]
        },
        {
            ability_classname: "imba_marci_special_delivery",
            ability_specials: [
                {
                    ability_special: "bonus_levels",
                    text: ""
                },
                {
                    ability_special: "courier_max_level",
                    text: ""
                },
                {
                    ability_special: "bonus_hp",
                    text: ""
                },
                {
                    ability_special: "bonus_hp_tooltip",
                    text: ""
                }
            ],
            name: "特快专递",
            description: "所有友方信使获得{bonus_levels}级额外等级和{bonus_hp_tooltip}点额外生命。",
            lore: "",
            notes: []
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_marci_grapple_stun_duration",
                    name: "+{s:bonus_debuff_duration}秒 回身踢眩晕"
                },
                {
                    talent_classname: "special_bonus_unique_imba_marci_guardian_lifesteal",
                    name: "+{s:bonus_lifesteal_pct}% 健体术吸血"
                },
                {
                    talent_classname: "special_bonus_unique_imba_marci_lunge_range",
                    name: "+{s:bonus_max_jump_distance} 回身踢施法/跳跃距离"
                },
                {
                    talent_classname: "special_bonus_unique_imba_marci_unleash_speed",
                    name: "+{s:bonus_bonus_movespeed}% 怒拳破移动速度"
                },
                {
                    talent_classname: "special_bonus_unique_imba_marci_grapple_damage",
                    name: "+{s:bonus_impact_damage} 过肩摔伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_marci_unleash_extend_duration",
                    name: "怒拳破击杀后延长{s:bonus_extend_duration}秒"
                },
                {
                    talent_classname: "special_bonus_unique_imba_marci_lunge_movespeed",
                    name: "+{s:bonus_ally_movespeed_pct}% 回身踢移动速度加成"
                },
                {
                    talent_classname: "special_bonus_unique_imba_marci_guardian_damage",
                    name: "+{s:bonus_bonus_damage}% 健体术攻击力"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "marci_facets_imba_1",
            name: "",
            description: ""
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_marci_unleash",
            name: "怒拳破",
            description: "获得攻击狂怒连技。"
        },
        {
            modifier_classname: "modifier_imba_marci_unleash_flurry",
            name: "怒拳破 - 狂怒",
            description: "这个单位的攻击速度得到极大提升。"
        },
        {
            modifier_classname: "modifier_imba_marci_unleash_flurry_cooldown",
            name: "怒拳破 - 狂怒冷却",
            description: "等待下次狂怒连技。"
        },
        {
            modifier_classname: "modifier_imba_marci_unleash_flurry_pulse_debuff",
            name: "怒拳破 - 脉冲",
            description: "这个单位的移动和攻击速度被降低。"
        },
        {
            modifier_classname: "modifier_imba_marci_unleash_pulse_silence",
            name: "怒拳破 - 脉冲沉默",
            description: "这个单位被沉默。"
        },
        {
            modifier_classname: "modifier_imba_marci_unleash_pull",
            name: "怒拳破 - 脉冲牵引",
            description: "被拉去胖揍一顿。"
        },
        {
            modifier_classname: "modifier_imba_marci_lunge_debuff",
            name: "回身踢",
            description: "这个单位的移动速度被减缓。"
        },
        {
            modifier_classname: "modifier_imba_marci_companion_run_ally_movespeed",
            name: "回身踢",
            description: "这个单位拥有移动速度加成。"
        },
        {
            modifier_classname: "modifier_imba_marci_companion_lunge_ally_buff",
            name: "回身踢",
            description: "这个单位拥有护盾，可以吸收物理伤害。"
        },
        {
            modifier_classname: "modifier_imba_marci_bodyguard_self",
            name: "护卫术",
            description: "玛西拥有吸血效果和攻击力加成。"
        },
        {
            modifier_classname: "modifier_imba_marci_guardian_buff",
            name: "健体术",
            description: "这个单位拥有吸血效果和攻击力加成。"
        },
        {
            modifier_classname: "modifier_imba_marci_bodyguarded",
            name: "被护卫",
            description: "由玛西保护。"
        },
        {
            modifier_classname: "modifier_imba_marci_guardian_magic_immunity",
            name: "健体术",
            description: "这个单位处于减益免疫状态。"
        },
        {
            modifier_classname: "modifier_imba_marci_dispose_debuff",
            name: "过肩摔",
            description: "移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%"
        }
    ]
};