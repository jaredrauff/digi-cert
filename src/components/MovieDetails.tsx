import React, { useState, useEffect } from 'react';
import { fetchMovieDetails } from '../services/apiService';
import { useParams } from 'react-router-dom';
import { Film } from '../redux/types/movieTypes';

interface Props {
    movie?: Film;
}

const MovieDetails: React.FC<Props> = ({ movie: movieProp }) => {
    const { id = '' } = useParams();
    const [movie, setMovie] = useState<Film | null>(movieProp || null);
    const [loading, setLoading] = useState<boolean>(!movieProp);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (movieProp) {
            return;
        }

        const fetchData = async () => {
            try {
                let movieData = await fetchMovieDetails(id);
                movieData = {
                    ...movieData,
                    episode_id: movieData.episode_id.toString(),
                };
                setMovie(movieData as unknown as Film);
                setLoading(false);
            } catch (error) {
                setError('Error fetching movie details');
                setLoading(false);
            }
        };

        fetchData().then(() => {});
    }, [id, movieProp]);

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {movie && (
                <div className="flex-col flex">
                    <h3 className="text-yellow-starYellow">{movie.title}</h3>
                    <p className="text-yellow-starYellow">Episode ID: {movie.episode_id}</p>
                    <p className="text-yellow-starYellow">Director: {movie.director}</p>
                    <p className="text-yellow-starYellow">Release Date: {String(movie.release_date)}</p>
                    <p className="text-yellow-starYellow">Opening Crawl: {movie.opening_crawl}</p>
                    <p className="text-yellow-starYellow">Producer: {movie.producer}</p>
                </div>
            )}
        </div>
    );
};

export default MovieDetails;
