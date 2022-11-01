import React from "react";
import { Link } from "react-router-dom";
import no_image from "../../media/no_image.jpg";
import "./HomeAbout.css";

function HomeAbout() {
  return (
    <section className="home-about">
      <div className="home-about-heading">
        <h2>ABOUT DAZZLE JENCC HOMES AND ACCESSORIES</h2>
      </div>
      <div className="home-about-container">
        <div className="home-about-image-container">
          <img
            src={no_image}
            alt="Lady Nkechi Udeala,Founder and CEO of Dazzle Jencc Homes and Accessories"
          />
        </div>
        <div className="home-about-message">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum."
          </p>
          <p>
            <Link to="/about-us" className="link-home-about">
              Learn more about Dazzle Jennc Homes and Accessories❯
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default HomeAbout;
