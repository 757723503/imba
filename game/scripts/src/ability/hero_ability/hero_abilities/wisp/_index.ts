import './imba_wisp_overcharge';
import './imba_wisp_relocate';
import './imba_wisp_spirits';
import './imba_wisp_tether';

declare global {
    const enum HeroAbility {
        /** 过载 */
        imba_wisp_overcharge = 'imba_wisp_overcharge',
        /** 重定位*/
        wisp_relocate = 'wisp_relocate',
        /** 幽魂 */
        imba_wisp_spirits = 'imba_wisp_spirits',
        /** 联结 */
        imba_wisp_tether = 'imba_wisp_tether',
    }
}
