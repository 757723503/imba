import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_phantom_assassin_fan_of_knives",
            ability_specials: [
                {
                    ability_special: "pct_health_damage_initial",
                    text: "%最大生命值伤害："
                },
                {
                    ability_special: "pct_health_damage",
                    text: ""
                },
                {
                    ability_special: "degen",
                    text: ""
                },
                {
                    ability_special: "duration",
                    text: "破坏持续时间："
                },
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "projectile_speed",
                    text: ""
                },
                {
                    ability_special: "max_damage_initial",
                    text: ""
                }
            ],
            name: "刀阵旋风",
            description: "幻影刺客对附近范围内敌人放出尖利的刀刃，击中时造成目标最大生命值一定百分比的伤害并施加破坏效果。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_phantom_assassin_stifling_dagger",
            ability_specials: [
                {
                    ability_special: "AbilityCooldown",
                    text: ""
                },
                {
                    ability_special: "move_slow",
                    text: "%移动速度减缓："
                },
                {
                    ability_special: "dagger_speed",
                    text: ""
                },
                {
                    ability_special: "duration",
                    text: "减速持续时间："
                },
                {
                    ability_special: "base_damage",
                    text: "基础伤害："
                },
                {
                    ability_special: "attack_factor",
                    text: ""
                },
                {
                    ability_special: "attack_factor_tooltip",
                    text: "%攻击伤害："
                }
            ],
            name: "窒碍短匕",
            description: "对敌方单位掷出一把匕首，减缓其移动速度，并造成物理伤害，数值为{base_damage}+幻影刺客攻击伤害的{attack_factor_tooltip}%，同时继承物品和技能的攻击效果。",
            lore: "魅影之纱成员学习到的第一个技能，中招就意味着下一次攻击要来了。",
            notes: [
                "如果攻击效果为几率触发，匕首的触发几率与原几率相同。",
                "减益免疫下的敌人不会受到窒碍短匕的减速影响。",
                "窒碍短匕在行进途中和击中目标时都会提供附近的视野。"
            ]
        },
        {
            ability_classname: "imba_phantom_assassin_phantom_strike",
            ability_specials: [
                {
                    ability_special: "bonus_attack_speed",
                    text: "攻速提升："
                },
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "AbilityCastRange",
                    text: ""
                },
                {
                    ability_special: "creep_lifesteal_penalty",
                    text: ""
                }
            ],
            name: "幻影突袭",
            description: "传送到一个单位身旁，敌我皆可，如果目标是敌方单位将进行攻击并获得攻速加成。",
            lore: "茉崔蒂的真丝面纱是她倒霉的目标临终所见之物。",
            notes: []
        },
        {
            ability_classname: "imba_phantom_assassin_immaterial",
            ability_specials: [
                {
                    ability_special: "evasion_base",
                    text: "%初始闪避："
                },
                {
                    ability_special: "evasion_per_level",
                    text: "%每级额外闪避："
                },
                {
                    ability_special: "evasion_tooltip",
                    text: "%额外闪避："
                }
            ],
            name: "飘忽不定",
            description: "幻影刺客专注一心，闪避敌人攻击的技艺得到提升。闪避效果随着幻影刺客的等级提升而变高。\\n\\n与其他闪避效果为非线性叠加。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_phantom_assassin_blur",
            ability_specials: [
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "radius",
                    text: "显形所需敌人距离："
                },
                {
                    ability_special: "fade_duration",
                    text: "显形缓冲时间："
                },
                {
                    ability_special: "scepter_cooldown",
                    text: "%冷却时间减少："
                },
                {
                    ability_special: "break_on_attack",
                    text: ""
                },
                {
                    ability_special: "manacost_reduction_during_blur_pct",
                    text: "%魅影无形期间魔法消耗降低："
                },
                {
                    ability_special: "buff_duration_after_break",
                    text: "魅影无形后加成持续时间："
                },
                {
                    ability_special: "manacost_reduction_after_blur_pct",
                    text: "%魅影无形后魔法消耗降低："
                },
                {
                    ability_special: "active_movespeed_bonus",
                    text: "%开启后移动速度加成："
                }
            ],
            name: "魅影无形",
            description: "幻影刺客模糊自己的身形，躲避多种飞行过程中的攻击和技能弹道，提升她的移动速度，使她无法被看到，直到她发动攻击，或者靠近敌方英雄、防御塔或前哨。",
            lore: "长期的冥想使得魅影之纱的成员能够谨慎地预知到敌人的到来。",
            shard_description: "魅影无形主动技能生效时移动速度提升40%。",
            scepter_description: "魅影无形能立刻施放，并且施放时施加驱散效果。每次击杀英雄时幻影刺客将刷新所有技能的冷却时间。降低冷却时间。",
            notes: [
                "通过普通攻击攻击肉山会驱散魅影无形。"
            ]
        },
        {
            ability_classname: "imba_phantom_assassin_coup_de_grace",
            ability_specials: [
                {
                    ability_special: "crit_chance",
                    text: "%致命专注几率："
                },
                {
                    ability_special: "dagger_crit_chance",
                    text: "%短匕致命专注几率："
                },
                {
                    ability_special: "crit_bonus",
                    text: "%致命一击伤害："
                },
                {
                    ability_special: "attacks_to_proc",
                    text: "触发所需攻击次数："
                },
                {
                    ability_special: "attacks_to_proc_creeps",
                    text: ""
                },
                {
                    ability_special: "duration",
                    text: "致命专注持续时间："
                }
            ],
            name: "恩赐解脱",
            description: "幻影刺客的战斗技能得到精进，每次攻击时有几率获得致命专注。攻击时若带有致命专注，幻影刺客会消耗该效果，并且必定产生一次致命一击。窒碍短匕拥有额外几率获得致命专注。",
            lore: "神圣的一击，茉崔蒂通过赐予对手死亡来向他们致以敬意。",
            notes: []
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_phantom_assassin",
                    name: "+2 窒碍短匕掷出",
                    description: "对施法距离内随机两个视野内敌人分别施放一把窒碍短匕。"
                },
                {
                    talent_classname: "special_bonus_unique_imba_phantom_assassin_2",
                    name: "+{s:bonus_crit_chance}% 恩赐解脱几率"
                },
                {
                    talent_classname: "special_bonus_unique_imba_phantom_assassin_3",
                    name: "+{s:bonus_evasion_base}% 飘忽不定闪避"
                },
                {
                    talent_classname: "special_bonus_unique_imba_phantom_assassin_4",
                    name: "+{s:bonus_duration}秒 幻影突袭持续时间"
                },
                {
                    talent_classname: "special_bonus_unique_imba_phantom_assassin_5",
                    name: "+{s:bonus_attack_factor}% 窒碍短匕伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_phantom_assassin_6",
                    name: "+{s:bonus_AbilityCastRange} 幻影突袭施法距离"
                },
                {
                    talent_classname: "special_bonus_unique_imba_phantom_assassin_7",
                    name: "-{s:bonus_AbilityCooldown}秒 窒碍短匕冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_phantom_assassin_strike_aspd",
                    name: "+{s:bonus_bonus_attack_speed} 幻影突袭攻击速度"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "phantom_assassin_facets_imba_1",
            name: "",
            description: ""
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_phantom_assassin_blur_manacost_reduction",
            name: "魅影之纱",
            description: "技能和物品没有魔法消耗。"
        },
        {
            modifier_classname: "modifier_imba_phantom_assassin_coup_counter",
            name: "有条不紊",
            description: "为致命一击蓄力。"
        },
        {
            modifier_classname: "modifier_imba_phantom_assassin_immaterial",
            name: "飘忽不定",
            description: "闪避{MODIFIER_PROPERTY_EVASION_CONSTANT}%的攻击。"
        },
        {
            modifier_classname: "modifier_imba_phantom_assassin_stiflingdagger",
            name: "窒碍短匕",
            description: "移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%"
        },
        {
            modifier_classname: "modifier_imba_phantom_assassin_stiflingdagger_caster",
            name: "窒碍短匕"
        },
        {
            modifier_classname: "modifier_imba_phantom_assassin_blur_active",
            name: "魅影无形",
            description: "无影无形，从敌方视野中消失。"
        },
        {
            modifier_classname: "modifier_imba_phantom_assassin_phantom_strike",
            name: "幻影突袭",
            description: "攻击速度提升{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}，并且获得额外吸血。"
        },
        {
            modifier_classname: "modifier_imba_phantom_assassin_fan_of_knives",
            name: "刀阵旋风",
            description: "被动技能被禁用。"
        },
        {
            modifier_classname: "modifier_imba_phantom_assassin_mark_of_death",
            name: "致命专注",
            description: "下次攻击或窒碍短匕必定发生致命一击。"
        }
    ]
};