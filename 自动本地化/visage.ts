import type { LocalizationData } from '../../localizationInterfaces';

export const data: LocalizationData = {
    AbilityArray: [
        {
            ability_classname: "imba_visage_grave_chill",
            ability_specials: [
                {
                    ability_special: "chill_duration",
                    text: "持续时间："
                },
                {
                    ability_special: "movespeed_bonus",
                    text: "%移动速度吸取："
                },
                {
                    ability_special: "attackspeed_bonus",
                    text: "攻击速度吸取："
                },
                {
                    ability_special: "target_radius",
                    text: "作用范围："
                },
                {
                    ability_special: "penalty",
                    text: "%次级目标减少："
                }
            ],
            name: "黄泉颤抖",
            description: "维萨吉吸取目标单位的移动和攻击速度，自身和附近的佣兽获得等量加成。",
            lore: "温暖的阳光到了黑暗的狭窄迷宫里只剩下寒意。",
            notes: [
                "两个状态效果是分开驱散的。",
                "速度加成和目标的速度减少相互独立。",
                "维萨吉周围{radius}内的佣兽也将获得黄泉颤抖的加成效果。"
            ]
        },
        {
            ability_classname: "imba_visage_soul_assumption",
            ability_specials: [
                {
                    ability_special: "soul_base_damage",
                    text: "基础伤害："
                },
                {
                    ability_special: "soul_charge_damage",
                    text: "每点灵魂伤害："
                },
                {
                    ability_special: "soul_charge_gold",
                    text: "击杀时每点能量额外金钱："
                },
                {
                    ability_special: "gold_creep_pct",
                    text: "%非英雄单位金钱："
                },
                {
                    ability_special: "stack_limit",
                    text: "最大能量点数："
                },
                {
                    ability_special: "stack_duration",
                    text: "能量持续时间："
                },
                {
                    ability_special: "damage_limit",
                    text: "集聚伤害临界值："
                },
                {
                    ability_special: "radius",
                    text: "集聚伤害范围："
                }
            ],
            name: "灵魂超度",
            description: "每次附近英雄（不论敌我）受到的伤害超过{damage_limit}点，维萨吉就能集聚灵魂精华的能量。将精华释放后，会对目标单位造成基础伤害，每一点集聚的能量还将造成额外伤害。",
            lore: "收集的死者亡魂四散而去带回生魂。",
            notes: [
                "能量点数只计算来自玩家或肉山的伤害，必须大于{damage_min}点小于{damage_max}点。自残型伤害和灵魂超度造成的伤害不计算在内。"
            ]
        },
        {
            ability_classname: "imba_visage_gravekeepers_cloak",
            ability_specials: [
                {
                    ability_special: "max_layers",
                    text: "最大层数："
                },
                {
                    ability_special: "recovery_time",
                    text: "每层恢复时间："
                },
                {
                    ability_special: "minimum_damage",
                    text: "最低触发伤害："
                },
                {
                    ability_special: "max_damage_reduction",
                    text: "%最高承伤降低："
                },
                {
                    ability_special: "shard_cooldown",
                    text: "冷却时间："
                },
                {
                    ability_special: "shard_manacost",
                    text: "魔法消耗："
                }
            ],
            name: "陵卫斗篷",
            description: "维萨吉产生数层屏障来保护他，降低受到的伤害。每当他受到来自玩家的伤害，就会失去一层屏障，失去的屏障需要一定时间才能恢复。",
            lore: "维萨吉坚硬的鳞片同时具有鬼魂和石像的属性，刀剑和魔法的突袭对他来说不痛不痒。",
            shard_description: "维萨吉可以主动施放陵卫斗篷。恢复最多{shard_hp_restoration_pct}%自身生命值。",
            notes: [
                "每次维萨吉受到来自其他玩家的伤害超过最小伤害时，保护层就会移除一层。",
                "佣兽在维萨吉周围{radius}范围内将获得当前陵卫斗篷的承伤降低效果。",
                "破坏会使技能无法获得新的叠加效果。",
                "破坏不会使现有叠加效果提供的加成失效。"
            ]
        },
        {
            ability_classname: "imba_visage_summon_familiars",
            ability_specials: [
                {
                    ability_special: "familiar_hp",
                    text: "佣兽生命值："
                },
                {
                    ability_special: "familiar_armor",
                    text: "佣兽护甲："
                },
                {
                    ability_special: "familiar_attack_range",
                    text: "佣兽攻击距离："
                },
                {
                    ability_special: "familiar_base_movespeed",
                    text: "佣兽移动速度："
                },
                {
                    ability_special: "familiar_bounty",
                    text: "佣兽击杀金钱："
                },
                {
                    ability_special: "familiar_attack_damage",
                    text: "佣兽攻击力："
                }
            ],
            name: "召唤佣兽",
            description: "召唤{familiar_count}只盲眼的佣兽为维萨吉作战。佣兽拥有石像形态技能，可以化为石像，在落地时使敌人眩晕。在石像形态中的佣兽无敌，并且迅速回复生命值。佣兽被击杀时给予高额奖励。",
            lore: "死灵飞龙的佣兽，也是狭窄迷宫的守卫，俯视着他的领地。",
            notes: [
                "施放召唤佣兽后已有的佣兽将会死亡。",
                "佣兽在维萨吉周围时将获得当前陵卫斗篷的承伤降低效果和黄泉颤抖的加成效果。"
            ]
        },
        {
            ability_classname: "imba_visage_silent_as_the_grave",
            ability_specials: [
                {
                    ability_special: "bonus_duration",
                    text: "伤害加成持续时间："
                },
                {
                    ability_special: "bonus_damage",
                    text: "%伤害加成："
                },
                {
                    ability_special: "movespeed_bonus",
                    text: "%移动速度加成："
                }
            ],
            name: "静如古墓",
            description: "维萨吉和佣兽变为隐形，并获得移动速度加成，自身移动类型升级为飞行。维萨吉或佣兽脱离隐身时，短时间内造成的伤害会增加。持续{invis_duration}秒。攻击或施法都会脱离隐身。",
            notes: []
        },
        {
            ability_classname: "imba_visage_stone_form_self_cast",
            ability_specials: [
                {
                    ability_special: "stun_radius",
                    text: "眩晕作用范围："
                },
                {
                    ability_special: "stun_damage",
                    text: "伤害："
                },
                {
                    ability_special: "stun_duration",
                    text: "眩晕持续时间："
                },
                {
                    ability_special: "hp_regen",
                    text: "额外生命恢复："
                }
            ],
            name: "石像形态",
            description: "命令离维萨吉最近的佣兽在当前地点施放石像形态，化为石像并坠向地面，对范围的所有敌人造成眩晕和伤害。此时佣兽无敌，并非常迅速地恢复生命值。{stone_duration}秒后佣兽自动解除石像形态。<br><br>可以设为多样施法，命令最近的佣兽移动至目标地点再施放石像形态。",
            notes: [
                "尽管石像形态无法被驱散，但眩晕效果可以被强驱散移除。"
            ]
        },
        {
            ability_classname: "imba_visage_summon_familiars_stone_form",
            ability_specials: [
                {
                    ability_special: "stun_radius",
                    text: "眩晕作用范围："
                },
                {
                    ability_special: "stun_damage",
                    text: "伤害："
                },
                {
                    ability_special: "stun_duration",
                    text: "眩晕持续时间："
                },
                {
                    ability_special: "stone_duration",
                    text: "石像形态持续时间："
                },
                {
                    ability_special: "hp_regen",
                    text: "额外生命恢复："
                }
            ],
            name: "石像形态",
            description: "短暂延迟后，佣兽化为石像并坠向地面，对范围的所有敌人造成眩晕及伤害。此时佣兽无敌，并非常迅速地恢复生命值。{stone_duration}秒后佣兽自动解除石像形态。<br><br>可以设为多样施法，命令佣兽移动至目标地点再施放石像形态。",
            notes: []
        },
        {
            ability_classname: "imba_visage_lurker",
            ability_specials: [],
            name: "潜伏",
            description: "只要维萨吉没有受到伤害，他的技能冷却时间就会缩短。<br><br>维萨吉每{stack_gain_time}秒没有受到伤害就会获得一层叠加效果。每层叠加效果提供{cooldown_speed_per_stack}%冷却时间减少，最多为{max_stacks}层。叠加效果会在受到任意伤害{linger_duration}秒后消失。",
            notes: [
                "破坏会使技能无法获得新的叠加效果。",
                "破坏不会使现有叠加效果提供的加成失效。",
                "影响维萨吉的技能冷却时间，包括正在冷却的技能。"
            ]
        }
    ],
    TalentArray: [
        {
            talents: [
                {
                    talent_classname: "special_bonus_unique_imba_visage_1",
                    name: "+{s:bonus_armor_reduction_per_hit} 维萨吉和佣兽削弱护甲",
                    description: "本效果的多个来源可以叠加，持续{s:bonus_armor_reduction_duration}秒。"
                },
                {
                    talent_classname: "special_bonus_unique_imba_visage_3",
                    name: "灵魂超度攻击{s:value}个目标",
                    description: "施放灵魂超度时会同时对施法距离内一个随机敌方单位施放，以英雄优先。"
                },
                {
                    talent_classname: "special_bonus_unique_imba_visage_4",
                    name: "+{s:bonus_soul_charge_damage} 灵魂超度每点灵魂伤害"
                },
                {
                    talent_classname: "special_bonus_unique_imba_visage_5",
                    name: "陵卫斗篷提供+{s:value} 护甲"
                },
                {
                    talent_classname: "special_bonus_unique_imba_visage_6",
                    name: "+{s:bonus_familiar_count} 佣兽"
                },
                {
                    talent_classname: "special_bonus_unique_imba_visage_7",
                    name: "+{s:bonus_bonus_damage} 维萨吉和佣兽攻击力"
                },
                {
                    talent_classname: "special_bonus_unique_imba_visage_8",
                    name: "-{s:bonus_AbilityCooldown}秒 黄泉颤抖冷却"
                },
                {
                    talent_classname: "special_bonus_unique_imba_visage_grave_chill_duration",
                    name: "+{s:bonus_chill_duration}秒 黄泉颤抖持续时间"
                }
            ]
        }
    ],
    FacetArray_B: [
        {
            facet_classname: "visage_facets_imba_1",
            name: "圣龛 | 忠实部下 | 死亡代价",
            description: "黄泉颤抖还会作用于目标附近的单位。维萨吉也能召回他的佣兽。 佣兽会自动跟随维萨吉，并攻击他的目标。 灵魂超度击杀时会提供最多{s:bonus_gold_max_tooltip}额外金钱。",
            related_abilities: [
                {
                    ability_classname: "imba_visage_grave_chill",
                    description: "黄泉颤抖还会作用于目标周围的单位。"
                },
                {
                    ability_classname: "imba_visage_soul_assumption",
                    description: "灵魂超度击杀时每点灵魂能量会提供{bonus_soul_charge_gold}金，最高为{bonus_gold_max_tooltip}金。击杀非英雄时获得的金钱有所减少。灵魂超度作用于敌方英雄后{gold_grace_period_hero}秒内英雄阵亡也会获得金钱。"
                },
                {
                    ability_classname: "imba_visage_summon_familiars",
                    description: "佣兽会攻击维萨吉最后尝试攻击的目标，如果目标超出了维萨吉的攻击距离，或者维萨吉下达了取消当前动作或固守原地的命令后，佣兽会返回。<br><br>技能可以设为自动施法，命令佣兽回到维萨吉身旁，在技能关闭前不会离开。"
                }
            ],
            related_talents: []
        }
    ],
    ModifierArray: [
        {
            modifier_classname: "modifier_imba_visage_lurker",
            name: "潜伏",
            description: "获得{MODIFIER_PROPERTY_TOOLTIP}%技能冷却时间减少。"
        },
        {
            modifier_classname: "modifier_imba_visage_grave_chill_buff",
            name: "黄泉颤抖",
            description: "移动速度提升{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%，攻击速度提升{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}。"
        },
        {
            modifier_classname: "modifier_imba_visage_grave_chill_debuff",
            name: "黄泉颤抖",
            description: "移动速度减缓{MODIFIER_PROPERTY_MOVESPEED_BONUS_PERCENTAGE}%，攻击速度降低{MODIFIER_PROPERTY_ATTACKSPEED_BONUS_CONSTANT}。"
        },
        {
            modifier_classname: "modifier_imba_visage_soul_assumption",
            name: "计入灵魂",
            description: "通过灵魂超度储存的灵魂数量。"
        },
        {
            modifier_classname: "modifier_imba_visage_gold_assumption_delay",
            name: "死亡代价",
            description: "如果被击杀，英雄会获得额外金钱。"
        },
        {
            modifier_classname: "modifier_imba_visage_gravekeepers_cloak",
            name: "陵卫斗篷",
            description: "每层防护层都提供额外的承伤降低效果。"
        },
        {
            modifier_classname: "modifier_imba_visage_summon_familiars_damage_charge",
            name: "佣兽攻击力",
            description: "获得{MODIFIER_PROPERTY_PREATTACK_BONUS_DAMAGE}点额外攻击力。"
        },
        {
            modifier_classname: "modifier_imba_visage_summon_familiars_stone_form_buff",
            name: "石像形态",
            description: "无敌。获得{MODIFIER_PROPERTY_HEALTH_REGEN_CONSTANT}点／秒额外生命回复。"
        },
        {
            modifier_classname: "modifier_imba_visage_gravekeepers_cloak_secondary",
            name: "陵卫斗篷",
            description: "获得伤害减免效果。"
        },
        {
            modifier_classname: "modifier_imba_visage_silent_as_the_grave",
            name: "静如古墓",
            description: "获得隐身效果，攻击速度加成和飞行状态。"
        },
        {
            modifier_classname: "modifier_imba_visage_armor_reduction",
            name: "腐蚀",
            description: "护甲被削弱{MODIFIER_PROPERTY_PHYSICAL_ARMOR_BONUS}点。"
        },
        {
            modifier_classname: "modifier_imba_visage_summon_familiars_in_formation",
            name: "紧密队形",
            description: "无法命令佣兽独立于维萨吉攻击和移动。"
        }
    ]
};