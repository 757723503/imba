import './imba_invoker_exort';
import './imba_invoker_invoke';
import './imba_invoker_quas';
import './imba_invoker_wex';

declare global {
    const enum HeroAbility {
        /** 火 本地化todo*/
        invoker_exort = 'invoker_exort',
        /** 元素祈唤 */
        imba_invoker_invoke = 'imba_invoker_invoke',
        /** 冰*/
        invoker_quas = 'invoker_quas',
        /** 雷*/
        invoker_wex = 'invoker_wex',

        /** 急速冷却*/
        invoker_cold_snap = 'invoker_cold_snap',
        /** 幽灵漫步*/
        invoker_ghost_walk = 'invoker_ghost_walk',
        /** 强袭飓风*/
        invoker_tornado = 'invoker_tornado',
        /** 电磁脉冲*/
        invoker_emp = 'invoker_emp',
        /** 灵动迅捷*/
        invoker_alacrity = 'invoker_alacrity',
        /** 混沌陨石*/
        invoker_chaos_meteor = 'invoker_chaos_meteor',
        /** 阳炎冲击*/
        invoker_sun_strike = 'invoker_sun_strike',
        /** 熔炉精灵*/
        invoker_forge_spirit = 'invoker_forge_spirit',
        /** 寒冰之墙*/
        invoker_ice_wall = 'invoker_ice_wall',
        /** 超震声波*/
        invoker_deafening_blast = 'invoker_deafening_blast',
    }
}
