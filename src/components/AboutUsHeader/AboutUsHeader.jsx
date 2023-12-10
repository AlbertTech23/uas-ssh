import React from 'react';
import HeaderMaster from '../HeaderMaster/HeaderMaster';
import "./AboutUsHeader.scss";
import aboutusheader from "./assets/aboutusheader.png";

const AboutUsHeader = () => {
  const AboutUsInfo = {
    image: aboutusheader,
    subheading: "- About Us -",
    heading: "BEHIND THE DISHES",
    paragraph: "Unveiling Culinary Artistry. A glimpse into the meticulous craftsmanship behind every dish at Sumatran Sizzle House.",
  };

  return (
    <div>
      <HeaderMaster 
        imgSrc={AboutUsInfo.image}
        subheading={AboutUsInfo.subheading}
        heading={AboutUsInfo.heading}
        paragraph={AboutUsInfo.paragraph}
      />
    </div>
  );
};

export default AboutUsHeader;
