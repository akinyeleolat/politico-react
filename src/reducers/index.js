import { combineReducers } from 'redux';
import flashMessages from './flashMessages';
import parties from './partyReducers';
import authUser from './authReducer';

export default combineReducers({
  flashMessages,
  parties,
  authUser
});
