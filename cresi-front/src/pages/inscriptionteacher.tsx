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
                            <div className='tiers'>
                                <div className="ent">
                                    <p>Connexion avec l'ENT</p>
                                    <img className='entlogo' src={ent}></img>
                                </div>
                                <div className="micro">
                                    <div className='micrologo'>
                                        <img src={microsoft}></img>
                                    </div>                             
                                </div>
                            </div>
                            <div className="ou">
                                <p>ou</p>
                            </div>
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
                            <div className="ChampRenseignemants">
                                <input type="" placeholder='Campus'/>
                                <i class='bx bxs-bank'></i>
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
                        <Link to="/connection">
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