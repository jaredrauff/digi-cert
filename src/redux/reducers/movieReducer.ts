import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MovieState {
    planet: any;
}

const initialState: MovieState = {
    planet: null,
};

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setPlanet: (state, action: PayloadAction<any>) => {
            state.planet = action.payload;
        },
    },
});

export default movieSlice.reducer;
