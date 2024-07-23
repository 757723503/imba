import './imba_weaver_geminate_attack';
import './imba_weaver_shukuchi';
import './imba_weaver_the_swarm';
import './imba_weaver_time_lapse';
import './imba_weaver_innate';

declare global {
    const enum HeroAbility {
        /** 蝗虫群*/
        weaver_the_swarm = 'weaver_the_swarm',
        /** 缩地 */
        imba_weaver_shukuchi = 'imba_weaver_shukuchi',
        /** 连击 */
        imba_weaver_geminate_attack = 'imba_weaver_geminate_attack',
        /** 时光倒流 */
        imba_weaver_time_lapse = 'imba_weaver_time_lapse',
        /** 编织者先天技能 - 时光倒流记录 */
        imba_weaver_innate = 'imba_weaver_innate',
    }
}
