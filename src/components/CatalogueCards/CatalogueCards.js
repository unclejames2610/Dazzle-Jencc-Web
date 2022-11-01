import React from "react";
import { Link } from "react-router-dom";
import picture1 from "../../media/picture1.jpg";
import picture5 from "../../media/picture5.jpg";
import picture3 from "../../media/picture3.jpeg";
import picture2 from "../../media/picture2.jpg";
import picture4 from "../../media/picture4.jpg";
import picture7 from "../../media/picture7.jpeg";
import "./CatalogueCards.css";

const CatalogueCards = () => {
  return (
    <section className="catalogue-cards">
      <div className="home-catalogue-heading">
        <h2>EXPLORE OUR INTERIOR DESIGN PORTFOLIO</h2>
      </div>
      <div className="main-catalogue-container">
        <div className="main-catalogue-card">
          <Link to="/catalogue">
            <img
              src={picture1}
              alt="Modern Living Room Design"
              loading="lazy"
            />
            <p>Living Room Designs</p>
          </Link>
        </div>
        <div className="main-catalogue-card">
          <Link to="/catalogue" classname="catalogue-link">
            <img src={picture5} alt="Modern Kitchen Design" loading="lazy" />
            <p>Kitchen Designs</p>
          </Link>
        </div>
        <div className="main-catalogue-card">
          <Link to="/catalogue" classname="catalogue-link">
            <img
              src={picture7}
              alt="Modern Living Dining Room Design"
              loading="lazy"
            />
            <p>Dining Room Designs</p>
          </Link>
        </div>
        <div className="main-catalogue-card">
          <Link to="/catalogue" classname="catalogue-link">
            <img
              src={picture2}
              alt="Modern Living Dining Room Design"
              loading="lazy"
            />
            <p>Classical Designs</p>
          </Link>
        </div>
        <div className="main-catalogue-card">
          <Link to="/catalogue" classname="catalogue-link">
            <img
              src={picture3}
              alt="Modern Living Dining Room Design"
              loading="lazy"
            />
            <p>Modern Designs</p>
          </Link>
        </div>
        <div className="main-catalogue-card">
          <Link to="/catalogue" classname="catalogue-link">
            <img
              src={picture4}
              alt="Modern Living Dining Room Design"
              loading="lazy"
            />
            <p>Contemporary Designs</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CatalogueCards;
