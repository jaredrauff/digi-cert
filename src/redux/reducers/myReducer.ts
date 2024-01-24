// redux/reducers/myReducer.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MyReducerState {
    myData: string;
}

const initialState: MyReducerState = {
    myData: 'Default Data',
};

const myReducerSlice = createSlice({
    name: 'myReducer',
    initialState,
    reducers: {
        updateMyData: (state, action: PayloadAction<string>) => {
            state.myData = action.payload;
        },
    },
});

export const { updateMyData } = myReducerSlice.actions;
export default myReducerSlice.reducer;
