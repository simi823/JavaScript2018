import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
/**
 *  https://api.darksky.net/forecast/6111b812232ce4bc2370f18ee3b64134/[latitude],[longitude]
 *  http://ip-api.com/json
 *  As an user, I should be greeted with the temperature, and summary.
 *  As an engineer, I should use componentDidMount as well as axios to accomplish the task.
 *
 *
 *
 */

class App extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-section">
          <div className="container">
            <h3>New York, NY</h3>
            <p>
              Scattered Showers
              <br />
              Temperature: 65.76&deg;F
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
