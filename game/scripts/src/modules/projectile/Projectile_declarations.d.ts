/** 基础投射物数据 */
interface CProjectileBaseData {
    /** 投射物特效名称 */
    effectName?: ParticleList;
    /** 投射物技能 */
    ability?: CDOTABaseAbility;
    /** 投射物来源 */
    source: CDOTA_BaseNPC;

    /** 额外数据 */
    extraData?: ProjectileExtraData;
    /** 投射物起始位置 */
    start_position?: Vector;
    /** 投射物源附件 */
    sourceAttachment?: CProjectileAttachment;
    /** 投射物速度 */
    moveSpeed: number;
    vision_data?: CProjectileVisionData;
    /** 命中回调 */
    OnHitUnit?: (unit: CDOTA_BaseNPC, position: Vector, extraData?: ProjectileExtraData, thisProjectileID?: SLProjectileID) => void;
    /** 移动回调 */
    OnThink?: (position: Vector, extraData?: ProjectileExtraData, thisProjectileID?: SLProjectileID) => void;
}
type SLProjectileID = number & {
    readonly __SLProjectileIDTag__: '__SLProjectileIDTag__';
};
interface CProjectileVisionData {
    /** 视野半径 */
    visionRadius?: number;
    /** 视野队伍 */
    visionTeamNumber?: DotaTeam;
    /** 视野持续时间 */
    visionDuration?: number;
    /** 是否是高空视野 */
    highGroundVision?: boolean;
}
/** 跟踪投射物数据 */
interface CTrackingProjectileData extends CProjectileBaseData {
    /** 投射物目标 */
    target: CDOTA_BaseNPC;
    /** 是否可躲避 默认可躲避*/
    dodgeable?: boolean;
    /** 躲避后回调 */
    OnDodge?: (unit: CDOTA_BaseNPC, extraData?: ProjectileExtraData, thisProjectileID?: SLProjectileID) => void;
    /** 标记投射物是否是攻击 默认false 业务禁止调用*/
    _is_attack?: boolean;
}
/**线性投射物数据 */
interface CLinearProjectileData extends CProjectileBaseData {
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
    data: CTrackingProjectileData | CLinearProjectileData;
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
    type: CProjectileType;
    /** 投射物开始位置 */
    start_pos: Vector;
    /** 投射物销毁原因 */
    destroy_reason?: CProjectileDestroyReason;
    /** 目标index */
    target_index?: EntityIndex;
    /** 目标碰撞范围 */
    hull_radius?: number;
    /** 需要叉乘计算 */
    need_intersect?: boolean;
    /** 投射物覆盖位置  有这个数据会在那一帧使用此位置 后面的位置也会发生改动*/
    cover_pos?: Vector;
    /** 覆盖投射物速度 有这个数据会在那一帧使用此速度 后面的位置也会发生改动 */
    cover_speed?: number;
    /**已经伤害过的敌人 */
    hit_enemy?: EntityIndex[];
}

declare const enum CProjectileType {
    TRACKING = 'tracking',
    LINEAR = 'linear',
}
//destroy_reason
declare const enum CProjectileDestroyReason {
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
    /**  目标为null */
    NO_TARGET = 'no_target',
}
declare const enum CProjectileAttachment {
    NONE = '',
    ATTACK_1 = 'attach_attack1',
    ATTACK_2 = 'attach_attack2',
    HITLOCATION = 'attach_hitloc',
    ATTACK_3 = 'attach_attack3',
    ATTACK_4 = 'attach_attack4',
}
