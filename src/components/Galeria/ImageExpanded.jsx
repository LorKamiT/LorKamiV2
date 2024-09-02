import React, { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ImageExpanded = ({ image, onClose, images, currentImageIndex }) => {
  const [loaded, setLoaded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(currentImageIndex);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleImageLoaded = () => {
    setLoaded(true);
  };

  const handleClose = () => {
    onClose();
  };

  const handleNextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
  };

  const handlePrevImage = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
  };

  return (
    <div className="image-expanded-container">
      <div className="image-expanded">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].name}
          onLoad={handleImageLoaded}
          className={loaded ? "loaded" : "loading"}
        />
        <div className="close-button" onClick={handleClose}>
          {/* <MdClose size={44} /> */}
        </div>
        <div className="nav-button prev-button" onClick={handlePrevImage}>
          <FaArrowLeft size={44} />
        </div>
        <div className="nav-button next-button" onClick={handleNextImage}>
          <FaArrowRight size={44} />
        </div>
      </div>
      <div className="overlay" onClick={handleClose} />
      <div className="overlay2" onClick={handleClose} />
      <div className="overlay3" onClick={handleClose} />
    </div>
  );
};

export default ImageExpanded;