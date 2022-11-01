import "./App.css";

import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Catalogue from "./components/Catalogue";
import ContactUs from "./components/ContactUs";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/testimonials" element={<Testimonial />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
