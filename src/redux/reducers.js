import { combineReducers } from 'redux';
import settings from './settings/reducer';
import authUser from './auth/reducer';
import data from './data/reducer';
import cart from './cart/reducer';


const reducers = combineReducers({
  settings,
  authUser,
  data,
  cart
});

export default reducers;