// redux/actions/movieActions.ts
import { ThunkAction } from 'redux-thunk';
import { RootState } from '/../src/redux/store';
import { fetchPlanet, setPlanet } from '../redux/actions/planetActions';

export const fetchPlanetData = (planetId: number): ThunkAction<void, RootState, null, any> => async (dispatch) => {
    try {
        const planetData = await fetchPlanet(planetId);
        dispatch(setPlanet(planetData));
    } catch (error) {
        console.error('Error fetching planet data:', error);
        // Handle errors if needed
    }
};
