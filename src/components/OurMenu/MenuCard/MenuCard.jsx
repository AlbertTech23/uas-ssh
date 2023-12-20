import React from "react";
import "./MenuCard.scss";
import { useNavigate } from "react-router-dom";

function MenuCard(props) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };
  const navigate = useNavigate();

  return (
    <div className="flex-container">
      <div className="card card-bordered rounded-lg xl:my-8 my-2 mx-2 mrelative">
        <div className="flex items-end justify-center card-image relative overflow-hidden rounded-lg">
          <img
            src={props.image}
            className="menu-image object-cover object-center"
            alt={props.name}
          />

          <button
            className="buttonOurMenu absolute flex items-center justify-center md:mb-4 mb-2"
            onClick={() => {
              navigate(`${props.routing}`);
              scrollToTop();
            }}
          >
            {props.name}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;
