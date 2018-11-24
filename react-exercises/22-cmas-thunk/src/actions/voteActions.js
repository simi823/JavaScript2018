import * as types from "../constants/actionTypes";

import { voteRequest } from "../api";

/**
 * Using "src/actions/fetchAllNomineesActions.js" as an example, setup action creators for:
 * - loading ajax request
 * - ajax request failure
 */

const ajaxSuccess = (categoryId, nomineeIndex) => {
  /**
   * Complete this function
   */
};

export const vote = (categoryId, nomineeIndex) => {
  return (dispatch, getState) => {
    /**
     * Since the "src/components/Category/Category.jsx" does not have access to the member ID,
     * I am using the getState function passed as an argument so that I can get the member ID.
     * Keep in mind that it debatable on whether or not this is good practice to do this.
     * We will show you other ways later.
     * @see https://stackoverflow.com/questions/35667249/accessing-redux-state-in-an-action-creator
     * @see https://blog.isquaredsoftware.com/2017/01/idiomatic-redux-thoughts-on-thunks-sagas-abstraction-and-reusability/
     */
    const { memberId } = getState();
    /**
     * Using "src/actions/fetchAllNomineesActions.js" as an example, do the following:
     * - dispatch the loading ajax action
     * - call on and pass the necesarry arguements to the voteRequest function
     * (see 21-cmas-thunk/src/api.js)
     * - dispatch the ajaxSuccess action when the ajax request is successfully,
     * passing the necessary arguments
     * - dispatch the ajax request failure action when an error is caught
     */
  };
};
