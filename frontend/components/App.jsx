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
import SpotShowContainer from './spot_show/spot_show_container';
import SpotIndexContainer from './spots/spot_index_container'; 
import Splash from './splash/splash'; 


const App = () => (
    <div>
        <header>
            <CovidBanner />
            <NavBarContainer />
        </header>
        <Route exact path="/" component={Splash} />
        <Route exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <Route exact path="/demo" component={DemoFormContainer} />
        <Route exact path="/spots" component={SpotIndexContainer} />
        <Route exact path="/spots/:id" component={SpotShowContainer} />
        <Footer />
    </div>
);

export default App;