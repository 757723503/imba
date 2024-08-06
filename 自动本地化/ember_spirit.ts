import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_ember_spirit_searing_chains",
            ability_specials: [
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "damage_per_second",
                    text: "每秒伤害："
                },
                {
                    ability_special: "unit_count",
                    text: "绳索数量："
                }
            ],
            name: "炎阳索",
            description: "灰烬之灵释放出火焰绳索来缠绕住附近的敌人，将他们困于原地并每秒造成一定伤害。",
            lore: "炘之严训，炽链相伴。",
            notes: [
                "将随机选取炘周围的单位作为目标。",
                "不能作用于减益免疫或隐身单位。"
            ]
        },
        {
            ability_classname: "imba_ember_spirit_sleight_of_fist",
            ability_specials: [
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "bonus_hero_damage",
                    text: "对英雄额外伤害："
                },
                {
                    ability_special: "attack_interval",
                    text: "攻击间隔："
                }
            ],
            name: "无影拳",
            description: "灰烬之灵以燎原之火的速度横冲直撞，攻击目标区域内所有敌人，随后返回所在位置。对英雄造成额外伤害。",
            lore: "顷刻之间，鞭策众敌。",
            notes: [
                "在施放技能时作用的目标就已决定。",
                "对目标的攻击每次间隔为{attack_interval}秒。",
                "炘拥有的攻击特效（如致命一击、重击、分裂、连锁闪电等效果）在技能攻击期间都能生效。",
                "施放无影拳时间可以使用其他技能和物品。"
            ]
        },
        {
            ability_classname: "imba_ember_spirit_flame_guard",
            ability_specials: [
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "damage_per_second",
                    text: "每秒伤害："
                },
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "shield_pct_absorb",
                    text: "%吸收百分比："
                },
                {
                    ability_special: "absorb_amount",
                    text: "魔法护盾："
                }
            ],
            name: "烈火罩",
            description: "灰烬之灵用火焰之环将自己包裹起来，会消耗受到的魔法伤害，使受到的魔法伤害被吸收一定百分比。烈火罩开启后会对灰烬之灵周围的敌人造成每秒伤害。护盾消失后将失去伤害效果。",
            lore: "近身之敌，自讨苦吃。",
            notes: [
                "魔法伤害的吸收伤害值计算先于任何伤害减免效果。",
                "伤害在施加后会额外粘滞{linger_duration}秒。"
            ]
        },
        {
            ability_classname: "imba_ember_spirit_immolation",
            ability_specials: [
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "damage",
                    text: "伤害："
                }
            ],
            name: "献祭心",
            description: "灰烬之灵持续燃烧，时刻对周围所有敌人造成每秒伤害。",
            shard_description: "使残焰获得当前等级的献祭心，并且伤害和作用范围提升。",
            notes: [
                "破坏不会使阿哈利姆魔晶升级的残焰继承的献祭心失效。"
            ]
        },
        {
            ability_classname: "imba_ember_spirit_fire_remnant",
            ability_specials: [
                {
                    ability_special: "damage",
                    text: "伤害："
                },
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "duration",
                    text: "残焰持续时间："
                },
                {
                    ability_special: "scepter_range",
                    text: "距离："
                },
                {
                    ability_special: "scepter_speed_multiplier",
                    text: "移动速度倍数："
                },
                {
                    ability_special: "scepter_max_charges",
                    text: "最大能量点数："
                },
                {
                    ability_special: "shard_charge_radius",
                    text: "充能触发范围："
                }
            ],
            name: "残焰",
            description: "可以放出一个残焰，向目标地点冲去，速度为灰烬之灵移动速度的{speed_multiplier}%。使用“激活残焰”技能后，灰烬之灵向所有残焰像冲去，将其摧毁并造成范围伤害，并移动至最近的残焰像。灰烬之灵最后会到达离目标地点最近的残焰像。",
            lore: "身怀灵力，重焕教义。",
            shard_description: "灰烬之灵附近范围内有敌方英雄阵亡时，恢复一点残焰能量点数。",
            scepter_description: "提升施法距离、初始残焰速度和最大能量点数。",
            notes: [
                "学习后马上拥有3个残焰（上限数量）。"
            ]
        },
        {
            ability_classname: "imba_ember_spirit_activate_fire_remnant",
            ability_specials: [],
            name: "激活残焰",
            description: "选择残焰，灰烬之灵将向其冲去。",
            lore: "燎原之火，瞬息将至！",
            notes: []
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_ember_spirit_1",
                    name: "+{s:bonus_absorb_amount} 烈火罩护盾数值"
                },
                {
                    talent_classname: "special_bonus_unique_imba_ember_spirit_2",
                    name: "+{s:bonus_duration}秒 炎阳索持续时间"
                },
                {
                    talent_classname: "special_bonus_unique_imba_ember_spirit_3",
                    name: "+{s:bonus_damage_per_second}% 烈火罩每秒伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_ember_spirit_4",
                    name: "{s:bonus_AbilityCharges} 无影拳能量点数"
                },
                {
                    talent_classname: "special_bonus_unique_imba_ember_spirit_5",
                    name: "-{s:bonus_AbilityChargeRestoreTime}秒 残焰充能"
                },
                {
                    talent_classname: "special_bonus_unique_imba_ember_spirit_6",
                    name: "+{s:bonus_bonus_hero_damage} 无影拳对英雄伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_ember_spirit_chains_dps",
                    name: "+{s:bonus_damage_per_second} 炎阳索伤害"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "ember_spirit_facets_imba_1",
            name: "双重冲击 | 上下求索",
            description: "无影拳会再次击中其中一个目标。 炎阳索可多作用{s:bonus_unit_count}个1敌人，并且残焰也会施放炎阳索。",
            related_abilities: [
                {
                    ability_classname: "imba_ember_spirit_searing_chains",
                    description: "束缚的敌人数量增加。施放炎阳索时，每个残焰周围也会施放炎阳索。单个目标不会同时被多个来源的炎阳索击中。"
                },
                {
                    ability_classname: "imba_ember_spirit_sleight_of_fist",
                    description: "无影拳击中的敌人超过{min_enemies_for_double_sleight}个时，距离灰烬之灵最近的敌人会再次受到攻击。第二次攻击的伤害减少{second_attack_damage_penalty}%。"
                }
            ],
            related_talents: []
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_ember_spirit_searing_chains",
            name: "炎阳索",
            description: "被炎阳索困于原地。无法闪烁或移动，每秒持续受到伤害。"
        },
        {
            modifier_classname: "modifier_imba_ember_spirit_flame_guard",
            name: "烈火罩",
            description: "对作用范围内造成魔法伤害。"
        },
        {
            modifier_classname: "modifier_imba_ember_spirit_fire_remnant_charge_counter",
            name: "残焰点数",
            description: "只要还有残焰就能随时进行施放。"
        },
        {
            modifier_classname: "modifier_imba_ember_spirit_fire_remnant_timer",
            name: "残焰持续时间",
            description: "残焰经过45秒后将会消失。"
        },
        {
            modifier_classname: "modifier_imba_ember_spirit_fire_remnant",
            name: "残焰",
            description: "向残焰像冲去。"
        },
        {
            modifier_classname: "modifier_imba_ember_spirit_fire_remnant_shard_debuff",
            name: "残焰",
            description: "烧灼造成每秒{MODIFIER_PROPERTY_TOOLTIP}点伤害。"
        },
        {
            modifier_classname: "modifier_imba_ember_spirit_sleight_of_fist_charge_counter",
            name: "无影拳能量点数"
        },
        {
            modifier_classname: "modifier_imba_ember_spirit_sleight_of_fist_caster",
            name: "无影拳",
            description: "目标作用范围内所有敌人都将受到攻击。"
        },
        {
            modifier_classname: "modifier_imba_ember_spirit_flame_guard_spell_absorb",
            name: "烈火罩",
            description: "烈火罩最多吸收{MODIFIER_PROPERTY_TOOLTIP}点魔法伤害。"
        },
        {
            modifier_classname: "modifier_imba_ember_spirit_flame_guard_debuff",
            name: "烈火罩",
            description: "被烈火罩灼烧。"
        },
        {
            modifier_classname: "modifier_imba_ember_spirit_immolation_debuff",
            name: "献祭心",
            description: "被附近的灰烬之灵持续烧灼。"
        }
    ]
};