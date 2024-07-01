declare global {
    var originalAddNewModifier:
        | ((
              this: CDOTA_BaseNPC,
              caster: CDOTA_BaseNPC | undefined,
              ability: CDOTABaseAbility | undefined,
              modifierName: string,
              modifierTable: object | undefined
          ) => CDOTA_Buff)
        | undefined;
}

if (!globalThis.originalAddNewModifier) {
    globalThis.originalAddNewModifier = CDOTA_BaseNPC.AddNewModifier;
    CDOTA_BaseNPC.AddNewModifier = function (
        this: CDOTA_BaseNPC,
        caster: CDOTA_BaseNPC | undefined,
        ability: CDOTABaseAbility | undefined,
        modifierName: string,
        modifierTable: object | undefined
    ): CDOTA_Buff {
        return globalThis.originalAddNewModifier!.call(this, caster, ability, modifierName, modifierTable);
    };
}

export {};
