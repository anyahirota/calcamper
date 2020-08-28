import React from 'react';
import { Link } from 'react-router-dom';

const FooterContent = () => {
    return (
        <div className="footer-content">
            <ul className="about-technologies">
                <li className="about-technologies-container">
                    <ul className="about-technologies-list">
                        <h1 className="about-technologies-list-h1">About this project</h1>
                        <li>
                            <p>All images included on this site are designed by Anya Hirota or acquired from unsplash.com.</p>
                            <p>Spot descriptions were acquired from miscellaneous campsite websites and Hipcamp listings, then altered to suit the purpose of this site.</p>
                        </li>
                    </ul>
                </li>
                <li className="about-technologies-container">
                    <ul className="about-technologies-list">
                        <h1 className="about-technologies-list-h1">Technologies</h1>
                        <li>
                            PostgreSQL
                        </li>
                        <li>
                            Ruby on Rails
                        </li>
                        <li>
                            React/Redux
                        </li>
                        <li>
                            HTML
                        </li>
                        <li>
                            CSS
                        </li>
                    </ul>
                </li>
            </ul>

            <div className="footer-app-overview">
                <p>CalCamper is inspired by and designed in the spirit of Hipcamp.</p>
                <p>On CalCamper, you can search for, view, and book campsites, lodgings, and rv parks located in California's greatest parks. For more information about this full-stack project, check it out on <a href="https://github.com/anyahirota/hipcamp-clone">Github</a>.</p>
            </div>
            
        </div>
    )
}

export default FooterContent; 