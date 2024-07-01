import { BaseModifier, registerModifier } from '../utils/dota_ts_adapter';
@registerModifier()
export class modifier_imba_stunned extends BaseModifier {
    IsHidden(): boolean {
        return false;
    }

    IsDebuff(): boolean {
        return true;
    }

    CustomDeclareFunctions(): ModifierFunction2[] {
        return [ModifierFunction2.OnTakeDamageUnit];
    }

    DeclareFunctions(): ModifierFunction[] {
        return [ModifierFunction.ABILITY_LAYOUT];
    }

    // OnTakeDamageUnit(event: ModifierAttackEvent): void {
    //     print('OnTakeDamageUnit触发事件却还是被打断了');
    // }

    // CheckState(): Partial<Record<ModifierState, boolean>> {
    //     return {
    //         [ModifierState.STUNNED]: true,
    //     };
    // }

    OnCreated(params: object): void {
        print('子类OnCreated');
    }

    OnDestroy(): void {
        print('子类OnDestroy');
    }
}
