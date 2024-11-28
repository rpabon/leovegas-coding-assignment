import { Link } from 'react-router-dom';
import { Movie } from './Movie';
import { useWatchLaterMovies } from '../hooks/useWatchLaterMovies';
import styles from '../styles/movie-grid.module.scss';
import '../styles/starred.scss';

export const WatchLater = () => {
  const { watchLaterMovies, clearWatchLater } = useWatchLaterMovies();

  return (
    <div className="starred" data-testid="watch-later-div">
      {watchLaterMovies.length > 0 && (
        <div data-testid="watch-later-movies" className="starred-movies">
          <h6 className="header">Watch Later List</h6>
          <div className={styles.grid}>
            {watchLaterMovies.map((movie) => (
              <Movie key={movie.id} movie={movie} />
            ))}
          </div>

          <footer className="text-center">
            <button className="btn btn-primary" onClick={clearWatchLater}>
              Empty list
            </button>
          </footer>
        </div>
      )}

      {watchLaterMovies.length === 0 && (
        <div className="text-center empty-cart">
          <i className="bi bi-heart" />
          <p>You have no movies saved to watch later.</p>
          <p>
            Go to <Link to="/">Home</Link>
          </p>
        </div>
      )}
    </div>
  );
};
