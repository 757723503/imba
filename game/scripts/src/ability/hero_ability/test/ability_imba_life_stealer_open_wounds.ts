import { modifier_imba_stunned } from '../../../common_modifier/modifier_imba_stunned';

@registerAbility()
export class ability_imba_life_stealer_open_wounds extends BaseAbility {
    // CastFilterResultTarget(target: CDOTA_BaseNPC): UnitFilterResult {
    //     if (IsServer()) {
    //         // return UnitFilter(
    //         //     target,
    //         //     this.GetAbilityTargetTeam(),
    //         //     this.GetAbilityTargetType(),
    //         //     UnitTargetFlags.MAGIC_IMMUNE_ENEMIES,
    //         //     this.GetCaster().GetTeamNumber()
    //         // );
    //         if (!target.IsDebuffImmune()) return UnitFilterResult.SUCCESS;
    //         return UnitFilterResult.FAIL_MAGIC_IMMUNE_ENEMY;
    //     }
    // }

    OnSpellStart(): void {
        const caster = this.GetCaster();
        const target = this.GetCursorTarget();
        // for (let index = 0; index < 8; index++) {
        //     const ability = caster.GetAbilityByIndex(index);
        //     if (!ability) return;
        //     if (ability.GetAbilityName() == 'puck_dream_coil') {
        //         ability.GetAbilityKeyValues();
        //         CDeepPrintTable(ability.GetAbilityKeyValues());
        //         // target.AddModifier(caster, this, modifier_imba_stunned, { duration: 5 });
        //     }
        // }
        target.AddModifier(caster, this, modifier_imba_stunned, { duration: 5 }, null, true);
    }
}
