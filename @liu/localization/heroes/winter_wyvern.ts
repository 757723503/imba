import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: 'imba_winter_wyvern_arctic_burn',
            ability_specials: [
                {
                    ability_special: 'duration',
                    text: '飞行持续时间：',
                },
                {
                    ability_special: 'attack_range_bonus',
                    text: '攻击距离加成：',
                },
                {
                    ability_special: 'percent_damage',
                    text: '%生命值烧灼：',
                },
                {
                    ability_special: 'damage_duration',
                    text: '烧灼持续时间：',
                },
                {
                    ability_special: 'move_slow',
                    text: '%移动速度减缓：',
                },
                {
                    ability_special: 'mana_cost_scepter',
                    text: '每秒消耗魔法：',
                },
                {
                    ability_special: 'movement_scepter',
                    text: '%移动速度加成：',
                },
            ],
            name: '严寒烧灼',
            description:
                '寒冬飞龙乘着一股极地寒风扶摇而上，移动将无视地形，每次攻击都将呼出逼人的寒气。高飞时，她的攻击距离更远，攻击弹道速度也更快，被攻击的敌人在寒意作用下，移动速度会被减缓，同时每秒损失{percent_damage}%当前生命值。',
            lore: '其他龙点燃龙炎的器官在傲洛斯体内熔炼的是难以想象的寒气。从她咽喉的深处呼出的气息会将敌人送入烧灼的痛苦中。',
            scepter_description: '严寒烧灼变成开关型技能，开启后每秒消耗一定量魔法。攻击时每个目标不再只受到一次负面效果。提升寒冬飞龙的移动速度。',
            notes: [
                '每次施放时敌方单位只会获得一次严寒烧灼的负面效果。',
                '本技能无法作用于肉山。',
                '寒冬飞龙的攻击前摇降低至{attack_point}秒。',
                '严寒烧灼的持续伤害和减速可以被驱散。',
            ],
        },
        {
            ability_classname: 'imba_winter_wyvern_splinter_blast',
            ability_specials: [
                {
                    ability_special: 'split_radius',
                    text: '碎裂作用范围：',
                },
                {
                    ability_special: 'movespeed_slow_tooltip',
                    text: '%移动速度减缓：',
                },
                {
                    ability_special: 'damage',
                    text: '伤害：',
                },
            ],
            name: '碎裂冲击',
            description:
                '向一个单位发射一团易碎的冰球。冰球一击中目标就会碎裂，而目标单位将不会受到任何效果，但是附近{split_radius}基础范围内敌人都将因碎片的冲击受到伤害，并且移动速度减缓{movespeed_slow_tooltip}%。',
            lore: '这些冰渣由她冰冻的咽喉中特殊的囊泡慢慢生成，寒冬飞龙正借此轰击她的敌人。',
            notes: ['主弹道的移动速度为{projectile_speed}。', '主弹道无法被躲避，而且不能以寒冬飞龙自身为目标。'],
        },
        {
            ability_classname: 'imba_winter_wyvern_cold_embrace',
            ability_specials: [
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'heal_additive',
                    text: '每秒基础治疗：',
                },
                {
                    ability_special: 'heal_percentage',
                    text: '%每秒最大生命值治疗：',
                },
            ],
            name: '极寒之拥',
            description: '将队友封入一个冰茧中，使其被冻在原地并恢复生命值，恢复数值为基础数值加上最大生命值的一定比例。冰茧将阻隔一切物理伤害。',
            lore: '寒冬之心中有着寒冷而治愈的拥抱。坚冰减缓了血液的流动，使治疗的魔力发挥得更加彻底。',
            shard_description:
                '极寒之拥结束时会在该地点放出一次碎裂冲击，打击{shard_splinter_range}范围内的敌人。冷却时间减少{shard_cooldown_reduction}秒。',
            notes: [],
        },
        {
            ability_classname: 'imba_winter_wyvern_winters_curse',
            ability_specials: [
                {
                    ability_special: 'radius',
                    text: '诅咒作用范围：',
                },
                {
                    ability_special: 'damage_reduction',
                    text: '%诅咒所受伤害降低：',
                },
                {
                    ability_special: 'damage_amplification',
                    text: '%寒冬诅咒加深魔法伤害：',
                },
                {
                    ability_special: 'bonus_attack_speed',
                    text: '诅咒攻击速度：',
                },
                {
                    ability_special: 'duration',
                    text: '诅咒最短持续时间：',
                },
                {
                    ability_special: 'max_duration',
                    text: '诅咒最长持续时间：',
                },
                {
                    ability_special: 'bonus_duration_per_hero',
                    text: '每位英雄的诅咒额外持续时间：',
                },
                {
                    ability_special: 'bonus_duration_per_creep',
                    text: '每个非英雄的诅咒额外持续时间：',
                },
            ],
            name: '寒冬诅咒',
            description:
                '寒冬飞龙驱散一个敌方目标并将其冻在原地，附近的其他敌人将受到癫狂诅咒，对冻住的队友进行攻击，而且攻击速度得到提升。冻住的目标和被诅咒攻击队友的敌人不会受到任何来自敌方的伤害，不过寒冬飞龙或她控制的单位造成的魔法伤害除外，而且伤害还得到了加深。',
            lore: '这个诅咒在书龙咒语中最为古老，也是那句老话的真相：有时候我的敌人的敌人还是我的敌人。',
            notes: ['如果目标被其队友击杀，击杀者将仍是寒冰飞龙。', '无视主目标的减益免疫状态，但是对目标周围的减益免疫队友无效。'],
        },
        {
            ability_classname: 'imba_winter_wyvern_eldwurm_scholar',
            ability_specials: [],
            name: '古龙学者',
            description: '友方英雄激活智慧神符时，寒冬飞龙会与整个队伍分享知识，没有获得初始奖励的3名英雄会获得{share_percentage}%相应经验。',
            notes: [],
        },
        {
            ability_classname: 'imba_winter_wyvern_essence_of_the_blueheart',
            ability_specials: [
                {
                    ability_special: 'restore_pct',
                    text: '%治疗转为魔法：',
                },
            ],
            name: '蓝心精华',
            description: '寒冬飞龙的治疗也会回复魔法。',
            notes: [],
        },
        {
            ability_classname: 'imba_winter_wyvern_dragon_sight',
            ability_specials: [
                {
                    ability_special: 'damage_per_ten_attack_range_tooltip',
                    text: '每10攻击距离提升攻击力：',
                },
            ],
            name: '飞龙视野',
            description: '寒冬飞龙的攻击距离超过了{attack_range_min}后获得攻击力加成。',
            notes: [],
        },
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: 'special_bonus_unique_imba_winter_wyvern_1',
                    name: '+{s:bonus_move_slow}% 严寒烧灼减速',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_winter_wyvern_2',
                    name: '+{s:bonus_split_radius} 碎裂冲击碎裂作用范围',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_winter_wyvern_3',
                    name: '+{s:bonus_bonus_attack_speed} 寒冬诅咒攻击速度',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_winter_wyvern_4',
                    name: '碎裂冲击造成{s:bonus_stun_duration}秒眩晕',
                    description: '减速效果的持续时间不变。',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_winter_wyvern_5',
                    name: '+{s:bonus_heal_additive} 极寒之拥治疗生命/秒',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_winter_wyvern_6',
                    name: '+{s:bonus_damage_duration}秒 严寒烧灼负面效果',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_winter_wyvern_7',
                    name: '+{s:bonus_damage} 碎裂冲击伤害',
                },
            ],
        },
    ],
    FacetArray_B: [
        {
            facet_classname: 'winter_wyvern_facets_imba_1',
            name: '',
            description: '',
        },
    ],
    ModifierArray: [
        {
            modifier_classname: 'modifier_imba_winter_wyvern_arctic_burn_flight',
            name: '严寒烧灼飞行状态',
            description: '飞行中。攻击距离更远，攻击弹道更快，使敌人减速，同时每秒烧灼他们一定百分比的当前生命值。',
        },
        {
            modifier_classname: 'modifier_imba_winter_wyvern_arctic_burn_slow',
            name: '严寒烧灼减速效果',
            description: '移动速度被减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%，同时每秒损失当前生命值的一定百分比。',
        },
        {
            modifier_classname: 'modifier_imba_winter_wyvern_splinter_blast_slow',
            name: '碎裂冲击减速效果',
            description: '移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。',
        },
        {
            modifier_classname: 'modifier_imba_winter_wyvern_cold_embrace',
            name: '极寒之拥',
            description: '免疫物理伤害，并恢复生命值。',
        },
        {
            modifier_classname: 'modifier_imba_winter_wyvern_winters_curse',
            name: '寒冬诅咒',
            description: '无法分辨敌友。',
        },
        {
            modifier_classname: 'modifier_imba_winter_wyvern_winters_curse_aura',
            name: '寒冬诅咒目标',
            description: '冻在原地，并将受到附近友军的攻击。',
        },
        {
            modifier_classname: 'modifier_imba_winter_wyvern_dragon_sight',
            name: '飞龙视野',
            description: '从额外的攻击距离获得{MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE}点额外攻击力。',
        },
    ],
};
