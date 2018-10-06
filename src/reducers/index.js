import { combineReducers } from 'redux';
import { users } from './users_reducer';
import { registration } from './registration_reducer';
import { authentication } from './authentication_reducer';
import { alert } from './alert_reducer'

const rootReducer = combineReducers({
  users,
  registration,
  authentication,
  alert
});

export default rootReducer;