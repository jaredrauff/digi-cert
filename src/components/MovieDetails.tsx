import React, { useState, useEffect } from 'react';
import { fetchMovieDetails } from '../services/apiService';
import { useParams } from 'react-router-dom';

interface Movie {
    title: string;
    episode_id: number;
    director: string;
    release_date: string;
    opening_crawl: string;
    producer: string;
    url: string;
}

const MovieDetails: React.FC = () => {
    const { id = '' } = useParams();
    const [movie, setMovie] = useState<Movie | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let movieData = await fetchMovieDetails(id);
                movieData = {
                    ...movieData,
                    episode_id: movieData.episode_id.toString(),
                };
                setMovie(movieData as unknown as Movie);
                setLoading(false);
            } catch (error) {
                setError('Error fetching movie details');
                setLoading(false);
            }
        };

        fetchData().then(() => {});
    }, [id]);

    return (
        <div>
            <h2>Movie Details</h2>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {movie && (
                <div>
                    <h3>{movie.title}</h3>
                    <p>Episode ID: {movie.episode_id}</p>
                    <p>Director: {movie.director}</p>
                    <p>Release Date: {movie.release_date}</p>
                    <p>Opening Crawl: {movie.opening_crawl}</p>
                    <p>Producer: {movie.producer}</p>
                    <p>URL: {movie.url}</p>
                </div>
            )}
        </div>
    );
};

export default MovieDetails;
