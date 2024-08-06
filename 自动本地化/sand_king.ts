import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_sandking_burrowstrike",
            ability_specials: [
                {
                    ability_special: "burrow_duration",
                    text: "眩晕时间："
                }
            ],
            name: "掘地穿刺",
            description: "沙王钻入地面挖掘隧道前进，穿出地面时伤害并眩晕上方的敌方单位。对击中的英雄施加腐尸毒。<br><br>可以设为多样施法，直接朝指定方向立刻施放，不需要走向目标地点。",
            lore: "克里瑟历斯经常钻入地下埋伏，等待伏击敌人。",
            notes: [
                "不会触发法术抵抗或法术反弹。"
            ]
        },
        {
            ability_classname: "imba_sandking_sand_storm",
            ability_specials: [
                {
                    ability_special: "sand_storm_radius",
                    text: "作用范围："
                },
                {
                    ability_special: "sand_storm_damage",
                    text: "每秒伤害："
                }
            ],
            name: "沙尘暴",
            description: "沙王制造一起可怕的沙尘暴，对敌方单位造成伤害。沙王离开该区域后效果结束。",
            lore: "有人认为克里瑟历斯只是传说中的幻影，因为他的甲壳在闪烁荒原的沙尘中总是若隐若现。",
            notes: [
                "沙尘暴可以用来躲避攻击和技能弹道。",
                "沙王在沙尘暴中攻击或使用技能会暂时显形。{fade_delay}秒后将再次隐形。"
            ]
        },
        {
            ability_classname: "imba_sandking_caustic_finale",
            ability_specials: [
                {
                    ability_special: "caustic_finale_radius",
                    text: "爆炸范围："
                },
                {
                    ability_special: "caustic_finale_damage_base",
                    text: "基础伤害："
                },
                {
                    ability_special: "caustic_finale_damage_pct",
                    text: "%最大生命值伤害："
                },
                {
                    ability_special: "caustic_finale_duration",
                    text: "持续时间："
                }
            ],
            name: "腐尸毒",
            description: "沙王的攻击对敌方单位注入毒液，使他们死亡时发生剧烈爆炸。",
            lore: "克里瑟历斯的毒液让受害者变得脆弱并且干涸如干旱的荒地，最后爆炸而死。",
            notes: []
        },
        {
            ability_classname: "imba_sandking_innate_caustic_impediment",
            ability_specials: [],
            notes: []
        },
        {
            ability_classname: "imba_sandking_innate_caustic_volatility",
            ability_specials: [],
            notes: []
        },
        {
            ability_classname: "imba_sandking_epicenter",
            ability_specials: [
                {
                    ability_special: "epicenter_pulses",
                    text: "震击次数："
                },
                {
                    ability_special: "epicenter_damage",
                    text: "每波伤害："
                },
                {
                    ability_special: "epicenter_radius_base",
                    text: "基础作用范围："
                },
                {
                    ability_special: "epicenter_radius_increment",
                    text: "作用范围递增："
                },
                {
                    ability_special: "epicenter_slow",
                    text: "%移动速度减缓："
                },
                {
                    ability_special: "epicenter_slow_as",
                    text: "攻击速度降低："
                },
                {
                    ability_special: "shard_radius",
                    text: "作用范围："
                },
                {
                    ability_special: "linger_duration",
                    text: "负面状态持续时间："
                }
            ],
            name: "地震",
            description: "经过{abilitycastpoint}秒施法前摇后，沙王向地中发送扰动，引起大地剧烈震动。所有范围内的敌人会受到伤害并被减速。每次后续震波都会提高伤害传播半径。",
            lore: "许多探险家丧生于闪烁荒原的流沙。",
            shard_description: "提升地震波伤害，每{shard_interval}秒都会在沙王身上产生一道较小的地震波。",
            scepter_description: "地震的脉冲开始时每{spine_tick_rate}秒会在随机地点产生{scepter_explosions_per_pulse}片尾刺的攻击区域，每片区域为地震当前范围的{scepter_explosion_radius_pct}%，对击中的敌人造成{scepter_explosion_radius_pct}%尾刺伤害。魔晶的地震波会产生{shard_explosions_per_pulse}次攻击。",
            notes: [
                "地震波将以沙王为中心，而不是他施放技能的地点。"
            ]
        },
        {
            ability_classname: "imba_sandking_scorpion_strike",
            ability_specials: [
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "attack_damage",
                    text: "额外伤害："
                },
                {
                    ability_special: "debuff_duration",
                    text: "减速持续时间："
                },
                {
                    ability_special: "strike_slow",
                    text: "%移动速度减缓："
                }
            ],
            name: "尾刺",
            description: "沙王袭击一片区域，对范围内所有敌人发动一次攻击，对每个敌人造成额外伤害。最中心{inner_radius}范围内敌人将受到{inner_radius_bonus_damage_pct}%额外伤害。对所有击中的敌人施加腐尸毒和减速效果。",
            notes: []
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_sand_king",
                    name: "+{s:bonus_epicenter_pulses} 地震波数"
                },
                {
                    talent_classname: "special_bonus_unique_imba_sand_king_2",
                    name: "+{s:bonus_sand_storm_damage} 沙尘暴每秒伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_sand_king_3",
                    name: "+{s:bonus_strike_slow}% 尾刺减速"
                },
                {
                    talent_classname: "special_bonus_unique_imba_sand_king_4",
                    name: "{s:value}% 沙尘暴减速和致盲",
                    description: "沙尘暴范围内敌方单位的移动速度将被减缓{s:value}{，攻击有{s:value}}几率落空。"
                },
                {
                    talent_classname: "special_bonus_unique_imba_sand_king_5",
                    name: "+{s:bonus_epicenter_radius_base}/{s:bonus_epicenter_radius_increment} 地震基础/递增范围"
                },
                {
                    talent_classname: "special_bonus_unique_imba_sand_king_7",
                    name: "-{s:bonus_AbilityCooldown}秒 掘地穿刺冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_sand_king_8",
                    name: "+{s:bonus_AbilityCastRange} 掘地穿刺施法距离"
                },
                {
                    talent_classname: "special_bonus_unique_imba_sand_king_burrowstrike_stun",
                    name: "+{s:bonus_burrow_duration}秒 掘地穿刺眩晕"
                },
                {
                    talent_classname: "special_bonus_unique_imba_sand_king_scorpion_strike_damage",
                    name: "+{s:bonus_attack_damage} 尾刺伤害"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "sand_king_facets_imba_1",
            name: "尘卷旋风 | 黄沙漫天",
            description: "沙王移动或使用掘地穿刺时沙尘暴都会跟随沙王。 沙尘暴的作用范围提升，并且沙王在其中获得隐身效果。",
            related_abilities: [
                {
                    ability_classname: "imba_sandking_sand_storm",
                    description: "沙尘暴的作用范围提升，并且沙王在其中获得隐身效果。"
                }
            ],
            related_talents: []
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_sand_king_caustic_finale_orb",
            name: "腐尸毒",
            description: "被沙王的攻击注入毒素。你死亡时会爆炸，造成范围伤害。"
        },
        {
            modifier_classname: "modifier_imba_sand_king_epicenter",
            name: "地震",
            description: "向大地发出震颤，造成范围伤害和减速。"
        },
        {
            modifier_classname: "modifier_imba_sand_king_epicenter_slow",
            name: "地震减速",
            description: "移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。攻击速度降低{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}。"
        },
        {
            modifier_classname: "modifier_imba_sand_king_scorpion_strike_slow",
            name: "尾刺",
            description: "移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。"
        }
    ]
};