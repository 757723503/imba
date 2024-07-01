{
    const originalAddNewModifier = CDOTA_BaseNPC.AddNewModifier;
    CDOTA_BaseNPC.AddNewModifier = function (
        this: CDOTA_BaseNPC,
        caster: CDOTA_BaseNPC | undefined,
        ability: CDOTABaseAbility | undefined,
        modifierName: string,
        modifierTable: object | undefined
    ): CDOTA_Buff {
        print('覆写 =========================');
        return originalAddNewModifier.call(this, caster, ability, modifierName, modifierTable);
    };
}
