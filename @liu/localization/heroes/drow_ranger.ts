import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: 'imba_drow_ranger_frost_arrows',
            ability_specials: [
                {
                    ability_special: 'frost_arrows_movement_speed',
                    text: '%移速减缓：',
                },
                {
                    ability_special: 'damage',
                    text: '额外伤害：',
                },
                {
                    ability_special: 'shard_regen_reduction_pct_per_stack',
                    text: '%每次叠加降低生命恢复：',
                },
                {
                    ability_special: 'shard_bonus_damage_per_stack',
                    text: '每层叠加额外伤害：',
                },
                {
                    ability_special: 'shard_stack_duration',
                    text: '叠加持续时间：',
                },
                {
                    ability_special: 'shard_burst_radius',
                    text: '爆炸作用范围：',
                },
                {
                    ability_special: 'shard_burst_damage_per_stack',
                    text: '每层叠加爆炸伤害：',
                },
                {
                    ability_special: 'shard_burst_move_slow_pct',
                    text: '%爆炸减速：',
                },
                {
                    ability_special: 'shard_burst_slow_duration',
                    text: '爆炸减速时间：',
                },
                {
                    ability_special: 'shard_max_stacks',
                    text: '最大叠加次数：',
                },
            ],
            name: '霜冻之箭',
            description: '卓尔游侠在箭矢中附上冰冻效果，减缓敌人的移动速度并造成额外伤害。持续{abilityduration}秒。',
            lore: '覆盖着寒冰的箭矢破空而出，将敌人彻底冻结。',
            scepter_description:
                '霜冻之箭现在对敌人施加低温的叠加效果，提升霜冻之箭的伤害，并且每层叠加效果都会降低生命恢复。若敌人在低温效果下阵亡，他们将会爆炸，对范围内的敌人造成伤害和减速。',
            notes: ['减速的持续时间在下一支冰箭射中后刷新。'],
        },
        {
            ability_classname: 'imba_drow_ranger_multishot',
            ability_specials: [
                {
                    ability_special: 'wave_count',
                    text: '波数：',
                },
                {
                    ability_special: 'arrow_count_per_wave',
                    text: '每波箭矢数：',
                },
                {
                    ability_special: 'arrow_damage_pct',
                    text: '%箭矢基础伤害加成：',
                },
                {
                    ability_special: 'arrow_range_multiplier',
                    text: '箭矢距离倍数：',
                },
                {
                    ability_special: 'multishot_movespeed',
                    text: '%移动速度惩罚：',
                },
            ],
            name: '数箭齐发',
            description: '持续施法 - 卓尔游侠在最多{abilitychanneltime}秒内不断地射出阵阵箭矢，对击中的敌人造成额外伤害，并施加霜冻之箭效果。',
            lore: '在游侠的童年，学习同时射出多支箭矢被视为不够专心的轻浮行为。而在遗迹的大战中，这样的技巧奇特地成为了必要。',
            notes: ['箭矢的基础伤害无视减益免疫。', '霜冻之箭的额外伤害和减速效果不无视减益免疫。'],
        },
        {
            ability_classname: 'imba_drow_ranger_silence',
            ability_specials: [
                {
                    ability_special: 'silence_radius',
                    text: '作用范围：',
                },
            ],
            name: '沉默魔法',
            description: '沉默目标区域内的所有敌方单位。',
            lore: '崔希丝对物理搏斗时的宁静尤为钟爱，于是用卓尔人的天赋来中止对方法师的吟唱。',
            notes: ['无法阻止敌人使用物品。'],
        },
        {
            ability_classname: 'imba_drow_ranger_wave_of_silence',
            ability_specials: [
                {
                    ability_special: 'wave_width',
                    text: '作用宽度：',
                },
                {
                    ability_special: 'silence_duration',
                    text: '沉默持续时间：',
                },
                {
                    ability_special: 'knockback_distance_max',
                    text: '最大击退距离：',
                },
                {
                    ability_special: 'knockback_duration',
                    text: '击退持续时间：',
                },
            ],
            name: '狂风',
            description: '释放一阵狂风，沉默敌方单位并将其击退，同时使隐身敌人显形。击退距离与敌人和卓尔游侠的距离成反比。',
            lore: '崔希丝特别中意肉搏中蕴含的静谧，因此她运用卓尔人的天赋终结敌人的魔法。',
            notes: [],
        },
        {
            ability_classname: 'imba_drow_ranger_trueshot',
            ability_specials: [
                {
                    ability_special: 'trueshot_agi_bonus_self',
                    text: '%每级自身敏捷加成：',
                },
                {
                    ability_special: 'trueshot_agi_bonus_allies',
                    text: '%每级友军敏捷加成：',
                },
                {
                    ability_special: 'radius',
                    text: '作用范围：',
                },
            ],
            name: '精准光环',
            description: '卓尔游侠和附近远程英雄根据卓尔游侠的当前敏捷和英雄等级获得敏捷加成。',
            lore: '崔希丝在卓尔族森林中独处的时光让她有时间教导其他弓箭手如何提高弓技。',
            notes: [],
        },
        {
            ability_classname: 'imba_drow_ranger_marksmanship',
            ability_specials: [
                {
                    ability_special: 'chance',
                    text: '%概率：',
                },
                {
                    ability_special: 'bonus_damage',
                    text: '额外触发伤害：',
                },
            ],
            name: '射手天赋',
            description:
                '卓尔游侠的战斗经验使她有概率发出极其精准高效的箭矢。箭矢将穿透敌人的防御，无视他们的基础护甲。如果{disable_range}范围内有敌方英雄，本技能没有效果。',
            lore: '卓尔游侠是弓箭手登峰造极的典型。',
            notes: ['射手天赋的触发效果拥有克敌机先。'],
        },
        {
            ability_classname: 'imba_drow_ranger_glacier',
            ability_specials: [
                {
                    ability_special: 'shard_duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'attack_range_bonus',
                    text: '攻击距离加成：',
                },
                {
                    ability_special: 'multishot_arrow_bonus',
                    text: '每波额外箭矢数：',
                },
            ],
            name: '冰川',
            description:
                '卓尔游侠在她脚下创造一片冰山。站在山上的攻击者会获得攻击距离加成和高坡优势——攻击不会丢失并且获得飞行视野。卓尔游侠站在山上时数箭齐发每波获得额外箭矢。山的前面会阻挡视野，并且除了卓尔游侠外无法穿行。施放时不会打断数箭齐发。',
            notes: [],
        },
        {
            ability_classname: 'imba_drow_ranger_creep_rally',
            ability_specials: [],
            name: '士兵集结',
            description: '精准光环还会为附近远程非英雄单位提供每级3%攻击速度。',
            notes: [],
        },
        {
            ability_classname: 'imba_drow_ranger_vantage_point',
            ability_specials: [],
            name: '制高点',
            description: '卓尔游侠从高坡攻击时造成的伤害增加{damage_bonus}%。',
            notes: [],
        },
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: 'special_bonus_unique_imba_drow_ranger_1',
                    name: '+{s:bonus_arrow_damage_pct}% 数箭齐发伤害',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_drow_ranger_2',
                    name: '+{s:bonus_damage} 霜冻之箭伤害',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_drow_ranger_3',
                    name: '+{s:bonus_chance}% 射手天赋几率',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_drow_ranger_6',
                    name: '-{s:bonus_AbilityCooldown}秒 数箭齐发冷却',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_drow_ranger_7',
                    name: '-{s:bonus_AbilityCooldown}秒 狂风冷却',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_drow_ranger_8',
                    name: '+{s:bonus_wave_count} 数箭齐发波数',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_drow_ranger_gust_selfmovespeed',
                    name: '{s:bonus_bonus_movespeed}% 狂风自身移速加成',
                },
            ],
        },
    ],
    FacetArray_B: [
        {
            facet_classname: 'drow_ranger_facets_imba_1',
            name: '侧身回避',
            description: '卓尔游侠在施放数箭齐发时可以缓慢移动和使用物品。',
            related_abilities: [
                {
                    ability_classname: 'imba_drow_ranger_multishot',
                    description: '卓尔游侠在施放数箭齐发时可以缓慢移动和使用物品。',
                },
            ],
            related_talents: [],
        },
    ],
    ModifierArray: [
        {
            modifier_classname: 'modifier_imba_drow_ranger_wave_of_silence_buff',
            name: '狂风',
            description: '获得{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%移动速度加成。',
        },
        {
            modifier_classname: 'modifier_imba_drow_ranger_frost_arrows_slow',
            name: '霜冻之箭减速',
            description: '移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%',
        },
        {
            modifier_classname: 'modifier_imba_drow_ranger_frost_arrows_hypothermia',
            name: '低温',
            description: '治疗、吸血、技能吸血和生命恢复降低{MODIFIER_PROPERTY_HP_REGEN_AMPLIFY_PERCENTAGE}%。',
        },
        {
            modifier_classname: 'modifier_imba_drow_ranger_frost_arrows_shard_slow',
            name: '低温',
            description: '移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%',
        },
        {
            modifier_classname: 'modifier_imba_drow_ranger_trueshot_aura',
            name: '精准光环',
            description: '攻击速度提升{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}',
        },
        {
            modifier_classname: 'modifier_imba_drow_ranger_multishot',
            name: '数箭齐发',
            description: '持续拉弓中',
        },
        {
            modifier_classname: 'modifier_imba_drow_ranger_marksmanship_aura_bonus',
            name: '精准光环',
            description: '获得{MODIFIER_PROPERTY_STATS_AGILITY_BONUS}点额外敏捷。',
        },
    ],
};
