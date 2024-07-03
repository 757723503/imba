import { BaseModifier, registerModifier } from '../utils/dota_ts_adapter';
@registerModifier()
export class modifier_imba_stunned extends BaseModifier {
    IsHidden(): boolean {
        return false;
    }

    IsDebuff(): boolean {
        return true;
    }

    // CustomDeclareFunctions(): ModifierFunctions[] {
    //     return [ModifierFunctions.DamageEvent_ReflectSharedDamage];
    // }

    // DamageEvent_ReflectSharedDamage(attacker: CDOTA_BaseNPC, DamageTypes: DamageTypes, damage: number): void {
    //     print('modifier_imba_stunned DamageEvent_ReflectSharedDamage', attacker.GetName(), DamageTypes, damage);
    // }

    OnAttackLanded_Attacker(event: ApplyDamageOptions): void {
        print('modifier_imba_stunned OnAttackLanded_Attacker');
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
        ];
    }

    OnAttackStart(event: ModifierAttackEvent): void {
        this.GetParent().StartGestureWithFadeAndPlaybackRate(
            GameActivity.DOTA_ATTACK_EVENT,
            0.0,
            0.0,
            this.GetParent().GetDisplayAttackSpeed() / 100
        );
    }

    OnAttackRecord(event: ModifierAttackEvent): void {
        print('modifier_imba_stunned OnAttackRecord');
    }

    OnAttack(event: ModifierAttackEvent): void {
        print('modifier_imba_stunned OnAttack');
    }

    OnAttackLanded(event: ModifierAttackEvent): void {
        print('modifier_imba_stunned OnAttackLanded');
    }

    OnAttacked(event: ModifierAttackEvent): void {
        print('modifier_imba_stunned OnAttacked');
    }

    OnAttackRecordDestroy(event: ModifierAttackEvent): void {
        print('modifier_imba_stunned OnAttackRecordDestroy');
    }

    OnAttackFinished(event: ModifierAttackEvent): void {
        print('modifier_imba_stunned OnAttackFinished');
        this.GetParent().FadeGesture(GameActivity.DOTA_ATTACK_EVENT);
    }

    OnAttackAllied(event: ModifierAttackEvent): void {
        print('modifier_imba_stunned OnAttackAllied');
    }

    OnAttackFail(event: ModifierAttackEvent): void {
        print('modifier_imba_stunned OnAttackFail');
    }

    OnAttackCancelled(event: ModifierAttackEvent): void {
        print('modifier_imba_stunned OnAttackCancelled');
        this.GetParent().FadeGesture(GameActivity.DOTA_ATTACK_EVENT);
    }

    // OnAttackLaunch(event: ApplyDamageOptions): void {
    //     print('modifier_imba_stunned OnAttackLaunch');
    // }

    OnCreated(params: object): void {
        print('子类OnCreated');
    }

    OnDestroy(): void {
        print('子类OnDestroy');
    }
}
