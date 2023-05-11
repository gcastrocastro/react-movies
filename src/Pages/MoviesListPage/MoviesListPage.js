import {Link} from 'react-router-dom';
import MovieCard from '../../Components/MovieCard/MovieCard';
import './MoviesListPage.css';

export default function MoviesListPage({movies}) {
    return(
        <section className="movies-container">
            {movies.map(movie => {
                return(
                    <Link to={`/movies/${movie.title}`} key={movie.title}>
                        <MovieCard movie={movie}/>
                    </Link>
                )
            })}
        </section>
    )
}