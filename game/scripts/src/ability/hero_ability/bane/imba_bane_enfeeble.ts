//虚弱
@registerAbility()
export class imba_bane_enfeeble extends BaseAbility {
    _duration = this.GetSpecialValue('imba_bane_enfeeble', 'duration');
    OnSpellStart(keys?: SpellStartParams): void {
        this.target.AddModifier(this.caster, this, modifier_imba_bane_enfeeble_effect, { duration: this._duration });
    }
}
@registerModifier()
export class modifier_imba_bane_enfeeble_effect extends BaseModifier {
    GetModifierConfig(): ModifierConfig {
        return {
            is_debuff: true,
            is_hidden: false,
        };
    }

    _damage_reduction = this.ability.GetSpecialValue('imba_bane_enfeeble', 'damage_reduction');
    _cast_reduction = this.ability.GetSpecialValue('imba_bane_enfeeble', 'cast_reduction');
    _enfeeble_tick_damage = this.ability.GetSpecialValue('imba_bane_enfeeble', 'enfeeble_tick_damage');
    OnCreated(params: ModifierParams): void {
        this.OnIntervalThink();
        this.StartIntervalThink(1);
    }

    OnIntervalThink(): void {
        CAddDamage({
            attacker: this.caster,
            damage: this._enfeeble_tick_damage,
            damageProperty: DamageProperty.Ability,
            damageType: DamageType.Pure,
            sourceAbility: this.ability,
            victim: this.parent,
        });
    }

    DeclareFunctions(): ModifierFunction[] {
        return CDeclareFunctions(ModifierFunction.PREATTACK_BONUS_DAMAGE_PROC, ModifierFunction.CAST_RANGE_BONUS_PERCENTAGE);
    }

    GetModifierPreAttack_BonusDamage_Proc(): number {
        return -this._damage_reduction;
    }

    GetModifierCastRangeBonusPercentage(event: ModifierAbilityEvent): number {
        return -this._cast_reduction;
    }
}
