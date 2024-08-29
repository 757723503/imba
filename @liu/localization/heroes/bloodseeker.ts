import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: 'imba_bloodseeker_bloodrage',
            ability_specials: [
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'attack_speed',
                    text: '攻击速度：',
                },
                {
                    ability_special: 'spell_amp',
                    text: '%技能增强：',
                },
                {
                    ability_special: 'damage_pct',
                    text: '%每秒最大生命值伤害：',
                },
            ],
            name: '血怒',
            description: '使血魔陷入渴望鲜血的狂怒中，以每秒流失一定百分比生命的代价获得攻击速度和技能增强加成。对友方英雄的攻击速度加成减半。',
            lore: '史德利古尔与人分享他那野兽般的嗜血饥渴。',
            shard_description: '血怒的攻击造成{shard_max_health_dmg}点纯粹伤害，并且自身回复相同数值。仅对血魔自身有效。',
            notes: ['对血魔或友军造成的伤害不能致死，而且不能杀死英雄。'],
        },
        {
            ability_classname: 'imba_bloodseeker_blood_bath',
            ability_specials: [
                {
                    ability_special: 'radius',
                    text: '祭祀范围：',
                },
                {
                    ability_special: 'silence_duration',
                    text: '沉默持续时间：',
                },
                {
                    ability_special: 'damage',
                    text: '伤害：',
                },
            ],
            name: '血祭',
            description: '血魔用圣血为一片区域洗礼。{delay_plus_castpoint_tooltip}秒后祭祀完成，区域范围内所有敌人都会受到伤害，并被沉默。',
            lore: '只要有人在战场上遍洒鲜血，那么剥皮双子就乐于向他施以援手。',
            notes: ['总时间为{delay}秒的施法时间加上{castpoint_tooltip}秒的生效延迟。'],
        },
        {
            ability_classname: 'imba_bloodseeker_thirst',
            ability_specials: [
                {
                    ability_special: 'min_bonus_pct',
                    text: '%触发焦渴临界生命值：',
                },
                {
                    ability_special: 'bonus_movement_speed',
                    text: '%焦渴移速加成上限：',
                },
                {
                    ability_special: 'active_movement_speed',
                    text: '%主动开启时移动速度加成：',
                },
                {
                    ability_special: 'active_duration',
                    text: '主动效果持续时间：',
                },
                {
                    ability_special: 'visibility_threshold_pct',
                    text: '%获得视野血量临界值：',
                },
            ],
            name: '焦渴',
            description:
                '血魔能够感知到敌人的伤口中涌出的鲜血，敌方英雄的生命值低于{min_bonus_pct}%，他的移动速度就会提升，而且生命值越低，提升效果越大。如果生命值低于{min_bonus_pct}%，他还将获得该英雄的视野和真实视域。焦渴的效果可以叠加。血魔可以突破最大速度限制。',
            lore: '史德利古尔闻到血腥味就会变得无比狂热。',
            notes: ['幻象不能触发该技能。', '移动速度加成在敌人生命值低于{max_bonus_pct}%时达到上限。', '目标死亡后效果延续{linger_duration}秒。'],
        },
        {
            ability_classname: 'imba_bloodseeker_rupture',
            ability_specials: [
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'movement_damage_pct',
                    text: '%移动伤害：',
                },
                {
                    ability_special: 'hp_pct',
                    text: '%生命值伤害：',
                },
                {
                    ability_special: 'knockback',
                    text: '推行距离：',
                },
            ],
            name: '割裂',
            description: '让一个敌方单位皮开肉绽，根据其当前生命值造成初始伤害。单位移动后会根据移动的距离受到伤害。',
            lore: '当血魔猎杀你时，受伤就意味着死亡。',
            notes: [],
        },
        {
            ability_classname: 'imba_bloodseeker_blood_mist',
            ability_specials: [
                {
                    ability_special: 'hp_cost_per_second',
                    text: '%每秒生命消耗/伤害：',
                },
                {
                    ability_special: 'radius',
                    text: '作用范围：',
                },
                {
                    ability_special: 'movement_slow',
                    text: '%移动速度减缓：',
                },
                {
                    ability_special: 'voracity_bonus_pct',
                    text: '%食血动物治疗加成：',
                },
            ],
            name: '血雾',
            description:
                '血魔将自己的鲜血撒向一片区域，伤害自身的同时对敌人造成伤害和减速。开启时食血动物的治疗效果提升。技能处于冷却时无法关闭。<br><br>另外，被动使来自自身技能的超量治疗变成全伤害护盾，最多可达血魔最大生命的50%%。护盾数值每秒衰减{barrier_decay_pct}%。',
            notes: ['对血魔造成的伤害不能致死，而且不能杀死英雄。'],
        },
        {
            ability_classname: 'imba_bloodseeker_sanguivore',
            ability_specials: [
                {
                    ability_special: 'half_bonus_aoe',
                    text: '半额治疗作用范围：',
                },
                {
                    ability_special: 'max_hp_percent_heal_tooltip',
                    text: '%最大生命值治疗：',
                },
            ],
            name: '食血动物',
            description:
                '血魔每杀死一个单位都会回复部分生命，回复量为每级血魔等级为{heal_hp_pct_per_level}%单位最大生命值，加上基础{base_heal}点。<br><br>友军击杀了附近的敌方英雄时会回复半额数值。',
            notes: ['非英雄单位的吸血效果减少{creep_lifesteal_reduction_pct}%。'],
        },
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: 'special_bonus_unique_imba_bloodseeker_2',
                    name: '+{s:bonus_damage} 血祭伤害',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_bloodseeker_3',
                    name: '+{s:bonus_AbilityCastRange} 割裂施法距离',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_bloodseeker_4',
                    name: '+{s:bonus_bonus_movement_speed}% 焦渴最大移速',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_bloodseeker_5',
                    name: '+{s:bonus_attack_speed} 血怒攻击速度',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_bloodseeker_6',
                    name: '+{s:bonus_spell_amp}% 血怒技能增强',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_bloodseeker_7',
                    name: '+{s:bonus_hp_pct}% 割裂初始伤害',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_bloodseeker_rupture_charges',
                    name: '{s:bonus_AbilityCharges} 割裂能量点数',
                },
            ],
        },
    ],
    FacetArray_B: [
        {
            facet_classname: 'bloodseeker_facets_imba_1',
            name: '动脉偾张 | 血色冲锋',
            description: '割裂作用下单位被血魔攻击时会被推行。 血魔可以暂时大幅增强焦渴的移动速度。',
            related_abilities: [
                {
                    ability_classname: 'imba_bloodseeker_thirst',
                    description: '可以主动开启，短时间内获得移动速度加成。技能冷却时不会提供被动移速加成。无法在所有敌方英雄满血时施放',
                },
                {
                    ability_classname: 'imba_bloodseeker_rupture',
                    description: '割裂作用下单位被血魔攻击时会被推行。',
                },
            ],
            related_talents: [],
        },
    ],
    ModifierArray: [
        {
            modifier_classname: 'modifier_imba_bloodseeker_blood_mist',
            name: '血雾',
            description: '喷洒鲜血对附近敌人造成伤害和减速。焦渴的治疗效果提升。',
        },
        {
            modifier_classname: 'modifier_imba_bloodseeker_blood_mist_barrier',
            name: '血雾',
            description: '超量治疗生成的护盾会持续衰减。',
        },
        {
            modifier_classname: 'modifier_imba_bloodseeker_blood_mist_slow',
            name: '血雾',
            description: '移动速度被血魔的鲜血减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。',
        },
        {
            modifier_classname: 'modifier_imba_bloodseeker_bloodrage',
            name: '血怒',
            description: '以持续受到伤害为代价提升攻击速度和技能增强。',
        },
        {
            modifier_classname: 'modifier_imba_bloodseeker_blood_bath',
            name: '屠戮',
            description: '杀死任意单位后将回复生命值',
        },
        {
            modifier_classname: 'modifier_imba_bloodseeker_thirst_speed',
            name: '焦渴加速',
            description: '你感知到了一个受伤的敌人。移动速度得到提升。',
        },
        {
            modifier_classname: 'modifier_imba_bloodseeker_thirst_vision',
            name: '焦渴',
            description: '血魔感觉到了你的伤痛，对你的位置了如指掌。',
        },
        {
            modifier_classname: 'modifier_imba_bloodseeker_thirst_active',
            name: '血色冲锋',
            description: '提升了移动速度。',
        },
        {
            modifier_classname: 'modifier_imba_bloodseeker_rupture',
            name: '割裂',
            description: '造成与移动距离成正比的伤害。',
        },
        {
            modifier_classname: 'modifier_imba_bloodseeker_rupture_charge_counter',
            name: '割裂能量点数',
            description: '只要有能量点数就能随时施放割裂。',
        },
    ],
};
