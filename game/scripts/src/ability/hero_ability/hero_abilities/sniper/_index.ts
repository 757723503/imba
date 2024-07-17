import './imba_sniper_assassinate';
import './imba_sniper_headshot';
import './imba_sniper_shrapnel';
import './imba_sniper_take_aim';

declare global {
    const enum HeroAbility {
        /** 暗杀 */
        imba_sniper_assassinate = 'imba_sniper_assassinate',
        /** 爆头 */
        imba_sniper_headshot = 'imba_sniper_headshot',
        /** 榴霰弹*/
        sniper_shrapnel = 'sniper_shrapnel',
        /** 瞄准 */
        imba_sniper_take_aim = 'imba_sniper_take_aim',
    }
}
