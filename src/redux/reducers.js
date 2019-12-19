import { combineReducers } from 'redux';
import settings from './settings/reducer';
import authUser from './auth/reducer';
import data from './data/reducer';


const reducers = combineReducers({
  settings,
  authUser,
  data
});

export default reducers;