import React, { useState, useEffect } from 'react';
import MovieTable from './MovieTable';
import { fetchAllMovies } from '../services/apiService';
import { Film } from '../redux/types/movieTypes';

const MovieList: React.FC = () => {
    const [movies, setMovies] = useState<Film[]>([]); // Update type to Film
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const moviesData = await fetchAllMovies();
                setMovies(moviesData);
                setLoading(false);
            } catch (error) {
                setError('Error fetching movies');
                setLoading(false);
            }
        };

        fetchData().then(() => {});
    }, []);

    return (
        <div>
            <h2>Star Wars Movies</h2>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {!loading && !error && <MovieTable movies={movies} />}
        </div>
    );
};

export default MovieList;
