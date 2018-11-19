/**
 * To run each test, type the following from the "react-exercises/16-redux" folder
 * yarn test
 */

import { expect } from "chai";
import reducer from "../src/reducer";
import * as types from "../src/constants/actionTypes";
import categories from '../src/constants/categories';

describe("./src/reducer.js", () => {
  /**
   * Write at least one unit test for each of your actions
   * @example
   * it("will increase the count by 1", () => {
   *   const state = {
   *     count: 0
   *   };
   *   const action = {
   *     type: types.INCREMENT
   *   };
   *   const newState = reducer(state, action);
   *   expect(newState).to.deep.equal({
   *     count: 1
   *   });
   * });
   */
  it("will login with memberID and PIN", () => {
    const state = {
      memberID: 1234,
      PIN: 123
    };
    const action = {
      type: types.LOGIN
    };
    const newState = reducer(state, action);
    expect(newState).to.deep.equal({
      memberID: state.memberID,
      PIN: state.PIN
    })
  });
  it("gather categories to get started with voting", () => {
    const state = {
      categories: {...categories}
    };
    const action = {
      type: types.GET_STARTED
    };
    const newState = reducer(state, action);
    expect(newState).to.deep.equal({
      categories: state.categories
    })
  });
  it("vote for the 'Entertainer of the Year' (1) category", () => {
		const state = { 
      voteCategory: "Entertainer of the Year",
      categoryID: 1,
      votedList: [{
        "category": categories["1"]['category'], 
        "nominee": categories["1"]["nominees"][2]
      }]
    };
    const action = {
      type: types.VOTE
    };
    const newState = reducer(state, action);
    expect(newState).to.deep.equal({
      voteCategory: state.voteCategory,
      categoryID: state.categoryID,
      votedList: state.votedList
    })
  });
  it("submit votes for cmas", () => {
    const state = {
      votedList: Object.values(categories).map((item, index) => {
        return {"category": item.category, "nominee": item.nominees[2]}
      })
    };
    const action = {
      type: types.SUBMIT_VOTES
    };
    const newState = reducer(state, action);
    expect(newState).to.deep.equal({
      votedList: state.votedList
    })
  });
});
