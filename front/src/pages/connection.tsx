import react from 'react';
import { Grid, Container } from '@mui/material'
import {Link} from "react-router-dom"

function connectionPage() {
    return (
        <body>

            {/**
                if connection page do not display navbar 
             */}

            <div class="flex justify-center items-center w-screen h-screen">
                <form action="" method="post" class="w-9/12 md:w-1/2 lg:w-1/3 xl:w-1/4 h-3/4">
                    <h1 class="text-center text-3xl md:text-5xl font-bold text-Primary p-2 mx-6 mt-12 md:mt-28 mb-8">Connexion</h1>
                    <div class="flex flex-col">
                        <div class="flex flex-row items-center w-full rounded-xl m-2 px-2 bg-white">
                            <input type="text" placeholder='Adresse email' class='p-2 w-full rounded-xl'/>
                            <i>
                                icon
                            </i>
                        </div>
                        <div class='flex flex-row items-center w-full rounded-xl m-2 px-2 bg-white'>
                            <input type="text" placeholder='Mot de passe' class="p-2 w-full rounded-xl"/>
                            <i>
                                icon
                            </i>
                        </div>
                    </div>
                    <div class='flex flex-row justify-between px-4 mb-8'>
                        <div class="text-Primary">
                            <input type="checkbox" name="rememberMe" id="rememberMe" placeholder='rememberMe' class='rounded-full p-2'/>
                            <label htmlFor="rememberMe" class="ml-2">Se souvenir de moi</label>
                        </div>
                        <Link to="/">
                            <div  class="text-Secondary text-center tracking-wider">
                                Mot de passe oublié ?
                            </div>
                        </Link>
                        
                    </div>

                    <input type="button" value="Je me connecte" class="bg-Secondary text-Dominant px-4 py-2 m-2 text-xl w-full font-medium rounded-xl"/>


                    <Link to="/registration">
                        <div class="text-Secondary text-center tracking-wider mt-2">
                            Nouveau sur la plateforme ? C'est par ici
                        </div>
                    </Link>
                </form>
            </div>
        </body>
    );

}

export default connectionPage