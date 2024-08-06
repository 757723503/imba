import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_centaur_hoof_stomp",
            ability_specials: [
                {
                    ability_special: "radius",
                    text: "范围："
                },
                {
                    ability_special: "stomp_damage",
                    text: "践踏伤害："
                },
                {
                    ability_special: "stun_duration",
                    text: "眩晕持续时间："
                },
                {
                    ability_special: "windup_time",
                    text: "蓄力时间："
                }
            ],
            name: "马蹄践踏",
            description: "经过短暂的蓄力后，半人马战行者猛踏地面，眩晕并伤害身边的敌方单位。在延迟期间，他被缴械，但可以移动。",
            lore: "当战行者健壮的马蹄碰到了土壤，大地的震颤各处都能感受到。",
            notes: []
        },
        {
            ability_classname: "imba_centaur_double_edge",
            ability_specials: [
                {
                    ability_special: "edge_damage",
                    text: "伤害："
                },
                {
                    ability_special: "strength_damage",
                    text: "%力量伤害："
                },
                {
                    ability_special: "shard_str_pct",
                    text: "%力量加成："
                },
                {
                    ability_special: "shard_str_duration",
                    text: "力量持续时间："
                },
                {
                    ability_special: "shard_movement_slow",
                    text: "%移动速度减缓："
                },
                {
                    ability_special: "shard_movement_slow_duration",
                    text: "减速持续时间："
                }
            ],
            name: "双刃剑",
            description: "半人马战行者以猛烈的力量进行近战攻击，对目标周围单位和自身造成伤害。将基于力量值造成额外伤害。此技能无法用于自杀。",
            lore: "在激烈的战斗中，布拉德瓦登凶猛的撞击有时候会对自己造成伤害。",
            shard_description: "双刃剑可以对敌人造成减速，并且每击中一名英雄都会暂时提升半人马战行者的力量值。每次叠加都会刷新持续时间，最多叠加{shard_max_stacks}次。",
            notes: [
                "双刃剑对目标和自身都造成魔法伤害。"
            ]
        },
        {
            ability_classname: "imba_centaur_return",
            ability_specials: [
                {
                    ability_special: "return_damage",
                    text: "反伤伤害："
                },
                {
                    ability_special: "return_damage_str",
                    text: "%力量伤害："
                }
            ],
            name: "反伤",
            description: "半人马战行者向攻击他的单位发出反击。反弹固定伤害加上自身力量的一定百分比。对防御塔的伤害减半。",
            lore: "布拉德瓦登无需回避对手的攻击；这由他那盔甲般的马皮负责。",
            notes: [
                "反伤会在受到攻击时触发。",
                "反伤能对防御塔造成伤害。"
            ]
        },
        {
            ability_classname: "imba_centaur_stampede",
            ability_specials: [
                {
                    ability_special: "duration",
                    text: "奔袭冲撞持续时间："
                },
                {
                    ability_special: "scepter_bonus_duration",
                    text: "额外持续时间："
                },
                {
                    ability_special: "strength_damage",
                    text: "力量值伤害系数："
                },
                {
                    ability_special: "slow_duration",
                    text: "停滞持续时间："
                },
                {
                    ability_special: "radius",
                    text: "踩踏作用范围："
                },
                {
                    ability_special: "damage_reduction",
                    text: "%承受伤害降低："
                }
            ],
            name: "奔袭冲撞",
            description: "半人马战行者带领所有队友向胜利冲锋，所有友方英雄达到极限移动速度，并使踩到的敌人减速。每个敌人只会受到一次踩踏作用，并受到基于半人马战行者力量值的伤害。",
            lore: "欧梅克斯的巨大腰带，彰显着布拉德瓦登是同族中最伟大的战士，激励着他的格斗士同伴在野蛮的战斗中跟随他。",
            scepter_description: "奔袭冲撞状态下的英雄所受伤害降低，而且可以穿过地形，包括树木和高坡。奔袭冲撞作用下的敌人会被束缚。提升持续时间。",
            notes: []
        },
        {
            ability_classname: "imba_centaur_work_horse",
            ability_specials: [
                {
                    ability_special: "duration",
                    text: "总持续时间："
                }
            ],
            name: "马到成功",
            description: "半人马战行者套上一辆便车。开启后半人马战行者获得当前等级奔袭冲撞的加成效果，而且可以对友方目标施放便车。",
            notes: []
        },
        {
            ability_classname: "imba_centaur_horsepower",
            ability_specials: [],
            name: "开足马力",
            description: "半人马战行者根据他的力量值获得移动速度。",
            notes: [
                "半人马战行者获得移动速度加成，数值为{strength_to_movement_pct}%力量值。半人马的移速上限提升至{move_speed_limit}。<br><br>本移动速度加成不与鞋类物品的移速叠加。"
            ]
        },
        {
            ability_classname: "imba_centaur_mount",
            ability_specials: [
                {
                    ability_special: "duration",
                    text: "骑乘持续时间："
                }
            ],
            name: "便车",
            description: "半人马将一名友军抛入他身后的一辆便车中。友军在便车内是无敌状态，依然可以施法和攻击，不过无法移动，也无法成为敌人的目标。便车内近战英雄的攻击距离提升{melee_attack_range}。",
            lore: "布拉德瓦登的自尊心在他对胜利的渴求面前相形见绌。",
            notes: []
        },
        {
            ability_classname: "imba_centaur_overrun",
            ability_specials: [],
            notes: []
        },
        {
            ability_classname: "imba_centaur_rawhide",
            ability_specials: [],
            name: "皮糙肉厚",
            description: "每{upgrade_rate}秒永久获得{health_per_upgrade}点生命上限。",
            notes: []
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_centaur_1",
                    name: "反伤变成光环",
                    description: "半人马战行者附近1200范围内友方英雄都具有反伤的反击伤害。"
                },
                {
                    talent_classname: "special_bonus_unique_imba_centaur_2",
                    name: "+{s:bonus_stun_duration}秒 马蹄践踏眩晕"
                },
                {
                    talent_classname: "special_bonus_unique_imba_centaur_3",
                    name: "+{s:bonus_return_damage} 反伤伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_centaur_4",
                    name: "+{s:bonus_strength_damage}% 双刃剑力量伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_centaur_5",
                    name: "-{s:bonus_AbilityCooldown}秒 奔袭冲撞冷却"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "centaur_facets_imba_1",
            name: "反击精英",
            description: "半人马被攻击后双刃剑伤害提升。",
            related_abilities: [
                {
                    ability_classname: "imba_centaur_double_edge",
                    description: "双刃剑伤害提升，数值为半人马在最后{stack_duration}秒内受到来自敌方英雄伤害的{pct_of_incoming_damage_as_bonus}%，最高为{pct_of_incoming_damage_as_bonus}%双刃剑额外伤害。施放双刃剑后重置伤害累计。"
                }
            ],
            related_talents: []
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_centaur_return",
            name: "反伤"
        },
        {
            modifier_classname: "modifier_imba_centaur_rawhide",
            name: "皮糙肉厚",
            description: "获得{MODIFIER_PROPERTY_TOOLTIP}点生命上限。"
        },
        {
            modifier_classname: "modifier_imba_centaur_mounted",
            name: "便车",
            description: "无敌。可以施放技能和攻击，但是无法移动，或成为敌人的目标。"
        },
        {
            modifier_classname: "modifier_imba_centaur_stampede",
            name: "奔袭冲撞",
            description: "移速达到极限，并且使踩到的敌人减速。"
        },
        {
            modifier_classname: "modifier_imba_centaur_stampede_slow",
            name: "奔袭冲撞",
            description: "受到奔袭冲撞后，单位的移动速度受到减缓。"
        },
        {
            modifier_classname: "modifier_imba_centaur_double_edge_damage_tracking",
            name: "双刃剑",
            description: "下一次双刃剑伤害会提升{MODIFIER_PROPERTY_TOOLTIP}点。"
        },
        {
            modifier_classname: "modifier_imba_centaur_return_counter",
            name: "反伤",
            description: "开启后每点能量都将提供额外攻击力。"
        },
        {
            modifier_classname: "modifier_imba_centaur_return_bonus_damage",
            name: "反伤",
            description: "获得{MODIFIER_PROPERTY_BASEDAMAGEOUTGOING_PERCENTAGE}%攻击力加成。"
        },
        {
            modifier_classname: "modifier_imba_centaur_doubleedge_buff",
            name: "双刃剑魔晶效果",
            description: "提升半人马战行者的力量，并对敌人造成减速。"
        },
        {
            modifier_classname: "modifier_imba_centaur_doubleedge_slow",
            name: "双刃剑魔晶效果",
            description: "移动速度被减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。"
        },
        {
            modifier_classname: "modifier_imba_centaur_hoof_stomp_windup",
            name: "挺直马背",
            description: "正在准备马蹄践踏！"
        },
        {
            modifier_classname: "modifier_imba_centaur_khan_endurance_aura_bonus",
            name: "迅猛光环",
            description: "攻击速度提升{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}。"
        }
    ]
};