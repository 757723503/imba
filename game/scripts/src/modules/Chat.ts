import { reloadable } from '../utils/tstl-utils';
import { modifier_imba_stunned } from '../common_modifier/modifier_imba_stunned';
enum ChatCommand {
    r = 'r',
    rs = 'rs',
    qw = '-qw',
    as = '-as',
    cr = '-cr',
    da = '-da',
    hero = '-hero',
    dm = '-dm',
    mem = '-mem',
    in = '-in',
    ge = '-ge',
}
@reloadable
export class CChat {
    constructor() {
        ListenToGameEvent(`player_chat`, keys => this.OnPlayerChat(keys), this);
    }

    OnPlayerChat(keys: GameEventProvidedProperties & PlayerChatEvent): void {
        const strs = keys.text.split(' ');
        //大小写通用
        const cmd = strs[0].toLowerCase();
        const args = strs.slice(1);
        const steamid = PlayerResource.GetSteamAccountID(keys.playerid);
        const player = PlayerResource.GetPlayer(keys.playerid);

        const hero = player.GetAssignedHero();
        switch (cmd) {
            case ChatCommand.r:
                SendToServerConsole('script_reload');
                SendToServerConsole('cl_script_reload');
                for (let index = 0; index < 20; index++) {
                    const new_hero = PlayerResource.GetSelectedHeroEntity(index as PlayerID);
                    PlayerResource.ReplaceHeroWithNoTransfer(index as PlayerID, new_hero.GetUnitName(), 0, 0);
                    // new_hero.RemoveSelf();
                }
                GameRules.SendCustomMessage('重载成功。', 0, 0);
                break;
            case ChatCommand.rs:
                SendToServerConsole('restart');
                GameRules.SendCustomMessage('重启游戏。', 0, 0);

                break;
            case ChatCommand.qw:
                // DebugPrint(hero.GetHeroFacetID());
                // const ability = hero.GetAbilityByIndex(0);
                // ability.GetSpecialValue('imba_abaddon_aphotic_shield', 'duration');
                // ability.GetSpecialValue('222');
                // for (let index = -1; index < 100; index++) {
                //     const qw = hero.GetTogglableWearable(index);
                //     if (qw) {
                //         const item_model_name = qw.GetModelName();
                //         const material_group_hash = qw.GetMaterialGroupHash();
                //         DebugPrint(item_model_name, material_group_hash);
                //     }
                // }
                // const temp = hero.GetChildren();
                // for (const iterator of temp) {
                //     const item_class_name = iterator.GetClassname();

                //     if (item_class_name == 'dota_item_wearable') {
                //         const item = iterator as CBaseModelEntity;
                //         const item_model_name = item.GetModelName();
                //         const material_group_hash = item.GetMaterialGroupHash();
                //         DebugPrint(item_model_name, material_group_hash);
                //     }
                // }

                // CProjectileManager.CreateLinearProjectile({
                //     direction: Vector(1, 0, 0),
                //     distance: 1000,
                //     endRadius: 100,
                //     iUnitTargetFlags: UnitTargetFlags.NONE,
                //     iUnitTargetTeam: UnitTargetTeam.ENEMY,
                //     iUnitTargetType: UnitTargetType.NONE,
                //     moveSpeed: 1000,
                //     removeOnRadiusHit: true,
                //     source: hero,
                //     startRadius: 100,
                //     effectName: ParticleManager.GetParticleReplacement('particles/units/heroes/hero_magnataur/magnataur_shockwave.vpcf', hero),
                // });
                // print(ParticleManager.GetParticleReplacement('particles/units/heroes/hero_magnataur/magnataur_shockwave.vpcf', hero));
                // ProjectileManager.CreateLinearProjectile({
                //     fStartRadius: 100,
                //     vVelocity: Vector(1, 0, 0).__mul(1000),
                //     Source: hero,
                //     fExpireTime: GameRules.GetGameTime() + 10,
                //     fDistance: 1000,

                //     EffectName: 'particles/units/heroes/hero_magnataur/magnataur_shockwave.vpcf',
                // });
                // hero.AddAbility('imba_life_stealer_open_wounds');
                // hero.CHeal({ reason: HealReason.Heal, amount: 1000, show_number: true });
                // hero.GetTogglableWearable(LoadoutType.PERSONA_1_END);

                // const modifier = hero.AddModifier(hero, null, modifier_imba_stunned, { duration: 5 });
                // hero.PerformAttack(hero, true, true, true, true, true, false, true);
                // ApplyDamage({
                //     attacker: hero,
                //     victim: hero,
                //     damage: 5000,
                //     ability: null,
                //     damage_type: DamageTypes.NONE,
                // });

                // CAddDamage({
                //     attacker: hero,
                //     victim: hero,
                //     damage: 500,
                //     damageProperty: DamageProperty.Ability,
                //     damageType: DamageType.Physical,
                // });
                // let time = 0;
                // Timers.CreateTimer(0, () => {
                //     const _all_projectile_id = CProjectileManager.GetTrackingProjectilesID(hero);
                //     if (_all_projectile_id && _all_projectile_id.length != 0) {
                //         for (const id of _all_projectile_id) {
                //             const pro_pos = CProjectileManager.GetTrackingProjectilePosition(id);
                //             const target_pos = GetGroundPosition(
                //                 hero.GetAbsOrigin().__add(GetDirection(pro_pos, hero.GetAbsOrigin()).__mul(300)),
                //                 null
                //             );
                //             const pro_speed = CProjectileManager.GetTrackingProjectileSpeed(id);
                //             const distance = GetDistance(pro_pos, hero.GetAbsOrigin());
                //             // if (distance < 300) {
                //             // CProjectileManager.SetTrackingProjectileSpeedOnFrame(id, -1500);
                //             // }
                //             CProjectileManager.SetTrackingProjectileOrigin(id, Vector(0, 0, 500));
                //         }
                //     }
                //     // CProjectileManager.ProjectileDodge(hero);

                //     time++;
                //     if (time < 60) {
                //         return FrameTime();
                //     }
                // });
                break;
            case ChatCommand.da:
                // print(hero._debuff_immunity_magical_resistance.length);
                // CDeepPrintTable(hero._debuff_immunity_magical_resistance);
                let cont = 0;
                Timers.CreateTimer(1, () => {
                    const enemies = FindUnitsInRadius(
                        hero.GetTeamNumber(),
                        hero.GetAbsOrigin(),
                        null,
                        500,
                        UnitTargetTeam.ENEMY,
                        UnitTargetType.HERO + UnitTargetType.BASIC,
                        UnitTargetFlags.FOW_VISIBLE,
                        FindOrder.ANY,
                        false
                    );
                    for (const enemy of enemies) {
                        // enemy.AddModifier(hero, null, modifier_imba_stunned, { duration: 1 });
                        // hero.AddModifier(hero, null, modifier_imba_stunned, { duration: 1 });
                        for (let index = 0; index < 5; index++) {
                            CAttackData.PerformAttack(hero, enemy, {
                                use_projectile: false,
                                use_effect: true,
                            });
                        }
                    }
                    cont++;
                    if (cont < 10) {
                        return FrameTime();
                    }
                    return null;
                });

                break;
            case ChatCommand.cr:
                // let coo = 0;
                // Timers.CreateTimer(1, () => {
                //     DebugCreateUnit(player, 'npc_dota_creep_badguys_ranged', DotaTeam.BADGUYS, false, (unit): void => {
                //         //设置控制权
                //         unit.SetControllableByPlayer(keys.playerid, true);
                //         FindClearSpaceForUnit(unit, hero.GetAbsOrigin(), true);
                //     });
                //     if (coo < 10000) {
                //         coo++;
                //         return FrameTime();
                //     }
                //     return null;
                // });

                DebugCreateUnit(player, 'npc_dota_creep_badguys_melee', DotaTeam.BADGUYS, false, (unit): void => {
                    //设置控制权
                    unit.SetControllableByPlayer(keys.playerid, true);
                    FindClearSpaceForUnit(unit, hero.GetAbsOrigin(), true);
                });
                // DebugCreateUnit(player, 'npc_dota_furion_treant_large', DotaTeam.BADGUYS, false, (unit): void => {
                //     //设置控制权
                //     unit.SetControllableByPlayer(keys.playerid, true);
                //     FindClearSpaceForUnit(unit, hero.GetAbsOrigin(), true);
                // });

                // DebugCreateUnit(player, 'npc_dota_creep_badguys_ranged', DotaTeam.GOODGUYS, false, (unit): void => {
                //     //设置控制权
                //     unit.SetControllableByPlayer(keys.playerid, true);
                //     FindClearSpaceForUnit(unit, hero.GetAbsOrigin(), true);
                // });
                // DebugCreateUnit(player, 'npc_dota_creep_badguys_flagbearer', DotaTeam.GOODGUYS, false, (unit): void => {
                //     //设置控制权
                //     unit.SetControllableByPlayer(keys.playerid, true);
                //     FindClearSpaceForUnit(unit, hero.GetAbsOrigin(), true);
                // });
                // DebugCreateUnit(player, 'npc_dota_furion_treant_large', DotaTeam.GOODGUYS, false, (unit): void => {
                //     //设置控制权
                //     unit.SetControllableByPlayer(keys.playerid, true);
                //     FindClearSpaceForUnit(unit, hero.GetAbsOrigin(), true);
                // });

                // DebugCreateUnit(player, 'npc_dota_badguys_tower2_mid', DotaTeam.BADGUYS, false, (unit): void => {
                //     //设置控制权
                //     unit.SetControllableByPlayer(keys.playerid, true);
                //     FindClearSpaceForUnit(unit, hero.GetAbsOrigin(), true);
                // });
                // DebugCreateUnit(player, 'npc_dota_badguys_tower2_mid', DotaTeam.GOODGUYS, false, (unit): void => {
                //     //设置控制权
                //     unit.SetControllableByPlayer(keys.playerid, true);
                //     FindClearSpaceForUnit(unit, hero.GetAbsOrigin(), true);
                // });
                break;
            case ChatCommand.hero:
                DebugCreateUnit(player, DotaHero.abaddon, DotaTeam.BADGUYS, false, (unit): void => {
                    unit.AddItemByName(DotaItem.cyclone);
                });
                DebugCreateUnit(player, DotaHero.sniper, DotaTeam.GOODGUYS, false, (unit): void => {
                    unit.AddItemByName(DotaItem.cyclone);
                });
                break;
            case ChatCommand.dm:
                const dummy = CreateUnitByName('npc_dota_hero_target_dummy', hero.GetAbsOrigin(), true, null, null, DotaTeam.NEUTRALS);
                dummy.SetBaseMagicalResistanceValue(0);
                // dummy.SetControllableByPlayer(keys.playerid, true);
                break;
            case ChatCommand.mem:
                MEM.m_cMethods.DumpMemorySnapshot(null, null, -1);
                break;
            case ChatCommand.in:
                const ill = CIllusionManager.CreateIllusions(
                    hero,
                    hero,
                    { duration: 10, outgoing_damage: 10, incoming_damage: 1000 },
                    1,
                    100,
                    true,
                    true
                );
                for (const illusion of ill) {
                    illusion.AddModifier(illusion, null, modifier_imba_stunned, { duration: 10 });
                }

                break;
            case ChatCommand.ge:
                break;
            default:
                break;
        }
    }
}
