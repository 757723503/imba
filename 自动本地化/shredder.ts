import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_shredder_flamethrower",
            ability_specials: [
                {
                    ability_special: "damage_per_second",
                    text: "每秒伤害："
                },
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "width",
                    text: "宽度："
                },
                {
                    ability_special: "length",
                    text: "距离："
                },
                {
                    ability_special: "move_slow_pct",
                    text: "%移动速度减缓："
                },
                {
                    ability_special: "building_dmg_pct",
                    text: "%对建筑伤害："
                },
                {
                    ability_special: "debuff_linger_duration",
                    text: "负面效果粘滞时间："
                }
            ],
            name: "喷火装置",
            description: "伐木机向面朝的方向放出一道火焰。施加一个负面效果，造成每秒伤害，并减缓敌人的移动速度。对建筑造成的伤害有所减少。",
            notes: []
        },
        {
            ability_classname: "imba_shredder_whirling_death",
            ability_specials: [
                {
                    ability_special: "whirling_radius",
                    text: "作用范围："
                },
                {
                    ability_special: "whirling_damage",
                    text: "伤害："
                },
                {
                    ability_special: "tree_damage_scale",
                    text: "树倒额外伤害："
                },
                {
                    ability_special: "stat_loss_pct",
                    text: "%属性损失："
                },
                {
                    ability_special: "stat_loss_univ",
                    text: "%属性损失（全才）："
                },
                {
                    ability_special: "duration",
                    text: "属性降低持续时间："
                }
            ],
            name: "死亡旋风",
            description: "伐木机使极其锋利的刀刃飞旋，对敌人造成伤害并摧毁他周围的树木。如果敌方英雄受到了作用，他的主属性将在短时间内降低少许。如果该技能施放过程中砍倒了树木则会根据砍倒的数量造成额外伤害。",
            lore: "在瑞兹拉克被梦魇般的藤蔓和植物包围的情况下，他马上操起链锯进行自卫。",
            notes: []
        },
        {
            ability_classname: "imba_shredder_timber_chain",
            ability_specials: [
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "speed",
                    text: "锯链发射速度："
                },
                {
                    ability_special: "damage",
                    text: "伤害："
                },
                {
                    ability_special: "tree_splinter_damage",
                    text: "碎木伤害："
                },
                {
                    ability_special: "tree_splinter_slow_duration",
                    text: "碎木减速时间："
                },
                {
                    ability_special: "tree_splinter_slow_pct",
                    text: "%碎木减速："
                }
            ],
            name: "伐木锯链",
            description: "伐木机发射一条锯链，锯链会嵌入第一棵碰到的树里，然后将他拉向那棵树。行进过程中任何碰到的敌方单位都会受到伤害。",
            lore: "你可猜不到自己什么时候需要逃离邪恶的树苗。",
            notes: []
        },
        {
            ability_classname: "imba_shredder_reactive_armor",
            ability_specials: [
                {
                    ability_special: "bonus_armor",
                    text: "额外护甲："
                },
                {
                    ability_special: "bonus_hp_regen",
                    text: "额外生命恢复："
                },
                {
                    ability_special: "stack_limit",
                    text: "最大叠加次数："
                },
                {
                    ability_special: "stack_duration",
                    text: "单次效果持续时间："
                }
            ],
            name: "活性护甲",
            description: "伐木机每受到一次物理攻击，他的生命恢复和护甲值都会提升。英雄攻击提供{stacks_per_hero_attack}倍提升。",
            lore: "锯齿机器上的设备可以用强化防御来应对轻微的触碰。",
            scepter_description: "活性护甲可以主动施放，获得最大叠加次数和{initial_shield}点生命的护盾。护盾的恢复速度为每秒{shield_per_sec} + 伐木机{radius}范围内每名敌方英雄都会增加{shield_per_sec_per_enemy}，最高为{max_shield}。{duration}秒后伐木机会对{explosion_radius}范围内每个英雄造成伤害，数值为{base_explosion} + 护盾剩余生命，而且失去全部护盾。",
            notes: [
                "破坏会使技能无法获得新的叠加效果。",
                "破坏不会使现有叠加效果提供的加成失效。"
            ]
        },
        {
            ability_classname: "imba_shredder_chakram",
            ability_specials: [
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "pass_damage",
                    text: "飞行伤害："
                },
                {
                    ability_special: "damage_per_second",
                    text: "每秒造成伤害："
                },
                {
                    ability_special: "slow",
                    text: "%移动速度减缓："
                },
                {
                    ability_special: "mana_per_second",
                    text: "每秒消耗魔法："
                }
            ],
            name: "锯齿飞轮",
            description: "伐木机将主锯刃射向目标区域，锯刃会高速旋转，对周围的敌方单位造成伤害。在锯刃作用范围内的敌方单位每损失最大生命值的{slow_health_percentage}%，他们的移动速度都会进一步被降低。锯刃在发射和收回的过程中都将造成伤害并砍倒碰到的树木。在发射锯刃后伐木机将无法攻击，同时会持续消耗魔法。",
            lore: "消灭植物的终极武器。",
            scepter_description: "提升锯齿飞轮和锯齿飞轮（二）的每秒伤害。",
            notes: [
                "如果伐木机魔法不足或移动超过{break_distance}距离，锯齿飞轮将会飞回。"
            ]
        },
        {
            ability_classname: "imba_shredder_chakram_2",
            ability_specials: [
                {
                    ability_special: "pass_damage",
                    text: "飞行伤害："
                },
                {
                    ability_special: "damage_per_second",
                    text: "每秒伤害："
                }
            ],
            name: "锯齿飞轮（二）",
            description: "可以发射第二个独立的锯齿飞轮。锯齿飞轮和锯齿飞轮（二）的伤害减少{damage_penalty_tooltip}%。",
            lore: "我砍砍砍砍砍砍砍砍砍！",
            notes: [
                "如果伐木机魔法不足或移动超过{break_distance}距离，锯齿飞轮将会飞回。",
                "两个锯齿飞轮的减速效果不会叠加。"
            ]
        },
        {
            ability_classname: "imba_shredder_return_chakram",
            ability_specials: [],
            name: "收回锯齿飞轮",
            description: "让伐木机收回锯齿飞轮。",
            notes: []
        },
        {
            ability_classname: "imba_shredder_return_chakram_2",
            ability_specials: [],
            name: "收回锯齿飞轮（二）",
            description: "让伐木机收回锯齿飞轮。",
            notes: []
        },
        {
            ability_classname: "imba_shredder_twisted_chakram",
            ability_specials: [
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "damage",
                    text: "飞行伤害："
                }
            ],
            name: "锯齿轮旋",
            description: "发射第二个独立的锯齿飞轮，会沿着一道弧线飞出再返回至伐木机，对经过的敌人造成伤害和减速。在锯刃作用范围内的敌方单位每损失最大生命值的{slow_health_percentage}%，他们的移动速度都会进一步被减缓。",
            notes: []
        },
        {
            ability_classname: "imba_shredder_exposure_therapy",
            ability_specials: [],
            name: "暴露疗法",
            description: "伐木机只要摧毁一棵树就会获得{mana_restore}点魔法。",
            notes: []
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_timbersaw",
                    name: "+{s:bonus_tree_damage_scale} 死亡旋风树倒额外伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_timbersaw_2",
                    name: "+{s:bonus_stack_limit}/+{s:bonus_stacks_per_hero_attack} 活性护甲最大/英雄攻击叠加"
                },
                {
                    talent_classname: "special_bonus_unique_imba_timbersaw_3",
                    name: "+{s:bonus_AbilityCastRange}% 伐木锯链距离/弹道速度"
                },
                {
                    talent_classname: "special_bonus_unique_imba_timbersaw_4",
                    name: "+{s:bonus_slow}% 锯齿飞轮减速"
                },
                {
                    talent_classname: "special_bonus_unique_imba_timbersaw_5",
                    name: "+{s:bonus_stat_loss_pct}% 死亡旋风属性损失"
                },
                {
                    talent_classname: "special_bonus_unique_imba_timbersaw_reactive_armor_regen_per_stack",
                    name: "+{s:bonus_bonus_hp_regen} 活性护甲生命恢复"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "shredder_facets_imba_1",
            name: "碎木机",
            description: "伐木锯链会让树木朝伐木机的四面八方碎裂。",
            related_abilities: [
                {
                    ability_classname: "imba_shredder_timber_chain",
                    description: "伐木机与目标树木相撞时，树木会破碎，向四面八方放出{tree_splinter_count}片碎木，最远为{tree_splinter_distance}距离。如果碎木击中了敌人，将会造成伤害和短时间的减速。"
                }
            ],
            related_talents: []
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_shredder_whirling_death_debuff",
            name: "死亡旋风",
            description: "损失一部分主属性。"
        },
        {
            modifier_classname: "modifier_imba_shredder_reactive_armor",
            name: "活性护甲",
            description: "每次叠加均获得额外护甲和生命恢复。"
        },
        {
            modifier_classname: "modifier_imba_shredder_chakram_debuff",
            name: "锯齿飞轮",
            description: "受到锯齿飞轮作用，不断受到伤害并被减速。"
        },
        {
            modifier_classname: "modifier_imba_shredder_chakram_disarm",
            name: "锯齿飞轮的缴械状态",
            description: "在锯齿飞轮收回之前伐木机不能进行攻击。"
        },
        {
            modifier_classname: "modifier_imba_shredder_timber_chain",
            name: "伐木锯链",
            description: "对路径上敌人造成伤害。"
        },
        {
            modifier_classname: "modifier_imba_shredder_flamethrower",
            name: "喷火装置",
            description: "让东西烧起来。"
        },
        {
            modifier_classname: "modifier_imba_shredder_flamethrower_damage",
            name: "喷火装置",
            description: "移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%，每秒受到{MODIFIER_PROPERTY_TOOLTIP}点伤害。"
        },
        {
            modifier_classname: "modifier_imba_shredder_chakram_debuff_2",
            name: "锯齿飞轮",
            description: "受到锯齿飞轮作用，不断受到伤害并被减速。"
        },
        {
            modifier_classname: "modifier_imba_shredder_reactive_armor_bomb",
            name: "活性护甲炸弹",
            description: "吸收伤害中。在持续时间结束时会爆炸并对附近敌人造成伤害。"
        },
        {
            modifier_classname: "modifier_imba_shredder_timberchain_splinter_slow",
            name: "碎木机",
            description: "移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%."
        }
    ]
};