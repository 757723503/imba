import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_spectre_spectral_dagger",
            ability_specials: [
                {
                    ability_special: "damage",
                    text: "伤害："
                },
                {
                    ability_special: "bonus_movespeed",
                    text: "%移动速度加成："
                },
                {
                    ability_special: "hero_path_duration",
                    text: "持续时间："
                }
            ],
            name: "幽鬼之刃",
            description: "幽鬼掷出一把匕首，留下一条暗影之径，对路径上的敌人造成伤害并减缓其移动速度。被匕首击中的单位移动时也会留下暗影之径。幽鬼在暗影之径上可以无视地形移动。",
            lore: "墨丘利的匕首将物质位面遮蔽于暗影中，凡人在其中畏缩不前，但幽鬼们相当强势。",
            notes: [
                "在离开暗影之径后{dagger_grace_period}秒内碰撞体积依然为0，作为缓冲时间。",
                "不会触发法术抵抗或法术反弹。"
            ]
        },
        {
            ability_classname: "imba_spectre_desolate",
            ability_specials: [
                {
                    ability_special: "bonus_damage",
                    text: "额外伤害："
                },
                {
                    ability_special: "radius",
                    text: "范围："
                }
            ],
            name: "荒芜",
            description: "当敌人附近{radius}范围内没有他们的友军时，幽鬼的攻击对他们造成额外伤害。",
            lore: "战士们常常发现自己落单后还能在身边看到墨丘利——不得不质疑，这是不是真正的幽鬼。",
            notes: [
                "伤害在幽鬼攻击前产生。",
                "幽鬼的幻象继承荒芜。"
            ]
        },
        {
            ability_classname: "imba_spectre_dispersion",
            ability_specials: [
                {
                    ability_special: "damage_reflection_pct",
                    text: "%折射伤害："
                },
                {
                    ability_special: "min_radius",
                    text: "最小范围："
                },
                {
                    ability_special: "max_radius",
                    text: "最大范围："
                }
            ],
            name: "折射",
            description: "幽鬼将受到的伤害折射给敌人，自己承受的伤害降低。敌人距离幽鬼越远，受到的折射伤害越低。",
            lore: "一个令人却步的任务出现在墨丘利的敌人面前——用刀剑和魔法消灭一个影子。",
            shard_description: "折射可以主动施放，吸收和反弹的伤害比例提升{activation_bonus_pct}%，持续{activation_duration}秒。冷却时间为{activation_cooldown}秒。魔法消耗为{activation_manacost}点。",
            notes: [
                "幽鬼本身不承受被折射的伤害。",
                "幻象并不继承此技能。",
                "伤害在减免前折射，并且折射的伤害与原伤害类型相同。"
            ]
        },
        {
            ability_classname: "imba_spectre_haunt",
            ability_specials: [
                {
                    ability_special: "duration",
                    text: "鬼影持续时间："
                },
                {
                    ability_special: "tooltip_outgoing",
                    text: "%鬼影继承攻击力："
                },
                {
                    ability_special: "tooltip_illusion_total_damage_incoming",
                    text: "%鬼影承受伤害："
                }
            ],
            name: "鬼影重重",
            description: "创造一个复仇鬼影分别攻击每个敌方英雄。这个技能产生的幻象与如影随形的幻象类似，也可以使用空降来互换位置。",
            lore: "在战斗最焦灼的时候，墨丘利的实体形态破裂，幽影的碎片在生者身边作祟。",
            notes: []
        },
        {
            ability_classname: "imba_spectre_haunt_single",
            ability_specials: [
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "tooltip_outgoing",
                    text: "%鬼影继承攻击力："
                },
                {
                    ability_special: "tooltip_illusion_total_damage_incoming",
                    text: "%鬼影承受伤害："
                }
            ],
            name: "如影随形",
            description: "创造一个复仇鬼影攻击视野内单个敌方英雄。在技能持续期间内幽鬼可以使用空降将她和鬼影互换位置。\\n\\n鬼影无法控制，受到额外伤害，造成的伤害低于幽鬼本体。鬼影移动无视地形。",
            lore: "在强大的专注力下，墨丘利有时可以限制自己分裂的限度。",
            notes: []
        },
        {
            ability_classname: "imba_spectre_reality",
            ability_specials: [
                {
                    ability_special: "AbilityCooldown",
                    text: "冷却时间："
                }
            ],
            name: "空降",
            description: "幽鬼与选中的鬼影交换位置。",
            lore: "分散的幽影重聚成真正的幽鬼。",
            notes: []
        },
        {
            ability_classname: "imba_spectre_spectral",
            ability_specials: [],
            name: "幽影",
            description: "幽鬼和她的幻象为永久相位状态。",
            notes: []
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_spectre",
                    name: "-{s:value}秒 幽鬼之刃冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_spectre_2",
                    name: "+{s:bonus_bonus_damage} 荒芜伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_spectre_3",
                    name: "+{s:bonus_bonus_movespeed}% 幽鬼之刃减速/加速"
                },
                {
                    talent_classname: "special_bonus_unique_imba_spectre_4",
                    name: "+{s:value}% 复仇鬼影攻击力"
                },
                {
                    talent_classname: "special_bonus_unique_imba_spectre_5",
                    name: "+{s:value}% 折射"
                },
                {
                    talent_classname: "special_bonus_unique_imba_spectre_6",
                    name: "+{s:bonus_damage} 幽鬼之刃伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_spectre_desolate_radius",
                    name: "-{s:bonus_radius} 荒芜搜索友军范围"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "spectre_facets_imba_1",
            name: "独来独往 | 趁人之危",
            description: "荒芜可以对敌人造成部分伤害，并且幽鬼之刃会施加荒芜伤害。 空降还会向目标施放幽鬼之刃，并且冷却时间降低。",
            related_abilities: [
                {
                    ability_classname: "imba_spectre_spectral_dagger",
                    description: "幽鬼之刃会施加一次荒芜的伤害。"
                },
                {
                    ability_classname: "imba_spectre_desolate",
                    description: "敌人的附近只有非英雄友军时会受到{only_creep_allies_damage_pct}%荒芜伤害。"
                },
                {
                    ability_classname: "imba_spectre_haunt",
                    description: "鬼影重重的目标阵亡后幻象不再消失。"
                },
                {
                    ability_classname: "imba_spectre_reality",
                    description: "空降还会向目标施放幽鬼之刃，并且冷却时间降低。"
                },
                {
                    ability_classname: "imba_spectre_spectral",
                    description: "幽鬼之刃会施加一次荒芜的伤害。"
                }
            ],
            related_talents: []
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_spectre_spectral_dagger_path",
            name: "幽鬼之径",
            description: "幽鬼之刃路径追踪指示器，有待编辑"
        },
        {
            modifier_classname: "modifier_imba_spectre_spectral_dagger",
            name: "幽鬼之径制造者",
            description: "被匕首刺中，制造出幽鬼之径"
        },
        {
            modifier_classname: "modifier_imba_spectre_spectral_dagger_in_path",
            name: "幽鬼之刃路径",
            description: "移动速度被改变{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。"
        },
        {
            modifier_classname: "modifier_imba_spectre_desolate",
            name: "荒芜",
            description: "正受到幽鬼的额外伤害。"
        },
        {
            modifier_classname: "modifier_imba_spectre_desolate_blind",
            name: "视野被降低",
            description: "视野被荒芜降低"
        },
        {
            modifier_classname: "modifier_imba_spectre_dispersion_boost",
            name: "折射",
            description: "吸收和反弹更多伤害。"
        }
    ]
};