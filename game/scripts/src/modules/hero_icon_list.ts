const HERO_ICON_LIST: {
    [key in DotaAbility | string | HeroAbility]?: {
        Particle?: {
            [key: string]: string;
        };
        model?: {
            [key: string]: string;
        };
    };
} = {
    [HeroAbility.imba_antimage_mana_break]: {
        Particle: {
            'particles/econ/items/antimage/antimage_weapon_basher_ti5/am_manaburn_basher_ti_5.vpcf': 'antimage/the_basher_blades/antimage_mana_break',
            'particles/econ/items/antimage/antimage_weapon_basher_ti5_gold/am_manaburn_basher_ti_5_gold.vpcf':
                'antimage/golden_basher_blades/antimage_mana_break',
        },
    },
    [HeroAbility.imba_antimage_blink]: {
        Particle: {
            'particles/econ/items/antimage/antimage_ti7/antimage_blink_start_ti7.vpcf': 'antimage/immortal/antimage_blink',
            'particles/econ/items/antimage/antimage_ti7_golden/antimage_blink_start_ti7_golden.vpcf': 'antimage/immortal/antimage_blink_gold',
        },
    },
};
