import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: 'imba_templar_assassin_refraction',
            ability_specials: [
                {
                    ability_special: 'instances',
                    text: '折光次数：',
                },
                {
                    ability_special: 'shield_per_instance',
                    text: '单层护盾数值：',
                },
                {
                    ability_special: 'bonus_damage',
                    text: '攻击力加成：',
                },
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
            ],
            name: '折光',
            description:
                '圣堂刺客变得高度难以捉摸，获得一个小型护盾，同时获得攻击力加成。攻击力加成和免伤效果相互独立，并且都是有限次数的效果。如果护盾被摧毁，只要还有能量点数就会再产生一个新的。如果单次伤害超过了剩余的护盾，所有的伤害都会被吸收。',
            lore: '通过操控她的灵能面纱，拉娜娅让自然法则为她所用。',
            notes: ['生命移除类伤害将无视折光（也不会减少折光次数）。', '伤害超过{damage_threshold}点才会被折光格挡。', '折光对敌人可见。'],
        },
        {
            ability_classname: 'imba_templar_assassin_meld',
            ability_specials: [
                {
                    ability_special: 'bonus_damage',
                    text: '额外伤害：',
                },
                {
                    ability_special: 'bonus_armor',
                    text: '护甲削弱：',
                },
            ],
            name: '隐匿',
            description:
                '圣堂刺客将自己隐藏起来，只要静止不动将一直处于隐身状态。只要在隐匿状态下攻击敌人打破隐身，拉娜娅将对敌人造成额外伤害，并降低其护甲，持续{abilityduration}秒。',
            lore: '拉娜娅本人就和她与隐之圣堂的契约一样神秘。',
            notes: ['除了停留在原地或持续施放灵能投射，其他任何动作都会打破隐匿效果。', '隐匿的护甲降低作用对防御塔无效。'],
        },
        {
            ability_classname: 'imba_templar_assassin_psi_blades',
            ability_specials: [
                {
                    ability_special: 'bonus_attack_range',
                    text: '攻击距离提升：',
                },
                {
                    ability_special: 'attack_spill_range',
                    text: '灵能之刃距离：',
                },
                {
                    ability_special: 'attack_spill_pct',
                    text: '%飞溅伤害：',
                },
                {
                    ability_special: 'spill_slow_duration',
                    text: '飞溅减速时间：',
                },
                {
                    ability_special: 'spill_movement_slow_pct',
                    text: '%飞溅减速：',
                },
            ],
            name: '灵能之刃',
            description:
                '圣堂刺客锋利的灵能之刃可以穿透敌人，对其正后方的敌方单位造成伤害，并且攻击距离得到提升。每对一个单位造成伤害后，飞溅伤害都会减少一定百分比。',
            lore: '她的灵刃刺进了他人的皮肤，也刺进了他们的心智，使她对现实这一奥秘有了更深的理解。',
            notes: ['飞溅伤害可以伤害隐身单位。', '重击等攻击特效只对主目标有效。'],
        },
        {
            ability_classname: 'imba_templar_assassin_psionic_trap',
            ability_specials: [
                {
                    ability_special: 'max_traps',
                    text: '最大陷阱数：',
                },
                {
                    ability_special: 'movement_speed_min',
                    text: '%移动速度减缓最小值：',
                },
                {
                    ability_special: 'movement_speed_max',
                    text: '%移动速度减缓最大值：',
                },
                {
                    ability_special: 'trap_bonus_damage',
                    text: '额外伤害：',
                },
                {
                    ability_special: 'min_silence_duration',
                    text: '最短沉默持续时间：',
                },
                {
                    ability_special: 'max_silence_duration',
                    text: '最长沉默持续时间：',
                },
                {
                    ability_special: 'bonus_vision',
                    text: '额外陷阱视野：',
                },
            ],
            name: '灵能陷阱',
            description:
                '圣堂刺客放下一个隐形的神秘陷阱监视敌人的动向。启动后将减缓范围内敌人的移动速度并造成小幅伤害，陷阱放置时间越久，引爆后减速效果越强，最低为{movement_speed_min}%，放置{trap_max_charge_duration}秒后引爆将达到最大减速效果，为{movement_speed_min}%，并且还能造成额外伤害。',
            lore: '召来隐之圣堂的力量后，无人能逃脱圣堂刺客的追杀。',
            shard_description: '提升最大陷阱数量和陷阱视野范围。陷阱引爆还会沉默敌人。',
            notes: [
                '陷阱没有时间限制。',
                '他们拥有隐形效果，渐隐时间为{trap_fade_time}秒，还拥有技能免疫状态。他们可以承受2次远程英雄的攻击，1次近战英雄的攻击，或4次非英雄单位的攻击。',
                '陷阱的视野是400/400，不能阻止中立生物刷新。',
            ],
        },
        {
            ability_classname: 'imba_templar_assassin_third_eye',
            ability_specials: [],
            name: '第三只眼',
            description: '圣堂刺客和她的队友可以看到肉山的复活倒计时。',
            notes: [],
        },
        {
            ability_classname: 'imba_templar_assassin_trap',
            ability_specials: [],
            name: '触发陷阱',
            description: '触发最近的陷阱，减速周围的敌人。<br><br>如果技能为多样施法状态，会触发距离鼠标指针最近的陷阱。',
            notes: [],
        },
        {
            ability_classname: 'imba_templar_assassin_trap_teleport',
            ability_specials: [],
            name: '灵能投射',
            description:
                '持续施法 - 圣堂刺客经过{abilitychanneltime}秒持续施法后可以传送至任意灵能陷阱，到达时引爆灵能陷阱，陷阱总是最大效果，并且立刻造成{extra_damage}点额外伤害。灵能投射在持续施法时不会脱离隐匿效果。',
            lore: '作为她效忠的报酬，拉娜娅得以查探秘密，使她的灵能天赋解开了新的技巧。',
            notes: [],
        },
        {
            ability_classname: 'imba_templar_assassin_self_trap',
            ability_specials: [],
            name: '触发陷阱',
            description: '触发陷阱，减速周围的敌人。',
            notes: [],
        },
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: 'special_bonus_unique_imba_templar_assassin',
                    name: '+{s:bonus_instances} 折光次数',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_templar_assassin_2',
                    name: '+{s:bonus_bonus_armor} 隐匿降低护甲',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_templar_assassin_3',
                    name: '+{s:bonus_movement_speed_min}% 灵能陷阱减速',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_templar_assassin_4',
                    name: '折光带驱散',
                    description: '对圣堂刺客施加一个弱驱散效果。',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_templar_assassin_7',
                    name: '{s:bonus_bash_duration}秒 隐匿造成击晕',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_templar_assassin_8',
                    name: '+{s:value} 灵能之刃攻击/飞溅距离',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_templar_assassin_refraction_damage',
                    name: '+{s:bonus_bonus_damage} 折光攻击力',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_templar_assassin_refraction_disable_cast',
                    name: '被控制时可施放折光',
                },
            ],
        },
    ],
    FacetArray_B: [
        {
            facet_classname: 'templar_assassin_facets_imba_1',
            name: '太虚之刃 | 折光镜',
            description: '隐匿攻击目标时还会对灵能之刃击中的所有敌人施加额外伤害和负面效果 折光在每次消耗一层护盾时获得一层攻击力。',
            related_abilities: [
                {
                    ability_classname: 'imba_templar_assassin_refraction',
                    description: '只要消耗一层护盾，圣堂刺客就会获得一层攻击力。',
                },
                {
                    ability_classname: 'imba_templar_assassin_meld',
                    description: '隐匿的额外伤害和护甲降低效果会施加给灵能之刃飞溅距离内所有敌人。',
                },
            ],
            related_talents: [],
        },
    ],
    ModifierArray: [
        {
            modifier_classname: 'modifier_imba_templar_assassin_refraction_damage',
            name: '折光 - 攻击力',
            description: '提升{MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE}点攻击力。',
        },
        {
            modifier_classname: 'modifier_imba_templar_assassin_refraction_absorb',
            name: '折光 - 伤害吸收',
            description: '吸收所有伤害。',
        },
        {
            modifier_classname: 'modifier_imba_templar_assassin_meld',
            name: '隐匿',
            description: '隐身，攻击时造成额外伤害。',
        },
        {
            modifier_classname: 'modifier_imba_templar_assassin_meld_armor',
            name: '隐匿护甲削弱',
            description: '护甲降低{MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS}点。',
        },
        {
            modifier_classname: 'modifier_imba_templar_assassin_trap_slow',
            name: '陷阱',
            description: '移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%，最多减速{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。',
        },
        {
            modifier_classname: 'modifier_imba_templar_assassin_psionic_trap_counter',
            name: '灵能陷阱数量',
            description: '灵能陷阱数量',
        },
        {
            modifier_classname: 'modifier_imba_templar_assassin_psi_blades_slow',
            name: '灵能之刃',
            description: '减速{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。',
        },
    ],
};
