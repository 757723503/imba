import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: 'imba_abaddon_death_coil',
            name: '迷雾缠绕',
            description: '迷雾缠绕1',
            lore: '迷雾缠绕2',
            notes: ['迷雾缠绕3'],
            reimagined_effects: [
                { title: '迷雾缠绕4', description: '迷雾缠绕5' },
                { title: '迷雾缠绕4', description: '迷雾缠绕5' },
            ],
            ability_specials: [
                { ability_special: 'mana_per_hit', text: '迷雾缠绕6' },
                { ability_special: 'mana_per_hit_pct', text: '迷雾缠绕7', percentage: true },
            ],
        },
    ],
    ModifierArray: [],
    StandardArray: [],
    TalentArray: [],
    FacetArray_A: [],
    FacetArray_B: [
        {
            facet_classname: 'abaddon_facets_imba_1',
            name: '合并原版两种命石',
            description: '夸夸合并',
            related_abilities: [{ ability_classname: 'abaddon_aphotic_shield', description: '全新命石' }],
        },
    ],
};
