import './MovieCard.css';

export default function MovieCard({movie}) {
    return (
        <div className="movie-card">
            <img
                src={movie.posterPath}
                alt={movie.title}
            />
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <h3>Released on: {movie.releaseDate}</h3>
            </div>
        </div>
    )
}