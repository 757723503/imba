import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: 'imba_lone_druid_gift_bearer',
            ability_specials: [],
            name: '英熊好礼',
            description: '独行德鲁伊可以使每级中立代币重新选择一次。',
            notes: [],
        },
        {
            ability_classname: 'imba_lone_druid_bear_necessities',
            ability_specials: [
                {
                    ability_special: 'bonus_stat_percent',
                    text: '%属性加成：',
                },
            ],
            name: '熊亦求精',
            description:
                '独行德鲁伊只能使用他物品栏的前{item_slots}个物品。这些物品的被动加成更加强大。其他物品栏不会提供任何加成。中立物品栏位不受影响。',
            notes: ['下列属性可以提升：<br>* 力量、敏捷和智力<br>* 生命、魔法和闪避<br>* 攻击速度和攻击力加成<br>* 生命和魔法恢复'],
        },
        {
            ability_classname: 'imba_lone_druid_spirit_bear',
            ability_specials: [
                {
                    ability_special: 'bear_hp',
                    text: '熊灵生命值：',
                },
                {
                    ability_special: 'bear_regen_tooltip',
                    text: '熊灵每秒生命恢复：',
                },
                {
                    ability_special: 'bear_bat',
                    text: '熊灵基础攻击间隔：',
                },
                {
                    ability_special: 'bear_armor',
                    text: '熊灵护甲：',
                },
                {
                    ability_special: 'bear_movespeed',
                    text: '熊灵移动速度：',
                },
            ],
            name: '熊灵伙伴',
            description:
                '召唤一只可以装备物品的熊灵伙伴。携带的中立物品会直接复制独行德鲁伊的中立物品，并且共享冷却时间。<br><br>若熊灵与独行德鲁伊的距离超过{bear_attack_leash_range}，则不能攻击。如果熊灵死亡，独行德鲁伊会受到自身最大生命值的{backlash_damage}%作为反冲伤害。\\n熊灵拥有回归、粉碎击和缠绕之爪技能。',
            lore: '悉拉终生的伙伴与他的魂和心共生，在他需要时随时前来相助。',
            notes: [
                '熊灵受到的大多数技能效果与英雄相同。',
                '熊灵的基础属性为0，并且升级时不会获得属性。熊灵装备的物品或享受的加成效果拥有的属性对熊灵的加成效果与全才英雄类似。',
                '熊灵无法获得经验。随着独行德鲁伊升级，熊灵相应地提升90点生命值和5点攻击力。',
                '熊灵拥有自己的阿哈利姆神杖和魔晶升级效果。',
            ],
        },
        {
            ability_classname: 'imba_lone_druid_rabid',
            ability_specials: [
                {
                    ability_special: 'bonus_attack_speed',
                    text: '攻击速度提升：',
                },
                {
                    ability_special: 'bonus_move_speed',
                    text: '%移动速度提升：',
                },
                {
                    ability_special: 'rabid_duration',
                    text: '持续时间：',
                },
            ],
            name: '狂猛',
            description: '提升独行德鲁伊和熊灵的攻击速度和移动速度。',
            lore: '熊通常不被认为是灵巧的生物，但实际上它们移动迅速，尤其是发怒之时。',
            notes: [],
        },
        {
            ability_classname: 'imba_lone_druid_spirit_link',
            ability_specials: [
                {
                    ability_special: 'bonus_attack_speed',
                    text: '攻击速度加成：',
                },
                {
                    ability_special: 'lifesteal_percent',
                    text: '%吸血分享：',
                },
                {
                    ability_special: 'armor_sharing',
                    text: '%护甲共享：',
                },
            ],
            name: '灵魂链接',
            description: '连接独行德鲁伊和熊灵，提升双方的攻击速度，另外双方共享一定百分比的护甲和吸血效果。',
            lore: '悉拉在他伙伴身旁倍感鼓舞，熊灵每次挥爪都让他的生命力得到补充。',
            scepter_description:
                '独行德鲁伊切断与熊灵的链接，并与目标友方英雄建立链接，与他们共享灵魂链接的加成效果，持续{duration}秒。护甲共享和攻击速度加成的效果均提升{active_bonus}%。友军造成的伤害会治疗独行德鲁伊，反之亦然。<br><br>熊灵在变形期间会被恐惧，除非熊灵也拥有阿哈利姆神杖。',
            notes: ['破坏会使共享吸血效果失效。'],
        },
        {
            ability_classname: 'imba_lone_druid_savage_roar',
            ability_specials: [
                {
                    ability_special: 'radius',
                    text: '作用范围：',
                },
                {
                    ability_special: 'bonus_speed',
                    text: '%敌军移动速度加成：',
                },
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'shard_radius',
                    text: '作用范围：',
                },
                {
                    ability_special: 'shard_movement_speed_pct',
                    text: '%移动速度加成：',
                },
                {
                    ability_special: 'shard_attack_speed',
                    text: '攻击速度提升：',
                },
                {
                    ability_special: 'shard_duration',
                    text: '持续时间：',
                },
            ],
            name: '野蛮咆哮',
            description: '独行德鲁伊和熊灵发出野性的咆哮，吓得周围敌人朝自己的基地狂奔。敌人的移动速度将增加{bonus_speed}%。',
            lore: '悉拉研习并精通失落的熊族技艺，他的行动也因此与自然高度协调。',
            shard_description:
                '施加弱驱散效果，并对施法者附近范围内友军提供移动速度和攻击速度加成。施法效果会在独行德鲁伊和熊灵之间复制，不论双方是否可以施法。<br><br>驱散类型：弱驱散',
            notes: ['被缠绕的英雄将无法移动。', '与熊灵共享冷却时间。'],
        },
        {
            ability_classname: 'imba_lone_druid_savage_roar_bear',
            ability_specials: [
                {
                    ability_special: 'radius',
                    text: '作用范围：',
                },
                {
                    ability_special: 'bonus_speed',
                    text: '%敌军移动速度加成：',
                },
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
            ],
            name: '野蛮咆哮',
            description: '独行德鲁伊和熊灵发出野性的咆哮，吓得周围敌人朝自己的基地狂奔。敌人的移动速度将增加{bonus_speed}%。',
            notes: ['被缠绕的英雄将无法移动。', '与独行德鲁伊共享冷却时间。'],
        },
        {
            ability_classname: 'imba_lone_druid_true_form',
            ability_specials: [
                {
                    ability_special: 'bonus_armor',
                    text: '护甲提升：',
                },
                {
                    ability_special: 'bonus_hp',
                    text: '生命上限加成：',
                },
                {
                    ability_special: 'attack_speed_pct',
                    text: '%攻击速度加成：',
                },
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'transformation_time',
                    text: '变形所需时间：',
                },
            ],
            name: '真熊形态',
            description: '独行德鲁伊将自己的形态变换为狂怒的熊，攻击和防御能力都得到增强。',
            lore: '强大的熊是森林之王，它们单纯地依靠力量就获得了这一位置。',
            notes: ['近战或远程物品的冷却时间不同时将根据独行德鲁伊在使用物品时处于远程或近战形态而定。'],
        },
        {
            ability_classname: 'imba_lone_druid_true_form_druid',
            ability_specials: [
                {
                    ability_special: 'transformation_time',
                    text: '变形时间：',
                },
            ],
            name: '人形态',
            description: '切换成德鲁伊形态。',
            notes: [],
        },
        {
            ability_classname: 'imba_lone_druid_true_form_battle_cry',
            ability_specials: [
                {
                    ability_special: 'bonus_damage',
                    text: '攻击力加成：',
                },
                {
                    ability_special: 'bonus_armor',
                    text: '护甲提升：',
                },
                {
                    ability_special: 'cry_duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'range',
                    text: '作用范围：',
                },
            ],
            name: '战斗嚎叫',
            description: '提升独行德鲁伊和附近受其控制单位的攻击力和护甲。',
            lore: '当悉拉在森林中怒吼，在很远的地方也能听到他声音的回响。',
            notes: [],
        },
        {
            ability_classname: 'imba_lone_druid_spirit_bear_return',
            ability_specials: [],
            name: '回归',
            description: '经过{channel_tooltip}秒持续施法后熊灵传送回独行德鲁伊身边。',
            scepter_description: '允许熊灵伙伴无视独行德鲁伊位置进行攻击，并且在独行德鲁伊死亡时不会消失。',
            notes: [],
        },
        {
            ability_classname: 'imba_lone_druid_spirit_bear_entangle',
            ability_specials: [
                {
                    ability_special: 'damage',
                    text: '每秒伤害：',
                },
                {
                    ability_special: 'entangle_chance',
                    text: '%熊灵缠绕之爪几率：',
                },
                {
                    ability_special: 'hero_duration',
                    text: '对英雄缠绕时间：',
                },
                {
                    ability_special: 'hero_entangle_chance',
                    text: '%真熊形态缠绕之爪几率：',
                },
            ],
            name: '缠绕之爪',
            description: '攻击时有一定概率从地上生出根须缠绕住敌方单位，使其无法移动并持续造成伤害。',
            notes: ['被缠绕的单位将无法使用闪烁类技能，如果进入隐身状态也会显形。'],
        },
        {
            ability_classname: 'imba_lone_druid_entangling_claws',
            ability_specials: [
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'attack_amp',
                    text: '%攻击伤害增强：',
                },
            ],
            name: '缠绕之爪',
            description: '攻击时有一定概率从地上生出根须缠绕住敌方单位，使其无法移动，并且受到物理攻击时承受更多伤害。敌人被缠绕时依然可以攻击。',
            notes: [],
        },
        {
            ability_classname: 'imba_lone_druid_spirit_bear_defender',
            ability_specials: [],
            name: '护卫',
            description: '熊灵吸收独行德鲁伊所受伤害的{damage_share}%。',
            notes: [],
        },
        {
            ability_classname: 'imba_lone_druid_spirit_bear_fetch',
            ability_specials: [
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'damage',
                    text: '伤害：',
                },
            ],
            name: '抓取',
            description:
                '抓住友军/敌方目标，或者是神符，并且不受控制地在持续时间内将其向独行德鲁伊拽去。敌人每{tick_rate}秒受到一次伤害。拖拽过程中目标被缠绕，并且熊灵被减速{self_slow}%。',
            notes: [],
        },
        {
            ability_classname: 'imba_lone_druid_spirit_bear_demolish',
            ability_specials: [
                {
                    ability_special: 'spell_resistance',
                    text: '%魔法抗性：',
                },
                {
                    ability_special: 'true_form_bonus_building_damage',
                    text: '%真熊形态对建筑额外伤害：',
                },
            ],
            name: '粉碎击',
            description: '熊灵的力量得到提升，使其对建筑物造成更高的伤害，同时增加了魔法抗性。',
            notes: [],
        },
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: 'special_bonus_unique_imba_lone_druid_2',
                    name: '+{s:bonus_bonus_bear_armor} 熊灵护甲',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_lone_druid_4',
                    name: '-{s:bonus_AbilityCooldown}秒 野蛮咆哮冷却',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_lone_druid_8',
                    name: '-{s:bonus_AbilityCooldown}秒 真熊形态冷却',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_lone_druid_11',
                    name: '+{s:bonus_bear_movespeed} 熊灵移动速度',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_lone_druid_spirit_link_attack_speed',
                    name: '+{s:bonus_bonus_attack_speed} 灵魂链接攻击速度',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_lone_druid_entangle_dps',
                    name: '+{s:bonus_damage} 缠绕之爪伤害',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_lone_druid_savage_roar_aoe',
                    name: '+{s:bonus_radius} 野蛮咆哮作用范围',
                },
            ],
        },
    ],
    FacetArray_B: [
        {
            facet_classname: 'lone_druid_facets_imba_1',
            name: '熊姿英发 | 一世之熊 | 熊亦求精',
            description:
                '灵魂链接的共享护甲增加，并且独行德鲁伊的攻击可以治疗熊灵。 真熊形态会改变熊灵的形态，而不是独行德鲁伊的。提升了独行德鲁伊和熊灵相距较远时允许熊灵攻击的距离。 独行德鲁伊的物品更具威力，而他的物品栏更少。',
            related_abilities: [
                {
                    ability_classname: 'imba_lone_druid_spirit_bear',
                    description: '提升了独行德鲁伊和熊灵相距较远时允许熊灵攻击的距离。',
                },
                {
                    ability_classname: 'imba_lone_druid_spirit_link',
                    description: '共享护甲提升。熊灵和独行德鲁伊造成的伤害可以分别治疗对方。',
                },
                {
                    ability_classname: 'imba_lone_druid_true_form',
                    description: '独行德鲁伊将自己的形态变换为狂怒的熊，失去远程攻击能力，但获得了额外护甲和生命值并获得更厉害的缠绕之爪和粉碎击。',
                },
            ],
            related_talents: [],
        },
    ],
    ModifierArray: [
        {
            modifier_classname: 'modifier_imba_lone_druid_spirit_bear_entangle_effect',
            name: '缠绕之爪',
            description: '无法移动并且受到持续伤害。',
        },
        {
            modifier_classname: 'modifier_imba_lone_druid_rabid',
            name: '狂猛',
            description:
                '获得{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}攻击速度加成以及{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%移动速度加成。',
        },
        {
            modifier_classname: 'modifier_imba_lone_druid_savage_roar',
            name: '野蛮咆哮',
            description: '加速飞奔。',
        },
        {
            modifier_classname: 'modifier_imba_lone_druid_true_form_battle_cry',
            name: '战斗嚎叫',
            description: '获得{MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE}点攻击力提升以及{MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS}点护甲提升。',
        },
        {
            modifier_classname: 'modifier_imba_lone_druid_spirit_bear_attack_check',
            name: '熊灵感应',
            description: '熊灵相距独行德鲁伊太远将丧失攻击能力，除非熊灵拥有阿哈利姆神杖。',
        },
        {
            modifier_classname: 'modifier_imba_lone_druid_spirit_bear_defender',
            name: '护卫',
            description: '熊灵吸收独行德鲁伊所受伤害的{amage_share}%。',
        },
        {
            modifier_classname: 'modifier_imba_lone_druid_spirit_link',
            name: '灵魂链接',
            description: '提供{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}攻击速度，并且造成伤害时同伴回复伤害的一定百分比。',
        },
        {
            modifier_classname: 'modifier_imba_lone_druid_true_form',
            name: '真熊形态',
            description:
                '变身为愤怒的熊，失去远程攻击能力，不过获得了{MODIFIER_PROPERTY_EXTRA_HEALTH_BONUS}点额外生命值，{MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS}点额外护甲，缠绕之爪和粉碎击。',
        },
        {
            modifier_classname: 'modifier_imba_lone_druid_bear_demolish_corruption',
            name: '粉碎击',
            description: '护甲被降低{MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS}点。',
        },
        {
            modifier_classname: 'modifier_imba_lone_druid_demolish_corruption',
            name: '粉碎击',
            description: '护甲被降低{MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS}点。',
        },
    ],
};
