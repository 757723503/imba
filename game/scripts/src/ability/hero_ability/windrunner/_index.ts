import './imba_windrunner_focusfire';
import './imba_windrunner_powershot';
import './imba_windrunner_shackleshot';
import './imba_windrunner_windrun';

declare global {
    const enum HeroAbility {
        /** 集中火力 */
        imba_windrunner_focusfire = 'imba_windrunner_focusfire',
        /** 强力击*/
        windrunner_powershot = 'windrunner_powershot',
        /** 束缚击*/
        windrunner_shackleshot = 'windrunner_shackleshot',
        /** 风行者*/
        windrunner_windrun = 'windrunner_windrun',
    }
}
