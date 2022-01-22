import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store"
import Root from "./components/root"
import {logIn, logOut, signUp} from "./actions/session_actions"
import {login} from "./utils/session_api_util"



document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore()
  window.store = store
  window.logIn = logIn
  window.login = login 
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<Root store={store}/>, root);
});