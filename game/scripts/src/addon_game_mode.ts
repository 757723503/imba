import { ActivateModules } from './modules';
import './UtilityFunctions';
import 'utils/index';
import Precache from './utils/precache';
import './modules/extends/Extends';
Object.assign(getfenv(), {
    Activate: () => {
        ActivateModules();
    },
    Precache: Precache,
});
