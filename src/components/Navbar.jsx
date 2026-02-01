import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import "./CSS/Navbar.css";
import "./CSS/Dropdown.css";

export default function Navbar() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleMenuItemClick = () => {
    // Close the menu when a menu item is clicked
    setMenuVisible(false);
  };

  return (
    <div className="navbar_container">
      <div className="logo">
        <NavLink to="/">
          <img alt="logo" src="./CD_logo.svg" className="logo" />
        </NavLink>
      </div>

      <div className="nav_items_container">
        {/* Hamburger Menu Icon */}
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className={`bar ${menuVisible ? "change" : ""}`} />
          <div className={`bar ${menuVisible ? "change" : ""}`} />
          <div className={`bar ${menuVisible ? "change" : ""}`} />
        </div>

        {/* Navigation Links */}
        <ul className={`nav-list ${menuVisible ? "show" : ""}`}>
          <li onClick={handleMenuItemClick}>
            <div className="nav-link">
              <NavLink to="/about">About</NavLink>
              <div className="dropdown-menu">
                <ul className="drop-ul">
                  <li>
                    <HashLink to="about/#our_project">Our Project</HashLink>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li onClick={handleMenuItemClick}>
            <div className="nav-link">
              <NavLink to="/pricing">Pricing</NavLink>
            </div>
          </li>

          <li onClick={handleMenuItemClick}>
            <NavLink to="/contact">Contact</NavLink>
          </li>

          {/* Public pages - now always visible */}
          <li onClick={handleMenuItemClick}>
            <NavLink to="/search">Search</NavLink>
          </li>

          <li onClick={handleMenuItemClick}>
            <NavLink to="/collection">Collection</NavLink>
          </li>

          {/* Login/Signup - disabled */}
          <li onClick={handleMenuItemClick} className="login-signup-disabled">
            <span style={{ color: "gray", cursor: "not-allowed" }}>
              Login/Signup *
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

