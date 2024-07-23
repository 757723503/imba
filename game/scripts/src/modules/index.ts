_G.MEM = _G.MEM ?? require('./lib/MemoryReferenceInfo');
import { CGameMode } from './GameMode';
import { XNetTable } from './xnet-table';
import { GameConfig } from './GameConfig';
import { Debug } from './Debug';
import { CChat } from './Chat';
import { CEngineEvent } from './EngineEvent';
import { CFilter } from './Filter';
import { CProjectileManager } from './projectile/ProjectileManager';
import { CDispatcher } from './dispatcher/Dispatcher';
import './damage/damage'; // 造成伤害模块
import '../ability_custom/imba_custom_base_attack';
import { CAttackDataManager } from './attack/AttackManager';
import { PseudoRandom } from './lib/PseudoRandom';
import { CIllusionManager } from './IllusionManager';
import { CParticleManager } from './particle/CParticleManager';
import { CustomApplyDamage } from './damage/damage';

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
    var CAddDamage: typeof CustomApplyDamage;
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
    }
    new Debug();
    new CChat();
    new CFilter();
    new CEngineEvent();
    globalThis.CProjectileManager = new CProjectileManager();
    globalThis.CIllusionManager = new CIllusionManager();
    globalThis.CAttackData = new CAttackDataManager();
    globalThis.Random = new PseudoRandom();
    globalThis.Dispatcher = new CDispatcher();
    globalThis.CParticleManager = new CParticleManager();

    globalThis.CAddDamage = CustomApplyDamage;
    globalThis.CCreateParticle = CParticleManager.prototype.CreateParticle;
    globalThis.CSetParticleControl = CParticleManager.prototype.SetParticleControl;
    globalThis.SetParticleControlEnt = CParticleManager.prototype.SetParticleControlEnt;
    globalThis.CDestroyParticle = CParticleManager.prototype.DestroyParticle;
}
