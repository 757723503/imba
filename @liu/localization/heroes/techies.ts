import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: 'imba_techies_land_mines',
            ability_specials: [
                {
                    ability_special: 'radius',
                    text: '爆炸范围：',
                },
                {
                    ability_special: 'damage',
                    text: '伤害：',
                },
                {
                    ability_special: 'building_damage_pct',
                    text: '%对建筑伤害：',
                },
                {
                    ability_special: 'activation_delay',
                    text: '启动延迟：',
                },
                {
                    ability_special: 'mres_reduction',
                    text: '%魔法抗性降低：',
                },
                {
                    ability_special: 'burn_duration',
                    text: '负面效果持续时间：',
                },
            ],
            name: '感应地雷',
            description:
                '埋布隐形的地雷，不会被真实视域检测到，但是有敌方单位在地雷的{radius}生效范围内会显形。敌人在生效范围内停留超过{proximity_threshold}秒会使地雷爆炸，并且魔法抗性会被暂时降低。爆炸对{min_distance}范围内目标造成全额伤害，对边缘造成的伤害减少至{outer_damage}%。对建筑物造成{outer_damage}%伤害。',
            lore: '起重港的噩梦！',
            notes: [
                '感应地雷的{placement_radius}范围内不能再放置地雷。',
                '感应地雷不会阻止中立生物产生。',
                '地雷持续时间没有上限，除非爆炸或被摧毁。',
                '隐形单位也能触发地雷。',
                '敌方英雄将地雷摧毁可以获得30金钱。',
                '减益免疫单位将使地雷显形，但不会引发爆炸。',
            ],
        },
        {
            ability_classname: 'imba_techies_stasis_trap',
            ability_specials: [
                {
                    ability_special: 'activation_radius',
                    text: '触发陷阱范围：',
                },
                {
                    ability_special: 'stun_radius',
                    text: '缠绕作用范围：',
                },
                {
                    ability_special: 'stun_duration',
                    text: '缠绕持续时间：',
                },
                {
                    ability_special: 'fade_time',
                    text: '陷阱渐隐时间：',
                },
                {
                    ability_special: 'cast_range_scepter_bonus',
                    text: '神杖升级施法距离加成：',
                },
            ],
            name: '静滞陷阱',
            description: '埋设一个隐形的陷阱，当有敌方单位靠近时会马上自动触发，造成缠绕。',
            lore: '猎手镇的灾难！',
            scepter_description: '提升施法距离。',
            notes: ['静滞陷阱触发后将摧毁作用范围内的其他静滞陷阱。', '隐形单位不会触发静滞陷阱。', '静滞陷阱不能阻止中立生物产生。'],
        },
        {
            ability_classname: 'imba_techies_suicide',
            ability_specials: [
                {
                    ability_special: 'radius',
                    text: '爆炸范围：',
                },
                {
                    ability_special: 'damage',
                    text: '全额伤害：',
                },
                {
                    ability_special: 'stun_duration',
                    text: '眩晕时间：',
                },
                {
                    ability_special: 'hp_cost',
                    text: '%对自身的当前生命值伤害：',
                },
                {
                    ability_special: 'hp_dmg',
                    text: '%最大生命值额外伤害：',
                },
            ],
            name: '爆破起飞！',
            description: '工程师冲到敌人中间，在相遇时引爆炸药，造成大量范围伤害，并眩晕敌人。引爆时会对工程师造成当前生命值一定百分比的非致死伤害。',
            lore: '我们是要去哪？',
            shard_description: '爆破起飞！的施法距离提升{shard_bonus_cast_range}，并且对作用下的敌人造成{shard_stun_duration}秒眩晕。',
            notes: ['工程师在此次爆炸中受到的自身伤害为纯粹伤害，而且不会致死。', '此技能将摧毁树木。'],
        },
        {
            ability_classname: 'imba_techies_sticky_bomb',
            ability_specials: [
                {
                    ability_special: 'countdown',
                    text: '爆炸延迟：',
                },
                {
                    ability_special: 'radius',
                    text: '粘附作用范围：',
                },
                {
                    ability_special: 'damage',
                    text: '伤害：',
                },
                {
                    ability_special: 'slow',
                    text: '%移动速度减缓：',
                },
                {
                    ability_special: 'secondary_slow',
                    text: '%二次减速：',
                },
                {
                    ability_special: 'explosion_radius',
                    text: '爆炸范围：',
                },
            ],
            name: '粘性炸弹',
            description:
                '向目标区域抛出一个粘性炸弹。如果炸弹落在一个敌方英雄身旁，炸弹会粘上去，减缓其移动速度。数秒后炸弹会爆炸，对爆炸区域内造成伤害，并再次施加减速，持续{secondary_slow_duration}秒。',
            lore: '这样革命性的才华本应与他人分享。',
            notes: [],
        },
        {
            ability_classname: 'imba_techies_reactive_tazer',
            ability_specials: [
                {
                    ability_special: 'duration',
                    text: '加成持续时间：',
                },
                {
                    ability_special: 'disarm_duration',
                    text: '缴械持续时间：',
                },
                {
                    ability_special: 'bonus_ms',
                    text: '%移动速度加成：',
                },
                {
                    ability_special: 'stun_radius',
                    text: '爆炸范围：',
                },
                {
                    ability_special: 'shard_damage',
                    text: '伤害：',
                },
            ],
            name: '活性电击',
            description:
                '工程师放出电荷，使他们短时间内获得移动速度加成。攻击工程师的敌人被暂时缴械，并且受到弱驱散效果。效果结束时，电荷将会爆炸，使范围内所有敌人缴械。',
            lore: '想要双手稳稳地握住炸弹更需要大量个人空间。',
            shard_description: '活性电击可以对友军施放，并且引爆时造成伤害。对作用下友军发动攻击也会受到伤害。',
            notes: [],
        },
        {
            ability_classname: 'imba_techies_reactive_tazer_stop',
            ability_specials: [],
            name: '引爆电击',
            description: '立刻引爆活性电击。',
            notes: [],
        },
        {
            ability_classname: 'imba_techies_remote_mines',
            ability_specials: [
                {
                    ability_special: 'damage',
                    text: '伤害：',
                },
                {
                    ability_special: 'radius',
                    text: '爆炸范围：',
                },
                {
                    ability_special: 'duration',
                    text: '炸弹持续时间：',
                },
                {
                    ability_special: 'activation_time',
                    text: '启动延迟时间：',
                },
                {
                    ability_special: 'damage_scepter',
                    text: '神杖升级伤害：',
                },
                {
                    ability_special: 'cast_range_scepter_bonus',
                    text: '神杖升级施法距离加成：',
                },
            ],
            name: '遥控炸弹',
            description: '埋设一颗隐形的炸弹，只有在你的控制下经过简短的延迟才会引爆。爆炸对建筑无效。',
            lore: '矿工湾的陷落！',
            scepter_description: '提升伤害和施法距离。',
            notes: ['敌方英雄摧毁炸弹将获得10金钱。'],
        },
        {
            ability_classname: 'imba_techies_focused_detonate',
            ability_specials: [
                {
                    ability_special: 'radius',
                    text: '作用范围：',
                },
            ],
            name: '集中引爆',
            description: '直接引爆目标区域内所有遥控炸弹。',
            lore: '既然能点燃所有引线那干嘛只点一根？',
            notes: [],
        },
        {
            ability_classname: 'imba_techies_remote_mines_self_detonate',
            ability_specials: [],
            name: '精确引爆',
            description: '直接引爆所有选中的遥控炸弹。',
            lore: '炸翻天！',
            notes: [],
        },
        {
            ability_classname: 'imba_techies_minefield_sign',
            ability_specials: [
                {
                    ability_special: 'aura_radius',
                    text: '作用范围：',
                },
                {
                    ability_special: 'lifetime',
                    text: '标识持续时间：',
                },
                {
                    ability_special: 'scepter_move_damage',
                    text: '伤害：',
                },
                {
                    ability_special: 'scepter_move_amt',
                    text: '移动距离触发：',
                },
            ],
            name: '雷区标识',
            description: '在指定地点放置警示牌，使作用范围内所有地雷为无敌状态。同一时间只能存在一个标识。持续{lifetime}秒。',
            lore: '别四处乱跑！',
            scepter_description:
                '提升雷区标识的作用范围和持续时间。敌方英雄进入标识的{trigger_radius}范围内时整个{aura_radius}范围变成一片雷区，持续{minefield_duration}秒。敌方单位在区域内移动都会受到伤害。雷区持续时间结束后标识会被摧毁。',
            notes: [],
        },
        {
            ability_classname: 'imba_techies_squees_scope',
            ability_specials: [],
            name: '斯奎的瞄准镜',
            description: '每点攻击速度都会让工程师获得{attack_range_tooltip}攻击距离和攻击弹道速度。',
            notes: [],
        },
        {
            ability_classname: 'imba_techies_spoons_stash',
            ability_specials: [],
            name: '斯布恩的藏品',
            description: '工程师可以使用背包中的物品，就像物品还在物品栏里一样。',
            notes: [],
        },
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: 'special_bonus_unique_imba_techies',
                    name: '+{s:bonus_damage} 爆破起飞！伤害',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_techies_2',
                    name: '+{s:bonus_radius} 粘性炸弹抓取/爆炸范围',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_techies_3',
                    name: '-{s:bonus_AbilityChargeRestoreTime}秒 感应地雷充能',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_techies_4',
                    name: '-{s:bonus_activation_delay}秒 感应地雷启动延迟',
                },
                {
                    talent_classname: 'special_bonus_unique_imba_techies_5',
                    name: '-{s:value}秒 爆破起飞！冷却',
                },
            ],
        },
    ],
    FacetArray_B: [
        {
            facet_classname: 'techies_facets_imba_1',
            name: '斯布林的秘密武器',
            description: '提升爆破起飞！伤害和对自身伤害。',
            related_abilities: [
                {
                    ability_classname: 'imba_techies_suicide',
                    description: '提升爆破起飞！伤害和对自身伤害。',
                },
            ],
            related_talents: [],
        },
    ],
    ModifierArray: [
        {
            modifier_classname: 'modifier_imba_techies_reactive_tazer_disarmed',
            name: '被电击',
            description: '被活性电荷缴械',
        },
        {
            modifier_classname: 'modifier_imba_techies_land_mines_charge_counter',
            name: '感应地雷能量点数',
            description: '只有拥有感应地雷能量时才能放置感应地雷。每隔一段时间会恢复一点。',
        },
        {
            modifier_classname: 'modifier_imba_techies_stasis_trap_stunned',
            name: '静滞陷阱缠绕效果',
            description: '你刚发现了工程师的一个静滞陷阱！',
        },
        {
            modifier_classname: 'modifier_imba_techies_land_mines_count',
            name: '感应地雷计数',
            description: '当前已埋设的感应数量。',
        },
        {
            modifier_classname: 'modifier_imba_techies_minefield_sign_aura',
            name: '雷区标识',
            description: '被工程师的雷区标识隐藏。',
        },
        {
            modifier_classname: 'modifier_imba_techies_sticky_bomb_slow',
            name: '粘性炸弹',
            description: '移动速度被减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。',
        },
        {
            modifier_classname: 'modifier_imba_techies_sticky_bomb_slow_secondary',
            name: '粘性炸弹',
            description: '移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%。',
        },
        {
            modifier_classname: 'modifier_imba_techies_reactive_tazer',
            name: '活性电击',
            description: '移动速度提升{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%并且会电击攻击者。',
        },
        {
            modifier_classname: 'modifier_imba_techies_land_mine_burn',
            name: '感应地雷',
            description: '魔法抗性降低{MODIFIER_PROPERTY_MAGICAL_RESISTANCE_BONUS}%。',
        },
        {
            modifier_classname: 'modifier_imba_techies_minefield_sign_scepter_aura',
            name: '雷区已启动',
            description: '移动时会受到魔法伤害！',
        },
        {
            modifier_classname: 'modifier_imba_techies_minefield_sign_scepter',
            name: '雷区已启动',
            description: '对经过的敌人造成伤害。',
        },
    ],
};
