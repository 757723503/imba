import { CChat } from './Chat';
import { Debug } from './Debug';
import { CFilter } from './Filter';
import { GameConfig } from './GameConfig';
import { CDispatcher } from './dispatcher/Dispatcher';

@reloadable
export class CGameMode {
    constructor() {
        this.Init();
    }

    Init() {}
}
