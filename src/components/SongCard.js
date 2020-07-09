import React from 'react';
import './SongCard.css'

class SongCard extends React.Component {
    state = {expanded: false, selected:false}
    toggleCss =(event)=> {
        let expanded = !this.state.expanded;
        let selected = !this.state.selected;
        let obj = {
            artist: this.props.artist,
            img: this.props.img,
            genre: this.props.genres
        }

        if(selected)
        {
            this.props.selectArtist(obj, true);
        }
        else
        {
            this.props.selectArtist(obj, false);
        }

        this.setState({expanded,selected})
    }

    addToGenres(event) {
        console.log(event.target.innerText);
    }
    
    render() {
        let arr = Object.values(this.props.genres).map((k) => {
            return <span key={k} onClick={this.addToGenres}>{k}</span>
        })
        return(
        <div  className={this.state.expanded ? 'card' : 'pill'}>
            <img alt={this.props.artist} className={this.state.expanded ? 'full' : 'shrink'} src={this.props.img}  />
            <div className="container">
            <h4><b>{this.props.artist}</b></h4>
            <div className={this.state.expanded ? 'vis' : 'invis'}>{arr}</div>
            </div>
            <div>
                <i onClick={this.toggleCss} className={this.state.expanded ? 'arrow left' : 'arrow right'}></i>
            </div>
        </div>
    )}
}

export default SongCard;