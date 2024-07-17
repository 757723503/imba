import './imba_tinker_heat_seeking_missile';
import './imba_tinker_laser';
import './imba_tinker_march_of_the_machines';
import './imba_tinker_rearm';

declare global {
    const enum HeroAbility {
        /** 激光*/
        tinker_laser = 'tinker_laser',
        /** 热导飞弹 */
        imba_tinker_heat_seeking_missile = 'imba_tinker_heat_seeking_missile',
        /** 机器人的进军 */
        imba_tinker_march_of_the_machines = 'imba_tinker_march_of_the_machines',
        /** 再装填*/
        tinker_rearm = 'tinker_rearm',
    }
}
