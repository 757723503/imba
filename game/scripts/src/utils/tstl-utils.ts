const global = globalThis as typeof globalThis & {
    reloadCache: Record<string, any>;
    reloadable?: typeof reloadable;
};

if (global.reloadCache === undefined) {
    global.reloadCache = {};
}

function reloadable<T extends { new (...args: any[]): {} }>(constructor: T): T {
    const className = constructor.name;
    if (global.reloadCache[className] === undefined) {
        global.reloadCache[className] = constructor;
    }

    Object.assign(global.reloadCache[className].prototype, constructor.prototype);
    return global.reloadCache[className];
}

// 将装饰器注册到全局对象
global.reloadable = reloadable;
