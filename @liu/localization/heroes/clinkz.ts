import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: 'imba_clinkz_strafe',
            ability_specials: [
                {
                    ability_special: 'attack_speed_bonus',
                    text: '攻击速度加成：',
                },
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'attack_range_bonus',
                    text: '攻击距离加成：',
                },
            ],
            name: '扫射',
            description:
                '克林克兹获得攻击速度和攻击距离加成。克林克兹{strafe_skeleton_radius}范围内现有的骷髅弓手也会获得攻击距离加成和{archer_attack_speed_pct}%攻击速度加成。<br><br>施放扫射不会脱离骨隐步的隐身状态。',
            notes: [],
        },
        {
            ability_classname: 'imba_clinkz_burning_barrage',
            ability_specials: [
                {
                    ability_special: 'wave_count',
                    text: '发射箭矢数量：',
                },
                {
                    ability_special: 'range',
                    text: '距离：',
                },
                {
                    ability_special: 'damage_pct',
                    text: '%每支箭矢伤害：',
                },
            ],
            name: '炽烈火雨',
            description:
                '持续施法 - 克林克兹持续朝目标方向射出多支灼热的箭矢，击中所有敌人，造成克林克兹攻击伤害的一定百分比并施加攻击特效，同时敌人会受到焦油炸弹的减速效果。',
            lore: '其他人很难分辨骷髅弓箭手身边缭绕的劲风到底是来自他心中的火焰还是他出箭的速度。',
            notes: ['攻击距离加成会提升炽烈火雨的长度。'],
        },
        {
            ability_classname: 'imba_clinkz_searing_arrows',
            ability_specials: [
                {
                    ability_special: 'damage_bonus',
                    text: '额外伤害：',
                },
            ],
            name: '灼热之箭',
            description: '让克林克兹的箭矢带有火焰，造成更多伤害。',
            lore: '克林克兹用他的灼热精华点燃弓箭，造成毁灭性打击。',
            notes: ['灼热之箭能对建筑造成伤害。', '伤害直接作为物理伤害加到克林克兹的攻击伤害中。'],
        },
        {
            ability_classname: 'imba_clinkz_wind_walk',
            ability_specials: [
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'move_speed_bonus_pct',
                    text: '%移动速度提升：',
                },
                {
                    ability_special: 'skeleton_count',
                    text: '骷髅弓手数量：',
                },
            ],
            name: '骨隐步',
            description: '克林克兹进入隐身状态，移动可以穿过其他单位，攻击或使用物品时现形。脱离隐身后会产生骷髅弓手。',
            lore: '随着火焰的爆裂和烟雾的升起，骷髅弓箭手的身形遁于无形。',
            notes: ['渐隐时间为{fade_time}秒。'],
        },
        {
            ability_classname: 'imba_clinkz_burning_army',
            ability_specials: [
                {
                    ability_special: 'range',
                    text: '距离：',
                },
                {
                    ability_special: 'count',
                    text: '数量：',
                },
                {
                    ability_special: 'spawn_interval',
                    text: '产生间隔：',
                },
            ],
            name: '烈焰之军',
            description: '在目标地点召唤一列烈焰骷髅弓手。',
            lore: '在生与死的边缘存活下来后，克林克兹学会了如何短暂地在这两者之间架起桥梁。',
            notes: [],
        },
        {
            ability_classname: 'imba_clinkz_scepter',
            ability_specials: [],
            notes: [],
        },
        {
            ability_classname: 'imba_clinkz_death_pact',
            ability_specials: [
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'health_gain',
                    text: '额外生命值：',
                },
                {
                    ability_special: 'creep_level',
                    text: '非英雄单位最高等级：',
                },
            ],
            name: '死亡契约',
            description:
                '克林克兹以敌方非英雄单位或友方骷髅弓手为吞噬的目标，吞噬后在原地产生一个骷髅弓手，治疗并获得最大生命值。不会使克林克兹脱离骨隐步。<br><br>同一时间死亡契约召唤的骷髅弓手只有一个。',
            lore: '萨瑟雷克斯的死亡契约已经成了克林克兹的一部分，他通过杀死那些低等生物来使自己的枯骨获得新生。',
            notes: [
                '如果目标是敌方单位，克林克兹将获得经验和金钱。',
                '克林克兹的当前血量和生命值上限都将提高。',
                '持续时间结束后，血量上限回到正常值，但是当前生命值不变（不会高于血量上限）。',
            ],
        },
        {
            ability_classname: 'imba_clinkz_bone_and_arrow',
            ability_specials: [
                {
                    ability_special: 'skeleton_duration',
                    text: '骷髅弓手持续时间：',
                },
                {
                    ability_special: 'skeleton_health_tooltip',
                    text: '骷髅弓手摧毁所需攻击次数：',
                },
                {
                    ability_special: 'skeleton_building_damage_reduction',
                    text: '%对建筑伤害降低：',
                },
                {
                    ability_special: 'attack_rate',
                    text: '骷髅弓手攻击间隔：',
                },
                {
                    ability_special: 'damage_percent',
                    text: '%骷髅弓手攻击力：',
                },
            ],
            name: '骨头和箭头',
            description:
                '克林克兹死亡时会召唤一个骷髅弓手。骷髅弓手不能移动，需要多次英雄攻击才会被击杀。骷髅弓手继承克林克兹一定百分比的攻击力，对建筑造成的伤害较低。攻击距离与克林克兹相同。<br><br>克林克兹的其他部分技能也可以召唤骷髅弓手。',
            scepter_description: '提升骷髅弓手的生命值。',
            notes: [],
        },
        {
            ability_classname: 'imba_clinkz_tar_bomb',
            ability_specials: [
                {
                    ability_special: 'radius',
                    text: '作用范围：',
                },
                {
                    ability_special: 'damage_bonus',
                    text: '额外伤害：',
                },
                {
                    ability_special: 'ground_duration',
                    text: '区域持续时间：',
                },
                {
                    ability_special: 'slow_movement_speed',
                    text: '%移动速度减缓：',
                },
                {
                    ability_special: 'slow_duration',
                    text: '减速持续时间：',
                },
                {
                    ability_special: 'impact_damage',
                    text: '击中伤害：',
                },
            ],
            name: '焦油炸弹',
            description:
                '克林克兹对敌方目标扔出一个涂满焦油的弹道，击中时造成魔法伤害。击中后焦油会溅到地上，并留在地面上，持续{ground_duration}秒。经过的敌人都会被减速，并且受到来自克林克兹或他的骷髅弓手的攻击都会承受额外物理伤害。<br><br>焦油炸弹击中时，攻击距离内的骷髅弓手都会攻击该目标。',
            notes: [],
        },
        {
            ability_classname: 'imba_clinkz_empty1',
            ability_specials: [],
            name: '野怪技能',
            description: '本技能栏在使用死亡契约获得技能后可以使用。',
            notes: [],
        },
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: 'special_bonus_unique_imba_clinkz_1',
                    name: '+{s:bonus_damage_bonus} 焦油炸弹额外攻击伤害',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_clinkz_3',
                    name: '焦油炸弹齐射',
                    description: '攻击被焦油覆盖的敌人会向克林克兹攻击距离内一个随机敌人再射出一箭。',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_clinkz_4',
                    name: '-{s:bonus_AbilityCooldown}秒 扫射冷却',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_clinkz_7',
                    name: '+{s:bonus_attack_speed_bonus} 扫射攻击速度',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_clinkz_8',
                    name: '+{s:bonus_health_gain} 死亡契约额外生命',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_clinkz_9',
                    name: '+{s:bonus_AbilityCharges} 死亡契约能量点数',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_clinkz_10',
                    name: '-{s:bonus_AbilityCooldown}秒 骨隐步冷却',
                },
            ],
        },
    ],
    FacetArray_B: [
        {
            facet_classname: 'clinkz_facets_imba_1',
            name: '火力压制 | 吞灭之步',
            description: '扫射攻击会使敌人更容易攻击落空。 死亡契约会把克林克兹传送至目标。降低死亡契约的充能时间。',
            related_abilities: [
                {
                    ability_classname: 'imba_clinkz_strafe',
                    description:
                        '克林克兹和每个骷髅弓手都会施加一个可叠加的负面效果，每个攻击的骷髅弓手会施加一层叠加效果，每层会使目标的{bonus_blind_pct}%攻击落空。也会对建筑施加。',
                },
                {
                    ability_classname: 'imba_clinkz_death_pact',
                    description: '死亡契约会把克林克兹传送至目标。降低死亡契约的充能时间。',
                },
            ],
            related_talents: [],
        },
    ],
    ModifierArray: [
        {
            modifier_classname: 'modifier_imba_clinkz_strafe_debuff',
            name: '被克林克兹压制',
            description: '{MODIFIER_PROPERTY_MISS_PERCENTAGE}%的攻击落空。',
        },
        {
            modifier_classname: 'modifier_imba_clinkz_strafe',
            name: '扫射',
            description: '攻击速度提升{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}。',
        },
        {
            modifier_classname: 'modifier_imba_clinkz_wind_walk',
            name: '骨隐步',
            description: '隐身，移动速度提升{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。能够穿越单位。',
        },
        {
            modifier_classname: 'modifier_imba_clinkz_death_pact',
            name: '死亡契约',
            description: '最大生命提升{MODIFIER_PROPERTY_EXTRA_HEALTH_BONUS}点。',
        },
        {
            modifier_classname: 'modifier_imba_clinkz_death_pact_enemy',
            name: '灵魂盛宴',
            description: '灵魂盛宴。',
        },
        {
            modifier_classname: 'modifier_imba_clinkz_death_pact_permanent_buff',
            name: '死亡契约攻击力',
            description: '死亡契约期间击杀英雄获得的永久攻击力。',
        },
        {
            modifier_classname: 'modifier_imba_clinkz_burning_barrage',
            name: '炽烈火雨',
        },
        {
            modifier_classname: 'modifier_imba_clinkz_tar_bomb_slow',
            name: '焦油炸弹',
            description: '移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。',
        },
    ],
};
