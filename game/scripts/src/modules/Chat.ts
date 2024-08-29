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
                const temp = hero.GetChildren();
                for (const iterator of temp) {
                    if (iterator.GetClassname() == 'dota_item_wearable') {
                        const item = iterator as CBaseModelEntity;
                        print(item.GetModelName() + ':' + item.GetMaterialGroupHash());
                        // for (let i = 0; i < hero.GetAbilityCount(); i++) {
                        //     const ability = hero.GetAbilityByIndex(i);
                        //     if (!IsValid(ability)) continue;
                        //     GameRules.IMBAHeroItemsManager.SetHeroAbilityIcon(hero, hero, ability);
                        // }
                    }
                }
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
                dummy.SetControllableByPlayer(keys.playerid, true);
                break;
            case ChatCommand.mem:
                MEM.m_cMethods.DumpMemorySnapshot(null, null, -1);
                break;
            case ChatCommand.in:
                const time = 0;
                // Timers.CreateTimer(1, () => {
                CIllusionManager.CreateIllusionsAsync({
                    callback(illusion) {
                        // print(illusion.GetUnitName());
                        // DeepPrintTable(illusion._modifierKeys);
                    },
                    heroToCopy: hero,
                    modifierKeys: {
                        duration: 5,
                        outgoing_damage: 1,
                        incoming_damage: 100,
                    },
                    numIllusions: 2,
                    owner: hero,
                    isStrongIllusion: true,
                });
                //     time++;
                //     if (time < 500) {
                //         return 1;
                //     }
                //     return null;
                // });

                break;
            case ChatCommand.ge:
                break;
            default:
                break;
        }
    }
}
