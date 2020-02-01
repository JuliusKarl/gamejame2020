import React, {Component} from 'react';
import logo from './logo.svg';
import './Controller.css';

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
                    <div class="row"><Card class="card" ontouchstart="window.app.sendMessageToScreen('interact')"></Card></div>
                    <div class="row"><Card class="card" ontouchstart="window.app.sendMessageToScreen('interact')"></Card></div>
                    <div class="row"><Card class="card" ontouchstart="window.app.sendMessageToScreen('interact')"></Card></div>
                </div>
                <div class="col">
                    <div class="row"><Card class="card" ontouchstart="window.app.sendMessageToScreen('interact')"></Card></div>
                    <div class="row"><Card class="card" ontouchstart="window.app.sendMessageToScreen('interact')"></Card></div>
                    <div class="row"><Card class="card" ontouchstart="window.app.sendMessageToScreen('interact')"></Card></div>
                </div>
            </div>
    );
  }
}

export default Controller;