import React, { Component } from 'react';
import Forms from "./components/Forms/Forms"

/***
 *    1) Use defaultProps to set the intital state of the Application.
 *       defaultProps should have a property called casing and value of UpperCase or LowerCase to determine the state
 *       of userInput. For example, setting defaultProps to LowerCase results in the user's input to be lower case.
 *
 *
 *
 *   2) Import the Forms component from the component directory and then pass the event handlers handleSubmission and handleOnChange functions
 *      to the child component Forms. Use event.preventDefault  to prevent the form from submitting in the handleSubmission function.
 *      In handleOnChange use defaultProps to determine the casing that will be rendered to the screen.
 *
 *
 *
 * */

class App extends Component {
  state = {
    userInput: '',
    clickedInput: ''
  };

  handleSubmission = (event) => {
    event.preventDefault();
    this.setState({
      clickedInput: this.state.clickedInput + " " + this.state.userInput,
      userInput: ''
    })
  };

  handleOnChange = (event) => {
    console.log("here")
    const { casing } = this.props;
    this.setState({
      userInput: casing === 'uppercase' ? event.target.value.toUpperCase()
        : event.target.value.toLowerCase(),
    }, console.log(this.state))
  };

  render() {
    console.log(this.state.userInput)
    return <div className="App">
			TEXT: {this.state.userInput}
			<Forms handleOnChange={this.handleOnChange} handleSubmission={this.handleSubmission} value={this.state.userInput} />
			<h2>DISPLAY TEXT:</h2>
      <p>{this.state.clickedInput}</p>
		</div>;
  }
}

App.defaultProps = {
  casing: "uppercase"
};

export default App;
