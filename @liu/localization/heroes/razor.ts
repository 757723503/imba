import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: 'imba_razor_plasma_field',
            ability_specials: [
                {
                    ability_special: 'damage_min',
                    text: '最低伤害：',
                },
                {
                    ability_special: 'damage_max',
                    text: '最高伤害：',
                },
                {
                    ability_special: 'radius',
                    text: '作用范围：',
                },
                {
                    ability_special: 'slow_min',
                    text: '%最低减速：',
                },
                {
                    ability_special: 'slow_max',
                    text: '%最高减速：',
                },
                {
                    ability_special: 'slow_duration',
                    text: '减速持续时间：',
                },
            ],
            name: '等离子场',
            description:
                '释放一波威力随扩张程度提升的等离子能量场，收缩时也会对经过的敌人造成伤害和减速。距离雷泽越远，伤害和减速越高。等离子场对每个单位造成两次伤害。',
            lore: '闪电幽魂用等离子的力量统治着永劫之墟。',
            notes: [],
        },
        {
            ability_classname: 'imba_razor_static_link',
            ability_specials: [
                {
                    ability_special: 'drain_length',
                    text: '连接持续时间：',
                },
                {
                    ability_special: 'drain_duration',
                    text: '攻击力加成持续时间：',
                },
                {
                    ability_special: 'drain_rate',
                    text: '每秒攻击力吸取：',
                },
            ],
            name: '静电连接',
            description: '在雷泽和敌方英雄之间创造静电连接，偷取目标的攻击力并转移给雷泽。雷泽在连接生效时可以边移动边攻击。',
            lore: '雷泽的极性吸引电流通向自身，以汲取他对手的力量。',
            shard_description: '提升施法距离。静电连接可设为多样施法，将雷泽和他的目标以{pull_speed}的速度相互牵引。',
            notes: ['链接在一方单位死亡或双方距离超过{drain_range_buffer}后断裂。'],
        },
        {
            ability_classname: 'imba_razor_storm_surge',
            ability_specials: [
                {
                    ability_special: 'strike_pct_chance',
                    text: '%打击概率：',
                },
                {
                    ability_special: 'strike_target_count',
                    text: '电击目标数量：',
                },
                {
                    ability_special: 'strike_damage',
                    text: '伤害：',
                },
                {
                    ability_special: 'strike_move_slow_pct',
                    text: '%移动速度减缓：',
                },
                {
                    ability_special: 'strike_slow_duration',
                    text: '减速持续时间：',
                },
                {
                    ability_special: 'strike_search_radius',
                    text: '打击搜索范围：',
                },
                {
                    ability_special: 'strike_internal_cd',
                    text: '打击冷却时间：',
                },
            ],
            name: '风暴涌动',
            description:
                '被攻击时拥有几率、每次受到指向性技能时都会释放一道叉状闪电，击中目标和附近其他敌人，优先打击与目标类型相同的单位，造成伤害并减缓移动速度。',
            lore: '仅仅是靠近闪电幽魂就会体验免费的电击疗法。',
            notes: [],
        },
        {
            ability_classname: 'imba_razor_unstable_current',
            ability_specials: [
                {
                    ability_special: 'movement_speed_tooltip',
                    text: '%移动速度加成：',
                },
            ],
            name: '不稳定电流',
            description: '每级英雄等级被动提升雷泽{movespeed_per_level_pct}%移动速度。',
            notes: [],
        },
        {
            ability_classname: 'imba_razor_eye_of_the_storm',
            ability_specials: [
                {
                    ability_special: 'radius',
                    text: '作用范围：',
                },
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'strike_interval',
                    text: '打击间隔：',
                },
                {
                    ability_special: 'armor_reduction',
                    text: '护甲降低：',
                },
                {
                    ability_special: 'damage',
                    text: '伤害：',
                },
            ],
            name: '风暴之眼',
            description: '强大的闪电风暴，打击生命值最低的敌方单位，造成伤害并削弱护甲。',
            lore: '掌控闪电。',
            scepter_description: '风暴之眼可以同时打击两个目标，并且能对建筑造成伤害。打击建筑时，只会以防御塔、兵营和遗迹作为目标。',
            notes: ['每次打击都会以范围内血量最低的敌方单位为目标。', '风暴之眼优先打击受到静电连接作用的英雄。', '连续施放的风暴之眼可以叠加。'],
        },
        {
            ability_classname: 'imba_razor_dynamo',
            ability_specials: [
                {
                    ability_special: 'total_spell_amp',
                    text: '%攻击力提供技能增强加成：',
                },
            ],
            name: '雷电交加',
            description: '雷泽的攻击力每达到{spell_amp_damage_divisor}点就会获得{spell_amp_mult}%技能增强。',
            notes: [],
        },
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: 'special_bonus_unique_imba_razor',
                    name: '+{s:bonus_drain_rate} 静电连接攻击力吸取',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_razor_2',
                    name: '-{s:bonus_strike_interval}秒 风暴之眼打击间隔',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_razor_3',
                    name: '-{s:bonus_strike_internal_cd}秒 风暴涌动打击冷却',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_razor_4',
                    name: '+{s:bonus_damage_min} 等离子场伤害',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_razor_plasmafield_second_ring',
                    name: '{s:bonus_second_ring_delay}秒后产生第二个等离子场',
                    description: '第二个等离子场造成的伤害减少{s:bonus_second_ring_reduction}%',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_razor_static_link_aspd',
                    name: '静电连接吸取攻击速度',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_razor_storm_surge_damage_and_slow',
                    name: '+{s:bonus_strike_move_slow_pct}% 风暴涌动减速和伤害',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_razor_plasmafield_max_slow',
                    name: '+{s:bonus_slow_max}% 等离子场最大减速',
                },
            ],
        },
    ],
    FacetArray_B: [
        {
            facet_classname: 'razor_facets_imba_1',
            name: '雷暴云',
            description: '风暴之眼开启后，风暴涌动电击间隔更短，而且搜索范围内的所有单位会被风暴涌动电击。',
            related_abilities: [
                {
                    ability_classname: 'imba_razor_storm_surge',
                    description:
                        '风暴之眼开启时，打击几率为{eye_of_the_storm_chance_multiplier}倍，打击冷却时间减少{strike_cd_reduction_during_storm}秒，而且闪电会打击风暴之眼范围内所有敌人。单次伤害不会对同个敌人施加两次。',
                },
            ],
            related_talents: [],
        },
    ],
    ModifierArray: [
        {
            modifier_classname: 'modifier_imba_razor_static_link_buff',
            name: '静电连接',
            description: '偷取{MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE}点攻击力。',
        },
        {
            modifier_classname: 'modifier_imba_razor_static_link_debuff',
            name: '静电连接',
            description: '损失{MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE}点攻击力。',
        },
        {
            modifier_classname: 'modifier_imba_razor_eye_of_the_storm',
            name: '风暴之眼',
            description: '每一次闪电的打击都将对目标造成伤害并削弱护甲。',
        },
        {
            modifier_classname: 'modifier_imba_razor_eye_of_the_storm_armor',
            name: '风暴之眼减甲',
            description: '护甲被削弱{MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS}点。',
        },
        {
            modifier_classname: 'modifier_imba_razor_storm_surge_slow',
            name: '风暴涌动',
            description: '移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。',
        },
        {
            modifier_classname: 'modifier_imba_razor_plasma_field_slow',
            name: '等离子场',
            description: '移动速度被减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。',
        },
    ],
};
