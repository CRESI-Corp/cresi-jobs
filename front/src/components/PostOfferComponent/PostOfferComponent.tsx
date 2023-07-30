import './PostOfferComponent.css';

function PostOfferComponent() {
    return (
        <div className="offer-tiles-container">
            <h2>Poster offre :</h2>
            <div className="tiles-container">
                <button className="tile">Stage</button>
                <button className="tile">Emploi</button>
                <button className="tile">Alternance</button>
                <button className="tile">Freelance</button>
            </div>
        </div>
    );
}

export default PostOfferComponent;
