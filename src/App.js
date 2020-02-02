import React, {Component} from 'react';
import './App.css';
import Field from './field/Field';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="background">
        </div>
        <Field className="playing-field"></Field>
      </div>
    );
  }

  winnerCallback(isHumanWinner) {
    if(isHumanWinner) {
      alert("Well done, you won!");
    } else {
      alert("You lost, better luck next time!");
    }
  }
  
}

export default App;