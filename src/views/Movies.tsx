// Movies.tsx
import React, {useEffect, useState} from 'react';
import MovieTable from '../components/MovieTable';
import {fetchAllMovies} from '../services/apiService';
import {Film} from '../redux/types/movieTypes';

const Movies: React.FC = () => {
    const [movies, setMovies] = useState<Film[]>([]);
    const [search, setSearch] = useState("");
    const [selectedMovie, setSelectedMovie] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const allMovies = await fetchAllMovies();
            setMovies(allMovies);
        };

        fetchData().then(() => {
        });
    }, []);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedMovie(event.target.value);
    };

    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(search.toLowerCase()) &&
        (selectedMovie === "" || movie.title === selectedMovie)
    );

    return (
        <div className="bg-black flex-col h-dvh items-center justify-center flex p-4">
            <h1 className="text-yellow-starYellow">Movies</h1>
            <div className="flex flex-row w-full">
                <input type="text"
                       className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                       value={search} onChange={handleSearch} placeholder="Search movies..."/>
                <select value={selectedMovie} onChange={handleSelect}>
                    <option value="">Select a movie</option>
                    {movies.map(movie => (
                        <option key={movie.episode_id} value={movie.title}>{movie.title}</option>
                    ))}
                </select>
            </div>
            <MovieTable movies={filteredMovies}/>
        </div>
    );
};

export default Movies;
