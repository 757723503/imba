declare global {
    var VectorTargetManager: VectorTargetManager;
}
export class VectorTargetManager {
    constructor() {
        this.Init();
    }

    Init() {
        print('[VT] Initializing VectorTargetManager...');
        const mode = GameRules.GetGameModeEntity();

        // mode.SetExecuteOrderFilter(Dynamic_Wrap(VectorTargetManager, 'OrderFilter'), VectorTargetManager.getInstance());
        // ListenToGameEvent('dota_player_learned_ability', Dynamic_Wrap(VectorTargetManager, 'OnAbilityLearned'), VectorTargetManager.getInstance());
        // ListenToGameEvent('dota_item_purchased', Dynamic_Wrap(VectorTargetManager, 'OnItemBought'), VectorTargetManager.getInstance());
        // ListenToGameEvent('dota_item_picked_up', Dynamic_Wrap(VectorTargetManager, 'OnItemPickup'), VectorTargetManager.getInstance());

        CustomGameEventManager.RegisterListener('check_ability', (_, data) => {
            this.OnAbilityCheck(data);
        });
    }

    OnAbilityCheck(event: any) {
        const ability = EntIndexToHScript(event.abilityIndex) as CDOTABaseAbility;
        this.UpdateNettable(ability);
    }

    UpdateNettable(ability: CDOTABaseAbility) {
        const vectorData = {
            startWidth: tostring(ability?.GetVectorTargetStartRadius() ?? 100),
            endWidth: tostring(ability?.GetVectorTargetEndRadius() ?? 100),
            castLength: tostring(ability?.GetVectorTargetRange() ?? 800),
            dual: tostring(ability?.IsDualVectorDirection() ?? false),
            ignoreArrow: tostring(ability?.IgnoreVectorArrowWidth() ?? false),
        };
        CustomNetTables.SetTableValue('vector_targeting', tostring(ability.entindex()), vectorData);
    }
    // OrderFilter(event: any): boolean {
    //     if (!event.units['0']) return true;

    //     const unit = EntIndexToHScript(event.units['0']);
    //     const ability = EntIndexToHScript(event.entindex_ability) as CDOTABaseAbility;

    //     if (!ability || !ability.GetBehaviorInt) return true;

    //     const behavior = ability.GetBehaviorInt();

    //     if (bit.band(behavior, DOTA_ABILITY_BEHAVIOR.DOTA_ABILITY_BEHAVIOR_VECTOR_TARGETING) !== 0) {
    //         if (event.order_type === DOTA_UNIT_ORDER.DOTA_UNIT_ORDER_VECTOR_TARGET_POSITION) {
    //             ability.vectorTargetPosition2 = Vector(event.position_x, event.position_y, 0);
    //         }

    //         if (event.order_type === DOTA_UNIT_ORDER.DOTA_UNIT_ORDER_CAST_POSITION) {
    //             ability.vectorTargetPosition = Vector(event.position_x, event.position_y, 0);
    //             const position = ability.vectorTargetPosition;
    //             const position2 = ability.vectorTargetPosition2;
    //             let direction = (position2 - position).Normalized();

    // if (position.Equals(position2)) {
    //                 direction = (position - unit.GetAbsOrigin()).Normalized();
    // }

    //             direction = Vector(direction.x, direction.y, 0);
    //             ability.vectorTargetDirection = direction;

    //             ability.OnSpellStart = () => this.OverrideSpellStart(ability, position, direction);
    //         }
    //     }
    //     return true;
    // }

    // private OverrideSpellStart(self: CDOTABaseAbility, position: Vector, direction: Vector) {
    //     self.OnVectorCastStart(position, direction);
    // }

    // OnAbilityLearned(event: any) {
    //     const playerID = event.PlayerID;
    //     const hero = PlayerResource.GetSelectedHeroEntity(playerID);
    //     const ability = hero?.FindAbilityByName(event.abilityname) as CDOTABaseAbility;

    //     if (!ability || !ability.GetBehaviorInt) return;

    //     const behavior = ability.GetBehaviorInt();
    //     if (bit.band(behavior, DOTA_ABILITY_BEHAVIOR.DOTA_ABILITY_BEHAVIOR_VECTOR_TARGETING) !== 0) {
    //         this.UpdateNettable(ability);
    //     }
    // }

    // OnItemPickup(event: any) {
    //     const index = event.item_entindex || event.ItemEntityIndex;
    //     const ability = EntIndexToHScript(index) as CDOTABaseAbility;

    //     if (!ability || !ability.GetBehaviorInt) return;

    //     const behavior = ability.GetBehaviorInt();
    //     if (bit.band(behavior, DOTA_ABILITY_BEHAVIOR.DOTA_ABILITY_BEHAVIOR_VECTOR_TARGETING) !== 0) {
    //         this.UpdateNettable(ability);
    //     }
    // }

    // OnItemBought(event: any) {
    //     const playerID = event.PlayerID;
    //     const hero = PlayerResource.GetSelectedHeroEntity(playerID);

    //     for (let i = 0; i < 16; i++) {
    //         const item = hero?.GetItemInSlot(i) as CDOTABaseAbility;
    //         if (item && item.GetBehaviorInt) {
    //             const behavior = item.GetBehaviorInt();
    //             if (bit.band(behavior, DOTA_ABILITY_BEHAVIOR.DOTA_ABILITY_BEHAVIOR_VECTOR_TARGETING) !== 0) {
    //                 this.UpdateNettable(item);
    //             }
    //         }
    //     }
    // }
}

// Extend CDOTABaseAbility with Vector Targeting functionalities
// declare global {
//     interface CDOTABaseAbility {
//         vectorTargetPosition: Vector;
//         vectorTargetPosition2: Vector;
//         vectorTargetDirection: Vector;

//         GetVectorTargetRange(): number;
//         GetVectorTargetStartRadius(): number;
//         GetVectorTargetEndRadius(): number;
//         GetVectorPosition(): Vector;
//         GetVector2Position(): Vector;
//         GetVectorDirection(): Vector;
//         OnVectorCastStart(vStartLocation: Vector, vDirection: Vector): void;
//         UpdateVectorValues(): void;
//         IsDualVectorDirection(): boolean;
//         IgnoreVectorArrowWidth(): boolean;
//     }
// }

// CDOTABaseAbility.prototype.GetVectorTargetRange = function (): number {
//     return 800;
// };

// CDOTABaseAbility.prototype.GetVectorTargetStartRadius = function (): number {
//     return 125;
// };

// CDOTABaseAbility.prototype.GetVectorTargetEndRadius = function (): number {
//     return this.GetVectorTargetStartRadius();
// };

// CDOTABaseAbility.prototype.GetVectorPosition = function (): Vector {
//     return this.vectorTargetPosition;
// };

// CDOTABaseAbility.prototype.GetVector2Position = function (): Vector {
//     return this.vectorTargetPosition2;
// };

// CDOTABaseAbility.prototype.GetVectorDirection = function (): Vector {
//     return this.vectorTargetDirection;
// };

// CDOTABaseAbility.prototype.OnVectorCastStart = function (vStartLocation: Vector, vDirection: Vector): void {
//     print("Vector Cast");
// };

// CDOTABaseAbility.prototype.UpdateVectorValues = function (): void {
//     VectorTargetManager.getInstance().UpdateNettable(this);
// };

// CDOTABaseAbility.prototype.IsDualVectorDirection = function (): boolean {
//     return false;
// };

// CDOTABaseAbility.prototype.IgnoreVectorArrowWidth = function (): boolean {
//     return false;
// };

// Initialize VectorTargetManager
// ListenToGameEvent("game_rules_state_change", () => {
//     if (GameRules.State_Get() === DOTA_GAMERULES_STATE_CUSTOM_GAME_SETUP) {
//         VectorTargetManager.Init();
//     }
// }, undefined);
