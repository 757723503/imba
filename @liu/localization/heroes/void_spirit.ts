import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_void_spirit_aether_remnant",
            ability_specials: [
                {
                    ability_special: "remnant_watch_distance",
                    text: "观察距离："
                },
                {
                    ability_special: "activation_delay",
                    text: "启动时间："
                },
                {
                    ability_special: "impact_damage",
                    text: "伤害："
                },
                {
                    ability_special: "pull_duration",
                    text: "牵引持续时间："
                },
                {
                    ability_special: "duration",
                    text: "残像持续时间："
                }
            ],
            name: "残阴",
            description: "虚无之灵向目标地点派出一个残像。残像观察着一片区域，面朝矢量的方向。当有目标进入其视线，残像会拉扯，并造成伤害。",
            lore: "无玄的存在远超时间和空间中的一个点。",
            shard_description: "提升残阴的观察距离，并且只牵引敌方英雄单位。其他单位处于残阴路径时每{damage_tick_rate}秒受到{creep_damage_pct}%伤害，但是残像不会被摧毁。冷却时间降低至{AbilityCooldown}秒。",
            notes: []
        },
        {
            ability_classname: "imba_void_spirit_dissimilate",
            ability_specials: [
                {
                    ability_special: "phase_duration",
                    text: "相位持续时间："
                },
                {
                    ability_special: "artifice_duration_override_tooltip",
                    text: "残阴持续时间："
                },
                {
                    ability_special: "artifice_pct_effectiveness_tooltip",
                    text: "%残阴威力："
                }
            ],
            name: "异化",
            description: "虚无之灵暂时遁入太虚，创造数个灵扉。穿过灵扉他能重组自身。穿出灵扉后，他对区域内所有敌人造成伤害。",
            lore: "无玄更愿意脱离肉体的限制，自由地观察我们的位面。",
            shard_description: "异化增加一部分外圈。伤害提升{shard_bonus_damage}点。",
            notes: [
                "太虚呼唤不会在外圈产生残阴。"
            ]
        },
        {
            ability_classname: "imba_void_spirit_astral_step",
            ability_specials: [
                {
                    ability_special: "max_travel_distance",
                    text: "距离："
                },
                {
                    ability_special: "pop_damage",
                    text: "太虚印记伤害："
                },
                {
                    ability_special: "movement_slow_pct",
                    text: "%移动速度减缓："
                }
            ],
            name: "太虚之径",
            description: "虚无之灵撕裂现实进入精神位面，再出现在目标地点，对沿途的所有敌人造成伤害。此次攻击将施加一个太虚印记，造成{pop_damage_delay}秒减速，然后引爆。",
            lore: "无玄的一小步就能在凡间引发极大的毁灭。",
            shard_description: "虚无之灵的攻击拥有{attack_chance_pct}%几率，并且非大招技能拥有{attack_chance_pct}%几率在敌人身上留下虚无印记。",
            notes: [
                "太虚之径的攻击不会分裂。"
            ]
        },
        {
            ability_classname: "imba_void_spirit_resonant_pulse",
            ability_specials: [
                {
                    ability_special: "radius",
                    text: "脉冲作用范围："
                },
                {
                    ability_special: "damage",
                    text: "伤害："
                },
                {
                    ability_special: "buff_duration",
                    text: "护盾持续时间："
                },
                {
                    ability_special: "base_absorb_amount",
                    text: "基础伤害护盾："
                },
                {
                    ability_special: "absorb_per_hero_hit",
                    text: "每击中一个英雄护盾数值："
                },
                {
                    ability_special: "charge_restore_time",
                    text: "基础充能时间："
                },
                {
                    ability_special: "silence_duration_scepter",
                    text: "沉默持续时间："
                }
            ],
            name: "共鸣脉冲",
            description: "虚无之灵将自己包裹在保护性护盾之中，可以吸收物理伤害，并围绕自身发出一次伤害性脉冲。脉冲每击中一名敌方英雄，护盾的伤害吸收量都会提升。",
            lore: "被迫与物质位面互动时，无玄从不犹豫将自己包裹在本真的精华中。",
            scepter_description: "共鸣脉冲可以沉默敌人，并获得{max_charges}点能量点数。",
            notes: []
        },
        {
            ability_classname: "imba_void_spirit_symmetry",
            ability_specials: [
                {
                    ability_special: "buff_duration",
                    text: "护盾持续时间："
                },
                {
                    ability_special: "absorb_per_damage_pct",
                    text: "%魔法伤害转为护盾："
                }
            ],
            name: "对称",
            description: "虚无之灵对敌方英雄造成魔法伤害时获得物理伤害护盾。",
            notes: []
        },
        {
            ability_classname: "imba_void_spirit_intrinsic_edge",
            ability_specials: [],
            name: "内在优势",
            description: "虚无之灵从他的所有属性中获得的次级加成提升{secondary_stat_bonus_pct}%",
            notes: []
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_void_spirit_1",
                    name: "-{s:bonus_AbilityChargeRestoreTime}秒 太虚之径充能"
                },
                {
                    talent_classname: "special_bonus_unique_imba_void_spirit_2",
                    name: "+{s:bonus_impact_damage} 残阴伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_void_spirit_3",
                    name: "异化造成{s:value}秒缠绕"
                },
                {
                    talent_classname: "special_bonus_unique_imba_void_spirit_4",
                    name: "+{s:value} 共鸣脉冲伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_void_spirit_7",
                    name: "残阴提供 {s:value} 真实视域"
                },
                {
                    talent_classname: "special_bonus_unique_imba_void_spirit_8",
                    name: "{s:value}% 太虚之径暴击",
                    description: "太虚之径产生的普通攻击造成致命一击。"
                },
                {
                    talent_classname: "special_bonus_unique_imba_void_spirit_dissimilate_outerring",
                    name: "异化增加部分外圈",
                    description: "异化增加部分外圈"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "void_spirit_facets_imba_1",
            name: "对称 | 庇佑 | 太虚的呼唤",
            description: "共鸣脉冲会产生更强的全伤害护盾，而不是物理伤害护盾。 退出异化时，残阴会在离虚无之灵最远的{s:bonus_aether_remnant_count}个灵扉处产生。",
            related_abilities: [
                {
                    ability_classname: "imba_void_spirit_dissimilate",
                    description: "退出异化时，距离虚无之灵最远的{aether_remnant_count}个灵扉处会产生残阴。如果在中央的灵扉重组则没有效果。残阴会面朝中央的灵扉，牵引时间和伤害降低。"
                },
                {
                    ability_classname: "imba_void_spirit_resonant_pulse",
                    description: "共鸣脉冲会产生更强的全伤害护盾，而不是物理伤害护盾。"
                }
            ],
            related_talents: []
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_void_spirit_aether_remnant_pull",
            name: "残阴",
            description: "这个单位被拉向一个残阴。"
        },
        {
            modifier_classname: "modifier_imba_void_spirit_astral_step_charge_counter",
            name: "太虚之径能量点数",
            description: "太虚之径的剩余能量点数。"
        },
        {
            modifier_classname: "modifier_imba_void_spirit_astral_step_debuff",
            name: "太虚之径",
            description: "移动速度被减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%，并且结束时受到伤害。"
        },
        {
            modifier_classname: "modifier_imba_void_spirit_resonant_pulse_physical_buff",
            name: "伤害格挡",
            description: "吸收物理伤害。"
        },
        {
            modifier_classname: "modifier_imba_void_spirit_resonant_pulse_physical_buff_facet_void_spirit_sanctuary",
            name: "吸收所有类型的伤害。"
        },
        {
            modifier_classname: "modifier_imba_void_spirit_resonant_pulse_buff",
            name: "共鸣脉冲",
            description: "这个单位拥有护盾，可以吸收物理伤害。"
        },
        {
            modifier_classname: "modifier_imba_void_spirit_planeshift_passive_charges",
            name: "位面变换能量点数",
            description: "从敌人施法中获得的能量点数。"
        },
        {
            modifier_classname: "modifier_imba_void_spirit_planeshift_untargetable",
            name: "已变换形态",
            description: "单位无法作为目标"
        },
        {
            modifier_classname: "modifier_imba_void_spirit_planeshift_on_hit",
            name: "位面变换 - 特殊攻击"
        },
        {
            modifier_classname: "modifier_imba_void_spirit_planeshift_caster_buff",
            name: "位面变换 - 未释放",
            description: "拥有{MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE}点攻击力加成，{MODIFIER_PROPERTY_EVASION_CONSTANT}%闪避加成。"
        }
    ]
};