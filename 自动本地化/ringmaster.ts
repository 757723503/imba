import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: 'imba_ringmaster_spotlight',
            ability_specials: [
                {
                    ability_special: 'radius',
                    text: '作用范围：',
                },
                {
                    ability_special: 'illusion_percent_damage',
                    text: '%幻象损失最大生命值：',
                },
                {
                    ability_special: 'miss_chance',
                    text: '%攻击落空几率：',
                },
            ],
            name: '聚光灯',
            description:
                '百戏大王用聚光灯照亮一片区域。灯光下的敌人有几率丢失攻击，隐身状态下也会显形。被光束击中的幻象会逐渐消散，每秒失去一定百分比的最大生命值。这些效果在灯束离开后会粘滞{linger_duration}秒。',
            lore: '上台的十五秒你准备好了吗？聚光灯下不必在意自己的名声。',
            notes: [],
        },
        {
            ability_classname: 'imba_ringmaster_tame_the_beasts',
            ability_specials: [
                {
                    ability_special: 'start_width',
                    text: '初始作用范围：',
                },
                {
                    ability_special: 'end_width',
                    text: '最终作用范围：',
                },
                {
                    ability_special: 'damage_min',
                    text: '最低伤害：',
                },
                {
                    ability_special: 'damage_max',
                    text: '最高伤害：',
                },
                {
                    ability_special: 'fear_duration_min',
                    text: '最短恐惧时间：',
                },
                {
                    ability_special: 'fear_duration_max',
                    text: '最长恐惧时间：',
                },
            ],
            name: '驯兽术',
            description:
                '持续施法 - 百戏大王卷起他的鞭子，最多持续{abilitychanneltime}秒，然后猛甩出去。被鞭打的敌人会受到伤害，并且被恐惧，逃离百戏大王。持续施法时间会使伤害和恐惧时间成倍增加，但是作用范围减少。',
            lore: '从难以取悦的观众到难以驾驭的表演，对于一群动物，百戏大王手中的长鞭最具有说服力。',
            notes: [],
        },
        {
            ability_classname: 'imba_ringmaster_tame_the_beasts_crack',
            ability_specials: [],
            name: '鞭打',
            description: '*啪*',
            notes: [],
        },
        {
            ability_classname: 'imba_ringmaster_the_box',
            ability_specials: [
                {
                    ability_special: 'invis_duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'move_speed',
                    text: '%移动速度加成：',
                },
                {
                    ability_special: 'magic_resist',
                    text: '%魔法抗性加成：',
                },
                {
                    ability_special: 'slow_resist',
                    text: '%减速抗性：',
                },
            ],
            name: '逃生技',
            description:
                '把一名友方英雄装进可动的异维度箱子。友军被装入后拥有相位移动状态，获得额外魔法抗性、减速抗性和移动速度。并且无法成为目标，被锁闭、沉默和缴械。效果结束后或者移动到{leash_radius}距离之外友军都会跳出箱子。',
            lore: '熟练的助手在道具箱内不必心惊胆战。而业余的助手……前景就黯淡多了。',
            notes: [],
        },
        {
            ability_classname: 'imba_ringmaster_wheel',
            ability_specials: [
                {
                    ability_special: 'min_range',
                    text: '最短距离：',
                },
                {
                    ability_special: 'mesmerize_radius',
                    text: '作用范围：',
                },
                {
                    ability_special: 'wheel_stun',
                    text: '倒计时持续时间：',
                },
                {
                    ability_special: 'aura_damage',
                    text: '光环每秒伤害：',
                },
                {
                    ability_special: 'explosion_damage',
                    text: '爆炸伤害：',
                },
            ],
            name: '奇观轮',
            description:
                '百戏大王推出奇观轮向目标地点滚去，击退沿途的敌人。到达目的地后，范围内的敌人会持续受到伤害，并且被减速{aura_slow}%。<br><br>敌方英雄面对转轮超过{face_duration}秒会被迷住，朝其走去。首个敌人着迷后会触发转轮爆炸的倒计时。如果没有触发倒计时，在{trap_duration}秒后转轮会自动爆炸。',
            lore: '不，勇敢的朋友们，幻术是骗子和赌徒的把戏。今天你见证的是魔法的真正力量。但前提是要敢于凝视……迷人的转轮。',
            notes: [],
        },
        {
            ability_classname: 'imba_ringmaster_impalement',
            ability_specials: [
                {
                    ability_special: 'damage_impact',
                    text: '击中伤害：',
                },
                {
                    ability_special: 'bleed_health_pct',
                    text: '%每秒最大生命值伤害（英雄）：',
                },
                {
                    ability_special: 'bleed_creep_dps',
                    text: '每秒伤害（非英雄）：',
                },
                {
                    ability_special: 'bleed_duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'slow_percent',
                    text: '%移动速度减缓：',
                },
                {
                    ability_special: 'slow_duration',
                    text: '减速持续时间：',
                },
            ],
            name: '尖刀戏',
            description:
                '百戏大王向自己精心选择的地点扔出一把匕首。匕首击中敌人会造成即时伤害，短暂减速击中的单位，并且使他们流血。流血的英雄受到基于目标最大生命值一定百分比的每秒伤害，流血的非英雄单位受到每秒固定伤害。',
            lore: '代代相传的表演，少了伟大的科里奥斯特罗的招牌戏法，那就不能称之为卡特尔马戏团。',
            notes: [],
        },
        {
            ability_classname: 'imba_ringmaster_empty_souvenir',
            ability_specials: [],
            name: '纪念品栏位',
            description: '击杀和助攻会收集纪念品。',
            notes: [],
        },
        {
            ability_classname: 'imba_ringmaster_dark_carnival_souvenirs',
            ability_specials: [],
            name: '暗黑狂欢主持',
            description:
                '只要百戏大王附近{souvenir_collection_range}范围内有敌方英雄阵亡，他就会随机获得一件可用一次的暗黑狂欢纪念品。额外的纪念品会以能量的形式存下。<br><br>如果百戏大王没有纪念品，复活时会获得一件。<br><br>暗黑狂欢纪念品包括哈哈镜、强力水和整蛊垫。',
            notes: [],
        },
        {
            ability_classname: 'imba_ringmaster_funhouse_mirror',
            ability_specials: [],
            name: '哈哈镜',
            description:
                '<h1>使用：比例失真</h1>制造英雄的{images_count}个不完美幻象，持续{illusion_duration}秒。幻象继承{tooltip_damage_outgoing_ranged}%攻击力，承受{tooltip_damage_outgoing_ranged}%伤害。',
            notes: ['有{invuln_duration}秒的施法时间，其间处于无敌状态。'],
        },
        {
            ability_classname: 'imba_ringmaster_whoopee_cushion',
            ability_specials: [],
            name: '整蛊垫',
            description:
                '<h1>使用：噗</h1>把英雄向前推动{leap_distance}距离。在身后留下一团{fart_cloud_radius}范围的臭云，持续{fart_cloud_duration}秒，使敌人减速{fart_cloud_slow}%。',
            notes: [],
        },
        {
            ability_classname: 'imba_ringmaster_strongman_tonic',
            ability_specials: [],
            name: '强力水',
            description:
                '<h1>使用：强力吸收</h1>暂时提升友方英雄的力量，数值为{strength_bonus_base} + {strength_bonus_per_level} * 百戏大王等级，持续{duration}秒。效果会维持{effect_strength_max_duration}秒然后在持续时间内不断减弱。',
            notes: [],
        },
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: 'special_bonus_unique_imba_ringmaster_whip_radius',
                    name: '+{s:bonus_start_width} 驯兽术作用范围',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_ringmaster_box_cast_range',
                    name: '+{s:bonus_AbilityCastRange} 逃生技施法距离',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_ringmaster_the_box_strong_dispel_and_flying',
                    name: '逃生技提供强驱散和飞行状态',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_ringmaster_whip_damage',
                    name: '+{s:bonus_damage_min}/+{s:bonus_damage_max} 驯兽术最低/最高伤害',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_ringmaster_wheel_radius',
                    name: '+{s:bonus_mesmerize_radius} 奇观轮范围和距离',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_ringmaster_whip_debuff_immunity',
                    name: '驯兽术持续施法时减益免疫',
                    description: '另外提供50%魔法抗性。',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_ringmaster_dagger_penetrates',
                    name: '尖刀戏会穿过一个目标',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_ringmaster_dagger_bleed_and_slow_duration',
                    name: '+{s:bonus_bleed_duration}秒 尖刀戏流血和减速时间',
                },
            ],
        },
    ],
    FacetArray_B: [
        {
            facet_classname: 'ringmaster_facets_imba_1',
            name: '舞台中央',
            description: '百戏大王在聚光灯下还是不够老练。这个命石没有实际效果…目前如此。',
            related_abilities: [],
            related_talents: [],
        },
    ],
    ModifierArray: [
        {
            modifier_classname: 'modifier_imba_ringmaster_tame_the_beasts_fear',
            name: '驯兽术',
            description: '恐惧状态下飞奔',
        },
        {
            modifier_classname: 'modifier_imba_ringmaster_the_box_buff',
            name: '逃生技',
            description:
                '减速抗性提升{MODIFIER_PROPERTY_SLOW_RESISTANCE_STACKING}{。移动速度提升 {MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。魔法抗性提升}dMODIFIER_PROPERTY_MAGICAL_RESISTANCE_BONUS%。',
        },
        {
            modifier_classname: 'modifier_imba_ringmaster_spotlight_debuff',
            name: '聚光灯',
            description: '攻击有{MODIFIER_PROPERTY_MISS_PERCENTAGE}%几率丢失。',
        },
        {
            modifier_classname: 'modifier_imba_ringmaster_wheel_mesmerize_facing',
            name: '奇观轮',
            description: '看着转轮的时候着迷了。',
        },
        {
            modifier_classname: 'modifier_imba_ringmaster_wheel_mesmerize_pull',
            name: '奇观轮',
            description: '被转轮迷住了。',
        },
        {
            modifier_classname: 'modifier_imba_ringmaster_wheel_debuff',
            name: '奇观轮',
            description: '移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%，并且持续受到伤害。',
        },
        {
            modifier_classname: 'modifier_imba_ringmaster_impalement_bleed',
            name: '尖刀戏',
            description: '受到持续伤害，移动速度被减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。',
        },
        {
            modifier_classname: 'modifier_imba_ringmaster_strongman_tonic_buff',
            name: '强力水',
            description: '暂时获得{MODIFIER_PROPERTY_STATS_STRENGTH_BONUS}点力量。',
        },
        {
            modifier_classname: 'modifier_imba_ringmaster_whoopee_cushion_debuff',
            name: '整蛊垫',
            description: '移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。',
        },
    ],
};
