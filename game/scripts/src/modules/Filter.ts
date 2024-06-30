@reloadable
export class CFilter {
    constructor() {
        const gamemode = GameRules.GetGameModeEntity();
        gamemode.SetExecuteOrderFilter(event => this._OrderFilter(event), this);
        gamemode.SetTrackingProjectileFilter(event => this._ProjectileFilter(event), this);
        gamemode.SetDamageFilter(event => this._DamageFilter(event), this);
    }

    _OrderFilter(event: ExecuteOrderFilterEvent): boolean {
        return true;
    }

    _ProjectileFilter(event: TrackingProjectileFilterEvent): boolean {
        return false;
    }

    _DamageFilter(event: DamageFilterEvent): boolean {
        return false;
    }
}
