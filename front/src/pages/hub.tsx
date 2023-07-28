import '../styles/hub/hub.css'
import {Link} from "react-router-dom"
import cresihub from "../assets/cresihub.svg";
import searchicon from "../assets/searchicon.svg";
import Calendar from "../components/Calendar/Calendar";
import News from "../components/News/News";
import ico_head from "../assets/ico_head.png"

{/*
function hub() {
    return (
        <body className='hub'>
            <header className='hub-header'>
                <div className="hub-Dropdown">
                    <div className="sec-center">
                        <input
                        className="dropdown"
                        type="checkbox"
                        id="dropdown"
                        name="dropdown"
                        />
                        <label className="for-dropdown" htmlFor="dropdown">
                        <img src={ico_head} alt="" className='hub-photo-profil'/>
                        Nom du boug
                        <i class='bx bx-dots-horizontal-rounded'></i>
                        </label>
                        <div className="section-dropdown">
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
                                <Link to="/account">
                                    <div className="hub-menu">
                                        <i className="bx bx-log-out icon"></i>
                                        Déconnexion
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hub-search'>
                    <input type="text" placeholder='Recherche' className='hub-search-bar'/>
                    <i class='bx bx-search' ></i>
                </div>
                <div className='hub-logo'>
                    <img src={cresihub} alt="" />
                </div>
                
            </header>

                <div className='hub-tuille'>
                    <div className='hub-tuille-cresi'>
                        CRESI JOBS
                    </div>
                    <div className='hub-tuille-cresi'>
                        CRESI RACING
                    </div>
                    <div className='hub-tuille-cresi'>
                        COMING SOON
                    </div>
                </div>
                <div className='hub-tuille'>
                    <div className='hub-tuille-news'>
                        NEWSLETTER
                    </div>
                    <div className='hub-tuille-calendar' id='hub-tuille-calendar'>
                        <Calendar />
                    </div>
                </div>

        </body>
    );

}

export default hub

*/}


function hub() {
    return (
        <body className='hub'>
            <header className='hub-header'>
                <div className="hub-Dropdown">
                    <div className="sec-center">
                        <input
                        className="dropdown"
                        type="checkbox"
                        id="dropdown"
                        name="dropdown"
                        />
                        <label className="for-dropdown" htmlFor="dropdown">
                        <img src={ico_head} alt="" className='hub-photo-profil'/>
                        Nom du boug 
                        <i class='bx bx-dots-horizontal-rounded'></i>
                        </label>
                        <div className="section-dropdown">
                            <div className="hub-bar">
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
                        </div>
                    </div>
                </div>
                <div className='hub-search'>
                    <input type="text" placeholder='Recherche' className='hub-search-bar'/>
                    <img src={searchicon} alt='' className='hub-search-icon' />
                </div>
                <div className='hub-logo'>
                    <img src={cresihub} alt="" />
                </div>
                
            </header>

                <div className='hub-tuille'>
                    <div className='hub-tuille-cresi'>
                        CRESI JOBS
                    </div>
                    <div className='hub-tuille-cresi'>
                        CRESI RACING
                    </div>
                    <div className='hub-tuille-cresi'>
                        COMING SOON
                    </div>
                </div>
                <div className='hub-tuille'>
                    <div className='hub-tuille-news'>
                        <h2 className='hub-tuille-news-title'>NEWSLETTER</h2> 
                        <News />
                        <News />
                        <News />
                        <News />
                    </div>
                    <div className='hub-tuille-calendar' id='hub-tuille-calendar'>
                        <Calendar />
                    </div>
                </div>

            
        </body>
    );

}

export default hub