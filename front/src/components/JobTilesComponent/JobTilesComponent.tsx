import Tile from '../Tile/Tile';
import './JobTilesComponent.css';

function JobTilesComponent() {
    return (
        <div className="job-tiles-container">
            <h2>Trouver votre futur stage :</h2>
            <div className="tiles-container">
                <Tile title="Comptabilité" />
                <Tile title="Ingénieur" />
                <Tile title="Médecine" />
                <Tile title="Architecture" />
            </div>
        </div>
    );
}

export default JobTilesComponent;
