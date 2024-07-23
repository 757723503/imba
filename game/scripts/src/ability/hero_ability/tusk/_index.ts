import './imba_tusk_ice_shards';
import './imba_tusk_snowball';
import './imba_tusk_tag_team';
import './imba_tusk_walrus_punch';

declare global {
    const enum HeroAbility {
        /** 寒冰片*/
        tusk_ice_shards = 'tusk_ice_shards',
        /** 雪球 */
        imba_tusk_snowball = 'imba_tusk_snowball',
        /** 冰封魔印 */
        imba_tusk_tag_team = 'imba_tusk_tag_team',
        /** 海象神拳 */
        imba_tusk_walrus_punch = 'imba_tusk_walrus_punch',
    }
}
