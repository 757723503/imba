import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: 'imba_keeper_of_the_light_illuminate',
            ability_specials: [
                {
                    ability_special: 'total_damage',
                    text: '最高伤害：',
                },
                {
                    ability_special: 'radius',
                    text: '宽度：',
                },
                {
                    ability_special: 'range',
                    text: '距离：',
                },
            ],
            name: '冲击波',
            description: '持续施法 - 积攒光的能量，积攒时间越长，威力越大。释放后，光波沿直线发出，造成伤害并打开视野。',
            lore: '伊扎洛深藏的光芒显现之时璀璨夺目。',
            shard_description: '提升冲击波的治疗效果。',
            notes: ['在持续施法期间获得的视野不断增大。'],
        },
        {
            ability_classname: 'imba_keeper_of_the_light_mana_leak',
            ability_specials: [
                {
                    ability_special: 'duration',
                    text: '流失持续时间：',
                },
                {
                    ability_special: 'mana_leak_pct',
                    text: '%魔法流失：',
                },
                {
                    ability_special: 'stun_duration',
                    text: '眩晕持续时间：',
                },
            ],
            name: '法力流失',
            description: '削弱敌人的魔法精华，使他们在移动时损失魔法。如果敌人损失了全部的魔法值，他将被眩晕。',
            lore: '伊扎洛打破原初的协律，耗尽那些可怜的构造体身上的魔法能量。',
            notes: ['如果目标在0.1秒内移动超过300码（例如闪烁技能），法力流失对此次移动不会造成任何效果。'],
        },
        {
            ability_classname: 'imba_keeper_of_the_light_radiant_bind',
            ability_specials: [
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'slow',
                    text: '%每移动100距离减速：',
                },
                {
                    ability_special: 'magic_resistance',
                    text: '%魔法抗性降低：',
                },
            ],
            name: '炎阳之缚',
            description: '削弱一个敌人的魔法抗性，并施加减速效果，目标移动的距离越长，减速效果越大。',
            shard_description: '获得{AbilityCharges}点能量点数。',
            notes: [],
        },
        {
            ability_classname: 'imba_keeper_of_the_light_will_o_wisp',
            ability_specials: [
                {
                    ability_special: 'radius',
                    text: '作用范围：',
                },
                {
                    ability_special: 'hit_count',
                    text: '可承受攻击次数：',
                },
                {
                    ability_special: 'wisp_damage',
                    text: '伤害：',
                },
            ],
            name: '灵光',
            description: '在目标区域召唤幻火。幻火交替闪亮和闪灭。闪亮时蛊惑敌人靠近，并造成伤害。',
            lore: '虽然伊扎洛不会宣扬自己“认识”他们，但他离奇地影响着很多愿意援助他的强大生物。',
            notes: ['幻火会对作用范围内所有敌人施加朝其牵引的效果，该牵引效果不会打断。'],
        },
        {
            ability_classname: 'imba_keeper_of_the_light_chakra_magic',
            ability_specials: [
                {
                    ability_special: 'mana_restore',
                    text: '魔法回复：',
                },
                {
                    ability_special: 'cooldown_reduction',
                    text: '冷却时间减少：',
                },
            ],
            name: '查克拉魔法',
            description: '恢复目标单位的魔法值，并减少所有冷却中基础技能（非大招）的冷却时间。对自身使用时效果提升{self_bonus}%。',
            lore: '通过同样的渠道，伊扎洛将他的协律授予他人。',
            notes: ['查克拉魔法无法减少终极技能的冷却时间。'],
        },
        {
            ability_classname: 'imba_keeper_of_the_light_empty1',
            ability_specials: [],
            name: '空',
            notes: [],
        },
        {
            ability_classname: 'imba_keeper_of_the_light_empty2',
            ability_specials: [],
            name: '空',
            notes: [],
        },
        {
            ability_classname: 'imba_keeper_of_the_light_spirit_form',
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
                    ability_special: 'cast_range',
                    text: '施法距离加成：',
                },
                {
                    ability_special: 'illuminate_heal',
                    text: '%冲击波治疗：',
                },
            ],
            name: '灵魂形态',
            description: '伊扎洛暂时使身体发光，获得移动速度和施法距离加成，并且冲击波将由一个单独的灵魂施法，可以治疗友军。',
            lore: '在一闪而逝的光芒中，伊扎洛展现他真实而原本的形态。',
            shard_description: '提升冲击波的治疗效果。',
            notes: [],
        },
        {
            ability_classname: 'imba_keeper_of_the_light_recall',
            ability_specials: [
                {
                    ability_special: 'teleport_delay',
                    text: '传送延迟：',
                },
                {
                    ability_special: 'ally_movespeed_pct',
                    text: '%移动速度加成：',
                },
            ],
            name: '召回',
            description:
                '短暂延迟后，将友方英雄目标传送到你的位置。如果在此期间，友方英雄目标受到来自玩家的伤害，召回将被打断。施放时会对光之守卫和传送目标同时施加查克拉魔法和移动速度加成。<br><br>如果设为多样施法，会把光之守卫传送至目标友军。<br><br>技能等级随着灵魂形态的等级提升。',
            lore: '朝着光明前行。',
            shard_description: '获得{AbilityCharges}点能量点数。',
            notes: [
                '如果光之守卫死亡，技能效果将会中断。',
                '召回将打断持续施法。',
                '可以选择禁用帮助，防止光之守卫对你使用此技能。',
                '可以点击小地图施放，将会选择施放点最近的友方英雄。',
            ],
        },
        {
            ability_classname: 'imba_keeper_of_the_light_blinding_light',
            ability_specials: [
                {
                    ability_special: 'miss_rate',
                    text: '%落空概率：',
                },
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'radius',
                    text: '作用范围：',
                },
                {
                    ability_special: 'damage',
                    text: '伤害：',
                },
            ],
            name: '致盲之光',
            description:
                '一道致盲之光在目标区域闪现，击退并致盲区域内的单位，使他们的攻击不能命中。在{knockback_duration}秒内击退{knockback_distance}距离。',
            lore: '原初的光芒将战局的优势转向伊扎洛和他的盟友。',
            notes: ['落地后受作用单位将摧毁150范围内的树木。'],
        },
        {
            ability_classname: 'imba_keeper_of_the_light_illuminate_end',
            ability_specials: [],
            name: '释放冲击波',
            description: '提前结束能量积聚。',
            notes: [],
        },
        {
            ability_classname: 'imba_keeper_of_the_light_mana_magnifier',
            ability_specials: [],
            name: '法力俱增',
            description: '光之守卫附近{aura_radius}范围内友军拥有的魔法增加{bonus_mana_pct}%。粘滞效果持续5秒。',
            notes: [],
        },
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: 'special_bonus_unique_imba_keeper_of_the_light',
                    name: '+{s:bonus_total_damage} 冲击波伤害',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_keeper_of_the_light_2',
                    name: '+{s:bonus_mana_restore} 查克拉魔法回复',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_keeper_of_the_light_5',
                    name: '-{s:value}秒 致盲之光冷却',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_keeper_of_the_light_7',
                    name: '-{s:bonus_AbilityCooldown}秒 查克拉魔法冷却',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_keeper_of_the_light_8',
                    name: '+{s:bonus_miss_rate}% 致盲之光落空',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_keeper_of_the_light_11',
                    name: '+{s:bonus_duration}秒 灵魂形态持续时间',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_keeper_of_the_light_14',
                    name: '查克拉魔法施加强驱散',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_keeper_of_the_light_illuminate_cooldown',
                    name: '-{s:bonus_AbilityCooldown}秒 冲击波冷却',
                },
            ],
        },
    ],
    FacetArray_B: [
        {
            facet_classname: 'keeper_of_the_light_facets_imba_1',
            name: '',
            description: '',
        },
    ],
    ModifierArray: [
        {
            modifier_classname: 'modifier_imba_keeper_of_the_light_mana_magnifier_boost',
            name: '法力俱增',
            description: '获得{MODIFIER_PROPERTY_EXTRA_MANA_PERCENTAGE}%最大魔法。',
        },
        {
            modifier_classname: 'modifier_imba_keeper_of_the_light_mana_leak',
            name: '法力流失',
            description: '移动时流失魔法值。',
        },
        {
            modifier_classname: 'modifier_imba_keeper_of_the_light_spirit_form',
            name: '灵魂形态',
        },
        {
            modifier_classname: 'modifier_imba_keeper_of_the_light_spirit_form_illuminate',
            name: '正在积聚冲击波',
            description: '你的灵魂正在其他位置积聚冲击波。',
        },
        {
            modifier_classname: 'modifier_imba_keeper_of_the_light_recall',
            name: '召回',
            description: '正在被传送至光之守卫的位置。',
        },
        {
            modifier_classname: 'modifier_imba_keeper_of_the_light_blinding_light',
            name: '致盲之光',
            description: '被致盲，{MODIFIER_PROPERTY_MISS_PERCENTAGE}%的攻击不能命中。',
        },
        {
            modifier_classname: 'modifier_imba_keeper_of_the_light_chakra_magic',
            name: '查克拉魔法',
            description: '下一次施放技能后该技能的冷却时间降低。',
        },
        {
            modifier_classname: 'modifier_imba_keeper_of_the_light_radiant_bind',
            name: '炎阳之缚',
            description:
                '移动速度被减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%，魔法抗性降低{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。',
        },
        {
            modifier_classname: 'modifier_imba_keeper_of_the_light_will_o_wisp',
            name: '被蛊惑',
            description: '无法动弹。',
        },
        {
            modifier_classname: 'modifier_imba_keeper_of_the_light_will_o_wisp_aura',
            name: '蛊惑光环',
            description: '作用范围内敌人被闪亮的光源蛊惑，无法动弹。',
        },
        {
            modifier_classname: 'modifier_imba_keeper_of_the_light_recall_movespeed',
            name: '召回移动速度',
            description: '移动速度提升{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。',
        },
    ],
};
