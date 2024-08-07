import './imba_lich_chain_frost';
import './imba_lich_dark_ritual';
import './imba_lich_frost_nova';
import './imba_lich_frost_shield';

declare global {
    const enum HeroAbility {
        /** 连环霜冻 */
        imba_lich_chain_frost = 'imba_lich_chain_frost',
        /** 黑暗仪式 */
        imba_lich_dark_ritual = 'imba_lich_dark_ritual',
        /** 霜冻新星 */
        imba_lich_frost_nova = 'imba_lich_frost_nova',
        /** 霜冻护甲 */
        imba_lich_frost_shield = 'imba_lich_frost_shield',
    }
}
