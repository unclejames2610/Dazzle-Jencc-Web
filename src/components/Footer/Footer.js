import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import ig_icon from "../../media/ig_icon_2.svg";
import twitter_icon from "../../media/twit-icon.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <ul>
            <li>
              <Link to="/#" className="links">
                TERMS OF USE
              </Link>
            </li>
            <li>
              <Link to="/#">PRIVACY</Link>
            </li>
          </ul>
        </div>
        <div className="footer-socials">
          <ul>
            <li>
              <Link to="/#">
                <div className="socials-image-container">
                  <img
                    src={ig_icon}
                    alt="Insta Icon"
                    className="socials-svg-icon"
                  />
                </div>
              </Link>
            </li>
            <li>
              <Link to="/#">
                <div className="socials-image-container">
                  <img
                    src={twitter_icon}
                    alt="Twitter Icon"
                    className="socials-svg-icon"
                  />
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-copyright">
          <p> © 2022 Dazzle Jencc Homes and Accessories</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
