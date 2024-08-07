@registerAbility()
export class imba_axe_coat_of_blood extends BaseAbility {
    GetIntrinsicModifierName(): string {
        return 'modifier_imba_axe_coat_of_blood';
    }

    OnSpellStart(keys?: SpellStartParams): void {}
}
@registerModifier()
export class modifier_imba_axe_coat_of_blood extends BaseModifier {
    GetModifierConfig(): ModifierConfig {
        return {
            is_debuff: false,
            is_hidden: false,
            not_purgable: true,
            not_purgable_exception: true,
            not_remove_on_death: true,
        };
    }

    DeclareFunctions(): ModifierFunction[] {
        return CDeclareFunctions(ModifierFunction.PHYSICAL_ARMOR_BONUS);
    }

    GetModifierPhysicalArmorBonus(event: ModifierAttackEvent): number {
        return this.GetStackCount() * this._armor_per_kill;
    }

    _customDeclare = [ModifierFunctions.OnHeroDeath];
    CustomDeclareFunctions(): ModifierFunctions[] {
        return this._customDeclare;
    }

    _armor_per_kill = this.ability.GetSpecialValue('imba_axe_coat_of_blood', 'armor_per_kill');
    _culling_blade_multiplier = this.ability.GetSpecialValue('imba_axe_coat_of_blood', 'culling_blade_multiplier');
    OnHeroDeath(dmgTable: EndDamageTable): void {
        if (dmgTable.attacker == this.caster) {
            if (dmgTable.sourceAbility && 'imba_axe_culling_blade' == dmgTable.sourceAbility.GetAbilityName()) {
                for (let i = 0; i < this._culling_blade_multiplier; i++) {
                    this.IncrementStackCount();
                }
            } else {
                this.IncrementStackCount();
            }
        }
    }
}
