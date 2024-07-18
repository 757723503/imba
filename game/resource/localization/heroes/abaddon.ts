// reimagined_antimage_mana_break.ts
import type { LocalizationData } from '../../../../@liu/localizationInterfaces';
import { AbilityLocalization } from '../../../../@liu/localizationInterfaces';

export function generateLocalizationData(): LocalizationData {
    return {
        AbilityArray: [
            {
                ability_classname: 'reimagined_antimage_mana_break',
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
                    { ability_special: 'mana_per_hit_pct', text: '迷雾缠绕9', percentage: true },
                ],
            },
        ],
        ModifierArray: [],
        StandardArray: [],
        TalentArray: [],
        FacetArray: [],
    };
}
