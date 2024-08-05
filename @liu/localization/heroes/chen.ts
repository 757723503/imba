import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_chen_penitence",
            ability_specials: [
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "speed",
                    text: ""
                },
                {
                    ability_special: "bonus_movement_speed",
                    text: "%移动速度减缓："
                },
                {
                    ability_special: "bonus_attack_speed",
                    text: "攻击速度加成："
                },
                {
                    ability_special: "damage",
                    text: ""
                },
                {
                    ability_special: "self_attack_range_bonus",
                    text: "自身攻击距离加成："
                }
            ],
            name: "赎罪",
            description: "迫使一个敌方单位移动变慢，友军攻击他时攻速提升。陈攻击赎罪的目标时攻击距离得到提升。",
            lore: "尽管陈控制动物的能力还没有强到可以控制敌方英雄，不过还是可以用来考验他们的战斗意志。",
            notes: []
        },
        {
            ability_classname: "imba_chen_test_of_faith",
            ability_specials: [
                {
                    ability_special: "damage_min",
                    text: "最低伤害："
                },
                {
                    ability_special: "damage_max",
                    text: "最高伤害："
                },
                {
                    ability_special: "heal_min",
                    text: "最低治疗："
                },
                {
                    ability_special: "heal_max",
                    text: "最高治疗："
                }
            ],
            name: "忠诚考验",
            description: "对一个敌方单位造成随机伤害来考验他的忠诚。对友方单位施放将随机治疗一定血量。对自己施放时总是治疗最大血量。",
            lore: "教会骑士所掌握的狂热魔法形式，不过大多数其他魔法师都认为没什么用。",
            notes: [
                "可以作用于减益免疫状态下友军。"
            ]
        },
        {
            ability_classname: "imba_chen_divine_favor",
            ability_specials: [
                {
                    ability_special: "armor",
                    text: ""
                },
                {
                    ability_special: "heal_rate",
                    text: "每秒恢复："
                },
                {
                    ability_special: "aura_radius",
                    text: ""
                },
                {
                    ability_special: "AbilityCastRange",
                    text: ""
                },
                {
                    ability_special: "duration",
                    text: "持续时间："
                },
                {
                    ability_special: "teleport_delay",
                    text: "传送延迟："
                },
                {
                    ability_special: "bonus_armor",
                    text: "护甲："
                },
                {
                    ability_special: "heal_amp",
                    text: "%治疗增强："
                },
                {
                    ability_special: "creep_bonus",
                    text: ""
                }
            ],
            name: "神力恩泽",
            description: "被动提供光环，提供生命恢复加成。可以主动对友军施放，提供护甲加成，以及治疗和生命恢复增强。\\n\\n对陈施放后可以使陈控制的所有单位传送到他身旁。受到敌方英雄或控制下单位的伤害会导致传送中止。",
            lore: "陈的狂热极具感染力，他的盟友得到了生命力的祝福，还被迫在他身旁战斗。",
            notes: []
        },
        {
            ability_classname: "imba_chen_test_of_faith_teleport",
            ability_specials: [
                {
                    ability_special: "hero_teleport_delay",
                    text: "英雄/自身传送延迟："
                }
            ],
            name: "",
            description: "将一个友方单位传送至基地。非英雄单位将被立刻传送，英雄单位将延迟一段时间传送。如果对陈自身施放，所有通过神圣劝化控制的单位都将经过一定延迟后传送至他身边。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_chen_holy_persuasion",
            ability_specials: [
                {
                    ability_special: "max_units",
                    text: "最多劝化数量："
                },
                {
                    ability_special: "level_req",
                    text: "非英雄单位最高等级："
                },
                {
                    ability_special: "health_min",
                    text: "最低生命值："
                },
                {
                    ability_special: "bonus_health_per_level",
                    text: ""
                },
                {
                    ability_special: "gold_pct",
                    text: "%击杀金钱百分比："
                },
                {
                    ability_special: "movement_speed_bonus",
                    text: "移动速度加成："
                },
                {
                    ability_special: "damage_bonus",
                    text: "攻击力加成："
                },
                {
                    ability_special: "is_martyr",
                    text: ""
                },
                {
                    ability_special: "creep_ability_level",
                    text: ""
                }
            ],
            name: "神圣劝化",
            description: "陈控制住敌方小兵或者中立生物，并获得击杀金钱一定百分比的金钱。被劝化目标的生命值会被设为{health_min} + {bonus_health_per_level} * 陈的等级。被劝化的单位将提升移动速度和攻击力。",
            lore: "尽管他们可能当不了骑士，但陈还是将野兽们纳入教会，就像他自己当年被改变信仰一样。",
            shard_description: "神圣劝化可以对远古中立生物施放。根据上帝之手等级可以控制最多1/2/3个远古生物。使中立生物的部分技能额外升1级。",
            scepter_description: "劝化单位获得一个新技能，殉道。该单位可以牺牲自己，对选定的友军施放一个单体的当前等级上帝之手进行治疗或对选定的敌人造成伤害。",
            notes: [
                "如果达到劝化生物的数量上限后再劝化生物，最早劝化的单位将立即死亡。",
                "拥有阿哈利姆魔晶后可以对远古中立生物施放本技能。",
                "升级此技能后在升级前劝化的单位并不会增加生命值。",
                "劝化时单位的魔法恢复至满魔。"
            ]
        },
        {
            ability_classname: "imba_chen_martyrdom",
            ability_specials: [],
            name: "殉道",
            description: "献祭这个单位的生命，以当前等级的上帝之手治疗任意友军，或对敌人造成伤害。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_chen_hand_of_god",
            ability_specials: [
                {
                    ability_special: "heal_amount",
                    text: "初始治疗："
                },
                {
                    ability_special: "hot_duration",
                    text: ""
                },
                {
                    ability_special: "heal_per_second",
                    text: "每秒治疗量："
                },
                {
                    ability_special: "ancient_creeps_scepter",
                    text: "魔晶升级神圣劝化远古生物数量："
                },
                {
                    ability_special: "does_purge",
                    text: ""
                }
            ],
            name: "上帝之手",
            description: "治疗地图上的所有友军英雄以及陈控制的所有单位。一开始先施加高额治疗，在之后{hot_duration}秒内持续进行小额治疗。",
            lore: "陈利用他的奴隶与他之间的精神连接，给拥有其狂热的盟军带来康复和幸福。",
            notes: [
                "可以治疗无敌和被隐藏/放逐友军。"
            ]
        },
        {
            ability_classname: "imba_chen_summon_convert",
            ability_specials: [
                {
                    ability_special: "health_min",
                    text: ""
                },
                {
                    ability_special: "bonus_health_per_level",
                    text: ""
                },
                {
                    ability_special: "summon_centaurs",
                    text: ""
                },
                {
                    ability_special: "summon_wolves",
                    text: ""
                },
                {
                    ability_special: "summon_hellbears",
                    text: ""
                },
                {
                    ability_special: "summon_trolls",
                    text: ""
                },
                {
                    ability_special: "summon_satyrs",
                    text: ""
                },
                {
                    ability_special: "convert_hp_tooltip",
                    text: "劝化生命值："
                }
            ],
            name: "召唤信徒",
            description: "陈召唤一名信徒为他作战。信徒会获得神圣劝化的加成效果，陈阵亡后也会随之阵亡。最大生命值为{health_min} + {bonus_health_per_level} * 陈的英雄等级。<br><br>信徒存活时技能会保持冷却，不过陈复活时冷却状态就会重置。信徒会计入神圣劝化的单位数量上限。",
            lore: "",
            notes: []
        },
        {
            ability_classname: "imba_chen_innate_check_for_team_change",
            ability_specials: [],
            name: "",
            description: "",
            lore: "",
            notes: []
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_chen_2",
                    name: "+{s:bonus_heal_amount}/+{s:bonus_heal_per_second} 上帝之手治疗/持续治疗"
                },
                {
                    talent_classname: "special_bonus_unique_imba_chen_3",
                    name: "-{s:bonus_teleport_delay}秒 神力恩泽传送延迟"
                },
                {
                    talent_classname: "special_bonus_unique_imba_chen_4",
                    name: "+{s:bonus_health_min} 神圣劝化最低生命"
                },
                {
                    talent_classname: "special_bonus_unique_imba_chen_5",
                    name: "+{s:bonus_damage_bonus} 神圣劝化攻击力"
                },
                {
                    talent_classname: "special_bonus_unique_imba_chen_7",
                    name: "-{s:value}秒 上帝之手冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_chen_8",
                    name: "-{s:bonus_bonus_movement_speed}% 赎罪减速"
                },
                {
                    talent_classname: "special_bonus_unique_imba_chen_11",
                    name: "赎罪造成{s:bonus_damage}点伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_chen_12",
                    name: "上帝之手施加强驱散"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "chen_facets_imba_1",
            name: "",
            description: ""
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_chen_hand_of_god_hot",
            name: "上帝之手",
            description: "每秒治疗{MODIFIER_PROPERTY_TOOLTIP}点生命。"
        },
        {
            modifier_classname: "modifier_imba_chen_penitence_self_attack_range",
            name: "赎罪",
            description: "能以加成后的攻击距离来攻击赎罪作用下的目标。"
        },
        {
            modifier_classname: "modifier_imba_chen_penitence",
            name: "赎罪",
            description: "移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%，被攻击时攻击者的攻击速度增加。"
        },
        {
            modifier_classname: "modifier_imba_chen_holy_persuasion",
            name: "神圣劝化",
            description: "被劝化加入陈的教派。"
        },
        {
            modifier_classname: "modifier_imba_chen_test_of_faith_teleport",
            name: "听命于陈",
            description: "正在传送。"
        },
        {
            modifier_classname: "modifier_imba_chen_penitence_attack_speed_buff",
            name: "赎罪",
            description: "获得{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}攻击速度。"
        },
        {
            modifier_classname: "modifier_imba_chen_divine_favor",
            name: "神力恩泽",
            description: "获得{MODIFIER_PROPERTY_HEALTH_REGEN_CONSTANT}点/秒生命恢复。"
        },
        {
            modifier_classname: "modifier_imba_chen_divine_favor_armor_buff",
            name: "神力恩泽护甲",
            description: "护甲提升{MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS}点，生命恢复增强{MODIFIER_PROPERTY_HEAL_AMPLIFY_PERCENTAGE_TARGET}%。"
        }
    ]
};