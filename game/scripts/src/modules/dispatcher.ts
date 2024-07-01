import { BaseModifier, registerModifier } from '../utils/dota_ts_adapter';
declare type dispatcher_id = number & {
    readonly __tag__: 'dispatcher_id';
};
@reloadable
export class CDispatcher {
    private id: dispatcher_id; // 实例变量，用于生成唯一的回调函数ID
    private id_callBack: Map<dispatcher_id, (params: any) => void> = new Map(); // 实例变量，存储回调函数
    private tag_entIdxs_ids: Map<string, Map<EntityIndex, Set<dispatcher_id>>> = new Map(); // 实例变量，存储事件与实体索引和回调函数ID的映射
    private dispatcherThinker: CDOTA_BaseNPC; // 实例变量，用于保存dispatcher thinker对象

    constructor() {
        this.Init(); // 在构造函数中初始化
    }

    // 初始化方法，创建dispatcher thinker对象并赋值给dispatcherThinker
    private Init() {
        this.id = 0 as dispatcher_id;
        this.dispatcherThinker = CreateModifierThinker(null, null, 'modifier_dispatcher_thinker', {}, Vector(0, 0, 0), DotaTeam.NEUTRALS, false);
    }

    // 注册事件的方法
    // eventName: 事件名称
    // entityIndex: 实体索引
    // callBack: 事件触发时调用的回调函数
    public Register(eventName: string, entityIndex: EntityIndex, callBack: (params: any) => void): dispatcher_id {
        this.id++; // 生成唯一的回调函数ID
        this.id_callBack.set(this.id, callBack); // 将回调函数存储在id_callBack字典中

        // 检查并初始化嵌套的Map和Set
        if (!this.tag_entIdxs_ids.has(eventName)) {
            this.tag_entIdxs_ids.set(eventName, new Map());
        }
        const entityMap = this.tag_entIdxs_ids.get(eventName)!;

        if (!entityMap.has(entityIndex)) {
            entityMap.set(entityIndex, new Set());
        }
        const idSet = entityMap.get(entityIndex)!;

        idSet.add(this.id); // 将回调函数ID记录在tag_entIdxs_ids中

        return this.id; // 返回回调函数ID
    }

    // 注销事件的方法
    // id: 要注销的回调函数ID
    public UnRegister(id: dispatcher_id) {
        this.id_callBack.delete(id); // 从id_callBack字典中删除该回调函数

        for (const entityMap of this.tag_entIdxs_ids.values()) {
            for (const [entityIndex, idSet] of entityMap.entries()) {
                if (idSet.has(id)) {
                    idSet.delete(id);
                    if (idSet.size === 0) {
                        entityMap.delete(entityIndex); // 使用entityIndex删除对应的键值对
                    }
                }
            }
        }
    }

    // 发送事件的方法
    // eventName: 事件名称
    // entityIndex: 实体索引，或null表示所有实体
    // params: 事件参数
    public Send(eventName: string, entityIndex: EntityIndex | null, params: any) {
        print('创建监听');
        if (this.tag_entIdxs_ids.has(eventName)) {
            const entityMap = this.tag_entIdxs_ids.get(eventName)!;
            for (const [entIdx, idSet] of entityMap.entries()) {
                if (entityIndex === null || entityIndex === entIdx) {
                    for (const id of idSet) {
                        const callback = this.id_callBack.get(id);
                        if (callback) {
                            try {
                                callback(params);
                            } catch (e) {
                                xpcall(
                                    () => {
                                        callback(params);
                                    },
                                    debug.traceback,
                                    params
                                );
                            }
                        } else {
                            idSet.delete(id);
                        }
                    }
                }
            }
        }
    }

    // 触发单个回调的方法
    // id: 回调函数ID
    // params: 事件参数
    public Trigger(id: dispatcher_id, params: any) {
        const callback = this.id_callBack.get(id);
        if (callback) {
            callback(params);
        }
    }
}
declare module '../utils/dota_ts_adapter' {
    // interface BaseModifier {
    //     OnCreated(params: object): void {
    //         print('父类OnCreated');
    //     },
    //     OnDestroy(): void {
    //         print('父类销毁OnDestroy');
    //     }
    // }
}
BaseModifier.prototype.OnCreated = function () {
    print('父类OnCreated');
};
BaseModifier.prototype.OnDestroy = function () {
    print('父类OnDestroy');
};
