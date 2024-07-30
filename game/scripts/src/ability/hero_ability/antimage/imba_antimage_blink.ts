//闪烁
@registerAbility()
export class imba_antimage_blink extends BaseAbility {
    _min_blink_range = this.GetSpecialValue('imba_antimage_blink', 'min_blink_range');
    OnSpellStart(keys?: SpellStartParams): void {
        const cast_range = this.GetEffectiveCastRange(this.caster.GetAbsOrigin(), this.caster);
        const distance = math.max(this._min_blink_range, math.min(cast_range, GetDistance(this.target_pos, this.caster.GetAbsOrigin())));
        const direction = GetDirection(this.target_pos, this.caster.GetAbsOrigin());
        CProjectileManager.ProjectileDodge(this.caster);
        const end_pos = this.caster.GetAbsOrigin().__add(direction.__mul(distance));
        const pfx = CCreateParticle({
            caster: this.caster,
            owner: this.caster,
            particleAttach: ParticleAttachment.POINT,
            particleName: HeroParticleList.imba_antimage_blink_start,
            duration: 2,
        });
        CSetParticleControl(pfx, 0, this.caster.GetAbsOrigin());
        CSetParticleControlTransform(pfx, 0, this.caster.GetAbsOrigin(), null, direction);
        CSetParticleControlEnt(pfx, 1, this.caster, ParticleAttachment.POINT, 'attach_hitloc', this.caster.GetAbsOrigin(), false);
        FindClearSpaceForUnit(this.caster, end_pos, true);

        const pfx2 = CCreateParticle({
            caster: this.caster,
            owner: this.caster,
            particleAttach: ParticleAttachment.POINT,
            particleName: HeroParticleList.imba_antimage_blink_end,
            duration: 2,
        });
        CSetParticleControl(pfx2, 0, end_pos);
    }
}
