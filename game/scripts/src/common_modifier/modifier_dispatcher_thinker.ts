import { BaseModifier, registerModifier } from '../utils/dota_ts_adapter';

@registerModifier()
export class modifier_dispatcher_thinker extends BaseModifier {
    IsHidden(): boolean {
        return false;
    }

    IsDebuff(): boolean {
        return true;
    }

    DeclareFunctions(): ModifierFunction[] {
        return [ModifierFunction.ON_ATTACK_LANDED];
    }

    OnAttackLanded(event: ModifierAttackEvent): void {
        if (IsServer()) {
            CDispatcher.Send(ModifierFunctions.OnAttackLanded_Attacker, event.attacker.entindex(), event);
            CDispatcher.Send(ModifierFunctions.OnAttackLanded_Target, event.target.entindex(), event);
        }
    }

    OnCreated(params: object): void {}

    OnDestroy(): void {}
}
