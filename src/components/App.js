import React from 'react';
import axios from 'axios';
import SongList from './SongList';
import './App.css'

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
    state = {access_token: this.getHashParams().access_token || '', artists: []}
    cards;
    getTopSongs = async () => {
        let res = await axios.get(`http://localhost:8888/topartists?token=${this.state.access_token}`)
        let artists = res.data.result
        this.cards = <SongList artists={artists}/>
        this.setState({artists})
    }
    button = this.state.access_token === '' ? <a className='button' href="http://localhost:8888/login">Login to Spotify</a> : <button className="button" onClick={this.getTopSongs}>Get Top Artists</button>

    
    render() {
        return (

            <div>
                
                {this.button}
                
                {this.cards}
            </div>
        )
    }
}