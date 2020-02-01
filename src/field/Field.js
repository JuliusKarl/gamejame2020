import React, { Component } from 'react';
import './Field.css'
import { player_state, setCardPlayedDisplayCallback } from '../gameState/gameState';

class Field extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tower1: 0,
            tower2: 0,
            tower3: 0,
            tower4: 0,
        }
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
            </div>
        );
    }
}

export default Field;