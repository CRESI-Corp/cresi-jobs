import react from 'react';
import {Link} from "react-router-dom"

function connectionPage() {
    return (
        <body>

            {/**
                if connection page do not display navbar 
             */}

            <div class="">
                <form action="" method="post" class="">
                    <h1 class="">Connexion</h1>
                    <div class="flex flex-col">
                        <div class="">
                            <input type="text" placeholder='Adresse email' class=''/>
                            <i>
                                icon
                            </i>
                        </div>
                        <div class=''>
                            <input type="text" placeholder='Mot de passe' class=""/>
                            <i>
                                icon
                            </i>
                        </div>
                    </div>
                    <div class=''>
                        <div class="">
                            <input type="checkbox" name="rememberMe" id="rememberMe" placeholder='rememberMe' class=''/>
                            <label htmlFor="rememberMe" class="">Se souvenir de moi</label>
                        </div>
                        <Link to="/">
                            <div  class="">
                                Mot de passe oublié ?
                            </div>
                        </Link>
                        
                    </div>

                    <input type="button" value="Je me connecte" class=""/>


                    <Link to="/registration">
                        <div class="">
                            Nouveau sur la plateforme ? C'est par ici
                        </div>
                    </Link>
                </form>
            </div>
        </body>
    );

}

export default connectionPage