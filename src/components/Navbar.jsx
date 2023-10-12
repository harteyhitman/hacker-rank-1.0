import React from "react";
import Button from "./Button";
import HamburgerNavbar from "./HamburgerNavbar";

const Navbar = () => {
  


  return (
    <div className="navbar-container">
      <h2 className="getlinked-h2">
        get<span>linked</span>
      </h2>
      <div className="hamburger-navbar">
            <HamburgerNavbar />
        </div>
      <div className="nav-links">
        <ul>
        <li><a href="#timeline ">Timeline</a></li>
        <li><a href="# ">Overview</a></li>
        <li><a href="#faq-container ">FAQs</a></li>
        <li><a href="#contact-us ">Contact</a></li>
        </ul>
        <Button className="primary" label="Register" />
      </div>
    </div>
  );
};

export default Navbar;
