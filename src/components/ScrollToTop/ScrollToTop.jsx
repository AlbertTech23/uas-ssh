import React from "react";
import "./ScrollToTop.scss";
import scrolltotop from "../../assets/scrolltotop.svg";

const ScrollToTop = () => {
  const top = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="">
      <button onClick={top} className="topBtn">
        <img src={scrolltotop} />
      </button>
    </div>
  );
};

export default ScrollToTop;
