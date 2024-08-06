@registerAbility()
export class imba_antimage_persectur extends BaseAbility {
    GetIntrinsicModifierName(): string {
        return 'modifier_imba_antimage_persectur_passive';
    }
}
@registerModifier()
class modifier_imba_antimage_persectur_passive extends BaseModifier {
    GetModifierConfig(): ModifierConfig {
        return {
            is_debuff: false,
            is_hidden: true,
            not_purgable: true,
            not_purgable_exception: true,
            not_remove_on_death: true,
        };
    }

    _slow_duration = this.ability.GetSpecialValue('imba_antimage_persectur', 'slow_duration');

    _cust = [ModifierFunctions.OnAttackLanded_Attacker];
    CustomDeclareFunctions(): ModifierFunctions[] {
        return this._cust;
    }

    _mana_threshold = this.ability.GetSpecialValue('imba_antimage_persectur', 'mana_threshold');
    OnAttackLanded_Attacker(AttackData: UnitEventAttackDamageData): void {
        if (this.parent.PassivesDisabled()) return;
        if (AttackData.damageTable.attacker != this.parent) return;
        if (AttackData.damageTable.victim.IsUnit()) {
            const target = AttackData.damageTable.victim;
            const mana_per = (target.GetMana() / target.GetMaxMana()) * 100;
            mana_per < this._mana_threshold &&
                target.AddModifier(this.parent, this.ability, modifier_imba_antimage_persectur_slow, { duration: this._slow_duration });
        }
    }
}
@registerModifier()
class modifier_imba_antimage_persectur_slow extends BaseModifier {
    GetModifierConfig(): ModifierConfig {
        return {
            is_debuff: true,
            is_hidden: false,
        };
    }

    _move_slow_min = this.ability.GetSpecialValue('imba_antimage_persectur', 'move_slow_min');
    _move_slow_max = this.ability.GetSpecialValue('imba_antimage_persectur', 'move_slow_max');
    _mana_threshold = this.ability.GetSpecialValue('imba_antimage_persectur', 'mana_threshold');
    OnCreated(params: ModifierParams) {
        this.CalculateSlow();
        this.PlayEffects();
    }

    PlayEffects(): void {
        const pfx = CCreateParticle({
            caster: this.caster,
            owner: this.parent,
            particleAttach: ParticleAttachment.CENTER_FOLLOW,
            particleName: HeroParticleList.imba_antimage_mana_break_slow,
            modifier: this,
            extraData: {
                limits: {
                    limit: 5,
                    time: FrameTime(),
                },
            },
        });
        CSetParticleControlEnt(pfx, 0, this.parent, ParticleAttachment.CENTER_FOLLOW, Attachment.ATTACH_HITLOC, this.parent.GetAbsOrigin(), true);
        CSetParticleControlEnt(pfx, 1, this.parent, ParticleAttachment.CENTER_FOLLOW, Attachment.ATTACH_HITLOC, this.parent.GetAbsOrigin(), true);
    }

    OnRefresh(params: object): void {
        this.CalculateSlow();
        this.PlayEffects();
    }

    CalculateSlow() {
        const target = this.parent;
        const target_mana = target.GetMana();
        const mana_per = (target_mana / target.GetMaxMana()) * 100;
        let slow = 0;
        const slow_per = (this._mana_threshold - mana_per) / this._mana_threshold;
        slow = this._move_slow_max * slow_per;
        // 限制减速值在最小和最大之间
        print(slow, slow_per, this._move_slow_max);
        slow = math.limit(slow, this._move_slow_min, this._move_slow_max);
        this.SetStackCount(slow);
    }

    DeclareFunctions(): ModifierFunction[] {
        return CDeclareFunctions(ModifierFunction.MOVESPEED_BONUS_PERCENTAGE);
    }

    GetModifierMoveSpeedBonus_Percentage(): number {
        return -this.GetStackCount();
    }
}
