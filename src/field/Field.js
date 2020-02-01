import React, { Component } from 'react';
import './Field.css'

class Field extends Component {
    render() {
        return (
            <div className="fixed-field">
                <div className="playing-field">
                    <div id="tower1"><img class="tower-img" src={require('../assets/6.png')}/></div>
                    <div id="tower1"><img class="tower-img" src={require('../assets/9.png')}/></div>
                    <div id="tower1"><img class="tower-img" src={require('../assets/4.png')}/></div>
                    <div id="tower1"><img class="tower-img" src={require('../assets/20.png')}/></div>
                </div>
            </div>
        );
    }
}

export default Field;