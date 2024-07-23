import './imba_omniknight_degen_aura';
import './imba_omniknight_guardian_angel';
import './imba_omniknight_martyr';
import './imba_omniknight_purification';

declare global {
    const enum HeroAbility {
        /** 退化光环*/
        omniknight_degen_aura = 'omniknight_degen_aura',
        /** 守护天使 */
        imba_omniknight_guardian_angel = 'imba_omniknight_guardian_angel',
        /** 驱逐*/
        omniknight_martyr = 'omniknight_martyr',
        /** 洗礼 */
        imba_omniknight_purification = 'imba_omniknight_purification',
    }
}
