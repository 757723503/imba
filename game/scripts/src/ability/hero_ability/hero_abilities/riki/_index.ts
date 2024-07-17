import './imba_riki_backstab';
import './imba_riki_blink_strike';
import './imba_riki_permanent_invisibility';
import './imba_riki_smoke_screen';

declare global {
    const enum HeroAbility {
        /** 背刺 */
        imba_riki_backstab = 'imba_riki_backstab',
        /** 闪烁突袭 */
        imba_riki_blink_strike = 'imba_riki_blink_strike',
        /** 永久隐身 */
        imba_riki_permanent_invisibility = 'imba_riki_permanent_invisibility',
        /** 烟幕 */
        imba_riki_smoke_screen = 'imba_riki_smoke_screen',
    }
}
