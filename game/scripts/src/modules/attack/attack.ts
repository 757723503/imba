import { BaseModifier, registerModifier } from '../../utils/dota_ts_adapter';
@reloadable
export class CAttackDataManager {
    attack_data: Map<number, CAttackEvent> = new Map<number, CAttackEvent>();
    constructor() {}

    public OnAttackStart(event: ModifierAttackEvent): void {
        const attackDataValue = {
            attacker: event.attacker,
            damage: event.damage,
            damage_category: event.damage_category,
            inflictor: event.inflictor,
            original_damage: event.original_damage,
            ranged_attack: event.ranged_attack,
            target: event.target,
            record: event.record,
            fail_type: event.fail_type,
        };
        this.attack_data.set(event.record, attackDataValue);
        Object.freeze(attackDataValue);
        CDispatcher.Send(ModifierFunctions.OnAttackedStart_Target, event.target.entindex(), attackDataValue);
        print('CAttack OnAttackStart');
    }

    public OnAttackRecord(event: ModifierAttackEvent): void {
        print('CAttack OnAttackStart');
    }

    public OnAttack(event: ModifierAttackEvent): void {
        print('CAttack OnAttackStart');
    }

    public OnAttackLanded(event: ModifierAttackEvent): void {
        print('CAttack OnAttackStart');
    }

    public OnAttackRecordDestroy(event: ModifierAttackEvent): void {
        print('CAttack OnAttackRecordDestroy');
    }

    public OnAttackFinished(event: ModifierAttackEvent): void {
        //删除记录数据
        this.attack_data.delete(event.record);
        print('CAttack OnAttackFinished');
        // this.GetParent().FadeGesture(GameActivity.DOTA_ATTACK_EVENT);
    }

    public OnAttackFail(event: ModifierAttackEvent): void {
        print('CAttack OnAttackFail');
    }

    public OnAttackCancelled(event: ModifierAttackEvent): void {
        //删除记录数据
        this.attack_data.delete(event.record);
        print('CAttack OnAttackCancelled');
        // this.GetParent().FadeGesture(GameActivity.DOTA_ATTACK_EVENT);
    }
}

declare global {
    var CAttackData: CAttackDataManager;
}
@registerModifier()
export class modifier_attackdata_thinker extends BaseModifier {
    IsHidden(): boolean {
        return false;
    }

    IsDebuff(): boolean {
        return true;
    }

    DeclareFunctions(): ModifierFunction[] {
        return [
            ModifierFunction.ON_ATTACK_START,
            // ModifierFunction.ON_ATTACKED,
            ModifierFunction.ON_ATTACK_LANDED,
            // ModifierFunction.ON_ATTACK_ALLIED,
            ModifierFunction.ON_ATTACK_FAIL,
            ModifierFunction.ON_ATTACK_FINISHED,
            ModifierFunction.ON_ATTACK_RECORD,
            ModifierFunction.ON_ATTACK_RECORD_DESTROY,
            ModifierFunction.ON_ATTACK_CANCELLED,
            ModifierFunction.ON_ATTACK,
        ];
    }

    OnAttackStart(event: ModifierAttackEvent): void {
        CAttackData.OnAttackStart(event);
        // this.GetParent().StartGestureWithFadeAndPlaybackRate(
        //     GameActivity.DOTA_ATTACK_EVENT,
        //     0.0,
        //     0.0,
        //     this.GetParent().GetDisplayAttackSpeed() / 100
        // );
    }

    OnAttackRecord(event: ModifierAttackEvent): void {
        CAttackData.OnAttackRecord(event);
        print('modifier_imba_stunned OnAttackRecord');
    }

    OnAttack(event: ModifierAttackEvent): void {
        CAttackData.OnAttack(event);
        print('modifier_imba_stunned OnAttack');
    }

    OnAttackLanded(event: ModifierAttackEvent): void {
        CAttackData.OnAttackLanded(event);
        print('modifier_imba_stunned OnAttackLanded');
    }

    // OnAttacked(event: ModifierAttackEvent): void {
    //     print('modifier_imba_stunned OnAttacked');
    // }

    OnAttackRecordDestroy(event: ModifierAttackEvent): void {
        CAttackData.OnAttackRecordDestroy(event);
        print('modifier_imba_stunned OnAttackRecordDestroy');
    }

    OnAttackFinished(event: ModifierAttackEvent): void {
        CAttackData.OnAttackFinished(event);
        print('modifier_imba_stunned OnAttackFinished');
        // this.GetParent().FadeGesture(GameActivity.DOTA_ATTACK_EVENT);
    }

    // OnAttackAllied(event: ModifierAttackEvent): void {

    //     print('modifier_imba_stunned OnAttackAllied');
    // }

    OnAttackFail(event: ModifierAttackEvent): void {
        CAttackData.OnAttackFail(event);
        print('modifier_imba_stunned OnAttackFail');
    }

    OnAttackCancelled(event: ModifierAttackEvent): void {
        CAttackData.OnAttackCancelled(event);
        print('modifier_imba_stunned OnAttackCancelled');
        // this.GetParent().FadeGesture(GameActivity.DOTA_ATTACK_EVENT);
    }
}
