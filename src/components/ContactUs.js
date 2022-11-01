import React from "react";
import ContactSection from "./ContactSection/ContactSection";
import Footer from "./Footer/Footer";
import NavContact from "./Navbar/NavContact";

const ContactUs = () => {
  return (
    <>
      <NavContact />
      <ContactSection />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default ContactUs;
