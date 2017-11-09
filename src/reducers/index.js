import { combineReducers } from 'redux';
import authenticationReducer from './authentication';
import modalOpenReducer from './modalOpen';
import customerReducer from './customer';
import integratorReducer from './integrator';
import controlSystemReducer from './controlSystem';
import deviceReducer from './device';
import loadDevicesReducer from './loadDevices';

const rootReducer = combineReducers({
  authentication: authenticationReducer,
  modalOpen: modalOpenReducer,
  integrator: integratorReducer,
  customer:customerReducer,
  controlSystem:controlSystemReducer,
  device:deviceReducer,
  loadDevices: loadDevicesReducer
});

export default rootReducer;