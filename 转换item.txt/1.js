const fs = require('fs');
const path = require('path');

// 解析文本文件的通用函数
function parseTextFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.replace(/\t+/g, '').split('\n');
    let result = {};
    let currentKey = null;
    let currentObject = result;
    let stack = [];

    lines.forEach(line => {
        line = line.trim();
        if (line === '{') {
            // 开始新的对象
            const newObject = {};
            if (currentKey !== null) {
                // 检查父对象中是否已有同名的 key
                if (currentObject.hasOwnProperty(currentKey)) {
                    let count = 1;
                    let newKey = `${currentKey}_${count}`;
                    while (currentObject.hasOwnProperty(newKey)) {
                        count++;
                        newKey = `${currentKey}_${count}`;
                    }
                    currentKey = newKey;  // 使用新的 key
                }

                currentObject[currentKey] = newObject;
                stack.push(currentObject);
                currentObject = newObject;
            }
            currentKey = null;
        } else if (line === '}') {
            // 结束当前对象
            currentObject = stack.pop();
        } else if (line) {
            // 解析键值对
            const parts = line.match(/"([^"]+)"\s*"([^"]+)"/);
            if (parts) {
                let key = parts[1];
                const value = parts[2];

                // 检查当前对象是否已有同名的 key
                if (currentObject.hasOwnProperty(key)) {
                    let count = 1;
                    let newKey = `${key}_${count}`;
                    while (currentObject.hasOwnProperty(newKey)) {
                        count++;
                        newKey = `${key}_${count}`;
                    }
                    key = newKey;  // 使用新的 key
                }

                currentObject[key] = value;
            } else {
                // 处理只有键的情况（即下一级对象的 key）
                currentKey = line.replace(/"/g, '');
            }
        }
    });

    return result;
}

// 处理 item.txt 文件
const itemFilePath = path.join(__dirname, 'item.txt');
const itemData = parseTextFile(itemFilePath);
const itemOutputPath = path.join(__dirname, 'items_intermediate.js');
const itemOutputContent = 'const items = ' + JSON.stringify(itemData, null, 4) + ';\nmodule.exports = { items };';
fs.writeFileSync(itemOutputPath, itemOutputContent, 'utf-8');

// 处理 asset_modifier.txt 文件
const assetModifierFilePath = path.join(__dirname, 'asset_modifier.txt');
const assetModifierData = parseTextFile(assetModifierFilePath);
const assetModifierOutputPath = path.join(__dirname, 'asset_modifiers.js');
const assetModifierOutputContent = 'const assetModifiers = ' + JSON.stringify(assetModifierData, null, 4) + ';\nmodule.exports = { assetModifiers };';
fs.writeFileSync(assetModifierOutputPath, assetModifierOutputContent, 'utf-8');

console.log('Item data has been successfully converted to items_intermediate.js');
console.log('Asset Modifier data has been successfully converted to asset_modifiers.js');
