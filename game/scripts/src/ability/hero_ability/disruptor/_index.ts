import './imba_disruptor_glimpse';
import './imba_disruptor_kinetic_field';
import './imba_disruptor_static_storm';
import './imba_disruptor_thunder_strike';

declare global {
    const enum HeroAbility {
        /** 一闪*/
        disruptor_glimpse = 'disruptor_glimpse',
        /** 动能力场 */
        imba_disruptor_kinetic_field = 'imba_disruptor_kinetic_field',
        /** 静态风暴*/
        disruptor_static_storm = 'disruptor_static_storm',
        /** 雷击 */
        imba_disruptor_thunder_strike = 'imba_disruptor_thunder_strike',
    }
}
