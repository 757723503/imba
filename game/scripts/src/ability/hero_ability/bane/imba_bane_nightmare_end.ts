import type { imba_bane_nightmare } from './imba_bane_nightmare';

@registerAbility()
export class imba_bane_nightmare_end extends BaseAbility {
    OnSpellStart(): void {
        const ability = this.caster.FindAbilityByName('imba_bane_nightmare') as imba_bane_nightmare;
        if (ability && ability.GetLevel() > 0) {
            ability._night_units.forEach(unit => {
                const target = EntIndexToHScript(unit);
                if (Is_CDOTA_BaseNPC(target)) {
                    target.RemoveModifierByNameAndCaster('modifier_imba_bane_nightmare', this.caster);
                    target.RemoveModifierByNameAndCaster('modifier_imba_invulnerable', this.caster);
                    ability._night_units = ability._night_units.filter(unit => unit != target.entindex());
                }
            });
        }
        this.caster.UnHideAbilityToSlot('imba_bane_nightmare', 'imba_bane_nightmare_end');
    }

    GetBehavior(): AbilityBehavior {
        return AbilityBehavior.HIDDEN + AbilityBehavior.NO_TARGET + AbilityBehavior.IMMEDIATE + AbilityBehavior.IGNORE_PSEUDO_QUEUE;
    }

    // GetAbilityTextureName(): string {
    //     return 'bane_nightmare_end';
    // }
    // Attribute_GetFloatValue(name: string, defaultValue: number): number {}
}
