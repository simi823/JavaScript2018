import React, { Component } from "react";
import Loading from "../Widgets/Loading";
import ErrorMessage from "../Widgets/ErrorMessage";

class SubmitVote extends Component {
  render() {
    return (
      <div className="text-center">
        <div>No more categories left.</div>
        <p>
          <button type="button" className="btn btn-link btn-lg">
            Complete and send my votes to the CMAs
          </button>
        </p>
      </div>
    );
  }
}

export default SubmitVote;
