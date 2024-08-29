import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: 'imba_pangolier_swashbuckle',
            ability_specials: [
                {
                    ability_special: 'dash_range',
                    text: '冲刺距离：',
                },
                {
                    ability_special: 'range',
                    text: '刺剑距离：',
                },
                {
                    ability_special: 'damage',
                    text: '每次伤害：',
                },
                {
                    ability_special: 'start_radius',
                    text: '刺击宽度：',
                },
                {
                    ability_special: 'strikes',
                    text: '刺剑次数：',
                },
            ],
            name: '虚张声势',
            description: '石鳞剑士先冲向目标地点，再向指示方向上的所有敌人刺出数剑。\\n\\n刺剑有几率触发幸运一击。',
            lore: '石鳞剑士的剑比舌头还要灵活。',
            notes: [],
        },
        {
            ability_classname: 'imba_pangolier_shield_crash',
            ability_specials: [
                {
                    ability_special: 'damage',
                    text: '伤害：',
                },
                {
                    ability_special: 'hero_shield',
                    text: '每个英雄提供护盾：',
                },
                {
                    ability_special: 'duration',
                    text: '护盾持续时间：',
                },
                {
                    ability_special: 'radius',
                    text: '作用范围：',
                },
                {
                    ability_special: 'max_damage_increase_pct',
                    text: '%最高伤害增加：',
                },
                {
                    ability_special: 'min_damage_increase_pct',
                    text: '%最低伤害增加：',
                },
                {
                    ability_special: 'max_barrier_increase_pct_tooltip',
                    text: '%最高护盾增加：',
                },
                {
                    ability_special: 'slow',
                    text: '%移动速度减缓：',
                },
                {
                    ability_special: 'slow_duration',
                    text: '减速持续时间：',
                },
            ],
            name: '甲盾冲击',
            description:
                '石鳞剑士跃入空中，再落向当前位置的前方地面造成冲击，对范围内所有敌人造成伤害和减速。冲击时每击中一名敌方英雄，他就能在短时间内获得一定数值的全伤害护盾。\\n\\n地雷滚滚过程中使用甲盾冲击将会保持前进，并且可以使地雷滚滚跨过地形障碍。\\n\\n地雷滚滚期间甲盾冲击的冷却时间会有所减少。',
            lore: '只有被敌人层层包围，石鳞剑士才能真正地一展雄风。',
            scepter_description: '甲盾冲击将围绕英雄每90度施放一个刺击2次的虚张声势。',
            notes: [],
        },
        {
            ability_classname: 'imba_pangolier_heartpiercer',
            ability_specials: [],
            name: '一剑穿心',
            description: '石鳞剑士完美把握敌人的动向，灵巧地使剑穿过防御。他的攻击有几率无视护甲并使目标减速，效果经过一定延迟后生效。',
            lore: '这些蠢材对真正的护甲一无所知……',
            notes: ['攻击肉山或建筑时不会触发。'],
        },
        {
            ability_classname: 'imba_pangolier_lucky_shot',
            ability_specials: [
                {
                    ability_special: 'chance_pct',
                    text: '%概率：',
                },
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'attack_slow',
                    text: '攻击速度降低：',
                },
                {
                    ability_special: 'armor',
                    text: '护甲降低：',
                },
            ],
            name: '幸运一击',
            description: '石鳞剑士孤注一掷，让命运决定敌人的下场。石鳞剑士的攻击或技能拥有一定几率大幅降低攻击速度，同时削弱护甲。',
            lore: '石鳞剑士出剑更多时候是因心血来潮，而非理智。',
            notes: [],
        },
        {
            ability_classname: 'imba_pangolier_gyroshell',
            ability_specials: [
                {
                    ability_special: 'damage_pct',
                    text: '%总攻击力伤害：',
                },
                {
                    ability_special: 'cast_time_tooltip',
                    text: '变形时间：',
                },
                {
                    ability_special: 'forward_move_speed',
                    text: '滚动速度：',
                },
                {
                    ability_special: 'hit_radius',
                    text: '作用范围：',
                },
                {
                    ability_special: 'stun_duration',
                    text: '眩晕持续时间：',
                },
                {
                    ability_special: 'knockback_radius',
                    text: '击退距离：',
                },
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'shield_crash_cooldown',
                    text: '甲盾冲击冷却时间：',
                },
            ],
            name: '地雷滚滚',
            description:
                '石鳞剑士卷成一个减益免疫状态的圆球，拥有{magic_resistance}%魔法抗性加成，隆隆地向前滚去。滚动时移动速度提升，可以碾过树木，但是转身速率降低。敌人被击中后会被击退，然后受到基于石鳞剑士攻击力的伤害，落地时会被眩晕。\\n\\n与地形障碍相撞后会暂时停止滚动，并且滚动方向变反。\\n\\n地雷滚滚期间，甲盾冲击的冷却时间会有所减少。\\n\\n驱散类型：弱驱散',
            lore: '他的祖先只能找到安全感的地方，石鳞剑士却看见了机遇……',
            notes: [
                '敌人在技能期间可以多次被眩晕，但是只有上一次眩晕结束后才会再次被眩晕。',
                '即使石鳞剑士在滚动时被控制，他依然会对范围内敌人造成眩晕和击退。',
            ],
        },
        {
            ability_classname: 'imba_pangolier_fortune_favors_the_bold',
            ability_specials: [
                {
                    ability_special: 'aura_radius',
                    text: '范围：',
                },
                {
                    ability_special: 'chance_reduce',
                    text: '%几率降低：',
                },
            ],
            name: '天佑勇者',
            description: '附近敌人攻击石鳞剑士时，他们触发物品和技能的随机类攻击特效的几率有所降低。',
            notes: ['对英雄技能和物品有效。', '效果是特效发生的几率相对降低。'],
        },
        {
            ability_classname: 'imba_pangolier_gyroshell_stop',
            ability_specials: [],
            name: '停止滚动',
            description: '停！',
            lore: '只要唐特·培林愿意，他就能停下。',
            notes: [],
        },
        {
            ability_classname: 'imba_pangolier_rollup',
            ability_specials: [
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'rollup_bounce_duration',
                    text: '滚离持续时间：',
                },
            ],
            name: '卷土重来',
            description:
                '石鳞剑士将自身卷成保护性的圆球，获得减益免疫状态，拥有{magic_resistance}%魔法抗性加成，并且可以转身。可以在地雷滚滚期间施放，暂停滚动。可以在卷土重来期间施放地雷滚滚和甲盾冲击。若敌人在此期间发动攻击，将滚离攻击者，对途中的敌人施加地雷滚滚的伤害/眩晕。',
            notes: [],
        },
        {
            ability_classname: 'imba_pangolier_rollup_stop',
            ability_specials: [],
            name: '中止卷土重来',
            description: '提前中止石鳞剑士的卷土重来。',
            notes: [],
        },
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: 'special_bonus_unique_imba_pangolier',
                    name: '+{s:bonus_range} 虚张声势刺击距离',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_pangolier_3',
                    name: '+{s:bonus_attack_damage}% 攻击力作为虚张声势伤害',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_pangolier_4',
                    name: '-{s:bonus_AbilityCooldown}秒 虚张声势冷却',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_pangolier_5',
                    name: '-{s:bonus_AbilityCooldown}秒 地雷滚滚冷却',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_pangolier_6',
                    name: '+{s:bonus_duration}秒 地雷滚滚持续时间',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_pangolier_shield_crash_herostacks',
                    name: '+{s:bonus_hero_shield} 甲盾冲击每名英雄护盾',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_pangolier_luckyshot_armor',
                    name: '+{s:bonus_armor} 幸运一击降低护甲',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_pangolier_shield_crash_radius',
                    name: '+{s:bonus_radius} 甲盾冲击范围和伤害',
                },
            ],
        },
    ],
    FacetArray_B: [
        {
            facet_classname: 'pangolier_facets_imba_1',
            name: '雷霆万钧 | 二段跳',
            description: '地雷滚滚的移动和转身速度提升，但是持续时间减少。 石鳞剑士可以利用甲盾冲击二段跳，造成更多伤害，获得更强的护盾。',
            related_abilities: [
                {
                    ability_classname: 'imba_pangolier_shield_crash',
                    description: '石鳞剑士可以在半空中再次施放甲盾冲击，造成更高的伤害，并获得更高数值的护盾。',
                },
                {
                    ability_classname: 'imba_pangolier_gyroshell',
                    description: '地雷滚滚的移动和转身速度提升，但是持续时间减少。',
                },
            ],
            related_talents: [],
        },
    ],
    ModifierArray: [
        {
            modifier_classname: 'modifier_imba_pangolier_fortune_favors_the_bold_effect',
            name: '天佑勇者',
            description: '附近敌人的随机类效果在石鳞剑士身上的发生几率降低{MODIFIER_PROPERTY_PSEUDORANDOM_BONUS}%。',
        },
        {
            modifier_classname: 'modifier_imba_pangolier_gyroshell',
            name: '地雷滚滚',
            description: '天然的华丽！',
        },
        {
            modifier_classname: 'modifier_imba_pangolier_heartpiercer_delay',
            name: '一剑穿心生效',
            description: '即将被一剑穿心。',
        },
        {
            modifier_classname: 'modifier_imba_pangolier_heartpiercer_debuff',
            name: '一剑穿心',
            description: '护甲无效，并且被减速{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。',
        },
        {
            modifier_classname: 'modifier_imba_pangolier_shield_crash_buff',
            name: '甲盾冲击',
            description: '吸收{MODIFIER_PROPERTY_TOOLTIP}点伤害。',
        },
        {
            modifier_classname: 'modifier_imba_pangolier_shield_crash_jump',
            name: '甲盾冲击',
            description: '睁大眼睛了吗？',
        },
        {
            modifier_classname: 'modifier_imba_pangolier_shield_crash_slow',
            name: '甲盾冲击',
            description: '移动速度被减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%%%。',
        },
        {
            modifier_classname: 'modifier_imba_pangolier_gyroshell_stunned',
            name: '地雷滚滚眩晕',
            description: '被地雷滚滚眩晕',
        },
        {
            modifier_classname: 'modifier_imba_pangolier_gyroshell_ricochet',
            name: '反弹！',
            description: '石鳞剑士往回反弹，暂时无法控制自己的移动。',
        },
        {
            modifier_classname: 'modifier_imba_pangolier_luckyshot_disarm',
            name: '幸运一击',
            description: '攻击速度降低{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}。护甲降低{MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS}点。',
        },
        {
            modifier_classname: 'modifier_imba_pangolier_rollup',
            name: '卷土重来',
            description: '处于减益免疫状态。',
        },
    ],
};
