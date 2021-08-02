import React from "react";
import ReactDOM from "react-dom";
//Components
// import Root from './components/root';
import configureStore from './store/store';
import { login, signup, logout } from './util/session_api_util'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  window.login = login;
  window.signup = signup;
  window.logout = logout;

  ReactDOM.render(<h1>Welcome to JoinIn!</h1>, root)
});