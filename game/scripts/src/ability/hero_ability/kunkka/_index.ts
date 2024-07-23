import './imba_kunkka_ghostship';
import './imba_kunkka_tidebringer';
import './imba_kunkka_torrent';
import './imba_kunkka_x_marks_the_spot';
import './imba_kunkka_x_marks_the_spot_return';

declare global {
    const enum HeroAbility {
        /** 幽灵船*/
        kunkka_ghostship = 'kunkka_ghostship',
        /** 潮汐使者*/
        kunkka_tidebringer = 'kunkka_tidebringer',
        /** 洪流 */
        imba_kunkka_torrent = 'imba_kunkka_torrent',
        /** X标记 */
        imba_kunkka_x_marks_the_spot = 'imba_kunkka_x_marks_the_spot',
        /** X标记送回 */
        imba_kunkka_x_marks_the_spot_return = 'imba_kunkka_x_marks_the_spot_return',
    }
}
