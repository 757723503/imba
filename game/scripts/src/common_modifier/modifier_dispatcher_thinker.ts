import { CDispatcher } from '../modules/dispatcher';
import { BaseModifier, registerModifier } from '../utils/dota_ts_adapter';
@registerModifier()
export class modifier_dispatcher_thinker extends BaseModifier {
    DeclareFunctions(): ModifierFunction[] {
        return [ModifierFunction.ON_TAKEDAMAGE];
    }

    OnTakeDamage(event: ModifierInstanceEvent): void {
        if (IsServer()) {
            print('分发事件：OnTakeDamageUnit');
            CDispatcher.Send('OnTakeDamageUnit', event.unit.GetEntityIndex(), event);
        }
    }
}
