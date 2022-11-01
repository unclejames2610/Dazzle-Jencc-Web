import React from "react";
import AboutStory from "./AboutStory/AboutStory";
import Footer from "./Footer/Footer";
import HomeAbout from "./HomeAbout/HomeAbout";
import HomeContactUs from "./HomeContactUs/HomeContactUs";
import NavAbout from "./Navbar/NavAbout";

const AboutUs = () => {
  return (
    <>
      <NavAbout />
      <AboutStory />
      <HomeContactUs />
      <Footer />
    </>
  );
};

export default AboutUs;
