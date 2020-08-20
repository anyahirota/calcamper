import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";

//FOR TESTING
import { login, signup, logout } from './actions/session_actions';
import {fetchSpots, fetchSpot} from './util/spot_api_util';
import { requestSpots, requestSpot } from './actions/spot_actions'; 

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    
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

    //FOR TESTING
    window.login = login;
    window.signup = signup;
    window.logout = logout;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.fetchSpot = fetchSpot; 
    window.fetchSpots = fetchSpots; 
    window.requestSpots = requestSpots; 
    window.requestSpot = requestSpot; 
    //FOR TESTING



    ReactDOM.render(<Root store={store} />, root);
});