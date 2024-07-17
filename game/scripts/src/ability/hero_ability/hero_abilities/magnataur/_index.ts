import './imba_magnataur_empower';
import './imba_magnataur_reverse_polarity';
import './imba_magnataur_shockwave';
import './imba_magnataur_skewer';

declare global {
    const enum HeroAbility {
        /** 授予力量 */
        imba_magnataur_empower = 'imba_magnataur_empower',
        /** 两极反转 */
        imba_magnataur_reverse_polarity = 'imba_magnataur_reverse_polarity',
        /** 震荡波*/
        magnataur_shockwave = 'magnataur_shockwave',
        /** 獠牙冲刺 */
        imba_magnataur_skewer = 'imba_magnataur_skewer',
    }
}
