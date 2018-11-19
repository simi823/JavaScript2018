import * as type from "./constants/actionTypes";

export function login(memberID, PIN) {
    return {
        type: type.LOGIN,
        memberID,
        PIN: PIN
    };
}

export function getStarted() {
    return {
        type: type.GET_STARTED
    };
}

export function vote(categoryID, nomineeIndex) {
    return {
        type: type.VOTE,
        categoryID,
        nomineeIndex
    };
}

export function submitVotes(votedList) {
    return {
        type: type.SUBMIT_VOTES,
        votedList
    };
}

/**
 * Create and export an a function for each action
 * @example
 * export function addTodo(userInput) => {
 *   return {
 *     type: types.ADD_TODO,
 *     userInput: userInput
 *   }
 * };
 */
