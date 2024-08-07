@registerAbility()
export class imba_axe_one_man_army extends BaseAbility {
    _radius = this.ability.GetSpecialValue('imba_axe_one_man_army', 'radius');
    GetCastRange(location: Vector, target: CDOTA_BaseNPC | undefined): number {
        return this._radius;
    }

    GetIntrinsicModifierName(): string {
        return 'modifier_imba_axe_one_man_army';
    }
}
@registerModifier()
export class modifier_imba_axe_one_man_army extends BaseModifier {
    GetModifierConfig(): ModifierConfig {
        return {
            is_debuff: false,
            is_hidden: false,
            not_purgable: true,
            not_purgable_exception: true,
            not_remove_on_death: true,
        };
    }

    _pfx: ParticleID;
    OnCreated(params: ModifierParams): void {
        this.StartIntervalThink(0.1);
        this._pfx = this.PlayEffects();
    }

    DeclareFunctions(): ModifierFunction[] {
        return CDeclareFunctions(ModifierFunction.STATS_STRENGTH_BONUS);
    }

    GetModifierBonusStats_Strength(): number {
        return this.parent.PassivesDisabled()
            ? 0
            : this.GetStackCount() == -1
              ? this._armor_pct_as_strength * this.caster.GetPhysicalArmorValue(false) * 0.01
              : 0;
    }

    _armor_pct_as_strength = this.ability.GetSpecialValue('imba_axe_one_man_army', 'armor_pct_as_strength');
    _radius = this.ability.GetSpecialValue('imba_axe_one_man_army', 'radius');
    _bonus_linger_duration = this.ability.GetSpecialValue('imba_axe_one_man_army', 'bonus_linger_duration');

    _effect: boolean = false;

    PlayEffects(): ParticleID {
        return CCreateParticle({
            caster: this.caster,
            owner: this.parent,
            particleAttach: ParticleAttachment.ABSORIGIN_FOLLOW,
            particleName: HeroParticleList.imba_axe_armor,
        });
    }

    OnIntervalThink(): void {
        const units = CFindUnitsInRadius({
            team: this.caster.GetTeamNumber(),
            location: this.caster.GetAbsOrigin(),
            flagFilter: UnitTargetFlags.NOT_ILLUSIONS,
            teamFilter: UnitTargetTeam.FRIENDLY,
            typeFilter: UnitTargetType.HERO,
            radius: this._radius,
            order: FindOrder.CLOSEST,
        });
        if (units.length > 1) {
            if (this._effect) {
                this.StartIntervalThink(-1);
                Timers.CreateTimer(this._bonus_linger_duration, () => {
                    if (CIsValid(this)) {
                        this._effect = false;
                        this.SetStackCount(0);
                        this.StartIntervalThink(0.1);
                        this._pfx && CDestroyParticle(this._pfx);
                    }
                    return null;
                });
            }
        } else {
            if (!this._effect) {
                this.SetStackCount(-1);
                this._effect = true;
                !this._pfx && (this._pfx = this.PlayEffects());
            }
        }
    }
}
