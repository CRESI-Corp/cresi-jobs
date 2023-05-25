import react from 'react';
import {Link} from "react-router-dom"
import '../styles/connection/connection.css'
import microsoft from "../assets/microsoft.png"
import ent from "../assets/moodle.png"

function inscriptionStudentPage() {
    return (
        <body>

            {/**
                if connection page do not display navbar 
             */}
            <div className="all">
                <form action="" method="post" class="">
                    <h1 className="titre">Connexion</h1>
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
                        <div className="ChampRenseignemants">
                            <input type="email" placeholder='Adresse email'/>
                            <i class='bx bxs-envelope'></i>
                        </div>
                        <div className='ChampRenseignemants'>
                            <input type="password" placeholder='Mot de passe'/>
                            <i class='bx bxs-lock-alt'></i>
                        </div>
                        <div className='autre'>
                            <div className="souvenir">
                                <input type="checkbox" name="rememberMe" id="rememberMe" placeholder='rememberMe'/>
                                <label htmlFor="rememberMe" className="">Se souvenir de moi</label>
                            </div>
                            <Link to="/">
                                <div  className="oublie">
                                    Mot de passe oublié ?
                                </div>
                            </Link>
                        </div>
                        <button className='connection'>
                           <div className='connexion'>
                               <p>Je me connecte</p>
                               <i class='bx bx-right-arrow-alt'></i>
                           </div>
                       </button>
                       <Link to="/registration">
                           <div className="registration">
                               Nouveau sur la plateforme ? C'est par ici !
                           </div>
                       </Link>
                   </form>
               </div>
        </body>
    );

}

export default inscriptionStudentPage