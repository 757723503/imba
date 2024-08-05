//无光之盾
@registerAbility()
export class imba_abaddon_aphotic_shield extends BaseAbility {
    OnSpellStart(): void {
        this.caster.EmitSound('Hero_Abaddon.AphoticShield.Cast');

        if (this.target.HasModifier('modifier_imba_abaddon_aphotic_shield')) {
            this.target.FindModifierByName('modifier_imba_abaddon_aphotic_shield')?.Destroy();
        }
        this.target.CPurge({
            removeDebuffs: true,
            removeExceptions: true,
            removePositiveBuffs: false,
        });
        this.target.AddModifier(this.caster, this, modifier_imba_abaddon_aphotic_shield, {
            duration: this.GetSpecialValue('imba_abaddon_aphotic_shield', 'duration'),
        });
    }
}
@registerModifier()
class modifier_imba_abaddon_aphotic_shield extends BaseModifier {
    GetModifierConfig(): ModifierConfig {
        return {
            is_debuff: false,
            is_hidden: false,
            not_purgable: true,
            not_purgable_exception: true,
        };
    }

    OnCreated(params: ModifierParams): void {
        if (!IsServer() || !CIsValid(this.ability)) return;
        const pfx = CCreateParticle({
            particleName: HeroParticleList.imba_abaddon_aphotic_shield,
            particleAttach: ParticleAttachment.ABSORIGIN_FOLLOW,
            owner: this.parent,
            modifier: this,
            caster: this.caster,
        });
        const ex = this.parent.GetModelScale() * 100;
        CSetParticleControlEnt(pfx, 0, this.parent, ParticleAttachment.POINT_FOLLOW, Attachment.ATTACH_HITLOC, this.parent.GetAbsOrigin(), true);
        CSetParticleControl(pfx, 1, Vector(ex, 0, 0));
        CSetParticleControl(pfx, 2, this.parent.GetAbsOrigin());
        CSetParticleControl(pfx, 4, this.parent.GetAbsOrigin());
        CSetParticleControl(pfx, 5, this.parent.GetAbsOrigin());

        if (this.caster.CGetFaceID() == 1) {
            const pfx2 = CCreateParticle({
                particleName: HeroParticleList.imba_abaddon_aphotic_shield_mist,
                particleAttach: ParticleAttachment.ABSORIGIN_FOLLOW,
                owner: this.parent,
                modifier: this,
                caster: this.caster,
            });
            const ex2 = this.parent.GetModelScale() * 100;
            CSetParticleControlEnt(pfx2, 0, this.parent, ParticleAttachment.POINT_FOLLOW, Attachment.ATTACH_HITLOC, this.parent.GetAbsOrigin(), true);
            CSetParticleControl(pfx2, 1, Vector(ex2, 0, 0));
            CSetParticleControl(pfx2, 2, this.parent.GetAbsOrigin());
            CSetParticleControl(pfx2, 4, this.parent.GetAbsOrigin());
            CSetParticleControl(pfx2, 5, this.parent.GetAbsOrigin());
        }
    }

    _shield_value = [ModifierFunctions.AddParentShieldData];

    _absorb_to_damage = this.ability.GetSpecialValue('imba_abaddon_aphotic_shield', 'absorb_to_damage');
    _regen = this.ability.GetSpecialValue('imba_abaddon_aphotic_shield', 'regen');
    CustomDeclareFunctions(): ModifierFunctions[] {
        if (!IsServer()) return;
        return this._custom_on_attack_landed_attacker;
    }

    _custom_on_attack_landed_attacker = [
        ModifierFunctions.OnAttackLanded_Attacker,
        ModifierFunctions.AddParentAttackCritData,
        ModifierFunctions.AddExtraAttackerCritsData,
        ModifierFunctions.DamageFixed_AttackTypeChange,
    ];

    AddParentAttackCritData(): CritData {
        return {
            crit_chance: 100,
            crit_rate: 150,
        };
    }

    AddExtraAttackerCritsData(): GoCritData {
        return {
            change_crit_chance: 100,
        };
    }

    DamageFixed_AttackTypeChange(AttackData: FixedDamageTable): DamageType {
        return DamageType.Magical;
    }

    DeclareFunctions(): ModifierFunction[] {
        return CDeclareFunctions(ModifierFunction.HEALTH_REGEN_CONSTANT);
    }

    GetModifierConstantHealthRegen(): number {
        return this._regen;
    }

    _damage_absorb = this.ability.GetSpecialValue('imba_abaddon_aphotic_shield', 'damage_absorb');
    _absorb_damage_aoe = this.ability.GetSpecialValue('imba_abaddon_aphotic_shield', 'absorb_damage_aoe');
    AddParentShieldData(): ShieldData {
        if (!IsServer()) return;
        return {
            max_value: this._damage_absorb,
            shield_type: ShieldType.All,
            on_remove: shiled => {
                this.Destroy();
            },
            on_absorb: shield => {
                if (this.caster.CGetFaceID() != 1) return;
                const damage = shield.absorb_damage;
                const enemies = CFindUnitsInRadius({
                    flagFilter: UnitTargetFlags.FOW_VISIBLE,
                    location: this.parent.GetAbsOrigin(),
                    order: FindOrder.CLOSEST,
                    radius: this._absorb_damage_aoe,
                    team: this.caster.GetTeamNumber(),
                    teamFilter: UnitTargetTeam.ENEMY,
                    typeFilter: UnitTargetType.HERO + UnitTargetType.BASIC,
                });
                enemies.forEach(unit => {
                    const pfx = CCreateParticle({
                        particleName: HeroParticleList.imba_abaddon_aphotic_shield_face_hit,
                        particleAttach: ParticleAttachment.ABSORIGIN_FOLLOW,
                        owner: unit,
                        caster: this.caster,
                        duration: 1,

                        extraData: {
                            immediate: true,
                            limits: { time: FrameTime(), limit: 10 },
                        },
                    });
                    CSetParticleControlEnt(pfx, 0, unit, ParticleAttachment.CENTER_FOLLOW, Attachment.ATTACH_HITLOC, unit.GetAbsOrigin(), false);
                    CSetParticleControlEnt(
                        pfx,
                        1,
                        this.parent,
                        ParticleAttachment.CENTER_FOLLOW,
                        Attachment.ATTACH_HITLOC,
                        this.parent.GetAbsOrigin(),
                        false
                    );
                    CAddDamage({
                        attacker: this.caster,
                        damage: damage * this._absorb_to_damage * 0.01,
                        damageProperty: DamageProperty.Ability,
                        damageType: shield.absorb_damage_type,
                        victim: unit,
                        damageFlags: DamageFlags.DoNotReflect,
                        sourceAbility: this.ability,
                    });
                });
            },
        };
    }

    _radius = this.ability.GetSpecialValue('imba_abaddon_aphotic_shield', 'radius');
    OnDestroy(): void {
        if (!IsServer() || !CIsValid(this.ability)) return;
        this.parent.EmitSound('Hero_Abaddon.AphoticShield.Destroy');

        const enemy = CFindUnitsInRadius({
            team: this.caster.GetTeamNumber(),
            location: this.parent.GetAbsOrigin(),
            radius: this._radius,
            teamFilter: UnitTargetTeam.ENEMY,
            typeFilter: UnitTargetType.HERO + UnitTargetType.BASIC,
            flagFilter: UnitTargetFlags.FOW_VISIBLE,
            order: FindOrder.CLOSEST,
        });
        // unit.EmitSound('Hero_Abaddon.AphoticShield.Destroy');
        enemy.forEach(unit => {
            if (unit.IsAlive() && !unit.IsMagicImmune()) {
                CCreateParticle({
                    particleName: HeroParticleList.imba_abaddon_aphotic_shield_hit,
                    particleAttach: ParticleAttachment.ABSORIGIN_FOLLOW,
                    owner: unit,
                    caster: this.caster,
                });
                CAddDamage({
                    attacker: this.caster,
                    damage: this.ability.GetSpecialValue('imba_abaddon_aphotic_shield', 'damage_absorb'),
                    damageProperty: DamageProperty.Ability,
                    damageType: DamageType.Magical,
                    victim: unit,
                    sourceAbility: this.ability,
                });
            }
        });
    }
}
