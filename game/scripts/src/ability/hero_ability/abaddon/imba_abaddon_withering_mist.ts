@registerAbility()
export class imba_abaddon_withering_mist extends BaseAbility {
    GetIntrinsicModifierName(): string {
        return 'modifier_imba_abaddon_withering_mist_passive';
    }
}
@registerModifier()
export class modifier_imba_abaddon_withering_mist_passive extends BaseModifier {
    GetModifierConfig(): ModifierConfig {
        return {
            is_hidden: true,
            is_debuff: false,
            not_purgable: true,
            not_purgable_exception: true,
            not_remove_on_death: true,
        };
    }

    _custom_on_take_damage = [ModifierFunctions.DamageEvent_EndDamage];
    CustomDeclareFunctions(): ModifierFunctions[] {
        return this._custom_on_take_damage;
    }

    _duration = this.ability.GetSpecialValue('imba_abaddon_withering_mist', 'duration');
    _hp_threshold_pct = this.ability.GetSpecialValue('imba_abaddon_withering_mist', 'hp_threshold_pct');
    DamageEvent_EndDamage(
        attacker: CDOTA_BaseNPC,
        victim: CDOTA_BaseNPC,
        damage_property: DamageProperty,
        damage_type: DamageType,
        damage_flag: DamageFlags,
        damage: number
    ): void {
        if (attacker != this.parent) return;
        if (damage <= 0) return;
        if (this.parent.PassivesDisabled()) return;
        const heal_percent = victim.GetHealthPercent();
        if (heal_percent <= this._hp_threshold_pct) {
            victim.AddModifier(attacker, this.ability, modifier_imba_abaddon_withering_mist, { duration: this._duration });
        }
    }
}
@registerModifier()
class modifier_imba_abaddon_withering_mist extends BaseModifier {
    GetTexture(): string {
        return this.GetCaster().GetUnitName();
    }

    GetModifierConfig(): ModifierConfig {
        return {
            is_debuff: true,
            is_hidden: false,
        };
    }

    OnCreated(params: ModifierParams): void {
        CCreateParticle({
            caster: this.caster,
            owner: this.parent,
            particleAttach: ParticleAttachment.ABSORIGIN_FOLLOW,
            particleName: HeroParticleList.imba_abaddon_withering_mist,
            modifier: this,
        });
    }

    _heal_reduction_pct = this.ability.GetSpecialValue('imba_abaddon_withering_mist', 'heal_reduction_pct');
    DeclareFunctions(): ModifierFunction[] {
        return [
            ModifierFunction.HP_REGEN_AMPLIFY_PERCENTAGE,
            ModifierFunction.HEAL_AMPLIFY_PERCENTAGE_TARGET,
            ModifierFunction.LIFESTEAL_AMPLIFY_PERCENTAGE,
            ModifierFunction.SPELL_LIFESTEAL_AMPLIFY_PERCENTAGE,
        ];
    }

    GetModifierHPRegenAmplify_Percentage(): number {
        return -this._heal_reduction_pct;
    }

    GetModifierHealAmplify_PercentageTarget(): number {
        return -this._heal_reduction_pct;
    }

    GetModifierLifestealAmplify_Percentage(): number {
        return -this._heal_reduction_pct;
    }

    GetModifierSpellLifestealAmplify_Percentage(): number {
        return -this._heal_reduction_pct;
    }
}
