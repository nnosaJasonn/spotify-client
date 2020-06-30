import React from 'react';
import './SongCard.css'

const SongCard = (props) => {
    return (
        <div className="card">
            <img src={props.img} style={{width: '50%'}} />
            <div className="container">
                <h4><b>{props.artist}</b></h4>
                <p>{props.song}</p>
            </div>
        </div>
    )
}

export default SongCard;