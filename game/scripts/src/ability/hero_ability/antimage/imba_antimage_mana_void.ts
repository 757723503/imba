import { modifier_imba_stunned } from '../../../common_modifier/modifier_imba_stunned';

@registerAbility()
export class imba_antimage_mana_void extends BaseAbility {
    _mana_void_aoe_radius = this.GetSpecialValue('imba_antimage_mana_void', 'mana_void_aoe_radius');
    _mana_void_damage_per_mana = this.GetSpecialValue('imba_antimage_mana_void', 'mana_void_damage_per_mana');
    _mana_void_ministun = this.GetSpecialValue('imba_antimage_mana_void', 'mana_void_ministun');
    OnSpellStart(): void {
        this.caster.EmitSound('Hero_Antimage.ManaVoid');
        const enemies = CFindUnitsInRadius({
            location: this.target.GetAbsOrigin(),
            radius: this._mana_void_aoe_radius,
            team: this.caster.GetTeamNumber(),
            flagFilter: UnitTargetFlags.FOW_VISIBLE,
            order: FindOrder.CLOSEST,
            teamFilter: UnitTargetTeam.ENEMY,
            typeFilter: UnitTargetType.HERO + UnitTargetType.BASIC,
        });
        const lost_mana = this.target.GetMaxMana() - this.target.GetMana();
        const damage = lost_mana * this._mana_void_damage_per_mana * 0.01;
        enemies.forEach(enemy => {
            enemy.AddModifier(this.caster, this, modifier_imba_stunned, { duration: this._mana_void_ministun });
            CAddDamage({
                attacker: this.caster,
                damage: damage,
                damageType: DamageType.Magical,
                victim: enemy,
                sourceAbility: this,
                damageFlags: DamageFlags.None,
                damageProperty: DamageProperty.Ability,
            });
        });
    }
}
