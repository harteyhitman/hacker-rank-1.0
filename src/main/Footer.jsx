import React from "react";
import Instagram from "../Assets/instagram.png";
import Twitter from "../Assets/twitter.png";
import Facebook from "../Assets/facebook.png";
import Linkedin from "../Assets/Linkedin.png";
import Call from "../Assets/call-me-back.png";
import Location from "../Assets/location.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-getlinked">
        <h2>
          get<span>linked</span>{" "}
        </h2>
        <p>
          Getlinked Tech Hackathon is a technology innovation program
          established by a group of organizations with the aim of showcasing
          young and talented individuals in the field of technology
        </p>
        <p className="terms">
          <span>Terms of Use</span> Use Privacy Policy
        </p>
      </div>
      <div className="useful-links">
        <ul>
          <li className="list">Useful Links</li>
          <li>Overview</li>
          <li>Timeline</li>
          <li>FAQs</li>
          <li>Timeline</li>
          <li>Register</li>
        </ul>
        <div className="social-media">
          <p>Follow us</p>
          <span>
            <img src={Instagram} alt="" />
            <img src={Twitter} alt="" />
            <img src={Facebook} alt="" />
            <img src={Linkedin} alt="" />
          </span>
        </div>
      </div>
      <div id="contact-us">
        <p className="contact-text">Contact Us</p>
        <div className="location">
          <img src={Location} alt="" />
          <p>+234 6707653444</p>
        </div>
        <div>
          <img src={Call} alt="" />{" "}
          <div>27,Alara Street Yaba 100012 Lagos State</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
