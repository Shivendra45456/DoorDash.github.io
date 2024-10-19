/*
const FooterComponent=()=>{
    return(
      <div> 
        <h3>Footer</h3>
      </div>
    ); 
  };
export default FooterComponent;  
*/

/*src/components/Footer.js
import React from "react";
import "./Footer.css";  Create this CSS or integrate into style.css
*/


/*
const FooterComponent = () => {
  return (
    <footer className="footer">
      <p>© 2024 FoodVilla. All rights reserved.</p>
    </footer>
  );
};

export default FooterComponent;
*/

// src/components/Footer.js
// import React from "react";
// import "./Footer.css"; Import the appropriate CSS

const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Press</li>
            <li>Investor Relations</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li>Contact Us</li>
            <li>Help Center</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <ul className="social-links">
            <li><a href="#"><img src="facebook-icon.png" alt="Facebook" /> Facebook</a></li>
            <li><a href="#"><img src="twitter-icon.png" alt="Twitter" /> Twitter</a></li>
            <li><a href="#"><img src="instagram-icon.png" alt="Instagram" /> Instagram</a></li>
            <li><a href="#"><img src="linkedin-icon.png" alt="LinkedIn" /> LinkedIn</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Download Our App</h4>
          <div className="app-links">
            <a href="#"><img src="playstore.png" alt="Play Store" /></a>
            <a href="#"><img src="appstore.png" alt="App Store" /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 DoorDash. All rights reserved.</p>
        <p>Made with ❤️ for food lovers.</p>
      </div>
    </footer>
  );
};

export default FooterComponent;
