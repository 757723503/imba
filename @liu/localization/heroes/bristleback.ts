import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: 'imba_bristleback_hairball',
            ability_specials: [
                {
                    ability_special: 'radius',
                    text: '作用范围：',
                },
                {
                    ability_special: 'quill_stacks',
                    text: '刺针叠加数量：',
                },
                {
                    ability_special: 'goo_stacks',
                    text: '鼻液叠加数量：',
                },
            ],
            name: '毛团',
            description: '向目标地点咳出一团满是刺针的毛团。毛团会在该地点爆开，范围内的敌人都将受到多个鼻液叠加效果和单次刺针扫射的作用。',
            notes: [],
        },
        {
            ability_classname: 'imba_bristleback_viscous_nasal_goo',
            ability_specials: [
                {
                    ability_special: 'base_armor',
                    text: '基础降低护甲：',
                },
                {
                    ability_special: 'armor_per_stack',
                    text: '叠加护甲降低：',
                },
                {
                    ability_special: 'base_move_slow',
                    text: '%初始移动速度减缓：',
                },
                {
                    ability_special: 'move_slow_per_stack',
                    text: '%每层叠加移速减缓：',
                },
                {
                    ability_special: 'stack_limit',
                    text: '叠加层数上限：',
                },
            ],
            name: '粘稠鼻液',
            description: '用鼻涕包裹一个敌方单位，降低护甲和移动速度，持续{goo_duration}秒。多次施放的效果会叠加，并且刷新持续时间。',
            lore: '被大雪困住的时候着了凉，但是钢背兽让这为他所用。',
            notes: [],
        },
        {
            ability_classname: 'imba_bristleback_quill_spray',
            ability_specials: [
                {
                    ability_special: 'radius',
                    text: '作用范围：',
                },
                {
                    ability_special: 'quill_base_damage',
                    text: '刺针直接伤害：',
                },
                {
                    ability_special: 'quill_stack_damage',
                    text: '刺针叠加伤害：',
                },
                {
                    ability_special: 'quill_stack_duration',
                    text: '伤害叠加持续时间：',
                },
                {
                    ability_special: 'max_damage',
                    text: '伤害上限：',
                },
            ],
            name: '刺针扫射',
            description:
                '将尖刺喷射向敌人，对钢背兽附近的敌人造成伤害。任何单位最近{quill_stack_duration}秒内每次受到刺针扫射的打击都会受到额外伤害。',
            lore: '执法者的荣誉维护起来非常棘手。他的刺针也是。',
            notes: ['刺针扫射的伤害不能被伤害格挡类技能减免。'],
        },
        {
            ability_classname: 'imba_bristleback_bristleback',
            ability_specials: [
                {
                    ability_special: 'side_damage_reduction',
                    text: '%侧面伤害减少：',
                },
                {
                    ability_special: 'back_damage_reduction',
                    text: '%背后伤害减少：',
                },
                {
                    ability_special: 'quill_release_threshold',
                    text: '伤害临界值：',
                },
                {
                    ability_special: 'goo_radius',
                    text: '鼻液作用范围：',
                },
            ],
            name: '钢毛后背',
            description:
                '如果伤害来自钢背兽的侧面或者背后，他所受的伤害将会降低。钢背兽每次从背后受到{quill_release_threshold}点伤害会自动释放一次当前等级的刺针扫射。',
            lore: '在战斗中背部迎人或许正好合适。',
            scepter_description:
                '钢毛后背增加主动效果。钢背兽将背部转向目标方向，{activation_delay}秒后以{activation_spray_interval}秒间隔朝背部前方的锥形范围强行连续喷出{activation_num_quill_sprays}次刺针扫射。钢背兽在这段时间内面朝方向被锁定，被缴械，并且移动速度减缓{activation_movement_speed_pct}%。',
            notes: [
                '钢背兽的背面是以背部中心点为原点，向左向右各呈70度角的扇形区域。',
                '钢背兽的侧面是以背部中心点为原点，向左向右各呈110度角的扇形区域，背面的扇形区域不算在内。',
            ],
        },
        {
            ability_classname: 'imba_bristleback_prickly',
            ability_specials: [],
            name: '尖刺在背',
            description: '钢背兽攻击身后的敌方英雄时拥有{amp_pct}%伤害和负面效果持续时间增强。',
            notes: [],
        },
        {
            ability_classname: 'imba_bristleback_warpath',
            ability_specials: [
                {
                    ability_special: 'damage_per_stack',
                    text: '每层叠加攻击力加成：',
                },
                {
                    ability_special: 'aspd_per_stack',
                    text: '每层效果攻速加成：',
                },
                {
                    ability_special: 'move_speed_per_stack',
                    text: '%每层叠加移速加成：',
                },
                {
                    ability_special: 'stack_duration',
                    text: '叠加持续时间：',
                },
                {
                    ability_special: 'max_stacks',
                    text: '最大叠加层数：',
                },
                {
                    ability_special: 'active_bonus_attack_percent',
                    text: '%开启后每层叠加攻击力加成：',
                },
                {
                    ability_special: 'active_bonus_movement_percent',
                    text: '%开启后每层叠加移速加成：',
                },
                {
                    ability_special: 'active_duration',
                    text: '持续时间：',
                },
            ],
            name: '战意',
            description: '钢背兽每次使用技能时都会进入狂暴状态，移动速度和攻击力都将提升。',
            lore: '“别没事就发火”，他母亲总是这样训斥他。但是在战斗中，火冒三丈将有非凡效果。',
            notes: [
                '钢背兽的幻象也能继承加成效果。',
                '使用物品不会触发战意。',
                '破坏会使技能无法获得新的叠加效果。',
                '破坏不会使现有叠加效果提供的加成失效。',
            ],
        },
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: 'special_bonus_unique_imba_bristleback_2',
                    name: '+{s:bonus_quill_stack_damage} 刺针叠加伤害',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_bristleback_3',
                    name: '+{s:bonus_damage_per_stack} 战意叠加攻击力',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_bristleback_5',
                    name: '+{s:bonus_AbilityCastRange} 粘稠鼻液施法距离',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_bristleback_6',
                    name: '+{s:bonus_back_damage_reduction}/{s:bonus_side_damage_reduction}% 钢毛后背背面/侧面减伤',
                },
            ],
        },
    ],
    FacetArray_B: [
        {
            facet_classname: 'bristleback_facets_imba_1',
            name: '失控 | 鼻涕火箭 | 红光满面',
            description:
                '战意提供攻击速度加成，而不只有攻击力。 钢毛后背达到伤害临界值后发射粘稠鼻液，而不是刺针扫射。粘稠鼻液效果更加强大。 战意可以主动开启来获得额外加成。红光满面期间钢背兽的视野受限，并且不与友军共享视野。',
            related_abilities: [
                {
                    ability_classname: 'imba_bristleback_viscous_nasal_goo',
                    description: '提升了最大叠加层数和每层护甲降低。',
                },
                {
                    ability_classname: 'imba_bristleback_bristleback',
                    description: '他受到伤害时不再释放刺针扫射，而是对附近所有敌人发射当前等级的粘稠鼻液。',
                },
                {
                    ability_classname: 'imba_bristleback_warpath',
                    description: '战意提供攻击速度加成，而不只有攻击力。',
                },
            ],
            related_talents: [],
        },
    ],
    ModifierArray: [
        {
            modifier_classname: 'modifier_imba_bristleback_viscous_nasal_goo',
            name: '粘稠鼻液',
            description: '护甲减少{MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS}点，移动速度减少{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。',
        },
        {
            modifier_classname: 'modifier_imba_bristleback_quill_spray',
            name: '刺针扫射',
            description: '每次叠加刺针扫射后都会让之后受到的叠加伤害提高',
        },
        {
            modifier_classname: 'modifier_imba_bristleback_warpath',
            name: '战意',
            description: '移动速度提升{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%，攻击力提升{MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE}。',
        },
        {
            modifier_classname: 'modifier_imba_bristleback_warpath_active',
            name: '红光满面',
            description: '战意鼎盛！视野受限。',
        },
    ],
};
