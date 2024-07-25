import { reloadable } from '../../utils/tstl-utils';
import './particle_list';
declare global {
    var CParticleManager: CParticleManager;
    var CCreateParticle: CParticleManager['CreateParticle'];
    var CSetParticleControl: CParticleManager['SetParticleControl'];
    var CSetParticleControlEnt: CParticleManager['SetParticleControlEnt'];
    var CDestroyParticle: CParticleManager['DestroyParticle'];
}

@reloadable
export class CParticleManager {
    _particle_map: Map<EntityIndex, Partial<Record<ParticleList, number[]>>> = new Map();
    CreateParticle(data: CParticleData): ParticleID {
        let pfx_name = data.particleName;
        if (data.caster.IsBaseNPC && data.caster.IsBaseNPC() && data.caster.IsHero()) {
            pfx_name = ParticleManager.GetParticleReplacement(data.particleName as string, data.caster) as ParticleList;
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
        const duration = data.extraData?.duration ?? 60;
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

    CheckParticleLimit(caster: CDOTA_BaseNPC, particleName: ParticleList, time: number, limit: number): boolean {
        const index = caster.GetEntityIndex();
        const particle_map = this._particle_map.get(index);
        const now = GameRules.GetGameTime();
        if (!particle_map[particleName]) {
            particle_map[particleName] = [];
        }
        particle_map[particleName] = particle_map[particleName].filter(t => now - t < time);
        if (particle_map[particleName].length >= limit) {
            return false;
        }
        particle_map[particleName].push(now);
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

    DestroyParticle(particleID: ParticleID, immediate?: boolean, data?: CParticleData): void {
        if (data && data.caster) {
            const index = data.caster.GetEntityIndex();
            const particle_map = this._particle_map.get(index);
            if (particle_map) {
                for (const key in particle_map) {
                    particle_map[key] = particle_map[key].filter(t => t != particleID);
                }
            }
        }
        ParticleManager.DestroyParticle(particleID, immediate ?? false);
        ParticleManager.ReleaseParticleIndex(particleID);
    }
}
