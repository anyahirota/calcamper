import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";

//FOR TESTING
import { login, signup, logout } from './actions/session_actions'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore(); 

    //FOR TESTING
    window.login = login;
    window.signup = signup;
    window.logout = logout;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    //FOR TESTING



    ReactDOM.render(<h1>Welcome to CalCamper</h1>, root);
});