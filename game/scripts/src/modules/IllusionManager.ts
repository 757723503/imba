declare global {
    var CIllusionManager: CIllusionManager;
}
declare interface CreateIllusionsModifierKeys {
    outgoing_damage?: number;
    incoming_damage?: number;
    bounty_base?: number;
    bounty_growth?: number;
    outgoing_damage_structure?: number;
    outgoing_damage_roshan?: number;
    duration?: number;
}

@reloadable
export class CIllusionManager {
    constructor() {}
    // --[[		创建幻象，tModifierKeys支持[outgoing_damage,incoming_damage,bounty_base,bounty_growth,outgoing_damage_structure,outgoing_damage_roshan]
    // ]]
    // --
    // function CDOTA_BaseNPC_Hero:CreateIllusions(hOwner, tModifierKeys, nNumIllusions, nPadding, bScramblePosition, bFindClearSpace)
    // 	local illusions = CreateIllusions(hOwner, self, tModifierKeys, nNumIllusions, nPadding, bScramblePosition, bFindClearSpace)

    // 	for i, illusion in ipairs(illusions) do
    // 		illusion:FixAbilities(self)
    // 	end

    // 	return illusions
    // end

    // _all_illusions: Map<PlayerID, CDOTA_BaseNPC_Hero[]> = new Map();
    /**
     * 创建幻象
     * @param owner 幻象拥有者
     * @param heroToCopy 幻象模板
     * @param modifierKeys 修饰器
     * @param numIllusions 幻象数量
     * @param padding 间距
     * @param scramblePosition 是否随机位置
     * @param findClearSpace 是否寻找空间
     * @returns 创建的幻象数组
     */
    CreateIllusions(
        /** 幻象拥有者 */
        owner: CDOTA_BaseNPC_Hero,
        /** 幻象模板 */
        heroToCopy: CDOTA_BaseNPC_Hero,
        /** 修饰器 */
        modifierKeys: CreateIllusionsModifierKeys,
        /** 幻象数量 */
        numIllusions: number,
        /** 间距 */
        padding: number,
        /** 是否随机位置 */
        scramblePosition: boolean,
        /** 是否寻找空间 */
        findClearSpace: boolean
    ): CDOTA_BaseNPC_Hero[] {
        const playerID = owner.GetPlayerOwnerID();
        const illusions = CreateIllusions(owner, heroToCopy, modifierKeys, numIllusions, padding, scramblePosition, findClearSpace);
        // let playerIllusions = this._all_illusions.get(playerID);
        // if (!playerIllusions) {
        //     playerIllusions = [];
        // }
        // playerIllusions.push(...illusions);
        return illusions;
    }

    // GetAllIllusions(playerID: PlayerID): CDOTA_BaseNPC_Hero[] {
    //     return this._all_illusions.get(playerID) ?? [];
    // }
}
