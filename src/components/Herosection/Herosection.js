import React from "react";
import "./Herosection.css";
import ImageSlider from "./ImageSlider";
import picture1 from "../../media/picture1.jpg";
import picture2 from "../../media/picture2.jpg";
import picture3 from "../../media/picture3.jpeg";
import picture4 from "../../media/picture4.jpg";
import picture5 from "../../media/picture5.jpg";
import picture6 from "../../media/picture6.jpg";
import picture7 from "../../media/picture7.jpeg";

const Herosection = () => {
  const slides = [
    { id: 1, src: picture1, alt: "Living Room 1" },
    { id: 2, src: picture2, alt: "Living Room 2" },
    { id: 3, src: picture3, alt: "Living Room 3" },
    { id: 4, src: picture4, alt: "Living Room 4" },
    { id: 5, src: picture5, alt: "Kitchen 1" },
    { id: 6, src: picture6, alt: "Kitchen 2" },
    { id: 7, src: picture7, alt: "Dining 1" },
  ];

  // const containerStyles = {
  //   width: "100%",
  //   height: "500px",
  //   margin: "0 auto",
  // };

  return (
    // <div className="slider">
    //   <ImageSlider slides={slides} />
    //   {/* <h1>Dazzle Jencc Homes and Accessories</h1>
    //   <p>Transforming homes into our clients' dream visions</p> */}
    // </div>

    <div className="slider">
      <ImageSlider slides={slides} />
    </div>
  );
};

export default Herosection;
