import './imba_medusa_mana_shield';
import './imba_medusa_mana_shield_end';
import './imba_medusa_mystic_snake';
import './imba_medusa_split_shot';
import './imba_medusa_split_shot_end';
import './imba_medusa_stone_gaze';

declare global {
    const enum HeroAbility {
        /** 魔法护盾 */
        imba_medusa_mana_shield = 'imba_medusa_mana_shield',
        /** 关闭魔法护盾 */
        imba_medusa_mana_shield_end = 'imba_medusa_mana_shield_end',
        /** 秘术异蛇 */
        imba_medusa_mystic_snake = 'imba_medusa_mystic_snake',
        /** 分裂箭*/
        medusa_split_shot = 'medusa_split_shot',
        /** 关闭分裂箭*/
        medusa_split_shot_end = 'medusa_split_shot_end',
        /** 石化凝视 */
        imba_medusa_stone_gaze = 'imba_medusa_stone_gaze',
    }
}
