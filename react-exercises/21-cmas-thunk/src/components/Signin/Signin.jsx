import React, { Component } from "react";
import "./Signin.css";
import logo from "../52-CMA-Awards-Logo.jpg";

import Loading from "../Widgets/Loading";
import ErrorMessage from "../Widgets/ErrorMessage";

class Signin extends Component {
  state = {
    memberId: "",
    pinNumber: ""
  };
  signin = e => {
    e.preventDefault();
    /**
     * Add signin action here
     */
  };
  render() {
    /**
     * You will need to display loading
     * You will need to display server errors
     */
    return (
      <div className="container mt-5 text-center">
        <form className="Signin card" onSubmit={this.signin}>
          <header className="card-body">
            <img src={logo} alt="52nd CMA Awards" width="250" height="167" />
          </header>
          <main className="card-body">
            <p>Signin below to vote</p>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Member ID"
                aria-label="Member ID"
                value={this.state.memberId}
                onChange={e => this.setState({ memberId: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="PIN Number"
                aria-label="PIN Number"
                value={this.state.pinNumber}
                onChange={e => this.setState({ pinNumber: e.target.value })}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              SIGNIN
            </button>
          </main>
        </form>
      </div>
    );
  }
}

export default Signin;
