const fs = require('fs');
const path = require('path');

// 读取原始文件内容
const originalFilePath = path.join(__dirname, 'npc_heroes.txt');
const originalFileContent = fs.readFileSync(originalFilePath, 'utf-8');

// 分割为行
const lines = originalFileContent.split('\n');
const cleanedResult = [];
let insideFacets = false;
let braceCount = 0;
let facetsStart = false;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // 检测到 "Facets"
    if (line === '"Facets"') {
        insideFacets = true;
        braceCount = 0;
        cleanedResult.push(lines[i]); // 保留 "Facets" 行
        continue;
    }

    if (insideFacets) {
        if (line === '{' && !facetsStart) {
            facetsStart = true;
            braceCount++;
            cleanedResult.push(lines[i]); // 保留第一个 '{'
            continue;
        } else if (facetsStart) {
            if (line === '{') {
                braceCount++;
            }
            if (line === '}') {
                braceCount--;
            }
            if (braceCount === 0) {
                insideFacets = false;
                facetsStart = false;
                cleanedResult.push(lines[i]); // 保留最后一个 '}'
                continue;
            }
            // 清空 "Facets" 内的内容
            cleanedResult.push('');
        }
    } else {
        cleanedResult.push(lines[i]);
    }
}

// 合并结果并写入清理后的文件
const cleanedContent = cleanedResult.join('\n');
const cleanedFilePath = path.join(__dirname, 'npc_heroes_cleaned.txt');
fs.writeFileSync(cleanedFilePath, cleanedContent, 'utf-8');

console.log('清理后的文件已生成：', cleanedFilePath);

// 读取清理后的文件内容
const cleanedFileContent = fs.readFileSync(cleanedFilePath, 'utf-8');

// 分割为行
const cleanedLines = cleanedFileContent.split('\n');
const customResult = [];

// 添加 "DOTAHeroes" 和 "Version" 到 result
customResult.push('"DOTAHeroes"');
customResult.push('{');
customResult.push('    "Version"    "1"');

let insideNpcDotaHero = false;
let insideAbilityDraft = false;
let abilityLines = [];

for (let i = 0; i < cleanedLines.length; i++) {
    let line = cleanedLines[i].trim();

    // 检测到 "npc_dota_hero" 开始处理
    if (line.startsWith('"npc_dota_hero') && !line.includes('npc_dota_hero_base') && !line.includes('npc_dota_hero_target_dummy')) {
        insideNpcDotaHero = true;
        braceCount = 0;
        customResult.push(cleanedLines[i]); // 保留 "npc_dota_hero" 行
        continue;
    }

    if (insideNpcDotaHero) {
        if (line === '{') {
            braceCount++;
            if (braceCount === 1) {
                customResult.push(cleanedLines[i]);
            }
            continue;
        }

        if (line === '}') {
            braceCount--;
            if (braceCount === 0) {
                insideNpcDotaHero = false;
                customResult.push(...abilityLines);
                customResult.push(cleanedLines[i]);
                abilityLines = [];
                continue;
            }
        }

        if (line.startsWith('"AbilityDraftAbilities"')) {
            insideAbilityDraft = true;
            continue;
        }

        if (insideAbilityDraft) {
            if (line === '}') {
                insideAbilityDraft = false;
            }
            continue;
        }

        if (/^"Ability\d+"\s+".*"$/.test(line)) {
            const parts = line.split(/\s+/);
            let abilityName = parts[1].replace(/"/g, '');
            if (abilityName === '') {
                continue;
            }
            if (abilityName.includes('special_bonus_unique')) {
                abilityName = abilityName.replace('special_bonus_unique', 'special_bonus_unique_imba');
            } else {
                abilityName = 'imba_' + abilityName;
            }
            line = '      ' + parts[0] + '    "' + abilityName + '"';
            abilityLines.push(line);
            continue;
        }

        if (line === '"Facets"') {
            insideFacets = true;
            customResult.push('      "Facets" {}'); // 保留 "Facets" 行
            continue;
        }
    }
}

customResult.push('}'); // 关闭 "DOTAHeroes"

// 合并结果并写入自定义文件
const customContent = customResult.join('\n');
const customFilePath = path.join(__dirname, 'npc_heroes_custom.txt');
fs.writeFileSync(customFilePath, customContent, 'utf-8');

console.log('自定义文件已生成：', customFilePath);

function jsonToKv(jsonData, indentLevel = 1, isRoot = true, heroName, rootname) {
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
            // 将包含 "special_bonus_unique" 的 key 值改为 "special_bonus_unique_imba"
            if (key.startsWith('special_bonus_unique')) {
                newKey = key.replace('special_bonus_unique', 'special_bonus_unique_imba');
            } else {
                // 其余的 key 值加上 "imba_" 前缀
                newKey = 'imba_' + key;
            }
            root_name = key;
            // console.log('root_name',root_name)
        } else {
            if (key.startsWith('special_bonus_unique')) {
                newKey = key.replace('special_bonus_unique', 'special_bonus_unique_imba');
            }
            //更改天赋
            if (key.startsWith('special_bonus_facet')) {
                newKey = 'special_bonus_facet_' + heroName + '_facets_imba_1';
            }
            if (key.startsWith('AbilityBehavior') && !root_name.startsWith('special_bonus_unique')) {
                // 插入三条新的数据
                kvLines.push(`${indentStr}"BaseClass"\t\t"ability_lua"`);
                // abaddon/imba_abaddon_death_coil
                kvLines.push(`${indentStr}"ScriptFile"\t\t"ability/hero_ability/${heroName}/imba_${root_name}"`);
                kvLines.push(`${indentStr}"AbilityTextureName"\t\t"${root_name}"`);
                console.log('root_name', root_name);
            }
        }

        if (typeof value === 'object' && !Array.isArray(value)) {
            kvLines.push(`${indentStr}"${newKey}"`);
            kvLines.push(`${indentStr}{`);
            kvLines = kvLines.concat(jsonToKv(value, indentLevel + 1, false, heroName, root_name));
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
                    kvLines = kvLines.concat(jsonToKv(jsonData, 1, true, heroName));
                    kvLines.push('}');

                    fs.writeFile(kvFilePath, kvLines.join('\n'), 'utf8', err => {
                        if (err) throw err;
                        console.log(`Converted ${jsonFilePath} to ${kvFilePath}`);
                    });
                });
            }
        });
    });
}

const inputDirectory = path.resolve('./heroes'); // Assuming the script is in the same directory as the JSON files
convertJsonFilesToKv(inputDirectory);
