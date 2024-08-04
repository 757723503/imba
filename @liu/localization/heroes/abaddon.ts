import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: 'imba_abaddon_death_coil',
            name: '死亡缠绕',
            description: '亚巴顿以自身的部分生命为代价，释放出一团致命迷雾，可以对敌方单位造成伤害，或者治疗友方单位。',
            lore: '亚巴顿的气息中充盈着来自魔霭圣池的神秘之汽，他能随意将其释放。',
            notes: ['亚巴顿不能使用此技能自杀。'],
            ability_specials: [
                { ability_special: 'self_damage', text: '%对自身伤害：' },
                { ability_special: 'missile_speed', text: '' },
                { ability_special: 'target_damage', text: '伤害/治疗：' },
                { ability_special: 'heal_amount', text: '' },
                { ability_special: 'effect_radius', text: '' },
            ],
            shard_description: '使迷雾缠绕也会造成攻击伤害，并且施加来自物品和技能的效果。',
        },
        {
            ability_classname: 'imba_abaddon_aphotic_shield',
            name: '无光之盾',
            description:
                '召唤黑暗能量环绕友方单位，创造一个全伤害护盾，护盾在消失前能吸收一定量的伤害。护盾消失或被摧毁后将会爆炸，对附近区域的单位造成伤害，伤害值为护盾的最大吸收量。施放时移除目标身上的负面状态和眩晕效果。\n\n驱散类型：强驱散',
            lore: '升腾的黑雾将敌人的招数一一吞噬，如同吞噬日光。',
            notes: ['不论护盾因持续时间结束或吸收足够伤害后被摧毁都将造成最大伤害。', '爆炸将不会对战争迷雾内单位造成伤害。'],
            ability_specials: [
                { ability_special: 'AbilityCooldown', text: '' },
                { ability_special: 'duration', text: '持续时间：' },
                { ability_special: 'radius', text: '爆炸作用范围：' },
                { ability_special: 'damage_absorb', text: '伤害护盾：' },
                { ability_special: 'regen', text: '' },
                { ability_special: 'absorb_to_damage', text: '%吸收伤害会反弹给附近的敌人。' },
                { ability_special: 'absorb_damage_aoe', text: '反弹伤害范围：' },
            ],
        },
        {
            ability_classname: 'imba_abaddon_the_quickening',
            name: '畅快淋漓',
            description: '亚巴顿附近阵亡的单位会降低他的冷却时间。',
            lore: '',
            notes: [
                '每次亚巴顿附近{radius}范围内有单位阵亡，他的所有冷却时间在非英雄单位阵亡时减少{cooldown_reduction_creeps}秒，英雄阵亡时减少{cooldown_reduction_heroes}秒。',
            ],
            ability_specials: [
                { ability_special: 'cooldown_reduction_creeps', text: '非英雄单位阵亡时减少{cooldown_reduction_creeps}秒' },
                { ability_special: 'cooldown_reduction_heroes', text: '英雄阵亡时减少{cooldown_reduction_heroes}秒' },
                { ability_special: 'radius', text: '%radius%范围' },
            ],
        },
        {
            ability_classname: 'imba_abaddon_withering_mist',
            name: '凋零迷雾',
            description:
                '对敌人造成伤害时会施加凋零迷雾的负面效果，持续%duration%秒。受作用敌人如果血量低于{hp_threshold_pct}%，那么生命恢复、治疗、吸血和技能吸血会降低%heal_reduction_pct%%%。',
            lore: '',
            notes: [''],
            ability_specials: [
                { ability_special: 'hp_threshold_pct', text: '' },
                { ability_special: 'heal_reduction_pct', text: '' },
                { ability_special: 'duration', text: '' },
            ],
        },
        {
            ability_classname: 'imba_abaddon_frostmourne',
            name: '魔霭诅咒',
            description:
                '亚巴顿打击一个敌人，使其受到寒心诅咒的作用，被减速，并且持续受到伤害，同时所有攻击目标的单位将提升攻击速度。对建筑的持续伤害减少{tower_dps_pct}%。',
            lore: '受洗之人能从圣池中汲取能量，而魔霭的恩赐会让一无所知的人逐渐衰弱。',
            notes: ['魔晶升级效果需要选择迷雾缠绕和/或无光之盾。'],
            ability_specials: [
                { ability_special: 'slow_duration', text: '' },
                { ability_special: 'hit_count', text: '' },
                { ability_special: 'curse_duration', text: '持续时间：' },
                { ability_special: 'curse_slow', text: '%移动速度减缓：' },
                { ability_special: 'curse_attack_speed', text: '攻击速度：' },
                { ability_special: 'curse_dps', text: '每秒伤害：' },
                { ability_special: 'curse_interval', text: '' },
            ],
        },
        {
            ability_classname: 'imba_abaddon_borrowed_time',
            name: '回光返照',
            description:
                '启动后所有受到的伤害转而产生治疗效果，启动时还将移除大部分的负面效果。只要技能不在冷却中，在生命值低于%hp_threshold%点时技能会自动启动。\n\n驱散类型：强驱散',
            lore: '魔霭圣池中最为扭曲的馈赠，凡人对死亡的认知在此力量前显得异常可笑。敌之尖刀，我之伤药；死地后生，回光返照。',
            notes: [
                '在亚巴顿受到眩晕作用时依然可以手动开启回光返照，但是受到沉默作用时不可以。不过被沉默时被动效果依然能生效。',
                '无光之盾在回光返照生效期间不会吸收伤害，因此也不会影响治疗效果。',
                '破坏会使回光返照无法自动触发。',
            ],
            ability_specials: [
                { ability_special: 'AbilityCooldown', text: '' },
                { ability_special: 'hp_threshold', text: '生命临界值：' },
                { ability_special: 'duration', text: '持续时间：' },
                { ability_special: 'duration_scepter', text: '持续时间：' },
                { ability_special: 'ally_threshold_scepter', text: '伤害临界值：' },
                { ability_special: 'redirect_range_scepter', text: '作用范围：' },
                { ability_special: 'immolate_damage', text: '' },
                { ability_special: 'immolate_aoe', text: '' },
                { ability_special: 'immolate_tick', text: '' },
            ],
            scepter_description:
                '提升持续时间。启动回光返照后，亚巴顿附近{redirect_range_scepter}范围内友方英雄受到的伤害超过{ally_threshold_scepter}点时亚巴顿就会自动对其施放迷雾缠绕。',
        },
    ],
    ModifierArray: [
        {
            modifier_classname: 'modifier_imba_abaddon_withering_mist',
            description: '受作用敌人如果血量低于{hp_threshold_pct}%，那么生命恢复、治疗、吸血和技能吸血会降低{heal_reduction_pct}%。',
            name: '凋零迷雾',
        },
        {
            modifier_classname: 'modifier_imba_abaddon_aphotic_shield',
            description: '吸收伤害；吸收的伤害达到最大后将会爆炸并对周围单位造成伤害',
            name: '无光之盾',
        },
        {
            modifier_classname: 'modifier_imba_abaddon_frostmourne_debuff',
            description: '移动速度被减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。',
            name: '魔霭诅咒',
        },
        {
            modifier_classname: 'modifier_imba_abaddon_frostmourne_buff',
            description: '获得{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}攻击速度加成。',
            name: '魔霭诅咒',
        },
        {
            modifier_classname: 'modifier_imba_abaddon_borrowed_time',
            name: '回光返照',
            description: '亚巴顿所受的任何伤害将转而治疗自己。',
        },
        {
            modifier_classname: 'modifier_imba_abaddon_borrowed_time_talent',
            name: '魔霭献祭',
            description: '回光返照生效时持续受到并造成伤害。',
        },
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: 'special_bonus_unique_imba_abaddon',
                    name: '+{s:bonus_damage_absorb} 无光之盾护盾数值',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_abaddon_2',
                    name: '+{s:bonus_target_damage} 迷雾缠绕治疗/伤害',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_abaddon_3',
                    name: '+{s:bonus_curse_attack_speed} 魔霭诅咒攻速加成',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_abaddon_4',
                    name: '{s:bonus_effect_radius} 范围型迷雾缠绕',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_abaddon_5',
                    name: '+{s:bonus_curse_dps} 魔霭诅咒每秒伤害',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_abaddon_6',
                    name: '-{s:bonus_curse_slow}% 魔霭诅咒诅咒减速',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_abaddon_7',
                    name: '无光之盾提供+{s:bonus_regen} 生命恢复',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_abaddon_immolation',
                    name: '{s:bonus_immolate_damage} 回光返照献祭每秒伤害',
                },
            ],
        },
    ],
    FacetArray_B: [
        {
            facet_classname: 'abaddon_facets_imba_1',
            name: '毒雾护罩 | 畅快淋漓',
            description: '无光之盾吸收更多伤害，并且实时反弹伤害，吸收完毕还会继续发生爆炸,并且亚巴顿附近阵亡的单位会降低他的冷却时间。',
            related_abilities: [
                {
                    ability_classname: 'imba_abaddon_aphotic_shield',
                    description: '伤害护盾数值提升，但是护盾被摧毁后不再爆炸。{absorb_to_damage}%吸收伤害会反弹给附近的敌人。',
                },
            ],
        },
    ],
};
