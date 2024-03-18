import { Movie, TVShow, UpcomingMovies, formatYear } from "../../models";
import {
  useFetchPopularMovieDataQuery,
  useFetchTVShowDataQuery,
  useFetchUpcomingDataQuery,
} from "../../store/fetchDataSlice";
import "./Home.scss";
import Button from "../UI/Button";
import { Link, NavLink, useNavigate } from "react-router-dom";
import star from "../../assets/star.png";
import pop from "../../assets/pop.png";
import video from "../../assets/AMC Theatres. We Make Movies Better..mp4";
import service from "../../assets/service-banner.jpg";
import download from "../../assets/download.png";
import camera from "../../assets/camera.png";
import screen from "../../assets/screen.png";
import started from "../../assets/wallpaper-trial.jpg";

const Home = () => {
  const {
    data: popularMoviesData,
    error: popularMoviesError,
    isLoading: popularMoviesLoading,
  } = useFetchPopularMovieDataQuery();

  const {
    data: tvShowData,
    error: tvShowError,
    isLoading: tvShowLoading,
  } = useFetchTVShowDataQuery();

  const {
    data: upcomingMoviesData,
    error: upcomingMoviesError,
    isLoading: upcomingMoviesLoading,
  } = useFetchUpcomingDataQuery();
  const navigate = useNavigate();

  const handleMovieClick = (itemId: number, itemType: string) => {
    let path;
    switch (itemType) {
      case "movie":
        path = `/movies/details/${itemId}`;
        break;
      case "upcomingMovie":
        path = `/upcoming-movies/details/${itemId}`;
        break;
      case "tvShow":
        path = `/tvshows/details/${itemId}`;
        break;
      default:
        path = "/";
    }

    navigate(path, { state: { referringUrl: window.location.pathname } });
  };
  const truncateText = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) {
      return text;
    } else {
      return text.substring(0, maxLength - 3) + "...";
    }
  };
  const renderMovieList = (movies: Movie[], title: string) => {
    const slicedMovies = movies.slice(0, 4);
    return (
      <div className="movielist">
        <div className="movielist__title-box">
          <div className="movielist__sub-title">
            <h6 className="movielist__title movielist__title--all">
              Most Popular Movies
            </h6>
            <h2 className="movielist__title movielist__title--section">
              {title}
            </h2>
          </div>
          <NavLink to="/movies">
            <Button type="view-all" children="View All Movies" />
          </NavLink>
        </div>
        <div className="movielist__items">
          {slicedMovies.map((movie: Movie) => (
            <div
              key={movie.id}
              onClick={() => handleMovieClick(movie.id, "movie")}
            >
              <NavLink
                to={`/movies/details/${movie.id}`}
                className="movie-link"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="movielist__img"
                  loading="lazy"
                />
              </NavLink>
              <div className="movielist__details-box">
                <p className="movielist__details movielist__details--title">
                  {truncateText(movie.title, 20)}
                </p>
                <p className="movielist__details movielist__details--date">
                  {formatYear(movie.release_date)}
                </p>
              </div>
              <div className="movielist__details-box">
                <div className="movielist__vote">
                  <img src={pop} className="movielist__star" alt="star icon" />
                  <p className="movielist__details movielist__details--pop">
                    {movie.popularity}
                  </p>
                </div>
                <div className="movielist__vote">
                  <img src={star} className="movielist__star" alt="star icon" />
                  <p className="movielist__details movielist__details--vote">
                    {movie.vote_average}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderUpcomingMovieList = (
    upcomingMovies: UpcomingMovies[],
    title: string
  ) => {
    const slicedUpcomingMovies = upcomingMovies.slice(0, 4);
    return (
      <div className="upcominglist">
        <div className="upcominglist__title-box">
          <div>
            <h6 className="upcominglist__title upcominglist__title--all">
              Online Streaming
            </h6>
            <h2 className="upcominglist__title upcominglist__title--section">
              {title}
            </h2>
          </div>

          <NavLink to="/upcoming-movies">
            <Button type="view-all" children="View All" />
          </NavLink>
        </div>
        <div className="upcominglist__items">
          {slicedUpcomingMovies.map((upcomingMovie: UpcomingMovies) => (
            <div
              key={upcomingMovie.id}
              className="upcominglist__item"
              onClick={() =>
                handleMovieClick(upcomingMovie.id, "upcomingMovie")
              }
            >
              <NavLink
                to={`/upcoming-movies/details/${upcomingMovie.id}`}
                className="movie-link"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${upcomingMovie.poster_path}`}
                  alt={upcomingMovie.title}
                  className="upcominglist__img"
                  loading="lazy"
                />
              </NavLink>
              <div className="upcominglist__details-box">
                <p className="upcominglist__details movielist__details--title">
                  {truncateText(upcomingMovie.title, 20)}
                </p>
                <p className="upcominglist__details upcominglist__details--date">
                  {formatYear(upcomingMovie.release_date)}
                </p>
              </div>

              <div className="upcominglist__details-box">
                <div className="upcominglist__vote">
                  <img
                    src={pop}
                    className="upcominglist__star"
                    alt="star icon"
                  />
                  <p className="upcominglist__details upcominglist__details--pop">
                    {upcomingMovie.popularity}
                  </p>
                </div>
                <div className="upcominglist__vote">
                  <img
                    src={star}
                    className="upcominglist__star"
                    alt="star icon"
                  />
                  <p className="upcominglist__details upcominglist__details--vote">
                    {upcomingMovie.vote_average}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderTVShowList = (tvShows: TVShow[], title: string) => {
    const slicedTVShows = tvShows.slice(0, 4);
    return (
      <div className="tvshowlist">
        <div className="tvshowlist__title-box">
          <div className="tvshowlist__sub-title">
            <h6 className="tvshowlist__title tvshowlist__title--all">
              Online Streaming
            </h6>
            <h2 className="tvshowlist__title tvshowlist__title--section">
              {title}
            </h2>
          </div>
          <NavLink to="/tvshows">
            <Button type="view-all" children="View All Series" />
          </NavLink>
        </div>
        <div className="tvshowlist__items">
          {slicedTVShows.map((tvShow: TVShow) => (
            <div
              key={tvShow.id}
              className="tvshowlist__item"
              onClick={() => handleMovieClick(tvShow.id, "tvShow")}
            >
              <NavLink
                to={`/tvshows/details/${tvShow.id}`}
                className="movie-link"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`}
                  alt={tvShow.name}
                  className="tvshowlist__img"
                  loading="lazy"
                />
              </NavLink>
              <div className="tvshowlist__details-box">
                <p className="tvshowlist__details tvshowlist__details--title">
                  {truncateText(tvShow.name,20)}
                </p>
                <p className="tvshowlist__details tvshowlist__details--date">
                  {formatYear(tvShow.first_air_date)}
                </p>
              </div>
              <div className="tvshowlist__details-box">
                <div className="tvshowlist__vote">
                  <img src={pop} className="tvshowlist__star" alt="star icon" />
                  <p className="tvshowlist__details tvshowlist__details--pop">
                    {tvShow.popularity}
                  </p>
                </div>
                <div className="tvshowlist__vote">
                  <img
                    src={star}
                    className="tvshowlist__star"
                    alt="star icon"
                  />
                  <p className="tvshowlist__details tvshowlist__details--vote">
                    {tvShow.vote_average}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  if (popularMoviesLoading || tvShowLoading || upcomingMoviesLoading) {
    return <p>Loading...</p>;
  }

  if (popularMoviesError || tvShowError || upcomingMoviesError) {
    return <p>Error loading data</p>;
  }

  return (
    <div className="home">
      <div className="home__intro">
        <video className="home__video" autoPlay muted loop>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="home__description">
          <h1 className="home__title">Eyeforascreen</h1>
          <h2 className="home__slogan">Where Every Watchlist Tells a Story!</h2>
          <p className="home__text">
            Discover, Track, Enjoy – Unleash the Magic of Movies and TV Shows
            with Eyeforascreen! Explore an extensive collection, add to your
            personal watchlist, and dive into a world of cinematic wonders. Your
            entertainment journey begins here
          </p>
          <div className="home__bubble-box">
            <p className="home__bubble">watchlist</p>
            <p className="home__bubble">trailers</p>
            <p className="home__bubble">details</p>
            <p className="home__bubble">stats</p>
          </div>
        </div>
      </div>
      <div className="home__list">
        {upcomingMoviesData &&
          renderUpcomingMovieList(
            upcomingMoviesData.results,
            "Upcoming Movies"
          )}
        <div className="home__resolution-container">
          <div className="home__serv-container">
            <div className="home__picture-box">
              <img src={service} alt="image-serv" className="home__serv-img" />
              <Link className="home__download" to={"/"}>
                <p className="home__text home__text--download">DOWNLOAD</p>
                <img
                  src={download}
                  alt="icon-dl"
                  className="home__serv-icon  home__serv-icon--dl"
                />
              </Link>
            </div>
            <div className="home__serv-content">
              <p className="home__serv-title home__serv-title--service"></p>
              <p className="home__serv-title home__serv-title--our">
                OUR SERVICES
              </p>
              <h2 className="home__serv-subtitle">
                Download Your Shows Watch Offline.
              </h2>
              <p className="home__serv-text">
                Lorem ipsum dolor sit amet, consecetur adipiscing elseddo
                eiusmod tempor.There are many variations of passages of lorem
                Ipsum available, but the majority have suffered alteration in
                some injected humour.
              </p>
              <ul className="home__serv-details">
                <li className="home__serv-item">
                  <div className="home__icon-box">
                    <img
                      className="home__serv-icon home__serv-icon--screen"
                      src={screen}
                      alt="serv-icon"
                    />
                  </div>
                  <div className="home__service">
                    <h3 className="home__serv-title home__serv-title--item">
                      Enjoy on Your TV.
                    </h3>
                    <p className="home__serv-text home__serv-text--item">
                      Lorem ipsum dolor sit amet, consecetur adipiscing elit,
                      sed do eiusmod tempor.
                    </p>
                  </div>
                </li>
                <li className="home__serv-item">
                  <div className="home__icon-box">
                    <img
                      className="home__serv-icon home__serv-icon--camera"
                      src={camera}
                      alt="icon-serv"
                    />
                  </div>
                  <div className="home__service">
                    <h3 className="home__serv-title home__serv-title--item">
                      Watch Everywhere.
                    </h3>
                    <p className="home__serv-text home__serv-text--item">
                      Lorem ipsum dolor sit amet, consecetur adipiscing elit,
                      sed do eiusmod tempor.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {popularMoviesData &&
          renderMovieList(popularMoviesData.results, "Popular Movies")}
        {tvShowData &&
          renderTVShowList(tvShowData.results, "Popular TV Series")}
        <div className="home__trial">
          <img
            className="home__trial-background"
            src={started}
            alt="wallpaper-started"
          />
          <div className="home__trial-container">
            <div className="home__trial-title-wrapper">
              <h2 className="home__trial-title">Trial start first 30 days.</h2>
              <p className="home__trial-text">
                Enter your email to create or restart your membership.
              </p>
            </div>

            <form action="" className="home__trial-form">
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="home__email-field"
              />
              <Button type="get-started" children="Get Started" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
