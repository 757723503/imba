import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: 'imba_windrunner_gale_force',
            ability_specials: [
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'wind_strength',
                    text: '狂风速度：',
                },
                {
                    ability_special: 'radius',
                    text: '作用范围：',
                },
            ],
            name: '狂风之力',
            description: '以矢量为目标。召唤出一阵强风，将目标区域内所有敌人朝目标方向推去。',
            lore: '莱瑞蕾终于学会召唤她真正本源的力量。',
            notes: [],
        },
        {
            ability_classname: 'imba_windrunner_shackleshot',
            ability_specials: [
                {
                    ability_special: 'stun_duration',
                    text: '束缚时间：',
                },
            ],
            name: '束缚击',
            description: '将目标束缚在正对其后的一个敌方单位或树上。若目标后面没有其它敌方单位或树木，则眩晕时间减少至{fail_stun_duration}秒。',
            lore: '风行者的诸多弓技中，有一种用密集的绳索来束缚目标，让其难以逃脱的箭矢。',
            notes: [
                '该技能可以将两个敌人一起束缚，使他们同时眩晕。',
                '束缚击能将目标束缚在身后最多{shackle_distance}距离的敌方单位或树木。',
                '束缚击可以被躲避。',
            ],
        },
        {
            ability_classname: 'imba_windrunner_powershot',
            ability_specials: [
                {
                    ability_special: 'powershot_damage',
                    text: '伤害：',
                },
                {
                    ability_special: 'slow',
                    text: '%移动速度减缓：',
                },
                {
                    ability_special: 'slow_duration',
                    text: '减速持续时间：',
                },
                {
                    ability_special: 'damage_reduction',
                    text: '%每个单位减少伤害：',
                },
                {
                    ability_special: 'arrow_range',
                    text: '距离：',
                },
            ],
            name: '强力击',
            description:
                '持续施法 - 风行者为她的弓蓄力，射出一支强力的箭矢，最长可蓄力{abilitychanneltime}秒，其间可以打断蓄力，蓄力时间越长，箭矢伤害和减速效果越高。这支箭会对穿过的所有敌方单位造成伤害，并破坏树木。每伤害一个单位，箭矢的伤害和减速效果都会降低。',
            lore: '在早年的训练生涯，莱瑞蕾学会了射出足以破开树木击中目标的强力箭矢。',
            notes: ['强力击将摧毁作用范围内的树木。'],
        },
        {
            ability_classname: 'imba_windrunner_windrun',
            ability_specials: [
                {
                    ability_special: 'movespeed_bonus_pct',
                    text: '%移动速度提升：',
                },
                {
                    ability_special: 'evasion_pct_tooltip',
                    text: '%闪避几率：',
                },
                {
                    ability_special: 'radius',
                    text: '作用范围：',
                },
                {
                    ability_special: 'ally_movespeed_bonus_pct',
                    text: '%友军移动速度加成：',
                },
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
            ],
            name: '风行',
            description: '提升移动速度，并闪避一切物理攻击。',
            lore: '莱瑞蕾运用疾风之力抵御来临的攻击。',
            scepter_description: '风行使承受的物理伤害减少{physical_damage_pct}%，并且自身获得隐身状态，攻击或施法都不会脱离隐身。',
            notes: ['风行能够躲避在开启技能前产生的攻击弹道。'],
        },
        {
            ability_classname: 'imba_windrunner_focusfire',
            ability_specials: [
                {
                    ability_special: 'AbilityDuration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'bonus_attack_speed',
                    text: '攻击速度加成：',
                },
                {
                    ability_special: 'attacks_per_second',
                    text: '每秒攻击次数：',
                },
                {
                    ability_special: 'focusfire_damage_reduction',
                    text: '%攻击力降低：',
                },
                {
                    ability_special: 'bonus_range',
                    text: '攻击距离加成：',
                },
            ],
            name: '集中火力',
            description:
                '风行者受风的引领，攻击敌方单位或建筑的攻击速度增加{bonus_attack_speed}，但是攻击力降低。不过次级物品效果的额外伤害不会降低。',
            lore: '莱瑞蕾具备狂风般地向敌人轰射出无数箭矢的无双本领——尽管牺牲了不少威力。',
            notes: ['下达停在原地的指令会暂停风行者的攻击。', '风行者在攻击时可以移动。'],
        },
        {
            ability_classname: 'imba_windrunner_focusfire_cancel',
            ability_specials: [],
            name: '集中火力取消',
            description: '提前结束集中火力。',
            notes: [],
        },
        {
            ability_classname: 'imba_windrunner_easy_breezy',
            ability_specials: [],
            name: '举步生风',
            description: '风行者的移动速度不会低于{min_movespeed}，而且可以达到{max_movespeed}。',
            notes: [],
        },
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: 'special_bonus_unique_imba_windranger_2',
                    name: '集中火力击杀后减{s:bonus_cooldown_reduction_per_kill}秒冷却',
                    description: '只要集中火力的目标阵亡就会触发，不论是被谁击杀。',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_windranger_3',
                    name: '-{s:bonus_damage_reduction}% 强力击降低',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_windranger_4',
                    name: '-{s:value}秒 风行冷却',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_windranger_6',
                    name: '+{s:bonus_stun_duration}秒 束缚击眩晕',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_windranger_8',
                    name: '-{s:bonus_focusfire_damage_reduction}% 集中火力降低攻击力',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_windranger_9',
                    name: '-{s:value}秒 束缚击冷却',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_windranger_windrun_undispellable',
                    name: '风行不可驱散',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_windranger_powershot_slow',
                    name: '+{s:bonus_slow}% 强力击减速',
                },
            ],
        },
    ],
    FacetArray_B: [
        {
            facet_classname: 'windrunner_facets_imba_1',
            name: '集中火力 | 一路顺风 | 旋风',
            description: '集中火力快速攻击单个目标。 风行会使风行者和附近友军获得额外移动速度加成。 集中火力随机对范围内敌人发动攻击。',
            related_abilities: [
                {
                    ability_classname: 'imba_windrunner_windrun',
                    description: '风行会使风行者和附近友军获得额外移动速度加成。',
                },
                {
                    ability_classname: 'imba_windrunner_focusfire',
                    description:
                        '集中火力不再需要施法目标，而是对风行者攻击距离 + {bonus_range}范围内的随机敌人发动攻击。每秒发动固定次数的攻击，并且每4箭才会击中一次同个敌人。以英雄优先。',
                },
            ],
            related_talents: [
                {
                    talent_key: 'special_bonus_unique_windranger_2_facet_windrunner_whirlwind',
                    description: '旋风击杀后延长{s:bonus_duration_increase_per_kill}秒持续时间',
                },
            ],
        },
    ],
    ModifierArray: [
        {
            modifier_classname: 'modifier_imba_windrunner_shackle_shot',
            name: '束缚击',
            description: '被风行者的诱捕之箭上粗大的绳子牢牢绑住。',
        },
        {
            modifier_classname: 'modifier_imba_windrunner_windrun',
            name: '风行',
            description: '移动速度提升 {MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}% 并闪避所有物理攻击',
        },
        {
            modifier_classname: 'modifier_imba_windrunner_windrun_slow',
            name: '风行减速',
            description: '环绕风行者的强风使周围的敌人移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%',
        },
        {
            modifier_classname: 'modifier_imba_windrunner_windrun_invis',
            name: '风行隐身',
            description: '隐去身形，但是沿途留下碍人的狂风。',
        },
        {
            modifier_classname: 'modifier_imba_windrunner_windrun_speed',
            name: '一路顺风',
            description: '移动速度提升{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。',
        },
        {
            modifier_classname: 'modifier_imba_windrunner_focusfire',
            name: '集中火力',
            description: '以极高攻击速度持续攻击单个目标，但是攻击力降低{MODIFIER_PROPERTY_DAMAGEOUTGOING_PERCENTAGE}%',
        },
        {
            modifier_classname: 'modifier_imba_windrunner_whirlwind',
            name: '旋风',
            description: '对攻击距离内的敌人随机发动攻击。',
        },
        {
            modifier_classname: 'modifier_imba_windrunner_windrun_charge_counter',
            name: '风行能量点数',
            description: '阿哈利姆神杖提供。',
        },
        {
            modifier_classname: 'modifier_imba_windrunner_gale_force',
            name: '狂风之力',
            description: '在强风中顽强前进。',
        },
        {
            modifier_classname: 'modifier_imba_windrunner_powershot_slow',
            name: '强力击',
            description: '移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%',
        },
    ],
};
