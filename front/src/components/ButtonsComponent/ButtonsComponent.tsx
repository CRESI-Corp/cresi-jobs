
import './ButtonsComponent.css';
import {Link} from "react-router-dom"

function ButtonsComponent() {
    return (
        <div className='hub-btn-inscr-co'>
                    <div className='hub-btn-inscr'>
                        <Link to="/hub" className='hub-btn-inscription'>
                            Inscription
                        </Link>
                    </div>
                    <div className='hub-btn-co'>
                        <Link to="/hub" className='hub-btn-connexion'>
                            Connexion
                        </Link>
                    </div>
                </div>
    );
}

export default ButtonsComponent


