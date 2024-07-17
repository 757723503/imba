import './imba_razor_eye_of_the_storm';
import './imba_razor_plasma_field';
import './imba_razor_static_link';
import './imba_razor_unstable_current';
import './imba_razor_innate';

declare global {
    const enum HeroAbility {
        /** 等离子场 */
        imba_razor_plasma_field = 'imba_razor_plasma_field',
        /** 静电链接 */
        imba_razor_static_link = 'imba_razor_static_link',
        /** 不稳定电流*/
        razor_unstable_current = 'razor_unstable_current',
        /** 风暴之眼 */
        imba_razor_eye_of_the_storm = 'imba_razor_eye_of_the_storm',
        /** 先天技能 - 攻击弹道特效 */
        imba_razor_innate = 'imba_razor_innate',
    }
}
