import './imba_life_stealer_feast';
import './imba_life_stealer_infest';
import './imba_life_stealer_open_wounds';
import './imba_life_stealer_rage';
import './imba_life_stealer_consume';
import './imba_life_stealer_control';

declare global {
    const enum HeroAbility {
        /** 狂暴 */
        imba_life_stealer_rage = 'imba_life_stealer_rage',
        /** 盛宴 */
        imba_life_stealer_feast = 'imba_life_stealer_feast',
        /** 撕裂伤口 */
        imba_life_stealer_open_wounds = 'imba_life_stealer_open_wounds',
        /** 感染 */
        imba_life_stealer_infest = 'imba_life_stealer_infest',
        /** 消化 */
        imba_life_stealer_consume = 'imba_life_stealer_consume',
        /** 控制 */
        imba_life_stealer_control = 'imba_life_stealer_control',
    }
}
