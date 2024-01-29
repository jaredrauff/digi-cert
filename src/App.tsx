import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import Movies from "./views/Movies";
import { useSelector } from 'react-redux';
import LightsaberLoader from './components/LightSaberLoader';
import { RootState } from './redux/types/types';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const App: React.FC = () => {
    const loading = useSelector((state: RootState) => state.loader.loading);
    return (
        <Router>
            <React.Fragment>
                {loading && <LightsaberLoader />}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movies" element={<Movies />} />
                    <Route path="/movies/list" element={<MovieList />} />
                    <Route path="/movies/:id" element={<MovieDetails />} />
                </Routes>
            </React.Fragment>
        </Router>
    );
};

export default App;
