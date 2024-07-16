declare global {
    /**自定义所有modifier类 */
    enum CustomModifier {}
    type Constructor<T = {}> = new (...args: any[]) => T;
    interface CDOTA_BaseNPC extends Custom_BaseNPC_Properties {
        /**添加modifier
         * @param caster 施法者
         * @param ability 技能
         * @param ModifierClass modifier类
         * @param modifierTable modifier参数
         * @param cal_resist 是否计算抗性
         * @param immune_debuff 是否免疫debuff
         */
        AddModifier<T extends Constructor>(
            this: CDOTA_BaseNPC,
            caster: CDOTA_BaseNPC | undefined,
            ability: CDOTABaseAbility | undefined,
            ModifierClass: T,
            modifierTable: InstanceType<T> extends { OnCreated(params: infer P): any } ? ModifierParamData<P> : never,
            cal_resist?: boolean,
            ignore_immune_debuff?: boolean
        ): CDOTA_Buff;
        /**获得自定义致盲攻击丢失概率 */
        GetBlindChance(): number;
        /**获得自定义闪避概率 */
        GetEvasionChance(): number;
        /** 获得自定义必中概率  */
        GetAccuracyChance(): number;
        /**是否是敌人 */
        IsEnemy(target: CDOTA_BaseNPC): boolean;
        /**是否是有效单位 */
        IsUnit(target: CDOTA_BaseNPC): boolean;
        /** 是否是友军 */
        IsAlly(target: CDOTA_BaseNPC): boolean;
        /** 刷新护盾显示 */
        _refresh_shields(): void;
        /** 物理伤害格挡 */
        GetDamageBlocks_Physic(): CBlock_Physic[];
        /** 魔法伤害格挡 */
        GetDamageBlocks_Magic(): CBlock_Magic[];
        /**
         * @deprecated
         */
        AddNewModifier(
            caster: CDOTA_BaseNPC | undefined,
            ability: CDOTABaseAbility | undefined,
            modifierName: string,
            modifierTable: object | undefined
        ): CDOTA_Buff;
        /**
         * @deprecated
         */
        GetEvasion(): number;
    }
    //CDOTA_BaseNPC 初始化表 自定义内容
    interface Custom_BaseNPC_Properties {
        /**储存所有暴击数据和回调 */
        _crits_data_calls: CritData[];
        // 总躲避概率
        _all_evasion_chance: number;
        /**储存所有躲避数据和回调 */
        _evasion_data_calls: EvasionData[];
        // 总致盲概率
        _all_blind_chance: number;
        /**储存所有致盲数据和回调 */
        _blind_data_calls: BlindData[];
        // 总必中概率
        _all_accuracy_chance: number;
        /**储存所有必中数据和回调 */
        _accuracy_data_calls: AccuracyData[];
        /** 物理伤害格挡 */
        physic_damage_blocks: CBlock_Physic[];
        /** 魔法伤害格挡 */
        magic_damage_blocks: CBlock_Magic[];
        /**储存所有护盾数据和回调 */
        _shields_data_calls: ShieldData[];
        /**储存带有减益免疫和模块的modifier 用来处理无视减益免疫和对应魔抗的问题 */
        _debuff_immunity_magical_resistance: CDOTA_Buff[];
    }
    interface CDOTA_BaseNPC_Hero {
        _modifierKeys: CreateIllusionsModifierKeys;
    }
    interface CDOTABaseAbility {
        _SpellDispellableType: string;
        _AbilityUnitTargetFlags: string;
    }
    interface CBaseEntity {}

    interface ModifierAddedEventCustom {}

    interface CDOTA_Modifier_Lua {
        /**
         * 自定义注册函数
         */
        CustomDeclareFunctions?(): ModifierFunctions[];

        OnCreated(params: ModifierParams): void;

        // GetAbility(): CDOTABaseAbility | undefined;
    }

    interface CDOTA_Buff {}

    interface CDOTA_Item {}
    interface CAttackEvent {
        readonly attacker: CDOTA_BaseNPC;
        damage: number;
        damage_category: DamageCategory;
        inflictor?: CDOTABaseAbility;
        original_damage: number;
        ranged_attack: boolean;
        target: CDOTA_BaseNPC;
        record: number;
        fail_type: attackfail;
        // damage_type: DAMAGE_TYPES;
        // damage_flags: DOTADamageFlag_t;
        // no_attack_cooldown: boolean;
        // report_max?: boolean;
    }
    interface ModifierParams {
        duration: number;
        _ignore_debuff_immunity?: boolean;
        _origin_ability?: string;
    }
    interface ModifierHealEvent extends ModifierUnitEvent {
        gain: number;
        inflictor?: CDOTABaseAbility;
    }

    /**自定义技能 */
    const enum CustomAbility {}

    /**原生所有modifier名字 */
    const enum DotaModifier {}

    // interface CScriptParticleManager {
    //     /**
    //      * @deprecated
    //      */
    //     CreateParticle(particleName: string, particleAttach: ParticleAttachment_t, owner: CBaseEntity | undefined): ParticleID;
    // }
    /**
     * @deprecated
     */
    interface ProjectileManager {
        /**
         * @deprecated
         */
        ChangeTrackingProjectileSpeed(ability: CDOTABaseAbility, speed: number): void;
        /**
         * @deprecated
         */
        CreateLinearProjectile(options: CreateLinearProjectileOptions): ProjectileID;
        /**
         * @deprecated
         */
        CreateTrackingProjectile(options: CreateTrackingProjectileOptions): ProjectileID;
        /**
         * @deprecated
         */
        DestroyLinearProjectile(projectile: ProjectileID): void;
        /**
         * @deprecated
         */
        DestroyTrackingProjectile(projectile: ProjectileID): void;
        /**
         * @deprecated
         */
        GetLinearProjectileLocation(projectile: ProjectileID): Vector;
        /**
         * @deprecated
         */
        GetLinearProjectileRadius(projectile: ProjectileID): number;
        /**
         * @deprecated
         */
        GetLinearProjectileVelocity(projectile: ProjectileID): Vector;
        /**
         * @deprecated
         */
        GetTrackingProjectileLocation(projectile: ProjectileID): Vector;
        /**
         * @deprecated
         */
        IsValidProjectile(value: number): value is ProjectileID;
        /**
         * @deprecated
         */
        ProjectileDodge(unit: CDOTA_BaseNPC): void;
        /**
         * @deprecated
         */
        UpdateLinearProjectileDirection(projectile: ProjectileID, direction: Vector, speed: number): void;
    }

    type ModifierParamData<T> = T extends string | number
        ? T
        : T extends boolean
          ? 0 | 1
          : T extends Function
            ? undefined
            : T extends []
              ? undefined
              : T extends object
                ? {
                      [K in keyof T]: ModifierParamData<T[K]>;
                  }
                : never;
}

export {};
