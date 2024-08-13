@registerAbility()
export class imba_lich_sinister_gaze extends BaseAbility {
    IsChanneling(): boolean {
        return true;
    }

    OnChannelFinish(interrupted: boolean): void {
        if (interrupted) {
            this.caster.Stop();
        }
    }

    OnSpellStart(keys?: SpellStartParams): void {}
}
