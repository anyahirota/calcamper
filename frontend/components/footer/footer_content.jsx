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
                            <p>All images included on this site are designed by Anya Hirota or acquired from unsplash.com</p>
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
                            ReactRedux
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

            </div>
            
        </div>
    )
}

export default FooterContent; 