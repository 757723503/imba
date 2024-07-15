// import { CustomBaseModifier } from '../modules/custom_base_modifier';
// import { BaseModifier, registerModifier } from '../utils/dota_ts_adapter';
@registerModifier()
export class modifier_imba_stunned extends BaseModifier {
    constructor() {
        super();
        // const caster = this.GetCaster();
        // for (let index = 0; index < 8; index++) {
        //     const ability = caster.GetAbilityByIndex(index);
        //     this.SetAbility() = ability;
        // }
        // DebugPrint('modifier_imba_stunned constructor');
    }

    IsHidden(): boolean {
        return false;
    }

    IsDebuff(): boolean {
        return true;
    }

    // GetAttributes(): ModifierAttribute {
    //     return ModifierAttribute.MULTIPLE;
    // }

    CustomDeclareFunctions(): ModifierFunctions[] {
        return [
            ModifierFunctions.AddParentAttackCritData,
            ModifierFunctions.AddParentEvasionData,
            ModifierFunctions.AddParentBlindData,
            ModifierFunctions.OnAttackStart_Attacker,
        ];
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
        return [
            ModifierFunction.ON_ATTACK_START,
            ModifierFunction.ON_ATTACKED,
            ModifierFunction.ON_ATTACK_LANDED,
            ModifierFunction.ON_ATTACK_ALLIED,
            ModifierFunction.ON_ATTACK_FAIL,
            ModifierFunction.ON_ATTACK_FINISHED,
            ModifierFunction.ON_ATTACK_RECORD,
            ModifierFunction.ON_ATTACK_RECORD_DESTROY,
            ModifierFunction.ON_ATTACK_CANCELLED,
            ModifierFunction.ON_ATTACK,
            ModifierFunction.MODEL_CHANGE,
            ModifierFunction.MAGICAL_RESISTANCE_BONUS,
            ModifierFunction.INCOMING_DAMAGE_CONSTANT,
        ];
    }
    //     GetModifierIncomingPhysicalDamageConstant(event: ModifierAttackEvent): number {

    //     }
    //     GetModifierIncomingDamageConstant(event: ModifierAttackEvent): number {
    //         return 80;

    //     }
    // function modifier_centaur_3_1:GetModifierIncomingDamageConstant(keys)
    //     if IsClient() then
    //         if keys.report_max then
    //             return self.max_shield_hp
    //         else
    //             return self:GetStackCount() -- current shield hp
    //         end
    //     else
    //         local parent = self:GetParent()
    //         local damage = keys.damage
    //         local barrier_hp = self:GetStackCount()

    //         -- Don't react to damage with HP removal flag
    //         if bit.band(keys.damage_flags, DOTA_DAMAGE_FLAG_HPLOSS) == DOTA_DAMAGE_FLAG_HPLOSS then
    //           return 0
    //         end

    //         -- Don't react on self damage
    //         if keys.attacker == parent then
    //             return 0
    //         end

    //         -- Don't block more than remaining hp
    //         local block_amount = math.min(damage, barrier_hp)

    //         -- Reduce barrier hp
    //         self:SetStackCount(math.max(barrier_hp - block_amount,0))

    //         if block_amount > 0 then
    //           -- Visual effect
    //           local alert_type = OVERHEAD_ALERT_MAGICAL_BLOCK
    //           if keys.damage_type == DAMAGE_TYPE_PHYSICAL then
    //             alert_type = OVERHEAD_ALERT_BLOCK
    //           end

    //           SendOverheadEventMessage(nil, alert_type, parent, block_amount, nil)
    //         end

    //         -- Remove the barrier if hp is reduced to nothing
    //         if self:GetStackCount() <= 0 then
    //             self:Destroy()
    //         end

    //         return -block_amount
    //     end

    // end
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
