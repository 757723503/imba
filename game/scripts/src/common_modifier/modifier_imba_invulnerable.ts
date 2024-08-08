@registerModifier()
export class modifier_imba_invulnerable extends BaseModifier {
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
            [ModifierState.INVULNERABLE]: true,
        };
    }

    GetTexture(): string {
        return 'modifier_invulnerable';
    }
}
