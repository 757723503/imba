import './imba_abaddon_aphotic_shield';
import './imba_abaddon_borrowed_time';
import './imba_abaddon_death_coil';
import './imba_abaddon_frostmourne';
import './imba_abaddon_withering_mist';

declare global {
    const enum HeroAbility {
        /** 无光之盾 */
        imba_abaddon_aphotic_shield = 'imba_abaddon_aphotic_shield',
        /** 回光返照 */
        imba_abaddon_borrowed_time = 'imba_abaddon_borrowed_time',
        /** 死亡缠绕 */
        imba_abaddon_death_coil = 'imba_abaddon_death_coil',
        /** 魔霭诅咒*/
        imba_abaddon_frostmourne = 'imba_abaddon_frostmourne',
        /** 凋零迷雾*/
        imba_abaddon_withering_mist = 'imba_abaddon_withering_mist',
    }
    const enum HeroTalent {
        // talents: [
        //     {
        //         talent_classname: 'special_bonus_unique_imba_abaddon',
        //         name: '+{s:bonus_damage_absorb} 无光之盾护盾数值',
        //     },
        //     {
        //         talent_classname: 'special_bonus_unique_imba_abaddon_2',
        //         name: '+{s:bonus_target_damage} 迷雾缠绕治疗/伤害',
        //     },
        //     {
        //         talent_classname: 'special_bonus_unique_imba_abaddon_3',
        //         name: '+{s:bonus_curse_attack_speed} 魔霭诅咒攻速加成',
        //     },
        //     {
        //         talent_classname: 'special_bonus_unique_imba_abaddon_4',
        //         name: '{s:bonus_effect_radius} 范围型迷雾缠绕',
        //     },
        //     {
        //         talent_classname: 'special_bonus_unique_imba_abaddon_5',
        //         name: '+{s:bonus_curse_dps} 魔霭诅咒每秒伤害',
        //     },
        //     {
        //         talent_classname: 'special_bonus_unique_imba_abaddon_6',
        //         name: '-{s:bonus_curse_slow}% 魔霭诅咒诅咒减速',
        //     },
        //     {
        //         talent_classname: 'special_bonus_unique_imba_abaddon_7',
        //         name: '无光之盾提供+{s:bonus_regen} 生命恢复',
        //     },
        //     {
        //         talent_classname: 'special_bonus_unique_imba_abaddon_immolation',
        //         name: '{s:bonus_immolate_damage} 回光返照献祭每秒伤害',
        //     },
        // ],
        /** +{s:bonus_damage_absorb} 无光之盾护盾数值 */
        imba_abaddon = 'special_bonus_unique_imba_abaddon',
        /** +{s:bonus_target_damage} 迷雾缠绕治疗/伤害 */
        imba_abaddon_2 = 'special_bonus_unique_imba_abaddon_2',
        /** +{s:bonus_curse_attack_speed} 魔霭诅咒攻速加成 */
        imba_abaddon_3 = 'special_bonus_unique_imba_abaddon_3',
        /** {s:bonus_effect_radius} 范围型迷雾缠绕 */
        imba_abaddon_4 = 'special_bonus_unique_imba_abaddon_4',
        /**  +{s:bonus_curse_dps} 魔霭诅咒每秒伤害 */
        imba_abaddon_5 = 'special_bonus_unique_imba_abaddon_5',
        /**     -{s:bonus_curse_slow}% 魔霭诅咒诅咒减速 */
        imba_abaddon_6 = 'special_bonus_unique_imba_abaddon_6',
        /**     无光之盾提供+{s:bonus_regen} 生命恢复 */
        imba_abaddon_7 = 'special_bonus_unique_imba_abaddon_7',
        /**    {s:bonus_immolate_damage} 回光返照献祭每秒伤害 */
        imba_abaddon_immolation = 'special_bonus_unique_imba_abaddon_immolation',
    }
}
