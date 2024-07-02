import { CGameMode } from './GameMode';
import './damage/damage'; // 造成伤害模块
import { XNetTable } from './xnet-table';
import '../common_modifier/index';
import { GameConfig } from './GameConfig';
import { Debug } from './Debug';
import { CChat } from './Chat';
import { CFilter } from './Filter';
declare global {
    interface CDOTAGameRules {
        // 声明所有的GameRules模块，这个主要是为了方便其他地方的引用（保证单例模式）
        XNetTable: XNetTable;
        CGameMode: CGameMode;
    }
}

/**
 * 这个方法会在game_mode实体生成之后调用，且仅调用一次
 * 因此在这里作为单例模式使用
 **/
export function ActivateModules() {
    if (GameRules.XNetTable == null) {
        // 初始化所有的GameRules模块
        GameRules.XNetTable = new XNetTable();
        GameRules.CGameMode = new CGameMode();
        new GameConfig();
        new Debug();
        new CChat();
        new CDispatcher();
        new CFilter();
    }
}
