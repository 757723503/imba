//噩梦
@registerAbility()
export class imba_bane_nightmare extends BaseAbility {
    _nightmare_invuln_time = this.GetSpecialValue('imba_bane_nightmare', 'nightmare_invuln_time');
    _night_units: EntityIndex[] = [];
    _is_vector_targeted = this.GetSpecialValue('imba_bane_nightmare', 'is_vector_targeted');
    OnSpellStart(keys?: SpellStartParams): void {
        const dir = keys?.dir ?? GetDirection(this.GetVectorEndPoint(), this.target.GetAbsOrigin());
        this.target.AddModifier(this.caster, this, modifier_imba_bane_nightmare, { duration: this.GetDuration(), dir: dir });
        this.target.AddModifier(this.caster, this, modifier_imba_bane_nightmare_invulnerable, { duration: this._nightmare_invuln_time });
        this._night_units.push(this.target.entindex());
        this.caster.UnHideAbilityToSlot('imba_bane_nightmare_end', 'imba_bane_nightmare');
    }

    GetBehavior(): AbilityBehavior {
        if (this._is_vector_targeted == 1) {
            return (
                AbilityBehavior.UNIT_TARGET +
                AbilityBehavior.DONT_RESUME_ATTACK +
                AbilityBehavior.VECTOR_TARGETING +
                1099511627776 +
                AbilityBehavior.AUTOCAST
            );
        }
    }

    // GetAbilityTextureName(): string {
    //     return 'bounty_hunter_lookout';
    // }

    OnAbilityUpgrade(upgradeAbility: object): void {
        if (upgradeAbility == this) {
            const ability_end = this.caster.FindAbilityByName('imba_bane_nightmare_end');
            if (ability_end && CIsValid(ability_end) && ability_end.GetLevel() <= 0) {
                ability_end.SetLevel(1);
            }
        }
    }

    GetAltAbilityTextureName(): string {
        return 'bane/bane_fall20_immortal_ability_icon/bane_fall20_immortal_fiends_grip';
    }
}
@registerModifier()
export class modifier_imba_bane_nightmare extends BaseModifier {
    GetModifierConfig(): ModifierConfig {
        return {
            is_debuff: true,
            is_hidden: false,
        };
    }

    _is_vector_targeted = this.ability.GetSpecialValue('imba_bane_nightmare', 'is_vector_targeted');
    _animation_rate = this.ability.GetSpecialValue('imba_bane_nightmare', 'animation_rate');
    CheckState(): Partial<Record<modifierstate, boolean>> {
        return {
            [ModifierState.STUNNED]: true,
            [ModifierState.NIGHTMARED]: true,
            [ModifierState.LOW_ATTACK_PRIORITY]: true,
            [ModifierState.SPECIALLY_DENIABLE]: true,
        };
    }

    _dir: Vector;
    OnCreated(params: ModifierParams & { dir: Vector }): void {
        //@ts-ignore
        this._dir = StringToVector(params.dir);
        if (Is_Vector(this._dir)) {
            this.parent.SetForwardVector(this._dir);
            this.StartIntervalThink(FrameTime());
        }
    }

    OnIntervalThink(): void {
        const speed = this._walk_speed * FrameTime();
        const next_pos = this.parent.GetAbsOrigin() + this._dir * speed;

        this.parent.SetAbsOrigin(next_pos as Vector);
    }

    OnDestroy(): void {
        const ability = this.ability as imba_bane_nightmare;
        const target = this.parent;
        ability._night_units = ability._night_units.filter(unit => unit != target.entindex());
        FindClearSpaceForUnit(target, target.GetAbsOrigin(), true);
        this.caster.UnHideAbilityToSlot('imba_bane_nightmare', 'imba_bane_nightmare_end');
        const all_tree = GridNav.GetAllTreesAroundPoint(target.GetAbsOrigin(), 200, true);
        all_tree.forEach(tree => {
            tree.CutDown(this.caster.GetTeamNumber());
        });
    }

    DeclareFunctions(): ModifierFunction[] {
        return CDeclareFunctions(
            ModifierFunction.OVERRIDE_ANIMATION,
            ModifierFunction.OVERRIDE_ANIMATION_RATE,
            ModifierFunction.FIXED_DAY_VISION,
            ModifierFunction.FIXED_NIGHT_VISION
        );
    }

    GetFixedDayVision(): number {
        return 200;
    }

    GetFixedNightVision(): number {
        return 200;
    }

    _custom = [ModifierFunctions.OnAttackStart_Target];
    CustomDeclareFunctions(): ModifierFunctions[] {
        return this._custom;
    }

    OnAttackStart_Target(AttackData: UnitEventAttackDamageData): void {
        if (AttackData.damageTable.victim == this.parent && CIsValid(this.ability) && AttackData.damageTable.attacker != this.caster) {
            this.caster.COnSpellStart(this.ability.GetAbilityName(), AttackData.damageTable.attacker, null, { dir: this._dir });
            this.Destroy();
            if (AttackData.damageTable.attacker == this.caster) {
                AttackData.damageTable.attacker.AddModifier(this.caster, this.ability, modifier_imba_bane_nightmare_attackspeed_bonus, {
                    duration: 5,
                });
            }
        }
    }

    _walk_speed = this.ability.GetSpecialValue('imba_bane_nightmare', 'walk_speed');
    GetOverrideAnimation(): GameActivity {
        return GameActivity.DOTA_FLAIL;
    }

    GetOverrideAnimationRate(): number {
        return this._animation_rate;
    }
}

@registerModifier()
export class modifier_imba_bane_nightmare_invulnerable extends BaseModifier {
    GetModifierConfig(): ModifierConfig {
        return {
            is_debuff: false,
            is_hidden: false,
            not_purgable: true,
            not_purgable_exception: true,
        };
    }

    CheckState(): Partial<Record<modifierstate, boolean>> {
        return {
            [ModifierState.INVULNERABLE]: true,
            [ModifierState.NO_HEALTH_BAR]: true,
        };
    }
}
@registerModifier()
export class modifier_imba_bane_nightmare_attackspeed_bonus extends BaseModifier {
    GetModifierConfig(): ModifierConfig {
        return {
            is_debuff: false,
            is_hidden: false,
        };
    }

    _bonus_attack_speed = this.ability.GetSpecialValue('imba_bane_nightmare', 'bonus_attack_speed');
    DeclareFunctions(): ModifierFunction[] {
        return CDeclareFunctions(ModifierFunction.ATTACKSPEED_BONUS_CONSTANT);
    }

    CustomDeclareFunctions(): ModifierFunctions[] {
        return [ModifierFunctions.OnAttackStart_Attacker];
    }

    OnAttackStart_Attacker(AttackData: UnitEventAttackDamageData): void {
        if (AttackData.damageTable.attacker == this.parent && !AttackData.damageTable.victim.HasModifier('modifier_imba_bane_nightmare')) {
            this.Destroy();
        }
    }

    GetModifierAttackSpeedBonus_Constant(): number {
        return this._bonus_attack_speed;
    }
}
