import React, { useState } from "react";
import "./AboutComponent.scss";
import thumbnail from "./assets/about-us.png";
import strip from "./assets/about-us-strip.png";
import brand1 from "./assets/brand1.svg";
import brand2 from "./assets/brand2.svg";
import brand3 from "./assets/brand3.svg";
import hoverbrand1 from "./assets/hoverbrand1.svg";
import hoverbrand2 from "./assets/hoverbrand2.svg";
import hoverbrand3 from "./assets/hoverbrand3.svg";
import "./fonts/Forum-Regular.ttf";

const AboutComponent = () => {
  const [isBrandsHovered1, setIsBrandsHovered1] = useState(false);
  const [isBrandsHovered2, setIsBrandsHovered2] = useState(false);
  const [isBrandsHovered3, setIsBrandsHovered3] = useState(false);

  const handleBrandsMouseEnter1 = () => {
    setIsBrandsHovered1(true);
  };

  const handleBrandsMouseLeave1 = () => {
    setIsBrandsHovered1(false);
  };

  const handleBrandsMouseEnter2 = () => {
    setIsBrandsHovered2(true);
  };

  const handleBrandsMouseLeave2 = () => {
    setIsBrandsHovered2(false);
  };

  const handleBrandsMouseEnter3 = () => {
    setIsBrandsHovered3(true);
  };

  const handleBrandsMouseLeave3 = () => {
    setIsBrandsHovered3(false);
  };

  return (
    <div>
      {/* <div className="container mx-auto mt-12 mb-12 px-20 grid grid-cols-2 gap-4"> */}
      <div className="container mx-auto mt-12 mb-12 px-20 grid lg:grid-cols-2 md:grid-row-2 sm:grid-row-2 gap-4">
        <div className="flex items-center justify-center">
          <img src={thumbnail} className="h-50" alt="About Us Thumbnail" />
        </div>
        <div className=" flex-container mt-12">
          <div className="aboutUsHeader flex items-center">
            <img src={strip} className="h-20" alt="About Us Strip" />
            <span id="heading" className="strip-height m-4">
              ABOUT US
            </span>
          </div>
          <p id="desc">
            Welcome to Sumatran Sizzle House, where opulence meets authenticity.
            Immerse yourself in the epitome of Sumatran culinary grandeur.
            Indulge in a world of sophistication as we meticulously blend
            exquisite flavors and elevate dining to an art form. Our culinary
            haven beckons connoisseurs to savor the elegance of Sumatra, where
            each dish is a masterpiece, and every moment is an affair with
            luxury. At Sumatran Sizzle House, we transcend mere dining; we craft
            an extraordinary epicurean experience for those who seek the
            pinnacle of refinement.
          </p>
          <button className="btnStyle mt-5">READ MORE</button>
        </div>
      </div>
      <div id="brands" className="flex flex-wrap container gap-4 mt-5 mb-5">
        <img
          id="brand1"
          className={`${isBrandsHovered1 ? "brands-hovered" : ""}`}
          onMouseEnter={handleBrandsMouseEnter1}
          onMouseLeave={handleBrandsMouseLeave1}
          src={isBrandsHovered1 ? hoverbrand1 : brand1}
          alt="GoFood"
        />
        <img
          id="brand2"
          className={`${isBrandsHovered2 ? "brands-hovered" : ""}`}
          onMouseEnter={handleBrandsMouseEnter2}
          onMouseLeave={handleBrandsMouseLeave2}
          src={isBrandsHovered2 ? hoverbrand2 : brand2}
          alt="Indofood"
        />
        <img
          id="brand3"
          className={`${isBrandsHovered3 ? "brands-hovered" : ""}`}
          onMouseEnter={handleBrandsMouseEnter3}
          onMouseLeave={handleBrandsMouseLeave3}
          src={isBrandsHovered3 ? hoverbrand3 : brand3}
          alt="ShopeeFood"
        />
      </div>
    </div>
  );
};

export default AboutComponent;
