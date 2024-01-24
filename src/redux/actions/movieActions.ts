import { FETCH_PLANET, SET_PLANET } from './movieActionTypes';
import { Dispatch } from 'redux';

export const fetchPlanetData = (planetId: number) => async (dispatch: Dispatch) => {
    try {
        const planetData = { name: 'Tatooine', climate: 'Arid' };

        dispatch(setPlanet(planetData));
    } catch (error) {
        console.error('Error fetching planet data:', error);
    }
};

export const setPlanet = (planetData: any) => ({
    type: SET_PLANET,
    payload: planetData,
});
