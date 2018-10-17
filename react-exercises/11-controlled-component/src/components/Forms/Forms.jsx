import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Forms extends Component {
  render() {
    console.log(this.props)
    return <div>
			<form onSubmit={(event) => this.props.handleSubmission(event)}>
        <textarea type="text" onChange={(event) => this.props.handleOnChange(event)} value={this.props.value} />
				<button type="submit">Click Me</button>
			</form>
		</div>;
  }
}

export default Forms;
