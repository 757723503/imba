// 闪烁碎片
@registerAbility()
export class imba_antimage_mana_overload extends BaseAbility {
    _duration = this.GetSpecialValue('imba_antimage_mana_overload', 'duration');
    _outgoing_damage = this.GetSpecialValue('imba_antimage_mana_overload', 'outgoing_damage');
    _incoming_damage = this.GetSpecialValue('imba_antimage_mana_overload', 'incoming_damage');
    OnSpellStart(): void {
        const illusions = CIllusionManager.CreateIllusions(
            this.caster as CDOTA_BaseNPC_Hero,
            this.caster as CDOTA_BaseNPC_Hero,
            {
                duration: this._duration,
                incoming_damage: this._incoming_damage,
                outgoing_damage: this._outgoing_damage,
            },
            1,
            50,
            false,
            true
        );
        illusions.forEach(illusion => {});
    }
}
