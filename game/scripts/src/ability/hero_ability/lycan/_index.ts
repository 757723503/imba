import './imba_lycan_feral_impulse';
import './imba_lycan_howl';
import './imba_lycan_shapeshift';
import './imba_lycan_summon_wolves';

declare global {
    const enum HeroAbility {
        /** 野性驱使 本地化todo*/
        lycan_feral_impulse = 'lycan_feral_impulse',
        /** 嗥叫 */
        imba_lycan_howl = 'imba_lycan_howl',
        /** 变身 */
        imba_lycan_shapeshift = 'imba_lycan_shapeshift',
        /** 召狼 */
        imba_lycan_summon_wolves = 'imba_lycan_summon_wolves',
    }
}
