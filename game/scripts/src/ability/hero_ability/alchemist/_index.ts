import './imba_alchemist_acid_spray';
import './imba_alchemist_chemical_rage';
import './imba_alchemist_goblins_greed';
import './imba_alchemist_unstable_concoction';
import './imba_alchemist_unstable_concoction_throw';

declare global {
    const enum HeroAbility {
        /** 酸性喷雾*/
        alchemist_acid_spray = 'alchemist_acid_spray',
        /** 化学狂暴 */
        imba_alchemist_chemical_rage = 'imba_alchemist_chemical_rage',
        /** 地精的贪婪*/
        alchemist_goblins_greed = 'alchemist_goblins_greed',
        /** 不稳定化合物 */
        imba_alchemist_unstable_concoction = 'imba_alchemist_unstable_concoction',
        /** 不稳定化合物 */
        imba_alchemist_unstable_concoction_throw = 'imba_alchemist_unstable_concoction_throw',
    }
}
