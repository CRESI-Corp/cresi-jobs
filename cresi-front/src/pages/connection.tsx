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

            <div class="all">
                <form action="" method="post" class="">
                    <h1 class="titre">Connexion</h1>
                    <div class="">
                        <div class="ent">
                            <p class="">Connexion avec l'ENT</p>
                            <img class='entlogo' src={ent}></img>
                        </div>
                        <div class="micro">
                            <img class='micrologo' src={microsoft}></img>
                        </div>
                        <div class="ou">
                            <p>ou</p>
                        </div>
                        <div class="mail">
                            <input type="text" placeholder='Adresse email' class=''/>
                            <i class="fa-solid fa-user-secret"></i>
                        </div>
                        <div class='mdp'>
                            <input type="text" placeholder='Mot de passe' class=""/>
                            <i class="fa-solid fa-user-secret"></i>
                        </div>
                    </div>
                    <div class='autre'>
                        <div class="souvenir">
                            <input type="checkbox" name="rememberMe" id="rememberMe" placeholder='rememberMe' class=''/>
                            <label htmlFor="rememberMe" class="">Se souvenir de moi</label>
                        </div>
                        <Link to="/">
                            <div  class="oublie">
                                Mot de passe oublié ?
                            </div>
                        </Link>
                        
                    </div>

                    <div class='connection'>
                        <input type="button" value="Je me connecte" class=""/>
                    </div>

                    <Link to="/registration">
                        <div class="registration">
                            Nouveau sur la plateforme ? C'est par ici !
                        </div>
                    </Link>
                </form>
            </div>
        </body>
    );

}

export default connectionPage