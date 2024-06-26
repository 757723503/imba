import { BaseModifier, registerModifier } from '../utils/dota_ts_adapter';

@registerModifier()
export class modifier_imba_dummy_thinker extends BaseModifier {
    OnCreated(params: object) {
        return super.OnCreated(params);
    }

    DeclareFunctions(): ModifierFunction[] {
        return [ModifierFunction.PREATTACK_BONUS_DAMAGE, ModifierFunction.ON_TAKEDAMAGE];
    }
}
