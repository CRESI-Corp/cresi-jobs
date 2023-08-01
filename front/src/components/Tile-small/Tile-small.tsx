import './Tile-small.css';

function Tilesmall({ title }: { title: string }) {
    return (
        <div className="tile-name">
            {title}
        </div>
    );
}

export default Tilesmall;