import './imba_leshrac_diabolic_edict';
import './imba_leshrac_lightning_storm';
import './imba_leshrac_pulse_nova';
import './imba_leshrac_pulse_nova_end';
import './imba_leshrac_split_earth';

declare global {
    const enum HeroAbility {
        /** 撕裂大地 */
        imba_leshrac_split_earth = 'imba_leshrac_split_earth',
        /** 恶魔敕令 */
        imba_leshrac_diabolic_edict = 'imba_leshrac_diabolic_edict',
        /** 闪电风暴 */
        imba_leshrac_lightning_storm = 'imba_leshrac_lightning_storm',
        /** 脉冲新星*/
        leshrac_pulse_nova = 'leshrac_pulse_nova',
        /**关闭脉冲新星*/
        leshrac_pulse_nova_end = 'leshrac_pulse_nova_end',
    }
}
