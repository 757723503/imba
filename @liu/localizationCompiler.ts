import * as fs from 'fs';
import * as path from 'path';
import type { KVObject } from 'valve-kv';
import { serialize } from 'valve-kv';
import type {
    LocalizationData,
    AbilityLocalization,
    ModifierLocalization,
    StandardLocalization,
    HeroTalents,
    FacetLocalization,
} from './localizationInterfaces';
import { Language } from './languages';

export class LocalizationCompiler {
    addon_filepath: string = path.join('node_modules/~resource', 'addon_');
    filepath_format: string = '.txt';
    currentWrites: Set<string> = new Set();
    writeTimeout?: NodeJS.Timeout;

    // Helper functions
    TransformForLocalization(text: string, modifier: boolean): string {
        if (modifier) {
            text = text.replace(/\{([^f]\w+)\}($|[^%])/g, '%d$1%$2');
            text = text.replace(/\{([^f]\w+)\}%/g, '%d$1%%%');
            text = text.replace(/\{f(\w+)\}($|[^%])/g, '%f$1%$2');
            text = text.replace(/\{f(\w+)\}%/g, '%f$1%%%');
            text = text.replace(/%\{([^f]\w+)\}/g, '%%%d$1%');
            text = text.replace(/%\{f(\w+)\}/g, '%%%f$1%');

            return text;
        } else {
            text = text.replace(/\{(\w*)}($|[^%])/g, '%$1%$2');
            text = text.replace(/\{(\w*)}%/g, '%$1%%%');
            text = text.replace(/%\{(\w*)}/g, '%%%$1%');

            return text;
        }
    }

    OnLocalizationDataChanged(allData: { [path: string]: LocalizationData }, outputDir: string) {
        this.addon_filepath = path.join(outputDir, 'addon_'); // 更新输出目录路径

        const Abilities: Array<AbilityLocalization> = [];
        const Modifiers: Array<ModifierLocalization> = [];
        const StandardTooltips: Array<StandardLocalization> = [];
        const Talents: Array<HeroTalents> = [];
        const Facets: Array<FacetLocalization> = [];

        const localization_info: LocalizationData = {
            AbilityArray: Abilities,
            ModifierArray: Modifiers,
            StandardArray: StandardTooltips,
            TalentArray: Talents,
            FacetArray: Facets,
        };

        for (const data of Object.values(allData)) {
            if (data.AbilityArray) Abilities.push(...data.AbilityArray);
            if (data.ModifierArray) Modifiers.push(...data.ModifierArray);
            if (data.StandardArray) StandardTooltips.push(...data.StandardArray);
            if (data.TalentArray) Talents.push(...data.TalentArray);
            if (data.FacetArray) Facets.push(...data.FacetArray);
        }

        const languages = Object.values(Language).filter(v => typeof v !== 'number');
        for (const language of languages) {
            if (language !== Language.None) {
                const tokens: KVObject = this.GenerateContentStringForLanguage(language, localization_info);
                this.WriteContentToAddonFile(language, tokens);
            }
        }
    }

    GenerateContentStringForLanguage(language: string, localized_data: LocalizationData): KVObject {
        const tokens: KVObject = {};

        // Go over standard tooltips
        if (localized_data.StandardArray) {
            for (const standardLocalization of localized_data.StandardArray) {
                // Check for name override for the language we're checking
                let standard_tooltip_string = standardLocalization.name;

                if (standardLocalization.language_overrides && standardLocalization.language_overrides.length > 0) {
                    for (const language_override of standardLocalization.language_overrides) {
                        if (language_override.language === language) {
                            standard_tooltip_string = language_override.name_override;
                        }
                    }
                }

                tokens[standardLocalization.classname] = standard_tooltip_string;
            }
        }

        // Go over abilities for this language
        if (localized_data.AbilityArray) {
            for (const ability of localized_data.AbilityArray) {
                // Class name is identical for all languages, so we would always use it
                const ability_string = `DOTA_Tooltip_Ability_${ability.ability_classname}`;

                // Name
                let ability_name = ability.name;
                let ability_description = ability.description;
                let reimagined_effects = ability.reimagined_effects;
                let ability_lore = ability.lore;
                let ability_notes = ability.notes;
                let scepter_description = ability.scepter_description;
                let shard_description = ability.shard_description;
                let ability_specials = ability.ability_specials;

                if (ability.language_overrides) {
                    for (const language_override of ability.language_overrides) {
                        if (language_override.language === language) {
                            // Check for name override
                            if (language_override.name_override) {
                                ability_name = language_override.name_override;
                            }

                            // Check for description overrides
                            if (language_override.description_override) {
                                ability_description = language_override.description_override;
                            }

                            // Check for reimagined effect overrides
                            if (language_override.reimagined_effects_override) {
                                reimagined_effects = language_override.reimagined_effects_override;
                            }

                            // Check for lore override
                            if (language_override.lore_override) {
                                ability_lore = language_override.lore_override;
                            }

                            // Check for note override
                            if (language_override.notes_override) {
                                ability_notes = language_override.notes_override;
                            }

                            // Check for scepter override
                            if (language_override.scepter_description_override) {
                                scepter_description = language_override.scepter_description_override;
                            }

                            // Check for shard override
                            if (language_override.shard_description_override) {
                                shard_description = language_override.shard_description_override;
                            }

                            // Check for ability specials override, if any
                            if (language_override.ability_specials_override) {
                                ability_specials = language_override.ability_specials_override;
                            }
                        }
                    }
                }

                // Add name localization
                if (ability_name) {
                    tokens[ability_string] = ability_name;
                }

                // Add description localization
                if (ability_description) {
                    ability_description = this.TransformForLocalization(ability_description, false);
                    tokens[`${ability_string}_description`] = ability_description;
                }

                // Lore, if any
                if (ability_lore) {
                    const transformed_lore = this.TransformForLocalization(ability_lore, false);
                    tokens[`${ability_string}_Lore`] = transformed_lore;
                }

                // Notes, if any
                if (ability_notes) {
                    let counter = 0;
                    for (const note of ability_notes) {
                        const transformed_note = this.TransformForLocalization(note, false);
                        tokens[`${ability_string}_Note${counter}`] = transformed_note;

                        counter++;
                    }
                }

                // Scepter, if any
                if (scepter_description) {
                    const ability_scepter_description = this.TransformForLocalization(scepter_description, false);
                    tokens[`${ability_string}_scepter_description`] = ability_scepter_description;
                }

                // Shard, if any
                if (shard_description) {
                    const ability_shard_description = this.TransformForLocalization(shard_description, false);
                    tokens[`${ability_string}_shard_description`] = ability_shard_description;
                }

                // Ability specials, if any
                if (ability_specials) {
                    for (const ability_special of ability_specials) {
                        // Construct the ability special
                        let ability_special_text = '';

                        if (ability_special.percentage) {
                            ability_special_text = '%';
                        } else if (ability_special.item_stat) {
                            ability_special_text = '+$';
                        }

                        ability_special_text += ability_special.text;

                        tokens[`${ability_string}_${ability_special.ability_special}`] = ability_special_text;
                    }
                }
                // Reimagined effects, if any
                if (reimagined_effects) {
                    let counter = 1;
                    for (const reimagined_effect of reimagined_effects) {
                        // Reimagined title
                        tokens[`${ability_string}_rmg_title_${counter}`] = reimagined_effect.title;
                        // Reimagined description
                        const reimagined_effect_description = this.TransformForLocalization(reimagined_effect.description, false);
                        tokens[`${ability_string}_rmg_description_${counter}`] = reimagined_effect_description;

                        counter++;
                    }
                }
            }
        }

        // Go over modifiers
        if (localized_data.ModifierArray) {
            for (const modifier of localized_data.ModifierArray) {
                const modifier_string = `DOTA_Tooltip_${modifier.modifier_classname}`;

                // Name
                let modifier_name = modifier.name;
                let modifier_description = modifier.description;

                if (modifier.language_overrides) {
                    for (const language_override of modifier.language_overrides) {
                        if (language_override.language === language) {
                            // Name overrides for a specific language, if necessary
                            if (language_override.name_override) {
                                modifier_name = language_override.name_override;
                            }

                            // Description overrides for a specific language, if necessary
                            if (language_override.description_override) {
                                modifier_description = language_override.description_override;
                            }
                        }
                    }
                }

                // Add name to localization string
                if (modifier_name) {
                    tokens[modifier_string] = modifier_name;
                }

                // Add description to localization string
                if (modifier_description) {
                    modifier_description = this.TransformForLocalization(modifier_description, true);
                    tokens[`${modifier_string}_description`] = modifier_description;
                }
            }
        }
        // Go over talents for that language
        if (localized_data.TalentArray) {
            for (const hero_talent_list of localized_data.TalentArray) {
                const talent_classname = `DOTA_Tooltip_Ability_${hero_talent_list.talent_classname}`;
                let talent_counter = 1;

                for (const talent of hero_talent_list.talents) {
                    let talent_name = talent.name;
                    let talent_description = talent.description;
                    let talent_lore = talent.lore;

                    if (talent.language_overrides) {
                        for (const language_override of talent.language_overrides) {
                            if (language_override.language === language) {
                                if (language_override.name_override) {
                                    talent_name = language_override.name_override;
                                }
                                if (language_override.description_override) {
                                    talent_description = language_override.description_override;
                                }
                                if (language_override.lore_override) {
                                    talent_lore = language_override.lore_override;
                                }
                            }
                        }
                    }

                    const talent_string = `${talent_classname}_${talent_counter}`;

                    // Talent name
                    tokens[talent_string] = talent_name;

                    // Talent description
                    talent_description = this.TransformForLocalization(talent_description, false);
                    tokens[`${talent_string}_Description`] = talent_description;

                    // Talent lore
                    if (talent_lore) {
                        talent_lore = this.TransformForLocalization(talent_lore, false);
                        tokens[`${talent_string}_Lore`] = talent_lore;
                    }

                    // Increment talent counter
                    talent_counter++;
                }
            }
        }

        // 处理 Facets
        if (localized_data.FacetArray) {
            for (const facet of localized_data.FacetArray) {
                const facet_string = `DOTA_Tooltip_Facet_${facet.facet_classname}`;
                tokens[facet_string] = facet.name;
                tokens[`${facet_string}_description`] = facet.description;
                if (facet.note0) {
                    tokens[`${facet_string}_Note0`] = facet.note0;
                }
                if (facet.related_abilities) {
                    for (const relatedAbility of facet.related_abilities) {
                        const related_ability_string = `DOTA_Tooltip_Ability_${relatedAbility.ability_classname}_${relatedAbility.facet_name}`;
                        tokens[related_ability_string] = facet.description;
                    }
                }
                if (facet.related_talents) {
                    for (const relatedTalent of facet.related_talents) {
                        const related_talent_string = `${relatedTalent.talent_key}_${relatedTalent.facet_name}`;
                        tokens[related_talent_string] = facet.description;
                    }
                }
            }
        }
        return tokens;
    }

    WriteContentToAddonFile(language: string, tokens: KVObject) {
        // Set based on language
        const filepath = this.addon_filepath + language.toString() + this.filepath_format;

        // Add the opening tokens
        const kv = { lang: { Language: language, Tokens: tokens } };

        // Serialize!
        const write_string = serialize(kv);

        // Try writing if the output is not busy
        this.TryWriting(filepath, write_string, () => {
            // Prepare the output
            this.currentWrites.add(language);
            if (this.writeTimeout) {
                clearTimeout(this.writeTimeout);
            }
            this.writeTimeout = setTimeout(() => this.FinishWrite(), 500);
        });
    }

    TryWriting(filepath: string, write_string: string, success: () => void, tries: number = 0) {
        if (tries > 5) {
            console.log('\x1b[31m%s\x1b[0m', 'Tried too many times to write without success!');
            return;
        }
        try {
            // Remove file contents, or create a fresh one if it doesn't exists yet.
            const fd = fs.openSync(filepath, 'w');
            fs.closeSync(fd);

            // Write to the file
            fs.writeFileSync(filepath, write_string);
        } catch {
            // try again after a short time
            setTimeout(() => this.TryWriting(filepath, write_string, success, tries + 1), 1000);
            return;
        }
        success();
    }

    // Print the output
    FinishWrite() {
        if (this.currentWrites.size === 0) return;
        const languages: string[] = [];
        for (const language of this.currentWrites.values()) {
            languages.push(language);
        }
        this.currentWrites.clear();
        let languageText = languages[0];
        if (languages.length > 1) {
            const lastLang = languages.splice(-1)[0];
            const otherLangs = languages.join(', ');
            if (otherLangs !== '') {
                languageText = otherLangs;
            }
            languageText += ' and ' + lastLang;
        }
        console.log(`Finished writing tooltips for ${languageText}`);
        console.log('');
    }
}
