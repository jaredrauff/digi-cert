import React from 'react';
import { Film } from '/redux/types/movieTypes';
import Modal from 'react-modal';
import MovieDetails from './MovieDetails';
import LightsaberLoader from './LightSaberLoader';
import { XIcon } from '@heroicons/react/solid';

interface Props {
    movies: Film[];
}

interface SortConfig {
    key: keyof Film | undefined;
    direction: string;
}

const MovieTable: React.FC<Props> = ({ movies }) => {
    const [sortConfig, setSortConfig] = React.useState<SortConfig>({ key: 'episode_id', direction: 'ascending' });
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [selectedMovie, setSelectedMovie] = React.useState<Film | null>(null);
    const [loading, setLoading] = React.useState(false); // Add loading state
    const sortedMovies = React.useMemo(() => {
        let sortableMovies = [...movies];
        if (sortConfig.key && sortConfig.direction) {
            sortableMovies.sort((a, b) => {
                if (a[sortConfig.key!] < b[sortConfig.key!]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key!] > b[sortConfig.key!]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableMovies;
    }, [movies, sortConfig]);

    const requestSort = (key: keyof Film) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({key, direction});
    };
    const openModal = (movie: Film) => {
        setSelectedMovie(movie);
        setLoading(true); // Set loading to true when opening modal
        setIsOpen(true);
        // Simulate async operation (e.g., fetching additional data)
        setTimeout(() => {
            setLoading(false); // Set loading to false after 5 seconds
        }, 5000);
    };

    const closeModal = () => {
        setIsOpen(false);
    };
    return (
        <div className="w-full">
            <div className="w-full p-4 gap-6 flex flex-col">
                <div className="flex">
                    <div className="flex justify-between w-full">
                        <span className="text-yellow-starYellow" onClick={() => requestSort('title')}>Title</span>
                        <span className="text-yellow-starYellow"
                              onClick={() => requestSort('episode_id')}>Episode ID</span>
                    </div>
                </div>
                <div className="flex flex-col border-gray-200 rounded-lg overflow-hidden dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
                    {sortedMovies.map((movie) => (
                        <div
                            className="flex w-full justify-between p-4 hover:bg-gray-100 duration-300 transition ease cursor-pointer "
                            key={movie.episode_id} onClick={() => openModal(movie)}>
                            <p className="text-yellow-starYellow">{movie.title}</p>
                            <p className="text-yellow-starYellow">{movie.episode_id}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Movie Details"
                className="absolute inset-40 overflow-auto bg-white rounded-lg outline-none"
            >
                {loading ? (
                    <LightsaberLoader />
                ) : (
                <div className="flex-col p-4">
                    <div className="flex justify-end">
                        <XIcon className="w-6 text-gray-500 hover:text-gray-900 cursor-pointer" onClick={closeModal}/>
                    </div>
                    {selectedMovie && <MovieDetails movie={selectedMovie}/>}
                </div>
                )}
            </Modal>
        </div>
    );
};

export default MovieTable;
