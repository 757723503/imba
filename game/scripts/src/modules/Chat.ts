enum ChatCommand {
    r = 'r',
    rs = 'rs',
    qw = '-qw',
    as = '-as',
    cr = '-cr',
    da = '-da',
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
                AddDamage({
                    attacker: hero,
                    victim: hero,
                    damage: 500,
                    damageProperty: DamageProperty.Attack,
                    damageType: DamageType.Physical,
                });

                break;
            case ChatCommand.cr:
                DebugCreateUnit(player, 'npc_dota_hero_earthshaker', DotaTeam.BADGUYS, false, (): void => {});
                break;
            default:
                break;
        }
    }
}
