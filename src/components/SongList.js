import React from 'react';
import SongCard from './SongCard';


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
            <div>
                <div>{this.list}</div>
            </div>
            )
    }
}

export default SongList;