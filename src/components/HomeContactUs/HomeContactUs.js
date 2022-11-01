import React from "react";
import "./HomeContactUs.css";
import { Link } from "react-router-dom";

function HomeContactUs() {
  return (
    <section className="home-contact-us">
      <div className="btn-box">
        <Link to="/contact-us">
          <button className="home-contact-us-btn">CONTACT US</button>
        </Link>
      </div>
    </section>
  );
}

export default HomeContactUs;
