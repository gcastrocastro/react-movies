import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import './MovieDetailPage.css';

export default function MovieDetailPage({movies}) {
    const {movieName} = useParams();
    const [movie, setMovie] = useState(null);

    function fetchMovie(){
        try {
            const foundMovie = movies.find(movie => movie.title === movieName)
            setMovie(foundMovie);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => { 
        fetchMovie();
    },[])

    if (!movie){
        return <p>Loading movie information ...</p>
    }

    return (
        <div className="details-container">
          <img
            src={movie.posterPath}
            alt={movie.title}
          />
          <div className="details">
            <h2>{movie.title}</h2>
            <h3>({movie.releaseDate})</h3>
            <br/>
            <h4>Cast: </h4>
            <p>{movie.cast.join(', ')}</p>
          </div>
        </div>
    )
}