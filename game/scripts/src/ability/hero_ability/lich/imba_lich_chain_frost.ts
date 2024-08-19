@registerAbility()
export class imba_lich_chain_frost extends BaseAbility {
    _initial_projectile_speed = this.GetSpecialValue('imba_lich_chain_frost', 'initial_projectile_speed');
    _projectile_speed = this.GetSpecialValue('imba_lich_chain_frost', 'projectile_speed');
    _has_unlimited_jumps = this.GetSpecialValue('imba_lich_chain_frost', 'has_unlimited_jumps');
    _vision_radius = this.GetSpecialValue('imba_lich_chain_frost', 'vision_radius');
    _jump_range = this.GetSpecialValue('imba_lich_chain_frost', 'jump_range');
    _jumps = this.GetSpecialValue('imba_lich_chain_frost', 'jumps');
    _damage = this.GetSpecialValue('imba_lich_chain_frost', 'damage');
    _bonus_jump_damage = this.GetSpecialValue('imba_lich_chain_frost', 'bonus_jump_damage');
    _slow_duration = this.GetSpecialValue('imba_lich_chain_frost', 'slow_duration');
    _should_fire_chain_frost_on_death = this.GetSpecialValue('imba_lich_chain_frost', 'should_fire_chain_frost_on_death');
    OnSpellStart(keys?: SpellStartParams): void {
        this.PlayEffect(this.caster, this.target, 0);
    }

    OnOwnerDied(): void {
        if (this._should_fire_chain_frost_on_death == 1) {
            const enemies = CFindUnitsInRadius({
                team: this.caster.GetTeamNumber(),
                location: this.caster.GetAbsOrigin(),
                flagFilter: UnitTargetFlags.FOW_VISIBLE,
                teamFilter: UnitTargetTeam.ENEMY,
                typeFilter: UnitTargetType.HERO + UnitTargetType.BASIC,
                radius: this._jump_range,
                order: FindOrder.CLOSEST,
            });
            for (const enemy of enemies) {
                this.PlayEffect(this.caster, enemy, 0);
                break;
            }
        }
    }

    PlayEffect(start_unit: CDOTA_BaseNPC, end_unit: CDOTA_BaseNPC, count: number): void {
        CProjectileManager.CreateTrackingProjectile({
            moveSpeed: count == 0 ? this._initial_projectile_speed : this._projectile_speed,
            source: start_unit,
            target: end_unit,
            extraData: { count: count },
            dodgeable: false,
            ability: this.ability,
            vision_data: {
                visionRadius: this._vision_radius,
                visionTeamNumber: this.caster.GetTeamNumber(),
                visionDuration: 1,
            },
            // effectName: 'particles/units/heroes/hero_lich/lich_chain_frost.vpcf',
            OnHitUnit: (unit, position) => {
                if (unit.IsBoss() && count > 0) {
                } else {
                    CAddDamage({
                        attacker: this.caster,
                        victim: unit,
                        sourceAbility: this.ability,
                        damage: this._damage + this._bonus_jump_damage * count,
                        damageType: DamageType.Magical,
                        damageFlags: DamageFlags.None,
                        damageProperty: DamageProperty.Ability,
                    });
                    unit.AddModifier(this.caster, this.ability, modifier_imba_lich_chain_frost_slow, { duration: this._slow_duration });
                }
                Timers.CreateTimer(0.2, () => {
                    if (!this || !CIsValid(this)) return;
                    const max_jumps = this._has_unlimited_jumps ? 9999 : this._jumps;
                    if (count >= max_jumps) {
                        return;
                    }
                    const enemies = CFindUnitsInRadius({
                        team: this.caster.GetTeamNumber(),
                        location: position,
                        flagFilter: UnitTargetFlags.FOW_VISIBLE,
                        teamFilter: UnitTargetTeam.ENEMY,
                        typeFilter: UnitTargetType.HERO + UnitTargetType.BASIC,
                        radius: this._jump_range,
                        order: FindOrder.ANY,
                    });
                    if (enemies.length > 1) {
                        for (const enemy of enemies) {
                            if (enemy != unit) {
                                this.PlayEffect(unit, enemy, count + 1);
                                break;
                            }
                        }
                    }
                });
            },
        });
    }
}
@registerModifier()
export class modifier_imba_lich_chain_frost_slow extends BaseModifier {
    _slow_movement_speed = this.ability.GetSpecialValue('imba_lich_chain_frost', 'slow_movement_speed');
    _slow_attack_speed = this.ability.GetSpecialValue('imba_lich_chain_frost', 'slow_attack_speed');
    GetModifierConfig(): ModifierConfig {
        return {
            is_debuff: true,
            is_hidden: false,
        };
    }

    OnCreated(params: ModifierParams): void {}

    DeclareFunctions(): ModifierFunction[] {
        return CDeclareFunctions(ModifierFunction.MOVESPEED_BONUS_PERCENTAGE, ModifierFunction.ATTACKSPEED_BONUS_CONSTANT);
    }

    GetModifierMoveSpeedBonus_Percentage(): number {
        return this._slow_movement_speed;
    }

    GetModifierAttackSpeedBonus_Constant(): number {
        return this._slow_attack_speed;
    }
}
