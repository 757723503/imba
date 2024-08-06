@registerAbility()
export class imba_axe_culling_blade extends BaseAbility {
    _damage = this.ability.GetSpecialValue('imba_axe_culling_blade', 'damage');
    _speed_duration = this.ability.GetSpecialValue('imba_axe_culling_blade', 'speed_duration');
    _speed_aoe = this.ability.GetSpecialValue('imba_axe_culling_blade', 'speed_aoe');
    _armor_per_stack = this.ability.GetSpecialValue('imba_axe_culling_blade', 'armor_per_stack');
    _armor_bonus = this.ability.GetSpecialValue('imba_axe_culling_blade', 'armor_bonus');
    OnSpellStart(): void {
        const heal = this._damage;
        const target_health = this.target.GetHealth();
        if (target_health <= heal) {
            if (this.target.CTrueKill(this.caster, this.ability)) {
                const units = CFindUnitsInRadius({
                    location: this.target.GetAbsOrigin(),
                    radius: this._speed_aoe,
                    team: this.caster.GetTeamNumber(),
                    typeFilter: UnitTargetType.HERO + UnitTargetType.BASIC,
                    flagFilter: UnitTargetFlags.NONE,
                    order: FindOrder.CLOSEST,
                    teamFilter: UnitTargetTeam.FRIENDLY,
                });
                units.forEach(unit => {
                    unit.AddModifier(this.caster, this.ability, modifier_imba_axe_culling_blade_boost, { duration: this._speed_duration });
                });
            }
        } else {
            CAddDamage({
                attacker: this.caster,
                damage: this._damage,
                damageProperty: DamageProperty.Ability,
                damageType: DamageType.Pure,
                sourceAbility: this.ability,
                victim: this.target,
            });
        }
    }
}
@registerModifier()
class modifier_imba_axe_culling_blade_boost extends BaseModifier {
    GetModifierConfig(): ModifierConfig {
        return {
            is_debuff: false,
            is_hidden: false,
            not_purgable: true,
            not_purgable_exception: true,
            not_remove_on_death: true,
        };
    }

    _armor_bonus = this.ability.GetSpecialValue('imba_axe_culling_blade', 'armor_bonus');
    _speed_bonus = this.ability.GetSpecialValue('imba_axe_culling_blade', 'speed_bonus');
    DeclareFunctions(): ModifierFunction[] {
        return CDeclareFunctions(ModifierFunction.PHYSICAL_ARMOR_BONUS, ModifierFunction.MOVESPEED_BONUS_PERCENTAGE);
    }

    GetModifierPhysicalArmorBonus(event: ModifierAttackEvent): number {
        return this._armor_bonus;
    }

    GetModifierMoveSpeedBonus_Percentage(): number {
        return this._speed_bonus;
    }
}
