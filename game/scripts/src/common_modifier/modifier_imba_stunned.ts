@registerModifier()
export class modifier_imba_stunned extends BaseModifier {
    GetModifierConfig(): ModifierConfig {
        return {
            is_hidden: false,
            is_debuff: true,
            not_purgable: false,
            not_purgable_exception: false,
        };
    }

    CheckState(): Partial<Record<modifierstate, boolean>> {
        return {
            [ModifierState.STUNNED]: true,
        };
    }

    OnCreated(keys: ModifierParams): void {}
    GetEffectName(): string {
        return ParticleManager.GetParticleReplacement('particles/generic_gameplay/generic_stunned.vpcf', this.caster as CDOTA_BaseNPC_Hero);
    }

    GetEffectAttachType(): ParticleAttachment {
        return ParticleAttachment.OVERHEAD_FOLLOW;
    }

    SetOverheadEffectOffset(offset: number): boolean {
        return true;
    }

    GetOverrideAnimation(): GameActivity {
        return GameActivity.DOTA_DISABLED;
    }

    DeclareFunctions(): ModifierFunction[] {
        return CDeclareFunctions(ModifierFunction.OVERRIDE_ANIMATION);
    }

    ShouldUseOverheadOffset(): boolean {
        return true;
    }
}
