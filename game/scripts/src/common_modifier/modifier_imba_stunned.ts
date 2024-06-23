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
        return [ModifierFunction2.OnAttackLanded_Attacker];
    }

    OnCreated(params: object): void {
        if (IsServer()) {
            print('modifier_imba_stunned created');
        }
    }
}
