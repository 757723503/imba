const fs = require('fs');
const path = require('path');

// 读取txt文件并解析为键值对对象
function parseTxtFile(filePath) {
    const data = fs.readFileSync(filePath, 'utf-8');  
    const lines = data.split('\n');
    const result = {};

    lines.forEach(line => {
        const match = line.match(/"([^"]+)"\s+"([^"]+)"/);
        if (match && match.length === 3) {
            const key = match[1].toLowerCase(); // 转换键为小写
            const value = match[2].trim();
            result[key] = value;
        }
    });

    return result;
}

function handleSpecialKeywords(text) {
    // 1. 临时替换 %特殊值%%% 为占位符
    let tempText = text.replace(/%([^%]+)%{3}(?!%)/g, (match, p1) => {
        return `{TEMP1}`;
    });
    
    // 2. 处理 %特殊值% -> {特殊值}
    tempText = tempText.replace(/%([^%]+)%/g, (match, p1) => {
        return `{${p1}}`;
    });
    
    // 3. 将占位符替换为 {特殊值}%
    let finalText = tempText.replace(/{TEMP1}/g, (match) => {
        // 找到对应的特殊值
        let specialValue = text.match(/%([^%]+)%{3}(?!%)/);
        if (specialValue) {
            return `{${specialValue[1]}}%`;
        }
        return match;  // 如果没有找到，则保持占位符
    });
    
    // 4. 保留单个 % 不变
    finalText = finalText.replace(/%(?![^%]*%)/g, (match) => {
        return match;
    });
    
    return finalText;
}



// 处理 AbilityArray 中的特殊关键词
function handleAbilitySpecialKeywords(text) {
    return handleSpecialKeywords(text);
}

// 处理 ModifierArray 中的特殊关键词
function handleModifierSpecialKeywords(text) {
    // 先处理特殊关键词
    const processedText = handleSpecialKeywords(text);
    // 处理特殊值中的 d 或 f 问题
    return processedText.replace(/{([df][a-zA-Z0-9_]+)}/g, (match, p1) => {
        // 移除第一个字母 d 或 f
        const newKey = p1.slice(1);
        return `{${newKey}}`;
    });
}







// 更新.ts文件内容
function updateTsFile(tsFilePath, localizationData) {
    let fileContent = fs.readFileSync(tsFilePath, 'utf-8');

    // 提取原始的data对象内容
    const dataMatch = fileContent.match(/(export\s+const\s+data\s*:\s*LocalizationData\s*=\s*)({[\s\S]*?})(;)/);

    if (!dataMatch) {
        console.error(`未找到数据对象: ${tsFilePath}`);
        return;
    }
    const ability_facet = []
    const talent_facet = []
    const dataObject = eval('(' + dataMatch[2] + ')');

    // 处理 AbilityArray
    dataObject.AbilityArray.forEach(ability => {
        const all_data = [];
        Object.keys(localizationData).forEach(key => {
            // 查找所有关于技能的数据
            if (key.includes(ability.ability_classname.replace('imba_', '').toLowerCase()) && key.includes('dota_tooltip_ability_')) {
                all_data.push(key);
            }
        });

        const baseKey = `dota_tooltip_ability_${ability.ability_classname.replace('imba_', '').toLowerCase()}`;

        // 处理技能的字段，只更新那些有值的字段
        if (localizationData[baseKey] && localizationData[baseKey] !== '') {
            ability.name = handleAbilitySpecialKeywords(localizationData[baseKey]);
        } else {
            delete ability.name; // 如果没有值或值为空字符串，则删除此字段
        }

        if (localizationData[`${baseKey}_description`] && localizationData[`${baseKey}_description`] !== '') {
            ability.description = handleAbilitySpecialKeywords(localizationData[`${baseKey}_description`]);
        } else {
            delete ability.description; // 如果没有值或值为空字符串，则删除此字段
        }

        if (localizationData[`${baseKey}_lore`] && localizationData[`${baseKey}_lore`] !== '') {
            ability.lore = handleAbilitySpecialKeywords(localizationData[`${baseKey}_lore`]);
        } else {
            delete ability.lore; // 如果没有值或值为空字符串，则删除此字段
        }

        if (localizationData[`${baseKey}_shard_description`] && localizationData[`${baseKey}_shard_description`] !== '') {
            ability.shard_description = handleAbilitySpecialKeywords(localizationData[`${baseKey}_shard_description`]);
        } else {
            delete ability.shard_description; // 如果没有值或值为空字符串，则删除此字段
        }

        if (localizationData[`${baseKey}_scepter_description`] && localizationData[`${baseKey}_scepter_description`] !== '') {
            ability.scepter_description = handleAbilitySpecialKeywords(localizationData[`${baseKey}_scepter_description`]);
        } else {
            delete ability.scepter_description; // 如果没有值或值为空字符串，则删除此字段
        }

        // 处理技能的备注
        ability.notes = [];
        let noteIndex = 0;
        while (localizationData[`${baseKey}_note${noteIndex}`]) {
            if (localizationData[`${baseKey}_note${noteIndex}`] !== '') {
                ability.notes.push(handleAbilitySpecialKeywords(localizationData[`${baseKey}_note${noteIndex}`]));
            }
            noteIndex++;
        }

        // 处理技能的特殊效果和面板描述
        const ability_facet_in = [];
        all_data.forEach(key => {
            const specialKey = key;
            if (!specialKey.includes('_facet')) {
                ability.ability_specials.forEach(special => {
                    const specialKey = `${baseKey}_${special.ability_special.toLowerCase()}`;
                    if (specialKey === key) {
                        if (localizationData[specialKey] && localizationData[specialKey] !== '') {
                            special.text = handleAbilitySpecialKeywords(localizationData[specialKey]);
                        } else {
                            special.text = ''; // 如果没有值或值为空字符串，则将文本设为空
                        }
                    }
                });
            } else {
                if (ability_facet_in.includes(ability.ability_classname)) return;
                if (localizationData[key] && localizationData[key] !== '') {
                    ability_facet.push({
                        ability_classname: `${ability.ability_classname}`,
                        description: handleAbilitySpecialKeywords(localizationData[key])
                    });
                    ability_facet_in.push(ability.ability_classname);
                }
            }
        });
        ability.ability_specials = ability.ability_specials.filter(special => {
            // console.log(special.text)
            return special.text != '';
        });
         
    });


    // 处理 TalentArray
    dataObject.TalentArray.forEach(talentGroup => {
        talentGroup.talents.forEach(talent => {
            const baseKey = `dota_tooltip_ability_${talent.talent_classname.replace('imba_', '').toLowerCase()}`;

            talent.name = localizationData[baseKey] ? handleAbilitySpecialKeywords(localizationData[baseKey]) : (talent.name || '');
            // console.log(localizationData[baseKey])
            if (localizationData[`${baseKey}_description`]) {
                talent.description = handleAbilitySpecialKeywords(localizationData[`${baseKey}_description`]);
            }
            if (localizationData[`${baseKey}_lore`]) {
                talent.lore = handleAbilitySpecialKeywords(localizationData[`${baseKey}_lore`]);
            }
        });
    });

    const heroName = path.basename(tsFilePath, '.ts').toLowerCase();
    const orheroName = heroName.replace('_', '');
    const oorheroName = orheroName.replace('_', '');

    // 处理 ModifierArray
    const modifierKeyPrefix = `dota_tooltip_modifier_${heroName}` ?? `dota_tooltip_modifier_${orheroName}` ?? `dota_tooltip_modifier_${oorheroName}`;
    const modifiers = [];
    Object.keys(localizationData).forEach(key => {
        if (key.startsWith(modifierKeyPrefix)) {
            const isDescription = key.endsWith('_description');
            const baseKey = key.replace('_description', '');
            const modifierClassName = baseKey.replace(modifierKeyPrefix, '').replace(/^[^_]+_/, ''); // 去掉前缀

            if (key === baseKey || !isDescription) {
                const modifier = {
                    modifier_classname: `modifier_imba_${heroName}${modifierClassName}` ?? `modifier_imba_${orheroName}${modifierClassName}` ?? `modifier_imba_${oorheroName}${modifierClassName}`,
                    name: localizationData[key] ? handleModifierSpecialKeywords(localizationData[key]) : ''
                };

                if (localizationData[`${baseKey}_description`]) {
                    modifier.description = handleModifierSpecialKeywords(localizationData[`${baseKey}_description`]);
                }

                modifiers.push(modifier);
            }
        }
    });

    if (modifiers.length > 0) {
        dataObject.ModifierArray = modifiers;
    }

    // 处理 FacetArray_B
    const facetKeyPrefix = `dota_tooltip_facet_${heroName}` ?? `dota_tooltip_facet_${orheroName}` ?? `dota_tooltip_facet_${oorheroName}`;
    const facets = [];
    const facetNames = [];
    const facetDescriptions = [];
    Object.keys(localizationData).forEach(key => {
        if (key.includes('special_bonus_unique') && (key.includes(heroName) || key.includes(orheroName) || key.includes(oorheroName)) && key.includes('facet')) {
            talent_facet.push({talent_key: key.replace('dota_tooltip_ability_', ''), description: localizationData[key]});
        }
    });
    Object.keys(localizationData).forEach(key => {
        if (key.startsWith(facetKeyPrefix)) {
            const isDescription = key.endsWith('_description');
            const baseKey = key.replace('_description', '');
            const facetName = localizationData[key];
            const facetDescription = isDescription ? localizationData[key] : '';

            if (!isDescription) {
                facetNames.push(facetName);
            } else {
                facetDescriptions.push(facetDescription);
            }

            if (isDescription && !facetDescriptions.includes(facetDescription)) {
                facetDescriptions.push(facetDescription);
            }
        }
    });

    if (facetNames.length > 0) {
        facets.push({
            facet_classname: `${heroName}_facets_imba_1`,
            name: facetNames.join(' | '),
            description: facetDescriptions.join(' '),
            related_abilities: ability_facet,
            related_talents: talent_facet
        });
    }

    if (facets.length > 0) {
        dataObject.FacetArray_B = facets;
    }

    // 保持原始格式更新内容
    const updatedContent = fileContent.replace(dataMatch[2], JSON.stringify(dataObject, null, 4).replace(/\"([^(\")"]+)\":/g, '$1:'));

    fs.writeFileSync(tsFilePath, updatedContent, 'utf-8');
}

// 主函数
function main() {
    const txtFilePath = path.join(__dirname, 'abilities_schinese.txt');

    // 检查txt文件是否存在
    if (!fs.existsSync(txtFilePath)) {
        console.error('找不到abilities_schinese.txt文件');
        return;
    }

    const localizationData = parseTxtFile(txtFilePath);

    // 获取目录中的所有.ts文件
    const directoryPath = __dirname;
    const tsFiles = fs.readdirSync(directoryPath).filter(file => file.endsWith('.ts'));

    // 遍历每个.ts文件并更新
    tsFiles.forEach(tsFile => {
        const tsFilePath = path.join(directoryPath, tsFile);
        updateTsFile(tsFilePath, localizationData);
    });
}

main();
