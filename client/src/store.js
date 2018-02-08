import { createStore, combineReducers} from 'redux';
import { mainReducer } from './reducers/mainReducer.js';

var initialState = {
  userName: '', 
  password: '', 
  email: '', 
  firstName: '', 
  lastName: '', 
  phoneNumber: '', 
  streetAddress: '', 
  city: '', 
  state: '', 
  zipCode: ''
};


export default createStore(mainReducer, initialState);