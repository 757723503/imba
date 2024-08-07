function DebugPrint(...str: any[]): void {
    if (!IsInToolsMode()) return;
    const prefix = '[Debug]';
    print(prefix, ...str);
}

function DebugWarning(...str: any[]): void {
    if (!IsInToolsMode()) return;
    const prefix = '[Debug Warning]';
    print(prefix, ...str);
}

function DebugError(...str: any[]): void {
    if (!IsInToolsMode()) return;
    const prefix = '[Debug Error]';
    print(prefix, ...str);
    assert(false, prefix);
}

/**遍历技能 */
function UnitAbilitiesForEach(unit: CDOTA_BaseNPC, callback: (ability: CDOTABaseAbility) => void): void {
    if (!CIsValid(unit)) return;
    for (let i = 0; i < DOTA_MAX_ABILITIES; i++) {
        try {
            const ability = unit.GetAbilityByIndex(i);
            if (CIsValid(ability)) {
                callback(ability);
            }
        } catch (error) {
            // 处理错误，例如记录日志或忽略
            print('Error calling GetAbilityByIndex:', error);
        }
    }
}
/**刷新类的 _开头的数据 */
function CRefreshValue(classes: CDOTABaseAbility | CDOTA_Modifier_Lua | CDOTA_Item): void {
    const all_keys = Object.keys(classes);
    all_keys.forEach(key => {
        if (key.startsWith('_') && typeof classes[key] == 'number') {
            const originalKey = key.substring(1);
            if (classes['GetSpecialValueFor']) {
                print('Refreshed:', originalKey, classes['GetSpecialValueFor'](originalKey));
                classes[key] = classes['GetSpecialValueFor'](originalKey) ?? classes[key];
            } else if (classes['GetAbility']) {
                const ability = classes['GetAbility']();
                if (ability) {
                    classes[key] = ability.GetSpecialValueFor(originalKey) ?? classes[key];
                }
            }
        }
    });
}
/**
 * 安全调用函数
 */
function CSafelyCall<T extends (...params: any[]) => any>(func: () => ReturnType<T>, error_msg?: string): ReturnType<T> | undefined {
    // 如果报错信息不明显，接触注释后再尝试复现即可
    if (IsInToolsMode()) return func();
    let result: ReturnType<T> | undefined;
    try {
        result = func();
    } catch (error) {
        DebugWarning(`\n${error_msg ? error_msg : ''} error on pcall: ${error}`);
        DebugWarning(`\n${error_msg ? error_msg : ''} error on pcall: ${error}`);
        DebugWarning(`\n${error_msg ? error_msg : ''} error on pcall: ${error}`);
        DebugWarning(`\n${error_msg ? error_msg : ''} error on pcall: ${error}`);
        DebugWarning(`\n${error_msg ? error_msg : ''} error on pcall: ${error}`);
        DebugWarning(`\n${error_msg ? error_msg : ''} error on pcall: ${error}`);
        DebugWarning(`\n${error_msg ? error_msg : ''} error on pcall: ${error}`);
        DebugWarning(`\n${error_msg ? error_msg : ''} error on pcall: ${error}`);
        DebugWarning(`\n${error_msg ? error_msg : ''} error on pcall: ${error}`);
        DebugWarning(`\n${error_msg ? error_msg : ''} error on pcall: ${error}`);
        DebugWarning(`\n${error_msg ? error_msg : ''} error on pcall: ${error}`);
        DebugWarning(`\n${error_msg ? error_msg : ''} error on pcall: ${error}`);
        DebugWarning(`\n${error_msg ? error_msg : ''} error on pcall: ${error}`);
    }
    return result;
}
/**此技能是否是无视减益免疫*/
function IsIgnoreDebuffImmunity(ability: CDOTABaseAbility): boolean {
    if (ability) {
        if (
            ability._SpellDispellableType == 'SPELL_IMMUNITY_ENEMIES_YES' ||
            ability._AbilityUnitTargetFlags == 'DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES'
        ) {
            return true;
        }
    }
    return false;
}
/**
 * 保留小数
 * @param num 数据源
 * @param decimalPlaces 保留位数
 * @returns
 */
function CRoundToDecimal(num: number, decimalPlaces: number): number {
    const multiplier = Math.pow(10, decimalPlaces);
    return (Math.round(num * multiplier) || 0) / multiplier;
}
function CDeepPrintTable(obj: any, level: number = 1, currentLevel: number = 0): void {
    const indent = ' '.repeat(currentLevel * 2);
    for (const key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null && currentLevel < level) {
            DebugPrint(`${indent}${key}(${typeof key}):`);
            CDeepPrintTable(obj[key], level, currentLevel + 1);
        } else {
            DebugPrint(`${indent}${key}(${typeof key}): ${obj[key]}(${typeof obj[key]})`);
        }
    }
}
function CDeepCopy<T>(obj: T): T {
    const result = {} as T;
    for (const k in obj) {
        const v = obj[k];
        if (typeof v == 'object') {
            result[k] = CDeepCopy(v);
        } else {
            result[k] = v;
        }
    }
    return result;
}
function CIsValid(entity: undefined | null | CDOTA_Buff | CBaseEntity): boolean {
    if (entity === null || entity === undefined) {
        return false;
    }
    if (Is_CBaseEntity(entity)) {
        return !entity.IsNull() && IsValidEntity(entity);
    } else if (Is_CDOTA_Buff(entity)) {
        return !entity.IsNull();
    }
}
function CIsAlive(entity: CDOTA_BaseNPC | undefined | null): boolean {
    return CIsValid(entity) && entity.IsAlive();
}
function CFindUnitsInRadius(keys: FindUnitsInRadiusOptions): CDOTA_BaseNPC[] {
    const allUnits = FindUnitsInRadius(
        keys.team,
        keys.location,
        undefined,
        keys.radius,
        keys.teamFilter,
        keys.typeFilter,
        keys.flagFilter,
        keys.order,
        false
    );
    return allUnits;
}

// -- 获取平面方向
// function CGetDirection2D(vEndPoint, vStartPoint,vDeDir)
//     local pos1 = vEndPoint
//     local pos2 = vStartPoint
//     if pos1.GetAbsOrigin then pos1 = vEndPoint:GetAbsOrigin() end
//     if pos2.GetAbsOrigin then pos2 = vStartPoint:GetAbsOrigin() end
//     pos1.z = 0
//     pos2.z = 0
//     local direction = (pos1 - pos2):Normalized()
// 	direction.z = 0
//     if direction == Vector(0,0,0) then
//         if vDeDir then
//             direction = vDeDir
//         else
//             direction = Vector(0,1,0)
//         end
//     end
// 	return direction
// end

function GetDirection(vEndPoint: Vector, vStartPoint: Vector): Vector {
    const pos1 = Vector(vEndPoint.x, vEndPoint.y, 0);
    const pos2 = Vector(vStartPoint.x, vStartPoint.y, 0);
    let direction = pos1.__sub(pos2).Normalized();
    if (direction.__eq(Vector(0, 0, 0))) {
        direction = Vector(0, 1, 0);
    }
    return direction;
}

function GetDirection3D(vEndPoint: Vector, vStartPoint: Vector): Vector {
    const pos1 = Vector(vEndPoint.x, vEndPoint.y, vEndPoint.z);
    const pos2 = Vector(vStartPoint.x, vStartPoint.y, vStartPoint.z);
    let direction = pos1.__sub(pos2).Normalized();
    if (direction.__eq(Vector(0, 0, 0))) {
        direction = Vector(0, 1, 0);
    }
    return direction;
}
function GetDistance(vEndPoint: Vector, vStartPoint: Vector): number {
    const pos1 = Vector(vEndPoint.x, vEndPoint.y, 0);
    const pos2 = Vector(vStartPoint.x, vStartPoint.y, 0);
    const distance = pos1.__sub(pos2).Length2D();
    return distance;
}
function GetDistance3D(vEndPoint: Vector, vStartPoint: Vector): number {
    const pos1 = Vector(vEndPoint.x, vEndPoint.y, vEndPoint.z);
    const pos2 = Vector(vStartPoint.x, vStartPoint.y, vStartPoint.z);
    const distance = pos1.__sub(pos2).Length();
    return distance;
}
function checkTag(tag: number, ...values: number[]): boolean {
    if (!tag || tag <= 0) {
        return false;
    }
    for (const value of values) {
        if (value > 0 && (tag & value) === value) {
            return true;
        }
    }
    return false;
}
function CCreateParticle(data: CParticleData): ParticleID {
    return CParticleManager.CreateParticle(data);
}
function CSetParticleControl(particle: ParticleID, controlPoint: number, value: Vector): void {
    return CParticleManager.SetParticleControl(particle, controlPoint, value);
}
function CSetParticleControlEnt(
    particle: ParticleID,
    controlPoint: number,
    unit: CBaseEntity,
    particleAttach: ParticleAttachment,
    attachment: Attachment,
    offset: Vector,
    lockOrientation: boolean
): void {
    return CParticleManager.SetParticleControlEnt(particle, controlPoint, unit, particleAttach, attachment, offset, lockOrientation);
}
function CDestroyParticle(particleID: ParticleID, immediate?: boolean, data?: CParticleData): void {
    return CParticleManager.DestroyParticle(particleID, immediate, data);
}
function CSetParticleControlTransform(fxIndex: number, point: number, origin: Vector, qAngles: QAngle, forward: Vector): void {
    return CParticleManager.SetParticleControlTransform(fxIndex, point, origin, qAngles, forward);
}
function CDeclareFunctions(...functions: ModifierFunction[]): ModifierFunction[] {
    if (globalThis.globalDeclareFunctions === undefined) {
        DebugWarning('globalDeclareFunctions is undefined');
        globalThis.globalDeclareFunctions = [];
    }
    globalThis.globalDeclareFunctions.length = 0;
    globalThis.globalDeclareFunctions.push(...functions);
    return globalThis.globalDeclareFunctions;
}
/** 睡眠函数 随后所有代码块全部延迟执行 调用前 必须加 await */
function sleep(duration: number) {
    return new Promise((resolve, reject) => {
        Timers.CreateTimer(duration, () => resolve(''));
    });
}
/** 是不是CBaseEntity */
function Is_CBaseEntity(param: any): param is CBaseEntity {
    return type(param) == 'table' && param['GetEntityIndex'] != null;
}
/** 是不是CDOTA_Buff */
function Is_CDOTA_Buff(param: any): param is CDOTA_Buff {
    return type(param) == 'table' && param['AddParticle'] != null;
}
/** 是不是CDOTA_BaseNPC */
function Is_CDOTA_BaseNPC(param: any): param is CDOTA_BaseNPC {
    return type(param) == 'table' && param['GetUnitName'] != null;
}
/** 是不是Vector */
function Is_Vector(param: any): param is Vector {
    return type(param) == 'userdata' && param['Length2D'] != null;
}
/** 是不是CDOTA_BaseNPC_Hero */
function Is_CDOTA_BaseNPC_Hero(param: any): param is CDOTA_BaseNPC_Hero {
    return type(param) == 'table' && param['GetStrength'] != null && param['GetAgility'] != null && param['GetIntellect'] != null;
}

/** 是不是BaseNpc_Building */
function Is_CDOTA_BaseNpc_Building(param: any): param is CDOTA_BaseNPC_Building {
    return type(param) == 'table' && param['GetInvulnCount'] != null && param['SetInvulnCount'] != null;
}
declare namespace math {
    /**
     * 限制数字在某个区间内。（比如0,255）
     */
    function limit(target_number: number, low_bound: number, top_bound: number): number;
}

{
    math.limit = function (target_number: number, low_bound: number, top_bound: number) {
        return math.max(math.min(target_number, top_bound), low_bound);
    };
}
// function convertModifierParamData<T>(data: T): ModifierParamData<T> {
//     if (typeof data === 'boolean') {
//         return (data ? 1 : 0) as ModifierParamData<T>;
//     } else if (typeof data === 'object' && data !== null) {
//         const result: any = Array.isArray(data) ? [] : {};
//         for (const key in data) {
//             if (data.hasOwnProperty(key)) {
//                 result[key] = convertModifierParamData((data as any)[key]);
//             }
//         }
//         return result;
//     } else {
//         return data as ModifierParamData<T>;
//     }
// }
// -- 获取距离
// function CGetDistance(ent1, ent2)
// 	local pos1 = ent1
// 	local pos2 = ent2
// 	if ent1.GetAbsOrigin then pos1 = ent1:GetAbsOrigin() end
// 	if ent2.GetAbsOrigin then pos2 = ent2:GetAbsOrigin() end
// 	local distance = (pos1 - pos2):Length2D()
// 	return distance
// end
// -- 字符串转向量
// function CStringToVector(sString)
//     if type(sString) ~= "userdata" then
//         local temp = {}
//         for str in string.gmatch(sString, "%S+") do
//             if tonumber(str) then
//                 temp[#temp + 1] = tonumber(str)
//             else
//                 return nil
//             end
//         end
//         return Vector(temp[1], temp[2], temp[3])
//     elseif type(sString) == "userdata" then
//         local vect = Vector(sString.x, sString.y, sString.z)
//         local temp = sString.x .." ".. sString.y .." ".. sString.z
//         return temp
//     end
// end
// -- xx范围圈之外搜索单位
// function CFindUnitsInRing(teamNumber, position, cacheUnit, ring_radius, ring_width, teamFilter, typeFilter, flagFilter, order, canGrowCache)
// 	local all_units	= FindUnitsInRadius(teamNumber, position, cacheUnit, ring_radius, teamFilter, typeFilter, flagFilter, order, canGrowCache)
// 	local outer_ring_units	=	{}
// 	for _,unit in pairs(all_units) do
// 		if CGetDistance(unit:GetAbsOrigin(), position) >= ring_radius - ring_width then
// 			table.insert(outer_ring_units, unit)
// 		end
// 	end
// 	return outer_ring_units
// end
// -- 寻找某方向圆锥范围单位
// function CFindUnitsInCone(teamNumber, vDirection, vPosition, startRadius, endRadius, flLength, hCacheUnit, targetTeam, targetUnit, targetFlags, findOrder, bCache)
//     local circle_r = math.sqrt(math.pow(endRadius / 2, 2) + math.pow(flLength, 2))
//     local vDirectionCone = Vector(vDirection.y, -vDirection.x, 0.0)
//     local enemies = FindUnitsInRadius(teamNumber, vPosition, hCacheUnit, circle_r, targetTeam, targetUnit, targetFlags,
//     findOrder, bCache)
//     local unitTable = {}
//     if #enemies > 0 then
//         local start_radius_plus_max_increase = startRadius +
//         (endRadius - startRadius) * (1 - flLength / (flLength + circle_r))
//         local vPos = vPosition
//         local vDir = vDirection
//         for _, enemy in pairs(enemies) do
//             if enemy ~= nil then
//                 local vToPotentialTarget = enemy:GetOrigin() - vPos
//                 local flSideAmount = math.abs(vToPotentialTarget.x * vDirectionCone.x +
//                 vToPotentialTarget.y * vDirectionCone.y + vToPotentialTarget.z * vDirectionCone.z)
//                 local enemy_distance_from_caster = (vToPotentialTarget.x * vDir.x + vToPotentialTarget.y * vDir.y + vToPotentialTarget.z * vDir.z)
//                 local radius_increase_from_distance = (endRadius - startRadius) * enemy_distance_from_caster / flLength
//                 if (flSideAmount < start_radius_plus_max_increase + radius_increase_from_distance) and (enemy_distance_from_caster > 0.0) and (enemy_distance_from_caster < flLength) then
//                     unitTable[#unitTable + 1] = enemy
//                 end
//             end
//         end
//     end
//     return unitTable
// end
