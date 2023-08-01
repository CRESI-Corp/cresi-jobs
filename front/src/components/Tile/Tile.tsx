import React from 'react';
import './Tile.css';

function Tile({ title }: { title: string }) {
    return (
        <div className="tile">
            {title}
        </div>
    );
}

export default Tile;
