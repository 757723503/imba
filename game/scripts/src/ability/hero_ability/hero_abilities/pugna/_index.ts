import './imba_pugna_decrepify';
import './imba_pugna_life_drain';
import './imba_pugna_nether_blast';
import './imba_pugna_nether_ward';

declare global {
    const enum HeroAbility {
        /** 衰老*/
        pugna_decrepify = 'pugna_decrepify',
        /** 生命汲取 */
        imba_pugna_life_drain = 'imba_pugna_life_drain',
        /** 幽冥爆轰 */
        imba_pugna_nether_blast = 'imba_pugna_nether_blast',
        /** 幽冥守卫 */
        imba_pugna_nether_ward = 'imba_pugna_nether_ward',
    }
}
