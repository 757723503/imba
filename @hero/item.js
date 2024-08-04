function jsonItemToKv(jsonData, indentLevel = 1, isRoot = true, heroName, rootname) {
    let kvLines = [];
    const indentStr = '\t'.repeat(indentLevel);
    let root_name = rootname;
    for (const key in jsonData) {
        const value = jsonData[key];
        let newKey = key;
        // 排除 "Version" 这个 key 的处理
        if (key === 'Version') {
            kvLines.push(`${indentStr}"${key}"\t\t"${value}"`);
            continue;
        }

        if (isRoot) {
            if (key.startsWith('item_')) {
                newKey = key.replace('item_', 'item_imba_');
            }
            root_name = key;
            // console.log('root_name',root_name)
        } else {
            if (key.startsWith('AbilityBehavior') && !root_name.startsWith('special_bonus_unique')) {
                // 插入三条新的数据
                kvLines.push(`${indentStr}"BaseClass"\t\t"ability_lua"`);
                // abaddon/imba_abaddon_death_coil
                kvLines.push(`${indentStr}"ScriptFile"\t\t"ability/hero_ability/${heroName}/imba_${root_name}"`);
                kvLines.push(`${indentStr}"AbilityTextureName"\t\t"${root_name}"`);
                // console.log('root_name', root_name);
            }
            // console.log('indentLevel', indentLevel, key);
        }

        if (typeof value === 'object' && !Array.isArray(value)) {
            kvLines.push(`${indentStr}"${newKey}"`);
            kvLines.push(`${indentStr}{`);
            kvLines = kvLines.concat(jsonItemToKv(value, indentLevel + 1, false, heroName, root_name));
            kvLines.push(`${indentStr}}`);
        } else if (Array.isArray(value)) {
            kvLines.push(`${indentStr}"${newKey}"\t\t"${value.join(' | ')}"`);
        } else {
            kvLines.push(`${indentStr}"${newKey}"\t\t"${value}"`);
        }
    }
    return kvLines;
}

function convertJsonFilesToKv(inputDirectory) {
    fs.readdir(inputDirectory, (err, files) => {
        if (err) throw err;

        files.forEach(file => {
            if (path.extname(file) === '.json') {
                const jsonFilePath = path.join(inputDirectory, file);
                const kvFilePath = path.join(inputDirectory, path.basename(file, '.json') + '.txt');
                const heroName = path.basename(file, path.extname(file)).replace('npc_dota_hero_', '');
                fs.readFile(jsonFilePath, 'utf8', (err, data) => {
                    if (err) throw err;
                    const jsonData = JSON.parse(data);
                    let kvLines = [];
                    kvLines.push('"DOTAAbilities"');
                    kvLines.push('{');
                    kvLines = kvLines.concat(jsonItemToKv(jsonData, 1, true, heroName));
                    kvLines.push('}');

                    fs.writeFile(kvFilePath, kvLines.join('\n'), 'utf8', err => {
                        if (err) throw err;
                        // console.log(`Converted ${jsonFilePath} to ${kvFilePath}`);
                    });
                });
            }
        });
    });
}

const inputDirectory = path.resolve('.'); // Assuming the script is in the same directory as the JSON files
convertJsonFilesToKv(inputDirectory);
