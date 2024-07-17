import './imba_luna_eclipse';
import './imba_luna_lucent_beam';
import './imba_luna_lunar_blessing';
import './imba_luna_moon_glaive';

declare global {
    const enum HeroAbility {
        /** 月光 */
        imba_luna_lucent_beam = 'imba_luna_lucent_beam',
        /** 月刃 */
        imba_luna_moon_glaive = 'imba_luna_moon_glaive',
        /** 月之祝福 */
        imba_luna_lunar_blessing = 'imba_luna_lunar_blessing',
        /** 月蚀 */
        imba_luna_eclipse = 'imba_luna_eclipse',
    }
}
