import './imba_tiny_avalanche';
import './imba_tiny_craggy_exterior';
import './imba_tiny_grow';
import './imba_tiny_toss';

declare global {
    const enum HeroAbility {
        /** 山崩 */
        imba_tiny_avalanche = 'imba_tiny_avalanche',
        /** 崎岖外表 */
        imba_tiny_craggy_exterior = 'imba_tiny_craggy_exterior',
        /** 长大*/
        tiny_grow = 'tiny_grow',
        /** 投掷 */
        imba_tiny_toss = 'imba_tiny_toss',
    }
}
