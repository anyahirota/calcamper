import React from 'react';
import { Link } from 'react-router-dom';

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterSocialLinks = () => {
    return (
        <div className="footer-social-links">
            <div className="signature">
                <p>&#169;CalCamper, Created by Anya Hirota</p>
            </div>

            <ul className="footer-socials">
                <li><a href="https://www.linkedin.com/in/anya-hirota-59392560/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                <li><a href="https://github.com/anyahirota"><FontAwesomeIcon icon={faGithub} /></a></li>
            </ul>

        </div>
    )
}

export default FooterSocialLinks; 