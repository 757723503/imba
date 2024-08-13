@registerAbility()
export class imba_lich_frost_nova extends BaseAbility {
    _radius = this.GetSpecialValue('imba_lich_frost_nova', 'radius');
    _aoe_damage = this.GetSpecialValue('imba_lich_frost_nova', 'aoe_damage');
    OnSpellStart(keys?: SpellStartParams): void {
        const enemies = CFindUnitsInRadius({
            team: this.caster.GetTeamNumber(),
            location: this.target.GetAbsOrigin(),
            flagFilter: UnitTargetFlags.NONE,
            teamFilter: UnitTargetTeam.ENEMY,
            typeFilter: UnitTargetType.HERO + UnitTargetType.BASIC,
            radius: this._radius,
            order: FindOrder.CLOSEST,
        });
        enemies.forEach(enemy => {
            const damage = this.target == enemy ? this.GetAbilityDamage() + this._aoe_damage : this._aoe_damage;
            CAddDamage({
                attacker: this.caster,
                victim: enemy,
                sourceAbility: this.ability,
                damage: damage,
                damageType: DamageType.Magical,
                damageFlags: DamageFlags.None,
                damageProperty: DamageProperty.Ability,
            });
            enemy.AddModifier(this.caster, this, modifier_imba_lich_frost_nova_slow, { duration: this.GetDuration() });
        });
    }
}
@registerModifier()
export class modifier_imba_lich_frost_nova_slow extends BaseModifier {
    GetModifierConfig(): ModifierConfig {
        return {
            is_debuff: false,
            is_hidden: false,
            not_purgable: true,
            not_purgable_exception: true,
            not_remove_on_death: true,
        };
    }

    OnCreated(params: ModifierParams): void {}

    DeclareFunctions(): ModifierFunction[] {
        return CDeclareFunctions();
    }

    _customDeclare = [];
    CustomDeclareFunctions(): ModifierFunctions[] {
        return this._customDeclare;
    }
}
