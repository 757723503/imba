import { modifier_imba_invulnerable } from '../../../common_modifier/modifier_imba_invulnerable';

//噩梦
@registerAbility()
export class imba_bane_nightmare extends BaseAbility {
    _duration = this.GetDuration();
    _nightmare_invuln_time = this.GetSpecialValue('imba_bane_nightmare', 'nightmare_invuln_time');
    OnSpellStart(keys?: SpellStartParams): void {
        this.target.AddModifier(this.caster, this, modifier_imba_bane_nightmare, { duration: this._duration });
        this.target.AddModifier(this.caster, this, modifier_imba_invulnerable, { duration: this._nightmare_invuln_time });
    }
}
@registerModifier()
export class modifier_imba_bane_nightmare extends BaseModifier {
    GetModifierConfig(): ModifierConfig {
        return {
            is_debuff: true,
            is_hidden: false,
        };
    }

    CheckState(): Partial<Record<modifierstate, boolean>> {
        return {
            [ModifierState.STUNNED]: true,
            [ModifierState.NIGHTMARED]: true,
        };
    }

    OnCreated(params: ModifierParams): void {}
}
