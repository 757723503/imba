import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_mars_spear",
            ability_specials: [
                {
                    ability_special: "damage",
                    text: "伤害："
                },
                {
                    ability_special: "spear_range",
                    text: "施法距离："
                },
                {
                    ability_special: "stun_duration",
                    text: "眩晕时间："
                },
                {
                    ability_special: "shard_trail_duration",
                    text: "路径持续时间："
                },
                {
                    ability_special: "shard_trail_radius",
                    text: "路径作用范围："
                },
                {
                    ability_special: "shard_dps",
                    text: "每秒伤害："
                },
                {
                    ability_special: "shard_move_slow_pct",
                    text: "%移动速度减缓："
                },
                {
                    ability_special: "shard_debuff_linger_duration",
                    text: "负面效果粘滞时间："
                }
            ],
            name: "战神迅矛",
            description: "玛尔斯以致命的精准掷出他强大的战矛，对击中的每个敌方单位造成伤害。击中的第一个敌方英雄将被战矛刺穿，并被击退。若战矛击中树木、建筑或悬崖，目标将会被钉在上面，并受到眩晕。",
            lore: "玛尔斯的传奇战矛上依然闪耀着熔铸之神烈焰的热力。",
            shard_description: "战神迅矛可以刺中最多{max_impale_targets}个单位，并留下一道火焰路径，持续造成伤害并减缓移动速度。",
            notes: [
                "战神迅矛可以击中隐身单位，造成眩晕还使其显形。",
                "战神迅矛只会将单位从低地钉在地势变高的地方，否则会将他们推下高地。"
            ]
        },
        {
            ability_classname: "imba_mars_gods_rebuke",
            ability_specials: [
                {
                    ability_special: "crit_mult",
                    text: "%致命一击伤害："
                },
                {
                    ability_special: "radius",
                    text: "距离："
                },
                {
                    ability_special: "knockback_slow",
                    text: "%击退减速："
                },
                {
                    ability_special: "knockback_slow_duration",
                    text: "击退减速持续时间："
                },
                {
                    ability_special: "bonus_damage_vs_heroes",
                    text: "对英雄的攻击力加成："
                }
            ],
            name: "神之谴戒",
            description: "玛尔斯举起他的战盾粉碎前方的敌人，将他们击退并且基于自身攻击力造成致命一击伤害。攻击英雄时攻击伤害提升。具有克敌机先效果。",
            lore: "在玛尔斯谴戒的刺痛下世上还没有战士能纹丝不动。",
            notes: [
                "神之谴戒的攻击也有几率触发攻击特效。"
            ]
        },
        {
            ability_classname: "imba_mars_dauntless",
            ability_specials: [
                {
                    ability_special: "health_regen_per_enemy",
                    text: "%每多一个敌人生命恢复："
                }
            ],
            name: "无畏",
            description: "玛尔斯和{radius}范围内的友方英雄在该区域内敌方英雄数量更多时会获得生命恢复，敌人数量越多，生命恢复也越高。",
            notes: []
        },
        {
            ability_classname: "imba_mars_bulwark",
            ability_specials: [
                {
                    ability_special: "physical_damage_reduction",
                    text: "%正面伤害降低："
                },
                {
                    ability_special: "physical_damage_reduction_side",
                    text: "%侧面伤害降低："
                },
                {
                    ability_special: "redirect_range",
                    text: "主动改向范围："
                },
                {
                    ability_special: "redirect_speed_penatly",
                    text: "%开启后移速损失："
                },
                {
                    ability_special: "scepter_movement_slow_pct",
                    text: "%攻击附带减速："
                },
                {
                    ability_special: "scepter_movement_slow_duration",
                    text: "减速持续时间："
                },
                {
                    ability_special: "scepter_bonus_damage",
                    text: "攻击力加成："
                },
                {
                    ability_special: "soldier_attack_range",
                    text: "士兵攻击距离："
                }
            ],
            name: "护身甲盾",
            description: "每当玛尔斯受到来自正面或侧面的攻击时，他就挥舞他那面巨大的战盾来格挡一定百分比的伤害。<br><br>可以开启，开启后获得相位移动状态，但无法攻击，自身锁定为面朝的方向，并且移动速度降低，但飞向队友的攻击弹道中{redirect_chance}%将改变方向朝玛尔斯飞去。",
            lore: "只有蠢到家了才胆敢与战神公平作战。",
            scepter_description: "开启护身甲盾后在玛尔斯的两侧共产生{soldier_count}名无敌的士兵。士兵会随着玛尔斯前进，继承全额攻击力和攻击特效并拥有攻击力加成，附带击退和减速效果。敌人在同一时间只会被1名士兵攻击。",
            notes: [
                "改向只会在弹道目标位于玛尔斯身后锥形区域内或他身边100范围内才会生效。",
                "破坏会使正面和侧面减伤效果失效。"
            ]
        },
        {
            ability_classname: "imba_mars_arena_of_blood",
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
                    ability_special: "spear_damage",
                    text: "战矛伤害："
                },
                {
                    ability_special: "formation_time",
                    text: "列队时间："
                }
            ],
            name: "热血竞技场",
            description: "经过短暂的列队时间，玛尔斯召唤出环绕着战士的竞技场，战士们将阻挡敌人的攻击和动向。竞技场内的敌方英雄靠近边缘时将被战矛攻击，受到伤害并被击退。",
            lore: "余烬军团死去已久的成员，从考验玛尔斯力量的顶尖战士中集结而来，他们还依然陶醉在战斗的刺激之中，只要他下达命令，他们就欣然应战。",
            notes: []
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_mars_spear_bonus_damage",
                    name: "+{s:bonus_damage} 战神迅矛伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_mars_gods_rebuke_extra_crit",
                    name: "+{s:bonus_crit_mult}% 神之谴戒致命一击"
                },
                {
                    talent_classname: "special_bonus_unique_imba_mars_bulwark_redirect_chance",
                    name: "+{s:bonus_redirect_chance}% 护身甲盾改向几率"
                },
                {
                    talent_classname: "special_bonus_unique_imba_mars_rebuke_cooldown",
                    name: "-{s:bonus_AbilityCooldown}秒 神之谴戒冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_mars_spear_stun_duration",
                    name: "+{s:bonus_stun_duration}秒 战神迅矛眩晕"
                },
                {
                    talent_classname: "special_bonus_unique_imba_mars_arena_of_blood_hp_regen",
                    name: "热血竞技场+{s:value} 生命恢复"
                },
                {
                    talent_classname: "special_bonus_unique_imba_mars_bulwark_damage_reduction",
                    name: "+{s:bonus_physical_damage_reduction}/+{s:bonus_physical_damage_reduction_side}% 护身甲盾正面/侧面减伤"
                },
                {
                    talent_classname: "special_bonus_unique_imba_mars_rebuke_radius",
                    name: "+{s:bonus_radius} 神之谴戒距离"
                },
                {
                    talent_classname: "special_bonus_unique_imba_mars_bulwark_cooldown",
                    name: "-{s:bonus_AbilityCooldown}秒 护身甲盾冷却"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "mars_facets_imba_1",
            name: "庆功宴 | 热血运动",
            description: "有敌人在热血竞技场内阵亡时玛尔斯会获得生命、魔法和攻击力加成。 热血竞技场内的敌人没有竞技场外的视野。",
            related_abilities: [
                {
                    ability_classname: "imba_mars_spear",
                    description: "现在会刺中前{max_impale_targets}名敌方英雄。"
                },
                {
                    ability_classname: "imba_mars_arena_of_blood",
                    description: "热血竞技场会遮蔽视野，竞技场内的敌人不会与他们的友军共享视野。"
                }
            ],
            related_talents: []
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_mars_spear_stun",
            name: "战神迅矛",
            description: "被眩晕{MODIFIER_PROPERTY_TOOLTIP}秒。"
        },
        {
            modifier_classname: "modifier_imba_mars_gods_rebuke_slow",
            name: "神之谴戒",
            description: "移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%"
        },
        {
            modifier_classname: "modifier_imba_mars_bulwark",
            name: "护身甲盾",
            description: "格挡{MODIFIER_PROPERTY_INCOMING_DAMAGE_PERCENTAGE}%来自正面的物理伤害，来自侧面的为一半数值。"
        },
        {
            modifier_classname: "modifier_imba_mars_bulwark_active",
            name: "主动护身甲盾",
            description: "被减速，方向锁定，移动为相位状态。敌人的弹道会转向给玛尔斯。"
        },
        {
            modifier_classname: "modifier_imba_mars_bulwark_soldier_thinker",
            name: "护身甲盾士兵",
            description: "士兵继承全额攻击力+75点，并且可以触发攻击特效。攻击造成30%%减速，持续1秒。每个敌人同一时间只能被一个士兵攻击。"
        },
        {
            modifier_classname: "modifier_imba_mars_scepter_damage_slow",
            name: "护身甲盾",
            description: "移动速度减少{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。"
        },
        {
            modifier_classname: "modifier_imba_mars_dauntless_effect",
            name: "无畏",
            description: "寡不敌众！正在恢复生命值。"
        },
        {
            modifier_classname: "modifier_imba_mars_arena_kill_buff",
            name: "庆功宴",
            description: "获得{MODIFIER_PROPERTY_BASEDAMAGEOUTGOING_PERCENTAGE}%攻击力。"
        },
        {
            modifier_classname: "modifier_imba_mars_arena_of_blood",
            name: "热血竞技场",
            description: "阻挡敌人的攻击和动向。"
        },
        {
            modifier_classname: "modifier_imba_mars_arena_of_blood_buff",
            name: "热血竞技场",
            description: "+{MODIFIER_PROPERTY_HEALTH_REGEN_CONSTANT}点/秒生命恢复"
        }
    ]
};