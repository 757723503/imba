// TSAbilityData
import './imba_antimage_mana_break';
import './imba_antimage_blink';
import './imba_antimage_counterspell';
import './imba_antimage_mana_void';

declare global {
    const enum HeroAbility {
        /** 法力损毁 */
        imba_antimage_mana_break = 'imba_antimage_mana_break',
        /** 闪烁 */
        imba_antimage_blink = 'imba_antimage_blink',
        /** 法术反制 */
        imba_antimage_counterspell = 'imba_antimage_counterspell',
        /** 法力虚空 */
        imba_antimage_mana_void = 'imba_antimage_mana_void',
    }
}
