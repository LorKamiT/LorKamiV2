import React, { useState, useEffect } from "react";
import { MdDownloading } from "react-icons/md";
import { useInView } from "react-intersection-observer";
import ImageExpanded from "./ImageExpanded";
import { MdClose } from "react-icons/md";
import videoData from "./videos.json";

const ImageCard = ({ image, images, index, darkMode }) => {
  useEffect(() => {
  }, [darkMode]);
  const [forceUpdate, setForceUpdate] = useState(0);
  useEffect(() => {
    setForceUpdate(forceUpdate + 1);
  }, [darkMode]);

  const [loaded, setLoaded] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [expanded, setExpanded] = useState(false);

  const handleImageClick = () => {
    const video = videoData.videos.find(v => v.id === image.name);
    if (video) {
      setExpanded({ type: "video", url: video.url });
    } else {
      setExpanded({ type: "image" });
    }
  };

  const handleClose = () => {
    setExpanded(false);
  };

  return (
    <div className={`image-card ${darkMode ? "dark" : ""}`} ref={ref}>
      {!loaded && (
        <div className="loading-icon">
          <MdDownloading size={48} />
        </div>
      )}
      {inView && (
        <img
          src={image.src}
          alt={image.name}
          onLoad={() => setLoaded(true)}
          className={loaded ? "loaded" : "loading"}
          onClick={handleImageClick}
        />
      )}
      {expanded && expanded.type === "image" && (
        <ImageExpanded
          image={image}
          images={images}
          currentImageIndex={index}
          onClose={handleClose}
        />
      )}
      {expanded && expanded.type === "video" && (
        <div className="video-expanded-container">
          <div className="video-expanded">
            <iframe
              width="100%"
              height="100%"
              src={expanded.url}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube video player"
            />
            <div className="close-button" onClick={handleClose}>
              {/* <MdClose size={44} /> */}
            </div>
          </div>
          <div className="overlay" onClick={handleClose} />
          <div className="overlay2" onClick={handleClose} />
          <div className="overlay3" onClick={handleClose} />
        </div>
      )}
      <div className={`tags ${darkMode ? "dark" : ""}`}>
        {image.tags.map((tag, index) => (
          <span key={index} className={`tag ${darkMode ? "dark" : ""}`}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
