@registerAbility()
export class item_imba_ultimate_scepter extends BaseItem {
    GetIntrinsicModifierName(): string {
        return 'modifier_item_ultimate_scepter';
    }

    OnUnequip(): void {
        print('OnUnequip');
    }
}
