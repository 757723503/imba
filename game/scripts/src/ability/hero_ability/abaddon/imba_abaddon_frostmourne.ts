@registerAbility()
export class imba_abaddon_frostmourne extends BaseAbility {
    GetIntrinsicModifierName(): string {
        return 'modifier_imba_abaddon_frostmourne_passive';
    }
}
@registerModifier()
export class modifier_imba_abaddon_frostmourne_passive extends BaseModifier {
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
        return this._custom_on_attack_landed_attacker;
    }

    _custom_on_attack_landed_attacker = [ModifierFunctions.OnAttackLanded_Attacker];

    _curse_interval = this.ability.GetSpecialValue('imba_abaddon_frostmourne', 'curse_interval');

    OnAttackLanded_Attacker(AttackData: UnitEventAttackDamageData): void {
        const victim = AttackData.damageTable.victim;
        if (this.parent.IsIllusion()) return;
        if (this.parent.PassivesDisabled()) return;
        if (victim.IsUnit() || victim.IsBuilding()) {
            victim
                .AddModifier(
                    this.caster,
                    this.ability,
                    modifier_imba_abaddon_frostmourne_debuff,
                    {
                        duration: this.ability.GetSpecialValue('imba_abaddon_frostmourne', 'curse_duration'),
                    },
                    true
                )
                ?.StartIntervalThink(this._curse_interval);
            this.parent.AddModifier(this.parent, this.ability, modifier_imba_abaddon_frostmourne_buff, {
                duration: this.ability.GetSpecialValue('imba_abaddon_frostmourne', 'curse_duration'),
            });
        }
    }
}
@registerModifier()
export class modifier_imba_abaddon_frostmourne_debuff extends BaseModifier {
    GetModifierConfig(): ModifierConfig {
        return {
            is_hidden: false,
            is_debuff: true,
            not_purgable: false,
            not_purgable_exception: false,
        };
    }

    _tower_dps_pct = this.ability.GetSpecialValue('imba_abaddon_frostmourne', 'tower_dps_pct');
    _custom_on_attack_landed = [ModifierFunctions.OnAttackLanded_Target];
    _curse_dps = this.ability.GetSpecialValue('imba_abaddon_frostmourne', 'curse_dps');
    _curse_slow = this.ability.GetSpecialValue('imba_abaddon_frostmourne', 'curse_slow');
    _curse_attack_speed = this.ability.GetSpecialValue('imba_abaddon_frostmourne', 'curse_attack_speed');
    _curse_interval = this.ability.GetSpecialValue('imba_abaddon_frostmourne', 'curse_interval');
    CustomDeclareFunctions(): ModifierFunctions[] {
        return this._custom_on_attack_landed;
    }

    OnAttackLanded_Target(AttackData: UnitEventAttackDamageData): void {
        const attacker = AttackData.damageTable.attacker;
        if (attacker.IsUnit()) {
            attacker.AddModifier(attacker, this.ability, modifier_imba_abaddon_frostmourne_buff, {
                duration: this.ability.GetSpecialValue('imba_abaddon_frostmourne', 'curse_duration'),
            });
        }
    }

    DeclareFunctions(): ModifierFunction[] {
        return CDeclareFunctions(ModifierFunction.MOVESPEED_BONUS_PERCENTAGE, ModifierFunction.ATTACKSPEED_BONUS_CONSTANT);
    }

    GetModifierMoveSpeedBonus_Percentage(): number {
        return 0 - this._curse_slow;
    }

    GetModifierAttackSpeedBonus_Constant(): number {
        return 0 - this._curse_attack_speed;
    }

    OnIntervalThink(): void {
        CAddDamage({
            attacker: this.caster,
            damage: this.parent.IsBlind()
                ? this._curse_dps * this._curse_interval * (this._tower_dps_pct * 0.01)
                : this._curse_dps * this._curse_interval,
            damageType: DamageType.Magical,
            victim: this.parent,
            sourceAbility: this.ability,
            damageProperty: DamageProperty.Ability,
        });
    }

    OnCreated(params: ModifierParams): void {
        CCreateParticle({
            particleName: HeroParticleList.imba_abaddon_frostmourne_debuff,
            particleAttach: ParticleAttachment.ABSORIGIN_FOLLOW,
            owner: this.parent,
            modifier: this,
            caster: this.caster,
        });
        this.parent.EmitSound('Hero_Abaddon.Curse.Proc');
    }

    GetStatusEffectName(): string {
        return HeroParticleList.imba_abaddon_frostmourne_debuff_status;
    }
}
@registerModifier()
export class modifier_imba_abaddon_frostmourne_buff extends BaseModifier {
    GetModifierConfig(): ModifierConfig {
        return {
            is_hidden: false,
            is_debuff: false,
            not_purgable: false,
            not_purgable_exception: false,
        };
    }

    DeclareFunctions(): ModifierFunction[] {
        return CDeclareFunctions(ModifierFunction.MOVESPEED_BONUS_PERCENTAGE, ModifierFunction.ATTACKSPEED_BONUS_CONSTANT);
    }

    GetModifierMoveSpeedBonus_Percentage(): number {
        return this._curse_slow;
    }

    GetModifierAttackSpeedBonus_Constant(): number {
        return this._curse_attack_speed;
    }

    _curse_slow = this.ability.GetSpecialValue('imba_abaddon_frostmourne', 'curse_slow');
    _curse_attack_speed = this.ability.GetSpecialValue('imba_abaddon_frostmourne', 'curse_attack_speed');
}
