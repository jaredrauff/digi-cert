import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div className="">
            <h1 className="font-sans">Welcome to Star Wars Movie Database</h1>
            <p>Explore the Star Wars universe and discover information about your favorite movies.</p>
            <Link to="/movies">View Movies</Link>
        </div>
    );
};

export default Home;
