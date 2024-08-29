const fs = require('fs');
const path = require('path');

// 读取 final_filtered_items.js 文件内容
const finalFilteredItems = require('./final_filtered_items.js').items;

const heroItems = {};

// 遍历所有对象
for (const key in finalFilteredItems) {
    if (finalFilteredItems.hasOwnProperty(key)) {
        const item = finalFilteredItems[key];
        const usedByHeroes = item['used_by_heroes'];

        if (usedByHeroes) {
            for (const heroKey in usedByHeroes) {
                if (usedByHeroes.hasOwnProperty(heroKey)) {
                    if (!heroItems[heroKey]) {
                        heroItems[heroKey] = {};
                    }
                    // 将该 item 添加到对应英雄的表中
                    heroItems[heroKey][key] = item;
                }
            }
        }
    }
}

// 将最终分类后的结果保存到一个新的 JS 文件中
const outputPath = path.join(__dirname, 'hero_items.js');
const outputContent = 'const heroItems = ' + JSON.stringify(heroItems, null, 4) + ';';
fs.writeFileSync(outputPath, outputContent, 'utf-8');

console.log('Hero items data has been successfully saved to hero_items.js');
