// src/redux/store.ts
import { createStore } from 'redux';
import rootReducer from './reducers';

// Define RootState based on the type returned by rootReducer
export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(
    rootReducer,
    // You can add middleware or other store enhancers here
);

export default store;
