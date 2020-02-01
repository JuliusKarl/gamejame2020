import React, { Component } from 'react';
import './Field.css'

class Field extends Component {
    render() {
        return (
            <div className="fixed-field">
                <div className="playing-field">
                    <div id="tower1"><img src='../assets/0.png'/></div>
                </div>
            </div>
        );
    }
}

export default Field;