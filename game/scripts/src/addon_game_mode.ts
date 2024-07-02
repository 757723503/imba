import './modules/dispatcher/Dispatcher';
import './UtilityFunctions';
import 'utils/index';
import { ActivateModules } from './modules';
import Precache from './utils/precache';
import './modules/extends/Extends';
Object.assign(getfenv(), {
    Activate: () => {
        ActivateModules();
    },
    Precache: Precache,
});
