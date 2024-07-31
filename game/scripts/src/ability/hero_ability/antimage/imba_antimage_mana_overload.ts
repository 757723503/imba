import { modifier_imba_antimage_mana_overload_noorder, type imba_antimage_counterspell } from './imba_antimage_counterspell';

// 闪烁碎片
@registerAbility()
export class imba_antimage_mana_overload extends BaseAbility {
    _duration = this.GetSpecialValue('imba_antimage_mana_overload', 'duration');
    _outgoing_damage = this.GetSpecialValue('imba_antimage_mana_overload', 'outgoing_damage');
    _incoming_damage = this.GetSpecialValue('imba_antimage_mana_overload', 'incoming_damage');
    OnSpellStart(): void {
        const counterspell = this.caster.FindAbilityByName('imba_antimage_counterspell') as imba_antimage_counterspell;

        CIllusionManager.CreateIllusionsAsync({
            callback(illusions) {
                if (CIsValid(counterspell)) {
                    const table = counterspell._illusion_table;
                    table && table.push(illusions);
                }
                illusions.AddModifier(this.caster, this, modifier_imba_antimage_mana_overload_noorder, { duration: this._duration });
            },
            heroToCopy: this.caster,
            modifierKeys: {
                duration: this._duration,
                outgoing_damage: 100 + this._outgoing_damage,
                incoming_damage: this._incoming_damage,
            },
            numIllusions: 1,
            owner: this.caster,
        });
    }
}
