import './imba_shredder_reactive_armor';
import './imba_shredder_timber_chain';
import './imba_shredder_whirling_death';
import './imba_shredder_chakram';
import './imba_shredder_chakram_return';
import './imba_shredder_chakram2';
import './imba_shredder_chakram2_return';

declare global {
    const enum HeroAbility {
        /** 锯齿飞轮 */
        imba_shredder_chakram = 'imba_shredder_chakram',
        /** 锯齿飞轮返回 */
        imba_shredder_chakram_return = 'imba_shredder_chakram_return',
        /** 死亡飞锯 */
        shredder_chakram2 = 'shredder_chakram2',
        /** 死亡飞锯返回 */
        shredder_chakram2_return = 'shredder_chakram2_return',
        /** 活性护甲*/
        shredder_reactive_armor = 'shredder_reactive_armor',
        /** 伐木锯链 */
        imba_shredder_timber_chain = 'imba_shredder_timber_chain',
        /** 死亡旋风 */
        imba_shredder_whirling_death = 'imba_shredder_whirling_death',
    }
}
