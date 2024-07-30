declare interface CustomNetTableDeclarations {
    game_timer: {
        game_timer: {
            current_time: number;
            current_state: 1 | 2 | 3 | 4 | 5;
            current_round: number;
        };
    };
    hero_list: {
        hero_list: Record<string, string> | string[];
    };

    custom_ability_textur: Record<string, { name: string }>;
    custom_shield_data: Record<string, { [shieldType: string]: { max_shield: string; now_shield: string } }>;
    custom_spell_amplify: Record<string, { all_amp: string }>;
}
