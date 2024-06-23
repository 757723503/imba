import { BaseModifier, registerModifier } from '../utils/dota_ts_adapter';

const eventNameList = [
    'OnAttackLandedAttacker', // 攻击命中(攻击别人)
    'OnAttackLandedTarget', // 攻击命中(被别人攻击)
    'OnTakeDamageAttacker', // 受到伤害(自己伤害别人)
    'OnTakeDamageUnit', // 受到伤害(受到别人伤害)
    'OnAbilityFullyCastAbility', // 技能施法(所有人施法)
    'OnAbilityFullyCastItem', // 物品使用(所有人使用)
    'OnAbilityFullyCastAbilitySelf', // 技能施法(自己施法)
    'OnAbilityFullyCastItemSelf', // 物品使用(自己使用)
    'OnAttackedAttacker', // 攻击结束(攻击别人)
    'OnAttackedTarget', // 攻击结束(被别人攻击)
    'OnModifierAddedUnit', // 添加MODIFIER(指定单位被添加上modifier)
    'OnHeroKilledAttacker', // 英雄单位被击杀(击杀别人英雄单位)(实际凶手包括自己)
    'OnHeroKilledUnit', // 英雄单位被击杀(击杀别人英雄单位)(实际凶手可能是召唤物)
    'OnHeroKilledTarget', // 英雄单位被击杀(自己英雄被别人击杀)
    'OnDeathAttacker', // 单位死亡(击杀别人单位)
    'OnDeathUnit', // 单位死亡(被别人击杀)
];

class CDispatcher {
    static id: number = 0;
    static id_callBack: { [key: number]: (params: any) => void } = {};
    static tag_entIdxs_ids: { [key: string]: { [key: number]: { [key: number]: boolean } } } = {};

    static dispatcherThinker: any; // 此处需要你定义CreateModifierThinker的返回类型

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
        if (CDispatcher.tag_entIdxs_ids[eventName]) {
            for (const entIdxx in CDispatcher.tag_entIdxs_ids[eventName]) {
                if (enityIndex === null || enityIndex === parseInt(entIdxx)) {
                    for (const id in CDispatcher.tag_entIdxs_ids[eventName][entIdxx]) {
                        if (CDispatcher.id_callBack[id]) {
                            try {
                                CDispatcher.id_callBack[id](params);
                            } catch (e) {
                                xpcall(CDispatcher.id_callBack[id], debug.traceback, params);
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

@registerModifier()
export class modifier_dispatcher_event extends BaseModifier {
    dispatcherIDList: number[] = [];
    constructor() {
        super();
    }

    OnCreated(params: object): void {
        if (IsServer()) {
            const entIndex = this.GetParent().GetEntityIndex();
            for (const value of eventNameList) {
                if (this[value]) {
                    this.dispatcherIDList.push(CDispatcher.Register(value, entIndex, (params: any) => this[value](params)));
                }
            }
        }
    }

    OnDestroy(): void {
        if (IsServer()) {
            for (const id of this.dispatcherIDList) {
                CDispatcher.UnRegister(id);
            }
        }
    }
}
