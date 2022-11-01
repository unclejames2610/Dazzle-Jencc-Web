import React from "react";
import { Link } from "react-router-dom";
import logo from "../../media/logo.jpg";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
function NavTestimonial() {
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src={logo} className="logo" alt="Dazzle Jencc Logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#myNav"
            aria-controls="myNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="myNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav justify-content-end">
              <li className="nav-item">
                <Link to="/" className="nav-link ">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about-us" className="nav-link">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/catalogue" className="nav-link  ">
                  Catalogue
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/testimonials" className="nav-link active">
                  Testimonials
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact-us" className="nav-link ">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavTestimonial;
