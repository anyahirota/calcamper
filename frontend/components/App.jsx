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
import SpotIndexContainer from './spot_index/spot_index_container'; 
import Splash from './splash/splash'; 
import SpotIndexCampingContainer from './spot_index/spot_index_type_containers/spot_index_camping';
import SpotIndexGlampingContainer from './spot_index/spot_index_type_containers/spot_index_glamping';
import SpotIndexRVContainer from './spot_index/spot_index_type_containers/spot_index_rv'; 
import SpotIndexBigSurContainer from './spot_index/spot_index_park_containers/spot_index_big_sur_container';
import SpotIndexDeathValleyContainer from './spot_index/spot_index_park_containers/spot_index_death_valley_container';
import SpotIndexJoshuaTreeContainer from './spot_index/spot_index_park_containers/spot_index_joshua_tree_container';
import SpotIndexKingsContainer from './spot_index/spot_index_park_containers/spot_index_kings_container';
import SpotIndexLassenContainer from './spot_index/spot_index_park_containers/spot_index_lassen_container';
import SpotIndexTahoeContainer from './spot_index/spot_index_park_containers/spot_index_tahoe_container';
import SpotIndexYosemiteContainer from './spot_index/spot_index_park_containers/spot_index_yosemite_container'; 
import BookingIndexContainer from './bookings/booking_index_container';
import EditBookingFormContainer from './bookings/edit_booking_form_container';
import ReviewIndexContainer from './reviews/review_index_container'; 
import EditReviewFormContainer from "./reviews/edit_review_form_container"; 


const App = () => (
  <div className="page-container">
    <div className="content-wrap">
      <header>
        <CovidBanner />
        <Route path="/" component={NavBarContainer} />
      </header>
      <Route exact path="/" component={Splash} />
      {/* <Route exact path="/login" component={LoginFormContainer} />
          <AuthRoute exact path="/signup" component={SignupFormContainer} />
          <Route exact path="/demo" component={DemoFormContainer} /> */}
      <Route
        exact
        path="/spots/camping"
        component={SpotIndexCampingContainer}
      />
      <Route
        exact
        path="/spots/glamping"
        component={SpotIndexGlampingContainer}
      />
      <Route exact path="/spots/rv" component={SpotIndexRVContainer} />
      <Route exact path="/spots/bigsur" component={SpotIndexBigSurContainer} />
      <Route
        exact
        path="/spots/deathvalleynationalpark"
        component={SpotIndexDeathValleyContainer}
      />
      <Route
        exact
        path="/spots/joshuatreenationalpark"
        component={SpotIndexJoshuaTreeContainer}
      />
      <Route
        exact
        path="/spots/kingscanyonnationalpark"
        component={SpotIndexKingsContainer}
      />
      <Route
        exact
        path="/spots/lassenvolcanicnationalpark"
        component={SpotIndexLassenContainer}
      />
      <Route
        exact
        path="/spots/tahoenationalforest"
        component={SpotIndexTahoeContainer}
      />
      <Route
        exact
        path="/spots/yosemitenationalpark"
        component={SpotIndexYosemiteContainer}
      />
      <ProtectedRoute
        exact
        path="/bookings"
        component={BookingIndexContainer}
      />
      <ProtectedRoute
        exact
        path="/bookings/:id"
        component={EditBookingFormContainer}
      />
      <Route exact path="/spot/:id" component={SpotShowContainer} />
      <ProtectedRoute exact path="/reviews" component={ReviewIndexContainer} />
      <ProtectedRoute
        exact
        path="/reviews/:id"
        component={EditReviewFormContainer}
      />
    </div>
    <Footer />
  </div>
);

export default App;