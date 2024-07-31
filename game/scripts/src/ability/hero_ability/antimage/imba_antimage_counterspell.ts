//法术反制
@registerAbility()
export class imba_antimage_counterspell extends BaseAbility {
    GetIntrinsicModifierName(): string {
        return 'modifier_imba_antimage_counterspell_passive';
    }

    _duration = this.GetSpecialValue('imba_antimage_counterspell', 'duration');
    _illusion_table: CDOTA_BaseNPC[] = [];
    OnSpellStart(): void {
        this.caster.AddModifier(this.caster, this, modifier_imba_antimage_counterspell, { duration: this._duration });
        if (this._illusion_table.length > 0) {
            this._illusion_table.forEach(illusion => {
                this._illusion_table = this._illusion_table.filter(illu => CIsAlive(illu));
                if (CIsAlive(illusion)) {
                    illusion.AddModifier(this.caster, this, modifier_imba_antimage_counterspell, { duration: this._duration });
                }
            });
        }
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
        CSetParticleControlEnt(pfx, 0, this.parent, ParticleAttachment.POINT_FOLLOW, Attachment.ATTACH_HITLOC, this.parent.GetAbsOrigin(), true);
        CSetParticleControl(pfx, 1, Vector(ex, 0, 0));
    }

    DeclareFunctions(): ModifierFunction[] {
        if (this.GetCaster().CGetFaceID() == 1) {
            return CDeclareFunctions(ModifierFunction.ABSORB_SPELL, ModifierFunction.REFLECT_SPELL);
        } else {
            return CDeclareFunctions(ModifierFunction.ABSORB_SPELL);
        }
    }

    _dec = [ModifierFunctions.AddSpellAmpData];
    CustomDeclareFunctions(): ModifierFunctions[] {
        return this._dec;
    }

    _reflected_spell_amp = this.ability.GetSpecialValue('imba_antimage_counterspell', 'reflected_spell_amp');
    _spell_amp_data: SpellAmpData = {
        value: this._reflected_spell_amp,
        ability_name: ['imba_antimage_counterspell'],
    };

    AddSpellAmpData(): SpellAmpData {
        return this._spell_amp_data;
    }

    _duration_illusion = this.ability.GetSpecialValue('imba_antimage_counterspell', 'duration_illusion');
    _outgoing_damage = this.ability.GetSpecialValue('imba_antimage_counterspell', 'outgoing_damage');
    _incoming_damage = this.ability.GetSpecialValue('imba_antimage_counterspell', 'incoming_damage');
    GetAbsorbSpell(event: ModifierAbilityEvent): 0 | 1 {
        const pfx = CCreateParticle({
            caster: this.caster,
            owner: this.parent,
            particleAttach: ParticleAttachment.ABSORIGIN_FOLLOW,
            particleName: HeroParticleList.imba_antimage_counterspell_absorb,
            duration: 2,
        });
        CSetParticleControlEnt(pfx, 0, this.parent, ParticleAttachment.POINT_FOLLOW, Attachment.ATTACH_HITLOC, this.parent.GetAbsOrigin(), true);
        if (this.caster.HasShard()) {
            CIllusionManager.CreateIllusionsAsync({
                callback(illusions) {
                    illusions.AddModifier(this.caster, this, modifier_imba_antimage_mana_overload_noorder, { duration: this._duration });
                },
                heroToCopy: this.caster,
                modifierKeys: {
                    duration: this._duration_illusion,
                    outgoing_damage: 100 + this._outgoing_damage,
                    incoming_damage: this._incoming_damage,
                },
                numIllusions: 1,
                owner: this.caster,
            });
        }

        return 1;
    }

    GetReflectSpell(event: ModifierAbilityEvent): 0 | 1 {
        if (this.caster.CGetFaceID() != 1) return 0;
        const ability = event.ability;
        const reflect_target = ability.GetCaster();
        if (reflect_target.IsAlly(this.parent)) return 0;
        const pfx = CCreateParticle({
            caster: this.caster,
            owner: this.parent,
            particleAttach: ParticleAttachment.ABSORIGIN_FOLLOW,
            particleName: HeroParticleList.imba_antimage_counterspell_reflect,
            duration: 2,
        });
        CSetParticleControlEnt(pfx, 0, this.parent, ParticleAttachment.POINT_FOLLOW, Attachment.ATTACH_HITLOC, this.parent.GetAbsOrigin(), true);

        if (CIsValid(ability) && CIsValid(reflect_target)) {
            this.parent.CReflectAbility(ability, reflect_target);
            this._spell_amp_data.ability_name.push(ability?.GetAbilityName());
            if (this.parent.HasShard()) {
                CIllusionManager.CreateIllusionsAsync({
                    callback(illusions) {
                        illusions.AddModifier(this.caster, this, modifier_imba_antimage_mana_overload_noorder, { duration: this._duration });
                    },
                    heroToCopy: this.caster,
                    modifierKeys: {
                        duration: this._duration_illusion,
                        outgoing_damage: 100 + this._outgoing_damage,
                        incoming_damage: this._incoming_damage,
                    },
                    numIllusions: 1,
                    owner: this.caster,
                });
            }
        }
        return 1;
    }
}
@registerModifier()
export class modifier_imba_antimage_mana_overload_noorder extends BaseModifier {
    GetModifierConfig(): ModifierConfig {
        return {
            is_hidden: false,
            is_debuff: true,
            not_purgable: true,
            not_purgable_exception: true,
        };
    }

    CheckState(): Partial<Record<modifierstate, boolean>> {
        return {
            [ModifierState.COMMAND_RESTRICTED]: true,
        };
    }
}
