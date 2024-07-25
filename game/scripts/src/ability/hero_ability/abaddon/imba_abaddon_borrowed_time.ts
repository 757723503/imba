@registerAbility()
export class imba_abaddon_borrowed_time extends BaseAbility {
    GetIntrinsicModifierName(): string {
        return 'modifier_imba_abaddon_borrowed_time_passive';
    }

    OnSpellStart(): void {
        this.caster.CPurge({
            removeDebuffs: true,
            removeExceptions: true,
            removePositiveBuffs: false,
        });
        print('OnSpellStart', this.GetSpecialValue('imba_abaddon_borrowed_time', 'duration'));
        this.caster.AddModifier(this.caster, this, modifier_imba_abaddon_borrowed_time, {
            duration: this.GetSpecialValue('imba_abaddon_borrowed_time', 'duration'),
        });
    }
}
@registerModifier()
export class modifier_imba_abaddon_borrowed_time_passive extends BaseModifier {
    GetModifierConfig(): ModifierConfig {
        return {
            is_hidden: true,
            is_debuff: false,
            not_purgable: true,
            not_purgable_exception: true,
            not_remove_on_death: true,
        };
    }

    CustomDeclareFunctions(): ModifierFunctions[] {
        return this._custom_on_take_damage;
    }

    _custom_on_take_damage = [ModifierFunctions.DamageEvent_EndDamage];
    _hp_threshold = this.ability.GetSpecialValue('imba_abaddon_borrowed_time', 'hp_threshold');
    DamageEvent_EndDamage(
        attacker: CDOTA_BaseNPC,
        victim: CDOTA_BaseNPC,
        damage_property: DamageProperty,
        damage_type: DamageType,
        damage_flag: DamageFlags,
        damage: number
    ): void {
        if (victim != this.parent) return;
        if (damage <= 0) return;
        if (this.parent.GetHealth() - damage <= this._hp_threshold && this.ability.IsCooldownReady()) {
            this.ability.OnSpellStart();
        }
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
            particleAttach: ParticleAttachment.POINT_FOLLOW,
            owner: this.parent,
            caster: this.caster,
            modifier: this,
        });
        CSetParticleControl(pfx, 0, this.parent.GetAbsOrigin());
    }

    OnRefresh(params: ModifierParams): void {
        if (!IsServer() || !CIsValid(this.ability)) return;
        const pfx = CCreateParticle({
            particleName: HeroParticleList.imba_abaddon_borrowed_time,
            particleAttach: ParticleAttachment.POINT_FOLLOW,
            owner: this.parent,
            caster: this.caster,
            modifier: this,
        });
        CSetParticleControl(pfx, 0, this.parent.GetAbsOrigin());
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
        CCreateParticle({
            caster: this.caster,
            owner: this.parent,
            particleAttach: ParticleAttachment.ABSORIGIN_FOLLOW,
            particleName: HeroParticleList.imba_abaddon_borrowed_time_heal,
            extraData: {
                duration: 1.5,
                immediate: true,
            },
        });
        return true;
    }
}
