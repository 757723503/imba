import './imba_silencer_curse_of_the_silent';
import './imba_silencer_glaives_of_wisdom';
import './imba_silencer_global_silence';
import './imba_silencer_last_word';

declare global {
    const enum HeroAbility {
        /** 奥术诅咒 */
        imba_silencer_curse_of_the_silent = 'imba_silencer_curse_of_the_silent',
        /** 智慧之刃 */
        imba_silencer_glaives_of_wisdom = 'imba_silencer_glaives_of_wisdom',
        /** 全领域静默*/
        silencer_global_silence = 'silencer_global_silence',
        /** 遗言 */
        imba_silencer_last_word = 'imba_silencer_last_word',
    }
}
