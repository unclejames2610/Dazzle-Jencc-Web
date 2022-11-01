import React from "react";
import Navbar from "./Navbar/Navbar";
import Herosection from "./Herosection/Herosection";
import HomeAbout from "./HomeAbout/HomeAbout";
import HomeCatalogue from "./HomeCatalogue/HomeCatalogue";
import HomeTestimonials from "./HomeTestimonials/HomeTestimonials";
import HomeContactUs from "./HomeContactUs/HomeContactUs";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Herosection />
      <HomeAbout />
      <HomeCatalogue />
      <HomeTestimonials />
      <HomeContactUs />
      <Footer />
    </>
  );
};

export default Home;
