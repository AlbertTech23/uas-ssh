import React from "react";
import "./HeaderMaster.scss";

const HeaderMaster = ({ imgSrc, subheading, heading, paragraph }) => {
  return (
    <div className="relative w-full">
      <img
        src={imgSrc}
        className="w-full filter brightness-[30%]"
        alt="Header Image"
      />
      <div className="heroText text-center absolute transform -translate-y-1/2 left-5 right-5 top-1/2">
        <h1 id="masterSubheading">{subheading}</h1>
        <h1 id="masterHeading">{heading}</h1>
        <p id="masterP" className="mt-5">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default HeaderMaster;
