import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Field from './field/Field';

class Controller extends Component {
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
        <div>
            <div className="Controller" ref={el => (this.div = el)}></div>
                <div className="background"></div>
                <div class="col">
                    <div class="row"><div class="card" ontouchstart="window.app.sendMessageToScreen('interact')"></div></div>
                    <div class="row"><div class="card" ontouchstart="window.app.sendMessageToScreen('interact')"></div></div>
                    <div class="row"><div class="card" ontouchstart="window.app.sendMessageToScreen('interact')"></div></div>
                </div>

                <div class="col">
                    <div class="row"><div class="card" ontouchstart="window.app.sendMessageToScreen('interact')"></div></div>
                    <div class="row"><div class="card" ontouchstart="window.app.sendMessageToScreen('interact')"></div></div>
                    <div class="row"><div class="card" ontouchstart="window.app.sendMessageToScreen('interact')"></div></div>
                </div>
            </div>
    );
  }
}

export default App;