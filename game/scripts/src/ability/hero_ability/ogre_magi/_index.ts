import './imba_ogre_magi_bloodlust';
import './imba_ogre_magi_fireblast';
import './imba_ogre_magi_ignite';
import './imba_ogre_magi_multicast';

declare global {
    const enum HeroAbility {
        /** 嗜血术*/
        ogre_magi_bloodlust = 'ogre_magi_bloodlust',
        /** 火焰爆轰 */
        imba_ogre_magi_fireblast = 'imba_ogre_magi_fireblast',
        /** 引燃 */
        imba_ogre_magi_ignite = 'imba_ogre_magi_ignite',
        /** 多重施法 */
        imba_ogre_magi_multicast = 'imba_ogre_magi_multicast',
    }
}
