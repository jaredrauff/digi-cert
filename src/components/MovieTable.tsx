import React from 'react';
import {Link} from 'react-router-dom';
import { Film } from '../redux/types/movieTypes';

interface Props {
    movies: Film[]; // Update the type to Film[]
}

interface SortConfig {
    key: keyof Film | undefined;
    direction: string;
}

const MovieTable: React.FC<Props> = ({ movies }) => {
    const [sortConfig, setSortConfig] = React.useState<SortConfig>({ key: 'title', direction: 'ascending' });

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
        setSortConfig({ key, direction });
    };

    return (
        <table>
            <thead>
            <tr>
                <th onClick={() => requestSort('title')}>Title</th>
                <th onClick={() => requestSort('episode_id')}>Episode ID</th>
            </tr>
            </thead>
            <tbody>
            {sortedMovies.map((movie) => (
                <tr key={movie.episode_id}>
                    <td><Link to={`/movie/${movie.episode_id}`}>{movie.title}</Link></td>
                    <td>{movie.episode_id}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default MovieTable;
