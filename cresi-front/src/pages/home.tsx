import React from "react";

import '../styles/home/home.css';

function home() {   
    return (
        <body>
        <div className= "container-center-horizontal">
            <div className="not-connected-home screen">
                <h1 className="title montserrat-bold-pickled-bluewood-80px">Bienvenue sur Cresi Jobs </h1>
                <div className=" frame-11">
                    <div className="frame-14">
                        <div className="courte-explication-du-site montserrat-medium-silver-sand-24px">Courte explication du site
                        </div>
                    </div>
                    <div className="frame-15">
                        <div className="frame-11-1">
                            <div className="inscription">Inscription 
                            </div>
                            <div className="frame-13">
                                <div className="connexion montserrat-medium-pickled-bluewood-24px">Connexion
                                </div>
                            </div> 
                        </div>
                    </div> 
                </div>
            </div>
        </div>
        </body>
    );
}

export default home;