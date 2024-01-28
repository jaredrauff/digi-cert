export const FETCH_PLANET = 'FETCH_PLANET';
export const SET_PLANET = 'SET_PLANET';
interface Movie {
    title: string;
    director: string;
    release_date: string;
    // Add more attributes as needed
}
export interface MovieState {
    planet: Movie;
}
