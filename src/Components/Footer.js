import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import '../styles/Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="socialmedia">
                <InstagramIcon/><TwitterIcon/><LinkedInIcon/>
                <p>
                    &copy; kaffeschoon@proton.te
                </p>
            </div>
        </div>
    );
}


export default Footer;