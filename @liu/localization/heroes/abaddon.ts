import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: 'imba_abaddon_death_coil',
            name: '迷雾缠绕',
            description: '亚巴顿以自身的部分生命为代价，释放出一团致命迷雾，可以对敌方单位造成伤害，或者治疗友方单位。',
            notes: ['亚巴顿不能使用此技能自杀。'],
            lore: '亚巴顿的气息中充盈着来自魔霭圣池的神秘之汽，他能随意将其释放。',
            reimagined_effects: [
                { title: 'imba效果1', description: 'imba效果1' },
                { title: 'imba效果2', description: 'imba效果2' },
            ],
            ability_specials: [
                { ability_special: 'target_damage', text: '伤害/治疗' },
                { ability_special: 'self_damage', text: '对自身伤害', percentage: true },
            ],
            shard_description: '使迷雾缠绕也会造成攻击伤害，并且施加来自物品和技能的效果。',
        },
        {
            ability_classname: 'imba_abaddon_aphotic_shield',
            name: '无光之盾',
            description:
                '召唤黑暗能量环绕友方单位，创造一个护盾，护盾在消失前能吸收一定量的伤害。护盾被摧毁后，它会将之前吸收的伤害反馈给周围的敌方单位。施放时移除目标身上的负面魔法效果。',
            notes: ['亚巴顿不能使用此技能自杀。'],
            lore: '升腾的黑雾将敌人的招数一一吞噬，如同吞噬日光。',
            reimagined_effects: [
                { title: 'imba效果1', description: 'imba效果1' },
                { title: 'imba效果2', description: 'imba效果2' },
            ],
            ability_specials: [
                { ability_special: 'AbilityCooldown', text: '冷却' },
                { ability_special: 'duration', text: '持续时间' },
                { ability_special: 'radius', text: '伤害范围' },
                { ability_special: 'damage_absorb', text: '吸收伤害' },
                { ability_special: 'absorb_to_damage', text: '反弹伤害', percentage: true },
                // { ability_special: 'absorb_damage_aoeabsorb_damage_aoe', text: '持续时间' },
            ],
            shard_description: '使迷雾缠绕也会造成攻击伤害，并且施加来自物品和技能的效果。',
        },
    ],
    ModifierArray: [],
    StandardArray: [],
    TalentArray: [
        {
            talent_classname: 'special_bonus_imba_abaddon',
            talents: [
                { name: 'imba天赋1' },
                { name: 'imba天赋2' },
                { name: 'imba天赋3' },
                { name: 'imba天赋4' },
                { name: 'imba天赋5' },
                { name: 'imba天赋6' },
                { name: 'imba天赋7' },
                { name: 'imba天赋8' },
            ],
        },
    ],
    FacetArray_A: [],
    FacetArray_B: [
        {
            facet_classname: 'abaddon_facets_imba_1',
            name: '合并原版两种命石',
            description: '夸夸合并',
            related_abilities: [{ ability_classname: 'imba_abaddon_aphotic_shield', description: '直接合并的全新命石' }],
        },
    ],
};
