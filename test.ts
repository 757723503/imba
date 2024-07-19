// import { loadLocalizationData } from './gulpfile';
import { LocalizationCompiler } from './@liu/localizationCompiler';
// 使用JSON.stringify来格式化打印对象，第三个参数控制缩进
const compiler = new LocalizationCompiler();
const data = compiler.loadLocalizationData('../game/resource/localization');
console.log(JSON.stringify(data, null, 2));
