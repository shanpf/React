import { combineReducers } from 'redux-immutable'
import { headerReducer } from '../common/header/store/index';

export const reducer = combineReducers({
    header: headerReducer
});