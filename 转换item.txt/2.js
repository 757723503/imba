const fs = require('fs');
const path = require('path');

// 需要先导入第一步生成的中间文件
const items = require('./items_intermediate.js').items.items;
const assetModifiers = require('./asset_modifiers.js').assetModifiers.asset_modifiers;

const filteredItems = {};

// 辅助函数：从复杂字符串中提取 `asset_modifier:` 后的数字
function findAssetModifierValue(value) {
    if (typeof value === 'string') {
        const match = value.match(/asset_modifier:\s*(\d+)/);
        if (match) {
            return match[1]; // 返回匹配到的数字
        }
    } else if (typeof value === 'object') {
        for (let key in value) {
            if (value.hasOwnProperty(key)) {
                const result = findAssetModifierValue(value[key]);
                if (result) {
                    return result; // 递归找到的第一个匹配结果
                }
            }
        }
    }
    return null;
}

// 遍历顶级对象进行过滤和处理
for (const key in items) {
    if (items.hasOwnProperty(key)) {
        const item = items[key];
        const hasUsedByHeroes = item['used_by_heroes'] && typeof item['used_by_heroes'] === 'object';
        
        let hasVisualsOrAttributes = false;

         if (item['static_attributes']) {
            for (const attrKey in item['static_attributes']) {
                if (item['static_attributes'].hasOwnProperty(attrKey)) {
                    const attrValue = item['static_attributes'][attrKey];
                    const assetModifierId = findAssetModifierValue(attrValue);
                    if (assetModifierId && assetModifiers[assetModifierId]) {
                        hasVisualsOrAttributes = true;

                        // 添加到 visuals 中
                        if (!item['visuals']) {
                            item['visuals'] = {};
                        }

                        const modifierData = assetModifiers[assetModifierId];
                        for (const modKey in modifierData) {
                            if (!isNaN(modKey)) { // 只处理数字键
                                let modifierKey = 'asset_modifier';
                                if (item['visuals'].hasOwnProperty(modifierKey)) {
                                    let count = 1;
                                    let newModifierKey = `${modifierKey}_${count}`;
                                    while (item['visuals'].hasOwnProperty(newModifierKey)) {
                                        count++;
                                        newModifierKey = `${modifierKey}_${count}`;
                                    }
                                    modifierKey = newModifierKey;
                                }
                                console.log(modifierData[modKey]);
                                item['visuals'][modifierKey] = modifierData[modKey];
                            }
                        }
                    }
                }
            }
        }
        if (item['visuals']) {
            hasVisualsOrAttributes = true;
        }
        // 满足条件的对象才保留
        if (hasUsedByHeroes && hasVisualsOrAttributes) {
            filteredItems[key] = item;
        }
    }
}

// 将过滤后的结果保存到一个新的 JS 文件中
const filteredOutputPath = path.join(__dirname, 'filtered_items.js');
const filteredOutputContent = 'const items = ' + JSON.stringify(filteredItems, null, 4) + ';';
fs.writeFileSync(filteredOutputPath, filteredOutputContent, 'utf-8');

console.log('Filtered item data has been successfully saved to filtered_items.js');
