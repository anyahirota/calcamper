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
import { AuthRoute, ProtectedRoute} from '../util/route_util'; 
import CovidBanner from './covid-banner'; 
import Footer from './footer/footer'; 


const App = () => (
    <div>
        <header>
            <CovidBanner />
            <NavBarContainer />
        </header>

        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <AuthRoute exact path="/demo" component={DemoFormContainer} />
        <div className="test"></div>
        <Footer />
    </div>
);

export default App;