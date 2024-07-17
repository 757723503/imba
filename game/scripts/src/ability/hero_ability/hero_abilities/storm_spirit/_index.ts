import './imba_storm_spirit_ball_lightning';
import './imba_storm_spirit_electric_vortex';
import './imba_storm_spirit_overload';
import './imba_storm_spirit_static_remnant';

declare global {
    const enum HeroAbility {
        /** 球状闪电 */
        imba_storm_spirit_ball_lightning = 'imba_storm_spirit_ball_lightning',
        /** 电子涡流 */
        imba_storm_spirit_electric_vortex = 'imba_storm_spirit_electric_vortex',
        /** 超负荷*/
        storm_spirit_overload = 'storm_spirit_overload',
        /** 残影 */
        imba_storm_spirit_static_remnant = 'imba_storm_spirit_static_remnant',
    }
}
