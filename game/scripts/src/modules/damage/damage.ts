/**
 * 造成伤害 - 新版 3.0
 * @param not_use_dmgTable 这个dmgTable不要直接使用
 */
export function CustomApplyDamage(not_use_dmgTable: DamageTable) {
    not_use_dmgTable.extra_data = not_use_dmgTable.extra_data ?? {};
    const victim = not_use_dmgTable.victim;
    const attacker = not_use_dmgTable.attacker;
    const damage_property = not_use_dmgTable.damageProperty;
    const attacker_handle = attacker.GetEntityIndex();
    const victim_handle = victim.GetEntityIndex();
    // =========================
    // 检查参数
    // =========================
    // 合法性检测函数
    if (!IsValidEntity(victim)) return;
    // =========================
    // 检查无敌 无敌直接跳过
    // =========================
    if (victim.IsInvulnerable()) return;
    // 死亡的单位 直接跳过
    // =========================
    if (!victim.IsAlive()) return;

    // 合法性检测 打印
    const flag = not_use_dmgTable.damageFlags ?? DamageFlags.None;
    not_use_dmgTable.damageFlags = flag;
    // 原始伤害结算事件
    Dispatcher.Send('DAMAGE_ORIGIN_DAMAGE_EVENT', attacker_handle, not_use_dmgTable);
    Dispatcher.Send('DAMAGE_ORIGIN_DAMAGE_EVENT', victim_handle, not_use_dmgTable);
    // 是否是斩杀 斩杀跳过一些阶段
    const is_cullingdown = (flag & DamageFlags.CullingDown) > 0;
    // 受害者是否是正常目标, 如果不是正常目标有很多逻辑不走
    const isNormalTarget = !victim.IsBuilding() && !victim.IsCourier();
    // 初始化一个伤害伤害记录table
    let record_list: string[];
    // FIXME: 不想看的时候注释这行
    // if (attacker.IsHero()) record_list = [];

    // 先创建fixed damage table
    const fixed_tb: FixedDamageTable = <FixedDamageTable>{
        attacker: attacker,
        victim: victim,
        attack_physical_damage: 0,
        ability_physical_damage: 0,
        attack_magical_damage: 0,
        ability_magical_damage: 0,
        pure_damage: 0,
        hp_remove_damage: 0,
        damageType: not_use_dmgTable.damageType,
        damageFlags: flag,
    };
    // 生命最终伤害table
    let end_dmg_tb: EndDamageTable;
    // =========================
    // 攻击伤害 第一段
    // =========================
    if (not_use_dmgTable.damageProperty == DamageProperty.Attack) {
        fixed_tb.attack_physical_damage = not_use_dmgTable.damage;
        // 暴击红字
        if ((not_use_dmgTable.damageFlags & DamageFlags.AttackCrit) > 0) {
            DamageHelper.CritFloatingText(victim, not_use_dmgTable.extra_data?.illusion_crit_show_damage ?? not_use_dmgTable.damage);
            DamageHelper.AddRecord(record_list, '本次攻击暴击');
        }
        const disable_celled = (not_use_dmgTable.damageFlags & DamageFlags.DisableCelled) > 0;
        if (attacker.IsHero()) {
            if (!disable_celled) {
                // - 攻击溅射和攻击弹射的伤害传递(只有一个物理伤害), 不能传递的伤害忽略
                Dispatcher.Send('DAMAGE_ATTACKER_BOUNCE_EVENT', victim_handle, not_use_dmgTable);
            }
            // 普通目标才走
            if (isNormalTarget) {
                // - 剑刃风暴的攻击伤害无效化(只有一个物理伤害和受害者)
                // 创建剑刃风暴无效化的参数
                const blame_tb = { victim: victim, result: false };
                // 剑刃风暴的攻击伤害无效化 只有攻击者,攻击伤害能接收
                Dispatcher.Send('DAMAGE_FIXED_ATTACKER_BLADE_STORM_ATK', attacker_handle, blame_tb);
                if (blame_tb.result == true) {
                    // 无效化本次初始伤害
                    fixed_tb.attack_physical_damage = 0;
                    DamageHelper.AddRecord(record_list, '剑刃风暴的攻击伤害无效化 触发 物理攻击伤害归零');
                }
            }
        }
        // 普通目标才走
        if (isNormalTarget && not_use_dmgTable.use_attack_effect) {
            // - 攻击特效伤害, 不会根据原伤害增加百分比, 所以只传受害者就行了, 回传增加物理和魔法攻击伤害
            // 初始化两个攻击伤害(基本只可能是物理攻击, 普通攻击, 只有atkphysical有数字)
            const atk_effct_tb: DamageFixedAttackEffectData = {
                attacker: attacker,
                victim: victim,
                addedAtkPhysicalDamage: 0,
                addedAtkMagicalDamage: 0,
                damageType: not_use_dmgTable.damageType,
                sourceAbility: not_use_dmgTable.sourceAbility,
                extra_data: not_use_dmgTable.extra_data,
            };
            // 攻击特效伤害 只有攻击者,攻击伤害能接收 物理 + 魔法, 并回传
            Dispatcher.Send('DAMAGE_FIXED_ATTACKER_ATK_DAMAGE', attacker_handle, fixed_tb);
            // 如果本次攻击伤害变为魔法 那所有的物理特效触发都转化为同数值的魔法攻击特效
            if (atk_effct_tb.damageType == DamageType.Magical) {
                fixed_tb.attack_magical_damage = fixed_tb.attack_physical_damage;
                atk_effct_tb.addedAtkMagicalDamage = atk_effct_tb.addedAtkPhysicalDamage;
                fixed_tb.attack_physical_damage = 0;
                DamageHelper.AddRecord(record_list, '攻击伤害变为魔法');
            }
            // 在此之后把添加的值加入到伤害中, 暂不额外处理
            if (atk_effct_tb.addedAtkPhysicalDamage > 0) {
                fixed_tb.attack_physical_damage += atk_effct_tb.addedAtkPhysicalDamage;
                DamageHelper.AddRecord(
                    record_list,
                    string.format(
                        '触发物理特效伤害增加 %.1f, 当前物理攻击伤害 %.1f',
                        atk_effct_tb.addedAtkPhysicalDamage,
                        fixed_tb.attack_physical_damage
                    )
                );
            }
            if (atk_effct_tb.addedAtkMagicalDamage) {
                fixed_tb.attack_magical_damage += atk_effct_tb.addedAtkMagicalDamage;
                DamageHelper.AddRecord(
                    record_list,
                    string.format(
                        '触发魔法特效伤害增加 %.1f, 当前魔法攻击伤害 %.1f',
                        atk_effct_tb.addedAtkMagicalDamage,
                        fixed_tb.attack_magical_damage
                    )
                );
            }
            fixed_tb.damageType = atk_effct_tb.damageType;
        }
    }
    // =========================
    // 攻击伤害 第二段
    // =========================
    const dmg_property = not_use_dmgTable.damageProperty;
    // 仍然是攻击 走攻击第二段
    if (dmg_property == DamageProperty.Attack) {
        DamageHelper.Calc_Attack_Second(not_use_dmgTable, fixed_tb, isNormalTarget, record_list);
        // 攒一个enddamagetable
        end_dmg_tb = <EndDamageTable>{
            attacker: attacker,
            victim: victim,
            damageFlags: fixed_tb.damageFlags,
            damageType: fixed_tb.damageType,
            true_damage: fixed_tb.attack_physical_damage + fixed_tb.attack_magical_damage + fixed_tb.pure_damage,
            damageProperty: not_use_dmgTable.damageProperty,
            sourceAbility: not_use_dmgTable.sourceAbility,
        };
    }
    // =========================
    // 技能伤害
    // =========================
    else if (dmg_property == DamageProperty.Ability) {
        switch (fixed_tb.damageType) {
            case DamageType.Physical:
                DamageHelper.Calc_Physical_Ability_Damage_1(not_use_dmgTable, fixed_tb, isNormalTarget, record_list);
                break;
            case DamageType.Magical:
                DamageHelper.Calc_Magical_Ability_Damage_1(not_use_dmgTable, fixed_tb, isNormalTarget, record_list);
                break;
            case DamageType.Pure:
                {
                    DamageHelper.Calc_Pure_Ability_Damage_1(not_use_dmgTable, fixed_tb, isNormalTarget, record_list);
                }
                break;
        }
        end_dmg_tb = <EndDamageTable>{
            attacker: attacker,
            victim: victim,
            damageFlags: fixed_tb.damageFlags,
            damageType: fixed_tb.damageType,
            true_damage: fixed_tb.ability_physical_damage + fixed_tb.ability_magical_damage + fixed_tb.pure_damage,
            damageProperty: not_use_dmgTable.damageProperty,
            sourceAbility: not_use_dmgTable.sourceAbility,
        };
        // 非斩杀才判断
        if (!is_cullingdown) {
            DamageHelper.Calc_Ability_Damage_2(end_dmg_tb, isNormalTarget, record_list);
        }
    } else {
        DebugError('DamageProperty出错');
    }
    DamageHelper.AddRecord(record_list, string.format('最终伤害:%.2f', end_dmg_tb.true_damage));
    DamageHelper.AddRecord(record_list, '⬆️⬆️⬆️本次伤害记录结束⬆️⬆️⬆️\n');
    if (record_list) {
        // 打印伤害流程触发过程
        print('⬇️⬇️⬇️打印伤害流程⬇️⬇️⬇️\n', table.concat(record_list, '\n'));
    }
    // TODO: 受到伤害显示数值
    // 单位收到伤害的后置处理（包括设置血量、吸血、判定击杀等）
    DamageHelper.OnUnitDamaged(end_dmg_tb);
}

namespace DamageHelper {
    /**
     * 攻击 第二阶段
     */
    export function Calc_Attack_Second(origin_dmg_table: DamageTable, dmgTable: FixedDamageTable, isNormalTarget: boolean, record_list: string[]) {
        const attacker = dmgTable.attacker;
        const victim = dmgTable.victim;
        const attacker_handle = attacker.GetEntityIndex();
        const attacker_is_hero = attacker.IsHero();
        const victim_handle = victim.GetEntityIndex();
        const victim_is_hero = victim.IsHero();
        const is_no_vampirism = checkTag(dmgTable.damageFlags, DamageFlags.NoLifeSteal);
        const disable_celled = (dmgTable.damageFlags & DamageFlags.DisableCelled) > 0;
        // 生命移除需要跳过一些阶段

        const is_hp_remove = checkTag(dmgTable.damageFlags, DamageFlags.HPRemove);
        // 是反射(带有不反弹标记)需要跳过一些阶段
        const is_reflect = checkTag(dmgTable.damageFlags, DamageFlags.DoNotReflect);

        // - TODO: 暂无: 强断连招的伤害施加无效化 如果这时物理和魔法攻击均为0, 则应该直接返回(?)
        // - TODO: 暂无: 炽烈火雨的攻击伤害调整
        // 生命移除不走
        if (!is_hp_remove && !is_reflect && !disable_celled) {
            // - 攻击分裂的伤害传递(只传递物理攻击伤害和受害者)
            const phy_dmg = dmgTable.attack_physical_damage;
            if (attacker_is_hero && phy_dmg > 0 && isNormalTarget) {
                // 攻击分裂的伤害传递 只有攻击者,攻击伤害能接收 只传递物理攻击伤害
                Dispatcher.Send('DAMAGE_ATTACKER_ATK_CLEAVE_EVENT', attacker_handle, dmgTable);
            }
        }
        // - 伤害共享和伤害反弹的伤害传递(只传递物理攻击伤害和攻击者)

        if (!is_hp_remove && !is_reflect && dmgTable.attack_physical_damage > 0 && isNormalTarget && dmgTable.damageFlags) {
            Dispatcher.Send('DAMAGE_VICITIM_REFLECT_SHARED_DAMAGE_EVENT', victim_handle, {
                damage: dmgTable.attack_physical_damage,
                attacker: dmgTable.attacker,
                type: dmgTable.damageType,
            });
        }
        // - 魔法护盾的伤害格挡(传入一个总伤害量(一个数字), 回传一个实际减少数字)
        if (victim_is_hero) {
            const mg_shield_tb = {
                block_pct: 0,
                origin_table: dmgTable,
            };
            // 魔法护盾的伤害格挡 只有受击者, 所有伤害能接受 包含生命移除
            Dispatcher.Send('DAMAGE_FIXED_MAGIC_SHIELD_BLOCK_PCT', victim_handle, mg_shield_tb);
            const result_pct = mg_shield_tb.block_pct;
            if (result_pct > 0) {
                const remain_value = 1 - result_pct * 0.01;
                // 给所有伤害缩减百分比
                dmgTable.attack_physical_damage *= remain_value;
                dmgTable.attack_magical_damage *= remain_value;
                DamageHelper.AddRecord(
                    record_list,
                    string.format(
                        '魔法护盾的伤害格挡 缩减比例:%.1f%%, 剩余物理攻击伤害 %.1f, 剩余魔法攻击伤害 %.1f',
                        result_pct,
                        dmgTable.attack_physical_damage,
                        dmgTable.attack_magical_damage
                    )
                );
            }
        }

        // 生命移除不走
        if (!is_hp_remove) {
            const total_magic = dmgTable.attack_magical_damage;
            if (total_magic > 0) {
                const blocked_damage = _CalDamageBlockOnMagicDamaged(total_magic, dmgTable.victim);
                // - 定值魔法伤害格挡(如果有魔法)(传入魔法伤害, 返回一个格挡魔法伤害)
                // 有返回 减少伤害
                if (blocked_damage > 0) {
                    dmgTable.attack_magical_damage = math.max(0, total_magic - blocked_damage);
                    DamageHelper.AddRecord(
                        record_list,
                        string.format('定值魔法伤害格挡 %.1f, 剩余魔法攻击伤害 %.1f', blocked_damage, dmgTable.attack_magical_damage)
                    );
                }
            }
            // - 定值物理伤害格挡(如果有物理)(传入物理伤害, 返回一个格挡物理伤害)
            const total_phy = dmgTable.attack_physical_damage;
            if (total_phy > 0) {
                const blocked_damage = _CalDamageBlockOnPhysicDamaged(dmgTable);
                // 有返回 减少伤害
                if (blocked_damage > 0) {
                    dmgTable.attack_physical_damage = math.max(0, total_phy - blocked_damage);
                    DamageHelper.AddRecord(
                        record_list,
                        string.format('定值物理伤害格挡 %.1f, 剩余物理攻击伤害 %.1f', blocked_damage, dmgTable.attack_physical_damage)
                    );
                }
            }
        }

        // - 伤害无效化(只记录flag, 结束后计算)
        const ignore_pct = {
            phy: false,
            mag: false,
            all: false,
        };
        //     - 物理伤害无效化
        if (dmgTable.attack_physical_damage > 0) {
            const ignore_pct_tb = { origin_physical: dmgTable.attack_physical_damage, ignore: false };
            // 物理伤害无效化 只有受击者
            Dispatcher.Send('DAMAGE_FIXED_VICITIM_IGNORE_PHYSICAL_DAMAGE', victim_handle, ignore_pct_tb);

            ignore_pct.phy = ignore_pct_tb.ignore;
        }
        //     魔法伤害无效化
        if (isNormalTarget && dmgTable.attack_magical_damage > 0) {
            const ignore_pct_tb = { origin_magic: dmgTable.attack_physical_damage, ignore: false };
            // 魔法伤害无效化 只有受击者
            Dispatcher.Send('DAMAGE_FIXED_VICITIM_IGNORE_MAGIC_DAMAGE', victim_handle, ignore_pct_tb);
            ignore_pct.mag = ignore_pct_tb.ignore;
        }
        //     - 全类型伤害无效化
        if ((isNormalTarget && dmgTable.attack_physical_damage > 0) || dmgTable.attack_magical_damage > 0) {
            const ignore_pct_tb = { origin_all: dmgTable.attack_physical_damage + dmgTable.attack_magical_damage, ignore: false, attacker: attacker };
            // 全类型伤害无效化 只有受击者
            Dispatcher.Send('DAMAGE_FIXED_VICITIM_IGNORE_ALL_DAMAGE', victim_handle, ignore_pct_tb);
            ignore_pct.all = ignore_pct_tb.ignore;
            if (ignore_pct_tb.ignore == true) {
                ignore_pct.phy = true;
                ignore_pct.mag = true;
            }
            if (
                !origin_dmg_table.ignoreMagicImmune &&
                origin_dmg_table.victim.IsDebuffImmune() &&
                checkTag(origin_dmg_table.damageFlags, DamageFlags.DoNotReflect)
            ) {
                DamageHelper.AddRecord(record_list, '减益免疫,免疫攻击的物理和魔法的反射伤害');
                ignore_pct.phy = true;
                ignore_pct.mag = true;
            }
        }
        // 如果物理
        if (ignore_pct.phy) {
            DamageHelper.AddRecord(record_list, '物理伤害无效化');
            dmgTable.attack_physical_damage = 0;
        }
        // 如果魔法
        if (ignore_pct.mag) {
            DamageHelper.AddRecord(record_list, '魔法伤害无效化');
            dmgTable.attack_magical_damage = 0;
        }

        // - 护甲处理数值(如果有物理)
        if (dmgTable.attack_physical_damage > 0) {
            // 先计算护甲类型穿刺\绵力\坚锐
            const defence_type_factor = PhysicalDefenceTypeFactor(origin_dmg_table.attacker, origin_dmg_table.victim);
            dmgTable.attack_physical_damage *= defence_type_factor;
            if (record_list) {
                DamageHelper.AddRecord(
                    record_list,
                    string.format('护甲缩放系数 %.2f, 剩余物理伤害 %.2f', defence_type_factor, dmgTable.attack_physical_damage)
                );
            }
            // 再计算dota护甲系数缩放
            const scale = PhysicalArmorScale(
                origin_dmg_table.victim,
                origin_dmg_table.ignoreArmor,
                origin_dmg_table.ignoreArmorPct,
                origin_dmg_table.ignoreBaseArmorPct
            );
            dmgTable.attack_physical_damage *= scale;
            DamageHelper.AddRecord(
                record_list,
                string.format(
                    '当前护甲 %.0f 护甲缩放 %.1f, 剩余物理攻击伤害 %.1f',
                    victim.GetPhysicalArmorValue(false),
                    scale,
                    dmgTable.attack_physical_damage
                )
            );
        }
        const ignore_debuff_immunity = IsIgnoreDebuffImmunity(origin_dmg_table.sourceAbility) || origin_dmg_table.ignoreMagicImmune;
        // - 魔抗处理数据(如果有魔法)
        if (dmgTable.attack_magical_damage > 0) {
            const scale = MagicalResistanceScale(victim, ignore_debuff_immunity);
            dmgTable.attack_magical_damage *= scale;
            DamageHelper.AddRecord(
                record_list,
                string.format(
                    '当前魔抗 %.2f 魔抗缩放 %.3f, 剩余魔法攻击伤害 %.3f',
                    victim.Script_GetMagicalArmorValue(false, null),
                    scale,
                    dmgTable.attack_magical_damage
                )
            );
        }
        if (!is_hp_remove) {
            // - 特殊物理伤害调整(如果有物理)(加法)
            if (dmgTable.attack_physical_damage > 0) {
                /** 特殊物理伤害调整, 只有受击者触发, 加法叠加,  add_pct为受到伤害增加 如果传入负数则为伤害减少 */
                const ignore_pct_tb = { add_pct: 0, dmgTable: dmgTable };
                Dispatcher.Send('DAMAGE_FIXED_SPEC_PHYSICAL_DAMAGE', victim_handle, ignore_pct_tb);
                if (ignore_pct_tb.add_pct != 0) {
                    dmgTable.attack_physical_damage *= 1 + ignore_pct_tb.add_pct * 0.01;
                    DamageHelper.AddRecord(
                        record_list,
                        string.format(
                            '特殊物理伤害调整, 调整比例:%.1f%%, 剩余物理攻击伤害 %.1f',
                            ignore_pct_tb.add_pct,
                            dmgTable.attack_physical_damage
                        )
                    );
                }
            }
            // 伤害护盾  单独类做 依次计算 物理攻击/魔法伤害/全类型伤害/物理伤害
            _CalShieldAbsorbOnDamaged(dmgTable);
            // - 减益免疫的魔法伤害调整(如果有魔法)(乘法叠加)
            if (!origin_dmg_table.ignoreMagicImmune && !is_hp_remove && dmgTable.attack_magical_damage > 0) {
                // TODO: 这个暂缓
            }
            // - 核心伤害调整(加法计算)(返回缩放百分比, 之后重新计算伤害table)
            {
                //     - 核心攻击伤害调整(双方触发)
                const phy_pct_tb = { scale_pct: 0, attacker: attacker, victim: victim };
                Dispatcher.Send('DAMAGE_FIXED_CORE_ATTACK_DAMAGE', attacker_handle, phy_pct_tb);
                Dispatcher.Send('DAMAGE_FIXED_CORE_ATTACK_DAMAGE', victim_handle, phy_pct_tb);
                //     - 核心全类型伤害调整(双方触发)
                const all_pct_tb = { scale_pct: 0, attacker: attacker, victim: victim };
                Dispatcher.Send('DAMAGE_FIXED_CORE_ALL_DAMAGE', attacker_handle, all_pct_tb);
                Dispatcher.Send('DAMAGE_FIXED_CORE_ALL_DAMAGE', victim_handle, all_pct_tb);
                const result_scale_pct = phy_pct_tb.scale_pct + all_pct_tb.scale_pct;
                if (result_scale_pct != 0) {
                    const result_scale = 1 + result_scale_pct * 0.01;
                    dmgTable.attack_physical_damage *= result_scale;
                    dmgTable.attack_magical_damage *= result_scale;
                    DamageHelper.AddRecord(
                        record_list,
                        string.format(
                            '核心伤害调整 缩放为%.2f, 剩余物理攻击伤害 %.1f, 剩余魔法攻击伤害 %.1f',
                            result_scale,
                            dmgTable.attack_physical_damage,
                            dmgTable.attack_magical_damage
                        )
                    );
                }
            }
        }

        if (victim_is_hero && isNormalTarget) {
            const total_dmg_2 = dmgTable.attack_physical_damage + dmgTable.attack_magical_damage;
            if (total_dmg_2 > 0) {
                // - 虚妄之诺的伤害无效化(传入原伤害table并记录, 回传true false, 如果true则把伤害归零)
                const false_promise_tb = {
                    attacker: dmgTable.attacker,
                    damage_type: dmgTable.damageType,
                    damage_flag: dmgTable.damageFlags,
                    false_promise_result: false,
                    total_dmg: total_dmg_2,
                };
                Dispatcher.Send('DAMAGE_FIXED_VICITIM_FALSE_PROMISE', victim_handle, false_promise_tb);
                if (false_promise_tb.false_promise_result == true) {
                    DamageHelper.AddRecord(record_list, '虚妄之诺的伤害无效化');
                    dmgTable.attack_physical_damage = 0;
                    dmgTable.attack_magical_damage = 0;
                }

                const total_dmg3 = dmgTable.attack_physical_damage + dmgTable.attack_magical_damage;
                if (total_dmg3 > 0) {
                    const total_dmg_tb = {
                        attacker: attacker,
                        victim: victim,
                        damage: total_dmg3,
                        damage_property: DamageProperty.Attack,
                        damage_type: dmgTable.damageType,
                        damage_flag: dmgTable.damageFlags,
                    };
                    // - 回光返照的友方伤害记录(传入原伤害table并记录)(全域触发)
                    Dispatcher.Send('DAMAGE_BORROWED_TIME_EVENT', null, total_dmg_tb);

                    // - 末端伤害格挡
                    // 同时触发时，仅数值最高者生效。
                    const end_block_tb = { total_dmg: total_dmg3, block_pct: 0 };
                    Dispatcher.Send('DAMAGE_FIXED_VICITIM_END_BLOCK', victim_handle, end_block_tb);
                    const block_pct = end_block_tb.block_pct;
                    if (block_pct > 0) {
                        dmgTable.attack_physical_damage *= 1 - block_pct * 0.01;
                        dmgTable.attack_magical_damage *= 1 - block_pct * 0.01;
                        DamageHelper.AddRecord(
                            record_list,
                            string.format(
                                '末端伤害格挡 %.1f%%, 剩余物理攻击伤害 %.1f, 剩余魔法攻击伤害 %.1f',
                                block_pct,
                                dmgTable.attack_physical_damage,
                                dmgTable.attack_magical_damage
                            )
                        );
                    }
                }
                if (!is_hp_remove) {
                    const total_dmg3 = dmgTable.attack_physical_damage + dmgTable.attack_magical_damage;
                    // - 末端伤害结算事件
                    if (total_dmg3 > 0) {
                        const end_attack_tb = {
                            attacker: attacker,
                            victim: victim,
                            damage_property: DamageProperty.Attack,
                            damage_type: dmgTable.damageType,
                            damage_flag: dmgTable.damageFlags,
                            damage: total_dmg3,
                        };
                        Dispatcher.Send('DAMAGE_END_DAMAGE_EVENT', victim_handle, end_attack_tb);
                        Dispatcher.Send('DAMAGE_END_DAMAGE_EVENT', attacker_handle, end_attack_tb);
                    }
                }
            }
        }
        // - 末端伤害传递
        if (isNormalTarget && !is_reflect) {
            const end_atk_phy_dmg = dmgTable.attack_physical_damage;
            if (end_atk_phy_dmg > 0) {
                if (attacker_is_hero) {
                    //     - 飞溅的伤害传递(物理攻击伤害)
                    Dispatcher.Send('DAMAGE_PSI_BLADE_EVENT', attacker_handle, { victim: victim, damage: end_atk_phy_dmg });
                }
                if (!is_no_vampirism) {
                    //攻击吸血的基础值传递
                    const life_total_tb = {
                        attacker: attacker,
                        victim: victim,
                        damageProperty: DamageProperty.Attack,
                        damageType: dmgTable.damageType,
                        damage_flag: dmgTable.damageFlags,
                        damage: end_atk_phy_dmg,
                        ability: origin_dmg_table.sourceAbility,
                    };
                    Dispatcher.Send('DAMAGE_LIFE_LEECH_EVENT', attacker_handle, life_total_tb);
                }
            }
        }
        // TODO: 造成伤害显示数值
        // 幻象承受伤害调整
        if (victim.IsHero() && victim.IsIllusion()) {
            const illusion_taken_dmg_scale = victim._modifierKeys.incoming_damage * 0.01;
            dmgTable.attack_physical_damage *= illusion_taken_dmg_scale;
            dmgTable.attack_magical_damage *= illusion_taken_dmg_scale;
        }
        const end_dmg = dmgTable.attack_physical_damage + dmgTable.attack_magical_damage;
        // 幻象之后的伤害结算事件 DAMAGE_AFTER_ILLUSION_DAMAGE_EVENT
        const illu_dmg_table = { attacker: attacker, victim: victim, damage: end_dmg, damage_flag: dmgTable.damageFlags };
        Dispatcher.Send('DAMAGE_AFTER_ILLUSION_DAMAGE_EVENT', attacker_handle, illu_dmg_table);
        Dispatcher.Send('DAMAGE_AFTER_ILLUSION_DAMAGE_EVENT', victim_handle, illu_dmg_table);
        // 特殊攻击溅射和特殊攻击弹射的伤害传递
        Dispatcher.Send('DAMAGE_SPECIAL_BOUNCE_ATTACK_EVENT', attacker_handle, illu_dmg_table);
    }

    /**
     * 计算物理伤害技能
     */
    export function Calc_Physical_Ability_Damage_1(
        origin_dmg_table: DamageTable,
        dmgTable: FixedDamageTable,
        isNormalTarget: boolean,
        record_list: string[]
    ) {
        const victim = dmgTable.victim;
        const victim_handle = victim.GetEntityIndex();
        const victim_is_hero = victim.IsHero();
        // 生命移除需要跳过一些阶段
        const is_hp_remove = checkTag(dmgTable.damageFlags, DamageFlags.HPRemove);
        // 可以被格挡的技能物理伤害
        const is_reflect = checkTag(dmgTable.damageFlags, DamageFlags.DoNotReflect);
        const attacker = dmgTable.attacker;
        // 是否是生命流失 如果是生命流失跳过一些阶段
        const is_hp_cost = checkTag(dmgTable.damageFlags, DamageFlags.HPCost);
        // 其他全干掉
        dmgTable.attack_physical_damage = 0;
        dmgTable.attack_magical_damage = 0;
        dmgTable.pure_damage = 0;
        dmgTable.ability_magical_damage = 0;
        // 处理伤害到技能物理伤害
        dmgTable.ability_physical_damage = origin_dmg_table.damage;
        // - TODO: 暂无: 强断连招的伤害施加无效化 如果这时物理和魔法攻击均为0, 则应该直接返回(?)
        // - 伤害共享和伤害反弹的伤害传递(只传递物理攻击伤害和攻击者)
        if (!is_hp_remove && !is_hp_cost && !is_reflect && dmgTable.ability_physical_damage > 0 && isNormalTarget) {
            Dispatcher.Send('DAMAGE_VICITIM_REFLECT_SHARED_DAMAGE_EVENT', victim_handle, {
                damage: dmgTable.ability_physical_damage,
                attacker: attacker,
                type: DamageType.Physical,
            });
        }
        // - 魔法护盾的伤害格挡(传入一个总伤害量(一个数字), 回传一个实际减少数字)
        if (victim_is_hero) {
            const mg_shield_tb = {
                block_pct: 0,
                origin_table: dmgTable,
            };
            // 魔法护盾的伤害格挡 只有受击者, 所有伤害能接受 包含生命移除
            Dispatcher.Send('DAMAGE_FIXED_MAGIC_SHIELD_BLOCK_PCT', victim_handle, mg_shield_tb);
            const result_pct = mg_shield_tb.block_pct;
            if (result_pct > 0) {
                const remain_value = 1 - result_pct * 0.01;
                // 给所有伤害缩减百分比
                dmgTable.ability_physical_damage *= remain_value;
                DamageHelper.AddRecord(
                    record_list,
                    string.format('魔法护盾的伤害格挡 缩减比例:%.1f%%, 剩余技能物理伤害 %.2f', result_pct, dmgTable.ability_physical_damage)
                );
            }
        }
        if (!is_reflect && !is_hp_remove && victim_is_hero) {
            // - 定值物理伤害格挡(如果有物理)(传入物理伤害, 返回一个格挡物理伤害)
            const total_phy = dmgTable.ability_physical_damage;
            if (total_phy > 0) {
                const blocked_damage = _CalDamageBlockOnPhysicDamaged(dmgTable);
                // 有返回 减少伤害
                if (blocked_damage > 0) {
                    dmgTable.ability_physical_damage = math.max(0, total_phy - blocked_damage);
                    DamageHelper.AddRecord(
                        record_list,
                        string.format('定值物理伤害格挡 %.1f, 剩余技能物理伤害 %.2f', blocked_damage, dmgTable.ability_physical_damage)
                    );
                }
            }
        }
        // - 伤害无效化(只记录flag, 结束后计算)
        const ignore_pct = {
            phy: false,
            all: false,
        };
        //     - 物理伤害无效化
        if (dmgTable.ability_physical_damage > 0) {
            const ignore_pct_tb = { origin_physical: dmgTable.ability_physical_damage, ignore: false };
            // 物理伤害无效化 只有受击者
            Dispatcher.Send('DAMAGE_FIXED_VICITIM_IGNORE_PHYSICAL_DAMAGE', victim_handle, ignore_pct_tb);
            ignore_pct.phy = ignore_pct_tb.ignore;
        }
        if (!ignore_pct.phy) {
            //     - 全类型伤害无效化
            if (isNormalTarget && dmgTable.ability_physical_damage > 0) {
                const ignore_pct_tb = { origin_all: dmgTable.ability_physical_damage, ignore: false, attacker: dmgTable.attacker };
                // 全类型伤害无效化 只有受击者
                Dispatcher.Send('DAMAGE_FIXED_VICITIM_IGNORE_ALL_DAMAGE', victim_handle, ignore_pct_tb);
                ignore_pct.all = ignore_pct_tb.ignore;
                if (ignore_pct_tb.ignore == true) {
                    ignore_pct.phy = true;
                }
            }
        }
        if (
            !origin_dmg_table.ignoreMagicImmune &&
            origin_dmg_table.victim.IsDebuffImmune() &&
            checkTag(origin_dmg_table.damageFlags, DamageFlags.DoNotReflect)
        ) {
            DamageHelper.AddRecord(record_list, '减益免疫,免疫技能的物理的反射伤害');
            ignore_pct.phy = true;
        }
        // 如果物理
        if (ignore_pct.phy) {
            DamageHelper.AddRecord(record_list, '物理伤害无效化');
            dmgTable.ability_physical_damage = 0;
        }

        // - 护甲处理数值(如果有物理)
        if (dmgTable.ability_physical_damage > 0) {
            const scale = PhysicalArmorScale(
                origin_dmg_table.victim,
                origin_dmg_table.ignoreArmor,
                origin_dmg_table.ignoreArmorPct,
                origin_dmg_table.ignoreBaseArmorPct
            );
            dmgTable.ability_physical_damage *= scale;
            DamageHelper.AddRecord(
                record_list,
                string.format(
                    '护甲值 %.0f, 护甲缩放 %.1f, 剩余物理技能伤害 %.2f',
                    victim.GetPhysicalArmorValue(false),
                    scale,
                    dmgTable.ability_physical_damage
                )
            );
        }
        // - 特殊物理伤害调整(如果有物理)(加法)
        if (dmgTable.ability_physical_damage > 0) {
            /** 特殊物理伤害调整, 只有受击者触发, 加法叠加,  add_pct为受到伤害增加 如果传入负数则为伤害减少 */
            const ignore_pct_tb = { add_pct: 0, dmgTable: dmgTable };
            Dispatcher.Send('DAMAGE_FIXED_SPEC_PHYSICAL_DAMAGE', victim_handle, ignore_pct_tb);
            if (ignore_pct_tb.add_pct != 0) {
                dmgTable.ability_physical_damage *= 1 + ignore_pct_tb.add_pct * 0.01;
                DamageHelper.AddRecord(
                    record_list,
                    string.format('特殊物理伤害调整, 调整比例:%.1f%%, 剩余技能物理伤害 %.2f', ignore_pct_tb.add_pct, dmgTable.ability_physical_damage)
                );
            }
        }
        // 伤害护盾  单独类做 依次计算 物理攻击/魔法伤害/全类型伤害/物理伤害
        _CalShieldAbsorbOnDamaged(dmgTable);
    }

    /**
     * 计算魔法伤害技能
     */
    export function Calc_Magical_Ability_Damage_1(
        origin_dmg_table: DamageTable,
        dmgTable: FixedDamageTable,
        isNormalTarget: boolean,
        record_list: string[]
    ) {
        const victim = dmgTable.victim;
        const victim_handle = victim.GetEntityIndex();
        const victim_is_hero = victim.IsHero();
        const ignore_debuff_immunity = IsIgnoreDebuffImmunity(origin_dmg_table.sourceAbility) || origin_dmg_table.ignoreMagicImmune;
        // 生命移除需要跳过一些阶段
        const is_hp_remove = checkTag(dmgTable.damageFlags, DamageFlags.HPRemove);
        const attacker = dmgTable.attacker;
        // 是否是生命流失 如果是生命流失跳过一些阶段
        const is_hp_cost = checkTag(dmgTable.damageFlags, DamageFlags.HPCost);
        const is_reflect = checkTag(dmgTable.damageFlags, DamageFlags.DoNotReflect);
        // 其他全干掉
        dmgTable.attack_physical_damage = 0;
        dmgTable.pure_damage = 0;
        dmgTable.ability_physical_damage = 0;
        // 处理伤害到技能魔法伤害
        if (dmgTable.attack_magical_damage > 0) {
            dmgTable.ability_magical_damage = dmgTable.attack_magical_damage;
            dmgTable.attack_magical_damage = 0;
        } else {
            dmgTable.ability_magical_damage = origin_dmg_table.damage;
        }
        // - TODO: 暂无: 强断连招的伤害施加无效化 如果这时物理和魔法攻击均为0, 则应该直接返回(?)
        if (!is_hp_remove && !is_hp_cost && !is_reflect && dmgTable.ability_magical_damage > 0 && isNormalTarget) {
            Dispatcher.Send('DAMAGE_VICITIM_REFLECT_SHARED_DAMAGE_EVENT', victim_handle, {
                damage: dmgTable.ability_magical_damage,
                attacker: attacker,
                type: DamageType.Magical,
            });
        }
        // - 魔法护盾的伤害格挡(传入一个总伤害量(一个数字), 回传一个实际减少数字)
        if (victim_is_hero) {
            const mg_shield_tb = {
                block_pct: 0,
                origin_table: dmgTable,
            };
            // 魔法护盾的伤害格挡 只有受击者, 所有伤害能接受 包含生命移除
            Dispatcher.Send('DAMAGE_FIXED_MAGIC_SHIELD_BLOCK_PCT', victim_handle, mg_shield_tb);
            const result_pct = mg_shield_tb.block_pct;
            if (result_pct > 0) {
                const remain_value = 1 - result_pct * 0.01;
                // 给所有伤害缩减百分比
                dmgTable.ability_magical_damage *= remain_value;
                DamageHelper.AddRecord(
                    record_list,
                    string.format('魔法护盾的伤害格挡 缩减比例:%.1f%%, 剩余技能魔法伤害 %.2f', result_pct, dmgTable.ability_magical_damage)
                );
            }
        }
        if (!is_hp_remove && victim_is_hero) {
            const total_magic = dmgTable.ability_magical_damage;
            if (total_magic > 0) {
                // - 定值魔法伤害格挡(如果有魔法)(传入魔法伤害, 返回一个格挡魔法伤害)
                const blocked_damage = _CalDamageBlockOnMagicDamaged(total_magic, dmgTable.victim);
                // 有返回 减少伤害
                if (blocked_damage > 0) {
                    dmgTable.ability_magical_damage = math.max(0, total_magic - blocked_damage);
                    DamageHelper.AddRecord(
                        record_list,
                        string.format('定值魔法伤害格挡 %.1f, 剩余技能魔法伤害 %.2f', blocked_damage, dmgTable.ability_magical_damage)
                    );
                }
            }
        }
        // - 伤害无效化(只记录flag, 结束后计算)
        const ignore_pct = {
            mag: false,
            all: false,
        };
        //     魔法伤害无效化
        if (isNormalTarget && dmgTable.ability_magical_damage > 0) {
            const ignore_pct_tb = { origin_magic: dmgTable.ability_magical_damage, ignore: false };
            // 魔法伤害无效化 只有受击者
            Dispatcher.Send('DAMAGE_FIXED_VICITIM_IGNORE_MAGIC_DAMAGE', victim_handle, ignore_pct_tb);
            ignore_pct.mag = ignore_pct_tb.ignore;
        }
        if (!ignore_pct.mag) {
            //     - 全类型伤害无效化
            if (isNormalTarget && dmgTable.ability_magical_damage > 0) {
                const ignore_pct_tb = { origin_all: dmgTable.ability_magical_damage, ignore: false, attacker: dmgTable.attacker };
                // 全类型伤害无效化 只有受击者
                Dispatcher.Send('DAMAGE_FIXED_VICITIM_IGNORE_ALL_DAMAGE', victim_handle, ignore_pct_tb);
                ignore_pct.all = ignore_pct_tb.ignore;
                if (ignore_pct_tb.ignore == true) {
                    ignore_pct.mag = true;
                }
            }
        }
        if (
            !origin_dmg_table.ignoreMagicImmune &&
            origin_dmg_table.victim.IsDebuffImmune() &&
            checkTag(origin_dmg_table.damageFlags, DamageFlags.DoNotReflect)
        ) {
            DamageHelper.AddRecord(record_list, '减益免疫,免疫技能的魔法的反射伤害');
            ignore_pct.mag = true;
        }
        // 如果魔法
        if (ignore_pct.mag) {
            dmgTable.ability_magical_damage = 0;
            DamageHelper.AddRecord(record_list, '魔法伤害无效化');
        }

        // - 魔抗处理数据(如果有魔法)
        if (dmgTable.ability_magical_damage > 0) {
            const scale = MagicalResistanceScale(victim, ignore_debuff_immunity);
            dmgTable.ability_magical_damage *= scale;
            DamageHelper.AddRecord(
                record_list,
                string.format(
                    '魔抗 %.2f, 魔抗缩放 %.2f, 剩余技能魔法伤害 %.2f',
                    victim.Script_GetMagicalArmorValue(false, null),
                    scale,
                    dmgTable.ability_magical_damage
                )
            );
        }
        // - 减益免疫的魔法伤害调整(如果有魔法)(乘法叠加)
        if (!origin_dmg_table.ignoreMagicImmune && !is_hp_remove && dmgTable.ability_magical_damage > 0) {
            // TODO: 这个暂缓
        }
        // 伤害护盾  单独类做 依次计算 物理攻击/魔法伤害/全类型伤害/物理伤害
        _CalShieldAbsorbOnDamaged(dmgTable);
    }

    /**
     * 计算纯粹伤害技能
     */
    export function Calc_Pure_Ability_Damage_1(
        origin_dmg_table: DamageTable,
        dmgTable: FixedDamageTable,
        isNormalTarget: boolean,
        record_list: string[]
    ) {
        const victim = dmgTable.victim;
        const victim_handle = victim.GetEntityIndex();
        const victim_is_hero = victim.IsHero();
        // 斩杀 需要跳过一些阶段
        const is_culling_down = (dmgTable.damageFlags & DamageFlags.CullingDown) > 0;
        // 是否是生命流失 如果是生命流失跳过一些阶段
        const is_hp_cost = checkTag(dmgTable.damageFlags, DamageFlags.HPCost);
        checkTag(dmgTable.damageFlags, DamageFlags.HPCost);
        const is_hp_remove = checkTag(dmgTable.damageFlags, DamageFlags.HPRemove);
        const attacker = dmgTable.attacker;
        const is_reflect = checkTag(dmgTable.damageFlags, DamageFlags.DoNotReflect);
        // 其他全干掉
        dmgTable.attack_physical_damage = 0;
        dmgTable.attack_magical_damage = 0;
        dmgTable.ability_physical_damage = 0;
        dmgTable.ability_magical_damage = 0;
        dmgTable.pure_damage = origin_dmg_table.damage;
        // 非生命流失做逻辑
        if (!is_hp_cost) {
            if (!is_culling_down) {
                // - TODO: 暂无: 强断连招的伤害施加无效化 如果这时物理和魔法攻击均为0, 则应该直接返回(?)

                if (!is_hp_remove && !is_hp_cost && !is_reflect && dmgTable.pure_damage > 0 && isNormalTarget) {
                    Dispatcher.Send('DAMAGE_VICITIM_REFLECT_SHARED_DAMAGE_EVENT', victim_handle, {
                        damage: dmgTable.pure_damage,
                        attacker: attacker,
                        type: DamageType.Pure,
                    });
                }

                // - 魔法护盾的伤害格挡(传入一个总伤害量(一个数字), 回传一个实际减少数字)
                if (victim_is_hero) {
                    const mg_shield_tb = {
                        block_pct: 0,
                        origin_table: dmgTable,
                    };
                    // 魔法护盾的伤害格挡 只有受击者, 所有伤害能接受 包含生命移除
                    Dispatcher.Send('DAMAGE_FIXED_MAGIC_SHIELD_BLOCK_PCT', victim_handle, mg_shield_tb);
                    const result_pct = mg_shield_tb.block_pct;
                    if (result_pct > 0) {
                        const remain_value = 1 - result_pct * 0.01;
                        // 给所有伤害缩减百分比
                        dmgTable.pure_damage *= remain_value;
                        DamageHelper.AddRecord(
                            record_list,
                            string.format('魔法护盾的伤害格挡 缩减比例:%.1f%%, 剩余技能纯粹伤害 %.2f', result_pct, dmgTable.pure_damage)
                        );
                    }
                }

                // - 伤害无效化(只记录flag, 结束后计算)
                const ignore_pct = {
                    pure: false,
                    all: false,
                };
                //     纯粹伤害无效化 伤害无视技能减益免疫时 不触发
                if (isNormalTarget && dmgTable.pure_damage > 0) {
                    const ignore_pct_tb = { origin_pure: dmgTable.pure_damage, ignore: false };
                    // 纯粹伤害无效化 只有受击者
                    Dispatcher.Send('DAMAGE_FIXED_VICITIM_IGNORE_PURE_DAMAGE', victim_handle, ignore_pct_tb);
                    // 减益免疫时 无视  纯粹伤害  除非是无视减益免疫
                    ignore_pct.pure = !origin_dmg_table.ignoreMagicImmune && ignore_pct_tb.ignore;
                }
                if (!ignore_pct.pure) {
                    //     - 全类型伤害无效化
                    if (isNormalTarget && dmgTable.pure_damage > 0) {
                        const ignore_pct_tb = { origin_all: dmgTable.pure_damage, ignore: false, attacker: dmgTable.attacker };
                        // 全类型伤害无效化 只有受击者
                        Dispatcher.Send('DAMAGE_FIXED_VICITIM_IGNORE_ALL_DAMAGE', victim_handle, ignore_pct_tb);
                        ignore_pct.all = ignore_pct_tb.ignore;
                        if (ignore_pct.all == true) {
                            ignore_pct.pure = true;
                        }
                    }
                }
                if (
                    !origin_dmg_table.ignoreMagicImmune &&
                    origin_dmg_table.victim.IsDebuffImmune() &&
                    checkTag(origin_dmg_table.damageFlags, DamageFlags.DoNotReflect)
                ) {
                    DamageHelper.AddRecord(record_list, '减益免疫,免疫技能纯粹的反射伤害');
                    ignore_pct.pure = true;
                }
                // 如果纯粹
                if (ignore_pct.pure) {
                    dmgTable.pure_damage = 0;
                    DamageHelper.AddRecord(record_list, '纯粹伤害无效化');
                }

                // 伤害护盾 单独类做 依次计算 物理攻击/魔法伤害/全类型伤害/物理伤害
                _CalShieldAbsorbOnDamaged(dmgTable);
            }
        }
    }

    /**
     * 技能伤害第二段
     */
    export function Calc_Ability_Damage_2(dmgTable: EndDamageTable, isNormalTarget: boolean, record_list: string[]) {
        const attacker = dmgTable.attacker;
        const victim = dmgTable.victim;
        const attacker_handle = attacker.GetEntityIndex();
        const attacker_is_hero = attacker.IsHero();
        const victim_handle = victim.GetEntityIndex();
        const victim_is_hero = victim.IsHero();
        // 生命移除需要跳过一些阶段
        const is_hp_remove = checkTag(dmgTable.damageFlags, DamageFlags.HPRemove);
        // 是反射(带有不反弹标记)需要跳过一些阶段
        const is_reflect = checkTag(dmgTable.damageFlags, DamageFlags.DoNotReflect);
        // 是否是生命流失 如果是生命流失跳过一些阶段
        const is_hp_cost = checkTag(dmgTable.damageFlags, DamageFlags.HPCost);
        // 是否不吸血
        const is_no_vampirism = checkTag(dmgTable.damageFlags, DamageFlags.NoLifeSteal);
        // - 核心伤害调整(加法计算)(返回缩放百分比, 之后重新计算伤害table)
        if (!is_hp_remove && !is_hp_cost) {
            //     - 核心技能伤害调整(只有受击者)
            const abi_pct_tb = { scale_pct: 0 };
            Dispatcher.Send('DAMAGE_FIXED_CORE_ABILITY_DAMAGE', victim_handle, abi_pct_tb);
            //     - 核心全类型伤害调整(只有受击者)
            const all_pct_tb = { scale_pct: 0, attacker: attacker, victim: victim };
            Dispatcher.Send('DAMAGE_FIXED_CORE_ALL_DAMAGE', attacker_handle, all_pct_tb);
            Dispatcher.Send('DAMAGE_FIXED_CORE_ALL_DAMAGE', victim_handle, all_pct_tb);
            const result_scale_pct = abi_pct_tb.scale_pct + all_pct_tb.scale_pct;
            if (result_scale_pct != 0) {
                const origin_dmg = dmgTable.true_damage;
                const result_scale = 1 + result_scale_pct * 0.01;
                dmgTable.true_damage *= result_scale;
                DamageHelper.AddRecord(
                    record_list,
                    string.format('之前 %.2f 核心伤害调整 缩放 %.2f, 剩余技能的税后伤害 %.2f', origin_dmg, result_scale, dmgTable.true_damage)
                );
            }
        }

        if (victim_is_hero && isNormalTarget) {
            const total_dmg = dmgTable.true_damage;
            if (total_dmg > 0) {
                if (dmgTable.true_damage > 0) {
                    // - 虚妄之诺的伤害无效化(传入原伤害table并记录, 回传true false, 如果true则把伤害归零)
                    const false_promise_tb = {
                        attacker: dmgTable.attacker,
                        damage_type: dmgTable.damageType,
                        damage_flag: dmgTable.damageFlags,
                        false_promise_result: false,
                        total_dmg: total_dmg,
                        ability: dmgTable.sourceAbility,
                    };
                    Dispatcher.Send('DAMAGE_FIXED_VICITIM_FALSE_PROMISE', victim_handle, false_promise_tb);
                    if (false_promise_tb.false_promise_result == true) {
                        DamageHelper.AddRecord(record_list, '虚妄之诺的伤害无效化');
                        dmgTable.true_damage = 0;
                    }
                }

                if (!is_hp_cost) {
                    const total_dmg2 = dmgTable.true_damage;
                    if (total_dmg2 > 0) {
                        // - 回光返照的友方伤害记录(传入原伤害table并记录)(全域触发)
                        Dispatcher.Send('DAMAGE_BORROWED_TIME_EVENT', null, {
                            attacker: attacker,
                            victim: victim,
                            damage: total_dmg2,
                            damage_property: DamageProperty.Ability,
                            damage_type: dmgTable.damageType,
                            damage_flag: dmgTable.damageFlags,
                        });

                        // - 末端伤害格挡
                        // 同时触发时，仅数值最高者生效。
                        const end_block_tb = { total_dmg: total_dmg2, block_pct: 0 };
                        Dispatcher.Send('DAMAGE_FIXED_VICITIM_END_BLOCK', victim_handle, end_block_tb);
                        const block_pct = end_block_tb.block_pct;
                        if (block_pct > 0) {
                            dmgTable.true_damage *= 1 - block_pct * 0.01;
                            DamageHelper.AddRecord(
                                record_list,
                                string.format('末端伤害格挡 格挡百分比 %.1f%%, 剩余技能真正伤害 %.2f', block_pct, dmgTable.true_damage)
                            );
                        }
                    }
                }
                if (!is_hp_remove && !is_hp_cost) {
                    const total_dmg3 = dmgTable.true_damage;
                    // - 末端伤害结算事件
                    if (total_dmg3 > 0) {
                        const end_total_tb = {
                            attacker: attacker,
                            victim: victim,
                            damage_property: DamageProperty.Ability,
                            damage_type: dmgTable.damageType,
                            damage_flag: dmgTable.damageFlags,
                            damage: total_dmg3,
                            ability: dmgTable.sourceAbility,
                        };
                        Dispatcher.Send('DAMAGE_END_DAMAGE_EVENT', victim_handle, end_total_tb);
                        Dispatcher.Send('DAMAGE_END_DAMAGE_EVENT', attacker_handle, end_total_tb);
                    }
                }
            }
        }
        // - 末端伤害传递
        if (!!is_hp_remove && !is_hp_cost && isNormalTarget) {
            const end_dmg = dmgTable.true_damage;
            if (end_dmg > 0 && !is_no_vampirism) {
                //技能吸血的基础值传递
                const life_total_tb = {
                    attacker: attacker,
                    victim: victim,
                    damageProperty: DamageProperty.Ability,
                    damageType: dmgTable.damageType,
                    damage_flag: dmgTable.damageFlags,
                    damage: end_dmg,
                    ability: dmgTable.sourceAbility,
                };
                Dispatcher.Send('DAMAGE_LIFE_LEECH_EVENT', attacker_handle, life_total_tb);
            }
        }

        // TODO: 造成伤害显示数值
        // 幻象承受伤害调整
        if (victim.IsHero() && victim.IsIllusion()) {
            const illusion_taken_dmg_scale = victim._modifierKeys.incoming_damage * 0.01;
            dmgTable.true_damage *= illusion_taken_dmg_scale;
        }
        // 幻象之后的伤害结算事件 DAMAGE_AFTER_ILLUSION_DAMAGE_EVENT
        const illu_dmg_table = {
            attacker: attacker,
            victim: victim,
            damage: dmgTable.true_damage,
            damage_flag: dmgTable.damageFlags,
            inflictor: dmgTable.sourceAbility,
        };
        Dispatcher.Send('DAMAGE_AFTER_ILLUSION_DAMAGE_EVENT', attacker_handle, illu_dmg_table);
        Dispatcher.Send('DAMAGE_AFTER_ILLUSION_DAMAGE_EVENT', victim_handle, illu_dmg_table);
    }

    /** 在计算护甲减伤前，先计算护甲类型穿刺\绵力\坚锐，这部分是和护甲穿透无关的 */
    export function PhysicalDefenceTypeFactor(attacker: CDOTA_BaseNPC, victim: CDOTA_BaseNPC): number {
        let armor_factor = 1;
        if (attacker.HasAbility('creep_piercing')) {
            if (!victim.IsHero() && !victim.HasAbility('creep_siege')) {
                // 对非英雄、非坚锐单位造成额外50%伤害
                armor_factor = 1.5;
            } else if (victim.IsHero() || victim.HasAbility('creep_siege')) {
                // 对英雄和坚锐单位造成的伤害减少50%
                armor_factor = 0.5;
            }
        }
        if (attacker.HasAbility('creep_siege')) {
            if (victim.HasAbility('creep_siege') || victim.IsBuilding()) {
                // 坚锐单位和建筑对其他坚锐单位和建筑造成额外150%伤害
                armor_factor = 2.5;
            }
        } else {
            if (victim.HasAbility('creep_siege') || victim.IsBuilding()) {
                // 英雄攻击坚锐单位和建筑的伤害降低50%
                if (attacker.IsHero()) {
                    armor_factor = 0.5;
                } else {
                    // 非英雄攻击坚锐单位和建筑的伤害降低30%
                    armor_factor = 0.7;
                }
            }
        }
        if (attacker.HasAbility('creep_irresolute')) {
            if (victim.IsHero()) {
                // 绵力单位对英雄单位造成的伤害会减少25%
                armor_factor = 0.75;
            }
        }
        return armor_factor;
    }

    /** 获得护甲缩放, 默认为1, 不变 */
    export function PhysicalArmorScale(unit: CDOTA_BaseNPC, ignoreArmor?: boolean, ignoreArmorPct?: number, ignoreBaseArmorPct?: number): number {
        // 根据护甲计算伤害变化
        let scale = 1;
        // 获得目标白甲
        let base_armor = unit.GetPhysicalArmorBaseValue();
        // 获得目标绿甲
        let green_armor = unit.GetPhysicalArmorValue(true);
        // 无视护甲的通过无视护甲量直接增减百分比
        if (ignoreArmor) {
            if (!ignoreArmorPct || !ignoreBaseArmorPct) {
                print('无视护甲属性为true时候, 未填入ignoreArmorPct ignoreBaseArmorPct');
            }
            // 如果没填百分比 默认0
            const result_ignoreArmorPct = math.max(0, math.min(100, ignoreArmorPct ?? 0));
            const result_ignoreBaseArmorPct = math.max(0, math.min(100, ignoreBaseArmorPct ?? 0 + ignoreArmorPct));
            // 计算减甲后
            base_armor = base_armor * (1 - result_ignoreBaseArmorPct);
            green_armor = green_armor * (1 - result_ignoreArmorPct);
        }

        // 计算总护甲
        // const total_armor = math.max(-20, base_armor + green_armor);
        const total_armor = base_armor + green_armor;
        if (total_armor > 0) {
            // 正数护甲减伤, 减伤逻辑
            scale = 1 / (1 + total_armor * 0.06);
        } else if (total_armor < 0) {
            scale = 1 + (1 - Math.pow(1 - 0.06, -total_armor));
        }
        return math.max(-1, math.min(1, scale));
    }
    /** 获得魔抗缩放伤害 */
    export function MagicalResistanceScale(unit: CDOTA_BaseNPC, ignoreDebuffImmune: boolean): number {
        // 获得单位的魔抗，假设已是小数形式（1代表100%）
        const magicResistPct = unit.Script_GetMagicalArmorValue(false, null);
        // 将小数形式的魔抗转换为魔法伤害乘数
        const totalMagicDamageMultiplier = 1 - magicResistPct;
        const debuffImmuneModifiers = unit._debuff_immunity_magical_resistance;
        let combinedMagicDamageMultiplier = 1;
        if (ignoreDebuffImmune && debuffImmuneModifiers.length > 0) {
            const modifiersToRemove: CDOTA_Buff[] = [];
            for (const mod of debuffImmuneModifiers) {
                if (CIsValid(mod) && mod['GetModifierMagicalResistanceBonus']) {
                    const modMagicResistPct = mod['GetModifierMagicalResistanceBonus']();
                    const modMagicDamageMultiplier = 1 - modMagicResistPct / 100;

                    if (modMagicDamageMultiplier <= 0) {
                        // 忽视100%或更高的魔抗，因为它会使乘数变为0或负数
                        print(modMagicResistPct, `忽视此魔抗：${modMagicResistPct}%`);
                        continue;
                    }
                    combinedMagicDamageMultiplier *= modMagicDamageMultiplier;
                    print(modMagicResistPct, '忽视此魔抗', mod.GetName());
                } else {
                    // 记录需要移除的modifier
                    modifiersToRemove.push(mod);
                }
            }

            // 移除不存在的modifier
            for (const modName of modifiersToRemove) {
                const index = debuffImmuneModifiers.indexOf(modName);
                if (index > -1) {
                    debuffImmuneModifiers.splice(index, 1);
                }
            }

            // 如果 combinedMagicDamageMultiplier 仍然为 1，说明没有有效的魔抗需要忽视
            if (combinedMagicDamageMultiplier === 1) {
                print('没有有效的魔抗需要忽视');
                return totalMagicDamageMultiplier;
            }

            // 计算忽视这些魔抗来源后的剩余魔法伤害乘数
            const remainingMagicDamageMultiplier = totalMagicDamageMultiplier / combinedMagicDamageMultiplier;

            // 计算最终的剩余魔抗
            const remainingMagicResist = 1 - remainingMagicDamageMultiplier;

            // 返回最终的剩余魔抗，以小数形式返回（1代表100%）
            return remainingMagicResist;
        }
        return totalMagicDamageMultiplier;
    }

    /** 暴击红字 */
    export function CritFloatingText(target: CDOTA_BaseNPC, damage: number) {
        if (damage <= 0) return;
        PopupCriticalDamage(target, damage);
    }

    /** 定值物理伤害格挡。返回格挡了的伤害 */
    function _CalDamageBlockOnPhysicDamaged(damageTable: FixedDamageTable): number {
        const { attacker, victim } = damageTable;
        // 判断格挡禁用
        if (victim.IsBlockDisabled()) return 0;
        // 同时触发时，最高的生效
        let trigger_block: CBlock_Physic;
        let block_value: number;
        // 传递的伤害表，修改了值也无效！ 这里不要用deepcopy,否则表内的对象会变成一个新的。
        const event_table: FixedDamageTable = Object.assign({}, damageTable);
        // 多个格挡来源会计算每一个，但是格挡值只取一个最高值
        if (!victim.GetDamageBlocks_Physic()) DebugWarning(' victim.GetDamageBlocks_Physic() 不存在');
        for (const block of victim.GetDamageBlocks_Physic()) {
            const chance = block.get_block_chance(event_table);
            if (Random.RollPercentage(chance, victim, 'BlockOnPhysic')) {
                const value = block.get_block_value(event_table);
                block_value = block_value ?? value;
                block_value = block_value < value ? value : block_value;
                trigger_block = block_value < value ? block : trigger_block ?? block;
            }
        }
        if (block_value) {
            if (trigger_block && trigger_block.on_block) {
                trigger_block.on_block(event_table);
            }
            return block_value;
        } else {
            return 0;
        }
    }

    /** 魔法伤害定值格挡 */
    function _CalDamageBlockOnMagicDamaged(original_damage: number, victim: CDOTA_BaseNPC): number {
        let block_value: number;
        let trigger_block: CBlock_Magic;
        for (const block of victim.GetDamageBlocks_Magic()) {
            const damage_min = block.damage_min ?? 0;
            if (original_damage < damage_min) {
                continue;
            }
            block_value = block_value ?? block.value;
            block_value = block_value < block.value ? block.value : block_value;
            trigger_block = block_value < block.value ? block : trigger_block ?? block;
        }
        if (block_value) {
            // 回调
            if (trigger_block && trigger_block.on_block) {
                trigger_block.on_block(trigger_block);
            }
            return block_value;
        } else {
            return 0;
        }
    }

    /** 能量护盾吸收伤害 */
    function _CalShieldAbsorbOnDamaged(damageTable: FixedDamageTable) {
        const { victim } = damageTable;
        if (victim._shields_data_calls.length <= 0) {
            // print('没有护盾数据返回');
            return;
        }
        // 多个同类型护盾，消耗先注册的
        const shieldDataContainer: Record<ShieldType, ShieldData[]> = {
            [ShieldType.Physic_Attack]: [],
            [ShieldType.Physic]: [],
            [ShieldType.Magic]: [],
            [ShieldType.All]: [],
        };
        const all_shields_data_calls = victim._shields_data_calls;
        all_shields_data_calls.reduce((acc, shieldData) => {
            acc[shieldData.shield_type].push(shieldData);
            return acc;
        }, shieldDataContainer);
        // 临时变量存储回调的护盾
        const callbackShields: ShieldCallBackData[] = [];
        const removeShields: ShieldCallBackData[] = [];
        /**
         * @param shields 检验的护盾
         * @param damage 传入的原始伤害
         * @returns 返回经过护盾吸收后的剩余伤害
         */
        function _on_shield(shields: ShieldData[], damage: number | undefined, damage_type: DamageType): number | undefined {
            if (!damage || damage <= 0) return damage;
            for (const shield of shields) {
                const shieldValue = shield.value ?? shield.max_value;
                if (shieldValue <= 0) {
                    continue;
                }
                const rate = shield.absorb_rate ? Math.min(Math.max(shield.absorb_rate, 1), 100) : 100;
                // 需要去吸收的伤害
                const attemptToAbsorbDamage = damage * (rate / 100);
                // 实际吸收了的伤害
                const absorbedDamage = shieldValue <= attemptToAbsorbDamage ? shieldValue : attemptToAbsorbDamage;
                // 护盾剩余
                const shieldLeftValue = shieldValue - absorbedDamage;
                // 扣除护盾值
                shield.value = shieldLeftValue;
                const callback_data: ShieldCallBackData = {
                    absorb_damage: absorbedDamage,
                    max_value: shield.max_value,
                    shield_type: shield.shield_type,
                    absorb_rate: shield.absorb_rate,
                    value: shield.value,
                    on_absorb: shield.on_absorb,
                    on_remove: shield.on_remove,
                    absorb_damage_type: damage_type,
                };
                // 记录回调和移除。移除和回调都放到最后
                if (shield.on_absorb) {
                    callbackShields.push(callback_data);
                }
                if (shield.value <= 0) {
                    removeShields.push(callback_data);
                }
                // 如果伤害未全部吸收，继续调用下一个护盾
                damage -= absorbedDamage;
                if (damage <= 0) return damage;
            }
            // 返回经过护盾吸收后的剩余伤害
            return damage;
        }
        // dota2顺序 - 物理攻击伤害护盾、魔法伤害护盾 - 全伤害护盾 - 物理伤害护盾
        damageTable.attack_physical_damage = _on_shield(
            shieldDataContainer[ShieldType.Physic_Attack],
            damageTable.attack_physical_damage,
            DamageType.Physical
        );
        damageTable.attack_physical_damage = _on_shield(
            shieldDataContainer[ShieldType.Physic],
            damageTable.attack_physical_damage,
            DamageType.Physical
        );
        damageTable.attack_physical_damage = _on_shield(shieldDataContainer[ShieldType.All], damageTable.attack_physical_damage, DamageType.Physical);
        // 魔法攻击伤害
        damageTable.attack_magical_damage = _on_shield(shieldDataContainer[ShieldType.Magic], damageTable.attack_magical_damage, DamageType.Magical);
        damageTable.attack_magical_damage = _on_shield(shieldDataContainer[ShieldType.All], damageTable.attack_magical_damage, DamageType.Magical);
        // 魔法伤害
        damageTable.ability_magical_damage = _on_shield(
            shieldDataContainer[ShieldType.Magic],
            damageTable.ability_magical_damage,
            DamageType.Magical
        );
        damageTable.ability_magical_damage = _on_shield(shieldDataContainer[ShieldType.All], damageTable.ability_magical_damage, DamageType.Magical);
        // 纯粹伤害
        damageTable.pure_damage = _on_shield(shieldDataContainer[ShieldType.All], damageTable.pure_damage, DamageType.Pure);
        // 物理伤害
        damageTable.ability_physical_damage = _on_shield(
            shieldDataContainer[ShieldType.Physic],
            damageTable.ability_physical_damage,
            DamageType.Physical
        );
        damageTable.ability_physical_damage = _on_shield(
            shieldDataContainer[ShieldType.All],
            damageTable.ability_physical_damage,
            DamageType.Physical
        );
        // 更新护盾数据到网表
        const shieldDataForNetTable: Record<string, { max_shield: string; now_shield: string }> = {
            Physic_Attack: { max_shield: '0', now_shield: '0' },
            Physic: { max_shield: '0', now_shield: '0' },
            Magic: { max_shield: '0', now_shield: '0' },
            All: { max_shield: '0', now_shield: '0' },
        };
        for (const shieldType in shieldDataContainer) {
            const shields = shieldDataContainer[shieldType];
            let maxShield = 0;
            let nowShield = 0;
            for (const shield of shields) {
                maxShield += shield.max_value;
                nowShield += shield.value ?? shield.max_value;
            }
            shieldDataForNetTable[shieldType] = {
                max_shield: maxShield.toString(),
                now_shield: nowShield.toString(),
            };
        }
        CustomNetTables.SetTableValue('custom_shield_data', tostring(victim?.GetEntityIndex()), shieldDataForNetTable);
        // 遍历完之后再回调或删除
        for (const shield of callbackShields) {
            if (shield.on_absorb) {
                shield.on_absorb(shield);
            }
        }
        for (const shield of removeShields) {
            if (shield.on_remove) {
                shield.on_remove(shield);
            }
        }
        // 清理临时变量
        callbackShields.length = 0;
        removeShields.length = 0;
        shieldDataContainer && Object.keys(shieldDataContainer).forEach(key => (shieldDataContainer[key].length = 0));
    }

    /** 吸血单位类型筛选 */
    function FilterLifeStealTarget(victim: CDOTA_BaseNPC): boolean {
        // if (victim.IsBuilding()) return false;
        // if (victim.IsWard()) return false;
        // if (victim.IsDummy()) return false;
        return true;
    }

    /** 当单位收到伤害时的后置处理。包括吸血 */
    export function OnUnitDamaged(damageTable: EndDamageTable) {
        const victim = damageTable.victim;
        const attacker = damageTable.attacker;
        const true_damage = damageTable.true_damage;
        let damage_type: DamageTypes;
        if (damageTable.damageType == DamageType.Pure) {
            damage_type = DamageTypes.PURE;
        }
        if (damageTable.damageType == DamageType.Physical) {
            damage_type = DamageTypes.PHYSICAL;
        }
        if (damageTable.damageType == DamageType.Magical) {
            damage_type = DamageTypes.MAGICAL;
        }

        // 吸血
        // if (FilterLifeStealTarget(victim)) {
        // }

        const damage_table = {
            attacker: damageTable.attacker,
            victim: damageTable.victim,
            damage: true_damage,
            damage_type: damage_type,
            ability: damageTable.victim.IsRealHero() ? damageTable.sourceAbility ?? damageTable.attacker._ability_custom_base_attack : null,
            damage_flags:
                DamageFlag.HPLOSS +
                DamageFlag.NO_SPELL_AMPLIFICATION +
                DamageFlag.NO_DAMAGE_MULTIPLIERS +
                DamageFlag.NO_SPELL_LIFESTEAL +
                DamageFlag.REFLECTION +
                DamageFlag.NO_DIRECTOR_EVENT +
                DamageFlag.IGNORES_BASE_PHYSICAL_ARMOR +
                DamageFlag.IGNORES_PHYSICAL_ARMOR +
                DamageFlag.IGNORES_MAGIC_ARMOR +
                DamageFlag.ATTACK_MODIFIER +
                DamageFlag.BYPASSES_BLOCK,
        };
        ApplyDamage(damage_table);
    }
    /** 添加record */
    export function AddRecord(list: string[], str: string) {
        if (list) {
            list.push(str);
        }
    }
    // export function OnDamageFixed_AttackEffectData(event: DamageFixedAttackEffectData, filter: (new_data: DamageFixedAttackEffectData) => void) {
    //     const new_data: DamageFixedAttackEffectData = {
    //         attacker: event.attacker,
    //         addedAtkPhysicalDamage: 0,
    //         addedAtkMagicalDamage: 0,
    //         damageType: event.damageType,
    //         sourceAbility: event.sourceAbility,
    //         victim: event.victim,
    //         extra_data: event.extra_data,
    //     };
    //     filter(new_data);
    //     // 伤害类型如果变为魔法, 则永远是魔法
    //     if (new_data.damageType == DamageType.Magical) {
    //         event.damageType = DamageType.Magical;
    //     }
    //     if (new_data.sourceAbility) {
    //         event.sourceAbility = new_data.sourceAbility;
    //     }
    //     event.addedAtkPhysicalDamage += new_data.addedAtkPhysicalDamage ?? 0;
    //     event.addedAtkMagicalDamage += new_data.addedAtkMagicalDamage ?? 0;
    // }
}
