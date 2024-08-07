import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_shadow_shaman_ether_shock",
            ability_specials: [
                {
                    ability_special: "targets",
                    text: "目标数："
                },
                {
                    ability_special: "damage",
                    text: "伤害："
                }
            ],
            name: "苍穹震击",
            description: "利用虚空能量制造出分叉的闪电，打击多个敌方单位。",
            lore: "最初是给流浪艺人作开场秀用的，罗斯塔的闪电之炫能分成数叉来震击不止一个对手。",
            notes: [
                "最远可以伤害1000距离外的次级单位。"
            ]
        },
        {
            ability_classname: "imba_shadow_shaman_voodoo",
            ability_specials: [
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "damage_amp",
                    text: "%伤害加深："
                },
                {
                    ability_special: "ally_voodoo_duration",
                    text: "对友军持续时间："
                },
                {
                    ability_special: "ally_chicken_images_count",
                    text: "友军小鸡数量："
                },
                {
                    ability_special: "ally_chicken_movement_speed_bonus_pct",
                    text: "%友军移动速度加成："
                }
            ],
            name: "妖术",
            description: "将一个敌方单位变成人畜无害的动物，使其无法攻击和使用技能。",
            lore: "罗斯塔通常将自己变成一个小鸡来结束表演——现在他把这个屈辱分享给别人了。",
            notes: [
                "立即摧毁幻象。",
                "目标的基础移动速度为{movespeed}，但是如果目标有满速状态则移速不受影响。"
            ]
        },
        {
            ability_classname: "imba_shadow_shaman_shackles",
            ability_specials: [
                {
                    ability_special: "total_damage",
                    text: "总伤害/治疗："
                },
                {
                    ability_special: "channel_time",
                    text: "最大持续时间："
                }
            ],
            name: "枷锁",
            description: "持续施法 - 使用魔法绑住一个敌方单位，使其无法攻击和移动，同时持续吸取他们的生命能量。",
            lore: "一个用于自卫的咒语，是罗斯塔的师傅在流血丘陵罹难后，他所开发的枷锁咒。",
            shard_description: "枷锁会产生{shard_ward_count}个群蛇守卫对目标进行攻击。枷锁的施法距离提升{shard_bonus_cast_range}。枷锁结束后群蛇守卫还会持续{ward_linger_duration}秒。",
            notes: []
        },
        {
            ability_classname: "imba_shadow_shaman_mass_serpent_ward",
            ability_specials: [
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "hits_to_destroy_tooltip",
                    text: "摧毁所需次数："
                },
                {
                    ability_special: "ward_health",
                    text: "摧毁所需次数（非英雄）："
                }
            ],
            name: "群蛇守卫",
            description: "召唤{ward_count}支毒蛇守卫来攻击敌方单位和建筑。守卫对魔法免疫。每个守卫受到两次攻击就会被摧毁。",
            lore: "耍蛇曾是演艺中的重头戏；现在罗斯塔可以授予蛇力量，以服从他自己的吩咐。",
            scepter_description: "群蛇守卫可以同时攻击两个单位并造成全额伤害。",
            notes: []
        },
        {
            ability_classname: "imba_shadow_shaman_serpentine",
            ability_specials: [],
            name: "群蛇阵",
            description: "创造一列由{count}个群蛇守卫组成的蛇阵。",
            notes: []
        },
        {
            ability_classname: "imba_shadow_shaman_fowl_play",
            ability_specials: [
                {
                    ability_special: "hex_duration",
                    text: "持续时间："
                },
                {
                    ability_special: "movespeed_bonus_pct",
                    text: "%移动速度加成："
                }
            ],
            name: "禽戏",
            description: "受到致死伤害时，暗影萨满会获得强驱散效果，并且以1点生命的小鸡继续存活。受到的伤害将降为零，持续{damage_reduction_duration}秒。<br/><br/>冷却时间会在复活时重置。\\n\\n驱散类型：强驱散",
            notes: [
                "无法阻止斧王的淘汰之刃和瘟疫法师的死神镰刀的致死伤害。",
                "受到的伤害减免效果会阻止生命移除类效果杀死暗影萨满。"
            ]
        },
        {
            ability_classname: "imba_shadow_shaman_innate_snake_jar",
            ability_specials: [],
            notes: []
        },
        {
            ability_classname: "imba_shadow_shaman_innate_piglet_pole",
            ability_specials: [],
            notes: []
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_shadow_shaman_1",
                    name: ""
                },
                {
                    talent_classname: "special_bonus_unique_imba_shadow_shaman_2",
                    name: ""
                },
                {
                    talent_classname: "special_bonus_unique_imba_shadow_shaman_3",
                    name: ""
                },
                {
                    talent_classname: "special_bonus_unique_imba_shadow_shaman_4",
                    name: ""
                },
                {
                    talent_classname: "special_bonus_unique_imba_shadow_shaman_6",
                    name: ""
                },
                {
                    talent_classname: "special_bonus_unique_imba_shadow_shaman_7",
                    name: ""
                },
                {
                    talent_classname: "special_bonus_unique_imba_shadow_shaman_8",
                    name: ""
                },
                {
                    talent_classname: "special_bonus_unique_imba_shadow_shaman_hex_damage_amp",
                    name: ""
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "shadow_shaman_facets_imba_1",
            name: "巨蛇守卫 | 咕咕鸡群",
            description: "召唤一个巨大的毒蛇守卫，攻击力和击杀金钱为{s:bonus_mega_ward_multiplier_tooltip}倍，生命值为{s:bonus_mega_ward_health_tooltip}倍。 妖术可以把友军变成一群鸡，移除其他负面效果。",
            related_abilities: [
                {
                    ability_classname: "imba_shadow_shaman_voodoo",
                    description: "可以对友军施放，施加弱驱散，并使他们在{ally_invuln_duration}秒内处于无敌状态，然后变成小鸡。会额外产生不可控制的小鸡幻象。"
                },
                {
                    ability_classname: "imba_shadow_shaman_mass_serpent_ward",
                    description: "召唤一个巨大的毒蛇守卫，攻击力和击杀金钱为{bonus_mega_ward_multiplier_tooltip}倍，生命值为{mega_ward_health_tooltip}倍。"
                },
                {
                    ability_classname: "imba_shadow_shaman_fowl_play",
                    description: "还会再创造三个小鸡幻象。"
                }
            ],
            related_talents: []
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_shadow_shaman_voodoo",
            name: "妖术",
            description: "你是只小鸡。无法攻击和施法。"
        },
        {
            modifier_classname: "modifier_imba_shadow_shaman_shackles",
            name: "枷锁",
            description: "被铐牢。无法移动和攻击。"
        },
        {
            modifier_classname: "modifier_imba_shadow_shaman_self_hex",
            name: "禽戏",
            description: "你是只鸡。移动速度提升{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。"
        },
        {
            modifier_classname: "modifier_imba_shadow_shaman_fowl_play_damage_reduction",
            name: "禽戏",
            description: "受到的伤害降为零。"
        }
    ]
};