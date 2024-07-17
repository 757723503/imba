import './imba_witch_doctor_death_ward';
import './imba_witch_doctor_maledict';
import './imba_witch_doctor_paralyzing_cask';
import './imba_witch_doctor_voodoo_restoration';

declare global {
    const enum HeroAbility {
        /** 死亡守卫 */
        imba_witch_doctor_death_ward = 'imba_witch_doctor_death_ward',
        /** 诅咒 */
        imba_witch_doctor_maledict = 'imba_witch_doctor_maledict',
        /** 麻痹药剂 */
        imba_witch_doctor_paralyzing_cask = 'imba_witch_doctor_paralyzing_cask',
        /** 巫毒恢复术*/
        witch_doctor_voodoo_restoration = 'witch_doctor_voodoo_restoration',
    }
}
