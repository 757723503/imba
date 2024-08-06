import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_pugna_nether_blast",
            ability_specials: [
                {
                    ability_special: "delay",
                    text: "爆轰延迟："
                },
                {
                    ability_special: "radius",
                    text: "作用范围："
                },
                {
                    ability_special: "blast_damage",
                    text: "爆轰伤害："
                }
            ],
            name: "幽冥爆轰",
            description: "一个爆炸性脉冲，对敌方单位造成伤害。对建筑物造成{structure_damage_mod}%伤害。",
            lore: "湮灭术中有一招是来自三途川的碧绿轰击。",
            notes: [
                "伤害生效延迟为{delay}秒。"
            ]
        },
        {
            ability_classname: "imba_pugna_decrepify",
            ability_specials: [
                {
                    ability_special: "bonus_heal_amp_pct_allies",
                    text: "%友军治疗增强："
                },
                {
                    ability_special: "bonus_spell_damage_pct",
                    text: "%敌方魔法伤害加深："
                },
                {
                    ability_special: "bonus_movement_speed",
                    text: "%敌方移动速度减缓："
                },
                {
                    ability_special: "AbilityDuration",
                    text: "持续时间："
                }
            ],
            name: "衰老",
            description: "一个强大的驱逐咒语，能使一个单位无法攻击/受到攻击。受作用的友军提升了治疗效果，而受作用的敌军会被减速，并且承受额外魔法伤害。",
            lore: "作为童年时期遗留下来的癖好，现在帕格纳精通于把人放逐到幽冥之境，而不管那人是善还是恶，或者仅仅是他的一时兴起。",
            notes: [
                "只有魔法伤害和纯粹伤害可以作用于处于衰老状态的单位。",
                "不会对友方单位造成减速。",
                "可以对幽冥守卫施放。"
            ]
        },
        {
            ability_classname: "imba_pugna_nether_ward",
            ability_specials: [
                {
                    ability_special: "radius",
                    text: "守卫攻击距离："
                },
                {
                    ability_special: "base_damage",
                    text: "基础伤害："
                },
                {
                    ability_special: "mana_multiplier",
                    text: "每点魔法造成伤害："
                },
                {
                    ability_special: "health_restore_pct",
                    text: "%伤害回复生命："
                },
                {
                    ability_special: "mana_restore_pct",
                    text: "%伤害回复魔法："
                },
                {
                    ability_special: "attacks_to_destroy",
                    text: "摧毁所需攻击次数："
                }
            ],
            name: "幽冥守卫",
            description: "帕格纳在目标地点放置一个幽冥守卫。守卫将对任何施法的敌方英雄发射魔力闪光。幽冥守卫造成的伤害为基础伤害加上敌方英雄施法时消耗魔法值的数倍。",
            lore: "还在喇嘛寺里时，帕格纳就学会了操控富有幽冥魔力的守卫来支配他的同学。",
            shard_description: "提升施法距离。",
            notes: [
                "技能施放后幽冥守卫先造成伤害，技能才会生效，所以如果施法者因此阵亡，施放的技能将没有效果。",
                "幽冥守卫可以受到衰老的作用。",
                "幻象和非英雄单位对幽冥守卫造成25%的伤害。"
            ]
        },
        {
            ability_classname: "imba_pugna_life_drain",
            ability_specials: [
                {
                    ability_special: "health_drain",
                    text: "每秒汲取敌人："
                },
                {
                    ability_special: "ally_healing",
                    text: "每秒友军汲取/治疗："
                }
            ],
            name: "生命汲取",
            description: "持续施法 - 使用生命汲取时，帕格纳吸取目标敌方单位的生命值，并获得其视野。如果生命值已满，而且目标是名英雄，那将开始回复魔法值。\\n\\n向队友施放可以将自己的生命值转移给队友。",
            lore: "帕格纳的力量甚至已经超越湮灭术前任的上师。",
            shard_description: "生命汲取可以对幽冥守卫施放，使生命汲取可以折射至守卫附近{abilitycastrange}范围内所有敌方英雄，造成{shard_damage_pct_from_ward}%效果。守卫被摧毁后效果将会中断。",
            scepter_description: "冷却时间减少{abilitycooldown}秒。以敌方英雄为目标时，帕格纳每秒降低他们{spell_amp_drain_rate}%技能伤害输出，最高可达到{spell_amp_drain_rate}%，并且自身的技能伤害输出提升，最高可达到{spell_amp_drain_rate}%。魔晶升级下对幽冥守卫施放时降低和提升的速率为{spell_amp_drain_rate}%。负面效果持续{spell_amp_drain_duration}秒。",
            notes: [
                "幻象在受到第一下伤害后就会被摧毁。"
            ]
        },
        {
            ability_classname: "imba_pugna_oblivion_savant",
            ability_specials: [],
            name: "湮灭专家",
            description: "帕格纳可以在持续施法期间施放技能和使用物品。",
            notes: [
                "包括需要持续施法的物品。",
                "同一时间还是只能持续施法一个技能。"
            ]
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_pugna_1",
                    name: "+{s:bonus_bonus_heal_pct}% 生命汲取回复"
                },
                {
                    talent_classname: "special_bonus_unique_imba_pugna_2",
                    name: "+{s:bonus_blast_damage} 幽冥爆轰伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_pugna_3",
                    name: "+{s:bonus_mana_multiplier} 幽冥守卫伤害系数"
                },
                {
                    talent_classname: "special_bonus_unique_imba_pugna_4",
                    name: "-{s:bonus_AbilityCooldown}秒 幽冥爆轰冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_pugna_5",
                    name: "+{s:bonus_AbilityDuration}秒 衰老持续时间"
                },
                {
                    talent_classname: "special_bonus_unique_imba_pugna_6",
                    name: "+{s:bonus_attacks_to_destroy} 幽冥守卫生命"
                },
                {
                    talent_classname: "special_bonus_unique_imba_pugna_decrepify_ally_movespeed",
                    name: "+{s:bonus_bonus_movement_speed_allies}% 衰老对友军移动速度"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "pugna_facets_imba_1",
            name: "虹吸守卫 | 毁灭之赏",
            description: "幽冥守卫会根据造成的伤害使帕格纳回复魔法和生命。 帕格纳每摧毁一座防御塔都会获得{s:bonus_tower_scale}%技能增强。",
            related_abilities: [
                {
                    ability_classname: "imba_pugna_nether_ward",
                    description: "幽冥守卫会根据造成的伤害使帕格纳回复魔法和生命。"
                }
            ],
            related_talents: []
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_pugna_oblivion_savant",
            name: "毁灭之赏",
            description: "技能伤害增强{MODIFIER_PROPERTY_SPELL_AMPLIFY_PERCENTAGE}%。"
        },
        {
            modifier_classname: "modifier_imba_pugna_decrepify",
            name: "衰老",
            description: "提升{MODIFIER_PROPERTY_HEAL_AMPLIFY_PERCENTAGE_TARGET}%治疗效果，或者移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%，并且受到的魔法伤害加深{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。"
        },
        {
            modifier_classname: "modifier_imba_pugna_nether_ward_aura",
            name: "幽冥守卫",
            description: "受到幽冥守卫影响"
        },
        {
            modifier_classname: "modifier_imba_pugna_life_drain",
            name: "生命汲取",
            description: "汲取生命。"
        },
        {
            modifier_classname: "modifier_imba_pugna_life_drain_spell_amp",
            name: "生命汲取技能伤害",
            description: "技能伤害改变{MODIFIER_PROPERTY_SPELL_AMPLIFY_PERCENTAGE}%。"
        }
    ]
};