import { combineReducers } from 'redux';
import myReducer from './myReducer';
import RootState from './RootState';

const rootReducer = combineReducers({
    myReducer,
});

export default rootReducer;
export type { RootState };
