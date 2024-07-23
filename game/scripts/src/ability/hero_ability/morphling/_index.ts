import './imba_morphling_adaptive_strike_agi';
import './imba_morphling_morph_agi';
import './imba_morphling_replicate';
import './imba_morphling_waveform';

declare global {
    const enum HeroAbility {
        /** 变体攻击 本地化todo*/
        morphling_adaptive_strike_agi = 'morphling_adaptive_strike_agi',
        /** 敏捷转换 */
        imba_morphling_morph_agi = 'imba_morphling_morph_agi',
        /** 复制 */
        imba_morphling_replicate = 'imba_morphling_replicate',
        /** 波浪形态*/
        morphling_waveform = 'morphling_waveform',
    }
}
