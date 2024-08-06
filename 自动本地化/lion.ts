import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_lion_impale",
            ability_specials: [
                {
                    ability_special: "damage",
                    text: "伤害："
                },
                {
                    ability_special: "duration",
                    text: "眩晕持续时间："
                }
            ],
            name: "裂地尖刺",
            description: "岩石尖刺在地上沿一条直线穿刺而出。敌方单位被抛向空中，落地时被眩晕并受到伤害。",
            lore: "恶魔巫师使用他的恶魔契约，打开一条来自地狱的裂缝。",
            notes: [
                "尖刺的移动速度是每秒{speed}码。",
                "不会触发法术抵抗或法术反弹。"
            ]
        },
        {
            ability_classname: "imba_lion_voodoo",
            ability_specials: [
                {
                    ability_special: "duration",
                    text: "持续时间："
                }
            ],
            name: "妖术",
            description: "将一个敌方单位变成人畜无害的动物，受害者无法使用所有特殊能力。",
            lore: "莱恩被迫分享他的变形术，让反抗他的人扭曲了他们的精华。",
            notes: [
                "即刻摧毁幻象。",
                "目标的基础移动速度为{movespeed}，但是如果目标有满速状态则移速不受影响。"
            ]
        },
        {
            ability_classname: "imba_lion_mana_drain",
            ability_specials: [
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "mana_per_second",
                    text: "每秒抽取魔法值："
                },
                {
                    ability_special: "break_distance",
                    text: "中断距离："
                },
                {
                    ability_special: "movespeed",
                    text: "%移动速度减缓/加成："
                }
            ],
            name: "法力吸取",
            description: "持续施法 - 引导魔法能量，持续吸取魔法并减缓敌人的移动速度。如果敌人没有魔法剩余，减速效果提升{movespeed_bonus_when_empty_pct}%。<br><br>可以对友军施放，给予他们{movespeed_bonus_when_empty_pct}%魔法和移动速度。",
            lore: "对恶魔巫师来说，较为弱小的法师只不过是他回复魔力的来源。",
            shard_description: "法力吸取可以作用最多{shard_bonus_targets}个额外敌人，并且断裂距离增加。持续施法期间莱恩为减益免疫状态，并且获得{magic_resist}%魔法抗性。",
            notes: [
                "立刻摧毁幻象，并阻止英雄进入隐身状态。"
            ]
        },
        {
            ability_classname: "imba_lion_finger_of_death",
            ability_specials: [
                {
                    ability_special: "damage",
                    text: "伤害："
                },
                {
                    ability_special: "damage_per_kill",
                    text: "每次击杀提升伤害："
                },
                {
                    ability_special: "cooldown_scepter",
                    text: "冷却时间："
                },
                {
                    ability_special: "splash_radius_scepter",
                    text: "作用范围："
                },
                {
                    ability_special: "punch_duration",
                    text: "重拳持续时间："
                },
                {
                    ability_special: "punch_bonus_damage_base",
                    text: "重拳攻击力加成："
                },
                {
                    ability_special: "punch_bonus_damage_per_stack",
                    text: "每层叠加的重拳攻击力加成："
                },
                {
                    ability_special: "cleave_damage",
                    text: "%分裂伤害："
                }
            ],
            name: "死亡之指",
            description: "撕裂一个敌方单位，将其折磨得死去活来，并造成巨大伤害。每次成功击杀英雄都会提升威力。",
            lore: "莱恩丑陋的手正是他最强大力量的来源，能够用恶魔的力量让受害者完全崩溃。",
            scepter_description: "提高伤害，减少冷却时间。死亡之指将作用一小片区域内的所有单位。",
            notes: [
                "死亡一指在技能施放到伤害生效有{damage_delay}秒延迟，因此有若干技能可以躲避该伤害。",
                "只有在敌方英雄受到死亡之指作用后{grace_period}秒内死亡才会使死亡之指额外提升伤害。"
            ]
        },
        {
            ability_classname: "imba_lion_to_hell_and_back",
            ability_specials: [],
            name: "下地狱再上来",
            description: "莱恩在复活后{duration}秒内获得{debuff_amp}%负面效果时间和{debuff_amp}%技能伤害增强。",
            notes: []
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_lion_2",
                    name: "+{s:bonus_AbilityCastRange} 裂地尖刺施法/行进距离"
                },
                {
                    talent_classname: "special_bonus_unique_imba_lion_3",
                    name: "+{s:bonus_damage} 裂地尖刺伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_lion_4",
                    name: "+{s:bonus_radius} 范围型妖术"
                },
                {
                    talent_classname: "special_bonus_unique_imba_lion_5",
                    name: "-{s:bonus_AbilityCooldown}秒 妖术冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_lion_6",
                    name: "+{s:bonus_movespeed}% 法力吸取减速"
                },
                {
                    talent_classname: "special_bonus_unique_imba_lion_8",
                    name: "+{s:bonus_damage_per_kill} 死亡之指每次击杀伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_lion_10",
                    name: "裂地尖刺为30º锥形范围"
                },
                {
                    talent_classname: "special_bonus_unique_imba_lion_11",
                    name: "死亡之指击杀+{s:value} 生命上限"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "lion_facets_imba_1",
            name: "死亡之拳 | 吞食精华",
            description: "莱恩施放死亡之指后获得拥有分裂效果的强力近战攻击。 法力吸取的每秒魔法吸取量提升，并且会造成{s:bonus_damage_pct}%吸魔量的伤害。",
            related_abilities: [
                {
                    ability_classname: "imba_lion_mana_drain",
                    description: "法力吸取会造成{damage_pct}%吸魔量的伤害。"
                },
                {
                    ability_classname: "imba_lion_finger_of_death",
                    description: "施放死亡之指后，莱恩从远程变为近战攻击，获得攻击力加成和分裂效果。被击中的敌方英雄在{punch_grace_period}秒内阵亡后也会增加死亡之指的叠加效果。"
                }
            ],
            related_talents: []
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_lion_impale",
            name: "穿刺",
            description: "眩晕。"
        },
        {
            modifier_classname: "modifier_imba_lion_voodoo",
            name: "妖术",
            description: "你是只青蛙。无法攻击和施法。"
        },
        {
            modifier_classname: "modifier_imba_lion_mana_drain",
            name: "法力吸取",
            description: "每秒转移{MODIFIER_PROPERTY_TOOLTIP}点魔法，并且移动速度改变{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。"
        },
        {
            modifier_classname: "modifier_imba_lion_mana_drain_immunity",
            name: "法力吸取",
            description: "减益免疫。"
        },
        {
            modifier_classname: "modifier_imba_lion_finger_of_death",
            name: "死亡之指",
            description: "即将被魔力撕裂。"
        },
        {
            modifier_classname: "modifier_imba_lion_finger_of_death_delay",
            name: "死亡之指",
            description: "击杀目标后死亡之指的威力将得到永久提升。"
        },
        {
            modifier_classname: "modifier_imba_lion_finger_of_death_kill_counter",
            name: "死亡之指击杀数",
            description: "死亡之指提升{MODIFIER_PROPERTY_TOOLTIP}点伤害。"
        },
        {
            modifier_classname: "modifier_imba_lion_finger_of_death_kill_counter_postgame",
            name: "死亡之指每次击杀英雄后提升40点伤害。"
        },
        {
            modifier_classname: "modifier_imba_lion_finger_punch",
            name: "死亡之拳",
            description: "变为近战攻击，+{MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE}点攻击力。"
        },
        {
            modifier_classname: "modifier_imba_lion_to_hell_and_back_buff",
            name: "地狱回来",
            description: "获得{MODIFIER_PROPERTY_STATUS_RESISTANCE_CASTER}%负面效果时间和{MODIFIER_PROPERTY_STATUS_RESISTANCE_CASTER}%技能伤害增强。"
        }
    ]
};