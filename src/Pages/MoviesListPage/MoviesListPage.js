import {Link} from 'react-router-dom';
import MovieCard from '../../Components/MovieCard/MovieCard';

export default function MoviesListPage({movies}) {
    return(
        <section>
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