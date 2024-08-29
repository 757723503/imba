import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: 'imba_necrolyte_death_seeker',
            ability_specials: [],
            name: '死亡搜寻',
            description: '瘟疫法师变成一个大死亡脉冲，向目标单位的地点移动。到达该地点后，死亡脉冲会扩散至附近敌人和友军。',
            notes: ['不会触发法术反弹。'],
        },
        {
            ability_classname: 'imba_necrolyte_death_pulse',
            ability_specials: [
                {
                    ability_special: 'area_of_effect',
                    text: '作用范围：',
                },
                {
                    ability_special: 'heal',
                    text: '治疗量：',
                },
            ],
            name: '死亡脉冲',
            description: '瘟疫法师向他的周围释放死亡波纹，伤害敌方单位并治疗友军单位。',
            lore: '可怜的灵魂们，屈从于罗坦德吉利的瘟疫后遭到回收，沦为他用。',
            notes: ['死亡脉冲不能被躲避。'],
        },
        {
            ability_classname: 'imba_necrolyte_heartstopper_aura',
            ability_specials: [
                {
                    ability_special: 'aura_radius',
                    text: '作用范围：',
                },
                {
                    ability_special: 'aura_damage',
                    text: '%每秒生命流失：',
                },
            ],
            name: '竭心光环',
            description: '瘟疫法师让敌人的心脏停跳，使附近敌方单位按最大生命值一定百分比持续流失生命。',
            lore: '接近瘟疫法师就会感受到在他周围的空气中存在的瘟疫和灾祸。',
            scepter_description: '竭心光环的生命流失伤害提升，数值为瘟疫法师当前生命恢复的{heal_regen_to_damage}%。',
            notes: ['伤害不会禁用像闪烁匕首等物品。', '不能作用于远古生物。'],
        },
        {
            ability_classname: 'imba_necrolyte_sadist',
            ability_specials: [
                {
                    ability_special: 'health_regen',
                    text: '每次击杀提供生命恢复：',
                },
                {
                    ability_special: 'mana_regen',
                    text: '每次击杀提供魔法恢复：',
                },
                {
                    ability_special: 'bonus_aoe',
                    text: '每层叠加提供作用范围：',
                },
                {
                    ability_special: 'hero_multiplier',
                    text: '英雄击杀提供倍数：',
                },
                {
                    ability_special: 'regen_duration',
                    text: '持续时间：',
                },
            ],
            name: '施虐之心',
            description: '瘟疫法师每次击杀单位都将获得可叠加的恢复效果，持续{regen_duration}秒。击杀英雄后获得数倍的效果。',
            notes: ['破坏会使技能无法获得新的叠加效果。', '破坏不会使现有叠加效果提供的加成失效。'],
        },
        {
            ability_classname: 'imba_necrolyte_ghost_shroud',
            ability_specials: [
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'heal_bonus',
                    text: '%恢复效果增强：',
                },
                {
                    ability_special: 'movement_speed',
                    text: '%移动速度减缓：',
                },
                {
                    ability_special: 'slow_aoe',
                    text: '减速作用范围：',
                },
                {
                    ability_special: 'bonus_damage',
                    text: '%魔法伤害加深：',
                },
            ],
            name: '幽魂护罩',
            description:
                '瘟疫法师步入将生者与死者相隔的领域。散发出一片灵气，减缓周围敌人的移动速度。在这个形态下，瘟疫法师无法攻击或被攻击，受到的魔法伤害增加，但是生命/魔法恢复效果加强。',
            lore: '罗坦德吉利利用手中的亡者灵魂搭建出从生到死的桥梁。',
            scepter_description: '降低幽魂护罩的冷却时间。',
            notes: [],
        },
        {
            ability_classname: 'imba_necrolyte_sadist_stop',
            ability_specials: [],
            notes: [],
        },
        {
            ability_classname: 'imba_necrolyte_reapers_scythe',
            ability_specials: [
                {
                    ability_special: 'damage_per_health',
                    text: '每点损失生命值造成伤害：',
                },
                {
                    ability_special: 'stun_duration',
                    text: '眩晕时间：',
                },
                {
                    ability_special: 'hp_per_kill',
                    text: '生命恢复：',
                },
                {
                    ability_special: 'mana_per_kill',
                    text: '魔法恢复：',
                },
            ],
            name: '死神镰刀',
            description:
                '眩晕目标敌方英雄，然后造成基于他当前损失生命值的伤害。瘟疫法师击杀敌人后将永久获得生命和魔法恢复。如果目标在死神镰刀效果下死亡，击杀者为瘟疫法师。',
            lore: '空气中充斥的死亡和苦难增强了瘟疫法师的瘟疫魔法。',
            notes: ['伤害在眩晕结束后结算。'],
        },
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: 'special_bonus_unique_imba_necrophos',
                    name: '-{s:value}秒 死亡脉冲冷却',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_necrophos_2',
                    name: '+{s:bonus_aura_damage}% 竭心光环生命流失',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_necrophos_3',
                    name: '+{s:bonus_movement_speed}% 幽魂护罩减速',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_necrophos_4',
                    name: '+{s:bonus_heal} 死亡脉冲治疗',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_necrophos_5',
                    name: '+{s:bonus_heal_reduction_pct}% 竭心光环降低生命恢复',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_necrophos_6',
                    name: '+{s:bonus_AbilityCastRange} 死神镰刀施法距离',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_necrophos_heartstopper_regen_duration',
                    name: '+{s:bonus_regen_duration}秒 施虐之心叠加时间',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_necrophos_sadist_heal_bonus',
                    name: '+{s:bonus_heal_bonus}% 幽魂护罩自身恢复增强',
                },
            ],
        },
    ],
    FacetArray_B: [
        {
            facet_classname: 'necrolyte_facets_imba_1',
            name: '亵渎之力 | 快速腐朽',
            description: '施虐之心在每次击杀后还会使瘟疫法师的范围型技能和物品暂时获得作用范围加成。 幽魂护罩会窃取敌人的移动速度。',
            related_abilities: [
                {
                    ability_classname: 'imba_necrolyte_sadist',
                    description: '施虐之心在每次击杀后还会使瘟疫法师的范围型技能和物品暂时获得作用范围加成。',
                },
                {
                    ability_classname: 'imba_necrolyte_ghost_shroud',
                    description: '瘟疫法师获得移动速度加成，数值等于{movement_transfer}%敌人损失移速。',
                },
            ],
            related_talents: [],
        },
    ],
    ModifierArray: [
        {
            modifier_classname: 'modifier_imba_necrolyte_ghost_shroud_active',
            name: '幽魂护罩',
            description: '虚无状态。使附近敌人减速。增强自身恢复效果。',
        },
        {
            modifier_classname: 'modifier_imba_necrolyte_ghost_shroud_aura_effect',
            name: '幽魂护罩',
            description: '移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。',
        },
        {
            modifier_classname: 'modifier_imba_necrolyte_death_pulse_counter',
            name: '死亡脉冲',
            description: '每秒回复{MODIFIER_PROPERTY_HEALTH_REGEN_CONSTANT}点生命和{MODIFIER_PROPERTY_MANA_REGEN_CONSTANT}点魔法。',
        },
        {
            modifier_classname: 'modifier_imba_necrolyte_sadist_counter',
            name: '施虐之心',
            description: '每秒回复{MODIFIER_PROPERTY_HEALTH_REGEN_CONSTANT}点生命和{MODIFIER_PROPERTY_MANA_REGEN_CONSTANT}点魔法。',
        },
        {
            modifier_classname: 'modifier_imba_necrolyte_sadist_active',
            name: '幽魂护罩',
            description: '使附近敌人减速，并且增强自身恢复效果，但是受到的魔法伤害加深。',
        },
        {
            modifier_classname: 'modifier_imba_necrolyte_sadist_aura_effect',
            name: '幽魂护罩',
            description: '被瘟疫法师的幽魂护罩减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%移动速度。',
        },
        {
            modifier_classname: 'modifier_imba_necrolyte_heartstopper_aura',
            name: '竭心光环',
        },
        {
            modifier_classname: 'modifier_imba_necrolyte_heartstopper_aura_effect',
            name: '竭心光环',
            description: '在瘟疫法师附近时，每秒损失一定百分比的生命值。',
        },
        {
            modifier_classname: 'modifier_imba_necrolyte_heartstopper_aura_counter',
            name: '竭心光环恢复',
            description: '暂时获得{MODIFIER_PROPERTY_HEALTH_REGEN_CONSTANT}点/秒生命恢复和{MODIFIER_PROPERTY_MANA_REGEN_CONSTANT}点/秒魔法恢复。',
        },
        {
            modifier_classname: 'modifier_imba_necrolyte_reapers_scythe',
            name: '死神镰刀',
            description: '在死神面前无法动弹。',
        },
        {
            modifier_classname: 'modifier_imba_necrolyte_reapers_scythe_respawn_time',
            name: '死神镰刀',
            description:
                '因击杀永久获得{MODIFIER_PROPERTY_HEALTH_REGEN_CONSTANT}点/秒生命恢复和{MODIFIER_PROPERTY_MANA_REGEN_CONSTANT}点/秒魔法恢复。',
        },
        {
            modifier_classname: 'modifier_imba_necrolyte_reapers_scythe_respawn_time_postgame',
            name: '被死神镰刀斩杀的敌人。',
        },
    ],
};
