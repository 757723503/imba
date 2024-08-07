import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: 'imba_axe_berserkers_call',
            ability_specials: [
                {
                    ability_special: 'radius',
                    text: '作用范围：',
                },
                {
                    ability_special: 'bonus_armor',
                    text: '护甲提升：',
                },
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'bonus_attack_speed',
                    text: '敌人攻击速度加成：',
                },
            ],
            name: '狂战士之吼',
            description: '斧王嘲讽附近的敌方单位，强迫他们攻击自己，同时获得额外护甲。',
            lore: '蒙哥可汗的狂吼嘲讽使敌人不得不与他作战。',
            shard_description: '狂战士之吼会对作用下单位施加战斗饥渴。',
            notes: [],
        },
        {
            ability_classname: 'imba_axe_battle_hunger',
            ability_specials: [
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'slow',
                    text: '%移动速度减缓：',
                },
                {
                    ability_special: 'damage_per_second',
                    text: '每秒伤害：',
                },
                {
                    ability_special: 'armor_multiplier',
                    text: '护甲倍数：',
                },
            ],
            name: '战斗饥渴',
            description:
                '激怒一个敌方单位，使他受到持续伤害，直到他杀死一个单位或者持续时间结束。伤害量会根据斧王的护甲而增加。敌人只要背朝斧王还将被减速。',
            lore: '通常英雄都无法抵挡蒙哥可汗的战斗狂怒，他们会一直受伤，直到蒙哥可汗的狂怒平息。',
            shard_description: '多个战斗饥渴效果可以叠加在单个目标身上。',
            notes: ['摧毁建筑也能移除该状态效果。'],
        },
        {
            ability_classname: 'imba_axe_counter_helix',
            ability_specials: [
                {
                    ability_special: 'damage',
                    text: '伤害：',
                },
                {
                    ability_special: 'radius',
                    text: '作用范围：',
                },
                {
                    ability_special: 'trigger_attacks',
                    text: '螺旋所需攻击次数：',
                },
                {
                    ability_special: 'debuff_duration',
                    text: '负面状态持续时间：',
                },
                {
                    ability_special: 'damage_reduction',
                    text: '%伤害减少：',
                },
                {
                    ability_special: 'max_stacks',
                    text: '最大叠加层数：',
                },
            ],
            name: '反击螺旋',
            description: '受到一定次数攻击后，斧王就会做出螺旋反击，对附近所有敌方单位造成纯粹伤害。',
            lore: '这支军队只要有斧王就不需要援军了。',
            scepter_description:
                '反击螺旋现在对击中的敌人施加一个可叠加的负面效果，使其对斧王造成的攻击伤害减少。反击螺旋不再具有冷却时间，并且斧王的攻击也会计入触发记数。',
            notes: ['反击螺旋会在斧王受到攻击时触发。', '拥有神杖后自身幻象的攻击不会计入触发计数。'],
        },
        {
            ability_classname: 'imba_axe_culling_blade',
            ability_specials: [
                {
                    ability_special: 'damage',
                    text: '伤害：',
                },
                {
                    ability_special: 'speed_bonus',
                    text: '%斩杀后移动速度加成：',
                },
                {
                    ability_special: 'armor_bonus',
                    text: '护甲加成：',
                },
                {
                    ability_special: 'speed_duration',
                    text: '斩杀加速持续时间：',
                },
                {
                    ability_special: 'speed_aoe',
                    text: '斩杀后加速范围：',
                },
                {
                    ability_special: 'armor_per_stack',
                    text: '每次击杀护甲加成：',
                },
            ],
            name: '淘汰之刃',
            description: '斧王洞察到弱点并出击，造成纯粹伤害。淘汰之刃击杀敌方英雄时将重置冷却时间，而附近所有友军单位获得移动速度和护甲加成。',
            lore: '蒙哥可汗是战斗与狂怒的化身，胆敢与斧王为敌者只有死路一条。',
            notes: ['淘汰之刃的斩杀效果无法被薄葬等技能阻止。'],
        },
        {
            ability_classname: 'imba_axe_one_man_army',
            ability_specials: [],
            name: '一人之军',
            description: '斧王在远离友军时获得基于自身护甲值的力量。',
            notes: [
                '斧王附近{radius}范围内没有友方英雄时他会获得力量加成，数值为{armor_pct_as_strength}%自身护甲值。接近友军后效果还会粘滞{bonus_linger_duration}秒。',
            ],
        },
        {
            ability_classname: 'imba_axe_coat_of_blood',
            ability_specials: [],
            name: '血色外衣',
            description: '每当斧王击杀敌方英雄，他就会永久获得{armor_per_kill}点护甲。使用淘汰之刃的击杀会给予{culling_blade_multiplier}倍数值。',
            notes: [],
        },
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: 'special_bonus_unique_imba_axe',
                    name: '{s:bonus_armor_multiplier} 战斗饥渴护甲系数',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_axe_2',
                    name: '+{s:bonus_radius} 狂战士之吼范围',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_axe_4',
                    name: '+{s:bonus_damage} 反击螺旋伤害',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_axe_5',
                    name: '+{s:bonus_damage} 淘汰之刃伤害',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_axe_6',
                    name: '+{s:bonus_slow}% 战斗饥渴减速',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_axe_7',
                    name: '+{s:bonus_bonus_armor} 狂战士之吼护甲',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_axe_8',
                    name: '每个生效的战斗饥渴+{s:bonus_speed_bonus}% 移速',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_axe_culling_blade_speed_duration',
                    name: '+{s:bonus_speed_duration}秒 淘汰之刃加速时间',
                },
            ],
        },
    ],
    FacetArray_B: [
        {
            facet_classname: 'axe_facets_imba_1',
            name: '吼声震天 | 一人之军',
            description: '狂战士之吼会在持续时间内使攻击的人获得额外攻击速度，斧王获得更高的护甲加成。斧王远离队友时获得基于自身护甲值的力量',
            related_abilities: [
                {
                    ability_classname: 'imba_axe_berserkers_call',
                    description: '狂战士之吼提供的护甲更高，而且增加了受作用单位的攻击速度。',
                },
                {
                    ability_classname: 'imba_axe_culling_blade',
                    description: '淘汰之刃的每次击杀都会提升斧王的护甲。',
                },
            ],
            related_talents: [],
        },
    ],
    ModifierArray: [
        {
            modifier_classname: 'modifier_imba_axe_culling_blade_permanent',
            name: '淘汰护甲',
            description: '斧王的淘汰之刃收获的{MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS}点护甲。',
        },
        {
            modifier_classname: 'modifier_imba_axe_berserkers_call',
            name: '狂战士之吼',
            description: '你被迫攻击斧王',
        },
        {
            modifier_classname: 'modifier_imba_axe_berserkers_call_armor',
            name: '护甲加成',
            description: '{MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS} 护甲加成',
        },
        {
            modifier_classname: 'modifier_imba_axe_battle_hunger',
            name: '战斗饥渴',
            description: '每秒造成{MODIFIER_PROPERTY_TOOLTIP}点伤害，移动速度被减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。',
        },
        {
            modifier_classname: 'modifier_imba_axe_battle_hunger_self',
            name: '战斗饥渴',
            description: '获得{MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS}点额外护甲。',
        },
        {
            modifier_classname: 'modifier_imba_axe_battle_hunger_self_movespeed',
            name: '战斗饥渴',
            description: '获得{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%移动速度加成。',
        },
        {
            modifier_classname: 'modifier_imba_axe_counter_helix',
            name: '反击螺旋',
            description: '发动反击需要的剩余攻击次数。',
        },
        {
            modifier_classname: 'modifier_imba_axe_culling_blade_boost',
            name: '淘汰之刃',
            description:
                '斧王发出战争咆哮，提升附近所有友军{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%移动速度和{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}攻击速度',
        },
        {
            modifier_classname: 'modifier_imba_axe_counter_helix_damage_reduction',
            name: '反击螺旋攻击力降低',
            description: '对斧王造成的伤害减少{MODIFIER_PROPERTY_TOOLTIP}%。',
        },
        {
            modifier_classname: 'modifier_imba_axe_one_man_army',
            name: '一人之军',
            description: '只要斧王落单，他就会获得当前护甲一定百分比的{MODIFIER_PROPERTY_STATS_STRENGTH_BONUS}点力量加成。',
        },
        {
            modifier_classname: 'modifier_imba_axe_coat_of_blood',
            name: '血色外衣',
            description: '斧王的斧头收获的{MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS}点护甲。',
        },
        {
            modifier_classname: 'modifier_imba_axe_culling_blade_permanent_postgame',
            name: '斧王击杀敌人后获得的护甲。',
        },
    ],
};
