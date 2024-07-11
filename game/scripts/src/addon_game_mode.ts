import 'utils/index';
import './utils/dota_ts_adapter';
import './modules/extends/extends_origin';
import './UtilityFunctions';
import { ActivateModules } from './modules';
import './common_modifier/index';
import Precache from './utils/precache';

Object.assign(getfenv(), {
    Activate: () => {
        ActivateModules();
    },
    Precache: Precache,
});
