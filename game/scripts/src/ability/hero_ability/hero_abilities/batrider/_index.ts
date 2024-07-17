import './imba_batrider_firefly';
import './imba_batrider_flamebreak';
import './imba_batrider_flaming_lasso';
import './imba_batrider_sticky_napalm';

declare global {
    const enum HeroAbility {
        /** 火焰飞行 */
        imba_batrider_firefly = 'imba_batrider_firefly',
        /** 烈焰破击 */
        imba_batrider_flamebreak = 'imba_batrider_flamebreak',
        /** 燃烧枷锁 */
        imba_batrider_flaming_lasso = 'imba_batrider_flaming_lasso',
        /** 黏性燃油*/
        batrider_sticky_napalm = 'batrider_sticky_napalm',
    }
}
