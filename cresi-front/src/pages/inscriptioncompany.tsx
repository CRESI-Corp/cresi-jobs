import react from 'react';
import {Link} from "react-router-dom"
import '../styles/inscription/inscription.css'
import microsoft from "../assets/microsoft.png"
import ent from "../assets/moodle.png"

function inscriptioncompanyPage() {
    return (
        <body>
            <div className="all">
                <div className='zoom'>
                    <form action="" method="post" class="">
                        <h1 className="titre">Inscription</h1>
                            <div className="ChampRenseignemants">
                                <input type="" placeholder="Nom de l'entreprise"/>
                                <i class='bx bx-pulse'></i>
                            </div>
                            <div className="ChampRenseignemants">
                                <input type="email" placeholder='Adresse email'/>
                                <i class='bx bxs-envelope'></i>
                            </div>
                            <div className="ChampRenseignemants">
                                <input type="" placeholder='SIRET'/>
                                <i class='bx bxs-school' ></i>
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

export default inscriptioncompanyPage