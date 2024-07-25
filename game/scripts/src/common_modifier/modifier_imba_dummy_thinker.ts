// import { CustomBaseModifier } from '../modules/custom_base_modifier';
// import { BaseModifier, registerModifier } from '../utils/dota_ts_adapter';

@registerModifier()
class modifier_imba_dummy_thinker extends BaseModifier {
    GetModifierConfig(): ModifierConfig {
        return {
            is_hidden: true,
            is_debuff: false,
            not_purgable: false,
            not_purgable_exception: false,
            not_remove_on_death: true,
        };
    }
}
