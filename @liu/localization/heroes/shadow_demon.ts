import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: 'imba_shadow_demon_disruption',
            ability_specials: [
                {
                    ability_special: 'disruption_duration',
                    text: '禁锢持续时间：',
                },
                {
                    ability_special: 'illusion_duration',
                    text: '幻象持续时间：',
                },
                {
                    ability_special: 'illusion_outgoing_tooltip',
                    text: '%幻象继承攻击力：',
                },
                {
                    ability_special: 'illusion_flat_damage',
                    text: '额外基础攻击力：',
                },
                {
                    ability_special: 'tooltip_total_illusion_incoming_damage',
                    text: '%幻象承受伤害：',
                },
            ],
            name: '崩裂禁锢',
            description: '将目标单位从战场上放逐一段时间。回归时会产生该单位的2个具有额外基础攻击力的幻象，受暗影恶魔控制。',
            lore: '欺骗的痛苦不是在其发生之时，而是在其被揭露之时。',
            notes: [],
        },
        {
            ability_classname: 'imba_shadow_demon_soul_catcher',
            ability_specials: [
                {
                    ability_special: 'health_lost',
                    text: '%当前生命值损失：',
                },
                {
                    ability_special: 'radius',
                    text: '作用范围：',
                },
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'bonus_spell_amp',
                    text: '%每名英雄提供技能增强：',
                },
            ],
            name: '灵魂猎手',
            description:
                '俘获区域内所有敌方单位的灵魂，使其损失当前生命值的一定百分比。暗影恶魔根据俘获英雄灵魂数量暂时获得技能增强。负面效果被移除后将重获一半损失的生命。崩裂禁锢作用下的单位也能受到灵魂猎手影响。',
            lore: '抵抗暗影恶魔的腐蚀通常都是徒劳的。',
            notes: [],
        },
        {
            ability_classname: 'imba_shadow_demon_shadow_servant',
            ability_specials: [
                {
                    ability_special: 'illusion_outgoing_damage_tooltip',
                    text: '%幻象继承攻击力：',
                },
                {
                    ability_special: 'radius',
                    text: '作用范围：',
                },
                {
                    ability_special: 'illusion_incoming_damage_tooltip',
                    text: '%幻象承受伤害：',
                },
            ],
            name: '暗影仆从',
            description: '暗影恶魔在周围有英雄阵亡时会产生相应的幻象。',
            notes: ['被暗影恶魔击杀的英雄不论距离多远都会产生一个幻象。', '敌方英雄复活或暗影恶魔阵亡时幻象消失。'],
        },
        {
            ability_classname: 'imba_shadow_demon_shadow_poison',
            ability_specials: [
                {
                    ability_special: 'stack_damage',
                    text: '叠加伤害：',
                },
                {
                    ability_special: 'max_multiply_stacks',
                    text: '伤害加倍最多层数：',
                },
                {
                    ability_special: 'radius',
                    text: '作用范围：',
                },
                {
                    ability_special: 'hit_damage',
                    text: '直接伤害：',
                },
            ],
            name: '暗影剧毒',
            description:
                '在一条直线上造成伤害，并以毒咒折磨敌方单位。根据目标身上的叠加层数，毒咒造成1/2/4/8/16倍的叠加伤害，至多{max_multiply_stacks}层。更多层的叠加每层造成{bonus_stack_damage}点伤害。这部分延缓的伤害在暗影毒的持续时间结束后生效，或者使用附属技能立刻造成伤害。',
            lore: '暗影恶魔不断增长的影响力能够玷污最勇敢最纯洁的英雄。',
            notes: ['暗影剧毒可以作用处于崩裂禁锢的单位。'],
        },
        {
            ability_classname: 'imba_shadow_demon_shadow_poison_release',
            ability_specials: [],
            name: '释放暗影毒',
            description: '释放毒咒对所有受影响的单位造成伤害。崩裂禁锢中的单位依然可以受到暗影毒的影响。',
            notes: [],
        },
        {
            ability_classname: 'imba_shadow_demon_demonic_purge',
            ability_specials: [
                {
                    ability_special: 'purge_damage',
                    text: '净化伤害：',
                },
                {
                    ability_special: 'max_charges',
                    text: '最大能量点数：',
                },
                {
                    ability_special: 'charge_restore_time_tooltip_scepter',
                    text: '基础充能时间：',
                },
            ],
            name: '邪恶净化',
            description:
                '净化目标敌方单位，移除增益魔法效果，并使目标在持续时间内减速。伤害在持续时间结束时计算，在此之前目标单位的移动速度缓慢地恢复。崩裂禁锢中的单位依然可以受到邪恶净化的影响。\\n\\n驱散类型：弱驱散',
            lore: '一旦暗影恶魔不再需要他的信徒，他会抛弃对它的奴役——还有它的生命。',
            scepter_description:
                '移除冷却时间，变为每隔{charge_restore_time_tooltip_scepter}秒充能一次，最多有{max_charges}点能量。另外邪恶净化还将在生效时间内破坏目标的被动技能。',
            notes: [
                '减速效果起始时为{max_slow}%，然后持续减少至{max_slow}%。',
                '邪恶净化的持续时间内将持续移除目标的有益状态。',
                '可以对无敌单位施放。',
            ],
        },
        {
            ability_classname: 'imba_shadow_demon_demonic_cleanse',
            ability_specials: [
                {
                    ability_special: 'purge_damage',
                    text: '净愈治疗：',
                },
                {
                    ability_special: 'max_charges',
                    text: '最大能量点数：',
                },
                {
                    ability_special: 'charge_restore_time_tooltip_scepter',
                    text: '基础充能时间：',
                },
            ],
            name: '邪恶净愈',
            description:
                '净愈目标友方单位，在持续时间内移除负面效果。在持续时间结束时该单位受到治疗效果。崩裂禁锢中的单位依然可以受到邪恶净愈的效果。<br><br>驱散类型：弱驱散',
            scepter_description: '变为充能型技能，拥有{max_charges}点能量点数，每{charge_restore_time_tooltip_scepter}秒恢复一点。',
            notes: ['可以对无敌单位施放。', '净愈的持续时间内将持续移除目标的负面状态。'],
        },
        {
            ability_classname: 'imba_shadow_demon_disseminate',
            ability_specials: [
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'damage_reflection_pct',
                    text: '%伤害共享百分比：',
                },
            ],
            name: '散播',
            description:
                '只要目标受到伤害，目标附近{radius}范围内所有敌人，若目标为敌人那也包括目标自身，他们都将受到该伤害的一定百分比。可以对敌方或友方目标施放。敌人被崩裂禁锢隐藏时效果暂停。',
            notes: [],
        },
        {
            ability_classname: 'imba_shadow_demon_menace',
            ability_specials: [],
            name: '威胁',
            description: '暗影恶魔的攻击会对敌人施加一个可叠加的{stack}%伤害加深负面效果，持续{duration}秒.',
            notes: ['破坏会使技能无法施加新的叠加效果。', '破坏不会使现有叠加效果提供的状态失效。'],
        },
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: 'special_bonus_unique_imba_shadow_demon_1',
                    name: '+{s:bonus_purge_damage} 邪恶净化/净愈伤害/治疗',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_shadow_demon_3',
                    name: '-{s:value}秒 暗影剧毒冷却',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_shadow_demon_4',
                    name: '+{s:bonus_stack_damage}% 暗影剧毒伤害',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_shadow_demon_7',
                    name: '{s:bonus_AbilityCharges} 崩裂禁锢能量点数',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_shadow_demon_9',
                    name: '-{s:value}秒 邪恶净化冷却',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_shadow_demon_disseminate_damage',
                    name: '+{s:bonus_damage_reflection_pct}% 散播共享伤害',
                },
            ],
        },
    ],
    FacetArray_B: [
        {
            facet_classname: 'shadow_demon_facets_imba_1',
            name: '传播',
            description: '散播会立刻在持续时间内移除对方的一定百分比生命值。',
            related_abilities: [
                {
                    ability_classname: 'imba_shadow_demon_disseminate',
                    description: '如果目标是敌人，他们会损失{health_lost}%生命值，效果结束后会回复一半的生命。如果目标是友军，会增加相应数值的生命。',
                },
            ],
            related_talents: [],
        },
    ],
    ModifierArray: [
        {
            modifier_classname: 'modifier_imba_shadow_demon_disseminate',
            name: '散播',
            description: '这个单位所受伤害的一定百分比也会施加给他周围暗影恶魔的敌人。',
        },
        {
            modifier_classname: 'modifier_imba_shadow_demon_disruption',
            name: '崩裂禁锢',
            description: '被放逐。',
        },
        {
            modifier_classname: 'modifier_imba_shadow_demon_soul_catcher',
            name: '灵魂猎手',
            description: '损失生命。技能持续时间结束后将重获一半生命。',
        },
        {
            modifier_classname: 'modifier_imba_shadow_demon_soul_catcher_spell_amp',
            name: '灵魂猎手',
            description: '获得{MODIFIER_PROPERTY_SPELL_AMPLIFY_PERCENTAGE}%技能增强。',
        },
        {
            modifier_classname: 'modifier_imba_shadow_demon_shadow_poison',
            name: '暗影剧毒',
            description: '即将受到{MODIFIER_PROPERTY_TOOLTIP}点伤害。',
        },
        {
            modifier_classname: 'modifier_imba_shadow_demon_purge_slow',
            name: '受到邪恶净化作用',
            description: '移动速度被减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。持续驱散目标。',
        },
        {
            modifier_classname: 'modifier_imba_shadow_demon_demonic_purge_charge_counter',
            name: '邪恶净化能量点数',
            description: '使用后将开始回复能量点数。',
        },
        {
            modifier_classname: 'modifier_imba_shadow_demon_disruption_charge_counter',
            name: '崩裂禁锢能量计数',
        },
        {
            modifier_classname: 'modifier_imba_shadow_demon_menace_crushed',
            name: '威胁',
            description: '受到的伤害增加{MODIFIER_PROPERTY_INCOMING_DAMAGE_PERCENTAGE}%。',
        },
        {
            modifier_classname: 'modifier_imba_shadow_demon_disseminate_hploss',
            name: '传播',
            description: '暗影恶魔暂时改变了你的生命值。',
        },
    ],
};
