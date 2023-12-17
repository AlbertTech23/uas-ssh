import React from 'react';
import HeaderMaster from '../HeaderMaster/HeaderMaster';
import "./ReservationHeader.scss";
import reservationheader from "./assets/reservationheader.png";

const ReservationHeader = () => {
  const ReservationInfo = {
    image: reservationheader,
    subheading: "- Reservation -",
    heading: "BOOK YOUR TABLE",
    paragraph: "Secure Your Culinary Experience. Book your table at Sumatran Sizzle House and indulge in the art of fine dining..",
  };

  return (
    <div>
      <HeaderMaster 
        imgSrc={ReservationInfo.image}
        subheading={ReservationInfo.subheading}
        heading={ReservationInfo.heading}
        paragraph={ReservationInfo.paragraph}
      />
    </div>
  );
};

export default ReservationHeader;
