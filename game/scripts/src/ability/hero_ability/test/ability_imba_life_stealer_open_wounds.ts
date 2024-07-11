import { modifier_imba_stunned } from '../../../common_modifier/modifier_imba_stunned';

@registerAbility()
export class ability_imba_life_stealer_open_wounds extends BaseAbility {
    CastFilterResultTarget(target) {
        if (IsServer()) {
            return UnitFilter(
                target,
                this.GetAbilityTargetTeam(),
                this.GetAbilityTargetType(),
                UnitTargetFlags.MAGIC_IMMUNE_ENEMIES,
                this.GetCaster().GetTeamNumber()
            );
        }
    }

    OnSpellStart(): void {
        // MarkAbilityButtonDirty
        const target = this.GetCursorTarget();
        target.AddModifier(this.GetCaster(), this, modifier_imba_stunned, { duration: 5 });
        CDeepPrintTable(this.GetAbilityKeyValues());
    }
}
