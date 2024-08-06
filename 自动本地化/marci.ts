import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_marci_grapple",
            ability_specials: [
                {
                    ability_special: "throw_distance_behind",
                    text: "摔扔距离："
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
                    ability_special: "pulse_radius",
                    text: "脉冲作用范围："
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
                }
            ],
            name: "怒拳破",
            description: "玛西释放潜藏的力量，获得狂怒的猛攻效果，使自身可以发动快速的打击，并且降低打击目标的移动和攻击速度，持续{pulse_debuff_duration}秒。每次狂怒连技的最后一击都会创造一个脉冲效果，对目标周围的敌人造成伤害。在狂怒连技的间隔，玛西无法攻击，持续{time_between_flurries}秒。\\n\\n玛西施放怒拳破时移动速度提升{bonus_movespeed}%。",
            lore: "虽然有不少人在探究玛西神力的源头，但玛西对他们全不理睬。",
            scepter_description: "怒拳破的冷却时间减少{scepter_cooldown_reduction}秒，并且施放时对玛西施加弱驱散。怒拳破生效期间，玛西的所有技能在施放时都会施放脉冲。玛西的所有怒拳破脉冲都会沉默敌人，持续{pulse_silence_duration}秒。<br><br>驱散类型：弱驱散",
            notes: [
                "每次狂怒连技开始后，每次攻击都必须在1秒内完成，否则连技将会终止。",
                "移除攻击速度限制。"
            ]
        },
        {
            ability_classname: "imba_marci_companion_run",
            ability_specials: [
                {
                    ability_special: "max_jump_distance",
                    text: "施法 / 跳跃距离："
                },
                {
                    ability_special: "impact_damage",
                    text: "撞击伤害："
                },
                {
                    ability_special: "debuff_duration",
                    text: "眩晕时间："
                }
            ],
            name: "回身踢",
            description: "玛西跃向友方目标单位，选好她要弹离的方向和距离。到达目标后玛西冲向最终的目的地，对区域内敌人造成伤害和眩晕。\\n\\n友军将获得{ally_movespeed_pct}%移动速度加成，持续{ally_buff_duration}秒。",
            lore: "有了他人亲切或粗暴的托垫，玛西可以直入任何焦灼的战斗中。",
            shard_description: "降低回身踢的冷却时间，可以对敌人施放，并且玛西施放后自身也会获得加速效果。",
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
                    ability_special: "lifesteal_pct",
                    text: "%吸血："
                },
                {
                    ability_special: "bonus_damage",
                    text: "%额外基础攻击力："
                },
                {
                    ability_special: "bonus_armor",
                    text: "额外护甲："
                }
            ],
            name: "护卫术",
            description: "玛西保护一个友方英雄。在{bodyguard_duration}秒内，每当该友军攻击敌人或者被攻击，只要目标在玛西的攻击距离 + {bodyguard_attack_range_buffer}范围内，玛西就会作出反击。友军在持续时间内还会获得额外护甲，以及玛西的吸血带来的治疗效果。被动使玛西获得吸血和攻击力加成。",
            notes: [
                "玛西无法对自身施放护卫术。",
                "吸血效果对非英雄单位减少{creep_lifesteal_reduction_pct}%。",
                "玛西的反击具有{counter_cooldown}秒冷却时间。"
            ]
        },
        {
            ability_classname: "imba_marci_special_delivery",
            ability_specials: [],
            name: "特快专递",
            description: "所有友方信使获得{bonus_levels}级额外等级和{bonus_hp_tooltip}点额外生命。",
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
            name: "健体术 | 护卫术",
            description: "玛西可以保护一名友军，使他们获得共享吸血和攻击力。她靠近友军时效果更强。 玛西可以保护一名友军，她在敌人范围内时会在友军受到攻击后作出反击。",
            related_abilities: [
                {
                    ability_classname: "imba_marci_guardian",
                    description: "+{s:bonus_bonus_damage}% 护卫术攻击力"
                },
                {
                    ability_classname: "imba_marci_bodyguard",
                    description: "+{s:bonus_bonus_damage}% 护卫术攻击力"
                }
            ],
            related_talents: [
                {
                    talent_key: "special_bonus_unique_marci_guardian_damage_facet_marci_bodyguard",
                    description: "+{s:bonus_bonus_damage}% 护卫术攻击力"
                }
            ]
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