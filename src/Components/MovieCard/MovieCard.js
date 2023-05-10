export default function MovieCard({movie}) {
    return (
        <div className="movie-card">
            <img
                src={movie.posterPath}
                alt={movie.title}
            />
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <span>{movie.releaseDate}</span>
            </div>
        </div>
    )
}