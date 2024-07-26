import { reloadable } from '../utils/tstl-utils';

@reloadable
export class CFilter {
    constructor() {
        const gamemode = GameRules.GetGameModeEntity();
        gamemode.SetExecuteOrderFilter(event => this._OrderFilter(event), this);
        gamemode.SetTrackingProjectileFilter(event => this._ProjectileFilter(event), this);
        // gamemode.SetDamageFilter(event => this._DamageFilter(event), this);
    }

    _OrderFilter(event: ExecuteOrderFilterEvent): boolean {
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
