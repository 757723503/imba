import './imba_techies_land_mines';
import './imba_techies_remote_mines';
import './imba_techies_stasis_trap';
import './imba_techies_suicide';

declare global {
    const enum HeroAbility {
        /** 埋布地雷 */
        imba_techies_land_mines = 'imba_techies_land_mines',
        /** 遥控炸弹 */
        imba_techies_remote_mines = 'imba_techies_remote_mines',
        /** 麻痹陷阱 */
        imba_techies_stasis_trap = 'imba_techies_stasis_trap',
        /** 自杀攻击 */
        imba_techies_suicide = 'imba_techies_suicide',
    }
}
