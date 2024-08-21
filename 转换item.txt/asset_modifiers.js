const assetModifiers = {
    "asset_modifiers": {
        "46": {
            "0": {
                "type": "particle",
                "asset": "particles/units/heroes/hero_kunkka/kunkka_weapon_tidebringer.vpcf",
                "modifier": "particles/econ/items/kunkka/divine_anchor/hero_kunkka_dafx_weapon/kunkka_weapon_tidebringer_fxset.vpcf",
                "apply_when_equipped_in_ability_effects_slot": "2"
            },
            "1": {
                "type": "particle",
                "asset": "particles/units/heroes/hero_kunkka/kunkka_spell_tidebringer.vpcf",
                "modifier": "particles/econ/items/kunkka/divine_anchor/hero_kunkka_dafx_weapon/kunkka_spell_tidebringer_fxset.vpcf",
                "apply_when_equipped_in_ability_effects_slot": "2"
            },
            "2": {
                "type": "ability_icon",
                "asset": "kunkka_tidebringer",
                "modifier": "kunkka_divine_anchor_tidebringer",
                "apply_when_equipped_in_ability_effects_slot": "2"
            },
            "name": "tidebringer_divine_anchor",
            "loc_key": "#DOTA_Ability_Mod_Tidebringer_Divine_Anchor",
            "file": "particles/econ/items/kunkka/divine_anchor/hero_kunkka_dafx_weapon"
        },
        "53": {
            "0": {
                "type": "particle",
                "asset": "particles/units/heroes/hero_rubick/rubick_staff_ambient.vpcf",
                "modifier": "particles/econ/items/rubick/rubick_staff_wandering/rubick_staff_ambient_whset.vpcf"
            },
            "1": {
                "type": "particle",
                "asset": "particles/units/heroes/hero_rubick/rubick_base_attack.vpcf",
                "modifier": "particles/econ/items/rubick/rubick_staff_wandering/rubick_base_attack_whset.vpcf"
            },
            "2": {
                "type": "ability_icon",
                "asset": "rubick_fade_bolt",
                "modifier": "rubick/harlequin_icons/rubick_fade_bolt"
            },
            "name": "harlequin_weapon",
            "loc_key": "#DOTA_Asset_Mod_Harlequin_Weapon",
            "file": "particles/econ/items/rubick/rubick_staff_wandering"
        },
        "54": {
            "0": {
                "type": "ability_icon",
                "asset": "rubick_null_field",
                "modifier": "rubick/harlequin_icons/rubick_null_field"
            },
            "name": "harlequin_head",
            "loc_key": "#DOTA_Asset_Mod_Harlequin_Head"
        },
        "55": {
            "0": {
                "type": "ability_icon",
                "asset": "rubick_telekinesis",
                "modifier": "rubick/harlequin_icons/rubick_telekinesis"
            },
            "1": {
                "type": "ability_icon",
                "asset": "rubick_telekinesis_land",
                "modifier": "rubick/harlequin_icons/rubick_telekinesis_land"
            },
            "name": "harlequin_cape",
            "loc_key": "#DOTA_Asset_Mod_Harlequin_Cape"
        },
        "56": {
            "0": {
                "type": "ability_icon",
                "asset": "rubick_spell_steal",
                "modifier": "rubick/harlequin_icons/rubick_spell_steal"
            },
            "name": "harlequin_mantle",
            "loc_key": "#DOTA_Asset_Mod_Harlequin_Mantle"
        },
        "57": {
            "0": {
                "type": "ability_icon",
                "asset": "obsidian_destroyer_sanity_eclipse",
                "modifier": "obsidian_destroyer/lucent_gate_icons/obsidian_destroyer_sanity_eclipse"
            },
            "name": "lucent_gate_eclipse",
            "loc_key": "#DOTA_Asset_Mod_Lucent_Gate_Eclipse"
        },
        "58": {
            "0": {
                "type": "ability_icon",
                "asset": "obsidian_destroyer_essence_aura",
                "modifier": "obsidian_destroyer/lucent_gate_icons/obsidian_destroyer_essence_aura"
            },
            "name": "lucent_gate_aura",
            "loc_key": "#DOTA_Asset_Mod_Lucent_Gate_Aura"
        },
        "59": {
            "0": {
                "type": "ability_icon",
                "asset": "obsidian_destroyer_astral_imprisonment",
                "modifier": "obsidian_destroyer/lucent_gate_icons/obsidian_destroyer_astral_imprisonment"
            },
            "name": "lucent_gate_imprisonment",
            "loc_key": "#DOTA_Asset_Mod_Lucent_Gate_Imprisonment"
        },
        "60": {
            "0": {
                "type": "ability_icon",
                "asset": "obsidian_destroyer_arcane_orb",
                "modifier": "obsidian_destroyer/lucent_gate_icons/obsidian_destroyer_arcane_orb"
            },
            "name": "lucent_gate_orb",
            "loc_key": "#DOTA_Asset_Mod_Lucent_Gate_Orb"
        },
        "61": {
            "0": {
                "type": "ability_icon",
                "asset": "magnataur_shockwave",
                "modifier": "magnataur/forgemaster_icons/magnataur_shockwave"
            },
            "name": "forgemaster_shockwave",
            "loc_key": "#DOTA_Asset_Mod_Forge_Master_Shockwave"
        },
        "62": {
            "0": {
                "type": "ability_icon",
                "asset": "magnataur_empower",
                "modifier": "magnataur/forgemaster_icons/magnataur_empower"
            },
            "name": "forgemaster_empower",
            "loc_key": "#DOTA_Asset_Mod_Forge_Master_Empower"
        },
        "63": {
            "0": {
                "type": "ability_icon",
                "asset": "magnataur_skewer",
                "modifier": "magnataur/forgemaster_icons/magnataur_skewer"
            },
            "name": "forgemaster_skewer",
            "loc_key": "#DOTA_Asset_Mod_Forge_Master_Skewer"
        },
        "64": {
            "0": {
                "type": "ability_icon",
                "asset": "magnataur_reverse_polarity",
                "modifier": "magnataur/forgemaster_icons/magnataur_reverse_polarity"
            },
            "name": "forgemaster_shockwave",
            "loc_key": "#DOTA_Asset_Mod_Forge_Master_Reverse_Polarity"
        },
        "65": {
            "0": {
                "type": "ability_icon",
                "asset": "lycan_shapeshift",
                "modifier": "lycan/hunter_of_kings_ability_icons/lycan_shapeshift"
            },
            "1": {
                "type": "ability_icon",
                "asset": "lycan_howl",
                "modifier": "lycan/hunter_of_kings_ability_icons/lycan_howl"
            },
            "name": "hunter_of_kings_shapeshift",
            "loc_key": "#DOTA_Asset_Mod_Hunter_of_Kings_Shapeshift"
        },
        "66": {
            "0": {
                "type": "ability_icon",
                "asset": "lycan_summon_wolves",
                "modifier": "lycan/hunter_of_kings_ability_icons/lycan_summon_wolves"
            },
            "name": "hunter_of_kings_summon",
            "loc_key": "#DOTA_Asset_Mod_Hunter_of_Kings_Summon"
        },
        "67": {
            "0": {
                "type": "ability_icon",
                "asset": "lycan_feral_impulse",
                "modifier": "lycan/hunter_of_kings_ability_icons/lycan_feral_impulse"
            },
            "name": "hunter_of_kings_feral_impulse",
            "loc_key": "#DOTA_Asset_Mod_Hunter_of_Kings_Feral_Impulse"
        },
        "68": {
            "0": {
                "type": "ability_icon",
                "asset": "riki_backstab",
                "modifier": "riki/haze_atrocity_icons/riki_backstab"
            },
            "name": "monstrous_reprisal_back_stab",
            "loc_key": "#DOTA_Asset_Mod_Monstrous_Reprisal_Back_Stab"
        },
        "69": {
            "0": {
                "type": "ability_icon",
                "asset": "riki_blink_strike",
                "modifier": "riki/haze_atrocity_icons/riki_blink_strike"
            },
            "name": "monstrous_reprisal_blink_strike",
            "loc_key": "#DOTA_Asset_Mod_Monstrous_Reprisal_Blink_Strike"
        },
        "70": {
            "0": {
                "type": "ability_icon",
                "asset": "riki_permanent_invisibility",
                "modifier": "riki/haze_atrocity_icons/riki_permanent_invisibility"
            },
            "name": "monstrous_reprisal_permanent_invisibility",
            "loc_key": "#DOTA_Asset_Mod_Monstrous_Reprisal_Permanent_Invisibility"
        },
        "71": {
            "0": {
                "type": "ability_icon",
                "asset": "riki_smoke_screen",
                "modifier": "riki/haze_atrocity_icons/riki_smoke_screen"
            },
            "name": "wmonstrous_reprisal_smoke_screen",
            "loc_key": "#DOTA_Asset_Mod_Monstrous_Reprisal_Smoke_Screen"
        },
        "72": {
            "0": {
                "type": "ability_icon",
                "asset": "treant_eyes_in_the_forest",
                "modifier": "treant/fungal_protector_icons/treant_eyes_in_the_forest"
            },
            "1": {
                "type": "ability_icon",
                "asset": "treant_natures_guise",
                "modifier": "treant/fungal_protector_icons/treant_natures_guise"
            },
            "name": "agaric_flourish_eyes_guise_icons",
            "loc_key": "#DOTA_Asset_Mod_Agaric_Flourish_Eyes_Guise_Icons"
        },
        "73": {
            "0": {
                "type": "ability_icon",
                "asset": "treant_overgrowth",
                "modifier": "treant/fungal_protector_icons/treant_overgrowth"
            },
            "name": "agaric_flourish_overgrowth_icon",
            "loc_key": "#DOTA_Asset_Mod_Agaric_Flourish_Overgrowth_Icon"
        },
        "74": {
            "0": {
                "type": "ability_icon",
                "asset": "treant_living_armor",
                "modifier": "treant/fungal_protector_icons/treant_living_armor"
            },
            "name": "agaric_flourish_armor_icon",
            "loc_key": "#DOTA_Asset_Mod_Agaric_Flourish_Armor_Icon"
        },
        "75": {
            "0": {
                "type": "ability_icon",
                "asset": "treant_leech_seed",
                "modifier": "treant/fungal_protector_icons/treant_leech_seed"
            },
            "name": "agaric_flourish_leech_seed_icon",
            "loc_key": "#DOTA_Asset_Mod_Agaric_Flourish_Leech_Seed_Icon"
        },
        "76": {
            "0": {
                "type": "ability_icon",
                "asset": "sven_great_cleave",
                "modifier": "sven/fiend_cleaver_icons/sven_great_cleave"
            },
            "name": "fiend_cleaver_great_cleave_icon",
            "loc_key": "#DOTA_Asset_Mod_Fiend_Cleaver_Great_Cleave_Icon"
        },
        "77": {
            "0": {
                "type": "ability_icon",
                "asset": "sven_warcry",
                "modifier": "sven/fiend_cleaver_icons/sven_warcry"
            },
            "name": "fiend_cleaver_warcry_icon",
            "loc_key": "#DOTA_Asset_Mod_Fiend_Cleaver_Warcry_Icon"
        },
        "78": {
            "0": {
                "type": "ability_icon",
                "asset": "sven_gods_strength",
                "modifier": "sven/fiend_cleaver_icons/sven_gods_strength"
            },
            "name": "fiend_cleaver_gods_strength_icon",
            "loc_key": "#DOTA_Asset_Mod_Fiend_Cleaver_Gods_Strength_Icon"
        },
        "79": {
            "0": {
                "type": "ability_icon",
                "asset": "sven_storm_bolt",
                "modifier": "sven/fiend_cleaver_icons/sven_storm_bolt"
            },
            "name": "fiend_cleaver_storm_bolt_icon",
            "loc_key": "#DOTA_Asset_Mod_Fiend_Cleaver_Storm_Bolt_Icon"
        },
        "80": {
            "0": {
                "type": "ability_icon",
                "asset": "drow_ranger_frost_arrows",
                "modifier": "drow_ranger/dragons_touch_ability_icons/drow_ranger_frost_arrows"
            },
            "1": {
                "type": "ability_icon",
                "asset": "drow_ranger_marksmanship",
                "modifier": "drow_ranger/dragons_touch_ability_icons/drow_ranger_marksmanship"
            },
            "2": {
                "type": "ability_icon",
                "asset": "drow_ranger_trueshot",
                "modifier": "drow_ranger/dragons_touch_ability_icons/drow_ranger_trueshot"
            },
            "name": "eldwurms_touch_bow_icons",
            "loc_key": "#DOTA_Asset_Mod_Eldwurms_Touch_Bow_Icons"
        },
        "81": {
            "0": {
                "type": "ability_icon",
                "asset": "drow_ranger_wave_of_silence",
                "modifier": "drow_ranger/dragons_touch_ability_icons/drow_ranger_wave_of_silence"
            },
            "name": "eldwurms_touch_wave_of_silence_icon",
            "loc_key": "#DOTA_Asset_Mod_Eldwurms_Touch_Wave_of_Silence_Icon"
        },
        "82": {
            "0": {
                "type": "ability_icon",
                "asset": "pudge_dismember",
                "modifier": "pudge/scavenger_dragon_ability/pudge_dismember"
            },
            "1": {
                "type": "ability_icon",
                "asset": "pudge_flesh_heap",
                "modifier": "pudge/scavenger_dragon_ability/pudge_flesh_heap"
            },
            "2": {
                "type": "ability_icon",
                "asset": "pudge_meat_hook",
                "modifier": "pudge/scavenger_dragon_ability/pudge_meat_hook"
            },
            "3": {
                "type": "ability_icon",
                "asset": "pudge_rot",
                "modifier": "pudge/scavenger_dragon_ability/pudge_rot"
            },
            "name": "scavenger_dragon",
            "loc_key": "#DOTA_Asset_Mod_Scavenger_Dragon"
        },
        "83": {
            "0": {
                "type": "particle",
                "asset": "particles/units/heroes/hero_juggernaut/juggernaut_omni_slash_trail.vpcf",
                "modifier": "particles/econ/items/juggernaut/bladekeeper_omnislash/_dc_juggernaut_omni_slash_trail.vpcf",
                "apply_when_equipped_in_ability_effects_slot": "4"
            },
            "1": {
                "type": "particle",
                "asset": "particles/units/heroes/hero_juggernaut/juggernaut_omni_slash_tgt.vpcf",
                "modifier": "particles/econ/items/juggernaut/bladekeeper_omnislash/_dc_juggernaut_omni_slash_tgt.vpcf",
                "apply_when_equipped_in_ability_effects_slot": "4"
            },
            "2": {
                "type": "ability_icon",
                "asset": "juggernaut_omni_slash",
                "modifier": "juggernaut/bladekeeper/juggernaut_omni_slash",
                "apply_when_equipped_in_ability_effects_slot": "4"
            },
            "name": "dc_bladekeeper_omnislash",
            "loc_key": "#DOTA_Asset_Mod_DC_Bladekeeper_Omnislash",
            "file": "particles/econ/items/juggernaut/bladekeeper_omnislash"
        },
        "84": {
            "0": {
                "type": "particle",
                "asset": "particles/units/heroes/hero_juggernaut/juggernaut_blade_fury.vpcf",
                "modifier": "particles/econ/items/juggernaut/bladekeeper_bladefury/_dc_juggernaut_blade_fury.vpcf",
                "apply_when_equipped_in_ability_effects_slot": "1"
            },
            "1": {
                "type": "ability_icon",
                "asset": "juggernaut_blade_fury",
                "modifier": "juggernaut/bladekeeper/juggernaut_blade_fury",
                "apply_when_equipped_in_ability_effects_slot": "1"
            },
            "name": "dc_bladekeeper_bladefury",
            "loc_key": "#DOTA_Asset_Mod_DC_Bladekeeper_Bladefury",
            "file": "particles/econ/items/juggernaut/bladekeeper_bladefury"
        },
        "85": {
            "0": {
                "type": "particle",
                "asset": "particles/units/heroes/hero_juggernaut/juggernaut_healing_ward.vpcf",
                "modifier": "particles/econ/items/juggernaut/bladekeeper_healing_ward/juggernaut_healing_ward_dc.vpcf"
            },
            "1": {
                "type": "ability_icon",
                "asset": "juggernaut_healing_ward",
                "modifier": "juggernaut/bladekeeper/juggernaut_healing_ward"
            },
            "name": "dc_bladekeeper_healing_ward",
            "loc_key": "#DOTA_Asset_Mod_DC_Bladekeeper_Healing_Ward",
            "file": "particles/econ/items/juggernaut/bladekeeper_healing_ward"
        },
        "86": {
            "0": {
                "type": "particle",
                "asset": "particles/units/heroes/hero_centaur/centaur_double_edge_body.vpcf",
                "modifier": "particles/econ/items/centaur/dc_centaur_double_edge/_dc_centaur_double_edge_body.vpcf"
            },
            "1": {
                "type": "particle",
                "asset": "particles/units/heroes/hero_centaur/centaur_double_edge.vpcf",
                "modifier": "particles/econ/items/centaur/dc_centaur_double_edge/_dc_centaur_double_edge.vpcf"
            },
            "2": {
                "type": "activity",
                "asset": "ACT_DOTA_CAST_ABILITY_2",
                "modifier": "unbroken"
            },
            "name": "dc_centaur_double_edge",
            "loc_key": "#DOTA_Asset_Mod_Double_Edge_of_the_Berserker",
            "file": "particles/econ/items/centaur/dc_centaur_double_edge"
        },
        "87": {
            "0": {
                "type": "particle",
                "asset": "particles/units/heroes/hero_juggernaut/jugg_crit_blur.vpcf",
                "modifier": "particles/econ/items/juggernaut/bladekeeper_critical_strike/_dc_juggernaut_crit_blur.vpcf"
            },
            "1": {
                "type": "ability_icon",
                "asset": "juggernaut_blade_dance",
                "modifier": "juggernaut/bladekeeper/juggernaut_blade_dance"
            },
            "name": "dc_bladekeeper_crit",
            "loc_key": "#DOTA_Asset_Mod_DC_Bladekeeper_Crit",
            "file": "particles/econ/items/juggernaut/bladekeeper_critical_strike"
        },
        "88": {
            "0": {
                "type": "ability_icon",
                "asset": "death_prophet_exorcism",
                "modifier": "death_prophet/awakened_thirst_ult_bat_icon/death_prophet_exorcism"
            },
            "name": "ghastly_matriarch_exorcism_icon",
            "loc_key": "#DOTA_Asset_Mod_Ghastly_Matriarch_Exorcism_Icon"
        },
        "89": {
            "0": {
                "type": "ability_icon",
                "asset": "necrolyte_reapers_scythe",
                "modifier": "necrolyte/necronub/necrolyte_reapers_scythe"
            },
            "1": {
                "type": "particle",
                "asset": "particles/units/heroes/hero_necrolyte/necrolyte_scythe.vpcf",
                "modifier": "particles/econ/items/necrolyte/necronub_scythe/necrolyte_scythe_ka.vpcf"
            },
            "2": {
                "type": "particle",
                "asset": "particles/units/heroes/hero_necrolyte/necrolyte_scythe_start.vpcf",
                "modifier": "particles/econ/items/necrolyte/necronub_scythe/necrolyte_scythe_ka_start.vpcf"
            },
            "name": "necronub_reapers_scythe",
            "loc_key": "#DOTA_Asset_Mod_Necronub_Reapers_Scythe",
            "file": "particles/econ/items/necrolyte/necronub_scythe"
        },
        "90": {
            "0": {
                "type": "ability_icon",
                "asset": "necrolyte_death_pulse",
                "modifier": "necrolyte/necronub/necrolyte_death_pulse"
            },
            "1": {
                "type": "particle",
                "asset": "particles/units/heroes/hero_necrolyte/necrolyte_pulse_enemy.vpcf",
                "modifier": "particles/econ/items/necrolyte/necronub_death_pulse/necrolyte_pulse_ka_enemy.vpcf"
            },
            "2": {
                "type": "particle",
                "asset": "particles/units/heroes/hero_necrolyte/necrolyte_pulse_friend.vpcf",
                "modifier": "particles/econ/items/necrolyte/necronub_death_pulse/necrolyte_pulse_ka_friend.vpcf"
            },
            "name": "necronub_death_pulse",
            "loc_key": "#DOTA_Asset_Mod_Necronub_Death_Pulse",
            "file": "particles/econ/items/necrolyte/necronub_death_pulse"
        },
        "91": {
            "0": {
                "type": "ability_icon",
                "asset": "necrolyte_sadist",
                "modifier": "necrolyte/necronub/necrolyte_sadist"
            },
            "1": {
                "type": "particle",
                "asset": "particles/units/heroes/hero_necrolyte/necrolyte_base_attack.vpcf",
                "modifier": "particles/econ/items/necrolyte/necronub_base_attack/necrolyte_base_attack_ka.vpcf"
            },
            "name": "necronub_base_attack",
            "loc_key": "#DOTA_Asset_Mod_Necronub_Base_Attack",
            "file": "particles/econ/items/necrolyte/necronub_base_attack"
        },
        "92": {
            "0": {
                "type": "particle",
                "asset": "particles/units/heroes/hero_necrolyte/necrolyte_ambient_glow.vpcf",
                "modifier": "particles/econ/items/necrolyte/necronub_ambient/necrolyte_ambient_glow_ka.vpcf"
            },
            "name": "necronub_ambient",
            "loc_key": "#DOTA_Asset_Mod_Necronub_Ambient",
            "file": "particles/econ/items/necrolyte/necronub_ambient"
        },
        "93": {
            "0": {
                "type": "ability_icon",
                "asset": "centaur_hoof_stomp",
                "modifier": "centaur/berserkers_edge/centaur_hoof_stomp"
            },
            "1": {
                "type": "ability_icon",
                "asset": "centaur_double_edge",
                "modifier": "centaur/berserkers_edge/centaur_double_edge"
            },
            "2": {
                "type": "ability_icon",
                "asset": "centaur_return",
                "modifier": "centaur/berserkers_edge/centaur_return"
            },
            "3": {
                "type": "ability_icon",
                "asset": "centaur_stampede",
                "modifier": "centaur/berserkers_edge/centaur_stampede"
            },
            "name": "dc_centaur_head_icons",
            "loc_key": "#DOTA_Asset_Mod_DC_Centaur_Head_Icons"
        },
        "94": {
            "0": {
                "type": "ability_icon",
                "asset": "luna_lunar_blessing",
                "modifier": "luna/zodiac_sigils_skills/luna_lunar_blessing"
            },
            "name": "azure_constellation_head",
            "loc_key": "#DOTA_Asset_Mod_Azure_Constellation_Head"
        },
        "95": {
            "0": {
                "type": "ability_icon",
                "asset": "luna_moon_glaive",
                "modifier": "luna/zodiac_sigils_skills/luna_moon_glaive"
            },
            "name": "azure_constellation_glaive",
            "loc_key": "#DOTA_Asset_Mod_Azure_Constellation_Glaive"
        },
        "96": {
            "0": {
                "type": "ability_icon",
                "asset": "luna_lucent_beam",
                "modifier": "luna/zodiac_sigils_skills/luna_lucent_beam"
            },
            "name": "azure_constellation_shield",
            "loc_key": "#DOTA_Asset_Mod_Azure_Constellation_Shield"
        },
        "97": {
            "0": {
                "type": "ability_icon",
                "asset": "luna_eclipse",
                "modifier": "luna/zodiac_sigils_skills/luna_eclipse"
            },
            "name": "azure_constellation_mount",
            "loc_key": "#DOTA_Asset_Mod_Azure_Constellation_Mount"
        },
        "98": {
            "0": {
                "type": "ability_icon",
                "asset": "life_stealer_rage",
                "modifier": "life_stealer/bloody_ripper_abilityicons/life_stealer_rage"
            },
            "1": {
                "type": "ability_icon",
                "asset": "life_stealer_feast",
                "modifier": "life_stealer/bloody_ripper_abilityicons/life_stealer_feast"
            },
            "2": {
                "type": "ability_icon",
                "asset": "life_stealer_open_wounds",
                "modifier": "life_stealer/bloody_ripper_abilityicons/life_stealer_open_wounds"
            },
            "name": "bloody_ripper_mask",
            "loc_key": "#DOTA_Asset_Mod_Bloody_Ripper_Mask"
        },
        "99": {
            "0": {
                "type": "ability_icon",
                "asset": "life_stealer_infest",
                "modifier": "life_stealer/bloody_ripper_abilityicons/life_stealer_infest"
            },
            "name": "bloody_ripper_back",
            "loc_key": "#DOTA_Asset_Mod_Bloody_Ripper_Back"
        },
        "100": {
            "0": {
                "type": "ability_icon",
                "asset": "life_stealer_consume",
                "modifier": "life_stealer/bloody_ripper_abilityicons/life_stealer_consume"
            },
            "name": "bloody_ripper_arms",
            "loc_key": "#DOTA_Asset_Mod_Bloody_Ripper_Arms"
        },
        "101": {
            "0": {
                "type": "ability_icon",
                "asset": "life_stealer_rage",
                "modifier": "life_stealer/promo_bloody_ripper_abilityicons/life_stealer_rage"
            },
            "1": {
                "type": "ability_icon",
                "asset": "life_stealer_feast",
                "modifier": "life_stealer/promo_bloody_ripper_abilityicons/life_stealer_feast"
            },
            "2": {
                "type": "ability_icon",
                "asset": "life_stealer_open_wounds",
                "modifier": "life_stealer/promo_bloody_ripper_abilityicons/life_stealer_open_wounds"
            },
            "name": "compendium_bloody_ripper_mask",
            "loc_key": "#DOTA_Asset_Mod_Compendium_Bloody_Ripper_Mask"
        },
        "102": {
            "0": {
                "type": "ability_icon",
                "asset": "life_stealer_infest",
                "modifier": "life_stealer/promo_bloody_ripper_abilityicons/life_stealer_infest"
            },
            "name": "compendium_bloody_ripper_back",
            "loc_key": "#DOTA_Asset_Mod_Compendium_Bloody_Ripper_Back"
        },
        "103": {
            "0": {
                "type": "ability_icon",
                "asset": "life_stealer_consume",
                "modifier": "life_stealer/promo_bloody_ripper_abilityicons/life_stealer_consume"
            },
            "name": "compendium_bloody_ripper_arms",
            "loc_key": "#DOTA_Asset_Mod_Compendium_Bloody_Ripper_Arms"
        },
        "104": {
            "0": {
                "type": "ability_icon",
                "asset": "pudge_flesh_heap",
                "modifier": "pudge/dotapit_s3_pudge/pudge_flesh_heap"
            },
            "1": {
                "type": "ability_icon",
                "asset": "pudge_rot",
                "modifier": "pudge/dotapit_s3_pudge/pudge_rot"
            },
            "name": "surgical_prevision_apron",
            "loc_key": "#DOTA_Asset_Mod_Surgical_Precision_Apron"
        },
        "105": {
            "0": {
                "type": "ability_icon",
                "asset": "pudge_dismember",
                "modifier": "pudge/dotapit_s3_pudge/pudge_dismember"
            },
            "1": {
                "type": "ability_icon",
                "asset": "pudge_meat_hook",
                "modifier": "pudge/dotapit_s3_pudge/pudge_meat_hook"
            },
            "name": "surgical_prevision_hook",
            "loc_key": "#DOTA_Asset_Mod_Surgical_Precision_Hook"
        },
        "106": {
            "0": {
                "type": "activity",
                "asset": "ALL",
                "modifier": "moon_griffon"
            },
            "name": "moon_griffon",
            "loc_key": "#DOTA_Anim_Mod_moon_griffon"
        },
        "107": {
            "0": {
                "type": "ability_icon",
                "asset": "vengefulspirit_magic_missile",
                "modifier": "vengefulspirit/huangs_umbra_icons/vengefulspirit_magic_missile"
            },
            "name": "crested_umbra_glaive",
            "loc_key": "#DOTA_Asset_Mod_Crested_Umbra_Glaive"
        },
        "108": {
            "0": {
                "type": "ability_icon",
                "asset": "vengefulspirit_wave_of_terror",
                "modifier": "vengefulspirit/huangs_umbra_icons/vengefulspirit_wave_of_terror"
            },
            "name": "crested_umbra_virtue",
            "loc_key": "#DOTA_Asset_Mod_Crested_Umbra_Virtue"
        },
        "109": {
            "0": {
                "type": "ability_icon",
                "asset": "vengefulspirit_command_aura",
                "modifier": "vengefulspirit/huangs_umbra_icons/vengefulspirit_command_aura"
            },
            "name": "crested_umbra_duty",
            "loc_key": "#DOTA_Asset_Mod_Crested_Umbra_Duty"
        },
        "110": {
            "0": {
                "type": "ability_icon",
                "asset": "vengefulspirit_nether_swap",
                "modifier": "vengefulspirit/huangs_umbra_icons/vengefulspirit_nether_swap"
            },
            "name": "crested_umbra_skirt",
            "loc_key": "#DOTA_Asset_Mod_Crested_Umbra_Skirt"
        },
        "111": {
            "0": {
                "type": "activity",
                "asset": "ALL",
                "modifier": "trapper"
            },
            "name": "trapper",
            "loc_key": "#DOTA_Anim_Mod_Promo_Trapper_Weapon"
        },
        "112": {
            "0": {
                "type": "particle",
                "asset": "particles/units/heroes/hero_keeper_of_the_light/keeper_of_the_light_illuminate.vpcf",
                "modifier": "particles/econ/items/keeper_of_the_light/kotl_ram/keeper_of_the_light_illuminate_ram.vpcf"
            },
            "name": "crucible_illuminance",
            "file": "particles/econ/items/keeper_of_the_light/kotl_ram",
            "loc_key": "#DOTA_Ability_Mod_Illuminate_Crucible"
        },
        "113": {
            "0": {
                "type": "ability_icon",
                "asset": "ogre_magi_bloodlust",
                "modifier": "ogre_magi/antipodeanabilityicons/ogre_magi_bloodlust"
            },
            "1": {
                "type": "ability_icon",
                "asset": "ogre_magi_fireblast",
                "modifier": "ogre_magi/antipodeanabilityicons/ogre_magi_fireblast"
            },
            "2": {
                "type": "ability_icon",
                "asset": "ogre_magi_ignite",
                "modifier": "ogre_magi/antipodeanabilityicons/ogre_magi_ignite"
            },
            "3": {
                "type": "ability_icon",
                "asset": "ogre_magi_multicast",
                "modifier": "ogre_magi/antipodeanabilityicons/ogre_magi_multicast"
            },
            "4": {
                "type": "ability_icon",
                "asset": "ogre_magi_unrefined_fireblast",
                "modifier": "ogre_magi/antipodeanabilityicons/ogre_magi_unrefined_fireblast"
            },
            "name": "ogre_magi_antipodeans",
            "loc_key": "#DOTA_Anim_ogre_magi_antipodeans"
        },
        "114": {
            "0": {
                "type": "ability_icon",
                "asset": "skeleton_king_hellfire_blast",
                "modifier": "skeleton_king/aspect_year_beast_icons/skeleton_king_hellfire_blast"
            },
            "1": {
                "type": "ability_icon",
                "asset": "skeleton_king_reincarnation",
                "modifier": "skeleton_king/aspect_year_beast_icons/skeleton_king_reincarnation"
            },
            "name": "year_beast_hellfire_reincarnate",
            "loc_key": "#DOTA_Asset_Mod_Year_Beast_Hellfire_Reincarnate"
        },
        "115": {
            "0": {
                "type": "ability_icon",
                "asset": "skeleton_king_bone_guard",
                "modifier": "skeleton_king/aspect_year_beast_icons/skeleton_king_bone_guard"
            },
            "name": "year_beast_vampiric_aura",
            "loc_key": "#DOTA_Asset_Mod_Year_Beast_Vampiric_Aura"
        },
        "116": {
            "0": {
                "type": "ability_icon",
                "asset": "skeleton_king_mortal_strike",
                "modifier": "skeleton_king/aspect_year_beast_icons/skeleton_king_mortal_strike"
            },
            "name": "year_beast_mortal_strike",
            "loc_key": "#DOTA_Asset_Mod_Year_Beast_Mortal_Strike"
        },
        "117": {
            "0": {
                "type": "ability_icon",
                "asset": "silencer_curse_of_the_silent",
                "modifier": "silencer/bts_silencer_ability/silencer_curse_of_the_silent"
            },
            "1": {
                "type": "ability_icon",
                "asset": "silencer_glaives_of_wisdom",
                "modifier": "silencer/bts_silencer_ability/silencer_glaives_of_wisdom"
            },
            "2": {
                "type": "ability_icon",
                "asset": "silencer_last_word",
                "modifier": "silencer/bts_silencer_ability/silencer_last_word"
            },
            "3": {
                "type": "ability_icon",
                "asset": "silencer_global_silence",
                "modifier": "silencer/bts_silencer_ability/silencer_global_silence"
            },
            "name": "bts_3_silencer",
            "loc_key": "#DOTA_Asset_Mod_bts_3_silencer"
        },
        "118": {
            "0": {
                "type": "ability_icon",
                "asset": "medusa_split_shot",
                "modifier": "medusa/blueice_abilityicons/medusa_split_shot"
            },
            "1": {
                "type": "ability_icon",
                "asset": "medusa_mystic_snake",
                "modifier": "medusa/blueice_abilityicons/medusa_mystic_snake"
            },
            "2": {
                "type": "ability_icon",
                "asset": "medusa_mana_shield",
                "modifier": "medusa/blueice_abilityicons/medusa_mana_shield"
            },
            "3": {
                "type": "ability_icon",
                "asset": "medusa_stone_gaze",
                "modifier": "medusa/blueice_abilityicons/medusa_stone_gaze"
            },
            "name": "blueice_ability_icons",
            "loc_key": "#DOTA_Asset_Eye_Of_The_Beholder"
        },
        "119": {
            "0": {
                "type": "ability_icon",
                "asset": "sven_warcry",
                "modifier": "sven/cyclopean_marauder_ability_icons/sven_warcry"
            },
            "1": {
                "type": "ability_icon",
                "asset": "sven_gods_strength",
                "modifier": "sven/cyclopean_marauder_ability_icons/sven_gods_strength"
            },
            "name": "cyclopean_marauder_gaze_icons",
            "loc_key": "#DOTA_Asset_Mod_Cyclopean_Marauder_Gaze_Icons"
        },
        "120": {
            "0": {
                "type": "ability_icon",
                "asset": "sven_great_cleave",
                "modifier": "sven/cyclopean_marauder_ability_icons/sven_great_cleave"
            },
            "name": "cyclopean_marauder_great_cleave_icon",
            "loc_key": "#DOTA_Asset_Mod_Cyclopean_Marauder_Great_Cleave_Icon"
        },
        "121": {
            "0": {
                "type": "ability_icon",
                "asset": "sven_storm_bolt",
                "modifier": "sven/cyclopean_marauder_ability_icons/sven_storm_bolt"
            },
            "name": "cyclopean_marauder_storm_bolt_icon",
            "loc_key": "#DOTA_Asset_Mod_Cyclopean_Marauder_Storm_Bolt_Icon"
        },
        "122": {
            "0": {
                "type": "ability_icon",
                "asset": "phantom_assassin_phantom_strike",
                "modifier": "phantom_assassin/ravening_ability_icons/phantom_assassin_phantom_strike"
            },
            "1": {
                "type": "ability_icon",
                "asset": "phantom_assassin_stifling_dagger",
                "modifier": "phantom_assassin/ravening_ability_icons/phantom_assassin_stifling_dagger"
            },
            "2": {
                "type": "ability_icon",
                "asset": "phantom_assassin_coup_de_grace",
                "modifier": "phantom_assassin/ravening_ability_icons/phantom_assassin_coup_de_grace"
            },
            "name": "ravening_wings_glaive_icons",
            "loc_key": "#DOTA_Asset_Mod_Ravening_Wings_Glaive_Icons"
        },
        "123": {
            "0": {
                "type": "ability_icon",
                "asset": "phantom_assassin_blur",
                "modifier": "phantom_assassin/ravening_ability_icons/phantom_assassin_blur"
            },
            "name": "ravening_wings_blur_icon",
            "loc_key": "#DOTA_Asset_Mod_Ravening_Wings_Blur_Icon"
        },
        "124": {
            "0": {
                "type": "ability_icon",
                "asset": "earthshaker_fissure",
                "modifier": "earthshaker/sltv__earthshaker_ability_icons/earthshaker_fissure"
            },
            "1": {
                "type": "ability_icon",
                "asset": "earthshaker_enchant_totem",
                "modifier": "earthshaker/sltv__earthshaker_ability_icons/earthshaker_enchant_totem"
            },
            "2": {
                "type": "ability_icon",
                "asset": "earthshaker_aftershock",
                "modifier": "earthshaker/sltv__earthshaker_ability_icons/earthshaker_aftershock"
            },
            "3": {
                "type": "ability_icon",
                "asset": "earthshaker_echo_slam",
                "modifier": "earthshaker/sltv__earthshaker_ability_icons/earthshaker_echo_slam"
            },
            "name": "tine_of_the_behemoth_icons",
            "loc_key": "#DOTA_Asset_Mod_Tine_Of_The_Behemoth_Icons"
        },
        "125": {
            "0": {
                "type": "ability_icon",
                "asset": "huskar_life_break",
                "modifier": "huskar_life_break_alt",
                "apply_when_equipped_in_ability_effects_slot": "4"
            },
            "name": "searing_dominator_icon",
            "loc_key": "#DOTA_Asset_Mod_DOTA_Item_Desc_Searing_Dominator_Icon"
        },
        "126": {
            "0": {
                "type": "ability_icon",
                "asset": "spirit_breaker_charge_of_darkness",
                "modifier": "spirit_breaker_charge_of_darkness_alt",
                "apply_when_equipped_in_ability_effects_slot": "1"
            },
            "name": "iron_surge_icon",
            "loc_key": "#DOTA_Asset_Mod_DOTA_Item_Desc_Iron_Surge_Icon"
        },
        "127": {
            "0": {
                "type": "ability_icon",
                "asset": "luna_lucent_beam",
                "modifier": "luna_lucent_beam_alt",
                "apply_when_equipped_in_ability_effects_slot": "1"
            },
            "name": "moonfall_icon",
            "loc_key": "#DOTA_Asset_Mod_DOTA_Item_Desc_Moonfall_Icon"
        },
        "128": {
            "0": {
                "type": "ability_icon",
                "asset": "luna_lucent_beam",
                "modifier": "luna_lucent_beam_alt2",
                "apply_when_equipped_in_ability_effects_slot": "1"
            },
            "name": "golden_moonfall_icon",
            "loc_key": "#DOTA_Asset_Mod_DOTA_Item_Desc_Golden_Moonfall_Icon"
        },
        "129": {
            "0": {
                "type": "ability_icon",
                "asset": "magnataur_shockwave",
                "modifier": "magnataur_shockwave_alt",
                "apply_when_equipped_in_ability_effects_slot": "1"
            },
            "name": "shock_of_the_anvil_icon",
            "loc_key": "#DOTA_Asset_Mod_DOTA_Item_Desc_Shock_Of_The_Anvil_Icon"
        },
        "130": {
            "0": {
                "type": "ability_icon",
                "asset": "night_stalker_void",
                "modifier": "night_stalker_void_alt",
                "apply_when_equipped_in_ability_effects_slot": "1"
            },
            "name": "black_nihility_icon",
            "loc_key": "#DOTA_Asset_Mod_DOTA_Item_Desc_Black_Nihility_Icon"
        },
        "131": {
            "0": {
                "type": "ability_icon",
                "asset": "pugna_nether_ward",
                "modifier": "pugna_nether_ward_alt"
            },
            "name": "draining_wight_icon",
            "loc_key": "#DOTA_Asset_Mod_DOTA_Item_Desc_Draining_Wight_Icon"
        },
        "132": {
            "0": {
                "type": "ability_icon",
                "asset": "sandking_burrowstrike",
                "modifier": "sandking_burrowstrike_alt",
                "apply_when_equipped_in_ability_effects_slot": "1"
            },
            "name": "the_barren_crown_icon",
            "loc_key": "#DOTA_Asset_Mod_DOTA_Item_Desc_The_Barren_Crown_Icon"
        },
        "133": {
            "0": {
                "type": "ability_icon",
                "asset": "enigma_black_hole",
                "modifier": "enigma/worldchasm/enigma_black_hole_worldchasm",
                "apply_when_equipped_in_ability_effects_slot": "4"
            },
            "name": "world_chasm_icon",
            "loc_key": "#DOTA_Asset_Mod_DOTA_Item_Desc_World_Chasm_Icon"
        },
        "134": {
            "0": {
                "type": "ability_icon",
                "asset": "warlock_rain_of_chaos",
                "modifier": "warlock/wailing_inferno_icons/wailing_inferno_rain_of_chaos"
            },
            "name": "wailing_inferno_icons",
            "loc_key": "#DOTA_Asset_Mod_DOTA_Item_Desc_Wailing_Inferno_Icon"
        },
        "135": {
            "0": {
                "type": "ability_icon",
                "asset": "sven_warcry",
                "modifier": "sven/vigil_signet/sven_warcry",
                "apply_when_equipped_in_ability_effects_slot": "3"
            },
            "name": "vigil_signet_warcry_icon",
            "loc_key": "#DOTA_Asset_Mod_Vigil_Signet_Warcry_Icon"
        },
        "136": {
            "0": {
                "type": "ability_icon",
                "asset": "faceless_void_time_walk",
                "modifier": "faceless_void/jewelofaeons/faceless_void_time_walk_1",
                "apply_when_equipped_in_ability_effects_slot": "1"
            },
            "name": "jewel_of_aeons_time_walk_icon",
            "loc_key": "#DOTA_Asset_Mod_Jewel_Of_Aeons_Time_Walk_Icon"
        },
        "137": {
            "0": {
                "type": "ability_icon",
                "asset": "tinker_march_of_the_machines",
                "modifier": "tinker/rollermawster/tinker_march_of_the_machines_1"
            },
            "name": "rollermawster_march_of_the_machines_icon",
            "loc_key": "#DOTA_Asset_Mod_Rollermawster_March_Of_The_Machines_Icon"
        },
        "138": {
            "0": {
                "type": "ability_icon",
                "asset": "leshrac_split_earth",
                "modifier": "leshrac/tormented_staff/leshrac_split_earth",
                "apply_when_equipped_in_ability_effects_slot": "1"
            },
            "name": "tormented_staff_split_earth_icon",
            "loc_key": "#DOTA_Asset_Mod_Tormented_Staff_Split_Earth_Icon"
        },
        "139": {
            "0": {
                "type": "ability_icon",
                "asset": "disruptor_kinetic_field",
                "modifier": "disruptor/resistive_pinfold/disruptor_kinetic_field",
                "apply_when_equipped_in_ability_effects_slot": "3"
            },
            "name": "resistive_pinfold_kinetic_field_icon",
            "loc_key": "#DOTA_Asset_Mod_Resistive_Pinfold_Kinetic_Field_Icon"
        },
        "140": {
            "0": {
                "type": "ability_icon",
                "asset": "antimage_mana_void",
                "modifier": "antimage/the_basher_blades/antimage_mana_void",
                "apply_when_equipped_in_ability_effects_slot": "4"
            },
            "1": {
                "type": "ability_icon",
                "asset": "antimage_mana_break",
                "modifier": "antimage/the_basher_blades/antimage_mana_break",
                "apply_when_equipped_in_ability_effects_slot": "1"
            },
            "name": "the_basher_blades_mana_icons",
            "loc_key": "#DOTA_Asset_Mod_The_Basher_Blades_Mana_Icons"
        },
        "141": {
            "0": {
                "type": "ability_icon",
                "asset": "antimage_mana_void",
                "modifier": "antimage/golden_basher_blades/antimage_mana_void",
                "apply_when_equipped_in_ability_effects_slot": "4"
            },
            "1": {
                "type": "ability_icon",
                "asset": "antimage_mana_break",
                "modifier": "antimage/golden_basher_blades/antimage_mana_break",
                "apply_when_equipped_in_ability_effects_slot": "1"
            },
            "name": "golden_basher_blades_mana_icons",
            "loc_key": "#DOTA_Asset_Mod_Golden_Basher_Blades_Mana_Icons"
        },
        "142": {
            "0": {
                "type": "ability_icon",
                "asset": "invoker_forge_spirit",
                "modifier": "invoker/esl_ablityicons_relicsoftheilluminatedseer/invoker_forge_spirit"
            },
            "name": "esl_relicsoftheilluminatedseer_icon",
            "loc_key": "#DOTA_Asset_Mod_Esl_Relicsoftheilluminatedseer_Icon"
        },
        "143": {
            "0": {
                "type": "ability_icon",
                "asset": "necrolyte_death_pulse",
                "modifier": "necrolyte/apostle_of_decay_icons/necrolyte_death_pulse"
            },
            "name": "apostle_of_decay_mask",
            "loc_key": "#DOTA_Asset_Mod_Apostle_of_Decay_Mask"
        },
        "144": {
            "0": {
                "type": "ability_icon",
                "asset": "necrolyte_sadist",
                "modifier": "necrolyte/apostle_of_decay_icons/necrolyte_sadist"
            },
            "name": "apostle_of_decay_hood",
            "loc_key": "#DOTA_Asset_Mod_Apostle_of_Decay_Hood"
        },
        "145": {
            "0": {
                "type": "ability_icon",
                "asset": "necrolyte_heartstopper_aura",
                "modifier": "necrolyte/apostle_of_decay_icons/necrolyte_heartstopper_aura"
            },
            "name": "apostle_of_decay_vestments",
            "loc_key": "#DOTA_Asset_Mod_Apostle_of_Decay_Vestments"
        },
        "146": {
            "0": {
                "type": "ability_icon",
                "asset": "necrolyte_reapers_scythe",
                "modifier": "necrolyte/apostle_of_decay_icons/necrolyte_reapers_scythe"
            },
            "name": "apostle_of_decay_scythe",
            "loc_key": "#DOTA_Asset_Mod_Apostle_of_Decay_Scythe"
        },
        "147": {
            "0": {
                "type": "ability_icon",
                "asset": "medusa_mana_shield",
                "modifier": "medusa/emerald_ocean_icons/medusa_mana_shield"
            },
            "1": {
                "type": "ability_icon",
                "asset": "medusa_mystic_snake",
                "modifier": "medusa/emerald_ocean_icons/medusa_mystic_snake"
            },
            "2": {
                "type": "ability_icon",
                "asset": "medusa_stone_gaze",
                "modifier": "medusa/emerald_ocean_icons/medusa_stone_gaze"
            },
            "3": {
                "type": "ability_icon",
                "asset": "medusa_split_shot",
                "modifier": "medusa/emerald_ocean_icons/medusa_split_shot"
            },
            "name": "emerald_ocean_icons",
            "loc_key": "#DOTA_Asset_Mod_Emerald_Ocean_Icons"
        },
        "148": {
            "0": {
                "type": "ability_icon",
                "asset": "dragon_knight_dragon_blood",
                "modifier": "dragon_knight/fireborn_ability_icons/dragon_knight_dragon_blood"
            },
            "name": "fireborn_helm",
            "loc_key": "#DOTA_Asset_Mod_Fireborn_Helm"
        },
        "149": {
            "0": {
                "type": "ability_icon",
                "asset": "dragon_knight_breathe_fire",
                "modifier": "dragon_knight/fireborn_ability_icons/dragon_knight_breathe_fire"
            },
            "name": "fireborn_cuirass",
            "loc_key": "#DOTA_Asset_Mod_Fireborn_Cuirass"
        },
        "150": {
            "0": {
                "type": "ability_icon",
                "asset": "dragon_knight_dragon_tail",
                "modifier": "dragon_knight/fireborn_ability_icons/dragon_knight_dragon_tail"
            },
            "name": "fireborn_shield",
            "loc_key": "#DOTA_Asset_Mod_Fireborn_Shield"
        },
        "151": {
            "0": {
                "type": "ability_icon",
                "asset": "dragon_knight_elder_dragon_form",
                "modifier": "dragon_knight/fireborn_ability_icons/dragon_knight_elder_dragon_form"
            },
            "name": "fireborn_dragon",
            "loc_key": "#DOTA_Asset_Mod_Fireborn_Dragon"
        },
        "152": {
            "0": {
                "type": "ability_icon",
                "asset": "tusk_frozen_sigil",
                "modifier": "tusk/glaciomarine_ability_icons/tusk_frozen_sigil"
            },
            "name": "glaciomarine_sigil",
            "loc_key": "#DOTA_Asset_Mod_Glaciomarine_Sigil"
        },
        "153": {
            "0": {
                "type": "ability_icon",
                "asset": "tusk_walrus_punch",
                "modifier": "tusk/glaciomarine_ability_icons/tusk_walrus_punch"
            },
            "name": "glaciomarine_hook",
            "loc_key": "#DOTA_Asset_Mod_Glaciomarine_Hook"
        },
        "154": {
            "0": {
                "type": "ability_icon",
                "asset": "tusk_launch_snowball",
                "modifier": "tusk/glaciomarine_ability_icons/tusk_launch_snowball"
            },
            "name": "glaciomarine_coat",
            "loc_key": "#DOTA_Asset_Mod_Glaciomarine_Coat"
        },
        "155": {
            "0": {
                "type": "ability_icon",
                "asset": "tusk_snowball",
                "modifier": "tusk/glaciomarine_ability_icons/tusk_snowball"
            },
            "name": "glaciomarine_cap",
            "loc_key": "#DOTA_Asset_Mod_Glaciomarine_Cap"
        },
        "156": {
            "0": {
                "type": "ability_icon",
                "asset": "tusk_ice_shards",
                "modifier": "tusk/glaciomarine_ability_icons/tusk_ice_shards"
            },
            "name": "glaciomarine_tusks",
            "loc_key": "#DOTA_Asset_Mod_Glaciomarine_Tusks"
        },
        "157": {
            "0": {
                "type": "ability_icon",
                "asset": "tusk_walrus_kick",
                "modifier": "tusk/glaciomarine_ability_icons/tusk_walrus_kick"
            },
            "name": "glaciomarine_anchor",
            "loc_key": "#DOTA_Asset_Mod_Glaciomarine_Anchor"
        },
        "158": {
            "0": {
                "type": "particle",
                "asset": "particles/units/heroes/hero_rubick/rubick_staff_ambient.vpcf",
                "modifier": "particles/econ/items/rubick/rubick_fortuneteller_ambient/rubick_fortuneteller_staff_ambient.vpcf"
            },
            "name": "fortuneteller_weapon",
            "loc_key": "#DOTA_Asset_Mod_FortuneTeller_Staff",
            "file": "particles/econ/items/rubick/rubick_fortuneteller_ambient"
        },
        "159": {
            "0": {
                "type": "ability_icon",
                "asset": "furion_teleportation",
                "modifier": "furion/sufferwood_sapling/furion_sufferwood_sapling_tp",
                "apply_when_equipped_in_ability_effects_slot": "2"
            },
            "name": "sufferwood_sapling",
            "loc_key": "#DOTA_Asset_Mod_Sufferwood_Sapling"
        },
        "160": {
            "0": {
                "type": "ability_icon",
                "asset": "gyrocopter_rocket_barrage",
                "modifier": "gyrocopter/atomic_ray_thrusters/atomicraythrusters_rocket_barrage",
                "apply_when_equipped_in_ability_effects_slot": "1"
            },
            "name": "atomic_ray_thrusters",
            "loc_key": "#DOTA_Asset_Mod_Atomic_Ray_Thrusters"
        },
        "161": {
            "0": {
                "type": "ability_icon",
                "asset": "gyrocopter_rocket_barrage",
                "modifier": "gyrocopter/atomic_ray_thrusters/atomicraythrusters_golden_rocket_barrage",
                "apply_when_equipped_in_ability_effects_slot": "1"
            },
            "name": "golden_atomic_ray_thrusters",
            "loc_key": "#DOTA_Asset_Mod_Golden_Atomic_Ray_Thrusters"
        },
        "162": {
            "0": {
                "type": "ability_icon",
                "asset": "abaddon_aphotic_shield",
                "modifier": "abaddon/mistral_fiend_icons/abaddon_aphotic_shield"
            },
            "1": {
                "type": "ability_icon",
                "asset": "abaddon_borrowed_time",
                "modifier": "abaddon/mistral_fiend_icons/abaddon_borrowed_time"
            },
            "2": {
                "type": "ability_icon",
                "asset": "abaddon_death_coil",
                "modifier": "abaddon/mistral_fiend_icons/abaddon_death_coil"
            },
            "3": {
                "type": "ability_icon",
                "asset": "abaddon_frostmourne",
                "modifier": "abaddon/mistral_fiend_icons/abaddon_frostmourne"
            },
            "name": "mistral_fiend_icons",
            "loc_key": "#DOTA_Asset_Mod_Mistral_Fiend_Icons"
        },
        "163": {
            "0": {
                "type": "ability_icon",
                "asset": "skywrath_mage_ancient_seal",
                "modifier": "skywrath_mage/crested_dawn_icons/skywrath_mage_ancient_seal"
            },
            "1": {
                "type": "ability_icon",
                "asset": "skywrath_mage_arcane_bolt",
                "modifier": "skywrath_mage/crested_dawn_icons/skywrath_mage_arcane_bolt"
            },
            "2": {
                "type": "ability_icon",
                "asset": "skywrath_mage_concussive_shot",
                "modifier": "skywrath_mage/crested_dawn_icons/skywrath_mage_concussive_shot"
            },
            "3": {
                "type": "ability_icon",
                "asset": "skywrath_mage_mystic_flare",
                "modifier": "skywrath_mage/crested_dawn_icons/skywrath_mage_mystic_flare"
            },
            "name": "crested_dawn_icons",
            "loc_key": "#DOTA_Asset_Mod_Crested_Dawn_Icons"
        }
    }
};
module.exports = { assetModifiers };