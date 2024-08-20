@registerAbility()
export class imba_lina_laguna_blade extends BaseAbility {
    _damage_delay = this.GetSpecialValue('imba_lina_laguna_blade', 'damage_delay');
    OnSpellStart(keys?: SpellStartParams): void {
        this.target.AddModifier(this.caster, this, modifier_imba_lina_laguna_blade, { duration: this._damage_delay });
    }
}
@registerModifier()
export class modifier_imba_lina_laguna_blade extends BaseModifier {
    _damage = this.ability.GetSpecialValue('imba_lina_laguna_blade', 'damage');
    GetModifierConfig(): ModifierConfig {
        return {
            is_debuff: false,
            is_hidden: false,
            not_purgable: true,
            not_purgable_exception: true,
        };
    }

    OnRemoved(death: boolean): void {
        CAddDamage({
            attacker: this.caster,
            damage: this._damage,
            damageProperty: DamageProperty.Ability,
            damageType: DamageType.Magical,
            sourceAbility: this.ability,
            victim: this.parent,
        });
    }
}
