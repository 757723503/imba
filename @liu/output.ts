import * as fs from 'fs';
import * as path from 'path';
import { LocalizationCompiler } from './localizationCompiler'; // 修改为实际路径
const localizationCompiler = new LocalizationCompiler();

// 定义输入路径和输出路径
// const inputPath = '../game/resource/localization'; // 修改为你的实际输入路径
const inputPath = './localization'; // 修改为你的实际输入路径
const outputPath = __dirname;

if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath);
}
// 加载本地化数据
const localizationData = localizationCompiler.loadLocalizationData(inputPath);
// 处理本地化数据并输出到指定目录
localizationCompiler.OnLocalizationDataChanged(localizationData, outputPath);

console.log('Localization data has been processed and output to:', outputPath);

// const ab = {
//     AbilityArray: [
//         {
//             ability_classname: 'reimagined_antimage_mana_break1',
//             name: '迷雾缠绕',
//             description: '迷雾缠绕1',
//             lore: '迷雾缠绕2',
//             notes: ['迷雾缠绕3'],
//             reimagined_effects: [
//                 {
//                     title: '迷雾缠绕4',
//                     description: '迷雾缠绕5',
//                 },
//                 {
//                     title: '迷雾缠绕4',
//                     description: '迷雾缠绕5',
//                 },
//             ],
//             ability_specials: [
//                 {
//                     ability_special: 'mana_per_hit',
//                     text: '迷雾缠绕6',
//                 },
//                 {
//                     ability_special: 'mana_per_hit_pct',
//                     text: '迷雾缠绕8',
//                     percentage: true,
//                 },
//             ],
//         },
//         {
//             ability_classname: 'axe_mana_break',
//             name: '螺旋反击',
//             description: '螺旋反击1',
//             lore: '螺旋反击2',
//             notes: ['螺旋反击3'],
//             reimagined_effects: [
//                 {
//                     title: '螺旋反击4',
//                     description: '螺旋反击5',
//                 },
//                 {
//                     title: '螺旋反击4',
//                     description: '螺旋反击5',
//                 },
//             ],
//             ability_specials: [
//                 {
//                     ability_special: 'mana_per_hit',
//                     text: '螺旋反击6',
//                 },
//                 {
//                     ability_special: 'mana_per_hit_pct',
//                     text: '螺旋反击7',
//                     percentage: true,
//                 },
//             ],
//         },
//     ],
//     ModifierArray: [],
//     StandardArray: [],
//     TalentArray: [],
//     FacetArray: [],
// };
