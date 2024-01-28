import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../redux/hooks/reduxHooks';
import { showLoader, hideLoader } from '../redux/actions/actions';

const Home: React.FC = () => {
    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(showLoader());
        setTimeout(() => {
            dispatch(hideLoader());
        }, 5000);
    };
    return (
        <div className="bg-black h-dvh flex flex-col items-center justify-center p-4">
            <h1 className="font-sans text-yellow-starYellow text-6xl">Welcome to Star Wars Movie Database</h1>
            <p className="text-yellow-starYellow">Explore the Star Wars universe and discover information about your favorite movies.</p>
            <Link to="/movies" onClick={handleClick} className="text-yellow-starYellow hover:border-b hover:border-yellow-starYellow transition">View Movies</Link>
        </div>
    );
};

export default Home;
