import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: 'imba_rattletrap_jetpack',
            ability_specials: [
                {
                    ability_special: 'bonus_speed',
                    text: '%移动速度加成：',
                },
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
            ],
            name: '喷气背包',
            description:
                '发条技师开动喷气背包，获得飞行移动状态，飞行视野和移动速度加成。发条技师的转身速率大幅降低，并且无法攻击。施放发射钩爪会使喷气背包中止。',
            notes: [],
        },
        {
            ability_classname: 'imba_rattletrap_overclocking',
            ability_specials: [
                {
                    ability_special: 'buff_duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'bonus_attack_speed',
                    text: '齿轮内攻击速度加成：',
                },
                {
                    ability_special: 'debuff_duration',
                    text: '自身眩晕时间：',
                },
                {
                    ability_special: 'hookshot_radius_bonus_pct',
                    text: '%发射钩爪额外作用范围：',
                },
                {
                    ability_special: 'hookshot_duration_bonus_pct',
                    text: '%发射钩爪额外眩晕时间：',
                },
                {
                    ability_special: 'rocket_flare_rockets',
                    text: '额外照明火箭：',
                },
                {
                    ability_special: 'rocket_flare_cooldown',
                    text: '照明火箭冷却时间：',
                },
                {
                    ability_special: 'jetpack_bonus_speed',
                    text: '%喷气背包速度：',
                },
            ],
            name: '超速运转',
            description:
                '使发条技师的所有技能变得强力：弹幕冲击可以作用于范围内所有敌人；发条技师在能量齿轮内攻击速度大幅提升；照明火箭的冷却时间减少，并且发射时向目标两侧各额外发射一枚；发射钩爪的眩晕范围和时间均有提升；喷气背包移动得更快。持续时间结束后发条技师的移动和攻击速度降到最低。',
            lore: '瑞托崔普明白他装甲的局限性。就像他明白在必要的情况下越界的风险。',
            notes: [],
        },
        {
            ability_classname: 'imba_rattletrap_battery_assault',
            ability_specials: [
                {
                    ability_special: 'radius',
                    text: '作用范围：',
                },
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'interval',
                    text: '间隔：',
                },
                {
                    ability_special: 'damage',
                    text: '伤害：',
                },
            ],
            name: '弹幕冲击',
            description: '向附近敌方单位随机射出高能弹片，造成小额魔法伤害和短暂眩晕。对非英雄单位造成双倍伤害。',
            lore: '瑞托崔普挂载的部分装置运作不良，因此将其引爆也是种有效的进攻手段。',
            notes: ['发条技师被控制后仍然有效。'],
        },
        {
            ability_classname: 'imba_rattletrap_power_cogs',
            ability_specials: [
                {
                    ability_special: 'duration',
                    text: '持续时间：',
                },
                {
                    ability_special: 'damage',
                    text: '伤害：',
                },
                {
                    ability_special: 'mana_burn',
                    text: '魔法值损失：',
                },
                {
                    ability_special: 'attacks_to_destroy',
                    text: '摧毁齿轮的攻击次数：',
                },
                {
                    ability_special: 'cogs_radius',
                    text: '成型范围：',
                },
            ],
            name: '能量齿轮',
            description:
                '在发条技师周围形成一圈通电的齿轮，困住附近的单位。在外侧的敌人碰到齿轮会被电流震退，损失一定的生命和魔法。同时造成{mana_burn_as_damage_pct}%损失魔法的伤害。一个齿轮发动过一次震击后就会报废。<br><br>敌人攻击齿轮数次后可将其摧毁，而发条技师需要攻击一次会将齿轮推出{projectile_distance}距离。',
            lore: '发条技师最骄傲的发明之一就是他的能量齿轮——虽然有时会被他的盟友轻视。',
            notes: ['齿轮可以震退隐身单位。'],
        },
        {
            ability_classname: 'imba_rattletrap_rocket_flare',
            ability_specials: [
                {
                    ability_special: 'radius',
                    text: '作用范围：',
                },
                {
                    ability_special: 'damage',
                    text: '伤害：',
                },
                {
                    ability_special: 'slow_pct',
                    text: '%移动速度减缓：',
                },
                {
                    ability_special: 'slow_duration',
                    text: '减速持续时间：',
                },
            ],
            name: '照明火箭',
            description: '向全地图范围内的指定区域发射照明弹。击中时对区域内敌人造成伤害和短暂减速。照明火箭提供{duration}秒击中区域的视野。',
            lore: '最初用作节日的焰火，现在成了侦察和轰炸敌人的工具。',
            notes: [],
        },
        {
            ability_classname: 'imba_rattletrap_hookshot',
            ability_specials: [
                {
                    ability_special: 'stun_radius_ally',
                    text: '%击中友军的眩晕范围：',
                },
                {
                    ability_special: 'cooldown_refund_ally',
                    text: '%击中友军返还冷却时间：',
                },
                {
                    ability_special: 'ally_shield_duration',
                    text: '友军护盾持续时间：',
                },
                {
                    ability_special: 'duration',
                    text: '眩晕时间：',
                },
                {
                    ability_special: 'damage',
                    text: '伤害：',
                },
            ],
            name: '发射钩爪',
            description:
                '向目标位置高速射出钩爪，如果命中一个单位，发条技师会将自己牵引到目标身边，对目标附近{stun_radius}范围内所有敌人造成眩晕和伤害。对牵引时冲撞到的单位也造成伤害和眩晕。',
            lore: '钩爪虽然是有点笨重的设备，但能让更加厚重的发条装甲在半空中来去如风。',
            notes: ['发射钩爪可以抓住友方单位并将发条技师牵引过去，但是不会造成伤害和眩晕。'],
        },
        {
            ability_classname: 'imba_rattletrap_armor_power',
            ability_specials: [],
            name: '装甲力量',
            description: '发条技师的每点护甲都会使伤害输出增加{damage_per_armor}%。',
            notes: [],
        },
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: 'special_bonus_unique_imba_clockwerk',
                    name: '-{s:bonus_interval}秒 弹幕冲击间隔',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_clockwerk_3',
                    name: '+{s:bonus_damage} 弹幕冲击伤害',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_clockwerk_4',
                    name: '照明火箭具有真实视域',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_clockwerk_5',
                    name: '+{s:bonus_attacks_to_destroy} 能量齿轮可攻击次数',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_clockwerk_6',
                    name: '能量齿轮内减益免疫',
                    description: '减益免疫期间还提供50%%魔法抗性加成。',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_clockwerk_7',
                    name: '-{s:bonus_AbilityCooldown}秒 照明火箭冷却',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_clockwerk_9',
                    name: '-{s:bonus_AbilityCooldown}秒 能量齿轮冷却',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_clockwerk_flare_damage',
                    name: '+{s:bonus_damage} 照明火箭伤害',
                },
            ],
        },
    ],
    FacetArray_B: [
        {
            facet_classname: 'rattletrap_facets_imba_1',
            name: '钩结 | 电枢扩展',
            description: '能量齿轮的形成半径更大。 发射钩爪击中友军时拥有更大的撞击范围，使他们获得一个物理护盾，并且部分退还冷却时间。',
            related_abilities: [
                {
                    ability_classname: 'imba_rattletrap_power_cogs',
                    description: '能量齿轮的形成半径更大。',
                },
                {
                    ability_classname: 'imba_rattletrap_hookshot',
                    description:
                        '击中友军时发射钩爪的撞击范围更大，对发条技师和击中的友军提供一个物理伤害护盾，数值等同于发射钩爪伤害，并且部分退还冷却时间。',
                },
            ],
            related_talents: [],
        },
    ],
    ModifierArray: [
        {
            modifier_classname: 'modifier_imba_rattletrap_battery_assault',
            name: '弹幕冲击',
            description: '对附近敌人造成间断伤害。',
        },
        {
            modifier_classname: 'modifier_imba_rattletrap_cog_push',
            name: '齿轮冲击',
            description: '被齿轮弹开。',
        },
        {
            modifier_classname: 'modifier_imba_rattletrap_hookshot',
            name: '发射钩爪',
            description: '钩爪牵引中。',
        },
        {
            modifier_classname: 'modifier_imba_rattletrap_overclocking',
            name: '超速运转中',
            description: '技能变得极为强力<br><br>持续时间结束后将被减速。',
        },
        {
            modifier_classname: 'modifier_imba_rattletrap_cog_armor',
            name: '能量齿轮',
        },
        {
            modifier_classname: 'modifier_imba_rattletrap_cog_immune',
            name: '能量齿轮',
            description: '能量齿轮内减益免疫。',
        },
        {
            modifier_classname: 'modifier_imba_rattletrap_cog_leash',
            name: '能量齿轮',
            description: '被束缚',
        },
        {
            modifier_classname: 'modifier_imba_rattletrap_cog_barrier',
            name: '能量齿轮',
            description: '吸收魔法伤害中。',
        },
        {
            modifier_classname: 'modifier_imba_rattletrap_jetpack',
            name: '喷气背包',
            description: '飞行中，移动速度提升{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。',
        },
        {
            modifier_classname: 'modifier_imba_rattletrap_rocket_flare_slow',
            name: '照明火箭',
            description: '移动速度被降低。',
        },
        {
            modifier_classname: 'modifier_imba_rattletrap_overheated',
            name: '过热',
            description: '超速运转后开始冷却。移动和攻击速度降低。',
        },
    ],
};
