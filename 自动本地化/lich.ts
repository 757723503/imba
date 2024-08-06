import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_lich_frost_nova",
            ability_specials: [
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "slow_movement_speed",
                    text: "%移动速度减缓："
                },
                {
                    ability_special: "slow_attack_speed_primary",
                    text: "攻击速度降低："
                },
                {
                    ability_special: "aoe_damage",
                    text: "范围伤害："
                }
            ],
            name: "寒霜爆发",
            description: "破坏性的寒霜在目标敌方单位身上爆发，造成范围伤害并降低范围内敌人的移动和攻击速度，持续{abilityduration}秒。主要目标所受伤害最高。",
            lore: "冰霜法师艾斯瑞安从没忘记哪怕最简单的冰系操控咒。",
            notes: []
        },
        {
            ability_classname: "imba_lich_dark_sorcery",
            ability_specials: [
                {
                    ability_special: "mana_drain",
                    text: "%魔法吸取："
                },
                {
                    ability_special: "attack_count",
                    text: "攻击次数："
                },
                {
                    ability_special: "attack_speed",
                    text: "攻击速度："
                },
                {
                    ability_special: "health_cost",
                    text: "%生命损失："
                }
            ],
            name: "不洁契约",
            description: "攻击速度提升，维持数次攻击，每次攻击吸取一定百分比魔法。施放需要消耗一定百分比当前生命值。最多持续{duration}秒，或攻击次数提前耗尽。",
            notes: []
        },
        {
            ability_classname: "imba_lich_death_charge",
            ability_specials: [],
            name: "死亡充能",
            description: "巫妖无法获得被动魔法恢复，但是巫妖附近{radius}范围内任何单位阵亡都会使他回复{mana_restore_pct_from_creep}%最大魔法值（英雄阵亡会回复{mana_restore_pct_from_creep}%最大魔法值）。物品和技能的瞬间魔法回复还是照常生效。",
            notes: []
        },
        {
            ability_classname: "imba_lich_sinister_gaze",
            ability_specials: [
                {
                    ability_special: "AbilityChannelTime",
                    text: "持续时间："
                },
                {
                    ability_special: "destination",
                    text: "%移动距离："
                },
                {
                    ability_special: "mana_drain",
                    text: "%每秒魔法吸取："
                }
            ],
            name: "阴邪凝视",
            description: "持续施法 - 使一个敌方单位着魔，缓慢走到巫妖与其之间的一点，并吸取其当前魔法值的一定百分比。<br><br>巫妖在持续施法时可以使用他的其他技能。<br><br>如果对非英雄单位施放，持续时间会增加至{creep_duration_multiplier}倍，并且每秒造成{creep_damage}点伤害。",
            lore: "当心寒意……",
            scepter_description: "阴邪凝视变为范围型技能，会作用于目标区域{aoe_scepter}范围内所有单位。",
            notes: []
        },
        {
            ability_classname: "imba_lich_frost_aura",
            ability_specials: [
                {
                    ability_special: "movespeed_slow",
                    text: "%移动速度减缓："
                },
                {
                    ability_special: "aura_radius",
                    text: "作用范围："
                },
                {
                    ability_special: "duration",
                    text: "持续时间："
                }
            ],
            name: "冰霜光环",
            description: "对友军生效的光环。使附近所有友军的攻击可以减缓敌人移动速度。",
            notes: []
        },
        {
            ability_classname: "imba_lich_frost_armor",
            ability_specials: [
                {
                    ability_special: "armor_bonus",
                    text: "友军护甲提升："
                },
                {
                    ability_special: "slow_duration",
                    text: "减速持续时间："
                },
                {
                    ability_special: "slow_movement_speed",
                    text: "%敌军移动速度减缓："
                },
                {
                    ability_special: "slow_attack_speed",
                    text: "敌军攻击速度降低："
                }
            ],
            name: "霜冻护甲",
            description: "为一个友方单位或建筑物制造一层寒冰护甲，增加护甲值并减速对其发动攻击的敌方单位。持续{abilityduration}秒。",
            lore: "原本是为了在中埋伏自卫时打造的，现在巫妖也能为他人施加这个强力的冰霜护体魔咒。",
            notes: [
                "如果开启自动施放，巫妖将对附近受到攻击的友方单位施放该技能。"
            ]
        },
        {
            ability_classname: "imba_lich_frost_shield",
            ability_specials: [
                {
                    ability_special: "damage_reduction",
                    text: "%伤害降低："
                },
                {
                    ability_special: "movement_slow",
                    text: "%移动速度减缓："
                },
                {
                    ability_special: "slow_duration",
                    text: "减速持续时间："
                },
                {
                    ability_special: "damage",
                    text: "伤害："
                },
                {
                    ability_special: "duration",
                    text: "魔盾持续时间："
                },
                {
                    ability_special: "bonus_duration_per_hero_killed",
                    text: "击杀英雄后额外持续时间："
                },
                {
                    ability_special: "bonus_duration_per_creep_killed",
                    text: "击杀小兵后额外持续时间："
                }
            ],
            name: "冰霜魔盾",
            description: "施加一个冰霜魔盾环绕目标，减少受到的普通攻击伤害。魔盾生效时，每{interval}秒都会对附近的敌方单位放出冰霜魔法，造成少量伤害和减速。",
            lore: "在人世的那些年最初学会的护身法术，而艾斯瑞安现在编织在周围的冰霜魔法随着时间愈发冰冷。",
            notes: [
                "免疫技能的敌人不会受到伤害或减速。",
                "冰霜魔盾可以对友方建筑施放。"
            ]
        },
        {
            ability_classname: "imba_lich_chain_frost",
            ability_specials: [
                {
                    ability_special: "damage",
                    text: "每次弹跳伤害："
                },
                {
                    ability_special: "bonus_jump_damage",
                    text: "伤害递增："
                },
                {
                    ability_special: "jump_range",
                    text: "弹跳距离："
                },
                {
                    ability_special: "slow_movement_speed",
                    text: "%移动速度减缓："
                },
                {
                    ability_special: "slow_attack_speed",
                    text: "攻击速度降低："
                },
                {
                    ability_special: "slow_duration",
                    text: "减速持续时间："
                },
                {
                    ability_special: "bonus_jumps_per_hero_killed",
                    text: "击杀英雄后额外弹跳次数："
                },
                {
                    ability_special: "bonus_jumps_per_creep_killed",
                    text: "击杀小兵后额外弹跳次数："
                },
                {
                    ability_special: "frostbound_duration",
                    text: "冰霜之缚持续时间："
                }
            ],
            name: "连环霜冻",
            description: "释放一个在敌人间弹跳至多{jumps}次的霜冻之球，每次击中敌人后都会造成伤害和减速效果。每次弹跳后会提升后续的伤害。",
            lore: "几乎所有人都认为是冰霜法术中的终极咒语，艾斯瑞安的霜死之珠能用恐惧击打那些胆敢站出来反对他的人们。",
            notes: [
                "连环霜冻无法被躲避。",
                "连环霜冻的移动速度为{projectile_speed}。",
                "连环霜冻不会弹跳到墓碑召唤的僵尸身上。"
            ]
        },
        {
            ability_classname: "imba_lich_variant_ice_rite",
            ability_specials: [],
            notes: []
        },
        {
            ability_classname: "imba_lich_innate_chain_frost_projectile_speed",
            ability_specials: [],
            notes: []
        },
        {
            ability_classname: "imba_lich_innate_chain_frost_bounces",
            ability_specials: [],
            notes: []
        },
        {
            ability_classname: "imba_lich_ice_spire",
            ability_specials: [
                {
                    ability_special: "bonus_movespeed",
                    text: "%移动速度减缓："
                },
                {
                    ability_special: "aura_radius",
                    text: "作用范围："
                },
                {
                    ability_special: "duration",
                    text: "持续时间："
                }
            ],
            name: "寒冰尖柱",
            description: "在目标地点创造一根寒冰尖柱，减缓范围内敌人的移动速度。可以承受5次英雄攻击或10次非英雄攻击，并且被摧毁时会在附近产生一个寒霜爆发的效果。<br><br>连环霜冻可以对尖柱施放，并且范围内没有其他敌人时可以弹跳至冰柱上。<br><br>巫妖可以对其施放冰霜魔盾。冰霜魔盾每次造成伤害时会治疗尖柱，使其回复1次英雄攻击次数。",
            notes: []
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_lich_1",
                    name: "冰霜魔盾提供+{s:bonus_health_regen} 生命恢复"
                },
                {
                    talent_classname: "special_bonus_unique_imba_lich_2",
                    name: "+{s:bonus_AbilityChannelTime}秒 阴邪凝视持续时间"
                },
                {
                    talent_classname: "special_bonus_unique_imba_lich_3",
                    name: "-{s:bonus_AbilityCooldown}秒 寒霜爆发冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_lich_4",
                    name: "+{s:bonus_duration}秒 冰霜魔盾持续时间"
                },
                {
                    talent_classname: "special_bonus_unique_imba_lich_5",
                    name: "连环霜冻无限弹跳"
                },
                {
                    talent_classname: "special_bonus_unique_imba_lich_6",
                    name: "+{s:bonus_radius} 寒霜爆发范围和伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_lich_7",
                    name: "死亡时放出连环霜冻"
                },
                {
                    talent_classname: "special_bonus_unique_imba_lich_8",
                    name: "+{s:bonus_damage_reduction}% 冰霜魔盾承伤降低"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "lich_facets_imba_1",
            name: "寒意渐增 | 冰霜之缚",
            description: "敌人被连环霜冻击杀，或者在冰霜魔盾作用下阵亡，相应技能的持续时间都会延长。 连环霜冻无法弹跳时会停留在上个目标身上，如果出现新目标可以再次弹跳。",
            related_abilities: [
                {
                    ability_classname: "imba_lich_frost_shield",
                    description: "每当敌人死于冰霜魔盾的效果下，技能的持续时间都会增加。"
                },
                {
                    ability_classname: "imba_lich_chain_frost",
                    description: "连环霜冻无法弹跳时会停留在上个目标身上，如果出现新目标可以再次弹跳。"
                }
            ],
            related_talents: []
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_lich_chainfrost_frostbound",
            name: "冰霜之缚",
            description: "连环霜冻会在又有目标进入范围后继续弹跳。"
        },
        {
            modifier_classname: "modifier_imba_lich_frostnova_slow",
            name: "寒霜爆发减速效果",
            description: "移动速度被减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%，攻击速度降低{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}"
        },
        {
            modifier_classname: "modifier_imba_lich_chainfrost_slow",
            name: "连环霜冻减速效果",
            description: "移动速度被减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%，攻击速度降低{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}"
        },
        {
            modifier_classname: "modifier_imba_lich_frostarmor_slow",
            name: "霜冻减速",
            description: "移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%，攻击速度降低{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}"
        },
        {
            modifier_classname: "modifier_imba_lich_frost_armor",
            name: "霜冻护甲",
            description: "提升{MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS}点护甲并且减速攻击的敌人。"
        },
        {
            modifier_classname: "modifier_imba_lich_attack_slow_debuff",
            name: "冻结减速",
            description: "移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%，攻击速度降低{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}。"
        },
        {
            modifier_classname: "modifier_imba_lich_frost_shield",
            name: "冰霜魔盾",
            description: "减少受到的攻击伤害。"
        },
        {
            modifier_classname: "modifier_imba_lich_frost_shield_slow",
            name: "冰霜魔盾",
            description: "移动速度被减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。"
        },
        {
            modifier_classname: "modifier_imba_lich_sinister_gaze",
            name: "阴邪凝视",
            description: "你对巫妖的阴邪凝视无能为力！"
        },
        {
            modifier_classname: "modifier_imba_lich_ice_spire",
            name: "寒冰尖柱",
            description: "减缓附近敌人的移动速度。"
        },
        {
            modifier_classname: "modifier_imba_lich_ice_spire_debuff",
            name: "寒冰尖柱",
            description: "移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。"
        },
        {
            modifier_classname: "modifier_imba_lich_chain_frost_ondeath",
            name: "死亡时放出连环霜冻",
            description: "死亡时会释放一个连环霜冻的冰球"
        }
    ]
};