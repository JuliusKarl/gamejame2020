import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Field from './field/Field';

class App extends Component {
  constructor(props) {
    super(props);
    // initialize
  }

  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://www.airconsole.com/api/airconsole-1.7.0.js";
    script.async = true;
    this.div.appendChild(script);
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