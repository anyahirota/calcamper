function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root"; //FOR TESTING

import { login, signup, logout } from './actions/session_actions';
document.addEventListener("DOMContentLoaded", function () {
  var root = document.getElementById("root");
  var store;

  if (window.currentUser) {
    var preloadedState = {
      entities: {
        users: _defineProperty({}, window.currentUser.id, window.currentUser)
      },
      session: {
        id: window.currentUser.id
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  } //FOR TESTING


  window.login = login;
  window.signup = signup;
  window.logout = logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch; //FOR TESTING

  ReactDOM.render( /*#__PURE__*/React.createElement(Root, {
    store: store
  }), root);
});