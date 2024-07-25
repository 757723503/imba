@registerAbility()
export class imba_abaddon_borrowed_time extends BaseAbility {
    OnSpellStart(): void {
        this.caster.AddModifier(this.caster, this, modifier_imba_abaddon_borrowed_time, {
            duration: this.GetSpecialValue('imba_abaddon_borrowed_time', 'duration'),
        });
    }
}
@registerModifier()
class modifier_imba_abaddon_borrowed_time extends BaseModifier {
    GetModifierConfig(): ModifierConfig {
        if (!IsServer()) return;
        return {
            is_debuff: false,
            is_hidden: false,
            not_purgable: true,
            not_purgable_exception: true,
        };
    }

    GetStatusEffectName(): string {
        return HeroParticleList.imba_abaddon_borrowed_time_status;
    }

    OnCreated(params: ModifierParams): void {
        if (!IsServer() || !CIsValid(this.ability)) return;
        const pfx = CCreateParticle({
            particleName: HeroParticleList.imba_abaddon_borrowed_time,
            particleAttach: ParticleAttachment.ABSORIGIN_FOLLOW,
            owner: this.parent,
            caster: this.caster,
            modifier: this,
        });
        const ex = this.parent.GetModelScale() * 100;
        CSetParticleControlEnt(pfx, 0, this.parent, ParticleAttachment.POINT_FOLLOW, 'attach_hitloc', this.parent.GetAbsOrigin(), true);
        CSetParticleControl(pfx, 1, Vector(ex, 0, 0));
        CSetParticleControl(pfx, 2, this.parent.GetAbsOrigin());
        CSetParticleControl(pfx, 4, this.parent.GetAbsOrigin());
        CSetParticleControl(pfx, 5, this.parent.GetAbsOrigin());
    }

    CustomDeclareFunctions(): ModifierFunctions[] {
        if (!IsServer()) return;
        const _shield_value = [ModifierFunctions.DamageFixed_VictimIgnoreAllDamage];
        return _shield_value;
    }

    DamageFixed_VictimIgnoreAllDamage(origin_all: number, attacker: CDOTA_BaseNPC): boolean {
        this.parent.CHeal({
            amount: origin_all,
            inflictor: this.ability,
            reason: HealReason.Heal,
            source: this.caster,
        });
        // CCreateParticle({});
        return true;
    }

    OnDestroy(): void {
        if (!IsServer() || !CIsValid(this.ability)) return;
    }
}
