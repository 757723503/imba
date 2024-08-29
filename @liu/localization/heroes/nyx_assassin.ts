import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: 'imba_nyx_assassin_impale',
            ability_specials: [
                {
                    ability_special: 'duration',
                    text: '眩晕时间：',
                },
                {
                    ability_special: 'impale_damage',
                    text: '穿刺伤害：',
                },
            ],
            name: '穿刺',
            description: '岩石尖刺在地上沿一条直线穿刺而出。敌方单位受到伤害，然后被抛向空中，落地时被眩晕。',
            lore: '所有狂热的圣甲虫都拥有地底通道的秘密学识，并用其为自己带来优势。',
            notes: ['尖刺的移动速度是每秒{speed}，最远作用距离为{length}。', '穿刺不会被林肯法球格挡。'],
        },
        {
            ability_classname: 'imba_nyx_assassin_mana_burn',
            ability_specials: [],
            name: '法力燃烧',
            description: '烧毁目标英雄智力值数倍的魔法值，并造成和烧毁的魔法值等量的伤害。',
            lore: '秘湮学院的典籍记载着一只能够侵蚀低等生物心智的圣甲虫。',
            notes: [],
        },
        {
            ability_classname: 'imba_nyx_assassin_jolt',
            ability_specials: [
                {
                    ability_special: 'max_mana_as_damage_pct',
                    text: '%最大魔法值伤害：',
                },
                {
                    ability_special: 'damage_echo_pct',
                    text: '%额外伤害：',
                },
            ],
            name: '神智爆裂',
            description:
                '对敌人造成等同于其最大魔法值乘以系数的伤害。另外还会根据过去{damage_echo_duration}秒内目标受到来自司夜刺客的伤害再造成一定百分比的伤害。瞬间秒杀非远古非英雄单位。',
            notes: [],
        },
        {
            ability_classname: 'imba_nyx_assassin_spiked_carapace',
            ability_specials: [
                {
                    ability_special: 'reflect_duration',
                    text: '反弹持续时间：',
                },
                {
                    ability_special: 'stun_duration',
                    text: '眩晕时间：',
                },
                {
                    ability_special: 'damage_reflect_pct',
                    text: '%反弹伤害：',
                },
            ],
            name: '尖刺外壳',
            description:
                '激活状态下，尖刺外壳可以反弹并无效化司夜刺客受到的伤害（每个攻击者最多作用一次），同时眩晕攻击者。激活尖刺外壳不会打破复仇的隐身状态。\\n\\n钻地状态下尖刺外壳施放后将立刻眩晕周围的敌人。',
            lore: '虽然甲壳相对较薄，不过保护身体的是一圈伸缩自如，剃刀般锋利的尖刺。',
            notes: [
                '反弹的伤害与司夜刺客本应受到的实际伤害相同。',
                '尖刺外壳只有在受到玩家控制单位的伤害后会反弹。',
                '反弹的伤害与司夜刺客受到的伤害类型相同。',
            ],
        },
        {
            ability_classname: 'imba_nyx_assassin_vendetta',
            ability_specials: [
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'movement_speed',
                    text: '%移动速度提升：',
                },
                {
                    ability_special: 'bonus_damage',
                    text: '额外伤害：',
                },
                {
                    ability_special: 'break_duration',
                    text: '破坏持续时间：',
                },
            ],
            name: '复仇',
            description:
                '司夜刺客进入隐身状态并获得移动速度加成。如果司夜刺客以攻击打破隐身，当次攻击将造成超高额外伤害。司夜刺客当次攻击具有{attack_range_bonus}额外攻击距离，并且攻击动作加快{attack_animation_bonus}%。',
            lore: '圣甲虫为女王的荣耀而杀戮。',
            shard_description: '复仇在攻击时施加破坏。',
            notes: [
                '进入隐身时间为{fade_time}秒。',
                '如果在隐身期间使用了技能，或者隐身时间结束，额外伤害的效果将会消失。',
                '拥有阿哈利姆魔晶后，会在造成额外伤害前施加破坏效果。',
            ],
        },
        {
            ability_classname: 'imba_nyx_assassin_burrow',
            ability_specials: [
                {
                    ability_special: 'health_regen_rate',
                    text: '%最大生命值恢复：',
                },
                {
                    ability_special: 'mana_regen_rate',
                    text: '%最大魔法值恢复：',
                },
                {
                    ability_special: 'damage_reduction',
                    text: '%钻地后伤害减免：',
                },
                {
                    ability_special: 'cast_range',
                    text: '钻地施法距离加成：',
                },
                {
                    ability_special: 'cooldown_reduction',
                    text: '%钻地后冷却时间减少：',
                },
                {
                    ability_special: 'carapace_radius',
                    text: '钻地后尖刺外壳作用范围：',
                },
            ],
            name: '钻地',
            description:
                '司夜刺客经过短时间的掘地后钻入地下。钻地后尖刺外壳一施放就会直接眩晕附近所有敌人，神智爆裂和穿刺的施法距离提升，穿刺的冷却时间减少。钻地后司夜刺客固定在原地，无法攻击，并且是隐身状态。同时受到的所有伤害都会降低。',
            lore: '狂热圣甲虫中某些层级的成名绝技是挖掘小型洞穴，守株待兔，做好伏击猎物的准备。',
            notes: ['施放复仇将取消钻地状态。'],
        },
        {
            ability_classname: 'imba_nyx_assassin_unburrow',
            ability_specials: [],
            name: '现身',
            description: '从钻地状态中现身。',
            lore: '狂热圣甲虫中某些层级的成名绝技是挖掘小型洞穴，守株待兔，做好伏击猎物的准备。',
            notes: [],
        },
        {
            ability_classname: 'imba_nyx_assassin_nyxth_sense',
            ability_specials: [],
            name: '夜神感知',
            description: '司夜刺客可以探测到附近{radius}范围内的英雄。',
            notes: [],
        },
        {
            ability_classname: 'imba_nyx_assassin_innate_mana_burn',
            ability_specials: [
                {
                    ability_special: 'mana_pct',
                    text: '%当前魔法值燃烧：',
                },
            ],
            name: '法力燃烧',
            description: '司夜刺客的技能造成的伤害会燃烧敌人的魔法。',
            notes: [],
        },
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: 'special_bonus_unique_imba_nyx',
                    name: '{s:bonus_aoe} 范围型神智爆裂',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_nyx_2',
                    name: '+{s:bonus_impale_damage} 穿刺伤害',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_nyx_4',
                    name: '+{s:bonus_duration}秒 穿刺眩晕',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_nyx_5',
                    name: '+{s:bonus_float_multiplier} 神智爆裂智力倍数',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_nyx_6',
                    name: '+{s:bonus_stun_duration}秒 尖刺外壳眩晕',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_nyx_carapace_reflect_duration',
                    name: '+{s:bonus_reflect_duration}秒 尖刺外壳反弹',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_nyx_vendetta_damage',
                    name: '+{s:bonus_bonus_damage} 复仇伤害',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_nyx_vendetta_cd_manacost',
                    name: '复仇施加破坏',
                    description: '持续{s:bonus_break_duration}秒。',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_nyx_jolt_cooldown',
                    name: '-{s:bonus_AbilityCooldown}秒 神智爆裂冷却',
                },
            ],
        },
    ],
    FacetArray_B: [
        {
            facet_classname: 'nyx_assassin_facets_imba_1',
            name: '疾行',
            description: '复仇的最初{s:bonus_free_pathing_duration}秒内，司夜刺客为极速状态，并且移动无视地形。',
            related_abilities: [
                {
                    ability_classname: 'imba_nyx_assassin_vendetta',
                    description: '复仇的最初{free_pathing_duration}秒内，司夜刺客为极速状态，并且移动无视地形。',
                },
            ],
            related_talents: [],
        },
    ],
    ModifierArray: [
        {
            modifier_classname: 'modifier_imba_nyx_assassin_impale',
            name: '穿刺',
            description: '被眩晕。',
        },
        {
            modifier_classname: 'modifier_imba_nyx_assassin_spiked_carapace',
            name: '尖刺外壳',
            description: '下一次来自玩家的伤害将被反弹，发动攻击的英雄将受到伤害和眩晕。',
        },
        {
            modifier_classname: 'modifier_imba_nyx_assassin_vendetta',
            name: '复仇',
            description: '移动速度提升{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%并可以穿越单位。下一次攻击将造成额外伤害。',
        },
        {
            modifier_classname: 'modifier_imba_nyx_assassin_burrow',
            name: '已钻地',
            description: '静止，隐身，而且无法攻击。获得额外的生命和魔法恢复，受到的伤害降低。',
        },
        {
            modifier_classname: 'modifier_imba_nyx_assassin_vendetta_fast',
            name: '快速移动！',
            description: '以极速状态移动，并且无视地形',
        },
        {
            modifier_classname: 'modifier_imba_nyx_assassin_vendetta_break',
            name: '复仇',
            description: '被动技能被禁用。',
        },
        {
            modifier_classname: 'modifier_imba_nyx_assassin_vendetta_armor_reduction',
            name: '复仇',
            description: '受到的技能伤害增加{MODIFIER_PROPERTY_INCOMING_DAMAGE_PERCENTAGE}%。',
        },
    ],
};
