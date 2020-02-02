import React, { Component } from 'react';
import './Field.css'
import { player_state, setCardPlayedDisplayCallback } from '../gameState/gameState';

class Field extends Component {

    constructor(props) {
        super(props);
        let cards = [20];
    }
    render() {
        return (
            <div className="fixed-field">
                <ul className="playing-field">
                    {Object.values(player_state).map(function(player, index){
                        return <div key={index}><img 
                            className="tower-img" 
                            id={player} 
                            src={require('../assets/' + player.tower.health + '.png')}/>
                        </div>
                    })}
                </ul>
                <ul className="cards">
                    <div><img className="card" src={require('../assets/Cards/' + (Math.round(Math.random() * 20)) + '.png')}/></div>
                    <div><img className="card" src={require('../assets/Cards/' + (Math.round(Math.random() * 20)) + '.png')}/></div>
                    <div><img className="card" src={require('../assets/Cards/' + (Math.round(Math.random() * 20)) + '.png')}/></div>
                    <div><img className="card" src={require('../assets/Cards/' + (Math.round(Math.random() * 20)) + '.png')}/></div>
                    <div><img className="card" src={require('../assets/Cards/' + (Math.round(Math.random() * 20)) + '.png')}/></div>
                    <div><img className="card" src={require('../assets/Cards/' + (Math.round(Math.random() * 20)) + '.png')}/></div>
                </ul>
            </div>
        );
    }
}

export default Field;