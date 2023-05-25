import react from 'react';
import {Link} from "react-router-dom"
import '../styles/registration/registration.css'


function registrationPage() {
    return (
        <body>
            <div className="all">
                <div className='zoom'>
                    <form action="" method="post" class="">
                        <h1 className="titre">Vous êtes...</h1>
                            <div className=''>
                                <div className="ecole">
                                    <Link to="/inscriptionstudent">
                                        <div className="tuille">
                                            <i class='bx bx-id-card'></i>
                                            <p>Etudiant</p> 
                                        </div>
                                    </Link>
                                    <Link to="/inscriptionteacher">
                                        <div className="tuille">
                                            <i class='bx bxs-bank'></i>
                                           <p>Tuteur</p> 
                                        </div>
                                    </Link>
                                </div>
                                <div className='pro'>
                                    <Link to="/inscriptioncompany">
                                        <div className="tuille">
                                            <i class='bx bxs-school' ></i>
                                            <p>Entreprise</p>
                                        </div>
                                    </Link>
                                    <Link to="/inscriptionassociation">
                                        <div className="tuille">
                                            <i className="bx bx-hive icon"></i>
                                            <p>Association</p> 
                                        </div>
                                    </Link>
                                </div>
                            </div>                       
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

export default registrationPage