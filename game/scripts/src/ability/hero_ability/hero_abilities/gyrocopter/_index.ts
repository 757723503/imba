import './imba_gyrocopter_call_down';
import './imba_gyrocopter_flak_cannon';
import './imba_gyrocopter_homing_missile';
import './imba_gyrocopter_rocket_barrage';

declare global {
    const enum HeroAbility {
        /** 火箭弹幕 */
        imba_gyrocopter_rocket_barrage = 'imba_gyrocopter_rocket_barrage',
        /** 追踪导弹 */
        imba_gyrocopter_homing_missile = 'imba_gyrocopter_homing_missile',
        /** 高射火炮 */
        imba_gyrocopter_flak_cannon = 'imba_gyrocopter_flak_cannon',
        /** 召唤飞弹 */
        imba_gyrocopter_call_down = 'imba_gyrocopter_call_down',
    }
}
