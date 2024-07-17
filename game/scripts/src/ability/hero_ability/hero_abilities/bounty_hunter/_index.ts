import './imba_bounty_hunter_jinada';
import './imba_bounty_hunter_shuriken_toss';
import './imba_bounty_hunter_track';
import './imba_bounty_hunter_wind_walk';

declare global {
    const enum HeroAbility {
        /** 忍术 */
        imba_bounty_hunter_jinada = 'imba_bounty_hunter_jinada',
        /** 投掷飞镖 */
        imba_bounty_hunter_shuriken_toss = 'imba_bounty_hunter_shuriken_toss',
        /** 追踪术*/
        bounty_hunter_track = 'bounty_hunter_track',
        /** 疾风步*/
        bounty_hunter_wind_walk = 'bounty_hunter_wind_walk',
    }
}
