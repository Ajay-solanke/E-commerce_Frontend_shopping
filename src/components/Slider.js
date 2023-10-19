import React, { useState, useEffect, useMemo } from "react";
import "./slider.css";

function Slider() {
  const images = useMemo(() => [
    "https://imagescdn.planetfashion.in/img/app/product/7/794038-9320264.jpg",
    "https://imagescdn.planetfashion.in/img/app/product/7/794038-9320263.jpg",
    "https://imagescdn.planetfashion.in/img/app/product/7/757476-8641416.jpg",
    "https://imagescdn.planetfashion.in/img/app/product/7/757476-8641421.jpg",
    "https://imagescdn.planetfashion.in/img/app/product/7/749208-8459394.jpg",
    "https://imagescdn.planetfashion.in/img/app/product/7/749208-8459397.jpg",
    "https://imagescdn.planetfashion.in/img/app/product/7/741040-8306782.jpg",
    "https://imagescdn.planetfashion.in/img/app/product/7/741040-8306785.jpg",
    "https://imagescdn.planetfashion.in/img/app/product/7/749208-8459394.jpg",
    "https://imagescdn.planetfashion.in/img/app/product/7/749208-8459397.jpg",
    "https://imagescdn.planetfashion.in/img/app/product/8/868208-10301368.jpg",
    // Add more image URLs here
  ], []);

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const goToNextSlide = () => {
      
      const nextImageIndex = (currentImage + 1) % images.length;

     
      setCurrentImage(nextImageIndex === 0 ? 0 : nextImageIndex);
    };

    
    const interval = setInterval(goToNextSlide, 3000); 
    return () => {
      clearInterval(interval);
    };
  }, [currentImage, images]);

  const sliderContainerStyle = {
    height: "600px",
    width: "100%",
    display: "flex",
    overflow: "hidden",
  };

  const sliderWrapperStyle = {
    display: "flex",
    transform: `translateX(-${currentImage * (100 / images.length)}%)`,
    transition: "transform 0.5s",
    width: `${images.length * 100}%`,
  };

  const sliderImageStyle = {
    flex: `0 0 ${100 / images.length}%`,
    height: "100%",
  };

  return (
    <div className="slider-main-container" style={sliderContainerStyle}>
      <div className="slider-wrapper" style={sliderWrapperStyle}>
        
        {images.map((image, index) => (
          <img
            key={index}
            className="slider-image"
            src={image}
            alt={`Slide ${index + 1}`}
            style={sliderImageStyle}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
