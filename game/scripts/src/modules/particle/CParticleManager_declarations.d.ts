interface CParticleData {
    /** 名称 */
    particleName: ParticleList;
    /** 附着点 */
    particleAttach: ParticleAttachment;
    /** 拥有者 */
    owner?: CBaseEntity | undefined;
    /** 针对播放对象(玩家) */
    player?: CDOTAPlayerController;
    /** 针对播放对象(队伍) */
    team?: DotaTeam;
    /**绑定的modifier */
    modifier?: CDOTA_Buff;
    /** 自定义数据 */
    extraData?: {
        /** 持续时间(默认持续60秒) */
        duration?: number;
        /** 结束回调 */
        endCallback?: () => void;
        /** 是否立即删除 */
        immediate?: boolean;
        /** 是否检查视野 */
        CheckFoW?: boolean;
    };
}
