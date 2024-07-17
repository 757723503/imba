import './imba_templar_assassin_meld';
import './imba_templar_assassin_psi_blades';
import './imba_templar_assassin_psionic_trap';
import './imba_templar_assassin_refraction';
import './imba_templar_assassin_trap';

declare global {
    const enum HeroAbility {
        /** 折光 */
        imba_templar_assassin_refraction = 'imba_templar_assassin_refraction',
        /** 隐匿 */
        imba_templar_assassin_meld = 'imba_templar_assassin_meld',
        /** 灵能之刃 */
        imba_templar_assassin_psi_blades = 'imba_templar_assassin_psi_blades',
        /** 灵能陷阱 */
        imba_templar_assassin_psionic_trap = 'imba_templar_assassin_psionic_trap',
        /** 触发陷阱 */
        imba_templar_assassin_trap = 'imba_templar_assassin_trap',
    }
}
