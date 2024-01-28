import React from 'react';
import {Link} from 'react-router-dom';
import {useAppDispatch} from '../redux/hooks/reduxHooks';
import {showLoader, hideLoader} from '../redux/actions/actions';

const Home: React.FC = () => {
    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(showLoader());
        setTimeout(() => {
            dispatch(hideLoader());
        }, 5000);
    };
    return (
        <div className="bg-black h-dvh flex flex-col items-center justify-center p-4 gap-6">
            <h1 className="font-sans text-yellow-starYellow text-6xl font-star-wars tracking-wider max-w-[900px] text-center leading-[120%]">Welcome to the Star Wars Movie Database</h1>
            <div className="flex flex-col gap-2 items-center">
                <p className="text-yellow-starYellow text-xl">Explore the Star Wars universe and discover information about your
                    favorite movies.</p>
                <Link to="/movies" onClick={handleClick}
                      className="text-yellow-starYellow relative after:absolute after:content-[''] after:block after:w-0 after:h-[2px] after:bg-yellow-starYellow after:transition-all after:duration-300 after:border-0 hover:after:w-full ease-in-out hover:ease-in-out hover:duration-300 hover:transition transition">View
                    Movies</Link>
            </div>
        </div>
    );
};

export default Home;
