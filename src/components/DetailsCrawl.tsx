import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Film } from '../redux/types/movieTypes';
import { fetchMovieDetails } from '../services/apiService';
import { useParams } from 'react-router-dom';
import volumeOn from '../assests/volume_on.svg';
import volumeOff from '../assests/volume_off.svg';
import codewars from '../assests/codewars.svg';

interface Props {
    movie?: Film;
}

const DetailsCrawl: React.FC<Props> = ({ movie: movieProp }) => {
    const { id = '' } = useParams();
    const [movie, setMovie] = useState<Film | null>(movieProp || null);
    const [loading, setLoading] = useState<boolean>(!movieProp);
    const [error, setError] = useState<string | null>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);
    const introRef = useRef<HTMLDivElement>(null);
    const audioRef = useRef<HTMLAudioElement>(null);
    const [muted, setMuted] = useState<boolean>(true); // State for muted

    // Fetch movie details
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

        fetchData();
    }, [id, movieProp]);

    // Create and play GSAP timeline
    useEffect(() => {
        const tl = gsap.timeline({ immediateRender: true }); // Add immediateRender option
        if (introRef.current && logoRef.current && contentRef.current && audioRef.current) {
            tl.to(introRef.current, 4.5, { opacity: 1, delay: 1 })
                .to(introRef.current, 1.5, {
                    opacity: 0,
                    onComplete: () => {
                        if (audioRef.current) {
                            audioRef.current.play();
                        }
                    }
                })
                .set(logoRef.current, { opacity: 1, scale: 2.75, delay: 0.5 })
                .to(logoRef.current, 8, { scale: 0.05, ease: "power2.out" })
                .to(logoRef.current, 1.5, { opacity: 0 }, "-=1.5")
                .to(contentRef.current, 200, { top: "-170%" });
        }
    }, [movie]);

    const onVolumeClick = () => {
        if (audioRef.current) {
            audioRef.current.muted = !audioRef.current.muted;
            setMuted(audioRef.current.muted);
        }
    };

    return (
        <div className="movie-details star-container bg-black">
            <section className="intro" ref={introRef}>
                <p>
                    A long time ago, in a galaxy far,<br /> far away....
                </p>
            </section>
            <section className="logo" ref={logoRef}>
                <img src={codewars} alt="Code Wars logo" />
            </section>
            <section className="crawl">
                <h2>Movie Details</h2>
                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}
                {movie && (
                    <div className="content" ref={contentRef}>
                        <h1 className="title">{movie.episode_id}</h1>
                        <h2 className="subtitle">{movie.title}</h2>
                        <p>{movie.opening_crawl}</p>
                    </div>
                )}
            </section>
            <audio ref={audioRef} muted>
                <source
                    type="audio/mpeg"
                    src="https://ia801501.us.archive.org/23/items/StarWars_20180709/Star%20Wars.mp3"
                />
            </audio>
            <button className="volume" type="button" onClick={onVolumeClick}>
                {muted ? (
                    <img src={volumeOff} alt="Volume is off" />
                ) : (
                    <img src={volumeOn} alt="Volume is on" />
                )}
            </button>
        </div>
    );
};

export default DetailsCrawl;
