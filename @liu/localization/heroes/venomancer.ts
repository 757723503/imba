import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_venomancer_area_poison",
            ability_specials: [
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "radius",
                    text: "作用范围："
                }
            ],
            name: "剧毒之威",
            description: "在目标地点制造一个{radius}作用范围的毒池，造成剧毒新星的伤害效果并减缓20%%移动速度。敌人在该区域内阵亡时将产生一个瘟疫守卫。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_venomancer_venomous_gale",
            ability_specials: [
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "strike_damage",
                    text: "初始伤害："
                },
                {
                    ability_special: "tick_damage",
                    text: "每次伤害："
                },
                {
                    ability_special: "tick_interval",
                    text: ""
                },
                {
                    ability_special: "movement_slow",
                    text: "%移动速度减缓："
                },
                {
                    ability_special: "radius",
                    text: ""
                },
                {
                    ability_special: "speed",
                    text: ""
                },
                {
                    ability_special: "create_wards",
                    text: ""
                },
                {
                    ability_special: "AbilityCooldown",
                    text: ""
                },
                {
                    ability_special: "explosion_damage",
                    text: ""
                },
                {
                    ability_special: "explosion_stun_duration",
                    text: ""
                }
            ],
            name: "瘴气",
            description: "沿直线射出一个毒液球，碰到的敌人受到初始伤害和持续伤害，并受到减速效果影响。瘴气在持续时间内每3秒造成一次持续伤害。",
            lore: "一种由基迪岛丛林里搜集的各种毒针、毒液和毒素混合而成的药剂，几乎没有人能在沾到它后存活下来。",
            shard_description: "如果瘴气被任意方式驱散，目标都将受到{explosion_damage}点伤害并被眩晕{explosion_stun_duration}秒。",
            notes: [
                "瘴气可以致死。",
                "技能持续时间内每{tick_interval}秒造成一次伤害。",
                "初始减速效果为{movement_slow}%，减速效果将逐渐降低。"
            ]
        },
        {
            ability_classname: "imba_venomancer_poison_sting",
            ability_specials: [
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "damage",
                    text: "每秒伤害："
                },
                {
                    ability_special: "movement_speed",
                    text: "%移动速度减缓："
                },
                {
                    ability_special: "hp_regen_reduction",
                    text: ""
                }
            ],
            name: "毒刺",
            description: "在剧毒术士的普通攻击中加入毒性伤害，可以减缓敌人的移动速度。",
            lore: "造成他变异的生物身上的麻痹毒刺，现在属于剧毒术士了。",
            notes: [
                "毒刺的伤害可以致死。",
                "毒刺造成的持续性伤害不会打断物品的回复效果，也不能使闪烁匕首进行冷却状态。"
            ]
        },
        {
            ability_classname: "imba_venomancer_plague_ward",
            ability_specials: [
                {
                    ability_special: "AbilityCooldown",
                    text: ""
                },
                {
                    ability_special: "can_target",
                    text: ""
                },
                {
                    ability_special: "gold_bounty_pct",
                    text: ""
                },
                {
                    ability_special: "max_charges",
                    text: ""
                },
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "ward_multiplier",
                    text: ""
                },
                {
                    ability_special: "ward_model_scale",
                    text: ""
                },
                {
                    ability_special: "ward_hp_tooltip",
                    text: "守卫生命值："
                },
                {
                    ability_special: "ward_damage_tooltip",
                    text: "守卫攻击力："
                },
                {
                    ability_special: "threshold",
                    text: "附着守卫生命值："
                },
                {
                    ability_special: "threshold_max_hp_pct",
                    text: "%来自携带者的守卫生命值："
                }
            ],
            name: "瘟疫守卫",
            description: "召唤一个瘟疫守卫来攻击敌方单位和建筑。守卫对魔法免疫。守卫拥有毒刺攻击，效果与毒刺技能的当前等级相同，造成50%的原技能伤害。",
            lore: "他通过将早先的草药学天赋，和后天获得的毒素专精混合起来，创造出一个活体化瘟疫。",
            notes: []
        },
        {
            ability_classname: "imba_venomancer_noxious_plague",
            ability_specials: [
                {
                    ability_special: "debuff_duration",
                    text: "持续时间："
                },
                {
                    ability_special: "impact_damage",
                    text: "初始伤害："
                },
                {
                    ability_special: "health_damage",
                    text: "%最大生命值伤害："
                },
                {
                    ability_special: "debuff_radius",
                    text: "负面状态作用范围："
                },
                {
                    ability_special: "movement_slow_max",
                    text: "%最大减速："
                },
                {
                    ability_special: "attack_slow",
                    text: ""
                },
                {
                    ability_special: "spread_count",
                    text: ""
                },
                {
                    ability_special: "impact_damage_reduce",
                    text: ""
                },
                {
                    ability_special: "projectile_speed",
                    text: "弹道速度："
                }
            ],
            name: "恶性瘟疫",
            description: "使一名敌人感染致命的瘟疫，造成初始爆发伤害和基于最大生命值的额外持续伤害。瘟疫会减缓目标和附近敌人的移动速度，取决于他们与目标之间的距离。目标阵亡或负面状态消失时，附近所有敌人都会感染不可再次传播的瘟疫。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_venomancer_poison_nova",
            ability_specials: [
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "start_radius",
                    text: ""
                },
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "damage",
                    text: "%最大生命值伤害："
                },
                {
                    ability_special: "magic_resist",
                    text: "%魔法抗性降低："
                },
                {
                    ability_special: "speed",
                    text: "行进速度："
                },
                {
                    ability_special: "trigger_cd",
                    text: ""
                }
            ],
            name: "剧毒新星",
            description: "每当剧毒术士或瘴气效果下的敌方英雄阵亡就会爆出一个剧毒之环。被剧毒击中的敌人会持续受到不致死的魔法伤害，并且魔法抗性降低。这个效果每{trigger_cd}秒触发一次，无法被刷新。",
            lore: "浓酸丛林中的生物通常会对攻击者释放毒性瘴气来保命；而剧毒术士却将这种瘟疫扩散出基迪岛。",
            notes: []
        },
        {
            ability_classname: "imba_venomancer_latent_poison",
            ability_specials: [
                {
                    ability_special: "duration_damage",
                    text: "每秒伤害："
                },
                {
                    ability_special: "movement_slow",
                    text: "%移动速度减缓："
                },
                {
                    ability_special: "projectile_speed",
                    text: ""
                },
                {
                    ability_special: "damage_interval",
                    text: ""
                },
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "explosion_damage",
                    text: "驱散伤害："
                },
                {
                    ability_special: "explosion_stun_duration",
                    text: "驱散眩晕时间："
                }
            ],
            name: "蛰毒",
            description: "对目标施加一个弱毒素，造成小幅减速和伤害。如果该毒素被任意方式驱散，目标都将受到高额伤害并被眩晕。",
            lore: "随着剧毒术士的本源得到稳固，基迪岛上最为骇人的毒物露出真面目也只是时间问题。",
            notes: []
        },
        {
            ability_classname: "imba_venomancer_sepsis",
            ability_specials: [
                {
                    ability_special: "bonus_dmg_per_debuff_pct",
                    text: "%每个负面效果基础伤害："
                },
                {
                    ability_special: "apply_from_ward_attacks",
                    text: ""
                }
            ],
            name: "脓毒休克",
            description: "剧毒术士的攻击会根据目标身上拥有的负面效果数量造成额外伤害。额外伤害为魔法伤害。只会计算来自剧毒术士或他的瘟疫守卫的负面效果。",
            lore: "",
            notes: [
                "破坏只会使剧毒术士攻击的额外伤害失效。"
            ]
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_venomancer",
                    name: ""
                },
                {
                    talent_classname: "special_bonus_unique_imba_venomancer_2",
                    name: ""
                },
                {
                    talent_classname: "special_bonus_unique_imba_venomancer_3",
                    name: ""
                },
                {
                    talent_classname: "special_bonus_unique_imba_venomancer_4",
                    name: ""
                },
                {
                    talent_classname: "special_bonus_unique_imba_venomancer_5",
                    name: ""
                },
                {
                    talent_classname: "special_bonus_unique_imba_venomancer_8",
                    name: ""
                },
                {
                    talent_classname: "special_bonus_unique_imba_venomancer_poisonsting_regen_reduction",
                    name: "毒刺降低{s:bonus_hp_regen_reduction}% 生命恢复"
                },
                {
                    talent_classname: "special_bonus_unique_imba_venomancer_gale_plagueward",
                    name: "瘴气产生瘟疫守卫",
                    description: "瘴气击中敌方英雄时在其身旁召唤{s:bonus_create_wards}个瘟疫守卫。"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "venomancer_facets_imba_1",
            name: "",
            description: ""
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_venomancer_latent_poison",
            name: "蛰毒",
            description: "如果这个毒素被任意方式驱散，目标都将受到大量伤害，并被眩晕。"
        },
        {
            modifier_classname: "modifier_imba_venomancer_venomous_gale",
            name: "瘴气",
            description: "被减速，每次将受到{MODIFIER_PROPERTY_TOOLTIP}点伤害。"
        },
        {
            modifier_classname: "modifier_imba_venomancer_poison_sting",
            name: "毒刺",
            description: "移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%，每次受到{MODIFIER_PROPERTY_TOOLTIP}点伤害。"
        },
        {
            modifier_classname: "modifier_imba_venomancer_poison_sting_fake",
            name: "毒刺",
            description: "移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%，每秒受到{MODIFIER_PROPERTY_TOOLTIP}点伤害。"
        },
        {
            modifier_classname: "modifier_imba_venomancer_poison_sting_ward",
            name: "毒刺",
            description: "移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%，每秒受到{MODIFIER_PROPERTY_TOOLTIP}点伤害。"
        },
        {
            modifier_classname: "modifier_imba_venomancer_poison_nova",
            name: "剧毒新星",
            description: "每秒受到{MODIFIER_PROPERTY_TOOLTIP}%最大生命值的伤害。"
        },
        {
            modifier_classname: "modifier_imba_venomancer_poison_nova_intrinsic",
            name: "剧毒新星",
            description: "剧毒术士阵亡或瘴气提前结束时会触发一次剧毒新星。"
        },
        {
            modifier_classname: "modifier_imba_venomancer_noxious_plague_primary",
            name: "恶性瘟疫",
            description: "持续受到伤害。这个负面状态消失时会扩散至附近的友军。"
        },
        {
            modifier_classname: "modifier_imba_venomancer_noxious_plague_secondary",
            name: "恶性瘟疫",
            description: "移动速度被降低，并持续受到伤害。"
        },
        {
            modifier_classname: "modifier_imba_venomancer_noxious_plague_slow",
            name: "恶性瘟疫",
            description: "离恶性瘟疫的一个源头太近，移动速度已被降低。"
        },
        {
            modifier_classname: "modifier_imba_venomancer_ward_counter",
            name: "瘟疫傍身",
            description: "已附着守卫。"
        }
    ]
};