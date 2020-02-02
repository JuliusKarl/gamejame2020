import React, { Component } from 'react';
import './Field.css'
import { player_state, setCardPlayedDisplayCallback } from '../gameState/gameState';

class Field extends Component {

    constructor(props) {
        super(props);
    }

    cardEffect = (c, t) => {
        return null;
    }

    render() {
        return (
            <div className="fixed-field">
                <ul className="cards">
                    {Object.values(player_state.abc123.hand).map(function(card, index){
                        console.log(card);
                        return <div key={index}><img 
                            className="card" 
                            onClick={cardEffect(card_type, target_type)}
                            id={'Card' + index} 
                            src={require('../assets/Cards/' + card.url + '.png')}/>
                        </div>
                    })}
                </ul>
                <div><img className="rival_card" src={require('../assets/Cards/back.png')}/></div>
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