@registerAbility()
export class imba_abaddon_frostmourne extends BaseAbility {
    GetIntrinsicModifierName(): string {
        return 'modifier_imba_abaddon_frostmourne_passive';
    }
}
@registerModifier()
export class modifier_imba_abaddon_frostmourne_passive extends BaseModifier {
    CustomDeclareFunctions(): ModifierFunctions[] {
        return this._custom_on_attack_landed_attacker;
    }

    _custom_on_attack_landed_attacker = [ModifierFunctions.OnAttackLanded_Attacker];

    _curse_interval = this.ability.GetSpecialValue('imba_abaddon_frostmourne', 'curse_interval');

    OnAttackLanded_Attacker(AttackData: UnitEventAttackDamageData): void {
        const victim = AttackData.damageTable.victim;
        if (victim.IsUnit() || victim.IsBuilding()) {
            victim
                .AddModifier(this.caster, this.ability, modifier_imba_abaddon_frostmourne_debuff, {
                    duration: this.ability.GetSpecialValue('imba_abaddon_frostmourne', 'curse_duration'),
                })
                ?.StartIntervalThink(this._curse_interval);
            this.parent.AddModifier(this.parent, this.ability, modifier_imba_abaddon_frostmourne_buff, {
                duration: this.ability.GetSpecialValue('imba_abaddon_frostmourne', 'curse_duration'),
            });
        }
    }
}
@registerModifier()
export class modifier_imba_abaddon_frostmourne_debuff extends BaseModifier {
    _custom_on_attack_landed = [ModifierFunctions.OnAttackLanded_Target];
    _curse_dps = this.ability.GetSpecialValue('imba_abaddon_frostmourne', 'curse_dps');
    _curse_slow = this.ability.GetSpecialValue('imba_abaddon_frostmourne', 'curse_slow');
    _curse_attack_speed = this.ability.GetSpecialValue('imba_abaddon_frostmourne', 'curse_attack_speed');
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
        const _declare = [ModifierFunction.MOVESPEED_BONUS_PERCENTAGE, ModifierFunction.ATTACKSPEED_BONUS_CONSTANT];
        return _declare;
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
            damage: this._curse_dps,
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
    }

    GetStatusEffectName(): string {
        return HeroParticleList.imba_abaddon_frostmourne_debuff_status;
    }
}
@registerModifier()
export class modifier_imba_abaddon_frostmourne_buff extends BaseModifier {
    DeclareFunctions(): ModifierFunction[] {
        const _declare = [ModifierFunction.MOVESPEED_BONUS_PERCENTAGE, ModifierFunction.ATTACKSPEED_BONUS_CONSTANT];
        return _declare;
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
