type ParticleList = GeneircParticleList | HeroParticleList | AvatarHeroParticleList | ItemParticleList | AvatarItemParticleList | UnitParticleList;

/** 通用特效 */
enum GeneircParticleList {
    null = '',
}

/** 英雄特效 */
print('英雄特效初始化');
enum HeroParticleList {
    // [Particles] Creating collection: particles/units/heroes/hero_abaddon/abaddon_death_cdr.vpcf
    /** 死亡缠绕弹道*/
    imba_abaddon_death_coil = 'particles/units/heroes/hero_abaddon/abaddon_death_coil.vpcf',
    /**无光之盾*/
    imba_abaddon_aphotic_shield = 'particles/units/heroes/hero_abaddon/abaddon_aphotic_shield.vpcf',
    /**无光之盾命石*/
    imba_abaddon_aphotic_shield_mist = 'particles/units/heroes/hero_abaddon/abaddon_avernal_mist.vpcf',
    /**无光之盾击中 */
    imba_abaddon_aphotic_shield_hit = 'particles/units/heroes/hero_abaddon/abaddon_aphotic_shield_hit.vpcf',
    /**无光之盾命石反弹 */
    imba_abaddon_aphotic_shield_face_hit = 'particles/units/heroes/hero_abaddon/abaddon_burning_shield.vpcf',

    imba_abaddon_withering_mist = 'particles/units/heroes/hero_abaddon/abaddon_withering_mist_debuff.vpcf',
    /** 魔霭诅咒 */
    imba_abaddon_frostmourne_debuff = 'particles/units/heroes/hero_abaddon/abaddon_curse_frostmourne_debuff.vpcf',
    /** 魔霭诅咒状态 */
    imba_abaddon_frostmourne_debuff_status = 'particles/status_fx/status_effect_abaddon_frostmourne.vpcf',
    /**回光返照击中 */
    imba_abaddon_borrowed_time = 'particles/units/heroes/hero_abaddon/abaddon_borrowed_time.vpcf',
    /**回光返照击中 */
    imba_abaddon_borrowed_time_heal = 'particles/units/heroes/hero_abaddon/abaddon_borrowed_time_heal.vpcf',
    /**回光返照状态 */
    imba_abaddon_borrowed_time_status = 'particles/status_fx/status_effect_abaddon_borrowed_time.vpcf',

    /** 法力损毁 */
    imba_antimage_mana_break = 'particles/generic_gameplay/generic_manaburn.vpcf',
    /** 法力损毁减速 */
    imba_antimage_mana_break_slow = 'particles/units/heroes/hero_antimage/antimage_manabreak_slow.vpcf',
    /**闪烁开始 */
    imba_antimage_blink = 'particles/units/heroes/hero_antimage/antimage_blink_start.vpcf',
    imba_antimage_blink_start = 'particles/units/heroes/hero_antimage/antimage_blink_start.vpcf',
    /**闪烁结束 */
    imba_antimage_blink_end = 'particles/units/heroes/hero_antimage/antimage_blink_end.vpcf',

    /** 法术反制buff */
    imba_antimage_counterspell_buff = 'particles/units/heroes/hero_antimage/antimage_counter.vpcf',
    /** 法术反制林肯效果 */
    imba_antimage_counterspell_absorb = 'particles/units/heroes/hero_antimage/antimage_spellshield.vpcf',
    /** 法术反制莲花效果 */
    imba_antimage_counterspell_reflect = 'particles/units/heroes/hero_antimage/antimage_spellshield_reflect.vpcf',

    /** 法力虚空 */
    imba_antimage_mana_void = 'particles/units/heroes/hero_antimage/antimage_manavoid.vpcf',
    /** 法力虚空施法 */
    imba_antimage_mana_void_caster = 'particles/econ/items/antimage/antimage_weapon_basher_ti5/antimage_manavoid_basher_cast.vpcf',
    /** 法力虚空buff */
    imba_antimage_mana_void_buff = 'particles/units/heroes/hero_antimage/antimage_manavoid_buff.vpcf',
}

/** 英雄饰品特效 */
enum AvatarHeroParticleList {
    null = '',
}

/** 物品特效 */
enum ItemParticleList {}

/** 物品饰品特效 */
enum AvatarItemParticleList {
    test = '',
}
/** 单位技能特效 */
enum UnitParticleList {
    roshan_slam = '',
}
