//战斗饥渴
@registerAbility()
export class imba_axe_battle_hunger extends BaseAbility {
    _duration = this.GetSpecialValue('imba_axe_battle_hunger', 'duration');
    GetIntrinsicModifierName(): string {
        return 'modifier_imba_axe_battle_hunger_self_movespeed';
    }

    OnSpellStart(): void {
        this.caster.EmitSound('Hero_Axe.Battle_Hunger');

        if (this.caster.TriggerSpellAbsorb(this)) return;
        this.target.AddModifier(this.caster, this, modifier_imba_axe_battle_hunger, {
            duration: this._duration,
        });
    }
}
@registerModifier()
class modifier_imba_axe_battle_hunger extends BaseModifier {
    GetModifierConfig(): ModifierConfig {
        return {
            is_debuff: true,
            is_hidden: false,
            is_multiple: this._should_stack === 1,
        };
    }

    ShouldUseOverheadOffset(): boolean {
        return true;
    }

    _should_stack = this.ability.GetSpecialValue('imba_axe_battle_hunger', 'should_stack');
    _slow = this.ability.GetSpecialValue('imba_axe_battle_hunger', 'slow');
    _damage_per_second = this.ability.GetSpecialValue('imba_axe_battle_hunger', 'damage_per_second');
    _armor_multiplier = this.ability.GetSpecialValue('imba_axe_battle_hunger', 'armor_multiplier');
    _bonus_speed = this.ability.GetSpecialValue('imba_axe_battle_hunger', 'speed_bonus');
    OnIntervalThink(): void {
        const damage = this.CalculateDamage();
        CAddDamage({
            attacker: this.caster,
            damage: damage / 2,
            damageProperty: DamageProperty.Ability,
            sourceAbility: this.ability,
            victim: this.parent,
            damageType: DamageType.Magical,
        });

        const axe_forward = GetDirection(this.caster.GetAbsOrigin(), this.parent.GetAbsOrigin());
        const target_forward = this.parent.GetForwardVector();
        // 使用Dot方法计算两个方向向量的点积
        const dot_product = axe_forward.Dot(target_forward);
        // 如果点积为负，则说明parent背对axe
        if (dot_product < 0) {
            this.SetStackCount(-1);
        } else {
            this.SetStackCount(0);
        }
    }

    GetStatusEffectName(): string {
        return HeroParticleList.imba_axe_battle_hunger_status;
    }

    SetOverheadEffectOffset(offset: number): boolean {
        return true;
    }

    GetEffectName(): string {
        return HeroParticleList.imba_axe_battle_hunger;
    }

    GetEffectAttachType(): ParticleAttachment_t {
        return ParticleAttachment.OVERHEAD_FOLLOW;
    }

    OnCreated(params: ModifierParams): void {
        const caster_modifier = this.caster.FindModifierByName('modifier_imba_axe_battle_hunger_self_movespeed');
        caster_modifier && caster_modifier.IncrementStackCount();
        this.StartIntervalThink(0.5);
        // CCreateParticle({
        //     caster: this.caster,
        //     owner: this.parent,
        //     particleAttach: ParticleAttachment.OVERHEAD_FOLLOW,
        //     particleName: HeroParticleList.imba_axe_battle_hunger,
        //     modifier: this,
        // });
    }

    DeclareFunctions(): ModifierFunction[] {
        return CDeclareFunctions(ModifierFunction.MOVESPEED_BONUS_PERCENTAGE, ModifierFunction.TOOLTIP);
    }

    CustomDeclareFunctions(): ModifierFunctions[] {
        return [ModifierFunctions.OnUnitDeath];
    }

    OnUnitDeath(dmgTable: EndDamageTable): void {
        if (dmgTable.attacker == this.parent) {
            this.Destroy();
        }
    }

    OnTooltip(): number {
        return this.CalculateDamage();
    }

    //计算damage 伤害
    CalculateDamage(): number {
        return this._damage_per_second + this._armor_multiplier * this.caster.GetPhysicalArmorValue(false);
    }

    OnDestroy(): void {
        const caster_modifier = this.caster.FindModifierByName('modifier_imba_axe_battle_hunger_self_movespeed');
        caster_modifier && caster_modifier.DecrementStackCount();
    }

    GetModifierMoveSpeedBonus_Percentage(): number {
        return this.GetStackCount() == -1 && this._slow;
    }
}
@registerModifier()
class modifier_imba_axe_battle_hunger_self_movespeed extends BaseModifier {
    GetModifierConfig(): ModifierConfig {
        return {
            is_debuff: false,
            is_hidden: this.GetStackCount() == 0 || this._bonus_speed == 0,
            not_purgable: true,
            not_purgable_exception: true,
            not_remove_on_death: true,
        };
    }

    _bonus_speed = this.ability.GetSpecialValue('imba_axe_battle_hunger', 'speed_bonus');
    DeclareFunctions(): ModifierFunction[] {
        return CDeclareFunctions(ModifierFunction.MOVESPEED_BONUS_PERCENTAGE);
    }

    GetModifierMoveSpeedBonus_Percentage(): number {
        return this._bonus_speed * this.GetStackCount();
    }
}
