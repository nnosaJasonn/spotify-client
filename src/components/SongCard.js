import React from 'react';
import './SongCard.css'

class SongCard extends React.Component {
    state = {expanded: false}
    toggleCss =(event)=> {
        let expanded = !this.state.expanded;
        this.setState({expanded})
    }
    render() {
        return(
        <div onClick={this.toggleCss} className={this.state.expanded ? 'card' : 'pill'}>
            <img className={this.state.expanded ? 'vis' : 'invis'} src={this.props.img} style={{width: '50%'}} />
            <div className="container">
                <h4><b>{this.props.artist}</b></h4>
                <p className={this.state.expanded ? 'vis' : 'invis'} >{this.props.genres}</p>
            </div>
        </div>
    )}
}

export default SongCard;