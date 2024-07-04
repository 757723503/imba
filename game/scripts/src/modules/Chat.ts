enum ChatCommand {
    r = 'r',
    rs = 'rs',
    qw = '-qw',
    as = '-as',
    cr = '-cr',
    da = '-da',
    hero = '-hero',
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
                hero.AddNewModifier(hero, null, 'modifier_imba_stunned', { duration: 10 });
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
                break;
            case ChatCommand.da:
                ApplyDamage({
                    attacker: hero,
                    victim: hero,
                    damage: 500,
                    damage_type: DamageTypes.NONE,
                });

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
                DebugCreateUnit(player, DotaHero.tinker, DotaTeam.BADGUYS, false, (): void => {});
            default:
                break;
        }
    }
}
