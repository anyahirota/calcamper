import React from "react";
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container'; 
import LoginFormContainer from './session_form/login_form_container'; 
import SignupFormContainer from './session_form/signup_form_container'; 
import DemoFormContainer from './session_form/demo_form_container'; 


const App = () => (
    <div>
        <header>
            <NavBarContainer />
        </header>

        <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignupFormContainer} />
        <Route path="/demo" component={DemoFormContainer} />
    </div>
);

export default App;