import { reloadable } from '../utils/tstl-utils';
declare global {
    var CIllusionManager: CIllusionManager;
}
declare interface CreateIllusionsAsyncKeys {
    /** 幻象拥有者 */
    owner: CDOTA_BaseNPC;
    /** 幻象模板 */
    heroToCopy: CDOTA_BaseNPC;
    /** 幻象参数 */
    modifierKeys: CreateIllusionsModifierKeys;
    /** 幻象数量 */
    numIllusions: number;
    /** 间距 */
    padding?: number;
    /** 是否随机位置 */
    scramblePosition?: boolean;
    /** 是否寻找空间 */
    findClearSpace?: boolean;
    /** 是否是强幻想 */
    isStrongIllusion?: boolean;
    /** 回调 */
    callback: (illusion: CDOTA_BaseNPC_Hero) => void;
}
declare interface CreateIllusionsModifierKeys {
    /**
     * 造成的伤害百分比
     */
    outgoing_damage?: number;
    /**
     * 受到的伤害百分比
     */
    incoming_damage?: number;
    /**
     * 奖励基础金钱
     */
    bounty_base?: number;
    /**
     * 奖励金钱增长
     */
    bounty_growth?: number;
    /**
     * 对建筑造成的伤害百分比
     */
    outgoing_damage_structure?: number;
    /**
     * 对肉山造成的伤害百分比
     */
    outgoing_damage_roshan?: number;
    /**
     * 幻象持续时间
     */
    duration?: number;

    /**
     * 来源技能
     */
    ability?: CDOTABaseAbility;

    /**
     * 覆盖的幻象皮
     */
    override_status?: ParticleList;
}
@reloadable
export class CIllusionManager {
    constructor() {}
    /**
     * 异步创建幻象 一定分为3帧创建
     * @param keys 参数
     */
    async CreateIllusionsAsync(keys: CreateIllusionsAsyncKeys): Promise<void> {
        const num = keys.numIllusions;
        const heroToCopy = keys.heroToCopy;
        const owner = keys.owner;
        const config = {
            outgoing_damage: 0,
            incoming_damage: 0,
            bounty_base: heroToCopy.GetLevel() * 2,
            bounty_growth: 0,
            outgoing_damage_structure: -60,
            outgoing_damage_roshan: -80,
            duration: 0,
            ...keys.modifierKeys,
        };
        const padding = keys.padding || 50;
        const scramblePosition = keys.scramblePosition || false;
        const findClearSpace = keys.findClearSpace || true;

        const batchSize1 = Math.floor(num / 3);
        const batchSize2 = Math.floor((num - batchSize1) / 2);
        const batchSize3 = num - batchSize1 - batchSize2;

        const batchSizes = [batchSize1, batchSize2, batchSize3].filter(size => size > 0);
        let count = 0;
        for (const batchSize of batchSizes) {
            const illusions = CreateIllusions(owner, heroToCopy as CDOTA_BaseNPC_Hero, config, batchSize, padding, scramblePosition, findClearSpace);
            count += illusions.length;

            if (keys.callback) {
                CSafelyCall(() => {
                    illusions.forEach(illusion => {
                        illusion._modifierKeys = config;
                        illusion._isStrongIllusion = keys.isStrongIllusion;
                        illusion.AddModifier(owner, null, modifier_custom_illusion, {
                            duration: -1,
                            status: config.override_status,
                        });
                        keys.callback(illusion);
                    });
                });
            }
            if (count >= num) {
                break;
            }
            await sleep(FrameTime());
        }
    }
}
@registerModifier()
export class modifier_custom_illusion extends BaseModifier {
    GetModifierConfig(): ModifierConfig {
        return {
            is_hidden: true,
            is_debuff: false,
            not_purgable: true,
            not_purgable_exception: true,
        };
    }

    illusion_status: string;
    OnCreated(params: ModifierParams & { status: ParticleList }): void {
        this.SetHasCustomTransmitterData(true);
        this.illusion_status = (params.status as string) ?? '';
    }

    AddCustomTransmitterData() {
        return {
            illusion_status: this.illusion_status,
        };
    }

    HandleCustomTransmitterData(params) {
        this.illusion_status = params['illusion_status'];
    }

    StatusEffectPriority() {
        return 10001;
    }

    GetStatusEffectName(): string {
        return this.illusion_status as string;
    }
}
