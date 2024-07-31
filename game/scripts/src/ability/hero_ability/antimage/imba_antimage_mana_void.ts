// 法力虚空
import { modifier_imba_stunned } from '../../../common_modifier/modifier_imba_stunned';

@registerAbility()
export class imba_antimage_mana_void extends BaseAbility {
    GetIntrinsicModifierName(): string {
        return 'modifier_imba_antimage_mana_void_passive';
    }

    _mana_void_aoe_radius = this.GetSpecialValue('imba_antimage_mana_void', 'mana_void_aoe_radius');
    _mana_void_damage_per_mana = this.GetSpecialValue('imba_antimage_mana_void', 'mana_void_damage_per_mana');
    _mana_void_ministun = this.GetSpecialValue('imba_antimage_mana_void', 'mana_void_ministun');
    OnSpellStart(): void {
        this.caster.EmitSound('Hero_Antimage.ManaVoid');
        const enemies = CFindUnitsInRadius({
            location: this.target.GetAbsOrigin(),
            radius: this._mana_void_aoe_radius,
            team: this.caster.GetTeamNumber(),
            flagFilter: UnitTargetFlags.FOW_VISIBLE,
            order: FindOrder.CLOSEST,
            teamFilter: UnitTargetTeam.ENEMY,
            typeFilter: UnitTargetType.HERO + UnitTargetType.BASIC,
        });
        const lost_mana = this.target.GetMaxMana() - this.target.GetMana();
        const damage = lost_mana * this._mana_void_damage_per_mana;
        const pfx = CCreateParticle({
            caster: this.caster,
            owner: this.target,
            particleAttach: ParticleAttachment.CENTER_FOLLOW,
            particleName: HeroParticleList.imba_antimage_mana_void,
            duration: 3,
        });
        CSetParticleControl(pfx, 0, this.target.GetAbsOrigin());
        CSetParticleControl(pfx, 1, Vector(this._mana_void_aoe_radius, 0, 0));
        enemies.forEach(enemy => {
            enemy.AddModifier(this.caster, this, modifier_imba_stunned, { duration: this._mana_void_ministun });
            CAddDamage({
                attacker: this.caster,
                damage: damage,
                damageType: DamageType.Magical,
                victim: enemy,
                sourceAbility: this,
                damageFlags: DamageFlags.None,
                damageProperty: DamageProperty.Ability,
            });
        });

        const pfx2 = CCreateParticle({
            caster: this.caster,
            owner: this.caster,
            particleAttach: ParticleAttachment.POINT_FOLLOW,
            particleName: HeroParticleList.imba_antimage_mana_void_caster,
            duration: 3,
        });
        CSetParticleControlEnt(pfx2, 0, this.caster, ParticleAttachment.POINT_FOLLOW, Attachment.ATTACH_ATTACK_1, Vector(0, 0, 0), true);
    }
}
@registerModifier()
class modifier_imba_antimage_mana_void_passive extends BaseModifier {
    GetModifierConfig(): ModifierConfig {
        return {
            is_hidden: true,
            is_debuff: false,
            not_purgable: true,
            not_purgable_exception: true,
            not_remove_on_death: true,
        };
    }

    _thirst_enabled = this.ability.GetSpecialValue('imba_antimage_mana_void', 'thirst_enabled');
    _thirst_range = this.ability.GetSpecialValue('imba_antimage_mana_void', 'thirst_range');
    _linger_duration = this.ability.GetSpecialValue('imba_antimage_mana_void', 'linger_duration');

    _bonus_attack_damage = this.ability.GetSpecialValue('imba_antimage_mana_void', 'bonus_attack_damage');
    GetAuraConfig(): AuraConfig {
        return {
            aura_radius: this._thirst_range,
            aura_modifier: 'modifier_imba_antimage_mana_void_aura',
            is_aura: this._thirst_enabled == 1,
            search_flag: UnitTargetFlags.NONE,
            search_team: UnitTargetTeam.ENEMY,
            search_type: UnitTargetType.HERO,
            aura_buff_stiff: this._linger_duration,
        };
    }

    DeclareFunctions(): modifierfunction[] {
        return CDeclareFunctions(ModifierFunction.PREATTACK_BONUS_DAMAGE);
    }

    GetModifierPreAttack_BonusDamage(): number {
        return this.GetStackCount();
    }
}
@registerModifier()
class modifier_imba_antimage_mana_void_aura extends BaseModifier {
    GetModifierConfig(): ModifierConfig {
        return {
            is_hidden: true,
            is_debuff: false,
            not_purgable: true,
            not_purgable_exception: true,
        };
    }

    _threshold_pct = this.ability.GetSpecialValue('imba_antimage_mana_void', 'threshold_pct');
    _min_bonus_pct = this.ability.GetSpecialValue('imba_antimage_mana_void', 'min_bonus_pct');
    _max_bonus_pct = this.ability.GetSpecialValue('imba_antimage_mana_void', 'max_bonus_pct');
    _old_stack = 0;
    OnCreated(params: ModifierParams): void {
        this.StartIntervalThink(0.2);
    }

    OnIntervalThink(): void {
        const or_modifier = this.GetAuraOwner().FindModifierByName(
            'modifier_imba_antimage_mana_void_passive'
        ) as modifier_imba_antimage_mana_void_passive;
        const now_mana = this.parent.GetMana();
        const mana_per = (now_mana / this.parent.GetMaxMana()) * 100;
        let attack_per = 0;
        if (mana_per > this._min_bonus_pct) {
            attack_per = 0;
        } else if (mana_per <= this._max_bonus_pct) {
            attack_per = 100;
        } else {
            const range = this._max_bonus_pct - this._min_bonus_pct;
            const adjusted_mana_per = mana_per - this._min_bonus_pct;
            attack_per = math.floor((adjusted_mana_per / range) * 100);
        }
        const stack = math.floor(attack_per * or_modifier._bonus_attack_damage * 0.01);
        or_modifier.SetStackCount(or_modifier.GetStackCount() + stack - this._old_stack);
        this._old_stack = stack;
        if (mana_per <= this._threshold_pct) {
            this.parent.AddModifier(this.parent, this.ability, modifier_imba_antimage_mana_void_vision, {
                duration: -1,
                re_pa_index: this.caster.entindex(),
            });
        } else {
            this.parent.RemoveModifierByName('modifier_imba_antimage_mana_void_vision');
        }
    }

    OnDestroy(): void {
        if (CIsValid(this.parent)) {
            const or_modifier = this.GetAuraOwner().FindModifierByName(
                'modifier_imba_antimage_mana_void_passive'
            ) as modifier_imba_antimage_mana_void_passive;
            or_modifier.SetStackCount(or_modifier.GetStackCount() - this._old_stack);
            this.parent.RemoveModifierByName('modifier_imba_antimage_mana_void_vision');
        }
    }
}
@registerModifier()
class modifier_imba_antimage_mana_void_vision extends BaseModifier {
    GetModifierConfig(): ModifierConfig {
        return {
            is_debuff: true,
            is_hidden: false,
            not_purgable: true,
            not_purgable_exception: true,
        };
    }

    DeclareFunctions(): ModifierFunction[] {
        return CDeclareFunctions(ModifierFunction.PROVIDES_FOW_POSITION);
    }

    GetModifierProvidesFOWVision(): 0 | 1 {
        return 1;
    }

    OnCreated(params: ModifierParams & { re_pa_index: EntityIndex }): void {
        const caster = EntIndexToHScript(params.re_pa_index) as CDOTA_BaseNPC;
        const pfx = CCreateParticle({
            caster: caster,
            owner: caster,
            particleAttach: ParticleAttachment.CENTER_FOLLOW,
            particleName: HeroParticleList.imba_antimage_mana_void_buff,
            modifier: this,
        });
        CSetParticleControl(pfx, 0, caster.GetAbsOrigin());
    }
}
