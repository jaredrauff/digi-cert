// src/redux/store.ts
import { createStore } from 'redux';
import rootReducer from '../redux/reducers'; // Create this file later

const store = createStore(
    rootReducer,
    // You can add middleware or other store enhancers here
);

export default store;
