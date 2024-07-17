import './imba_slardar_amplify_damage';
import './imba_slardar_bash';
import './imba_slardar_slithereen_crush';
import './imba_slardar_sprint';

declare global {
    const enum HeroAbility {
        /** 伤害加深 */
        imba_slardar_amplify_damage = 'imba_slardar_amplify_damage',
        /** 重击 */
        imba_slardar_bash = 'imba_slardar_bash',
        /** 鱼人碎击 */
        imba_slardar_slithereen_crush = 'imba_slardar_slithereen_crush',
        /** 冲刺 */
        imba_slardar_sprint = 'imba_slardar_sprint',
    }
}
