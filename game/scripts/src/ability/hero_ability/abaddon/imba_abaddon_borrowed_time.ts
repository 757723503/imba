enum HeroParticleList {
    imba_abaddon_borrowed_time = 'xxxxxxxxxxxxxxxxx',
}

@registerAbility()
class imba_abaddon_borrowed_time extends BaseAbility {
    OnSpellStart(): void {
        print('imba_abaddon_borrowed_time OnSpellStart');
    }
}
