import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: 'imba_antimage_mana_break',
            name: '法力损毁',
            description: '每次攻击损毁目标魔法值，并造成相当于损毁魔法值一定百分比的伤害。',
            notes: ['幻象继承的法力损毁效果为{illusion_percentage}%。'],
            lore: '一种格斗技巧，改良自星隐寺僧侣们的温和招式，可以让魔法能量反噬其拥有者。',
            reimagined_effects: [
                // { title: 'imba效果1', description: 'imba效果1' },
                // { title: 'imba效果2', description: 'imba效果2' },
            ],
            ability_specials: [
                { ability_special: 'mana_per_hit', text: '每次攻击损毁魔法：' },
                { ability_special: 'mana_per_hit_pct', text: '每次攻击损毁最大魔法值：', percentage: true },
                { ability_special: 'move_slow', text: '魔法耗尽时减速：', percentage: true },
                { ability_special: 'percent_damage_per_burn', text: '损毁魔法值伤害系数：', percentage: true },
                { ability_special: 'slow_duration', text: '减速持续时间：' },
            ],
        },
        {
            ability_classname: 'imba_antimage_blink',
            name: '闪烁',
            description: '短距离传送，能让敌法师自由出入战场。',
            notes: ['闪烁可以躲避多种飞行过程中的攻击和技能弹道。'],
            lore: '在与死亡之神遭遇时，敌法师明白了让人捉摸不定是多么重要。',
            reimagined_effects: [
                // { title: 'imba效果1', description: 'imba效果1' },
                // { title: 'imba效果2', description: 'imba效果2' },
            ],
            ability_specials: [],
        },
        {
            ability_classname: 'imba_antimage_counterspell',
            name: '法术反制',
            description: '被动提升魔法抗性。可以主动开启法术反制，创造一个环绕敌法师的反魔法外壳，抵挡所有指向性技能。',
            notes: [],
            lore: '经过潜心的专注后，敌法师将内在的韧性转为精心的报复。',
            // reimagined_effects: [{ title: 'Facet_antimage_magebanes_mirror', description: '法术反制会把技能反弹给施法者，技能的伤害还得到了增强。' }],
            ability_specials: [
                { ability_special: 'magic_resistance', text: '魔法抗性：', percentage: true },
                { ability_special: 'duration', text: '外壳持续时间：' },
                { ability_special: 'reflected_spell_amp', text: '反弹技能的技能增强：', percentage: true },
            ],
            shard_description: '法术反制被动提供光环，降低敌人的技能伤害。降低效果对近距离的敌人更强。',
        },
        {
            ability_classname: 'imba_antimage_counterspell_ally',
            name: '友军法术反制',
            description:
                '在附近一个友军目标周围制造一个反魔法外壳，抵挡所有指向性技能。法术反制或友军法术反制抵挡技能后，都会在敌人身旁产生一个敌法师的幻象。',
            notes: [],
            lore: '',
            reimagined_effects: [
                // { title: 'Facet_antimage_magebanes_mirror', description: '友军法术反制会把技能反弹给施法者，技能的伤害还得到了增强。' },
            ],
            ability_specials: [{ ability_special: 'reflected_spell_amp', text: '反弹技能的技能增强：', percentage: true }],
        },
        {
            ability_classname: 'imba_antimage_mana_void',
            name: '法力虚空',
            description: '根据目标损失的魔法值，对目标和其周围的敌人造成伤害。所有受到伤害的单位都会被短暂眩晕。',
            notes: ['伤害的计算根据主目标失去的魔法，但是对作用范围内所有敌人均有效。'],
            lore: '敌人倒下之后，将因使用奥术而受到敌法师的惩戒。',
            // reimagined_effects: [
            //     {
            //         title: 'Facet_antimage_mana_thirst',
            //         description:
            //             '敌方英雄的魔法值低于%min_bonus_pct%%%时会被动提供攻击力，而且魔法值越低，提升效果越大。<br><br>如果敌人的魔法值低于%threshold_pct%%%，敌法师获得攻击力加成的最大值，以及该英雄的视野和真实视域。会施加给%thirst_range%范围内的敌方英雄。每个英雄提供的加成效果可以叠加。',
            //     },
            // ],
            ability_specials: [
                { ability_special: 'mana_void_damage_per_mana', text: '伤害系数：' },
                { ability_special: 'mana_void_ministun', text: '眩晕时间：' },
                { ability_special: 'mana_void_aoe_radius', text: '作用范围：' },
                { ability_special: 'bonus_attack_damage', text: '法力渴望攻击力加成上限：' },
            ],
        },
        {
            ability_classname: 'imba_antimage_mana_overload',
            name: '闪烁碎片',
            description: '使一个幻象闪烁至敌方目标或地点，对其发动攻击，持续一段较短的时间。施放法术反制时碎片幻象也有效果。',
            notes: [],
            lore: '',
            reimagined_effects: [],
            ability_specials: [
                { ability_special: 'duration', text: '幻象持续时间：' },
                { ability_special: 'outgoing_damage', text: '幻象攻击力减少：', percentage: true },
            ],
        },
    ],
    // ModifierArray: [
    //     {
    //         modifier_classname: 'modifier_imba_abaddon_aphotic_shield',
    //         name: '无光之盾',
    //         description: '吸收伤害；吸收的伤害达到最大后将会爆炸并对周围单位造成伤害。',
    //     },
    //     {
    //         modifier_classname: 'modifier_imba_abaddon_frostmourne_debuff',
    //         name: '魔霭诅咒',
    //         description: '移动速度被减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%',
    //     },
    //     {
    //         modifier_classname: 'modifier_imba_abaddon_frostmourne_buff',
    //         name: '魔霭诅咒',
    //         description: '攻击速度提升{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}',
    //     },
    //     {
    //         modifier_classname: 'modifier_imba_abaddon_borrowed_time',
    //         name: '回光返照',
    //         description: '受到的伤害将会转化为治疗效果。',
    //     },
    //     {
    //         modifier_classname: 'modifier_imba_abaddon_borrowed_time_talent',
    //         name: '魔霭献祭',
    //         description: '回光返照生效时持续受到并造成伤害',
    //     },
    // ],
    // StandardArray: [],
    // TalentArray: [
    //     {
    //         talent_classname: 'special_bonus_unique_imba_abaddon',
    //         talents: [
    //             // +{s:bonus_damage_absorb} 无光之盾护盾数值
    //             // +{s:bonus_target_damage} 迷雾缠绕治疗/伤害
    //             // +{s:bonus_curse_attack_speed} 魔霭诅咒攻速加成
    //             // {s:bonus_effect_radius} 范围型迷雾缠绕
    //             // +{s:bonus_curse_dps} 魔霭诅咒每秒伤害
    //             // -{s:bonus_curse_slow}% 魔霭诅咒诅咒减速
    //             // 无光之盾提供+{s:bonus_regen} 生命恢复
    //             // {s:bonus_immolate_damage} 回光返照献祭每秒伤害
    //             // 作用于亚巴顿和{s:bonus_immolate_aoe}范围内所有敌人。
    //             { name: '-{s:bonus_curse_slow}% 魔霭诅咒诅咒减速' }, //1
    //             { name: '无光之盾提供+{s:bonus_regen} 生命恢复' }, //2

    //             { name: '+{s:bonus_curse_dps} 魔霭诅咒每秒伤害' }, //3
    //             { name: '+{s:bonus_target_damage} 迷雾缠绕治疗/伤害' }, //4

    //             { name: '+{s:bonus_damage_absorb} 无光之盾护盾数值' }, //5
    //             { name: '{s:bonus_immolate_damage} 回光返照献祭每秒伤害', description: '作用于亚巴顿和{s:bonus_immolate_aoe}范围内所有敌人。' }, //6

    //             { name: '+{s:bonus_curse_attack_speed} 魔霭诅咒攻速加成' }, //7
    //             { name: '{s:bonus_effect_radius} 范围型迷雾缠绕' }, //8
    //         ],
    //     },
    // ],
    FacetArray_A: [],
    FacetArray_B: [
        {
            facet_classname: 'antimage_facets_imba_1',
            name: '灭法之镜 | 法力渴望',
            description: '法术反制和友军法术反制会把技能反弹给施法者，而不只是抵挡,敌法师在敌人的魔法较低时获得攻击力。 ',
            related_abilities: [
                {
                    ability_classname: 'imba_antimage_counterspell',
                    description: '法术反制会把技能反弹给施法者，技能的伤害还得到了增强。',
                },
                {
                    ability_classname: 'imba_antimage_counterspell_ally',
                    description: '友军法术反制会把技能反弹给施法者，技能的伤害还得到了增强。',
                },
                {
                    ability_classname: 'imba_antimage_mana_void',
                    description:
                        '敌方英雄的魔法值低于%min_bonus_pct%%%时会被动提供攻击力，而且魔法值越低，提升效果越大。<br><br>如果敌人的魔法值低于%threshold_pct%%%，敌法师获得攻击力加成的最大值，以及该英雄的视野和真实视域。会施加给%thirst_range%范围内的敌方英雄。每个英雄提供的加成效果可以叠加。',
                },
            ],
        },
    ],
};
