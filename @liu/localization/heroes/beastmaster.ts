import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: 'imba_beastmaster_mark_of_the_beast',
            ability_specials: [],
            notes: [],
        },
        {
            ability_classname: 'imba_beastmaster_wild_axes',
            ability_specials: [
                {
                    ability_special: 'range',
                    text: '施法距离：',
                },
                {
                    ability_special: 'axe_damage',
                    text: '每把飞斧伤害：',
                },
                {
                    ability_special: 'duration',
                    text: '负面效果持续时间：',
                },
                {
                    ability_special: 'damage_amp',
                    text: '%每把加深伤害：',
                },
            ],
            name: '野性之斧',
            description: '兽王投出他的斧头然后召回它们，切开飞过的敌人和树木。每把飞斧只对同一个敌人攻击一次，并且使受到来自兽王和其单位的伤害增加。',
            lore: '在独自学习野外生存时，兽王也掌握了飞斧的运用技巧，使他能够熟练地砍下树木，或者敌人的脑袋。',
            scepter_description: '野性之斧没有冷却时间，返回后就能再次使用。',
            notes: ['此技能将摧毁树木。'],
        },
        {
            ability_classname: 'imba_beastmaster_call_of_the_wild',
            ability_specials: [],
            notes: [],
        },
        {
            ability_classname: 'imba_beastmaster_call_of_the_wild_boar',
            ability_specials: [
                {
                    ability_special: 'duration',
                    text: '召唤物持续时间：',
                },
                {
                    ability_special: 'boar_base_max_health',
                    text: '豪猪基础生命值：',
                },
                {
                    ability_special: 'boar_total_damage_tooltip',
                    text: '豪猪攻击力：',
                },
                {
                    ability_special: 'boar_moveslow_tooltip',
                    text: '%豪猪减速：',
                },
                {
                    ability_special: 'boar_poison_duration_tooltip',
                    text: '豪猪毒素持续时间：',
                },
            ],
            name: '野性呼唤豪猪',
            description: '兽王召唤一头豪猪前来助阵。豪猪拥有被动的毒素攻击，可以减缓攻击和移动速度。',
            lore: '度过了与异兽互惠互助的孩童时期，兽王学会了如何随时召唤野兽。',
            notes: [],
        },
        {
            ability_classname: 'imba_beastmaster_hawk_dive',
            ability_specials: [],
            name: '俯冲炸弹',
            description: '飞向敌方目标，造成伤害并缠绕。',
            notes: [],
        },
        {
            ability_classname: 'imba_beastmaster_hawk_perch',
            ability_specials: [],
            notes: [],
        },
        {
            ability_classname: 'imba_beastmaster_call_of_the_wild_hawk',
            ability_specials: [
                {
                    ability_special: 'duration',
                    text: '召唤物持续时间：',
                },
                {
                    ability_special: 'hawk_base_max_health',
                    text: '战鹰基础生命值：',
                },
                {
                    ability_special: 'hawk_base_magic_resist',
                    text: '战鹰基础魔法抗性：',
                },
                {
                    ability_special: 'dive_damage',
                    text: '伤害：',
                },
                {
                    ability_special: 'dive_root_duration',
                    text: '缠绕持续时间：',
                },
            ],
            name: '野性呼唤战鹰',
            description:
                '兽王召唤一只战鹰环绕在他周围，战鹰以{hawk_base_attack_interval}秒的基础攻击间隔俯冲攻击敌人，造成并缠绕。战鹰提升攻击速度后会提升攻击频率。以英雄优先。',
            lore: '度过了与异兽互惠互助的孩童时期，兽王学会了如何随时召唤野兽。',
            shard_description: '召唤战鹰的冷却时间减少{bonus_AbilityCooldown}秒，并且额外召唤一只战鹰。',
            notes: [],
        },
        {
            ability_classname: 'imba_beastmaster_call_of_the_wild_hawk_attack',
            ability_specials: [],
            name: '战鹰攻击',
            description: '命令所有战鹰对选定目标发动俯冲炸弹',
            notes: [],
        },
        {
            ability_classname: 'imba_beastmaster_hawk_invisibility',
            ability_specials: [],
            name: '隐身',
            description: '战鹰只要一段时间内静止不动，就会进入隐身。',
            notes: [],
        },
        {
            ability_classname: 'imba_beastmaster_boar_poison',
            ability_specials: [
                {
                    ability_special: 'attack_speed',
                    text: '攻击速度降低：',
                },
                {
                    ability_special: 'movement_speed',
                    text: '%移动速度减缓：',
                },
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
            ],
            name: '毒素攻击',
            description: '降低移动和攻击速度的毒性攻击。',
            notes: [],
        },
        {
            ability_classname: 'imba_beastmaster_greater_boar_poison',
            ability_specials: [
                {
                    ability_special: 'attack_speed',
                    text: '攻击速度降低：',
                },
                {
                    ability_special: 'movement_speed',
                    text: '%移动速度减缓：',
                },
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
            ],
            name: '毒素攻击',
            description: '降低移动和攻击速度的毒性攻击。',
            notes: [],
        },
        {
            ability_classname: 'imba_beastmaster_inner_beast',
            ability_specials: [
                {
                    ability_special: 'radius',
                    text: '作用范围：',
                },
                {
                    ability_special: 'bonus_attack_speed',
                    text: '攻击速度提升：',
                },
                {
                    ability_special: 'attack_speed_per_unit',
                    text: '每个单位提供攻击速度加成：',
                },
                {
                    ability_special: 'berserk_duration',
                    text: '主动效果持续时间：',
                },
                {
                    ability_special: 'berserk_bonus_attack_speed',
                    text: '主动效果攻击速度加成：',
                },
                {
                    ability_special: 'AbilityCooldown',
                    text: '冷却时间：',
                },
                {
                    ability_special: 'AbilityManaCost',
                    text: '魔法消耗：',
                },
            ],
            name: '野性之心',
            description: '唤起兽王和他控制单位的内心狂怒，被动提高他们的攻击速度。',
            lore: '兽王激起野兽先天力量的能力，在他袭击斯洛姆国王时得到了展现。',
            notes: ['破坏会使被动攻击速度加成失效。'],
        },
        {
            ability_classname: 'imba_beastmaster_primal_roar',
            ability_specials: [
                {
                    ability_special: 'duration',
                    text: '眩晕时间：',
                },
                {
                    ability_special: 'damage',
                    text: '伤害：',
                },
                {
                    ability_special: 'damage_radius',
                    text: '咆哮宽度：',
                },
                {
                    ability_special: 'slow_movement_speed_pct',
                    text: '%移动速度减缓：',
                },
                {
                    ability_special: 'slow_attack_speed_pct',
                    text: '攻击速度降低：',
                },
                {
                    ability_special: 'slow_duration',
                    text: '减速持续时间：',
                },
            ],
            name: '原始咆哮',
            description:
                '兽王发出震耳欲聋的咆哮，使目标敌方单位受到伤害并眩晕，同时在兽王和他的猎物之间清出一条通道。通道上的所有单位都被震开，也受到伤害并被降低移动和攻击速度。另外，兽王和他的单位获得{movement_speed}%移动速度提升，持续3秒。',
            lore: '兽王学会将他的原始本能凝聚为猛兽般的怒吼，在敌阵之中引发巨大的破坏。',
            shard_description: '使所有英雄对原始咆哮目标的攻击造成1.3倍致命一击。',
            notes: [],
        },
        {
            ability_classname: 'imba_beastmaster_drums_of_slom',
            ability_specials: [
                {
                    ability_special: 'radius',
                    text: '伤害作用范围：',
                },
                {
                    ability_special: 'max_stacks',
                    text: '最短间隔所需攻击次数：',
                },
                {
                    ability_special: 'min_drum_hit_interval',
                    text: '最短敲鼓间隔：',
                },
                {
                    ability_special: 'max_drum_hit_interval',
                    text: '最长敲鼓间隔：',
                },
                {
                    ability_special: 'base_damage',
                    text: '敲鼓伤害：',
                },
                {
                    ability_special: 'heal_pct',
                    text: '%英雄伤害治疗量：',
                },
                {
                    ability_special: 'creep_heal_pct',
                    text: '%非英雄伤害治疗量：',
                },
            ],
            name: '斯洛姆战鼓',
            description:
                '兽王或周围他控制的单位攻击敌人都会使他敲下战鼓，对附近单位造成伤害，并且治疗自身和他控制的单位，数值为造成伤害的一定百分比。每次攻击都会降低敲鼓的间隔，{max_stacks}次攻击后降低至最短{min_drum_hit_interval}秒敲击一次。如果没有发动攻击，每隔1秒敲鼓间隔都会逐渐变长。<br><br>使用原始咆哮时根据原始咆哮的等级自动增加10/15/20层敲鼓叠加效果。',
            lore: '自然的愤怒是永恒的，而知晓这个秘密的人就能非常轻松地重新激发在斯洛姆衰亡之际雀跃的怒火。',
            notes: [],
        },
        {
            ability_classname: 'imba_beastmaster_rugged',
            ability_specials: [],
            name: '刚毅',
            description: '兽王对非英雄单位的近战英雄伤害格挡几率从{damage_block_pct_fifty_tooltip}%提升至{damage_block_pct_fifty_tooltip}%。',
            notes: [],
        },
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: 'special_bonus_unique_imba_beastmaster_2',
                    name: '+{s:bonus_boar_bonus_damage} 兽王及其单位的攻击力',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_beastmaster_3',
                    name: '{s:bonus_magic_resist}% 野性之心魔法抗性',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_beastmaster_4',
                    name: '+{s:bonus_bonus_attack_speed} 野性之心攻击速度',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_beastmaster_5',
                    name: '+{s:bonus_ms} 兽王及其单位的移速',
                    description: '移动速度光环为全地图生效，死亡后依然有效，作用于兽王和他控制下所有单位。',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_beastmaster_6',
                    name: '+{s:bonus_hp} 兽王及其单位的生命上限',
                    description: '生命上限光环为全地图生效，死亡后依然有效，作用于兽王和他控制下所有单位。',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_beastmaster_7',
                    name: '-{s:bonus_AbilityCooldown}秒 原始咆哮冷却',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_beastmaster_9',
                    name: '+{s:bonus_damage_amp}% 野性之斧每次伤害加深',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_beastmaster_wild_axe_cooldown',
                    name: '野性之斧无冷却',
                    description: '双斧必须返回至兽王后才能再次施放。',
                },
            ],
        },
    ],
    FacetArray_B: [
        {
            facet_classname: 'beastmaster_facets_imba_1',
            name: '狂猎 | 野兽模式',
            description: '兽王在附近有他的单位时攻击速度更高。 兽王可以提升自身的攻击速度和伤害加深。',
            related_abilities: [
                {
                    ability_classname: 'imba_beastmaster_inner_beast',
                    description: '攻击速度加成根据野性之心作用下的单位数量还会有所增加。',
                },
            ],
            related_talents: [],
        },
    ],
    ModifierArray: [
        {
            modifier_classname: 'modifier_imba_beastmaster_axe_stack_counter',
            name: '野性之斧伤害叠加',
            description: '兽王和他的单位造成的伤害增加。',
        },
        {
            modifier_classname: 'modifier_imba_beastmaster_inner_beast',
            name: '野性之心',
            description: '攻击速度提升{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}',
        },
        {
            modifier_classname: 'modifier_imba_beastmaster_inner_beast_berserk',
            name: '野兽模式',
            description: '攻击速度提升{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}，并且攻击施加野性之斧的叠加效果。',
        },
        {
            modifier_classname: 'modifier_imba_beastmaster_primal_roar_slow',
            name: '原始咆哮减速',
            description: '移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%，攻击速度降低{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}。',
        },
        {
            modifier_classname: 'modifier_imba_beastmaster_hawk_invisibility',
            name: '隐身',
            description: '战鹰对敌人为隐形状态。',
        },
        {
            modifier_classname: 'modifier_imba_beastmaster_boar_poison_effect',
            name: '豪猪之毒',
            description:
                '攻击速度降低{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_PERCENTAGE}%，攻击速度降低{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}。',
        },
        {
            modifier_classname: 'modifier_imba_beastmaster_primal_roar_speed',
            name: '原始咆哮',
            description: '移动速度提升{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。',
        },
        {
            modifier_classname: 'modifier_imba_beastmaster_call_of_the_wild_hawk',
            name: '战鹰',
            description: '隐形，并且无法控制。',
        },
        {
            modifier_classname: 'modifier_imba_beastmaster_drums_of_slom',
            name: '斯洛姆战鼓',
            description: '对附近敌人造成伤害并治疗兽王。',
        },
    ],
};
