@registerAbility()
export class imba_lich_frost_shield extends BaseAbility {
    _duration = this.GetSpecialValue('imba_lich_frost_shield', 'duration');
    OnSpellStart(keys?: SpellStartParams): void {
        this.target.AddModifier(this.caster, this, modifier_imba_lich_frost_shield, { duration: this._duration });
    }
}
@registerModifier()
export class modifier_imba_lich_frost_shield extends BaseModifier {
    _damage_reduction = this.ability.GetSpecialValue('imba_lich_frost_shield', 'damage_reduction');
    _slow_duration = this.ability.GetSpecialValue('imba_lich_frost_shield', 'slow_duration');
    _damage = this.ability.GetSpecialValue('imba_lich_frost_shield', 'damage');
    _radius = this.ability.GetSpecialValue('imba_lich_frost_shield', 'radius');
    _interval = this.ability.GetSpecialValue('imba_lich_frost_shield', 'interval');
    GetModifierConfig(): ModifierConfig {
        return {
            is_debuff: false,
            is_hidden: false,
        };
    }

    OnCreated(params: ModifierParams): void {
        this.StartIntervalThink(this._interval);
    }

    OnIntervalThink(): void {
        const enemies = CFindUnitsInRadius({
            team: this.caster.GetTeamNumber(),
            location: this.parent.GetAbsOrigin(),
            flagFilter: UnitTargetFlags.NONE,
            teamFilter: UnitTargetTeam.ENEMY,
            typeFilter: UnitTargetType.HERO + UnitTargetType.BASIC,
            radius: this._radius,
            order: FindOrder.CLOSEST,
        });
        enemies.forEach(enemy => {
            CAddDamage({
                attacker: this.caster,
                victim: enemy,
                sourceAbility: this.ability,
                damage: this._damage,
                damageType: DamageType.Magical,
                damageFlags: DamageFlags.None,
                damageProperty: DamageProperty.Ability,
            });
            enemy.AddModifier(this.caster, this.ability, modifier_imba_lich_frost_shield_slow, { duration: this._slow_duration });
        });
    }

    _customDeclare = [ModifierFunctions.DamageFixed_CoreAttackDamagePercent];
    CustomDeclareFunctions(): ModifierFunctions[] {
        return this._customDeclare;
    }

    DamageFixed_CoreAttackDamagePercent(attacker: CDOTA_BaseNPC, victim: CDOTA_BaseNPC): number {
        if (victim == this.parent) {
            return this._damage_reduction;
        }
    }
}
@registerModifier()
export class modifier_imba_lich_frost_shield_slow extends BaseModifier {
    GetModifierConfig(): ModifierConfig {
        return {
            is_debuff: true,
            is_hidden: false,
        };
    }

    _movement_slow = this.ability.GetSpecialValue('imba_lich_frost_shield', 'movement_slow');
    _health_regen = this.ability.GetSpecialValue('imba_lich_frost_shield', 'health_regen');
    OnCreated(params: ModifierParams): void {}

    DeclareFunctions(): ModifierFunction[] {
        return CDeclareFunctions(ModifierFunction.MOVESPEED_BONUS_PERCENTAGE, ModifierFunction.HEALTH_REGEN_CONSTANT);
    }

    GetModifierMoveSpeedBonus_Percentage(): number {
        return -this._movement_slow;
    }

    GetModifierConstantHealthRegen(): number {
        return this._health_regen;
    }
}
