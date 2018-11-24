# Redux Challenge - CMA Awards

Using Redux Thunk, you will be performing a (fake) AJAX call to send a vote and you will show the voting selection in the UI.

## Design

[Watch a Video of the Prototype](https://www.screencast.com/t/1c0ejJFegjq)

The portal will have 4 screens:

1. A login screen. Members of the CMAs will receive a member ID and a PIN number in the mail, which they will then access the voting portal
2. A home screen, which will display all the voting categories and will have a "Let's get started" link.
3. The nominee page, where the user will vote for the nominee that they want to win an award. This screen will repeat for each category when the user clicks on the "Next" button.
4. A submit votes screen, where once finished voting, the user will click a button to send their votes to the Country Music Awards.

## Back-end Requirements

This will not be a part of today's assignment, but we will be adding the following API calls in the future. Plan for making these AJAX calls:

- A login call. This will need a member ID and pin number.
- An AJAX call to get the nominees. An example of how you can expect the data. An example of the expected response is _src/constants/categories.json_.
- An AJAX call to send a vote. To make this call, you will need to send the category number, the array index of the nominee, the member ID. See _src/constants/categories.json_.
- A call to complete the vote. This will need the member ID.

## Monday, Nov 19, 2018

Before starting the assignment, I recommend you take a look at both the _src/api.js_ file and the _src/reducer.js_ file, which have been completed for you.

Open _src/constants/actionTypes.js_ and add the action types needed to make an AJAX call

The reducer has code already written for you, but code was commented so that it won't crash the app. Now that you have your action types, open _src/reducer.js_ and uncomment where needed.

Setup your AJAX action creators. Follow the instructions in _src/actions/voteActions.js_

Now you just need to update the UI so that it will both cast the users vote, display the results, and give feedback for AJAX errors. Open _src/components/Category/Category.jsx_ and read the instructions.

Note that you can simulate AJAX errors by return "reject" instead of resolve in the fake ajax promise. See _react-exercises/21-cmas-thunk/src/api.js_
