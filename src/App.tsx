import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import UpcomingMovie from './pages/UpcomingMovie/UpcomingMovie';
import PopMovieList from './pages/Movies/PopMovieList';
import Shows from './pages/TV/Shows';
import Watchlist from './pages/Watchlist/Watchlist';
import NotFound from './pages/NotFound/NotFound';
import Home from './components/Home/Home';
import MovieDetails from './pages/Details/MovieDetails';
import UpMovieDetails from './pages/Details/UpMovieDetails';
import ShowDetails from './pages/Details/ShowDetails';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="upcoming-movies/details/:id"
            element={<UpMovieDetails />}
          />
          <Route path="upcoming-movies" element={<UpcomingMovie />} />
          <Route path="movies" element={<PopMovieList />} />
          <Route path="movies/details/:id" element={<MovieDetails />} />
          <Route path="tvshows" element={<Shows />} />
          <Route path="tvshows/details/:id" element={<ShowDetails />} />
          <Route path="watchlist" element={<Watchlist />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
