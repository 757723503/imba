import './imba_viper_corrosive_skin';
import './imba_viper_nethertoxin';
import './imba_viper_poison_attack';
import './imba_viper_viper_strike';

declare global {
    const enum HeroAbility {
        /** 腐蚀外表 */
        imba_viper_corrosive_skin = 'imba_viper_corrosive_skin',
        /** 幽冥剧毒 */
        imba_viper_nethertoxin = 'imba_viper_nethertoxin',
        /** 毒性攻击*/
        viper_poison_attack = 'viper_poison_attack',
        /** 蝮蛇突袭 */
        imba_viper_viper_strike = 'imba_viper_viper_strike',
    }
}
