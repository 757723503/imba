@registerAbility()
export class imba_antimage_counterspell extends BaseAbility {
    GetIntrinsicModifierName(): string {
        return 'modifier_imba_antimage_counterspell_passive';
    }

    _duration = this.GetSpecialValue('imba_antimage_counterspell', 'duration');
    OnSpellStart(): void {
        this.caster.AddModifier(this.caster, this, modifier_imba_antimage_counterspell, { duration: this._duration });
    }
}
@registerModifier()
export class modifier_imba_antimage_counterspell_passive extends BaseModifier {
    GetModifierConfig(): ModifierConfig {
        return {
            is_hidden: true,
            is_debuff: false,
            not_purgable: true,
            not_purgable_exception: true,
            not_remove_on_death: true,
        };
    }

    DeclareFunctions(): ModifierFunction[] {
        return CDeclareFunctions(ModifierFunction.MAGICAL_RESISTANCE_BONUS);
    }

    _magic_resistance = this.ability.GetSpecialValue('imba_antimage_counterspell', 'magic_resistance');
    GetModifierMagicalResistanceBonus(event: ModifierAttackEvent): number {
        return this._magic_resistance;
    }
}
@registerModifier()
export class modifier_imba_antimage_counterspell extends BaseModifier {
    GetModifierConfig(): ModifierConfig {
        return {
            is_debuff: false,
            is_hidden: false,
            not_purgable: true,
            not_purgable_exception: true,
        };
    }

    OnCreated(params: ModifierParams): void {
        const pfx = CCreateParticle({
            particleName: HeroParticleList.imba_antimage_counterspell_buff,
            particleAttach: ParticleAttachment.ABSORIGIN_FOLLOW,
            owner: this.parent,
            modifier: this,
            caster: this.caster,
            // extraData: { immediate: true },
        });
        const ex = this.parent.GetModelScale() * 100;
        CSetParticleControlEnt(pfx, 0, this.parent, ParticleAttachment.POINT_FOLLOW, 'attach_hitloc', this.parent.GetAbsOrigin(), true);
        CSetParticleControl(pfx, 1, Vector(ex, 0, 0));
    }

    DeclareFunctions(): ModifierFunction[] {
        return CDeclareFunctions(ModifierFunction.ABSORB_SPELL, ModifierFunction.REFLECT_SPELL);
    }

    GetAbsorbSpell(event: ModifierAbilityEvent): 0 | 1 {
        const pfx = CCreateParticle({
            caster: this.caster,
            owner: this.parent,
            particleAttach: ParticleAttachment.ABSORIGIN_FOLLOW,
            particleName: HeroParticleList.imba_antimage_counterspell_absorb,
            duration: 2,
        });
        CSetParticleControlEnt(pfx, 0, this.parent, ParticleAttachment.POINT_FOLLOW, 'attach_hitloc', this.parent.GetAbsOrigin(), true);

        return 1;
    }

    GetReflectSpell(event: ModifierAbilityEvent): 0 | 1 {
        const pfx = CCreateParticle({
            caster: this.caster,
            owner: this.parent,
            particleAttach: ParticleAttachment.ABSORIGIN_FOLLOW,
            particleName: HeroParticleList.imba_antimage_counterspell_reflect,
            duration: 2,
        });
        CSetParticleControlEnt(pfx, 0, this.parent, ParticleAttachment.POINT_FOLLOW, 'attach_hitloc', this.parent.GetAbsOrigin(), true);

        const ability = event.ability;
        const reflect_target = ability.GetCaster();
        if (CIsValid(ability) && CIsValid(reflect_target)) {
            const reflect_ability = this.parent.AddAbility(ability.GetAbilityName());
            reflect_ability.SetLevel(ability.GetLevel());
            // reflect_ability.SetHidden(true);
            // reflect_ability.SetStolen(true);
            // reflect_ability.target = reflect_target;
            reflect_ability.OnSpellStart();
            // this.parent.SetCursorTargetingNothing(true);
            // this.parent.RemoveAbilityByHandle(reflect_ability);
        }
        return 1;
    }
}
