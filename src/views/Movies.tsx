import React, { useEffect, useState } from 'react';
import MovieTable from '../components/MovieTable';
import { fetchAllMovies } from '../services/apiService';
import { Film } from '../redux/types/movieTypes';

const Movies: React.FC = () => {
    const [movies, setMovies] = useState<Film[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const allMovies = await fetchAllMovies();
            setMovies(allMovies);
        };

        fetchData().then(() => {});
    }, []);

    return (
        <div>
            <h1>Movies</h1>
            <MovieTable movies={movies} />
        </div>
    );
};

export default Movies;
