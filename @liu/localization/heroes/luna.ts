import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: 'imba_luna_lucent_beam',
            ability_specials: [
                {
                    ability_special: 'beam_damage',
                    text: '月光伤害：',
                },
                {
                    ability_special: 'stun_duration',
                    text: '眩晕时间：',
                },
                {
                    ability_special: 'damage_buff_duration',
                    text: '攻击力加成持续时间：',
                },
                {
                    ability_special: 'damage_buff_per_beam',
                    text: '每道月光攻击力加成：',
                },
            ],
            name: '月光',
            description: '召唤一道月能的光束打击敌人，造成伤害并短暂眩晕目标。',
            lore: '那些侵犯银夜森林的家伙会受到赛莉蒙妮的毁灭打击。',
            notes: [],
        },
        {
            ability_classname: 'imba_luna_lunar_orbit',
            ability_specials: [
                {
                    ability_special: 'rotating_glaives_duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'rotating_glaives_hit_radius',
                    text: '碰撞范围：',
                },
                {
                    ability_special: 'rotating_glaives_collision_damage',
                    text: '%碰撞伤害：',
                },
                {
                    ability_special: 'rotating_glaives_damage_reduction',
                    text: '%承受伤害降低：',
                },
            ],
            name: '环月',
            description:
                '产生{rotating_glaives}个月刃在露娜身旁{rotating_glaives_movement_radius}范围内旋转。任何碰到月刃的敌方单位都会受到露娜攻击伤害的一定百分比。',
            shard_description: '提升碰撞伤害。月刃旋转速度提升{rotating_glaives_shard_speed_bonus_tooltip}%。',
            notes: [],
        },
        {
            ability_classname: 'imba_luna_moon_glaive',
            ability_specials: [
                {
                    ability_special: 'range',
                    text: '弹跳范围：',
                },
                {
                    ability_special: 'bounces',
                    text: '弹跳次数：',
                },
                {
                    ability_special: 'damage_reduction_percent',
                    text: '%弹跳伤害衰减：',
                },
            ],
            name: '月刃',
            description: '强化露娜的月刃，使攻击可以在敌方单位之间弹跳。每次弹跳造成的伤害都会减少。',
            lore: '露娜精心打磨过的回旋镖型武器可以从大群敌人中杀出一条血路。',
            notes: ['月刃不会触发致命一击以外的任何攻击特效。'],
        },
        {
            ability_classname: 'imba_luna_lunar_blessing',
            ability_specials: [
                {
                    ability_special: 'radius',
                    text: '福佑作用范围：',
                },
                {
                    ability_special: 'allied_bonus_damage_tooltip',
                    text: '攻击力加成（友军）：',
                },
                {
                    ability_special: 'self_bonus_damage_tooltip',
                    text: '攻击力加成（露娜）：',
                },
                {
                    ability_special: 'self_bonus_night_vision_tooltip',
                    text: '额外夜间视野：',
                },
            ],
            name: '月之祝福',
            description:
                '每级提升露娜和附近友方英雄{bonus_damage_per_level}点攻击力，露娜获得双倍的攻击力加成。夜晚期间月之祝福为全地图生效，并且露娜受到福佑后夜间视野提升{bonus_night_vision_self} + {bonus_night_vision_per_level} * 英雄等级。',
            lore: '月之女神对她的族人微笑。',
            shard_description:
                '月之祝福可以主动施放，使800范围内友方英雄获得诡计之雾的效果。夜晚期间脱离开雾的距离更近，移动速度加成更高。另外月蚀的夜晚时间增加10秒',
            notes: [],
        },
        {
            ability_classname: 'imba_luna_lunar_grace',
            ability_specials: [
                {
                    ability_special: 'attack_speed',
                    text: '攻击速度：',
                },
                {
                    ability_special: 'night_multiplier',
                    text: '夜间倍数：',
                },
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
            ],
            name: '月之祝福',
            description: '驱散负面状态效果，并获得攻击速度加成。夜间的效果更大。',
            lore: '月之女神对她的族人微笑。',
            notes: [],
        },
        {
            ability_classname: 'imba_luna_eclipse',
            ability_specials: [
                {
                    ability_special: 'beams',
                    text: '月光数量：',
                },
                {
                    ability_special: 'radius',
                    text: '作用范围：',
                },
                {
                    ability_special: 'hit_count',
                    text: '最大单体打击次数：',
                },
                {
                    ability_special: 'AbilityDuration',
                    text: '月蚀持续时间：',
                },
                {
                    ability_special: 'night_duration',
                    text: '夜晚持续时间：',
                },
            ],
            name: '月蚀',
            description:
                '召唤一次月蚀，以她当前技能等级的月光随机打击附近敌人。月光只有伤害效果，不会造成眩晕，而且单一目标只能受到有限次数的打击。月蚀会暂时将白天变为黑夜。',
            lore: '在急需其帮助的时候，赛莉蒙妮亲自降临世间，遮蔽照向敌人的光芒，以及他们的希望。',
            scepter_description:
                '露娜可以对友方单位或自身施放月蚀，使月蚀的效果跟随目标，或者对一片区域施放。增加月光数量，减少月蚀持续时间，并且移除单体打击次数上限，月光的产生间隔缩短一半。',
            notes: [
                '如果露娜没有升级月光，月蚀将无法造成伤害，但是变为黑夜效果有效。',
                '露娜阵亡后月光马上中止。',
                '不能伤害隐身单位。',
                '每道月光之间都有{beam_interval}秒的间隔。神杖升级后间隔为{beam_interval_scepter}秒。',
            ],
        },
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: 'special_bonus_unique_imba_luna_1',
                    name: '+{s:bonus_beam_damage} 月光伤害',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_luna_2',
                    name: '-{s:bonus_AbilityCooldown}秒 月光冷却',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_luna_3',
                    name: '+{s:bonus_bonus_damage_per_level} 每级月之祝福攻击力',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_luna_4',
                    name: '+{s:bonus_stun_duration}秒 月光眩晕',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_luna_5',
                    name: '月光额外打击一个目标',
                    description: '主目标{s:bonus_lucent_beam_bounce_range}范围内随机目标。',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_luna_6',
                    name: '-{s:bonus_AbilityCooldown}秒 月蚀冷却',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_luna_7',
                    name: '-{s:bonus_damage_reduction_percent}% 月刃伤害衰减',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_luna_8',
                    name: '月光发射{s:bonus_glaives_fired}个月刃',
                    description: '月蚀的月光不会发射月刃',
                },
            ],
        },
    ],
    FacetArray_B: [
        {
            facet_classname: 'luna_facets_imba_1',
            name: '月盾 | 明月风暴 | 环月',
            description: '环月在开启时提供承受伤害降低的效果。 月光或月蚀击中敌人后露娜会获得攻击力加成。',
            related_abilities: [
                {
                    ability_classname: 'imba_luna_lucent_beam',
                    description:
                        '每次一名敌方英雄被月光击中时，露娜都会获得一个攻击力加成的状态效果。月蚀的月光提供{damage_buff_from_eclipse_pct}%数值。',
                },
                {
                    ability_classname: 'imba_luna_lunar_orbit',
                    description: '旋转的月刃在开启时提供承受伤害降低的效果。',
                },
            ],
            related_talents: [],
        },
    ],
    ModifierArray: [
        {
            modifier_classname: 'modifier_imba_luna_lunar_blessing_aura',
            name: '月之祝福',
            description: '提升{MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE}点攻击力。',
        },
        {
            modifier_classname: 'modifier_imba_luna_eclipse',
            name: '月蚀',
            description: '以月光打击附近目标。',
        },
        {
            modifier_classname: 'modifier_imba_luna_lucent_beam_damage_buff_counter',
            name: '月光攻击力',
            description: '攻击力提升{MODIFIER_PROPERTY_TOOLTIP}点。',
        },
        {
            modifier_classname: 'modifier_imba_luna_moon_glaive_shield',
            name: '环月',
            description: '承受的伤害减少{MODIFIER_PROPERTY_INCOMING_DAMAGE_PERCENTAGE}%，并且对附近敌人造成伤害。',
        },
    ],
};
