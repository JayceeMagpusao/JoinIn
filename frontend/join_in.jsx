import React from "react";
import ReactDOM from "react-dom";
//Components
import Root from './components/root';
import configureStore from './store/store';
// import { login, signup, logout } from './util/session_api_util'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  // window.login = login;
  // window.signup = signup;
  // window.logout = logout;

  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.getState = store.getState

  ReactDOM.render(<Root store={store}/>, root)
});