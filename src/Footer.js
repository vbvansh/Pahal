// FooterComponent.js

import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const FooterComponent = () => {
    return (
      
      <footer className="footer-container">
            <div className="left-content">
                <div className="about-section">
                    <h2>ABOUT</h2>
                    <hr className="line" />
                    <p>
                        PAHAL NGO Foundation, initiated by IIIT Nagpur, is dedicated to supporting underprivileged children in their educational journey. Committed to fostering a brighter future, the foundation provides essential resources, including study materials and nutritious meals, to empower these children in overcoming socio-economic challenges. Through a focus on education and well-being, PAHAL strives to create a positive impact on the lives of the less privileged, ensuring they have the opportunities needed to thrive.
                    </p>
                </div>
            </div>
            <div className="right-content">
                <div className="copyright">
                    Copyright &copy; 2024 PAHAL IIITN. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;
