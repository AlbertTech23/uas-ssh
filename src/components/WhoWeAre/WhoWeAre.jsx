import React, { useState } from "react";
import "./WhoWeAre.scss";
import whoweare from "./assets/whoweare.png";
import batikline from "../../assets/batik-line2.svg";
import brand1 from "./assets/brand1.svg";
import brand2 from "./assets/brand2.svg";
import brand3 from "./assets/brand3.svg";
import hoverbrand1 from "./assets/hoverbrand1.svg";
import hoverbrand2 from "./assets/hoverbrand2.svg";
import hoverbrand3 from "./assets/hoverbrand3.svg";

const WhoWeAre = () => {
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
    <div className="my-16 flex flex-col items-center justify-center">
      <h1 className="whoHeading">Who We Are</h1>
      <img className="batikImg" src={batikline} />
      <p className="whoP my-10 text-center">
        Embark on a journey into Sumatran Sizzle House, where we weave the
        tapestry of culinary artistry and sophistication. Rooted in Sumatran
        traditions, we meticulously curate an opulent experience. From our
        carefully crafted menu to the luxurious ambiance, we invite you to savor
        the epitome of Sumatran elegance. Sumatran Sizzle House is more than a
        dining destination; it's a celebration of refined opulence, where every
        detail reflects our commitment to an extraordinary culinary experience.
      </p>
      <img className="mb-16" src={whoweare} />
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

export default WhoWeAre;
