import { reloadable } from '../utils/tstl-utils';
@reloadable
export class CEngineEvent {
    constructor() {
        this._GCTimer();

        ListenToGameEvent(
            'npc_spawned',
            data => {
                this._NpcSpawned(data);
            },
            this
        );
        ListenToGameEvent(
            'game_rules_state_change',
            data => {
                this._GameRulesStateChange(data);
            },
            this
        );
        ListenToGameEvent(
            'dota_player_gained_level',
            data => {
                this._EngineLevelUpEvent(data);
            },
            this
        );
    }

    private _GCTimer(): void {
        Timers.CreateTimer(() => {
            print(`前内存 ${collectgarbage('count')}`);
            collectgarbage('collect');
            print(`后内存 ${collectgarbage('count')}`);
            return 60;
        });
    }

    private _EngineLevelUpEvent(data: GameEventProvidedProperties & DotaPlayerGainedLevelEvent): void {}

    private _GameRulesStateChange(data: GameEventProvidedProperties & object): void {
        const state = GameRules.State_Get();

        if (state >= GameState.STRATEGY_TIME) {
        }
    }

    private _NpcSpawned(data: GameEventProvidedProperties & NpcSpawnedEvent): void {
        if (data.entindex == null || data.entindex <= 0) return;
        const entity = EntIndexToHScript(data.entindex) as CDOTA_BaseNPC_Hero;
        // print(entity?.GetUnitName(), entity?.GetClassname(), entity?.IsNPC(), entity?.IsBaseNPC(), entity?.IsDOTANPC());
        if (entity.IsBaseNPC()) {
            // 初始化自定义属性
            entity._all_evasion_chance = 0;
            entity._evasion_data_calls = [];
            entity._all_blind_chance = 0;
            entity._blind_data_calls = [];
            entity._all_accuracy_chance = 0;
            entity._accuracy_data_calls = [];
            entity._crits_data_calls = [];
            entity.physic_damage_blocks = [];
            entity.magic_damage_blocks = [];

            Timers.CreateTimer(FrameTime() * 5, () => {
                //会引起内存泄露 ?
                // if (entity.AddAbility != null && entity.HasAbility('base_attack_ability') == false) {
                // entity.base_attack_ability = entity.AddAbility('base_attack_ability');
                // }
                if (entity.HasModifier != null && entity.HasModifier('modifier_attack_data_miss') == false) {
                    entity.AddNewModifier(entity, null, 'modifier_attack_data_miss', {});
                }

                return null;
            });
        }
    }
}
