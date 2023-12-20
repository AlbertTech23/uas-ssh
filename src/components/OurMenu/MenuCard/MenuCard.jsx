import React from "react";
import "./MenuCard.scss";

function MenuCard(props) {
  return (
    <div className="flex-container">
      <div className="card card-bordered rounded-lg xl:my-8 my-2 mx-2 mrelative">
        <div className="flex items-end justify-center card-image relative overflow-hidden rounded-lg">
          <img
            src={props.image}
            className="menu-image object-cover object-center"
            alt={props.name}
          />

          <button className="buttonOurMenu absolute flex items-center justify-center md:mb-4 mb-2">

            {props.name}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;
