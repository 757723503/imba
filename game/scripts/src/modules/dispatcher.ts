@reloadable
export class CDispatcher {
    static id: number = 0;
    static id_callBack: { [key: number]: (params: any) => void } = {};
    static tag_entIdxs_ids: { [key: string]: { [key: number]: { [key: number]: boolean } } } = {};

    static dispatcherThinker: any; // 此处需要你定义CreateModifierThinker的返回类型
    constructor() {
        CDispatcher.Init();
    }

    static Init() {
        CDispatcher.dispatcherThinker = CreateModifierThinker(
            null,
            null,
            'modifier_dispatcher_thinker',
            {},
            Vector(0, 0, 0),
            DotaTeam.NEUTRALS,
            false
        );
    }

    static Register(eventName: string, enityIndex: number, callBack: (params: any) => void): number {
        CDispatcher.id++;
        CDispatcher.id_callBack[CDispatcher.id] = callBack;
        if (!CDispatcher.tag_entIdxs_ids[eventName]) {
            CDispatcher.tag_entIdxs_ids[eventName] = {};
        }
        if (!CDispatcher.tag_entIdxs_ids[eventName][enityIndex]) {
            CDispatcher.tag_entIdxs_ids[eventName][enityIndex] = {};
        }
        CDispatcher.tag_entIdxs_ids[eventName][enityIndex][CDispatcher.id] = true;
        return CDispatcher.id;
    }

    static UnRegister(id: number) {
        delete CDispatcher.id_callBack[id];
    }

    static Send(eventName: string, enityIndex: number | null, params: any) {
        print('创建监听');
        if (CDispatcher.tag_entIdxs_ids[eventName]) {
            for (const entIdxx in CDispatcher.tag_entIdxs_ids[eventName]) {
                if (enityIndex === null || enityIndex === parseInt(entIdxx)) {
                    for (const id in CDispatcher.tag_entIdxs_ids[eventName][entIdxx]) {
                        if (CDispatcher.id_callBack[id]) {
                            try {
                                CDispatcher.id_callBack[id](params);
                            } catch (e) {
                                xpcall(
                                    () => {
                                        CDispatcher.id_callBack[id];
                                    },
                                    debug.traceback,
                                    params
                                );
                            }
                        } else {
                            delete CDispatcher.tag_entIdxs_ids[eventName][entIdxx][id];
                        }
                    }
                }
            }
        }
    }

    static Trigger(id: number, params: any) {
        if (CDispatcher.id_callBack[id]) {
            CDispatcher.id_callBack[id](params);
        }
    }
}
