import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: 'imba_ogre_magi_dumb_luck',
            ability_specials: [
                {
                    ability_special: 'mana_per_str',
                    text: '每点力量提供最大魔法：',
                },
                {
                    ability_special: 'mana_regen_per_str',
                    text: '每点力量提供魔法恢复：',
                },
            ],
            name: '傻福',
            description: '食人魔魔法师的智力值上限为0。他通过力量来获得魔法和魔法恢复。',
            notes: [],
        },
        {
            ability_classname: 'imba_ogre_magi_fireblast',
            ability_specials: [
                {
                    ability_special: 'stun_duration',
                    text: '眩晕时间：',
                },
                {
                    ability_special: 'fireblast_damage',
                    text: '火焰爆轰伤害：',
                },
            ],
            name: '火焰爆轰',
            description: '以一波火焰轰击一个敌方单位，造成伤害并使目标眩晕。',
            lore: '食人魔魔法师很容易就能被逗乐，玩火就能玩上几个小时。',
            notes: ['触发多重施法时，两次火焰爆轰之间有{multicast_delay}秒的间隔。'],
        },
        {
            ability_classname: 'imba_ogre_magi_smash',
            ability_specials: [
                {
                    ability_special: 'damage',
                    text: '火球伤害：',
                },
                {
                    ability_special: 'duration',
                    text: '护盾持续时间：',
                },
                {
                    ability_special: 'damage_absorb_pct',
                    text: '%伤害吸收：',
                },
            ],
            name: '烈火护盾',
            description:
                '创造一个围绕友军目标的护盾，吸收接下来{attacks}次来自敌方英雄攻击的一定百分比伤害。吸收伤害后向攻击者发射火球。可以对防御塔施放。',
            notes: ['触发多重施法时，{multicast_fireshield_aoe}范围内的友方单位将随机获得烈火护盾效果。'],
        },
        {
            ability_classname: 'imba_ogre_magi_unrefined_fireblast',
            ability_specials: [
                {
                    ability_special: 'stun_duration',
                    text: '眩晕时间：',
                },
            ],
            name: '未精通的火焰爆轰',
            description:
                '操控一波火焰轰击一个敌方单位，造成{base_damage} + {str_multiplier}倍食人魔力量的伤害并使目标眩晕。魔法消耗为食人魔魔法师当前魔法的{scepter_mana}%。',
            lore: '食人魔魔法师关于“谁先施法”的自我争论最后用同时施法解决了。',
            notes: ['触发多重施法时，两次火焰爆轰之间有{multicast_delay}秒的间隔。'],
        },
        {
            ability_classname: 'imba_ogre_magi_ignite',
            ability_specials: [
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'burn_damage',
                    text: '燃烧伤害：',
                },
                {
                    ability_special: 'slow_movement_speed_pct',
                    text: '%移动速度减缓：',
                },
            ],
            name: '引燃',
            description: '使目标和另一个随机单位浸透在挥发性化学物质中，导致其瞬间被火焰吞噬。目标处在极度痛苦之中，受到伤害并且移动缓慢。',
            lore: '准备好！',
            notes: [
                '多重施法将使此技能有几率对{ignite_multicast_aoe}范围内的随机敌方单位进行多次施放。',
                '引燃现在击中已受到作用的单位后会增加持续时间。',
            ],
        },
        {
            ability_classname: 'imba_ogre_magi_bloodlust',
            ability_specials: [
                {
                    ability_special: 'bonus_movement_speed',
                    text: '%额外移动速度：',
                },
                {
                    ability_special: 'bonus_attack_speed',
                    text: '额外攻击速度：',
                },
                {
                    ability_special: 'self_bonus',
                    text: '对己攻击速度加成：',
                },
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
            ],
            name: '嗜血术',
            description: '激起一个友方单位的狂暴，增加其移动和攻击速度。对食人魔魔法师自身施放时攻击速度加成更高。可以对防御塔施放。',
            lore: '“跑来跑去可没有打人爽……太无聊了。”',
            notes: ['触发多重施法时，{multicast_bloodlust_aoe}范围内的友方单位将随机获得嗜血术效果。'],
        },
        {
            ability_classname: 'imba_ogre_magi_multicast',
            ability_specials: [
                {
                    ability_special: 'multicast_2_times',
                    text: '%2X施放概率：',
                },
                {
                    ability_special: 'multicast_3_times',
                    text: '%3X施放概率：',
                },
                {
                    ability_special: 'multicast_4_times',
                    text: '%4X施放概率：',
                },
            ],
            name: '多重施法',
            description: '使食人魔魔法师在单次施法中有概率多次施放同一技能和物品。',
            lore: '尽管很大程度上受到智商的制约，但食人魔魔法师仍能依靠纯熟的技巧在战斗中取胜。',
            notes: [
                '只有指向性技能和物品有几率触发多重施法。',
                '指向性技能和物品额外对食人魔周围一定作用范围内敌人和中立生物生效。火焰爆轰和未精通的火焰爆轰将对同个目标生效多次。',
            ],
        },
        {
            ability_classname: 'imba_ogre_magi_frost_armor',
            ability_specials: [
                {
                    ability_special: 'armor_bonus',
                    text: '护甲增益：',
                },
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'movespeed_slow',
                    text: '%移动速度减缓：',
                },
                {
                    ability_special: 'attackspeed_slow',
                    text: '攻击速度降低：',
                },
                {
                    ability_special: 'slow_duration',
                    text: '减速持续时间：',
                },
            ],
            name: '寒冰盔甲',
            description: '食人魔冰霜法师召唤一层看不见的冰气围住目标友方单位，提高它的护甲值并短暂减速任何胆敢攻击它的敌人。',
            notes: [],
        },
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: 'special_bonus_unique_imba_ogre_magi',
                    name: '+{s:bonus_bonus_attack_speed} 嗜血术攻击速度',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_ogre_magi_2',
                    name: '+{s:bonus_fireblast_damage} 火焰爆轰伤害',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_ogre_magi_3',
                    name: '攻击有{s:value}%几率触发火焰爆轰',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_ogre_magi_4',
                    name: '+{s:bonus_burn_damage} 引燃每秒伤害',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_ogre_magi_5',
                    name: '-{s:bonus_AbilityCooldown}秒 火焰爆轰冷却',
                    description: '也会减少未精通的火焰爆轰的冷却时间',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_ogre_magi_dumb_luck_mana',
                    name: '+{s:bonus_mana_per_str}/{s:bonus_mana_regen_per_str} 傻福力量提供魔法/魔法恢复',
                },
            ],
        },
    ],
    FacetArray_B: [
        {
            facet_classname: 'ogre_magi_facets_imba_1',
            name: '大有希望 | 曲线学习',
            description:
                '多重施法几率提升，数值为食人魔魔法师力量值的{s:bonus_strength_mult}%。 所有技能和天赋的等级要求降低了{s:bonus_required_level}级。一级时会获得{s:bonus_level_one_ability_points}点技能点，二级时会获得{s:bonus_level_two_ability_points}点技能点。',
            related_abilities: [
                {
                    ability_classname: 'imba_ogre_magi_multicast',
                    description: '多重施法几率提升，数值为食人魔魔法师力量值的{strength_mult}%。',
                },
            ],
            related_talents: [],
        },
    ],
    ModifierArray: [
        {
            modifier_classname: 'modifier_imba_ogre_magi_dumb_luck',
            name: '傻福',
            description: '食人魔魔法师的智力值上限为0。他通过力量来获得魔法和魔法恢复。',
        },
        {
            modifier_classname: 'modifier_imba_ogre_magi_smash_buff',
            name: '烈火护盾',
            description: '吸收一定百分比的伤害，并对攻击者发射火球。',
        },
        {
            modifier_classname: 'modifier_imba_ogre_magi_bloodlust',
            name: '嗜血术',
            description: '移动速度提升{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%，攻击速度提升{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}。',
        },
        {
            modifier_classname: 'modifier_imba_ogre_magi_ignite',
            name: '引燃',
            description: '你着火了！受到持续伤害并减速{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。',
        },
        {
            modifier_classname: 'modifier_imba_ogre_magi_item_multicast',
            name: '多重施法',
            description: '每次施放技能或使用物品都可以触发。',
        },
        {
            modifier_classname: 'modifier_imba_ogre_magi_frost_armor',
            name: '寒冰盔甲',
            description: '护甲值提高{MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS}。敌方近战单位会受到移动和攻击减速。',
        },
        {
            modifier_classname: 'modifier_imba_ogre_magi_frost_armor_slow',
            name: '寒冰盔甲减速',
            description: '移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%，攻击速度降低{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}。',
        },
    ],
};
