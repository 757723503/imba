import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: 'imba_faceless_void_time_walk',
            ability_specials: [
                {
                    ability_special: 'range',
                    text: '距离：',
                },
                {
                    ability_special: 'backtrack_duration',
                    text: '回溯有效时间：',
                },
                {
                    ability_special: 'backtrack_time_walk_duration',
                    text: '额外回溯时间：',
                },
                {
                    ability_special: 'radius',
                    text: '时间锁定作用范围：',
                },
            ],
            name: '时间漫游',
            description: '冲到目标位置，并取消最近{backtrack_duration}秒内受到的任何伤害。',
            lore: '暗惧者将时间撕裂，穿过超维视界并瞬间重现。',
            shard_description: '提升距离。',
            scepter_description: '在落地点对所有单位施加一次时间锁定。',
            notes: ['虚空假面在时间漫游过程中为无敌状态。'],
        },
        {
            ability_classname: 'imba_faceless_void_distortion_field',
            ability_specials: [],
            name: '扭曲力场',
            description: '{slow_distance_max}范围内敌人的攻击弹道被减速{attack_projectile_slow}%。',
            notes: [],
        },
        {
            ability_classname: 'imba_faceless_void_backtrack',
            ability_specials: [],
            name: '回到过去',
            description: '虚空假面每级拥有{backtrack_per_level}%几率躲避受到的所有伤害。',
            notes: [],
        },
        {
            ability_classname: 'imba_faceless_void_time_walk_reverse',
            ability_specials: [],
            name: '反时间漫游',
            description: '时间漫游落地后1.5秒内可使用。施放时，自身将逆转时间漫游，回到上一个施放地点。不会影响生命值或触发神杖效果。',
            notes: [],
        },
        {
            ability_classname: 'imba_faceless_void_time_lock',
            ability_specials: [
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'chance_pct',
                    text: '%触发概率：',
                },
                {
                    ability_special: 'bonus_damage',
                    text: '额外伤害：',
                },
            ],
            name: '时间锁定',
            description: '攻击有一定概率将一个敌方目标锁定在时间中，再次发动攻击。',
            lore: '虚空假面的突袭伴随着维度转移之力。',
            notes: [],
        },
        {
            ability_classname: 'imba_faceless_void_time_dilation',
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
                    ability_special: 'slow',
                    text: '%每个冷却技能造成减速：',
                },
                {
                    ability_special: 'cooldown_percentage',
                    text: '%冷却速度降低：',
                },
                {
                    ability_special: 'damage_per_stack',
                    text: '每个冷却技能造成每秒伤害：',
                },
            ],
            name: '时间膨胀',
            description:
                '虚空假面将附近所有敌人困在一个时间膨胀场中，持续{duration}秒，技能的冷却将会延长，每延长一个技能的冷却，敌人的移动和攻击速度就会降低{slow}%。根据冷却中技能的数量造成每秒额外伤害。负面状态的持续时间在时间结界内不会变少。',
            lore: '对于挑战暗惧者的人，每个时刻都像是延展成了永恒。',
            notes: ['不会影响物品的冷却时间。'],
        },
        {
            ability_classname: 'imba_faceless_void_chronosphere',
            ability_specials: [
                {
                    ability_special: 'radius',
                    text: '作用范围：',
                },
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
            ],
            name: '时间结界',
            description:
                '在时空中创造一个泡状遮罩，将所有位于其中的单位定住，并使虚空假面在其内部来去自如。所有技能和物品冷却全部冻结。只有虚空假面和他控制的单位不受影响。在其中的隐形敌人会显形。',
            lore: '当超维视界的裂隙突现之时，所有被其困住的可怜灵魂都将万劫不复。',
            notes: ['能够定住所有单位和建筑，不论敌我。除了虚空假面控制的单位。', '虚空假面不受任何时间结界的影响。'],
        },
        {
            ability_classname: 'imba_faceless_void_time_zone',
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
                    ability_special: 'bonus_attack_speed',
                    text: '攻击速度操控：',
                },
                {
                    ability_special: 'bonus_move_speed',
                    text: '%移动速度操控：',
                },
                {
                    ability_special: 'bonus_cast_speed',
                    text: '%施法速度操控：',
                },
                {
                    ability_special: 'bonus_turn_speed',
                    text: '%转身速度操控：',
                },
                {
                    ability_special: 'bonus_projectile_speed',
                    text: '%弹道速度操控：',
                },
            ],
            name: '逆转时空',
            description:
                '在时空中创造一个遮罩，改变其中所有单位的移动、攻击、施法、弹道和转身速度。友军的速度提升，敌人的速度降低。<br><br>敌人在逆转时空内为束缚状态。',
            notes: [],
        },
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: 'special_bonus_unique_imba_faceless_void',
                    name: '+{s:bonus_bonus_attack_speed} 时间结界内攻击速度',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_faceless_void_2',
                    name: '+{s:bonus_radius} 时间结界范围',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_faceless_void_3',
                    name: '+{s:bonus_bonus_damage} 时间锁定伤害',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_faceless_void_4',
                    name: '+{s:dodge_chance_pct}% 回到过去几率',
                    description: '拥有{s:dodge_chance_pct}%几率完全避免受到伤害。会被破坏禁用。',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_faceless_void_5',
                    name: '-{s:bonus_AbilityCooldown}秒 时间漫游冷却',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_faceless_void_6',
                    name: '+{s:bonus_damage_per_stack} 时间膨胀每秒伤害',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_faceless_void_7',
                    name: '+{s:bonus_backtrack_duration}秒 时间漫游回溯时间',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_faceless_void_8',
                    name: '+{s:bonus_slow}% 时间膨胀减速',
                },
            ],
        },
    ],
    FacetArray_B: [
        {
            facet_classname: 'faceless_void_facets_imba_1',
            name: '时间结界 | 一时之秀 | 逆转时空',
            description:
                "虚空假面可以施放<b color='white'>时间结界</b>，把敌人困在球形结界中。 施放时间漫游后短时间内阻止所有伤害。 虚空假面可以施放<b color='white'>逆转时空</b>，大幅降低区域内敌人的速度，并且使友军加速。",
            related_abilities: [
                {
                    ability_classname: 'imba_faceless_void_time_walk',
                    description: '施放时间漫游后短时间内阻止所有伤害。',
                },
                {
                    ability_classname: 'imba_faceless_void_time_zone',
                    description: '+{s:bonus_bonus_attack_speed} 逆转时空内攻击速度',
                },
            ],
            related_talents: [
                {
                    talent_key: 'special_bonus_unique_faceless_void_facet_faceless_void_time_zone',
                    description: '+{s:bonus_bonus_attack_speed} 逆转时空内攻击速度',
                },
                {
                    talent_key: 'special_bonus_unique_faceless_void_2_facet_faceless_void_time_zone',
                    description: '+{s:bonus_radius} 逆转时空范围',
                },
            ],
        },
    ],
    ModifierArray: [
        {
            modifier_classname: 'modifier_imba_faceless_void_time_walk_slow',
            name: '时间漫游减速',
            description: '移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。',
        },
        {
            modifier_classname: 'modifier_imba_faceless_void_time_walk_shardbuff',
            name: '时间漫游中',
            description: '已准备好反时间漫游。',
        },
        {
            modifier_classname: 'modifier_imba_faceless_void_time_dilation_slow',
            name: '时间膨胀减速',
            description: '移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%，攻击速度降低{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}。',
        },
        {
            modifier_classname: 'modifier_imba_faceless_void_timelock_freeze',
            name: '时间锁定',
            description: '你被虚空假面锁定在时间中了！',
        },
        {
            modifier_classname: 'modifier_imba_faceless_void_chronosphere_freeze',
            name: '时间结界',
            description: '被困在时空中，无法移动和行动。',
        },
        {
            modifier_classname: 'modifier_imba_faceless_void_time_zone_effect',
            name: '逆转时空',
            description: '被困在时空中。',
        },
        {
            modifier_classname: 'modifier_imba_faceless_void_backtrack_temp',
            name: '一时之秀',
            description: '刚穿越了时间。阻止受到伤害。',
        },
    ],
};
