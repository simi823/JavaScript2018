import React from 'react';

/**
 * As a user, I should be able to click on a button named Increment to increment the count
 * As a user, I should be able to click on a button named Decrement to decrement the count
 * As a user, I should be able to click on reset to reset the counter
 * As a user, I should not be able to go below 0 on the count
 * if the count goes above 10, the count should not be rendered to the sreen
 */
import React from 'react'
import './index.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  Increment = () => {
    let newCount = this.state.count + 1;
    this.setState({
      count: newCount
    });
  };
  render() {
    return (
      <div>
        <button className="inc" onClick={this.Increment}>
          Increment!
        </button>
        <button className="dec">Decrement!</button>
        <button className="reset">Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
}

export default App;
