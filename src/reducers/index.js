import { combineReducers } from 'redux';
import flashMessages from './flashMessages';
import parties from './partyReducers';
import authUser from './authReducer';
import offices from './officeReducer';

export default combineReducers({
  flashMessages,
  parties,
  offices,
  authUser
});
