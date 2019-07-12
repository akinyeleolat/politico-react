import { combineReducers } from 'redux';
import flashMessages from './flashMessages';
import authUser from './authReducer';

export default combineReducers({
  flashMessages,
  authUser
});
