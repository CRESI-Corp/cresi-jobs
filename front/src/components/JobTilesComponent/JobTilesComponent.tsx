
import './JobTilesComponent.css';

function JobTilesComponent() {
    const jobs = ["Comptabilité", "Ingénieur", "Médecine", "Architecture"];

    return (
        <div className="job-tiles-container">
            <h2>Trouver votre futur stage :</h2>
            <div className="tiles-container">
                {jobs.map((job, index) => (
                    <div key={index} className="tile">
                        {job}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default JobTilesComponent;
