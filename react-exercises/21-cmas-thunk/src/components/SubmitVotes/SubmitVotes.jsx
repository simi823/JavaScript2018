import React, { Component } from "react";
import Loading from "../Widgets/Loading";
import ErrorMessage from "../Widgets/ErrorMessage";

class SubmitVote extends Component {
  render() {
    return (
      <div className="text-center">
        <div>No more categories left.</div>
        <p>
          {/* Button should only work if the user has not submitted votes yet */}
          <button type="button" className="btn btn-link btn-lg">
            Complete and send my votes to the CMAs
          </button>
        </p>
        {/* If loading, diplay Loading component here */}
        {/* If error, display error message "This is embarassing. We were unable to save your votes. Please try
            again later." with the ErrorMessage component here */}
        {/* Display this if voting was submitted: 
          <p className="h3">We received your votes. Thank you for voting!</p>
        )*/}
      </div>
    );
  }
}

export default SubmitVote;
