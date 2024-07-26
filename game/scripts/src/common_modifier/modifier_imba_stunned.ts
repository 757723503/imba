// import { CustomBaseModifier } from '../modules/custom_base_modifier';
// import { BaseModifier, registerModifier } from '../utils/dota_ts_adapter';
@registerModifier()
export class modifier_imba_stunned extends BaseModifier {
    GetModifierConfig(): ModifierConfig {
        return {
            is_hidden: false,
            is_debuff: false,
            not_purgable: false,
            not_purgable_exception: false,
        };
    }

    GetAttributes(): ModifierAttribute {
        return ModifierAttribute.MULTIPLE;
    }

    CustomDeclareFunctions(): ModifierFunctions[] {
        return [
            // ModifierFunctions.AddParentAttackCritData,
            // ModifierFunctions.AddParentEvasionData,
            // ModifierFunctions.AddParentBlindData,
            // ModifierFunctions.OnAttackStart_Attacker,
            ModifierFunctions.AddParentShieldData,
        ];
    }

    AddParentShieldData(): ShieldData {
        return {
            max_value: 1000,
            shield_type: ShieldType.Physic,
        };
    }

    OnAttackStart_Attacker(AttackData: UnitEventAttackDamageData): void {
        print('modifier_imba_stunned OnAttackStart_Attacker');
        // AttackData.projectile = 'particles/econ/items/drow/drow_arcana/drow_arcana_base_attack_v2.vpcf';
    }

    // AddParentEvasionData(): EvasionData {
    //     return {
    //         evasion_chance: 50,
    //     };
    // }

    // AddParentBlindData(): BlindData {
    //     return {
    //         blind_chance: 50,
    //     };
    // }

    AddParentAttackCritData(): CritData {
        return {
            crit_chance: 100,
            crit_rate: 200,
        };
    }

    // OnAttackFail_Both(event: ModifierAttackEvent): void {
    //     print('modifier_imba_stunned OnAttackFail');
    //     print(event.record, event.damage_category, event.fail_type);
    // }

    CheckState(): Partial<Record<modifierstate, boolean>> {
        return {
            [ModifierState.DEBUFF_IMMUNE]: true,
            [ModifierState.HEXED]: true,
        };
    }

    // OnAttackStart_Target(event: CAttackEvent): void {
    //     print('modifier_imba_stunned OnAttackStart_Target');
    //     print(event.target.GetDamageMax(), event.target.GetBaseDamageMax(), event.target.GetDamageMax() - event.target.GetAttackDamage());
    // }

    // OnAttackStart_Attacker(event: CAttackEvent): void {
    //     print('modifier_imba_stunned OnAttackStart_Attacker');
    //     print(event.record, event.damage_category, event.fail_type);
    // }

    // OnAttackLanded_Target(event: CAttackEvent): void {
    //     print('modifier_imba_stunned OnAttackLanded');
    //     print(event.damage, event.record, event.ranged_attack, event.original_damage, event.fail_type);
    // }
    GetModifierModelChange(): string {
        return 'models/props_gameplay/chicken.vmdl';
    }

    DeclareFunctions(): ModifierFunction[] {
        return CDeclareFunctions(
            ModifierFunction.SPELL_AMPLIFY_PERCENTAGE,
            ModifierFunction.HEAL_AMPLIFY_PERCENTAGE_SOURCE,
            ModifierFunction.HEAL_AMPLIFY_PERCENTAGE_TARGET,
            ModifierFunction.HP_REGEN_AMPLIFY_PERCENTAGE,
            ModifierFunction.LIFESTEAL_AMPLIFY_PERCENTAGE,
            ModifierFunction.SPELL_LIFESTEAL_AMPLIFY_PERCENTAGE
        );
    }

    GetModifierSpellAmplify_Percentage(event: ModifierAttackEvent): number {
        return 100;
    }

    GetModifierHealAmplify_PercentageSource(): number {
        return 100;
    }

    GetModifierHealAmplify_PercentageTarget(): number {
        return 100;
    }

    GetModifierHPRegenAmplify_Percentage(): number {
        return 100;
    }

    GetModifierLifestealRegenAmplify_Percentage(): number {
        return 100;
    }

    GetModifierSpellLifestealRegenAmplify_Percentage(): number {
        return 100;
    }
    // GetModifierIncomingDamageConstant(keys: ModifierAttackEvent): number {
    //     if (IsClient()) {
    //         if (keys.report_max) {
    //             return 500;
    //         } else {
    //             return 200;
    //         }
    //     } else {
    //         return -20;
    //     }
    // }

    GetModifierMagicalResistanceBonus(event: ModifierAttackEvent): number {
        return 80;
    }

    // GetModifierMiss_Percentage(): number {
    //     return 100;
    // }
    OnAttackStart(event: ModifierAttackEvent): void {
        print('modifier_imba_stunned OnAttackStart', event.record);
        this.GetParent().StartGestureWithFadeAndPlaybackRate(
            GameActivity.DOTA_ATTACK_EVENT,
            0.0,
            0.0,
            this.GetParent().GetDisplayAttackSpeed() / 100
        );
    }

    OnAttackRecord(event: ModifierAttackEvent): void {
        print('modifier_imba_stunned OnAttackRecord', event.record);
    }

    OnAttack(event: ModifierAttackEvent): void {
        print('modifier_imba_stunned OnAttack', event.record);
    }

    OnAttackLanded(event: ModifierAttackEvent): void {
        print('modifier_imba_stunned OnAttackLanded', event.record);
    }

    OnAttacked(event: ModifierAttackEvent): void {
        print('modifier_imba_stunned OnAttacked', event.record);
    }

    OnAttackRecordDestroy(event: ModifierAttackEvent): void {
        print('modifier_imba_stunned OnAttackRecordDestroy', event.record);
    }

    OnAttackFinished(event: ModifierAttackEvent): void {
        print('modifier_imba_stunned OnAttackFinished', event.record);
        this.GetParent().FadeGesture(GameActivity.DOTA_ATTACK_EVENT);
    }

    OnAttackAllied(event: ModifierAttackEvent): void {
        print('modifier_imba_stunned OnAttackAllied', event.record);
    }

    OnAttackFail(event: ModifierAttackEvent): void {
        print('modifier_imba_stunned OnAttackFail', event.record);
    }

    OnAttackCancelled(event: ModifierAttackEvent): void {
        print('modifier_imba_stunned OnAttackCancelled', event.record);
        this.GetParent().FadeGesture(GameActivity.DOTA_ATTACK_EVENT);
    }

    OnCreated(keys: ModifierParams): void {
        // DebugPrint('modifier_imba_stunned OnCreated', this.GetAbility()?.GetAbilityName(), this._origin_ability_textur);
        // if (IsServer()) {
        // }
    }

    OnDestroy(): void {
        // if (IsServer()) {
        // }
    }
}
