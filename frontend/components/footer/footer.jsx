import React from 'react'; 
import { Link } from 'react-router-dom';
import FooterContent from './footer_content'; 
import FooterSocialLinks from './footer_social_links';
import FooterSendOffMessage from './footer_send_off_message'; 

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-logo">
                    <div className="footer-logo-placeholder">
                        <img src={window.logoURL} alt="Logo" />
                    </div>
            </div>
            {<FooterContent />}
            {<FooterSocialLinks />}
            {<FooterSendOffMessage />}
        </div>
    )
}

export default Footer; 