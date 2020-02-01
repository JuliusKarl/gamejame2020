import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Field from './field/Field';
import {setupConsole} from './airConsole.js'; 

class App extends Component {
  constructor(props) {
    super(props);
    // initialize
  }

  componentDidMount() {
    setupConsole();
  }

  render() {
    return (
      <div className="App" ref={el => (this.div = el)}>
        <div className="background">
        </div>
        <Field className="playing-field"></Field>
      </div>
    );
  }
}

export default App;