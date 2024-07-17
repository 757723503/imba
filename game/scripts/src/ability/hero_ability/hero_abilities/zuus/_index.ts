import './imba_zuus_arc_lightning';
import './imba_zuus_lightning_bolt';
import './imba_zuus_static_field';
import './imba_zuus_thundergods_wrath';

declare global {
    const enum HeroAbility {
        /** 弧形闪电 */
        imba_zuus_arc_lightning = 'imba_zuus_arc_lightning',
        /** 闪电击*/
        zuus_lightning_bolt = 'zuus_lightning_bolt',
        /** 静电场*/
        zuus_static_field = 'zuus_static_field',
        /** 雷神之怒*/
        zuus_thundergods_wrath = 'zuus_thundergods_wrath',
    }
}
