//实装 CDOTA_BaseNPC的GetMissChance 方法
if (!C_DOTA_BaseNPC.GetBlindChance) {
    C_DOTA_BaseNPC.GetBlindChance = function (this: CDOTA_BaseNPC): number {
        return this._all_blind_chance;
    };
}
if (!C_DOTA_BaseNPC.GetEvasionChance) {
    C_DOTA_BaseNPC.GetEvasionChance = function (this: CDOTA_BaseNPC): number {
        return this._all_evasion_chance;
    };
}

if (!C_DOTA_BaseNPC.GetAccuracyChance) {
    C_DOTA_BaseNPC.GetAccuracyChance = function (this: CDOTA_BaseNPC): number {
        return this._all_accuracy_chance;
    };
}

if (!C_DOTA_BaseNPC.IsEnemy) {
    C_DOTA_BaseNPC.IsEnemy = function (this: CDOTA_BaseNPC, unit: CDOTA_BaseNPC): boolean {
        return this.GetTeamNumber() != unit.GetTeamNumber();
    };
}
if (!C_DOTA_BaseNPC.IsAlly) {
    C_DOTA_BaseNPC.IsAlly = function (this: CDOTA_BaseNPC, unit: CDOTA_BaseNPC): boolean {
        return this.GetTeamNumber() == unit.GetTeamNumber();
    };
}
if (!C_DOTA_BaseNPC.IsUnit) {
    C_DOTA_BaseNPC.IsUnit = function (this: CDOTA_BaseNPC): boolean {
        return this.IsHero() || this.IsCreep() || this.IsBoss();
    };
}

if (!C_DOTA_BaseNPC.GetDamageBlocks_Physic) {
    C_DOTA_BaseNPC.GetDamageBlocks_Physic = function (this: CDOTA_BaseNPC): CBlock_Physic[] {
        return this.physic_damage_blocks;
    };
}
if (!C_DOTA_BaseNPC.GetDamageBlocks_Magic) {
    C_DOTA_BaseNPC.GetDamageBlocks_Magic = function (this: CDOTA_BaseNPC): CBlock_Magic[] {
        return this.magic_damage_blocks;
    };
}
if (!C_DOTA_BaseNPC.AddModifier) {
    C_DOTA_BaseNPC.AddModifier = function <T extends Constructor>(
        this: CDOTA_BaseNPC,
        caster: CDOTA_BaseNPC | undefined,
        ability: CDOTABaseAbility | undefined,
        ModifierClass: T,
        modifierTable: InstanceType<T> extends { OnCreated(params: infer P): any } ? P : never,
        cal_resist?: boolean,
        ignore_immune_debuff?: boolean
    ): CDOTA_Buff {
        let origin_ability = ability;
        let origin_duration = (modifierTable as any).duration ?? 0;
        const modifierName = ModifierClass.name;
        if (cal_resist == true && origin_duration != 0) {
            origin_duration = origin_duration * (1 - this.GetStatusResistance());
            (modifierTable as any).duration = origin_duration;
        }
        if (ignore_immune_debuff == true) {
            origin_ability = this.FindAbilityByName('imba_custom_debuff_immune');
            (modifierTable as any)._ignore_debuff_immunity = 1;
            ability && ((modifierTable as any)._origin_ability = ability.GetAbilityName());
        }
        const modifier = this.AddNewModifier(caster, origin_ability, modifierName, modifierTable as any);
        return modifier;
    };
}
if (!C_DOTA_BaseNPC.CHeal) {
    C_DOTA_BaseNPC.CHeal = function (this: CDOTA_BaseNPC, keys: CustomHeal): void {
        const heal = keys.amount;
        const inflictor = keys.inflictor;
        const heal_reason = keys.reason;
        const source = keys.source;
        const show_number = keys.show_number;
        if (heal <= 0) {
            return;
        }
        if (show_number) {
            PopupHealing(this, heal);
        }
        this.HealWithParams(heal, inflictor, heal_reason == HealReason.Life_Steal, true, source, heal_reason == HealReason.Spell_Life_Steal);
    };
}
if (!C_DOTA_BaseNPC._refresh_shields) {
    C_DOTA_BaseNPC._refresh_shields = function (this: CDOTA_BaseNPC): void {
        const shieldDataContainer: Record<ShieldType, ShieldData[]> = {
            [ShieldType.Physic_Attack]: [],
            [ShieldType.Physic]: [],
            [ShieldType.Magic]: [],
            [ShieldType.All]: [],
        };
        const all_shields_data_calls = this._shields_data_calls;
        all_shields_data_calls.reduce((acc, shieldData) => {
            acc[shieldData.shield_type].push(shieldData);
            return acc;
        }, shieldDataContainer);
        const shieldDataForNetTable: Record<string, { max_shield: string; now_shield: string }> = {
            Physic_Attack: { max_shield: '0', now_shield: '0' },
            Physic: { max_shield: '0', now_shield: '0' },
            Magic: { max_shield: '0', now_shield: '0' },
            All: { max_shield: '0', now_shield: '0' },
        };

        for (const shieldType in shieldDataContainer) {
            const shields = shieldDataContainer[shieldType];
            let maxShield = 0;
            let nowShield = 0;
            for (const shield of shields) {
                maxShield += shield.max_value;
                nowShield += shield.value ?? shield.max_value;
            }
            shieldDataForNetTable[shieldType] = {
                max_shield: maxShield.toString(),
                now_shield: nowShield.toString(),
            };
        }

        CustomNetTables.SetTableValue('custom_shield_data', tostring(this?.GetEntityIndex()), shieldDataForNetTable);
        shieldDataContainer && Object.keys(shieldDataContainer).forEach(key => (shieldDataContainer[key].length = 0));
    };
}
if (!C_DOTA_BaseNPC.GetAOEIncrease) {
    C_DOTA_BaseNPC.GetAOEIncrease = function (this: CDOTA_BaseNPC): number {
        return 0;
    };
}
if (!C_DOTA_Ability_Lua.GetSpecialValue) {
    C_DOTA_Ability_Lua.GetSpecialValue = function <T extends AbilityNames>(
        this: CDOTABaseAbility,
        abilityName: T,
        valueName: AbilityValues<T>
    ): number {
        const ability_table = GetAbilityKeyValuesByName(abilityName);
        const ability_values = ability_table['AbilityValues'];
        if (
            ability_values[valueName as string] &&
            ability_values[valueName as string]['affected_by_aoe_increase'] &&
            ability_values[valueName as string]['affected_by_aoe_increase'] == 1
        ) {
            // print((valueName as string) + '===============affected_by_aoe_increase这个key可以被技能加成');
            if (CIsValid(this) && CIsValid(this.GetCaster())) {
                return this.GetSpecialValueFor(valueName as string) + this.GetCaster().GetAOEIncrease();
            }
        }
        return this.GetSpecialValueFor(valueName as string);
    };
}
if (!C_DOTA_BaseNPC.CGetFaceID) {
    C_DOTA_BaseNPC.CGetFaceID = function (this: CDOTA_BaseNPC): number {
        if (this.IsHero()) {
            return tonumber(this.GetHeroFacetID());
        }
        return -1;
    };
}
if (!C_DOTA_BaseNPC.CHasTalent) {
    C_DOTA_BaseNPC.CHasTalent = function (this: CDOTA_BaseNPC, talent_name: HeroTalent): boolean {
        return (this.FindAbilityByName(talent_name)?.GetLevel() ?? 0) > 0;
    };
}
// if (!C_DOTA_BaseNPC.CTargetTriggerAbsorbReflect) {
//     C_DOTA_BaseNPC.CTargetTriggerAbsorbReflect = function (
//         this: CDOTA_BaseNPC,
//         triggerSpellType: TriggerSpellType,
//         ability: CDOTABaseAbility
//     ): boolean {
//         if (triggerSpellType == TriggerSpellType.REFLECT || triggerSpellType == TriggerSpellType.BOTH) {
//             this.TriggerSpellReflect(ability);
//         }
//         if (triggerSpellType != TriggerSpellType.REFLECT) {
//             return this.TriggerSpellAbsorb(ability);
//         }
//         return false;
//     };
// }
export {};
