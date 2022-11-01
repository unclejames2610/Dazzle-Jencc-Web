import React from "react";
import { Link } from "react-router-dom";
import picture1 from "../../media/picture1.jpg";
import picture5 from "../../media/picture5.jpg";
import picture7 from "../../media/picture7.jpeg";
import "./HomeCatalogue.css";

function HomeCatalogue() {
  return (
    <section className="home-catalogue">
      <div className="home-catalogue-heading">
        <h2>SEE SOME OF OUR INTERIOR DESIGN WORK</h2>
      </div>
      <div className="home-catalogue-container">
        <div className="catalogue-card">
          <Link to="/">
            <img
              src={picture1}
              alt="Modern Living Room Design"
              loading="lazy"
            />
            <p>Living Room Designs</p>
          </Link>
        </div>
        <div className="catalogue-card">
          <Link to="/" classname="catalogue-link">
            <img src={picture5} alt="Modern Kitchen Design" loading="lazy" />
            <p>Kitchen Designs</p>
          </Link>
        </div>
        <div className="catalogue-card">
          <Link to="/" classname="catalogue-link">
            <img
              src={picture7}
              alt="Modern Living Dining Room Design"
              loading="lazy"
            />
            <p>Dining Room Designs</p>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeCatalogue;
