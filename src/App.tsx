import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import Movies from "./views/Movies";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/movies/list" element={<MovieList />} />
                <Route path="/movies/:id" element={<MovieDetails />} />
            </Routes>
        </Router>
    );
};

export default App;
