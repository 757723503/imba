@registerAbility()
export class imba_abaddon_borrowed_time extends BaseAbility {
    GetIntrinsicModifierName(): string {
        return 'modifier_imba_abaddon_borrowed_time_passive';
    }

    _duration = this.GetSpecialValue('imba_abaddon_borrowed_time', 'duration');
    OnSpellStart(): void {
        this.caster.EmitSound('Hero_Abaddon.BorrowedTime');
        this.caster.CPurge({
            removeDebuffs: true,
            removeExceptions: true,
            removePositiveBuffs: false,
        });
        this.caster.AddModifier(this.caster, this, modifier_imba_abaddon_borrowed_time, {
            duration: this._duration,
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
        if (this.parent.PassivesDisabled()) return;
        if (damage <= 0) return;
        if (this.parent.GetHealth() - damage <= this._hp_threshold && this.ability.IsCooldownReady()) {
            // this.ability.OnSpellStart();
            this.ability.UseResources(false, false, false, true);
        }
    }
}
@registerModifier()
class modifier_imba_abaddon_borrowed_time extends BaseModifier {
    GetModifierConfig(): ModifierConfig {
        return {
            is_debuff: false,
            is_hidden: false,
            not_purgable: false,
            not_purgable_exception: false,
        };
    }

    _immolate_aoe = this.ability.GetSpecialValue('imba_abaddon_borrowed_time', 'immolate_aoe');
    GetAuraConfig(): AuraConfig {
        return {
            aura_modifier: 'modifier_imba_abaddon_borrowed_time_talent',
            aura_radius: this._immolate_aoe,
            is_aura: this.parent.CHasTalent(HeroTalent.imba_abaddon_immolation),
            search_flag: UnitTargetFlags.NONE,
            search_team: UnitTargetTeam.BOTH,
            search_type: UnitTargetType.HERO + UnitTargetType.BASIC,
            aura_entity_reject: unit => {
                return unit != this.parent && this.parent.IsAlly(unit);
            },
        };
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

    GetStatusEffectName(): string {
        return HeroParticleList.imba_abaddon_borrowed_time_status;
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

    _shield_value = this.caster.HasScepter()
        ? [ModifierFunctions.DamageFixed_VictimIgnoreAllDamage, ModifierFunctions.DamageEvent_BorrowedTimeRecord]
        : [ModifierFunctions.DamageFixed_VictimIgnoreAllDamage];

    CustomDeclareFunctions(): ModifierFunctions[] {
        return this._shield_value;
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
            duration: 1.5,
            extraData: {
                immediate: true,
                limits: { limit: 1, time: FrameTime() },
            },
        });
        return true;
    }

    _ally: Record<EntityIndex, { damage: number; record: boolean }> = {};
    _ally_threshold_scepter = this.ability.GetSpecialValue('imba_abaddon_borrowed_time', 'ally_threshold_scepter');
    _redirect_range_scepter = this.ability.GetSpecialValue('imba_abaddon_borrowed_time', 'redirect_range_scepter');
    DamageEvent_BorrowedTimeRecord(
        attacker: CDOTA_BaseNPC,
        victim: CDOTA_BaseNPC_Hero,
        damage: number,
        damage_property: DamageProperty,
        damage_type: DamageType,
        damage_flag: DamageFlags
    ): void {
        if (!this.caster.HasScepter()) return;
        if (this.caster.IsEnemy(victim)) return;
        if (GetDistance(this.parent.GetAbsOrigin(), victim.GetAbsOrigin()) > this._redirect_range_scepter) return;
        if (this._ally[victim.entindex()] == undefined) {
            this._ally[victim.entindex()] = { damage: 0, record: true };
        }
        this._ally[victim.entindex()].record && (this._ally[victim.entindex()].damage += damage);
        if (this._ally[victim.entindex()].damage >= this._ally_threshold_scepter && this._ally[victim.entindex()].record) {
            const ability = this.caster.FindAbilityByName(HeroAbility.imba_abaddon_death_coil);
            if (ability && ability.GetLevel() > 0) {
                this._ally[victim.entindex()].record = false;
                ability['PlayEffect'](victim, () => {
                    this._ally[victim.entindex()].record = true;
                    this._ally[victim.entindex()].damage -= this._ally_threshold_scepter;
                });
            }
        }
    }
}
@registerModifier()
class modifier_imba_abaddon_borrowed_time_talent extends BaseModifier {
    GetModifierConfig(): ModifierConfig {
        return {
            is_debuff: true,
            is_hidden: false,
            not_purgable: false,
            not_purgable_exception: false,
        };
    }

    _immolate_damage = this.ability.GetSpecialValue('imba_abaddon_borrowed_time', 'immolate_damage');
    _immolate_tick = this.ability.GetSpecialValue('imba_abaddon_borrowed_time', 'immolate_tick');
    OnCreated(): void {
        if (!IsServer()) return;
        this.StartIntervalThink(this._immolate_tick);
    }

    OnIntervalThink(): void {
        CAddDamage({
            attacker: this.caster,
            victim: this.parent,
            sourceAbility: this.ability,
            damage: this._immolate_damage * this._immolate_tick,
            damageType: DamageType.Magical,
            damageFlags: DamageFlags.None,
            damageProperty: DamageProperty.Ability,
        });
    }
}
