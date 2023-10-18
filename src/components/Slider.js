import React, { useState } from "react";

import "./slider.css";

function Slider() {
  const images = [
    "https://www.sliderrevolution.com/wp-content/uploads/2023/06/sneaker-woocommerce-slider.gif",

    "https://assets.materialup.com/uploads/cfc52b70-8f0d-410d-8d6d-c7e05956cce0/preview.gif",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStB67-K1QgbSft0n78ygaLge7z9SNI6IyNxA&usqp=CAU",

    // 'https://www.sliderrevolution.com/wp-content/uploads/2023/03/wordpress-cover-flow-gallery.gif',
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const goToNextSlide = () => {
    setCurrentImage((prevImage) =>
      prevImage === images.length - 1 ? 0 : prevImage + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1
    );
  };

  return (
    <div className="slider-container">
      <button className="slider-button" onClick={goToPrevSlide}>
        Previous
      </button>

      <img
        className="slider-image"
        src={images[currentImage]}
        alt={`Slide ${currentImage + 1}`}
      />

      <button className="slider-button" onClick={goToNextSlide}>
        Next
      </button>
    </div>
  );
}

export default Slider;
