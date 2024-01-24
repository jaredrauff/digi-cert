// src/redux/reducers/RootState.ts
// Define your root state types here

// Example: Define a sample state with your reducers
interface MyReducerState {
    myData: string;
}

// Combine all the state types from your reducers
interface RootState {
    myReducer: MyReducerState;
    // Add other reducers here as needed
}

export default RootState;
