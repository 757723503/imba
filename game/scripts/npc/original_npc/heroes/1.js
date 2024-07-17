const fs = require('fs');
const path = require('path');

// 读取脚本所在目录中的文件
const directoryPath = __dirname; // 使用脚本同级目录

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }

    // 过滤出以 npc_dota 开头的文件
    const npcFiles = files.filter(file => file.startsWith('npc_dota'));

    npcFiles.forEach(file => {
        const filePath = path.join(directoryPath, file);
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                return console.log('Unable to read file: ' + err);
            }

            // 替换技能类的文字
            const result = data.replace(/"special_bonus_([\w_]+)"/g, (match, p1) => {
                if (match.includes('unique')) {
                    return `"AbilityType": "DOTA_ABILITY_TYPE_ATTRIBUTES",\n"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",\n"BaseClass": "special_bonus_base"`;
                } else {
                    return `"AbilityType": "DOTA_ABILITY_TYPE_ATTRIBUTES",\n"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE"`;
                }
            });

            // 将替换后的内容写回文件
            fs.writeFile(filePath, result, 'utf8', err => {
                if (err) return console.log('Unable to write file: ' + err);
                console.log(`File ${filePath} has been saved with new content.`);
            });
        });
    });
});
