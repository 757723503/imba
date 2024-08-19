@registerAbility()
export class imba_lina_fiery_soul extends BaseAbility {
    GetIntrinsicModifierName(): string {
        return '';
    }
}
@registerModifier()
export class modifier_imba_lina_fiery_soul extends BaseModifier {
    _fiery_soul_attack_speed_bonus = this.ability.GetSpecialValue('imba_lina_fiery_soul', 'fiery_soul_attack_speed_bonus');
    _fiery_soul_move_speed_bonus = this.ability.GetSpecialValue('imba_lina_fiery_soul', 'fiery_soul_move_speed_bonus');
    _fiery_soul_magic_resistance_bonus = this.ability.GetSpecialValue('imba_lina_fiery_soul', 'fiery_soul_magic_resist');
    _fiery_soul_max_stacks = this.ability.GetSpecialValue('imba_lina_fiery_soul', 'fiery_soul_max_stacks');
    _fiery_soul_stack_duration = this.ability.GetSpecialValue('imba_lina_fiery_soul', 'fiery_soul_stack_duration');
    _bonus_spell_damage = this.ability.GetSpecialValue('imba_lina_fiery_soul', 'bonus_spell_damage');
    _target_crit_multiplier = this.ability.GetSpecialValue('imba_lina_fiery_soul', 'target_crit_multiplier');
    _target_crit_debuff_duration = this.ability.GetSpecialValue('imba_lina_fiery_soul', 'target_crit_debuff_duration');
    GetModifierConfig(): ModifierConfig {
        return {
            is_debuff: false,
            is_hidden: this.GetStackCount() <= 0,
            not_purgable: true,
            not_purgable_exception: true,
            not_remove_on_death: true,
            not_destroy_on_expire: true,
        };
    }

    OnCreated(params: ModifierParams): void {}

    DeclareFunctions(): ModifierFunction[] {
        return CDeclareFunctions(
            ModifierFunction.MAGICAL_RESISTANCE_BONUS,
            ModifierFunction.ATTACKSPEED_BONUS_CONSTANT,
            ModifierFunction.MOVESPEED_BONUS_PERCENTAGE
        );
    }

    GetModifierMoveSpeedBonus_Percentage(): number {
        return this._fiery_soul_move_speed_bonus * this.GetStackCount();
    }

    GetModifierAttackSpeedBonus_Constant(): number {
        return this._fiery_soul_attack_speed_bonus * this.GetStackCount();
    }

    GetModifierMagicalResistanceBonus(event: ModifierAttackEvent): number {
        return this._fiery_soul_magic_resistance_bonus * this.GetStackCount();
    }

    _customDeclare = [ModifierFunctions.DamageEvent_OriginDamage];
    CustomDeclareFunctions(): ModifierFunctions[] {
        return this._customDeclare;
    }

    OnIntervalThink(): void {
        this.SetStackCount(0);
        this.StartIntervalThink(-1);
    }

    DamageEvent_OriginDamage(dmgTable: DamageTable): void {
        if (dmgTable.sourceAbility && !dmgTable.sourceAbility.IsItem() && dmgTable.attacker == this.parent && !dmgTable.extra_data.no_fiery_soul) {
            if (this.GetStackCount() < this._fiery_soul_max_stacks) {
                this.IncrementStackCount();
                this.SetDuration(this._fiery_soul_stack_duration, true);
                this.StartIntervalThink(this._fiery_soul_stack_duration);
            }
        }
    }
}
