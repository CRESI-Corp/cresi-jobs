import '../styles/hub/hub.css'
import {Link} from "react-router-dom"
import cresihub from "../assets/cresihub.svg";
import cresijobs from "../assets/cresijobs.svg";
import cresiasso from "../assets/cresiasso.svg";
import IMG from "../assets/phototest.png";
import searchicon from "../assets/searchicon.svg";
import Calendar from "../components/Calendar/Calendar";
import News from "../components/News/News";
import Tuillecresi from "../components/TuilleHub/TuilleHub";
import Tuillecresi2 from "../components/TuilleHub/TuilleHub copy";
import ico_head from "../assets/ico_head.png"


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
                            {/*<div className="hub-bar">*/}
                                <div className="hub-bar-menu">
                                    <div className="hub-menu">
                                        <Link to="/navbar" className='link-hub'>
                                            <i className="bx bx-user icon"></i>
                                            Mon compte
                                        </Link>
                                    </div>
                                    <div className="hub-menu">
                                        <Link to="/account" className='link-hub'>
                                            <i className="bx bx-link icon"></i>
                                            Mes candidatures
                                        </Link>
                                    </div>
                                    <div className="hub-menu">
                                        <Link to="/account" className='link-hub'>
                                            <i className="bx bx-file-find icon"></i>
                                            Les offres d'emploi
                                        </Link>
                                    </div>
                                    <div className="hub-menu">
                                        <Link to="/account" className='link-hub'>
                                            <i className="bx bx-hive icon"></i>
                                            Les associations
                                        </Link>
                                    </div>
                                    <div className="hub-menu">
                                        <Link to="/account" className='link-hub'>
                                            <i className="bx bx-bell icon"></i>
                                            Mes notifications
                                        </Link>
                                    </div>
                                    <div className="hub-menu">
                                        <Link to="/account" className='link-hub'>
                                            <i className="bx bx-paper-plane icon"></i>
                                            Nous contacter
                                        </Link>
                                    </div>
                                {/*</div>
                                <div className="hub-deco"> */}
                                    <div className="hub-menu">
                                        <Link to="/account" className='link-hub'>
                                            <i className="bx bx-log-out icon"></i>
                                            Déconnexion
                                        </Link>
                                    </div>
                                {/*</div>*/}
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
                    <Tuillecresi />
                    <Tuillecresi2 />
                    <div className='hub-tuille-cresi'>
                        <h2 className='hub-tuille-propos-title'>A PROPOS</h2>
                        <div className="img-corps">
                            <img src={IMG} alt="" className="image-corps"/>
                            <Link to="/account" className='link-propos'>
                                EN SAVOIR PLUS
                            </Link>
                        </div>
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