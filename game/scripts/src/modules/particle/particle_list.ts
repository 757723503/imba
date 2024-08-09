type ParticleList = GeneircParticleList | HeroParticleList | AvatarHeroParticleList | ItemParticleList | AvatarItemParticleList | UnitParticleList;

/** 通用特效 */
enum GeneircParticleList {
    null = '',
    /** 向量施法 */
    range_finder_cone = 'particles/ui_mouseactions/range_finder_cone.vpcf',
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
    /** 反击螺旋 */
    imba_axe_counter_helix1 = 'particles/units/heroes/hero_axe/axe_counterhelix.vpcf',
    imba_axe_counter_helix2 = 'particles/units/heroes/hero_axe/axe_attack_blur_counterhelix.vpcf',
    imba_axe_counter_helix3 = 'particles/units/heroes/hero_axe/axe_attack_blur.vpcf',
    /** 狂战士的怒吼目标 */
    imba_axe_beserkers_call_target = 'particles/units/heroes/hero_axe/axe_beserkers_call.vpcf',
    /** 狂战士的怒吼目标状态 */
    imba_axe_beserkers_call_target_status = 'particles/status_fx/status_effect_beserkers_call.vpcf',
    /** 战斗饥渴 */
    imba_axe_battle_hunger = 'particles/units/heroes/hero_axe/axe_battle_hunger.vpcf',
    /** 战斗饥渴状态 */
    imba_axe_battle_hunger_status = 'particles/status_fx/status_effect_battle_hunger.vpcf',
    /** 战斗饥渴buff */
    imba_axe_beserkers_call_hero_effect = 'particles/units/heroes/hero_axe/axe_beserkers_call_hero_effect.vpcf',
    /** 狂战士的怒吼 */
    imba_axe_beserkers_call_owner = 'particles/units/heroes/hero_axe/axe_beserkers_call_owner.vpcf',
    /** 一人之军 */
    imba_axe_armor = 'particles/units/heroes/hero_axe/axe_armor.vpcf',
    /**淘汰之刃 */
    imba_axe_culling_blade = 'particles/units/heroes/hero_axe/axe_culling_blade.vpcf',
    imba_axe_culling_blade_boost = 'particles/units/heroes/hero_axe/axe_culling_blade_boost.vpcf',
    imba_axe_culling_blade_hero_effect = 'particles/units/heroes/hero_axe/axe_culling_blade_hero_effect.vpcf',
    imba_axe_cullingblade_sprint = 'particles/units/heroes/hero_axe/axe_cullingblade_sprint.vpcf',
    imba_axe_cullingblade_sprint_axe = 'particles/units/heroes/hero_axe/axe_cullingblade_sprint_axe.vpcf',
    imba_axe_culling_blade_kill = 'particles/units/heroes/hero_axe/axe_culling_blade_kill.vpcf',
    imba_axe_cullingblade_sprint_creep = 'particles/units/heroes/hero_axe/axe_cullingblade_sprint_creep.vpcf',
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
