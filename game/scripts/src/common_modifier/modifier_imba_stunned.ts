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
        return [ModifierFunctions.DamageFixed_MagicShieldBlock, ModifierFunctions.OnAttackLanded_Attacker];
    }

    DamageFixed_MagicShieldBlock(dmgTable: ApplyDamageOptions): number {
        print(dmgTable?.attacker?.GetName(), dmgTable?.victim?.GetName());
        return 80;
    }

    OnAttackLanded_Attacker(event: ApplyDamageOptions): void {
        print('modifier_imba_stunned OnAttackLanded_Attacker');
    }
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

    // OnAttackStart(event: ModifierAttackEvent): void {
    //     print('modifier_imba_stunned OnAttackStart');
    // }

    // OnAttacked(event: ModifierAttackEvent): void {
    //     print('modifier_imba_stunned OnAttacked');
    // }

    // OnAttackLanded(event: ModifierAttackEvent): void {
    //     print(
    //         'modifier_imba_stunned OnAttackLanded',
    //         event.original_damage,
    //         event.damage,
    //         event.damage_type,
    //         event.damage_category,
    //         event.damage_flags
    //     );
    // }

    // OnAttackAllied(event: ModifierAttackEvent): void {
    //     print('modifier_imba_stunned OnAttackAllied');
    // }

    // OnAttackFail(event: ModifierAttackEvent): void {
    //     print('modifier_imba_stunned OnAttackFail');
    // }

    // OnAttackFinished(event: ModifierAttackEvent): void {
    //     print('modifier_imba_stunned OnAttackFinished');
    // }

    // OnAttackRecord(event: ModifierAttackEvent): void {
    //     const int = event;
    //     int.attacker = null;
    //     int.target = null;
    // }

    // OnAttackRecordDestroy(event: ModifierAttackEvent): void {
    //     print('modifier_imba_stunned OnAttackRecordDestroy');
    // }

    // OnAttackCancelled(event: ModifierAttackEvent): void {
    //     print('modifier_imba_stunned OnAttackCancelled');
    // }

    // OnAttack(event: ModifierAttackEvent): void {
    //     print('modifier_imba_stunned OnAttack', event.damage);
    // }

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
