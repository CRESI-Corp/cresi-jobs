import react from 'react';
import {Link} from "react-router-dom"
import '../styles/inscription/inscription.css'
import microsoft from "../assets/microsoft.png"
import ent from "../assets/moodle.png"

function inscriptionteacherPage() {
    return (
        <body>
            <div className="all">
                <div className='zoom'>
                    <form action="" method="post" class="">
                        <h1 className="titre">Inscription</h1>
                            <div className='name'>
                                <div className="ChampNom">
                                    <input type="" placeholder='Nom'/>
                                    <i class='bx bx-pulse'></i>
                                </div>
                                <div className="ChampNom">
                                    <input type="" placeholder='Prénom'/>
                                    <i class='bx bx-pulse'></i>
                                </div>
                            </div>
                            <div className="ChampRenseignemants">
                                <input type="email" placeholder='Adresse email'/>
                                <i class='bx bxs-envelope'></i>
                            </div>
                            <div className='tiers'>
                                <div className="ent">
                                    <p>L'association est déclarée</p>
                                </div>
                                <div className="micro">
                                    <div className='micrologo'>
                                        <label htmlFor="declare" className='declare'>
                                            <input type="checkbox" name="declare" id="declare"/>
                                            <span><i class='bx bx-check'></i></span>
                                        </label>
                                        
                                    </div>                             
                                </div>
                            </div>
                            <div className="ChampRenseignemants">
                                <input type="" placeholder='RNA'/>
                                <i class='bx bx-hash'></i>
                            </div>
                            <div className='ChampRenseignemants'>
                                <input type="password" placeholder='Mot de passe'/>
                                <i class='bx bxs-lock-alt'></i>
                            </div>
                            <div className='ChampRenseignemants'>
                                <input type="password" placeholder='Vérification mot de passe'/>
                                <i class='bx bxs-lock-alt'></i>
                            </div>
                            <button className='create'>
                            <div className='creation'>
                                <p>Je crée mon  compte</p>
                                <i class='bx bx-right-arrow-alt'></i>
                            </div>
                        </button>
                        <Link to="/registration">
                            <div className="registration">
                                Déjà membre de la plateforme ? C'est par ici !
                            </div>
                        </Link>
                    </form>
                   </div>
               </div>
        </body>
    );

}

export default inscriptionteacherPage