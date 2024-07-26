@registerAbility()
export class imba_abaddon_death_coil extends BaseAbility {
    OnSpellStart(keys?: SpellStartParams): void {
        if (this.caster.CHasTalent(HeroTalent.imba_abaddon_8)) {
            const enemies = CFindUnitsInRadius({
                flagFilter: UnitTargetFlags.FOW_VISIBLE,
                location: this.target.GetAbsOrigin(),
                order: FindOrder.CLOSEST,
                radius: this.GetSpecialValue('imba_abaddon_death_coil', 'effect_radius'),
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
        const target_damage = this.GetSpecialValue('imba_abaddon_death_coil', 'target_damage');
        const self_damage = this.GetSpecialValue('imba_abaddon_death_coil', 'self_damage') * target_damage * 0.01;
        CAddDamage({
            attacker: this.caster,
            damage: self_damage,
            damageProperty: DamageProperty.Ability,
            damageType: DamageType.Magical,
            damageFlags: DamageFlags.HPCost,
            victim: this.caster,
        });
    }

    _missile_speed = this.GetSpecialValue('imba_abaddon_death_coil', 'missile_speed');
    PlayEffect(target: CDOTA_BaseNPC, callback?: () => void): void {
        const target_damage = this.GetSpecialValue('imba_abaddon_death_coil', 'target_damage');
        const heal_amount = this.GetSpecialValue('imba_abaddon_death_coil', 'heal_amount');
        CProjectileManager.CreateTrackingProjectile({
            moveSpeed: this._missile_speed,
            source: this.caster,
            target: target,
            ability: this,
            effectName: HeroParticleList.imba_abaddon_death_coil,
            OnHitUnit: (unit, position, extraData, thisProjectileID) => {
                if (unit.IsEnemy(this.caster)) {
                    if (this.caster.HasShard()) {
                        CPerformAttack(this.caster, unit, {
                            use_effect: true,
                        });
                    }
                    CAddDamage({
                        attacker: this.caster,
                        damage: target_damage,
                        damageProperty: DamageProperty.Ability,
                        damageType: DamageType.Magical,
                        victim: unit,
                    });
                } else {
                    unit.CHeal({
                        amount: heal_amount,
                        reason: HealReason.Heal,
                        inflictor: this,
                        source: this.caster,
                        show_number: true,
                    });
                    CSafelyCall(() => {
                        callback();
                    });
                }
            },
        });
    }
}
