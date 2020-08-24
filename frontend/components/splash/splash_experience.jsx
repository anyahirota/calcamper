import React from 'react';
import { Link } from 'react-router-dom';

const SplashExperience = () => {
    return (
        <div className="splash-experience">
            <h1>CalCamper Experiences.</h1>
            <ul className="experience-list">
                <li className="experience-box">
                    <Link to="/spots/rv">
                        <img src={window.rv} alt="rv" />
                        <div className="experience-box-title">
                            <p>Unique RV Parks</p>
                            <p>For camping with wheels</p>
                        </div>
                    </Link>
                </li>
                <li className="experience-box">
                    <Link to="/spots/glamping">
                        <img src={window.glamping} alt="glamping" />
                        <div className="experience-box-title">
                            <p>Glamping Experiences</p>
                            <p>Tiny houses, cabins, & more</p>
                        </div>
                    </Link>
                </li>
                <li className="experience-box">
                    <Link to="/spots/camping">
                        <img src={window.camping} alt="camping" />
                        <div className="experience-box-title">
                            <p>Stunning Campsites</p>
                            <p>All year round</p>
                        </div>
                    </Link>
                </li>
            </ul>
            
            
        </div>
    )
}

export default SplashExperience; 