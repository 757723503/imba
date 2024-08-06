@registerAbility()
export class imba_axe_berserkers_call extends BaseAbility {
    _radius = this.GetSpecialValue('imba_axe_berserkers_call', 'radius');
    _duration = this.GetSpecialValue('imba_axe_berserkers_call', 'duration');

    _modifiers: CDOTA_Buff[] = [];
    OnSpellStart(): void {
        const enemies = CFindUnitsInRadius({
            flagFilter: UnitTargetFlags.NONE,
            location: this.caster.GetAbsOrigin(),
            order: FindOrder.CLOSEST,
            radius: this._radius,
            team: this.caster.GetTeamNumber(),
            teamFilter: UnitTargetTeam.ENEMY,
            typeFilter: UnitTargetType.HERO + UnitTargetType.BASIC,
        });

        enemies.forEach(enemy => {
            if (enemy.IsAlive()) {
                const modifer = enemy.AddModifier(this.caster, this, modifier_imba_axe_berserkers_call, {
                    duration: this._duration,
                });
                this._modifiers.push(modifer);
            }
        });
        this.caster.AddModifier(this.caster, this, modifier_imba_axe_berserkers_call_armor, {
            duration: this._duration,
        });
    }

    OnOwnerDied(): void {
        this._modifiers.forEach(modifier => {
            CIsValid(modifier) && modifier.Destroy();
        });
    }
}
@registerModifier()
class modifier_imba_axe_berserkers_call_armor extends BaseModifier {
    GetModifierConfig(): ModifierConfig {
        return {
            is_debuff: false,
            is_hidden: false,
            not_purgable: true,
            not_purgable_exception: true,
        };
    }

    _bonus_armor = this.ability.GetSpecialValue('imba_axe_berserkers_call', 'bonus_armor');

    DeclareFunctions(): ModifierFunction[] {
        return CDeclareFunctions(ModifierFunction.PHYSICAL_ARMOR_BONUS);
    }

    GetModifierPhysicalArmorBonus(event: ModifierAttackEvent): number {
        return this._bonus_armor;
    }
}
@registerModifier()
class modifier_imba_axe_berserkers_call extends BaseModifier {
    GetModifierConfig(): ModifierConfig {
        return {
            is_debuff: true,
            is_hidden: false,
            not_purgable: true,
            not_purgable_exception: true,
        };
    }

    OnCreated(params: ModifierParams): void {
        this.parent.MoveToTargetToAttack(this.caster);
        this.parent.SetAttacking(this.caster);
        this.parent.SetForceAttackTarget(this.caster);
        this.StartIntervalThink(0.1);
    }

    OnIntervalThink(): void {
        this.parent.MoveToTargetToAttack(this.caster);
    }

    OnDestroy(): void {
        this.parent.SetForceAttackTarget(null);
        const modifiers = this.ability['__modifiers'] as CDOTA_Buff[];
        if (modifiers) {
            if (modifiers.includes(this)) {
                modifiers.splice(modifiers.indexOf(this), 1);
            }
        }
    }
}
