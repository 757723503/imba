import './imba_bane_enfeeble';
import './imba_bane_brain_sap';
import './imba_bane_nightmare';
import './imba_bane_nightmare_end';
import './imba_bane_fiends_grip';

declare global {
    const enum HeroAbility {
        /** 虚弱 */
        imba_bane_enfeeble = 'imba_bane_enfeeble',
        /** 蚀脑*/
        bane_brain_sap = 'bane_brain_sap',
        /** 噩梦 */
        imba_bane_nightmare = 'imba_bane_nightmare',
        /** 噩梦终止 */
        imba_bane_nightmare_end = 'imba_bane_nightmare_end',
        /** 魔爪*/
        bane_fiends_grip = 'bane_fiends_grip',
    }
}
