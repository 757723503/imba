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

    protected dispatcherIDList: Map<number, dispatcher_id[]>;

    OnCreated(params: object): void {
        if (!IsServer() || !this.GetParent()) return;
        const functions = this.CustomDeclareFunctions();
        if (functions) {
            this.dispatcherIDList = new Map();
            const parent_index = this.GetParent().entindex();
            functions.forEach(func => {
                if (this[func] && typeof this[func] === 'function') {
                    const boundFunction = (this[func] as Function).bind(this);
                    const dispatcherId = CDispatcher.Register(func, parent_index, boundFunction);
                    if (!this.dispatcherIDList.has(parent_index)) {
                        this.dispatcherIDList.set(parent_index, []);
                    }
                    this.dispatcherIDList.get(parent_index)!.push(dispatcherId);
                }
            });
        }
    }

    OnDestroy(): void {
        if (!IsServer() || !this.GetParent()) return;
        if (this.dispatcherIDList) {
            const parent_index = this.GetParent().entindex();
            const dispatcherList = this.dispatcherIDList.get(parent_index);
            if (dispatcherList) {
                dispatcherList.forEach(dispatcherId => {
                    CDispatcher.UnRegister(dispatcherId);
                });
            }
        }
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
