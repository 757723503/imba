import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: 'imba_storm_spirit_electric_rave',
            ability_specials: [],
            name: '电子狂欢',
            description: '风暴之灵和{radius}范围内友方英雄获得{charges}次超负荷效果。提供40攻击速度。持续最多{duration}秒，或效果用尽。',
            notes: [],
        },
        {
            ability_classname: 'imba_storm_spirit_static_remnant',
            ability_specials: [
                {
                    ability_special: 'static_remnant_damage_radius',
                    text: '作用范围：',
                },
                {
                    ability_special: 'static_remnant_damage',
                    text: '伤害：',
                },
                {
                    ability_special: 'static_remnant_travel_speed',
                    text: '残影速度：',
                },
                {
                    ability_special: 'static_remnant_vision_radius_day',
                    text: '视野范围：',
                },
            ],
            name: '残影',
            description: '风暴之灵制造一个充满爆炸性能量的自身残影，如果有人接近就会引爆造成伤害，残影持续{abilityduration}秒。',
            lore: '雷神·风暴烈酒的二象性让他可以欣赏自己被电时的百态。',
            notes: [
                '残影在技能施放{static_remnant_delay}秒后才能实体化。',
                '残影在持续时间内拥有顺畅视野。',
                '残影爆炸将伤害{static_remnant_damage_radius}码作用范围内的单位，但是触发范围是{static_remnant_radius}码。',
                '可以对自身施放，这样会原地施放。',
            ],
        },
        {
            ability_classname: 'imba_storm_spirit_electric_vortex',
            ability_specials: [
                {
                    ability_special: 'electric_vortex_pull_distance',
                    text: '牵引距离：',
                },
                {
                    ability_special: 'AbilityDuration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'radius_scepter',
                    text: '作用范围：',
                },
            ],
            name: '电子涡流',
            description: '将一个敌人拖到风暴之灵所在位置的涡流。',
            lore: '雷神狂暴的雷霆力量总是让其他人为之一电。',
            scepter_description: '电子涡流变成范围型技能，可以作用于风暴之灵周围所有敌人。',
            notes: [],
        },
        {
            ability_classname: 'imba_storm_spirit_overload',
            ability_specials: [
                {
                    ability_special: 'overload_aoe',
                    text: '作用范围：',
                },
                {
                    ability_special: 'overload_move_slow',
                    text: '%移动速度减缓：',
                },
                {
                    ability_special: 'overload_attack_slow',
                    text: '攻击速度降低：',
                },
                {
                    ability_special: 'overload_damage',
                    text: '伤害：',
                },
                {
                    ability_special: 'shard_activation_radius',
                    text: '开启作用范围：',
                },
                {
                    ability_special: 'shard_manacost',
                    text: '魔法消耗：',
                },
                {
                    ability_special: 'shard_cooldown',
                    text: '冷却时间：',
                },
                {
                    ability_special: 'shard_attack_speed_bonus',
                    text: '攻击速度加成：',
                },
            ],
            name: '超负荷',
            description: '施法时会产生电荷，在风暴之灵下次攻击时被释放，对附近敌人造成伤害并减速。',
            lore: '啪！嘶！咝！',
            shard_description:
                '施放后风暴之灵和附近友方英雄获得{shard_activation_charges}次超负荷效果。提供额外攻击速度。持续最多{shard_activation_duration}秒，或效果用尽。',
            notes: ['使用物品不会触发超负荷。', '超负荷效果不会叠加。'],
        },
        {
            ability_classname: 'imba_storm_spirit_ball_lightning',
            ability_specials: [
                {
                    ability_special: 'ball_lightning_move_speed',
                    text: '速度：',
                },
                {
                    ability_special: 'ball_lightning_aoe',
                    text: '作用范围：',
                },
                {
                    ability_special: 'ball_lightning_travel_cost_percent',
                    text: '%100距离魔法消耗：',
                },
            ],
            name: '球状闪电',
            description:
                '风暴之灵变成不稳定的电流在战场上横冲直撞，直到他的魔法耗尽或到达目标才停下。施法消耗为{ball_lightning_initial_mana_base}+总魔法量的{ball_lightning_initial_mana_percentage}%，每移动100距离消耗{ball_lightning_travel_cost_base}+总魔法量的{ball_lightning_initial_mana_percentage}%，本技能造成的伤害每飞行100距离就会递增。',
            lore: '风暴来袭。',
            notes: ['行进过程中可以使用技能和物品。', '该技能可以摧毁树木。', '风暴之灵在球状闪电期间是无敌状态。'],
        },
        {
            ability_classname: 'imba_storm_spirit_galvanized',
            ability_specials: [
                {
                    ability_special: 'aoe',
                    text: '作用范围：',
                },
            ],
            name: '通电',
            description:
                '风暴之灵每次击杀都会获得一点提供{mp_per_kill}魔法恢复的能量。每次阵亡会损失{charges_per_death}点能量。升级球状闪电会获得{charges_per_ult}点额外能量。另外每次获得一点能量时他还会永久获得{perma_mp_per_kill}点/秒魔法恢复。',
            notes: ['破坏会使技能无法通过击杀获得新的叠加效果。'],
        },
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: 'special_bonus_unique_imba_storm_spirit',
                    name: '+{s:bonus_AbilityDuration}秒 电子涡流持续时间',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_storm_spirit_4',
                    name: '球状闪电每{s:value}距离释放残影',
                    description: '施放球状闪电每行进{s:value}距离将产生一个残影。',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_storm_spirit_5',
                    name: '+{s:bonus_static_remnant_damage} 残影伤害',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_storm_spirit_7',
                    name: '{s:value} 超负荷攻击弹射',
                    description: '弹射攻击造成{s:bonus_overload_damage_pct}%伤害。',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_storm_spirit_8',
                    name: '-{s:bonus_AbilityCooldown}秒 残影冷却',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_storm_spirit_overload_aspd',
                    name: '+{s:bonus_overload_damage} 超负荷伤害',
                },
            ],
        },
    ],
    FacetArray_B: [
        {
            facet_classname: 'storm_spirit_facets_imba_1',
            name: '已通电 | 滑行之影 | 电击项圈',
            description:
                '风暴之灵每次击杀都会获得永久魔法恢复。 残影会在风暴之灵处产生，并移动至目标地点。 电子涡流会施加负面效果，在敌人攻击时触发一次超负荷。',
            related_abilities: [
                {
                    ability_classname: 'imba_storm_spirit_static_remnant',
                    description: '残影会在风暴之灵处产生，并移动至目标地点。',
                },
                {
                    ability_classname: 'imba_storm_spirit_electric_vortex',
                    description: '电子涡流会对敌人施加{enemy_overload_duration}秒的负面效果，使敌人下次攻击会以自身为目标，并触发一次超负荷。',
                },
            ],
            related_talents: [],
        },
    ],
    ModifierArray: [
        {
            modifier_classname: 'modifier_imba_storm_spirit_electric_vortex_self_slow',
            name: '电子涡流减速',
            description: '减速{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%.',
        },
        {
            modifier_classname: 'modifier_imba_storm_spirit_electric_vortex_pull',
            name: '电子涡流牵引',
            description: '被风暴之灵的旋涡所牵引',
        },
        {
            modifier_classname: 'modifier_imba_storm_spirit_overload',
            name: '超负荷',
            description: '通过施法来获得充能',
        },
        {
            modifier_classname: 'modifier_imba_storm_spirit_overload_debuff',
            name: '超负荷减速',
            description:
                '受到风暴之灵超负荷效果影响。移动速度减缓 {MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%，攻击速度降低 {MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}。',
        },
        {
            modifier_classname: 'modifier_imba_storm_spirit_ball_lightning',
            name: '球状闪电',
            description: '全地图打击！',
        },
        {
            modifier_classname: 'modifier_imba_storm_spirit_electric_rave',
            name: '超负荷',
            description: '获得{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}攻击速度，并且攻击附带电能。',
        },
        {
            modifier_classname: 'modifier_imba_storm_spirit_enemy_overload',
            name: '不堪重负',
            description: '发动攻击的话会触发一次来自风暴之灵的超负荷击中效果。',
        },
        {
            modifier_classname: 'modifier_imba_storm_spirit_galvanized',
            name: '通电',
            description: '提升{MODIFIER_PROPERTY_MANA_REGEN_CONSTANT}点/秒魔法恢复。',
        },
    ],
};
