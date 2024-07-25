@registerAbility()
export class imba_abaddon_aphotic_shield extends BaseAbility {
    OnSpellStart(): void {
        if (this.target.HasModifier('modifier_imba_abaddon_aphotic_shield')) {
            this.target.FindModifierByName('modifier_imba_abaddon_aphotic_shield')?.Destroy();
        }
        this.target.AddModifier(this.caster, this, modifier_imba_abaddon_aphotic_shield, {
            duration: this.GetSpecialValue('imba_abaddon_aphotic_shield', 'duration'),
        });
    }
}
@registerModifier()
class modifier_imba_abaddon_aphotic_shield extends BaseModifier {
    GetModifierConfig(): ModifierConfig {
        if (!IsServer()) return;
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
        });
        const ex = this.parent.GetModelScale() * 100;
        CSetParticleControlEnt(pfx, 0, this.parent, ParticleAttachment.POINT_FOLLOW, 'attach_hitloc', this.parent.GetAbsOrigin(), true);
        CSetParticleControl(pfx, 1, Vector(ex, 0, 0));
        CSetParticleControl(pfx, 2, this.parent.GetAbsOrigin());
        CSetParticleControl(pfx, 4, this.parent.GetAbsOrigin());
        CSetParticleControl(pfx, 5, this.parent.GetAbsOrigin());
    }

    _shield_value = [ModifierFunctions.AddParentShieldData];
    CustomDeclareFunctions(): ModifierFunctions[] {
        if (!IsServer()) return;
        return this._shield_value;
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
                CParticleManager.CreateParticle({
                    particleName: HeroParticleList.imba_abaddon_aphotic_shield_hit,
                    particleAttach: ParticleAttachment.ABSORIGIN_FOLLOW,
                    owner: unit,
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
