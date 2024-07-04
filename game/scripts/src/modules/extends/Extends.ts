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

    var originalApplyDamage: (options: ApplyDamageOptions) => number | undefined;
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

//实装 CDOTA_BaseNPC的GetMissChance 方法
if (!CDOTA_BaseNPC.GetMissChance) {
    CDOTA_BaseNPC.GetMissChance = function (this: CDOTA_BaseNPC): number {
        if (!this._miss_chance) this._miss_chance = 0;
        return this._miss_chance ?? 0;
    };
}
CDOTA_BaseNPC.IsEnemy = function (this: CDOTA_BaseNPC, unit: CDOTA_BaseNPC): boolean {
    return this.GetTeamNumber() !== unit.GetTeamNumber();
};

export {};
