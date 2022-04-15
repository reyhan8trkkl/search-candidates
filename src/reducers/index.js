import { combineReducers } from 'redux';
import userDet from './userDet';
import userReducer from './userReducer';

export default combineReducers({
    user: userReducer,
    detUs:userDet,
});