//死亡缠绕
@registerAbility()
export class imba_abaddon_death_coil extends BaseAbility {
    _target_damage = this.GetSpecialValue('imba_abaddon_death_coil', 'target_damage');
    _self_damage = this.GetSpecialValue('imba_abaddon_death_coil', 'self_damage');
    _effect_radius = this.GetSpecialValue('imba_abaddon_death_coil', 'effect_radius');
    OnSpellStart(keys?: SpellStartParams): void {
        this.caster.EmitSound('Hero_Abaddon.DeathCoil.Cast');
        if (this.caster.CHasTalent(HeroTalent.imba_abaddon_8)) {
            const enemies = CFindUnitsInRadius({
                flagFilter: UnitTargetFlags.FOW_VISIBLE,
                location: this.target.GetAbsOrigin(),
                order: FindOrder.CLOSEST,
                radius: this._effect_radius,
                team: this.caster.GetTeamNumber(),
                teamFilter: UnitTargetTeam.ENEMY,
                typeFilter: UnitTargetType.HERO + UnitTargetType.BASIC,
            });
            enemies.forEach(enemy => {
                this.PlayEffect(enemy);
            });
        } else {
            this.PlayEffect(this.target);
        }

        CAddDamage({
            attacker: this.caster,
            damage: this._self_damage * this._target_damage * 0.01,
            damageProperty: DamageProperty.Ability,
            damageType: DamageType.Pure,
            damageFlags: DamageFlags.HPCost,
            victim: this.caster,
            sourceAbility: this,
        });
    }

    _missile_speed = this.GetSpecialValue('imba_abaddon_death_coil', 'missile_speed');
    _heal_amount = this.GetSpecialValue('imba_abaddon_death_coil', 'heal_amount');
    PlayEffect(target: CDOTA_BaseNPC, callback?: () => void): void {
        CProjectileManager.CreateTrackingProjectile({
            moveSpeed: this._missile_speed,
            source: this.caster,
            target: target,
            ability: this,
            effectName: HeroParticleList.imba_abaddon_death_coil,
            OnHitUnit: (unit, position, extraData, thisProjectileID) => {
                // if (unit.CTargetTriggerAbsorbReflect(TriggerSpellType.BOTH, this)) {
                //     return;
                // }
                if (unit.TriggerSpellAbsorb(this)) return;
                unit.TriggerSpellReflect(this);
                if (unit.IsEnemy(this.caster)) {
                    if (this.caster.HasShard()) {
                        CPerformAttack(this.caster, unit, {
                            use_effect: true,
                        });
                    }
                    CAddDamage({
                        attacker: this.caster,
                        damage: this._target_damage,
                        damageProperty: DamageProperty.Ability,
                        damageType: DamageType.Magical,
                        victim: unit,
                        sourceAbility: this,
                    });
                } else {
                    unit.CHeal({
                        amount: this._heal_amount,
                        reason: HealReason.Heal,
                        inflictor: this,
                        source: this.caster,
                        show_number: true,
                    });
                    if (callback) {
                        CSafelyCall(() => {
                            callback();
                        });
                    }
                }
                unit.EmitSound('Hero_Abaddon.DeathCoil.Target');
            },
        });
    }
}
