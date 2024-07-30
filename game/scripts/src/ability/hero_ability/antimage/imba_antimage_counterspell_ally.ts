import { modifier_imba_antimage_counterspell } from './imba_antimage_counterspell';

@registerAbility()
export class imba_antimage_counterspell_ally extends BaseAbility {
    _duration = this.GetSpecialValue('imba_antimage_counterspell_ally', 'duration');
    OnSpellStart(): void {
        this.caster.AddModifier(this.caster, this, modifier_imba_antimage_counterspell, { duration: this._duration });
    }
}
