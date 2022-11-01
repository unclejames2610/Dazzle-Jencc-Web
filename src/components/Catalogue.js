import React from "react";
import CatalogueCards from "./CatalogueCards/CatalogueCards";
import Footer from "./Footer/Footer";
import HomeContactUs from "./HomeContactUs/HomeContactUs";
import NavCatalogue from "./Navbar/NavCatalogue";

const Catalogue = () => {
  return (
    <>
      <NavCatalogue />
      <CatalogueCards />
      <HomeContactUs />
      <Footer />
    </>
  );
};

export default Catalogue;
