import { CustomBaseModifier } from '../modules/custom_base_modifier';
import { BaseModifier, registerModifier } from '../utils/dota_ts_adapter';

@registerModifier()
export class modifier_imba_dummy_thinker extends CustomBaseModifier {
    DeclareFunctions(): ModifierFunction[] {
        return [ModifierFunction.PREATTACK_BONUS_DAMAGE, ModifierFunction.ON_TAKEDAMAGE];
    }
}
