//反击螺旋
@registerAbility()
export class imba_axe_counter_helix extends BaseAbility {
    _radius = this.ability.GetSpecialValue('imba_axe_counter_helix', 'radius');
    GetCastRange(location: Vector, target: CDOTA_BaseNPC | undefined): number {
        return this._radius;
    }

    GetIntrinsicModifierName(): string {
        return 'modifier_imba_axe_counter_helix';
    }
}
@registerModifier()
class modifier_imba_axe_counter_helix extends BaseModifier {
    GetModifierConfig(): ModifierConfig {
        return {
            is_debuff: false,
            is_hidden: false,
            not_purgable: true,
            not_purgable_exception: true,
            not_remove_on_death: true,
            allow_illusion_duplicate: true,
        };
    }

    _trigger_attacks = this.ability.GetSpecialValue('imba_axe_counter_helix', 'trigger_attacks');
    _damage = this.ability.GetSpecialValue('imba_axe_counter_helix', 'damage');
    _radius = this.ability.GetSpecialValue('imba_axe_counter_helix', 'radius');

    _damage_reduction = this.ability.GetSpecialValue('imba_axe_counter_helix', 'damage_reduction');
    _max_stacks = this.ability.GetSpecialValue('imba_axe_counter_helix', 'max_stacks');
    _attacks_increase_counter = this.ability.GetSpecialValue('imba_axe_counter_helix', 'attacks_increase_counter');
    _debuff_duration = this.ability.GetSpecialValue('imba_axe_counter_helix', 'debuff_duration');
    _custom = this.parent.HasScepter()
        ? [ModifierFunctions.OnAttackLanded_Target, ModifierFunctions.OnAttackLanded_Attacker]
        : [ModifierFunctions.OnAttackLanded_Target];

    CustomDeclareFunctions(): ModifierFunctions[] {
        return this._custom;
    }

    OnAttackLanded_Target(AttackData: UnitEventAttackDamageData): void {
        if (AttackData.damageTable.attacker.IsUnit() && !AttackData.damageTable.victim.PassivesDisabled() && this.ability.IsCooldownReady()) {
            this.GetStackCount() > 0 && this.DecrementStackCount();
            if (this.GetStackCount() <= 0) {
                this.PlayEffects();
                this.SetStackCount(this._trigger_attacks);
                this.ability.UseResources(false, false, false, true);
            }
        }
    }

    OnAttackLanded_Attacker(AttackData: UnitEventAttackDamageData): void {
        if (AttackData.damageTable.victim.IsUnit() && !AttackData.damageTable.attacker.PassivesDisabled() && this.ability.IsCooldownReady()) {
            this.GetStackCount() > 0 && this.DecrementStackCount();
            if (this.GetStackCount() <= 0) {
                this.PlayEffects();
                this.SetStackCount(this._trigger_attacks);
                this.ability.UseResources(false, false, false, true);
            }
        }
    }

    PlayEffects(): void {
        this.caster.StartGestureWithPlaybackRate(GameActivity.DOTA_CAST_ABILITY_3, 1.0);
        const enemies = CFindUnitsInRadius({
            flagFilter: UnitTargetFlags.NONE,
            location: this.parent.GetAbsOrigin(),
            order: FindOrder.CLOSEST,
            radius: this._radius,
            team: this.parent.GetTeamNumber(),
            teamFilter: UnitTargetTeam.ENEMY,
            typeFilter: UnitTargetType.HERO + UnitTargetType.BASIC,
        });
        enemies.forEach(enemy => {
            CAddDamage({
                attacker: this.parent,
                damage: this._damage,
                damageProperty: DamageProperty.Ability,
                damageType: DamageType.Pure,
                sourceAbility: this.ability,
                victim: enemy,
            });
            if (this.parent.HasScepter()) {
                enemy.AddModifier(this.parent, this.ability, modifier_imba_axe_counter_helix_damage_reduction, { duration: this._debuff_duration });
            }
        });

        CCreateParticle({
            caster: this.parent,
            owner: this.parent,
            particleAttach: ParticleAttachment.ABSORIGIN_FOLLOW,
            particleName: HeroParticleList.imba_axe_counter_helix1,
            duration: 2,
            controlPointData: [{ CP: 0, vector: this.parent.GetAbsOrigin() }],
        });
        CCreateParticle({
            caster: this.parent,
            owner: this.parent,
            particleAttach: ParticleAttachment.ABSORIGIN_FOLLOW,
            particleName: HeroParticleList.imba_axe_counter_helix2,
            duration: 2,
            controlPointData: [{ CP: 0, vector: this.parent.GetAbsOrigin() }],
        });
        CCreateParticle({
            caster: this.parent,
            owner: this.parent,
            particleAttach: ParticleAttachment.ABSORIGIN_FOLLOW,
            particleName: HeroParticleList.imba_axe_counter_helix3,
            duration: 2,
            controlPointData: [
                {
                    CP: 0,
                    vector: this.parent.GetAbsOrigin(),
                    ent: true,
                    attachment: Attachment.ATTACH_WEAPON,
                    particleAttach: ParticleAttachment.POINT_FOLLOW,
                },
            ],
        });
    }
}
@registerModifier()
export class modifier_imba_axe_counter_helix_damage_reduction extends BaseModifier {
    GetModifierConfig(): ModifierConfig {
        return {
            is_debuff: true,
            is_hidden: false,
        };
    }

    OnCreated(params: ModifierParams): void {
        this.IncrementStackCount();
    }

    OnRefresh(params: object): void {
        if (this.GetStackCount() < this._max_stacks) {
            this.IncrementStackCount();
        }
    }

    _max_stacks = this.ability.GetSpecialValue('imba_axe_counter_helix', 'max_stacks');
    _attacks_increase_counter = this.ability.GetSpecialValue('imba_axe_counter_helix', 'attacks_increase_counter');
    _damage_reduction = this.ability.GetSpecialValue('imba_axe_counter_helix', 'damage_reduction');
    _customDeclare = [ModifierFunctions.DamageFixed_VictimSpecialPhysicalDamagePercent];
    DamageFixed_VictimSpecialPhysicalDamagePercent(dmgTable: FixedDamageTable): number {
        return -this.GetStackCount() * this._damage_reduction;
    }

    CustomDeclareFunctions(): ModifierFunctions[] {
        return this._customDeclare;
    }
}
