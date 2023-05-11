import ActorCard from "../../Components/ActorCard/ActorCard"
import './ActorsListPage.css';

export default function ActorsListPage({movies}) {
    let allCast = [];
    for (let movie of movies){
        allCast = [...allCast, ...movie.cast];
    }
    
    const castSet = new Set(allCast);
    const castNoDup = Array.from(castSet);

    return (
        <section className="actors-container">
            {castNoDup.map(actor => {
                return(
                    <ActorCard actor={actor} />
                )
            })}
        </section>
    )
}