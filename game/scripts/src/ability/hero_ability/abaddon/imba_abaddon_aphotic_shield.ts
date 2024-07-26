@registerAbility()
export class imba_abaddon_aphotic_shield extends BaseAbility {
    OnSpellStart(): void {
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
        CSetParticleControlEnt(pfx, 0, this.parent, ParticleAttachment.POINT_FOLLOW, 'attach_hitloc', this.parent.GetAbsOrigin(), true);
        CSetParticleControl(pfx, 1, Vector(ex, 0, 0));
        CSetParticleControl(pfx, 2, this.parent.GetAbsOrigin());
        CSetParticleControl(pfx, 4, this.parent.GetAbsOrigin());
        CSetParticleControl(pfx, 5, this.parent.GetAbsOrigin());
    }

    _shield_value =
        this.caster.CGetFaceID() == 1
            ? [ModifierFunctions.AddParentShieldData, ModifierFunctions.DamageEvent_ReflectSharedDamage]
            : [ModifierFunctions.AddParentShieldData];

    _absorb_to_damage = this.ability.GetSpecialValue('imba_abaddon_aphotic_shield', 'absorb_to_damage');
    _regen = this.ability.GetSpecialValue('imba_abaddon_aphotic_shield', 'regen');
    CustomDeclareFunctions(): ModifierFunctions[] {
        if (!IsServer()) return;
        return this._shield_value;
    }

    DeclareFunctions(): ModifierFunction[] {
        return CDeclareFunctions(ModifierFunction.HEALTH_REGEN_CONSTANT);
    }

    GetModifierConstantHealthRegen(): number {
        return this._regen;
    }

    DamageEvent_ReflectSharedDamage(attacker: CDOTA_BaseNPC, damage_type: DamageType, damage: number): void {
        if (this.caster.CGetFaceID() != 1) return;
        const enemies = CFindUnitsInRadius({
            flagFilter: UnitTargetFlags.FOW_VISIBLE,
            location: this.parent.GetAbsOrigin(),
            order: FindOrder.CLOSEST,
            radius: this.ability.GetSpecialValue('imba_abaddon_aphotic_shield', 'absorb_damage_aoe'),
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
            CSetParticleControlEnt(pfx, 0, unit, ParticleAttachment.CENTER_FOLLOW, 'attach_hitloc', unit.GetAbsOrigin(), false);
            CSetParticleControlEnt(pfx, 1, this.parent, ParticleAttachment.CENTER_FOLLOW, 'attach_hitloc', this.parent.GetAbsOrigin(), false);
            CAddDamage({
                attacker: this.caster,
                damage: damage * this._absorb_to_damage * 0.01,
                damageProperty: DamageProperty.Ability,
                damageType: damage_type,
                victim: unit,
                damageFlags: DamageFlags.DoNotReflect,
            });
        });
    }

    AddParentShieldData(): ShieldData {
        if (!IsServer()) return;
        return {
            max_value: this.ability.GetSpecialValue('imba_abaddon_aphotic_shield', 'damage_absorb'),
            shield_type: ShieldType.All,
            on_remove: shiled => {
                this.Destroy();
            },
        };
    }

    OnDestroy(): void {
        if (!IsServer() || !CIsValid(this.ability)) return;
        const radius = this.ability.GetSpecialValue('imba_abaddon_aphotic_shield', 'radius');
        const enemy = CFindUnitsInRadius({
            team: this.caster.GetTeamNumber(),
            location: this.parent.GetAbsOrigin(),
            radius: radius,
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
                });
            }
        });
    }
}
