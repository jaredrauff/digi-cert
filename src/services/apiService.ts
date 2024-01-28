import { Film } from 'redux/types/movieTypes';

const BASE_URL = 'https://swapi.dev/api/';

export const fetchAllMovies = async (): Promise<Film[]> => {
    try {
        const response = await fetch(`${BASE_URL}films/`);
        if (!response.ok) {
            throw new Error('Failed to fetch movies');
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching movies:', error);
        throw error;
    }
};

export const fetchMovieDetails = async (movieId: string): Promise<Film> => {
    if (!isValidMovieId(movieId)) {
        throw new Error(`Invalid movie ID: ${movieId}`);
    }

    const response = await fetch(`${BASE_URL}films/${movieId}/`);
    if (!response.ok) {
        throw new Error(`Failed to fetch details for movie ${movieId}: ${response.statusText}`);
    }

    return await response.json();
};

function isValidMovieId(movieId: string): boolean {
    return typeof movieId === 'string' && movieId.trim() !== '';
}
