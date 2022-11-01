import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../media/logo.png";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import bars from "../../media/three_bars.svg";
import x from "../../media/x.svg";
const NavContact = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <>
      <nav className="navigation">
        <Link to="/" className="brand-name">
          <img src={logo} className="logo" alt="Dazzle Jencc Logo" />
        </Link>
        {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#myNav"
            aria-controls="myNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
        <div
          className="toggle-button"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <img src={bars} />
        </div>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <li>
              <Link to="/" className="navbar-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="navbar-link">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/catalogue" className="navbar-link">
                Catalogue
              </Link>
            </li>
            {/* <li >
                <Link to="/testimonials" className="navbar-link">
                  Testimonials
                </Link>
              </li> */}
            <li>
              <Link to="/contact-us" className="navbar-link active">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavContact;
