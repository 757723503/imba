import './imba_enchantress_enchant';
import './imba_enchantress_impetus';
import './imba_enchantress_natures_attendants';
import './imba_enchantress_untouchable';

declare global {
    const enum HeroAbility {
        /** 不可侵犯 */
        imba_enchantress_untouchable = 'imba_enchantress_untouchable',
        /** 魅惑 */
        imba_enchantress_enchant = 'imba_enchantress_enchant',
        /** 自然之助 */
        imba_enchantress_natures_attendants = 'imba_enchantress_natures_attendants',
        /** 推进 */
        imba_enchantress_impetus = 'imba_enchantress_impetus',
    }
}
