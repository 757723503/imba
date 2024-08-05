import { reloadable } from '../utils/tstl-utils';

@reloadable
export class CFilter {
    constructor() {
        const gamemode = GameRules.GetGameModeEntity();
        gamemode.SetExecuteOrderFilter(event => this._OrderFilter(event), this);
        gamemode.SetTrackingProjectileFilter(event => this._ProjectileFilter(event), this);
        gamemode.SetModifierGainedFilter(event => this._ModifierFilter(event), this);
        // gamemode.SetDamageFilter(event => this._DamageFilter(event), this);
    }

    _OrderFilter(event: ExecuteOrderFilterEvent): boolean {
        if (UnitOrder.MOVE_ITEM == event.order_type || UnitOrder.DROP_ITEM == event.order_type) {
            Object.values(event.units).forEach(index => {
                if (index <= 0) return;
                const unit = EntIndexToHScript(index) as CDOTA_BaseNPC;
                const item = EntIndexToHScript(event.entindex_ability) as CDOTA_Item;
                if (
                    CIsValid(item) &&
                    CIsValid(unit) &&
                    'item_ultimate_scepter' == item.GetAbilityName() &&
                    unit.IsRealHero() &&
                    event.entindex_target &&
                    (event.entindex_target >= 6 || event.entindex_target <= 0)
                ) {
                    UnitAbilitiesForEach(unit, ability => {
                        if (ability && CIsValid(ability)) {
                            Timers.CreateTimer(0.1, () => {
                                CRefreshValue(ability);
                            });
                        }
                    });
                }
            });
        }
        return true;
    }

    _ProjectileFilter(event: TrackingProjectileFilterEvent): boolean {
        const target = EntIndexToHScript(event.entindex_target_const);
        const attacker = EntIndexToHScript(event.entindex_source_const) as CDOTA_BaseNPC;
        if (target.IsNull() || attacker.IsNull()) return false;
        if (event.is_attack && !target.IsBaseNPC()) {
            return true;
        }
        return false;
    }

    _ModifierFilter(event: ModifierGainedFilterEvent): boolean {
        if (event.entindex_parent_const <= 0) return true;
        const parent = EntIndexToHScript(event.entindex_parent_const);
        const modifierName = event.name_const;
        if (CIsValid(parent) && Is_CDOTA_BaseNPC_Hero(parent)) {
            if (
                modifierName == 'modifier_item_ultimate_scepter' ||
                modifierName == 'modifier_item_ultimate_scepter_consumed' ||
                modifierName == 'modifier_item_ultimate_scepter_consumed_alchemist'
            ) {
                UnitAbilitiesForEach(parent, ability => {
                    if (ability && ability['____constructor']) {
                        ability['____constructor']();
                    }
                });
            }
            if (modifierName == 'modifier_item_aghanims_shard') {
                UnitAbilitiesForEach(parent, ability => {
                    if (ability && ability['____constructor']) {
                        ability['____constructor']();
                    }
                });
            }
            return true;
        }

        return true;
    }
    // _DamageFilter(event: DamageFilterEvent): boolean {
    //     if (!event.entindex_attacker_const) return true;
    //     if (!event.entindex_victim_const) return true;
    //     const attacker = EntIndexToHScript(event.entindex_attacker_const) as CDOTA_BaseNPC;
    //     const victim = EntIndexToHScript(event.entindex_victim_const) as CDOTA_BaseNPC;
    //     const ability = EntIndexToHScript(event.entindex_inflictor_const ?? (-1 as EntityIndex)) as CDOTABaseAbility;
    //     if (victim.IsNull() || !victim.IsAlive() || !IsValidEntity(victim)) return;

    //     if (event.damage == 0) return;
    //     if (!ability) {
    //         // CAttackData.PerformAttack(attacker, victim, { use_effect: true });
    //         return false;
    //     }
    //     return true;
    // }
}
