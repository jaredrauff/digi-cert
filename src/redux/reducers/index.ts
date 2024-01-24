// src/redux/reducers/index.ts
import { combineReducers } from 'redux';
import myReducer from './myReducer';
import RootState from './RootState';

const rootReducer = combineReducers({
    myReducer,
    // Add other reducers here
});

export default rootReducer;

export type { RootState }; // Use 'export type' for type re-export
