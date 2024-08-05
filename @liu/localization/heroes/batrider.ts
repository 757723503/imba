import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_batrider_sticky_napalm",
            ability_specials: [
                {
                    ability_special: "AbilityCooldown",
                    text: "冷却时间："
                },
                {
                    ability_special: "AbilityCastRange",
                    text: ""
                },
                {
                    ability_special: "damage",
                    text: "每次叠加伤害："
                },
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "movement_speed_pct",
                    text: "%移动速度减缓："
                },
                {
                    ability_special: "turn_rate_pct",
                    text: "%转身速度降低："
                },
                {
                    ability_special: "max_stacks",
                    text: ""
                },
                {
                    ability_special: "creep_damage_pct",
                    text: ""
                },
                {
                    ability_special: "shard_napalm_on_attack_chance_pct",
                    text: ""
                },
                {
                    ability_special: "application_damage",
                    text: "施加时伤害："
                },
                {
                    ability_special: "is_passive",
                    text: ""
                },
                {
                    ability_special: "base_applications_every_attack",
                    text: ""
                },
                {
                    ability_special: "bonus_applications_every_other_attack",
                    text: ""
                },
                {
                    ability_special: "attacks_apply_napalm_in_aoe",
                    text: ""
                },
                {
                    ability_special: "building_damage_pct",
                    text: "%对建筑伤害："
                }
            ],
            name: "粘性燃油",
            description: "用粘性油浸透一块区域，蝙蝠骑士的攻击和技能对敌人造成额外伤害，并降低他们的移动速度和转身速率。再次施法可以继续提高伤害，最多叠加{max_stacks}次。每次施放还会造成少量伤害。",
            lore: "蝙蝠骑士给他的对手泼燃油时，经常能听见他在喋喋不休。",
            shard_description: "每隔一次攻击会额外施加+{bonus_applications_every_other_attack}次粘性燃油的叠加效果。",
            notes: [
                "所有来自蝙蝠骑士的伤害均会加深，辉耀，淬毒之珠，影之灵龛和魂之灵瓮除外。",
                "粘性燃油无需转身即可施放。",
                "粘性燃油对非英雄单位造成{creep_damage_pct}%伤害。"
            ]
        },
        {
            ability_classname: "imba_batrider_smoldering_resin",
            ability_specials: [
                {
                    ability_special: "total_ticks",
                    text: ""
                },
                {
                    ability_special: "tick_rate",
                    text: ""
                },
                {
                    ability_special: "tick_attack_damage_pct",
                    text: ""
                }
            ],
            name: "闷烧树脂",
            description: "蝙蝠骑士的攻击会施加一个负面效果，每{tick_rate}秒造成{tick_attack_damage_pct}{攻击伤害，持续}total_ticks%秒。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_batrider_stoked",
            ability_specials: [
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "movement_speed_pct",
                    text: "%移动速度加成："
                },
                {
                    ability_special: "spell_amplification",
                    text: "%技能增强："
                }
            ],
            name: "火上浇油",
            description: "蝙蝠骑士使敌人发生位移后会获得移动速度和技能增强。",
            lore: "",
            notes: [
                "对一名敌方英雄使用的技能或物品施加了强制位移效果后，会获得移动速度和技能增强加成。不会叠加。"
            ]
        },
        {
            ability_classname: "imba_batrider_sticky_napalm_application_damage",
            ability_specials: [],
            name: "施加时伤害：",
            description: "",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_batrider_flamebreak",
            ability_specials: [
                {
                    ability_special: "damage_impact",
                    text: "冲击伤害："
                },
                {
                    ability_special: "damage_per_second",
                    text: "每秒伤害："
                },
                {
                    ability_special: "damage_duration",
                    text: "烧灼持续时间："
                },
                {
                    ability_special: "explosion_radius",
                    text: "作用范围："
                },
                {
                    ability_special: "collision_radius",
                    text: ""
                },
                {
                    ability_special: "stun_duration",
                    text: ""
                },
                {
                    ability_special: "speed",
                    text: ""
                },
                {
                    ability_special: "knockback_distance",
                    text: "击退距离："
                },
                {
                    ability_special: "knockback_height",
                    text: ""
                },
                {
                    ability_special: "knockback_duration",
                    text: ""
                },
                {
                    ability_special: "napalm_stacks",
                    text: ""
                },
                {
                    ability_special: "AbilityCharges",
                    text: ""
                },
                {
                    ability_special: "slow",
                    text: "%移动速度减缓："
                }
            ],
            name: "烈焰破击",
            description: "投掷一瓶爆炸性的混合物，到达目标地点时爆炸，击退区域内的敌人并造成减速和持续伤害。",
            lore: "蝙蝠骑士选择用燃烧弹作为武器。",
            shard_description: "烈焰破击拥有2点能量点数，并且击中时施加一次粘性燃油的效果。",
            notes: []
        },
        {
            ability_classname: "imba_batrider_firefly",
            ability_specials: [
                {
                    ability_special: "damage_per_second",
                    text: "每秒伤害："
                },
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "tick_interval",
                    text: ""
                },
                {
                    ability_special: "tree_radius",
                    text: ""
                },
                {
                    ability_special: "bonus_slow_resistance",
                    text: ""
                }
            ],
            name: "火焰飞行",
            description: "蝙蝠骑士飞向天空，从空中留下一道燃烧的尾迹。飞行时，燃烧尾迹会破坏树木，对经过的敌人造成伤害。",
            lore: "当敌人逃进荒狱丛林时，大部分人都不得不先砍开挡道的树丛。而蝙蝠骑士却选择直接将他的敌人，连同丛林一起破坏殆尽。",
            notes: [
                "火焰飞行期间蝙蝠骑士可以飞越任何单位，树木和不可通行的地形。",
                "如果蝙蝠骑士在持续时间结束时正好在不可通行的地形上方，那么他将会卡住。",
                "蝙蝠骑士死亡后火焰效果将继续存在。"
            ]
        },
        {
            ability_classname: "imba_batrider_flaming_lasso",
            ability_specials: [
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "drag_distance",
                    text: ""
                },
                {
                    ability_special: "break_distance",
                    text: ""
                },
                {
                    ability_special: "damage",
                    text: "总伤害："
                },
                {
                    ability_special: "grab_radius_scepter",
                    text: ""
                },
                {
                    ability_special: "AbilityCooldown",
                    text: ""
                },
                {
                    ability_special: "tick_rate",
                    text: ""
                }
            ],
            name: "燃烧枷锁",
            description: "用枷锁捆住一个敌人，在蝙蝠骑士的后面拖行。被拖行的单位不能移动、攻击或使用技能。传送或闪烁会打破枷锁。",
            lore: "就算蝙蝠骑士说免费，也几乎没人敢去骑他的蝙蝠。",
            scepter_description: "燃烧枷锁除了抓取目标外，还能抓取目标附近{grab_radius_scepter}范围内最近的友方英雄。第二目标将与第一目标相连。",
            notes: [
                "杀死目标或蝙蝠骑士都能在技能结束前打破枷锁。",
                "如果蝙蝠骑士在0.05秒内移动距离超过425码枷锁将会断裂。",
                "蝙蝠骑士在使用燃烧枷锁时不能攻击。"
            ]
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_batrider_1",
                    name: "+{s:bonus_duration}秒 火焰飞行持续时间"
                },
                {
                    talent_classname: "special_bonus_unique_imba_batrider_2",
                    name: "烈焰破击施加{s:bonus_napalm_stacks}层粘性燃油"
                },
                {
                    talent_classname: "special_bonus_unique_imba_batrider_3",
                    name: "+{s:bonus_knockback_distance} 烈焰破击击退距离"
                },
                {
                    talent_classname: "special_bonus_unique_imba_batrider_4",
                    name: "+{s:bonus_damage} 粘性燃油伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_batrider_5",
                    name: "{s:bonus_AbilityCharges} 烈焰破击能量点数"
                },
                {
                    talent_classname: "special_bonus_unique_imba_batrider_6",
                    name: "-{s:bonus_AbilityCooldown}秒 燃烧枷锁冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_batrider_7",
                    name: "+{s:bonus_radius} 粘性燃油作用范围"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "batrider_facets_imba_1",
            name: "",
            description: ""
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_batrider_sticky_napalm",
            name: "粘性燃油",
            description: "施法者造成的伤害提高{MODIFIER_PROPERTY_TOOLTIP}。\\n转身速率降低{MODIFIER_PROPERTY_TURN_RATE_PERCENTAGE}%。\\n移动速度降低{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。"
        },
        {
            modifier_classname: "modifier_imba_batrider_firefly",
            name: "火焰飞行",
            description: "正在飞行并在身后放下火热的破坏。"
        },
        {
            modifier_classname: "modifier_imba_batrider_flaming_lasso",
            name: "燃烧枷锁",
            description: "被蝙蝠骑士的枷锁抓住了"
        },
        {
            modifier_classname: "modifier_imba_batrider_flaming_lasso_self",
            name: "燃烧枷锁缴械作用",
            description: "枷锁生效时无法攻击。"
        },
        {
            modifier_classname: "modifier_imba_batrider_smoldering_resin_debuff",
            name: "闷烧树脂",
            description: "蝙蝠骑士的攻击会引起缓慢燃烧。"
        },
        {
            modifier_classname: "modifier_imba_batrider_displacement_buff",
            name: "火上浇油",
            description: "获得{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%移动速度加成，和{MODIFIER_PROPERTY_SPELL_AMPLIFY_PERCENTAGE}技能增强加成。"
        }
    ]
};
