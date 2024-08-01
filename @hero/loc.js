const fs = require('fs');
const path = require('path');

function processAbilityArray(jsonData) {
    const abilityArray = [];

    for (const key in jsonData) {
        if (key === 'Version') continue; // 排除 'Version' 键
        if (key.startsWith('special_bonus_unique')) continue; // 排除 special_bonus_unique 开头的键

        const value = jsonData[key];
        const rootName = 'imba_' + key; // 添加 imba_ 前缀

        const abilitySpecials = [];
        if (value.AbilityValues) {
            for (const k in value.AbilityValues) {
                abilitySpecials.push({ ability_special: k, text: '' });
            }
        }

        abilityArray.push({
            ability_classname: rootName,
            ability_specials: abilitySpecials,
        });
    }

    return abilityArray;
}

function processTalentArray(jsonData) {
    const talents = [];

    for (const key in jsonData) {
        if (key === 'Version') continue; // 排除 'Version' 键

        if (key.startsWith('special_bonus_')) {
            let newKey = key;
            if (key.startsWith('special_bonus_unique')) {
                newKey = key.replace('special_bonus_unique', 'special_bonus_unique_imba');
            }

            talents.push({
                talent_classname: newKey,
                name: '',
            });
        }
    }

    return [{ talents }];
}

function generateTsFile(jsonData, heroName) {
    const abilityArray = processAbilityArray(jsonData);
    const talentArray = processTalentArray(jsonData);

    const tsLines = [];
    tsLines.push("import type { LocalizationData } from '../../localizationInterfaces';\n");
    tsLines.push('export const data: LocalizationData = {');
    tsLines.push('  AbilityArray: [');

    abilityArray.forEach(ability => {
        tsLines.push('    {');
        tsLines.push(`      ability_classname: '${ability.ability_classname}',`);
        tsLines.push('      ability_specials: [');
        ability.ability_specials.forEach(special => {
            tsLines.push(`        { ability_special: '${special.ability_special}', text: '${special.text}' },`);
        });
        tsLines.push('      ],');
        tsLines.push('    },');
    });

    tsLines.push('  ],');
    tsLines.push('  TalentArray: [');

    talentArray.forEach(talentGroup => {
        tsLines.push('    {');
        tsLines.push('      talents: [');
        talentGroup.talents.forEach(talent => {
            tsLines.push('        {');
            tsLines.push(`          talent_classname: '${talent.talent_classname}',`);
            tsLines.push("          name: ''");
            tsLines.push('        },');
        });
        tsLines.push('      ]');
        tsLines.push('    },');
    });

    tsLines.push('  ],');
    tsLines.push('  FacetArray_B: [');

    tsLines.push('    {');
    tsLines.push(`      facet_classname: '${heroName}_facets_imba_1',`);
    tsLines.push("      name: '',");
    tsLines.push("      description: ''");
    tsLines.push('    },');

    tsLines.push('  ],');
    tsLines.push('};');

    return tsLines.join('\n');
}

function convertJsonFilesToTs(inputDirectory) {
    fs.readdir(inputDirectory, (err, files) => {
        if (err) throw err;

        const outputDirectory = path.join(inputDirectory, 'hero');
        if (!fs.existsSync(outputDirectory)) {
            fs.mkdirSync(outputDirectory);
        }

        files.forEach(file => {
            if (path.extname(file) === '.json') {
                const jsonFilePath = path.join(inputDirectory, file);
                const heroName = path.basename(file, path.extname(file)).replace('npc_dota_hero_', '');
                const tsFilePath = path.join(outputDirectory, `${heroName}.ts`);

                fs.readFile(jsonFilePath, 'utf8', (err, data) => {
                    if (err) throw err;
                    const jsonData = JSON.parse(data);
                    const tsContent = generateTsFile(jsonData, heroName);

                    fs.writeFile(tsFilePath, tsContent, 'utf8', err => {
                        if (err) throw err;
                        console.log(`Converted ${jsonFilePath} to ${tsFilePath}`);
                    });
                });
            }
        });
    });
}

const inputDirectory = path.resolve('.'); // Assuming the script is in the same directory as the JSON files
convertJsonFilesToTs(inputDirectory);
