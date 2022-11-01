import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.css";
import leftArrow from "../../media/left.png";
import rightArrow from "../../media/right.png";
// import dot from "../../media/dot.png";

const ImageSlider = ({ slides }) => {
  // const settings = {
  //   infinite: true,
  //   dots: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   lazyLoad: true,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   arrows: true,
  // };
  const [currentIndex, setCurrentIndex] = useState(0);
  const delay = 2500;
  const timeoutRef = useRef(null);

  // const sliderStyles = {
  //   height: "100%",
  //   position: "relative",
  // };
  const slideStyles = {
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].src})`,
    transition: "ease 1000ms",
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrentIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  // const leftArrowStyles = {
  //   position: "absolute",
  //   top: "50%",
  //   left: "15px",
  //   color: "#fff",
  //   zIndex: 1,
  //   cursor: "pointer",
  // };

  // const rightArrowStyles = {
  //   position: "absolute",
  //   top: "50%",
  //   right: "15px",
  //   color: "#fff",
  //   zIndex: 1,
  //   cursor: "pointer",
  // };

  // const dotsContainerStyles = {
  //   display: "flex",
  //   justifyContent: "center",
  // };

  // const dotStyles = {
  //   margin: "0 3px",
  //   cursor: "pointer",
  //   height: "5px",
  // };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  return (
    // <>
    //   <div className="imgslider">
    //     <Slider {...settings}>
    //       {slides.map((item) => (
    //         <div key={item.id}>
    //           <img src={item.src} alt={item.alt} />
    //         </div>
    //       ))}
    //     </Slider>
    //   </div>
    // </>

    <div className="sliderStyles">
      <div className="text">
        <h1>DAZZLE JENCC HOMES AND ACCESSORIES</h1>
        <p>
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
          ipsum
        </p>
      </div>
      <div className="leftArrowStyles">
        <img
          src={leftArrow}
          alt="left arrow"
          onClick={goToPrevious}
          className="arrow"
        />
      </div>
      <div className="rightArrowStyles">
        <img
          src={rightArrow}
          alt="right arrow"
          onClick={goToNext}
          className="arrow"
        />
      </div>
      <div style={slideStyles}></div>
      <div className="dotsContainerStyles">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`dotStyles${
              currentIndex === slideIndex ? " active" : ""
            }`}
          >
            {/* <img src={dot} alt="dots" onClick={() => goToSlide(slideIndex)} /> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
