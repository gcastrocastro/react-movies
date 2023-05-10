import {Link} from 'react-router-dom';

export default function NavBar({user}) {
    return(
        <nav>
            <h3>Username: {user}</h3>
            <Link to="/"> Movies List Page </Link>
            &nbsp; | &nbsp;
            <Link to="/actors"> Actors List Page </Link>
        </nav>
    )
}