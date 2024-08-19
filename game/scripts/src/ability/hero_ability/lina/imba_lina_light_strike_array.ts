import { modifier_imba_stunned } from '../../../common_modifier/modifier_imba_stunned';

@registerAbility()
export class imba_lina_light_strike_array extends BaseAbility {
    _light_strike_array_aoe = this.GetSpecialValue('imba_lina_light_strike_array', 'light_strike_array_aoe');
    _light_strike_array_delay_time = this.GetSpecialValue('imba_lina_light_strike_array', 'light_strike_array_delay_time');
    _light_strike_array_stun_duration = this.GetSpecialValue('imba_lina_light_strike_array', 'light_strike_array_stun_duration');
    _light_strike_array_damage = this.GetSpecialValue('imba_lina_light_strike_array', 'light_strike_array_damage');
    OnSpellStart(keys?: SpellStartParams): void {
        Timers.CreateTimer(this._light_strike_array_delay_time, () => {
            const enemies = CFindUnitsInRadius({
                team: this.caster.GetTeamNumber(),
                location: this.target_pos,
                flagFilter: UnitTargetFlags.NONE,
                teamFilter: UnitTargetTeam.ENEMY,
                typeFilter: UnitTargetType.HERO + UnitTargetType.BASIC,
                radius: this._light_strike_array_aoe,
                order: FindOrder.CLOSEST,
            });
            enemies.forEach(enemy => {
                enemy.AddModifier(this.caster, this, modifier_imba_stunned, {
                    duration: this._light_strike_array_stun_duration,
                });
                CAddDamage({
                    attacker: this.caster,
                    victim: enemy,
                    sourceAbility: this.ability,
                    damage: this._light_strike_array_damage,
                    damageType: DamageType.Magical,
                    damageFlags: DamageFlags.None,
                    damageProperty: DamageProperty.Ability,
                    // extra_data: { no_fiery_soul: true },
                });
            });
        });
    }
}
