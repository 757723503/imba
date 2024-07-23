import './imba_bloodseeker_blood_bath';
import './imba_bloodseeker_bloodrage';
import './imba_bloodseeker_rupture';
import './imba_bloodseeker_thirst';

declare global {
    const enum HeroAbility {
        /** 血之狂暴*/
        bloodseeker_bloodrage = 'bloodseeker_bloodrage',
        /** 血之祭祀 */
        imba_bloodseeker_blood_bath = 'imba_bloodseeker_blood_bath',
        /** 嗜血渴望 */
        imba_bloodseeker_thirst = 'imba_bloodseeker_thirst',
        /** 割裂 */
        imba_bloodseeker_rupture = 'imba_bloodseeker_rupture',
    }
}
