import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: 'imba_invoker_quas',
            ability_specials: [
                {
                    ability_special: 'lifesteal_per_instance',
                    text: '%单个元素吸血：',
                },
                {
                    ability_special: 'intrinsic_attack_damage_dot_per_second',
                    text: '每秒伤害：',
                },
                {
                    ability_special: 'intrinsic_attack_damage_dot_duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'strength_bonus',
                    text: '每级获得力量加成：',
                },
            ],
            name: '冰',
            description: '允许祈求者掌控冰元素。',
            notes: ['祈求者最多只有3个元素。', '技能吸血效果会在施放技能时确定。之后更改元素球不会有任何效果。'],
        },
        {
            ability_classname: 'imba_invoker_wex',
            ability_specials: [
                {
                    ability_special: 'move_speed_per_instance',
                    text: '%单个元素移速加成：',
                },
                {
                    ability_special: 'intrinsic_attack_speed',
                    text: '攻击速度：',
                },
                {
                    ability_special: 'agility_bonus',
                    text: '每级获得敏捷加成：',
                },
            ],
            name: '雷',
            description: '允许祈求者掌控雷元素。',
            notes: ['祈求者最多只有3个球。'],
        },
        {
            ability_classname: 'imba_invoker_exort',
            ability_specials: [
                {
                    ability_special: 'magic_amp',
                    text: '%单个元素技能增强：',
                },
                {
                    ability_special: 'intrinsic_attack_damage',
                    text: '攻击力加成：',
                },
                {
                    ability_special: 'intelligence_bonus',
                    text: '每级获得智力加成：',
                },
            ],
            name: '火',
            description: '允许祈求者掌控火元素。',
            notes: ['祈求者最多只有3个球。', '技能增强效果会在施放技能时确定。之后更改元素球不会有任何效果。'],
        },
        {
            ability_classname: 'imba_invoker_empty1',
            ability_specials: [],
            name: '祈唤技能',
            description:
                "施放元素祈唤后本技能栏会变成对应祈求者当前的<font color='#7998b5'>冰</font>、<font color='#d671a9'>雷</font>和<font color='#cabe68'>火</font>元素状态的十大技能之一。",
            notes: [],
        },
        {
            ability_classname: 'imba_invoker_empty2',
            ability_specials: [],
            name: '祈唤技能',
            description:
                "施放元素祈唤后本技能栏会变成对应祈求者当前的<font color='#7998b5'>冰</font>、<font color='#d671a9'>雷</font>和<font color='#cabe68'>火</font>元素状态的十大技能之一。",
            notes: [],
        },
        {
            ability_classname: 'imba_invoker_invoke',
            ability_specials: [
                {
                    ability_special: 'max_invoked_spells',
                    text: '最大法术数：',
                },
            ],
            name: '元素祈唤',
            description:
                '将当前掌握的元素精华融合，创造出新的法术供祈求者施放。每个元素球的等级都会减少{cooldown_reduction_per_orb}秒元素祈唤的冷却时间。<br><br>点击帮助按钮可查看所有可用法术。',
            lore: '知识的新纪元就此开启。',
            notes: ['生成的技能与三个球的排列顺序无关。', '只是交换现有技能的位置并不会消耗魔法，也不会触发元素祈唤的冷却。'],
        },
        {
            ability_classname: 'imba_invoker_attribute_bonus',
            ability_specials: [
                {
                    ability_special: 'attribute_bonus_per_level',
                    text: '加成：',
                },
            ],
            name: '属性附加',
            description: '消耗技能点提升所有属性',
            notes: [],
        },
        {
            ability_classname: 'imba_invoker_cold_snap',
            ability_specials: [
                {
                    ability_special: 'duration',
                    text: "急速冷却持续时间（<font color='#7998b5'>冰</font>）：\\n",
                },
                {
                    ability_special: 'freeze_duration',
                    text: '冻结时间：',
                },
                {
                    ability_special: 'freeze_cooldown',
                    text: "冻结冷却时间（<font color='#7998b5'>冰</font>）：",
                },
                {
                    ability_special: 'freeze_damage',
                    text: "冷却伤害（<font color='#7998b5'>冰</font>）：",
                },
                {
                    ability_special: 'freeze_heal',
                    text: "冻结治疗（<font color='#7998b5'>冰</font>）：",
                },
            ],
            name: '急速冷却',
            description:
                "祈求者将敌人的热量抽空，将其降到绝对零度，持续时间取决于<font color='#7998b5'>冰元素</font>等级。敌人将受到伤害并被短暂冻结，后续攻击会使敌人再次冻结，造成额外伤害并且治疗祈求者。冻结的眩晕时间固定，但是冻结的冷却时间将会随着<font color='#7998b5'>冰元素</font>等级提高而缩短。",
            lore: '塞卓昂的无尽战栗。',
            notes: ['只有{damage_trigger}点以上的实际伤害才能触发急速冷却。'],
        },
        {
            ability_classname: 'imba_invoker_ghost_walk',
            ability_specials: [
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'area_of_effect',
                    text: '作用范围：',
                },
                {
                    ability_special: 'enemy_slow',
                    text: "%敌方减速（<font color='#7998b5'>冰</font>）：\\n",
                },
                {
                    ability_special: 'self_slow',
                    text: "%自身速度变化（<font color='#d671a9'>雷</font>）：\\n",
                },
                {
                    ability_special: 'health_regen',
                    text: "生命恢复（<font color='#7998b5'>冰</font>）：",
                },
                {
                    ability_special: 'mana_regen',
                    text: "魔法恢复（<font color='#d671a9'>雷</font>）：\\n",
                },
            ],
            name: '幽灵漫步',
            description:
                "祈求者操纵冰电之力围绕自身，使自己隐形并且获得生命和魔法恢复。各种元素的不平衡导致附近敌人的移动速度被减缓，减速效果取决于<font color='#7998b5'>冰元素</font>的等级，并使祈求者自身移动速度减缓，减速效果与<font color='#d671a9'>雷元素</font>等级成反比。",
            lore: '米瑞特之阻碍。',
            notes: ['减速效果对减益免疫状态下的单位无效。'],
        },
        {
            ability_classname: 'imba_invoker_tornado',
            ability_specials: [
                {
                    ability_special: 'travel_distance',
                    text: "最大距离（<font color='#d671a9'>雷</font>）：\\n",
                },
                {
                    ability_special: 'area_of_effect',
                    text: '作用范围：',
                },
                {
                    ability_special: 'lift_duration',
                    text: "滞空时间（<font color='#7998b5'>冰</font>）：\\n",
                },
                {
                    ability_special: 'base_damage',
                    text: '基础伤害：',
                },
                {
                    ability_special: 'wex_damage',
                    text: "加成伤害（<font color='#d671a9'>雷</font>）：",
                },
            ],
            name: '强袭飓风',
            description:
                "释放出一道快速移动的飓风，将路径上的敌方单位卷起，使其在空中无助地漂浮一段时间，然后落地受死。最大距离取决于<font color='#d671a9'>雷元素</font>等级。滞空时间取决于<font color='#7998b5'>冰元素</font>等级。落地伤害取决于<font color='#d671a9'>雷元素</font>的等级。\\n\\n驱散类型：弱驱散",
            lore: '托纳鲁斯之爪。',
            notes: ['被强袭飓风吹起时单位处于无敌状态，落地时受到伤害。'],
        },
        {
            ability_classname: 'imba_invoker_emp',
            ability_specials: [
                {
                    ability_special: 'delay',
                    text: '爆炸延迟：',
                },
                {
                    ability_special: 'area_of_effect',
                    text: '作用范围：',
                },
                {
                    ability_special: 'mana_burned',
                    text: "最大燃烧魔法量（<font color='#d671a9'>雷</font>）：\\n",
                },
                {
                    ability_special: 'damage_per_mana_pct',
                    text: '%法力燃烧伤害：',
                },
            ],
            name: '电磁脉冲',
            description:
                "祈求者在指定位置召唤出一道强力的自爆电磁脉冲，{delay}秒后将自动爆炸。爆炸将覆盖一定区域，并根据<font color='#d671a9'>雷元素</font>的等级损毁敌方的魔法值。对敌方英雄造成损毁魔法值一定百分比的伤害。祈求者将获得{self_mana_restore_pct}%损毁的魔法。",
            lore: '恩多利昂的恶之混动。',
            shard_description: '提升电磁脉冲燃烧魔法的伤害系数，并且将敌方单位以每秒{shard_drag_speed}距离的速度向电磁脉冲的中心牵引。',
            notes: ['对被吹起的单位（强袭飓风或Eul的神圣法杖）无效。'],
        },
        {
            ability_classname: 'imba_invoker_alacrity',
            ability_specials: [
                {
                    ability_special: 'bonus_attack_speed',
                    text: "攻击速度提升（<font color='#d671a9'>雷</font>）：\\n",
                },
                {
                    ability_special: 'bonus_damage',
                    text: "攻击力提升（<font color='#cabe68'>火</font>）：\\n",
                },
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
            ],
            name: '灵动迅捷',
            description:
                "祈求者给友方单位灌注强大的能量，提高其攻击速度和攻击力。攻击速度提升程度取决于<font color='#d671a9'>雷元素</font>等级，攻击力提升取决于<font color='#cabe68'>火元素</font>等级。",
            lore: '盖斯特的猛战号令。',
            notes: [],
        },
        {
            ability_classname: 'imba_invoker_chaos_meteor',
            ability_specials: [
                {
                    ability_special: 'land_time',
                    text: '撞击延迟：',
                },
                {
                    ability_special: 'area_of_effect',
                    text: '作用范围：',
                },
                {
                    ability_special: 'travel_distance',
                    text: "滚动距离（<font color='#d671a9'>雷</font>）：\\n",
                },
                {
                    ability_special: 'damage_interval',
                    text: '撞击伤害造成间隔：',
                },
                {
                    ability_special: 'main_damage',
                    text: "撞击伤害（<font color='#cabe68'>火</font>）：\\n",
                },
                {
                    ability_special: 'burn_duration',
                    text: '烧灼持续时间：',
                },
                {
                    ability_special: 'burn_dps',
                    text: "每秒烧灼伤害（<font color='#cabe68'>火</font>）：\\n",
                },
            ],
            name: '混沌陨石',
            description:
                "祈求者从太空中召唤一枚燃烧的流星打击指定位置。流星着陆后会向前滚动一段距离，每隔一段时间撞击一次作用范围内的敌人，造成基于<font color='#cabe68'>火元素</font>等级的撞击伤害，滚动距离取决于<font color='#d671a9'>雷元素</font>的等级。每被撞击一次都将持续受到烧灼伤害，烧灼伤害取决于<font color='#cabe68'>火元素</font>的等级。",
            lore: '塔拉克的天坠之火。',
            shard_description: '在混沌陨石的施法地点两侧额外有{bonus_meteor_count}枚流星着陆。冷却时间减少{bonus_AbilityCooldown}秒。',
            notes: [
                '每个敌方单位受到撞击伤害的间隔为{damage_interval}秒，后续较低的烧灼伤害持续{burn_duration}秒。',
                '陨石移动的速度为{travel_speed}。',
            ],
        },
        {
            ability_classname: 'imba_invoker_sun_strike',
            ability_specials: [
                {
                    ability_special: 'delay',
                    text: '延迟：',
                },
                {
                    ability_special: 'area_of_effect',
                    text: '作用范围：',
                },
                {
                    ability_special: 'damage',
                    text: "伤害（<font color='#cabe68'>火</font>）：\\n",
                },
            ],
            name: '阳炎冲击',
            description:
                "向目标区域释放毁灭性的阳炎之光能量，一旦能量着陆，将对区域内的敌人进行灼烧。伤害取决于<font color='#cabe68'>火元素</font>等级，区域内敌人将平摊所有伤害。",
            lore: '哈雷克之火葬魔咒。',
            scepter_description:
                '双击阳炎冲击发动毁天灭地。施放后阳炎冲击的冷却时间为{cataclysm_cooldown}秒。每个敌方英雄附近{cataclysm_min_range}-{cataclysm_max_range}范围内产生{cataclysm_count}个可见的阳炎冲击。另外冰、雷和火的等级均提升1级。',
            notes: ['施放后立即获得目标区域的视野。', '祈求者使用阳炎冲击击杀英雄后，即使不在经验范围内也能获得经验。'],
        },
        {
            ability_classname: 'imba_invoker_forge_spirit',
            ability_specials: [
                {
                    ability_special: 'spirit_damage',
                    text: "攻击力（<font color='#cabe68'>火</font>）：\\n",
                },
                {
                    ability_special: 'spirit_armor',
                    text: "护甲（<font color='#cabe68'>火</font>）：\\n",
                },
                {
                    ability_special: 'spirit_attack_range',
                    text: "攻击距离（<font color='#7998b5'>冰</font>）：\\n",
                },
                {
                    ability_special: 'spirit_hp',
                    text: "生命值（<font color='#7998b5'>冰</font>）：\\n",
                },
                {
                    ability_special: 'spirit_duration',
                    text: "持续时间（<font color='#7998b5'>冰</font>）：\\n",
                },
            ],
            name: '熔炉精灵',
            description:
                "祈求者融合火之灼热和冰之坚毅，创造出熔炉精灵。熔炉精灵的攻击力和护甲取决于<font color='#cabe68'>火元素</font>的等级，攻击距离、持续时间和生命值取决于<font color='#7998b5'>冰元素</font>的等级。元素的灼热攻击能够熔化敌方英雄的护甲。冰元素和火元素都达到4级后可以产生2个熔炉精灵。",
            lore: '卡尔维因的至邪造物。',
            notes: ['施放此技能后原有的熔炉精灵将会死亡。'],
        },
        {
            ability_classname: 'imba_forged_spirit_melting_strike',
            ability_specials: [
                {
                    ability_special: 'armor_removed',
                    text: '每次攻击减甲：',
                },
                {
                    ability_special: 'max_armor_removed',
                    text: '最大叠加次数：',
                },
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
            ],
            name: '灼烧攻击',
            description: '当熔炉精灵的攻击将熔化敌方英雄的护甲。每次攻击命中后效果会叠加。',
            notes: [],
        },
        {
            ability_classname: 'imba_invoker_ice_wall',
            ability_specials: [
                {
                    ability_special: 'duration',
                    text: "持续时间（<font color='#7998b5'>冰</font>）：\\n",
                },
                {
                    ability_special: 'slow',
                    text: "%减速（<font color='#7998b5'>冰</font>）：\\n",
                },
                {
                    ability_special: 'slow_duration',
                    text: '减速持续时间：',
                },
                {
                    ability_special: 'damage_per_second',
                    text: "每秒伤害（<font color='#cabe68'>火</font>）：\\n",
                },
            ],
            name: '寒冰之墙',
            description:
                "在祈求者前方创造一堵寒冰之墙，持续时间取决于<font color='#7998b5'>冰元素</font>的等级。冰霜之墙放射出的寒冰之气将对敌方单位造成减速和伤害，减速效果取决于<font color='#7998b5'>冰元素</font>的等级，每秒伤害取决于<font color='#cabe68'>火元素</font>的等级。",
            lore: '科瑞克斯的杀戮之墙。',
            shard_description: '寒冰之墙变成以矢量为目标的技能，施法距离为1100。墙体长度提升320。',
            notes: [],
        },
        {
            ability_classname: 'imba_invoker_deafening_blast',
            ability_specials: [
                {
                    ability_special: 'travel_distance',
                    text: '冲击距离：',
                },
                {
                    ability_special: 'damage',
                    text: "伤害（<font color='#cabe68'>火</font>）：\\n",
                },
                {
                    ability_special: 'knockback_duration',
                    text: "击退持续时间（<font color='#7998b5'>冰</font>）：\\n",
                },
                {
                    ability_special: 'disarm_duration',
                    text: "缴械持续时间（<font color='#d671a9'>雷</font>）：\\n",
                },
            ],
            name: '超震声波',
            description:
                "祈求者在自己前方释放出超强的声波，对所有敌方单位造成伤害，伤害量取决于<font color='#cabe68'>火元素</font>的等级。声波的绝对冲击能够将敌方单位击退，击退时间取决于<font color='#7998b5'>冰元素</font>的等级，同时让他们无法进行攻击，禁止攻击时间取决于<font color='#d671a9'>雷元素</font>的等级。",
            lore: '布鲁冯特之无力声波。',
            notes: [],
        },
        {
            ability_classname: 'imba_invoker_mastermind',
            ability_specials: [],
            name: '聪明绝顶',
            description: '祈求者反补线上小兵时，他会获得{xp_on_deny_percent}%经验。',
            notes: [],
        },
        {
            ability_classname: 'imba_invoker_cold_snap_ad',
            ability_specials: [
                {
                    ability_special: 'duration',
                    text: '急速冷却持续时间：\\n',
                },
                {
                    ability_special: 'freeze_duration',
                    text: '冻结持续时间：',
                },
                {
                    ability_special: 'freeze_cooldown',
                    text: '冻结冷却时间：',
                },
                {
                    ability_special: 'freeze_damage',
                    text: '冻结伤害：',
                },
            ],
            name: '急速冷却（OMG）',
            description:
                '祈求者将敌人的热量抽空，将其降到绝对零度，持续一定时间。敌人将伤害并被短暂冻结，后续攻击同样会使敌人冻结并造成额外伤害。被冻结的频率固定，但是冻结的冷却时间将会随着等级提高而缩短。',
            lore: '塞卓昂的无尽战栗。',
            notes: ['只有{damage_trigger}点以上的实际伤害才能触发急速冷却。'],
        },
        {
            ability_classname: 'imba_invoker_ghost_walk_ad',
            ability_specials: [
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'area_of_effect',
                    text: '作用范围：',
                },
                {
                    ability_special: 'enemy_slow',
                    text: '%敌军移速减缓：\\n',
                },
                {
                    ability_special: 'self_slow',
                    text: '%自身速度变化：\\n',
                },
            ],
            name: '幽灵漫步（OMG）',
            description:
                '祈求者操纵冰雷之力围绕自身，使自己隐形。各种元素的不平衡导致附近敌人的移动速度被减缓，并使祈求者自身移动速度减缓，减速效果基于技能等级。',
            lore: '米瑞特之阻碍。',
            notes: ['减速效果对减益免疫状态下的单位无效。'],
        },
        {
            ability_classname: 'imba_invoker_tornado_ad',
            ability_specials: [
                {
                    ability_special: 'travel_distance',
                    text: '行进距离：\\n',
                },
                {
                    ability_special: 'area_of_effect',
                    text: '作用范围：',
                },
                {
                    ability_special: 'lift_duration',
                    text: '滞空时间：\\n',
                },
                {
                    ability_special: 'base_damage',
                    text: '基础伤害：',
                },
                {
                    ability_special: 'wex_damage',
                    text: '增加伤害：',
                },
            ],
            name: '强袭飓风（OMG）',
            description:
                '释放出一道快速移动的飓风，将路径上的敌方单位卷起，使其在空中无助的漂浮一段时间，然后落地受死。行进距离取决于技能等级，敌人将滞空一定时间。\\n\\n驱散类型：弱驱散',
            lore: '托纳鲁斯之爪。',
            notes: ['被强袭飓风吹起时单位处于无敌状态，落地时受到伤害。'],
        },
        {
            ability_classname: 'imba_invoker_emp_ad',
            ability_specials: [
                {
                    ability_special: 'delay',
                    text: '爆炸延迟：',
                },
                {
                    ability_special: 'area_of_effect',
                    text: '作用范围：',
                },
                {
                    ability_special: 'mana_burned',
                    text: '最大燃烧魔法量：\\n',
                },
                {
                    ability_special: 'damage_per_mana_pct',
                    text: '%法力燃烧伤害：',
                },
            ],
            name: '电磁脉冲（OMG）',
            description:
                '祈求者在指定位置召唤出一道强力的自爆电磁脉冲，{delay}秒后将自动爆炸。爆炸将覆盖一定区域，损毁敌方的魔法值。对敌方英雄造成损毁魔法值一定百分比的伤害。祈求者将获得50%损毁的魔法。',
            lore: '恩多利昂的恶之混动。',
            shard_description: '提升电磁脉冲燃烧魔法的伤害系数，并且将敌方单位以每秒{shard_drag_speed}距离的速度向电磁脉冲的中心牵引。',
            notes: ['对被吹起的单位（强袭飓风或Eul的神圣法杖）无效。'],
        },
        {
            ability_classname: 'imba_invoker_alacrity_ad',
            ability_specials: [
                {
                    ability_special: 'bonus_attack_speed',
                    text: '额外攻击速度：\\n',
                },
                {
                    ability_special: 'bonus_damage',
                    text: '额外攻击力：\\n',
                },
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
            ],
            name: '灵动迅捷（OMG）',
            description: '祈求者给友方单位灌注强大的能量，提高其攻击速度和攻击力。',
            lore: '盖斯特的猛战号令。',
            notes: [],
        },
        {
            ability_classname: 'imba_invoker_sun_strike_ad',
            ability_specials: [
                {
                    ability_special: 'delay',
                    text: '延迟：',
                },
                {
                    ability_special: 'area_of_effect',
                    text: '作用范围：',
                },
                {
                    ability_special: 'damage',
                    text: '伤害：\\n',
                },
            ],
            name: '阳炎冲击（OMG）',
            description: '向目标区域释放毁灭性的阳炎之光能量，一旦能量着陆，将对区域内的敌人进行灼烧。区域内所有敌人将平摊伤害。',
            lore: '哈雷克之火葬魔咒。',
            scepter_description:
                '增加毁天灭地。双击阳炎冲击进行施放。施放后阳炎冲击的冷却时间为{cataclysm_cooldown}秒。每个敌方英雄附近{cataclysm_min_range}-{cataclysm_max_range}范围内产生{cataclysm_count}个可见的阳炎冲击。',
            notes: ['施放后立即获得目标区域的视野。', '祈求者使用阳炎冲击击杀英雄后，即使不在经验范围内也能获得经验。'],
        },
        {
            ability_classname: 'imba_invoker_forge_spirit_ad',
            ability_specials: [
                {
                    ability_special: 'spirit_damage',
                    text: '攻击力：\\n',
                },
                {
                    ability_special: 'spirit_mana',
                    text: '魔法值：\\n',
                },
                {
                    ability_special: 'spirit_armor',
                    text: '护甲：\\n',
                },
                {
                    ability_special: 'spirit_attack_range',
                    text: '攻击距离：\\n',
                },
                {
                    ability_special: 'spirit_hp',
                    text: '生命值：\\n',
                },
                {
                    ability_special: 'spirit_duration',
                    text: '持续时间：\\n',
                },
            ],
            name: '熔炉精灵（OMG）',
            description: '祈求者融合火之灼热和冰之坚毅，创造出熔炉精灵。元素精灵的灼热攻击能够熔化敌方英雄的护甲。',
            lore: '卡尔维因的至邪造物。',
            notes: ['施放此技能后原有的熔炉精灵将会死亡。'],
        },
        {
            ability_classname: 'imba_invoker_chaos_meteor_ad',
            ability_specials: [
                {
                    ability_special: 'land_time',
                    text: '撞击延迟：',
                },
                {
                    ability_special: 'area_of_effect',
                    text: '作用范围：',
                },
                {
                    ability_special: 'travel_distance',
                    text: '行进距离：\\n',
                },
                {
                    ability_special: 'damage_interval',
                    text: '撞击伤害造成间隔：',
                },
                {
                    ability_special: 'main_damage',
                    text: '撞击伤害：\\n',
                },
                {
                    ability_special: 'burn_duration',
                    text: '烧灼持续时间：',
                },
                {
                    ability_special: 'burn_dps',
                    text: '每秒烧灼伤害：\\n',
                },
            ],
            name: '混沌陨石（OMG）',
            description:
                '祈求者从太空中召唤一枚燃烧的流星打击指定位置。流星着陆后会向前滚动一段距离，根据技能等级持续造成伤害和向前滚动。每被撞击一次都将在短时间内受到烧灼伤害，',
            lore: '塔拉克的天坠之火。',
            notes: [
                '每个敌方单位受到撞击伤害的间隔为{damage_interval}秒，后续较低的烧灼伤害持续{burn_duration}秒。',
                '陨石移动的速度为{travel_speed}。',
            ],
        },
        {
            ability_classname: 'imba_invoker_ice_wall_ad',
            ability_specials: [
                {
                    ability_special: 'duration',
                    text: '墙体持续时间：\\n',
                },
                {
                    ability_special: 'slow',
                    text: '%移动速度减缓：\\n',
                },
                {
                    ability_special: 'slow_duration',
                    text: '减速持续时间：',
                },
                {
                    ability_special: 'damage_per_second',
                    text: '每秒伤害：\\n',
                },
            ],
            name: '寒冰之墙（OMG）',
            description: '在祈求者前方创造一堵寒冰之墙。冰霜之墙放射出的寒冰之气将对敌方单位造成大幅减速和每秒伤害，',
            lore: '科瑞克斯的杀戮之墙。',
            notes: ['如果敌人在受到寒冰之墙作用后获得减益免疫状态，那么减速效果对其依然有效。'],
        },
        {
            ability_classname: 'imba_invoker_deafening_blast_ad',
            ability_specials: [
                {
                    ability_special: 'travel_distance',
                    text: '冲击距离：',
                },
                {
                    ability_special: 'damage',
                    text: '伤害：\\n',
                },
                {
                    ability_special: 'knockback_duration',
                    text: '击退持续时间：\\n',
                },
                {
                    ability_special: 'disarm_duration',
                    text: '缴械持续时间：\\n',
                },
            ],
            name: '超震声波（OMG）',
            description:
                '祈求者在自己前方释放出超强的声波，对所有敌方单位造成伤害。声波的绝对冲击能够将敌方单位击退一定时间，同时让他们无法进行攻击，持续一定时间。',
            lore: '布鲁冯特之无力声波。',
            notes: [],
        },
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: 'special_bonus_unique_imba_invoker_2',
                    name: '环形超震声波',
                    description: '以祈求者为圆心施放{s:bonus_radial_count}道超震声波。每个敌人只能受到一次作用。',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_invoker_3',
                    name: '-{s:bonus_AbilityCooldown}秒 强袭飓风冷却',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_invoker_5',
                    name: '+{s:bonus_bonus_attack_speed} 灵动迅捷攻击力/攻速',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_invoker_9',
                    name: '-{s:bonus_AbilityCooldown}秒 急速冷却冷却',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_invoker_11',
                    name: '+{s:bonus_spirit_attack_speed} 熔炉精灵攻击速度',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_invoker_13',
                    name: '',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_invoker_ice_wall_dps',
                    name: '+{s:bonus_damage_per_second} 寒冰之墙每秒伤害',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_invoker_additional_chaos_meteors',
                    name: '+{s:bonus_meteor_count} 混沌陨石',
                },
            ],
        },
    ],
    FacetArray_B: [
        {
            facet_classname: 'invoker_facets_imba_1',
            name: '精英主义 | 不可知论',
            description:
                "活跃的元素球会提供<font color='#7998b5'>吸血</font>、<font color='#d671a9'>移动速度</font>和<font color='#cabe68'>技能增强</font>。 元素球在升级时被动提供<font color='#7998b5'>持续伤害</font>、<font color='#d671a9'>攻击速度</font>和<font color='#cabe68'>攻击力</font>。",
            related_abilities: [
                {
                    ability_classname: 'imba_invoker_quas',
                    description: "每个<font color='#7998b5'>冰元素</font>都会让祈求者的攻击具有固定数值的吸血效果。",
                },
                {
                    ability_classname: 'imba_invoker_wex',
                    description: "每个<font color='#d671a9'>雷元素</font>都会提供移动速度加成。",
                },
                {
                    ability_classname: 'imba_invoker_exort',
                    description:
                        "祈求者施加一个负面效果，每个<font color='#cabe68'>火</font>元素都会使目标受到的技能伤害增加，持续{resist_debuff_duration}秒。",
                },
            ],
            related_talents: [
                {
                    talent_key: 'special_bonus_unique_invoker_13_facet_invoker_agnostic',
                    description: '{s:bonus_intrinsic_attack_speed}倍 冰/雷/火被动效果',
                },
                {
                    talent_key: 'special_bonus_unique_invoker_13_facet_invoker_elitist',
                    description: '{s:bonus_magic_amp}倍 冰/雷/火活跃效果',
                },
            ],
        },
    ],
    ModifierArray: [
        {
            modifier_classname: 'modifier_imba_invoker_quas_intrinsic_dot',
            name: '寒冰伤害',
            description: '每秒受到{MODIFIER_PROPERTY_TOOLTIP}点伤害。',
        },
        {
            modifier_classname: 'modifier_imba_invoker_quas_instance',
            name: '冰',
            description: '获得固定数值的吸血效果。',
        },
        {
            modifier_classname: 'modifier_imba_invoker_quas_instance_facet_invoker_agnostic',
            name: '允许祈求者掌控冰元素。',
        },
        {
            modifier_classname: 'modifier_imba_invoker_wex_instance',
            name: '雷',
            description: '移动速度提升{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。',
        },
        {
            modifier_classname: 'modifier_imba_invoker_wex_instance_facet_invoker_agnostic',
            name: '允许祈求者掌控电元素。',
        },
        {
            modifier_classname: 'modifier_imba_invoker_exort_instance',
            name: '火',
            description: '攻击会施加一个负面状态，增加承受的技能伤害。',
        },
        {
            modifier_classname: 'modifier_imba_invoker_exort_instance_facet_invoker_agnostic',
            name: '允许祈求者掌控火元素。',
        },
        {
            modifier_classname: 'modifier_imba_invoker_cold_snap',
            name: '急速冷却',
            description: '被攻击时会受到额外伤害并且被短暂冻结。',
        },
        {
            modifier_classname: 'modifier_imba_invoker_ghost_walk_self',
            name: '幽灵漫步',
            description:
                '隐身，移动速度改变{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%，并且减缓附近敌人的移动速度。获得{MODIFIER_PROPERTY_HEALTH_REGEN_CONSTANT}点/秒生命恢复和{MODIFIER_PROPERTY_MANA_REGEN_CONSTANT}点/秒魔法恢复。',
        },
        {
            modifier_classname: 'modifier_imba_invoker_ghost_walk_enemy',
            name: '幽灵漫步',
            description: '附近有鬼！移动速度被减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。',
        },
        {
            modifier_classname: 'modifier_imba_invoker_tornado',
            name: '强袭飓风',
            description: '被飓风卷起。无敌但不能做出动作。落地后会受到伤害。',
        },
        {
            modifier_classname: 'modifier_imba_invoker_alacrity',
            name: '灵动迅捷',
            description: '攻击速度提升{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}，攻击力提升{MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE}点。',
        },
        {
            modifier_classname: 'modifier_imba_invoker_chaos_meteor_burn',
            name: '混沌陨石烧灼效果',
            description: '每秒受到一定伤害。',
        },
        {
            modifier_classname: 'modifier_imba_invoker_ice_wall_slow_debuff',
            name: '寒冰之墙',
            description: '被寒冰之墙减速。',
        },
        {
            modifier_classname: 'modifier_imba_invoker_deafening_blast_knockback',
            name: '超震声波击退效果',
            description: '被超震声波击退。',
        },
        {
            modifier_classname: 'modifier_imba_invoker_deafening_blast_disarm',
            name: '超震声波缴械效果',
            description: '无法攻击。',
        },
        {
            modifier_classname: 'modifier_imba_invoker_emp_pull',
            name: '电磁脉冲',
            description: '被牵引至电磁脉冲的中心。',
        },
        {
            modifier_classname: 'modifier_imba_invoker_magic_amp_debuff',
            name: '火',
            description: '受到的技能伤害会增加。',
        },
    ],
};
