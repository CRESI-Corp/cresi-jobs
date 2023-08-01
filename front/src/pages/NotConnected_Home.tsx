import Description from "../components/DescriptionHomeJob/ShortDescription";
import ButtonsComponent from "../components/ButtonsComponent/ButtonsComponent";
import Tile from "../components/Tile/Tile";
import '../styles/NotConnecter_home/NotConnecter_home.css';
import Tilesmall from "../components/Tile-small/Tile-small";


function NotConnecter_home(){
    return(
             <body>
                        <div className="TitreJob">
                            <h1> Bienvenue sur Cresi Job</h1>
                        </div>
                        <div className="description-buttons-container">
                            <Description />
                            <ButtonsComponent />   
                        </div>
                        <div className="section-container">
                            <h2>Trouver votre Stage</h2>
                            <div className="tiles-container">
                                <Tile title="Comptabilité" />
                                <Tile title="Ingénieur" />
                                <Tile title="Médecine" />
                                <Tile title="Architecture" />
                            </div>
                        </div>
                        
    
                            <div className="section-container-small">
                                <h2>Poster des offres</h2>
                                <div className="tiles-container-small">
                                    <Tilesmall title="Stage" />
                                    <Tilesmall title="Alternance" />
                                    <Tilesmall title="Freelance" />
                                    <Tilesmall title="Emploi" />
                                </div>
                            </div>
                            <div className="bottom-texte">
                                <h2>Gérer vos candidature simplement</h2>
                                <div className="bottom-texte-info">
                                    <h2>Centraliser l’ensemble de vos documents  pour postuler sur la plateforme
                                        Mettez des rappels pour postuler
                                        Restez informé des nouvelles offres
                                    </h2>
                                </div>
                            </div>
    
                    </body>
    );
}

export default NotConnecter_home;
