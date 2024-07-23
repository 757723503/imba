import './imba_undying_decay';
import './imba_undying_flesh_golem';
import './imba_undying_soul_rip';
import './imba_undying_tombstone';

declare global {
    const enum HeroAbility {
        /** 腐朽 */
        imba_undying_decay = 'imba_undying_decay',
        /** 血肉傀儡*/
        undying_flesh_golem = 'undying_flesh_golem',
        /** 噬魂 */
        imba_undying_soul_rip = 'imba_undying_soul_rip',
        /** 墓碑 */
        imba_undying_tombstone = 'imba_undying_tombstone',
    }
}
