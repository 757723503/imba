enum HeroParticleList {
    imba_life_stealer_open_wounds = 'xxxxxxxxxxxxxxxxx',
}
@registerAbility()
class imba_life_stealer_open_wounds extends BaseAbility {
    OnSpellStart(): void {
        print('imba_life_stealer_open_wounds');
    }
}
