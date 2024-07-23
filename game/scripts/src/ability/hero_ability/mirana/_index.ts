import './imba_mirana_arrow';
import './imba_mirana_invis';
import './imba_mirana_leap';
import './imba_mirana_starfall';

declare global {
    const enum HeroAbility {
        /** 月神之箭 */
        imba_mirana_arrow = 'imba_mirana_arrow',
        /** 月之暗面 */
        imba_mirana_invis = 'imba_mirana_invis',
        /** 跳跃 */
        imba_mirana_leap = 'imba_mirana_leap',
        /** 群星坠落 */
        imba_mirana_starfall = 'imba_mirana_starfall',
    }
}
