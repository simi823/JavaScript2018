import { connect } from "react-redux";
import Category from "./Category";

import { fetchAllNominees } from "../../actions/fetchAllNomineesActions";
import { vote } from "../../actions/voteActions";

function mapPropsToState({ categories, votes }) {
  return {
    categories,
    votes
  };
}

function mapDispatchToState(dispatch) {
  return {
    fetchAllNominees: () => dispatch(fetchAllNominees()),
    vote: (categoryId, nomineeIndex) => dispatch(vote(categoryId, nomineeIndex))
  };
}

export default connect(
  mapPropsToState,
  mapDispatchToState
)(Category);
