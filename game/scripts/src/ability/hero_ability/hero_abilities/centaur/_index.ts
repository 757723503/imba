import './imba_centaur_double_edge';
import './imba_centaur_hoof_stomp';
import './imba_centaur_return';
import './imba_centaur_stampede';

declare global {
    const enum HeroAbility {
        /** 双刃剑*/
        centaur_double_edge = 'centaur_double_edge',
        /** 马蹄践踏 */
        imba_centaur_hoof_stomp = 'imba_centaur_hoof_stomp',
        /** 反击 */
        imba_centaur_return = 'imba_centaur_return',
        /** 奔袭冲撞 */
        imba_centaur_stampede = 'imba_centaur_stampede',
    }
}
