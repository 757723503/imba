@reloadable
export class CDamage {
    constructor() {
        ListenToGameEvent(`entity_hurt`, keys => this.OnEntityHurt(keys), this);
    }

    AddDamage(options: ApplyDamageOptions) {}
}
