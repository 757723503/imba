import './imba_pudge_dismember';
import './imba_pudge_flesh_heap';
import './imba_pudge_meat_hook';
import './imba_pudge_rot';
import './imba_pudge_rot_end';
import './imba_pudge_innate';

declare global {
    const enum HeroAbility {
        /** 肉钩 */
        imba_pudge_meat_hook = 'imba_pudge_meat_hook',
        /** 腐烂 */
        imba_pudge_rot = 'imba_pudge_rot',
        /** 腐烂 */
        imba_pudge_rot_end = 'imba_pudge_rot_end',
        /** 腐肉堆积 */
        imba_pudge_flesh_heap = 'imba_pudge_flesh_heap',
        /** 肢解 */
        imba_pudge_dismember = 'imba_pudge_dismember',
        /** 先天技能 腐肉堆积 */
        imba_pudge_innate = 'imba_pudge_innate',
    }
}
