_G.MEM = _G.MEM ?? require('./lib/MemoryReferenceInfo');
import { CGameMode } from './GameMode';
import { XNetTable } from './xnet-table';
import { GameConfig } from './GameConfig';
import { Debug } from './Debug';
import { CChat } from './Chat';
import { CEngineEvent } from './EngineEvent';
import { CFilter } from './Filter';
import { CProjectileManager } from './projectile/ProjectileManager';
import './damage/damage'; // 造成伤害模块
import '../common_modifier/index';
import '../base_attack_ability/base_attack_ability';
import { CAttackDataManager } from './attack/AttackManager';
import { PseudoRandom } from './lib/PseudoRandom';
import { CIllusionManager } from './IllusionManager';
declare global {
    interface CDOTAGameRules {
        // 声明所有的GameRules模块，这个主要是为了方便其他地方的引用（保证单例模式）
        XNetTable: XNetTable;
        CGameMode: CGameMode;
    }
    interface ModifierHealEvent extends ModifierUnitEvent {
        gain: number;
        inflictor?: CDOTABaseAbility;
    }
    type dispatcher_id = number & {
        readonly __tag__: 'dispatcher_id';
    };
    interface MemoryReferenceInfo {
        m_cMethods: Record<string, (this: void, ...args: any[]) => any>;
    }
    var MEM: MemoryReferenceInfo;
}
math.randomseed(Time());

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
        new CEngineEvent();
        globalThis.CProjectileManager = new CProjectileManager();
        globalThis.CIllusionManager = new CIllusionManager();
        globalThis.CAttackData = new CAttackDataManager();
        globalThis.Random = new PseudoRandom();
    }
}
