import type { allSpecialValue } from './json/all_special_value';

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
        /**获得自定义原版饰品技能图标 */
        CGetAbilityIcon(ability_name: DotaAbility | string | HeroAbility): string;
        /**获得自定义闪避概率 */
        GetEvasionChance(): number;
        /** 获得自定义必中概率  */
        GetAccuracyChance(): number;
        /**是否是敌人 */
        IsEnemy(target: CDOTA_BaseNPC): boolean;
        /**是否是有效单位 */
        IsUnit(): boolean;

        /** 是否是友军 */
        IsAlly(target: CDOTA_BaseNPC): boolean;
        /** 刷新护盾显示 */
        _refresh_shields(): void;
        /** 物理伤害格挡 */
        GetDamageBlocks_Physic(): CBlock_Physic[];
        /** 魔法伤害格挡 */
        GetDamageBlocks_Magic(): CBlock_Magic[];
        /**自定义治疗 */
        CHeal(keys: CustomHeal): void;
        /**获得AOE增加 */
        GetAOEIncrease(): number;
        /**判断魔晶 */
        HasShard(): boolean;
        /**获得命石ID */
        CGetFaceID(): number;
        /**自定义驱散 */
        CPurge(keys: PurgeData): void;

        /**自定义释放直接调用释放技能(OnSpellStart) */
        COnSpellStart(ability_name: string, target?: CDOTA_BaseNPC, pos?: Vector): void;
        /**真实斩杀
         * @param killer 击杀者
         * @param ability 技能
         */
        CTrueKill(killer: CDOTA_BaseNPC, ability: CDOTABaseAbility): boolean;
        /** 自定义反弹技能(莲花)
         *  @param reflect_ability 技能
         *  @param reflect_target 目标
         */
        CReflectAbility(reflect_ability: CDOTABaseAbility, reflect_target: CDOTA_BaseNPC): void;
        /**触发林肯莲花 */
        // CTargetTriggerAbsorbReflect(triggerSpellType: TriggerSpellType, ability: CDOTABaseAbility): boolean;
        /**判断天赋是否生效 */
        CHasTalent(talentName: HeroTalent): boolean;
        /**是否有不会死标签 */
        CIsNeverDie(): boolean;
        /**获得自定义技能增强
         * @param ability 是否计算针对此技能增加的增强
         */
        CGetSpellAmp(ability_name?: string): number;

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
        /**
         * @deprecated
         */
        Heal(amount: number, inflictor: CDOTABaseAbility | undefined): void;
        /**
         * @deprecated
         */
        Purge(removePositiveBuffs: boolean, removeDebuffs: boolean, frameOnly: boolean, removeStuns: boolean, removeExceptions: boolean): void;
        /**
         * @deprecated
         */
        HealWithParams(amount: number, inflictor: object, lifesteal: boolean, amplify: boolean, source: object, spellLifesteal: boolean): void;
        _ability_custom_base_attack: CDOTABaseAbility;
        /**自定义 是不是强幻想 */
        CIsStrongIllusion(): boolean;
        _isStrongIllusion: boolean;
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

        /** 储存声明偷取数据 */
        _life_steal_data_calls: LifeStealData[];

        /** 储存AOE增加数据 */
        custom_aoe_increase: number;

        /**储存不死数据 */
        _never_die: number[];

        /**储存技能增强数据 */
        _spell_amp_data_calls: SpellAmpData[];

        /**储存额外造成 暴击数据 attacker */
        _extra_crits_data_calls: GoCritData[];

        /**储存额外被 暴击数据 target */
        _extra_be_crits_data_calls: BeCritData[];
    }
    interface CustomHeal {
        /**治疗量 */
        amount: number;
        /**治疗原因 */
        reason: HealReason;
        /**治疗来源技能 */
        inflictor: CDOTABaseAbility;
        /**治疗来源单位 */
        source: CDOTA_BaseNPC;
        /**显示治疗特效数字  */
        show_number?: boolean;
        /**是否读取增强 */
        amplify?: boolean;
    }
    const enum HealReason {
        /** 治疗 */
        Heal = 0,
        /** 吸血 */
        Life_Steal = 1,
        /** 技能吸血 */
        Spell_Life_Steal = 2,
    }
    const enum TriggerSpellType {
        /**只林肯 */
        ABSORB = 0,
        /**只莲花 */
        REFLECT = 2,
        /**莲花和林肯 */
        BOTH = 4,
    }
    interface CDOTA_BaseNPC_Hero {
        _modifierKeys: CreateIllusionsModifierKeys;
        /**
         * @deprecated
         */
        GetHeroFacetID(): number;
    }
    interface CDOTABaseAbility extends Custom_BaseAbility_Properties {}
    interface CBaseEntity {}

    interface ModifierAddedEventCustom {}

    interface CDOTA_Modifier_Lua {
        /**
         * 自定义注册函数
         */
        CustomDeclareFunctions?(): ModifierFunctions[];
        /**
         * 自定义modifier配置
         */
        GetModifierConfig?(): ModifierConfig;
        /**
         * 自定义modifier光环配置
         */
        GetAuraConfig?(): AuraConfig;
        OnCreated(params: ModifierParams): void;

        // GetAbility(): CDOTABaseAbility | undefined;
        /**
         * 造成的治疗 增强
         */
        GetModifierHealAmplify_PercentageSource?(): number;
        /**
         * 受到的治疗 增强
         */
        GetModifierHealAmplify_PercentageTarget?(): number;
        /**
         * 生命偷取增强
         */
        GetModifierLifestealRegenAmplify_Percentage?(): number;
        /**
         * 法术生命偷取增强
         */
        GetModifierSpellLifestealRegenAmplify_Percentage?(): number;
    }
    interface ModifierParticle {
        ParticleID: ParticleID;
        immediate: boolean;
    }
    interface CDOTA_Buff {
        /**
         * @deprecated
         */
        AddParticle(
            index: number,
            destroyImmediately: boolean,
            statusEffect: boolean,
            priority: number,
            heroEffect: boolean,
            overheadEffect: boolean
        ): void;
    }
    interface SpellStartParams {
        [key: string]: any;
    }

    interface CDOTA_Ability_Lua extends Custom_BaseAbility_Properties {}
    interface CDOTA_Item_Lua extends Custom_BaseAbility_Properties {}
    interface Custom_BaseAbility_Properties {
        OnSpellStart(keys?: SpellStartParams): void;
        /**
         * 判断减益免疫相关 技能kv标识相关
         */
        _SpellDispellableType: string;
        /**
         * 判断减益免疫相关 技能kv标识相关
         */
        _AbilityUnitTargetFlags: string;

        /**
         * 自定义获得技能kv 强类型
         */
        GetSpecialValue: <T extends AbilityNames>(abilityName: T, valueName: AbilityValues<T>) => number;
        /**
         * @deprecated
         */
        GetSpecialValueFor: (name: string) => number;

        /**是否是反弹技能 */
        IsReflectSpell(): boolean;
    }
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

    interface CScriptParticleManager {
        /**
         * @deprecated
         */
        CreateParticle(particleName: string, particleAttach: ParticleAttachment_t, owner: CBaseEntity | undefined): ParticleID;
    }
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

    interface DotaJSONAbility {
        BaseClass: string;
        ScriptFile: string;
        AbilityTextureName: string;
        AbilityBehavior: string;
        AbilityUnitTargetTeam: string;
        AbilityUnitTargetType: string[];
        SpellImmunityType: string;
        AbilityUnitDamageType: string;
        FightRecapLevel: number;
        AbilitySound: string;
        HasShardUpgrade: number;
        AbilityCastRange: string;
        AbilityCastPoint: number;
        AbilityCooldown: string;
        AbilityManaCost: number;
        AbilityValues: {
            [key: string]: number[];
        };
        AbilityCastAnimation: string;
    }

    type AbilityNames = keyof typeof allSpecialValue;
    type AbilityValues<T extends AbilityNames> = keyof (typeof allSpecialValue)[T];

    interface ModifierConfig {
        /** 是否是负面效果 默认是`false` */
        is_debuff?: boolean;
        /** 不显示buff图标（如果有的话） 默认是`false` */
        is_hidden?: boolean;
        /** 不可驱散（弱驱散） 如果配置为true，只有强驱散可以驱散buff  默认是`fasle` */
        not_purgable?: boolean;
        /** 不可驱散（强驱散） 如果配置为true，buff绝对不可驱散  默认是`fasle` */
        not_purgable_exception?: boolean;
        /** 是否可叠加 默认是`false` */
        is_multiple?: boolean;
        /** 死亡时不移除  默认是`fasle` */
        not_remove_on_death?: boolean;
        /** 生命周期结束时不移除 默认是`false` */
        not_destroy_on_expire?: boolean;
        /** 允许幻象复制 默认是`false` */
        allow_illusion_duplicate?: boolean;
    }
    interface AuraConfig {
        /** 是否是光环*/
        is_aura: boolean;
        /** 光环类型 */
        aura_radius: number;
        /** 子光环 */
        aura_modifier: string;
        /** 光环buff的黏连时间   */
        aura_buff_stiff?: number;
        /** 死亡时光环也生效 */
        active_on_death?: boolean;
        search_team: UnitTargetTeam;
        search_type: UnitTargetType;
        search_flag: UnitTargetFlags;
        /** 过滤回调 返回true ，单位不会被添加子光环 */
        aura_entity_reject?: (unit: CDOTA_BaseNPC) => boolean;
    }
    interface FindUnitsInRadiusOptions {
        team: DotaTeam;
        location: Vector;
        radius: number;
        teamFilter: UnitTargetTeam;
        typeFilter: UnitTargetType;
        flagFilter: UnitTargetFlags;
        order: FindOrder;
    }

    interface PurgeData {
        // removePositiveBuffs: boolean,
        // removeDebuffs: boolean,
        // frameOnly: boolean,
        // removeStuns: boolean,
        // removeExceptions: boolean,
        /**移除正面buff */
        removePositiveBuffs: boolean;
        /**移除负面buff */
        removeDebuffs: boolean;
        /**强驱散buff */
        removeExceptions: boolean;
    }
    const enum ModifierState {
        /** 不会死亡 */
        NEVER_TO_DIE = 999,
    }
    const enum Attachment {
        ATTACH_HITLOC = 'attach_hitloc',
        ATTACH_ATTACK_1 = 'attach_attack1',
        ATTACH_ATTACK_2 = 'attach_attack2',
        ATTACH_MOUTH = 'attach_mouth',
        ATTACH_WEAPON = 'attach_weapon',
        ATTACH_EYES_L = 'attach_eyes_l',
        ATTACH_EYES_R = 'attach_eyes_r',
    }
    // /** 通用特效 */
    // var GeneircParticleList: { [key: string]: string };
    // /** 英雄特效 */
    // var HeroParticleList: { [key: string]: string };
    // /** 英雄饰品特效 */
    // var AvatarHeroParticleList: { [key: string]: string };
    // /** 物品特效 */
    // var ItemParticleList: { [key: string]: string };
    // /** 物品饰品特效 */
    // var AvatarItemParticleList: { [key: string]: string };
    // /** 单位技能特效 */
    // var UnitParticleList: { [key: string]: string };

    // type GeneircParticleListType = keyof typeof GeneircParticleList;
    // type HeroParticleListType = keyof typeof HeroParticleList;
    // type AvatarHeroParticleListType = keyof typeof AvatarHeroParticleList;
    // type ItemParticleListType = keyof typeof ItemParticleList;
    // type AvatarItemParticleListType = keyof typeof AvatarItemParticleList;
    // type UnitParticleListType = keyof typeof UnitParticleList;

    // type ParticleList =
    //     | GeneircParticleListType
    //     | HeroParticleListType
    //     | AvatarHeroParticleListType
    //     | ItemParticleListType
    //     | AvatarItemParticleListType
    //     | UnitParticleListType;
}
export {};
