import { reloadable } from '../../utils/tstl-utils';
import './particle_list';
declare global {
    var CParticleManager: CParticleManager;
    // var CParticleManager.CreateParticle: CParticleManager['CreateParticle'];
    // var CParticleManager.SetParticleControl: CParticleManager['SetParticleControl'];
    // var CParticleManager.SetParticleControlEnt: CParticleManager['SetParticleControlEnt'];
    // var CDestroyParticle: CParticleManager['DestroyParticle'];
    // var CCheckParticleLimit: CParticleManager['CheckParticleLimit'];
}

@reloadable
export class CParticleManager {
    _particle_map: Map<EntityIndex, Partial<Record<ParticleList, number[]>>> = new Map();
    CreateParticle(data: CParticleData): ParticleID {
        let pfx_name = data.particleName;
        if (data.caster.IsBaseNPC && data.caster.IsBaseNPC() && data.caster.IsHero()) {
            pfx_name = ParticleManager.GetParticleReplacement(data.particleName as string, data.caster) as ParticleList;
        }
        if (data.caster && data.extraData?.limits) {
            if (!this.CheckParticleLimit(data.caster, pfx_name, data.extraData.limits.time, data.extraData.limits.limit)) {
                DebugPrint('Particle Limit Exceeded,达到上限', pfx_name, data.caster.GetUnitName());
                return -1 as ParticleID;
            }
        }
        let particleID: ParticleID;
        if (data.player) {
            particleID = ParticleManager.CreateParticleForPlayer(pfx_name as string, data.particleAttach, data.owner, data.player);
        } else if (data.team) {
            particleID = ParticleManager.CreateParticleForTeam(pfx_name as string, data.particleAttach, data.owner, data.team);
        } else {
            particleID = ParticleManager.CreateParticle(pfx_name as string, data.particleAttach, data.owner);
        }
        if (data.extraData && data.extraData.CheckFoW) {
            ParticleManager.SetParticleShouldCheckFoW(particleID, data.extraData.CheckFoW);
        }
        if (data.modifier) {
            (data.modifier['AddParticle_all_particle'] as ParticleID[]) = (data.modifier['AddParticle_all_particle'] as ParticleID[]) || [];
            (data.modifier['AddParticle_all_particle'] as ParticleID[]).push(particleID);
        }
        const duration = data?.duration ?? 60;
        if (duration <= 0) {
            this.DestroyParticle(particleID, data.extraData?.immediate ?? false);
            return particleID;
        }
        Timers.CreateTimer(duration, () => {
            this.DestroyParticle(particleID, data.extraData?.immediate ?? false);
            if (data.extraData?.endCallback) {
                CSafelyCall(() => data.extraData?.endCallback());
            }
            return undefined;
        });

        return particleID;
    }

    // 检查粒子特效限制
    CheckParticleLimit(caster: CDOTA_BaseNPC, particleName: ParticleList, time: number, limit: number): boolean {
        const index = caster.GetEntityIndex();

        // 获取或初始化该实体的粒子特效映射
        let particle_map = this._particle_map.get(index);
        if (!particle_map) {
            particle_map = {};
            this._particle_map.set(index, particle_map);
        }
        // 获取当前游戏时间
        const now = GameRules.GetGameTime();

        // 如果粒子特效映射中不存在该粒子特效名，则初始化为空数组
        if (!particle_map[particleName]) {
            particle_map[particleName] = [];
        }

        // 获取该粒子特效的时间戳数组
        const timestamps = particle_map[particleName] as number[];

        // 过滤掉时间戳数组中过期的时间戳，只保留在指定时间段内的时间戳
        const filteredTimestamps = timestamps.filter((t: number) => now - t < time);
        particle_map[particleName] = filteredTimestamps;
        // 如果过滤后的时间戳数组长度超过限制，返回 false
        if (filteredTimestamps.length >= limit) {
            return false;
        }
        // 将当前时间戳添加到时间戳数组中
        filteredTimestamps.push(now);
        particle_map[particleName] = filteredTimestamps;

        // 如果未超过限制，返回 true
        return true;
    }

    SetParticleControl(particle: ParticleID, controlPoint: number, value: Vector): void {
        ParticleManager.SetParticleControl(particle, controlPoint, value);
    }

    SetParticleControlEnt(
        particle: ParticleID,
        controlPoint: number,
        unit: CBaseEntity,
        particleAttach: ParticleAttachment,
        attachment: string,
        offset: Vector,
        lockOrientation: boolean
    ): void {
        ParticleManager.SetParticleControlEnt(particle, controlPoint, unit, particleAttach, attachment, offset, lockOrientation);
    }

    SetParticleControlTransform(fxIndex: number, point: number, origin: Vector, qAngles?: QAngle, forward?: Vector): void {
        qAngles && ParticleManager.SetParticleControlTransform(fxIndex, point, origin, qAngles);
        forward && ParticleManager.SetParticleControlTransformForward(fxIndex, point, origin, forward);
    }

    DestroyParticle(particleID: ParticleID, immediate?: boolean, data?: CParticleData): void {
        if (data && data.caster) {
            const index = data.caster.GetEntityIndex();
            const particle_map = this._particle_map.get(index);
            if (particle_map) {
                for (const key in particle_map) {
                    // 将 key 断言为 ParticleList 类型
                    const particleName = key as ParticleList;
                    // 从时间戳数组中移除最早的时间戳
                    if (particle_map[particleName] && particle_map[particleName].length > 0) {
                        particle_map[particleName].shift();
                    }
                }
            }
        }
        ParticleManager.DestroyParticle(particleID, immediate ?? false);
        ParticleManager.ReleaseParticleIndex(particleID);
        data = undefined;
    }
}
