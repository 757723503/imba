import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: 'imba_dark_willow_bramble_maze',
            ability_specials: [
                {
                    ability_special: 'latch_duration',
                    text: '缠绕持续时间：',
                },
                {
                    ability_special: 'latch_range',
                    text: '荆棘抓取范围：',
                },
                {
                    ability_special: 'damage_per_tick',
                    text: '每次伤害：',
                },
                {
                    ability_special: 'spell_amp',
                    text: '%伤害加深：',
                },
            ],
            name: '荆棘迷宫',
            description:
                '{initial_creation_delay}秒后邪影芳灵在目标区域创造出{placement_range}范围的迷宫，迷宫拥有{placement_count}棵荆棘。进入荆棘的敌人将被缠绕，并且持续受到伤害。迷宫持续{placement_duration}秒。',
            lore: '仙灵之境将你环绕，只是在等着让你深陷……',
            notes: ['缠绕无法打断持续施法。'],
        },
        {
            ability_classname: 'imba_dark_willow_bedlam',
            ability_specials: [
                {
                    ability_special: 'attack_damage',
                    text: '攻击伤害：',
                },
                {
                    ability_special: 'attack_interval',
                    text: '攻击间隔：',
                },
                {
                    ability_special: 'attack_radius',
                    text: '攻击作用范围：',
                },
                {
                    ability_special: 'roaming_duration',
                    text: '游走持续时间：',
                },
                {
                    ability_special: 'damage_reduction_pct',
                    text: '%伤害降低：',
                },
            ],
            name: '作祟',
            description: '邪影芳灵放出她的精灵宠物在持续时间内围绕自身飞行，快速攻击周围敌人。恐吓生效期间不能使用作祟。',
            lore: '你得原谅我的朋友杰克斯。他是有点杀红了眼。',
            notes: [],
        },
        {
            ability_classname: 'imba_dark_willow_terrorize',
            ability_specials: [
                {
                    ability_special: 'destination_radius',
                    text: '作用范围：',
                },
                {
                    ability_special: 'destination_status_duration',
                    text: '恐惧持续时间：',
                },
            ],
            name: '恐吓',
            description:
                '邪影芳灵放出她的精灵宠物恐吓她的敌人。经过一定延迟后，目标区域内所有敌人变得害怕，朝自己的泉水狂奔。作祟开启期间不能使用恐吓。',
            lore: '你觉得你知道恐惧的意思？杰克斯会让你见识这词的真谛……',
            notes: ['恐吓提供受作用单位的视野。'],
        },
        {
            ability_classname: 'imba_dark_willow_shadow_realm',
            ability_specials: [
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'damage',
                    text: '最高伤害：',
                },
            ],
            name: '暗影之境',
            description:
                '邪影芳灵遁入暗影之境，无法成为攻击或技能的目标。她的下次攻击具有{attack_range_bonus}额外攻击距离，并且造成额外魔法伤害，暗影之境技能也会随之结束。在暗影中时间越长，伤害越高。在暗影之境内的时间超过{max_damage_duration}秒将达到最高伤害。',
            lore: '你看不见的东西肯定会害你。',
            scepter_description: '发动普通攻击不再使邪影芳灵脱离暗影之境。持续时间内每次攻击都带有额外伤害。',
            notes: ['施法时能躲避弹道。', '获得相位移动状态。', '需要视野的技能无法作用于暗影之境中的邪影芳灵。'],
        },
        {
            ability_classname: 'imba_dark_willow_cursed_crown',
            ability_specials: [
                {
                    ability_special: 'delay',
                    text: '延迟：',
                },
                {
                    ability_special: 'stun_duration',
                    text: '眩晕持续时间：',
                },
                {
                    ability_special: 'stun_radius',
                    text: '眩晕作用范围：',
                },
            ],
            name: '诅咒王冠',
            description: '邪影芳灵授予敌人一顶被诅咒的古老仙灵王冠。经过一定延迟后，目标和周围的所有敌人都会被眩晕。',
            lore: '没人告诉过你吗？千万别和仙女打交道……',
            shard_description:
                '诅咒王冠在倒计时结束时会围绕目标在{shard_spawn_radius}范围内产生{shard_bramble_amount}朵荆棘。即使效果被驱散也会触发。眩晕延迟降低{shard_delay_reduction}秒。',
            notes: [],
        },
        {
            ability_classname: 'imba_dark_willow_pixie_dust',
            ability_specials: [],
            name: '仙灵粉尘',
            description: '每当有技能让邪影芳灵无法成为目标，她就会在该状态下获得{hp_regen}%生命恢复和{hp_regen}%魔法恢复。',
            notes: [],
        },
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: 'special_bonus_unique_imba_dark_willow_1',
                    name: '+{s:value}秒 暗影之境持续时间',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_dark_willow_2',
                    name: '{s:bonus_impact_damage} 恐吓击中伤害',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_dark_willow_3',
                    name: '-{s:bonus_AbilityCooldown}秒 荆棘迷宫冷却',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_dark_willow_4',
                    name: '+{s:bonus_attack_damage} 作祟伤害',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_dark_willow_5',
                    name: '-{s:bonus_AbilityCooldown}秒 暗影之境冷却',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_dark_willow_6',
                    name: '+{s:bonus_stun_duration}秒 诅咒王冠眩晕',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_dark_willow_7',
                    name: '+{s:bonus_stun_radius} 诅咒王冠范围',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_dark_willow_bedlam_targets',
                    name: '+{s:bonus_target_count} 作祟攻击目标',
                },
            ],
        },
    ],
    FacetArray_B: [
        {
            facet_classname: 'dark_willow_facets_imba_1',
            name: '切肤之影 | 荆棘丛生',
            description: '邪影芳灵处于暗影之境时，她对附近英雄造成更高伤害。 荆棘迷宫会产生额外的荆棘。',
            related_abilities: [
                {
                    ability_classname: 'imba_dark_willow_bramble_maze',
                    description: '产生额外的荆棘。这些荆棘持续{extra_brambles_placement_duration}秒。',
                },
                {
                    ability_classname: 'imba_dark_willow_shadow_realm',
                    description:
                        '处于暗影之境时，邪影芳灵会散发出一个{aura_radius}范围的光环，使她对范围内的敌人造成的伤害增加，最高为{aura_damage_pct}%。根据她在暗影之境内停留的时间，造成的伤害会随之增加。',
                },
            ],
            related_talents: [],
        },
    ],
    ModifierArray: [
        {
            modifier_classname: 'modifier_imba_dark_willow_bramble_maze',
            name: '荆棘迷宫',
            description: '被缠绕，无法移动。',
        },
        {
            modifier_classname: 'modifier_imba_dark_willow_shadow_realm_buff',
            name: '暗影之境',
            description: '无法被选中，而且获得额外魔法伤害。',
        },
        {
            modifier_classname: 'modifier_imba_dark_willow_shadow_realm_aura_debuff',
            name: '切肤之影',
            description: '受到的邪影芳灵伤害会增加。',
        },
        {
            modifier_classname: 'modifier_imba_dark_willow_cursed_crown',
            name: '诅咒王冠',
            description: '即将被诅咒王冠眩晕。',
        },
        {
            modifier_classname: 'modifier_imba_dark_willow_debuff_fear',
            name: '恐吓',
            description: '奔回泉水，远离邪影芳灵。',
        },
        {
            modifier_classname: 'modifier_imba_dark_willow_bedlam',
            name: '作祟',
            description: '精灵环绕着你，并攻击敌人。',
        },
    ],
};
