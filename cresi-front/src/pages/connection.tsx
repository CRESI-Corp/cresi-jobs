import react from 'react';
import {Link} from "react-router-dom"
import '../styles/connection/connection.css'
import microsoft from "../assets/microsoft.png"
import ent from "../assets/moodle.png"

function connectionPage() {
    return (
        <body>

            {/**
                if connection page do not display navbar 
             */}

            <div className="all">
                <form action="" method="post" class="">
                    <h1 className="titre">Connexion</h1>
                    <div className="">
                        <div className="ent">
                            <p class="">Connexion avec l'ENT</p>
                            <img className='entlogo' src={ent}></img>
                        </div>
                        <div className="micro">
                            <img className='micrologo' src={microsoft}></img>
                        </div>
                        <div className="ou">
                            <p>ou</p>
                        </div>
                        <div className="mail">
                            <input type="email" placeholder='Adresse email' className=''/>
                            <i className="fa-solid fa-user-secret"></i>
                        </div>
                        <div className='mdp'>
                            <input type="password" placeholder='Mot de passe' className=""/>
                            <i className="fa-solid fa-user-secret"></i>
                        </div>
                    </div>
                    <div className='autre'>
                        <div className="souvenir">
                            <input type="checkbox" name="rememberMe" id="rememberMe" placeholder='rememberMe' className=''/>
                            <label htmlFor="rememberMe" className="">Se souvenir de moi</label>
                        </div>
                        <Link to="/">
                            <div  className="oublie">
                                Mot de passe oublié ?
                            </div>
                        </Link>
                        
                    </div>

                    <div className='connection'>
                        <input type="button" value="Je me connecte" className=""/>
                    </div>

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

export default connectionPage