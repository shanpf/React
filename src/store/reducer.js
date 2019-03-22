import { combineReducers } from 'redux'
import headerReducer from '../common/header/store/index';

export const reducer = combineReducers({
    header: headerReducer
});