import React from "react";
import MenuSection from "./MenuSection";
import MenuSection2 from "./MenuSection2";
import garis from "./Images/Garis.svg";
import "./MenuTemplate.scss";
import { useNavigate } from "react-router-dom";

const MenuTemplate = ({ teaserText, menuDataSets, menuImageSets }) => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  return (
    <div className="menuBackground">
      <div className="menuTemplate xl:p-0 lg:px-16">
        <div className="menuHeader flex flex-wrap flex-col items-center mb-10">
          <span className="pt-10 pb-5">{teaserText}</span>
          <img src={garis} alt="Garis" />
        </div>
        {menuDataSets.map((menuData, index) => (
          <div key={index}>
            {index % 2 === 0 ? (
              <MenuSection
                menuData={menuData}
                menuImage={menuImageSets[index]}
              />
            ) : (
              <MenuSection2
                menuData={menuData}
                menuImage={menuImageSets[index]}
              />
            )}
          </div>
        ))}
        <div className="menuCategories flex justify-center items-center mt-5 pb-10">
          <button
            onClick={() => {
              navigate("/appetizers");
              scrollToTop();
            }}
            className="xl:px-14 lg:px-8 md:px-8 px-3"
          >
            Appetizers
          </button>
          <button
            onClick={() => {
              navigate("/maincourse");
              scrollToTop();
            }}
            className="xl:px-14 lg:px-8 md:px-8 px-3"
          >
            Main Course
          </button>
          <button
            onClick={() => {
              navigate("/desserts");
              scrollToTop();
            }}
            className="xl:px-14 lg:px-8 md:px-8 px-3"
          >
            Desserts
          </button>
          <button
            onClick={() => {
              navigate("/drinks");
              scrollToTop();
            }}
            className="xl:px-14 lg:px-8 md:px-8 px-3"
          >
            Drinks
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuTemplate;
