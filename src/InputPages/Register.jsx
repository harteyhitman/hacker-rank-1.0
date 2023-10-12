import React from "react";
import Button from "../components/Button";
import OfficeGuy from "../Assets/office-guy.png";
import Movement1 from "../Assets/movement-female.png";
import Movement2 from "../Assets/movement-male.png";
import SignIn from "../components/SignUpComponent";

const Register = () => {
  return (
    <div className="sign-up-page">
      <div className="navbar-container register-navbar-container">
        <h2 className="getlinked-h2">
          get<span>linked</span>
        </h2>

        <div className="nav-links">
          <ul>
            <li>
              <a href="#timeline ">Timeline</a>
            </li>
            <li>
              <a href="# ">Overview</a>
            </li>
            <li>
              <a href="#faq-container ">FAQs</a>
            </li>
            <li>
              <a href="#contact-us ">Contact</a>
            </li>
          </ul>
          <Button className="sign-up-btn" label="Register" />
        </div>
      </div>

      <div className="sign-up-container">
        <img src={OfficeGuy} alt="" />
        <div className="register-sign-up">
          <div className="register-text">Register</div>
          <div className="part-of-movement">
            Be part of this movement!
            <div className="movement-imgs">
              <img src={Movement1} alt="" />
              <img src={Movement2} alt="" />
            </div>
          </div>
          <div className="sign-up-header">CREATE YOUR ACCOUNT</div>
          <SignIn />
        </div>
      </div>
    </div>
  );
};

export default Register;
