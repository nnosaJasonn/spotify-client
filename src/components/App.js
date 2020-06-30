import React from 'react';
import axios from 'axios';
import SongList from './SongList';

export default class App extends React.Component {
    
      getHashParams() {
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        e = r.exec(q)
        while (e) {
           hashParams[e[1]] = decodeURIComponent(e[2]);
           e = r.exec(q);
        }
        return hashParams;
      }
    state = {access_token: this.getHashParams().access_token || '', songs: []}
    cards;
    getTopSongs = async () => {
        let res = await axios.get(`http://localhost:8888/topsongs?token=${this.state.access_token}`)
        let songs = res.data.result
        this.cards = <SongList songs={songs}/>
        this.setState({songs})
    }
    button = this.state.access_token === '' ? <a href="http://localhost:8888/login">Login to Spotify</a> : <button onClick={this.getTopSongs}>Get Top Songs</button>

    
    render() {
        return (

            <div>
                
                {this.button}
                
                {this.cards}
            </div>
        )
    }
}