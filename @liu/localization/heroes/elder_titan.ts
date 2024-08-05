import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_elder_titan_echo_stomp",
            ability_specials: [
                {
                    ability_special: "cast_time",
                    text: "吟唱时间："
                },
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "sleep_duration",
                    text: "昏迷时间："
                },
                {
                    ability_special: "stomp_damage",
                    text: "践踏伤害："
                },
                {
                    ability_special: "initial_stun_duration",
                    text: ""
                },
                {
                    ability_special: "animation_rate",
                    text: ""
                },
                {
                    ability_special: "wake_damage_limit",
                    text: "唤醒伤害临界值："
                },
                {
                    ability_special: "AbilityCooldown",
                    text: "冷却时间："
                }
            ],
            name: "回音重踏",
            description: "持续施法 - 上古巨神与他的灵体游魂一起践踏地面，对敌方单位造成伤害并使他们在原地昏迷。上古巨神造成物理伤害，灵体游魂造成魔法伤害。",
            lore: "创世之力依然在巨神的重踏下回响。",
            shard_description: "减少冷却时间。回音重踏可以设为多样施法状态，使上古巨神完成重踏后会取代灵体游魂。",
            notes: [
                "若同时处于灵体游魂和上古巨神的回音重踏作用范围内将受到两次伤害。"
            ]
        },
        {
            ability_classname: "imba_elder_titan_echo_stomp_spirit",
            ability_specials: [
                {
                    ability_special: "cast_time",
                    text: "吟唱时间："
                },
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "sleep_duration",
                    text: "昏迷时间："
                },
                {
                    ability_special: "stomp_damage",
                    text: "践踏伤害："
                },
                {
                    ability_special: "wake_damage_limit",
                    text: "唤醒伤害量："
                },
                {
                    ability_special: "animation_rate",
                    text: ""
                },
                {
                    ability_special: "AbilityCooldown",
                    text: ""
                }
            ],
            name: "回音重踏",
            description: "上古巨神与他的灵体游魂一起践踏地面，对敌方单位造成伤害并使他们在原地昏迷。上古巨神造成物理伤害，灵体游魂造成魔法伤害。昏迷的敌人受到伤害会被惊醒。",
            lore: "创世之力依然在巨神的重踏下回响。",
            notes: []
        },
        {
            ability_classname: "imba_elder_titan_ancestral_spirit",
            ability_specials: [
                {
                    ability_special: "AbilityCastRange",
                    text: ""
                },
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "pass_damage",
                    text: "伤害："
                },
                {
                    ability_special: "spirit_duration",
                    text: "灵体持续时间："
                },
                {
                    ability_special: "buff_duration",
                    text: "加成持续时间："
                },
                {
                    ability_special: "speed",
                    text: ""
                },
                {
                    ability_special: "controllable",
                    text: ""
                },
                {
                    ability_special: "move_pct_creeps",
                    text: "%移动速度加成（非英雄）："
                },
                {
                    ability_special: "move_pct_heroes",
                    text: "%移动速度加成（英雄）："
                },
                {
                    ability_special: "damage_creeps",
                    text: "攻击力加成（非英雄）："
                },
                {
                    ability_special: "damage_heroes",
                    text: "攻击力加成（英雄）："
                },
                {
                    ability_special: "armor_creeps",
                    text: "护甲加成（非英雄）："
                },
                {
                    ability_special: "armor_heroes",
                    text: "护甲加成（英雄）："
                },
                {
                    ability_special: "move_pct_cap",
                    text: ""
                },
                {
                    ability_special: "scepter_magic_immune_per_hero",
                    text: ""
                }
            ],
            name: "灵体游魂",
            description: "上古巨神放出他的灵体游魂，灵魂对任何经过的单位都会造成伤害。当它与巨神合体时，它每伤害过一个单位都会给予若干攻击力、护甲和移动速度加成。\\n\\n灵体游魂拥有回音重踏，回归和自然秩序三个技能。",
            lore: "就像四大基本法则，上古巨神在所有位面同时存在，可以在需要协助的时候将其他位面的自己拖入。",
            scepter_description: "游魂每碰到一名英雄就能使上古巨神在游魂回归后获得{scepter_magic_immune_per_hero}秒减益免疫状态和50%%魔法抗性提升。",
            notes: []
        },
        {
            ability_classname: "imba_elder_titan_return_spirit",
            ability_specials: [],
            name: "灵体游魂回归",
            description: "使灵体游魂回归至上古巨神。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_elder_titan_move_spirit",
            ability_specials: [],
            name: "移动灵体游魂",
            description: "将灵体游魂向目标地点移动。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_elder_titan_natural_order",
            ability_specials: [
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "armor_reduction_pct",
                    text: "%基础护甲减少："
                },
                {
                    ability_special: "magic_resistance_pct",
                    text: "%基础魔抗减少："
                },
                {
                    ability_special: "max_stacks",
                    text: ""
                },
                {
                    ability_special: "magic_resistance_per_tick",
                    text: ""
                },
                {
                    ability_special: "armor_per_tick",
                    text: ""
                },
                {
                    ability_special: "tick_rate",
                    text: ""
                }
            ],
            name: "自然秩序",
            description: "使所有元素降低至基础水平，移除附近敌方单位的基础物理护甲和魔法抗性。护甲降低效果以英雄为中心，魔法抗性降低效果以灵体游魂为中心。",
            lore: "上古巨神又让创世之初重现。",
            notes: [
                "没有施放灵体游魂时，护甲和魔法抗性降低效果均以上古巨神为中心。"
            ]
        },
        {
            ability_classname: "imba_elder_titan_natural_order_spirit",
            ability_specials: [
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "armor_reduction_pct",
                    text: "%基础护甲降低："
                },
                {
                    ability_special: "magic_resistance_pct",
                    text: "%基础魔法抗性降低："
                },
                {
                    ability_special: "max_stacks",
                    text: ""
                },
                {
                    ability_special: "magic_resistance_per_tick",
                    text: ""
                },
                {
                    ability_special: "armor_per_tick",
                    text: ""
                },
                {
                    ability_special: "tick_rate",
                    text: ""
                }
            ],
            name: "自然秩序",
            description: "使所有元素降低至基础水平，移除附近敌方单位的基础物理护甲和魔法抗性。护甲降低效果以英雄为中心，魔法抗性降低效果以灵体游魂为中心。",
            lore: "上古巨神又让创世之初重现。",
            notes: [
                "没有施放灵体游魂时，护甲和魔法抗性降低效果均以上古巨神为中心。",
                "破坏会使护甲降低光环失效。"
            ]
        },
        {
            ability_classname: "imba_elder_titan_earth_splitter",
            ability_specials: [
                {
                    ability_special: "AbilityCooldown",
                    text: ""
                },
                {
                    ability_special: "crack_time",
                    text: "裂地延迟："
                },
                {
                    ability_special: "crack_width",
                    text: "裂纹宽度："
                },
                {
                    ability_special: "crack_distance",
                    text: "裂地长度："
                },
                {
                    ability_special: "slow_pct",
                    text: "%移动速度减缓："
                },
                {
                    ability_special: "slow_duration",
                    text: "减速持续时间："
                },
                {
                    ability_special: "speed",
                    text: ""
                },
                {
                    ability_special: "damage_pct",
                    text: "%最大生命值伤害："
                },
                {
                    ability_special: "vision_width",
                    text: ""
                },
                {
                    ability_special: "vision_interval",
                    text: ""
                },
                {
                    ability_special: "vision_duration",
                    text: ""
                },
                {
                    ability_special: "vision_step",
                    text: ""
                },
                {
                    ability_special: "total_steps",
                    text: ""
                },
                {
                    ability_special: "slow_duration_scepter",
                    text: ""
                }
            ],
            name: "裂地沟壑",
            description: "上古巨神向前方放出一道不平坦的裂纹。3秒后裂纹塌陷，范围内的单位将被减速，并受到基于他们自身生命最大值的伤害。其中一半伤害为魔法伤害，另一半为物理伤害。",
            lore: "巨神创造之世，他亲手将其撕裂。",
            notes: []
        },
        {
            ability_classname: "imba_elder_titan_momentum",
            ability_specials: [
                {
                    ability_special: "attack_speed_from_movespeed",
                    text: "%移动速度转为攻击速度："
                },
                {
                    ability_special: "attack_speed_penalty",
                    text: "攻击速度惩罚："
                }
            ],
            name: "动量",
            description: "上古巨神的基础攻击速度减少，但是移动速度也会提供攻击速度。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_elder_titan_tip_the_scales",
            ability_specials: [
                {
                    ability_special: "damage_bonus",
                    text: ""
                }
            ],
            name: "局势失衡",
            description: "受到防御符文或者肉山的旗帜作用的友方小兵和建筑造成{damage_bonus}%额外伤害。",
            lore: "",
            notes: []
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_elder_titan",
                    name: "+{s:bonus_damage_heroes} 灵体游魂触碰英雄攻击力"
                },
                {
                    talent_classname: "special_bonus_unique_imba_elder_titan_bonus_spirit_speed",
                    name: "+{s:bonus_move_pct_heroes}% 灵体游魂触碰英雄移速"
                },
                {
                    talent_classname: "special_bonus_unique_imba_elder_titan_2",
                    name: "+{s:bonus_stomp_damage} 回音重踏伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_elder_titan_3",
                    name: "-{s:bonus_AbilityCooldown}秒 裂地沟壑冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_elder_titan_4",
                    name: "+{s:bonus_wake_damage_limit} 回音重踏唤醒伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_elder_titan_5",
                    name: "+{s:bonus_radius} 自然秩序范围"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "elder_titan_facets_imba_1",
            name: "",
            description: ""
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_elder_titan_momentum",
            name: "动量",
            description: "获得{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}攻击速度。"
        },
        {
            modifier_classname: "modifier_imba_elder_titan_echo_stomp",
            name: "回音重踏",
            description: "受到上古巨神的践踏进入昏迷。"
        },
        {
            modifier_classname: "modifier_imba_elder_titan_echo_stomp_magic_immune",
            name: "灵体游魂"
        },
        {
            modifier_classname: "modifier_imba_elder_titan_echo_stomp_magic_immune_description",
            name: "提供减益免疫"
        },
        {
            modifier_classname: "modifier_imba_elder_titan_ancestral_spirit",
            name: "灵体游魂"
        },
        {
            modifier_classname: "modifier_imba_elder_titan_ancestral_spirit_buff",
            name: "灵体巨神加成",
            description: "获得{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%移动速度加成，{MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS}点护甲加成和{MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE}点攻击力加成。"
        },
        {
            modifier_classname: "modifier_imba_elder_titan_natural_order",
            name: "自然秩序",
            description: "基础魔法抗性和基础护甲减少{MODIFIER_PROPERTY_TOOLTIP}%。"
        },
        {
            modifier_classname: "modifier_imba_elder_titan_natural_order_spirit",
            name: "自然秩序",
            description: "基础魔法抗性和护甲降低{MODIFIER_PROPERTY_TOOLTIP}%。"
        },
        {
            modifier_classname: "modifier_imba_elder_titan_natural_order_armor",
            name: "自然秩序护甲降低",
            description: "基础护甲降低{MODIFIER_PROPERTY_TOOLTIP}%。"
        },
        {
            modifier_classname: "modifier_imba_elder_titan_natural_order_magic_resistance",
            name: "自然秩序魔法抗性降低",
            description: "基础魔法抗性降低{MODIFIER_PROPERTY_TOOLTIP}%。"
        },
        {
            modifier_classname: "modifier_imba_elder_titan_natural_order_armor_facet_elder_titan_deconstruction",
            name: "基础护甲降低{MODIFIER_PROPERTY_TOOLTIP}%，并且进一步降低{MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS}点护甲。"
        },
        {
            modifier_classname: "modifier_imba_elder_titan_natural_order_magic_resistance_facet_elder_titan_deconstruction",
            name: "降低{MODIFIER_PROPERTY_TOOLTIP}%基础魔法抗性，并且进一步降低{MODIFIER_PROPERTY_MAGICAL_RESISTANCE_BONUS}%魔法抗性。"
        },
        {
            modifier_classname: "modifier_imba_elder_titan_tip_the_scales_effect",
            name: "局势失衡",
            description: "局势已失衡 - 造成的伤害增加{MODIFIER_PROPERTY_DAMAGEOUTGOING_PERCENTAGE}%。"
        },
        {
            modifier_classname: "modifier_imba_elder_titan_earth_splitter",
            name: "裂地沟壑",
            description: "减速{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。"
        },
        {
            modifier_classname: "modifier_imba_elder_titan_earth_splitter_scepter",
            name: "裂地沟壑",
            description: "移速被减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%，并被缴械。"
        }
    ]
};