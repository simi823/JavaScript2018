import React, { Component } from 'react';

/***
 *  As a user, I should be able to click on the button to hide the text.
 *  Clicking the button a second try unhides the text.
 *
 */

class App extends Component {
  state = {
    showText: true,
    text: "Hide"
  };

  toggleVisibility = () => {
    console.log(this.state);
    this.setState({
      showText: !this.state.showText,
      text: this.state.text === 'Hide' ? 'Show' : 'Hide'
    });
  };

  render() {
    console.log(this.state);
    return <div>
      <button onClick={this.toggleVisibility}>Click To {this.state.text} Text</button>
			<div>{this.state.showText && <h1>Now you see me!</h1>}</div>
		</div>;
  }
}

export default App;
