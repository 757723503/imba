import './imba_rubick_arcane_supremacy';
import './imba_rubick_fade_bolt';
import './imba_rubick_spell_steal';
import './imba_rubick_telekinesis';

declare global {
    const enum HeroAbility {
        /** 失效力场 */
        imba_rubick_arcane_supremacy = 'imba_rubick_arcane_supremacy',
        /** 弱化能流 */
        imba_rubick_fade_bolt = 'imba_rubick_fade_bolt',
        /** 技能窃取*/
        rubick_spell_steal = 'rubick_spell_steal',
        /** 隔空取物 */
        imba_rubick_telekinesis = 'imba_rubick_telekinesis',
    }
}
