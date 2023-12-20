import React, { useState, useEffect } from "react";
import "./ScrollToTop.scss";
import scrolltotop from "../../assets/scrolltotop.svg";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsVisible(scrollY > 1500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`topBtn ${isVisible ? "visible" : ""}`}>
      <button onClick={scrollToTop}>
        <img src={scrolltotop} alt="Scroll to Top" />
      </button>
    </div>
  );
};

export default ScrollToTop;
