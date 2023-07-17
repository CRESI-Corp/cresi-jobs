import '../styles/hub/hub.css'
import {Link} from "react-router-dom"
import cresihub from "../assets/cresihub.svg";

function hub() {
    return (
        <div className="hub-bar">
            <div className='hub-logo'>
                <img src={cresihub} alt="" />
            </div>
            <div className="hub-bar-menu">
                <Link to="/account">
                    <div className="hub-menu">
                        <i className="bx bx-user icon"></i>
                        Mon compte
                    </div>
                </Link>
                <Link to="/account">
                    <div className="hub-menu">
                        <i className="bx bx-link icon"></i>
                        Mes candidatures
                    </div>
                </Link>
                <Link to="/account">
                    <div className="hub-menu">
                        <i className="bx bx-file-find icon"></i>
                        Les offres d'emploi
                    </div>
                </Link>
                <Link to="/account">
                    <div className="hub-menu">
                        <i className="bx bx-hive icon"></i>
                        Les associations
                    </div>
                </Link>
                <Link to="/account">
                    <div className="hub-menu">
                        <i className="bx bx-bell icon"></i>
                        Mes notifications
                    </div>
                </Link>
                <Link to="/account">
                    <div className="hub-menu">
                        <i className="bx bx-paper-plane icon"></i>
                        Nous contacter
                    </div>
                </Link>
            </div>
            <div className="hub-deco">
                <Link to="/account" className=''>
                    <div className="hub-menu">
                        <i className="bx bx-log-out icon"></i>
                        Déconnexion
                    </div>
                </Link>
            </div>
        </div>
    );

}

export default hub