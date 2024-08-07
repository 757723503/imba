//淘汰之刃
@registerAbility()
export class imba_axe_culling_blade extends BaseAbility {
    _damage = this.ability.GetSpecialValue('imba_axe_culling_blade', 'damage');
    _speed_duration = this.ability.GetSpecialValue('imba_axe_culling_blade', 'speed_duration');
    _speed_aoe = this.ability.GetSpecialValue('imba_axe_culling_blade', 'speed_aoe');
    _armor_per_stack = this.ability.GetSpecialValue('imba_axe_culling_blade', 'armor_per_stack');
    _armor_bonus = this.ability.GetSpecialValue('imba_axe_culling_blade', 'armor_bonus');
    OnSpellStart(): void {
        const heal = this._damage;
        const target_health = this.target.GetHealth();
        if (this.caster.TriggerSpellAbsorb(this)) return;
        if (target_health <= heal) {
            if (this.target.CTrueKill(this.caster, this.ability)) {
                const units = CFindUnitsInRadius({
                    location: this.target.GetAbsOrigin(),
                    radius: this._speed_aoe,
                    team: this.caster.GetTeamNumber(),
                    typeFilter: UnitTargetType.HERO + UnitTargetType.BASIC,
                    flagFilter: UnitTargetFlags.NONE,
                    order: FindOrder.CLOSEST,
                    teamFilter: UnitTargetTeam.FRIENDLY,
                });
                units.forEach(unit => {
                    unit.AddModifier(this.caster, this.ability, modifier_imba_axe_culling_blade_boost, { duration: this._speed_duration });
                });
                this.PlayEffects2(this.target);
                this.PlayEffects3(this.target);
                this.EndCooldown();
            }
        } else {
            CAddDamage({
                attacker: this.caster,
                damage: this._damage,
                damageProperty: DamageProperty.Ability,
                damageType: DamageType.Pure,
                sourceAbility: this.ability,
                victim: this.target,
            });
        }
        this.PlayEffects1(this.target);
    }

    PlayEffects1(target: CDOTA_BaseNPC): void {
        CCreateParticle({
            caster: this.caster,
            owner: target,
            particleAttach: ParticleAttachment.ABSORIGIN_FOLLOW,
            particleName: HeroParticleList.imba_axe_culling_blade,
            duration: 2,
            controlPointData: [{ CP: 0, vector: target.GetAbsOrigin() }],
        });
    }

    PlayEffects2(target: CDOTA_BaseNPC): void {
        CCreateParticle({
            caster: this.caster,
            owner: this.caster,
            particleAttach: ParticleAttachment.ABSORIGIN_FOLLOW,
            particleName: HeroParticleList.imba_axe_culling_blade_boost,
            duration: 2,
            controlPointData: [
                { CP: 0, vector: this.caster.GetAbsOrigin() },
                { CP: 1, vector: target.GetAbsOrigin() },
            ],
        });
    }

    PlayEffects3(target: CDOTA_BaseNPC): void {
        if (this.caster.GetUnitName() == 'npc_dota_hero_axe' && this.caster.GetModelName() == 'models/items/axe/ti9_jungle_axe/axe_bare.vmdl') {
            CCreateParticle({
                caster: this.caster,
                owner: this.caster,
                particleAttach: ParticleAttachment.POINT_FOLLOW,
                particleName: HeroParticleList.imba_axe_cullingblade_sprint_axe,
                duration: 2,
                controlPointData: [
                    { CP: 0, vector: this.caster.GetAbsOrigin() },
                    {
                        CP: 1,
                        vector: this.target.GetAbsOrigin(),
                        ent: true,
                        attachment: Attachment.ATTACH_EYES_L,
                        particleAttach: ParticleAttachment.POINT_FOLLOW,
                    },
                    {
                        CP: 2,
                        vector: this.target.GetAbsOrigin(),
                        ent: true,
                        attachment: Attachment.ATTACH_EYES_L,
                        particleAttach: ParticleAttachment.POINT_FOLLOW,
                    },
                ],
            });
        }

        const pfx = CCreateParticle({
            caster: this.caster,
            owner: this.caster,
            particleAttach: ParticleAttachment.CUSTOMORIGIN,
            particleName: HeroParticleList.imba_axe_culling_blade_kill,
            duration: 2,
            controlPointData: [
                { CP: 0, vector: this.caster.GetAbsOrigin() },
                { CP: 1, vector: this.caster.GetAbsOrigin() },
                { CP: 2, vector: this.caster.GetAbsOrigin() },
                { CP: 3, vector: this.caster.GetAbsOrigin() },
                { CP: 4, vector: this.caster.GetAbsOrigin() },
            ],
        });
        CSetParticleControlTransform(pfx, 4, target.GetAbsOrigin(), null, this.caster.GetForwardVector());
    }
}
@registerModifier()
class modifier_imba_axe_culling_blade_boost extends BaseModifier {
    GetModifierConfig(): ModifierConfig {
        return {
            is_debuff: false,
            is_hidden: false,
        };
    }

    _armor_bonus = this.ability.GetSpecialValue('imba_axe_culling_blade', 'armor_bonus');
    _speed_bonus = this.ability.GetSpecialValue('imba_axe_culling_blade', 'speed_bonus');
    DeclareFunctions(): ModifierFunction[] {
        return CDeclareFunctions(ModifierFunction.PHYSICAL_ARMOR_BONUS, ModifierFunction.MOVESPEED_BONUS_PERCENTAGE);
    }

    GetModifierPhysicalArmorBonus(event: ModifierAttackEvent): number {
        return this._armor_bonus;
    }

    GetModifierMoveSpeedBonus_Percentage(): number {
        return this._speed_bonus;
    }

    OnCreated(params: ModifierParams): void {
        CCreateParticle({
            caster: this.caster,
            owner: this.parent,
            particleAttach: ParticleAttachment.ABSORIGIN_FOLLOW,
            particleName: HeroParticleList.imba_axe_cullingblade_sprint,
            modifier: this,
        });
    }

    GetStatusEffectName(): string {
        return HeroParticleList.imba_axe_culling_blade_hero_effect;
    }
}
