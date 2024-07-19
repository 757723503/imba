import type { Language } from './languages';

export interface AbilityLocalization {
    ability_classname: string;
    name?: string;
    description?: string;
    scepter_description?: string;
    shard_description?: string;
    lore?: string;
    notes?: Array<string>;
    reimagined_effects?: Array<ReimaginedEffect>;
    ability_specials?: Array<AbilitySpecialLocalization>;
    language_overrides?: Array<AbilityLocalizationContent>;
}

export interface AbilityLocalizationContent {
    language: Language;
    name_override?: string;
    description_override?: string;
    scepter_description_override?: string;
    shard_description_override?: string;
    lore_override?: string;
    notes_override?: Array<string>;
    reimagined_effects_override?: Array<ReimaginedEffect>;
    ability_specials_override?: Array<AbilitySpecialLocalization>;
}

export interface ModifierLocalization {
    modifier_classname: string;
    name?: string;
    description?: string;
    language_overrides?: Array<ModifierLocalizationContent>;
}

export interface ModifierLocalizationContent {
    language: Language;
    name_override?: string;
    description_override?: string;
}

export interface StandardLocalization {
    classname: string;
    name: string;
    language_overrides?: StandardLocalizationNameOverride[];
}

export interface StandardLocalizationNameOverride {
    language: Language;
    name_override: string;
}

export interface ReimaginedEffect {
    title: string;
    description: string;
}

export interface AbilitySpecialLocalization {
    ability_special: string;
    text: string;
    percentage?: boolean; // false by default if omitted
    item_stat?: boolean; // false by default if omitted
}

export interface HeroTalents {
    talent_classname: string;
    talents: Array<HeroTalentLocalization>;
}

export interface HeroTalentLocalization {
    name: string;
    description: string;
    lore: string;
    language_overrides?: Array<TalentLocalizationOverrides>;
}

export interface TalentLocalizationOverrides {
    language: Language;
    name_override?: string;
    description_override?: string;
    lore_override?: string;
}

export interface LocalizationData {
    AbilityArray?: AbilityLocalization[];
    ModifierArray?: ModifierLocalization[];
    StandardArray?: StandardLocalization[];
    TalentArray?: HeroTalents[];
    /**
     * 命石类型A(修改技能属性ability开头)
     */
    FacetArray_A?: Facet_A[]; // 新增
    /**
     * 命石类型B(修改技能属性facet开头)
     */
    FacetArray_B?: Facet_B[]; // 新增
}
/**
 * 命石类型A(修改技能属性ability开头)
 * 命石自身的名字
 */
export interface Facet_A {
    facet_classname: string;
    name: string;
    description: string;
    note0?: string;
}
/**
 * 命石类型B(修改技能属性facet开头)
 * 命石自身的名字
 */
export interface Facet_B {
    facet_classname: string;
    name: string;
    description: string;
    related_abilities?: RelatedAbility[];
    related_talents?: RelatedTalent[];
}
export interface RelatedAbility {
    ability_classname: string;
    description: string;
}

export interface RelatedTalent {
    talent_key: string;
    description: string;
}
