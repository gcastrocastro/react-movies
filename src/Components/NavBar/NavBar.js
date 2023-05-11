import {Link} from 'react-router-dom';
import './NavBar.css';

export default function NavBar({user}) {
    return(
        <nav>
            <h3>Welcome, {user}</h3>
            <Link to="/"> Movies List Page </Link>
            &nbsp; | &nbsp;
            <Link to="/actors"> Actors List Page </Link>
        </nav>
    )
}