import React from "react";
import ReactDOM from "react-dom";

//FOR TESTING
import {login, signup, logout} from './util/session_api_util'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");

    //FOR TESTING
    window.login = login;
    window.signup = signup;
    window.logout = logout;
    //FOR TESTING



    ReactDOM.render(<h1>Welcome to CalCamper</h1>, root);
});