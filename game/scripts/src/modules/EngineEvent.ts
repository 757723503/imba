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
        // ListenToGameEvent(
        //     'dota_player_gained_level',
        //     data => {
        //         this._EngineLevelUpEvent(data);
        //     },
        //     this
        // );

        ListenToGameEvent(
            'dota_player_learned_ability',
            data => {
                this._OnPlayerLearnedAbility(data);
            },
            this
        );
        // ListenToGameEvent(
        //     'dota_hero_inventory_item_change',
        //     data => {
        //         this._OnItemChange(data);
        //     },
        //     this
        // );
    }

    private _GCTimer(): void {
        Timers.CreateTimer(() => {
            print(`前内存 ${collectgarbage('count')}`);
            collectgarbage('collect');
            print(`后内存 ${collectgarbage('count')}`);
            return 60;
        });
    }

    private _OnPlayerLearnedAbility(data: GameEventProvidedProperties & DotaPlayerLearnedAbilityEvent): void {
        const abiltiyName = data.abilityname;
        const playerID = data.PlayerID;
        if (playerID == null || playerID == -1) return;
        const player = PlayerResource.GetPlayer(playerID);
        if (!CIsValid(player)) return;
        const hero = player.GetAssignedHero();
        if (!CIsValid(hero)) return;
        const ability = hero.FindAbilityByName(abiltiyName);
        if (!CIsValid(ability)) return;
        // const level = ability.GetLevel();
        if (ability.GetClassname() == 'special_bonus_base') {
            // 选择天赋
            UnitAbilitiesForEach(hero, ability => {
                if (ability && ability['____constructor']) {
                    ability['____constructor']();
                }
            });
        }
    }

    // private _OnItemChange(data: GameEventProvidedProperties & DotaHeroInventoryItemChangeEvent): void {
    // print(data.dropped, data.item_entindex, data.hero_entindex);
    // print('物品变化');
    // print(EntIndexToHScript(data.hero_entindex).GetName());
    // print((EntIndexToHScript(data.item_entindex) as BaseItem).GetAbilityName(), EntIndexToHScript(data.hero_entindex).GetName());
    // }

    // private _EngineLevelUpEvent(data: GameEventProvidedProperties & DotaPlayerGainedLevelEvent): void {}

    private _GameRulesStateChange(data: GameEventProvidedProperties & object): void {
        const state = GameRules.State_Get();
        if (state == GameState.CUSTOM_GAME_SETUP) {
            const towers = Entities.FindAllByClassname('npc_dota_tower');
            const buildings = Entities.FindAllByClassname('npc_dota_building');
            for (const tower of [...towers, ...buildings]) {
                if (CIsValid(tower) && Is_CDOTA_BaseNpc_Building(tower)) {
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
        _spell_amp_data_calls: [],
        _extra_be_crits_data_calls: [],
        _extra_crits_data_calls: [],
    };

    private async _NpcSpawned(data: GameEventProvidedProperties & NpcSpawnedEvent): Promise<void> {
        if (data.entindex == null || data.entindex <= 0) return;
        const entity = EntIndexToHScript(data.entindex);
        if (Is_CDOTA_BaseNPC(entity) && entity.IsBaseNPC() && data.is_respawn == 0) {
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

            // const ability = entity.AddAbility('antimage_mana_break');
            // DebugPrint('初始化自定义属性', GetAbilityTextureNameForAbility('antimage_mana_break'));
            // ability.GetAbilityTextureName()
            // ability.text;
        }
    }
}
