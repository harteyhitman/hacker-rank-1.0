import React from "react";
import Navbar from "../components/Navbar";
import Instagram from "../Assets/instagram.png";
import Twitter from "../Assets/twitter.png";
import Facebook from "../Assets/facebook.png";
import Linkedin from "../Assets/Linkedin.png";
import Questionnaire from "../components/Questionnaire";
import BlackArrow from '../Assets/back-arrow.png'

import { useNavigate } from "react-router-dom";



const Login = () => {

  const navigate = useNavigate();

  const backArrow = () =>{
    navigate("/Register");
  }

  return (
    <div>
        <div className="navbar-loginpage"><Navbar /></div>
        <img onClick={backArrow} className="back-arrow" src={BlackArrow} alt="" />
      
      <div className="login-container">
        <div className="get-in-touch">
          <div className="getintouch-text">Get in touch</div>
          <div className="contact-info-text">Contact <br /> Information</div>
          <p>27,Alara Street <br /> Yaba 100012 <br /> Lagos State</p>
          <p>Call Us : 07067981819</p>
          <p>we are open from Monday-Friday <br /> 08:00am - 05:00pm</p>
          <div className="share-on">Share on</div>
          <div className="social-media socialmedia-img">
            <span>
              <img src={Instagram} alt="" />
              <img src={Twitter} alt="" />
              <img src={Facebook} alt="" />
              <img src={Linkedin} alt="" />
            </span>
          </div>
        </div>
        <div className="questions-assistance">
            <div className="question-text">Questions or need assistance? <br />Let us know  about it!</div>
            <Questionnaire />
        </div>
      </div>
    </div>
  );
};

export default Login;
