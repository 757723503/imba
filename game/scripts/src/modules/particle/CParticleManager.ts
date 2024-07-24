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
    CreateParticle(data: CParticleData): ParticleID {
        let pfx_name = data.particleName;
        if (data.owner.IsBaseNPC && data.owner.IsBaseNPC() && data.owner.IsHero()) {
            pfx_name = ParticleManager.GetParticleReplacement(data.particleName as string, data.owner) as ParticleList;
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
        Timers.CreateTimer(duration, () => {
            ParticleManager.DestroyParticle(particleID, data.extraData?.immediate ?? false);
            ParticleManager.ReleaseParticleIndex(particleID);
            if (data.extraData?.endCallback) {
                CSafelyCall(() => data.extraData?.endCallback());
            }
            return undefined;
        });

        return particleID;
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

    DestroyParticle(particleID: ParticleID, immediate?: boolean): void {
        ParticleManager.DestroyParticle(particleID, immediate ?? false);
        ParticleManager.ReleaseParticleIndex(particleID);
    }
}
