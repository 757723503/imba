//蚀脑
@registerAbility()
export class imba_bane_brain_sap extends BaseAbility {
    _brain_sap_damage = this.GetSpecialValue('imba_bane_brain_sap', 'brain_sap_damage');
    OnSpellStart(keys?: SpellStartParams): void {
        CAddDamage({
            attacker: this.caster,
            damage: this._brain_sap_damage,
            damageProperty: DamageProperty.Ability,
            damageType: DamageType.Pure,
            sourceAbility: this,
            victim: this.target,
        });

        this.caster.CHeal({
            amount: this._brain_sap_damage,
            inflictor: this,
            reason: HealReason.Heal,
            source: this.caster,
        });
    }

    PlayEffect(keys: SpellStartParams): void {}
}
