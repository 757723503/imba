@registerAbility()
export class imba_axe_counter_helix extends BaseAbility {
    GetIntrinsicModifierName(): string {
        return 'modifier_imba_axe_counter_helix';
    }
}
@registerModifier()
class modifier_imba_axe_counter_helix extends BaseModifier {
    GetModifierConfig(): ModifierConfig {
        return {
            is_debuff: false,
            is_hidden: true,
            not_purgable: true,
            not_purgable_exception: true,
            not_remove_on_death: true,
        };
    }

    _trigger_attacks = this.ability.GetSpecialValue('imba_axe_counter_helix', 'trigger_attacks');
    _damage = this.ability.GetSpecialValue('imba_axe_counter_helix', 'damage');
    _radius = this.ability.GetSpecialValue('imba_axe_counter_helix', 'radius');

    _damage_reduction = this.ability.GetSpecialValue('imba_axe_counter_helix', 'damage_reduction');
    _max_stacks = this.ability.GetSpecialValue('imba_axe_counter_helix', 'max_stacks');
    _attacks_increase_counter = this.ability.GetSpecialValue('imba_axe_counter_helix', 'attacks_increase_counter');

    _custom = [ModifierFunctions.OnAttackLanded_Target];
    CustomDeclareFunctions(): ModifierFunctions[] {
        return this._custom;
    }

    OnAttackLanded_Target(AttackData: UnitEventAttackDamageData): void {
        if (AttackData.damageTable.attacker.IsUnit()) {
            this.GetStackCount() < this._max_stacks && this.IncrementStackCount();
        }
    }
}
