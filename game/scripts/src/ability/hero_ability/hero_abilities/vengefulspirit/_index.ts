import './imba_vengefulspirit_command_aura';
import './imba_vengefulspirit_magic_missile';
import './imba_vengefulspirit_nether_swap';
import './imba_vengefulspirit_wave_of_terror';

declare global {
    const enum HeroAbility {
        /** 命令光环 */
        imba_vengefulspirit_command_aura = 'imba_vengefulspirit_command_aura',
        /** 魔法*/
        vengefulspirit_magic_missile = 'vengefulspirit_magic_missile',
        /** 移形换位 */
        imba_vengefulspirit_nether_swap = 'imba_vengefulspirit_nether_swap',
        /** 恐怖波*/
        vengefulspirit_wave_of_terror = 'vengefulspirit_wave_of_terror',
    }
}
