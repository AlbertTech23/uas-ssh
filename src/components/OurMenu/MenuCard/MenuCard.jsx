
import React from "react";
import "./MenuCard.scss";

function MenuCard(props) {
  return (
    <div className="flex-container">
      <div className="card card-bordered rounded-lg mb-4 relative">
        <div className="flex items-end justify-center card-image relative overflow-hidden rounded-lg">
          <img
            src={props.image}
            className="menu-image object-cover object-center"
            alt={props.name}
          />
          <button className="buttonMenu absolute flex items-center justify-center mb-4">
            {props.name}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;

