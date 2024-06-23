import 'utils/index';
import { ActivateModules } from './modules';
import Precache from './utils/precache';
import './UtilityFunctions';

Object.assign(getfenv(), {
    Activate: () => {
        ActivateModules();
    },
    Precache: Precache,
});
