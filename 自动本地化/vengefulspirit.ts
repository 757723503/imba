import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_vengefulspirit_magic_missile",
            ability_specials: [
                {
                    ability_special: "magic_missile_stun",
                    text: "眩晕持续时间："
                },
                {
                    ability_special: "magic_missile_damage",
                    text: "伤害："
                }
            ],
            name: "魔法箭",
            description: "向一个敌方单位射出魔法箭，眩晕并造成伤害。",
            lore: "魔法箭是天怒一族的简朴战技，现在也是仙德尔莎主要的复仇工具。",
            shard_description: "可以对敌人弹射一次，以英雄优先，弹射距离为主目标的{bounce_range_pct}%魔法箭施法距离内。",
            notes: []
        },
        {
            ability_classname: "imba_vengefulspirit_command_aura",
            ability_specials: [
                {
                    ability_special: "bonus_base_damage",
                    text: "%基础攻击力加成："
                },
                {
                    ability_special: "aura_radius",
                    text: "作用范围："
                }
            ],
            name: "复仇光环",
            description: "复仇之魂的存在提升了附近友方英雄的攻击力。",
            lore: "尽管盟友可能不会理解她对于复仇那无休止的热爱，但作战时他们还是会利用她的狂热。",
            scepter_description: "死亡时产生一个复仇之魂的强幻象，继承全额攻击力，承受100%%伤害，可以施放自己的所有技能。复仇之魂复活时若幻象依然存在，则自身会直接将其取代。幻象获得的经验将给予英雄。强幻象不会被相关技能秒杀。",
            notes: [
                "破坏会使攻击力光环失效。"
            ]
        },
        {
            ability_classname: "imba_vengefulspirit_wave_of_terror",
            ability_specials: [
                {
                    ability_special: "damage",
                    text: "伤害："
                },
                {
                    ability_special: "armor_reduction",
                    text: "护甲削弱："
                },
                {
                    ability_special: "attack_reduction",
                    text: "%攻击力降低："
                },
                {
                    ability_special: "vision_duration",
                    text: "视野持续时间："
                }
            ],
            name: "恐怖波动",
            description: "复仇之魂放出邪恶的嚎叫，削弱敌人的总攻击力和护甲，并打开前方经过路径的视野。",
            lore: "仙德尔莎那挥之不去的低语暗示着她的裁决将至。",
            notes: []
        },
        {
            ability_classname: "imba_vengefulspirit_nether_swap",
            ability_specials: [
                {
                    ability_special: "damage_reduction_duration",
                    text: "护盾持续时间："
                },
                {
                    ability_special: "damage",
                    text: "伤害/护盾："
                }
            ],
            name: "移形换位",
            description: "与一个目标英雄瞬间交换位置，不论敌我。移形换位会打断目标的持续施法。敌方英雄被交换后受到伤害。复仇之魂和被交换的友方英雄都会获得等同于造成伤害的护盾。",
            lore: "牺牲只是为了复仇付出的小小代价。",
            notes: [
                "对减益免疫单位有效。",
                "技能施放后复仇之魂和目标附近的树木将会被摧毁。",
                "移形换位能够打断持续施法。"
            ]
        },
        {
            ability_classname: "imba_vengefulspirit_soul_strike",
            ability_specials: [
                {
                    ability_special: "bat_tooltip",
                    text: "基础攻击间隔："
                }
            ],
            name: "灵魂打击",
            description: "复仇之魂的远程攻击具有近战攻击的行为。",
            notes: []
        },
        {
            ability_classname: "imba_vengefulspirit_retribution",
            ability_specials: [],
            name: "恶有恶报",
            description: "只要敌方英雄击杀了复仇之魂，他们会获得一个负面效果，直到下次阵亡，期间复仇之魂会对他们造成{bonus_damage}%额外伤害。",
            notes: []
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_vengeful_spirit_1",
                    name: ""
                },
                {
                    talent_classname: "special_bonus_unique_imba_vengeful_spirit_2",
                    name: ""
                },
                {
                    talent_classname: "special_bonus_unique_imba_vengeful_spirit_4",
                    name: ""
                },
                {
                    talent_classname: "special_bonus_unique_imba_vengeful_spirit_5",
                    name: ""
                },
                {
                    talent_classname: "special_bonus_unique_imba_vengeful_spirit_9",
                    name: ""
                },
                {
                    talent_classname: "special_bonus_unique_imba_vengeful_spirit_missile_castrange",
                    name: "+{s:bonus_AbilityCastRange} 魔法箭施法距离"
                },
                {
                    talent_classname: "special_bonus_unique_imba_vengeful_spirit_swap_damage",
                    name: "+{s:bonus_damage} 移形换位对敌伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_vengeful_spirit_wave_of_terror_steal",
                    name: "恐怖波动窃取{s:bonus_steal_pct}%降低的攻击力和护甲"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "vengefulspirit_facets_imba_1",
            name: "复仇之箭",
            description: "魔法箭造成额外伤害，敌人每击杀一个非英雄单位为{s:bonus_damage_per_lasthit}点额外伤害。",
            related_abilities: [
                {
                    ability_classname: "imba_vengefulspirit_magic_missile",
                    description: "魔法箭造成额外伤害，敌人每击杀一个非英雄单位为{damage_per_lasthit}点额外伤害。"
                }
            ],
            related_talents: []
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_vengefulspirit_retribution_tracker",
            name: "恶有恶报",
            description: "受到来自复仇之魂的伤害增加{MODIFIER_PROPERTY_TOOLTIP}%。"
        },
        {
            modifier_classname: "modifier_imba_vengefulspirit_wave_of_terror",
            name: "恐怖波动",
            description: "基础护甲降低{MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS}点。攻击力降低{MODIFIER_PROPERTY_DAMAGEOUTGOING_PERCENTAGE}%。"
        },
        {
            modifier_classname: "modifier_imba_vengefulspirit_command_aura_effect",
            name: "复仇光环",
            description: "提供+{MODIFIER_PROPERTY_BASEDAMAGEOUTGOING_PERCENTAGE}%基础攻击力。"
        },
        {
            modifier_classname: "modifier_imba_vengefulspirit_command_negative_aura_effect",
            name: "复仇光环",
            description: "攻击力降低{MODIFIER_PROPERTY_BASEDAMAGEOUTGOING_PERCENTAGE}%"
        },
        {
            modifier_classname: "modifier_imba_vengefulspirit_nether_swap_charge_counter",
            name: "移形换位能量点数"
        },
        {
            modifier_classname: "modifier_imba_vengefulspirit_wave_of_terror_fear",
            name: "移形换位恐惧效果",
            description: "被复仇之魂恐惧"
        },
        {
            modifier_classname: "modifier_imba_vengefulspirit_wave_of_terror_buff",
            name: "恐怖波动",
            description: "窃取了敌人的基础攻击力。"
        },
        {
            modifier_classname: "modifier_imba_vengefulspirit_nether_swap_damage_reduction",
            name: "移形换位",
            description: "吸收伤害中。"
        }
    ]
};