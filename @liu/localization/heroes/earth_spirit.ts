import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: 'imba_earth_spirit_boulder_smash',
            ability_specials: [
                {
                    ability_special: 'rock_search_aoe',
                    text: '冲击残岩范围：',
                },
                {
                    ability_special: 'rock_damage',
                    text: '伤害：',
                },
                {
                    ability_special: 'move_slow',
                    text: '%移动速度减缓：',
                },
                {
                    ability_special: 'duration',
                    text: '减速持续时间：',
                },
                {
                    ability_special: 'speed',
                    text: '行进速度：',
                },
                {
                    ability_special: 'unit_distance',
                    text: '击飞距离：',
                },
                {
                    ability_special: 'rock_distance',
                    text: '击飞距离（对残岩）：',
                },
            ],
            name: '巨石冲击',
            description:
                '大地之灵将敌方单位或友方单位作为目标，将其击飞，目标将沿他面朝的方向飞行一段距离。如果大地之灵点地为目标，他将击飞{remnant_smash_radius_tooltip}范围内距离最近的单位，优先以残岩为目标。击飞的单位或残岩会对碰到的所有单位造成伤害。如果敌人是被残岩击中还将额外被减速。残岩被击飞的距离比其他单位更远。对非英雄单位造成{creep_multiplier}倍伤害。',
            lore: '大地之灵的一招一式都蕴含着移山之力。',
            notes: [],
        },
        {
            ability_classname: 'imba_earth_spirit_rolling_boulder',
            ability_specials: [
                {
                    ability_special: 'speed',
                    text: '速度：',
                },
                {
                    ability_special: 'rock_speed',
                    text: '速度（经过残岩）：',
                },
                {
                    ability_special: 'allied_hero_speed',
                    text: '速度（经过友方英雄）：',
                },
                {
                    ability_special: 'distance',
                    text: '距离：',
                },
                {
                    ability_special: 'rock_distance_multiplier',
                    text: '距离倍数（经过残岩）：',
                },
                {
                    ability_special: 'allied_hero_multiplier',
                    text: '距离倍数（经过友方英雄）：',
                },
                {
                    ability_special: 'damage',
                    text: '伤害：',
                },
                {
                    ability_special: 'stun_duration',
                    text: '眩晕时间：',
                },
                {
                    ability_special: 'rock_bonus_duration',
                    text: '额外眩晕时间（经过残岩）：',
                },
                {
                    ability_special: 'allied_bonus_stun_duration',
                    text: '额外眩晕时间（经过友方英雄）：',
                },
            ],
            name: '巨石翻滚',
            description:
                '大地之灵化身为巨石，经过{delay}秒延迟后向目标位置翻滚，对经过的敌人造成伤害和眩晕，伤害值为{damage} + {damage_str}%力量。如果撞到敌方英雄或自身被眩晕，翻滚都会中止。如果翻滚过程中经过残岩将会大幅提高翻滚距离和速度，造成的眩晕时间更长。',
            lore: '大地之灵将自己与大地紧密结合，使松散的石块吸附到身上，从而组成一个防护圆球向前滚动。',
            notes: ['翻滚时经过残岩会将其摧毁。', '巨石的作用范围为160。'],
        },
        {
            ability_classname: 'imba_earth_spirit_geomagnetic_grip',
            ability_specials: [
                {
                    ability_special: 'rock_damage',
                    text: '残岩伤害：',
                },
                {
                    ability_special: 'duration',
                    text: '沉默持续时间：',
                },
                {
                    ability_special: 'pull_units_per_second_heroes',
                    text: '英雄拉扯速度：',
                },
                {
                    ability_special: 'pull_units_per_second',
                    text: '残岩拉扯速度：',
                },
            ],
            name: '地磁之握',
            description: '大地之灵将残岩拉扯到自己所在的位置，行进路径上被击中的敌人都会被沉默并受到伤害。',
            lore: '同性相吸。即使是深藏于鲜血和骨头中的矿物都不能免疫大地之灵的呼唤。',
            shard_description: '可以抓取友军。',
            notes: ['如果目标处于时间结界，决斗或黑洞之中则不起作用。', '地磁之握还可以对友方小兵施放。'],
        },
        {
            ability_classname: 'imba_earth_spirit_stone_caller',
            ability_specials: [
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
            ],
            name: '残岩',
            description:
                '在指定位置召唤一块残岩。残岩没有视野，为无敌状态，可以加强大地之灵的技能效果。召唤残岩需要消耗一点能量点数。英雄每升{hero_level_increment}级都会额外获得能量点数。',
            lore: '大地之灵唤出的残岩源自与他一同在大地黑暗的怀抱下埋藏多年的兵马俑。',
            shard_description: '残岩提供地面视野。残岩的最大能量点数增加{shard_tooltip}点。',
            notes: [],
        },
        {
            ability_classname: 'imba_earth_spirit_petrify',
            ability_specials: [
                {
                    ability_special: 'duration',
                    text: '残岩持续时间：',
                },
                {
                    ability_special: 'damage',
                    text: '碎裂伤害：',
                },
                {
                    ability_special: 'aoe',
                    text: '碎裂作用范围：',
                },
                {
                    ability_special: 'ally_cast_range',
                    text: '对友军时施法距离：',
                },
            ],
            name: '残岩魔咒',
            description:
                '大地之灵对一名英雄施法，使其暂时获得残岩的属性。经过短时间后残岩就会碎裂，释放出英雄，并对周围单位造成伤害。<br><br>可以对残岩施放。对残岩施放时冷却时间为5秒。<br>对友方英雄施放时施法距离更远。',
            lore: '考林操控大地的元素之力，使生命体暂时石化，将其收编于他的兵马俑大军中。',
            notes: ['如果大地之灵自身受到残岩魔咒的效果，也可以成为巨石冲击的目标。'],
        },
        {
            ability_classname: 'imba_earth_spirit_magnetize',
            ability_specials: [
                {
                    ability_special: 'cast_radius',
                    text: '作用范围：',
                },
                {
                    ability_special: 'damage_per_second',
                    text: '每秒伤害：',
                },
                {
                    ability_special: 'damage_duration',
                    text: '磁化持续时间：',
                },
                {
                    ability_special: 'rock_search_radius',
                    text: '残岩刷新/爆炸作用范围：',
                },
                {
                    ability_special: 'magnetized_rocks_bonus_self_damage',
                    text: '攻击力加成：',
                },
            ],
            name: '磁化',
            description:
                '将附近小范围内的敌方单位磁化，使其短时间内受到伤害。被磁化的英雄单位将会引起附近残岩的爆炸，每次爆炸都将摧毁残岩并刷新残岩附近单位身上的磁化时间（若附近单位未被磁化则为其施加一个磁化效果）。该过程可重复数次。如果一个被磁化的英雄受到了地磁之握或巨石冲击的作用，那么所有被磁化的英雄都会受到同样效果。',
            lore: '在大地之灵的呼唤下，敌人体内的鲜血和骨头中所含的矿物都开始倒戈。',
            notes: [],
        },
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: 'special_bonus_unique_imba_earth_spirit',
                    name: '+{s:bonus_damage} 巨石翻滚伤害',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_earth_spirit_2',
                    name: '磁化不可驱散',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_earth_spirit_3',
                    name: '+{s:bonus_stun_duration}秒 巨石翻滚眩晕',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_earth_spirit_4',
                    name: '+{s:bonus_distance} 巨石翻滚距离',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_earth_spirit_5',
                    name: '-{s:bonus_AbilityCooldown}秒 地磁之握冷却',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_earth_spirit_6',
                    name: '+{s:bonus_rock_damage} 巨石冲击伤害',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_earth_spirit_8',
                    name: '+{s:bonus_damage_duration}% 磁化伤害/持续时间',
                },
            ],
        },
    ],
    FacetArray_B: [
        {
            facet_classname: 'earth_spirit_facets_imba_1',
            name: '共振 | 垫脚石 | 地灵人杰',
            description:
                '磁化残岩时获得攻击力加成。 残岩具有{s:bonus_AbilityCooldown}秒冷却时间，而不是能量点数，并且巨石翻滚不会摧毁残岩。 巨石翻滚经过友方英雄时会获得额外加成效果。',
            related_abilities: [
                {
                    ability_classname: 'imba_earth_spirit_rolling_boulder',
                    description: '残岩在翻滚时经过不会被摧毁，而且翻滚结束后残岩的冷却时间会重置。',
                },
                {
                    ability_classname: 'imba_earth_spirit_stone_caller',
                    description: '拥有固定的冷却时间，而不是能量点数。',
                },
                {
                    ability_classname: 'imba_earth_spirit_magnetize',
                    description: '磁化一个残岩会让大地之灵获得攻击力加成，持续{magnetized_rocks_buff_self_duration}秒。不会叠加。',
                },
            ],
            related_talents: [],
        },
    ],
    ModifierArray: [
        {
            modifier_classname: 'modifier_imba_earth_spirit_stone_caller_charge_counter',
            name: '残岩点数',
            description: '只有拥有残岩能量时才能放置残岩。每隔一段时间会恢复一点。',
        },
        {
            modifier_classname: 'modifier_imba_earth_spirit_boulder_smash_silence',
            name: '巨石冲击沉默效果',
            description: '被大地之灵的残岩沉默',
        },
        {
            modifier_classname: 'modifier_imba_earth_spirit_boulder_smash',
            name: '巨石冲击',
        },
        {
            modifier_classname: 'modifier_imba_earth_spirit_boulder_smash_debuff',
            name: '巨石冲击',
            description: '被大地之灵冲击的巨石撞到，移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。',
        },
        {
            modifier_classname: 'modifier_imba_earth_spirit_rolling_boulder_caster',
            name: '巨石翻滚',
        },
        {
            modifier_classname: 'modifier_imba_earth_spirit_rolling_boulder_slow',
            name: '巨石翻滚的减速效果',
            description: '被大地之灵翻滚的巨石撞到，移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。',
        },
        {
            modifier_classname: 'modifier_imba_earth_spirit_geomagnetic_grip_debuff',
            name: '被沉默',
        },
        {
            modifier_classname: 'modifier_imba_earth_spirit_geomagnetic_grip',
            name: '地磁之握',
            description: '被扯向大地之灵。',
        },
        {
            modifier_classname: 'modifier_imba_earth_spirit_magnetize',
            name: '磁化',
            description: '被大地之灵磁化，每秒受到伤害。若移动至残岩附近会将其引爆，使附近所有敌方英雄被磁化，持续时间也将刷新。',
        },
        {
            modifier_classname: 'modifier_imba_earth_spirit_magnetize_hero_self_buff',
            name: '共振',
            description: '获得{MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE}点额外攻击力。',
        },
        {
            modifier_classname: 'modifier_imba_earth_spirit_rolling_boulder_allied_hero',
            name: '地灵人杰！',
            description: '移动速度提升{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。',
        },
    ],
};
