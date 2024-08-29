import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: 'imba_skeleton_king_hellfire_blast',
            ability_specials: [
                {
                    ability_special: 'blast_stun_duration',
                    text: '眩晕持续时间：',
                },
                {
                    ability_special: 'blast_dot_duration',
                    text: '减速持续时间：',
                },
                {
                    ability_special: 'blast_slow',
                    text: '%移动速度减缓：',
                },
                {
                    ability_special: 'damage',
                    text: '即时伤害：',
                },
                {
                    ability_special: 'blast_dot_damage',
                    text: '每秒持续伤害：',
                },
            ],
            name: '冥火爆击',
            description: '冥魂大帝向一个敌方单位发射冥魂火球，造成即时伤害和眩晕，并持续对目标造成伤害和减速。',
            lore: '奥斯塔里昂激活他的冥魂怒意，毁灭他的敌人。',
            notes: [],
        },
        {
            ability_classname: 'imba_skeleton_king_bone_guard',
            ability_specials: [
                {
                    ability_special: 'skeleton_duration',
                    text: '骷髅兵持续时间：',
                },
                {
                    ability_special: 'max_skeleton_charges',
                    text: '最大能量点数：',
                },
                {
                    ability_special: 'skeleton_damage_tooltip',
                    text: '骷髅兵攻击力：',
                },
                {
                    ability_special: 'skeleton_building_damage_reduction',
                    text: '%骷髅兵对建筑伤害降低：',
                },
                {
                    ability_special: 'skeleton_bonus_hero_damage',
                    text: '%骷髅兵对英雄额外伤害：',
                },
            ],
            name: '白骨护卫',
            description: '每击杀2个单位获得一点能量。可以主动使用，消耗所有能量点数召唤可以复活一次的骷髅兵。骷髅兵享受吸血灵魂的吸血效果。',
            lore: '冥魂大帝的剑刃汲取敌人的精华，填补自身的元气。',
            notes: ['破坏会使技能无法获得新的叠加效果。'],
        },
        {
            ability_classname: 'imba_skeleton_king_spectral_blade',
            ability_specials: [
                {
                    ability_special: 'cursed_damage_pct',
                    text: '%诅咒伤害：',
                },
                {
                    ability_special: 'cursed_damage',
                    text: '基础伤害：',
                },
                {
                    ability_special: 'curse_cooldown',
                    text: '诅咒冷却时间（对英雄）：',
                },
                {
                    ability_special: 'curse_cooldown_creep',
                    text: '诅咒冷却时间（对非英雄）：',
                },
                {
                    ability_special: 'curse_delay',
                    text: '诅咒延迟：',
                },
            ],
            name: '幽魂之剑',
            description:
                '冥魂大帝对攻击的单位施加诅咒，经过一定延迟后造成一定量伤害和攻击伤害的一定百分比。吸血灵魂的吸血效果对诅咒伤害有效，而一个单位在短时间内不会被再次诅咒。',
            notes: [],
        },
        {
            ability_classname: 'imba_skeleton_king_mortal_strike',
            ability_specials: [
                {
                    ability_special: 'crit_mult',
                    text: '%致命一击伤害：',
                },
            ],
            name: '本命一击',
            description: '冥魂大帝被动地在攻击时造成额外伤害，本技能具有冷却时间。',
            lore: '单凭一击，斩敌无匹。',
            shard_description: '冥魂形态下本命一击额外造成{wraith_crit_bonus}%伤害。',
            notes: [],
        },
        {
            ability_classname: 'imba_skeleton_king_reincarnation',
            ability_specials: [
                {
                    ability_special: 'reincarnate_time',
                    text: '绝冥再生时间：',
                },
                {
                    ability_special: 'movespeed',
                    text: '%移动速度减缓：',
                },
                {
                    ability_special: 'attackslow',
                    text: '攻击速度降低：',
                },
                {
                    ability_special: 'slow_duration',
                    text: '减速持续时间：',
                },
                {
                    ability_special: 'AbilityCooldown',
                    text: '冷却时间：',
                },
            ],
            name: '绝冥再生',
            description:
                '冥魂大帝倒下后，他飞散的冥魂会重组，使他复活。死亡时附近{slow_radius}范围内的敌人会被减速。可以对自身施放，使冥魂大帝立刻阵亡。',
            lore: '冥魂大帝的对头们一直很疑惑，为什么他就是不会死透。',
            shard_description: '绝冥再生不需要消耗魔法。',
            scepter_description: '减少冷却时间。',
            notes: [
                '如果魔法不足冥魂大帝将不会重生。',
                '如果冥魂大帝拥有不朽之守护，同时绝冥再生不处于冷却状态，死亡后将首先触发绝冥再生。',
                '重生后生命值和魔法值全满。',
            ],
        },
        {
            ability_classname: 'imba_skeleton_king_vampiric_spirit',
            ability_specials: [
                {
                    ability_special: 'vampiric_aura',
                    text: '%吸血：',
                },
                {
                    ability_special: 'duration',
                    text: '冥魂持续时间：',
                },
                {
                    ability_special: 'scepter_attack_speed',
                    text: '攻击速度加成：',
                },
                {
                    ability_special: 'scepter_move_speed_pct',
                    text: '%移动速度加成：',
                },
                {
                    ability_special: 'scepter_aura_radius',
                    text: '光环作用范围：',
                },
            ],
            name: '吸血灵魂',
            description: '冥魂大帝获得吸血效果。被击杀时冥魂大帝变为移动无视地形的冥魂，拥有额外攻击和移动速度，持续较短时间，自身死亡延后。',
            scepter_description: '吸血灵魂变为光环，使友方英雄被击杀时也能变为冥魂。延长冥魂的持续时间。',
            notes: [
                '对于死亡被延缓的友军，其成为冥魂前所受的最后一击来源即为击杀者。',
                '触发绝冥再生时没有效果。',
                '非英雄单位的吸血效果减少{creep_lifesteal_reduction_pct}%。',
                '破坏只会使被动吸血失效。',
                '复活时间会根据冥魂持续时间而减少。',
            ],
        },
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: 'special_bonus_unique_imba_wraith_king_2',
                    name: '+{s:bonus_vampiric_aura}% 吸血灵魂吸血',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_wraith_king_3',
                    name: '+{s:bonus_blast_dot_damage}% 冥火爆击即时/每秒伤害',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_wraith_king_4',
                    name: '绝冥再生施放冥火爆击',
                    description: '触发绝冥再生时900范围内所有敌方单位将受到当前等级冥火暴击的作用。',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_wraith_king_10',
                    name: '-{s:value}秒 本命一击冷却',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_wraith_king_11',
                    name: '+{s:bonus_blast_stun_duration}秒 冥火爆击眩晕',
                },
            ],
        },
    ],
    FacetArray_B: [
        {
            facet_classname: 'skeleton_king_facets_imba_1',
            name: '白骨护卫 | 幽魂之剑',
            description: '冥魂大帝可以召唤骷髅兵为他作战。 冥魂大帝的攻击会诅咒敌人，在一定延迟后造成额外伤害。',
            related_abilities: [
                {
                    ability_classname: 'imba_skeleton_king_reincarnation',
                    description: '重生过程中会产生{shard_skeleton_count}个骷髅兵攻击附近每个敌方英雄。',
                },
            ],
            related_talents: [],
        },
    ],
    ModifierArray: [
        {
            modifier_classname: 'modifier_imba_skeleton_king_bonus_mortal_strike',
            name: '本命一击加成',
            description: '本命一击的致命一击伤害提升{MODIFIER_PROPERTY_TOOLTIP}%。',
        },
        {
            modifier_classname: 'modifier_imba_skeleton_king_hellfire_blast',
            name: '冥火爆击',
            description: '移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%并持续受到伤害',
        },
        {
            modifier_classname: 'modifier_imba_skeleton_king_bone_guard_buff',
            name: '吸血光环',
            description: '攻击时回复生命值',
        },
        {
            modifier_classname: 'modifier_imba_skeleton_king_reincarnate_slow',
            name: '重生',
            description:
                '深受冥魂大帝的绝冥再生影响。移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%，攻击速度降低{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}。',
        },
        {
            modifier_classname: 'modifier_imba_skeleton_king_reincarnation_scepter',
            name: '冥魂续命',
            description: '若被击杀，将在死亡前{MODIFIER_PROPERTY_TOOLTIP}秒内变成冥魂。',
        },
        {
            modifier_classname: 'modifier_imba_skeleton_king_reincarnation_scepter_active',
            name: '死亡延迟',
            description: '变成冥魂，死亡被推迟，但仍会在短时间内死亡。',
        },
        {
            modifier_classname: 'modifier_imba_skeleton_king_reincarnation_scepter_respawn_time',
            name: '绝冥再生',
            description: '阵亡时是冥魂大帝绝冥再生的幽魂。复活时间已经减少。',
        },
        {
            modifier_classname: 'modifier_imba_skeleton_king_bone_guard',
            name: '白骨护卫骷髅兵能量点数',
            description: '施放后召唤的骷髅兵数量。',
        },
        {
            modifier_classname: 'modifier_imba_skeleton_king_bone_guard_summon',
            name: '由白骨护卫召唤而来',
        },
        {
            modifier_classname: 'modifier_imba_skeleton_king_hellfire_blast_skeleton_buff',
            name: '冥火爆击',
            description: '移动和攻击速度得到提升。',
        },
        {
            modifier_classname: 'modifier_imba_skeleton_king_curse',
            name: '奥斯塔里昂的诅咒',
            description: '将在这次负面效果结束时受到伤害。',
        },
        {
            modifier_classname: 'modifier_imba_skeleton_king_curse_cooldown',
            name: '诅咒冷却',
            description: '无法被冥魂大帝诅咒',
        },
    ],
};
