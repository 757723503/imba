import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_puck_illusory_orb",
            ability_specials: [
                {
                    ability_special: "max_distance",
                    text: "最大距离："
                },
                {
                    ability_special: "orb_speed",
                    text: "速度："
                },
                {
                    ability_special: "damage",
                    text: "伤害："
                },
                {
                    ability_special: "curve_orb_duration_multiplier",
                    text: "%持续时间倍数："
                }
            ],
            name: "幻象法球",
            description: "帕克向直线方向发出一个魔法球，对经过路径上的敌人造成伤害。在幻象法球飞行过程中，帕克可以使用灵动之翼来传送到法球所在的位置。",
            lore: "顽皮的仙女龙很喜欢捉弄他人，突然消失再意想不到地重现。",
            notes: [
                "幻象法球在飞行途中提供顺畅视野。",
                "将自己传送到幻象法球可以躲避攻击和技能弹道。"
            ]
        },
        {
            ability_classname: "imba_puck_ethereal_jaunt",
            ability_specials: [],
            name: "灵动之翼",
            description: "让帕克能传送到幻象法球所在的位置。",
            notes: []
        },
        {
            ability_classname: "imba_puck_puckish",
            ability_specials: [],
            name: "顽皮克敌",
            description: "每当帕克躲避攻击时，它就会回复{mana_restore_pct}%最大魔法值和{mana_restore_pct}%最大生命值。躲避指向性技能的弹道将回复{dodged_spell_multiplier}倍数值。",
            notes: []
        },
        {
            ability_classname: "imba_puck_waning_rift",
            ability_specials: [
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "silence_duration",
                    text: "持续时间："
                },
                {
                    ability_special: "damage",
                    text: "伤害："
                },
                {
                    ability_special: "max_distance",
                    text: "最大距离："
                },
                {
                    ability_special: "knock_distance",
                    text: "推开/牵引距离："
                },
                {
                    ability_special: "knock_duration",
                    text: "推开/牵引持续时间："
                }
            ],
            name: "新月之痕",
            description: "帕克传送至目标地点洒出它神秘的仙女粉尘，对周围的敌人造成伤害和沉默。",
            lore: "帕克淘气地一笑，洒出中断魔法流动的附魔粉尘。",
            scepter_description: "新月之痕现在额外具有{scepter_radius}作用范围和距离，并且在{scepter_pushback_duration}秒内击退敌人{scepter_pushback}距离（不会打断）。显示区域内隐形的单位和守卫，持续{scepter_vision_duration}秒。",
            notes: []
        },
        {
            ability_classname: "imba_puck_phase_shift",
            ability_specials: [
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "shard_bonus_damage",
                    text: "额外伤害："
                }
            ],
            name: "相位转移",
            description: "持续施法 - 帕克暂时将自己转移到另一个位面，从而免疫伤害。",
            lore: "带着嘲笑，帕克瞬间回到了她的异维度故乡。",
            shard_description: "帕克的攻击造成额外魔法伤害。帕克每次施放相位转移时对攻击距离内所有敌人发动一次攻击。",
            notes: [
                "帕克在相位转移状态下依然具有碰撞体积。",
                "进行任何动作都会中止相位转移。",
                "帕克在相位转移状态下无敌。"
            ]
        },
        {
            ability_classname: "imba_puck_dream_coil",
            ability_specials: [
                {
                    ability_special: "coil_duration",
                    text: "缠绕持续时间："
                },
                {
                    ability_special: "coil_break_radius",
                    text: "破碎范围："
                },
                {
                    ability_special: "coil_initial_damage",
                    text: "初始伤害："
                },
                {
                    ability_special: "coil_stun_duration",
                    text: "破碎眩晕持续时间："
                },
                {
                    ability_special: "coil_break_damage",
                    text: "破碎伤害："
                }
            ],
            name: "梦境缠绕",
            description: "创造一个变化无常的的魔法梦境来困住敌方英雄，对他们造成伤害和束缚。如果被困住的敌方英雄试图挣脱缠绕走出梦境，将因为梦境破碎而受到眩晕和额外伤害。",
            lore: "仙女龙散播混乱，让敌人陷入鲜活的梦境，见证自己死亡的命运。",
            scepter_description: "梦境缠绕作用下的所有敌人都会被帕克攻击，攻击频率基于帕克攻击频率的{attack_rate_pct}%。即使目标挣脱梦境，被眩晕时攻击也会继续。",
            notes: []
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_puck",
                    name: "-{s:bonus_AbilityCooldown}秒 梦境缠绕冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_puck_2",
                    name: "-{s:value}秒 新月之痕冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_puck_5",
                    name: "梦境缠绕无视减益免疫"
                },
                {
                    talent_classname: "special_bonus_unique_imba_puck_6",
                    name: "+{s:bonus_damage} 新月之痕伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_puck_7",
                    name: "+{s:bonus_silence_duration}秒 新月之痕沉默"
                },
                {
                    talent_classname: "special_bonus_unique_imba_puck_orb_damage",
                    name: "+{s:bonus_damage} 幻象法球伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_puck_coil_damage",
                    name: "+{s:bonus_coil_break_damage} 梦境缠绕初始/破碎伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_puck_rift_radius",
                    name: "+{s:bonus_radius} 新月之痕范围/最大距离"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "puck_facets_imba_1",
            name: "推撞之痕 | 曲线法球",
            description: "新月之痕可以推开或者拉近作用单位。 帕克能以任意方向让幻象法球的轨迹弯曲，移动速度更快，持续时间更长。",
            related_abilities: [
                {
                    ability_classname: "imba_puck_illusory_orb",
                    description: "幻象法球现在能以矢量为目标，操控法球的行进路线。法球移动速度更快，持续时间也更久，但是超过最大施法距离后会被摧毁。"
                },
                {
                    ability_classname: "imba_puck_waning_rift",
                    description: "新月之痕会把敌人推开。如果技能设为多样施法，会把他们拉近。"
                }
            ],
            related_talents: []
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_puck_phase_shift",
            name: "相位转移",
            description: "暂时转移出物质位面"
        },
        {
            modifier_classname: "modifier_imba_puck_coiled",
            name: "被梦境缠绕",
            description: "被梦境缠绕所束缚"
        },
        {
            modifier_classname: "modifier_imba_puck_coil_break_stun",
            name: "被梦境缠绕",
            description: "你挣脱了梦境缠绕！被眩晕。"
        }
    ]
};