import './imba_venomancer_plague_ward';
import './imba_venomancer_poison_nova';
import './imba_venomancer_poison_sting';
import './imba_venomancer_venomous_gale';

declare global {
    const enum HeroAbility {
        /** 瘟疫守卫 */
        imba_venomancer_plague_ward = 'imba_venomancer_plague_ward',
        /** 剧毒新星 */
        imba_venomancer_poison_nova = 'imba_venomancer_poison_nova',
        /** 毒刺 */
        imba_venomancer_poison_sting = 'imba_venomancer_poison_sting',
        /** 瘴气 */
        imba_venomancer_venomous_gale = 'imba_venomancer_venomous_gale',
    }
}
