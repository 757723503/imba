import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: 'imba_antimage_mana_break',
            ability_specials: [
                {
                    ability_special: 'percent_damage_per_burn',
                    text: '%损毁魔法值伤害系数：',
                },
                {
                    ability_special: 'mana_per_hit',
                    text: '每次攻击损毁魔法：',
                },
                {
                    ability_special: 'mana_per_hit_pct',
                    text: '%每次攻击损毁最大魔法值：',
                },
            ],
            name: '法力损毁',
            description: '每次攻击损毁目标魔法值，并造成相当于损毁魔法值一定百分比的伤害。',
            lore: '一种格斗技巧，改良自星隐寺僧侣们的温和招式，可以让魔法能量反噬其拥有者。',
            notes: ['幻象继承的法力损毁效果为{illusion_percentage}%。'],
        },
        {
            ability_classname: 'imba_antimage_persectur',
            ability_specials: [
                {
                    ability_special: 'move_slow_min',
                    text: '%最低移动速度减缓：',
                },
                {
                    ability_special: 'move_slow_max',
                    text: '%最高移动速度减缓：',
                },
                {
                    ability_special: 'slow_duration',
                    text: '减速持续时间：',
                },
            ],
            name: '绝人之路',
            description:
                '攻击会根据敌人缺失的魔法值造成减速。{mana_threshold}%魔法时造成最低减速，{mana_threshold}%魔法时造成最高减速。敌人高于{mana_threshold}%魔法时没有效果。',
            notes: ['幻象造成全额效果。'],
        },
        {
            ability_classname: 'imba_antimage_blink',
            ability_specials: [
                {
                    ability_special: 'empowered_mana_break_debuff_duration_tooltip',
                    text: '负面状态持续时间：',
                },
            ],
            name: '闪烁',
            description: '短距离传送，能让敌法师自由出入战场。',
            lore: '在与死亡之神遭遇时，敌法师明白了让人捉摸不定是多么重要。',
            scepter_description:
                '施放闪烁后，{empowered_mana_break_duration}秒内下一次的法力损毁将额外燃烧{empowered_max_burn_pct_tooltip}%最大魔法值，并且阻止目标在短时间内恢复或获得魔法。这个负面效果无法驱散。闪烁的冷却时间减少{bonus_AbilityCooldown}秒。',
            notes: ['闪烁可以躲避多种飞行过程中的攻击和技能弹道。'],
        },
        {
            ability_classname: 'imba_antimage_spell_shield',
            ability_specials: [
                {
                    ability_special: 'spell_shield_resistance',
                    text: '%魔法抗性：',
                },
            ],
            name: '法术护盾',
            description: '提高敌法师的魔法抗性。',
            lore: '多年的冥想和对复仇的执着强化了敌法师的皮肤，可以更好地抵御操控魔法的对手。',
            notes: ['与其他提高魔法抗性的物品和技能叠加。'],
        },
        {
            ability_classname: 'imba_antimage_counterspell',
            ability_specials: [
                {
                    ability_special: 'magic_resistance',
                    text: '%魔法抗性：',
                },
                {
                    ability_special: 'duration',
                    text: '外壳持续时间：',
                },
                {
                    ability_special: 'reflected_spell_amp',
                    text: '%反弹技能的技能增强：',
                },
            ],
            name: '法术反制',
            description: '被动提升魔法抗性。可以主动开启法术反制，创造一个环绕敌法师的反魔法外壳，抵挡所有指向性技能。',
            lore: '经过潜心的专注后，敌法师将内在的韧性转为精心的报复。',
            shard_description: '法术反制被动提供光环，降低敌人的技能伤害。降低效果对近距离的敌人更强。',
            notes: ['破坏会使被动魔法抗性失效。'],
        },
        {
            ability_classname: 'imba_antimage_counterspell_ally',
            ability_specials: [
                {
                    ability_special: 'reflected_spell_amp',
                    text: '%反弹技能的技能增强：',
                },
            ],
            name: '友军法术反制',
            description:
                '在附近一个友军目标周围制造一个反魔法外壳，抵挡所有指向性技能。法术反制或友军法术反制抵挡技能后，都会在敌人身旁产生一个敌法师的幻象。',
            notes: [],
        },
        {
            ability_classname: 'imba_antimage_mana_void',
            ability_specials: [
                {
                    ability_special: 'mana_void_damage_per_mana',
                    text: '伤害系数：',
                },
                {
                    ability_special: 'mana_void_ministun',
                    text: '眩晕时间：',
                },
                {
                    ability_special: 'mana_void_aoe_radius',
                    text: '作用范围：',
                },
                {
                    ability_special: 'bonus_attack_damage',
                    text: '法力渴望攻击力加成上限：',
                },
            ],
            name: '法力虚空',
            description: '根据目标损失的魔法值，对目标和其周围的敌人造成伤害。所有受到伤害的单位都会被短暂眩晕。',
            lore: '敌人倒下之后，将因使用奥术而受到敌法师的惩戒。',
            notes: ['伤害的计算根据主目标失去的魔法，但是对作用范围内所有敌人均有效。', '破坏会使法力渴望的视野和攻击力加成失效。'],
        },
        {
            ability_classname: 'imba_antimage_mana_overload',
            ability_specials: [
                {
                    ability_special: 'duration',
                    text: '幻象持续时间：',
                },
                {
                    ability_special: 'outgoing_damage',
                    text: '%幻象攻击力减少：',
                },
            ],
            name: '闪烁碎片',
            description: '使一个幻象闪烁至敌方目标或地点，对其发动攻击，持续一段较短的时间。施放法术反制时碎片幻象也有效果。',
            notes: [],
        },
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: 'special_bonus_unique_imba_antimage',
                    name: '-{s:bonus_AbilityCooldown}秒 闪烁冷却',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_antimage_2',
                    name: '-{s:bonus_AbilityCooldown}秒 法力虚空冷却',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_antimage_3',
                    name: '+{s:bonus_AbilityCastRange} 闪烁施法距离',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_antimage_4',
                    name: '+{s:bonus_magic_resistance}% 法术反制魔法抗性',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_antimage_5',
                    name: '+{s:bonus_move_slow_max}% 绝人之路最高减速',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_antimage_6',
                    name: '+{s:bonus_mana_void_damage_per_mana} 法力虚空伤害系数',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_antimage_7',
                    name: '+{s:bonus_mana_per_hit_pct}% 法力损毁最大魔法值',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_antimage_8',
                    name: '+{s:bonus_mana_void_ministun}秒 法力虚空眩晕',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_antimage_manavoid_aoe',
                    name: '+{s:bonus_mana_void_aoe_radius} 法力虚空范围',
                },
            ],
        },
    ],
    FacetArray_B: [
        {
            facet_classname: 'antimage_facets_imba_1',
            name: '灭法之镜 | 法力渴望',
            description: '法术反制和友军法术反制会把技能反弹给施法者，而不只是抵挡。 敌法师在敌人的魔法较低时获得攻击力。',
            related_abilities: [
                {
                    ability_classname: 'imba_antimage_counterspell',
                    description: '友军法术反制会把技能反弹给施法者，技能的伤害还得到了增强。',
                },
                {
                    ability_classname: 'imba_antimage_counterspell_ally',
                    description: '友军法术反制会把技能反弹给施法者，技能的伤害还得到了增强。',
                },
                {
                    ability_classname: 'imba_antimage_mana_void',
                    description:
                        '敌方英雄的魔法值低于{min_bonus_pct}%时会被动提供攻击力，而且魔法值越低，提升效果越大。<br><br>如果敌人的魔法值低于{min_bonus_pct}%，敌法师获得攻击力加成的最大值，以及该英雄的视野和真实视域。会施加给{thirst_range}范围内的敌方英雄。每个英雄提供的加成效果可以叠加。',
                },
            ],
            related_talents: [],
        },
    ],
    ModifierArray: [
        {
            modifier_classname: 'modifier_imba_antimage_mana_thirst',
            name: '法力渴望',
            description: '你感觉到有敌人的魔法值很低。攻击力提升{MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE}点。',
        },
        {
            modifier_classname: 'modifier_imba_antimage_mana_thirst_vision',
            name: '法力渴望',
            description: '敌法师感觉到你魔法不足，而且准确地知道你的位置。',
        },
        {
            modifier_classname: 'modifier_imba_antimage_thirst_effect',
            name: '法力渴望',
            description: '你感觉到有敌人的魔法值很低。攻击力提升{MODIFIER_PROPERTY_TOOLTIP}点。',
        },
        {
            modifier_classname: 'modifier_imba_antimage_persectur_slow',
            name: '绝人之路减速',
            description: '减速{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。',
        },
        {
            modifier_classname: 'modifier_imba_antimage_empowered_mana_break',
            name: '法力损毁',
            description: '下一次法力损毁会燃烧更多魔法。',
        },
        {
            modifier_classname: 'modifier_imba_antimage_empowered_mana_break_debuff',
            name: '法力损毁',
            description: '无法获得或恢复魔法。',
        },
        {
            modifier_classname: 'modifier_imba_antimage_counterspell',
            name: '法术反制护盾',
            description: '抵挡所有指向性法术，并反弹回敌人自身。',
        },
        {
            modifier_classname: 'modifier_imba_antimage_mana_void',
            name: '冷却时间增加',
            description: '由于法力虚空，技能的冷却时间增加。',
        },
        {
            modifier_classname: 'modifier_imba_antimage_dampen_magic',
            name: '法术弱点',
            description: '造成的技能伤害降低{MODIFIER_PROPERTY_SPELL_AMPLIFY_PERCENTAGE}%',
        },
        {
            modifier_classname: 'modifier_imba_antimage_dampen_magic_bonus',
            name: '法术弱点（近距离）',
            description: '离敌法师太近，受到的法术弱点效果越强。',
        },
    ],
};
