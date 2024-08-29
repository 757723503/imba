import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: 'imba_dazzle_rain_of_vermin',
            ability_specials: [],
            notes: [],
        },
        {
            ability_classname: 'imba_dazzle_poison_touch',
            ability_specials: [
                {
                    ability_special: 'targets',
                    text: '目标数：',
                },
                {
                    ability_special: 'damage',
                    text: '每秒伤害：',
                },
                {
                    ability_special: 'slow',
                    text: '%减速：',
                },
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'bonus_slow',
                    text: '%每次攻击增加减速：',
                },
                {
                    ability_special: 'split_damage',
                    text: '扩散伤害：',
                },
            ],
            name: '剧毒之触',
            description:
                '施放一股锥形的毒素，可以打击多个敌方单位。造成持续伤害和减速。每当目标受到戴泽的攻击，负面效果的持续时间都会刷新，减速效果也会提升。',
            lore: '少数进攻性的德尊仪式之一，麻痹魔法经常显示出它的有用之处。',
            shard_description: '剧毒之触会使受作用的目标被妖术作用，持续{hex_duration}秒。',
            notes: ['伤害格挡类技能不能减少该技能伤害。'],
        },
        {
            ability_classname: 'imba_dazzle_shallow_grave',
            ability_specials: [
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'heal_amplify',
                    text: '{每缺失10}生命增强治疗：',
                },
            ],
            name: '薄葬',
            description: '友军身受薄葬的福佑，在其保护下不论受到多大的伤害都不会阵亡。对该友军的治疗效果在持续时间内也会根据其生命值得到增强。',
            lore: '只有经验老道的暗影侍僧才能正确做出免死之仪式。',
            notes: ['在薄葬作用下生命值至少为1点，但是斧王的淘汰之刃还是可以斩杀目标英雄。'],
        },
        {
            ability_classname: 'imba_dazzle_shadow_wave',
            ability_specials: [
                {
                    ability_special: 'bounce_radius',
                    text: '能量弧跳跃范围：',
                },
                {
                    ability_special: 'damage_radius',
                    text: '伤害范围：',
                },
                {
                    ability_special: 'tooltip_max_targets_inc_dazzle',
                    text: '最大治疗目标数：',
                },
                {
                    ability_special: 'damage',
                    text: '伤害：',
                },
            ],
            name: '暗影波',
            description:
                '放出一道能量弧，可以瞬间跳跃至目标附近的队友，治疗的同时还将对附近的敌方单位造成伤害。施放暗影波时戴泽必定会享受到治疗效果。',
            lore: '虽然对暗影牧师来说，暗影波只是很简单也很日常的仪式，不过它确实是取胜的关键所在。',
            scepter_description:
                '暗影波现在也可对敌人施放，在友军和敌人之间都可以弹跳。弹跳至敌人时，他们会受到伤害，并且治疗附近友军，数值为{scepter_heal_pct}%平常治疗和伤害量。戴泽还会对暗影波弹跳到的每个敌人发动一次攻击。',
            notes: ['优先治疗友方英雄', '如果敌军附近有多个我方单位，那么他将受到多重暗影波的伤害。'],
        },
        {
            ability_classname: 'imba_dazzle_weave',
            ability_specials: [
                {
                    ability_special: 'radius',
                    text: '作用范围：',
                },
                {
                    ability_special: 'armor_per_second',
                    text: '每秒护甲变化：',
                },
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
            ],
            name: '编织',
            description: '在目标区域内的所有英雄身上施加一个效果，随着时间逐渐提升友方英雄的护甲，降低敌方英雄的护甲。',
            lore: '戴泽在虚无之境的以太之旅让他能将光与暗的力量融在一起，创造出有两种力量的魔力波动。',
            notes: ['为目标增加一个状态，因此在法术施放后进入施法区域不会受到影响。'],
        },
        {
            ability_classname: 'imba_dazzle_bad_juju',
            ability_specials: [
                {
                    ability_special: 'cooldown_reduction',
                    text: '技能冷却时间减少：',
                },
                {
                    ability_special: 'mana_cost_increase_pct',
                    text: '%每次施法增加生命消耗：',
                },
                {
                    ability_special: 'mana_cost_increase_duration',
                    text: '生命消耗增加持续时间：',
                },
            ],
            name: '邪能',
            description: '减少其他所有技能的剩余冷却时间。施放邪能会暂时增加生命消耗。',
            lore: '虚无之境的每一次咒术都使其能进一步渗透尘世的周遭。',
            scepter_description: '编织也会减少物品的冷却时间。',
            notes: [],
        },
        {
            ability_classname: 'imba_dazzle_good_juju',
            ability_specials: [
                {
                    ability_special: 'cooldown_reduction',
                    text: '每次施法减少冷却时间：',
                },
            ],
            name: '善咒',
            description: '戴泽每次施放技能后，其他所有冷却中的技能都会减少冷却时间。',
            lore: '虚无之境的每一次咒术都使其能进一步渗透尘世的周遭。',
            scepter_description: '善咒使所有物品的冷却时间减少{item_cooldown_reduction}%，并且具有主动效果，可以对一名友军施放，刷新其物品冷却时间。',
            notes: [],
        },
        {
            ability_classname: 'imba_dazzle_innate_weave',
            ability_specials: [
                {
                    ability_special: 'armor_change',
                    text: '每次叠加改变护甲：',
                },
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
            ],
            name: '编织',
            description: '戴泽的技能会对范围内友军和敌人同时施加编织，提升友军的护甲并减少敌人的护甲。本效果可以多次叠加。',
            notes: [],
        },
        {
            ability_classname: 'imba_dazzle_nothl_boon',
            ability_specials: [],
            name: '虚无之恩',
            description: '戴泽的超量治疗会转为一个护盾。',
            notes: [
                '每次戴泽对自身或友军产生超量治疗时，该英雄都会获得一个物理伤害护盾，数额等于超量治疗量，持续{duration}秒。如果超量治疗的目标已经拥有数额更大的护盾，那将改为刷新其持续时间。',
            ],
        },
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: 'special_bonus_unique_imba_dazzle_1',
                    name: '',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_dazzle_2',
                    name: '',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_dazzle_3',
                    name: '',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_dazzle_4',
                    name: '',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_dazzle_5',
                    name: '',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_dazzle_poison_touch_attack_range_bonus',
                    name: '+{s:bonus_attack_range_bonus} 剧毒之触攻击距离',
                    description: '攻击剧毒之触效果下敌人时+{s:bonus_attack_range_bonus} 攻击距离',
                },
            ],
        },
    ],
    FacetArray_B: [
        {
            facet_classname: 'dazzle_facets_imba_1',
            name: '剧毒之花 | 每当戴泽攻击剧毒之触作用下目标达到{s:bonus_attacks_to_split}次，目标就会受到额外的爆发伤害，并产生额外的剧毒之触弹道射向附近敌人。额外受作用的单位数量等于剧毒之触的技能目标数。',
            description: '戴泽攻击敌人时可以使剧毒之触刷新并扩散。',
            related_abilities: [
                {
                    ability_classname: 'imba_dazzle_poison_touch',
                    description: '每攻击{attacks_to_split}次，毒素都会造成额外伤害，并且扩散到{split_radius}范围内的额外敌方单位身上。',
                },
            ],
            related_talents: [],
        },
    ],
    ModifierArray: [
        {
            modifier_classname: 'modifier_imba_dazzle_nothl_boon_shield',
            name: '虚无之恩',
            description: '可以吸收{MODIFIER_PROPERTY_INCOMING_PHYSICAL_DAMAGE_CONSTANT}点物理伤害。',
        },
        {
            modifier_classname: 'modifier_imba_dazzle_poison_touch',
            name: '剧毒之触',
            description: '持续受到伤害，移动速度减缓{-dMODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。',
        },
        {
            modifier_classname: 'modifier_imba_dazzle_shallow_grave',
            name: '薄葬',
            description: '被巫毒保护！在这个状态下你是不死的！',
        },
        {
            modifier_classname: 'modifier_imba_dazzle_weave_armor',
            name: '编织护甲',
            description: '护甲变动{-fMODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS}点。',
        },
        {
            modifier_classname: 'modifier_imba_dazzle_innate_weave_armor',
            name: '编织',
            description: '护甲降低{MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS}点',
        },
        {
            modifier_classname: 'modifier_imba_dazzle_innate_weave_armor_counter',
            name: '编织',
            description: '护甲改变了{MODIFIER_PROPERTY_TOOLTIP}点。',
        },
        {
            modifier_classname: 'modifier_imba_dazzle_bad_juju_manacost',
            name: '邪能',
            description: '邪能的消耗已经增加',
        },
    ],
};
