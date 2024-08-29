import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: 'imba_arc_warden_scepter',
            ability_specials: [],
            notes: [],
        },
        {
            ability_classname: 'imba_arc_warden_flux',
            ability_specials: [
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'search_radius',
                    text: '友军搜寻范围：',
                },
                {
                    ability_special: 'damage_per_second',
                    text: '每秒伤害：',
                },
                {
                    ability_special: 'move_speed_slow_pct',
                    text: '%移动速度减缓：',
                },
                {
                    ability_special: 'tempest_damage_per_second',
                    text: '每秒伤害：',
                },
                {
                    ability_special: 'tempest_move_speed_slow_pct',
                    text: '%移动速度减缓：',
                },
            ],
            name: '乱流',
            description: '将不稳定的涡流能量灌注到落单敌人体内，造成持续伤害并减缓其移动速度。如目标周围有其他敌方单位 ，则不会造成伤害。',
            lore: '囚禁遗迹之力的无穷小碎片。',
            notes: [],
        },
        {
            ability_classname: 'imba_arc_warden_magnetic_field',
            ability_specials: [
                {
                    ability_special: 'radius',
                    text: '作用范围：',
                },
                {
                    ability_special: 'projectile_slow',
                    text: '%攻击弹道速度：',
                },
                {
                    ability_special: 'shard_slow_pct',
                    text: '%移动速度减缓：',
                },
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'attack_speed_bonus',
                    text: '攻击速度加成：',
                },
                {
                    ability_special: 'evasion_chance',
                    text: '%闪避加成：',
                },
                {
                    ability_special: 'tempest_duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'attack_range_bonus',
                    text: '攻击距离加成：',
                },
                {
                    ability_special: 'attack_damage_bonus',
                    text: '攻击力加成：',
                },
            ],
            name: '磁场',
            description: '天穹守望者在周围制造一个充满磁能的圆形扭曲力场。',
            lore: '时间与空间对于古老如泽特之人实在是无足轻重。',
            shard_description:
                '磁场会对身处其中的敌人造成减速，敌方的攻击弹道也会被减速。另外磁场内的友军获得攻击弹道速度加成。作用范围提升{bonus_radius}。',
            notes: [],
        },
        {
            ability_classname: 'imba_arc_warden_spark_wraith',
            ability_specials: [
                {
                    ability_special: 'radius',
                    text: '搜寻范围：',
                },
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'move_speed_slow_pct',
                    text: '%移动速度减缓：',
                },
                {
                    ability_special: 'base_activation_delay',
                    text: '启动延迟：',
                },
                {
                    ability_special: 'spark_damage_base',
                    text: '伤害：',
                },
                {
                    ability_special: 'wraith_speed_base',
                    text: '幽魂速度：',
                },
                {
                    ability_special: 'ministun_duration',
                    text: '减速持续时间：',
                },
                {
                    ability_special: 'tempest_activation_delay',
                    text: '启动延迟：',
                },
                {
                    ability_special: 'spark_damage_tempest',
                    text: '伤害：',
                },
                {
                    ability_special: 'wraith_speed_tempest',
                    text: '幽魂速度：',
                },
                {
                    ability_special: 'ministun_duration_tempest',
                    text: '减速持续时间：',
                },
            ],
            name: '闪光幽魂',
            description:
                '召唤一个缓慢实体化的闪光怨灵萦绕在目标区域，直到有敌人进入范围。一旦有敌方单位进入范围，怨灵将贴近敌人自我熔化，造成魔法伤害并使目标减速。非英雄单位受到的伤害增加{creep_damage_bonus_pct}%。',
            lore: '泽特原始自我的低级碎片。',
            scepter_description:
                '闪光幽魂会在击中一个敌人后再产生一个闪光幽魂，新的幽魂具有{scepter_activation_delay}秒启动延迟。新的闪光幽魂持续{scepter_duration}秒，作用范围为{scepter_radius}。',
            notes: ['闪光幽魂无法被躲避。'],
        },
        {
            ability_classname: 'imba_arc_warden_tempest_double',
            ability_specials: [
                {
                    ability_special: 'bounty',
                    text: '被击杀后提供金钱：',
                },
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'penalty_distance',
                    text: '惩罚距离：',
                },
                {
                    ability_special: 'incoming_damage_penalty',
                    text: '%承受伤害惩罚：',
                },
            ],
            name: '风暴双雄',
            description:
                '天穹守望者将破碎的自我汇聚到一起，创造出自身的完美电子复制体。复制体可以使用天穹守望者的当前所有物品和特殊的风暴双雄版本技能，但是大部分消耗品以及死亡时会掉落的物品除外。复制体的物品和技能冷却时间会独立计算。<br><br>复制体被击杀后敌人将获得经验和金钱奖励，而且技能重新开始冷却。<br><br>复制体离天穹守望者过远会失去自我意识，承受更多伤害。',
            lore: '被同类的力量扭曲后，天穹守望者变成了自己最为不齿的：大分裂。',
            notes: ['复制体无法使用风暴双雄或刷新球。'],
        },
        {
            ability_classname: 'imba_arc_warden_tempest_recall',
            ability_specials: [],
            name: '风暴召回',
            description: '天穹守望者施放后取代风暴双雄的位置，并将其摧毁，使天穹守望者恢复{restore_pct}剩余生命和魔法',
            notes: [],
        },
        {
            ability_classname: 'imba_arc_warden_runic_infusion',
            ability_specials: [],
            name: '神符灌注',
            description: '激活任意神符时会获得恢复神符的状态效果，持续{duration}秒。',
            notes: ['激活赏金或圣水神符时持续时间为{water_bounty_rune_duration_pct}%。'],
        },
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: 'special_bonus_unique_imba_arc_warden',
                    name: '+{s:bonus_spark_damage_base}% 闪光幽魂伤害',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_arc_warden_3',
                    name: '+{s:bonus_attack_speed_bonus} 磁场攻速/攻击力',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_arc_warden_4',
                    name: '+{s:bonus_duration}秒 乱流持续时间',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_arc_warden_5',
                    name: '+{s:bonus_AbilityCastRange} 乱流施法距离',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_arc_warden_7',
                    name: '磁场可作用小兵和建筑',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_arc_warden_8',
                    name: '风暴双雄没有惩罚距离',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_arc_warden_9',
                    name: '-{s:bonus_AbilityCooldown}秒 磁场冷却',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_arc_warden_flux_silences',
                    name: '目标落单时乱流造成沉默',
                },
            ],
        },
    ],
    FacetArray_B: [
        {
            facet_classname: 'arc_warden_facets_imba_1',
            name: '秩序 | 失序',
            description: '天穹守望者和风暴双雄各自拥有相应的技能效果。 天穹守望者和风暴双雄的技能效果互换。',
            related_abilities: [
                {
                    ability_classname: 'imba_arc_warden_flux',
                    description: '减速效果提升。',
                },
                {
                    ability_classname: 'imba_arc_warden_magnetic_field',
                    description: '磁场会把敌人推开，提供攻击速度加成，并且其中的友方英雄可以闪避来自磁场外的攻击。',
                },
                {
                    ability_classname: 'imba_arc_warden_spark_wraith',
                    description: '启动延迟和伤害提升。',
                },
            ],
            related_talents: [],
        },
    ],
    ModifierArray: [
        {
            modifier_classname: 'modifier_imba_arc_warden_flux',
            name: '乱流',
            description: '附近没有友方单位时会受到伤害，被减速{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。',
        },
        {
            modifier_classname: 'modifier_imba_arc_warden_spark_wraith_purge',
            name: '闪光幽魂',
            description: '移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。',
        },
        {
            modifier_classname: 'modifier_imba_arc_warden_magnetic_field_attack_speed',
            name: '磁场',
            description: '在磁场内获得{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}攻击速度加成，并且100%%闪避来自磁场外的攻击。',
        },
        {
            modifier_classname: 'modifier_imba_arc_warden_magnetic_field_evasion',
            name: '磁场',
            description: '移动速度被减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。',
        },
        {
            modifier_classname: 'modifier_imba_arc_warden_magnetic_field_attack_range',
            name: '磁场',
            description: '攻击距离提升{MODIFIER_PROPERTY_ATTACK_RANGE_BONUS}，基础攻击力提升{MODIFIER_PROPERTY_BASEATTACK_BONUSDAMAGE}点。',
        },
        {
            modifier_classname: 'modifier_imba_arc_warden_tempest_double',
            name: '风暴双雄',
            description: '天穹守望者的完美复制体，可以使用除了真视宝石和圣剑外的所有技能和物品。',
        },
        {
            modifier_classname: 'modifier_imba_arc_warden_tempest_double_distance_penalty',
            name: '茫然无措',
            description: '离天穹守望者太远后承受伤害增加{MODIFIER_PROPERTY_INCOMING_DAMAGE_PERCENTAGE}%。',
        },
    ],
};
