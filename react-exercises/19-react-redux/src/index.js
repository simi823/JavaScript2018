/**
 * Set this file up to setup "redux-react"
 * @see https://redux.js.org/basics/usagewithreact#passing-the-store
 *
 * You will need to import an extra package
 */

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./components/App";

/**
 * And will need to wrap the Redux store around the <App /> component
 */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
    document.getElementById('root')
)
