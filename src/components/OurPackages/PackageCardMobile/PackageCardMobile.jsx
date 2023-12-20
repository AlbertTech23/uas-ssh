import React, { useState } from "react";
import "./PackageCardMobile.scss";
import packageA from "../assets/packageA.png";
import packageB from "../assets/packageB.png";
import packageC from "../assets/packageC.png";
import packageD from "../assets/packageD.png";
import closeHover from "../assets/close.svg";
import dropdown from "../../../assets/dropdown.svg";

function PackageCardMobile(props) {
  const [isShown, setIsShown] = useState(false);
  const [isAppetizerOpen, setAppetizerOpen] = useState(false);
  const [isMainCourseOpen, setMainCourseOpen] = useState(false);
  const [isDessertsOpen, setDessertsOpen] = useState(false);
  const [isDrinksOpen, setDrinksOpen] = useState(false);

  const PackageName = [
    {
      id: 1,
      name: "A",
      img: packageA,
      appA1: "3x",
      appN1: "Pempek Kapal Selam",
      appA2: "3x",
      appN2: "Lenggang",
      appA3: "2x",
      appN3: "Risoles",
      mainA1: "2x",
      mainN1: "Rendang",
      mainA2: "2x",
      mainN2: "Gourmet Patin Fish Delicacy",
      mainA3: "3x",
      mainN3: "Kojo",
      desA1: "2x",
      desN1: "Red Bean Elegance",
      desA2: "2x",
      desN2: "Lumpang",
      desA3: "3x",
      desN3: "Kojo",
      drinkA1: "3x",
      drinkN1: "Passion Fruit Elixir",
      drinkA2: "2x",
      drinkN2: "Aia Aka",
      drinkA3: "3x",
      drinkN3: "Opulent Lychee-Infused Tea",
    },
    {
      id: 2,
      name: "B",
      img: packageB,
      appA1: "3x",
      appN1: "Crispy Garden Delights",
      appA2: "2x",
      appN2: "Tempting Tapioca Morsels",
      appA3: "2x",
      appN3: "Burgo",
      mainA1: "2x",
      mainN1: "Soto Padang",
      mainA2: "2x",
      mainN2: "Prime Beef Rib Infusion",
      mainA3: "2x",
      mainN3: "Na Tinombur",
      desA1: "2x",
      desN1: "Creamy Durian Delicacy",
      desA2: "2x",
      desN2: "Maksuba",
      desA3: "3x",
      desN3: "Pinyaram",
      drinkA1: "2x",
      drinkN1: "Exquisite Pandan Infusion",
      drinkA2: "2x",
      drinkN2: "Velvety Avocado Elixir",
      drinkA3: "3x",
      drinkN3: "Elixir of Secang Tranquility",
    },
    {
      id: 3,
      name: "C",
      img: packageC,
      appA1: "3x",
      appN1: "Stuffed Tofu Sophistication",
      appA2: "3x",
      appN2: "Batiah",
      appA3: "3x",
      appN3: "Lamang Tapai",
      mainA1: "2x",
      mainN1: "Medanese Duck Vermicelli",
      mainA2: "2x",
      mainN2: "Luxury in Sour-spiced Fish",
      mainA3: "3x",
      mainN3: "Cipera",
      desA1: "2x",
      desN1: "Ampiang Dadiah",
      desA2: "3x",
      desN2: "Lamang",
      desA3: "3x",
      desN3: "Suri",
      drinkA1: "3x",
      drinkN1: "Royal Medley of Juices",
      drinkA2: "2x",
      drinkN2: "Corn Euphoria",
      drinkA3: "3x",
      drinkN3: "Opulent Lychee-Infused Tea",
    },
    {
      id: 4,
      name: "D",
      img: packageD,
      appA1: "2x",
      appN1: "Spicy Beef Sensation",
      appA2: "3x",
      appN2: "Lumpia",
      appA3: "3x",
      appN3: "Luxurious Tapioca Delicacies",
      mainA1: "2x",
      mainN1: "Fine Vermicelli Curry",
      mainA2: "3x",
      mainN2: "Naniura",
      mainA3: "2x",
      mainN3: "Artisanal Chicken Dish",
      desA1: "2x",
      desN1: "Decadent Durian Temptation",
      desA2: "3x",
      desN2: "Bika Ambon",
      desA3: "3x",
      desN3: "Gandus",
      drinkA1: "2x",
      drinkN1: "Frothy Avocado Delight",
      drinkA2: "2x",
      drinkN2: "Exquisite Sweet Tea Infusion",
      drinkA3: "3x",
      drinkN3: "Golden Egg-Infused Elegance",
    },
  ];

  return (
    <div className="mobileCar carousel w-[507px] h-[302px] rounded-lg">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src={PackageName[0].img}
          className="cardImage brightness-down w-full h-full object-cover rounded-[10px]"
        />
        <h1 className="mobileLetter absolute" onClick={() => setIsShown(true)}>
          {PackageName[0].name}
        </h1>
        <div
          id="mobilePack"
          className={`cardHover absolute xl:w-[507px] xl:h-[302px] lg:w-[400px] lg:h-[234px] md:w-[330px] md:h-[196px] rounded-[10px] ${
            isShown ? "visible" : "hidden"
          }`}
        >
          <button onClick={() => setIsShown(false)}>
            <img
              className="closeButton mt-[9px] ml-[11px] md:h-[18px] md:w-[18px] h-[26px] w-[26px]"
              src={closeHover}
              alt="Close"
            />
          </button>
          <p className="mobileHeading">{PackageName[0].name}</p>
          <p className="mobileSubheading">PACKAGE</p>
          <div className="mobileButts mt-4">
            <div className="dropPack">
              <button
                onClick={() => setAppetizerOpen((prev) => !prev)}
                className="mobileButt"
              >
                Appetizers
                <img src={dropdown} className="dropdownButt" />
              </button>
              {isAppetizerOpen && (
                <div className="dropContent absolute w-[219px] h-[66px] mt-1">
                  <p>
                    <strong>{PackageName[0].appA1}</strong>{" "}
                    {PackageName[0].appN1}
                  </p>
                  <p>
                    <strong>{PackageName[0].appA2}</strong>{" "}
                    {PackageName[0].appN2}
                  </p>
                  <p>
                    <strong>{PackageName[0].appA3}</strong>{" "}
                    {PackageName[0].appN3}
                  </p>
                </div>
              )}
            </div>
            <div className="dropPack">
              <button
                onClick={() => setMainCourseOpen((prev) => !prev)}
                className="mobileButt"
              >
                Main Course
                <img src={dropdown} className="dropdownButt" />
              </button>
              {isMainCourseOpen && (
                <div className="dropContent absolute w-[219px] h-[66px] mt-1">
                  <p>
                    <strong>{PackageName[0].mainA1}</strong>{" "}
                    {PackageName[0].mainN1}
                  </p>
                  <p>
                    <strong>{PackageName[0].mainA2}</strong>{" "}
                    {PackageName[0].mainN2}
                  </p>
                  <p>
                    <strong>{PackageName[0].mainA3}</strong>{" "}
                    {PackageName[0].mainN3}
                  </p>
                </div>
              )}
            </div>
            <div className="dropPack">
              <button
                onClick={() => setDessertsOpen((prev) => !prev)}
                className="mobileButt"
              >
                Desserts
                <img src={dropdown} className="dropdownButt" />
              </button>
              {isDessertsOpen && (
                <div className="dropContent absolute w-[219px] h-[66px] mt-1">
                  <p>
                    <strong>{PackageName[0].desA1}</strong>{" "}
                    {PackageName[0].desN1}
                  </p>
                  <p>
                    <strong>{PackageName[0].desA2}</strong>{" "}
                    {PackageName[0].desN2}
                  </p>
                  <p>
                    <strong>{PackageName[0].desA3}</strong>{" "}
                    {PackageName[0].desN3}
                  </p>
                </div>
              )}
            </div>
            <div className="dropPack">
              <button
                onClick={() => setDrinksOpen((prev) => !prev)}
                className="mobileButt"
              >
                Drinks
                <img src={dropdown} className="dropdownButt" />
              </button>
              {isDrinksOpen && (
                <div className="dropContent absolute w-[219px] h-[66px] mt-1">
                  <p>
                    <strong>{PackageName[0].drinkA1}</strong>{" "}
                    {PackageName[0].drinkN1}
                  </p>
                  <p>
                    <strong>{PackageName[0].drinkA2}</strong>{" "}
                    {PackageName[0].drinkN2}
                  </p>
                  <p>
                    <strong>{PackageName[0].drinkA3}</strong>{" "}
                    {PackageName[0].drinkN3}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/4 left-10 right-2 top-1/2">
          <a
            href="#slide3"
            className={`slideBtn btn-circle ${
              isShown ? "btn-primary" : "text-white"
            }`}
          >
            ❮
          </a>
          <a
            href="#slide1"
            className={`slideBtn btn-circle ${
              isShown ? "btn-primary" : "text-white"
            }`}
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src={PackageName[1].img}
          className="cardImage brightness-down w-full h-full object-cover rounded-[10px]"
        />
        <h1 className="mobileLetter absolute" onClick={() => setIsShown(true)}>
          {PackageName[1].name}
        </h1>
        <div
          id="mobilePack"
          className={`cardHover absolute xl:w-[507px] xl:h-[302px] lg:w-[400px] lg:h-[234px] md:w-[330px] md:h-[196px] rounded-[10px] ${
            isShown ? "visible" : "hidden"
          }`}
        >
          <button onClick={() => setIsShown(false)}>
            <img
              className="closeButton mt-[9px] ml-[11px] md:h-[18px] md:w-[18px] h-[26px] w-[26px]"
              src={closeHover}
              alt="Close"
            />
          </button>
          <p className="mobileHeading">{PackageName[1].name}</p>
          <p className="mobileSubheading">PACKAGE</p>
          <div className="mobileButts mt-4">
            <div className="dropPack">
              <button
                onClick={() => setAppetizerOpen((prev) => !prev)}
                className="mobileButt"
              >
                Appetizers
                <img src={dropdown} className="dropdownButt" />
              </button>
              {isAppetizerOpen && (
                <div className="dropContent absolute w-[219px] h-[66px] mt-1">
                  <p>
                    <strong>{PackageName[1].appA1}</strong>{" "}
                    {PackageName[1].appN1}
                  </p>
                  <p>
                    <strong>{PackageName[1].appA2}</strong>{" "}
                    {PackageName[1].appN2}
                  </p>
                  <p>
                    <strong>{PackageName[1].appA3}</strong>{" "}
                    {PackageName[1].appN3}
                  </p>
                </div>
              )}
            </div>
            <div className="dropPack">
              <button
                onClick={() => setMainCourseOpen((prev) => !prev)}
                className="mobileButt"
              >
                Main Course
                <img src={dropdown} className="dropdownButt" />
              </button>
              {isMainCourseOpen && (
                <div className="dropContent absolute w-[219px] h-[66px] mt-1">
                  <p>
                    <strong>{PackageName[1].mainA1}</strong>{" "}
                    {PackageName[1].mainN1}
                  </p>
                  <p>
                    <strong>{PackageName[1].mainA2}</strong>{" "}
                    {PackageName[1].mainN2}
                  </p>
                  <p>
                    <strong>{PackageName[1].mainA3}</strong>{" "}
                    {PackageName[1].mainN3}
                  </p>
                </div>
              )}
            </div>
            <div className="dropPack">
              <button
                onClick={() => setDessertsOpen((prev) => !prev)}
                className="mobileButt"
              >
                Desserts
                <img src={dropdown} className="dropdownButt" />
              </button>
              {isDessertsOpen && (
                <div className="dropContent absolute w-[219px] h-[66px] mt-1">
                  <p>
                    <strong>{PackageName[1].desA1}</strong>{" "}
                    {PackageName[1].desN1}
                  </p>
                  <p>
                    <strong>{PackageName[1].desA2}</strong>{" "}
                    {PackageName[1].desN2}
                  </p>
                  <p>
                    <strong>{PackageName[1].desA3}</strong>{" "}
                    {PackageName[1].desN3}
                  </p>
                </div>
              )}
            </div>
            <div className="dropPack">
              <button
                onClick={() => setDrinksOpen((prev) => !prev)}
                className="mobileButt"
              >
                Drinks
                <img src={dropdown} className="dropdownButt" />
              </button>
              {isDrinksOpen && (
                <div className="dropContent absolute w-[219px] h-[66px] mt-1">
                  <p>
                    <strong>{PackageName[1].drinkA1}</strong>{" "}
                    {PackageName[1].drinkN1}
                  </p>
                  <p>
                    <strong>{PackageName[1].drinkA2}</strong>{" "}
                    {PackageName[1].drinkN2}
                  </p>
                  <p>
                    <strong>{PackageName[1].drinkA3}</strong>{" "}
                    {PackageName[1].drinkN3}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/4 left-10 right-2 top-1/2">
          <a
            href="#slide3"
            className={`slideBtn btn-circle ${
              isShown ? "btn-primary" : "text-white"
            }`}
          >
            ❮
          </a>
          <a
            href="#slide1"
            className={`slideBtn btn-circle ${
              isShown ? "btn-primary" : "text-white"
            }`}
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src={PackageName[2].img}
          className="cardImage brightness-down w-full h-full object-cover rounded-[10px]"
        />
        <h1 className="mobileLetter absolute" onClick={() => setIsShown(true)}>
          {PackageName[2].name}
        </h1>
        <div
          id="mobilePack"
          className={`cardHover absolute xl:w-[507px] xl:h-[302px] lg:w-[400px] lg:h-[234px] md:w-[330px] md:h-[196px] rounded-[10px] ${
            isShown ? "visible" : "hidden"
          }`}
        >
          <button onClick={() => setIsShown(false)}>
            <img
              className="closeButton mt-[9px] ml-[11px] md:h-[18px] md:w-[18px] h-[26px] w-[26px]"
              src={closeHover}
              alt="Close"
            />
          </button>
          <p className="mobileHeading">{PackageName[2].name}</p>
          <p className="mobileSubheading">PACKAGE</p>
          <div className="mobileButts mt-4">
            <div className="dropPack">
              <button
                onClick={() => setAppetizerOpen((prev) => !prev)}
                className="mobileButt"
              >
                Appetizers
                <img src={dropdown} className="dropdownButt" />
              </button>
              {isAppetizerOpen && (
                <div className="dropContent absolute w-[219px] h-[66px] mt-1">
                  <p>
                    <strong>{PackageName[2].appA1}</strong>{" "}
                    {PackageName[2].appN1}
                  </p>
                  <p>
                    <strong>{PackageName[2].appA2}</strong>{" "}
                    {PackageName[2].appN2}
                  </p>
                  <p>
                    <strong>{PackageName[2].appA3}</strong>{" "}
                    {PackageName[2].appN3}
                  </p>
                </div>
              )}
            </div>
            <div className="dropPack">
              <button
                onClick={() => setMainCourseOpen((prev) => !prev)}
                className="mobileButt"
              >
                Main Course
                <img src={dropdown} className="dropdownButt" />
              </button>
              {isMainCourseOpen && (
                <div className="dropContent absolute w-[219px] h-[66px] mt-1">
                  <p>
                    <strong>{PackageName[2].mainA1}</strong>{" "}
                    {PackageName[2].mainN1}
                  </p>
                  <p>
                    <strong>{PackageName[2].mainA2}</strong>{" "}
                    {PackageName[2].mainN2}
                  </p>
                  <p>
                    <strong>{PackageName[2].mainA3}</strong>{" "}
                    {PackageName[2].mainN3}
                  </p>
                </div>
              )}
            </div>
            <div className="dropPack">
              <button
                onClick={() => setDessertsOpen((prev) => !prev)}
                className="mobileButt"
              >
                Desserts
                <img src={dropdown} className="dropdownButt" />
              </button>
              {isDessertsOpen && (
                <div className="dropContent absolute w-[219px] h-[66px] mt-1">
                  <p>
                    <strong>{PackageName[2].desA1}</strong>{" "}
                    {PackageName[2].desN1}
                  </p>
                  <p>
                    <strong>{PackageName[2].desA2}</strong>{" "}
                    {PackageName[2].desN2}
                  </p>
                  <p>
                    <strong>{PackageName[2].desA3}</strong>{" "}
                    {PackageName[2].desN3}
                  </p>
                </div>
              )}
            </div>
            <div className="dropPack">
              <button
                onClick={() => setDrinksOpen((prev) => !prev)}
                className="mobileButt"
              >
                Drinks
                <img src={dropdown} className="dropdownButt" />
              </button>
              {isDrinksOpen && (
                <div className="dropContent absolute w-[219px] h-[66px] mt-1">
                  <p>
                    <strong>{PackageName[2].drinkA1}</strong>{" "}
                    {PackageName[2].drinkN1}
                  </p>
                  <p>
                    <strong>{PackageName[2].drinkA2}</strong>{" "}
                    {PackageName[2].drinkN2}
                  </p>
                  <p>
                    <strong>{PackageName[2].drinkA3}</strong>{" "}
                    {PackageName[2].drinkN3}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/4 left-10 right-2 top-1/2">
          <a
            href="#slide3"
            className={`slideBtn btn-circle ${
              isShown ? "btn-primary" : "text-white"
            }`}
          >
            ❮
          </a>
          <a
            href="#slide1"
            className={`slideBtn btn-circle ${
              isShown ? "btn-primary" : "text-white"
            }`}
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src={PackageName[3].img}
          className="cardImage brightness-down w-full h-full object-cover rounded-[10px]"
        />
        <h1 className="mobileLetter absolute" onClick={() => setIsShown(true)}>
          {PackageName[3].name}
        </h1>
        <div
          id="mobilePack"
          className={`cardHover absolute xl:w-[507px] xl:h-[302px] lg:w-[400px] lg:h-[234px] md:w-[330px] md:h-[196px] rounded-[10px] ${
            isShown ? "visible" : "hidden"
          }`}
        >
          <button onClick={() => setIsShown(false)}>
            <img
              className="closeButton mt-[9px] ml-[11px] md:h-[18px] md:w-[18px] h-[26px] w-[26px]"
              src={closeHover}
              alt="Close"
            />
          </button>
          <p className="mobileHeading">{PackageName[3].name}</p>
          <p className="mobileSubheading">PACKAGE</p>
          <div className="mobileButts mt-4">
            <div className="dropPack">
              <button
                onClick={() => setAppetizerOpen((prev) => !prev)}
                className="mobileButt"
              >
                Appetizers
                <img src={dropdown} className="dropdownButt" />
              </button>
              {isAppetizerOpen && (
                <div className="dropContent absolute w-[219px] h-[66px] mt-1">
                  <p>
                    <strong>{PackageName[3].appA1}</strong>{" "}
                    {PackageName[3].appN1}
                  </p>
                  <p>
                    <strong>{PackageName[3].appA2}</strong>{" "}
                    {PackageName[3].appN2}
                  </p>
                  <p>
                    <strong>{PackageName[3].appA3}</strong>{" "}
                    {PackageName[3].appN3}
                  </p>
                </div>
              )}
            </div>
            <div className="dropPack">
              <button
                onClick={() => setMainCourseOpen((prev) => !prev)}
                className="mobileButt"
              >
                Main Course
                <img src={dropdown} className="dropdownButt" />
              </button>
              {isMainCourseOpen && (
                <div className="dropContent absolute w-[219px] h-[66px] mt-1">
                  <p>
                    <strong>{PackageName[3].mainA1}</strong>{" "}
                    {PackageName[3].mainN1}
                  </p>
                  <p>
                    <strong>{PackageName[3].mainA2}</strong>{" "}
                    {PackageName[3].mainN2}
                  </p>
                  <p>
                    <strong>{PackageName[3].mainA3}</strong>{" "}
                    {PackageName[3].mainN3}
                  </p>
                </div>
              )}
            </div>
            <div className="dropPack">
              <button
                onClick={() => setDessertsOpen((prev) => !prev)}
                className="mobileButt"
              >
                Desserts
                <img src={dropdown} className="dropdownButt" />
              </button>
              {isDessertsOpen && (
                <div className="dropContent absolute w-[219px] h-[66px] mt-1">
                  <p>
                    <strong>{PackageName[3].desA1}</strong>{" "}
                    {PackageName[3].desN1}
                  </p>
                  <p>
                    <strong>{PackageName[3].desA2}</strong>{" "}
                    {PackageName[3].desN2}
                  </p>
                  <p>
                    <strong>{PackageName[3].desA3}</strong>{" "}
                    {PackageName[3].desN3}
                  </p>
                </div>
              )}
            </div>
            <div className="dropPack">
              <button
                onClick={() => setDrinksOpen((prev) => !prev)}
                className="mobileButt"
              >
                Drinks
                <img src={dropdown} className="dropdownButt" />
              </button>
              {isDrinksOpen && (
                <div className="dropContent absolute w-[219px] h-[66px] mt-1">
                  <p>
                    <strong>{PackageName[3].drinkA1}</strong>{" "}
                    {PackageName[3].drinkN1}
                  </p>
                  <p>
                    <strong>{PackageName[3].drinkA2}</strong>{" "}
                    {PackageName[3].drinkN2}
                  </p>
                  <p>
                    <strong>{PackageName[3].drinkA3}</strong>{" "}
                    {PackageName[3].drinkN3}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/4 left-10 right-2 top-1/2">
          <a
            href="#slide3"
            className={`slideBtn btn-circle ${
              isShown ? "btn-primary" : "text-white"
            }`}
          >
            ❮
          </a>
          <a
            href="#slide1"
            className={`slideBtn btn-circle ${
              isShown ? "btn-primary" : "text-white"
            }`}
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}

export default PackageCardMobile;
