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
                GameRules.SendCustomMessage('重载成功。', 0, 0);
                break;
            case ChatCommand.rs:
                SendToServerConsole('restart');
                GameRules.SendCustomMessage('重启游戏。', 0, 0);
                break;
            case ChatCommand.qw:
                hero.AddAbility('ability_imba_life_stealer_open_wounds');
                const modifier = hero.AddModifier(hero, null, modifier_imba_stunned, { duration: 5 });

                // hero.PerformAttack(hero, true, true, true, true, true, false, true);
                // ApplyDamage({
                //     attacker: hero,
                //     victim: hero,
                //     damage: 5000,
                //     ability: null,
                //     damage_type: DamageTypes.NONE,
                // });

                // AddDamage({
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
                // let cont = 0;
                // Timers.CreateTimer(1, () => {
                //     const enemies = FindUnitsInRadius(
                //         hero.GetTeamNumber(),
                //         hero.GetAbsOrigin(),
                //         null,
                //         500,
                //         UnitTargetTeam.ENEMY,
                //         UnitTargetType.HERO,
                //         UnitTargetFlags.FOW_VISIBLE,
                //         FindOrder.ANY,
                //         false
                //     );
                //     for (const enemy of enemies) {
                //         for (let index = 0; index < 5; index++) {
                //             CAttackData.PerformAttack(hero, enemy, {
                //                 // is_trigger: true,
                //                 use_projectile: true,
                //             });
                //         }
                //     }
                //     cont++;
                //     if (cont < 10000) {
                //         return FrameTime();
                //     }
                //     return null;
                // });

                break;
            case ChatCommand.cr:
                DebugCreateUnit(player, 'npc_dota_creep_badguys_ranged', DotaTeam.BADGUYS, false, (unit): void => {
                    //设置控制权
                    unit.SetControllableByPlayer(keys.playerid, true);
                    FindClearSpaceForUnit(unit, hero.GetAbsOrigin(), true);
                });
                DebugCreateUnit(player, 'npc_dota_creep_badguys_flagbearer', DotaTeam.BADGUYS, false, (unit): void => {
                    //设置控制权
                    unit.SetControllableByPlayer(keys.playerid, true);
                    FindClearSpaceForUnit(unit, hero.GetAbsOrigin(), true);
                });
                DebugCreateUnit(player, 'npc_dota_furion_treant_large', DotaTeam.BADGUYS, false, (unit): void => {
                    //设置控制权
                    unit.SetControllableByPlayer(keys.playerid, true);
                    FindClearSpaceForUnit(unit, hero.GetAbsOrigin(), true);
                });

                DebugCreateUnit(player, 'npc_dota_creep_badguys_ranged', DotaTeam.GOODGUYS, false, (unit): void => {
                    //设置控制权
                    unit.SetControllableByPlayer(keys.playerid, true);
                    FindClearSpaceForUnit(unit, hero.GetAbsOrigin(), true);
                });
                DebugCreateUnit(player, 'npc_dota_creep_badguys_flagbearer', DotaTeam.GOODGUYS, false, (unit): void => {
                    //设置控制权
                    unit.SetControllableByPlayer(keys.playerid, true);
                    FindClearSpaceForUnit(unit, hero.GetAbsOrigin(), true);
                });
                DebugCreateUnit(player, 'npc_dota_furion_treant_large', DotaTeam.GOODGUYS, false, (unit): void => {
                    //设置控制权
                    unit.SetControllableByPlayer(keys.playerid, true);
                    FindClearSpaceForUnit(unit, hero.GetAbsOrigin(), true);
                });

                DebugCreateUnit(player, 'npc_dota_badguys_tower2_mid', DotaTeam.BADGUYS, false, (unit): void => {
                    //设置控制权
                    unit.SetControllableByPlayer(keys.playerid, true);
                    FindClearSpaceForUnit(unit, hero.GetAbsOrigin(), true);
                });
                DebugCreateUnit(player, 'npc_dota_badguys_tower2_mid', DotaTeam.GOODGUYS, false, (unit): void => {
                    //设置控制权
                    unit.SetControllableByPlayer(keys.playerid, true);
                    FindClearSpaceForUnit(unit, hero.GetAbsOrigin(), true);
                });
                break;
            case ChatCommand.hero:
                DebugCreateUnit(player, DotaHero.life_stealer, DotaTeam.BADGUYS, false, (unit): void => {
                    unit.AddItemByName(DotaItem.blade_mail);
                });
                break;
            case ChatCommand.dm:
                const dummy = CreateUnitByName('npc_dota_hero_target_dummy', hero.GetAbsOrigin(), true, null, null, DotaTeam.NEUTRALS);
                // dummy.SetControllableByPlayer(keys.playerid, true);
                break;
            case ChatCommand.mem:
                MEM.m_cMethods.DumpMemorySnapshot(null, null, -1);
                break;
            case ChatCommand.in:
                const ill = CIllusionManager.CreateIllusions(hero, hero, { duration: 5 }, 1, 100, true, true);
                let time1 = 0;
                Timers.CreateTimer(0, () => {
                    // const ill = CIllusionManager.CreateIllusions(hero, hero, { duration: 0.2 }, 5, 100, true, true);
                    for (const illusion of ill) {
                        print(ill);
                        DebugPrint(illusion?.IsNull(), IsValidEntity(illusion));
                    }
                    time1 += FrameTime();
                    if (time1 < 10) {
                        return FrameTime();
                    }
                    for (const illusion of ill) {
                        illusion.RespawnUnit();
                        illusion.AddNewModifier(illusion, null, 'modifier_illusion', { duration: 5 });
                    }
                });
                break;
            case ChatCommand.ge:
                break;
            default:
                break;
        }
    }
}
