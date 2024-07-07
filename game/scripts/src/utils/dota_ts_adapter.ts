export interface BaseAbility extends CDOTA_Ability_Lua {}
export class BaseAbility {}

export interface BaseItem extends CDOTA_Item_Lua {}
export class BaseItem {}

export interface BaseModifier extends CDOTA_Modifier_Lua {}
export class BaseModifier {
    caster: CDOTA_BaseNPC | undefined = this.GetCaster();
    ability: CDOTABaseAbility | undefined = this.GetAbility();
    parent: CDOTA_BaseNPC = this.GetParent();
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

    CustomDeclareFunctions(): ModifierFunctions[] {
        return [];
    }

    dispatcherIDList: Map<EntityIndex, dispatcher_id[]>;

    frameBasedTimers: {
        key: string;
        value: Partial<ModifierFunctions[]>;
    };

    funs: Partial<ModifierFunctions[]> = [];

    OnCreated(params: object): void {
        if (!IsServer() || !this.GetParent()) return;
        const parent_index = this.GetParent().entindex();
        const functions = this.CustomDeclareFunctions();
        if (functions.length > 0) {
            this.dispatcherIDList = new Map();
            if (!this.dispatcherIDList.has(parent_index)) {
                this.dispatcherIDList.set(parent_index, []);
            }
            functions.forEach(element => {
                const func = _modifier_methods[element].registerFunc;
                CSafelyCall(() => {
                    func(this, parent_index);
                }, `Error in registering function for ${element}`);

                // if (_modifier_methods[element].Use_Frametime) {
                //     this.funs.push(element);
                // }
            });
        }
        // if (this.funs.length > 0) {
        //     const timers = Timers.CreateTimer(0.0333, () => {
        //         this.funs.forEach(element => {
        //             const func = _modifier_methods[element].registerFunc;
        //             CSafelyCall(() => {
        //                 func(this, parent_index);
        //             }, `Error in registering function for ${element}`);
        //         });
        //         return 0.0333;
        //     });
        //     this.frameBasedTimers = { key: timers, value: this.funs };
        // }
    }

    OnDestroy(): void {
        if (!IsServer() || !this.GetParent()) return;
        const functions = this.CustomDeclareFunctions();
        if (functions.length > 0) {
            const parent_index = this.GetParent().entindex();
            functions.forEach(element => {
                const func = _modifier_methods[element].removeFunc;
                CSafelyCall(() => {
                    func(this, parent_index);
                }, `Error in removing function for ${element}`);
            });

            this.dispatcherIDList.delete(parent_index);
        }
        // if (this.frameBasedTimers) {
        //     Timers.RemoveTimer(this.frameBasedTimers.key);
        // }
    }
}

export interface BaseModifierMotionHorizontal extends CDOTA_Modifier_Lua_Horizontal_Motion {}
export class BaseModifierMotionHorizontal extends BaseModifier {
    CustomDeclareFunctions(): ModifierFunctions[] {
        return [];
    }
}

export interface BaseModifierMotionVertical extends CDOTA_Modifier_Lua_Vertical_Motion {}
export class BaseModifierMotionVertical extends BaseModifier {
    CustomDeclareFunctions(): ModifierFunctions[] {
        return [];
    }
}

export interface BaseModifierMotionBoth extends CDOTA_Modifier_Lua_Motion_Both {}
export class BaseModifierMotionBoth extends BaseModifier {
    CustomDeclareFunctions(): ModifierFunctions[] {
        return [];
    }
}

// Add standard base classes to prototype chain to make `super.*` work as `self.BaseClass.*`
setmetatable(BaseAbility.prototype, { __index: CDOTA_Ability_Lua ?? C_DOTA_Ability_Lua });
setmetatable(BaseItem.prototype, { __index: CDOTA_Item_Lua ?? C_DOTA_Item_Lua });
setmetatable(BaseModifier.prototype, { __index: CDOTA_Modifier_Lua });

export const registerAbility = (name?: string) => (ability: new () => CDOTA_Ability_Lua | CDOTA_Item_Lua) => {
    if (name !== undefined) {
        // @ts-ignore
        ability.name = name;
    } else {
        name = ability.name;
    }

    const [env] = getFileScope();

    env[name] = {};

    toDotaClassInstance(env[name], ability);

    const originalSpawn = (env[name] as CDOTA_Ability_Lua).Spawn;
    env[name].Spawn = function () {
        this.____constructor();
        if (originalSpawn) {
            originalSpawn.call(this);
        }
    };
};

export const registerModifier = (name?: string) => (modifier: new () => CDOTA_Modifier_Lua) => {
    if (name !== undefined) {
        // @ts-ignore
        modifier.name = name;
    } else {
        name = modifier.name;
    }

    const [env, source] = getFileScope();
    const [fileName] = string.gsub(source, '.*scripts[\\/]vscripts[\\/]', '');

    env[name] = {};

    toDotaClassInstance(env[name], modifier);
    const baseModifierOnCreated = BaseModifier.prototype.OnCreated;
    const originalOnCreated = (env[name] as CDOTA_Modifier_Lua).OnCreated;
    env[name].OnCreated = function (parameters: any) {
        this.____constructor();
        if (!IsServer()) return;
        if (baseModifierOnCreated) {
            baseModifierOnCreated.call(this, parameters);
        }
        if (originalOnCreated) {
            originalOnCreated.call(this, parameters);
        }
    };

    const baseModifierOnDestroy = BaseModifier.prototype.OnDestroy;
    const originalOnDestroy = (env[name] as CDOTA_Modifier_Lua).OnDestroy;
    env[name].OnDestroy = function (parameters: any) {
        this.____constructor();
        if (!IsServer()) return;
        if (baseModifierOnDestroy) {
            baseModifierOnDestroy.call(this, parameters);
        }
        if (originalOnDestroy) {
            originalOnDestroy.call(this, parameters);
        }
    };

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
            const dispatcherId = CDispatcher.Register('DAMAGE_ORIGIN_DAMAGE_EVENT', parent_index, event => {
                if (instance.DamageEvent_OriginDamage) instance.DamageEvent_OriginDamage(event);
            });
            instance.dispatcherIDList.get(parent_index)!.push(dispatcherId);
        },
        removeFunc: (instance, parent_index) => {
            const dispatcherList = instance.dispatcherIDList.get(parent_index);
            if (dispatcherList) {
                dispatcherList.forEach(dispatcherId => {
                    CDispatcher.UnRegister(dispatcherId);
                });
            }
        },
    },
    [ModifierFunctions.DamageEvent_EndDamage]: {
        registerFunc: (instance, parent_index) => {
            const dispatcherId = CDispatcher.Register('DAMAGE_END_DAMAGE_EVENT', parent_index, event => {
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
                    CDispatcher.UnRegister(dispatcherId);
                });
            }
        },
    },
    [ModifierFunctions.DamageEvent_AfterIllusionDamage]: {
        registerFunc: (instance, parent_index) => {
            const dispatcherId = CDispatcher.Register('DAMAGE_AFTER_ILLUSION_DAMAGE_EVENT', parent_index, event => {
                if (instance.DamageEvent_AfterIllusionDamage) instance.DamageEvent_AfterIllusionDamage(event);
            });
            instance.dispatcherIDList.get(parent_index)!.push(dispatcherId);
        },
        removeFunc: (instance, parent_index) => {
            const dispatcherList = instance.dispatcherIDList.get(parent_index);
            if (dispatcherList) {
                dispatcherList.forEach(dispatcherId => {
                    CDispatcher.UnRegister(dispatcherId);
                });
            }
        },
    },
    [ModifierFunctions.DamageEvent_PsiBlade]: {
        registerFunc: (instance, parent_index) => {
            const dispatcherId = CDispatcher.Register('DAMAGE_PSI_BLADE_EVENT', parent_index, event => {
                if (instance.DamageEvent_PsiBlade) instance.DamageEvent_PsiBlade(event.victim, event.damage);
            });
            instance.dispatcherIDList.get(parent_index)!.push(dispatcherId);
        },
        removeFunc: (instance, parent_index) => {
            const dispatcherList = instance.dispatcherIDList.get(parent_index);
            if (dispatcherList) {
                dispatcherList.forEach(dispatcherId => {
                    CDispatcher.UnRegister(dispatcherId);
                });
            }
        },
    },
    [ModifierFunctions.DamageEvent_SpecialBounceAttack]: {
        registerFunc: (instance, parent_index) => {
            const dispatcherId = CDispatcher.Register('DAMAGE_SPECIAL_BOUNCE_ATTACK_EVENT', parent_index, event => {
                if (instance.DamageEvent_SpecialBounceAttack) instance.DamageEvent_SpecialBounceAttack(event);
            });
            instance.dispatcherIDList.get(parent_index)!.push(dispatcherId);
        },
        removeFunc: (instance, parent_index) => {
            const dispatcherList = instance.dispatcherIDList.get(parent_index);
            if (dispatcherList) {
                dispatcherList.forEach(dispatcherId => {
                    CDispatcher.UnRegister(dispatcherId);
                });
            }
        },
    },

    [ModifierFunctions.OnUnitDeath]: {
        registerFunc: (instance, parent_index) => {
            const dispatcherId = CDispatcher.Register('UNIT_DEATH', parent_index, event => {
                if (instance.OnUnitDeath) instance.OnUnitDeath(event);
            });
            instance.dispatcherIDList.get(parent_index)!.push(dispatcherId);
        },
        removeFunc: (instance, parent_index) => {
            const dispatcherList = instance.dispatcherIDList.get(parent_index);
            if (dispatcherList) {
                dispatcherList.forEach(dispatcherId => {
                    CDispatcher.UnRegister(dispatcherId);
                });
            }
        },
    },
    [ModifierFunctions.OnHeroDeath]: {
        registerFunc: (instance, parent_index) => {
            const dispatcherId = CDispatcher.Register('UNIT_HERO_DEATH', parent_index, event => {
                if (instance.OnHeroDeath) instance.OnHeroDeath(event);
            });
            instance.dispatcherIDList.get(parent_index)!.push(dispatcherId);
        },
        removeFunc: (instance, parent_index) => {
            const dispatcherList = instance.dispatcherIDList.get(parent_index);
            if (dispatcherList) {
                dispatcherList.forEach(dispatcherId => {
                    CDispatcher.UnRegister(dispatcherId);
                });
            }
        },
    },
    [ModifierFunctions.OnBuildingDeath]: {
        registerFunc: (instance, parent_index) => {
            const dispatcherId = CDispatcher.Register('UNIT_BUILDING_DEATH', parent_index, event => {
                if (instance.OnBuildingDeath) instance.OnBuildingDeath(event);
            });
            instance.dispatcherIDList.get(parent_index)!.push(dispatcherId);
        },
        removeFunc: (instance, parent_index) => {
            const dispatcherList = instance.dispatcherIDList.get(parent_index);
            if (dispatcherList) {
                dispatcherList.forEach(dispatcherId => {
                    CDispatcher.UnRegister(dispatcherId);
                });
            }
        },
    },

    [ModifierFunctions.OnAttackStart_Attacker]: {
        registerFunc: (instance, parent_index) => {
            const dispatcherId = CDispatcher.Register('ON_ATTACK_START_ATTACKER', parent_index, event => {
                if (instance.OnAttackStart_Attacker) instance.OnAttackStart_Attacker(event);
            });
            instance.dispatcherIDList.get(parent_index)!.push(dispatcherId);
        },
        removeFunc: (instance, parent_index) => {
            const dispatcherList = instance.dispatcherIDList.get(parent_index);
            if (dispatcherList) {
                dispatcherList.forEach(dispatcherId => {
                    CDispatcher.UnRegister(dispatcherId);
                });
            }
        },
    },

    [ModifierFunctions.OnAttackStart_Target]: {
        registerFunc: (instance, parent_index) => {
            const dispatcherId = CDispatcher.Register('ON_ATTACK_START_TARGET', parent_index, event => {
                if (instance.OnAttackStart_Target) instance.OnAttackStart_Target(event);
            });
            instance.dispatcherIDList.get(parent_index)!.push(dispatcherId);
        },
        removeFunc: (instance, parent_index) => {
            const dispatcherList = instance.dispatcherIDList.get(parent_index);
            if (dispatcherList) {
                dispatcherList.forEach(dispatcherId => {
                    CDispatcher.UnRegister(dispatcherId);
                });
            }
        },
    },

    [ModifierFunctions.OnAttackLanded_Attacker]: {
        registerFunc: (instance, parent_index) => {
            const dispatcherId = CDispatcher.Register('ON_ATTACK_LANDED_ATTACKER', parent_index, event => {
                if (instance.OnAttackLanded_Attacker) instance.OnAttackLanded_Attacker(event);
            });
            instance.dispatcherIDList.get(parent_index)!.push(dispatcherId);
        },
        removeFunc: (instance, parent_index) => {
            const dispatcherList = instance.dispatcherIDList.get(parent_index);
            if (dispatcherList) {
                dispatcherList.forEach(dispatcherId => {
                    CDispatcher.UnRegister(dispatcherId);
                });
            }
        },
    },
    [ModifierFunctions.OnAttackLanded_Target]: {
        registerFunc: (instance, parent_index) => {
            const dispatcherId = CDispatcher.Register('ON_ATTACK_LANDED_TARGET', parent_index, event => {
                if (instance.OnAttackLanded_Target) instance.OnAttackLanded_Target(event);
            });
            instance.dispatcherIDList.get(parent_index)!.push(dispatcherId);
        },
        removeFunc: (instance, parent_index) => {
            const dispatcherList = instance.dispatcherIDList.get(parent_index);
            if (dispatcherList) {
                dispatcherList.forEach(dispatcherId => {
                    CDispatcher.UnRegister(dispatcherId);
                });
            }
        },
    },

    // OnAttackFail_Both

    [ModifierFunctions.OnAttackFail_Both]: {
        registerFunc: (instance, parent_index) => {
            const dispatcherId = CDispatcher.Register('ON_ATTACK_FAIL_BOTH', parent_index, event => {
                if (instance.OnAttackFail_Both) instance.OnAttackFail_Both(event);
            });
            instance.dispatcherIDList.get(parent_index)!.push(dispatcherId);
        },
        removeFunc: (instance, parent_index) => {
            const dispatcherList = instance.dispatcherIDList.get(parent_index);
            if (dispatcherList) {
                dispatcherList.forEach(dispatcherId => {
                    CDispatcher.UnRegister(dispatcherId);
                });
            }
        },
    },
    // [ModifierFunctions.OnAttackRecord_Attack]: {
    //     registerFunc: (instance, parent_index) => {
    //         const dispatcherId = CDispatcher.Register('ON_ATTACK_RECORD_ATTACK', parent_index, event => {
    //             if (instance.OnAttackRecord_Attack) instance.OnAttackRecord_Attack(event);
    //         });
    //         instance.dispatcherIDList.get(parent_index)!.push(dispatcherId);
    //     },
    //     removeFunc: (instance, parent_index) => {
    //         const dispatcherList = instance.dispatcherIDList.get(parent_index);
    //         if (dispatcherList) {
    //             dispatcherList.forEach(dispatcherId => {
    //                 CDispatcher.UnRegister(dispatcherId);
    //             });
    //         }
    //     },
    // },

    // [ModifierFunctions.OnAttack]: {
    //     registerFunc: (instance, parent_index) => {
    //         const dispatcherId = CDispatcher.Register('ON_ATTACK', parent_index, event => {
    //             if (instance.OnAttack) instance.OnAttack(event);
    //         });
    //         instance.dispatcherIDList.get(parent_index)!.push(dispatcherId);
    //     },
    //     removeFunc: (instance, parent_index) => {
    //         const dispatcherList = instance.dispatcherIDList.get(parent_index);
    //         if (dispatcherList) {
    //             dispatcherList.forEach(dispatcherId => {
    //                 CDispatcher.UnRegister(dispatcherId);
    //             });
    //         }
    //     },
    // },

    // [ModifierFunctions.OnAttackFinished]: {
    //     registerFunc: (instance, parent_index) => {
    //         const dispatcherId = CDispatcher.Register('ON_ATTACK_FINISHED', parent_index, event => {
    //             if (instance.OnAttackFinished) instance.OnAttackFinished(event);
    //         });
    //         instance.dispatcherIDList.get(parent_index)!.push(dispatcherId);
    //     },
    //     removeFunc: (instance, parent_index) => {
    //         const dispatcherList = instance.dispatcherIDList.get(parent_index);
    //         if (dispatcherList) {
    //             dispatcherList.forEach(dispatcherId => {
    //                 CDispatcher.UnRegister(dispatcherId);
    //             });
    //         }
    //     },
    // },

    // [ModifierFunctions.OnAttackRecordDestroy]: {
    //     registerFunc: (instance, parent_index) => {
    //         const dispatcherId = CDispatcher.Register('ON_ATTACK_RECORD_DESTROY', parent_index, event => {
    //             if (instance.OnAttackRecordDestroy) instance.OnAttackRecordDestroy(event);
    //         });
    //         instance.dispatcherIDList.get(parent_index)!.push(dispatcherId);
    //     },
    //     removeFunc: (instance, parent_index) => {
    //         const dispatcherList = instance.dispatcherIDList.get(parent_index);
    //         if (dispatcherList) {
    //             dispatcherList.forEach(dispatcherId => {
    //                 CDispatcher.UnRegister(dispatcherId);
    //             });
    //         }
    //     },
    // },

    // [ModifierFunctions.OnAttackCancelled]: {
    //     registerFunc: (instance, parent_index) => {
    //         const dispatcherId = CDispatcher.Register('ON_ATTACK_CANCELLED', parent_index, event => {
    //             if (instance.OnAttackCancelled) instance.OnAttackCancelled(event);
    //         });
    //         instance.dispatcherIDList.get(parent_index)!.push(dispatcherId);
    //     },
    //     removeFunc: (instance, parent_index) => {
    //         const dispatcherList = instance.dispatcherIDList.get(parent_index);
    //         if (dispatcherList) {
    //             dispatcherList.forEach(dispatcherId => {
    //                 CDispatcher.UnRegister(dispatcherId);
    //             });
    //         }
    //     },
    // },

    // [ModifierFunctions.OnAttackFail]: {
    //     registerFunc: (instance, parent_index) => {
    //         const dispatcherId = CDispatcher.Register('ON_ATTACK_FAIL', parent_index, event => {
    //             if (instance.OnAttackFail) instance.OnAttackFail(event);
    //         });
    //         instance.dispatcherIDList.get(parent_index)!.push(dispatcherId);
    //     },
    //     removeFunc: (instance, parent_index) => {
    //         const dispatcherList = instance.dispatcherIDList.get(parent_index);
    //         if (dispatcherList) {
    //             dispatcherList.forEach(dispatcherId => {
    //                 CDispatcher.UnRegister(dispatcherId);
    //             });
    //         }
    //     },
    // },

    [ModifierFunctions.DamageEvent_AttackBounce]: {
        registerFunc: (instance, parent_index) => {
            const dispatcherId = CDispatcher.Register('DAMAGE_ATTACKER_BOUNCE_EVENT', parent_index, event => {
                if (instance.DamageEvent_AttackBounce) instance.DamageEvent_AttackBounce(event);
            });
            instance.dispatcherIDList.get(parent_index)!.push(dispatcherId);
        },
        removeFunc: (instance, parent_index) => {
            const dispatcherList = instance.dispatcherIDList.get(parent_index);
            if (dispatcherList) {
                dispatcherList.forEach(dispatcherId => {
                    CDispatcher.UnRegister(dispatcherId);
                });
            }
        },
    },

    [ModifierFunctions.DamageFixed_BladeStormAttack]: {
        registerFunc: (instance, parent_index) => {
            const dispatcherId = CDispatcher.Register('DAMAGE_FIXED_ATTACKER_BLADE_STORM_ATK', parent_index, event => {
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
                    CDispatcher.UnRegister(dispatcherId);
                });
            }
        },
    },

    // DamageFixed_AttackEffectDamage

    [ModifierFunctions.DamageFixed_AttackEffectDamage]: {
        registerFunc: (instance, parent_index) => {
            const dispatcherId = CDispatcher.Register('DAMAGE_FIXED_ATTACKER_ATK_DAMAGE', parent_index, event => {
                if (instance.DamageFixed_AttackEffectDamage) instance.DamageFixed_AttackEffectDamage(event);
            });
            instance.dispatcherIDList.get(parent_index)!.push(dispatcherId);
        },
        removeFunc: (instance, parent_index) => {
            const dispatcherList = instance.dispatcherIDList.get(parent_index);
            if (dispatcherList) {
                dispatcherList.forEach(dispatcherId => {
                    CDispatcher.UnRegister(dispatcherId);
                });
            }
        },
    },

    // DamageEvent_AttackCleave

    [ModifierFunctions.DamageEvent_AttackCleave]: {
        registerFunc: (instance, parent_index) => {
            const dispatcherId = CDispatcher.Register('DAMAGE_ATTACKER_ATK_CLEAVE_EVENT', parent_index, event => {
                if (instance.DamageEvent_AttackCleave) instance.DamageEvent_AttackCleave(event);
            });
            instance.dispatcherIDList.get(parent_index)!.push(dispatcherId);
        },
        removeFunc: (instance, parent_index) => {
            const dispatcherList = instance.dispatcherIDList.get(parent_index);
            if (dispatcherList) {
                dispatcherList.forEach(dispatcherId => {
                    CDispatcher.UnRegister(dispatcherId);
                });
            }
        },
    },
    // DamageFixed_MagicShieldBlock

    [ModifierFunctions.DamageFixed_MagicShieldBlock]: {
        registerFunc: (instance, parent_index) => {
            const dispatcherId = CDispatcher.Register('DAMAGE_FIXED_MAGIC_SHIELD_BLOCK_PCT', parent_index, event => {
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
                    CDispatcher.UnRegister(dispatcherId);
                });
            }
        },
    },
    // DamageFixed_VictimIgnorePhysicalDamage

    [ModifierFunctions.DamageFixed_VictimIgnorePhysicalDamage]: {
        registerFunc: (instance, parent_index) => {
            const dispatcherId = CDispatcher.Register('DAMAGE_FIXED_VICITIM_IGNORE_PHYSICAL_DAMAGE', parent_index, event => {
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
                    CDispatcher.UnRegister(dispatcherId);
                });
            }
        },
    },
    // DamageFixed_VictimIgnoreMagicalDamage

    [ModifierFunctions.DamageFixed_VictimIgnoreMagicalDamage]: {
        registerFunc: (instance, parent_index) => {
            const dispatcherId = CDispatcher.Register('DAMAGE_FIXED_VICITIM_IGNORE_MAGIC_DAMAGE', parent_index, event => {
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
                    CDispatcher.UnRegister(dispatcherId);
                });
            }
        },
    },
    // DamageFixed_VictimIgnorePureDamage

    [ModifierFunctions.DamageFixed_VictimIgnorePureDamage]: {
        registerFunc: (instance, parent_index) => {
            const dispatcherId = CDispatcher.Register('DAMAGE_FIXED_VICITIM_IGNORE_PURE_DAMAGE', parent_index, event => {
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
                    CDispatcher.UnRegister(dispatcherId);
                });
            }
        },
    },
    // DamageFixed_VictimIgnoreAllDamage

    [ModifierFunctions.DamageFixed_VictimIgnoreAllDamage]: {
        registerFunc: (instance, parent_index) => {
            const dispatcherId = CDispatcher.Register('DAMAGE_FIXED_VICITIM_IGNORE_ALL_DAMAGE', parent_index, event => {
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
                    CDispatcher.UnRegister(dispatcherId);
                });
            }
        },
    },

    //DamageFixed_VictimSpecialPhysicalDamagePercent

    [ModifierFunctions.DamageFixed_VictimSpecialPhysicalDamagePercent]: {
        registerFunc: (instance, parent_index) => {
            const dispatcherId = CDispatcher.Register('DAMAGE_FIXED_SPEC_PHYSICAL_DAMAGE', parent_index, event => {
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
                    CDispatcher.UnRegister(dispatcherId);
                });
            }
        },
    },

    [ModifierFunctions.DamageFixed_CoreAttackDamagePercent]: {
        registerFunc: (instance, parent_index) => {
            const dispatcherId = CDispatcher.Register('DAMAGE_FIXED_CORE_ATTACK_DAMAGE', parent_index, event => {
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
                    CDispatcher.UnRegister(dispatcherId);
                });
            }
        },
    },

    [ModifierFunctions.DamageFixed_VictimCoreAbilityDamagePercent]: {
        registerFunc: (instance, parent_index) => {
            const dispatcherId = CDispatcher.Register('DAMAGE_FIXED_CORE_ABILITY_DAMAGE', parent_index, event => {
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
                    CDispatcher.UnRegister(dispatcherId);
                });
            }
        },
    },

    [ModifierFunctions.DamageFixed_CoreAllDamagePercent]: {
        registerFunc: (instance, parent_index) => {
            const dispatcherId = CDispatcher.Register('DAMAGE_FIXED_CORE_ALL_DAMAGE', parent_index, event => {
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
                    CDispatcher.UnRegister(dispatcherId);
                });
            }
        },
    },

    [ModifierFunctions.DamageEvent_ReflectSharedDamage]: {
        registerFunc: (instance, parent_index) => {
            const dispatcherId = CDispatcher.Register('DAMAGE_VICITIM_REFLECT_SHARED_DAMAGE_EVENT', parent_index, event => {
                if (instance.DamageEvent_ReflectSharedDamage) instance.DamageEvent_ReflectSharedDamage(event.attacker, event.type, event.damage);
            });
            instance.dispatcherIDList.get(parent_index)!.push(dispatcherId);
        },
        removeFunc: (instance, parent_index) => {
            const dispatcherList = instance.dispatcherIDList.get(parent_index);
            if (dispatcherList) {
                dispatcherList.forEach(dispatcherId => {
                    CDispatcher.UnRegister(dispatcherId);
                });
            }
        },
    },

    [ModifierFunctions.DamageFixed_FalsePromiseIgnoreDamage]: {
        registerFunc: (instance, parent_index) => {
            const dispatcherId = CDispatcher.Register('DAMAGE_FIXED_VICITIM_FALSE_PROMISE', parent_index, event => {
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
                    CDispatcher.UnRegister(dispatcherId);
                });
            }
        },
    },

    [ModifierFunctions.DamageEvent_BorrowedTimeRecord]: {
        registerFunc: (instance, parent_index) => {
            const dispatcherId = CDispatcher.Register('DAMAGE_BORROWED_TIME_EVENT', parent_index, event => {
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
                    CDispatcher.UnRegister(dispatcherId);
                });
            }
        },
    },

    [ModifierFunctions.DamageFixed_EndBlockPercent]: {
        registerFunc: (instance, parent_index) => {
            const dispatcherId = CDispatcher.Register('DAMAGE_FIXED_VICITIM_END_BLOCK', parent_index, event => {
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
                    CDispatcher.UnRegister(dispatcherId);
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
};
