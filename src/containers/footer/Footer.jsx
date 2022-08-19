import React from 'react';
import jacLogo from '../../assets/logo.png';
import './footer.css';

const Footer = () => (
  <div className="jac__footer section__padding">
    <div className="jac__footer-heading">
      <h1 className="gradient__text">Easy to Book your Slot for vechile  Services <br /> <br />just one click</h1>
    </div>

    <div className="jac__footer-btn">
      <p>Book Your Slot Rapidly</p>
    </div>

    <div className="jac__footer-links">
      <div className="jac__footer-links_logo">
        <img src={jacLogo} alt="jain Auto Corp." />
        <p>partners with Yakuza electronic, <br /> All Rights Reserved to partnership</p>
      </div>
      <div className="jac__footer-links_div">
        <h4>Touch Up</h4>
        <p>jain Auto</p>
        <p>Stores</p>
        <p>e-vehicle</p>
        {/* <p>Contact</p> */}
      </div>
      <div className="jac__footer-links_div">
        <h4>Company</h4>
        <a href=" "> <p>Terms and Conditions</p></a>
        <a href=" "> <p>Privacy Policy</p></a>
        <a href=" "> <p>contact</p></a>
      </div>
      <div className="jac__footer-links_div">
        <h4>Touch on Social Media</h4>
      </div>
    </div>

    <div className="jac__footer-copyright">
      <p>Novarsistech pvt Ltd. @2022 All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
