declare global {
    var CProjectileManager: CProjectileManager;
}
@reloadable
export class CProjectileManager {
    protected _all_projectile_id: SLProjectileID[];
    protected _projectile_const_max: number;
    protected _projectile_map: Record<SLProjectileID, ProjectileMoveData>;
    protected _projectile_target_map: Record<EntityIndex, SLProjectileID[]>;
    protected _projectile_timer: string;
    constructor() {
        this.ProjectileManagerInIt();
        print('投射物管理器已创建');
    }

    /** 投射物管理器初始化 */
    protected ProjectileManagerInIt(): void {
        this._all_projectile_id = [];
        for (let i = 0; i < 1000; i++) {
            this._all_projectile_id.push(i);
        }
        /** 投射物数据表 */
        this._projectile_map = {};
        /** 投射物目标为key映射表  用于快速查找以目标为跟踪投射物的数据 */
        this._projectile_target_map = {};

        this.InitTProjectileTimer();
    }

    //获取ID
    protected GetProjectileID(): SLProjectileID {
        const id = this._all_projectile_id.shift();
        // print('获取ID', id);
        if (id == null || id == undefined) {
            print('投射物ID不足');
            return;
        }
        return id;
    }

    //回收ID
    protected RecycleProjectileID(id: SLProjectileID): void {
        this._all_projectile_id.push(id);
    }

    GetUnitHitAttachment(unit: CDOTA_BaseNPC): Vector {
        return unit.GetAttachmentOrigin(unit.ScriptLookupAttachment(SLProjectileAttachment.HITLOCATION));
    }

    /** 创建跟踪投射物 */
    CreateTrackingProjectile(data: TrackingProjectileData): SLProjectileID {
        if (!IsValidEntity(data.target)) return;
        data.extraData = data.extraData ?? {};
        const ProjectileID = this.GetProjectileID();
        if (!ProjectileID) return;
        const dota_hero = data.source;
        const dota_target = data.target;
        const target_pos = this.GetUnitHitAttachment(dota_target) ?? dota_target.GetAbsOrigin();
        const attach_pos = !data.sourceAttachment
            ? dota_hero?.GetAttachmentOrigin(dota_hero?.ScriptLookupAttachment(SLProjectileAttachment.ATTACK_1))
            : dota_hero?.GetAttachmentOrigin(dota_hero?.ScriptLookupAttachment(data.sourceAttachment));
        //起始位置 优先使用传入的起始位置  其次使用附着位置  最后使用英雄位置
        const start_position = data.start_position ?? attach_pos ?? dota_hero.GetAbsOrigin();
        const pfx = this.TrackingPlayerEffect(data, start_position);
        // const hull_radius = math.max(dota_target.GetHullRadius(), 50) ?? 50;
        const hull_radius = 30;
        this._projectile_map[ProjectileID] = {
            data: data,
            effect: pfx,
            now_pos: start_position,
            last_pos: start_position,
            last_target_pos: target_pos,
            create_time: GameRules.GetGameTime(),
            is_dodge: false,
            type: SLProjectileType.TRACKING,
            start_pos: start_position,
            target_index: dota_target.GetEntityIndex(),
            hull_radius: hull_radius,
            need_intersect: data.moveSpeed * 0.03 >= hull_radius,
        };
        if (!this._projectile_target_map[dota_target.GetEntityIndex()]) {
            this._projectile_target_map[dota_target.GetEntityIndex()] = [];
        }
        this._projectile_target_map[dota_target.GetEntityIndex()].push(ProjectileID);
        return ProjectileID;
    }

    /** 移除投射物 */
    DestroyProjectile(ProjectileID: SLProjectileID): void {
        if (!this.IsValidProjectile(ProjectileID)) return;
        this._projectile_map[ProjectileID].destroy_reason = SLProjectileDestroyReason.DESTROY;
        this._RemoveProjectile(ProjectileID);
    }

    protected TrackingPlayerEffect(data: TrackingProjectileData, start_position: Vector): ParticleID {
        if (!data.effectName) return;
        const pfx = ParticleManager.CreateParticle(data.effectName, ParticleAttachment.CUSTOMORIGIN, null);
        const dota_unit = data.target;
        const end_pos = dota_unit.GetAbsOrigin();
        ParticleManager.SetParticleControl(pfx, 0, start_position);
        ParticleManager.SetParticleControl(pfx, 1, end_pos);
        ParticleManager.SetParticleControl(pfx, 2, Vector(data.moveSpeed, 0, 0));
        ParticleManager.SetParticleControl(pfx, 9, start_position);
        return pfx;
    }

    /** 躲避投射物 */
    ProjectileDodge(target: CDOTA_BaseNPC): void {
        if (!IsValidEntity(target)) return;
        const ProjectileIDs = this._projectile_target_map[target.GetEntityIndex()];
        if (!ProjectileIDs) {
            // SLWarning('没有投射物可以躲避');
            return;
        }
        for (const ProjectileID of ProjectileIDs) {
            const keys = this._projectile_map[ProjectileID];
            const data = keys.data as TrackingProjectileData;
            //如果投射物是可以被躲避的
            if (data.dodgeable == false) return;
            if (data.OnDodge) {
                data.OnDodge(data.target, data.extraData, ProjectileID);
            }
            //标识投射物被躲避
            this._projectile_map[ProjectileID].is_dodge = true;
        }
    }

    /** 是否是有效投射物 */
    IsValidProjectile(ProjectileID: SLProjectileID): boolean {
        const destroy_reason = this._projectile_map[ProjectileID]?.destroy_reason;
        return this._projectile_map[ProjectileID] != undefined && destroy_reason == undefined;
    }

    /** 投射物管理器通用timer 用于计算所有弹道位置和碰撞 每帧执行 */
    protected InitTProjectileTimer() {
        this._projectile_timer = Timers.CreateTimer(FrameTime(), () => {
            // for (const [ProjectileID, keys] of this._projectile_map) {
            for (const key of Object.entries(this._projectile_map)) {
                const ProjectileID = Number(key[0]);
                if (!this.IsValidProjectile(ProjectileID)) {
                    // print('这个投射物已经被销毁', this._projectile_map[ProjectileID]?.destroy_reason, ProjectileID);
                    return;
                }
                const data = key[1];
                const projectile_type = data.type;
                const vision = this._projectile_map[ProjectileID].data.providesVision;
                //视野
                if (vision) {
                    const team = data.data.visionTeamNumber;
                    const vision_radius = data.data.visionRadius;
                    const vision_pos = data.now_pos;
                    if (team && vision_pos && vision_radius) {
                        AddFOWViewer(data.data.visionTeamNumber, data.now_pos, vision_radius, FrameTime(), false);
                    }
                }
                if (projectile_type === SLProjectileType.LINEAR) {
                    this._calLinearThinkaHit(ProjectileID, data);
                } else if (projectile_type === SLProjectileType.TRACKING) {
                    this._calTrackingThinkaHit(ProjectileID, data);
                }
            }
            const size = Object.keys(this._projectile_target_map).length;
            // print('ID' + this._all_projectile_id.length, 'this._projectile_target_map' + size);
            return FrameTime();
        });
    }

    protected _calTrackingThinkaHit(ProjectileID: SLProjectileID, keys: ProjectileMoveData): void {
        const data = keys.data as TrackingProjectileData;
        const dota_target = data.target;
        const now_duration = GameRules.GetGameTime() - keys.create_time;
        //暂时设置15秒超时
        if (now_duration > 15) {
            this._projectile_map[ProjectileID].destroy_reason = SLProjectileDestroyReason.TIMEOUT;
            this._RemoveProjectile(ProjectileID);
            return;
        }
        if (!IsValidEntity(dota_target)) {
            this._projectile_map[ProjectileID].destroy_reason = SLProjectileDestroyReason.NO_TARGET;
            this._RemoveProjectile(ProjectileID);
            return;
        }
        //目标点 如果被躲避 那么这个点就永远是上一帧的目标点
        const target_pos = dota_target.IsAlive()
            ? keys.is_dodge
                ? keys.last_target_pos
                : this.GetUnitHitAttachment(dota_target)
            : keys.last_target_pos;
        const direction = target_pos.__sub(keys.now_pos).Normalized();
        const new_pos = keys.now_pos.__add(direction.__mul(data.moveSpeed * FrameTime()));
        // 判断距离或者两点是否相交 用于避免速度太快引起鬼畜投射物+
        if (
            new_pos.__sub(target_pos).Length2D() < keys.hull_radius ||
            (keys.need_intersect && this._isCapsuleIntersect(keys.last_pos, keys.now_pos, 20, target_pos, keys.last_target_pos, keys.hull_radius))
        ) {
            //判断是否击中 如有需要可以和线性投射物一样 触发每个碰到单位的回调
            if (data.OnHitUnit && !keys.is_dodge) {
                data.OnHitUnit(data.target, new_pos, data.extraData, ProjectileID);
            }
            this._projectile_map[ProjectileID].destroy_reason = SLProjectileDestroyReason.HIT;
            this._RemoveProjectile(ProjectileID);
        } else {
            //投射物正在移动 更新特效和数据
            keys.effect && ParticleManager.SetParticleControl(keys.effect, 1, new_pos);
            this._projectile_map[ProjectileID] = {
                data: data,
                effect: keys.effect,
                now_pos: new_pos,
                last_pos: keys.now_pos,
                last_target_pos: target_pos,
                create_time: keys.create_time,
                is_dodge: keys.is_dodge,
                type: SLProjectileType.TRACKING,
                start_pos: keys.start_pos,
                target_index: keys.target_index,
                hull_radius: keys.hull_radius,
                need_intersect: keys.need_intersect,
            };
            if (data.OnThink) {
                data.OnThink(new_pos, data.extraData, ProjectileID);
            }
        }
    }

    //内部调用 移除投射物 外部调用DestroyProjectile
    protected _RemoveProjectile(ProjectileID: SLProjectileID): void {
        const keys = this._projectile_map[ProjectileID];
        if (keys == undefined) {
            // SLPrint('这个投射物已经被销毁', ProjectileID);
        }
        if (keys.effect) {
            ParticleManager.DestroyParticle(keys.effect, false);
            ParticleManager.ReleaseParticleIndex(keys.effect);
        }
        if (keys.type === SLProjectileType.TRACKING) {
            const target_index = this._projectile_map[ProjectileID].target_index;
            if (target_index) {
                const idIndex = this._projectile_target_map[target_index].indexOf(ProjectileID);
                if (idIndex > -1) {
                    this._projectile_target_map[target_index].splice(idIndex, 1);
                    if (this._projectile_target_map[target_index].length == 0) {
                        delete this._projectile_target_map[target_index];
                    }
                }
            }
            this._projectile_map[ProjectileID] = undefined;
        } else if (keys.type === SLProjectileType.LINEAR) {
            this._projectile_map[ProjectileID] = undefined;
        }

        this.RecycleProjectileID(ProjectileID);
    }

    protected _isCapsuleIntersect(p1_start: Vector, p1_end: Vector, p1_radius: number, p2_start: Vector, p2_end: Vector, p2_radius: number): boolean {
        const dp1 = p1_end.__sub(p1_start);
        const dp2 = p2_end.__sub(p2_start);
        const a = dp1.Dot(dp1) + dp2.Dot(dp2) - 2 * dp1.Dot(dp2);
        const b = 2 * (dp1.Dot(p1_start.__sub(p2_start)) - dp2.Dot(p1_start.__sub(p2_start)));
        const c = p1_start.__sub(p2_start).Dot(p1_start.__sub(p2_start)) - (p1_radius + p2_radius) * (p1_radius + p2_radius);
        const discriminant = b * b - 4 * a * c;
        if (discriminant < 0) {
            return false;
        } else {
            const sqrtDiscriminant = Math.sqrt(discriminant);
            const t1 = (-b - sqrtDiscriminant) / (2 * a);
            const t2 = (-b + sqrtDiscriminant) / (2 * a);

            return (t1 >= 0 && t1 <= 1) || (t2 >= 0 && t2 <= 1);
        }
    }

    //重载前后
    protected ___BeforeReload(): void {
        // print('ProjectileManager ___BeforeReload');
        // Timers.RemoveTimer(this._projectile_timer);
        // this._projectile_timer = undefined;
        for (const key of Object.entries(this._projectile_map)) {
            const ProjectileID = Number(key);
            this._projectile_map[ProjectileID]?.destroy_reason;
            this._RemoveProjectile(ProjectileID);
        }
    }

    //重载后
    protected ___AfterReload(): void {
        // print('ProjectileManager ___AfterReload');
        //? 重新初始化 延迟就正常  非延迟会出问题
        Timers.CreateTimer(FrameTime(), () => {
            this.ProjectileManagerInIt();
        });
    }

    /** 创建线性投射物 */
    CreateLinearProjectile(data: LinearProjectileData): SLProjectileID {
        data.extraData = data.extraData ?? {};
        const ProjectileID = this.GetProjectileID();
        const dota_hero = data.source;
        const start_position = data.start_position ?? dota_hero.GetAbsOrigin();
        const pfx = this.LinearPlayerEffect(data, start_position);
        this._projectile_map[ProjectileID] = {
            data: data,
            effect: pfx,
            now_pos: start_position,
            last_pos: start_position,
            start_pos: start_position,
            create_time: GameRules.GetGameTime(),
            type: SLProjectileType.LINEAR,
        };
        return ProjectileID;
    }

    //创建线性投射物特效
    protected LinearPlayerEffect(data: LinearProjectileData, start_position: Vector): ParticleID {
        if (!data.effectName) return;
        const direction = data.direction;
        const speed = data.moveSpeed;
        const pfx = ParticleManager.CreateParticle(data.effectName, ParticleAttachment.WORLDORIGIN, null);
        ParticleManager.SetParticleControl(pfx, 0, start_position);
        ParticleManager.SetParticleControl(pfx, 1, direction.__mul(speed));
        return pfx;
    }

    protected _calLinearThinkaHit(ProjectileID: SLProjectileID, keys: ProjectileMoveData): void {
        const data = keys.data as LinearProjectileData;
        const now_duration = GameRules.GetGameTime() - keys.create_time;
        if (now_duration > 15) {
            this._projectile_map[ProjectileID].destroy_reason = SLProjectileDestroyReason.TIMEOUT;
            this._RemoveProjectile(ProjectileID);
            return;
        }
        const dota_unit = data.source;
        const end_pos = data.endPosition;
        let direction = data.direction ?? end_pos.__sub(keys.start_pos).Normalized();
        //解决0向量问题
        if (direction == Vector(0, 0, 0)) {
            direction = Vector(0, 1, 0);
        }
        //最大距离 配置了end_pos就是end_pos的距离 否则就是配置的距离
        const max_distance = !end_pos ? data.distance : end_pos.__sub(keys.start_pos).Length2D();
        const new_pos = keys.now_pos.__add(direction.__mul(data.moveSpeed * FrameTime()));
        //使用判断前进距离来判断是否到达终点
        const now_distance = new_pos.__sub(keys.start_pos).Length2D();
        //判断是否到达终点
        if (now_distance >= max_distance) {
            if (data.OnFinish) {
                data.OnFinish(keys.now_pos, data.extraData, ProjectileID);
            }
            this._projectile_map[ProjectileID].destroy_reason = SLProjectileDestroyReason.FINISH;
            this._RemoveProjectile(ProjectileID);
        } else {
            this._projectile_map[ProjectileID] = {
                data: data,
                effect: keys.effect,
                now_pos: new_pos,
                last_pos: keys.now_pos,
                create_time: keys.create_time,
                type: SLProjectileType.LINEAR,
                start_pos: keys.start_pos,
            };
            const targets = this._FindUnitInLine(
                dota_unit.GetTeamNumber(),
                keys.start_pos,
                keys.now_pos,
                direction,
                now_distance,
                max_distance,
                data.startRadius,
                data.endRadius,
                data.iUnitTargetTeam,
                data.iUnitTargetType,
                data.iUnitTargetFlags
            );
            for (const target of targets) {
                if (data.OnHitUnit) {
                    const sl_unit_entity = target;
                    data.OnHitUnit(sl_unit_entity, keys.now_pos, data.extraData, ProjectileID);
                }

                if (data.removeOnRadiusHit) {
                    if (data.OnFinish) {
                        data.OnFinish(keys.now_pos, data.extraData, ProjectileID);
                    }
                    this._projectile_map[ProjectileID].destroy_reason = SLProjectileDestroyReason.HIT;
                    this._RemoveProjectile(ProjectileID);
                    break;
                }
            }
            if (data.OnThink) {
                data.OnThink(new_pos, data.extraData, ProjectileID);
            }
        }
    }

    //线性投射物碰撞检测 简单实现线性投射物发出时不会检测起始点后方的单位
    protected _FindUnitInLine(
        TeamNumber: number,
        StartPos: Vector,
        NowPos: Vector,
        direction: Vector,
        now_distance: number,
        max_distance: number,
        StartRadius: number,
        EndRadius: number,
        TargetTeam: number,
        TargetType: number,
        TargetFlags: number
    ): CDOTA_BaseNPC[] {
        const Progress = math.min(1, math.max(0, now_distance / max_distance));
        const now_radius = StartRadius + (EndRadius - StartRadius) * Progress;
        // DebugDrawCircle(NowPos, Vector(255, 0, 0), 100, now_radius, true, 5);
        // DebugDrawLine(StartPos, NowPos, 255, 0, 0, true, 5);
        const validTargets: CDOTA_BaseNPC[] = [];

        if (now_distance > now_radius) {
            const targets = FindUnitsInRadius(TeamNumber, NowPos, null, now_radius, TargetTeam, TargetType, TargetFlags, FindOrder.ANY, false);
            return targets;
        } else {
            const targets = FindUnitsInRadius(TeamNumber, NowPos, null, now_radius, TargetTeam, TargetType, TargetFlags, FindOrder.ANY, false);
            for (const target of targets) {
                const target_pos = target.GetAbsOrigin();
                const target_direction = target_pos.__sub(StartPos).Normalized();
                const dot = target_direction.Dot(direction);
                if (dot > 0) {
                    const target_distance = target_pos.__sub(StartPos).Length2D();
                    if (target_distance <= max_distance) {
                        validTargets.push(target);
                    }
                }
            }
            return validTargets;
        }
    }
}