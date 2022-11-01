import React from "react";
import no_image from "../../media/no_image.jpg";
import TestimonialSlider from "./TestimonialSlider";
import "./HomeTestimonials.css";

const HomeTestimonials = () => {
  const slides = [
    {
      id: 1,
      pic: no_image,
      sender: "Johnny Doe",
      text: '"One Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
    },
    {
      id: 2,
      pic: no_image,
      sender: "Jane Doe",
      text: '"Two Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
    },
    {
      id: 3,
      pic: no_image,
      sender: "John Doe",
      text: '" Three Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
    },
    {
      id: 4,
      pic: no_image,
      sender: "Janet Doe",
      text: '" Four Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
    },
  ];
  return (
    <section className="home-testimonials">
      <div className="home-testimonials-heading">
        <h2>WHAT OUR CLIENTS SAY</h2>
      </div>
      <div className="home-testimonials-testimonial">
        <TestimonialSlider slides={slides} />
      </div>
    </section>
  );
};

export default HomeTestimonials;
