import * as type from './constants/actionTypes';
import categories from "./constants/categories";

const reducer = (
  state = {
    categories: categories,
    voteCategory: null,
    categoryID: null,
    memberID: 1234,
    PIN: 123,
    votedList: []
  },
  action
) => {
  switch (action.type) {
    case type.LOGIN:
      return {
        ...state,
        memberID: state.memberID,
        PIN: state.PIN
      }
    case type.GET_STARTED:
      return {
        ...state,
        categories: state.categories
      }
    case type.VOTE:
      return {
        ...state,
        voteCategory: state.voteCategory,
        categoryID: state.categoryID,
        votedList: state.votedList
      }
    case type.SUBMIT_VOTES:
      return {
        ...state,
        votedList: state.votedList
      }
    default:
      return state;
  }
};

export default reducer;
