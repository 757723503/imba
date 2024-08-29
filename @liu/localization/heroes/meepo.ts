import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: 'imba_meepo_petrify',
            ability_specials: [
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'hp_restore',
                    text: '%最大生命值恢复：',
                },
            ],
            name: '掘地',
            description:
                '挖掘进入地下，对自身施加驱散效果，无敌且不能作为目标，持续{duration}秒。持续时间内回复最大生命值的{hp_restore}%。被缠绕时无法施放。<br><br>驱散类型：弱驱散',
            notes: [],
        },
        {
            ability_classname: 'imba_meepo_earthbind',
            ability_specials: [
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'radius',
                    text: '作用范围：',
                },
            ],
            name: '地之束缚',
            description: '向目标地点扔出一张网，缠绕区域内所有敌方单位。',
            lore: '在裂影荒墟抓住晚饭可是件体力活。',
            notes: ['地之束缚可以使敌方单位在进入隐身后显形，但是不能作用于已经隐身的单位。', '对减益免疫单位和肉山无效。'],
        },
        {
            ability_classname: 'imba_meepo_poof',
            ability_specials: [
                {
                    ability_special: 'radius',
                    text: '作用范围：',
                },
                {
                    ability_special: 'poof_damage',
                    text: '伤害：',
                },
            ],
            name: '忽悠',
            description:
                '通过从大地中汲取神秘的能量，一个米波可以在持续施法{cast_duration}秒后传送至另一个米波或自身所在之处，在离开和到达的区域都对敌人造成伤害。<br><br>如果技能设为多样施法状态，所有米波也会对目标施放忽悠。对地施放后，除了选中的米波外所有米波会忽悠至最近的地点。',
            lore: '有时候打碎一块影墟水晶可以作为自己摆脱陷阱的方法。或是另外一个自己。',
            notes: ['可以点击小地图施放。', '可以传送至米波的幻象。'],
        },
        {
            ability_classname: 'imba_meepo_geostrike',
            ability_specials: [
                {
                    ability_special: 'gold_steal',
                    text: '金钱窃取：',
                },
                {
                    ability_special: 'hp_steal',
                    text: '生命窃取：',
                },
            ],
            name: '地之突袭',
            lore: '生存的最佳法则是背包不重，工具不多，但是用途多样。',
            notes: [],
        },
        {
            ability_classname: 'imba_meepo_ransack',
            ability_specials: [
                {
                    ability_special: 'health_steal_heroes',
                    text: '生命窃取（英雄）：',
                },
                {
                    ability_special: 'health_steal_creeps',
                    text: '生命窃取（非英雄）：',
                },
            ],
            name: '洗劫',
            description: '每次攻击都会窃取敌人的生命值，并治疗所有其他米波相同数值生命。',
            lore: '所以你要吗，还是……？',
            shard_description:
                '洗劫在击中敌人时拥有30%{几率施加地之突袭的负面效果，减缓20}%移动速度并造成每秒20点伤害，持续4秒。来自不同米波的效果可以叠加。',
            notes: [],
        },
        {
            ability_classname: 'imba_meepo_divided_we_stand',
            ability_specials: [
                {
                    ability_special: 'tooltip_clones',
                    text: '克隆数量：',
                },
                {
                    ability_special: 'tooltip_clones_multiplicity',
                    text: '克隆数量：',
                },
                {
                    ability_special: 'tooltip_magic_resist',
                    text: '%魔法抗性加成：',
                },
                {
                    ability_special: 'tooltip_magic_resist_multiplicity',
                    text: '%魔法抗性加成：',
                },
            ],
            name: '分则能成',
            description:
                '米波召唤一个不完美的半自主性自身复制体，可以像本体一样获得金钱和经验，并拥有本体的经验、属性和技能。但是，克隆只能使用本体装备的鞋类物品。任何一个克隆死亡都会导致所有米波全体死亡。分则能成向所有米波提供魔法抗性加成。',
            lore: '我是不是在哪见过你？',
            shard_description:
                '任意米波在{fling_radius}范围内还存在其他米波时都能施放分则能成。使附近的米波将自身扔向{AbilityCastRange}距离内的目标，造成伤害并减缓目标的移动速度。魔法消耗：{AbilityManaCost}',
            notes: ['克隆体不能使用奥术鞋和卫士胫甲。'],
        },
        {
            ability_classname: 'imba_meepo_megameepo',
            ability_specials: [
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
            ],
            name: '超大米波',
            description:
                '主米波将{radius}范围内其他米波放到自己的肩膀上。在这个形态下，他会获得其他米波{stats_pct}%的属性，并且可以把他们扔向敌人，造成伤害和减速。\\n\\n生效时地之束缚会产生额外的网，忽悠会根据身上的米波数量造成额外伤害。',
            notes: [],
        },
        {
            ability_classname: 'imba_meepo_megameepo_fling',
            ability_specials: [
                {
                    ability_special: 'fling_damage',
                    text: '伤害：',
                },
                {
                    ability_special: 'movement_slow',
                    text: '%移动速度减缓：',
                },
            ],
            name: '超大米波摔扔',
            description: '在超大米波形态下，米波将最上端的米波向{AbilityCastRange}范围内目标扔出，造成伤害和减速。',
            notes: ['不会触发法术反弹。'],
        },
        {
            ability_classname: 'imba_meepo_pack_rat',
            ability_specials: [],
            name: '囤积狂鼠',
            description: '所有米波都可以使用中立物品栏位中的物品。',
            notes: [
                '除了消耗品、迈达斯之手和圣剑以外，大多数物品都可以装备在中立物品栏。',
                '一个米波使用物品都会使其他米波身上的该物品进入冷却状态，时间为{cooldown_pct}%平常冷却时间。',
                '某些物品的被动技能和效果有所降低，或者没有实际效果',
            ],
        },
        {
            ability_classname: 'imba_meepo_sticky_fingers',
            ability_specials: [],
            name: '三只手',
            description: '额外拥有一个中立物品可供选择。',
            notes: [],
        },
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: 'special_bonus_unique_imba_meepo_2',
                    name: '+{s:bonus_poof_damage} 忽悠伤害',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_meepo_3',
                    name: '-{s:value}秒 地之束缚冷却',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_meepo_4',
                    name: '攻击地之束缚目标具有克敌机先',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_meepo_6',
                    name: '+{s:bonus_health_steal_heroes} 洗劫窃取生命',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_meepo_poof_cast_point',
                    name: '-{s:bonus_cast_duration}秒 忽悠施法',
                },
            ],
        },
    ],
    FacetArray_B: [
        {
            facet_classname: 'meepo_facets_imba_1',
            name: '更多米波',
            description: '更早获得额外米波，并且额外获得1只米波。',
            related_abilities: [
                {
                    ability_classname: 'imba_meepo_divided_we_stand',
                    description:
                        '现在可以在{required_level}时学习，之后每{bonus_levels_between_upgrades}级可以再升级一次，最高为{max_level}级。米波克隆体获得米波本体{main_meepo_stats_pct}%的额外属性。',
                },
            ],
            related_talents: [],
        },
    ],
    ModifierArray: [
        {
            modifier_classname: 'modifier_imba_meepo_earthbind',
            name: '地之束缚',
            description: '被困在米波的网中，不能移动或闪烁。',
        },
        {
            modifier_classname: 'modifier_imba_meepo_geostrike_debuff',
            name: '地之突袭',
            description: '被减速并受到持续伤害。',
        },
        {
            modifier_classname: 'modifier_imba_meepo_petrify',
            name: '掘地',
            description: '无敌且不会成为目标，生命恢复得到提升。',
        },
        {
            modifier_classname: 'modifier_imba_meepo_fling_slow',
            name: '分则能成',
            description: '被飞来的米波击中后移动速度被减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%%%。',
        },
        {
            modifier_classname: 'modifier_imba_meepo_megameepo_self',
            name: '超大米波',
            description: '所有属性提升，技能得到加强，并且可以扔出其他米波。',
        },
        {
            modifier_classname: 'modifier_imba_meepo_megameepo',
            name: '超大米波',
            description: '所有属性提升，技能得到加强，并且可以扔出其他米波。',
        },
    ],
};
