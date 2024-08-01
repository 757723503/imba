const fs = require('fs');
const path = require('path');

// 读取文件内容
const filePath = path.join(__dirname, 'npc_heroes_cleaned.txt');
const fileContent = fs.readFileSync(filePath, 'utf-8');

// 分割为行
const lines = fileContent.split('\n');
const result = [];

// 添加 "DOTAHeroes" 和 "Version" 到 result
result.push('"DOTAHeroes"');
result.push('{');
result.push('    "Version"    "1"');

let insideNpcDotaHero = false;
let insideAbilityDraft = false;
let insideFacets = false;
let braceCount = 0;
let abilityLines = [];

for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();

    // 检测到 "npc_dota_hero" 开始处理
    if (line.startsWith('"npc_dota_hero') && !line.includes('npc_dota_hero_base') && !line.includes('npc_dota_hero_target_dummy')) {
        insideNpcDotaHero = true;
        braceCount = 0;
        result.push(lines[i]); // 保留 "npc_dota_hero" 行
        continue;
    }

    if (insideNpcDotaHero) {
        if (line === '{') {
            braceCount++;
            if (braceCount === 1) {
                result.push(lines[i]);
            }
            continue;
        }

        if (line === '}') {
            braceCount--;
            if (braceCount === 0) {
                insideNpcDotaHero = false;
                result.push(...abilityLines);
                result.push(lines[i]);
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
            result.push('      "Facets" {}'); // 保留 "Facets" 行
            continue;
        }
    }
}

result.push('}'); // 关闭 "DOTAHeroes"

// 合并结果并写入新的文件
const customContent = result.join('\n');
const customFilePath = path.join(__dirname, 'npc_heroes_custom.txt');
fs.writeFileSync(customFilePath, customContent, 'utf-8');

console.log('自定义文件已生成：', customFilePath);
