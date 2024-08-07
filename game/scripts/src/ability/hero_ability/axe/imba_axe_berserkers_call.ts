//狂战士的怒吼
@registerAbility()
export class imba_axe_berserkers_call extends BaseAbility {
    _radius = this.GetSpecialValue('imba_axe_berserkers_call', 'radius');
    _duration = this.GetSpecialValue('imba_axe_berserkers_call', 'duration');

    _modifiers: CDOTA_Buff[] = [];
    GetCastRange(location: Vector, target: CDOTA_BaseNPC | undefined): number {
        return this._radius;
    }

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
        const battle_hunger = this.caster.FindAbilityByName(HeroAbility.imba_axe_battle_hunger);
        enemies.forEach(enemy => {
            const modifer = enemy.AddModifier(this.caster, this, modifier_imba_axe_berserkers_call, {
                duration: this._duration,
            });
            this._modifiers.push(modifer);
            if (this.caster.HasShard() && battle_hunger && battle_hunger.GetLevel() > 0) {
                battle_hunger && this.caster.COnSpellStart(HeroAbility.imba_axe_battle_hunger, enemy);
            }
        });
        this.caster.AddModifier(this.caster, this, modifier_imba_axe_berserkers_call_armor, {
            duration: this._duration,
        });
        this.PlayEffects();
    }

    OnOwnerDied(): void {
        this._modifiers.forEach(modifier => {
            CIsValid(modifier) && modifier.Destroy();
        });
    }

    PlayEffects(): void {
        const pfx = CCreateParticle({
            caster: this.caster,
            owner: this.caster,
            particleAttach: ParticleAttachment.WORLDORIGIN,
            particleName: HeroParticleList.imba_axe_beserkers_call_owner,
            duration: 2,
            controlPointData: [
                {
                    CP: 0,
                    vector: this.caster.GetAbsOrigin(),
                },
                {
                    CP: 2,
                    vector: Vector(this._radius, this._radius, this._radius),
                },
            ],
        });
        if (this.caster.GetUnitName() == 'npc_dota_hero_axe') {
            CSetParticleControlEnt(pfx, 1, this.caster, ParticleAttachment.CENTER_FOLLOW, Attachment.ATTACH_MOUTH, this.caster.GetAbsOrigin(), true);
        } else {
            CSetParticleControlEnt(pfx, 1, this.caster, ParticleAttachment.CENTER_FOLLOW, Attachment.ATTACH_HITLOC, this.caster.GetAbsOrigin(), true);
        }
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
        ExecuteOrderFromTable({
            OrderType: UnitOrder.ATTACK_TARGET,
            UnitIndex: this.parent.entindex(),
            TargetIndex: this.caster.entindex(),
            Queue: false,
        });
        this.parent.SetAttacking(this.caster);
        this.parent.SetForceAttackTarget(this.caster);
        // this.StartIntervalThink(0.1);
        CCreateParticle({
            caster: this.caster,
            owner: this.parent,
            particleAttach: ParticleAttachment.ABSORIGIN_FOLLOW,
            particleName: HeroParticleList.imba_axe_beserkers_call_target,
            modifier: this,
        });
    }

    GetStatusEffectName(): string {
        return HeroParticleList.imba_axe_beserkers_call_target_status;
    }

    // OnIntervalThink(): void {
    //     ExecuteOrderFromTable({
    //         OrderType: UnitOrder.ATTACK_TARGET,
    //         UnitIndex: this.parent.entindex(),
    //         TargetIndex: this.caster.entindex(),
    //         Queue: false,
    //     });
    //     this.parent.SetAttacking(this.caster);
    //     this.parent.SetForceAttackTarget(this.caster);
    // }

    DeclareFunctions(): ModifierFunction[] {
        return CDeclareFunctions(ModifierFunction.ATTACKSPEED_BONUS_CONSTANT);
    }

    _bonus_attack_speed = this.ability.GetSpecialValue('imba_axe_berserkers_call', 'bonus_attack_speed');
    GetModifierAttackSpeedBonus_Constant(): number {
        return this._bonus_attack_speed;
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
