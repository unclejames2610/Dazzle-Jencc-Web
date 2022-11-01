import React, { useState } from "react";
import leftArrow from "../../media/left.png";
import rightArrow from "../../media/right.png";
import "./TestimonialSlider.css";

const TestimonialSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  return (
    <div className="slider-styles">
      <div className="left-arrow">
        <img
          src={leftArrow}
          alt="left arrow"
          onClick={goToPrevious}
          className="arrow"
        />
      </div>

      <div className="testimonial-image">
        <img src={slides[currentIndex].pic} alt="display-picture" />
        <p>{slides[currentIndex].sender}</p>
      </div>

      <div className="testimonial-message">
        <p>{slides[currentIndex].text}</p>
      </div>
      {/* <div className="testimonial-sender">
        
      </div> */}
      <div className="right-arrow">
        <img
          src={rightArrow}
          alt="right arrow"
          onClick={goToNext}
          className="arrow"
        />
      </div>
    </div>
  );
};

export default TestimonialSlider;
