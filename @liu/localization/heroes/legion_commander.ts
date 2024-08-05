import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_legion_commander_overwhelming_odds",
            ability_specials: [
                {
                    ability_special: "damage",
                    text: "基础伤害："
                },
                {
                    ability_special: "damage_per_unit",
                    text: "每个小兵提供伤害："
                },
                {
                    ability_special: "damage_per_hero",
                    text: "每个英雄提供伤害："
                },
                {
                    ability_special: "bonus_attack_speed_creeps",
                    text: ""
                },
                {
                    ability_special: "bonus_attack_speed",
                    text: "攻击速度加成："
                },
                {
                    ability_special: "duration",
                    text: "攻速加成持续时间："
                },
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "armor_per_creep",
                    text: ""
                },
                {
                    ability_special: "armor_per_hero",
                    text: ""
                },
                {
                    ability_special: "shard_duration",
                    text: ""
                },
                {
                    ability_special: "AbilityCooldown",
                    text: ""
                },
                {
                    ability_special: "duel_radius_bonus",
                    text: "决斗时作用范围加成："
                },
                {
                    ability_special: "shield_per_damage_pct",
                    text: "%伤害转为护盾："
                },
                {
                    ability_special: "shield_duration",
                    text: "护盾持续时间："
                }
            ],
            name: "压倒性优势",
            description: "用敌人的数量反制他们，造成伤害并提升军团指挥官的攻击速度。根据作用单位和英雄的数量决定造成的伤害数值。对幻象和召唤单位额外造成相当于其当前生命值一定百分比的伤害。可以在决斗期间施放。",
            lore: "石堂城的弓箭手就等特蕾丝汀一声令下。",
            shard_description: "决斗期间施放会获得{duel_radius_bonus}作用范围加成。",
            notes: []
        },
        {
            ability_classname: "imba_legion_commander_press_the_attack",
            ability_specials: [
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "move_speed",
                    text: "%移动速度加成："
                },
                {
                    ability_special: "hp_regen",
                    text: "生命恢复："
                },
                {
                    ability_special: "radius",
                    text: ""
                }
            ],
            name: "强攻",
            description: "移除友方目标单位的负面效果和控制技能，并提升其移动速度和生命恢复，持续一定时间。\\n\\n驱散类型：强驱散",
            lore: "古铜军团的重振号角可以鼓舞人心。",
            shard_description: "强攻的目标现在获得减益免疫状态，持续1.75秒。冷却时间减少2秒。",
            notes: []
        },
        {
            ability_classname: "imba_legion_commander_moment_of_courage",
            ability_specials: [
                {
                    ability_special: "trigger_chance",
                    text: "%反击概率："
                },
                {
                    ability_special: "buff_duration",
                    text: ""
                },
                {
                    ability_special: "hp_leech_percent",
                    text: "%吸血："
                }
            ],
            name: "勇气之霎",
            description: "每当受到攻击，军团指挥官都有几率立即作出反击，而且此次攻击具有吸血效果。",
            lore: "特蕾丝汀知道，敌人出招最狠的时候也是他们最脆弱的时候。",
            notes: []
        },
        {
            ability_classname: "imba_legion_commander_duel",
            ability_specials: [
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "AbilityCastRange",
                    text: ""
                },
                {
                    ability_special: "reward_damage",
                    text: "攻击力奖励："
                },
                {
                    ability_special: "assist_reward_damage",
                    text: "援斗攻击力加成："
                },
                {
                    ability_special: "debuff_immunity",
                    text: ""
                },
                {
                    ability_special: "damage_reduction_pct",
                    text: "%承受伤害降低："
                },
                {
                    ability_special: "AbilityCooldown",
                    text: "冷却时间："
                },
                {
                    ability_special: "shard_duel_damage_bonus",
                    text: ""
                }
            ],
            name: "决斗",
            description: "军团指挥官强制与目标敌方英雄进行决斗，持续短暂的数秒。决斗开始后双方英雄只能进行物理攻击，不能使用任何物品和技能，不过期间军团指挥官可以施放压倒性优势。如果有英雄在决斗期间死亡，赢得决斗的英雄将永久获得额外攻击力。",
            lore: "与石堂城的士兵进行单挑是令人无法抗拒的挑战。",
            shard_description: "每次决斗获胜的攻击力提升{shard_duel_damage_bonus}点。具有追溯效果。",
            scepter_description: "提升决斗的持续时间。军团指挥官在决斗期间为减益免疫状态。",
            notes: [
                "如果双方距离超过2000，决斗也会结束。",
                "决斗获胜后自动对自身施放强攻。"
            ]
        },
        {
            ability_classname: "imba_legion_commander_outfight_them",
            ability_specials: [
                {
                    ability_special: "heal_bonus_pct",
                    text: ""
                },
                {
                    ability_special: "duration",
                    text: ""
                }
            ],
            name: "迎难而战！",
            description: "对等级高于自己的敌方英雄发动攻击可以使自己的生命恢复、吸血和治疗效果提升{heal_bonus_pct}{，持续}duration%秒。",
            lore: "",
            notes: [
                "对满级的英雄发动攻击时总是会施加效果。"
            ]
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_legion_commander_3",
                    name: "+{s:bonus_trigger_chance}% 勇气之霎触发几率"
                },
                {
                    talent_classname: "special_bonus_unique_imba_legion_commander_4",
                    name: "+{s:bonus_damage_per_hero} 压倒性优势英雄提供伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_legion_commander_5",
                    name: "{s:bonus_radius} 范围型强攻"
                },
                {
                    talent_classname: "special_bonus_unique_imba_legion_commander_6",
                    name: "+{s:bonus_hp_regen} 强攻生命恢复"
                },
                {
                    talent_classname: "special_bonus_unique_imba_legion_commander_7",
                    name: "+{s:bonus_hp_leech_percent}% 勇气之霎吸血"
                },
                {
                    talent_classname: "special_bonus_unique_imba_legion_commander_8",
                    name: "强攻提供{s:value}秒 减益免疫",
                    description: "另外提升50%%魔法抗性"
                },
                {
                    talent_classname: "special_bonus_unique_imba_legion_commander_9",
                    name: "-{s:bonus_AbilityCooldown}秒 压倒性优势冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_legion_commander_pta_movespeed",
                    name: "+{s:bonus_move_speed}% 强攻移动速度"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "legion_commander_facets_imba_1",
            name: "",
            description: ""
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_legion_commander_overwhelming_odds",
            name: "压倒性优势",
            description: "获得{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}攻击速度。"
        },
        {
            modifier_classname: "modifier_imba_legion_commander_press_the_attack",
            name: "强攻",
            description: "移动速度提升{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%，生命恢复提升{MODIFIER_PROPERTY_HEALTH_REGEN_CONSTANT}点/秒。"
        },
        {
            modifier_classname: "modifier_imba_legion_commander_press_the_attack_immunity",
            name: "强攻",
            description: "减益免疫。"
        },
        {
            modifier_classname: "modifier_imba_legion_commander_duel",
            name: "决斗",
            description: "决斗中，直到双方有人死亡或效果结束。"
        },
        {
            modifier_classname: "modifier_imba_legion_commander_duel_damage_boost",
            name: "决斗获胜加成攻击力",
            description: "每次决斗胜利都将获得永久攻击力加成"
        },
        {
            modifier_classname: "modifier_imba_legion_commander_moment_of_courage_lifesteal",
            name: "勇气之霎",
            description: "下一次攻击的攻击速度将达到极限。"
        },
        {
            modifier_classname: "modifier_imba_legion_commander_overwhelming_odds_shield",
            name: "石堂城甲胄",
            description: "压倒性优势提供全伤害护盾。"
        },
        {
            modifier_classname: "modifier_imba_legion_commander_outfight_them_buff",
            name: "迎难而战！",
            description: "正在与强敌作战！生命恢复、吸血和受到的治疗提升{MODIFIER_PROPERTY_HP_REGEN_AMPLIFY_PERCENTAGE}%。"
        }
    ]
};