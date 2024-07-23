import './imba_juggernaut_blade_dance';
import './imba_juggernaut_blade_fury';
import './imba_juggernaut_healing_ward';
import './imba_juggernaut_omni_slash';

declare global {
    const enum HeroAbility {
        /** 剑舞 */
        imba_juggernaut_blade_dance = 'imba_juggernaut_blade_dance',
        /** 剑刃风暴 */
        imba_juggernaut_blade_fury = 'imba_juggernaut_blade_fury',
        /** 治疗守卫 */
        imba_juggernaut_healing_ward = 'imba_juggernaut_healing_ward',
        /** 无敌斩*/
        juggernaut_omni_slash = 'juggernaut_omni_slash',
    }
}
