import React from 'react';
import './Footes.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
    return (
        <div>
           <div className="text-center icon">
                <a href='https://github.com/imnulhaqueruman' className="mx-2"><FontAwesomeIcon icon={faGithub} /></a>
                <a href='https://www.linkedin.com/in/imnul-haque-ruman-5535b11b0/' className="mx-2"><FontAwesomeIcon icon={faLinkedinIn} /></a>
           </div>
         <h3 className="text-dark text-center"> Developed by  Imnul Haque Ruman 2020</h3>
        </div>
    );
};

export default Footer;