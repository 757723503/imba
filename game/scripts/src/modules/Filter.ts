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
        const target = EntIndexToHScript(event.entindex_target_const) as CDOTA_BaseNPC;
        const attacker = EntIndexToHScript(event.entindex_source_const) as CDOTA_BaseNPC;
        if (target.IsNull() || attacker.IsNull()) return false;
        if (event.is_attack) {
            // print(event.move_speed, attacker.GetRangedProjectileName());
            GameRules.CProjectileManager.CreateTrackingProjectile({
                target: target,
                moveSpeed: event.move_speed,
                source: attacker,
                effectName: attacker.GetRangedProjectileName(),
                OnHitUnit: () => {
                    //TODO 标识弹道来源
                    AddDamage({
                        attacker: attacker,
                        victim: target,
                        damage: attacker.GetAttackDamage(),
                        damageProperty: DamageProperty.Attack,
                        damageType: DamageType.Physical,
                        sourceAbility: attacker.base_attack_ability,
                    });
                },
            });
        }
        return false;
    }

    _DamageFilter(event: DamageFilterEvent): boolean {
        if (!event.entindex_attacker_const) return true;
        if (!event.entindex_victim_const) return true;
        const attacker = EntIndexToHScript(event.entindex_attacker_const) as CDOTA_BaseNPC;
        const victim = EntIndexToHScript(event.entindex_victim_const) as CDOTA_BaseNPC;
        const ability = EntIndexToHScript(event.entindex_inflictor_const ?? (-1 as EntityIndex)) as CDOTABaseAbility;
        if (victim.IsNull() || !victim.IsAlive() || !IsValidEntity(victim)) return;

        if (event.damage == 0) return;
        if (!ability) {
            AddDamage({
                attacker: attacker,
                victim: victim,
                damage: event.damage,
                damageProperty: DamageProperty.Attack,
                damageType: DamageType.Physical,
                //TODO 标识普攻来源
                sourceAbility: attacker.base_attack_ability,
            });
            return false;
        }
        return true;
    }
}
