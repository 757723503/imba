import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: 'imba_dragon_knight_fireball',
            ability_specials: [
                {
                    ability_special: 'radius',
                    text: '作用范围：',
                },
                {
                    ability_special: 'damage',
                    text: '每秒伤害：',
                },
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'linger_duration',
                    text: '粘滞持续时间：',
                },
                {
                    ability_special: 'dragon_form_cast_range',
                    text: '古龙形态下施法距离：',
                },
                {
                    ability_special: 'melee_cast_range',
                    text: '近战形态下施法距离：',
                },
            ],
            name: '龙炎火球',
            description: '点燃一片区域，对其中的敌人持续造成伤害，伤害效果还会粘滞。近战形态下施放距离较近。',
            notes: [],
        },
        {
            ability_classname: 'imba_dragon_knight_breathe_fire',
            ability_specials: [
                {
                    ability_special: 'damage',
                    text: '伤害：',
                },
                {
                    ability_special: 'reduction',
                    text: '%攻击力降低：',
                },
                {
                    ability_special: 'duration',
                    text: '减攻持续时间：',
                },
            ],
            name: '火焰气息',
            description: '向龙骑士的前方喷射出一团火焰，烧灼碰到的敌人，并使其攻击力降低。',
            lore: '龙骑士达维安的气息已经变成了斯莱瑞克的古龙之息，人们还记得它将无数骑士烧成了焦炭。',
            notes: [],
        },
        {
            ability_classname: 'imba_dragon_knight_dragon_tail',
            ability_specials: [
                {
                    ability_special: 'stun_duration',
                    text: '眩晕时间：',
                },
                {
                    ability_special: 'damage',
                    text: '伤害：',
                },
            ],
            name: '神龙摆尾',
            description: '龙骑士用盾对身边的一个敌方单位进行打击，造成眩晕和伤害。在古龙形态下施法距离提高到{dragon_cast_range}。',
            lore: '达维安将神龙的天赋和骑士的技艺完美结合，使他在近身肉搏中无比勇猛。',
            notes: [],
        },
        {
            ability_classname: 'imba_dragon_knight_dragon_blood',
            ability_specials: [
                {
                    ability_special: 'corrosive_breath_damage',
                    text: '腐蚀吐息伤害：',
                },
                {
                    ability_special: 'corrosive_breath_duration',
                    text: '腐蚀吐息持续时间：',
                },
                {
                    ability_special: 'corrosive_breath_armor_reduction',
                    text: '腐蚀吐息降低护甲：',
                },
                {
                    ability_special: 'cleave_starting_width',
                    text: '分裂起始宽度：',
                },
                {
                    ability_special: 'cleave_ending_width',
                    text: '分裂末端宽度：',
                },
                {
                    ability_special: 'cleave_distance',
                    text: '分裂距离：',
                },
                {
                    ability_special: 'cleave_damage',
                    text: '%分裂伤害：',
                },
                {
                    ability_special: 'frost_bonus_movement_speed',
                    text: '%冰霜吐息降低移动速度：',
                },
                {
                    ability_special: 'frost_bonus_attack_speed',
                    text: '冰霜吐息降低攻击速度：',
                },
                {
                    ability_special: 'frost_duration',
                    text: '冰霜吐息持续时间：',
                },
                {
                    ability_special: 'frost_healing_reduction',
                    text: '%冰霜吐息治疗降低：',
                },
            ],
            name: '飞龙之怒',
            description: '神龙的生命力提升了龙骑士的攻击效果。在古龙形态下，攻击效果更具威力。',
            lore: '斯莱瑞克的血液流遍达维安的全身，他获得了寻常骑士身上双倍的活力。',
            notes: [],
        },
        {
            ability_classname: 'imba_dragon_knight_inherited_vigor',
            ability_specials: [
                {
                    ability_special: 'base_health_regen',
                    text: '生命恢复：',
                },
                {
                    ability_special: 'base_armor',
                    text: '护甲：',
                },
                {
                    ability_special: 'regen_and_armor_multiplier_during_dragon_form',
                    text: '古龙形态倍数：',
                },
            ],
            name: '神龙之血',
            description: '神龙的生命之血提升了龙骑士的生命恢复和护甲。每升一级，两个数值都将提升{level_mult}，在古龙形态下还有倍数加成。',
            notes: [],
        },
        {
            ability_classname: 'imba_dragon_knight_elder_dragon_form',
            ability_specials: [
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'bonus_movement_speed',
                    text: '移动速度提升：',
                },
                {
                    ability_special: 'bonus_attack_range',
                    text: '额外攻击距离：',
                },
                {
                    ability_special: 'bonus_attack_damage',
                    text: '攻击力加成：',
                },
                {
                    ability_special: 'ranged_splash_radius',
                    text: '效果溅射范围：',
                },
                {
                    ability_special: 'frost_breath_effect_bonus',
                    text: '%冰霜吐息效果加成：',
                },
                {
                    ability_special: 'corrosive_breath_effect_bonus',
                    text: '%腐蚀吐息效果加成：',
                },
                {
                    ability_special: 'fire_breath_effect_bonus',
                    text: '%溅射伤害效果加成：',
                },
            ],
            name: '古龙形态',
            description:
                '龙骑士能够变身成为三种强大的古龙形态之一。移动速度和攻击力得到提升，飞龙之怒的攻击效果会施加给目标附近所有敌人。神龙摆尾的施法距离得到提升。神龙之血的生命恢复和护甲加成得到提升。',
            lore: '潜藏的神龙力量从达维安体内涌出，骑士之力和古龙之威完美地合二为一。',
            shard_description: '古龙形态获得龙炎火球技能。',
            scepter_description: '古龙形态的等级提升，增加了4级的黑龙，攻击力提升，并且飞龙之怒的攻击效果更强。',
            notes: ['腐蚀吐息的毒素伤害可以致死。', '近战或远程物品的冷却时间不同时将根据龙骑士在使用物品时处于远程或近战形态而定。'],
        },
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: 'special_bonus_unique_imba_dragon_knight',
                    name: '+{s:bonus_base_health_regen} 神龙之血恢复/护甲',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_dragon_knight_2',
                    name: '+{s:bonus_stun_duration}秒 神龙摆尾眩晕',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_dragon_knight_3',
                    name: '-{s:value}% 火焰气息降低攻击力',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_dragon_knight_7',
                    name: '+{s:bonus_bonus_attack_range} 古龙形态攻击距离',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_dragon_knight_8',
                    name: '+{s:bonus_dragon_aoe} 古龙形态下范围型神龙摆尾',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_dragon_knight_9',
                    name: '+{s:bonus_dragon_form_bonus_pct}% 古龙形态下火焰气息伤害/距离',
                },
            ],
        },
    ],
    FacetArray_B: [
        {
            facet_classname: 'dragon_knight_facets_imba_1',
            name: '毒龙 | 火龙 | 霜龙',
            description:
                '龙骑士的攻击拥有腐蚀之力，古龙形态下效果还会变强。 龙骑士的攻击拥有溅射伤害，古龙形态下效果还会变强。 龙骑士的攻击拥有减速和降低治疗效果，古龙形态下效果还会变强。',
            related_abilities: [
                {
                    ability_classname: 'imba_dragon_knight_dragon_blood',
                    description: '攻击附带毒素，可作用于敌方单位和建筑，降低护甲并持续造成伤害。古龙形态下效果会溅射。',
                },
                {
                    ability_classname: 'imba_dragon_knight_elder_dragon_form',
                    description: '古龙形态下冰霜吐息的攻击速度、移动速度和治疗效果降低都会增加。',
                },
            ],
            related_talents: [],
        },
    ],
    ModifierArray: [
        {
            modifier_classname: 'modifier_imba_dragon_knight_dragon_form',
            name: '古龙',
            description: '变身为一条古龙。',
        },
        {
            modifier_classname: 'modifier_imba_dragon_knight_corrosive_breath',
            name: '腐蚀吐息',
            description: '攻击时施加持续伤害并降低护甲。',
        },
        {
            modifier_classname: 'modifier_imba_dragon_knight_corrosive_breath_dot',
            name: '腐蚀吐息',
            description: '受到每秒{MODIFIER_PROPERTY_TOOLTIP}点伤害。护甲降低{MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS}点。',
        },
        {
            modifier_classname: 'modifier_imba_dragon_knight_splash_attack',
            name: '火焰吐息',
            description: '将攻击溅射到周围的敌方单位。',
        },
        {
            modifier_classname: 'modifier_imba_dragon_knight_frost_breath',
            name: '冰霜吐息',
            description: '攻击附带减速效果。',
        },
        {
            modifier_classname: 'modifier_imba_dragon_knight_frost_breath_slow',
            name: '冰霜吐息减速',
            description:
                '移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%，攻击速度降低{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}，治疗效果降低{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。',
        },
        {
            modifier_classname: 'modifier_imba_dragon_knight_black_dragon_tooltip',
            name: '黑龙',
            description: '提升了飞龙之怒的威力，并且移动无视地形。',
        },
        {
            modifier_classname: 'modifier_imba_dragon_knight_fireball_burn',
            name: '龙炎火球',
            description: '每秒受到{MODIFIER_PROPERTY_TOOLTIP}点伤害。',
        },
    ],
};
