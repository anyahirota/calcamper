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
                <li><FontAwesomeIcon icon={faLinkedin} /></li>
                <li><FontAwesomeIcon icon={faGithub} /></li>
            </ul>

        </div>
    )
}

export default FooterSocialLinks; 