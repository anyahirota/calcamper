import React from 'react';
import { Link } from 'react-router-dom';
import SplashExperience from './splash_experience'; 
import SplashParks from './splash_parks'; 

const Splash = () => {
    return (
        <div className="splash">
            <div className="splash-header-message">
                <h1>Find yourself in CA's great outdoors.</h1>
                <h2>Discover and book tent camping, RV parks, cabins, and glamping in some of California's beautiful national parks.</h2>
            </div>
            {/* search bar */}
            <div className="splash-hosting">
                <img src={window.friends} alt="host" />
                <div className="splash-hosting-block">
                    <h1>Own land? Earn money on CalCamper</h1>
                    <p>Host our community of good-natured campers, glampers, and RV travelers on your land or at your cabin.</p>
                    <div className="splash-hosting-button">More info coming soon</div>
                </div>
            </div>
            {<SplashExperience />}
            {<SplashParks />}

            <div className="splash-icons">
                <div className="splash-icon">
                    <img src={window.icon1} alt="icon1" />
                    <p>Calcamper empowers people to share their land with campers.</p>
                </div>
                <div className="splash-icon">
                    <img src={window.icon2} alt="icon2" />
                    <p>Creating sustainable revenue and fostering community.</p>
                </div>
                <div className="splash-icon">
                    <img src={window.icon3} alt="icon3" />
                    <p>Unlocking access to incredible new places to camp.</p>
                </div>
            </div>
            
        </div>
    )
}

export default Splash; 