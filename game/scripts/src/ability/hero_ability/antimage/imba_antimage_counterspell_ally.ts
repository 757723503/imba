//法术反制 友军
import type { imba_antimage_counterspell } from './imba_antimage_counterspell';
import { modifier_imba_antimage_counterspell } from './imba_antimage_counterspell';

@registerAbility()
export class imba_antimage_counterspell_ally extends BaseAbility {
    _duration = this.GetSpecialValue('imba_antimage_counterspell_ally', 'duration');
    OnSpellStart(): void {
        const ability = this.caster.FindAbilityByName('imba_antimage_counterspell') as imba_antimage_counterspell;
        this.caster.AddModifier(this.caster, ability, modifier_imba_antimage_counterspell, { duration: this._duration });
    }
}
