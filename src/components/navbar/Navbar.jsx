import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import Logo from '../../assets/logo.png';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="jac__navbar">
      <div className="jac__navbar-links">
        <div className="jac__navbar-links_logo ">
          <img src={Logo} alt="Jain Auto" />
        </div>
        <div className="jac__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wjac">Why Jain Auto?</a></p>
          <p><a href="#possibility">Open to DealerShip</a></p>
          <p><a href="#features">Contact</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
      </div>
      <div className="jac__navbar-sign">
        <button type="button">Book a ride</button>
      </div>
      <div className="jac__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#e5f747" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#97968d" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="jac__navbar-menu_container scale-up-center">
          <div className="jac__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wjac">Why Jain Auto?</a></p>
            <p><a href="#possibility">DealerShip</a></p>
            <p><a href="#features">touch with us</a></p>
            <p><a href="#blog">Library</a></p>
          </div>
          <div className="jac__navbar-menu_container-links-sign">
            <button type="button">Book a ride</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
