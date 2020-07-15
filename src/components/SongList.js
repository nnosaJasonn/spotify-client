import React from 'react';
import SongCard from './SongCard';
import './SongList.css';

class SongList extends React.Component {

    state = {picks: [], genres: []}

    selectArtist = (obj, bool) => {
        if(bool) {
            let picks = this.state.picks;
            picks.push(obj);
            this.setState({picks})
        }
        console.log(this.state.picks);
    }

    list = this.props.artists.map((artist) => {
        return <SongCard  selectArtist={this.selectArtist} key={artist.id} id={artist.id} artist={artist.artist} img={artist.img} genres={artist.genres}/>
    })

    render() {
        
        return (
                <div className="cardContainer">{this.list}</div>
            )
    }
}

export default SongList;