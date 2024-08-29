import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: 'imba_sniper_concussive_grenade',
            ability_specials: [
                {
                    ability_special: 'damage',
                    text: '伤害：',
                },
                {
                    ability_special: 'radius',
                    text: '作用范围：',
                },
                {
                    ability_special: 'slow',
                    text: '%移动速度减缓：',
                },
                {
                    ability_special: 'debuff_duration',
                    text: '减速持续时间：',
                },
                {
                    ability_special: 'knockback_distance',
                    text: '击退距离：',
                },
            ],
            name: '震荡手雷',
            description: '向目标区域扔出一枚手雷，对敌人造成伤害并将他们击退，同时也会击退狙击手自己。受到作用的敌人被击退后还会被缴械和减速。',
            notes: [],
        },
        {
            ability_classname: 'imba_sniper_shrapnel',
            ability_specials: [
                {
                    ability_special: 'slow_movement_speed',
                    text: '%移动速度减缓：',
                },
                {
                    ability_special: 'radius',
                    text: '作用范围：',
                },
                {
                    ability_special: 'shrapnel_damage',
                    text: '伤害：',
                },
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
            ],
            name: '榴霰弹',
            description:
                '消耗一点能量射出一发带有爆炸弹片的榴霰弹，在目标区域降下弹雨。区域内的敌军受到伤害并被减速。榴霰弹将给予目标区域的视野。榴霰弹的能量每过{abilitychargerestoretime}秒恢复1点。',
            lore: '卡德尔的模块化步枪还能发射燃烧弹，对攻击战壕中的敌人很有用。',
            notes: ['总共造成11次伤害，第一次在技能生效时，接下来每秒造成一次伤害。', '不会对建筑造成伤害。', '将拥有目标区域的视野。'],
        },
        {
            ability_classname: 'imba_sniper_headshot',
            ability_specials: [
                {
                    ability_special: 'damage',
                    text: '伤害：',
                },
                {
                    ability_special: 'proc_chance',
                    text: '%概率：',
                },
                {
                    ability_special: 'knockback_distance',
                    text: '最远击退距离：',
                },
                {
                    ability_special: 'slow_duration',
                    text: '减速持续时间：',
                },
            ],
            name: '爆头',
            description:
                '狙击手提高他的精确度，有一定概率造成额外伤害并击退敌人。敌人距离狙击手越近，击退距离越远。爆头会短暂地降低敌人{slow}%移动和攻击速度。',
            lore: '童年时对潜行兽的胡乱射击现在被练就成攻击敌人的技术。',
            notes: [],
        },
        {
            ability_classname: 'imba_sniper_take_aim',
            ability_specials: [
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'headshot_chance',
                    text: '%爆头几率：',
                },
                {
                    ability_special: 'active_attack_range_bonus',
                    text: '攻击距离加成：',
                },
                {
                    ability_special: 'bonus_armor',
                    text: '护甲：',
                },
            ],
            name: '瞄准',
            description: '提升护甲、爆头几率和攻击距离。持续时间内自身减速{slow}%。',
            lore: '卡德尔总是保持自己待在远处的安全距离，同时他仍然可以作为狙击手进行完美的射击。',
            notes: [],
        },
        {
            ability_classname: 'imba_sniper_assassinate',
            ability_specials: [
                {
                    ability_special: 'scepter_stun_duration',
                    text: '眩晕时间：',
                },
                {
                    ability_special: 'scepter_cast_point',
                    text: '瞄准持续时间：',
                },
            ],
            name: '暗杀',
            description:
                '狙击手锁定一个目标敌方单位，经过短时间瞄准后从远距离射出一发毁灭性的子弹，对目标造成狙击手的攻击伤害 + 额外伤害及短暂眩晕。每当狙击手击杀敌方英雄时就会重置暗杀的冷却时间。',
            lore: '为了完成预言然后返回家乡，卡德尔必须和参加古老考验那天一样，做出完美的射击。',
            scepter_description: '暗杀释放得更快，并眩晕敌方目标。',
            notes: ['准星效果只对队友可见。', '隐身不能躲避该技能弹道。'],
        },
        {
            ability_classname: 'imba_sniper_keen_scope',
            ability_specials: [
                {
                    ability_special: 'bonus_range',
                    text: '攻击距离加成：',
                },
            ],
            name: '基恩瞄准镜',
            description: '增加狙击手的攻击距离。',
            notes: [],
        },
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: 'special_bonus_unique_imba_sniper_2',
                    name: '-{s:bonus_AbilityChargeRestoreTime}秒 榴霰弹充能',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_sniper_3',
                    name: '+{s:bonus_knockback_distance} 最高爆头击退距离',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_sniper_4',
                    name: '+{s:bonus_duration}秒 瞄准持续时间',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_sniper_5',
                    name: '+{s:bonus_slow_movement_speed}% 榴霰弹减速',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_sniper_headshot_damage',
                    name: '+{s:bonus_damage} 爆头伤害',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_sniper_take_aim_armor',
                    name: '+{s:bonus_bonus_armor} 瞄准护甲',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_sniper_shrapnel_damage',
                    name: '+{s:bonus_shrapnel_damage}% 榴霰弹伤害',
                },
            ],
        },
    ],
    FacetArray_B: [
        {
            facet_classname: 'sniper_facets_imba_1',
            name: '吉利服 | 散弹',
            description: '开启瞄准后狙击手的攻击不会使他在战争迷雾中现形。 榴霰弹的减速和伤害提升，但是持续时间减少。',
            related_abilities: [
                {
                    ability_classname: 'imba_sniper_shrapnel',
                    description: '榴霰弹的减速和伤害提升，但是持续时间减少。',
                },
                {
                    ability_classname: 'imba_sniper_take_aim',
                    description: '开启瞄准后狙击手的攻击不会使他在战争迷雾中现形。',
                },
            ],
            related_talents: [],
        },
    ],
    ModifierArray: [
        {
            modifier_classname: 'modifier_imba_sniper_concussive_grenade_slow',
            name: '震荡手雷减速',
            description: '被减速50%%，同时被缴械。',
        },
        {
            modifier_classname: 'modifier_imba_sniper_shrapnel_charge_counter',
            name: '榴霰弹能量点数',
            description: '只要拥有能量点数就能随时随地施放榴霰弹。',
        },
        {
            modifier_classname: 'modifier_imba_sniper_shrapnel_slow',
            name: '霰弹减速',
            description: '移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。',
        },
        {
            modifier_classname: 'modifier_imba_sniper_assassinate',
            name: '暗杀',
            description: '狙击手瞄准了你的脑袋！',
        },
        {
            modifier_classname: 'modifier_imba_sniper_headshot_slow',
            name: '爆头停滞',
            description: '狙击手的爆头使其停滞！',
        },
        {
            modifier_classname: 'modifier_imba_sniper_take_aim_bonus',
            name: '瞄准',
            description: '100%爆头几率；移动速度被减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。',
        },
    ],
};
