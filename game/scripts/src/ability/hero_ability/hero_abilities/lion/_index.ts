import './imba_lion_finger_of_death';
import './imba_lion_impale';
import './imba_lion_mana_drain';
import './imba_lion_voodoo';

declare global {
    const enum HeroAbility {
        /** 死亡一指*/
        lion_finger_of_death = 'lion_finger_of_death',
        /** 恶魔穿刺 */
        imba_lion_impale = 'imba_lion_impale',
        /** 法力汲取 */
        imba_lion_mana_drain = 'imba_lion_mana_drain',
        /** 妖术 */
        imba_lion_voodoo = 'imba_lion_voodoo',
    }
}
