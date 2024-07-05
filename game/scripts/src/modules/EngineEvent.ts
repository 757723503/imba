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
        const entity = EntIndexToHScript(data.entindex) as CDOTA_BaseNPC_Hero;

        Timers.CreateTimer(FrameTime() * 5, () => {
            if (entity.AddAbility != null && entity.HasAbility('base_attack_ability') == false) {
                entity.base_attack_ability = entity.AddAbility('base_attack_ability');
            }
            if (entity.HasModifier != null && entity.HasModifier('modifier_attackdata_miss') == false) {
                entity.AddNewModifier(entity, null, 'modifier_attackdata_miss', {});
            }
        });
    }
}
