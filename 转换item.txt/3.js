const fs = require('fs');
const path = require('path');

// 读取 filtered_items.js 文件内容
const filteredItems = require('./filtered_items.js').items;

const finalFilteredItems = {};

// 指定要保留的键
const keysToKeep = ["name", "prefab", "item_name", "item_slot", "model_player", "used_by_heroes", "visuals"];

// 遍历所有对象
for (const key in filteredItems) {
    if (filteredItems.hasOwnProperty(key)) {
        const item = filteredItems[key];
        const visuals = item['visuals'];

        if (visuals) {
            // 检查 visuals 中是否有 type 为 "ability_icon" 的项
            let hasAbilityIcon = false;

            for (const visualKey in visuals) {
                if (visuals.hasOwnProperty(visualKey)) {
                    const visualItem = visuals[visualKey];
                    if (typeof visualItem === 'object' && visualItem['type'] === 'ability_icon') {
                        hasAbilityIcon = true;
                        break;
                    }
                }
            }

            // 如果找到了 "ability_icon" 类型，则保留该对象
            if (hasAbilityIcon) {
                // 创建一个新的对象，仅保留指定的键
                const filteredItem = {};
                keysToKeep.forEach(keyToKeep => {
                    if (item.hasOwnProperty(keyToKeep)) {
                        filteredItem[keyToKeep] = item[keyToKeep];
                    }
                });

                finalFilteredItems[key] = filteredItem;
            }
        }
    }
}

// 将最终过滤后的结果保存到一个新的 JS 文件中
const finalOutputPath = path.join(__dirname, 'final_filtered_items.js');
const finalOutputContent = 'const items = ' + JSON.stringify(finalFilteredItems, null, 4) + ';\nmodule.exports = { items };';
fs.writeFileSync(finalOutputPath, finalOutputContent, 'utf-8');

console.log('Final filtered item data has been successfully saved to final_filtered_items.js');
