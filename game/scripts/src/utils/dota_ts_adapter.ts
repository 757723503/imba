interface BaseAbility extends CDOTA_Ability_Lua {}
class BaseAbility {
    /**施法者 */
    readonly caster: CDOTA_BaseNPC;
    /**本技能 */
    readonly ability: CDOTABaseAbility;
    /**施法者 */
    readonly parent: CDOTA_BaseNPC;
    /**目标 */
    readonly target: CDOTA_BaseNPC;
    /**目标位置 */
    readonly target_pos: Vector;
}

interface BaseItem extends CDOTA_Item_Lua {}
class BaseItem {}

interface BaseModifier extends CDOTA_Modifier_Lua {}
class BaseModifier {
    /**施法者 */
    readonly caster: CDOTA_BaseNPC;
    /**本技能 */
    readonly ability: CDOTABaseAbility;
    /** buff拥有者 */
    readonly parent: CDOTA_BaseNPC;
    readonly AddParticle_all_particle: ParticleID[];

    /** 禁止在onrefresh中调用oncreated */
    readonly _ignore_onrefresh_oncreated: boolean;
    public static apply<T extends typeof BaseModifier>(
        this: T,
        target: CDOTA_BaseNPC,
        caster?: CDOTA_BaseNPC,
        ability?: CDOTABaseAbility,
        modifierTable?: object
    ): InstanceType<T> {
        return target.AddNewModifier(caster, ability, this.name, modifierTable) as unknown as InstanceType<T>;
    }

    public static find_on<T extends typeof BaseModifier>(this: T, target: CDOTA_BaseNPC): InstanceType<T> {
        return target.FindModifierByName(this.name) as unknown as InstanceType<T>;
    }

    public static remove<T extends typeof BaseModifier>(this: T, target: CDOTA_BaseNPC): void {
        target.RemoveModifierByName(this.name);
    }

    _ignore_immune_debuff: boolean;
    _origin_ability_name: string;
    dispatcherIDList: Map<EntityIndex, dispatcher_id[]>;
    _originalGetAbility: () => CDOTABaseAbility | undefined;
    frameBasedTimers: {
        key: string;
        value: Partial<ModifierFunctions[]>;
    };

    // funs: Partial<ModifierFunctions[]> = [];

    // GetTexture(): string {
    //     const name = CustomNetTables.GetTableValue('custom_ability_textur', this.GetCaster().GetEntityIndex().toString()).name;
    //     print('GetTexture', name, IsServer());
    //     return GetAbilityTextureNameForAbility(name);
    // }
}

interface BaseModifierMotionHorizontal extends CDOTA_Modifier_Lua_Horizontal_Motion {}
class BaseModifierMotionHorizontal extends BaseModifier {}

interface BaseModifierMotionVertical extends CDOTA_Modifier_Lua_Vertical_Motion {}
class BaseModifierMotionVertical extends BaseModifier {}

interface BaseModifierMotionBoth extends CDOTA_Modifier_Lua_Motion_Both {}
class BaseModifierMotionBoth extends BaseModifier {}

// Add standard base classes to prototype chain to make `super.*` work as `self.BaseClass.*`
setmetatable(BaseAbility.prototype, { __index: CDOTA_Ability_Lua ?? C_DOTA_Ability_Lua });
setmetatable(BaseItem.prototype, { __index: CDOTA_Item_Lua ?? C_DOTA_Item_Lua });
setmetatable(BaseModifier.prototype, { __index: CDOTA_Modifier_Lua });
const registerAbility = (name?: string) => (ability: new () => CDOTA_Ability_Lua | CDOTA_Item_Lua) => {
    if (name !== undefined) {
        // @ts-ignore
        ability.name = name;
    } else {
        name = ability.name;
    }
    if (!name.startsWith('imba_')) {
        DebugError('技能名必须以imba_开头', name);
    }
    const [env] = getFileScope();

    env[name] = {};

    toDotaClassInstance(env[name], ability);
    const originalSpawn = (env[name] as CDOTA_Ability_Lua).Spawn;
    const originalOnSpellStart = (env[name] as CDOTA_Ability_Lua).OnSpellStart;
    env[name].Spawn = function () {
        this.caster = this.GetCaster();
        this.ability = this;
        this.parent = this.GetCaster();
        this.____constructor();
        if (originalSpawn) {
            originalSpawn.call(this);
        }

        // print((env[name] as CDOTA_Ability_Lua).GetAbilityKeyValues, 'GetAbilityKeyValues');
        if (IsServer() && (env[name] as CDOTA_Ability_Lua).GetAbilityKeyValues) {
            const ability_special_value = this.GetAbilityKeyValues();
            if (ability_special_value) {
                this._SpellDispellableType = ability_special_value['SpellImmunityType'];
                this._AbilityUnitTargetFlags = ability_special_value['AbilityUnitTargetFlags'];
            }
        }
    };

    env[name].OnSpellStart = function (keys?: SpellStartParams) {
        this.target = this.GetCursorTarget();
        this.target_pos = this.GetCursorPosition();
        this.____constructor();
        if (originalOnSpellStart) {
            originalOnSpellStart.call(this, keys);
        }
    };
};

const registerModifier = (name?: string) => (modifier: new () => CDOTA_Modifier_Lua) => {
    if (name !== undefined) {
        // @ts-ignore
        modifier.name = name;
    } else {
        name = modifier.name;
    }

    if (!name.startsWith('modifier_')) {
        DebugError('Buff名必须以modifier_开头', name);
    }
    const [env, source] = getFileScope();
    const [fileName] = string.gsub(source, '.*scripts[\\/]vscripts[\\/]', '');

    env[name] = {};

    toDotaClassInstance(env[name], modifier);
    const originalGetModifier = env[name] as CDOTA_Modifier_Lua;

    const originalOnCreated = originalGetModifier.OnCreated;
    env[name].OnCreated = function (parameters: any) {
        if (this._ignore_onrefresh_oncreated) {
            DebugError('禁止在onrefresh中调用oncreated');
        }
        //传入无视减益免疫参数
        if (parameters._ignore_debuff_immunity == 1) {
            DebugPrint('使用的无视减益免疫参数');
            env[name]._originalGetAbility = originalGetModifier.GetAbility;
            env[name]._ignore_immune_debuff = true;
            env[name]._origin_ability_name = parameters._origin_ability;
            originalGetModifier.GetAbility = function (this: CDOTA_Modifier_Lua): CDOTABaseAbility | undefined {
                const origin_ability = this.GetCaster()?.FindAbilityByName(env[name]._origin_ability_name);
                if (!origin_ability) DebugError('无法找到原始技能');
                DebugPrint('使用的是马甲无视减益免疫技能,重写getability,得到原始技能');
                return origin_ability;
            };

            CustomNetTables.SetTableValue('custom_ability_textur', tostring(this.GetCaster()?.GetEntityIndex()), {
                name: parameters._origin_ability,
            });
            if (!('GetTexture' in env[name])) {
                env[name].GetTexture = function (): string {
                    print('GetTexture运行 更改技能图标(无视减益免疫技能)');
                    const caster = this.GetCaster();
                    const customTextureName = CustomNetTables.GetTableValue('custom_ability_textur', tostring(caster?.GetEntityIndex()))?.name;
                    return GetAbilityTextureNameForAbility(customTextureName);
                };
            }
        }
        this.caster = this.GetCaster();
        this.ability = this.GetAbility();
        this.parent = this.GetParent();
        this.____constructor();
        if (!IsServer()) return;
        if (COnCreated) {
            COnCreated.call(this, this);
        }
        if (originalOnCreated) {
            originalOnCreated.call(this, parameters);
        }
    };

    const originalOnDestroy = originalGetModifier.OnDestroy;
    env[name].OnDestroy = function (parameters: any) {
        if (!IsServer()) return;
        if (COnDestroy) {
            COnDestroy.call(this, this);
        }
        if (originalOnDestroy) {
            originalOnDestroy.call(this, parameters);
        }
        CustomNetTables.SetTableValue('custom_ability_textur', tostring(this.GetCaster()?.GetEntityIndex()), null);
        if ((this.AddParticle_all_particle as ParticleID[]) && (this.AddParticle_all_particle as ParticleID[]).length > 0) {
            (this.AddParticle_all_particle as ParticleID[]).forEach(particleID => {
                CParticleManager.DestroyParticle(particleID, false);
            });
        }
    };
    const originalOnRefresh = originalGetModifier.OnRefresh;
    env[name].OnRefresh = function (parameters: any) {
        this._ignore_onrefresh_oncreated = true;
        if (!IsServer()) return;
        // this.____constructor();
        if (originalOnRefresh) {
            originalOnRefresh.call(this, parameters);
        }
    };

    if ('GetModifierConfig' in env[name]) {
        if (!originalGetModifier.GetModifierConfig || !originalGetModifier.GetModifierConfig()) {
            return;
        }
        const originalGetModifierConfig = originalGetModifier.GetModifierConfig() as ModifierConfig;
        if (originalGetModifierConfig.is_debuff) {
            originalGetModifier.IsDebuff = function (): boolean {
                return originalGetModifierConfig.is_debuff;
            };
        }
        if (originalGetModifierConfig.is_hidden) {
            originalGetModifier.IsHidden = function (): boolean {
                return originalGetModifierConfig.is_hidden;
            };
        }
        if (originalGetModifierConfig.not_purgable) {
            originalGetModifier.IsPurgable = function (): boolean {
                return !originalGetModifierConfig.not_purgable;
            };
        }
        if (originalGetModifierConfig.not_purgable_exception) {
            originalGetModifier.IsPurgeException = function (): boolean {
                return !originalGetModifierConfig.not_purgable_exception;
            };
        }
        if (originalGetModifierConfig.allow_illusion_duplicate) {
            originalGetModifier.AllowIllusionDuplicate = function (): boolean {
                return originalGetModifierConfig.allow_illusion_duplicate;
            };
        }
        if (originalGetModifierConfig.not_destroy_on_expire) {
            originalGetModifier.DestroyOnExpire = function (): boolean {
                return !originalGetModifierConfig.not_destroy_on_expire;
            };
        }
        if (originalGetModifierConfig.not_remove_on_death) {
            originalGetModifier.RemoveOnDeath = function (): boolean {
                return !originalGetModifierConfig.not_remove_on_death;
            };
        }
        if (originalGetModifierConfig.is_multiple) {
            originalGetModifier.GetAttributes = function (): number {
                return originalGetModifierConfig.is_multiple ? ModifierAttribute.MULTIPLE : ModifierAttribute.NONE;
            };
        }
    } else {
        if (!originalGetModifier.GetModifierConfig || !originalGetModifier.GetModifierConfig()) {
            //此modifier为技能的默认modifier  默认不可驱散 死亡不移除 不显示
            DebugWarning('未设置modifier配置 默认不可驱散 死亡不移除 不显示', name);
            if (
                originalGetModifier.GetAbility &&
                originalGetModifier.GetAbility() &&
                originalGetModifier.GetAbility().GetIntrinsicModifierName() === name
            ) {
                originalGetModifier.IsHidden = function (): boolean {
                    return true;
                };
                originalGetModifier.IsPurgable = function (): boolean {
                    return false;
                };
                originalGetModifier.IsPurgeException = function (): boolean {
                    return false;
                };
                originalGetModifier.RemoveOnDeath = function (): boolean {
                    return false;
                };
            }
            return;
        }
    }
    let type = LuaModifierMotionType.NONE;
    let base = (modifier as any).____super;
    while (base) {
        if (base === BaseModifierMotionBoth) {
            type = LuaModifierMotionType.BOTH;
            break;
        } else if (base === BaseModifierMotionHorizontal) {
            type = LuaModifierMotionType.HORIZONTAL;
            break;
        } else if (base === BaseModifierMotionVertical) {
            type = LuaModifierMotionType.VERTICAL;
            break;
        }

        base = base.____super;
    }

    LinkLuaModifier(name, fileName, type);
};
const COnCreated = (modifier: BaseModifier) => {
    if (!modifier.CustomDeclareFunctions) return;
    const parent_index = modifier.GetParent().entindex();
    const functions = modifier.CustomDeclareFunctions();
    if (functions.length > 0) {
        modifier.dispatcherIDList = modifier.dispatcherIDList ?? new Map();
        if (!modifier.dispatcherIDList.has(parent_index)) {
            modifier.dispatcherIDList.set(parent_index, []);
        }
        functions.forEach(element => {
            const func = _modifier_methods[element].registerFunc;
            CSafelyCall(() => {
                func(modifier, parent_index);
            }, `Error in registering function for ${element}`);

            // if (_modifier_methods[element].Use_Frametime) {
            //     this.funs.push(element);
            // }
        });
    }
};
const COnDestroy = (modifier: BaseModifier) => {
    if (!modifier.CustomDeclareFunctions) return;
    const functions = modifier.CustomDeclareFunctions();
    if (functions.length > 0) {
        const parent_index = modifier.GetParent().entindex();
        functions.forEach(element => {
            const func = _modifier_methods[element].removeFunc;
            CSafelyCall(() => {
                func(modifier, parent_index);
            }, `Error in removing function for ${element}`);
        });

        modifier.dispatcherIDList.delete(parent_index);
    }
};
//  const registerModifier = (name?: string) => (modifier: new () => CDOTA_Modifier_Lua) => {
//     if (name !== undefined) {
//         // @ts-ignore
//         modifier.name = name;
//     } else {
//         name = modifier.name;
//     }

//     const [env, source] = getFileScope();
//     const [fileName] = string.gsub(source, '.*scripts[\\/]vscripts[\\/]', '');

//     env[name] = {};

//     toDotaClassInstance(env[name], modifier);

//     // 将需要指向 BaseModifier 的方法添加到列表中
//     // const baseModifierMethods = ['OnCreated', 'OnDestroy', 'CustomDeclareFunctions'];
//     const baseModifierMethods = ['OnCreated', 'OnDestroy'];

//     baseModifierMethods.forEach(methodName => {
//         const baseMethod = BaseModifier.prototype[methodName];
//         const modifierMethod = modifier.prototype[methodName];

//         env[name][methodName] = function (parameters: any) {
//             this.____constructor();
//             if (!IsServer()) return;
//             // 调用 BaseModifier 的方法
//             if (baseMethod) {
//                 baseMethod.call(this, parameters);
//             }
//             // 调用 modifier 自己的方法
//             if (modifierMethod && modifierMethod !== baseMethod) {
//                 modifierMethod.call(this, parameters);
//             }
//         };
//     });

//     let type = LuaModifierMotionType.NONE;
//     let base = (modifier as any).____super;
//     while (base) {
//         if (base === BaseModifierMotionBoth) {
//             type = LuaModifierMotionType.BOTH;
//             break;
//         } else if (base === BaseModifierMotionHorizontal) {
//             type = LuaModifierMotionType.HORIZONTAL;
//             break;
//         } else if (base === BaseModifierMotionVertical) {
//             type = LuaModifierMotionType.VERTICAL;
//             break;
//         }

//         base = base.____super;
//     }

//     LinkLuaModifier(name, fileName, type);
// };

function clearTable(table: object) {
    for (const key in table) {
        delete (table as any)[key];
    }
}

function getFileScope(): [any, string] {
    let level = 1;
    while (true) {
        const info = debug.getinfo(level, 'S');
        if (
            info &&
            info.what === 'main' &&
            // 此处是为了修正加密后的脚本因为使用 loadstring 载入之后
            // 导致的 info.source 不是正确的文件名的问题
            // 需要往上再来一级才行
            // loadstring的 main short_src 为'[string "local a = 1"] blah blah
            // 如果你没有加密使用这个方法的脚本（目前为包含registerAbility与registerModifier的代码）
            // 可以注释或忽略下面这两行代码
            info.source &&
            info.source.startsWith('@') // ensure this is the main script
        ) {
            return [getfenv(level), info.source];
        }

        level += 1;
    }
}

function toDotaClassInstance(instance: any, table: new () => any) {
    let { prototype } = table;
    while (prototype) {
        for (const key in prototype) {
            // Using hasOwnProperty to ignore methods from metatable added by ExtendInstance
            // https://github.com/SteamDatabase/GameTracking-Dota2/blob/7edcaa294bdcf493df0846f8bbcd4d47a5c3bd57/game/core/scripts/vscripts/init.lua#L195
            if (!instance.hasOwnProperty(key)) {
                if (key != '__index') {
                    instance[key] = prototype[key];
                }
            }
        }

        prototype = getmetatable(prototype);
    }
}
const _modifier_methods: {
    [key in ModifierFunctions]: {
        registerFunc?: (instance: BaseModifier, parent_index: EntityIndex) => void;
        removeFunc?: (instance: BaseModifier, parent_index: EntityIndex) => void;
        /**
         * 是否每帧调用registerFunc 自行在registerFunc中做好重复逻辑判断
         */
        Use_Frametime?: boolean;
    };
} = {
    [ModifierFunctions.DamageEvent_OriginDamage]: {
        registerFunc: (instance, parent_index) => {
            const dispatcherId = Dispatcher.Register('DAMAGE_ORIGIN_DAMAGE_EVENT', parent_index, event => {
                if (instance.DamageEvent_OriginDamage) instance.DamageEvent_OriginDamage(event);
            });
            instance.dispatcherIDList.get(parent_index)!.push(dispatcherId);
        },
        removeFunc: (instance, parent_index) => {
            const dispatcherList = instance.dispatcherIDList.get(parent_index);
            if (dispatcherList) {
                dispatcherList.forEach(dispatcherId => {
                    Dispatcher.UnRegister(dispatcherId);
                });
            }
        },
    },
    [ModifierFunctions.DamageEvent_EndDamage]: {
        registerFunc: (instance, parent_index) => {
            const dispatcherId = Dispatcher.Register('DAMAGE_END_DAMAGE_EVENT', parent_index, event => {
                if (instance.DamageEvent_EndDamage)
                    instance.DamageEvent_EndDamage(
                        event.attacker,
                        event.victim,
                        event.damage_property,
                        event.damage_type,
                        event.damage_flag,
                        event.damage
                    );
            });
            instance.dispatcherIDList.get(parent_index)!.push(dispatcherId);
        },
        removeFunc: (instance, parent_index) => {
            const dispatcherList = instance.dispatcherIDList.get(parent_index);
            if (dispatcherList) {
                dispatcherList.forEach(dispatcherId => {
                    Dispatcher.UnRegister(dispatcherId);
                });
            }
        },
    },
    [ModifierFunctions.DamageEvent_AfterIllusionDamage]: {
        registerFunc: (instance, parent_index) => {
            const dispatcherId = Dispatcher.Register('DAMAGE_AFTER_ILLUSION_DAMAGE_EVENT', parent_index, event => {
                if (instance.DamageEvent_AfterIllusionDamage)
                    instance.DamageEvent_AfterIllusionDamage(event.attacker, event.victim, event.damage, event.damage_flag);
            });
            instance.dispatcherIDList.get(parent_index)!.push(dispatcherId);
        },
        removeFunc: (instance, parent_index) => {
            const dispatcherList = instance.dispatcherIDList.get(parent_index);
            if (dispatcherList) {
                dispatcherList.forEach(dispatcherId => {
                    Dispatcher.UnRegister(dispatcherId);
                });
            }
        },
    },
    [ModifierFunctions.DamageEvent_PsiBlade]: {
        registerFunc: (instance, parent_index) => {
            const dispatcherId = Dispatcher.Register('DAMAGE_PSI_BLADE_EVENT', parent_index, event => {
                if (instance.DamageEvent_PsiBlade) instance.DamageEvent_PsiBlade(event.victim, event.damage);
            });
            instance.dispatcherIDList.get(parent_index)!.push(dispatcherId);
        },
        removeFunc: (instance, parent_index) => {
            const dispatcherList = instance.dispatcherIDList.get(parent_index);
            if (dispatcherList) {
                dispatcherList.forEach(dispatcherId => {
                    Dispatcher.UnRegister(dispatcherId);
                });
            }
        },
    },
    [ModifierFunctions.DamageEvent_SpecialBounceAttack]: {
        registerFunc: (instance, parent_index) => {
            const dispatcherId = Dispatcher.Register('DAMAGE_SPECIAL_BOUNCE_ATTACK_EVENT', parent_index, event => {
                if (instance.DamageEvent_SpecialBounceAttack)
                    instance.DamageEvent_SpecialBounceAttack(event.attacker, event.victim, event.damage, event.damage_flag);
            });
            instance.dispatcherIDList.get(parent_index)!.push(dispatcherId);
        },
        removeFunc: (instance, parent_index) => {
            const dispatcherList = instance.dispatcherIDList.get(parent_index);
            if (dispatcherList) {
                dispatcherList.forEach(dispatcherId => {
                    Dispatcher.UnRegister(dispatcherId);
                });
            }
        },
    },

    [ModifierFunctions.OnUnitDeath]: {
        registerFunc: (instance, parent_index) => {
            const dispatcherId = Dispatcher.Register('UNIT_DEATH', parent_index, event => {
                if (instance.OnUnitDeath) instance.OnUnitDeath(event);
            });
            instance.dispatcherIDList.get(parent_index)!.push(dispatcherId);
        },
        removeFunc: (instance, parent_index) => {
            const dispatcherList = instance.dispatcherIDList.get(parent_index);
            if (dispatcherList) {
                dispatcherList.forEach(dispatcherId => {
                    Dispatcher.UnRegister(dispatcherId);
                });
            }
        },
    },
    [ModifierFunctions.OnHeroDeath]: {
        registerFunc: (instance, parent_index) => {
            const dispatcherId = Dispatcher.Register('UNIT_HERO_DEATH', parent_index, event => {
                if (instance.OnHeroDeath) instance.OnHeroDeath(event);
            });
            instance.dispatcherIDList.get(parent_index)!.push(dispatcherId);
        },
        removeFunc: (instance, parent_index) => {
            const dispatcherList = instance.dispatcherIDList.get(parent_index);
            if (dispatcherList) {
                dispatcherList.forEach(dispatcherId => {
                    Dispatcher.UnRegister(dispatcherId);
                });
            }
        },
    },
    [ModifierFunctions.OnBuildingDeath]: {
        registerFunc: (instance, parent_index) => {
            const dispatcherId = Dispatcher.Register('UNIT_BUILDING_DEATH', parent_index, event => {
                if (instance.OnBuildingDeath) instance.OnBuildingDeath(event);
            });
            instance.dispatcherIDList.get(parent_index)!.push(dispatcherId);
        },
        removeFunc: (instance, parent_index) => {
            const dispatcherList = instance.dispatcherIDList.get(parent_index);
            if (dispatcherList) {
                dispatcherList.forEach(dispatcherId => {
                    Dispatcher.UnRegister(dispatcherId);
                });
            }
        },
    },

    [ModifierFunctions.OnAttackStart_Attacker]: {
        registerFunc: (instance, parent_index) => {
            const dispatcherId = Dispatcher.Register('ON_ATTACK_START_ATTACKER', parent_index, event => {
                if (instance.OnAttackStart_Attacker) instance.OnAttackStart_Attacker(event);
            });
            instance.dispatcherIDList.get(parent_index)!.push(dispatcherId);
        },
        removeFunc: (instance, parent_index) => {
            const dispatcherList = instance.dispatcherIDList.get(parent_index);
            if (dispatcherList) {
                dispatcherList.forEach(dispatcherId => {
                    Dispatcher.UnRegister(dispatcherId);
                });
            }
        },
    },

    [ModifierFunctions.OnAttackStart_Target]: {
        registerFunc: (instance, parent_index) => {
            const dispatcherId = Dispatcher.Register('ON_ATTACK_START_TARGET', parent_index, event => {
                if (instance.OnAttackStart_Target) instance.OnAttackStart_Target(event);
            });
            instance.dispatcherIDList.get(parent_index)!.push(dispatcherId);
        },
        removeFunc: (instance, parent_index) => {
            const dispatcherList = instance.dispatcherIDList.get(parent_index);
            if (dispatcherList) {
                dispatcherList.forEach(dispatcherId => {
                    Dispatcher.UnRegister(dispatcherId);
                });
            }
        },
    },

    [ModifierFunctions.OnAttackLanded_Attacker]: {
        registerFunc: (instance, parent_index) => {
            const dispatcherId = Dispatcher.Register('ON_ATTACK_LANDED_ATTACKER', parent_index, event => {
                if (instance.OnAttackLanded_Attacker) instance.OnAttackLanded_Attacker(event);
            });
            instance.dispatcherIDList.get(parent_index)!.push(dispatcherId);
        },
        removeFunc: (instance, parent_index) => {
            const dispatcherList = instance.dispatcherIDList.get(parent_index);
            if (dispatcherList) {
                dispatcherList.forEach(dispatcherId => {
                    Dispatcher.UnRegister(dispatcherId);
                });
            }
        },
    },
    [ModifierFunctions.OnAttackLanded_Target]: {
        registerFunc: (instance, parent_index) => {
            const dispatcherId = Dispatcher.Register('ON_ATTACK_LANDED_TARGET', parent_index, event => {
                if (instance.OnAttackLanded_Target) instance.OnAttackLanded_Target(event);
            });
            instance.dispatcherIDList.get(parent_index)!.push(dispatcherId);
        },
        removeFunc: (instance, parent_index) => {
            const dispatcherList = instance.dispatcherIDList.get(parent_index);
            if (dispatcherList) {
                dispatcherList.forEach(dispatcherId => {
                    Dispatcher.UnRegister(dispatcherId);
                });
            }
        },
    },

    // OnAttackFail_Both

    [ModifierFunctions.OnAttackFail_Both]: {
        registerFunc: (instance, parent_index) => {
            const dispatcherId = Dispatcher.Register('ON_ATTACK_FAIL_BOTH', parent_index, event => {
                if (instance.OnAttackFail_Both) instance.OnAttackFail_Both(event);
            });
            instance.dispatcherIDList.get(parent_index)!.push(dispatcherId);
        },
        removeFunc: (instance, parent_index) => {
            const dispatcherList = instance.dispatcherIDList.get(parent_index);
            if (dispatcherList) {
                dispatcherList.forEach(dispatcherId => {
                    Dispatcher.UnRegister(dispatcherId);
                });
            }
        },
    },
    // [ModifierFunctions.OnAttackRecord_Attack]: {
    //     registerFunc: (instance, parent_index) => {
    //         const dispatcherId = Dispatcher.Register('ON_ATTACK_RECORD_ATTACK', parent_index, event => {
    //             if (instance.OnAttackRecord_Attack) instance.OnAttackRecord_Attack(event);
    //         });
    //         instance.dispatcherIDList.get(parent_index)!.push(dispatcherId);
    //     },
    //     removeFunc: (instance, parent_index) => {
    //         const dispatcherList = instance.dispatcherIDList.get(parent_index);
    //         if (dispatcherList) {
    //             dispatcherList.forEach(dispatcherId => {
    //                 Dispatcher.UnRegister(dispatcherId);
    //             });
    //         }
    //     },
    // },

    // [ModifierFunctions.OnAttack]: {
    //     registerFunc: (instance, parent_index) => {
    //         const dispatcherId = Dispatcher.Register('ON_ATTACK', parent_index, event => {
    //             if (instance.OnAttack) instance.OnAttack(event);
    //         });
    //         instance.dispatcherIDList.get(parent_index)!.push(dispatcherId);
    //     },
    //     removeFunc: (instance, parent_index) => {
    //         const dispatcherList = instance.dispatcherIDList.get(parent_index);
    //         if (dispatcherList) {
    //             dispatcherList.forEach(dispatcherId => {
    //                 Dispatcher.UnRegister(dispatcherId);
    //             });
    //         }
    //     },
    // },

    // [ModifierFunctions.OnAttackFinished]: {
    //     registerFunc: (instance, parent_index) => {
    //         const dispatcherId = Dispatcher.Register('ON_ATTACK_FINISHED', parent_index, event => {
    //             if (instance.OnAttackFinished) instance.OnAttackFinished(event);
    //         });
    //         instance.dispatcherIDList.get(parent_index)!.push(dispatcherId);
    //     },
    //     removeFunc: (instance, parent_index) => {
    //         const dispatcherList = instance.dispatcherIDList.get(parent_index);
    //         if (dispatcherList) {
    //             dispatcherList.forEach(dispatcherId => {
    //                 Dispatcher.UnRegister(dispatcherId);
    //             });
    //         }
    //     },
    // },

    // [ModifierFunctions.OnAttackRecordDestroy]: {
    //     registerFunc: (instance, parent_index) => {
    //         const dispatcherId = Dispatcher.Register('ON_ATTACK_RECORD_DESTROY', parent_index, event => {
    //             if (instance.OnAttackRecordDestroy) instance.OnAttackRecordDestroy(event);
    //         });
    //         instance.dispatcherIDList.get(parent_index)!.push(dispatcherId);
    //     },
    //     removeFunc: (instance, parent_index) => {
    //         const dispatcherList = instance.dispatcherIDList.get(parent_index);
    //         if (dispatcherList) {
    //             dispatcherList.forEach(dispatcherId => {
    //                 Dispatcher.UnRegister(dispatcherId);
    //             });
    //         }
    //     },
    // },

    // [ModifierFunctions.OnAttackCancelled]: {
    //     registerFunc: (instance, parent_index) => {
    //         const dispatcherId = Dispatcher.Register('ON_ATTACK_CANCELLED', parent_index, event => {
    //             if (instance.OnAttackCancelled) instance.OnAttackCancelled(event);
    //         });
    //         instance.dispatcherIDList.get(parent_index)!.push(dispatcherId);
    //     },
    //     removeFunc: (instance, parent_index) => {
    //         const dispatcherList = instance.dispatcherIDList.get(parent_index);
    //         if (dispatcherList) {
    //             dispatcherList.forEach(dispatcherId => {
    //                 Dispatcher.UnRegister(dispatcherId);
    //             });
    //         }
    //     },
    // },

    // [ModifierFunctions.OnAttackFail]: {
    //     registerFunc: (instance, parent_index) => {
    //         const dispatcherId = Dispatcher.Register('ON_ATTACK_FAIL', parent_index, event => {
    //             if (instance.OnAttackFail) instance.OnAttackFail(event);
    //         });
    //         instance.dispatcherIDList.get(parent_index)!.push(dispatcherId);
    //     },
    //     removeFunc: (instance, parent_index) => {
    //         const dispatcherList = instance.dispatcherIDList.get(parent_index);
    //         if (dispatcherList) {
    //             dispatcherList.forEach(dispatcherId => {
    //                 Dispatcher.UnRegister(dispatcherId);
    //             });
    //         }
    //     },
    // },

    [ModifierFunctions.DamageEvent_AttackBounce]: {
        registerFunc: (instance, parent_index) => {
            const dispatcherId = Dispatcher.Register('DAMAGE_ATTACKER_BOUNCE_EVENT', parent_index, event => {
                if (instance.DamageEvent_AttackBounce) instance.DamageEvent_AttackBounce(event);
            });
            instance.dispatcherIDList.get(parent_index)!.push(dispatcherId);
        },
        removeFunc: (instance, parent_index) => {
            const dispatcherList = instance.dispatcherIDList.get(parent_index);
            if (dispatcherList) {
                dispatcherList.forEach(dispatcherId => {
                    Dispatcher.UnRegister(dispatcherId);
                });
            }
        },
    },

    [ModifierFunctions.DamageFixed_BladeStormAttack]: {
        registerFunc: (instance, parent_index) => {
            const dispatcherId = Dispatcher.Register('DAMAGE_FIXED_ATTACKER_BLADE_STORM_ATK', parent_index, event => {
                let result = false;
                if (instance.DamageFixed_BladeStormAttack) result = instance.DamageFixed_BladeStormAttack(event.victim);
                event.result = result;
            });
            instance.dispatcherIDList.get(parent_index)!.push(dispatcherId);
        },
        removeFunc: (instance, parent_index) => {
            const dispatcherList = instance.dispatcherIDList.get(parent_index);
            if (dispatcherList) {
                dispatcherList.forEach(dispatcherId => {
                    Dispatcher.UnRegister(dispatcherId);
                });
            }
        },
    },

    // DamageFixed_AttackEffectDamage

    [ModifierFunctions.DamageFixed_AttackEffectDamage]: {
        registerFunc: (instance, parent_index) => {
            const dispatcherId = Dispatcher.Register('DAMAGE_FIXED_ATTACKER_ATK_DAMAGE', parent_index, event => {
                if (instance.DamageFixed_AttackEffectDamage) instance.DamageFixed_AttackEffectDamage(event);
            });
            instance.dispatcherIDList.get(parent_index)!.push(dispatcherId);
        },
        removeFunc: (instance, parent_index) => {
            const dispatcherList = instance.dispatcherIDList.get(parent_index);
            if (dispatcherList) {
                dispatcherList.forEach(dispatcherId => {
                    Dispatcher.UnRegister(dispatcherId);
                });
            }
        },
    },

    // DamageEvent_AttackCleave

    [ModifierFunctions.DamageEvent_AttackCleave]: {
        registerFunc: (instance, parent_index) => {
            const dispatcherId = Dispatcher.Register('DAMAGE_ATTACKER_ATK_CLEAVE_EVENT', parent_index, event => {
                if (instance.DamageEvent_AttackCleave) instance.DamageEvent_AttackCleave(event);
            });
            instance.dispatcherIDList.get(parent_index)!.push(dispatcherId);
        },
        removeFunc: (instance, parent_index) => {
            const dispatcherList = instance.dispatcherIDList.get(parent_index);
            if (dispatcherList) {
                dispatcherList.forEach(dispatcherId => {
                    Dispatcher.UnRegister(dispatcherId);
                });
            }
        },
    },
    // DamageFixed_MagicShieldBlock

    [ModifierFunctions.DamageFixed_MagicShieldBlock]: {
        registerFunc: (instance, parent_index) => {
            const dispatcherId = Dispatcher.Register('DAMAGE_FIXED_MAGIC_SHIELD_BLOCK_PCT', parent_index, event => {
                let block_pct = 0;
                if (instance.DamageFixed_MagicShieldBlock) block_pct = instance.DamageFixed_MagicShieldBlock(event.origin_table);
                event.block_pct += block_pct ?? 0;
            });
            instance.dispatcherIDList.get(parent_index)!.push(dispatcherId);
        },
        removeFunc: (instance, parent_index) => {
            const dispatcherList = instance.dispatcherIDList.get(parent_index);
            if (dispatcherList) {
                dispatcherList.forEach(dispatcherId => {
                    Dispatcher.UnRegister(dispatcherId);
                });
            }
        },
    },
    // DamageFixed_VictimIgnorePhysicalDamage

    [ModifierFunctions.DamageFixed_VictimIgnorePhysicalDamage]: {
        registerFunc: (instance, parent_index) => {
            const dispatcherId = Dispatcher.Register('DAMAGE_FIXED_VICITIM_IGNORE_PHYSICAL_DAMAGE', parent_index, event => {
                let ignore = false;
                if (instance.DamageFixed_VictimIgnorePhysicalDamage) ignore = instance.DamageFixed_VictimIgnorePhysicalDamage(event.origin_physical);
                event.ignore = ignore;
            });
            instance.dispatcherIDList.get(parent_index)!.push(dispatcherId);
        },
        removeFunc: (instance, parent_index) => {
            const dispatcherList = instance.dispatcherIDList.get(parent_index);
            if (dispatcherList) {
                dispatcherList.forEach(dispatcherId => {
                    Dispatcher.UnRegister(dispatcherId);
                });
            }
        },
    },
    // DamageFixed_VictimIgnoreMagicalDamage

    [ModifierFunctions.DamageFixed_VictimIgnoreMagicalDamage]: {
        registerFunc: (instance, parent_index) => {
            const dispatcherId = Dispatcher.Register('DAMAGE_FIXED_VICITIM_IGNORE_MAGIC_DAMAGE', parent_index, event => {
                let ignore = false;
                if (instance.DamageFixed_VictimIgnoreMagicalDamage) ignore = instance.DamageFixed_VictimIgnoreMagicalDamage(event.origin_magic);
                event.ignore = ignore;
            });
            instance.dispatcherIDList.get(parent_index)!.push(dispatcherId);
        },
        removeFunc: (instance, parent_index) => {
            const dispatcherList = instance.dispatcherIDList.get(parent_index);
            if (dispatcherList) {
                dispatcherList.forEach(dispatcherId => {
                    Dispatcher.UnRegister(dispatcherId);
                });
            }
        },
    },
    // DamageFixed_VictimIgnorePureDamage

    [ModifierFunctions.DamageFixed_VictimIgnorePureDamage]: {
        registerFunc: (instance, parent_index) => {
            const dispatcherId = Dispatcher.Register('DAMAGE_FIXED_VICITIM_IGNORE_PURE_DAMAGE', parent_index, event => {
                let ignore = false;
                if (instance.DamageFixed_VictimIgnorePureDamage) ignore = instance.DamageFixed_VictimIgnorePureDamage(event.origin_pure);
                event.ignore = ignore;
            });

            instance.dispatcherIDList.get(parent_index)!.push(dispatcherId);
        },
        removeFunc: (instance, parent_index) => {
            const dispatcherList = instance.dispatcherIDList.get(parent_index);
            if (dispatcherList) {
                dispatcherList.forEach(dispatcherId => {
                    Dispatcher.UnRegister(dispatcherId);
                });
            }
        },
    },
    // DamageFixed_VictimIgnoreAllDamage

    [ModifierFunctions.DamageFixed_VictimIgnoreAllDamage]: {
        registerFunc: (instance, parent_index) => {
            const dispatcherId = Dispatcher.Register('DAMAGE_FIXED_VICITIM_IGNORE_ALL_DAMAGE', parent_index, event => {
                let ignore = false;
                if (instance.DamageFixed_VictimIgnoreAllDamage) ignore = instance.DamageFixed_VictimIgnoreAllDamage(event.origin_all, event.attacker);
                event.ignore = ignore;
            });
            instance.dispatcherIDList.get(parent_index)!.push(dispatcherId);
        },
        removeFunc: (instance, parent_index) => {
            const dispatcherList = instance.dispatcherIDList.get(parent_index);
            if (dispatcherList) {
                dispatcherList.forEach(dispatcherId => {
                    Dispatcher.UnRegister(dispatcherId);
                });
            }
        },
    },

    //DamageFixed_VictimSpecialPhysicalDamagePercent

    [ModifierFunctions.DamageFixed_VictimSpecialPhysicalDamagePercent]: {
        registerFunc: (instance, parent_index) => {
            const dispatcherId = Dispatcher.Register('DAMAGE_FIXED_SPEC_PHYSICAL_DAMAGE', parent_index, event => {
                let add_pct = 0;
                if (instance.DamageFixed_VictimSpecialPhysicalDamagePercent)
                    add_pct = instance.DamageFixed_VictimSpecialPhysicalDamagePercent(event.dmgTable);
                event.add_pct += add_pct ?? 0;
            });
            instance.dispatcherIDList.get(parent_index)!.push(dispatcherId);
        },
        removeFunc: (instance, parent_index) => {
            const dispatcherList = instance.dispatcherIDList.get(parent_index);
            if (dispatcherList) {
                dispatcherList.forEach(dispatcherId => {
                    Dispatcher.UnRegister(dispatcherId);
                });
            }
        },
    },

    [ModifierFunctions.DamageFixed_CoreAttackDamagePercent]: {
        registerFunc: (instance, parent_index) => {
            const dispatcherId = Dispatcher.Register('DAMAGE_FIXED_CORE_ATTACK_DAMAGE', parent_index, event => {
                if (instance.DamageFixed_CoreAttackDamagePercent) {
                    event.scale_pct += instance.DamageFixed_CoreAttackDamagePercent(event.attacker, event.victim) ?? 0;
                }
            });
            instance.dispatcherIDList.get(parent_index)!.push(dispatcherId);
        },
        removeFunc: (instance, parent_index) => {
            const dispatcherList = instance.dispatcherIDList.get(parent_index);
            if (dispatcherList) {
                dispatcherList.forEach(dispatcherId => {
                    Dispatcher.UnRegister(dispatcherId);
                });
            }
        },
    },

    [ModifierFunctions.DamageFixed_VictimCoreAbilityDamagePercent]: {
        registerFunc: (instance, parent_index) => {
            const dispatcherId = Dispatcher.Register('DAMAGE_FIXED_CORE_ABILITY_DAMAGE', parent_index, event => {
                if (instance.DamageFixed_VictimCoreAbilityDamagePercent) {
                    event.scale_pct += instance.DamageFixed_VictimCoreAbilityDamagePercent() ?? 0;
                }
            });
            instance.dispatcherIDList.get(parent_index)!.push(dispatcherId);
        },
        removeFunc: (instance, parent_index) => {
            const dispatcherList = instance.dispatcherIDList.get(parent_index);
            if (dispatcherList) {
                dispatcherList.forEach(dispatcherId => {
                    Dispatcher.UnRegister(dispatcherId);
                });
            }
        },
    },

    [ModifierFunctions.DamageFixed_CoreAllDamagePercent]: {
        registerFunc: (instance, parent_index) => {
            const dispatcherId = Dispatcher.Register('DAMAGE_FIXED_CORE_ALL_DAMAGE', parent_index, event => {
                if (instance.DamageFixed_CoreAllDamagePercent) {
                    event.scale_pct += instance.DamageFixed_CoreAllDamagePercent(event.attacker, event.victim) ?? 0;
                }
            });
            instance.dispatcherIDList.get(parent_index)!.push(dispatcherId);
        },
        removeFunc: (instance, parent_index) => {
            const dispatcherList = instance.dispatcherIDList.get(parent_index);
            if (dispatcherList) {
                dispatcherList.forEach(dispatcherId => {
                    Dispatcher.UnRegister(dispatcherId);
                });
            }
        },
    },

    [ModifierFunctions.DamageEvent_ReflectSharedDamage]: {
        registerFunc: (instance, parent_index) => {
            const dispatcherId = Dispatcher.Register('DAMAGE_VICITIM_REFLECT_SHARED_DAMAGE_EVENT', parent_index, event => {
                if (instance.DamageEvent_ReflectSharedDamage) instance.DamageEvent_ReflectSharedDamage(event.attacker, event.type, event.damage);
            });
            instance.dispatcherIDList.get(parent_index)!.push(dispatcherId);
        },
        removeFunc: (instance, parent_index) => {
            const dispatcherList = instance.dispatcherIDList.get(parent_index);
            if (dispatcherList) {
                dispatcherList.forEach(dispatcherId => {
                    Dispatcher.UnRegister(dispatcherId);
                });
            }
        },
    },

    [ModifierFunctions.DamageFixed_FalsePromiseIgnoreDamage]: {
        registerFunc: (instance, parent_index) => {
            const dispatcherId = Dispatcher.Register('DAMAGE_FIXED_VICITIM_FALSE_PROMISE', parent_index, event => {
                const ignore = false;
                if (instance.DamageFixed_FalsePromiseIgnoreDamage)
                    instance.DamageFixed_FalsePromiseIgnoreDamage(event.attacker, event.damage_type, event.damage_flag, event.total_dmg);
                event.false_promise_result = ignore;
            });
            instance.dispatcherIDList.get(parent_index)!.push(dispatcherId);
        },
        removeFunc: (instance, parent_index) => {
            const dispatcherList = instance.dispatcherIDList.get(parent_index);
            if (dispatcherList) {
                dispatcherList.forEach(dispatcherId => {
                    Dispatcher.UnRegister(dispatcherId);
                });
            }
        },
    },

    [ModifierFunctions.DamageEvent_BorrowedTimeRecord]: {
        registerFunc: (instance, parent_index) => {
            const dispatcherId = Dispatcher.Register('DAMAGE_BORROWED_TIME_EVENT', parent_index, event => {
                if (instance.DamageEvent_BorrowedTimeRecord)
                    instance.DamageEvent_BorrowedTimeRecord(
                        event.attacker,
                        event.victim,
                        event.damage,
                        event.damage_property,
                        event.damage_type,
                        event.damage_flag
                    );
            });
            instance.dispatcherIDList.get(parent_index)!.push(dispatcherId);
        },
        removeFunc: (instance, parent_index) => {
            const dispatcherList = instance.dispatcherIDList.get(parent_index);
            if (dispatcherList) {
                dispatcherList.forEach(dispatcherId => {
                    Dispatcher.UnRegister(dispatcherId);
                });
            }
        },
    },

    [ModifierFunctions.DamageFixed_EndBlockPercent]: {
        registerFunc: (instance, parent_index) => {
            const dispatcherId = Dispatcher.Register('DAMAGE_FIXED_VICITIM_END_BLOCK', parent_index, event => {
                if (instance.DamageFixed_EndBlockPercent) {
                    const result = instance.DamageFixed_EndBlockPercent(event.total_dmg) ?? 0;
                    if (result > event.block_pct) event.block_pct = result;
                }
            });
            instance.dispatcherIDList.get(parent_index)!.push(dispatcherId);
        },
        removeFunc: (instance, parent_index) => {
            const dispatcherList = instance.dispatcherIDList.get(parent_index);
            if (dispatcherList) {
                dispatcherList.forEach(dispatcherId => {
                    Dispatcher.UnRegister(dispatcherId);
                });
            }
        },
    },

    [ModifierFunctions.AddParentAttackCritData]: {
        registerFunc: (instance, parent_index) => {
            if (instance.AddParentAttackCritData) {
                const parent = instance.GetParent();
                instance['CritData_Saved'] = instance.AddParentAttackCritData();
                if (instance['CritData_Saved']) {
                    parent._crits_data_calls.push(instance['CritData_Saved']);
                }
            }
        },
        removeFunc: (instance, parent_index) => {
            if (instance.AddParentAttackCritData) {
                const parent = instance.GetParent();
                const critData = instance['CritData_Saved'];
                if (parent._crits_data_calls === undefined) return;
                const index = parent._crits_data_calls.indexOf(critData);
                if (index != -1) {
                    parent._crits_data_calls.splice(index, 1);
                } else {
                    print(`[AddParentAttackCritData] Remove failed`);
                }
            }
        },
    },

    [ModifierFunctions.AddParentEvasionData]: {
        Use_Frametime: true,
        registerFunc: (instance, parent_index) => {
            if (instance.AddParentEvasionData) {
                const parent = instance.GetParent();
                const newEvasionData = instance.AddParentEvasionData();
                if (!instance['EvasionData_Saved']) {
                    // 如果没有保存过，添加新的值
                    instance['EvasionData_Saved'] = newEvasionData;
                    parent._evasion_data_calls.push(instance['EvasionData_Saved']);
                } else {
                    // 如果已经保存过，更新现有值
                    const index = parent._evasion_data_calls.indexOf(instance['EvasionData_Saved']);
                    if (index !== -1) {
                        parent._evasion_data_calls[index] = newEvasionData;
                    } else {
                        // 如果意外地没有找到，重新添加
                        parent._evasion_data_calls.push(newEvasionData);
                    }
                    instance['EvasionData_Saved'] = newEvasionData;
                }
                // 每次调用都重新计算 _all_evasion_chance
                parent._all_evasion_chance = 100 - parent._evasion_data_calls.reduce((acc, val) => acc * (1 - val.evasion_chance / 100), 1) * 100;
            }
        },
        removeFunc: (instance, parent_index) => {
            if (instance.AddParentEvasionData) {
                const parent = instance.GetParent();
                const critData = instance['EvasionData_Saved'];
                if (parent._evasion_data_calls === undefined) return;
                const index = parent._evasion_data_calls.indexOf(critData);
                if (index != -1) {
                    parent._evasion_data_calls.splice(index, 1);
                    parent._all_evasion_chance = 100 - parent._evasion_data_calls.reduce((acc, val) => acc * (1 - val.evasion_chance / 100), 1) * 100;
                } else {
                    print(`[AddParentEvasionData] Remove failed`);
                }
            }
        },
    },

    [ModifierFunctions.AddParentAccuracyData]: {
        Use_Frametime: true,
        registerFunc: (instance, parent_index) => {
            if (instance.AddParentAccuracyData) {
                const parent = instance.GetParent();
                const newtAccuracyData = instance.AddParentAccuracyData();
                if (!instance['AccuracyData_Saved']) {
                    // 如果没有保存过，添加新的值
                    instance['AccuracyData_Saved'] = newtAccuracyData;
                    parent._accuracy_data_calls.push(instance['AccuracyData_Saved']);
                } else {
                    // 如果已经保存过，更新现有值
                    const index = parent._accuracy_data_calls.indexOf(instance['AccuracyData_Saved']);
                    if (index !== -1) {
                        parent._accuracy_data_calls[index] = newtAccuracyData;
                    } else {
                        // 如果意外地没有找到，重新添加
                        parent._accuracy_data_calls.push(newtAccuracyData);
                    }
                    instance['AccuracyData_Saved'] = newtAccuracyData;
                }
                // 每次调用都重新计算 _all_accuracy_chance
                parent._all_accuracy_chance = 100 - parent._accuracy_data_calls.reduce((acc, val) => acc * (1 - val.accuracy_chance / 100), 1) * 100;
            }
        },
        removeFunc: (instance, parent_index) => {
            if (instance.AddParentAccuracyData) {
                const parent = instance.GetParent();
                const accuracyData = instance['AccuracyData_Saved'];
                if (parent._accuracy_data_calls === undefined) return;
                const index = parent._accuracy_data_calls.indexOf(accuracyData);
                if (index != -1) {
                    parent._accuracy_data_calls.splice(index, 1);
                    parent._all_accuracy_chance =
                        100 - parent._accuracy_data_calls.reduce((acc, val) => acc * (1 - val.accuracy_chance / 100), 1) * 100;
                } else {
                    print(`[AddParentAccuracyData] Remove failed`);
                }
            }
        },
    },

    [ModifierFunctions.AddParentBlindData]: {
        Use_Frametime: true,
        registerFunc: (instance, parent_index) => {
            if (instance.AddParentBlindData) {
                const parent = instance.GetParent();
                const newBlindnData = instance.AddParentBlindData();
                if (!instance['BlindData_Saved']) {
                    // 如果没有保存过，添加新的值
                    instance['BlindData_Saved'] = newBlindnData;
                    parent._blind_data_calls.push(instance['BlindData_Saved']);
                } else {
                    // 如果已经保存过，更新现有值
                    const index = parent._blind_data_calls.indexOf(instance['BlindData_Saved']);
                    if (index !== -1) {
                        parent._blind_data_calls[index] = newBlindnData;
                    } else {
                        // 如果意外地没有找到，重新添加
                        parent._blind_data_calls.push(newBlindnData);
                    }
                    instance['BlindData_Saved'] = newBlindnData;
                }
                // 每次调用都重新计算 _all_blind_chance 直接增加
                parent._all_blind_chance = parent._blind_data_calls.reduce((acc, val) => acc + val.blind_chance, 0);
            }
        },
        removeFunc: (instance, parent_index) => {
            if (instance.AddParentBlindData) {
                const parent = instance.GetParent();
                const blindData = instance['BlindData_Saved'];
                if (parent._blind_data_calls === undefined) return;
                const index = parent._blind_data_calls.indexOf(blindData);
                if (index != -1) {
                    parent._blind_data_calls.splice(index, 1);
                    parent._all_blind_chance = parent._blind_data_calls.reduce((acc, val) => acc + val.blind_chance, 0);
                } else {
                    print(`[AddParentBlindData] Remove failed`);
                }
            }
        },
    },

    [ModifierFunctions.AddParentShieldData]: {
        registerFunc: (instance, parent_index) => {
            if (instance.AddParentShieldData) {
                const parent = instance.GetParent();
                instance['ShieldData_Saved'] = instance.AddParentShieldData();
                if (instance['ShieldData_Saved']) {
                    parent._shields_data_calls.push(instance['ShieldData_Saved']);
                }
                parent._refresh_shields();
            }
        },
        removeFunc: (instance, parent_index) => {
            if (instance.AddParentShieldData) {
                const parent = instance.GetParent();
                const shieldData = instance['ShieldData_Saved'];
                if (parent._shields_data_calls === undefined) return;
                const index = parent._shields_data_calls.indexOf(shieldData);
                if (index != -1) {
                    parent._shields_data_calls.splice(index, 1);
                } else {
                    print(`[AddParentShieldData] Remove failed`);
                }
                parent._refresh_shields();
            }
        },
    },

    [ModifierFunctions.AddCustomAOEIncrease]: {
        registerFunc: (instance, parent_index) => {
            if (instance.AddCustomAOEIncrease) {
                const parent = instance.GetParent();
                instance['AOEIncreaseData_Saved'] = instance.AddCustomAOEIncrease();
                if (instance['AOEIncreaseData_Saved']) {
                    parent.custom_aoe_increase += instance['AOEIncreaseData_Saved'] as number;
                }
            }
        },
        removeFunc: (instance, parent_index) => {
            if (instance.AddCustomAOEIncrease) {
                const parent = instance.GetParent();
                const aoeIncreaseData = instance['AOEIncreaseData_Saved'] as number;
                if (aoeIncreaseData) {
                    parent.custom_aoe_increase -= aoeIncreaseData;
                }
            }
        },
    },
};
// declare module './dota_ts_adapter' {
interface BaseModifier {
    /**
     * 原始伤害结算事件 , 事件名 DamageEvent_OriginDamage
     * - 触发者: 攻击方, 受击方
     * @param dmgTable 伤害表
     */
    DamageEvent_OriginDamage?(dmgTable: DamageTable): void;
    /**
     * 攻击弹射和溅射, 和 **分裂** 不一样, 事件名 DAMAGE_ATTACKER_BOUNCE_EVENT
     * - 触发者: 攻击方
     * @param victim 受害者
     * @param damage 物理攻击伤害的值
     */
    DamageEvent_AttackBounce?(dmgTable: DamageTable): void;
    /**
     * 剑刃风暴的攻击伤害无效化, 事件名 DAMAGE_FIXED_ATTACKER_BLADE_STORM_ATK
     * - 触发者: 攻击方
     * @param victim 受害者
     * @returns 返回true时本次攻击伤害无效
     */
    DamageFixed_BladeStormAttack?(victim: CDOTA_BaseNPC): boolean;
    // 封装到攻击特效基类buff下了
    // /**
    //  * 攻击特效伤害的添加 - 常量, 事件名 DAMAGE_FIXED_ATTACKER_ATK_DAMAGE
    //  * - 触发者: 攻击方
    //  * @param attackEffectData 攻击特效数据, 直接修改内容即可, 只有从物理转变为魔法时才需要添加 sourceAbility, 其他情况不需要
    //  */
    DamageFixed_AttackEffectDamage?(dmgTable: FixedDamageTable): void;
    /**
     * 攻击分裂的广播, 和 **溅射** 不一样, 事件名 DAMAGE_ATTACKER_ATK_CLEAVE_EVENT
     * - 触发者: 攻击方
     * @param victim 受害者
     * @param damage 物理攻击伤害的值
     */
    DamageEvent_AttackCleave?(dmgTable: FixedDamageTable): void;
    /**
     * 魔法护盾的伤害格挡 - 百分比, 事件名 DAMAGE_FIXED_MAGIC_SHIELD_BLOCK_PCT
     * - 触发者: 受击方
     * @param dmgTable 伤害表, 自行查阅数值, 计算并返回
     * @returns 返回本次应该格挡伤害的百分比
     */
    DamageFixed_MagicShieldBlock?(dmgTable: FixedDamageTable): number;
    /**
     * 物理伤害无效化, 事件名 DAMAGE_FIXED_VICITIM_IGNORE_PHYSICAL_DAMAGE
     * - 触发者: 受击方
     * @param originPhysicalDamage 初始物理伤害
     * @returns 是否无效化
     */
    DamageFixed_VictimIgnorePhysicalDamage?(origin_physical: number): boolean;
    /**
     * 魔法伤害无效化, 事件名 DAMAGE_FIXED_VICITIM_IGNORE_MAGIC_DAMAGE
     * - 触发者: 受击方
     * @param originMagicalDamage 初始魔法伤害
     * @returns 是否无效化
     */
    DamageFixed_VictimIgnoreMagicalDamage?(origin_magic: number): boolean;
    /**
     * 纯粹伤害无效化, 事件名 DAMAGE_FIXED_VICITIM_IGNORE_PURE_DAMAGE
     * - 触发者: 受击方
     * @param originPureDamage 初始纯粹伤害
     * @returns 是否无效化
     */
    DamageFixed_VictimIgnorePureDamage?(origin_pure: number): boolean;
    /**
     * 全类型伤害伤害无效化, 事件名 DAMAGE_FIXED_VICITIM_IGNORE_ALL_DAMAGE
     * - 触发者: 受击方
     * @param originAllDamage 初始全类型伤害
     * @param attacker 攻击方
     * @returns 是否无效化
     */
    DamageFixed_VictimIgnoreAllDamage?(origin_all: number, attacker: CDOTA_BaseNPC): boolean;
    /**
     * 特殊物理伤害调整 - 百分比, 事件名 DAMAGE_FIXED_SPEC_PHYSICAL_DAMAGE
     * - 触发者: 受击方
     * @param dmgTable 原伤害table
     * @returns 加法叠加, 返回 正数为受到伤害增加, 负数则为伤害减少
     */
    DamageFixed_VictimSpecialPhysicalDamagePercent?(dmgTable: FixedDamageTable): number;
    /**
     * 核心攻击伤害调整 - 百分比, 事件名 DAMAGE_FIXED_CORE_ATTACK_DAMAGE
     * - 触发者: 双方触发
     * @param dmgTable 原伤害table
     * @returns 加法叠加, 返回 正数为受到伤害增加, 负数则为伤害减少
     */
    DamageFixed_CoreAttackDamagePercent?(attacker: CDOTA_BaseNPC, victim: CDOTA_BaseNPC): number;
    /**
     * 核心技能伤害调整 - 百分比, 事件名 DAMAGE_FIXED_CORE_ABILITY_DAMAGE
     * - 触发者: 受击方
     * @param dmgTable 原伤害table
     * @returns 加法叠加, 返回 正数为受到伤害增加, 负数则为伤害减少
     */
    DamageFixed_VictimCoreAbilityDamagePercent?(): number;
    /**
     * 核心伤害调整 - 百分比, 事件名 DAMAGE_FIXED_CORE_ALL_DAMAGE
     * - 触发者: 双方触发
     * @param dmgTable 原伤害table
     * @returns 加法叠加, 返回 正数为受到伤害增加, 负数则为伤害减少
     */
    DamageFixed_CoreAllDamagePercent?(attacker: CDOTA_BaseNPC, victim: CDOTA_BaseNPC): number;
    /**
     * 共享 / 反射 伤害时
     * 事件:DAMAGE_VICITIM_REFLECT_SHARED_DAMAGE_EVENT
     * - 触发者: 受击方
     * @param attacker 攻击者
     * @param DamageTypes 伤害类型
     * @param damage 伤害值
     */
    DamageEvent_ReflectSharedDamage?(attacker: CDOTA_BaseNPC, damage_type: DamageType, damage: number): void;
    /**
     * 虚妄之诺 的伤害无效化和记录
     * - 触发者: 受击方
     * @param damage 当次受到的伤害值
     * @returns 是否进行无效化, 无效化时伤害会变为0
     */
    DamageFixed_FalsePromiseIgnoreDamage?(attacker: CDOTA_BaseNPC, damage_type: DamageType, damage_flag: DamageFlags, damage: number): boolean;

    /**
     * DAMAGE_BORROWED_TIME_EVENT
     * 回光返照的友方伤害事件记录
     *
     * - 触发者: 受击者
     * @param attacker
     * @param victim
     * @param damage
     * @param damage_property
     * @param damage_type
     * @param damage_flag
     */
    DamageEvent_BorrowedTimeRecord?(
        attacker: CDOTA_BaseNPC,
        victim: CDOTA_BaseNPC_Hero,
        damage: number,
        damage_property: DamageProperty,
        damage_type: DamageType,
        damage_flag: DamageFlags
    ): void;

    /**
     * 末端伤害格挡 - 百分比, 事件名 DAMAGE_FIXED_VICITIM_END_BLOCK
     * - 触发者: 受击方
     * @param damage 伤害值
     * @returns 返回格挡百分比, 同时触发时，仅数值最高者生效。
     */
    DamageFixed_EndBlockPercent?(damage: number): number;
    /**
     * 末端伤害结算事件, 事件名 DAMAGE_END_DAMAGE_EVENT
     * - 双方触发
     * @param attacker 攻击者
     * @param victim 受击者
     * @param damage_property 伤害类型
     * @param damage_type 伤害类型
     * @param damage_flag 特殊伤害标识
     * @param damage 伤害值
     * @param ability 伤害来源技能
     */
    DamageEvent_EndDamage?(
        attacker: CDOTA_BaseNPC,
        victim: CDOTA_BaseNPC,
        damage_property: DamageProperty,
        damage_type: DamageType,
        damage_flag: DamageFlags,
        damage: number
    ): void;

    /**
     * 飞溅的伤害传递(dmgTable: DamageTable), 事件名 DAMAGE_PSI_BLADE_EVENT
     * - 触发者: 攻击方
     * @param victim 受害者
     * @param damage 伤害值
     */
    DamageEvent_PsiBlade?(victim: CDOTA_BaseNPC, damage: number): void;

    /**
     * 幻象结算之后伤害结算事件 - 过完幻象的伤害增幅后触发 - 攻击者+受击者 事件名 DAMAGE_AFTER_ILLUSION_DAMAGE_EVENT
     * - 触发者: 攻击方 和 受击方
     * @param attacker
     * @param victim
     * @param damage
     * @param damage_flag
     * @param inflictor
     */
    DamageEvent_AfterIllusionDamage?(attacker: CDOTA_BaseNPC, victim: CDOTA_BaseNPC, damage: number, damage_flag: DamageFlags);

    /**
     * 特殊溅射攻击广播 - 攻击者触发 事件名 DAMAGE_SPECIAL_BOUNCE_ATTACK_EVENT
     * - 触发者: 攻击者
     * @param victim 受击者
     * @param damage 伤害
     */
    DamageEvent_SpecialBounceAttack?(attacker: CDOTA_BaseNPC, victim: CDOTA_BaseNPC, damage: number, damage_flag: DamageFlags);

    /**
     * 击杀任意单位 事件名 UNIT_KILL_UNIT
     * - 触发者：击杀者
     * @param event
     */
    // OnKill?(dmgTable: DamageTable): void;

    /**
     * 单位死亡 事件名 UNIT_DEATH
     * - 触发者：任意死亡单位
     */
    OnUnitDeath?(dmgTable: DamageTable): void;

    /**
     * 英雄死亡 事件名 UNIT_HERO_DEATH
     * - 触发者：任意死亡单位
     */
    OnHeroDeath?(dmgTable: DamageTable): void;

    /**
     * 建筑死亡 事件名 UNIT_BUILDING_DEATH
     * - 触发者：任意死亡建筑
     */
    OnBuildingDeath?(dmgTable: DamageTable): void;

    /**
     * 单位复活事件 事件名 UNIT_RESPAWN
     * - 触发者：只有buff拥有者复活时触发
     */
    // OnRespawn?(dmgTable: DamageTable): void;

    OnAttackStart_Target?(AttackData: UnitEventAttackDamageData): void;
    /**攻击前摇  触发者 攻击者 */
    OnAttackStart_Attacker?(AttackData: UnitEventAttackDamageData): void;
    /**攻击记录前  触发者 攻击者 */
    OnAttackRecord_Attack?(AttackData: UnitEventAttackDamageData): void;

    /** 攻击命中时，事件名 。`攻击者触发` */
    OnAttackLanded_Attacker?(AttackData: UnitEventAttackDamageData): void;
    /** 受到攻击命中时，事件名 。`受害者触发` */
    OnAttackLanded_Target?(AttackData: UnitEventAttackDamageData): void;
    /**攻击失败时 双方触发 */
    OnAttackFail_Both?(AttackData: UnitEventAttackDamageData): void;
    /**增加暴击 数据 */
    AddParentAttackCritData?(): CritData;

    /**增加闪避 数据 */
    AddParentEvasionData?(): EvasionData;
    /**增加致盲 数据 */
    AddParentBlindData?(): BlindData;
    /**增加必中 数据 */
    AddParentAccuracyData?(): AccuracyData;

    /**增加护盾 数据 */
    AddParentShieldData?(): ShieldData;

    /**增加作用范围技能加成 */
    AddCustomAOEIncrease?(): number;
    /**
     * 单位回血修正 事件名 UNIT_FIXED_GAIN_HEALTH
     */
    // OnHealthGained?(dmgTable: DamageTable): void;
}
// }
