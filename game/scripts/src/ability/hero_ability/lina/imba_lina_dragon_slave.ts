@registerAbility()
export class imba_lina_dragon_slave extends BaseAbility {
    _dragon_slave_speed = this.GetSpecialValue('imba_lina_dragon_slave', 'dragon_slave_speed');
    _dragon_slave_width_initial = this.GetSpecialValue('imba_lina_dragon_slave', 'dragon_slave_width_initial');
    _dragon_slave_width_end = this.GetSpecialValue('imba_lina_dragon_slave', 'dragon_slave_width_end');
    _dragon_slave_distance = this.GetSpecialValue('imba_lina_dragon_slave', 'dragon_slave_distance');
    _dragon_slave_damage = this.GetSpecialValue('imba_lina_dragon_slave', 'dragon_slave_damage');
    OnSpellStart(keys?: SpellStartParams): void {
        const direction = GetDirection(this.caster.GetAbsOrigin(), this.target_pos);
        CProjectileManager.CreateLinearProjectile({
            direction: direction,
            distance: this._dragon_slave_distance,
            startRadius: this._dragon_slave_width_initial,
            endRadius: this._dragon_slave_width_end,
            iUnitTargetFlags: UnitTargetFlags.NONE,
            iUnitTargetTeam: UnitTargetTeam.ENEMY,
            iUnitTargetType: UnitTargetType.BASIC + UnitTargetType.HERO,
            moveSpeed: this._dragon_slave_speed,
            removeOnRadiusHit: false,
            source: this.caster,
            ability: this.ability,
            // effectName  : 'particles/units/heroes/hero_lina/lina_spell_dragon_slave.vpcf',
            OnHitUnit: (unit, position) => {
                CAddDamage({
                    attacker: this.caster,
                    victim: unit,
                    sourceAbility: this.ability,
                    damage: this._dragon_slave_damage,
                    damageType: DamageType.Magical,
                    damageFlags: DamageFlags.None,
                    damageProperty: DamageProperty.Ability,
                    // extra_data: { no_fiery_soul: true },
                });
            },
        });
    }
}
