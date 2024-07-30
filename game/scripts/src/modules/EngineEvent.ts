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
        if (state == GameState.CUSTOM_GAME_SETUP) {
            const all_towers = Entities.FindAllByClassname('npc_dota_tower');
            for (let index = 0; index < all_towers.length; index++) {
                const tower = all_towers[index] as CDOTA_BaseNPC_Building;
                if (tower != null) {
                    for (const key in this._npc_custom_properties) {
                        if (this._npc_custom_properties.hasOwnProperty(key)) {
                            tower[key] =
                                typeof this._npc_custom_properties[key] === 'object'
                                    ? CDeepCopy(this._npc_custom_properties[key])
                                    : this._npc_custom_properties[key];
                        }
                    }
                }
            }
        }
        if (state >= GameState.STRATEGY_TIME) {
        }
    }

    //初始化映射表 防止遗漏
    private _npc_custom_properties: Custom_BaseNPC_Properties = {
        _crits_data_calls: [],
        _all_evasion_chance: 0,
        _evasion_data_calls: [],
        _all_blind_chance: 0,
        _blind_data_calls: [],
        _all_accuracy_chance: 0,
        _accuracy_data_calls: [],
        physic_damage_blocks: [],
        magic_damage_blocks: [],
        _shields_data_calls: [],
        _debuff_immunity_magical_resistance: [],
        _life_steal_data_calls: [],
        custom_aoe_increase: 0,
        _never_die: [],
    };

    private async _NpcSpawned(data: GameEventProvidedProperties & NpcSpawnedEvent): Promise<void> {
        if (data.entindex == null || data.entindex <= 0) return;
        const entity = EntIndexToHScript(data.entindex) as CDOTA_BaseNPC_Hero;
        if (entity.IsBaseNPC() && data.is_respawn == 0) {
            // 初始化自定义属性
            for (const key in this._npc_custom_properties) {
                // DebugPrint(entity.GetUnitName(), this._npc_custom_properties.hasOwnProperty(key));
                if (this._npc_custom_properties.hasOwnProperty(key)) {
                    entity[key] =
                        typeof this._npc_custom_properties[key] === 'object'
                            ? CDeepCopy(this._npc_custom_properties[key])
                            : this._npc_custom_properties[key];
                }
            }
            await sleep(FrameTime() * 2);
            //会引起内存泄露 ? (造成伤害带有原技能会有内存泄露)
            if (entity.AddAbility != null && entity.HasAbility('imba_custom_base_attack') == false) {
                entity._ability_custom_base_attack = entity.AddAbility('imba_custom_base_attack');
            }
            if (entity.AddAbility != null) {
                entity.AddAbility('imba_custom_base_attack')?.SetAbilityIndex(30);
                entity.AddAbility('imba_custom_debuff_immune')?.SetAbilityIndex(31);
            }
            if (entity.HasModifier != null && entity.HasModifier('modifier_attack_data_miss') == false) {
                entity.AddNewModifier(entity, entity.FindAbilityByName('imba_custom_debuff_immune'), 'modifier_attack_data_miss', {});
            }
        }
    }
}
