import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: 'imba_medusa_cold_blooded',
            ability_specials: [],
            name: '冷血动物',
            description: '每次美杜莎受到指向性技能作用时都会朝该敌人放出一条单体的秘术异蛇。',
            notes: [],
        },
        {
            ability_classname: 'imba_medusa_split_shot',
            ability_specials: [
                {
                    ability_special: 'damage_modifier_tooltip',
                    text: '%攻击力百分比：',
                },
                {
                    ability_special: 'arrow_count',
                    text: '额外目标数：',
                },
            ],
            name: '分裂箭',
            description:
                '美杜莎施展魔法将她的箭分裂成若干支箭矢。分裂箭造成的伤害为正常攻击力的一定百分比。\\n\\n额外目标不会受到其他攻击特效（比如致命一击）的作用。',
            lore: '遇到了被诅咒的蛇发女妖，那就会领教到她的愤怒。',
            notes: ['次级目标将是除了主要目标外距离最近的敌方单位。', '如果在分裂箭激活的状态下创造幻象，幻象也将继承此技能。'],
        },
        {
            ability_classname: 'imba_medusa_mystic_snake',
            ability_specials: [
                {
                    ability_special: 'radius',
                    text: '跳跃范围：',
                },
                {
                    ability_special: 'snake_jumps',
                    text: '跳跃次数：',
                },
                {
                    ability_special: 'snake_damage',
                    text: '基础伤害：',
                },
                {
                    ability_special: 'snake_mana_steal',
                    text: '%魔法吸取：',
                },
                {
                    ability_special: 'snake_scale',
                    text: '%每次跳跃递增伤害/速度：',
                },
                {
                    ability_special: 'stone_form_scepter_base',
                    text: '基础持续时间：',
                },
                {
                    ability_special: 'stone_form_scepter_increment',
                    text: '弹跳增加持续时间：',
                },
            ],
            name: '秘术异蛇',
            description:
                '放出一条秘术异蛇在敌人之间跳跃，造成伤害。每次跳跃后伤害和速度都会增加。抵达最后一个目标后，它会返回到美杜莎身上为其恢复魔法值。异蛇会返还所有目标最大魔法值一定百分比的魔法。',
            lore: '蛇发女妖所受的诅咒也是她最强大的力量。',
            scepter_description: '秘术异蛇可以将敌人变为石头。每次弹跳额外增加石化时间。',
            notes: ['秘术异蛇无法躲避。'],
        },
        {
            ability_classname: 'imba_medusa_mana_shield',
            ability_specials: [
                {
                    ability_special: 'damage_per_mana',
                    text: '基础魔法吸收系数：',
                },
                {
                    ability_special: 'damage_per_mana_per_level',
                    text: '每级魔法吸收系数：',
                },
                {
                    ability_special: 'damage_per_mana_total',
                    text: '总魔法吸收系数：',
                },
            ],
            name: '魔法盾',
            description:
                '创造一个魔法护盾，消耗美杜莎的魔法值以吸收{absorption_pct}%的伤害，美杜莎每次升级都会使伤害吸收系数提升。幻象的伤害吸收系数减少{absorption_pct}%。',
            lore: '尽管美杜莎生来没被赐以永恒的生命，但她所受的诅咒赋予了她独一无二的防御力量。',
            notes: ['伤害的吸收先于任何伤害减免机制，所以提高物理护甲，物理格挡和魔法抗性都不能减少吸收相同伤害所需的魔法。'],
        },
        {
            ability_classname: 'imba_medusa_stone_gaze',
            ability_specials: [
                {
                    ability_special: 'radius',
                    text: '作用范围：',
                },
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'slow',
                    text: '%速度减缓：',
                },
                {
                    ability_special: 'stone_duration',
                    text: '石化持续时间：',
                },
                {
                    ability_special: 'bonus_physical_damage',
                    text: '%额外物理伤害：',
                },
                {
                    ability_special: 'speed_boost',
                    text: '%移动速度提升：',
                },
            ],
            name: '石化凝视',
            description:
                '任何盯着蛇发女妖的敌方单位的攻击速度和移动速度均将被减缓。如果一单位在石化凝视期间盯着蛇发女妖超过{face_duration}秒，该单位会被完全石化。被石化的单位处于眩晕状态，受到物理攻击时承受额外伤害。',
            lore: '美杜莎的美貌感天动地。',
            notes: ['无论敌方单位是在美杜莎施放技能期间的何时受到石化凝视作用，他受到的技能效果都是满额的持续时间。'],
        },
        {
            ability_classname: 'imba_medusa_gorgon_grasp',
            ability_specials: [
                {
                    ability_special: 'radius',
                    text: '初始范围：',
                },
                {
                    ability_special: 'radius_grow',
                    text: '范围每次增加：',
                },
                {
                    ability_special: 'delay',
                    text: '延迟：',
                },
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'damage',
                    text: '伤害：',
                },
                {
                    ability_special: 'damage_pers',
                    text: '每秒伤害：',
                },
            ],
            name: '罗网箭阵',
            description:
                '美杜莎沿着一条直线射出{volley_count}组箭矢，每组都比上一组更大。被齐射的箭矢击中的敌人会受到初始爆发伤害，被缠绕，被敌人发现，而且受到每秒伤害。',
            notes: [],
        },
        {
            ability_classname: 'imba_medusa_venomed_volley',
            ability_specials: [
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'move_slow',
                    text: '%移动速度减缓：',
                },
                {
                    ability_special: 'attack_slow',
                    text: '攻击速度降低：',
                },
                {
                    ability_special: 'cast_slow',
                    text: '%施法速度降低：',
                },
            ],
            name: '剧毒飞箭',
            description: '美杜莎每{attack_count}次攻击会对箭矢施加一次毒素，可以短暂降低移动速度、攻击速度和施法速度。',
            notes: ['附带毒素的攻击被视为分裂箭的攻击特效。'],
        },
        {
            ability_classname: 'imba_special_bonus_special_bonus_unique_medusa_gorgons_grasp_volleys',
            ability_specials: [],
            name: '+{s:bonus_volley_count} 罗网箭阵',
            notes: [],
        },
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: 'special_bonus_unique_imba_medusa',
                    name: '+{s:bonus_duration}秒 石化凝视持续时间',
                    description: '眩晕的持续时间不受影响。',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_medusa_2',
                    name: '-{s:bonus_damage_modifier}% 分裂箭减少攻击力',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_medusa_3',
                    name: '+{s:bonus_snake_jumps} 秘术异蛇弹跳次数',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_medusa_4',
                    name: '分裂箭继承攻击特效',
                    description: '分裂箭的次级攻击会施加攻击特效。',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_medusa_5',
                    name: '-{s:bonus_AbilityCooldown}秒 秘术异蛇冷却',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_medusa_6',
                    name: '+{s:bonus_damage_per_mana} 魔法盾魔法吸收系数',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_medusa_8',
                    name: '+{s:bonus_bonus_physical_damage}% 石化凝视额外物理伤害',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_medusa_snake_damage',
                    name: '+{s:bonus_snake_damage} 秘术异蛇伤害',
                },
                {
                    talent_classname: 'special_bonus_special_bonus_unique_medusa_gorgons_grasp_volleys',
                    name: '+{s:bonus_volley_count} 罗网箭阵',
                },
            ],
        },
    ],
    FacetArray_B: [
        {
            facet_classname: 'medusa_facets_imba_1',
            name: '魔力充盈 | 魔法之契',
            description: '秘术异蛇使美杜莎获得攻击伤害。 美杜莎以消耗魔法为代价获得攻击速度。',
            related_abilities: [
                {
                    ability_classname: 'imba_medusa_mystic_snake',
                    description:
                        '秘术异蛇返回至美杜莎后，根据异蛇回复的魔法值，每{mana_per_damage}点魔法都会使她接下来的{max_attacks}次攻击附带+1 额外伤害。加成状态持续最多{attack_buff_duration}秒。',
                },
                {
                    ability_classname: 'imba_medusa_mana_shield',
                    description:
                        '魔法盾可以主动开启，每秒消耗{aspd_increase_mana_cost_pct}%最大魔法值并每秒获得{aspd_increase_mana_cost_pct}%攻击速度加成，最高为{aspd_increase_max_tooltip}。{aspd_increase_max_aspd_time}秒后获得最大效果。加成状态持续{aspd_increase_buff_duration}秒。冷却时间为{attack_buff_cooldown}秒。',
                },
            ],
            related_talents: [],
        },
    ],
    ModifierArray: [
        {
            modifier_classname: 'modifier_imba_medusa_mystic_snake_slow',
            name: '秘术异蛇',
            description: '移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%，转身速率降低{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。',
        },
        {
            modifier_classname: 'modifier_imba_medusa_mana_shield',
            name: '魔法盾',
            description: '以每点魔法吸收{MODIFIER_PROPERTY_TOOLTIP2}点伤害的代价吸收{MODIFIER_PROPERTY_TOOLTIP}%的伤害。',
        },
        {
            modifier_classname: 'modifier_imba_medusa_stone_gaze',
            name: '石化凝视',
            description: '移动速度提升{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。注视你的敌人将被降低攻击和移动速度。',
        },
        {
            modifier_classname: 'modifier_imba_medusa_stone_gaze_facing',
            name: '石化凝视',
            description: '速度降低35%。注视着美杜莎将会变成石头。',
        },
        {
            modifier_classname: 'modifier_imba_medusa_stone_gaze_stone',
            name: '石化凝视',
            description: '被完全石化。处于眩晕状态，受到物理攻击时承受{MODIFIER_PROPERTY_INCOMING_PHYSICAL_DAMAGE_PERCENTAGE}%额外伤害。',
        },
        {
            modifier_classname: 'modifier_imba_medusa_cold_blooded',
            name: '冷血动物',
            description: '对施放指向性技能的敌人放出单体秘术异蛇。',
        },
        {
            modifier_classname: 'modifier_imba_medusa_mystic_snake_buff',
            name: '魔力充盈',
            description: '异蛇返回后会使美杜莎接下来的攻击造成{MODIFIER_PROPERTY_TOOLTIP}点额外物理伤害。',
        },
        {
            modifier_classname: 'modifier_imba_medusa_venomed_volley',
            name: '剧毒飞箭',
            description: '每隔几次攻击就会在箭矢中注入剧毒。',
        },
        {
            modifier_classname: 'modifier_imba_medusa_venomed_volley_slow',
            name: '剧毒飞箭',
            description: '移动速度、攻击速度和施法速度降低。',
        },
        {
            modifier_classname: 'modifier_imba_medusa_gorgon_grasp_root',
            name: '罗网箭阵',
            description: '被蛇发女妖抓住。被缠绕并受到持续伤害。无法转身。',
        },
        {
            modifier_classname: 'modifier_imba_medusa_manashield_attack_buff',
            name: '魔法之契',
            description: '获得{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}攻击速度。',
        },
    ],
};
