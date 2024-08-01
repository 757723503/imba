const fs = require('fs');
const path = require('path');

// 读取文件内容
const filePath = path.join(__dirname, 'npc_heroes.txt');
const fileContent = fs.readFileSync(filePath, 'utf-8');

// 分割为行
const lines = fileContent.split('\n');
const result = [];
let insideFacets = false;
let braceCount = 0;
let facetsStart = false;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // 检测到 "Facets"
    if (line === '"Facets"') {
        insideFacets = true;
        braceCount = 0;
        result.push(lines[i]); // 保留 "Facets" 行
        continue;
    }

    if (insideFacets) {
        if (line === '{' && !facetsStart) {
            facetsStart = true;
            braceCount++;
            result.push(lines[i]); // 保留第一个 '{'
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
                result.push(lines[i]); // 保留最后一个 '}'
                continue;
            }
            // 清空 "Facets" 内的内容
            result.push('');
        }
    } else {
        result.push(lines[i]);
    }
}

// 合并结果并写入新的文件
const cleanedContent = result.join('\n');
const outputFilePath = path.join(__dirname, 'npc_heroes_cleaned.txt');
fs.writeFileSync(outputFilePath, cleanedContent, 'utf-8');

console.log('新的文件已生成：', outputFilePath);
