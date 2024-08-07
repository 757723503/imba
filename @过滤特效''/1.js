const fs = require('fs');
const path = require('path');

// 读取文件内容
const filePath = path.join(__dirname, 'test.log');
const fileContent = fs.readFileSync(filePath, 'utf-8');

// 指定要匹配的字符串和逻辑规则
const rule = 'Creating';

// 指定要排除的字符串
const excludeStrings = [
    'ui_mouseactions',
    'particles/ui_mouseactions/clicked_unit_select.vpcf',
    'particles/ui_mouseactions/selected_ring_hit.vpcf',
    'particles/msg_fx/msg_block.vpcf',
    'particles/generic_gameplay/generic_hit_blood.vpcf',
    'particles/msg_fx/msg_damage_numbers_outgoing.vpcf',
    'particles/generic_gameplay/damage_flash.vpcf',
    'particles/ui_mouseactions/clicked_occlusion_basemove.vpcf',
    'particles/ui_mouseactions/select_unit.vpcf',
    'particles/ui_mouseactions/selected_ring.vpcf',
    'particles/generic_hero_status/hero_levelup.vpcf',
    'particles/ui/hud/aghs_status_active_scepter.vpcf',
    'particles/ui/hud/aghs_status_active_shard.vpcf',
    'particles/prime/hero_spawn_hero_level_1.vpcf',
    'particles/items4_fx/scepter_aura.vpcf',
    'particles/generic_gameplay/lasthit_coins.vpcf',
    'particles/msg_fx/msg_gold.vpcf',
    'particles/msg_fx/msg_death.vpcf',
    'particles/generic_hero_status/hero_bloodpool.vpcf',
    'particles/msg_fx/msg_damage_numbers_incoming.vpcf',
    'particles/ui/topbar/topbar_ambient_cheese.vpcf',
    'particles/ui/topabar/aegis_bg.vpcf',
    'particles/ui/topbar/topbar_ambient_smoke_of_deceit.vpcf',
    'particles/ui/topbar/topbar_ambient_smoke_of_deceit_bottle.vpcf',
];

// 按行分割文件内容
const lines = fileContent.split('\n');

// 解析规则并过滤行
const filteredLines = lines.filter(line => {
    return evaluateRule(rule, line) && !containsExcludeStrings(excludeStrings, line);
});

// 规范化输出行
const standardizedLines = filteredLines.map(line => {
    return standardizeLine(line);
});

// 排除重复的行
const uniqueLines = [...new Set(standardizedLines)];

// 将结果写回文件
const result = uniqueLines.join('\n');
fs.writeFileSync(filePath, result, 'utf-8');

console.log('过滤和去重完成，结果已写回文件。');

// 解析并评估规则
function evaluateRule(rule, line) {
    const tokens = rule.split(' ');
    const stack = [];

    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];
        if (token === '&&' || token === 'and') {
            const operand1 = stack.pop();
            const operand2 = line.includes(tokens[++i]);
            stack.push(operand1 && operand2);
        } else if (token === '||' || token === 'or') {
            const operand1 = stack.pop();
            const operand2 = line.includes(tokens[++i]);
            stack.push(operand1 || operand2);
        } else if (token === '!' || token === 'not') {
            const operand = line.includes(tokens[++i]);
            stack.push(!operand);
        } else {
            stack.push(line.includes(token));
        }
    }

    return stack.length > 0 ? stack[0] : false;
}

// 检查是否包含排除字符串
function containsExcludeStrings(excludeStrings, line) {
    return excludeStrings.some(str => line.includes(str));
}

// 规范化输出行
function standardizeLine(line) {
    // 移除固定格式字符串
    const standardizedLine = line.replace('[Particles] Creating collection: ', '');
    // 给输出的字符串加上单引号
    return `'${standardizedLine.trim()}'`;
}
