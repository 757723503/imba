import { BaseModifier, registerModifier } from '../utils/dota_ts_adapter';
@registerModifier()
export class modifier_imba_stunned extends BaseModifier {
    IsHidden(): boolean {
        return false;
    }

    IsDebuff(): boolean {
        return true;
    }

    CustomDeclareFunctions(): ModifierFunctions[] {
        return [ModifierFunctions.OnAttackStart_Target];
    }

    // OnAttackFail_Both(event: ModifierAttackEvent): void {
    //     print('modifier_imba_stunned OnAttackFail');
    //     print(event.record, event.damage_category, event.fail_type);
    // }

    // CheckState(): Partial<Record<modifierstate, boolean>> {
    //     return {
    //         [ModifierState.BLIND]: true,
    //     };
    // }

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
    // DeclareFunctions(): ModifierFunction[] {
    //     return [
    //         ModifierFunction.ON_ATTACK_START,
    //         ModifierFunction.ON_ATTACKED,
    //         ModifierFunction.ON_ATTACK_LANDED,
    //         ModifierFunction.ON_ATTACK_ALLIED,
    //         ModifierFunction.ON_ATTACK_FAIL,
    //         ModifierFunction.ON_ATTACK_FINISHED,
    //         ModifierFunction.ON_ATTACK_RECORD,
    //         ModifierFunction.ON_ATTACK_RECORD_DESTROY,
    //         ModifierFunction.ON_ATTACK_CANCELLED,
    //         ModifierFunction.ON_ATTACK,
    //     ];
    // }

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

    OnCreated(params: object): void {
        print('子类OnCreated');
    }

    OnDestroy(): void {
        print('子类OnDestroy');
    }
}
