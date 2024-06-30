import { Debug } from './Debug';
import { GameConfig } from './GameConfig';
import { CChat } from './Chat';
import { XNetTable } from './xnet-table';
import '../common_modifier/index';
import { CDispatcher } from './dispatcher';
import { CFilter } from './Filter';

declare global {
    interface CDOTAGameRules {
        // 声明所有的GameRules模块，这个主要是为了方便其他地方的引用（保证单例模式）
        XNetTable: XNetTable;
        CDispatcher: CDispatcher;
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
        // 如果某个模块不需要在其他地方使用，那么直接在这里使用即可
        new GameConfig();
        // 初始化测试模块xD
        new Debug();
        new CChat();
        GameRules.CDispatcher = new CDispatcher();
        new CFilter();
    }
}
