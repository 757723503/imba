import './imba_ursa_earthshock';
import './imba_ursa_enrage';
import './imba_ursa_fury_swipes';
import './imba_ursa_overpower';

declare global {
    const enum HeroAbility {
        /** 震撼大地 */
        imba_ursa_earthshock = 'imba_ursa_earthshock',
        /** 激怒*/
        ursa_enrage = 'ursa_enrage',
        /** 怒意狂击 */
        imba_ursa_fury_swipes = 'imba_ursa_fury_swipes',
        /** 超强力量 */
        imba_ursa_overpower = 'imba_ursa_overpower',
    }
}
