//法力损毁
@registerAbility()
export class imba_antimage_mana_break extends BaseAbility {
    GetIntrinsicModifierName(): string {
        return 'modifier_imba_antimage_mana_break_passive';
    }
}
@registerModifier()
export class modifier_imba_antimage_mana_break_passive extends BaseModifier {
    GetModifierConfig(): ModifierConfig {
        return {
            is_hidden: true,
            is_debuff: false,
            not_purgable: true,
            not_purgable_exception: true,
            not_remove_on_death: true,
            allow_illusion_duplicate: true,
        };
    }

    _custom_on_attack_landed = [ModifierFunctions.DamageFixed_AttackEffectDamage];
    CustomDeclareFunctions(): ModifierFunctions[] {
        return this._custom_on_attack_landed;
    }

    _percent_damage_per_burn = this.ability.GetSpecialValue('imba_antimage_mana_break', 'percent_damage_per_burn');
    _mana_per_hit = this.ability.GetSpecialValue('imba_antimage_mana_break', 'mana_per_hit');
    _mana_per_hit_pct = this.ability.GetSpecialValue('imba_antimage_mana_break', 'mana_per_hit_pct');
    _illusion_percentage = this.ability.GetSpecialValue('imba_antimage_mana_break', 'illusion_percentage');
    // _slow_duration = this.ability.GetSpecialValue('imba_antimage_mana_break', 'slow_duration');
    DamageFixed_AttackEffectDamage(dmgTable: DamageFixedAttackEffectData): void {
        const victim = dmgTable.victim;
        if (victim.IsBuilding()) return;
        if (victim.IsMagicImmune()) return;
        let mana = this._mana_per_hit + victim.GetMaxMana() * this._mana_per_hit_pct * 0.01;
        if (this.parent.IsIllusion()) {
            mana = mana * this._illusion_percentage * 0.01;
        }
        const reduce_mana = victim.Script_ReduceMana(mana, this.ability);

        const damage = reduce_mana * this._percent_damage_per_burn * 0.01;
        const pfx = CCreateParticle({
            caster: this.caster,
            owner: victim,
            particleAttach: ParticleAttachment.ABSORIGIN_FOLLOW,
            particleName: HeroParticleList.imba_antimage_mana_break,
            duration: 1,
            extraData: {
                limits: {
                    limit: 1,
                    time: FrameTime(),
                },
            },
        });
        CSetParticleControl(pfx, 0, victim.GetAbsOrigin());
        dmgTable.addedAtkPhysicalDamage = damage;
        // this._slow_duration > 0 &&
        //     mana > reduce_mana + 10 &&
        //     victim.AddModifier(this.caster, this.ability, modifier_imba_antimage_mana_break_slow, { duration: this._slow_duration });
    }
}
// @registerModifier()
// export class modifier_imba_antimage_mana_break_slow extends BaseModifier {
//     GetModifierConfig(): ModifierConfig {
//         return {
//             is_debuff: true,
//             is_hidden: false,
//             not_purgable: true,
//         };
//     }

//     _move_slow = this.ability.GetSpecialValue('imba_antimage_mana_break', 'move_slow');
//     OnCreated(params: ModifierParams): void {
//         const pfx = CCreateParticle({
//             caster: this.caster,
//             owner: this.parent,
//             particleAttach: ParticleAttachment.CENTER_FOLLOW,
//             particleName: HeroParticleList.imba_antimage_mana_break_slow,
//             modifier: this,
//             extraData: {
//                 limits: {
//                     limit: 5,
//                     time: FrameTime(),
//                 },
//             },
//         });

//         CSetParticleControlEnt(pfx, 0, this.parent, ParticleAttachment.CENTER_FOLLOW, Attachment.ATTACH_HITLOC, this.parent.GetAbsOrigin(), true);
//         CSetParticleControlEnt(pfx, 1, this.parent, ParticleAttachment.CENTER_FOLLOW, Attachment.ATTACH_HITLOC, this.parent.GetAbsOrigin(), true);
//     }

//     DeclareFunctions(): ModifierFunction[] {
//         return CDeclareFunctions(ModifierFunction.MOVESPEED_BONUS_PERCENTAGE);
//     }

//     GetModifierMoveSpeedBonus_Percentage(): number {
//         return -this._move_slow;
//     }
// }
