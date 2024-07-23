enum HeroParticleList {
    imba_abaddon_death_coil = 'xxxxxxxxxxxxxxxxx',
}

@registerAbility()
class imba_abaddon_death_coil extends BaseAbility {
    OnSpellStart(): void {
        print('imba_abaddon_death_coil OnSpellStart');
    }
}
