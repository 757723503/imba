import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: 'imba_troll_warlord_rampage',
            ability_specials: [
                {
                    ability_special: 'attack_speed',
                    text: '攻击速度加成：',
                },
                {
                    ability_special: 'status_resistance',
                    text: '%状态抗性：',
                },
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
            ],
            name: '横行无忌',
            description: '根据巨魔战将所处的形态，使地图上所有友方英雄获得一个加成效果。远程形态提供攻击速度加成，近战形态提供状态抗性加成。',
            notes: [],
        },
        {
            ability_classname: 'imba_troll_warlord_berserkers_rage',
            ability_specials: [
                {
                    ability_special: 'bonus_move_speed',
                    text: '移动速度加成：',
                },
                {
                    ability_special: 'bonus_armor',
                    text: '护甲加成：',
                },
                {
                    ability_special: 'ensnare_chance',
                    text: '%诱捕概率：',
                },
                {
                    ability_special: 'ensnare_duration',
                    text: '诱捕持续时间：',
                },
                {
                    ability_special: 'maim_chance',
                    text: '%残废几率：',
                },
                {
                    ability_special: 'maim_duration',
                    text: '残废持续时间：',
                },
                {
                    ability_special: 'maim_slow',
                    text: '%残废移动速度减缓：',
                },
                {
                    ability_special: 'maim_attack_slow',
                    text: '残废攻击速度降低：',
                },
                {
                    ability_special: 'maim_damage',
                    text: '残废伤害：',
                },
            ],
            name: '狂战士之怒',
            description:
                '近战形态下巨魔战将的攻击有几率触发诱捕，阻止目标移动或使用位移类技能。另外近战形态下还拥有额外移动速度和护甲。<br><br>远程形态下巨魔战将的攻击有几率使目标残废，造成额外伤害，并且降低目标的移动和攻击速度。',
            lore: '跟巨魔战将的怒火一样，他的斧头也是源源不断。',
            notes: ['近战或远程物品的冷却时间不同时将根据巨魔战将在使用物品时处于远程或近战形态而定。'],
        },
        {
            ability_classname: 'imba_troll_warlord_switch_stance',
            ability_specials: [],
            name: '战斗姿态',
            description: '巨魔战将从使用远程攻击切换为近战攻击。近战攻击的基础攻击间隔更短。',
            notes: [],
        },
        {
            ability_classname: 'imba_troll_warlord_innate_masterful',
            ability_specials: [],
            notes: [],
        },
        {
            ability_classname: 'imba_troll_warlord_whirling_axes_ranged',
            ability_specials: [
                {
                    ability_special: 'axe_damage',
                    text: '飞斧伤害：',
                },
                {
                    ability_special: 'axe_slow_duration',
                    text: '减速持续时间：',
                },
                {
                    ability_special: 'movement_speed',
                    text: '%移动速度减缓：',
                },
                {
                    ability_special: 'AbilityCooldown',
                    text: '冷却时间：',
                },
                {
                    ability_special: 'AbilityManacost',
                    text: '魔法消耗：',
                },
            ],
            name: '旋风飞斧（远程）',
            description: '巨魔战将掷出手中的五把飞斧，减速并伤害前方{axe_range}范围锥形区域内的敌方单位。',
            lore: '只有注入了憎恨的斧头旋转起来才会如此致命。',
            scepter_description: '旋风飞斧（远程）可以驱散敌人。降低冷却时间和魔法消耗。<br><br>驱散类型：弱驱散',
            notes: ['无法作用于肉山。', '不会触发法术抵抗或法术反弹。'],
        },
        {
            ability_classname: 'imba_troll_warlord_whirling_axes_melee',
            ability_specials: [
                {
                    ability_special: 'damage',
                    text: '伤害：',
                },
                {
                    ability_special: 'max_range',
                    text: '作用范围：',
                },
                {
                    ability_special: 'blind_duration',
                    text: '致盲持续时间：',
                },
                {
                    ability_special: 'blind_pct',
                    text: '%攻击落空几率：',
                },
                {
                    ability_special: 'whirl_duration',
                    text: '环绕持续时间：',
                },
                {
                    ability_special: 'AbilityCooldown',
                    text: '冷却时间：',
                },
                {
                    ability_special: 'AbilityManacost',
                    text: '魔法消耗：',
                },
            ],
            name: '旋风飞斧（近战）',
            description: '巨魔战将掷出两把飞斧环绕在他周围，使敌方单位受到伤害，并且部分普通攻击将不能命中。',
            lore: '要靠近你的敌人。',
            scepter_description: '旋风飞斧（近战）可以驱散自己。降低冷却时间和魔法消耗。<br><br>驱散类型：弱驱散',
            notes: ['无法作用于肉山。'],
        },
        {
            ability_classname: 'imba_troll_warlord_scepter',
            ability_specials: [],
            notes: [],
        },
        {
            ability_classname: 'imba_troll_warlord_fervor',
            ability_specials: [
                {
                    ability_special: 'attack_speed',
                    text: '每层效果攻速加成：',
                },
                {
                    ability_special: 'max_stacks',
                    text: '最大叠加层数：',
                },
            ],
            name: '热血战魂',
            description: '当巨魔战将持续攻击同一个目标时，他会攻击得越来越快。如果改变目标，则额外的攻速加成清零。',
            lore: '如果第一下没成功，那就接着出招呗。',
            shard_description:
                '热血战魂的叠加上限提升{bonus_max_stacks}次，并且巨魔有{base_chance}% + 热血战魂叠加次数*{base_chance}%的几率对远程攻击距离 + {range_buffer}范围内任意单位发动一次额外的远程攻击。',
            notes: ['破坏会使技能无法获得新的叠加效果。', '破坏会使阿哈利姆魔晶的几率触发失效。'],
        },
        {
            ability_classname: 'imba_troll_warlord_battle_trance',
            ability_specials: [
                {
                    ability_special: 'trance_duration',
                    text: '专注持续时间：',
                },
                {
                    ability_special: 'lifesteal',
                    text: '%吸血：',
                },
                {
                    ability_special: 'attack_speed',
                    text: '攻击速度：',
                },
                {
                    ability_special: 'movement_speed',
                    text: '%移动速度提升：',
                },
            ],
            name: '战斗专注',
            description:
                '巨魔战将释放出强大的战斗专注，强迫自身持续攻击{range}距离内最近的敌方单位，以英雄优先。专注期间不会因伤害而阵亡。提供额外吸血，攻击速度和移动速度。施放时施加弱驱散。 \\n\\n驱散类型：弱驱散',
            lore: '纯粹的仇恨让气血迅速上涌，刀剑也随之飞舞。',
            shard_description: '施放战斗专注将获得一个全屏光环，向友方英雄（包括自己）提供+60攻击速度。',
            notes: [
                '巨魔战将在战斗专注作用下仍然可以使用他的物品技能，但是无法执行其他指令。',
                '斧王的淘汰之刃还是能斩杀巨魔战将。',
                '巨魔战将会获得目标的视野。',
            ],
        },
        {
            ability_classname: 'imba_dark_troll_warlord_ensnare',
            ability_specials: [
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
            ],
            name: '诱捕',
            description: '黑暗巨魔召唤法师向一个敌人脚下扔出诱捕网，使他暂时无法移动，被网住的单位仍然可以攻击和使用技能。',
            notes: [],
        },
        {
            ability_classname: 'imba_dark_troll_warlord_raise_dead',
            ability_specials: [
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'skeletons_health',
                    text: '骷髅战士生命值：',
                },
                {
                    ability_special: 'skeletons_damage',
                    text: '骷髅战士攻击力：',
                },
            ],
            name: '亡灵复生',
            description: '黑暗巨魔召唤法师搅动脚下的大地，从死亡巨魔的尸体中招出三个骷髅战士为他作战。',
            notes: [],
        },
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: 'special_bonus_unique_imba_troll_warlord',
                    name: '+{s:bonus_bonus_armor} 狂战士之怒护甲',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_troll_warlord_2',
                    name: '+{s:bonus_bonus_move_speed} 狂战士之怒移速',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_troll_warlord_3',
                    name: '+{s:bonus_axe_damage} 旋风飞斧伤害',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_troll_warlord_4',
                    name: '战斗专注带强驱散',
                    description: '被眩晕时也能施放，对巨魔战将施加一个强驱散效果。',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_troll_warlord_5',
                    name: '+{s:bonus_attack_speed} 热血战魂每层攻速',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_troll_warlord_6',
                    name: '旋风飞斧无视减益免疫',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_troll_warlord_whirling_axes_debuff_duration',
                    name: '+{s:bonus_axe_slow_duration}秒 旋风飞斧负面效果',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_troll_warlord_battle_trance_movespeed',
                    name: '+{s:bonus_trance_duration}秒 战斗专注持续时间',
                },
            ],
        },
    ],
    FacetArray_B: [
        {
            facet_classname: 'troll_warlord_facets_imba_1',
            name: '不良影响 | 麻木不仁',
            description: '战斗专注为友方英雄提供{s:bonus_attack_speed_share_percent}%攻击速度加成。 近战形态下热血战魂的叠加效果提供护甲。',
            related_abilities: [
                {
                    ability_classname: 'imba_troll_warlord_fervor',
                    description: '近战形态下热血战魂的叠加效果提供护甲。',
                },
                {
                    ability_classname: 'imba_troll_warlord_battle_trance',
                    description: '战斗专注为友方英雄提供{attack_speed_share_percent}%攻击速度加成。',
                },
            ],
            related_talents: [],
        },
    ],
    ModifierArray: [
        {
            modifier_classname: 'modifier_imba_troll_warlord_whirling_axes_slow',
            name: '旋风飞斧减速',
            description: '被{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%减速。',
        },
        {
            modifier_classname: 'modifier_imba_troll_warlord_fervor',
            name: '热血战魂',
            description: '攻击速度提升{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}。',
        },
        {
            modifier_classname: 'modifier_imba_troll_warlord_battle_trance',
            name: '战斗专注',
            description:
                '获得{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}攻击速度，{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%移动速度和吸血。巨魔战将在战斗专注期间不会阵亡。',
        },
        {
            modifier_classname: 'modifier_imba_troll_warlord_whirling_axes_blind',
            name: '旋风飞斧的致盲效果',
        },
        {
            modifier_classname: 'modifier_imba_troll_warlord_rampage',
            name: '横行无忌',
            description: '获得{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}攻击速度和{MODIFIER_PROPERTY_STATUS_RESISTANCE_STACKING}%状态抗性。',
        },
        {
            modifier_classname: 'modifier_imba_troll_warlord_battle_trance_vision',
            name: '战斗专注',
            description: '巨魔战将眼里只有你！',
        },
        {
            modifier_classname: 'modifier_imba_troll_warlord_berserkers_rage_ensnare',
            name: '狂战士之怒',
            description: '你被发狂的巨魔捉住了！',
        },
        {
            modifier_classname: 'modifier_imba_troll_warlord_berserkers_rage_maim',
            name: '狂战士之怒',
            description: '你被发狂的巨魔致残了！',
        },
        {
            modifier_classname: 'modifier_imba_troll_warlord_battle_trance_aura',
            name: '战斗专注光环',
            description: '获得{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}攻击速度。',
        },
        {
            modifier_classname: 'modifier_imba_troll_warlord_battle_trance_ally',
            name: '不良影响',
            description: '获得{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}攻击速度。',
        },
    ],
};
