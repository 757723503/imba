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
        };
    }

    CustomDeclareFunctions(): ModifierFunctions[] {
        return this._custom_on_attack_landed;
    }

    _custom_on_attack_landed = [ModifierFunctions.OnAttackLanded_Attacker];
    _percent_damage_per_burn = this.ability.GetSpecialValue('imba_antimage_mana_break', 'percent_damage_per_burn');
    _mana_per_hit = this.ability.GetSpecialValue('imba_antimage_mana_break', 'mana_per_hit');
    _mana_per_hit_pct = this.ability.GetSpecialValue('imba_antimage_mana_break', 'mana_per_hit_pct');
    _illusion_percentage = this.ability.GetSpecialValue('imba_antimage_mana_break', 'illusion_percentage');
    _move_slow = this.ability.GetSpecialValue('imba_antimage_mana_break', 'move_slow');
    _slow_duration = this.ability.GetSpecialValue('imba_antimage_mana_break', 'slow_duration');
    OnAttackLanded_Attacker(AttackData: UnitEventAttackDamageData): void {
        const victim = AttackData.damageTable.victim;
        if (victim.IsBuilding()) return;
        if (victim.IsMagicImmune()) return;
        const mana = this._mana_per_hit + victim.GetMaxMana() * this._mana_per_hit_pct * 0.01;
        const reduce_mana = victim.Script_ReduceMana(mana, this.ability);
        const damage = reduce_mana * this._percent_damage_per_burn * 0.01;
        const pfx = CCreateParticle({
            caster: this.caster,
            owner: victim,
            particleAttach: ParticleAttachment.ABSORIGIN_FOLLOW,
            particleName: HeroParticleList.imba_antimage_mana_break,
            duration: 1,
        });
        CSetParticleControl(pfx, 0, victim.GetAbsOrigin());
        CAddDamage({
            attacker: this.parent,
            damage: damage,
            damageType: DamageType.Physical,
            victim: victim,
            sourceAbility: this.ability,
            damageProperty: DamageProperty.Ability,
        });
    }
}
