import React from 'react';
import { Link } from 'react-router-dom';
const Home: React.FC = () => {
    return (
        <div className="bg-black h-dvh flex flex-col items-center justify-center p-4">
            <h1 className="font-sans text-yellow-starYellow text-6xl">Welcome to Star Wars Movie Database</h1>
            <p className="text-yellow-starYellow">Explore the Star Wars universe and discover information about your favorite movies.</p>
            <Link to="/movies" className="text-yellow-starYellow hover:border-b hover:border-yellow-starYellow transition">View Movies</Link>
        </div>
    );
};

export default Home;
