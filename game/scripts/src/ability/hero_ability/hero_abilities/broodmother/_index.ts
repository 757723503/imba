import './imba_broodmother_incapacitating_bite';
import './imba_broodmother_insatiable_hunger';
import './imba_broodmother_spawn_spiderlings';
import './imba_broodmother_spin_web';

declare global {
    const enum HeroAbility {
        /** 麻痹之咬 */
        imba_broodmother_incapacitating_bite = 'imba_broodmother_incapacitating_bite',
        /** 极度饥渴 */
        imba_broodmother_insatiable_hunger = 'imba_broodmother_insatiable_hunger',
        /** 孵化蜘蛛 */
        imba_broodmother_spawn_spiderlings = 'imba_broodmother_spawn_spiderlings',
        /** 织网 */
        imba_broodmother_spin_web = 'imba_broodmother_spin_web',
    }
}
