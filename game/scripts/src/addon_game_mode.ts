import './utils/dota_ts_adapter';
import { ActivateModules } from './modules';
import './UtilityFunctions';
import 'utils/index';
import Precache from './utils/precache';
import './modules/extends/extends_origin';
import './common_modifier/index';

Object.assign(getfenv(), {
    Activate: () => {
        ActivateModules();
    },
    Precache: Precache,
});
