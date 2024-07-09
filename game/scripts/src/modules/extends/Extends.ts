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
if (!CDOTA_BaseNPC.GetBlindChance) {
    CDOTA_BaseNPC.GetBlindChance = function (this: CDOTA_BaseNPC): number {
        return this._all_blind_chance;
    };
}
if (!CDOTA_BaseNPC.GetEvasionChance) {
    CDOTA_BaseNPC.GetEvasionChance = function (this: CDOTA_BaseNPC): number {
        return this._all_evasion_chance;
    };
}

if (!CDOTA_BaseNPC.GetAccuracyChance) {
    CDOTA_BaseNPC.GetAccuracyChance = function (this: CDOTA_BaseNPC): number {
        return this._all_accuracy_chance;
    };
}

if (!CDOTA_BaseNPC.IsEnemy) {
    CDOTA_BaseNPC.IsEnemy = function (this: CDOTA_BaseNPC, unit: CDOTA_BaseNPC): boolean {
        return this.GetTeamNumber() !== unit.GetTeamNumber();
    };
}
CDOTA_BaseNPC.IsAlly = function (this: CDOTA_BaseNPC, unit: CDOTA_BaseNPC): boolean {
    return this.GetTeamNumber() === unit.GetTeamNumber();
};
CDOTA_BaseNPC.IsUnit = function (this: CDOTA_BaseNPC): boolean {
    return this.IsHero() || this.IsCreep() || this.IsBoss();
};

if (!CDOTA_BaseNPC.GetDamageBlocks_Physic) {
    CDOTA_BaseNPC.GetDamageBlocks_Physic = function (this: CDOTA_BaseNPC): CBlock_Physic[] {
        return this.physic_damage_blocks;
    };
}
if (!CDOTA_BaseNPC.GetDamageBlocks_Magic) {
    CDOTA_BaseNPC.GetDamageBlocks_Magic = function (this: CDOTA_BaseNPC): CBlock_Magic[] {
        return this.magic_damage_blocks;
    };
}
export {};
