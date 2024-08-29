import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: 'imba_silencer_curse_of_the_silent',
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
                    ability_special: 'duration',
                    text: '基础持续时间：',
                },
                {
                    ability_special: 'silence_duration',
                    text: '沉默持续时间：',
                },
                {
                    ability_special: 'movespeed',
                    text: '%移动速度减缓：',
                },
            ],
            name: '奥术诅咒',
            description:
                '诅咒目标区域，使敌方英雄持续受到伤害，并且移动速度被减缓。期间受到作用的英雄一旦施放技能，他们就会短时间内被沉默。目标被沉默时不计入负面效果的持续时间。',
            lore: '无法使用咒语对诺崇来说不是什么问题，但对他的敌人来说，这可是个大问题。',
            notes: ['非英雄单位也会受到作用。', '会立刻造成首次伤害。'],
        },
        {
            ability_classname: 'imba_silencer_glaives_of_wisdom',
            ability_specials: [
                {
                    ability_special: 'intellect_damage_pct',
                    text: '%智力值伤害系数：',
                },
                {
                    ability_special: 'int_steal',
                    text: '智力窃取：',
                },
                {
                    ability_special: 'int_steal_duration',
                    text: '窃取持续时间：',
                },
            ],
            name: '智慧之刃',
            description:
                '沉默术士用他的智慧强化刀刃，每次攻击窃取目标的智力，并造成基于他智力值的额外伤害。沉默术士。攻击同个目标{stacks_for_silence}次后敌人会被沉默{silence_duration}秒。',
            lore: '尽管无法使用传统咒语，但诺崇的风蚀之寒血统赋予他一种诡异的智慧，在肉搏中助他一臂之力。',
            shard_description: '提升每次攻击的智力窃取数值和持续时间。',
            notes: ['叠加效果会在{debuff_linger_duration}秒后重置。', '智慧之刃的沉默持续时间内不会获得叠加效果。'],
        },
        {
            ability_classname: 'imba_silencer_last_word',
            ability_specials: [
                {
                    ability_special: 'damage_per_silence',
                    text: '每个沉默效果伤害：',
                },
                {
                    ability_special: 'slow_per_silence',
                    text: '%每个沉默效果减速：',
                },
            ],
            name: '遗言',
            description: '沉默术士附近{radius}范围内的敌人每受到一个沉默效果的影响，就会被减速并受到每秒伤害。',
            lore: '诺崇的敌人念出的咒语往往将成为他们的遗言。',
            notes: [],
        },
        {
            ability_classname: 'imba_silencer_global_silence',
            ability_specials: [
                {
                    ability_special: 'AbilityDuration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'first_duration',
                    text: '第一次持续时间：',
                },
                {
                    ability_special: 'second_duration',
                    text: '第二次持续时间：',
                },
            ],
            name: '全领域静默',
            description: '沉默术士停止一切声音，阻止地图上所有敌方英雄和单位施法。',
            lore: '随着大地一震，所有的魔法和声音都停止了，诺崇实现了他的预言。',
            scepter_description: '全领域静默对英雄施加奥术诅咒。',
            notes: ['沉默效果对隐身和减益免疫单位有效，但是期间获得减益免疫状态将移除该效果。'],
        },
        {
            ability_classname: 'imba_silencer_brain_drain',
            ability_specials: [],
            name: '智力外流',
            description: '如果沉默术士击杀了敌方英雄，他将永久窃取{permanent_int_steal_amount}点智力。',
            shard_description: '每次击杀窃取的智力值提升至{permanent_int_steal_amount}点。',
            notes: [
                '沉默术士无需完成击杀就能永久智力，只要敌方英雄在沉默术士附近{permanent_int_steal_range}范围内阵亡或者死亡时带有沉默术士的负面效果即可。',
            ],
        },
        {
            ability_classname: 'imba_silencer_irrepressible',
            ability_specials: [],
            notes: [],
        },
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: 'special_bonus_unique_imba_silencer',
                    name: '+{s:bonus_damage} 奥术诅咒伤害',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_silencer_2',
                    name: '全领域静默不可驱散',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_silencer_3',
                    name: '+{s:bonus_intellect_damage_pct}% 智慧之刃伤害',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_silencer_4',
                    name: '+{s:bonus_damage_per_silence}/{s:bonus_slow_per_silence}% 遗言伤害/减速',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_silencer_7',
                    name: '-{s:value}秒 全领域静默冷却',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_silencer_glaives_bounces',
                    name: '{s:bonus_bounce_count} 智慧之刃弹射',
                    description: '智慧之刃向{s:bonus_bounce_range}范围内的目标弹射。',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_silencer_arcane_curse_undispellable',
                    name: '奥术诅咒不可驱散',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_silencer_arcane_curse_charges',
                    name: '{s:bonus_AbilityCharges} 奥术诅咒能量点数',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_silencer_arcane_curse_duration',
                    name: '+{s:bonus_duration}/{s:bonus_silence_duration}秒 奥术诅咒基础/沉默持续时间',
                },
            ],
        },
    ],
    FacetArray_B: [
        {
            facet_classname: 'silencer_facets_imba_1',
            name: '无法抑制 | 寂静回荡',
            description: '沉默术士不会被沉默。 全领域静默在一个单位身上第一次结束后还会再次施加。',
            related_abilities: [
                {
                    ability_classname: 'imba_silencer_global_silence',
                    description: '全领域静默在一个单位身上第一次结束后还会再次施加。',
                },
            ],
            related_talents: [],
        },
    ],
    ModifierArray: [
        {
            modifier_classname: 'modifier_imba_silencer_curse_of_the_silent',
            name: '奥术诅咒',
            description: '持续受到伤害，并且移动速度被减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。一旦施放技能，持续时间就会延长。',
        },
        {
            modifier_classname: 'modifier_imba_silencer_last_word',
            name: '遗言',
            description: '魔咒时间结束，或者施放魔法就会受到伤害，并被沉默。',
        },
        {
            modifier_classname: 'modifier_imba_silencer_last_word_disarm',
            name: '被沉默',
            description: '被沉默',
        },
        {
            modifier_classname: 'modifier_imba_silencer_last_word_aura',
            name: '遗言窃取',
            description: '窃取的智力总量',
        },
        {
            modifier_classname: 'modifier_imba_silencer_last_word_silence_checker',
            name: '遗言',
            description: '减速{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%，每秒受到{MODIFIER_PROPERTY_TOOLTIP}点伤害。',
        },
        {
            modifier_classname: 'modifier_imba_silencer_glaives_of_wisdom_buff_counter',
            name: '智慧之刃',
            description: '暂时窃取的智力',
        },
        {
            modifier_classname: 'modifier_imba_silencer_glaives_of_wisdom_silence_debuff_counter',
            name: '智慧之刃',
            description: '被沉默术士击中。',
        },
        {
            modifier_classname: 'modifier_imba_silencer_glaives_of_wisdom_debuff_bonus',
            name: '智慧之刃',
            description: '被沉默。',
        },
        {
            modifier_classname: 'modifier_imba_silencer_glaives_of_wisdom',
            name: '永久智力窃取',
            description:
                '沉默术士从他击杀的任意敌方英雄身上永久窃取{MODIFIER_PROPERTY_TOOLTIP}点智力，同样还有{MODIFIER_PROPERTY_TOOLTIP}范围内阵亡的任意敌方英雄。',
        },
        {
            modifier_classname: 'modifier_imba_silencer_glaives_of_wisdom_postgame',
            name: '被沉默术士击杀或在沉默术士身边阵亡后被他窃取的智力。',
        },
        {
            modifier_classname: 'modifier_imba_silencer_int_steal',
            name: '智力窃取',
            description: '任何敌方英雄在925范围内死亡，沉默术士就能永久窃取其2点智力。',
        },
        {
            modifier_classname: 'modifier_imba_silencer_global_silence',
            name: '全领域静默',
            description: '所有英雄都被沉默。',
        },
        {
            modifier_classname: 'modifier_imba_silencer_glaives_of_wisdom_debuff_counter',
            name: '智慧之刃',
            description: '暂时失去智力',
        },
        {
            modifier_classname: 'modifier_imba_silencer_glaives_of_wisdom_attack_counter',
            name: '智慧之刃',
            description: '智慧之刃沉默攻击计数',
        },
        {
            modifier_classname: 'modifier_imba_silencer_brain_drain',
            name: '智力外流',
            description:
                '沉默术士从他击杀的任意敌方英雄身上永久窃取{MODIFIER_PROPERTY_TOOLTIP}点智力，同样还有{MODIFIER_PROPERTY_TOOLTIP}范围内阵亡的任意敌方英雄。',
        },
    ],
};
