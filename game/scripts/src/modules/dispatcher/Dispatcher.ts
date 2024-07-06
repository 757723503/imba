@reloadable
class CDispatcher {
    private static id: number = 0; // 实例变量，用于生成唯一的回调函数ID
    private static id_callBack: Map<dispatcher_id, (params: any) => void> = new Map(); // 实例变量，存储回调函数
    private static tag_entIdxs_ids: Map<string, Map<EntityIndex, Set<dispatcher_id>>> = new Map(); // 实例变量，存储事件与实体索引和回调函数ID的映射
    // private static dispatcherThinker: CDOTA_BaseNPC; // 实例变量，用于保存dispatcher thinker对象
    constructor() {
        CDispatcher.Init(); // 在构造函数中初始化
    }

    // 初始化方法，创建dispatcher thinker对象并赋值给dispatcherThinker
    private static Init() {
        // CDispatcher.dispatcherThinker = CreateModifierThinker(
        //     null,
        //     null,
        //     'modifier_dispatcher_thinker',
        //     {},
        //     Vector(0, 0, 0),
        //     DotaTeam.NEUTRALS,
        //     false
        // );
    }

    // 注册事件的方法
    // eventName: 事件名称
    // entityIndex: 实体索引
    // callBack: 事件触发时调用的回调函数
    static Register<TName extends keyof LocalEventDeclarations>(
        eventName: TName,
        entityIndex: EntityIndex,
        callBack: LocalEventCallBack<TName>
    ): dispatcher_id {
        CDispatcher.id++; // 生成唯一的回调函数ID
        const id = CDispatcher.id as dispatcher_id;
        CDispatcher.id_callBack.set(id, callBack); // 将回调函数存储在id_callBack字典中
        // 检查并初始化嵌套的Map和Set
        if (!CDispatcher.tag_entIdxs_ids.has(eventName)) {
            CDispatcher.tag_entIdxs_ids.set(eventName, new Map());
        }
        const entityMap = CDispatcher.tag_entIdxs_ids.get(eventName)!;
        if (!entityMap.has(entityIndex)) {
            entityMap.set(entityIndex, new Set());
        }
        const idSet = entityMap.get(entityIndex)!;
        // print('Register', eventName, entityIndex, id, CDispatcher.id_callBack.get(id)({}));
        idSet.add(id); // 将回调函数ID记录在tag_entIdxs_ids中
        return id; // 返回回调函数ID
    }

    static RegisterLocalEvents<TName extends keyof LocalEventDeclarations>(
        eventName: TName,
        callback: LocalEventCallBack<TName>,
        entityIndex?: EntityIndex
    ) {
        CDispatcher.Register(eventName, entityIndex, event => callback(event));
    }

    // 注销事件的方法
    // id: 要注销的回调函数ID
    static UnRegister(id: dispatcher_id) {
        CDispatcher.id_callBack.delete(id); // 删除回调函数
        for (const [eventName, entityMap] of CDispatcher.tag_entIdxs_ids) {
            for (const [entityIndex, idSet] of entityMap) {
                if (idSet.has(id)) {
                    idSet.delete(id); // 删除回调函数ID
                    if (idSet.size === 0) {
                        entityMap.delete(entityIndex);
                    }
                }
            }
            if (entityMap.size === 0) {
                CDispatcher.tag_entIdxs_ids.delete(eventName);
            }
        }
    }

    // 发送事件的方法
    // eventName: 事件名称
    // entityIndex: 实体索引，或null表示所有实体
    // params: 事件参数

    public static Send<TName extends keyof LocalEventDeclarations>(
        eventName: TName,
        entityIndex: EntityIndex,
        params: LocalEventDeclarations[TName]
    ) {
        if (CDispatcher.tag_entIdxs_ids.has(eventName)) {
            const entityMap = CDispatcher.tag_entIdxs_ids.get(eventName)!;
            for (const [entIdx, idSet] of entityMap.entries()) {
                if (entityIndex === null || entityIndex === entIdx) {
                    for (const id of idSet) {
                        const callback = CDispatcher.id_callBack.get(id);
                        if (callback) {
                            CSafelyCall(() => {
                                callback(params);
                            });
                        } else {
                            print('callback is null');
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
    static Trigger(id: dispatcher_id, params: any) {
        const callback = CDispatcher.id_callBack.get(id);
        if (callback) {
            callback(params);
        }
    }
}
type LocalEventCallBack<TName extends keyof LocalEventDeclarations> = (event: LocalEventDeclarations[TName]) => void;
