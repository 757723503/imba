// import { CustomBaseModifier } from '../modules/custom_base_modifier';
// import { BaseModifier, registerModifier } from '../utils/dota_ts_adapter';
@registerModifier()
export class modifier_imba_stunned extends BaseModifier {
    GetModifierConfig(): ModifierConfig {
        return {
            is_hidden: false,
            is_debuff: false,
            not_purgable: false,
            not_purgable_exception: false,
        };
    }

    CheckState(): Partial<Record<modifierstate, boolean>> {
        return {
            [ModifierState.STUNNED]: true,
        };
    }

    OnCreated(keys: ModifierParams): void {
        // DebugPrint('modifier_imba_stunned OnCreated', this.GetAbility()?.GetAbilityName(), this._origin_ability_textur);
        // if (IsServer()) {
        // }
    }

    OnDestroy(): void {
        // if (IsServer()) {
        // }
    }
}
