import React, { useState, useEffect } from "react";
import upIcon from "../../assets/up-arrow.svg"
import "./upButton.css"

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const isVisible = currentScrollY > 0;
    setIsVisible(isVisible);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={handleScrollToTop}
      className={`scroll-to-top-button ${isVisible ? "visible" : ""}`}
    >
        <img src={upIcon} alt="Subir" />
    </button>
  );
};

export {ScrollToTopButton};
