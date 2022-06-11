import {Link} from "react-router-dom"

function navbar() {
    return (
        <nav>
            <Link to=""><div>PP</div></Link>
            <Link to=""><div>Qui nous sommes</div></Link>
            <Link to=""><div>nos offres</div></Link>
            <Link to="/profile/1"><div>Mon compte</div></Link>
            <Link to=""><div>Les association</div></Link>
            <Link to="/contact"><div>Contactez nous</div></Link>
        </nav>
    );
}

export default navbar