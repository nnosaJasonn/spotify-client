import React from 'react';
import SongCard from './SongCard';

const SongList = ({songs}) => {
    if(!songs)
    {

        return <div>songs will go here</div>
        
    }
    console.log(songs)
    const list = songs.map((song) => {
        return <SongCard artist={song.artist} img={song.img} song={song.song}/>
    })
    return <div style={{display: 'grid', gridTemplateColumns:'auto auto auto', gridGap:'6px'}}>{list}</div>
}

export default SongList;