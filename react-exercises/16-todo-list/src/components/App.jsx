/**
 * Create a TODO list app
 * Your input and form should be controlled. This means when the user types text in the textbox,
 * it should be stored in state.
 * When the user clicks on the "Add" button, it should be placed in the TODO list below with the
 * "ListItem" component.
 * When the user clicks on the "X" in the ListItem, it should be deleted from the TODO list
 */

import React, { Component } from "react";
import ListItem from "./ListItem/ListItem";

class App extends Component {
  state = {
    userInput: '',
    toDoList: []
  };
  setUserInput = userInput => {
    this.setState({
      userInput: userInput
    })
  }
  addItem = (e) => {
    e.preventDefault();
    if (this.state.userInput) {
      this.setState({
        toDoList:[...this.state.toDoList, this.state.userInput],
        userInput: '',
      })
    } else {
      alert("New Item Cannot be Empty!!")
    }
  };
  deleteItem = todoIndex => {
    this.setState({
      toDoList: this.state.toDoList.filter((item, index
        ) => {
        return index !== todoIndex;
      })
    })
  };
  
  render() {
    console.log(this.state);
    return (
      <div className="container mt-4">
        <header className="App-header">
          <h1>Todo List</h1>
          <form className="form-group" onSubmit={this.addItem}>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter text"
                aria-label='Enter text'
                aria-describedby="button-add"
                onChange={e => this.setUserInput(e.target.value)}
                value={this.state.userInput}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-primary"
                  type="subimit"
                  id="button-add"
                >
                  Add
                </button>
              </div>
            </div>
          </form>
        </header>
        <ul className="list-group">
          {this.state.toDoList.map((item, index) => {
            const key = `item-${index}`;
            return <ListItem key={key} deleteItem={this.deleteItem} todoIndex={index}>{item}</ListItem>
          })}
        </ul>
      </div>
    );
  }
}

export default App;
