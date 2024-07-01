import type { CDispatcher } from './modules/dispatcher';

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

    interface CBaseEntity {}

    interface ModifierAddedEventCustom {}

    interface CDOTA_Modifier_Lua {
        /**
         * 自定义注册函数
         */
        CustomDeclareFunctions?(): ModifierFunction2[];
    }

    interface CDOTA_Buff {}

    interface CDOTA_Item {}
    /**
     *拓展原版modifeirfunction
     *自定义事件分发 伤害 攻击等
     */
    const enum ModifierFunction2 {
        /**
         *  攻击事件 攻击者触发
         */
        OnAttackLanded_Attacker = 'OnAttackLanded_Attacker',
        /**
         * 攻击事件 受害者触发
         */
        OnAttackLanded_Victim = 'OnAttackLanded_Victim',
        /**
         * 伤害事件 伤害者触发
         */
        OnTakeDamage_Attacker = 'OnTakeDamage_Attacker',
        /**
         * 伤害事件 受害者触发
         */
        OnTakeDamageUnit = 'OnTakeDamageUnit',
    }
}
export {};
