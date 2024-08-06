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
        return this.GetTeamNumber() != unit.GetTeamNumber();
    };
}
if (!CDOTA_BaseNPC.IsAlly) {
    CDOTA_BaseNPC.IsAlly = function (this: CDOTA_BaseNPC, unit: CDOTA_BaseNPC): boolean {
        return this.GetTeamNumber() == unit.GetTeamNumber();
    };
}
if (!CDOTA_BaseNPC.IsUnit) {
    CDOTA_BaseNPC.IsUnit = function (this: CDOTA_BaseNPC): boolean {
        return this.IsHero() || this.IsCreep() || this.IsBoss();
    };
}
if (!CDOTA_BaseNPC.CTrueKill) {
    CDOTA_BaseNPC.CTrueKill = function (this: CDOTA_BaseNPC, killer: CDOTA_BaseNPC, ability: CDOTABaseAbility): boolean {
        if (CIsAlive(this)) {
            const all_modifiers = this.FindAllModifiers();
            for (const modifier of all_modifiers) {
            }
            CAddDamage({
                attacker: killer,
                damage: this.GetMaxHealth(),
                damageProperty: DamageProperty.Ability,
                damageType: DamageType.Pure,
                sourceAbility: ability,
                victim: this,
                damageFlags: DamageFlags.CullingDown,
            });
        }
        return !CIsAlive(this);
    };
}
if (!CDOTA_BaseNPC.CGetSpellAmp) {
    CDOTA_BaseNPC.CGetSpellAmp = function (this: CDOTA_BaseNPC, ability_name?: string): number {
        const all_amp = this._spell_amp_data_calls;
        const maxValues: { [key: string]: number } = {};
        let spell_amp = 0;
        let ability_amp = 0;

        // 遍历所有的 ampdata
        all_amp.forEach(ampdata => {
            // 如果有identification，记录每个唯一标示的最大值
            if (ampdata.identification) {
                if (!maxValues[ampdata.identification] || ampdata.value > maxValues[ampdata.identification]) {
                    maxValues[ampdata.identification] = ampdata.value;
                }
            } else {
                // 没有identification的情况，直接累加value
                spell_amp += ampdata.value;
            }

            // 如果提供了 ability_name 字符串，检查其是否在 ampdata.ability_name 数组中
            if (ability_name && ampdata.ability_name) {
                const isAbilityNameMatched = ampdata.ability_name.includes(ability_name);
                if (isAbilityNameMatched) {
                    ability_amp += ampdata.value;
                }
            }
        });

        // 计算所有最大值的总和
        spell_amp += Object.values(maxValues).reduce((sum, value) => sum + value, 0);

        // 返回总和加上 ability_name 的值（如果有提供）
        return spell_amp + ability_amp;
    };
}
if (!CDOTA_BaseNPC.GetDamageBlocks_Physic) {
    CDOTA_BaseNPC.GetDamageBlocks_Physic = function (this: CDOTA_BaseNPC): CBlock_Physic[] {
        return this.physic_damage_blocks;
    };
}

if (!CDOTA_BaseNPC.CIsStrongIllusion) {
    CDOTA_BaseNPC.CIsStrongIllusion = function (this: CDOTA_BaseNPC): boolean {
        // const all_modifiers = this.FindAllModifiers();
        // for (const modifier of all_modifiers) {
        //     if (modifier.HasFunction(ModifierFunction.STRONG_ILLUSION)) {
        //         return true;
        //     }
        // }
        return this._isStrongIllusion == true;
    };
}

if (!CDOTA_BaseNPC.GetDamageBlocks_Magic) {
    CDOTA_BaseNPC.GetDamageBlocks_Magic = function (this: CDOTA_BaseNPC): CBlock_Magic[] {
        return this.magic_damage_blocks;
    };
}

if (!CDOTA_BaseNPC.AddModifier) {
    CDOTA_BaseNPC.AddModifier = function <T extends Constructor>(
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
if (!CDOTA_BaseNPC.CHeal) {
    CDOTA_BaseNPC.CHeal = function (this: CDOTA_BaseNPC, keys: CustomHeal): void {
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
if (!CDOTA_BaseNPC._refresh_shields) {
    CDOTA_BaseNPC._refresh_shields = function (this: CDOTA_BaseNPC): void {
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
if (!CDOTA_BaseNPC.HasShard) {
    CDOTA_BaseNPC.HasShard = function (this: CDOTA_BaseNPC): boolean {
        return this.HasModifier('modifier_item_aghanims_shard');
    };
}

if (!CDOTA_BaseNPC.CPurge) {
    CDOTA_BaseNPC.CPurge = function (this: CDOTA_BaseNPC, keys: PurgeData): void {
        this.Purge(keys.removePositiveBuffs, keys.removeDebuffs, false, false, keys.removeExceptions);
    };
}
if (!CDOTA_BaseNPC.CGetFaceID) {
    CDOTA_BaseNPC.CGetFaceID = function (this: CDOTA_BaseNPC): number {
        if (this.IsHero()) {
            return tonumber(this.GetHeroFacetID());
        }
        return -1;
    };
}
if (!CDOTA_BaseNPC.CReflectAbility) {
    CDOTA_BaseNPC.CReflectAbility = function (this: CDOTA_BaseNPC, reflect_Ability: CDOTABaseAbility, reflect_target: CDOTA_BaseNPC): void {
        const reflect_ability = this.AddAbility(reflect_Ability.GetAbilityName());
        reflect_ability.SetLevel(reflect_Ability.GetLevel());
        reflect_ability.SetHidden(true);
        reflect_ability.SetStolen(true);
        reflect_ability['target'] = reflect_target;
        reflect_ability['isreflectspell'] = true;

        reflect_ability.OnSpellStart();
        this.RemoveAbilityByHandle(reflect_ability);
    };
}
// if (!CDOTA_BaseNPC.CTargetTriggerAbsorbReflect) {
//     CDOTA_BaseNPC.CTargetTriggerAbsorbReflect = function (
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
if (!CDOTA_BaseNPC.CHasTalent) {
    CDOTA_BaseNPC.CHasTalent = function (this: CDOTA_BaseNPC, talent_name: HeroTalent): boolean {
        return (this.FindAbilityByName(talent_name)?.GetLevel() ?? 0) > 0;
    };
}
if (!CDOTA_BaseNPC.GetAOEIncrease) {
    CDOTA_BaseNPC.GetAOEIncrease = function (this: CDOTA_BaseNPC): number {
        return this.custom_aoe_increase;
    };
}
if (!CDOTA_BaseNPC.CIsNeverDie) {
    CDOTA_BaseNPC.CIsNeverDie = function (this: CDOTA_BaseNPC): boolean {
        return this._never_die.length > 0;
    };
}

if (!CDOTABaseAbility.IsReflectSpell) {
    CDOTABaseAbility.IsReflectSpell = function (this: CDOTABaseAbility): boolean {
        return this['isreflectspell'] == true;
    };
}

if (!CDOTABaseAbility.GetSpecialValue) {
    CDOTABaseAbility.GetSpecialValue = function <T extends AbilityNames>(
        this: CDOTABaseAbility,
        abilityName: T,
        valueName: AbilityValues<T>
    ): number {
        const ability_table = GetAbilityKeyValuesByName(abilityName);
        const ability_values = ability_table['AbilityValues'];
        if (
            this.GetLevel() > 0 &&
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
export {};
