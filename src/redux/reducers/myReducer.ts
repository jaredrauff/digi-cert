// src/redux/reducers/myReducer.ts
interface MyReducerState {
    myData: string;
}

const initialState: MyReducerState = {
    myData: 'Default Data',
};

const myReducer = (state = initialState, action: any) => {
    // Your reducer logic here
    return state;
};

export default myReducer;
