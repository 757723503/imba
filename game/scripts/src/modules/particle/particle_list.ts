type ParticleList = GeneircParticleList | HeroParticleList | AvatarHeroParticleList | ItemParticleList | AvatarItemParticleList | UnitParticleList;

/** 通用特效 */
enum GeneircParticleList {
    null = '',
}

/** 英雄特效 */
print('英雄特效初始化');
enum HeroParticleList {
    /** 死亡缠绕弹道*/
    imba_abaddon_death_coil = 'particles/units/heroes/hero_abaddon/abaddon_death_coil.vpcf',
    /**无光之盾*/
    imba_abaddon_aphotic_shield = 'particles/units/heroes/hero_abaddon/abaddon_aphotic_shield.vpcf',
    /**无光之盾击中 */
    imba_abaddon_aphotic_shield_hit = 'particles/units/heroes/hero_abaddon/abaddon_aphotic_shield_hit.vpcf',
    imba_abaddon_borrowed_time = 'particles/units/heroes/hero_abaddon/abaddon_borrowed_time.vpcf',
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
