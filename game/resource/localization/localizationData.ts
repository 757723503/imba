import type { AbilityLocalization, LocalizationData, ModifierLocalization, StandardLocalization } from '~generator/localizationInterfaces';
import { Language } from '../languages';

export function GenerateLocalizationData(): LocalizationData {
    // This section can be safely ignored, as it is only logic.
    //#region Localization logic
    // Arrays
    const Abilities: Array<AbilityLocalization> = new Array<AbilityLocalization>();
    const Modifiers: Array<ModifierLocalization> = new Array<ModifierLocalization>();
    const StandardTooltips: Array<StandardLocalization> = new Array<StandardLocalization>();

    // Create object of arrays
    const localization_info: LocalizationData = {
        AbilityArray: Abilities,
        ModifierArray: Modifiers,
        StandardArray: StandardTooltips,
    };
    //#endregion
    // Enter localization data below!
    Abilities.push({
        ability_classname: 'reimagined_abyssal_underlord_firestorm',
        name: 'Firestorm',
        description:
            'Calls down waves of fire that damage enemy units in the target area, and continues to burn them for additional damage over time.',
        language_overrides: [
            {
                language: Language.Schinese,
                description_override: '中文叙述',
                name_override: '中文技能名字',
            },
        ],
    });

    // Return data to compiler
    return localization_info;
}
