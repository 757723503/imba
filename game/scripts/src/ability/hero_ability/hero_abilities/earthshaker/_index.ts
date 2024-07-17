import './imba_earthshaker_aftershock';
import './imba_earthshaker_echo_slam';
import './imba_earthshaker_enchant_totem';
import './imba_earthshaker_fissure';

declare global {
    const enum HeroAbility {
        /** 余震 */
        imba_earthshaker_aftershock = 'imba_earthshaker_aftershock',
        /** 回音击*/
        earthshaker_echo_slam = 'earthshaker_echo_slam',
        /** 强化图腾 */
        imba_earthshaker_enchant_totem = 'imba_earthshaker_enchant_totem',
        /** 沟壑 */
        imba_earthshaker_fissure = 'imba_earthshaker_fissure',
    }
}
