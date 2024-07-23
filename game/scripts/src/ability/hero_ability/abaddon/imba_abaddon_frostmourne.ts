enum HeroParticleList {
    imba_abaddon_frostmourne = 'xxxxxxxxxxxxxxxxx',
}

@registerAbility()
class imba_abaddon_frostmourne extends BaseAbility {
    OnSpellStart(): void {
        print('imba_abaddon_frostmourne OnSpellStart');
    }
}
