import { SHOW_LOADER, HIDE_LOADER, AppActions } from '../actions/actions';

const initialState = {
    loading: false,
};

export const loaderReducer = (state = initialState, action: AppActions) => {
    switch (action.type) {
        case SHOW_LOADER:
            return { ...state, loading: true };
        case HIDE_LOADER:
            return { ...state, loading: false };
        default:
            return state;
    }
};
