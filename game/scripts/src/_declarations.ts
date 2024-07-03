import type { BaseAbility } from './utils/dota_ts_adapter';

declare global {
    interface CDOTAGameRules {
        CDispatcher: CDispatcher;
    }
    interface CDOTA_BaseNPC {
        AddNewModifier(
            caster: CDOTA_BaseNPC | undefined,
            ability: CDOTABaseAbility | undefined,
            modifierName: string,
            modifierTable: object | undefined
        ): CDOTA_Buff;
    }

    interface CDOTA_BaseNPC_Hero {}

    interface CBaseEntity {
        base_attack_ability: CDOTABaseAbility;
    }

    interface ModifierAddedEventCustom {}

    interface CDOTA_Modifier_Lua {
        /**
         * 自定义注册函数
         */
        CustomDeclareFunctions?(): ModifierFunctions[];
    }

    interface CDOTA_Buff {}

    interface CDOTA_Item {}
}
export {};
