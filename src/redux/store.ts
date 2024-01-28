// store.ts
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { loaderReducer } from './reducers/loadReducer';

const rootReducer = combineReducers({
    loader: loaderReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
