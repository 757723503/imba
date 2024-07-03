/** 基础投射物数据 */
interface ProjectileBaseData {
    /** 投射物特效名称 */
    effectName?: string;
    /** 投射物技能 */
    ability?: CDOTABaseAbility;
    /** 投射物来源 */
    source: CDOTA_BaseNPC;
    /** 是否提供视野 */
    providesVision?: boolean;
    /** 视野半径 */
    visionRadius?: number;
    /** 视野队伍 */
    visionTeamNumber?: DotaTeam;
    /** 额外数据 */
    extraData?: ProjectileExtraData;
    /** 投射物起始位置 */
    start_position?: Vector;
    /** 投射物源附件 */
    sourceAttachment?: SLProjectileAttachment;
    /** 投射物速度 */
    moveSpeed: number;

    /** 命中回调 */
    OnHitUnit?: (unit: CDOTA_BaseNPC, position: Vector, extraData?: ProjectileExtraData, thisProjectileID?: SLProjectileID) => void;
    /** 移动回调 */
    OnThink?: (position: Vector, extraData?: ProjectileExtraData, thisProjectileID?: SLProjectileID) => void;
}
type SLProjectileID = number;
/** 跟踪投射物数据 */
interface TrackingProjectileData extends ProjectileBaseData {
    /** 投射物目标 */
    target: CDOTA_BaseNPC;
    /** 是否可闪避 默认false*/
    dodgeable?: boolean;
    /** 躲避后回调 */
    OnDodge?: (unit: CDOTA_BaseNPC, extraData?: ProjectileExtraData, thisProjectileID?: SLProjectileID) => void;
}
/**线性投射物数据 */
interface LinearProjectileData extends ProjectileBaseData {
    /** 投射物方向 */
    direction: Vector;
    /** 投射物距离 */
    distance: number;
    /** 投射物终点(覆盖距离) */
    endPosition?: Vector;
    /** 起始半径 */
    startRadius: number;
    /** 结束半径 */
    endRadius: number;
    /** 命中后是否直接移除 默认false*/
    removeOnRadiusHit: boolean;
    /** 目标队伍 */
    iUnitTargetTeam: UnitTargetTeam;
    /** 目标标记 */
    iUnitTargetFlags: UnitTargetFlags;
    /** 目标类型 */
    iUnitTargetType: UnitTargetType;
    /** 结束回调 */
    OnFinish?: (position: Vector, extraData?: ProjectileExtraData, thisProjectileID?: SLProjectileID) => void;
}
interface ProjectileExtraData {
    /** 额外数据 */
    [key: string]: any;
}
interface ProjectileMoveData {
    /** 投射物数据 */
    data: TrackingProjectileData | LinearProjectileData;
    /** 投射物特效 */
    effect: ParticleID;
    /** 投射物现在位置 */
    now_pos: Vector;
    /** 投射物上一帧位置 */
    last_pos: Vector;

    /** 投射物目标上一帧位置 */
    last_target_pos?: Vector;

    /** 投射物产生时间 */
    create_time?: number;

    /** 是否被躲避 */
    is_dodge?: boolean;
    /** 投射物类型*/
    type: SLProjectileType;

    /** 投射物开始位置 */
    start_pos: Vector;
    /** 投射物销毁原因 */
    destroy_reason?: SLProjectileDestroyReason;
}

declare const enum SLProjectileType {
    TRACKING = 'tracking',
    LINEAR = 'linear',
}
//destroy_reason
declare const enum SLProjectileDestroyReason {
    /** 命中销毁 */
    HIT = 'hit',
    /** 结束销毁 */
    FINISH = 'finish',
    /** 超时销毁 */
    TIMEOUT = 'timeout',
    /** 重载销毁 */
    RELOAD = 'reload',
    /** 调用Destroy 销毁 */
    DESTROY = 'destroy',
}
declare const enum SLProjectileAttachment {
    NONE = '',
    ATTACK_1 = 'attach_attack1',
    ATTACK_2 = 'attach_attack2',
    HITLOCATION = 'attach_hitloc',
    ATTACK_3 = 'attach_attack3',
    ATTACK_4 = 'attach_attack4',
}
