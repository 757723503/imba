enum HeroParticleList {
    imba_abaddon_aphotic_shield = 'xxxxxxxxxxxxxxxxx',
}

@registerAbility()
class imba_abaddon_aphotic_shield extends BaseAbility {
    OnSpellStart(): void {
        print('imba_abaddon_aphotic_shield OnSpellStart');
    }
}
