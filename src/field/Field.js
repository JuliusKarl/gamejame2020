import React, { Component } from 'react';
import './Field.css'

class Field extends Component {
    render() {
        return (
            <div className="fixed-field">
                <div className="playing-field">
                    <div id="tower1"><img class="tower-img" src={require('../assets/28.png')}/></div>
                    <div id="tower1"><img class="tower-img" src={require('../assets/0.png')}/></div>
                    <div id="tower1"><img class="tower-img" src={require('../assets/22.png')}/></div>
                    <div id="tower1"><img class="tower-img" src={require('../assets/23.png')}/></div>
                </div>
            </div>
        );
    }
}

export default Field;