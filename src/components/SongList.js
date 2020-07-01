import React from 'react';
import SongCard from './SongCard';

const SongList = ({artists}) => {

    if(!artists)
    {

        return <div>songs will go here</div>
        
    }
    console.log(artists)
    const list = artists.map((artist) => {
        return <SongCard onclick={(event)=>console.log(this.key)} key={artist.id} artist={artist.artist} img={artist.img} genres={artist.genres}/>
    })
    return <div >{list}</div>
}

export default SongList;