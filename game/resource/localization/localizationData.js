"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateLocalizationData = void 0;
var languages_1 = require("../languages");
function GenerateLocalizationData() {
    // This section can be safely ignored, as it is only logic.
    //#region Localization logic
    // Arrays
    var Abilities = new Array();
    var Modifiers = new Array();
    var StandardTooltips = new Array();
    // Create object of arrays
    var localization_info = {
        AbilityArray: Abilities,
        ModifierArray: Modifiers,
        StandardArray: StandardTooltips,
    };
    //#endregion
    // Enter localization data below!
    Abilities.push({
        ability_classname: 'reimagined_abyssal_underlord_firestorm',
        name: 'Firestorm',
        description: 'Calls down waves of fire that damage enemy units in the target area, and continues to burn them for additional damage over time.',
        language_overrides: [
            {
                language: languages_1.Language.Schinese,
                description_override: '中文叙述',
                name_override: '中文技能名字',
            },
        ],
    });
    // Return data to compiler
    return localization_info;
}
exports.GenerateLocalizationData = GenerateLocalizationData;
