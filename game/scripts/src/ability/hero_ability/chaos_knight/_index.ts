import './imba_chaos_knight_chaos_bolt';
import './imba_chaos_knight_chaos_strike';
import './imba_chaos_knight_phantasm';
import './imba_chaos_knight_reality_rift';
import './imba_chaos_knight_innate';

declare global {
    const enum HeroAbility {
        /** 混乱之箭 */
        imba_chaos_knight_chaos_bolt = 'imba_chaos_knight_chaos_bolt',
        /** 致命一击*/
        chaos_knight_chaos_strike = 'chaos_knight_chaos_strike',
        /** 幻象 */
        imba_chaos_knight_phantasm = 'imba_chaos_knight_phantasm',
        /** 实相裂隙 */
        imba_chaos_knight_reality_rift = 'imba_chaos_knight_reality_rift',
        /** 周身特效技能 */
        imba_chaos_knight_innate = 'imba_chaos_knight_innate',
    }
}
